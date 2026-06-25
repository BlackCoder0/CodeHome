module.exports = {

"[project]/src/components/PlanetSystem.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/ri/index.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const ringData = [
    {
        radius: 150,
        icons: [
            {
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaGithub"], {}, void 0, false, {
                    fileName: "[project]/src/components/PlanetSystem.tsx",
                    lineNumber: 10,
                    columnNumber: 15
                }, this),
                link: 'https://github.com/BlackCoder0'
            },
            {
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: "./assets/gitee.svg",
                    alt: "Gitee",
                    style: {
                        width: 36,
                        height: 36
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/PlanetSystem.tsx",
                    lineNumber: 13,
                    columnNumber: 11
                }, this),
                link: 'https://gitee.com/code-liang'
            }
        ]
    },
    {
        radius: 250,
        icons: [
            {
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: "./assets/bilibili.svg",
                    alt: "Bilibili",
                    style: {
                        width: 36,
                        height: 36
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/PlanetSystem.tsx",
                    lineNumber: 28,
                    columnNumber: 11
                }, this),
                link: 'https://space.bilibili.com/335768850'
            },
            {
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaEnvelope"], {}, void 0, false, {
                    fileName: "[project]/src/components/PlanetSystem.tsx",
                    lineNumber: 36,
                    columnNumber: 15
                }, this),
                link: 'copy:2943984952@qq.com'
            },
            {
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: "./assets/lofter.svg",
                    alt: "Lofter",
                    style: {
                        width: 36,
                        height: 36
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/PlanetSystem.tsx",
                    lineNumber: 39,
                    columnNumber: 11
                }, this),
                link: 'https://xinjinjumin4775442.lofter.com'
            }
        ]
    },
    {
        radius: 350,
        icons: [
            {
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RiLinksLine"], {}, void 0, false, {
                    fileName: "[project]/src/components/PlanetSystem.tsx",
                    lineNumber: 52,
                    columnNumber: 15
                }, this),
                link: '#contact'
            },
            {
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaSteam"], {}, void 0, false, {
                    fileName: "[project]/src/components/PlanetSystem.tsx",
                    lineNumber: 53,
                    columnNumber: 15
                }, this),
                link: 'https://steamcommunity.com/profiles/76561199350235965/'
            }
        ]
    }
];
const PlanetSystem = ()=>{
    const [hoveredIcon, setHoveredIcon] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showToast, setShowToast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full h-full pointer-events-none z-10",
        children: [
            ringData.map((ring, ringIndex)=>{
                const iconCount = ring.icons.length;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 border-2 border-white/30 rounded-full",
                            style: {
                                width: `${ring.radius * 2}px`,
                                height: `${ring.radius * 2}px`,
                                top: `calc(50% - ${ring.radius}px)`,
                                left: `calc(50% - ${ring.radius}px)`,
                                pointerEvents: 'none'
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/PlanetSystem.tsx",
                            lineNumber: 70,
                            columnNumber: 13
                        }, this),
                        ring.icons.map((item, iconIndex)=>{
                            const angle = 360 / iconCount * iconIndex;
                            const animationDuration = `${15 + ringIndex * 5}s`;
                            const iconId = `${ringIndex}-${iconIndex}`;
                            const isHovered = hoveredIcon === iconId;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute",
                                style: {
                                    left: '50%',
                                    top: '50%',
                                    width: `${ring.radius * 2}px`,
                                    height: `${ring.radius * 2}px`,
                                    marginLeft: `-${ring.radius}px`,
                                    marginTop: `-${ring.radius}px`,
                                    animation: `rotateRing ${animationDuration} linear infinite`,
                                    animationPlayState: isHovered ? 'paused' : 'running',
                                    transform: `rotate(${angle}deg)`,
                                    animationDelay: `-${angle / 360 * parseFloat(animationDuration)}s`
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: item.link,
                                    target: item.link.startsWith('#') ? '_self' : '_blank',
                                    rel: item.link.startsWith('#') ? undefined : 'noopener noreferrer',
                                    className: "absolute text-white text-3xl flex items-center justify-center",
                                    style: {
                                        left: `${ring.radius - 20}px`,
                                        top: '-20px',
                                        width: '40px',
                                        height: '40px',
                                        transform: `rotate(-${angle}deg) ${isHovered ? 'scale(1.3)' : 'scale(1)'}`,
                                        transition: 'transform 0.2s',
                                        pointerEvents: 'auto'
                                    },
                                    onMouseEnter: ()=>setHoveredIcon(iconId),
                                    onMouseLeave: ()=>setHoveredIcon(null),
                                    onClick: (e)=>{
                                        if (item.link.startsWith('#')) {
                                            e.preventDefault();
                                            const target = document.querySelector(item.link);
                                            if (target) {
                                                target.scrollIntoView({
                                                    behavior: 'smooth'
                                                });
                                            }
                                        } else if (item.link.startsWith('copy:')) {
                                            e.preventDefault();
                                            const email = item.link.replace('copy:', '');
                                            navigator.clipboard.writeText(email).then(()=>{
                                                setShowToast(true);
                                                setTimeout(()=>setShowToast(false), 2000);
                                            });
                                        }
                                    },
                                    children: item.icon
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PlanetSystem.tsx",
                                    lineNumber: 105,
                                    columnNumber: 19
                                }, this)
                            }, iconId, false, {
                                fileName: "[project]/src/components/PlanetSystem.tsx",
                                lineNumber: 89,
                                columnNumber: 17
                            }, this);
                        })
                    ]
                }, ringIndex, true, {
                    fileName: "[project]/src/components/PlanetSystem.tsx",
                    lineNumber: 68,
                    columnNumber: 11
                }, this);
            }),
            showToast && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-500 text-white px-2 py-1 rounded text-xs shadow-lg z-50 animate-fade-in pointer-events-none",
                children: "已复制"
            }, void 0, false, {
                fileName: "[project]/src/components/PlanetSystem.tsx",
                lineNumber: 149,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/PlanetSystem.tsx",
        lineNumber: 63,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = PlanetSystem;
}}),
"[project]/src/lib/three-examples/DeskLamp3D.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.module.js [app-ssr] (ecmascript) <locals>");
'use client';
;
;
;
const DeskLamp3D = ({ className = '', onToggleLight })=>{
    const mountRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const sceneRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [lightOn, setLightOn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!mountRef.current) return;
        const isMobile = window.innerWidth <= 768;
        const scene = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Scene"]();
        const camera = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PerspectiveCamera"](75, mountRef.current.clientWidth / mountRef.current.clientHeight, 0.1, 1000);
        camera.position.set(0, 2.4, 8);
        camera.lookAt(0, 2.15, 0);
        const renderer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["WebGLRenderer"]({
            antialias: true,
            alpha: true
        });
        renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PCFSoftShadowMap"];
        renderer.setClearColor(0x000000, 0);
        mountRef.current.appendChild(renderer.domElement);
        const lampGroup = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Group"]();
        lampGroup.scale.set(1.2, 1.2, 1.2);
        const whiteMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshPhongMaterial"]({
            color: 0xffffff,
            shininess: 100,
            emissive: 0x333333,
            emissiveIntensity: 0.2
        });
        const base = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CylinderGeometry"](0.8, 1.2, 0.3, 16), whiteMaterial);
        base.position.y = 0.08;
        base.castShadow = true;
        base.receiveShadow = true;
        lampGroup.add(base);
        const pole = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CylinderGeometry"](0.1, 0.1, 3, 8), whiteMaterial);
        pole.position.y = 1.8;
        pole.castShadow = true;
        lampGroup.add(pole);
        const joint = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SphereGeometry"](0.15, 16, 16), whiteMaterial);
        joint.position.y = 3.3;
        joint.castShadow = true;
        lampGroup.add(joint);
        const arm = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CylinderGeometry"](0.08, 0.08, 2, 8), whiteMaterial);
        arm.position.set(0.9, 4.25, 0); // 末端中心
        arm.rotation.z = -Math.PI / 4; // -45°
        arm.castShadow = true;
        lampGroup.add(arm);
        // 灯罩斜向下连接在臂末端
        const shade = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConeGeometry"](0.8, 1.2, 32, 1, true), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshPhongMaterial"]({
            color: 0xffffff,
            side: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DoubleSide"],
            shininess: 60,
            emissive: 0x444444,
            emissiveIntensity: 0.3
        }));
        shade.position.set(2.0, 5.0, 0); // 调整到臂末端位置
        shade.rotation.z = Math.PI / 4; // 旋转灯罩方向朝下
        shade.castShadow = true;
        lampGroup.add(shade);
        const bulb = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SphereGeometry"](0.2, 16, 16), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshPhongMaterial"]({
            color: 0xffd700,
            emissive: 0xffaa00,
            emissiveIntensity: 1.2,
            transparent: true,
            opacity: 0.95
        }));
        bulb.position.set(2.0, 4.6, 0);
        bulb.visible = false; // 灯罩遮挡，不显示
        lampGroup.add(bulb);
        const spotLight = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SpotLight"](0xffffff, 5.5, 30, Math.PI / 2.5, 0.35, 1.5);
        spotLight.position.set(2.0, 5.0, 0);
        spotLight.target.position.set(0, 2, 0);
        spotLight.castShadow = true;
        spotLight.shadow.mapSize.width = 2048;
        spotLight.shadow.mapSize.height = 2048;
        spotLight.shadow.camera.near = 0.5;
        spotLight.shadow.camera.far = 40;
        lampGroup.add(spotLight);
        lampGroup.add(spotLight.target);
        const pointLight = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PointLight"](0xffe066, 2.2, 15);
        pointLight.position.set(2.0, 4.6, 0);
        scene.add(pointLight);
        const ambientLight = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AmbientLight"](0x404040, isMobile ? 0.6 : 0.8);
        scene.add(ambientLight);
        const globalLight = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DirectionalLight"](0xffffff, 1.0);
        globalLight.position.set(5, 10, 5);
        globalLight.castShadow = true;
        globalLight.shadow.mapSize.width = 1024;
        globalLight.shadow.mapSize.height = 1024;
        scene.add(globalLight);
        scene.add(lampGroup);
        const animate = ()=>{
            const animationId = requestAnimationFrame(animate);
            const time = Date.now() * 0.001;
            lampGroup.rotation.y = Math.sin(time * 0.5) * 0.1;
            // 柔和光强变化
            if (lightOn) {
                spotLight.intensity = 5.5 + Math.sin(time * 1.5) * 0.3;
                pointLight.intensity = 2.2 + Math.sin(time * 1.2) * 0.2;
            } else {
                spotLight.intensity = 0;
                pointLight.intensity = 0;
            }
            renderer.render(scene, camera);
            if (sceneRef.current) sceneRef.current.animationId = animationId;
        };
        sceneRef.current = {
            scene,
            camera,
            renderer,
            lamp: lampGroup,
            light: spotLight,
            pointLight,
            animationId: 0
        };
        animate();
        const handleResize = ()=>{
            if (!mountRef.current || !sceneRef.current) return;
            const width = mountRef.current.clientWidth;
            const height = mountRef.current.clientHeight;
            sceneRef.current.camera.aspect = width / height;
            sceneRef.current.camera.updateProjectionMatrix();
            sceneRef.current.renderer.setSize(width, height);
        };
        window.addEventListener('resize', handleResize);
        return ()=>{
            window.removeEventListener('resize', handleResize);
            if (sceneRef.current) {
                cancelAnimationFrame(sceneRef.current.animationId);
                sceneRef.current.scene.traverse((object)=>{
                    if (object instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"]) {
                        object.geometry.dispose();
                        if (Array.isArray(object.material)) {
                            object.material.forEach((m)=>m.dispose());
                        } else object.material.dispose();
                    }
                });
                sceneRef.current.renderer.dispose();
                if (mountRef.current && sceneRef.current.renderer.domElement) {
                    mountRef.current.removeChild(sceneRef.current.renderer.domElement);
                }
            }
        };
    }, [
        lightOn
    ]);
    const toggleLight = ()=>{
        setLightOn((prev)=>!prev);
    };
    // 使用useEffect来通知父组件状态变化，避免在渲染期间调用setState
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        onToggleLight?.(lightOn);
    }, [
        lightOn,
        onToggleLight
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: mountRef,
        className: `w-full h-full cursor-pointer ${className}`,
        style: {
            minHeight: '400px'
        },
        onClick: toggleLight,
        title: "点击开关灯"
    }, void 0, false, {
        fileName: "[project]/src/lib/three-examples/DeskLamp3D.tsx",
        lineNumber: 206,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = DeskLamp3D;
}}),
"[project]/舱室关灯.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/舱室关灯.7fdfb966.png");}}),
"[project]/舱室关灯.png.mjs { IMAGE => \"[project]/舱室关灯.png (static in ecmascript)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f_8231$$_5ba4$$_5173$$_706f$$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/舱室关灯.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f_8231$$_5ba4$$_5173$$_706f$$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 1672,
    height: 941,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAgUlEQVR42gUAzQqCMHj35j63fVtzP9ksMTVhRIEgQnjqUIcORU/Qvfe/BKEMMpZLXVR9StPSnUa0GwqCgJBZLvbtcL2/Pt/ffHu6qtU+EqE04xhifbxMy+Pdn2e0kStLvHfee2WccttQd6ZsQIUVQwJcUOAc17vD0KQRizKXhgL+AQ1sD5dYxxvzAAAAAElFTkSuQmCC",
    blurWidth: 8,
    blurHeight: 5
};
}}),
"[project]/舱室开灯.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/舱室开灯.f49c06b9.png");}}),
"[project]/舱室开灯.png.mjs { IMAGE => \"[project]/舱室开灯.png (static in ecmascript)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f_8231$$_5ba4$$_5f00$$_706f$$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/舱室开灯.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f_8231$$_5ba4$$_5f00$$_706f$$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 1672,
    height: 941,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAiElEQVR42gF9AIL/AGdlYF9dWWNiXnt9fZGRj6yqppGPi2JhXgB7enZaWVR8e3eeoKHFxcTKysmYmZl4en0AjYiAY2BaeHZyjI6Ora6uoqOkZWdrUFJUAJ6Wi396cmpoZGRmZ3d5enB0e09VYEFESQBRUE0/Pz5XVlSDhIWNkpdgY2dRU1dISk9veDfuaPP2/QAAAABJRU5ErkJggg==",
    blurWidth: 8,
    blurHeight: 5
};
}}),
"[project]/CODEX升级/about-submarine-room-validation.module.css [app-ssr] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "aboutLabel": "about-submarine-room-validation-module__LVLJKG__aboutLabel",
  "afterPanel": "about-submarine-room-validation-module__LVLJKG__afterPanel",
  "blankPanel": "about-submarine-room-validation-module__LVLJKG__blankPanel",
  "blankPill": "about-submarine-room-validation-module__LVLJKG__blankPill",
  "detailClose": "about-submarine-room-validation-module__LVLJKG__detailClose",
  "detailOverlay": "about-submarine-room-validation-module__LVLJKG__detailOverlay",
  "detailShell": "about-submarine-room-validation-module__LVLJKG__detailShell",
  "floorBoard": "about-submarine-room-validation-module__LVLJKG__floorBoard",
  "floorCard": "about-submarine-room-validation-module__LVLJKG__floorCard",
  "floorCardFrame": "about-submarine-room-validation-module__LVLJKG__floorCardFrame",
  "floorCardImage": "about-submarine-room-validation-module__LVLJKG__floorCardImage",
  "floorCardSelectedSource": "about-submarine-room-validation-module__LVLJKG__floorCardSelectedSource",
  "floorCards": "about-submarine-room-validation-module__LVLJKG__floorCards",
  "floorCardsDimmed": "about-submarine-room-validation-module__LVLJKG__floorCardsDimmed",
  "hullOverlay": "about-submarine-room-validation-module__LVLJKG__hullOverlay",
  "hullShade": "about-submarine-room-validation-module__LVLJKG__hullShade",
  "hullShell": "about-submarine-room-validation-module__LVLJKG__hullShell",
  "lampAnchor": "about-submarine-room-validation-module__LVLJKG__lampAnchor",
  "mobileFloorCard": "about-submarine-room-validation-module__LVLJKG__mobileFloorCard",
  "mobileFloorCardFrame": "about-submarine-room-validation-module__LVLJKG__mobileFloorCardFrame",
  "mobileFloorCards": "about-submarine-room-validation-module__LVLJKG__mobileFloorCards",
  "mobileFloorCardsDimmed": "about-submarine-room-validation-module__LVLJKG__mobileFloorCardsDimmed",
  "mobileFloorCardsTrack": "about-submarine-room-validation-module__LVLJKG__mobileFloorCardsTrack",
  "page": "about-submarine-room-validation-module__LVLJKG__page",
  "planetAnchor": "about-submarine-room-validation-module__LVLJKG__planetAnchor",
  "planetCoreGlow": "about-submarine-room-validation-module__LVLJKG__planetCoreGlow",
  "porthole": "about-submarine-room-validation-module__LVLJKG__porthole",
  "portholeFrame": "about-submarine-room-validation-module__LVLJKG__portholeFrame",
  "portholeGlass": "about-submarine-room-validation-module__LVLJKG__portholeGlass",
  "pulse": "about-submarine-room-validation-module__LVLJKG__pulse",
  "rivet": "about-submarine-room-validation-module__LVLJKG__rivet",
  "roomContent": "about-submarine-room-validation-module__LVLJKG__roomContent",
  "roomLayer": "about-submarine-room-validation-module__LVLJKG__roomLayer",
  "roomLayers": "about-submarine-room-validation-module__LVLJKG__roomLayers",
  "roomMask": "about-submarine-room-validation-module__LVLJKG__roomMask",
  "roomShade": "about-submarine-room-validation-module__LVLJKG__roomShade",
  "roomVeil": "about-submarine-room-validation-module__LVLJKG__roomVeil",
  "scrollTrack": "about-submarine-room-validation-module__LVLJKG__scrollTrack",
  "stage": "about-submarine-room-validation-module__LVLJKG__stage",
  "stageUi": "about-submarine-room-validation-module__LVLJKG__stageUi",
  "statusPill": "about-submarine-room-validation-module__LVLJKG__statusPill",
  "warmGlow": "about-submarine-room-validation-module__LVLJKG__warmGlow",
  "waterCaustics": "about-submarine-room-validation-module__LVLJKG__waterCaustics",
});
}}),
"[project]/CODEX升级/about-submarine-room-validation.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>AboutSubmarineRoomValidation)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconArrowLeft$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconArrowLeft.mjs [app-ssr] (ecmascript) <export default as IconArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconArrowRight$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconArrowRight.mjs [app-ssr] (ecmascript) <export default as IconArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$LayoutGroup$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/LayoutGroup/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlanetSystem$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/PlanetSystem.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$three$2d$examples$2f$DeskLamp3D$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/three-examples/DeskLamp3D.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f_8231$$_5ba4$$_5173$$_706f$$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f_8231$$_5ba4$$_5173$$_706f$$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/舱室关灯.png.mjs { IMAGE => "[project]/舱室关灯.png (static in ecmascript)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f_8231$$_5ba4$$_5f00$$_706f$$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f_8231$$_5ba4$$_5f00$$_706f$$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/舱室开灯.png.mjs { IMAGE => "[project]/舱室开灯.png (static in ecmascript)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$CODEX$_5347$$_7ea7$$2f$about$2d$submarine$2d$room$2d$validation$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/CODEX升级/about-submarine-room-validation.module.css [app-ssr] (css module)");
"use client";
;
;
;
;
;
;
;
;
;
const testimonials = [
    {
        quote: "时间已经过去太久，已经记不清当时的心情了\n当时有一个比较朦胧的想法，在朋友的介绍下认识了[墨间黑沢](https://space.bilibili.com/24271342/dynamic)老师，很快便有了这第一件衣服\n看着脑子里面的想法从模糊到清晰，再到具体，是一种很奇妙的体验。我加入了很多我自己的喜好：白发、蓝瞳、和一点恰到好处的浅浅微笑\n幻象中诞生的少女从纸上走来，很惭愧，我至今没用为她想好一个合适的名字，既然是二次元的“我”，那就以本名 “阵雨” 暂且称呼吧",
        name: "初始之服",
        designation: "阵雨的第一件衣服",
        src: "/assets/oc/oc1.png"
    },
    {
        quote: "旗袍的形象很经典，虽其历史不过区区百年，但其展现的温婉曲线美是近乎无可替代的\n由于其发色瞳色，衣服的形象便也非常自然的确定为蓝白色了，青花瓷的一般的少女也应运而生，微微扎起的头发及垂落的鬓尾更将其含蓄而内敛展现地淋漓尽致\n天青色等烟雨，而我在等你",
        name: "旗袍",
        designation: "青花瓷",
        src: "/assets/oc/oc2.png"
    },
    {
        quote: "其实原本是有死库水的打算，但实在不符合年龄，最后墨间老师画了这种偏水手服风格的泳装\n说真的，我这辈子除游泳课外穿泳装的次数简直屈指可数（大夏天宅空调房不香吗真的是），南方的大火炉实在是太可怕了\n不过阵雨是美少女，美少女是不会被晒黑的（确信）\n相对保守的服饰很好遮住了上身，但空隙间展现的娇小可爱很完美的补足了少女感\n\n※设定上很怕水，刚开始学游泳时很艰难才克服溺水感",
        name: "泳装",
        designation: "正常人谁大夏天去沙滩啊",
        src: "/assets/oc/oc3.png"
    },
    {
        quote: "出于对影视作品里黑客的印象，加上对编程的喜好，便约了这套黑客服设\n高考完后也上了跟计算机相关的专业，虽然学得杂而不精，但看着想法用逻辑变成现实还是很有成就感\n阵雨这套衣服参考了我喜欢的一些黑客形象：宽松而厚的外套、较为凌乱的头发、以及不健康作息带来的黑眼圈\n...还有大腿绑带，大腿绑带是极好的！\n黑客是不愿意受管教和约束的存在，一个关着的门对于黑客来说是一种挑衅，一个锁着的门对黑客来说是一种侮辱。 \n\n这么飒气的女孩子，谁会想到她的算法课是被老师捞过的呢(*^_^*)",
        name: "黑客服",
        designation: "喂喂，验证码发我一下",
        src: "/assets/oc/oc4.png"
    },
    {
        quote: "赛车手是比较远离日常生活的形象，这套服设参考了[赛车服远坂凛](https://www.hpoi.net/hobby/36512)形象，经典的皮克外套及充满速度感的花纹，护目镜、手环等配饰也增添了赛车手的气质，少见的高马尾也是我很喜欢的一点。\n在网站开始页面是墨间老师为其绘制的一幅赠图，超！帅！的！",
        name: "赛车服",
        designation: "昨晚我输给一辆AE86，他用惯性漂移过弯，他的车很快，我只看到他有个豆腐店的招牌。",
        src: "/assets/oc/oc5.png"
    },
    {
        quote: "看起来很像贵族女子学校的校服（不过实际是什么学校我也还没想过）\n深色而典雅的长裙在运动时并不太方便，所以体育课时会换成更方便的款式\n面料舒适，保暖且透气，适合四季穿用\n但是不便清洗，经常不小心弄脏发阵雨只能买多套衣服以备用\n\n※除了校服外，学校对袜子、鞋子及发型也有相应要求，意外严苛",
        name: "校服",
        designation: "贵安",
        src: "/assets/oc/oc6.png"
    },
    {
        quote: "与初始之服相似，但更精炼大方，不对称的设计使其在人群中很容易脱颖而出\n初始服胸口的山荷叶挂饰被挂到腰间，走路时会随之轻轻摇摆。发型和绑带也换成更干练的，颇显成熟\n阵雨并不太习惯这身衣服，但出乎意料的是收到了众多好评，一改往日傻傻憨态的她以性格里另一面出场，着实吓到了不少人",
        name: "礼服",
        designation: "用于出席重要场合的衣服",
        src: "/assets/oc/oc7.png"
    },
    {
        quote: "长下摆，对襟而长袖的白大褂，既用来保护实验服下的身体，也表示角色的知性美。\n话是这么说，可后半句在阵雨身上似乎不适用）\n请千万注意不要在实验室外（至少不要在实验楼外）穿着实验服，以避免将沾染的有毒有害物质带出造成污染\n虽不太符合实验规范，但高跟鞋子的不适让她始终提醒自己保持专注。当然，护目镜和扎起头发这两点仍然不能马虎",
        name: "实验服",
        designation: "为什么结果重复不出来啊/(ㄒoㄒ)/~~",
        src: "/assets/oc/oc8.png"
    }
];
const DESKTOP_SCENE_CONFIG = {
    scrollTrackVh: 560,
    roomRevealStart: 220,
    roomRevealEnd: 2460,
    portholeBaseScale: 1.28,
    portholeZoomGain: 0.72,
    cardsFadeStart: 0.48,
    cardsFadeEnd: 0.64,
    sceneShift: "0px",
    roomImageShift: "0%",
    roomImageScale: "1"
};
const MOBILE_SCENE_CONFIG = {
    scrollTrackVh: 440,
    roomRevealStart: 180,
    roomRevealEnd: 1640,
    portholeBaseScale: 1.08,
    portholeZoomGain: 0.46,
    cardsFadeStart: 0.42,
    cardsFadeEnd: 0.58,
    sceneShift: "0px",
    roomImageShift: "0%",
    roomImageScale: "1.04"
};
const floorBoardConfig = {
    boardSize: {
        width: 420,
        height: 620
    },
    corners: [
        {
            x: 768,
            y: 570.4
        },
        {
            x: 1020.8,
            y: 597.6
        },
        {
            x: 857.6,
            y: 768.8
        },
        {
            x: 538.4,
            y: 723.2
        }
    ],
    cards: [
        {
            id: "oc1",
            x: 176.35,
            y: 241.46,
            rotation: 15,
            z: 40
        },
        {
            id: "oc2",
            x: 285,
            y: 370,
            rotation: 16,
            z: 28
        },
        {
            id: "oc3",
            x: 127.33,
            y: 364.85,
            rotation: -3,
            z: 39
        },
        {
            id: "oc4",
            x: 118.75,
            y: 85.71,
            rotation: 28,
            z: 41
        },
        {
            id: "oc5",
            x: 225.21,
            y: 69.25,
            rotation: -13,
            z: 38
        },
        {
            id: "oc6",
            x: 23,
            y: 316,
            rotation: 19,
            z: 32
        },
        {
            id: "oc7",
            x: 29.73,
            y: 159.04,
            rotation: -32,
            z: 37
        },
        {
            id: "oc8",
            x: 302.29,
            y: 207.24,
            rotation: -29,
            z: 42
        }
    ]
};
const clamp = (value, min, max)=>Math.max(min, Math.min(max, value));
const mapRange = (value, start, end)=>clamp((value - start) / (end - start), 0, 1);
const smoothstep = (value)=>value * value * (3 - 2 * value);
const mapRangeSmooth = (value, start, end)=>smoothstep(mapRange(value, start, end));
const lerp = (a, b, t)=>a + (b - a) * t;
const resolveRoomPhase = (progress, previousPhase)=>{
    if (previousPhase === "interior") {
        return progress < 0.664 ? "settle" : "interior";
    }
    if (previousPhase === "settle") {
        if (progress > 0.688) {
            return "interior";
        }
        return progress < 0.52 ? "crossfade" : "settle";
    }
    if (progress < 0.32) {
        return "outside-hull";
    }
    if (progress < 0.42) {
        return "room-reveal";
    }
    if (progress < 0.54) {
        return "crossfade";
    }
    if (progress < 0.688) {
        return "settle";
    }
    return "interior";
};
const PHASE_RANGES = {
    "outside-hull": {
        start: 0,
        end: 0.32
    },
    "room-reveal": {
        start: 0.32,
        end: 0.42
    },
    crossfade: {
        start: 0.42,
        end: 0.54
    },
    settle: {
        start: 0.54,
        end: 0.688
    },
    interior: {
        start: 0.688,
        end: 1
    }
};
const solveLinearSystem = (matrix, vector)=>{
    const size = vector.length;
    const augmented = matrix.map((row, rowIndex)=>[
            ...row,
            vector[rowIndex]
        ]);
    for(let pivot = 0; pivot < size; pivot += 1){
        let maxRow = pivot;
        for(let row = pivot + 1; row < size; row += 1){
            if (Math.abs(augmented[row][pivot]) > Math.abs(augmented[maxRow][pivot])) {
                maxRow = row;
            }
        }
        if (Math.abs(augmented[maxRow][pivot]) < 1e-10) {
            return null;
        }
        if (maxRow !== pivot) {
            [augmented[pivot], augmented[maxRow]] = [
                augmented[maxRow],
                augmented[pivot]
            ];
        }
        const pivotValue = augmented[pivot][pivot];
        for(let column = pivot; column <= size; column += 1){
            augmented[pivot][column] /= pivotValue;
        }
        for(let row = 0; row < size; row += 1){
            if (row === pivot) {
                continue;
            }
            const factor = augmented[row][pivot];
            for(let column = pivot; column <= size; column += 1){
                augmented[row][column] -= factor * augmented[pivot][column];
            }
        }
    }
    return augmented.map((row)=>row[size]);
};
const computeHomography = (source, destination)=>{
    const matrix = [];
    const vector = [];
    for(let index = 0; index < 4; index += 1){
        const [x, y] = source[index];
        const [targetX, targetY] = destination[index];
        matrix.push([
            x,
            y,
            1,
            0,
            0,
            0,
            -x * targetX,
            -y * targetX
        ]);
        vector.push(targetX);
        matrix.push([
            0,
            0,
            0,
            x,
            y,
            1,
            -x * targetY,
            -y * targetY
        ]);
        vector.push(targetY);
    }
    const solution = solveLinearSystem(matrix, vector);
    if (!solution) {
        return null;
    }
    return [
        solution[0],
        solution[1],
        solution[2],
        solution[3],
        solution[4],
        solution[5],
        solution[6],
        solution[7],
        1
    ];
};
const matrixToCss = (matrix)=>`matrix3d(${[
        matrix[0],
        matrix[3],
        0,
        matrix[6],
        matrix[1],
        matrix[4],
        0,
        matrix[7],
        0,
        0,
        1,
        0,
        matrix[2],
        matrix[5],
        0,
        matrix[8]
    ].join(",")})`;
