#!/usr/bin/env python3
"""Check whether Bangumi-related requests set suspicious cookies.

Usage:
    python scripts/check_bangumi_cookies.py
    python scripts/check_bangumi_cookies.py --limit 3 --timeout 15

What it does:
1. Scans `src/components/sections/Bangumi.tsx` for external domains.
2. Extracts Bangumi IDs from `src/lib/bangumi-config.ts`.
3. Requests a subset of `https://api.bgm.tv/v0/subjects/{id}`.
4. Probes image URLs returned by the API.
5. Prints any `Set-Cookie` headers and highlights suspicious cookie names.

This does not emulate a full browser, but it is enough to verify whether the
Bangumi section itself is the origin of cookies such as:
`t_gid`, `t_pt_gid`, `taboola_session_id`.
"""

from __future__ import annotations

import argparse
import json
import re
import sys
from collections import defaultdict
from pathlib import Path
from typing import Iterable
from urllib.error import HTTPError, URLError
from urllib.parse import urlparse
from urllib.request import Request, urlopen


REPO_ROOT = Path(__file__).resolve().parent.parent
BANGUMI_TSX = REPO_ROOT / "src/components/sections/Bangumi.tsx"
CONFIG_TS = REPO_ROOT / "src/lib/bangumi-config.ts"

SUSPICIOUS_COOKIE_NAMES = {
    "t_gid",
    "t_pt_gid",
    "taboola_session_id",
}


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Verify whether Bangumi-related endpoints set suspicious cookies."
    )
    parser.add_argument(
        "--limit",
        type=int,
        default=5,
        help="How many Bangumi subjects to probe from the config file. Default: 5",
    )
    parser.add_argument(
        "--timeout",
        type=int,
        default=12,
        help="HTTP timeout in seconds. Default: 12",
    )
    return parser.parse_args()


def read_text(path: Path) -> str:
    return path.read_text(encoding="utf-8", errors="replace")


def extract_external_hosts_from_source(source: str) -> list[str]:
    hosts = set()
    for match in re.findall(r"https?://[^\s'\"`)>]+", source):
        host = urlparse(match).netloc
        if host:
            hosts.add(host)
    return sorted(hosts)


def extract_bangumi_ids(config_text: str) -> list[int]:
    ids = {int(match) for match in re.findall(r"\bid\s*:\s*(\d+)\b", config_text)}
    return sorted(ids)


def make_request(url: str, timeout: int) -> tuple[int | None, list[str], bytes]:
    request = Request(
        url,
        headers={
            "User-Agent": "Mozilla/5.0 (compatible; bangumi-cookie-check/1.0)",
            "Accept": "application/json,text/html,*/*",
        },
    )
    try:
        with urlopen(request, timeout=timeout) as response:
            status = getattr(response, "status", response.getcode())
            cookies = response.headers.get_all("Set-Cookie") or []
            body = response.read()
            return status, cookies, body
    except HTTPError as exc:
        cookies = exc.headers.get_all("Set-Cookie") or []
        body = exc.read()
        return exc.code, cookies, body
    except URLError as exc:
        print(f"[error] Request failed: {url} -> {exc}", file=sys.stderr)
        return None, [], b""


def parse_cookie_names(set_cookie_headers: Iterable[str]) -> list[str]:
    names: list[str] = []
    for header in set_cookie_headers:
        first_part = header.split(";", 1)[0].strip()
        if "=" in first_part:
            names.append(first_part.split("=", 1)[0].strip())
    return names


def print_cookie_report(label: str, url: str, status: int | None, cookies: list[str]) -> list[str]:
    names = parse_cookie_names(cookies)
    host = urlparse(url).netloc
    print(f"\n[{label}] {url}")
    print(f"  host: {host}")
    print(f"  status: {status}")
    if not cookies:
        print("  set-cookie: none")
        return []
    print("  set-cookie:")
    for header in cookies:
        print(f"    - {header}")
    hits = [name for name in names if name in SUSPICIOUS_COOKIE_NAMES]
    if hits:
        print(f"  suspicious-cookie-hit: {', '.join(sorted(set(hits)))}")
    else:
        print("  suspicious-cookie-hit: none")
    return hits


def normalize_image_urls(payload: dict) -> list[str]:
    urls = []
    images = payload.get("images") or {}
    for value in images.values():
        if isinstance(value, str) and value.startswith("http"):
            urls.append(value)
    return sorted(set(urls))


def main() -> int:
    args = parse_args()

    if not BANGUMI_TSX.exists() or not CONFIG_TS.exists():
        print("[fatal] Expected Bangumi source files were not found.", file=sys.stderr)
        return 2

    bangumi_source = read_text(BANGUMI_TSX)
    config_text = read_text(CONFIG_TS)

    source_hosts = extract_external_hosts_from_source(bangumi_source)
    bangumi_ids = extract_bangumi_ids(config_text)

    print("=== Bangumi Source Scan ===")
    print(f"Bangumi component: {BANGUMI_TSX}")
    print(f"Bangumi config: {CONFIG_TS}")
    print(f"External hosts found in Bangumi source: {source_hosts or ['(none)']}")
    print(f"Configured Bangumi IDs: {len(bangumi_ids)} total")

    if not bangumi_ids:
        print("[fatal] No Bangumi IDs found in config.", file=sys.stderr)
        return 2

    ids_to_probe = bangumi_ids[: max(1, args.limit)]
    print(f"IDs to probe: {ids_to_probe}")

    suspicious_hits_by_host: dict[str, set[str]] = defaultdict(set)
    image_urls: set[str] = set()

    print("\n=== Bangumi API Probe ===")
    for subject_id in ids_to_probe:
        url = f"https://api.bgm.tv/v0/subjects/{subject_id}"
        status, cookies, body = make_request(url, timeout=args.timeout)
        hits = print_cookie_report(f"subject:{subject_id}", url, status, cookies)
        if hits:
            suspicious_hits_by_host[urlparse(url).netloc].update(hits)
        if body:
            try:
                payload = json.loads(body.decode("utf-8"))
            except Exception as exc:  # noqa: BLE001
                print(f"  json-parse-error: {exc}")
                continue
            for image_url in normalize_image_urls(payload):
                image_urls.add(image_url)

    print("\n=== Bangumi Image Host Probe ===")
    if not image_urls:
        print("No image URLs collected from Bangumi API.")
    else:
        sampled_images = sorted(image_urls)[: min(6, len(image_urls))]
        for image_url in sampled_images:
            status, cookies, _ = make_request(image_url, timeout=args.timeout)
            hits = print_cookie_report("image", image_url, status, cookies)
            if hits:
                suspicious_hits_by_host[urlparse(image_url).netloc].update(hits)

    print("\n=== Verdict ===")
    if suspicious_hits_by_host:
        print("Suspicious cookies were observed on Bangumi-related hosts:")
        for host, names in sorted(suspicious_hits_by_host.items()):
            print(f"  - {host}: {', '.join(sorted(names))}")
        return 1

    print("No suspicious cookies were observed from the tested Bangumi API or image hosts.")
    print("If browser warnings still mention t_gid / t_pt_gid / taboola_session_id,")
    print("the source is likely another third-party script, an extension, or an upstream proxy/CDN.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
