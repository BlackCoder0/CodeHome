"use client"
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { TextAnimate } from "@/components/magicui/text-animate";
import LoadingCanvas from "@/components/LoadingCanvas";

export default function Home() {
  const [showMain, setShowMain] = useState(false);
  const [loading, setLoading] = useState(true);
  const introRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!loading && !showMain) {
      const handleScroll = (e: WheelEvent) => {
        if (e.deltaY > 0) {
          setShowMain(true);
        }
      };
      window.addEventListener("wheel", handleScroll, { passive: false });
      return () => window.removeEventListener("wheel", handleScroll);
    }
  }, [loading, showMain]);

  return (
    <div>
      {loading && <LoadingCanvas onFinish={() => setLoading(false)} />}
      {!loading && !showMain && (
        <div
          ref={introRef}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/80 animate-fadein"
          style={{ backgroundImage: 'url(/assets/bg_big.png)', backgroundSize: 'cover', backgroundPosition: 'center', transition: 'opacity 1s' }}
        >
          <div className="backdrop-blur-sm bg-black/40 w-full h-full absolute top-0 left-0 -z-10" />
          <TextAnimate
            animation="slideUp"
            by="character"
            as="h1"
            className="text-7xl font-bold text-white mb-4 text-center"
          >
            Codeの家
          </TextAnimate>
          <TextAnimate
            animation="slideUp"
            by="line"
            as="p"
            delay={0.5}
            className="text-3xl text-white text-center max-w-2xl mb-8"
          >
            ciallo~
          </TextAnimate>
          <div className="absolute bottom-10 flex flex-col items-center animate-bounce">
            <svg width="26" height="26" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
            <span className="text-white mt-2">下滑进入</span>
          </div>
        </div>
      )}
      <div className={!loading && showMain ? "opacity-100 transition-opacity duration-700" : "opacity-0 pointer-events-none h-0 overflow-hidden"}>
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
          <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
            <Image
              className="dark:invert"
              src="/next.svg"
              alt="Next.js logo"
              width={180}
              height={38}
              priority
            />
            <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
              <li className="mb-2 tracking-[-.01em]">
                Get started by editing{" "}
                <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
                  src/app/page.tsx
                </code>
                .
              </li>
              <li className="tracking-[-.01em]">
                Save and see your changes instantly.
              </li>
            </ol>
            <div className="flex gap-4 items-center flex-col sm:flex-row">
              <a
                className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
                href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="dark:invert"
                  src="/vercel.svg"
                  alt="Vercel logomark"
                  width={20}
                  height={20}
                />
                Deploy now
              </a>
              <a
                className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
                href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read our docs
              </a>
            </div>
          </main>
          <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="/file.svg"
                alt="File icon"
                width={16}
                height={16}
              />
              Learn
            </a>
            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="/window.svg"
                alt="Window icon"
                width={16}
                height={16}
              />
              Examples
            </a>
            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="/globe.svg"
                alt="Globe icon"
                width={16}
                height={16}
              />
              Go to nextjs.org →
            </a>
          </footer>
        </div>
      </div>
    </div>
  );
}

// 动画样式
// 在 tailwind.config.js 中添加 keyframes: { fadein: { '0%': { opacity: 0 }, '100%': { opacity: 1 } } }, animation: { fadein: 'fadein 1s ease-in' }