const createFloorBoardTransform = (boardConfig)=>{
    const homography = computeHomography([
        [
            0,
            0
        ],
        [
            boardConfig.boardSize.width,
            0
        ],
        [
            boardConfig.boardSize.width,
            boardConfig.boardSize.height
        ],
        [
            0,
            boardConfig.boardSize.height
        ]
    ], boardConfig.corners.map(({ x, y })=>[
            x,
            y
        ]));
    return homography ? matrixToCss(homography) : undefined;
};
const renderQuote = (quote)=>{
    const lines = quote.split("\n");
    return lines.map((line, lineIndex)=>{
        const fragments = [];
        const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
        let lastIndex = 0;
        let match;
        while((match = linkRegex.exec(line)) !== null){
            if (match.index > lastIndex) {
                fragments.push(line.slice(lastIndex, match.index));
            }
            fragments.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: match[2],
                target: "_blank",
                rel: "noopener noreferrer",
                className: "text-blue-400 underline transition-colors hover:text-blue-300",
                children: match[1]
            }, `${lineIndex}-${match.index}`, false, {
                fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
                lineNumber: 304,
                columnNumber: 9
            }, this));
            lastIndex = match.index + match[0].length;
        }
        if (lastIndex < line.length) {
            fragments.push(line.slice(lastIndex));
        }
        if (fragments.length === 0) {
            fragments.push(line);
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: [
                fragments,
                lineIndex < lines.length - 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
                    lineNumber: 328,
                    columnNumber: 41
                }, this) : null
            ]
        }, lineIndex, true, {
            fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
            lineNumber: 326,
            columnNumber: 7
        }, this);
    });
};
function ValidationTestimonials({ active, onPrev, onNext }) {
    const [rotations, setRotations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setRotations(testimonials.map(()=>Math.floor(Math.random() * 21) - 10));
    }, []);
    const isActive = (index)=>index === active;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mx-auto max-w-md px-4 py-20 font-sans antialiased md:max-w-6xl md:px-8 lg:px-12",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative grid grid-cols-1 gap-24 md:grid-cols-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative mx-auto w-80 aspect-[17/25]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                            initial: false,
                            children: testimonials.map((testimonial, index)=>{
                                const sharedLayoutId = isActive(index) ? `about-validation-card-${index}` : undefined;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        z: -100,
                                        rotate: rotations[index] || 0
                                    },
                                    animate: {
                                        opacity: isActive(index) ? 1 : 0.7,
                                        z: isActive(index) ? 0 : -100,
                                        rotate: isActive(index) ? 0 : rotations[index] || 0,
                                        zIndex: isActive(index) ? 40 : testimonials.length + 2 - index,
                                        y: isActive(index) ? [
                                            0,
                                            -80,
                                            0
                                        ] : 0
                                    },
                                    exit: {
                                        opacity: 0,
                                        z: 100,
                                        rotate: rotations[index] || 0
                                    },
                                    transition: {
                                        duration: 0.4,
                                        ease: "easeInOut"
                                    },
                                    className: "absolute inset-0 origin-bottom",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                        layoutId: sharedLayoutId,
                                        onLayoutAnimationStart: ()=>{
                                            if (!isActive(index)) {
                                                return;
                                            }
                                            console.debug("[about-validation] detail card layout start", {
                                                index,
                                                active
                                            });
                                        },
                                        onLayoutAnimationComplete: ()=>{
                                            if (!isActive(index)) {
                                                return;
                                            }
                                            console.debug("[about-validation] detail card layout complete", {
                                                index,
                                                active
                                            });
                                        },
                                        className: "relative h-full w-full overflow-hidden rounded-3xl shadow-2xl",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: testimonial.src,
                                                alt: testimonial.name,
                                                draggable: false,
                                                className: "h-full w-full object-cover object-center"
                                            }, void 0, false, {
                                                fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
                                                lineNumber: 412,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 rounded-3xl bg-gray-800 opacity-8"
                                            }, void 0, false, {
                                                fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
                                                lineNumber: 418,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
                                        lineNumber: 389,
                                        columnNumber: 21
                                    }, this)
                                }, testimonial.src, false, {
                                    fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
                                    lineNumber: 362,
                                    columnNumber: 19
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
                            lineNumber: 356,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
                        lineNumber: 355,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
                    lineNumber: 354,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col justify-between py-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                y: 20,
                                opacity: 0
                            },
                            animate: {
                                y: 0,
                                opacity: 1
                            },
                            exit: {
                                y: -20,
                                opacity: 0
                            },
                            transition: {
                                duration: 0.2,
                                ease: "easeInOut"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-2xl font-bold text-gray-500 dark:text-white",
                                    children: testimonials[active].name
                                }, void 0, false, {
                                    fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
                                    lineNumber: 446,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-m text-gray-400 dark:text-neutral-500",
                                    children: testimonials[active].designation
                                }, void 0, false, {
                                    fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
                                    lineNumber: 449,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].p, {
                                    className: "mt-8 text-lg text-gray-400 dark:text-neutral-300",
                                    children: renderQuote(testimonials[active].quote)
                                }, void 0, false, {
                                    fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
                                    lineNumber: 452,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, active, true, {
                            fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
                            lineNumber: 427,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-start gap-4 pt-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onPrev,
                                    className: "group/button flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconArrowLeft$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconArrowLeft$3e$__["IconArrowLeft"], {
                                        className: "h-5 w-5 text-black transition-transform duration-300 group-hover/button:rotate-12 dark:text-neutral-400"
                                    }, void 0, false, {
                                        fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
                                        lineNumber: 461,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
                                    lineNumber: 457,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onNext,
                                    className: "group/button flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconArrowRight$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconArrowRight$3e$__["IconArrowRight"], {
                                        className: "h-5 w-5 text-black transition-transform duration-300 group-hover/button:-rotate-12 dark:text-neutral-400"
                                    }, void 0, false, {
                                        fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
                                        lineNumber: 467,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
                                    lineNumber: 463,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
                            lineNumber: 456,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
                    lineNumber: 426,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
            lineNumber: 353,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
        lineNumber: 352,
        columnNumber: 5
    }, this);
}
function AboutSubmarineRoomValidation() {
    const scrollTrackRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const frameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const progressTickRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const targetProgressRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const renderedProgressRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const scrollMetricsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({
        totalScrollablePx: 1,
        targetScrollPx: 0
    });
    const transitionDebugRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [lampOn, setLampOn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [selectedIndex, setSelectedIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isDetailOpen, setIsDetailOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const mobileLoopCards = isMobile ? [
        ...testimonials,
        ...testimonials
    ] : testimonials;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const mediaQuery = window.matchMedia("(max-width: 767px)");
        const updateViewportMode = ()=>setIsMobile(mediaQuery.matches);
        updateViewportMode();
        mediaQuery.addEventListener("change", updateViewportMode);
        return ()=>mediaQuery.removeEventListener("change", updateViewportMode);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const animateProgress = ()=>{
            progressTickRef.current = window.requestAnimationFrame(()=>{
                const target = targetProgressRef.current;
                const current = renderedProgressRef.current;
                const delta = target - current;
                if (Math.abs(delta) < 0.0008) {
                    renderedProgressRef.current = target;
                    setProgress(target);
                    progressTickRef.current = null;
                    return;
                }
                const absDelta = Math.abs(delta);
                const followStrength = absDelta > 0.18 ? 0.62 : absDelta > 0.09 ? 0.44 : 0.3;
                const maxStep = absDelta > 0.18 ? 0.13 : absDelta > 0.09 ? 0.08 : 0.05;
                const next = current + clamp(delta * followStrength, -maxStep, maxStep);
                renderedProgressRef.current = next;
                setProgress(next);
                animateProgress();
            });
        };
        const scheduleProgressAnimation = ()=>{
            if (progressTickRef.current !== null) {
                return;
            }
            animateProgress();
        };
        const updateProgress = ()=>{
            const track = scrollTrackRef.current;
            if (!track) {
                return;
            }
            const rect = track.getBoundingClientRect();
            const total = Math.max(track.offsetHeight - window.innerHeight, 1);
            const nextTarget = clamp(-rect.top / total, 0, 1);
            scrollMetricsRef.current.totalScrollablePx = total;
            scrollMetricsRef.current.targetScrollPx = nextTarget * total;
            targetProgressRef.current = nextTarget;
            scheduleProgressAnimation();
        };
        const onScroll = ()=>{
            if (frameRef.current !== null) {
                return;
            }
            frameRef.current = window.requestAnimationFrame(()=>{
                frameRef.current = null;
                updateProgress();
            });
        };
        updateProgress();
        window.addEventListener("scroll", onScroll, {
            passive: true
        });
        window.addEventListener("resize", onScroll);
        return ()=>{
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
            if (frameRef.current !== null) {
                window.cancelAnimationFrame(frameRef.current);
            }
            if (progressTickRef.current !== null) {
                window.cancelAnimationFrame(progressTickRef.current);
            }
        };
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const onKeyDown = (event)=>{
            if (event.key === "Escape" && isDetailOpen) {
                console.debug("[about-validation] escape close", {
                    selectedIndex
                });
                setIsDetailOpen(false);
            }
        };
        window.addEventListener("keydown", onKeyDown);
        return ()=>window.removeEventListener("keydown", onKeyDown);
    }, [
        isDetailOpen,
        selectedIndex
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        console.debug("[about-validation] detail state", {
            selectedIndex,
            isDetailOpen
        });
    }, [
        selectedIndex,
        isDetailOpen
    ]);
    const scene = isMobile ? MOBILE_SCENE_CONFIG : DESKTOP_SCENE_CONFIG;
    const floorBoardTransform = createFloorBoardTransform(floorBoardConfig);
    const zoomIn = mapRangeSmooth(progress, 0.04, 0.24);
    const roomTakeover = mapRangeSmooth(progress, 0.32, 0.5);
    const hullFade = mapRangeSmooth(progress, 0.38, 0.56);
    const settle = mapRangeSmooth(progress, 0.54, 0.68);
    const roomDetail = mapRangeSmooth(progress, 0.08, 0.34);
    const roomReveal = lerp(scene.roomRevealStart, scene.roomRevealEnd, roomTakeover);
    const portholeScale = scene.portholeBaseScale + zoomIn * scene.portholeZoomGain;
    const hullOpacity = clamp(1 - hullFade, 0, 1);
    const roomBrightness = lampOn ? 0.54 + roomDetail * 0.16 + settle * 0.22 : 0.38 + roomDetail * 0.1 + settle * 0.08;
    const roomSaturation = lampOn ? 0.72 + roomDetail * 0.14 + settle * 0.1 : 0.58 + roomDetail * 0.1;
    const roomBlur = `${lerp(9, 0, roomDetail)}px`;
    const warmGlowOpacity = lampOn ? 0.2 + settle * 0.24 : 0;
    const planetCoreRamp = lampOn ? 0 : Math.pow(clamp(settle, 0, 1), 0.42);
    const planetCoreOpacity = lampOn ? 0 : 0.78 + planetCoreRamp * 0.2;
    const cardsOpacity = mapRangeSmooth(progress, scene.cardsFadeStart, scene.cardsFadeEnd);
    const causticsOpacity = 0.08 + smoothstep(1 - hullOpacity) * 0.16;
    const portholeCenterX = "50%";
    const sceneShift = scene.sceneShift;
    const roomImageShift = scene.roomImageShift;
    const roomImageScale = scene.roomImageScale;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const phase = resolveRoomPhase(progress, transitionDebugRef.current?.phase);
        const phaseRange = PHASE_RANGES[phase];
        const bucket = Math.round(progress * 100) / 100;
        const now = performance.now();
        const previous = transitionDebugRef.current;
        const totalScrollablePx = scrollMetricsRef.current.totalScrollablePx;
        const targetScrollPx = scrollMetricsRef.current.targetScrollPx;
        const renderedScrollPx = progress * totalScrollablePx;
        const phaseStartPx = phaseRange.start * totalScrollablePx;
        const phaseEndPx = phaseRange.end * totalScrollablePx;
        const phaseSpanPx = phaseEndPx - phaseStartPx;
        const phaseProgress = clamp(phaseSpanPx <= 0 ? 1 : (renderedScrollPx - phaseStartPx) / phaseSpanPx, 0, 1);
        if (!previous) {
            console.debug("[about-validation] scroll geometry", {
                totalScrollablePx: Math.round(totalScrollablePx),
                viewportHeight: window.innerHeight,
                phaseDistancesPx: {
                    outsideHull: Math.round(PHASE_RANGES["outside-hull"].end * totalScrollablePx),
                    roomReveal: Math.round((PHASE_RANGES["room-reveal"].end - PHASE_RANGES["room-reveal"].start) * totalScrollablePx),
                    crossfade: Math.round((PHASE_RANGES.crossfade.end - PHASE_RANGES.crossfade.start) * totalScrollablePx),
                    settle: Math.round((PHASE_RANGES.settle.end - PHASE_RANGES.settle.start) * totalScrollablePx),
                    interior: Math.round((PHASE_RANGES.interior.end - PHASE_RANGES.interior.start) * totalScrollablePx)
                }
            });
            transitionDebugRef.current = {
                bucket,
                phase,
                targetProgress: targetProgressRef.current,
                lastProgress: progress,
                lastReveal: roomReveal,
                lastScale: portholeScale,
                lastHullOpacity: hullOpacity,
                lastTargetScrollPx: targetScrollPx,
                lastTs: now
            };
            return;
        }
        if (previous.phase !== phase) {
            console.debug("[about-validation] room phase", {
                from: previous.phase,
                to: phase,
                targetProgress: Number(targetProgressRef.current.toFixed(3)),
                progress: Number(progress.toFixed(3)),
                targetScrollPx: Math.round(targetScrollPx),
                renderedScrollPx: Math.round(renderedScrollPx),
                phaseStartPx: Math.round(phaseStartPx),
                phaseEndPx: Math.round(phaseEndPx),
                phaseSpanPx: Math.round(phaseSpanPx),
                phaseProgress: Number(phaseProgress.toFixed(3)),
                phaseRemainingPx: Math.max(0, Math.round(phaseEndPx - renderedScrollPx)),
                roomReveal: Number(roomReveal.toFixed(2)),
                portholeScale: Number(portholeScale.toFixed(3)),
                hullOpacity: Number(hullOpacity.toFixed(3))
            });
        }
        if (progress >= 0.4 && progress <= 0.9 && bucket !== previous.bucket) {
            const deltaTime = Math.max(now - previous.lastTs, 1);
            console.debug("[about-validation] room transition tick", {
                phase,
                targetProgress: Number(targetProgressRef.current.toFixed(3)),
                progress: Number(progress.toFixed(3)),
                targetScrollPx: Math.round(targetScrollPx),
                renderedScrollPx: Math.round(renderedScrollPx),
                deltaTargetScrollPx: Math.round(targetScrollPx - previous.lastTargetScrollPx),
                displayLagPx: Math.round(targetScrollPx - renderedScrollPx),
                totalScrollablePx: Math.round(totalScrollablePx),
                phaseStartPx: Math.round(phaseStartPx),
                phaseEndPx: Math.round(phaseEndPx),
                phaseSpanPx: Math.round(phaseSpanPx),
                phaseProgress: Number(phaseProgress.toFixed(3)),
                phaseRemainingPx: Math.max(0, Math.round(phaseEndPx - renderedScrollPx)),
                smoothingGap: Number((targetProgressRef.current - progress).toFixed(3)),
                deltaProgress: Number((progress - previous.lastProgress).toFixed(3)),
                deltaMs: Math.round(deltaTime),
                roomReveal: Number(roomReveal.toFixed(2)),
                deltaReveal: Number((roomReveal - previous.lastReveal).toFixed(2)),
                revealPerMs: Number(((roomReveal - previous.lastReveal) / deltaTime).toFixed(3)),
                portholeScale: Number(portholeScale.toFixed(3)),
                deltaScale: Number((portholeScale - previous.lastScale).toFixed(3)),
                hullOpacity: Number(hullOpacity.toFixed(3)),
                deltaHullOpacity: Number((hullOpacity - previous.lastHullOpacity).toFixed(3)),
                roomBrightness: Number(roomBrightness.toFixed(3)),
                roomBlur,
                cardsOpacity: Number(cardsOpacity.toFixed(3)),
                causticsOpacity: Number(causticsOpacity.toFixed(3))
            });
        }
        transitionDebugRef.current = {
            bucket,
            phase,
            targetProgress: targetProgressRef.current,
            lastProgress: progress,
            lastReveal: roomReveal,
            lastScale: portholeScale,
            lastHullOpacity: hullOpacity,
            lastTargetScrollPx: targetScrollPx,
            lastTs: now
        };
    }, [
        progress,
        roomReveal,
        portholeScale,
        hullOpacity,
        roomBrightness,
        roomBlur,
        cardsOpacity,
        causticsOpacity
    ]);
    const stageStyle = {
        "--porthole-center-x": portholeCenterX,
        "--room-reveal": `${roomReveal.toFixed(2)}px`,
        "--porthole-scale": String(portholeScale),
        "--hull-opacity": String(hullOpacity),
        "--room-brightness": String(roomBrightness),
        "--room-saturation": String(roomSaturation),
        "--room-blur": roomBlur,
        "--warm-glow-opacity": String(warmGlowOpacity),
        "--planet-core-opacity": String(planetCoreOpacity),
        "--cards-opacity": String(cardsOpacity),
        "--caustics-opacity": String(causticsOpacity),
        "--scene-shift": sceneShift,
        "--room-image-shift": roomImageShift,
        "--room-image-scale": roomImageScale
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$LayoutGroup$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LayoutGroup"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$CODEX$_5347$$_7ea7$$2f$about$2d$submarine$2d$room$2d$validation$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].page,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$CODEX$_5347$$_7ea7$$2f$about$2d$submarine$2d$room$2d$validation$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].blankPanel,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$CODEX$_5347$$_7ea7$$2f$about$2d$submarine$2d$room$2d$validation$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].blankPill,
                        children: "Before About Validation"
                    }, void 0, false, {
                        fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
                        lineNumber: 777,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
                    lineNumber: 776,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    ref: scrollTrackRef,
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$CODEX$_5347$$_7ea7$$2f$about$2d$submarine$2d$room$2d$validation$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].scrollTrack,
                    style: {
                        height: `${scene.scrollTrackVh}vh`
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$CODEX$_5347$$_7ea7$$2f$about$2d$submarine$2d$room$2d$validation$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].stage,
                        style: stageStyle,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$CODEX$_5347$$_7ea7$$2f$about$2d$submarine$2d$room$2d$validation$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].stageUi,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$CODEX$_5347$$_7ea7$$2f$about$2d$submarine$2d$room$2d$validation$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statusPill,
                                    children: lampOn ? "灯光已开" : "灯光已关"
                                }, void 0, false, {
                                    fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
                                    lineNumber: 787,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
                                lineNumber: 786,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$CODEX$_5347$$_7ea7$$2f$about$2d$submarine$2d$room$2d$validation$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].aboutLabel,
                                children: "About Submarine Room Validation"
                            }, void 0, false, {
                                fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
                                lineNumber: 792,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$CODEX$_5347$$_7ea7$$2f$about$2d$submarine$2d$room$2d$validation$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].roomMask,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$CODEX$_5347$$_7ea7$$2f$about$2d$submarine$2d$room$2d$validation$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].roomLayers,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$CODEX$_5347$$_7ea7$$2f$about$2d$submarine$2d$room$2d$validation$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].roomLayer,
                                                style: {
                                                    backgroundImage: `url(${__TURBOPACK__imported__module__$5b$project$5d2f_8231$$_5ba4$$_5173$$_706f$$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f_8231$$_5ba4$$_5173$$_706f$$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"].src})`,
                                                    opacity: lampOn ? 0 : 1
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
                                                lineNumber: 796,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$CODEX$_5347$$_7ea7$$2f$about$2d$submarine$2d$room$2d$validation$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].roomLayer,
                                                style: {
                                                    backgroundImage: `url(${__TURBOPACK__imported__module__$5b$project$5d2f_8231$$_5ba4$$_5f00$$_706f$$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f_8231$$_5ba4$$_5f00$$_706f$$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"].src})`,
                                                    opacity: lampOn ? 1 : 0
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
                                                lineNumber: 800,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
                                        lineNumber: 795,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$CODEX$_5347$$_7ea7$$2f$about$2d$submarine$2d$room$2d$validation$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].roomVeil
                                    }, void 0, false, {
                                        fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
                                        lineNumber: 805,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
                                lineNumber: 794,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$CODEX$_5347$$_7ea7$$2f$about$2d$submarine$2d$room$2d$validation$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].waterCaustics
                            }, void 0, false, {
                                fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
                                lineNumber: 808,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$CODEX$_5347$$_7ea7$$2f$about$2d$submarine$2d$room$2d$validation$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].roomContent,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$CODEX$_5347$$_7ea7$$2f$about$2d$submarine$2d$room$2d$validation$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].roomShade
                                    }, void 0, false, {
                                        fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
                                        lineNumber: 811,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$CODEX$_5347$$_7ea7$$2f$about$2d$submarine$2d$room$2d$validation$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].warmGlow
                                    }, void 0, false, {
                                        fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
                                        lineNumber: 812,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$CODEX$_5347$$_7ea7$$2f$about$2d$submarine$2d$room$2d$validation$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].lampAnchor,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$three$2d$examples$2f$DeskLamp3D$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            onToggleLight: setLampOn
                                        }, void 0, false, {
                                            fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
                                            lineNumber: 815,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
                                        lineNumber: 814,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$CODEX$_5347$$_7ea7$$2f$about$2d$submarine$2d$room$2d$validation$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].planetAnchor,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$CODEX$_5347$$_7ea7$$2f$about$2d$submarine$2d$room$2d$validation$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].planetCoreGlow
                                            }, void 0, false, {
                                                fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
                                                lineNumber: 819,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlanetSystem$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
                                                lineNumber: 820,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
                                        lineNumber: 818,
                                        columnNumber: 15
                                    }, this),
                                    isMobile ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$CODEX$_5347$$_7ea7$$2f$about$2d$submarine$2d$room$2d$validation$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].mobileFloorCards} ${isDetailOpen ? __TURBOPACK__imported__module__$5b$project$5d2f$CODEX$_5347$$_7ea7$$2f$about$2d$submarine$2d$room$2d$validation$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].mobileFloorCardsDimmed : ""}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$CODEX$_5347$$_7ea7$$2f$about$2d$submarine$2d$room$2d$validation$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].mobileFloorCardsTrack,
                                            children: mobileLoopCards.map((testimonial, loopIndex)=>{
                                                const index = loopIndex % testimonials.length;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                                                    type: "button",
                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$CODEX$_5347$$_7ea7$$2f$about$2d$submarine$2d$room$2d$validation$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].mobileFloorCard} ${selectedIndex === index && isDetailOpen ? __TURBOPACK__imported__module__$5b$project$5d2f$CODEX$_5347$$_7ea7$$2f$about$2d$submarine$2d$room$2d$validation$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].floorCardSelectedSource : ""}`,
                                                    onClick: ()=>{
                                                        console.debug("[about-validation] open card", {
                                                            index,
                                                            name: testimonial.name
                                                        });
                                                        setSelectedIndex(index);
                                                        setIsDetailOpen(true);
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
                                                        layoutId: `about-validation-card-${index}`,
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$CODEX$_5347$$_7ea7$$2f$about$2d$submarine$2d$room$2d$validation$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].mobileFloorCardFrame,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: testimonial.src,
                                                            alt: testimonial.name,
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$CODEX$_5347$$_7ea7$$2f$about$2d$submarine$2d$room$2d$validation$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].floorCardImage,
                                                            draggable: false
                                                        }, void 0, false, {
                                                            fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
                                                            lineNumber: 854,
                                                            columnNumber: 29
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
                                                        lineNumber: 849,
                                                        columnNumber: 27
                                                    }, this)
                                                }, `${testimonial.name}-${loopIndex}`, false, {
                                                    fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
                                                    lineNumber: 834,
                                                    columnNumber: 25
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
                                            lineNumber: 829,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
                                        lineNumber: 824,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$CODEX$_5347$$_7ea7$$2f$about$2d$submarine$2d$room$2d$validation$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].floorCards} ${isDetailOpen ? __TURBOPACK__imported__module__$5b$project$5d2f$CODEX$_5347$$_7ea7$$2f$about$2d$submarine$2d$room$2d$validation$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].floorCardsDimmed : ""}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$CODEX$_5347$$_7ea7$$2f$about$2d$submarine$2d$room$2d$validation$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].floorBoard,
                                            style: {
                                                width: `${floorBoardConfig.boardSize.width}px`,
                                                height: `${floorBoardConfig.boardSize.height}px`,
                                                transform: floorBoardTransform
                                            },
                                            children: testimonials.map((testimonial, index)=>{
                                                const card = floorBoardConfig.cards.find((item)=>item.id === `oc${index + 1}`);
                                                if (!card) {
                                                    return null;
                                                }
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                                                    type: "button",
                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$CODEX$_5347$$_7ea7$$2f$about$2d$submarine$2d$room$2d$validation$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].floorCard} ${selectedIndex === index && isDetailOpen ? __TURBOPACK__imported__module__$5b$project$5d2f$CODEX$_5347$$_7ea7$$2f$about$2d$submarine$2d$room$2d$validation$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].floorCardSelectedSource : ""}`,
                                                    style: {
                                                        left: `${card.x}px`,
                                                        top: `${card.y}px`,
                                                        "--card-rotate": `${card.rotation ?? 0}deg`,
                                                        zIndex: card.z
                                                    },
                                                    onClick: ()=>{
                                                        console.debug("[about-validation] open card", {
                                                            index,
                                                            name: testimonial.name
                                                        });
                                                        setSelectedIndex(index);
                                                        setIsDetailOpen(true);
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
                                                        layoutId: `about-validation-card-${index}`,
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$CODEX$_5347$$_7ea7$$2f$about$2d$submarine$2d$room$2d$validation$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].floorCardFrame,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: testimonial.src,
                                                            alt: testimonial.name,
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$CODEX$_5347$$_7ea7$$2f$about$2d$submarine$2d$room$2d$validation$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].floorCardImage,
                                                            draggable: false
                                                        }, void 0, false, {
                                                            fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
                                                            lineNumber: 920,
                                                            columnNumber: 29
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
                                                        lineNumber: 915,
                                                        columnNumber: 27
                                                    }, this)
                                                }, testimonial.name, false, {
                                                    fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
                                                    lineNumber: 892,
                                                    columnNumber: 25
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
                                            lineNumber: 872,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
                                        lineNumber: 867,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
                                lineNumber: 810,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$CODEX$_5347$$_7ea7$$2f$about$2d$submarine$2d$room$2d$validation$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].hullOverlay,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$CODEX$_5347$$_7ea7$$2f$about$2d$submarine$2d$room$2d$validation$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].hullShell
                                    }, void 0, false, {
                                        fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
                                        lineNumber: 936,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$CODEX$_5347$$_7ea7$$2f$about$2d$submarine$2d$room$2d$validation$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].hullShade
                                    }, void 0, false, {
                                        fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
                                        lineNumber: 937,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$CODEX$_5347$$_7ea7$$2f$about$2d$submarine$2d$room$2d$validation$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].porthole,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$CODEX$_5347$$_7ea7$$2f$about$2d$submarine$2d$room$2d$validation$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].portholeFrame
                                            }, void 0, false, {
                                                fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
                                                lineNumber: 939,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$CODEX$_5347$$_7ea7$$2f$about$2d$submarine$2d$room$2d$validation$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].portholeGlass
                                            }, void 0, false, {
                                                fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
                                                lineNumber: 940,
                                                columnNumber: 17
                                            }, this),
                                            Array.from({
                                                length: 12
                                            }, (_, index)=>{
                                                const angle = index / 12 * Math.PI * 2;
                                                const radius = 49;
                                                const x = 50 + Math.cos(angle) * radius;
                                                const y = 50 + Math.sin(angle) * radius;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$CODEX$_5347$$_7ea7$$2f$about$2d$submarine$2d$room$2d$validation$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].rivet,
                                                    style: {
                                                        left: `${x}%`,
                                                        top: `${y}%`
                                                    }
                                                }, index, false, {
                                                    fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
                                                    lineNumber: 948,
                                                    columnNumber: 21
                                                }, this);
                                            })
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
                                        lineNumber: 938,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
                                lineNumber: 935,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
                        lineNumber: 785,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
                    lineNumber: 780,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$CODEX$_5347$$_7ea7$$2f$about$2d$submarine$2d$room$2d$validation$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].afterPanel,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$CODEX$_5347$$_7ea7$$2f$about$2d$submarine$2d$room$2d$validation$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].blankPill,
                            children: "After About Validation"
                        }, void 0, false, {
                            fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
                            lineNumber: 961,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            id: "contact",
                            style: {
                                position: "absolute",
                                inset: "auto 0 0",
                                width: 1,
                                height: 1,
                                opacity: 0
                            }
                        }, void 0, false, {
                            fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
                            lineNumber: 962,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
                    lineNumber: 960,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                    onExitComplete: ()=>{
                        console.debug("[about-validation] detail exit complete", {
                            selectedIndex
                        });
                        setSelectedIndex(null);
                    },
                    children: selectedIndex !== null && isDetailOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$CODEX$_5347$$_7ea7$$2f$about$2d$submarine$2d$room$2d$validation$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].detailOverlay,
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        exit: {
                            opacity: 0
                        },
                        onClick: ()=>{
                            console.debug("[about-validation] overlay close", {
                                selectedIndex
                            });
                            setIsDetailOpen(false);
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$CODEX$_5347$$_7ea7$$2f$about$2d$submarine$2d$room$2d$validation$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].detailShell,
                            initial: {
                                opacity: 0,
                                y: 16
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            exit: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: 0.24,
                                ease: "easeOut"
                            },
                            onClick: (event)=>event.stopPropagation(),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$CODEX$_5347$$_7ea7$$2f$about$2d$submarine$2d$room$2d$validation$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].detailClose,
                                    onClick: ()=>{
                                        console.debug("[about-validation] button close", {
                                            selectedIndex
                                        });
                                        setIsDetailOpen(false);
                                    },
                                    children: "×"
                                }, void 0, false, {
                                    fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
                                    lineNumber: 994,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ValidationTestimonials, {
                                    active: selectedIndex,
                                    onPrev: ()=>setSelectedIndex((selectedIndex - 1 + testimonials.length) % testimonials.length),
                                    onNext: ()=>setSelectedIndex((selectedIndex + 1) % testimonials.length)
                                }, void 0, false, {
                                    fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
                                    lineNumber: 1006,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
                            lineNumber: 986,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
                        lineNumber: 974,
                        columnNumber: 13
                    }, this) : null
                }, void 0, false, {
                    fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
                    lineNumber: 965,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
            lineNumber: 775,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
        lineNumber: 774,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=_0ea217ed._.js.map