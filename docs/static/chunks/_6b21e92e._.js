(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/PlanetSystem.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/ri/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const ringData = [
    {
        radius: 150,
        icons: [
            {
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaGithub"], {}, void 0, false, {
                    fileName: "[project]/src/components/PlanetSystem.tsx",
                    lineNumber: 10,
                    columnNumber: 15
                }, this),
                link: 'https://github.com/BlackCoder0'
            },
            {
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
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
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
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
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaEnvelope"], {}, void 0, false, {
                    fileName: "[project]/src/components/PlanetSystem.tsx",
                    lineNumber: 36,
                    columnNumber: 15
                }, this),
                link: 'copy:2943984952@qq.com'
            },
            {
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
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
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RiLinksLine"], {}, void 0, false, {
                    fileName: "[project]/src/components/PlanetSystem.tsx",
                    lineNumber: 52,
                    columnNumber: 15
                }, this),
                link: '#contact'
            },
            {
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaSteam"], {}, void 0, false, {
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
    _s();
    const [hoveredIcon, setHoveredIcon] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showToast, setShowToast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full h-full pointer-events-none z-10",
        children: [
            ringData.map((ring, ringIndex)=>{
                const iconCount = ring.icons.length;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
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
            showToast && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
_s(PlanetSystem, "1HfQzXee7sCwY12XzrOjZ+uomgI=");
_c = PlanetSystem;
const __TURBOPACK__default__export__ = PlanetSystem;
var _c;
__turbopack_context__.k.register(_c, "PlanetSystem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/three-examples/DeskLamp3D.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.module.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const DeskLamp3D = ({ className = '', onToggleLight })=>{
    _s();
    const mountRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const sceneRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [lightOn, setLightOn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DeskLamp3D.useEffect": ()=>{
            if (!mountRef.current) return;
            const isMobile = window.innerWidth <= 768;
            const scene = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scene"]();
            const camera = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PerspectiveCamera"](75, mountRef.current.clientWidth / mountRef.current.clientHeight, 0.1, 1000);
            camera.position.set(0, 2, 8);
            camera.lookAt(0, 2, 0);
            const renderer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["WebGLRenderer"]({
                antialias: true,
                alpha: true
            });
            renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
            renderer.shadowMap.enabled = true;
            renderer.shadowMap.type = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PCFSoftShadowMap"];
            renderer.setClearColor(0x000000, 0);
            mountRef.current.appendChild(renderer.domElement);
            const lampGroup = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"]();
            lampGroup.scale.set(1.2, 1.2, 1.2);
            const whiteMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshPhongMaterial"]({
                color: 0xffffff,
                shininess: 100,
                emissive: 0x333333,
                emissiveIntensity: 0.2
            });
            const base = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CylinderGeometry"](0.8, 1.2, 0.3, 16), whiteMaterial);
            base.position.y = 0.15;
            base.castShadow = true;
            base.receiveShadow = true;
            lampGroup.add(base);
            const pole = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CylinderGeometry"](0.1, 0.1, 3, 8), whiteMaterial);
            pole.position.y = 1.8;
            pole.castShadow = true;
            lampGroup.add(pole);
            const joint = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SphereGeometry"](0.15, 16, 16), whiteMaterial);
            joint.position.y = 3.3;
            joint.castShadow = true;
            lampGroup.add(joint);
            const arm = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CylinderGeometry"](0.08, 0.08, 2, 8), whiteMaterial);
            arm.position.set(0.9, 4.25, 0); // 末端中心
            arm.rotation.z = -Math.PI / 4; // -45°
            arm.castShadow = true;
            lampGroup.add(arm);
            // 灯罩斜向下连接在臂末端
            const shade = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConeGeometry"](0.8, 1.2, 32, 1, true), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshPhongMaterial"]({
                color: 0xffffff,
                side: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DoubleSide"],
                shininess: 60,
                emissive: 0x444444,
                emissiveIntensity: 0.3
            }));
            shade.position.set(2.0, 5.0, 0); // 调整到臂末端位置
            shade.rotation.z = Math.PI / 4; // 旋转灯罩方向朝下
            shade.castShadow = true;
            lampGroup.add(shade);
            const bulb = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SphereGeometry"](0.2, 16, 16), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshPhongMaterial"]({
                color: 0xffd700,
                emissive: 0xffaa00,
                emissiveIntensity: 1.2,
                transparent: true,
                opacity: 0.95
            }));
            bulb.position.set(2.0, 4.6, 0);
            bulb.visible = false; // 灯罩遮挡，不显示
            lampGroup.add(bulb);
            const spotLight = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SpotLight"](0xffffff, 5.5, 30, Math.PI / 2.5, 0.35, 1.5);
            spotLight.position.set(2.0, 5.0, 0);
            spotLight.target.position.set(0, 2, 0);
            spotLight.castShadow = true;
            spotLight.shadow.mapSize.width = 2048;
            spotLight.shadow.mapSize.height = 2048;
            spotLight.shadow.camera.near = 0.5;
            spotLight.shadow.camera.far = 40;
            lampGroup.add(spotLight);
            lampGroup.add(spotLight.target);
            const pointLight = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointLight"](0xffe066, 2.2, 15);
            pointLight.position.set(2.0, 4.6, 0);
            scene.add(pointLight);
            const ambientLight = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AmbientLight"](0x404040, isMobile ? 0.6 : 0.8);
            scene.add(ambientLight);
            const globalLight = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DirectionalLight"](0xffffff, 1.0);
            globalLight.position.set(5, 10, 5);
            globalLight.castShadow = true;
            globalLight.shadow.mapSize.width = 1024;
            globalLight.shadow.mapSize.height = 1024;
            scene.add(globalLight);
            scene.add(lampGroup);
            const plane = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlaneGeometry"](20, 20), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshPhongMaterial"]({
                color: 0x333333,
                transparent: true,
                opacity: 0.3
            }));
            plane.rotation.x = -Math.PI / 2;
            plane.position.y = -0.1;
            plane.receiveShadow = true;
            scene.add(plane);
            const animate = {
                "DeskLamp3D.useEffect.animate": ()=>{
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
                }
            }["DeskLamp3D.useEffect.animate"];
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
            const handleResize = {
                "DeskLamp3D.useEffect.handleResize": ()=>{
                    if (!mountRef.current || !sceneRef.current) return;
                    const width = mountRef.current.clientWidth;
                    const height = mountRef.current.clientHeight;
                    sceneRef.current.camera.aspect = width / height;
                    sceneRef.current.camera.updateProjectionMatrix();
                    sceneRef.current.renderer.setSize(width, height);
                }
            }["DeskLamp3D.useEffect.handleResize"];
            window.addEventListener('resize', handleResize);
            return ({
                "DeskLamp3D.useEffect": ()=>{
                    window.removeEventListener('resize', handleResize);
                    if (sceneRef.current) {
                        cancelAnimationFrame(sceneRef.current.animationId);
                        sceneRef.current.scene.traverse({
                            "DeskLamp3D.useEffect": (object)=>{
                                if (object instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"]) {
                                    object.geometry.dispose();
                                    if (Array.isArray(object.material)) {
                                        object.material.forEach({
                                            "DeskLamp3D.useEffect": (m)=>m.dispose()
                                        }["DeskLamp3D.useEffect"]);
                                    } else object.material.dispose();
                                }
                            }
                        }["DeskLamp3D.useEffect"]);
                        sceneRef.current.renderer.dispose();
                        if (mountRef.current && sceneRef.current.renderer.domElement) {
                            mountRef.current.removeChild(sceneRef.current.renderer.domElement);
                        }
                    }
                }
            })["DeskLamp3D.useEffect"];
        }
    }["DeskLamp3D.useEffect"], [
        lightOn
    ]);
    const toggleLight = ()=>{
        setLightOn((prev)=>!prev);
    };
    // 使用useEffect来通知父组件状态变化，避免在渲染期间调用setState
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DeskLamp3D.useEffect": ()=>{
            onToggleLight?.(lightOn);
        }
    }["DeskLamp3D.useEffect"], [
        lightOn,
        onToggleLight
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: mountRef,
        className: `w-full h-full cursor-pointer ${className}`,
        style: {
            minHeight: '400px'
        },
        onClick: toggleLight,
        title: "点击开关灯"
    }, void 0, false, {
        fileName: "[project]/src/lib/three-examples/DeskLamp3D.tsx",
        lineNumber: 215,
        columnNumber: 5
    }, this);
};
_s(DeskLamp3D, "/TtKcFfvSEUVpfSmqImHVM687T0=");
_c = DeskLamp3D;
const __TURBOPACK__default__export__ = DeskLamp3D;
var _c;
__turbopack_context__.k.register(_c, "DeskLamp3D");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/潜艇外壳2.jpg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/潜艇外壳2.618d3005.jpg");}}),
"[project]/潜艇外壳2.jpg.mjs { IMAGE => \"[project]/潜艇外壳2.jpg (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f_6f5c$$_8247$$_5916$$_58f3$2$2e$jpg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/潜艇外壳2.jpg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f_6f5c$$_8247$$_5916$$_58f3$2$2e$jpg__$28$static__in__ecmascript$29$__["default"],
    width: 100,
    height: 100,
    blurDataURL: "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
    blurWidth: 1,
    blurHeight: 1
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/舱室关灯.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/舱室关灯.7fdfb966.png");}}),
"[project]/舱室关灯.png.mjs { IMAGE => \"[project]/舱室关灯.png (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/舱室开灯.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/舱室开灯.f49c06b9.png");}}),
"[project]/舱室开灯.png.mjs { IMAGE => \"[project]/舱室开灯.png (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/CODEX升级/about-submarine-room-validation.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "aboutLabel": "about-submarine-room-validation-module__LVLJKG__aboutLabel",
  "afterPanel": "about-submarine-room-validation-module__LVLJKG__afterPanel",
  "alignButton": "about-submarine-room-validation-module__LVLJKG__alignButton",
  "alignButtonActive": "about-submarine-room-validation-module__LVLJKG__alignButtonActive",
  "alignSwitch": "about-submarine-room-validation-module__LVLJKG__alignSwitch",
  "blankPanel": "about-submarine-room-validation-module__LVLJKG__blankPanel",
  "blankPill": "about-submarine-room-validation-module__LVLJKG__blankPill",
  "detailClose": "about-submarine-room-validation-module__LVLJKG__detailClose",
  "detailOverlay": "about-submarine-room-validation-module__LVLJKG__detailOverlay",
  "detailShell": "about-submarine-room-validation-module__LVLJKG__detailShell",
  "floorCard": "about-submarine-room-validation-module__LVLJKG__floorCard",
  "floorCardFrame": "about-submarine-room-validation-module__LVLJKG__floorCardFrame",
  "floorCardImage": "about-submarine-room-validation-module__LVLJKG__floorCardImage",
  "floorCardSelectedSource": "about-submarine-room-validation-module__LVLJKG__floorCardSelectedSource",
  "floorCards": "about-submarine-room-validation-module__LVLJKG__floorCards",
  "floorCardsDimmed": "about-submarine-room-validation-module__LVLJKG__floorCardsDimmed",
  "hullOverlay": "about-submarine-room-validation-module__LVLJKG__hullOverlay",
  "hullShade": "about-submarine-room-validation-module__LVLJKG__hullShade",
  "hullTexture": "about-submarine-room-validation-module__LVLJKG__hullTexture",
  "lampAnchor": "about-submarine-room-validation-module__LVLJKG__lampAnchor",
  "page": "about-submarine-room-validation-module__LVLJKG__page",
  "planetAnchor": "about-submarine-room-validation-module__LVLJKG__planetAnchor",
  "planetCoreGlow": "about-submarine-room-validation-module__LVLJKG__planetCoreGlow",
  "porthole": "about-submarine-room-validation-module__LVLJKG__porthole",
  "portholeFrame": "about-submarine-room-validation-module__LVLJKG__portholeFrame",
  "portholeGlass": "about-submarine-room-validation-module__LVLJKG__portholeGlass",
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
"[project]/CODEX升级/about-submarine-room-validation.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>AboutSubmarineRoomValidation)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconArrowLeft$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconArrowLeft.mjs [app-client] (ecmascript) <export default as IconArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconArrowRight$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconArrowRight.mjs [app-client] (ecmascript) <export default as IconArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$LayoutGroup$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/LayoutGroup/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlanetSystem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/PlanetSystem.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$three$2d$examples$2f$DeskLamp3D$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/three-examples/DeskLamp3D.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f_6f5c$$_8247$$_5916$$_58f3$2$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f_6f5c$$_8247$$_5916$$_58f3$2$2e$jpg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/潜艇外壳2.jpg.mjs { IMAGE => "[project]/潜艇外壳2.jpg (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f_8231$$_5ba4$$_5173$$_706f$$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f_8231$$_5ba4$$_5173$$_706f$$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/舱室关灯.png.mjs { IMAGE => "[project]/舱室关灯.png (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f_8231$$_5ba4$$_5f00$$_706f$$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f_8231$$_5ba4$$_5f00$$_706f$$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/舱室开灯.png.mjs { IMAGE => "[project]/舱室开灯.png (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$CODEX$_5347$$_7ea7$$2f$about$2d$submarine$2d$room$2d$validation$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/CODEX升级/about-submarine-room-validation.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
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
const floorCardBlueprints = [
    {
        left: 42.5,
        top: 81.2,
        rotate: -24,
        width: 88,
        scale: 0.95
    },
    {
        left: 48.8,
        top: 83.6,
        rotate: -6,
        width: 100,
        scale: 1.06
    },
    {
        left: 56.4,
        top: 82.1,
        rotate: 16,
        width: 92,
        scale: 0.98
    },
    {
        left: 63.2,
        top: 85.2,
        rotate: -12,
        width: 108,
        scale: 1.12
    },
    {
        left: 70.6,
        top: 82.8,
        rotate: 11,
        width: 96,
        scale: 1.01
    },
    {
        left: 77.2,
        top: 86.2,
        rotate: 24,
        width: 84,
        scale: 0.92
    },
    {
        left: 52.2,
        top: 88.4,
        rotate: -18,
        width: 82,
        scale: 0.9
    },
    {
        left: 67.4,
        top: 89.1,
        rotate: 7,
        width: 90,
        scale: 0.94
    }
];
const clamp = (value, min, max)=>Math.max(min, Math.min(max, value));
const mapRange = (value, start, end)=>clamp((value - start) / (end - start), 0, 1);
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
            fragments.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: match[2],
                target: "_blank",
                rel: "noopener noreferrer",
                className: "text-blue-400 underline transition-colors hover:text-blue-300",
                children: match[1]
            }, `${lineIndex}-${match.index}`, false, {
                fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
                lineNumber: 112,
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
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: [
                fragments,
                lineIndex < lines.length - 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
                    lineNumber: 136,
                    columnNumber: 41
                }, this) : null
            ]
        }, lineIndex, true, {
            fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
            lineNumber: 134,
            columnNumber: 7
        }, this);
    });
};
function ValidationTestimonials({ active, onPrev, onNext }) {
    _s();
    const [rotations, setRotations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ValidationTestimonials.useEffect": ()=>{
            setRotations(testimonials.map({
                "ValidationTestimonials.useEffect": ()=>Math.floor(Math.random() * 21) - 10
            }["ValidationTestimonials.useEffect"]));
        }
    }["ValidationTestimonials.useEffect"], []);
    const isActive = (index)=>index === active;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mx-auto max-w-md px-4 py-20 font-sans antialiased md:max-w-6xl md:px-8 lg:px-12",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative grid grid-cols-1 gap-24 md:grid-cols-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative mx-auto h-[500px] w-80",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                            initial: false,
                            children: testimonials.map((testimonial, index)=>{
                                const sharedLayoutId = isActive(index) ? `about-validation-card-${index}` : undefined;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    layoutId: sharedLayoutId,
                                    initial: {
                                        opacity: 0,
                                        scale: 0.9,
                                        z: -100,
                                        rotate: rotations[index] || 0
                                    },
                                    animate: {
                                        opacity: isActive(index) ? 1 : 0.7,
                                        scale: isActive(index) ? 1 : 0.95,
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
                                        scale: 0.9,
                                        z: 100,
                                        rotate: rotations[index] || 0
                                    },
                                    transition: {
                                        duration: 0.4,
                                        ease: "easeInOut"
                                    },
                                    className: "absolute inset-0 origin-bottom",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: testimonial.src,
                                            alt: testimonial.name,
                                            draggable: false,
                                            className: "h-full w-full rounded-3xl object-cover object-center"
                                        }, void 0, false, {
                                            fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
                                            lineNumber: 202,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 rounded-3xl bg-gray-800 opacity-8"
                                        }, void 0, false, {
                                            fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
                                            lineNumber: 208,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, testimonial.src, true, {
                                    fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
                                    lineNumber: 170,
                                    columnNumber: 19
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
                            lineNumber: 164,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
                        lineNumber: 163,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
                    lineNumber: 162,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col justify-between py-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-2xl font-bold text-gray-500 dark:text-white",
                                    children: testimonials[active].name
                                }, void 0, false, {
                                    fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
                                    lineNumber: 235,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-m text-gray-400 dark:text-neutral-500",
                                    children: testimonials[active].designation
                                }, void 0, false, {
                                    fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
                                    lineNumber: 238,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                    className: "mt-8 text-lg text-gray-400 dark:text-neutral-300",
                                    children: renderQuote(testimonials[active].quote)
                                }, void 0, false, {
                                    fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
                                    lineNumber: 241,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, active, true, {
                            fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
                            lineNumber: 216,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-start gap-4 pt-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onPrev,
                                    className: "group/button flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconArrowLeft$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconArrowLeft$3e$__["IconArrowLeft"], {
                                        className: "h-5 w-5 text-black transition-transform duration-300 group-hover/button:rotate-12 dark:text-neutral-400"
                                    }, void 0, false, {
                                        fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
                                        lineNumber: 250,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
                                    lineNumber: 246,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onNext,
                                    className: "group/button flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconArrowRight$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconArrowRight$3e$__["IconArrowRight"], {
                                        className: "h-5 w-5 text-black transition-transform duration-300 group-hover/button:-rotate-12 dark:text-neutral-400"
                                    }, void 0, false, {
                                        fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
                                        lineNumber: 256,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
                                    lineNumber: 252,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
                            lineNumber: 245,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
                    lineNumber: 215,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
            lineNumber: 161,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
        lineNumber: 160,
        columnNumber: 5
    }, this);
}
_s(ValidationTestimonials, "m/IpcoF6AbufYoHR608bdbdtEEQ=");
_c = ValidationTestimonials;
function AboutSubmarineRoomValidation() {
    _s1();
    const scrollTrackRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const frameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [lampOn, setLampOn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [alignment, setAlignment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("center");
    const [selectedIndex, setSelectedIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AboutSubmarineRoomValidation.useEffect": ()=>{
            const updateProgress = {
                "AboutSubmarineRoomValidation.useEffect.updateProgress": ()=>{
                    const track = scrollTrackRef.current;
                    if (!track) {
                        return;
                    }
                    const rect = track.getBoundingClientRect();
                    const total = Math.max(track.offsetHeight - window.innerHeight, 1);
                    setProgress(clamp(-rect.top / total, 0, 1));
                }
            }["AboutSubmarineRoomValidation.useEffect.updateProgress"];
            const onScroll = {
                "AboutSubmarineRoomValidation.useEffect.onScroll": ()=>{
                    if (frameRef.current !== null) {
                        return;
                    }
                    frameRef.current = window.requestAnimationFrame({
                        "AboutSubmarineRoomValidation.useEffect.onScroll": ()=>{
                            frameRef.current = null;
                            updateProgress();
                        }
                    }["AboutSubmarineRoomValidation.useEffect.onScroll"]);
                }
            }["AboutSubmarineRoomValidation.useEffect.onScroll"];
            updateProgress();
            window.addEventListener("scroll", onScroll, {
                passive: true
            });
            window.addEventListener("resize", onScroll);
            return ({
                "AboutSubmarineRoomValidation.useEffect": ()=>{
                    window.removeEventListener("scroll", onScroll);
                    window.removeEventListener("resize", onScroll);
                    if (frameRef.current !== null) {
                        window.cancelAnimationFrame(frameRef.current);
                    }
                }
            })["AboutSubmarineRoomValidation.useEffect"];
        }
    }["AboutSubmarineRoomValidation.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AboutSubmarineRoomValidation.useEffect": ()=>{
            const onKeyDown = {
                "AboutSubmarineRoomValidation.useEffect.onKeyDown": (event)=>{
                    if (event.key === "Escape") {
                        setSelectedIndex(null);
                    }
                }
            }["AboutSubmarineRoomValidation.useEffect.onKeyDown"];
            window.addEventListener("keydown", onKeyDown);
            return ({
                "AboutSubmarineRoomValidation.useEffect": ()=>window.removeEventListener("keydown", onKeyDown)
            })["AboutSubmarineRoomValidation.useEffect"];
        }
    }["AboutSubmarineRoomValidation.useEffect"], []);
    const zoomIn = mapRange(progress, 0.04, 0.22);
    const roomTakeover = mapRange(progress, 0.5, 0.7);
    const hullFade = mapRange(progress, 0.56, 0.72);
    const settle = mapRange(progress, 0.7, 0.86);
    const roomReveal = Math.round(220 + 2200 * roomTakeover);
    const portholeScale = 1 + zoomIn * 0.72;
    const hullOpacity = clamp(1 - hullFade, 0, 1);
    const roomBrightness = lampOn ? 0.76 + settle * 0.2 : 0.34 + settle * 0.06;
    const roomSaturation = lampOn ? 0.98 + settle * 0.08 : 0.72;
    const warmGlowOpacity = lampOn ? 0.2 + settle * 0.24 : 0;
    const planetCoreOpacity = lampOn ? 0 : 0.76 + settle * 0.18;
    const cardsOpacity = mapRange(progress, 0.62, 0.76);
    const causticsOpacity = 0.08 + (1 - hullOpacity) * 0.16;
    const roomPosition = alignment === "center" ? "50% 50%" : "56% 50%";
    const portholeCenterX = alignment === "center" ? "50%" : "58%";
    const stageStyle = {
        "--porthole-center-x": portholeCenterX,
        "--room-reveal": `${roomReveal}px`,
        "--porthole-scale": String(portholeScale),
        "--hull-opacity": String(hullOpacity),
        "--room-brightness": String(roomBrightness),
        "--room-saturation": String(roomSaturation),
        "--warm-glow-opacity": String(warmGlowOpacity),
        "--planet-core-opacity": String(planetCoreOpacity),
        "--cards-opacity": String(cardsOpacity),
        "--caustics-opacity": String(causticsOpacity),
        "--room-position": roomPosition
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$LayoutGroup$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LayoutGroup"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$CODEX$_5347$$_7ea7$$2f$about$2d$submarine$2d$room$2d$validation$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].page,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$CODEX$_5347$$_7ea7$$2f$about$2d$submarine$2d$room$2d$validation$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].blankPanel,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$CODEX$_5347$$_7ea7$$2f$about$2d$submarine$2d$room$2d$validation$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].blankPill,
                        children: "Before About Validation"
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    ref: scrollTrackRef,
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$CODEX$_5347$$_7ea7$$2f$about$2d$submarine$2d$room$2d$validation$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].scrollTrack,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$CODEX$_5347$$_7ea7$$2f$about$2d$submarine$2d$room$2d$validation$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stage,
                        style: stageStyle,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$CODEX$_5347$$_7ea7$$2f$about$2d$submarine$2d$room$2d$validation$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stageUi,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$CODEX$_5347$$_7ea7$$2f$about$2d$submarine$2d$room$2d$validation$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].alignSwitch,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$CODEX$_5347$$_7ea7$$2f$about$2d$submarine$2d$room$2d$validation$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].alignButton} ${alignment === "center" ? __TURBOPACK__imported__module__$5b$project$5d2f$CODEX$_5347$$_7ea7$$2f$about$2d$submarine$2d$room$2d$validation$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].alignButtonActive : ""}`,
                                                onClick: ()=>setAlignment("center"),
                                                children: "正中"
                                            }, void 0, false, {
                                                fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
                                                lineNumber: 362,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$CODEX$_5347$$_7ea7$$2f$about$2d$submarine$2d$room$2d$validation$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].alignButton} ${alignment === "right" ? __TURBOPACK__imported__module__$5b$project$5d2f$CODEX$_5347$$_7ea7$$2f$about$2d$submarine$2d$room$2d$validation$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].alignButtonActive : ""}`,
                                                onClick: ()=>setAlignment("right"),
                                                children: "偏右"
                                            }, void 0, false, {
                                                fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
                                                lineNumber: 371,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
                                        lineNumber: 361,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$CODEX$_5347$$_7ea7$$2f$about$2d$submarine$2d$room$2d$validation$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statusPill,
                                        children: lampOn ? "灯光已开" : "灯光已关"
                                    }, void 0, false, {
                                        fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
                                        lineNumber: 381,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
                                lineNumber: 360,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$CODEX$_5347$$_7ea7$$2f$about$2d$submarine$2d$room$2d$validation$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].aboutLabel,
                                children: "About Submarine Room Validation"
                            }, void 0, false, {
                                fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
                                lineNumber: 386,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$CODEX$_5347$$_7ea7$$2f$about$2d$submarine$2d$room$2d$validation$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].roomMask,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$CODEX$_5347$$_7ea7$$2f$about$2d$submarine$2d$room$2d$validation$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].roomLayers,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$CODEX$_5347$$_7ea7$$2f$about$2d$submarine$2d$room$2d$validation$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].roomLayer,
                                                style: {
                                                    backgroundImage: `url(${__TURBOPACK__imported__module__$5b$project$5d2f_8231$$_5ba4$$_5173$$_706f$$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f_8231$$_5ba4$$_5173$$_706f$$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"].src})`,
                                                    opacity: lampOn ? 0 : 1
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
                                                lineNumber: 390,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$CODEX$_5347$$_7ea7$$2f$about$2d$submarine$2d$room$2d$validation$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].roomLayer,
                                                style: {
                                                    backgroundImage: `url(${__TURBOPACK__imported__module__$5b$project$5d2f_8231$$_5ba4$$_5f00$$_706f$$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f_8231$$_5ba4$$_5f00$$_706f$$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"].src})`,
                                                    opacity: lampOn ? 1 : 0
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
                                                lineNumber: 394,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
                                        lineNumber: 389,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$CODEX$_5347$$_7ea7$$2f$about$2d$submarine$2d$room$2d$validation$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].roomVeil
                                    }, void 0, false, {
                                        fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
                                        lineNumber: 399,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
                                lineNumber: 388,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$CODEX$_5347$$_7ea7$$2f$about$2d$submarine$2d$room$2d$validation$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].waterCaustics
                            }, void 0, false, {
                                fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
                                lineNumber: 402,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$CODEX$_5347$$_7ea7$$2f$about$2d$submarine$2d$room$2d$validation$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].roomContent,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$CODEX$_5347$$_7ea7$$2f$about$2d$submarine$2d$room$2d$validation$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].roomShade
                                    }, void 0, false, {
                                        fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
                                        lineNumber: 405,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$CODEX$_5347$$_7ea7$$2f$about$2d$submarine$2d$room$2d$validation$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].warmGlow
                                    }, void 0, false, {
                                        fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
                                        lineNumber: 406,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$CODEX$_5347$$_7ea7$$2f$about$2d$submarine$2d$room$2d$validation$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].lampAnchor,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$three$2d$examples$2f$DeskLamp3D$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            onToggleLight: setLampOn
                                        }, void 0, false, {
                                            fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
                                            lineNumber: 409,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
                                        lineNumber: 408,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$CODEX$_5347$$_7ea7$$2f$about$2d$submarine$2d$room$2d$validation$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].planetAnchor,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$CODEX$_5347$$_7ea7$$2f$about$2d$submarine$2d$room$2d$validation$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].planetCoreGlow
                                            }, void 0, false, {
                                                fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
                                                lineNumber: 413,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlanetSystem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
                                                lineNumber: 414,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
                                        lineNumber: 412,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$CODEX$_5347$$_7ea7$$2f$about$2d$submarine$2d$room$2d$validation$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].floorCards} ${selectedIndex !== null ? __TURBOPACK__imported__module__$5b$project$5d2f$CODEX$_5347$$_7ea7$$2f$about$2d$submarine$2d$room$2d$validation$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].floorCardsDimmed : ""}`,
                                        children: testimonials.map((testimonial, index)=>{
                                            const card = floorCardBlueprints[index];
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                                type: "button",
                                                layoutId: `about-validation-card-${index}`,
                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$CODEX$_5347$$_7ea7$$2f$about$2d$submarine$2d$room$2d$validation$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].floorCard} ${selectedIndex === index ? __TURBOPACK__imported__module__$5b$project$5d2f$CODEX$_5347$$_7ea7$$2f$about$2d$submarine$2d$room$2d$validation$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].floorCardSelectedSource : ""}`,
                                                style: {
                                                    left: `${card.left}%`,
                                                    top: `${card.top}%`,
                                                    "--card-width": `${card.width}px`,
                                                    "--card-rotate": `${card.rotate}deg`,
                                                    "--card-scale": String(card.scale),
                                                    zIndex: 18 + index
                                                },
                                                onClick: ()=>setSelectedIndex(index),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$CODEX$_5347$$_7ea7$$2f$about$2d$submarine$2d$room$2d$validation$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].floorCardFrame,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: testimonial.src,
                                                        alt: testimonial.name,
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$CODEX$_5347$$_7ea7$$2f$about$2d$submarine$2d$room$2d$validation$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].floorCardImage,
                                                        draggable: false
                                                    }, void 0, false, {
                                                        fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
                                                        lineNumber: 447,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
                                                    lineNumber: 445,
                                                    columnNumber: 23
                                                }, this)
                                            }, testimonial.name, false, {
                                                fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
                                                lineNumber: 426,
                                                columnNumber: 21
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
                                        lineNumber: 417,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
                                lineNumber: 404,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$CODEX$_5347$$_7ea7$$2f$about$2d$submarine$2d$room$2d$validation$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hullOverlay,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$CODEX$_5347$$_7ea7$$2f$about$2d$submarine$2d$room$2d$validation$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hullTexture,
                                        style: {
                                            backgroundImage: `url(${__TURBOPACK__imported__module__$5b$project$5d2f_6f5c$$_8247$$_5916$$_58f3$2$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f_6f5c$$_8247$$_5916$$_58f3$2$2e$jpg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"].src})`
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
                                        lineNumber: 461,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$CODEX$_5347$$_7ea7$$2f$about$2d$submarine$2d$room$2d$validation$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hullShade
                                    }, void 0, false, {
                                        fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
                                        lineNumber: 465,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$CODEX$_5347$$_7ea7$$2f$about$2d$submarine$2d$room$2d$validation$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].porthole,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$CODEX$_5347$$_7ea7$$2f$about$2d$submarine$2d$room$2d$validation$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].portholeFrame
                                            }, void 0, false, {
                                                fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
                                                lineNumber: 467,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$CODEX$_5347$$_7ea7$$2f$about$2d$submarine$2d$room$2d$validation$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].portholeGlass
                                            }, void 0, false, {
                                                fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
                                                lineNumber: 468,
                                                columnNumber: 17
                                            }, this),
                                            Array.from({
                                                length: 12
                                            }, (_, index)=>{
                                                const angle = index / 12 * Math.PI * 2;
                                                const radius = 49;
                                                const x = 50 + Math.cos(angle) * radius;
                                                const y = 50 + Math.sin(angle) * radius;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$CODEX$_5347$$_7ea7$$2f$about$2d$submarine$2d$room$2d$validation$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].rivet,
                                                    style: {
                                                        left: `${x}%`,
                                                        top: `${y}%`
                                                    }
                                                }, index, false, {
                                                    fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
                                                    lineNumber: 476,
                                                    columnNumber: 21
                                                }, this);
                                            })
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
                                        lineNumber: 466,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
                                lineNumber: 460,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
                        lineNumber: 359,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
                    lineNumber: 358,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$CODEX$_5347$$_7ea7$$2f$about$2d$submarine$2d$room$2d$validation$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].afterPanel,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$CODEX$_5347$$_7ea7$$2f$about$2d$submarine$2d$room$2d$validation$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].blankPill,
                            children: "After About Validation"
                        }, void 0, false, {
                            fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
                            lineNumber: 489,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                            lineNumber: 490,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
                    lineNumber: 488,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                    children: selectedIndex !== null ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$CODEX$_5347$$_7ea7$$2f$about$2d$submarine$2d$room$2d$validation$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].detailOverlay,
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        exit: {
                            opacity: 0
                        },
                        onClick: ()=>setSelectedIndex(null),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$CODEX$_5347$$_7ea7$$2f$about$2d$submarine$2d$room$2d$validation$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].detailShell,
                            initial: {
                                opacity: 0,
                                y: 16
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            exit: {
                                opacity: 0,
                                y: 16
                            },
                            transition: {
                                duration: 0.24,
                                ease: "easeOut"
                            },
                            onClick: (event)=>event.stopPropagation(),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$CODEX$_5347$$_7ea7$$2f$about$2d$submarine$2d$room$2d$validation$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].detailClose,
                                    onClick: ()=>setSelectedIndex(null),
                                    children: "×"
                                }, void 0, false, {
                                    fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
                                    lineNumber: 510,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ValidationTestimonials, {
                                    active: selectedIndex,
                                    onPrev: ()=>setSelectedIndex((selectedIndex - 1 + testimonials.length) % testimonials.length),
                                    onNext: ()=>setSelectedIndex((selectedIndex + 1) % testimonials.length)
                                }, void 0, false, {
                                    fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
                                    lineNumber: 517,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
                            lineNumber: 502,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
                        lineNumber: 495,
                        columnNumber: 13
                    }, this) : null
                }, void 0, false, {
                    fileName: "[project]/CODEX升级/about-submarine-room-validation.tsx",
                    lineNumber: 493,
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
_s1(AboutSubmarineRoomValidation, "KpEfbv9wN72QBOG1twaxZrA7WXY=");
_c1 = AboutSubmarineRoomValidation;
var _c, _c1;
__turbopack_context__.k.register(_c, "ValidationTestimonials");
__turbopack_context__.k.register(_c1, "AboutSubmarineRoomValidation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_6b21e92e._.js.map