(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/BaiduAnalytics.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
const BaiduAnalytics = ()=>{
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BaiduAnalytics.useEffect": ()=>{
            // 确保只在客户端执行
            if ("TURBOPACK compile-time truthy", 1) {
                // 检查是否已经加载过百度统计
                if (window._hmt) {
                    return;
                }
                window._hmt = window._hmt || [];
                const hm = document.createElement('script');
                hm.src = 'https://hm.baidu.com/hm.js?b2220316e42d7b63a3c68978f3c89dde';
                hm.async = true;
                const s = document.getElementsByTagName('script')[0];
                if (s && s.parentNode) {
                    s.parentNode.insertBefore(hm, s);
                }
            }
        }
    }["BaiduAnalytics.useEffect"], []);
    return null;
};
_s(BaiduAnalytics, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = BaiduAnalytics;
const __TURBOPACK__default__export__ = BaiduAnalytics;
var _c;
__turbopack_context__.k.register(_c, "BaiduAnalytics");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_components_BaiduAnalytics_tsx_b5090627._.js.map