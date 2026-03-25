(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/lib/utils.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "cn": (()=>cn)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/magicui/text-animate.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "TextAnimate": (()=>TextAnimate)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use client";
;
;
;
;
const staggerTimings = {
    text: 0.06,
    word: 0.05,
    character: 0.03,
    line: 0.06
};
const defaultContainerVariants = {
    hidden: {
        opacity: 1
    },
    show: {
        opacity: 1,
        transition: {
            delayChildren: 0,
            staggerChildren: 0.05
        }
    },
    exit: {
        opacity: 0,
        transition: {
            staggerChildren: 0.05,
            staggerDirection: -1
        }
    }
};
const defaultItemVariants = {
    hidden: {
        opacity: 0
    },
    show: {
        opacity: 1
    },
    exit: {
        opacity: 0
    }
};
const defaultItemAnimationVariants = {
    fadeIn: {
        container: defaultContainerVariants,
        item: {
            hidden: {
                opacity: 0,
                y: 20
            },
            show: {
                opacity: 1,
                y: 0,
                transition: {
                    duration: 0.3
                }
            },
            exit: {
                opacity: 0,
                y: 20,
                transition: {
                    duration: 0.3
                }
            }
        }
    },
    blurIn: {
        container: defaultContainerVariants,
        item: {
            hidden: {
                opacity: 0,
                filter: "blur(10px)"
            },
            show: {
                opacity: 1,
                filter: "blur(0px)",
                transition: {
                    duration: 0.3
                }
            },
            exit: {
                opacity: 0,
                filter: "blur(10px)",
                transition: {
                    duration: 0.3
                }
            }
        }
    },
    blurInUp: {
        container: defaultContainerVariants,
        item: {
            hidden: {
                opacity: 0,
                filter: "blur(10px)",
                y: 20
            },
            show: {
                opacity: 1,
                filter: "blur(0px)",
                y: 0,
                transition: {
                    y: {
                        duration: 0.3
                    },
                    opacity: {
                        duration: 0.4
                    },
                    filter: {
                        duration: 0.3
                    }
                }
            },
            exit: {
                opacity: 0,
                filter: "blur(10px)",
                y: 20,
                transition: {
                    y: {
                        duration: 0.3
                    },
                    opacity: {
                        duration: 0.4
                    },
                    filter: {
                        duration: 0.3
                    }
                }
            }
        }
    },
    blurInDown: {
        container: defaultContainerVariants,
        item: {
            hidden: {
                opacity: 0,
                filter: "blur(10px)",
                y: -20
            },
            show: {
                opacity: 1,
                filter: "blur(0px)",
                y: 0,
                transition: {
                    y: {
                        duration: 0.3
                    },
                    opacity: {
                        duration: 0.4
                    },
                    filter: {
                        duration: 0.3
                    }
                }
            }
        }
    },
    slideUp: {
        container: defaultContainerVariants,
        item: {
            hidden: {
                y: 20,
                opacity: 0
            },
            show: {
                y: 0,
                opacity: 1,
                transition: {
                    duration: 0.3
                }
            },
            exit: {
                y: -20,
                opacity: 0,
                transition: {
                    duration: 0.3
                }
            }
        }
    },
    slideDown: {
        container: defaultContainerVariants,
        item: {
            hidden: {
                y: -20,
                opacity: 0
            },
            show: {
                y: 0,
                opacity: 1,
                transition: {
                    duration: 0.3
                }
            },
            exit: {
                y: 20,
                opacity: 0,
                transition: {
                    duration: 0.3
                }
            }
        }
    },
    slideLeft: {
        container: defaultContainerVariants,
        item: {
            hidden: {
                x: 20,
                opacity: 0
            },
            show: {
                x: 0,
                opacity: 1,
                transition: {
                    duration: 0.3
                }
            },
            exit: {
                x: -20,
                opacity: 0,
                transition: {
                    duration: 0.3
                }
            }
        }
    },
    slideRight: {
        container: defaultContainerVariants,
        item: {
            hidden: {
                x: -20,
                opacity: 0
            },
            show: {
                x: 0,
                opacity: 1,
                transition: {
                    duration: 0.3
                }
            },
            exit: {
                x: 20,
                opacity: 0,
                transition: {
                    duration: 0.3
                }
            }
        }
    },
    scaleUp: {
        container: defaultContainerVariants,
        item: {
            hidden: {
                scale: 0.5,
                opacity: 0
            },
            show: {
                scale: 1,
                opacity: 1,
                transition: {
                    duration: 0.3,
                    scale: {
                        type: "spring",
                        damping: 15,
                        stiffness: 300
                    }
                }
            },
            exit: {
                scale: 0.5,
                opacity: 0,
                transition: {
                    duration: 0.3
                }
            }
        }
    },
    scaleDown: {
        container: defaultContainerVariants,
        item: {
            hidden: {
                scale: 1.5,
                opacity: 0
            },
            show: {
                scale: 1,
                opacity: 1,
                transition: {
                    duration: 0.3,
                    scale: {
                        type: "spring",
                        damping: 15,
                        stiffness: 300
                    }
                }
            },
            exit: {
                scale: 1.5,
                opacity: 0,
                transition: {
                    duration: 0.3
                }
            }
        }
    }
};
const TextAnimateBase = ({ children, delay = 0, duration = 0.3, variants, className, segmentClassName, as: Component = "p", startOnView = true, once = false, by = "word", animation = "fadeIn", ...props })=>{
    const MotionComponent = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].create(Component);
    let segments = [];
    switch(by){
        case "word":
            segments = children.split(/(\s+)/);
            break;
        case "character":
            segments = children.split("");
            break;
        case "line":
            segments = children.split("\n");
            break;
        case "text":
        default:
            segments = [
                children
            ];
            break;
    }
    const finalVariants = variants ? {
        container: {
            hidden: {
                opacity: 0
            },
            show: {
                opacity: 1,
                transition: {
                    opacity: {
                        duration: 0.01,
                        delay
                    },
                    delayChildren: delay,
                    staggerChildren: duration / segments.length
                }
            },
            exit: {
                opacity: 0,
                transition: {
                    staggerChildren: duration / segments.length,
                    staggerDirection: -1
                }
            }
        },
        item: variants
    } : animation ? {
        container: {
            ...defaultItemAnimationVariants[animation].container,
            show: {
                ...defaultItemAnimationVariants[animation].container.show,
                transition: {
                    delayChildren: delay,
                    staggerChildren: duration / segments.length
                }
            },
            exit: {
                ...defaultItemAnimationVariants[animation].container.exit,
                transition: {
                    staggerChildren: duration / segments.length,
                    staggerDirection: -1
                }
            }
        },
        item: defaultItemAnimationVariants[animation].item
    } : {
        container: defaultContainerVariants,
        item: defaultItemVariants
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        mode: "popLayout",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MotionComponent, {
            variants: finalVariants.container,
            initial: "hidden",
            whileInView: startOnView ? "show" : undefined,
            animate: startOnView ? undefined : "show",
            exit: "exit",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("whitespace-pre-wrap", className),
            viewport: {
                once
            },
            ...props,
            children: segments.map((segment, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                    variants: finalVariants.item,
                    custom: i * staggerTimings[by],
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(by === "line" ? "block" : "inline-block whitespace-pre", by === "character" && "", segmentClassName),
                    children: segment
                }, `${by}-${segment}-${i}`, false, {
                    fileName: "[project]/src/components/magicui/text-animate.tsx",
                    lineNumber: 391,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/src/components/magicui/text-animate.tsx",
            lineNumber: 380,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/magicui/text-animate.tsx",
        lineNumber: 379,
        columnNumber: 5
    }, this);
};
_c = TextAnimateBase;
const TextAnimate = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(TextAnimateBase);
_c1 = TextAnimate;
var _c, _c1;
__turbopack_context__.k.register(_c, "TextAnimateBase");
__turbopack_context__.k.register(_c1, "TextAnimate");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/LoadingCanvas.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
const LoadingCanvas = ({ onFinish })=>{
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [fadeOut, setFadeOut] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LoadingCanvas.useEffect": ()=>{
            let animationId;
            let img = null;
            let edgeLines = [];
            let drawnIndex = 0;
            const initializeCanvas = {
                "LoadingCanvas.useEffect.initializeCanvas": ()=>{
                    const canvas = canvasRef.current;
                    if (!canvas) return;
                    const ctx = canvas.getContext('2d');
                    if (!ctx) return;
                    canvas.width = window.innerWidth;
                    canvas.height = window.innerHeight;
                    ctx.fillStyle = '#808080';
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                    img = new Image();
                    img.crossOrigin = 'anonymous';
                    img.onload = ({
                        "LoadingCanvas.useEffect.initializeCanvas": ()=>{
                            processImage();
                        }
                    })["LoadingCanvas.useEffect.initializeCanvas"];
                    img.src = '/assets/bg_big2.webp'; // 保证图片比例为1920x1080
                }
            }["LoadingCanvas.useEffect.initializeCanvas"];
            const processImage = {
                "LoadingCanvas.useEffect.processImage": ()=>{
                    if (!img || !canvasRef.current) return;
                    const canvas = canvasRef.current;
                    const ctx = canvas.getContext('2d');
                    const { width, height } = canvas;
                    // 用 cover 策略绘制：铺满整个 canvas，等比例填充并裁剪多余部分
                    const imgAspect = img.width / img.height;
                    const canvasAspect = width / height;
                    let sx = 0, sy = 0, sWidth = img.width, sHeight = img.height;
                    if (imgAspect > canvasAspect) {
                        // 图片太宽
                        sWidth = img.height * canvasAspect;
                        sx = (img.width - sWidth) / 2;
                    } else {
                        // 图片太高
                        sHeight = img.width / canvasAspect;
                        sy = (img.height - sHeight) / 2;
                    }
                    ctx.drawImage(img, sx, sy, sWidth, sHeight, 0, 0, width, height);
                    const imageData = ctx.getImageData(0, 0, width, height);
                    const data = imageData.data;
                    ctx.fillStyle = '#808080';
                    ctx.fillRect(0, 0, width, height);
                    // 边缘提取为线段：基于灰度差
                    const threshold = 30;
                    const visited = new Set();
                    const lines = [];
                    const getGray = {
                        "LoadingCanvas.useEffect.processImage.getGray": (i)=>data[i] * 0.299 + data[i + 1] * 0.587 + data[i + 2] * 0.114
                    }["LoadingCanvas.useEffect.processImage.getGray"];
                    for(let y = 1; y < height - 1; y++){
                        for(let x = 1; x < width - 1; x++){
                            const i = (y * width + x) * 4;
                            const g = getGray(i);
                            const dx = getGray(i + 4) - g;
                            const dy = getGray(i + width * 4) - g;
                            const mag = Math.sqrt(dx * dx + dy * dy);
                            if (mag > threshold) {
                                const key = `${x},${y}`;
                                if (!visited.has(key)) {
                                    const line = [];
                                    traceLine(x, y, visited, line, width, height, data, threshold);
                                    if (line.length >= 5) lines.push(line);
                                }
                            }
                        }
                    }
                    edgeLines = lines.sort({
                        "LoadingCanvas.useEffect.processImage": ()=>Math.random() - 0.5
                    }["LoadingCanvas.useEffect.processImage"]); // 打乱线条绘制顺序
                    startSketchAnimation();
                }
            }["LoadingCanvas.useEffect.processImage"];
            const traceLine = {
                "LoadingCanvas.useEffect.traceLine": (x, y, visited, line, width, height, data, threshold)=>{
                    const stack = [
                        [
                            x,
                            y
                        ]
                    ];
                    const getGray = {
                        "LoadingCanvas.useEffect.traceLine.getGray": (i)=>data[i] * 0.299 + data[i + 1] * 0.587 + data[i + 2] * 0.114
                    }["LoadingCanvas.useEffect.traceLine.getGray"];
                    while(stack.length){
                        const [cx, cy] = stack.pop();
                        const key = `${cx},${cy}`;
                        if (visited.has(key)) continue;
                        visited.add(key);
                        line.push([
                            cx,
                            cy
                        ]);
                        for(let dx = -1; dx <= 1; dx++){
                            for(let dy = -1; dy <= 1; dy++){
                                const nx = cx + dx;
                                const ny = cy + dy;
                                if (nx < 1 || nx >= width - 1 || ny < 1 || ny >= height - 1) continue;
                                const ni = (ny * width + nx) * 4;
                                const g = getGray(ni);
                                const dX = getGray(ni + 4) - g;
                                const dY = getGray(ni + width * 4) - g;
                                const mag = Math.sqrt(dX * dX + dY * dY);
                                if (mag > threshold && !visited.has(`${nx},${ny}`)) {
                                    stack.push([
                                        nx,
                                        ny
                                    ]);
                                }
                            }
                        }
                    }
                }
            }["LoadingCanvas.useEffect.traceLine"];
            const startSketchAnimation = {
                "LoadingCanvas.useEffect.startSketchAnimation": ()=>{
                    const canvas = canvasRef.current;
                    const ctx = canvas.getContext('2d');
                    ctx.strokeStyle = 'white';
                    ctx.lineWidth = 0.4;
                    ctx.lineCap = 'round';
                    const linesPerFrame = 3;
                    const drawNext = {
                        "LoadingCanvas.useEffect.startSketchAnimation.drawNext": ()=>{
                            for(let i = 0; i < linesPerFrame && drawnIndex < edgeLines.length; i++){
                                const line = edgeLines[drawnIndex];
                                ctx.beginPath();
                                for(let j = 0; j < line.length; j++){
                                    const [x, y] = line[j];
                                    if (j === 0) ctx.moveTo(x, y);
                                    else ctx.lineTo(x, y);
                                }
                                ctx.stroke();
                                drawnIndex++;
                            }
                            if (drawnIndex >= edgeLines.length) {
                                setTimeout({
                                    "LoadingCanvas.useEffect.startSketchAnimation.drawNext": ()=>startColorAnimation()
                                }["LoadingCanvas.useEffect.startSketchAnimation.drawNext"], 500);
                            } else {
                                animationId = requestAnimationFrame(drawNext);
                            }
                        }
                    }["LoadingCanvas.useEffect.startSketchAnimation.drawNext"];
                    drawNext();
                }
            }["LoadingCanvas.useEffect.startSketchAnimation"];
            const startColorAnimation = {
                "LoadingCanvas.useEffect.startColorAnimation": ()=>{
                    if (!img || !canvasRef.current) return;
                    const canvas = canvasRef.current;
                    const ctx = canvas.getContext('2d');
                    if (!ctx) return;
                    let opacity = 0;
                    const fadeIn = {
                        "LoadingCanvas.useEffect.startColorAnimation.fadeIn": ()=>{
                            opacity += 0.08;
                            ctx.globalAlpha = 1;
                            ctx.fillStyle = '#808080';
                            ctx.fillRect(0, 0, canvas.width, canvas.height);
                            // 重画线稿
                            ctx.strokeStyle = 'white';
                            ctx.lineWidth = 0.4;
                            for(let i = 0; i < drawnIndex; i++){
                                const line = edgeLines[i];
                                ctx.beginPath();
                                for(let j = 0; j < line.length; j++){
                                    const [x, y] = line[j];
                                    if (j === 0) ctx.moveTo(x, y);
                                    else ctx.lineTo(x, y);
                                }
                                ctx.stroke();
                            }
                            ctx.globalAlpha = opacity;
                            // 重新用 cover 策略画图像
                            const { width, height } = canvas;
                            if (!img) return;
                            const imgAspect = img.width / img.height;
                            const canvasAspect = width / height;
                            let sx = 0, sy = 0, sWidth = img.width, sHeight = img.height;
                            if (imgAspect > canvasAspect) {
                                sWidth = img.height * canvasAspect;
                                sx = (img.width - sWidth) / 2;
                            } else {
                                sHeight = img.width / canvasAspect;
                                sy = (img.height - sHeight) / 2;
                            }
                            ctx.drawImage(img, sx, sy, sWidth, sHeight, 0, 0, width, height);
                            ctx.globalAlpha = 1;
                            if (opacity >= 1) {
                                setFadeOut(true);
                                setTimeout({
                                    "LoadingCanvas.useEffect.startColorAnimation.fadeIn": ()=>{
                                        setFadeOut(false);
                                        onFinish();
                                    }
                                }["LoadingCanvas.useEffect.startColorAnimation.fadeIn"], 400);
                            } else {
                                animationId = requestAnimationFrame(fadeIn);
                            }
                        }
                    }["LoadingCanvas.useEffect.startColorAnimation.fadeIn"];
                    fadeIn();
                }
            }["LoadingCanvas.useEffect.startColorAnimation"];
            initializeCanvas();
            return ({
                "LoadingCanvas.useEffect": ()=>{
                    cancelAnimationFrame(animationId);
                }
            })["LoadingCanvas.useEffect"];
        }
    }["LoadingCanvas.useEffect"], [
        onFinish
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        ref: canvasRef,
        className: `fixed inset-0 z-50 transition-opacity duration-1000 ease-out ${fadeOut ? 'opacity-0' : 'opacity-100'}`,
        style: {
            display: 'block',
            pointerEvents: 'none',
            transition: 'opacity 1s ease-in-out'
        }
    }, void 0, false, {
        fileName: "[project]/src/components/LoadingCanvas.tsx",
        lineNumber: 237,
        columnNumber: 5
    }, this);
};
_s(LoadingCanvas, "cc5mLnMqBdeAcvsKaRkn6NaH8zI=");
_c = LoadingCanvas;
const __TURBOPACK__default__export__ = LoadingCanvas;
var _c;
__turbopack_context__.k.register(_c, "LoadingCanvas");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/3d-pin.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "PinContainer": (()=>PinContainer),
    "PinPerspective": (()=>PinPerspective)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const PinContainer = ({ children, title, href, className, containerClassName })=>{
    _s();
    const [transform, setTransform] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("translate(-50%,-50%) rotateX(0deg)");
    const onMouseEnter = ()=>{
        setTransform("translate(-50%,-50%) rotateX(40deg) scale(0.8)");
    };
    const onMouseLeave = ()=>{
        setTransform("translate(-50%,-50%) rotateX(0deg) scale(1)");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative group/pin z-50  cursor-pointer", containerClassName),
        onMouseEnter: onMouseEnter,
        onMouseLeave: onMouseLeave,
        href: href || "/",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    perspective: "1000px",
                    transform: "rotateX(70deg) translateZ(0deg)"
                },
                className: "absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        transform: transform
                    },
                    className: "absolute left-1/2 p-4 top-1/2  flex justify-start items-start  rounded-2xl  shadow-[0_8px_16px_rgb(0_0_0/0.4)] bg-white border border-gray-200 group-hover/pin:border-gray-300 transition duration-700 overflow-hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(" relative z-50 ", className),
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/3d-pin.tsx",
                        lineNumber: 54,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/3d-pin.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/3d-pin.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PinPerspective, {
                title: title,
                href: href
            }, void 0, false, {
                fileName: "[project]/src/components/ui/3d-pin.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/3d-pin.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
};
_s(PinContainer, "o9W5A1lfy4goHwEjTwH9zgOmf+E=");
_c = PinContainer;
const PinPerspective = ({ title, href })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "pointer-events-none  w-96 h-80 flex items-center justify-center opacity-0 group-hover/pin:opacity-100 z-[60] transition duration-500",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: " w-full h-full -mt-7 flex-none  inset-0",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-0 inset-x-0  flex justify-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div" // Changed from <a> to <div>
                    , {
                        // href={href} // Removed href as div doesn't support it directly
                        // target={"_blank"} // Removed target as div doesn't support it directly
                        onClick: ()=>href && window.open(href, "_blank"),
                        className: "relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 cursor-pointer" // Added cursor-pointer
                        ,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "relative z-20 text-white text-xs font-bold inline-block py-0.5",
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/3d-pin.tsx",
                                lineNumber: 79,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover/btn:opacity-40"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/3d-pin.tsx",
                                lineNumber: 83,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/3d-pin.tsx",
                        lineNumber: 73,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/3d-pin.tsx",
                    lineNumber: 72,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        perspective: "1000px",
                        transform: "rotateX(70deg) translateZ(0)"
                    },
                    className: "absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    scale: 0,
                                    x: "-50%",
                                    y: "-50%"
                                },
                                animate: {
                                    opacity: [
                                        0,
                                        1,
                                        0.5,
                                        0
                                    ],
                                    scale: 1,
                                    z: 0
                                },
                                transition: {
                                    duration: 6,
                                    repeat: Infinity,
                                    delay: 0
                                },
                                className: "absolute left-1/2 top-1/2  h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/3d-pin.tsx",
                                lineNumber: 95,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    scale: 0,
                                    x: "-50%",
                                    y: "-50%"
                                },
                                animate: {
                                    opacity: [
                                        0,
                                        1,
                                        0.5,
                                        0
                                    ],
                                    scale: 1,
                                    z: 0
                                },
                                transition: {
                                    duration: 6,
                                    repeat: Infinity,
                                    delay: 2
                                },
                                className: "absolute left-1/2 top-1/2  h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/3d-pin.tsx",
                                lineNumber: 115,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    scale: 0,
                                    x: "-50%",
                                    y: "-50%"
                                },
                                animate: {
                                    opacity: [
                                        0,
                                        1,
                                        0.5,
                                        0
                                    ],
                                    scale: 1,
                                    z: 0
                                },
                                transition: {
                                    duration: 6,
                                    repeat: Infinity,
                                    delay: 4
                                },
                                className: "absolute left-1/2 top-1/2  h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/3d-pin.tsx",
                                lineNumber: 135,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true)
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/3d-pin.tsx",
                    lineNumber: 87,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-cyan-500 translate-y-[14px] w-px h-20 group-hover/pin:h-40 blur-[2px]"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/3d-pin.tsx",
                            lineNumber: 159,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-cyan-500 translate-y-[14px] w-px h-20 group-hover/pin:h-40  "
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/3d-pin.tsx",
                            lineNumber: 160,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "absolute right-1/2 translate-x-[1.5px] bottom-1/2 bg-cyan-600 translate-y-[14px] w-[4px] h-[4px] rounded-full z-40 blur-[3px]"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/3d-pin.tsx",
                            lineNumber: 161,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "absolute right-1/2 translate-x-[0.5px] bottom-1/2 bg-cyan-300 translate-y-[14px] w-[2px] h-[2px] rounded-full z-40 "
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/3d-pin.tsx",
                            lineNumber: 162,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/3d-pin.tsx",
            lineNumber: 71,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/3d-pin.tsx",
        lineNumber: 70,
        columnNumber: 5
    }, this);
};
_c1 = PinPerspective;
var _c, _c1;
__turbopack_context__.k.register(_c, "PinContainer");
__turbopack_context__.k.register(_c1, "PinPerspective");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/magicui/morphing-text.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "MorphingText": (()=>MorphingText)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
const morphTime = 1.5;
const cooldownTime = 0.5;
const useMorphingText = (texts)=>{
    _s();
    const textIndexRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const morphRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const cooldownRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const timeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Date());
    const text1Ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const text2Ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const setStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useMorphingText.useCallback[setStyles]": (fraction)=>{
            const [current1, current2] = [
                text1Ref.current,
                text2Ref.current
            ];
            if (!current1 || !current2) return;
            current2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
            current2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
            const invertedFraction = 1 - fraction;
            current1.style.filter = `blur(${Math.min(8 / invertedFraction - 8, 100)}px)`;
            current1.style.opacity = `${Math.pow(invertedFraction, 0.4) * 100}%`;
            current1.textContent = texts[textIndexRef.current % texts.length];
            current2.textContent = texts[(textIndexRef.current + 1) % texts.length];
        }
    }["useMorphingText.useCallback[setStyles]"], [
        texts
    ]);
    const doMorph = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useMorphingText.useCallback[doMorph]": ()=>{
            morphRef.current -= cooldownRef.current;
            cooldownRef.current = 0;
            let fraction = morphRef.current / morphTime;
            if (fraction > 1) {
                cooldownRef.current = cooldownTime;
                fraction = 1;
            }
            setStyles(fraction);
            if (fraction === 1) {
                textIndexRef.current++;
            }
        }
    }["useMorphingText.useCallback[doMorph]"], [
        setStyles
    ]);
    const doCooldown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useMorphingText.useCallback[doCooldown]": ()=>{
            morphRef.current = 0;
            const [current1, current2] = [
                text1Ref.current,
                text2Ref.current
            ];
            if (current1 && current2) {
                current2.style.filter = "none";
                current2.style.opacity = "100%";
                current1.style.filter = "none";
                current1.style.opacity = "0%";
            }
        }
    }["useMorphingText.useCallback[doCooldown]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useMorphingText.useEffect": ()=>{
            let animationFrameId;
            const animate = {
                "useMorphingText.useEffect.animate": ()=>{
                    animationFrameId = requestAnimationFrame(animate);
                    const newTime = new Date();
                    const dt = (newTime.getTime() - timeRef.current.getTime()) / 1000;
                    timeRef.current = newTime;
                    cooldownRef.current -= dt;
                    if (cooldownRef.current <= 0) doMorph();
                    else doCooldown();
                }
            }["useMorphingText.useEffect.animate"];
            animate();
            return ({
                "useMorphingText.useEffect": ()=>{
                    cancelAnimationFrame(animationFrameId);
                }
            })["useMorphingText.useEffect"];
        }
    }["useMorphingText.useEffect"], [
        doMorph,
        doCooldown
    ]);
    return {
        text1Ref,
        text2Ref
    };
};
_s(useMorphingText, "vYov/KX0OjXsrFd041XYAEHxjJI=");
const Texts = ({ texts })=>{
    _s1();
    const { text1Ref, text2Ref } = useMorphingText(texts);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute inset-x-0 top-0 m-auto inline-block w-full",
                ref: text1Ref
            }, void 0, false, {
                fileName: "[project]/src/components/magicui/morphing-text.tsx",
                lineNumber: 103,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute inset-x-0 top-0 m-auto inline-block w-full",
                ref: text2Ref
            }, void 0, false, {
                fileName: "[project]/src/components/magicui/morphing-text.tsx",
                lineNumber: 107,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
};
_s1(Texts, "op+oo1SE4zqMNOmGXVjxgsLCyFw=", false, function() {
    return [
        useMorphingText
    ];
});
_c = Texts;
const SvgFilters = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        id: "filters",
        className: "fixed h-0 w-0",
        preserveAspectRatio: "xMidYMid slice",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                id: "threshold",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feColorMatrix", {
                    in: "SourceGraphic",
                    type: "matrix",
                    values: "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 255 -140"
                }, void 0, false, {
                    fileName: "[project]/src/components/magicui/morphing-text.tsx",
                    lineNumber: 123,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/magicui/morphing-text.tsx",
                lineNumber: 122,
                columnNumber: 7
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/magicui/morphing-text.tsx",
            lineNumber: 121,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/magicui/morphing-text.tsx",
        lineNumber: 116,
        columnNumber: 3
    }, this);
_c1 = SvgFilters;
const MorphingText = ({ texts, className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative mx-auto h-16 w-full max-w-screen-md text-center font-sans text-[40pt] font-bold leading-none [filter:url(#threshold)_blur(0.6px)] md:h-24 lg:text-[6rem]", className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Texts, {
                texts: texts
            }, void 0, false, {
                fileName: "[project]/src/components/magicui/morphing-text.tsx",
                lineNumber: 146,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SvgFilters, {}, void 0, false, {
                fileName: "[project]/src/components/magicui/morphing-text.tsx",
                lineNumber: 147,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/magicui/morphing-text.tsx",
        lineNumber: 140,
        columnNumber: 3
    }, this);
_c2 = MorphingText;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "Texts");
__turbopack_context__.k.register(_c1, "SvgFilters");
__turbopack_context__.k.register(_c2, "MorphingText");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/bento-grid.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "BentoGrid": (()=>BentoGrid),
    "BentoGridItem": (()=>BentoGridItem)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
const BentoGrid = ({ className, children })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3", className),
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/bento-grid.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
};
_c = BentoGrid;
const BentoGridItem = ({ className, title, description, header, icon, children })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-neutral-200 bg-white p-4 transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none", className),
        children: [
            header,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "transition duration-200 group-hover/bento:translate-x-2",
                children: [
                    icon,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-2 mb-2 font-sans font-bold text-neutral-600 dark:text-neutral-200",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/bento-grid.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "font-sans text-xs font-normal text-neutral-600 dark:text-neutral-300",
                        children: description
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/bento-grid.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this),
                    children
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/bento-grid.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/bento-grid.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
};
_c1 = BentoGridItem;
var _c, _c1;
__turbopack_context__.k.register(_c, "BentoGrid");
__turbopack_context__.k.register(_c1, "BentoGridItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/macbook-scroll.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "KBtn": (()=>KBtn),
    "Keypad": (()=>Keypad),
    "Lid": (()=>Lid),
    "MacbookScroll": (()=>MacbookScroll),
    "OptionKey": (()=>OptionKey),
    "SpeakerGrid": (()=>SpeakerGrid),
    "Trackpad": (()=>Trackpad)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconBrightnessDown$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconBrightnessDown$3e$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconBrightnessDown.mjs [app-client] (ecmascript) <export default as IconBrightnessDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconBrightnessUp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconBrightnessUp$3e$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconBrightnessUp.mjs [app-client] (ecmascript) <export default as IconBrightnessUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconCaretRightFilled$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconCaretRightFilled$3e$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconCaretRightFilled.mjs [app-client] (ecmascript) <export default as IconCaretRightFilled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconCaretUpFilled$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconCaretUpFilled$3e$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconCaretUpFilled.mjs [app-client] (ecmascript) <export default as IconCaretUpFilled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconChevronUp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconChevronUp$3e$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconChevronUp.mjs [app-client] (ecmascript) <export default as IconChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconMicrophone$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconMicrophone$3e$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconMicrophone.mjs [app-client] (ecmascript) <export default as IconMicrophone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconMoon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconMoon$3e$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconMoon.mjs [app-client] (ecmascript) <export default as IconMoon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconPlayerSkipForward$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconPlayerSkipForward$3e$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconPlayerSkipForward.mjs [app-client] (ecmascript) <export default as IconPlayerSkipForward>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconPlayerTrackNext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconPlayerTrackNext$3e$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconPlayerTrackNext.mjs [app-client] (ecmascript) <export default as IconPlayerTrackNext>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconPlayerTrackPrev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconPlayerTrackPrev$3e$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconPlayerTrackPrev.mjs [app-client] (ecmascript) <export default as IconPlayerTrackPrev>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconTable$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconTable$3e$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconTable.mjs [app-client] (ecmascript) <export default as IconTable>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconVolume$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconVolume$3e$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconVolume.mjs [app-client] (ecmascript) <export default as IconVolume>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconVolume2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconVolume2$3e$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconVolume2.mjs [app-client] (ecmascript) <export default as IconVolume2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconVolume3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconVolume3$3e$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconVolume3.mjs [app-client] (ecmascript) <export default as IconVolume3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconSearch$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconSearch$3e$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconSearch.mjs [app-client] (ecmascript) <export default as IconSearch>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconWorld$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconWorld$3e$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconWorld.mjs [app-client] (ecmascript) <export default as IconWorld>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconCommand$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconCommand$3e$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconCommand.mjs [app-client] (ecmascript) <export default as IconCommand>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconCaretLeftFilled$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconCaretLeftFilled$3e$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconCaretLeftFilled.mjs [app-client] (ecmascript) <export default as IconCaretLeftFilled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconCaretDownFilled$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconCaretDownFilled$3e$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconCaretDownFilled.mjs [app-client] (ecmascript) <export default as IconCaretDownFilled>");
;
var _s = __turbopack_context__.k.signature();
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
;
const MacbookScroll = ({ src, showGradient, title, badge })=>{
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { scrollYProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"])({
        target: ref,
        offset: [
            "start start",
            "end start"
        ]
    });
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MacbookScroll.useEffect": ()=>{
            if (window && window.innerWidth < 768) {
                setIsMobile(true);
            }
        }
    }["MacbookScroll.useEffect"], []);
    const scaleX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        0.3
    ], [
        1.2,
        isMobile ? 1 : 1.5
    ]);
    const scaleY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        0.3
    ], [
        0.6,
        isMobile ? 1 : 1.5
    ]);
    const translate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        isMobile ? 0.9 : 1.3
    ], [
        0,
        isMobile ? 1600 : 1100
    ]);
    const rotate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0.1,
        0.12,
        isMobile ? 0.2 : 0.3
    ], [
        -28,
        -28,
        0
    ]);
    const textTransform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        0.3
    ], [
        0,
        100
    ]);
    const textOpacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        0.2
    ], [
        1,
        0
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: "flex min-h-[120vh] shrink-0 scale-[0.6] transform flex-col items-center justify-start py-0 [perspective:800px] sm:min-h-[140vh] sm:scale-75 md:min-h-[200vh] md:scale-100 md:py-80",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                style: {
                    translateY: textTransform,
                    opacity: textOpacity
                },
                className: "mb-8 text-center text-3xl font-bold text-neutral-800 dark:text-white sm:mb-12 md:mb-20",
                children: title || " "
            }, void 0, false, {
                fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Lid, {
                src: src,
                scaleX: scaleX,
                scaleY: scaleY,
                rotate: rotate,
                translate: translate
            }, void 0, false, {
                fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative -z-10 h-[22rem] w-[32rem] overflow-hidden rounded-2xl bg-gray-200 dark:bg-[#272729]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative h-10 w-full",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-x-0 mx-auto h-4 w-[80%] bg-[#050505]"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                            lineNumber: 95,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                        lineNumber: 94,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative flex",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mx-auto h-full w-[10%] overflow-hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SpeakerGrid, {}, void 0, false, {
                                    fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                                    lineNumber: 99,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                                lineNumber: 98,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mx-auto h-full w-[80%]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Keypad, {}, void 0, false, {
                                    fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                                    lineNumber: 102,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                                lineNumber: 101,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mx-auto h-full w-[10%] overflow-hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SpeakerGrid, {}, void 0, false, {
                                    fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                                    lineNumber: 105,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                                lineNumber: 104,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Trackpad, {}, void 0, false, {
                        fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                        lineNumber: 108,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-x-0 bottom-0 mx-auto h-2 w-20 rounded-tl-3xl rounded-tr-3xl bg-gradient-to-t from-[#272729] to-[#050505]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, this),
                    showGradient && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-x-0 bottom-0 z-50 h-40 w-full bg-gradient-to-t from-white via-white to-transparent dark:from-black dark:via-black"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                        lineNumber: 111,
                        columnNumber: 11
                    }, this),
                    badge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-4 left-4",
                        children: badge
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                        lineNumber: 113,
                        columnNumber: 19
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                lineNumber: 92,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/macbook-scroll.tsx",
        lineNumber: 70,
        columnNumber: 5
    }, this);
};
_s(MacbookScroll, "Zao7l7SCOYN1oqiWwuSlT42ILgg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"]
    ];
});
_c = MacbookScroll;
const Lid = ({ scaleX, scaleY, rotate, translate, src })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative [perspective:800px]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    transform: "perspective(800px) rotateX(-25deg) translateZ(0px)",
                    transformOrigin: "bottom",
                    transformStyle: "preserve-3d"
                },
                className: "relative h-[12rem] w-[32rem] rounded-2xl bg-[#010101] p-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        boxShadow: "0px 2px 0px 2px #171717 inset"
                    },
                    className: "absolute inset-0 flex items-center justify-center rounded-lg bg-[#010101]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-white",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AceternityLogo, {}, void 0, false, {
                            fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                            lineNumber: 149,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                        lineNumber: 148,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                    lineNumber: 142,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                lineNumber: 134,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                style: {
                    scaleX: scaleX,
                    scaleY: scaleY,
                    rotateX: rotate,
                    translateY: translate,
                    transformStyle: "preserve-3d",
                    transformOrigin: "top"
                },
                className: "absolute inset-0 h-96 w-[32rem] rounded-2xl bg-[#010101] p-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 rounded-lg bg-[#272729]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                        lineNumber: 164,
                        columnNumber: 9
                    }, this),
                    src ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: src,
                        alt: "project preview",
                        fill: true,
                        sizes: "(max-width: 768px) 100vw, 512px",
                        className: "rounded-lg object-cover object-left-top"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                        lineNumber: 166,
                        columnNumber: 11
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                lineNumber: 153,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/macbook-scroll.tsx",
        lineNumber: 133,
        columnNumber: 5
    }, this);
};
_c1 = Lid;
const Trackpad = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mx-auto my-1 h-32 w-[40%] rounded-xl",
        style: {
            boxShadow: "0px 0px 1px 1px #00000020 inset"
        }
    }, void 0, false, {
        fileName: "[project]/src/components/ui/macbook-scroll.tsx",
        lineNumber: 181,
        columnNumber: 5
    }, this);
};
_c2 = Trackpad;
const Keypad = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mx-1 h-full [transform:translateZ(0)] rounded-md bg-[#050505] p-1 [will-change:transform]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-[2px] flex w-full shrink-0 gap-[2px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KBtn, {
                        className: "w-10 items-end justify-start pb-[2px] pl-[4px]",
                        childrenClassName: "items-start",
                        children: "esc"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                        lineNumber: 195,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KBtn, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconBrightnessDown$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconBrightnessDown$3e$__["IconBrightnessDown"], {
                                className: "h-[6px] w-[6px]"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                                lineNumber: 202,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mt-1 inline-block",
                                children: "F1"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                                lineNumber: 203,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                        lineNumber: 201,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KBtn, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconBrightnessUp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconBrightnessUp$3e$__["IconBrightnessUp"], {
                                className: "h-[6px] w-[6px]"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                                lineNumber: 206,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mt-1 inline-block",
                                children: "F2"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                                lineNumber: 207,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                        lineNumber: 205,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KBtn, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconTable$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconTable$3e$__["IconTable"], {
                                className: "h-[6px] w-[6px]"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                                lineNumber: 210,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mt-1 inline-block",
                                children: "F3"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                                lineNumber: 211,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                        lineNumber: 209,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KBtn, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconSearch$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconSearch$3e$__["IconSearch"], {
                                className: "h-[6px] w-[6px]"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                                lineNumber: 214,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mt-1 inline-block",
                                children: "F4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                                lineNumber: 215,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                        lineNumber: 213,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KBtn, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconMicrophone$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconMicrophone$3e$__["IconMicrophone"], {
                                className: "h-[6px] w-[6px]"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                                lineNumber: 218,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mt-1 inline-block",
                                children: "F5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                                lineNumber: 219,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                        lineNumber: 217,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KBtn, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconMoon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconMoon$3e$__["IconMoon"], {
                                className: "h-[6px] w-[6px]"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                                lineNumber: 222,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mt-1 inline-block",
                                children: "F6"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                                lineNumber: 223,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                        lineNumber: 221,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KBtn, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconPlayerTrackPrev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconPlayerTrackPrev$3e$__["IconPlayerTrackPrev"], {
                                className: "h-[6px] w-[6px]"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                                lineNumber: 226,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mt-1 inline-block",
                                children: "F7"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                                lineNumber: 227,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                        lineNumber: 225,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KBtn, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconPlayerSkipForward$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconPlayerSkipForward$3e$__["IconPlayerSkipForward"], {
                                className: "h-[6px] w-[6px]"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                                lineNumber: 230,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mt-1 inline-block",
                                children: "F8"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                                lineNumber: 231,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                        lineNumber: 229,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KBtn, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconPlayerTrackNext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconPlayerTrackNext$3e$__["IconPlayerTrackNext"], {
                                className: "h-[6px] w-[6px]"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                                lineNumber: 234,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mt-1 inline-block",
                                children: "F8"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                                lineNumber: 235,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                        lineNumber: 233,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KBtn, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconVolume3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconVolume3$3e$__["IconVolume3"], {
                                className: "h-[6px] w-[6px]"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                                lineNumber: 238,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mt-1 inline-block",
                                children: "F10"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                                lineNumber: 239,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                        lineNumber: 237,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KBtn, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconVolume2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconVolume2$3e$__["IconVolume2"], {
                                className: "h-[6px] w-[6px]"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                                lineNumber: 242,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mt-1 inline-block",
                                children: "F11"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                                lineNumber: 243,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                        lineNumber: 241,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KBtn, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconVolume$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconVolume$3e$__["IconVolume"], {
                                className: "h-[6px] w-[6px]"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                                lineNumber: 246,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mt-1 inline-block",
                                children: "F12"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                                lineNumber: 247,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                        lineNumber: 245,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KBtn, {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-4 w-4 rounded-full bg-gradient-to-b from-neutral-900 from-20% via-black via-50% to-neutral-900 to-95% p-px",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-full w-full rounded-full bg-black"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                                lineNumber: 251,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                            lineNumber: 250,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                        lineNumber: 249,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                lineNumber: 194,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-[2px] flex w-full shrink-0 gap-[2px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KBtn, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block",
                                children: "~"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                                lineNumber: 259,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mt-1 block",
                                children: "`"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                                lineNumber: 260,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                        lineNumber: 258,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KBtn, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block",
                                children: "!"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                                lineNumber: 263,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block",
                                children: "1"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                                lineNumber: 264,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                        lineNumber: 262,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KBtn, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block",
                                children: "@"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                                lineNumber: 267,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block",
                                children: "2"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                                lineNumber: 268,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                        lineNumber: 266,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KBtn, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block",
                                children: "#"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                                lineNumber: 271,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block",
                                children: "3"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                                lineNumber: 272,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                        lineNumber: 270,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KBtn, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block",
                                children: "$"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                                lineNumber: 275,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block",
                                children: "4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                                lineNumber: 276,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                        lineNumber: 274,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KBtn, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block",
                                children: "%"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                                lineNumber: 279,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block",
                                children: "5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                                lineNumber: 280,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                        lineNumber: 278,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KBtn, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block",
                                children: "^"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                                lineNumber: 283,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block",
                                children: "6"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                                lineNumber: 284,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                        lineNumber: 282,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KBtn, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block",
                                children: "&"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                                lineNumber: 287,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block",
                                children: "7"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                                lineNumber: 288,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                        lineNumber: 286,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KBtn, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block",
                                children: "*"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                                lineNumber: 291,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block",
                                children: "8"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                                lineNumber: 292,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                        lineNumber: 290,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KBtn, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block",
                                children: "("
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                                lineNumber: 295,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block",
                                children: "9"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                                lineNumber: 296,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                        lineNumber: 294,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KBtn, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block",
                                children: ")"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                                lineNumber: 299,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block",
                                children: "0"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                                lineNumber: 300,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                        lineNumber: 298,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KBtn, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block",
                                children: "—"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                                lineNumber: 303,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block",
                                children: "_"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                                lineNumber: 304,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                        lineNumber: 302,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KBtn, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block",
                                children: "+"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                                lineNumber: 307,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block",
                                children: " = "
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                                lineNumber: 308,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                        lineNumber: 306,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KBtn, {
                        className: "w-10 items-end justify-end pr-[4px] pb-[2px]",
                        childrenClassName: "items-end",
                        children: "delete"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                        lineNumber: 310,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                lineNumber: 257,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-[2px] flex w-full shrink-0 gap-[2px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KBtn, {
                        className: "w-10 items-end justify-start pb-[2px] pl-[4px]",
                        childrenClassName: "items-start",
                        children: "tab"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                        lineNumber: 320,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KBtn, {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "block",
                            children: "Q"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                            lineNumber: 327,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                        lineNumber: 326,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KBtn, {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "block",
                            children: "W"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                            lineNumber: 330,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                        lineNumber: 329,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KBtn, {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "block",
                            children: "E"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                            lineNumber: 333,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                        lineNumber: 332,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KBtn, {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "block",
                            children: "R"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                            lineNumber: 336,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                        lineNumber: 335,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KBtn, {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "block",
                            children: "T"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                            lineNumber: 339,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                        lineNumber: 338,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KBtn, {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "block",
                            children: "Y"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                            lineNumber: 342,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                        lineNumber: 341,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KBtn, {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "block",
                            children: "U"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                            lineNumber: 345,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                        lineNumber: 344,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KBtn, {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "block",
                            children: "I"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                            lineNumber: 348,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                        lineNumber: 347,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KBtn, {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "block",
                            children: "O"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                            lineNumber: 351,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                        lineNumber: 350,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KBtn, {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "block",
                            children: "P"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                            lineNumber: 354,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                        lineNumber: 353,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KBtn, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block",
                                children: `{`
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                                lineNumber: 357,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block",
                                children: `[`
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                                lineNumber: 358,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                        lineNumber: 356,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KBtn, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block",
                                children: `}`
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                                lineNumber: 361,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block",
                                children: `]`
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                                lineNumber: 362,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                        lineNumber: 360,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KBtn, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block",
                                children: `|`
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                                lineNumber: 365,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block",
                                children: `\\`
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                                lineNumber: 366,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                        lineNumber: 364,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                lineNumber: 319,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-[2px] flex w-full shrink-0 gap-[2px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KBtn, {
                        className: "w-[2.8rem] items-end justify-start pb-[2px] pl-[4px]",
                        childrenClassName: "items-start",
                        children: "caps lock"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                        lineNumber: 372,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KBtn, {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "block",
                            children: "A"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                            lineNumber: 379,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                        lineNumber: 378,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KBtn, {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "block",
                            children: "S"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                            lineNumber: 382,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                        lineNumber: 381,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KBtn, {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "block",
                            children: "D"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                            lineNumber: 385,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                        lineNumber: 384,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KBtn, {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "block",
                            children: "F"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                            lineNumber: 388,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                        lineNumber: 387,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KBtn, {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "block",
                            children: "G"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                            lineNumber: 391,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                        lineNumber: 390,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KBtn, {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "block",
                            children: "H"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                            lineNumber: 394,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                        lineNumber: 393,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KBtn, {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "block",
                            children: "J"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                            lineNumber: 397,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                        lineNumber: 396,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KBtn, {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "block",
                            children: "K"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                            lineNumber: 400,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                        lineNumber: 399,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KBtn, {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "block",
                            children: "L"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                            lineNumber: 403,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                        lineNumber: 402,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KBtn, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block",
                                children: `:`
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                                lineNumber: 406,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block",
                                children: `;`
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                                lineNumber: 407,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                        lineNumber: 405,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KBtn, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block",
                                children: `"`
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                                lineNumber: 410,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block",
                                children: `'`
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                                lineNumber: 411,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                        lineNumber: 409,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KBtn, {
                        className: "w-[2.85rem] items-end justify-end pr-[4px] pb-[2px]",
                        childrenClassName: "items-end",
                        children: "return"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                        lineNumber: 413,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                lineNumber: 371,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-[2px] flex w-full shrink-0 gap-[2px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KBtn, {
                        className: "w-[3.65rem] items-end justify-start pb-[2px] pl-[4px]",
                        childrenClassName: "items-start",
                        children: "shift"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                        lineNumber: 423,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KBtn, {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "block",
                            children: "Z"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                            lineNumber: 430,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                        lineNumber: 429,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KBtn, {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "block",
                            children: "X"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                            lineNumber: 433,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                        lineNumber: 432,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KBtn, {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "block",
                            children: "C"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                            lineNumber: 436,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                        lineNumber: 435,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KBtn, {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "block",
                            children: "V"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                            lineNumber: 439,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                        lineNumber: 438,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KBtn, {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "block",
                            children: "B"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                            lineNumber: 442,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                        lineNumber: 441,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KBtn, {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "block",
                            children: "N"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                            lineNumber: 445,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                        lineNumber: 444,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KBtn, {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "block",
                            children: "M"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                            lineNumber: 448,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                        lineNumber: 447,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KBtn, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block",
                                children: `<`
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                                lineNumber: 451,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block",
                                children: `,`
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                                lineNumber: 452,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                        lineNumber: 450,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KBtn, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block",
                                children: `>`
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                                lineNumber: 455,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block",
                                children: `.`
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                                lineNumber: 456,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                        lineNumber: 454,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KBtn, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block",
                                children: `?`
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                                lineNumber: 459,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block",
                                children: `/`
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                                lineNumber: 460,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                        lineNumber: 458,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KBtn, {
                        className: "w-[3.65rem] items-end justify-end pr-[4px] pb-[2px]",
                        childrenClassName: "items-end",
                        children: "shift"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                        lineNumber: 462,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                lineNumber: 422,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-[2px] flex w-full shrink-0 gap-[2px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KBtn, {
                        className: "",
                        childrenClassName: "h-full justify-between py-[4px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex w-full justify-end pr-1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "block",
                                    children: "fn"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                                    lineNumber: 474,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                                lineNumber: 473,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex w-full justify-start pl-1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconWorld$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconWorld$3e$__["IconWorld"], {
                                    className: "h-[6px] w-[6px]"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                                    lineNumber: 477,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                                lineNumber: 476,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                        lineNumber: 472,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KBtn, {
                        className: "",
                        childrenClassName: "h-full justify-between py-[4px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex w-full justify-end pr-1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconChevronUp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconChevronUp$3e$__["IconChevronUp"], {
                                    className: "h-[6px] w-[6px]"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                                    lineNumber: 482,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                                lineNumber: 481,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex w-full justify-start pl-1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "block",
                                    children: "control"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                                    lineNumber: 485,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                                lineNumber: 484,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                        lineNumber: 480,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KBtn, {
                        className: "",
                        childrenClassName: "h-full justify-between py-[4px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex w-full justify-end pr-1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OptionKey, {
                                    className: "h-[6px] w-[6px]"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                                    lineNumber: 490,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                                lineNumber: 489,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex w-full justify-start pl-1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "block",
                                    children: "option"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                                    lineNumber: 493,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                                lineNumber: 492,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                        lineNumber: 488,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KBtn, {
                        className: "w-8",
                        childrenClassName: "h-full justify-between py-[4px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex w-full justify-end pr-1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconCommand$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconCommand$3e$__["IconCommand"], {
                                    className: "h-[6px] w-[6px]"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                                    lineNumber: 501,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                                lineNumber: 500,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex w-full justify-start pl-1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "block",
                                    children: "command"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                                    lineNumber: 504,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                                lineNumber: 503,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                        lineNumber: 496,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KBtn, {
                        className: "w-[8.2rem]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                        lineNumber: 507,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KBtn, {
                        className: "w-8",
                        childrenClassName: "h-full justify-between py-[4px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex w-full justify-start pl-1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconCommand$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconCommand$3e$__["IconCommand"], {
                                    className: "h-[6px] w-[6px]"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                                    lineNumber: 513,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                                lineNumber: 512,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex w-full justify-start pl-1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "block",
                                    children: "command"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                                    lineNumber: 516,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                                lineNumber: 515,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                        lineNumber: 508,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KBtn, {
                        className: "",
                        childrenClassName: "h-full justify-between py-[4px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex w-full justify-start pl-1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OptionKey, {
                                    className: "h-[6px] w-[6px]"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                                    lineNumber: 521,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                                lineNumber: 520,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex w-full justify-start pl-1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "block",
                                    children: "option"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                                    lineNumber: 524,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                                lineNumber: 523,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                        lineNumber: 519,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-[2px] flex h-6 w-[4.9rem] flex-col items-center justify-end rounded-[4px] p-[0.5px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KBtn, {
                                className: "h-3 w-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconCaretUpFilled$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconCaretUpFilled$3e$__["IconCaretUpFilled"], {
                                    className: "h-[6px] w-[6px]"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                                    lineNumber: 529,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                                lineNumber: 528,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KBtn, {
                                        className: "h-3 w-6",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconCaretLeftFilled$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconCaretLeftFilled$3e$__["IconCaretLeftFilled"], {
                                            className: "h-[6px] w-[6px]"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                                            lineNumber: 533,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                                        lineNumber: 532,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KBtn, {
                                        className: "h-3 w-6",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconCaretDownFilled$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconCaretDownFilled$3e$__["IconCaretDownFilled"], {
                                            className: "h-[6px] w-[6px]"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                                            lineNumber: 536,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                                        lineNumber: 535,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KBtn, {
                                        className: "h-3 w-6",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconCaretRightFilled$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconCaretRightFilled$3e$__["IconCaretRightFilled"], {
                                            className: "h-[6px] w-[6px]"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                                            lineNumber: 539,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                                        lineNumber: 538,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                                lineNumber: 531,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                        lineNumber: 527,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                lineNumber: 471,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/macbook-scroll.tsx",
        lineNumber: 192,
        columnNumber: 5
    }, this);
};
_c3 = Keypad;
const KBtn = ({ className, children, childrenClassName, backlit = true })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("[transform:translateZ(0)] rounded-[4px] p-[0.5px] [will-change:transform]", backlit && "bg-white/[0.2] shadow-xl shadow-white"),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex h-6 w-6 items-center justify-center rounded-[3.5px] bg-[#0A090D]", className),
            style: {
                boxShadow: "0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex w-full flex-col items-center justify-center text-[5px] text-neutral-200", childrenClassName, backlit && "text-white"),
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                lineNumber: 576,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ui/macbook-scroll.tsx",
            lineNumber: 566,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/macbook-scroll.tsx",
        lineNumber: 560,
        columnNumber: 5
    }, this);
};
_c4 = KBtn;
const SpeakerGrid = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-2 flex h-40 gap-[2px] px-[0.5px]",
        style: {
            backgroundImage: "radial-gradient(circle, #08080A 0.5px, transparent 0.5px)",
            backgroundSize: "3px 3px"
        }
    }, void 0, false, {
        fileName: "[project]/src/components/ui/macbook-scroll.tsx",
        lineNumber: 592,
        columnNumber: 5
    }, this);
};
_c5 = SpeakerGrid;
const OptionKey = ({ className })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        fill: "none",
        version: "1.1",
        id: "icon",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 32 32",
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                stroke: "currentColor",
                strokeWidth: 2,
                x: "18",
                y: "5",
                width: "10",
                height: "2"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                lineNumber: 613,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                stroke: "currentColor",
                strokeWidth: 2,
                points: "10.6,5 4,5 4,7 9.4,7 18.4,27 28,27 28,25 19.6,25 "
            }, void 0, false, {
                fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                lineNumber: 621,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                id: "_Transparent_Rectangle_",
                className: "st0",
                width: "32",
                height: "32",
                stroke: "none"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/macbook-scroll.tsx",
                lineNumber: 626,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/macbook-scroll.tsx",
        lineNumber: 605,
        columnNumber: 5
    }, this);
};
_c6 = OptionKey;
const AceternityLogo = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "66",
        height: "65",
        viewBox: "0 0 66 65",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: "h-3 w-3 text-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696",
            stroke: "currentColor",
            strokeWidth: "15",
            strokeMiterlimit: "3.86874",
            strokeLinecap: "round"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/macbook-scroll.tsx",
            lineNumber: 647,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/macbook-scroll.tsx",
        lineNumber: 639,
        columnNumber: 5
    }, this);
};
_c7 = AceternityLogo;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7;
__turbopack_context__.k.register(_c, "MacbookScroll");
__turbopack_context__.k.register(_c1, "Lid");
__turbopack_context__.k.register(_c2, "Trackpad");
__turbopack_context__.k.register(_c3, "Keypad");
__turbopack_context__.k.register(_c4, "KBtn");
__turbopack_context__.k.register(_c5, "SpeakerGrid");
__turbopack_context__.k.register(_c6, "OptionKey");
__turbopack_context__.k.register(_c7, "AceternityLogo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/sections/Projects.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$3d$2d$pin$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/3d-pin.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$magicui$2f$morphing$2d$text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/magicui/morphing-text.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$bento$2d$grid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/bento-grid.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$simplex$2d$noise$2f$dist$2f$esm$2f$simplex$2d$noise$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/simplex-noise/dist/esm/simplex-noise.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$macbook$2d$scroll$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/macbook-scroll.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
;
;
;
const IMAGE_EXTENSIONS = [
    '.png',
    '.jpg',
    '.jpeg',
    '.webp'
];
const isImageAsset = (image)=>IMAGE_EXTENSIONS.some((extension)=>image.endsWith(extension));
const toAssetPath = (assetPath)=>assetPath.startsWith('./') ? assetPath.replace('./', '/') : assetPath;
// 示例项目数据
const projectsData = [
    {
        id: '1',
        title: '仿B站弹幕视频站-前端',
        description: '软件构件与中间件技术',
        detailedDescription: '本项目为为【仿Bilibili】的前端，项目采用前后端分离设计\n实现了用户认证；视频播放；弹幕发送和滚动等功能\n基于Vue.js框架，结合Element UI组件库构建了美观且交互性强的用户界面。弹幕功能通过自定义Barrage类实现多轨道弹幕的动态渲染与轨迹管理，提升用户体验。通过RESTful API与后端高效通信，利用本地存储管理用户状态',
        technologies: [
            'Vue.js',
            'Element UI',
            'JavaScript',
            'Less',
            'Axios'
        ],
        image: '/assets/project/bilibili_vue.webp',
        // demoUrl: 'https://ui.aceternity.com',
        githubUrl: 'https://github.com/BlackCoder0/bilibili_vue',
        giteeUrl: 'https://gitee.com/code-liang/1215bilibili',
        status: 'completed',
        category: '前后端分离项目'
    },
    {
        id: '2',
        title: '仿B站弹幕视频站-后端',
        description: '软件构件与中间件技术',
        detailedDescription: '本项目为为【仿Bilibili】的后端，项目采用前后端分离设计\n实现了用户点赞、评论；管理、用户系统等功能。\n采用Spring Boot+MyBatis实现数据持久化，支持用户、视频、评论、弹幕的增删改查，并通过自定义WebConfig实现跨域资源共享（CORS），保障前后端分离架构下的安全与灵活性。',
        technologies: [
            'Spring Boot',
            'Spring MVC',
            'MyBatis',
            'MySQL',
            'Maven'
        ],
        image: 'from-pink-400 via-pink-300 to-white',
        // demoUrl: 'https://ui.aceternity.com',
        githubUrl: 'https://github.com/BlackCoder0/bilibili_web',
        giteeUrl: 'https://gitee.com/code-liang/1215bilibili_web',
        status: 'completed',
        category: '前后端分离项目'
    },
    {
        id: '3',
        title: 'myDiary日记软件',
        description: '安卓开发',
        detailedDescription: '本项目是一款基于Android的日记应用，实现《你的名字》电影内的日记创建、编辑、浏览与管理。极其内容维度管理和消失动画\n利用高德SDK集成，通过高德地图与定位服务实现地理位置标注等功能。',
        technologies: [
            'Android原生开发（Java）',
            '高德地图与定位SDK',
            'Gradle'
        ],
        image: '/assets/project/mydiary.webp',
        demoUrl: '【《你的名字》日记软件复刻-安卓课设展示】 https://www.bilibili.com/video/BV1wdEYzfEYd/?share_source=copy_web&vd_source=01f661ab4de21d2681871c419ca383e9',
        githubUrl: 'https://github.com/BlackCoder0/myDiary',
        giteeUrl: 'https://gitee.com/code-liang/myDiary',
        status: 'completed',
        category: '安卓原生开发'
    },
    {
        id: '4',
        title: '大学学生管理系统',
        description: 'javaweb课程设计',
        detailedDescription: '本项目为基于JavaWeb的学生选课与管理系统，采用MVC架构，通过JSP页面进行前端展示，Servlet负责业务逻辑处理，结合JDBC实现与后端数据库的高效交互。\n项目注重模块化设计，涵盖学生、教师、课程、班级等多维度管理，支持用户认证、权限分级、数据分页与动态查询，提升了系统的可扩展性与安全性',
        technologies: [
            'Java',
            'Servlet',
            'JDBC',
            'MySQL'
        ],
        image: '/assets/project/stusym.webp',
        githubUrl: 'https://github.com/BlackCoder0/Wuyi_StuSym',
        giteeUrl: 'https://gitee.com/code-liang/wuyi_stusym',
        status: 'completed',
        category: 'javaweb+数据库'
    },
    {
        id: '5',
        title: '方舟粒子特效模拟',
        description: '《明日方舟》官网特效模拟',
        detailedDescription: '本项目是明日方舟为主题的静态网页展示平台，复刻其官网的粒子特效效果，并在其基础上拓展以实现更丰富的交互\n项目经cloudflare静态部署，可直接访问，响应式设计使得移动端体验友好\n上线三个月以后破10w浏览',
        technologies: [
            'HTML',
            'JavaScript'
        ],
        image: '/assets/project/arkpoints.png',
        demoUrl: 'arkpoints.top',
        githubUrl: 'https://github.com/BlackCoder0/Arknights-FlowingPoints',
        giteeUrl: 'https://gitee.com/code-liang/arknights-flowing-points',
        status: 'completed',
        category: '静态网站'
    },
    {
        id: '6',
        title: 'MadokaRunes工具站',
        description: '《魔法少女小圆》同人工具站',
        detailedDescription: '本项目是以魔法少女小圆为主题的前端可视化网站，前端基于Vue 3+Vite，实现高效的组件化开发与热模块替换。\n项目通过响应式数据驱动地图、路径与交互动画，动态绘制角色行动轨迹，并通过精细的CSS保证多端适配和视觉一致性。\n字体生成器支持用户自定义字体大小和颜色，并通过 HTML5 canvas将转换后的文本渲染为图片，实现一键导出无背景字体截图',
        technologies: [
            'Vue 3',
            'JavaScript'
        ],
        image: '/assets/project/MadokaRunes.png',
        demoUrl: 'madorunes.cn',
        githubUrl: 'https://github.com/BlackCoder0/Madoka-Runes',
        giteeUrl: 'https://gitee.com/code-liang/Madoka-Runes',
        status: 'completed',
        category: 'Vue静态网站'
    },
    {
        id: '7',
        title: '晓雨',
        description: '个人网站喵~',
        detailedDescription: '你所在的这个网站',
        technologies: [
            'Vue',
            'Next.js',
            'three.js'
        ],
        image: '/assets/logo/正方形.webp',
        demoUrl: 'www.coderains.cn',
        githubUrl: 'https://github.com/BlackCoder0/CodeHome',
        giteeUrl: 'https://gitee.com/code-liang/codehome',
        status: 'in-progress',
        category: '前端综合网站'
    }
];
const ProjectModal = ({ project, isOpen, onClose })=>{
    if (!project) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            exit: {
                opacity: 0
            },
            className: "fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4",
            onClick: onClose,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    scale: 0.9,
                    opacity: 0
                },
                animate: {
                    scale: 1,
                    opacity: 1
                },
                exit: {
                    scale: 0.9,
                    opacity: 0
                },
                className: "bg-slate-900 rounded-2xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto",
                onClick: (e)=>e.stopPropagation(),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-start mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl font-bold text-white mb-2",
                                        children: project.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/Projects.tsx",
                                        lineNumber: 167,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-slate-400",
                                        children: project.category
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/Projects.tsx",
                                        lineNumber: 168,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/Projects.tsx",
                                lineNumber: 166,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: "text-slate-400 hover:text-white transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    size: 24
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/Projects.tsx",
                                    lineNumber: 174,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/Projects.tsx",
                                lineNumber: 170,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/Projects.tsx",
                        lineNumber: 165,
                        columnNumber: 13
                    }, this),
                    isImageAsset(project.image) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative w-full aspect-[4/3] rounded-lg mb-6 overflow-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: toAssetPath(project.image),
                            alt: project.title,
                            fill: true,
                            sizes: "(max-width: 768px) 100vw, 768px",
                            className: "object-contain"
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/Projects.tsx",
                            lineNumber: 180,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Projects.tsx",
                        lineNumber: 179,
                        columnNumber: 15
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `w-full h-48 rounded-lg bg-gradient-to-br ${project.image} mb-6`
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Projects.tsx",
                        lineNumber: 189,
                        columnNumber: 15
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-semibold text-white mb-2",
                                        children: "项目描述"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/Projects.tsx",
                                        lineNumber: 194,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-slate-300 leading-relaxed whitespace-pre-line",
                                        children: project.detailedDescription
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/Projects.tsx",
                                        lineNumber: 195,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/Projects.tsx",
                                lineNumber: 193,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-semibold text-white mb-3",
                                        children: "技术栈"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/Projects.tsx",
                                        lineNumber: 199,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-2",
                                        children: project.technologies.map((tech, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "px-3 py-1 bg-slate-700 text-slate-200 rounded-full text-sm",
                                                children: tech
                                            }, index, false, {
                                                fileName: "[project]/src/components/sections/Projects.tsx",
                                                lineNumber: 202,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/Projects.tsx",
                                        lineNumber: 200,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/Projects.tsx",
                                lineNumber: 198,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-semibold text-white mb-3",
                                        children: "项目状态"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/Projects.tsx",
                                        lineNumber: 210,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `px-3 py-1 rounded-full text-sm font-medium ${project.status === 'completed' ? 'bg-green-500/20 text-green-400' : project.status === 'in-progress' ? 'bg-yellow-500/20 text-yellow-400' : 'bg-blue-500/20 text-blue-400'}`,
                                        children: project.status === 'completed' ? '已完成' : project.status === 'in-progress' ? '进行中' : '计划中'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/Projects.tsx",
                                        lineNumber: 211,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/Projects.tsx",
                                lineNumber: 209,
                                columnNumber: 15
                            }, this),
                            (project.demoUrl || project.githubUrl || project.giteeUrl) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-4 pt-4",
                                children: [
                                    project.demoUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: project.demoUrl,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors",
                                        children: "查看演示"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/Projects.tsx",
                                        lineNumber: 224,
                                        columnNumber: 21
                                    }, this),
                                    project.githubUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: project.githubUrl,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: "/assets/github.svg",
                                                alt: "GitHub",
                                                width: 32,
                                                height: 32,
                                                className: "inline-block align-middle"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Projects.tsx",
                                                lineNumber: 240,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "sr-only",
                                                children: "GitHub"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Projects.tsx",
                                                lineNumber: 241,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sections/Projects.tsx",
                                        lineNumber: 234,
                                        columnNumber: 21
                                    }, this),
                                    project.giteeUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: project.giteeUrl,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: "/assets/gitee.svg",
                                                alt: "Gitee",
                                                width: 32,
                                                height: 32,
                                                className: "inline-block align-middle"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Projects.tsx",
                                                lineNumber: 251,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "sr-only",
                                                children: "Gitee"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Projects.tsx",
                                                lineNumber: 252,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sections/Projects.tsx",
                                        lineNumber: 245,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/Projects.tsx",
                                lineNumber: 222,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/Projects.tsx",
                        lineNumber: 192,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/Projects.tsx",
                lineNumber: 158,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/sections/Projects.tsx",
            lineNumber: 151,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/sections/Projects.tsx",
        lineNumber: 149,
        columnNumber: 5
    }, this);
};
_c = ProjectModal;
const PixelRipple = ({ className = "" })=>{
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const rafRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const noise3D = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$simplex$2d$noise$2f$dist$2f$esm$2f$simplex$2d$noise$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createNoise3D"])());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PixelRipple.useEffect": ()=>{
            const canvas = canvasRef.current;
            const container = containerRef.current;
            if (!canvas || !container) return;
            const ctx = canvas.getContext("2d");
            if (!ctx) return;
            const dpr = ("TURBOPACK compile-time truthy", 1) ? window.devicePixelRatio : ("TURBOPACK unreachable", undefined);
            let width = container.offsetWidth;
            let height = container.offsetHeight;
            canvas.width = Math.max(1, Math.floor(width * dpr));
            canvas.height = Math.max(1, Math.floor(height * dpr));
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            let t = 0;
            const cell = 12;
            const sigma = 68;
            const maxR = Math.hypot(width, height) * 0.85;
            t = maxR * 0.3;
            const speed = 11;
            const ringGap = 1;
            const waves = 1;
            const preSpawnLead = 0.5 * maxR;
            const center = {
                x: width / 2,
                y: height / 2
            };
            const draw = {
                "PixelRipple.useEffect.draw": ()=>{
                    ctx.clearRect(0, 0, width, height);
                    t += speed;
                    const phase = t % maxR;
                    const noise = noise3D.current;
                    for(let y = 0; y < height; y += cell){
                        for(let x = 0; x < width; x += cell){
                            const dx = x + cell / 2 - center.x;
                            const dy = y + cell / 2 - center.y;
                            const dist = Math.hypot(dx, dy);
                            const n = noise(dx * 0.004, dy * 0.004, t * 0.002) * 55;
                            let ringDist = Infinity;
                            for(let j = 0; j < waves; j++){
                                const rj = phase - j * ringGap;
                                const d = Math.abs(dist - (rj + n));
                                if (d < ringDist) ringDist = d;
                            }
                            const rGhost = phase - maxR + preSpawnLead;
                            const dGhost = Math.abs(dist - (rGhost + n));
                            if (dGhost < ringDist) ringDist = dGhost;
                            const intensity = Math.exp(-(ringDist * ringDist) / (2 * sigma * sigma));
                            if (intensity < 0.03) continue;
                            const alpha = Math.min(0.22, intensity * 0.22);
                            const cA = [
                                102,
                                153,
                                255
                            ];
                            const cB = [
                                199,
                                224,
                                255
                            ];
                            const mix = 0.5 + 0.5 * Math.sin((dx + dy) * 0.002 + t * 0.003);
                            const baseR = cA[0] * (1 - mix) + cB[0] * mix;
                            const baseG = cA[1] * (1 - mix) + cB[1] * mix;
                            const baseB = cA[2] * (1 - mix) + cB[2] * mix;
                            const glow = 10 * intensity;
                            const r = Math.min(255, baseR + glow);
                            const g = Math.min(255, baseG + glow);
                            const b = Math.min(255, baseB + glow);
                            ctx.fillStyle = `rgba(${r.toFixed(0)}, ${g.toFixed(0)}, ${b.toFixed(0)}, ${alpha})`;
                            ctx.fillRect(x, y, cell - 2, cell - 2);
                        }
                    }
                    rafRef.current = requestAnimationFrame(draw);
                }
            }["PixelRipple.useEffect.draw"];
            const onResize = {
                "PixelRipple.useEffect.onResize": ()=>{
                    width = container.offsetWidth;
                    height = container.offsetHeight;
                    canvas.width = Math.max(1, Math.floor(width * dpr));
                    canvas.height = Math.max(1, Math.floor(height * dpr));
                    canvas.style.width = `${width}px`;
                    canvas.style.height = `${height}px`;
                    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
                }
            }["PixelRipple.useEffect.onResize"];
            draw();
            window.addEventListener("resize", onResize);
            return ({
                "PixelRipple.useEffect": ()=>{
                    if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
                    window.removeEventListener("resize", onResize);
                }
            })["PixelRipple.useEffect"];
        }
    }["PixelRipple.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute inset-0 pointer-events-none", className),
        ref: containerRef,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
            ref: canvasRef,
            className: "w-full h-full"
        }, void 0, false, {
            fileName: "[project]/src/components/sections/Projects.tsx",
            lineNumber: 358,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/sections/Projects.tsx",
        lineNumber: 357,
        columnNumber: 5
    }, this);
};
_s(PixelRipple, "eP8T6qZAJDnsMMrt8F7+293rBLI=");
_c1 = PixelRipple;
const DreamStars = ({ className = "" })=>{
    _s1();
    const [stars] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "DreamStars.useState": ()=>Array.from({
                length: 22
            }, {
                "DreamStars.useState": (_, index)=>({
                        id: index,
                        left: `${8 + Math.random() * 84}%`,
                        top: `${6 + Math.random() * 84}%`,
                        size: 2 + Math.random() * 5,
                        opacity: 0.18 + Math.random() * 0.38,
                        blur: Math.random() > 0.72 ? 1.4 : 0,
                        duration: 4 + Math.random() * 7,
                        delay: Math.random() * 5
                    })
            }["DreamStars.useState"])
    }["DreamStars.useState"]);
    const [auroras] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "DreamStars.useState": ()=>Array.from({
                length: 4
            }, {
                "DreamStars.useState": (_, index)=>({
                        id: index,
                        left: `${12 + Math.random() * 68}%`,
                        top: `${10 + Math.random() * 62}%`,
                        width: 180 + Math.random() * 220,
                        height: 120 + Math.random() * 160,
                        opacity: 0.08 + Math.random() * 0.08,
                        duration: 10 + Math.random() * 8,
                        delay: Math.random() * 4
                    })
            }["DreamStars.useState"])
    }["DreamStars.useState"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute inset-0 pointer-events-none overflow-hidden", className),
        children: [
            auroras.map((aurora)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "absolute rounded-full",
                    style: {
                        left: aurora.left,
                        top: aurora.top,
                        width: aurora.width,
                        height: aurora.height,
                        opacity: aurora.opacity,
                        background: "radial-gradient(circle, rgba(147,197,253,0.85) 0%, rgba(96,165,250,0.35) 38%, rgba(14,165,233,0.08) 68%, transparent 100%)",
                        filter: "blur(48px)"
                    },
                    animate: {
                        x: [
                            0,
                            22,
                            -14,
                            0
                        ],
                        y: [
                            0,
                            -18,
                            12,
                            0
                        ],
                        scale: [
                            1,
                            1.06,
                            0.97,
                            1
                        ]
                    },
                    transition: {
                        duration: aurora.duration,
                        delay: aurora.delay,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }
                }, `aurora-${aurora.id}`, false, {
                    fileName: "[project]/src/components/sections/Projects.tsx",
                    lineNumber: 392,
                    columnNumber: 9
                }, this)),
            stars.map((star)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                    className: "absolute rounded-full bg-white",
                    style: {
                        left: star.left,
                        top: star.top,
                        width: star.size,
                        height: star.size,
                        opacity: star.opacity,
                        boxShadow: `0 0 ${star.size * 6}px rgba(191, 219, 254, 0.45)`,
                        filter: `blur(${star.blur}px)`
                    },
                    animate: {
                        opacity: [
                            star.opacity * 0.5,
                            star.opacity,
                            star.opacity * 0.6
                        ],
                        scale: [
                            0.9,
                            1.15,
                            0.95
                        ]
                    },
                    transition: {
                        duration: star.duration,
                        delay: star.delay,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }
                }, `star-${star.id}`, false, {
                    fileName: "[project]/src/components/sections/Projects.tsx",
                    lineNumber: 419,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/Projects.tsx",
        lineNumber: 390,
        columnNumber: 5
    }, this);
};
_s1(DreamStars, "QHlUELz5pKIzCwINfvpLyUHrlkg=");
_c2 = DreamStars;
const Badge = ({ className })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 56 56",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M56 28C56 43.464 43.464 56 28 56C12.536 56 0 43.464 0 28C0 12.536 12.536 0 28 0C43.464 0 56 12.536 56 28Z",
                fill: "#00AA45"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Projects.tsx",
                lineNumber: 456,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M28 54C42.3594 54 54 42.3594 54 28C54 13.6406 42.3594 2 28 2C13.6406 2 2 13.6406 2 28C2 42.3594 13.6406 54 28 54ZM28 56C43.464 56 56 43.464 56 28C56 12.536 43.464 0 28 0C12.536 0 0 12.536 0 28C0 43.464 12.536 56 28 56Z",
                fill: "#219653"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Projects.tsx",
                lineNumber: 460,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M27.0769 12H15V46H24.3846V38.8889H27.0769C34.7305 38.8889 41 32.9048 41 25.4444C41 17.984 34.7305 12 27.0769 12ZM24.3846 29.7778V21.1111H27.0769C29.6194 21.1111 31.6154 23.0864 31.6154 25.4444C31.6154 27.8024 29.6194 29.7778 27.0769 29.7778H24.3846Z",
                fill: "#24292E"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Projects.tsx",
                lineNumber: 466,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M18 11H29.0769C36.2141 11 42 16.5716 42 23.4444C42 30.3173 36.2141 35.8889 29.0769 35.8889H25.3846V43H18V11ZM25.3846 28.7778H29.0769C32.1357 28.7778 34.6154 26.39 34.6154 23.4444C34.6154 20.4989 32.1357 18.1111 29.0769 18.1111H25.3846V28.7778Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Projects.tsx",
                lineNumber: 472,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M17 10H29.0769C36.7305 10 43 15.984 43 23.4444C43 30.9048 36.7305 36.8889 29.0769 36.8889H26.3846V44H17V10ZM19 12V42H24.3846V34.8889H29.0769C35.6978 34.8889 41 29.7298 41 23.4444C41 17.1591 35.6978 12 29.0769 12H19ZM24.3846 17.1111H29.0769C32.6521 17.1111 35.6154 19.9114 35.6154 23.4444C35.6154 26.9775 32.6521 29.7778 29.0769 29.7778H24.3846V17.1111ZM26.3846 19.1111V27.7778H29.0769C31.6194 27.7778 33.6154 25.8024 33.6154 23.4444C33.6154 21.0864 31.6194 19.1111 29.0769 19.1111H26.3846Z",
                fill: "#24292E"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Projects.tsx",
                lineNumber: 478,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/Projects.tsx",
        lineNumber: 448,
        columnNumber: 5
    }, this);
};
_c3 = Badge;
// 主要的Projects组件
const Projects = ()=>{
    _s2();
    const [selectedProject, setSelectedProject] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleProjectClick = (project)=>{
        setSelectedProject(project);
        setIsModalOpen(true);
    };
    const handleCloseModal = ()=>{
        setIsModalOpen(false);
        setTimeout(()=>setSelectedProject(null), 300);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "projects",
                className: "relative z-10 min-h-screen py-16 overflow-hidden",
                style: {
                    background: "linear-gradient(180deg, #315f86 0%, #285479 16%, #21486d 34%, #1d4264 58%, #1b3c5d 80%, #1d3654 100%)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 z-0",
                        style: {
                            background: "radial-gradient(circle at 18% 14%, rgba(224, 242, 254, 0.24), transparent 22%), radial-gradient(circle at 78% 16%, rgba(196, 181, 253, 0.15), transparent 24%), radial-gradient(circle at 50% 58%, rgba(96, 165, 250, 0.18), transparent 30%), radial-gradient(circle at 82% 76%, rgba(59, 130, 246, 0.12), transparent 26%)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Projects.tsx",
                        lineNumber: 512,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 z-0 opacity-28",
                        style: {
                            backgroundImage: "linear-gradient(102deg, transparent 0%, transparent 20%, rgba(191, 219, 254, 0.18) 31%, transparent 44%, transparent 100%), linear-gradient(80deg, transparent 0%, transparent 56%, rgba(147, 197, 253, 0.14) 68%, transparent 80%, transparent 100%)",
                            filter: "blur(14px)",
                            maskImage: "linear-gradient(180deg, rgba(0,0,0,0.95), rgba(0,0,0,0.18))"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Projects.tsx",
                        lineNumber: 519,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 z-0 opacity-18",
                        style: {
                            backgroundImage: "repeating-linear-gradient(112deg, transparent 0 36px, rgba(255,255,255,0.08) 36px 42px, transparent 42px 118px), repeating-linear-gradient(68deg, transparent 0 44px, rgba(186,230,253,0.08) 44px 52px, transparent 52px 132px)",
                            filter: "blur(18px)",
                            maskImage: "linear-gradient(180deg, rgba(0,0,0,0.85), rgba(0,0,0,0.15))"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Projects.tsx",
                        lineNumber: 528,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 z-0 opacity-16",
                        style: {
                            background: "radial-gradient(ellipse at 24% 38%, rgba(255,255,255,0.1) 0%, transparent 34%), radial-gradient(ellipse at 76% 56%, rgba(191,219,254,0.1) 0%, transparent 30%)",
                            filter: "blur(12px)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Projects.tsx",
                        lineNumber: 537,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-x-0 top-0 z-0 h-28",
                        style: {
                            background: "linear-gradient(180deg, rgba(224, 242, 254, 0.22), rgba(125, 211, 252, 0.08) 42%, transparent 100%)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Projects.tsx",
                        lineNumber: 545,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 z-0 opacity-20",
                        style: {
                            backgroundImage: "linear-gradient(rgba(148, 163, 184, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.08) 1px, transparent 1px)",
                            backgroundSize: "48px 48px",
                            maskImage: "linear-gradient(180deg, rgba(0,0,0,0.45), rgba(0,0,0,0.12))"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Projects.tsx",
                        lineNumber: 552,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DreamStars, {
                        className: "z-0"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Projects.tsx",
                        lineNumber: 561,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 z-0 bg-[linear-gradient(180deg,rgba(8,15,30,0.06),rgba(7,12,24,0.24))]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Projects.tsx",
                        lineNumber: 562,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-x-0 bottom-0 z-0 h-36",
                        style: {
                            background: "linear-gradient(180deg, transparent 0%, rgba(125, 211, 252, 0.06) 26%, rgba(84, 136, 181, 0.16) 56%, rgba(29, 54, 84, 0.46) 100%)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Projects.tsx",
                        lineNumber: 563,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PixelRipple, {
                        className: "z-10 opacity-35 mix-blend-screen"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Projects.tsx",
                        lineNumber: 570,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "overflow-hidden dark:bg-[#0B0B0F] bg-white w-full"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/Projects.tsx",
                                lineNumber: 572,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "container mx-auto px-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$macbook$2d$scroll$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MacbookScroll"], {
                                        badge: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "https://peerlist.io/manuarora",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
                                                className: "h-10 w-10 transform -rotate-12"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Projects.tsx",
                                                lineNumber: 579,
                                                columnNumber: 13
                                            }, void 0)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/Projects.tsx",
                                            lineNumber: 578,
                                            columnNumber: 11
                                        }, void 0),
                                        src: "/assets/project/github_page.webp",
                                        showGradient: false
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/Projects.tsx",
                                        lineNumber: 576,
                                        columnNumber: 9
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative h-[120px] w-full overflow-hidden text-center mb-1",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$magicui$2f$morphing$2d$text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MorphingText"], {
                                            texts: [
                                                "我的项目",
                                                "My Project"
                                            ],
                                            className: "bg-gradient-to-r from-cyan-200 via-sky-300 to-indigo-300 bg-clip-text text-transparent drop-shadow-[0_0_24px_rgba(125,211,252,0.22)]"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/Projects.tsx",
                                            lineNumber: 586,
                                            columnNumber: 11
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/Projects.tsx",
                                        lineNumber: 585,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/Projects.tsx",
                                lineNumber: 575,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative flex w-full flex-col items-center justify-center overflow-hidden gap-12",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$bento$2d$grid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BentoGrid"], {
                                    className: "max-w-7xl grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-16 gap-y-14 mb-16",
                                    children: projectsData.map((project)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$3d$2d$pin$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PinContainer"], {
                                            title: project.category,
                                            href: "#",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$bento$2d$grid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BentoGridItem"], {
                                                className: "w-[18rem] h-[18rem] bg-white border-gray-200",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col h-full tracking-tight text-slate-800 cursor-pointer",
                                                    onClick: (e)=>{
                                                        e.preventDefault();
                                                        handleProjectClick(project);
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between mb-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "max-w-xs !pb-2 !m-0 font-bold text-base text-slate-900",
                                                                    children: project.title
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/sections/Projects.tsx",
                                                                    lineNumber: 605,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: `px-2 py-1 rounded-full text-xs font-medium ${project.status === 'completed' ? 'bg-green-500/20 text-green-400' : project.status === 'in-progress' ? 'bg-yellow-500/20 text-yellow-400' : 'bg-blue-500/20 text-blue-400'}`,
                                                                    children: project.status === 'completed' ? '已完成' : project.status === 'in-progress' ? '进行中' : '计划中'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/sections/Projects.tsx",
                                                                    lineNumber: 608,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/sections/Projects.tsx",
                                                            lineNumber: 604,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-base !m-0 !p-0 font-normal mb-4",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-slate-600",
                                                                children: project.description
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/sections/Projects.tsx",
                                                                lineNumber: 619,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/sections/Projects.tsx",
                                                            lineNumber: 618,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-wrap gap-1 mb-4",
                                                            children: [
                                                                project.technologies.slice(0, 3).map((tech, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "px-2 py-1 bg-slate-200 text-slate-700 text-xs rounded",
                                                                        children: tech
                                                                    }, index, false, {
                                                                        fileName: "[project]/src/components/sections/Projects.tsx",
                                                                        lineNumber: 626,
                                                                        columnNumber: 25
                                                                    }, this)),
                                                                project.technologies.length > 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "px-2 py-1 bg-slate-200 text-slate-700 text-xs rounded",
                                                                    children: [
                                                                        "+",
                                                                        project.technologies.length - 3
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/sections/Projects.tsx",
                                                                    lineNumber: 631,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/sections/Projects.tsx",
                                                            lineNumber: 624,
                                                            columnNumber: 21
                                                        }, this),
                                                        isImageAsset(project.image) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "relative w-full h-32 max-h-32 rounded-lg mt-auto overflow-hidden border",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                src: toAssetPath(project.image),
                                                                alt: project.title,
                                                                fill: true,
                                                                sizes: "(max-width: 768px) 100vw, 288px",
                                                                className: "object-cover"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/sections/Projects.tsx",
                                                                lineNumber: 639,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/sections/Projects.tsx",
                                                            lineNumber: 638,
                                                            columnNumber: 25
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `w-full h-32 max-h-32 rounded-lg mt-auto bg-gradient-to-br ${project.image}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/sections/Projects.tsx",
                                                            lineNumber: 648,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/sections/Projects.tsx",
                                                    lineNumber: 597,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Projects.tsx",
                                                lineNumber: 596,
                                                columnNumber: 17
                                            }, this)
                                        }, project.id, false, {
                                            fileName: "[project]/src/components/sections/Projects.tsx",
                                            lineNumber: 595,
                                            columnNumber: 15
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/Projects.tsx",
                                    lineNumber: 593,
                                    columnNumber: 11
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/Projects.tsx",
                                lineNumber: 592,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "container mx-auto px-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center mt-12",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-slate-300 text-sm",
                                        children: "点击项目卡片查看详细信息"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/Projects.tsx",
                                        lineNumber: 659,
                                        columnNumber: 13
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/Projects.tsx",
                                    lineNumber: 658,
                                    columnNumber: 11
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/Projects.tsx",
                                lineNumber: 657,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/Projects.tsx",
                        lineNumber: 571,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/Projects.tsx",
                lineNumber: 504,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProjectModal, {
                project: selectedProject,
                isOpen: isModalOpen,
                onClose: handleCloseModal
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Projects.tsx",
                lineNumber: 665,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
};
_s2(Projects, "CedfLcnuNdspEHc8H8jS6psdnKE=");
_c4 = Projects;
const __TURBOPACK__default__export__ = Projects;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "ProjectModal");
__turbopack_context__.k.register(_c1, "PixelRipple");
__turbopack_context__.k.register(_c2, "DreamStars");
__turbopack_context__.k.register(_c3, "Badge");
__turbopack_context__.k.register(_c4, "Projects");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/magicui/Particles.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Particles": (()=>Particles)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
function MousePosition() {
    _s();
    const [mousePosition, setMousePosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MousePosition.useEffect": ()=>{
            const handleMouseMove = {
                "MousePosition.useEffect.handleMouseMove": (event)=>{
                    setMousePosition({
                        x: event.clientX,
                        y: event.clientY
                    });
                }
            }["MousePosition.useEffect.handleMouseMove"];
            window.addEventListener("mousemove", handleMouseMove);
            return ({
                "MousePosition.useEffect": ()=>{
                    window.removeEventListener("mousemove", handleMouseMove);
                }
            })["MousePosition.useEffect"];
        }
    }["MousePosition.useEffect"], []);
    return mousePosition;
}
_s(MousePosition, "jiWDNcZ06l0uXF96kTJLad0fCJc=");
_c = MousePosition;
function hexToRgb(hex) {
    hex = hex.replace("#", "");
    if (hex.length === 3) {
        hex = hex.split("").map((char)=>char + char).join("");
    }
    const hexInt = parseInt(hex, 16);
    const red = hexInt >> 16 & 255;
    const green = hexInt >> 8 & 255;
    const blue = hexInt & 255;
    return [
        red,
        green,
        blue
    ];
}
const Particles = ({ className = "", quantity = 100, staticity = 50, ease = 50, size = 0.4, refresh = false, color = "#ffffff", vx = 0, vy = 0, ...props })=>{
    _s1();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const canvasContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const circles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const mousePosition = MousePosition();
    const mouse = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0
    });
    const canvasSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        w: 0,
        h: 0
    });
    const dpr = ("TURBOPACK compile-time truthy", 1) ? window.devicePixelRatio : ("TURBOPACK unreachable", undefined);
    const rafID = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const resizeTimeout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Particles.useEffect": ()=>{
            if (canvasRef.current) {
                context.current = canvasRef.current.getContext("2d");
            }
            initCanvas();
            animate();
            const handleResize = {
                "Particles.useEffect.handleResize": ()=>{
                    if (resizeTimeout.current) {
                        clearTimeout(resizeTimeout.current);
                    }
                    resizeTimeout.current = setTimeout({
                        "Particles.useEffect.handleResize": ()=>{
                            initCanvas();
                        }
                    }["Particles.useEffect.handleResize"], 200);
                }
            }["Particles.useEffect.handleResize"];
            window.addEventListener("resize", handleResize);
            return ({
                "Particles.useEffect": ()=>{
                    if (rafID.current != null) {
                        window.cancelAnimationFrame(rafID.current);
                    }
                    if (resizeTimeout.current) {
                        clearTimeout(resizeTimeout.current);
                    }
                    window.removeEventListener("resize", handleResize);
                }
            })["Particles.useEffect"];
        }
    }["Particles.useEffect"], [
        color
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Particles.useEffect": ()=>{
            onMouseMove();
        }
    }["Particles.useEffect"], [
        mousePosition.x,
        mousePosition.y
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Particles.useEffect": ()=>{
            initCanvas();
        }
    }["Particles.useEffect"], [
        refresh
    ]);
    const initCanvas = ()=>{
        resizeCanvas();
        drawParticles();
    };
    const onMouseMove = ()=>{
        if (canvasRef.current) {
            const rect = canvasRef.current.getBoundingClientRect();
            const { w, h } = canvasSize.current;
            const x = mousePosition.x - rect.left - w / 2;
            const y = mousePosition.y - rect.top - h / 2;
            const inside = x < w / 2 && x > -w / 2 && y < h / 2 && y > -h / 2;
            if (inside) {
                mouse.current.x = x;
                mouse.current.y = y;
            }
        }
    };
    const resizeCanvas = ()=>{
        if (canvasContainerRef.current && canvasRef.current && context.current) {
            canvasSize.current.w = canvasContainerRef.current.offsetWidth;
            canvasSize.current.h = canvasContainerRef.current.offsetHeight;
            canvasRef.current.width = canvasSize.current.w * dpr;
            canvasRef.current.height = canvasSize.current.h * dpr;
            canvasRef.current.style.width = `${canvasSize.current.w}px`;
            canvasRef.current.style.height = `${canvasSize.current.h}px`;
            context.current.scale(dpr, dpr);
            // Clear existing particles and create new ones with exact quantity
            circles.current = [];
            for(let i = 0; i < quantity; i++){
                const circle = circleParams();
                drawCircle(circle);
            }
        }
    };
    const circleParams = ()=>{
        const x = Math.floor(Math.random() * canvasSize.current.w);
        const y = Math.floor(Math.random() * canvasSize.current.h);
        const translateX = 0;
        const translateY = 0;
        const pSize = Math.floor(Math.random() * 2) + size;
        const alpha = 0;
        const targetAlpha = parseFloat((Math.random() * 0.6 + 0.1).toFixed(1));
        const dx = (Math.random() - 0.5) * 0.1;
        const dy = (Math.random() - 0.5) * 0.1;
        const magnetism = 0.1 + Math.random() * 4;
        return {
            x,
            y,
            translateX,
            translateY,
            size: pSize,
            alpha,
            targetAlpha,
            dx,
            dy,
            magnetism
        };
    };
    const rgb = hexToRgb(color);
    const drawCircle = (circle, update = false)=>{
        if (context.current) {
            const { x, y, translateX, translateY, size, alpha } = circle;
            context.current.translate(translateX, translateY);
            context.current.beginPath();
            context.current.arc(x, y, size, 0, 2 * Math.PI);
            context.current.fillStyle = `rgba(${rgb.join(", ")}, ${alpha})`;
            context.current.fill();
            context.current.setTransform(dpr, 0, 0, dpr, 0, 0);
            if (!update) {
                circles.current.push(circle);
            }
        }
    };
    const clearContext = ()=>{
        if (context.current) {
            context.current.clearRect(0, 0, canvasSize.current.w, canvasSize.current.h);
        }
    };
    const drawParticles = ()=>{
        clearContext();
        const particleCount = quantity;
        for(let i = 0; i < particleCount; i++){
            const circle = circleParams();
            drawCircle(circle);
        }
    };
    const remapValue = (value, start1, end1, start2, end2)=>{
        const remapped = (value - start1) * (end2 - start2) / (end1 - start1) + start2;
        return remapped > 0 ? remapped : 0;
    };
    const animate = ()=>{
        clearContext();
        circles.current.forEach((circle, i)=>{
            // Handle the alpha value
            const edge = [
                circle.x + circle.translateX - circle.size,
                canvasSize.current.w - circle.x - circle.translateX - circle.size,
                circle.y + circle.translateY - circle.size,
                canvasSize.current.h - circle.y - circle.translateY - circle.size
            ];
            const closestEdge = edge.reduce((a, b)=>Math.min(a, b));
            const remapClosestEdge = parseFloat(remapValue(closestEdge, 0, 20, 0, 1).toFixed(2));
            if (remapClosestEdge > 1) {
                circle.alpha += 0.02;
                if (circle.alpha > circle.targetAlpha) {
                    circle.alpha = circle.targetAlpha;
                }
            } else {
                circle.alpha = circle.targetAlpha * remapClosestEdge;
            }
            circle.x += circle.dx + vx;
            circle.y += circle.dy + vy;
            circle.translateX += (mouse.current.x / (staticity / circle.magnetism) - circle.translateX) / ease;
            circle.translateY += (mouse.current.y / (staticity / circle.magnetism) - circle.translateY) / ease;
            drawCircle(circle, true);
            // circle gets out of the canvas
            if (circle.x < -circle.size || circle.x > canvasSize.current.w + circle.size || circle.y < -circle.size || circle.y > canvasSize.current.h + circle.size) {
                // remove the circle from the array
                circles.current.splice(i, 1);
                // create a new circle
                const newCircle = circleParams();
                drawCircle(newCircle);
            }
        });
        rafID.current = window.requestAnimationFrame(animate);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("pointer-events-none", className),
        ref: canvasContainerRef,
        "aria-hidden": "true",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
            ref: canvasRef,
            className: "size-full"
        }, void 0, false, {
            fileName: "[project]/src/components/magicui/Particles.tsx",
            lineNumber: 310,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/magicui/Particles.tsx",
        lineNumber: 304,
        columnNumber: 5
    }, this);
};
_s1(Particles, "kQytM4IwEsZEEZPcKoDJ19JXfoI=");
_c1 = Particles;
var _c, _c1;
__turbopack_context__.k.register(_c, "MousePosition");
__turbopack_context__.k.register(_c1, "Particles");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/articles.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "articles": (()=>articles),
    "categories": (()=>categories),
    "getArticleById": (()=>getArticleById),
    "getArticlesByCategory": (()=>getArticlesByCategory)
});
const articles = [
    {
        id: 'First',
        title: 'Hello World',
        subtitle: '你好啊',
        category: 'chat',
        thumbnail: './assets/bg_big.png',
        htmlPath: './articles/chat/hello.html',
        publishDate: '2025-06-23',
        tags: [
            '打招呼',
            '碎碎念'
        ]
    },
    {
        id: 'aboutstudy',
        title: '代码很好玩，虽然并不总是快乐',
        subtitle: '关于学习',
        category: 'study',
        thumbnail: './articles_img/20250623-study-1.jpg',
        htmlPath: './articles/study/aboutstudy.html',
        publishDate: '2025-06-23',
        tags: [
            '校园',
            '成长',
            '回忆'
        ]
    },
    {
        id: 'cos-cat',
        title: 'cos与猫',
        subtitle: '生活就像糖果，总要有什么甜的来支撑',
        category: 'life',
        thumbnail: './articles_img/20250623-life-1.jpg',
        htmlPath: './articles/life/cos-cat.html',
        publishDate: '2025-06-23',
        tags: [
            '生活',
            '你这样可爱的猫猫是要被人吃干抹净的'
        ]
    },
    {
        id: 'PB',
        title: '看完魔圆，关于鹿目圆和晓美焰写点感想',
        subtitle: '粉＆黑',
        category: 'other',
        thumbnail: './articles_img/20250623-other-1.jpg',
        htmlPath: './articles/other/PinkBlack.html',
        publishDate: '2025-03-02',
        tags: [
            '魔法少女小圆',
            '随笔'
        ]
    },
    {
        id: 'GE',
        title: '当焰魔看到金色美瞳的圆，会有怎么样的展开呢',
        subtitle: '同人百合',
        category: 'other',
        thumbnail: './articles_img/20250623-other-3.jpg',
        htmlPath: './articles/other/GoldEye.html',
        publishDate: '2025-05-03',
        tags: [
            '魔法少女小圆',
            '同人',
            '百合'
        ]
    },
    {
        id: 'BBH',
        title: '慢慢喜欢上宿敌（但死都不会承认）',
        subtitle: '同人百合',
        category: 'other',
        thumbnail: './articles_img/20251210-other-4.jpg',
        htmlPath: './articles/other/BlueBlackH.html',
        publishDate: '2025-11-17',
        tags: [
            '魔法少女小圆',
            '同人',
            '百合'
        ]
    },
    {
        id: '2025062901',
        title: '手机摔坏了',
        subtitle: '倒霉日常',
        category: 'life',
        thumbnail: 'undefined',
        htmlPath: './articles/life/20250629.html',
        publishDate: '2025-06-29',
        tags: [
            '倒霉',
            '日常'
        ]
    },
    {
        id: '2025062902',
        title: '看完末日后酒店了，写点感想',
        subtitle: '荒诞末日下的故事',
        category: 'other',
        thumbnail: './articles_img/20250629-other-2.jpg',
        htmlPath: './articles/other/Hotel.html',
        publishDate: '2025-06-19',
        tags: [
            '末日后酒店',
            '随笔'
        ]
    },
    {
        id: '2025062903',
        title: '2025.06 更新日志',
        subtitle: '小修小补',
        category: 'chat',
        thumbnail: './articles_img/UPDATE.png',
        htmlPath: './articles/chat/20250629UPDATE.html',
        publishDate: '2025-06-29',
        tags: [
            '阶段性更新汇报'
        ]
    },
    {
        id: '2025071301',
        title: '准备去实习',
        subtitle: '半只脚探了探社会',
        category: 'life',
        thumbnail: 'undefined',
        htmlPath: './articles/life/20250713.html',
        publishDate: '2025-07-13',
        tags: [
            '实习',
            '暑假工'
        ]
    }
];
const getArticlesByCategory = (category)=>{
    const filtered = articles.filter((article)=>article.category === category);
    if (category === 'chat') {
        const firstIdx = filtered.findIndex((a)=>a.id === 'First');
        if (firstIdx > 0) {
            const [firstArticle] = filtered.splice(firstIdx, 1);
            filtered.unshift(firstArticle);
        }
    }
    return filtered.sort((a, b)=>{
        if (category === 'chat' && a.id === 'First') return -1;
        if (category === 'chat' && b.id === 'First') return 1;
        return new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime();
    });
};
const getArticleById = (id)=>{
    return articles.find((article)=>article.id === id);
};
const categories = [
    {
        label: '杂谈',
        value: 'chat'
    },
    {
        label: '学习',
        value: 'study'
    },
    {
        label: '生活',
        value: 'life'
    },
    {
        label: '其他',
        value: 'other'
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ArticleCard.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
;
const ArticleCard = ({ article, onClick })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0
        },
        whileHover: {
            scale: 1.02,
            y: -2
        },
        className: "bg-black/30 backdrop-blur-sm border-2 border-white/30 p-4 cursor-pointer transition-all duration-300 hover:bg-black/40 hover:border-white/50 shadow-lg",
        style: {
            clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))',
            background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0.3) 100%)'
        },
        onClick: ()=>onClick(article),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "aspect-video bg-gray-900/50 relative overflow-hidden",
                style: {
                    clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: article.thumbnail,
                        alt: article.title,
                        className: "w-full h-full object-cover hover:scale-110 transition-transform duration-300",
                        onError: (e)=>{
                            const target = e.target;
                            target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIyNSIgdmlld0JveD0iMCAwIDQwMCAyMjUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjI1IiBmaWxsPSIjMzc0MTUxIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTEyLjUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzlDQTNBRiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+5Zu+54mH5Yqg6L295aSx6LSlPC90ZXh0Pgo8L3N2Zz4K';
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/ArticleCard.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ArticleCard.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-2 left-2 right-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap gap-1",
                            children: article.tags.slice(0, 2).map((tag, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "px-2 py-1 bg-black/40 backdrop-blur-sm border border-white/30 text-xs text-white font-medium",
                                    style: {
                                        clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))'
                                    },
                                    children: tag
                                }, index, false, {
                                    fileName: "[project]/src/components/ArticleCard.tsx",
                                    lineNumber: 40,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/ArticleCard.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ArticleCard.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ArticleCard.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-white font-bold text-lg mb-1 line-clamp-1",
                        children: article.title
                    }, void 0, false, {
                        fileName: "[project]/src/components/ArticleCard.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-white/80 text-sm mb-3 line-clamp-2",
                        children: article.subtitle
                    }, void 0, false, {
                        fileName: "[project]/src/components/ArticleCard.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center text-xs text-white/60 font-medium",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: new Date(article.publishDate).toLocaleDateString('zh-CN')
                            }, void 0, false, {
                                fileName: "[project]/src/components/ArticleCard.tsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "capitalize px-2 py-1 bg-white/10 border border-white/20",
                                style: {
                                    clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))'
                                },
                                children: article.category
                            }, void 0, false, {
                                fileName: "[project]/src/components/ArticleCard.tsx",
                                lineNumber: 63,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ArticleCard.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ArticleCard.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ArticleCard.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
};
_c = ArticleCard;
const __TURBOPACK__default__export__ = ArticleCard;
var _c;
__turbopack_context__.k.register(_c, "ArticleCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/sections/Hobbies.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$magicui$2f$Particles$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/magicui/Particles.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$articles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/articles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ArticleCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ArticleCard.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
const Hobbies = ()=>{
    _s();
    const [activeCategory, setActiveCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('chat');
    const [selectedArticle, setSelectedArticle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isViewingArticle, setIsViewingArticle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [htmlContent, setHtmlContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleArticleClick = (article)=>{
        setSelectedArticle(article);
        setIsViewingArticle(true);
        setLoading(true);
        // 加载文章内容
        fetch(article.htmlPath).then((response)=>response.text()).then((html)=>{
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            const articleContent = doc.querySelector('article');
            if (articleContent) {
                setHtmlContent(articleContent.innerHTML);
            } else {
                setHtmlContent(html);
            }
        }).catch(()=>{
            setHtmlContent(`
          <h1>${article.title}</h1>
          <p class="subtitle">${article.subtitle}</p>
          <p>文章内容加载中...</p>
          <p>这是一篇关于${article.title}的文章。</p>
          <img src="${article.thumbnail}" alt="${article.title}" class="article-image" />
          <p>更多内容正在准备中，敬请期待。</p>
        `);
        }).finally(()=>{
            setLoading(false);
        });
    };
    const handleBackToList = ()=>{
        setIsViewingArticle(false);
        setSelectedArticle(null);
        setHtmlContent('');
    };
    const filteredArticles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$articles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getArticlesByCategory"])(activeCategory);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "hobbies",
        className: "relative min-h-screen py-8 overflow-hidden",
        style: {
            background: 'linear-gradient(180deg, #1d3654 0%, #1b3552 12%, #16304a 32%, #122743 58%, #101e35 80%, #111827 100%)'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$magicui$2f$Particles$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Particles"], {
                className: "absolute inset-0 z-0",
                quantity: 150,
                ease: 80,
                size: 1.5,
                staticity: 15,
                color: "#ffffff",
                vy: 10
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Hobbies.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-x-0 top-0 z-0 h-28",
                style: {
                    background: 'linear-gradient(180deg, rgba(147, 197, 253, 0.1), rgba(125, 211, 252, 0.04) 36%, transparent 100%)'
                }
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Hobbies.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-0",
                style: {
                    background: 'radial-gradient(circle at 18% 16%, rgba(125, 211, 252, 0.15), transparent 24%), radial-gradient(circle at 82% 26%, rgba(96, 165, 250, 0.12), transparent 22%), radial-gradient(circle at 50% 72%, rgba(59, 130, 246, 0.1), transparent 34%), radial-gradient(circle at 52% 10%, rgba(186, 230, 253, 0.08), transparent 20%)'
                }
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Hobbies.tsx",
                lineNumber: 88,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-0 opacity-18",
                style: {
                    backgroundImage: 'repeating-radial-gradient(circle at 50% -10%, rgba(186,230,253,0.12) 0 10px, transparent 10px 34px), repeating-radial-gradient(circle at 50% 0%, rgba(125,211,252,0.08) 0 12px, transparent 12px 38px)',
                    filter: 'blur(12px)',
                    maskImage: 'linear-gradient(180deg, rgba(0,0,0,0.82), rgba(0,0,0,0.18))'
                }
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Hobbies.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-0 opacity-12",
                style: {
                    backgroundImage: 'linear-gradient(108deg, transparent 0%, transparent 26%, rgba(186,230,253,0.18) 36%, transparent 48%, transparent 100%), linear-gradient(72deg, transparent 0%, transparent 52%, rgba(103,232,249,0.12) 64%, transparent 78%, transparent 100%)',
                    filter: 'blur(14px)',
                    maskImage: 'linear-gradient(180deg, rgba(0,0,0,0.9), rgba(0,0,0,0.24))'
                }
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Hobbies.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-0 opacity-20",
                style: {
                    backgroundImage: 'linear-gradient(rgba(186, 230, 253, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(186, 230, 253, 0.06) 1px, transparent 1px)',
                    backgroundSize: '48px 48px',
                    maskImage: 'linear-gradient(180deg, rgba(0,0,0,0.78), rgba(0,0,0,0.12))'
                }
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Hobbies.tsx",
                lineNumber: 113,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-x-0 bottom-0 z-0 h-40",
                style: {
                    background: 'linear-gradient(180deg, transparent 0%, rgba(129, 140, 248, 0.06) 24%, rgba(67, 56, 202, 0.12) 52%, rgba(17, 24, 39, 0.44) 100%)'
                }
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Hobbies.tsx",
                lineNumber: 122,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full px-4 h-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 mb-8 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-200 via-sky-300 to-indigo-300 bg-clip-text text-transparent drop-shadow-[0_0_24px_rgba(125,211,252,0.2)]",
                                children: "我的爱好"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/Hobbies.tsx",
                                lineNumber: 131,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-3 text-base md:text-lg text-slate-200/80",
                                children: "水波、随想、还有一些缓慢漂浮的兴趣碎片"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/Hobbies.tsx",
                                lineNumber: 134,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/Hobbies.tsx",
                        lineNumber: 130,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 lg:grid-cols-2 gap-6 min-h-[calc(100vh-4rem)] lg:h-full items-stretch",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `w-full h-[60vh] lg:h-full items-center lg:items-start justify-center ${isViewingArticle ? 'hidden lg:flex' : 'flex'}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full h-full max-h-[calc(100vh-8rem)] rounded-lg overflow-hidden shadow-lg relative z-10",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                                        src: "/111.html",
                                        title: "Hobbies Visual",
                                        className: "w-full h-full border-0",
                                        loading: "lazy"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/Hobbies.tsx",
                                        lineNumber: 142,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/Hobbies.tsx",
                                    lineNumber: 141,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/Hobbies.tsx",
                                lineNumber: 140,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `w-full flex flex-col ${isViewingArticle ? 'fixed inset-0 z-[300] h-screen bg-[#2e3346] overflow-hidden lg:static lg:h-full lg:z-auto lg:overflow-visible' : 'h-[90vh] sm:h-[95vh] lg:h-full max-h-[calc(100vh-2rem)]'}`,
                                style: isViewingArticle ? {
                                    overscrollBehavior: 'contain'
                                } : {},
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-full bg-black/40 backdrop-blur-sm border-2 border-white/20 shadow-2xl relative z-10 flex flex-col",
                                    style: {
                                        clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))',
                                        background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                                        ...isViewingArticle ? {
                                            touchAction: 'none',
                                            overscrollBehavior: 'contain'
                                        } : {}
                                    },
                                    children: !isViewingArticle ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "border-b-2 border-white/20 bg-black/20",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex overflow-x-auto",
                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$articles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["categories"].map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setActiveCategory(category.value),
                                                            className: `px-6 py-4 text-sm font-bold whitespace-nowrap transition-all duration-300 relative ${activeCategory === category.value ? 'text-white bg-white/20 shadow-inner' : 'text-white/70 hover:text-white hover:bg-white/10'}`,
                                                            style: {
                                                                clipPath: activeCategory === category.value ? 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))' : 'none'
                                                            },
                                                            children: [
                                                                category.label,
                                                                activeCategory === category.value && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-300 via-sky-300 to-indigo-300"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/sections/Hobbies.tsx",
                                                                    lineNumber: 180,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, category.value, true, {
                                                            fileName: "[project]/src/components/sections/Hobbies.tsx",
                                                            lineNumber: 165,
                                                            columnNumber: 25
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/Hobbies.tsx",
                                                    lineNumber: 163,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Hobbies.tsx",
                                                lineNumber: 162,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 p-6 overflow-hidden",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-full max-w-screen-md mx-auto overflow-y-auto space-y-4 pr-2",
                                                    style: {
                                                        scrollbarWidth: 'thin',
                                                        scrollbarColor: 'rgba(255,255,255,0.3) transparent'
                                                    },
                                                    children: filteredArticles.length > 0 ? filteredArticles.map((article)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ArticleCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            article: article,
                                                            onClick: handleArticleClick
                                                        }, article.id, false, {
                                                            fileName: "[project]/src/components/sections/Hobbies.tsx",
                                                            lineNumber: 196,
                                                            columnNumber: 27
                                                        }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-center h-full text-white/50",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-lg font-medium",
                                                            children: "该分类下暂无文章"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/sections/Hobbies.tsx",
                                                            lineNumber: 204,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/Hobbies.tsx",
                                                        lineNumber: 203,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/Hobbies.tsx",
                                                    lineNumber: 189,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Hobbies.tsx",
                                                lineNumber: 188,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "border-b-2 border-white/20 bg-black/20 p-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: handleBackToList,
                                                            className: "flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/30 transition-all duration-300 text-white font-medium",
                                                            style: {
                                                                clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    className: "w-4 h-4",
                                                                    fill: "none",
                                                                    stroke: "currentColor",
                                                                    viewBox: "0 0 24 24",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        strokeLinecap: "round",
                                                                        strokeLinejoin: "round",
                                                                        strokeWidth: 2,
                                                                        d: "M15 19l-7-7 7-7"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/sections/Hobbies.tsx",
                                                                        lineNumber: 223,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/sections/Hobbies.tsx",
                                                                    lineNumber: 222,
                                                                    columnNumber: 25
                                                                }, this),
                                                                "返回列表"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/sections/Hobbies.tsx",
                                                            lineNumber: 215,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-right",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                    className: "text-xl font-bold text-white",
                                                                    children: selectedArticle?.title
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/sections/Hobbies.tsx",
                                                                    lineNumber: 228,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-white/70 text-sm",
                                                                    children: selectedArticle?.subtitle
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/sections/Hobbies.tsx",
                                                                    lineNumber: 229,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/sections/Hobbies.tsx",
                                                            lineNumber: 227,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/sections/Hobbies.tsx",
                                                    lineNumber: 214,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Hobbies.tsx",
                                                lineNumber: 213,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 p-6 overflow-hidden",
                                                style: {
                                                    touchAction: 'none'
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-full overflow-y-auto pr-2",
                                                    style: {
                                                        WebkitOverflowScrolling: 'touch',
                                                        overscrollBehavior: 'contain',
                                                        touchAction: 'pan-y',
                                                        scrollbarWidth: 'thin',
                                                        scrollbarColor: 'rgba(255,255,255,0.3) transparent'
                                                    },
                                                    children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-center h-full",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "animate-spin rounded-full h-8 w-8 border-b-2 border-white"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/sections/Hobbies.tsx",
                                                            lineNumber: 246,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/Hobbies.tsx",
                                                        lineNumber: 245,
                                                        columnNumber: 25
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "max-w-none",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "prose prose-invert max-w-none article-content",
                                                            dangerouslySetInnerHTML: {
                                                                __html: htmlContent
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/sections/Hobbies.tsx",
                                                            lineNumber: 251,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/Hobbies.tsx",
                                                        lineNumber: 249,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/Hobbies.tsx",
                                                    lineNumber: 236,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Hobbies.tsx",
                                                lineNumber: 235,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/Hobbies.tsx",
                                    lineNumber: 153,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/Hobbies.tsx",
                                lineNumber: 152,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/Hobbies.tsx",
                        lineNumber: 138,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/Hobbies.tsx",
                lineNumber: 129,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/Hobbies.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
};
_s(Hobbies, "1q0Z0GZEeeEt58Uk3B5cwvgGY8c=");
_c = Hobbies;
const __TURBOPACK__default__export__ = Hobbies;
var _c;
__turbopack_context__.k.register(_c, "Hobbies");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/bangumi-config.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// 追番配置文件
// 在这里配置你正在追的番剧ID
// 更自由的番剧配置结构，支持任意分组和季度
__turbopack_context__.s({
    "BANGUMI_GROUPS": (()=>BANGUMI_GROUPS),
    "FAVORITE_BANGUMI_IDS": (()=>FAVORITE_BANGUMI_IDS),
    "MANUAL_SEASONS": (()=>MANUAL_SEASONS),
    "MY_BANGUMI_LIST": (()=>MY_BANGUMI_LIST),
    "getBangumiConfig": (()=>getBangumiConfig),
    "getBangumiIds": (()=>getBangumiIds),
    "getBangumiIdsByGroup": (()=>getBangumiIdsByGroup),
    "getBangumiNote": (()=>getBangumiNote),
    "getFavoriteBangumiIds": (()=>getFavoriteBangumiIds),
    "getGroupLabel": (()=>getGroupLabel),
    "getGroupLabels": (()=>getGroupLabels)
});
const BANGUMI_GROUPS = {
    "喜欢的番剧": [
        {
            id: 9717,
            note: "魔法少女小圆"
        },
        {
            id: 51928,
            note: "某科学的超电磁炮S"
        },
        {
            id: 79227,
            note: "游戏人生"
        },
        {
            id: 120925,
            note: "夏洛特"
        },
        {
            id: 428735,
            note: "BanG Dream! It's MyGO!!!!!"
        },
        {
            id: 431767,
            note: "GIRLS BAND CRY"
        },
        {
            id: 509986,
            note: "末日后酒店"
        },
        {
            id: 29648,
            note: "中二病也要谈恋爱！"
        }
    ],
    "2026年1月": [
        {
            id: 613150,
            note: "超时空辉夜姬！"
        },
        {
            id: 515759,
            note: "葬送的芙莉莲 第二季"
        },
        {
            id: 548818,
            note: "金牌得主 第二季"
        },
        {
            id: 443831,
            note: "Fate/strange Fake"
        },
        {
            id: 565802,
            note: "辉夜大小姐想让我告白 通往大人的阶梯"
        },
        // { id: 525816, note: "身为魔族的我想向勇者小队的可爱女孩告白。" },
        {
            id: 493016,
            note: "异国日记"
        },
        {
            id: 342888,
            note: "和机器人啪啪啪能算在经验次数里吗？"
        }
    ],
    "2025年7月": [
        {
            id: 467930,
            note: "青春笨蛋少年不做圣诞服女郎的梦"
        },
        {
            id: 524707,
            note: "我怎么可能成为你的恋人，不行不行！(※不是不可能！？) "
        },
        {
            id: 510256,
            note: "与游戏中心的少女异文化交流的故事"
        },
        {
            id: 506677,
            note: "Silent Witch 沉默魔女的秘密"
        },
        {
            id: 501614,
            note: "Bad Girl 不良少女"
        },
        {
            id: 513345,
            note: "薰香花朵凛然绽放"
        }
    ],
    "2025年4月": [
        {
            id: 485936,
            note: "mono女孩"
        },
        {
            id: 395493,
            note: "男女之间的友情存在吗？（不，不存在!!）"
        },
        {
            id: 506258,
            note: "乡下大叔成为剑圣"
        },
        {
            id: 509986,
            note: "末日后酒店"
        }
    ]
};
const getGroupLabels = ()=>{
    return Object.keys(BANGUMI_GROUPS);
};
const getBangumiConfig = ()=>{
    return Object.values(BANGUMI_GROUPS).flat();
};
const getBangumiIds = ()=>{
    const allIds = getBangumiConfig().map((item)=>item.id);
    return [
        ...new Set(allIds)
    ];
};
const getBangumiNote = (id)=>{
    const config = getBangumiConfig().find((item)=>item.id === id);
    return config?.note;
};
const getFavoriteBangumiIds = ()=>{
    return (BANGUMI_GROUPS["喜欢的番剧"] || []).map((item)=>item.id);
};
const getBangumiIdsByGroup = (group)=>{
    return (BANGUMI_GROUPS[group] || []).map((item)=>item.id);
};
const getGroupLabel = (id)=>{
    for (const [label, items] of Object.entries(BANGUMI_GROUPS)){
        if (items.some((item)=>item.id === id)) return label;
    }
    return undefined;
};
const FAVORITE_BANGUMI_IDS = getFavoriteBangumiIds();
const MANUAL_SEASONS = getGroupLabels().map(_c = (label)=>({
        label,
        bangumiIds: getBangumiIdsByGroup(label)
    }));
_c1 = MANUAL_SEASONS;
const MY_BANGUMI_LIST = getBangumiConfig();
var _c, _c1;
__turbopack_context__.k.register(_c, "MANUAL_SEASONS$getGroupLabels().map");
__turbopack_context__.k.register(_c1, "MANUAL_SEASONS");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/lens.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Lens": (()=>Lens)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const Lens = ({ children, zoomFactor = 1.5, lensSize = 170, isStatic = false, position = {
    x: 200,
    y: 150
}, hovering, setHovering })=>{
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [localIsHovering, setLocalIsHovering] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const isHovering = hovering !== undefined ? hovering : localIsHovering;
    const setIsHovering = setHovering || setLocalIsHovering;
    // const [isHovering, setIsHovering] = useState(false);
    const [mousePosition, setMousePosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 100,
        y: 100
    });
    const handleMouseMove = (e)=>{
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setMousePosition({
            x,
            y
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: "relative overflow-hidden rounded-lg z-20",
        onMouseEnter: ()=>{
            setIsHovering(true);
        },
        onMouseLeave: ()=>setIsHovering(false),
        onMouseMove: handleMouseMove,
        children: [
            children,
            isStatic ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        scale: 0.58
                    },
                    animate: {
                        opacity: 1,
                        scale: 1
                    },
                    exit: {
                        opacity: 0,
                        scale: 0.8
                    },
                    transition: {
                        duration: 0.3,
                        ease: "easeOut"
                    },
                    className: "absolute inset-0 overflow-hidden",
                    style: {
                        maskImage: `radial-gradient(circle ${lensSize / 2}px at ${position.x}px ${position.y}px, black 100%, transparent 100%)`,
                        WebkitMaskImage: `radial-gradient(circle ${lensSize / 2}px at ${position.x}px ${position.y}px, black 100%, transparent 100%)`,
                        transformOrigin: `${position.x}px ${position.y}px`
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0",
                        style: {
                            transform: `scale(${zoomFactor})`,
                            transformOrigin: `${position.x}px ${position.y}px`
                        },
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/lens.tsx",
                        lineNumber: 76,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/lens.tsx",
                    lineNumber: 60,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/lens.tsx",
                lineNumber: 59,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: isHovering && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            scale: 0.58
                        },
                        animate: {
                            opacity: 1,
                            scale: 1
                        },
                        exit: {
                            opacity: 0,
                            scale: 0.8
                        },
                        transition: {
                            duration: 0.3,
                            ease: "easeOut"
                        },
                        className: "absolute inset-0 overflow-hidden",
                        style: {
                            maskImage: `radial-gradient(circle ${lensSize / 2}px at ${mousePosition.x}px ${mousePosition.y}px, black 100%, transparent 100%)`,
                            WebkitMaskImage: `radial-gradient(circle ${lensSize / 2}px at ${mousePosition.x}px ${mousePosition.y}px, black 100%, transparent 100%)`,
                            transformOrigin: `${mousePosition.x}px ${mousePosition.y}px`,
                            zIndex: 50
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0",
                            style: {
                                transform: `scale(${zoomFactor})`,
                                transformOrigin: `${mousePosition.x}px ${mousePosition.y}px`
                            },
                            children: children
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/lens.tsx",
                            lineNumber: 110,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/lens.tsx",
                        lineNumber: 91,
                        columnNumber: 15
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/lens.tsx",
                    lineNumber: 90,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/lens.tsx",
                lineNumber: 88,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/lens.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
};
_s(Lens, "OHT1Wm8X5IisaaSONJ/RTCd4meE=");
_c = Lens;
var _c;
__turbopack_context__.k.register(_c, "Lens");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/sections/Bangumi.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$magicui$2f$Particles$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/magicui/Particles.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$bangumi$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/bangumi-config.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$lens$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/lens.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const getWeekdayName = (weekday)=>{
    const weekdays = [
        '',
        '周一',
        '周二',
        '周三',
        '周四',
        '周五',
        '周六',
        '周日'
    ];
    return weekdays[weekday] || '';
};
const getAirWeekdayFromInfo = (item)=>{
    if (item.infobox) {
        const airWeekdayInfo = item.infobox.find((info)=>info.key === '放送星期');
        if (airWeekdayInfo) {
            if (typeof airWeekdayInfo.value === 'string') {
                return airWeekdayInfo.value;
            } else if (Array.isArray(airWeekdayInfo.value) && airWeekdayInfo.value.length > 0) {
                return airWeekdayInfo.value[0];
            }
        }
    }
    return getWeekdayName(item.air_weekday);
};
const Bangumi = ()=>{
    _s();
    const [bangumiList, setBangumiList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [filteredList, setFilteredList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedItem, setSelectedItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [filterType, setFilterType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(DEFAULT_GROUP);
    const [seasonOptions, setSeasonOptions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Bangumi.useEffect": ()=>{
            fetchBangumiData();
        }
    }["Bangumi.useEffect"], []);
    const fetchBangumiData = async ()=>{
        try {
            setLoading(true);
            setError(null);
            const bangumiData = [];
            const bangumiIds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$bangumi$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBangumiIds"])();
            if (bangumiIds.length === 0) {
                throw new Error('请在 bangumi-config.ts 中配置你的追番列表');
            }
            for (const id of bangumiIds){
                try {
                    const response = await fetch(`https://api.bgm.tv/v0/subjects/${id}`);
                    if (response.ok) {
                        const item = await response.json();
                        if (item.type === 2) {
                            bangumiData.push({
                                id: item.id,
                                name: item.name,
                                name_cn: item.name_cn || item.name,
                                summary: item.summary || '',
                                rating: item.rating,
                                air_date: item.air_date,
                                air_weekday: item.air_weekday || 0,
                                eps: item.eps,
                                infobox: item.infobox || [],
                                images: item.images,
                                collection: item.collection
                            });
                        }
                    }
                } catch (itemError) {
                    console.warn(`获取番剧 ${id} 信息失败:`, itemError);
                }
                await new Promise((resolve)=>setTimeout(resolve, 200));
            }
            if (bangumiData.length === 0) {
                throw new Error('未能获取到任何番剧数据');
            }
            // 使用配置的分组选项
            const groups = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$bangumi$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getGroupLabels"])().filter((label)=>label !== "喜欢的番剧");
            setSeasonOptions(groups);
            setBangumiList(bangumiData);
            setFilteredList(bangumiData);
        } catch (err) {
            console.error('获取番剧数据失败:', err);
            setError('获取番剧数据失败，请检查番剧ID配置或稍后重试');
        } finally{
            setLoading(false);
        }
    };
    // 筛选番剧
    const filterBangumi = (type)=>{
        setFilterType(type);
        let listToFilter = [
            ...bangumiList
        ];
        if (type === "favorite") {
            const favoriteIds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$bangumi$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFavoriteBangumiIds"])();
            setFilteredList(listToFilter.filter((item)=>favoriteIds.includes(item.id)));
        } else {
            const groupIds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$bangumi$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBangumiIdsByGroup"])(type);
            setFilteredList(listToFilter.filter((item)=>groupIds.includes(item.id)));
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Bangumi.useEffect": ()=>{
            filterBangumi(filterType);
        }
    }["Bangumi.useEffect"], [
        bangumiList
    ]);
    const handleItemClick = (item)=>{
        setSelectedItem(item);
        // 锁定背景滚动
        document.body.style.overflow = 'hidden';
    };
    const handleCloseDetail = ()=>{
        setSelectedItem(null);
        // 恢复背景滚动
        document.body.style.overflow = 'unset';
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "bangumi",
        className: "relative min-h-screen py-8 overflow-hidden",
        style: {
            background: 'linear-gradient(180deg, #111827 0%, #12172a 18%, #151625 40%, #14131f 62%, #111117 82%, #0d1016 100%)'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-x-0 top-0 h-32 bg-[linear-gradient(180deg,rgba(129,140,248,0.1),rgba(99,102,241,0.05)_34%,transparent)]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Bangumi.tsx",
                        lineNumber: 149,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Bangumi.tsx",
                        lineNumber: 150,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-36 right-8 w-[26rem] h-[26rem] bg-fuchsia-400/8 rounded-full blur-3xl"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Bangumi.tsx",
                        lineNumber: 151,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-24 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Bangumi.tsx",
                        lineNumber: 152,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Bangumi.tsx",
                        lineNumber: 153,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-x-0 bottom-0 h-52 bg-[linear-gradient(180deg,transparent,rgba(245,158,11,0.05)_42%,rgba(13,16,22,0.84)_100%)]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Bangumi.tsx",
                        lineNumber: 154,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/Bangumi.tsx",
                lineNumber: 148,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$magicui$2f$Particles$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Particles"], {
                className: "absolute inset-0 z-0",
                quantity: 150,
                ease: 80,
                size: 1.5,
                staticity: 30,
                color: "#6366f1",
                vy: 3
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Bangumi.tsx",
                lineNumber: 157,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 container mx-auto px-4 ml-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mb-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-200 via-sky-300 to-indigo-300 bg-clip-text text-transparent drop-shadow-[0_0_24px_rgba(125,211,252,0.18)] mb-6",
                                children: "我的追番"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/Bangumi.tsx",
                                lineNumber: 169,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xl text-gray-300 max-w-2xl mx-auto mb-4",
                                children: "正在追的番剧，数据来源于 Bangumi.tv"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/Bangumi.tsx",
                                lineNumber: 172,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-center gap-4 mb-8",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    value: filterType,
                                    onChange: (e)=>filterBangumi(e.target.value),
                                    className: "px-6 py-2 rounded-full bg-white/10 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 shadow backdrop-blur-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "favorite",
                                            children: "喜欢的番剧"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/Bangumi.tsx",
                                            lineNumber: 183,
                                            columnNumber: 15
                                        }, this),
                                        seasonOptions.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: opt,
                                                children: opt
                                            }, opt, false, {
                                                fileName: "[project]/src/components/sections/Bangumi.tsx",
                                                lineNumber: 185,
                                                columnNumber: 17
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/sections/Bangumi.tsx",
                                    lineNumber: 178,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/Bangumi.tsx",
                                lineNumber: 177,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/Bangumi.tsx",
                        lineNumber: 168,
                        columnNumber: 9
                    }, this),
                    loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center items-center h-64",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/Bangumi.tsx",
                                lineNumber: 193,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "ml-4 text-white text-lg",
                                children: "加载中..."
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/Bangumi.tsx",
                                lineNumber: 194,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/Bangumi.tsx",
                        lineNumber: 192,
                        columnNumber: 11
                    }, this),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center py-12",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-red-500/20 border border-red-500/50 rounded-lg p-6 max-w-md mx-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-red-300 mb-4",
                                    children: error
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/Bangumi.tsx",
                                    lineNumber: 201,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: fetchBangumiData,
                                    className: "bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition-colors",
                                    children: "重试"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/Bangumi.tsx",
                                    lineNumber: 202,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sections/Bangumi.tsx",
                            lineNumber: 200,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Bangumi.tsx",
                        lineNumber: 199,
                        columnNumber: 11
                    }, this),
                    !loading && !error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "overflow-x-auto pb-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-6 min-w-max px-4",
                                    children: filteredList.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-shrink-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "hidden md:block",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        onClick: ()=>handleItemClick(item),
                                                        className: "w-64 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg overflow-hidden transition-all duration-300 cursor-pointer hover:shadow-2xl group hover:border-blue-400/50",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "aspect-[3/4] relative overflow-hidden h-80 w-64",
                                                                children: [
                                                                    item.images?.large ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$lens$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Lens"], {
                                                                        zoomFactor: 1.2,
                                                                        lensSize: 180,
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                            src: item.images.large,
                                                                            alt: item.name_cn || item.name,
                                                                            className: "w-full h-full object-cover",
                                                                            onError: (e)=>{
                                                                                const target = e.target;
                                                                                target.src = '/assets/placeholder-anime.jpg';
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/sections/Bangumi.tsx",
                                                                            lineNumber: 228,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/sections/Bangumi.tsx",
                                                                        lineNumber: 227,
                                                                        columnNumber: 29
                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "w-full h-full bg-gradient-to-br from-blue-500/30 to-purple-500/30 flex items-center justify-center",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-white text-sm text-center px-2",
                                                                            children: item.name_cn || item.name
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/sections/Bangumi.tsx",
                                                                            lineNumber: 240,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/sections/Bangumi.tsx",
                                                                        lineNumber: 239,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    item.rating?.score && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm font-bold",
                                                                        children: item.rating.score.toFixed(1)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/sections/Bangumi.tsx",
                                                                        lineNumber: 246,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/sections/Bangumi.tsx",
                                                                lineNumber: 225,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "p-4 transition-opacity duration-300",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                        className: "text-white font-semibold text-sm mb-2 line-clamp-2 h-10",
                                                                        children: item.name_cn || item.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/sections/Bangumi.tsx",
                                                                        lineNumber: 252,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex justify-between items-center text-xs text-gray-300",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: getAirWeekdayFromInfo(item)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/sections/Bangumi.tsx",
                                                                                lineNumber: 256,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            item.collection?.doing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: [
                                                                                    item.collection.doing,
                                                                                    " 人在看"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/components/sections/Bangumi.tsx",
                                                                                lineNumber: 258,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/sections/Bangumi.tsx",
                                                                        lineNumber: 255,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/sections/Bangumi.tsx",
                                                                lineNumber: 251,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/sections/Bangumi.tsx",
                                                        lineNumber: 221,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/Bangumi.tsx",
                                                    lineNumber: 220,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "block md:hidden",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        onClick: ()=>handleItemClick(item),
                                                        className: "w-36 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg overflow-hidden hover:bg-white/20 transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-2xl",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "aspect-[3/4] relative overflow-hidden",
                                                                children: [
                                                                    item.images?.large ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                        src: item.images.large,
                                                                        alt: item.name_cn || item.name,
                                                                        className: "w-full h-full object-cover",
                                                                        onError: (e)=>{
                                                                            const target = e.target;
                                                                            target.src = '/assets/placeholder-anime.jpg';
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/sections/Bangumi.tsx",
                                                                        lineNumber: 272,
                                                                        columnNumber: 29
                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "w-full h-full bg-gradient-to-br from-blue-500/30 to-purple-500/30 flex items-center justify-center",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-white text-sm text-center px-2",
                                                                            children: item.name_cn || item.name
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/sections/Bangumi.tsx",
                                                                            lineNumber: 283,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/sections/Bangumi.tsx",
                                                                        lineNumber: 282,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    item.rating?.score && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm font-bold",
                                                                        children: item.rating.score.toFixed(1)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/sections/Bangumi.tsx",
                                                                        lineNumber: 290,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/sections/Bangumi.tsx",
                                                                lineNumber: 270,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "p-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                        className: "text-white font-semibold text-sm mb-2 line-clamp-2 h-10",
                                                                        children: item.name_cn || item.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/sections/Bangumi.tsx",
                                                                        lineNumber: 297,
                                                                        columnNumber: 28
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex justify-between items-center text-xs text-gray-300",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: getAirWeekdayFromInfo(item)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/sections/Bangumi.tsx",
                                                                            lineNumber: 302,
                                                                            columnNumber: 30
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/sections/Bangumi.tsx",
                                                                        lineNumber: 301,
                                                                        columnNumber: 28
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/sections/Bangumi.tsx",
                                                                lineNumber: 296,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/sections/Bangumi.tsx",
                                                        lineNumber: 266,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/Bangumi.tsx",
                                                    lineNumber: 265,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, item.id, true, {
                                            fileName: "[project]/src/components/sections/Bangumi.tsx",
                                            lineNumber: 218,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/Bangumi.tsx",
                                    lineNumber: 216,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/Bangumi.tsx",
                                lineNumber: 215,
                                columnNumber: 13
                            }, this),
                            filteredList.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center mt-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-400 text-sm mb-2",
                                        children: "← 左右滑动查看更多 →"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/Bangumi.tsx",
                                        lineNumber: 320,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-500 text-xs",
                                        children: [
                                            "当前显示 ",
                                            filteredList.length,
                                            " 部番"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sections/Bangumi.tsx",
                                        lineNumber: 323,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/Bangumi.tsx",
                                lineNumber: 319,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center mt-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-400 text-lg mb-2",
                                        children: "暂无符合条件的番剧"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/Bangumi.tsx",
                                        lineNumber: 329,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-500 text-sm",
                                        children: "尝试切换其他筛选条件"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/Bangumi.tsx",
                                        lineNumber: 330,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/Bangumi.tsx",
                                lineNumber: 328,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/Bangumi.tsx",
                        lineNumber: 213,
                        columnNumber: 11
                    }, this),
                    selectedItem && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80",
                        onClick: handleCloseDetail,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white/10 backdrop-blur-md border border-white/20 rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto",
                            onClick: (e)=>e.stopPropagation(),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-start mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-2xl font-bold text-white",
                                                children: selectedItem.name_cn || selectedItem.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Bangumi.tsx",
                                                lineNumber: 345,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handleCloseDetail,
                                                className: "text-gray-400 hover:text-white text-2xl",
                                                children: "×"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Bangumi.tsx",
                                                lineNumber: 348,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sections/Bangumi.tsx",
                                        lineNumber: 344,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: selectedItem.images?.large && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: selectedItem.images.large,
                                                    alt: selectedItem.name_cn || selectedItem.name,
                                                    className: "w-full rounded-lg",
                                                    onError: (e)=>{
                                                        const target = e.target;
                                                        target.src = '/assets/placeholder-anime.jpg';
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/Bangumi.tsx",
                                                    lineNumber: 359,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Bangumi.tsx",
                                                lineNumber: 357,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-white space-y-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-gray-300",
                                                                children: "原名："
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/sections/Bangumi.tsx",
                                                                lineNumber: 373,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: selectedItem.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/sections/Bangumi.tsx",
                                                                lineNumber: 374,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/sections/Bangumi.tsx",
                                                        lineNumber: 372,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-gray-300",
                                                                children: "播出时间："
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/sections/Bangumi.tsx",
                                                                lineNumber: 378,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: getAirWeekdayFromInfo(selectedItem)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/sections/Bangumi.tsx",
                                                                lineNumber: 379,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/sections/Bangumi.tsx",
                                                        lineNumber: 377,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-gray-300",
                                                                children: "总集数："
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/sections/Bangumi.tsx",
                                                                lineNumber: 382,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    selectedItem.collection.doing,
                                                                    " 人在看"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/sections/Bangumi.tsx",
                                                                lineNumber: 383,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/sections/Bangumi.tsx",
                                                        lineNumber: 381,
                                                        columnNumber: 21
                                                    }, this),
                                                    selectedItem.air_date && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-gray-300",
                                                                children: "首播日期："
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/sections/Bangumi.tsx",
                                                                lineNumber: 387,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: selectedItem.air_date
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/sections/Bangumi.tsx",
                                                                lineNumber: 388,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/sections/Bangumi.tsx",
                                                        lineNumber: 386,
                                                        columnNumber: 23
                                                    }, this),
                                                    selectedItem.rating?.score && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-gray-300",
                                                                children: "评分："
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/sections/Bangumi.tsx",
                                                                lineNumber: 394,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-yellow-400 font-bold",
                                                                children: selectedItem.rating.score.toFixed(1)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/sections/Bangumi.tsx",
                                                                lineNumber: 395,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-gray-400 ml-1",
                                                                children: [
                                                                    "(",
                                                                    selectedItem.rating.total,
                                                                    " 人评价)"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/sections/Bangumi.tsx",
                                                                lineNumber: 398,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/sections/Bangumi.tsx",
                                                        lineNumber: 393,
                                                        columnNumber: 23
                                                    }, this),
                                                    selectedItem.collection && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-gray-300",
                                                                children: "收藏状态："
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/sections/Bangumi.tsx",
                                                                lineNumber: 406,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-sm mt-1 space-y-1",
                                                                children: [
                                                                    selectedItem.collection.doing > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            "在看：",
                                                                            selectedItem.collection.doing,
                                                                            " 人"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/sections/Bangumi.tsx",
                                                                        lineNumber: 409,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    selectedItem.collection.collect > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            "看过：",
                                                                            selectedItem.collection.collect,
                                                                            " 人"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/sections/Bangumi.tsx",
                                                                        lineNumber: 412,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    selectedItem.collection.wish > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            "想看：",
                                                                            selectedItem.collection.wish,
                                                                            " 人"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/sections/Bangumi.tsx",
                                                                        lineNumber: 415,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/sections/Bangumi.tsx",
                                                                lineNumber: 407,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/sections/Bangumi.tsx",
                                                        lineNumber: 405,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/sections/Bangumi.tsx",
                                                lineNumber: 371,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sections/Bangumi.tsx",
                                        lineNumber: 356,
                                        columnNumber: 17
                                    }, this),
                                    selectedItem.summary && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-lg font-semibold text-white mb-2",
                                                children: "简介"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Bangumi.tsx",
                                                lineNumber: 425,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-300 leading-relaxed",
                                                children: selectedItem.summary
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Bangumi.tsx",
                                                lineNumber: 426,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sections/Bangumi.tsx",
                                        lineNumber: 424,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/Bangumi.tsx",
                                lineNumber: 343,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/Bangumi.tsx",
                            lineNumber: 339,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Bangumi.tsx",
                        lineNumber: 338,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/Bangumi.tsx",
                lineNumber: 167,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/Bangumi.tsx",
        lineNumber: 139,
        columnNumber: 5
    }, this);
};
_s(Bangumi, "KC1mfJ5PaiaRBTA1mkLq6XpKV24=");
_c = Bangumi;
const __TURBOPACK__default__export__ = Bangumi;
const DEFAULT_GROUP = "2026年1月";
var _c;
__turbopack_context__.k.register(_c, "Bangumi");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/MessageBoard.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
// 来必力留言板组件
const MessageBoard = ()=>{
    _s();
    const [loadingStatus, setLoadingStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('loading');
    const [errorMessage, setErrorMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MessageBoard.useEffect": ()=>{
            // 检查是否已经加载过脚本
            if (typeof window.LivereTower === 'function') {
                setLoadingStatus('loaded');
                return;
            }
            // 添加全局错误捕获
            const originalConsoleError = console.error;
            const errorHandler = {
                "MessageBoard.useEffect.errorHandler": (...args)=>{
                    // 捕获来必力相关的错误但不阻止其他错误
                    const error = args[0];
                    if (error && (error.toString().includes('livere') || error.toString().includes('Livere'))) {
                        console.warn('Livere script error caught:', error);
                        // 不设置为错误状态，让来必力继续尝试工作
                        return;
                    }
                    originalConsoleError.apply(console, args);
                }
            }["MessageBoard.useEffect.errorHandler"];
            console.error = errorHandler;
            // 清理可能存在的旧容器
            const existingContainer = document.getElementById('lv-container');
            if (existingContainer && existingContainer.innerHTML) {
                existingContainer.innerHTML = '';
            }
            // 按照官方代码加载来必力脚本
            const loadScript = {
                "MessageBoard.useEffect.loadScript": ()=>{
                    const d = document;
                    const s = 'script';
                    const j = d.createElement(s);
                    const e = d.getElementsByTagName(s)[0];
                    j.src = 'https://cdn-city.livere.com/js/embed.dist.js';
                    j.async = true;
                    j.setAttribute('data-livere-script', 'true');
                    // 确保容器存在且有正确的属性
                    const container = document.getElementById('lv-container');
                    if (container) {
                        container.setAttribute('data-id', 'city');
                        container.setAttribute('data-uid', 'MTAyMC82MDc1Ni8zNzIyNw==');
                        console.log('Livere container prepared:', container);
                    }
                    // 添加加载成功回调
                    j.onload = ({
                        "MessageBoard.useEffect.loadScript": ()=>{
                            console.log('Livere script loaded successfully');
                            // 监听来必力的初始化事件
                            const handleLivereReady = {
                                "MessageBoard.useEffect.loadScript.handleLivereReady": ()=>{
                                    console.log('Livere ready event detected');
                                    setLoadingStatus('loaded');
                                }
                            }["MessageBoard.useEffect.loadScript.handleLivereReady"];
                            // 添加事件监听器
                            window.addEventListener('livere:ready', handleLivereReady);
                            document.addEventListener('livere:loaded', handleLivereReady);
                            // 更智能的初始化检测
                            const checkInitialization = {
                                "MessageBoard.useEffect.loadScript.checkInitialization": (attempts = 0)=>{
                                    const maxAttempts = 30; // 增加检查次数
                                    const interval = 300; // 减少检查间隔
                                    if (attempts >= maxAttempts) {
                                        console.warn('Livere initialization timeout after 9 seconds');
                                        setLoadingStatus('error');
                                        setErrorMessage('脚本加载成功但初始化失败');
                                        return;
                                    }
                                    // 检查多个初始化标志
                                    const container = document.getElementById('lv-container');
                                    const hasLivereTower = typeof window.LivereTower === 'function';
                                    const hasLivereCity = typeof window.livereCity === 'object';
                                    const hasContent = container && (container.children.length > 1 || container.innerHTML.includes('livere') || container.querySelector('iframe') !== null);
                                    if (hasLivereTower || hasLivereCity || hasContent) {
                                        console.log('Livere initialized successfully', {
                                            hasLivereTower,
                                            hasLivereCity,
                                            hasContent,
                                            attempt: attempts + 1
                                        });
                                        setLoadingStatus('loaded');
                                        // 清理事件监听器
                                        window.removeEventListener('livere:ready', handleLivereReady);
                                        document.removeEventListener('livere:loaded', handleLivereReady);
                                    } else {
                                        // 尝试手动触发初始化
                                        if (attempts === 10 && hasLivereTower) {
                                            try {
                                                console.log('Attempting manual Livere initialization');
                                                window.LivereTower('lv-container');
                                            } catch (e) {
                                                console.warn('Manual initialization failed:', e);
                                            }
                                        }
                                        setTimeout({
                                            "MessageBoard.useEffect.loadScript.checkInitialization": ()=>checkInitialization(attempts + 1)
                                        }["MessageBoard.useEffect.loadScript.checkInitialization"], interval);
                                    }
                                }
                            }["MessageBoard.useEffect.loadScript.checkInitialization"];
                            // 立即开始检查，不等待
                            checkInitialization();
                        }
                    })["MessageBoard.useEffect.loadScript"];
                    // 添加加载失败回调
                    j.onerror = ({
                        "MessageBoard.useEffect.loadScript": (error)=>{
                            console.error('Failed to load Livere script:', error);
                            setLoadingStatus('error');
                            setErrorMessage('脚本加载失败，请检查网络连接');
                        }
                    })["MessageBoard.useEffect.loadScript"];
                    if (e && e.parentNode) {
                        e.parentNode.insertBefore(j, e);
                    } else {
                        d.head.appendChild(j);
                    }
                }
            }["MessageBoard.useEffect.loadScript"];
            // 延迟加载脚本，确保DOM完全准备好
            const timer = setTimeout(loadScript, 500);
            return ({
                "MessageBoard.useEffect": ()=>{
                    clearTimeout(timer);
                    // 恢复原始的console.error
                    console.error = originalConsoleError;
                }
            })["MessageBoard.useEffect"];
        }
    }["MessageBoard.useEffect"], []);
    const handleRetry = ()=>{
        setLoadingStatus('loading');
        setErrorMessage('');
        // 重新加载页面来重置状态
        window.location.reload();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-[300px] relative",
            children: [
                loadingStatus === 'loading' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 flex items-center justify-center bg-amber-50/80 z-10",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "animate-spin rounded-full h-8 w-8 border-b-2 border-amber-600 mx-auto mb-2"
                            }, void 0, false, {
                                fileName: "[project]/src/components/MessageBoard.tsx",
                                lineNumber: 157,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-amber-700 text-sm",
                                children: "正在加载留言板..."
                            }, void 0, false, {
                                fileName: "[project]/src/components/MessageBoard.tsx",
                                lineNumber: 158,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/MessageBoard.tsx",
                        lineNumber: 156,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/MessageBoard.tsx",
                    lineNumber: 155,
                    columnNumber: 11
                }, this),
                loadingStatus === 'error' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 flex items-center justify-center bg-amber-50/80 z-10",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-red-600 mb-2",
                                children: "❌ 留言板加载失败"
                            }, void 0, false, {
                                fileName: "[project]/src/components/MessageBoard.tsx",
                                lineNumber: 167,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-600 mb-3",
                                children: errorMessage || '未知错误'
                            }, void 0, false, {
                                fileName: "[project]/src/components/MessageBoard.tsx",
                                lineNumber: 168,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleRetry,
                                className: "px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white text-sm rounded transition-colors",
                                children: "重新加载"
                            }, void 0, false, {
                                fileName: "[project]/src/components/MessageBoard.tsx",
                                lineNumber: 169,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/MessageBoard.tsx",
                        lineNumber: 166,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/MessageBoard.tsx",
                    lineNumber: 165,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    id: "lv-container",
                    "data-id": "city",
                    "data-uid": "MTAyMC82MDc1Ni8zNzIyNw==",
                    style: {
                        opacity: loadingStatus === 'loaded' ? 1 : 0.3
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("noscript", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-amber-700 text-center py-2 bg-amber-100/50 border border-amber-400 text-xs",
                            children: "为正常使用来必力评论功能请激活JavaScript"
                        }, void 0, false, {
                            fileName: "[project]/src/components/MessageBoard.tsx",
                            lineNumber: 187,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/MessageBoard.tsx",
                        lineNumber: 186,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/MessageBoard.tsx",
                    lineNumber: 180,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/MessageBoard.tsx",
            lineNumber: 152,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/MessageBoard.tsx",
        lineNumber: 151,
        columnNumber: 5
    }, this);
};
_s(MessageBoard, "fSYkHY1Cvu0YSO6T96w5kfX0jOk=");
_c = MessageBoard;
const __TURBOPACK__default__export__ = MessageBoard;
var _c;
__turbopack_context__.k.register(_c, "MessageBoard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/analytics.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// 访问统计服务
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__),
    "useAnalytics": (()=>useAnalytics)
});
// 导入React
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
class AnalyticsService {
    static instance;
    visitorCount = 0;
    onlineUsers = new Set();
    sessionId;
    heartbeatInterval = null;
    STORAGE_KEY = 'site_analytics';
    SESSION_KEY = 'session_id';
    HEARTBEAT_INTERVAL = 30000;
    SESSION_TIMEOUT = 300000;
    constructor(){
        this.sessionId = this.generateSessionId();
        this.loadFromStorage();
        this.startHeartbeat();
        this.handleVisibilityChange();
    }
    static getInstance() {
        if (!AnalyticsService.instance) {
            AnalyticsService.instance = new AnalyticsService();
        }
        return AnalyticsService.instance;
    }
    generateSessionId() {
        const stored = sessionStorage.getItem(this.SESSION_KEY);
        if (stored) {
            return stored;
        }
        const newId = Date.now().toString(36) + Math.random().toString(36).substr(2);
        sessionStorage.setItem(this.SESSION_KEY, newId);
        return newId;
    }
    loadFromStorage() {
        try {
            const stored = localStorage.getItem(this.STORAGE_KEY);
            if (stored) {
                const data = JSON.parse(stored);
                this.visitorCount = data.visitorCount || 0;
                // 清理过期的在线用户
                const now = Date.now();
                const validSessions = new Map(Object.entries(data.onlineSessions || {}).filter(([_, timestamp])=>now - timestamp < this.SESSION_TIMEOUT));
                this.onlineUsers = new Set(validSessions.keys());
                // 如果是新会话，增加访问量
                if (!validSessions.has(this.sessionId)) {
                    this.visitorCount++;
                }
                // 添加当前会话
                this.onlineUsers.add(this.sessionId);
                this.saveToStorage();
            } else {
                // 首次访问
                this.visitorCount = 1;
                this.onlineUsers.add(this.sessionId);
                this.saveToStorage();
            }
        } catch (error) {
            console.warn('Failed to load analytics data:', error);
            this.visitorCount = 1;
            this.onlineUsers.add(this.sessionId);
        }
    }
    saveToStorage() {
        try {
            const now = Date.now();
            const onlineSessions = {};
            this.onlineUsers.forEach((sessionId)=>{
                onlineSessions[sessionId] = now;
            });
            const data = {
                visitorCount: this.visitorCount,
                onlineSessions,
                lastUpdate: now
            };
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
        } catch (error) {
            console.warn('Failed to save analytics data:', error);
        }
    }
    startHeartbeat() {
        this.heartbeatInterval = setInterval(()=>{
            this.onlineUsers.add(this.sessionId);
            this.saveToStorage();
        }, this.HEARTBEAT_INTERVAL);
    }
    handleVisibilityChange() {
        if (typeof document !== 'undefined') {
            document.addEventListener('visibilitychange', ()=>{
                if (document.hidden) {
                    // 页面隐藏时停止心跳
                    if (this.heartbeatInterval) {
                        clearInterval(this.heartbeatInterval);
                        this.heartbeatInterval = null;
                    }
                } else {
                    // 页面显示时恢复心跳
                    if (!this.heartbeatInterval) {
                        this.startHeartbeat();
                    }
                }
            });
            // 页面卸载时清理
            window.addEventListener('beforeunload', ()=>{
                if (this.heartbeatInterval) {
                    clearInterval(this.heartbeatInterval);
                }
            });
        }
    }
    getVisitorCount() {
        return this.visitorCount;
    }
    getOnlineUsers() {
        // 清理过期会话
        const now = Date.now();
        const stored = localStorage.getItem(this.STORAGE_KEY);
        if (stored) {
            try {
                const data = JSON.parse(stored);
                const validSessions = Object.entries(data.onlineSessions || {}).filter(([_, timestamp])=>now - timestamp < this.SESSION_TIMEOUT);
                this.onlineUsers = new Set(validSessions.map(([sessionId])=>sessionId));
                // 确保当前会话在线
                this.onlineUsers.add(this.sessionId);
                this.saveToStorage();
            } catch (error) {
                console.warn('Failed to clean expired sessions:', error);
            }
        }
        return this.onlineUsers.size;
    }
    destroy() {
        if (this.heartbeatInterval) {
            clearInterval(this.heartbeatInterval);
            this.heartbeatInterval = null;
        }
    }
}
const useAnalytics = ()=>{
    _s();
    const [visitorCount, setVisitorCount] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(0);
    const [onlineUsers, setOnlineUsers] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(0);
    const analyticsRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "useAnalytics.useEffect": ()=>{
            // 只在客户端初始化
            if ("TURBOPACK compile-time truthy", 1) {
                analyticsRef.current = AnalyticsService.getInstance();
                const updateStats = {
                    "useAnalytics.useEffect.updateStats": ()=>{
                        if (analyticsRef.current) {
                            setVisitorCount(analyticsRef.current.getVisitorCount());
                            setOnlineUsers(analyticsRef.current.getOnlineUsers());
                        }
                    }
                }["useAnalytics.useEffect.updateStats"];
                // 初始更新
                updateStats();
                // 定期更新在线用户数
                const interval = setInterval(updateStats, 10000); // 每10秒更新一次
                return ({
                    "useAnalytics.useEffect": ()=>{
                        clearInterval(interval);
                        if (analyticsRef.current) {
                            analyticsRef.current.destroy();
                        }
                    }
                })["useAnalytics.useEffect"];
            }
        }
    }["useAnalytics.useEffect"], []);
    return {
        visitorCount,
        onlineUsers
    };
};
_s(useAnalytics, "LwsHTVQ023q6GFMBaxzPel+weyM=");
;
const __TURBOPACK__default__export__ = AnalyticsService;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/sections/Contact.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MessageBoard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/MessageBoard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$analytics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/analytics.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
;
;
;
;
const toAssetPath = (assetPath)=>assetPath.startsWith('./') ? assetPath.replace('./', '/') : assetPath;
// 进度条组件
const ProgressBars = ()=>{
    _s();
    const [progressData, setProgressData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            label: '今日已过',
            percent: '0.00'
        },
        {
            label: '本周已过',
            percent: '0.00'
        },
        {
            label: '本月已过',
            percent: '0.00'
        },
        {
            label: '今年已过',
            percent: '0.00'
        }
    ]);
    const [isClient, setIsClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProgressBars.useEffect": ()=>{
            setIsClient(true);
            const updateProgress = {
                "ProgressBars.useEffect.updateProgress": ()=>{
                    const now = new Date();
                    // 今日已过
                    const dayPercent = ((now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds()) / (24 * 3600) * 100).toFixed(2);
                    // 本周已过
                    const day = (now.getDay() || 7) - 1;
                    const sec = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
                    const weekPercent = ((day * 86400 + sec) / (7 * 86400) * 100).toFixed(2);
                    // 本月已过
                    const days = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
                    const monthSec = (now.getDate() - 1) * 86400 + now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
                    const monthPercent = (monthSec / (days * 86400) * 100).toFixed(2);
                    // 今年已过
                    const start = new Date(now.getFullYear(), 0, 1).getTime();
                    const end = new Date(now.getFullYear() + 1, 0, 1).getTime();
                    const diff = now.getTime() - start;
                    const yearSec = end - start;
                    const yearPercent = (diff / yearSec * 100).toFixed(2);
                    setProgressData([
                        {
                            label: '今日已过',
                            percent: dayPercent
                        },
                        {
                            label: '本周已过',
                            percent: weekPercent
                        },
                        {
                            label: '本月已过',
                            percent: monthPercent
                        },
                        {
                            label: '今年已过',
                            percent: yearPercent
                        }
                    ]);
                }
            }["ProgressBars.useEffect.updateProgress"];
            updateProgress();
            const interval = setInterval(updateProgress, 1000);
            return ({
                "ProgressBars.useEffect": ()=>clearInterval(interval)
            })["ProgressBars.useEffect"];
        }
    }["ProgressBars.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-2 mt-4",
        children: progressData.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center space-x-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs md:text-sm text-amber-900 w-16",
                        children: item.label
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Contact.tsx",
                        lineNumber: 63,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 h-3 bg-amber-100 border border-amber-300 rounded relative overflow-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-full bg-gradient-to-r from-amber-400 to-orange-400",
                            style: {
                                width: `${isClient ? item.percent : '0.00'}%`,
                                transition: isClient ? 'width 0.6s ease-out' : 'none'
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/Contact.tsx",
                            lineNumber: 65,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Contact.tsx",
                        lineNumber: 64,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs font-mono text-amber-700 w-12 text-right",
                        children: [
                            isClient ? item.percent : '0.00',
                            "%"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/Contact.tsx",
                        lineNumber: 73,
                        columnNumber: 11
                    }, this)
                ]
            }, idx, true, {
                fileName: "[project]/src/components/sections/Contact.tsx",
                lineNumber: 62,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/sections/Contact.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, this);
};
_s(ProgressBars, "EY0dkOXH283dmOCZGFbi5PV05Ic=");
_c = ProgressBars;
// 粒子类
class Particle {
    originalX;
    originalY;
    x;
    y;
    vx;
    vy;
    baseColor;
    constructor(x, y, color){
        this.originalX = x;
        this.originalY = y;
        this.x = x;
        this.y = y;
        this.vx = 0;
        this.vy = 0;
        this.baseColor = color;
    }
    update(mouseX, mouseY, isMobile = false) {
        const dx = this.x - mouseX;
        const dy = this.y - mouseY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const repulsionRadius = isMobile ? 60 : 100; // 移动端减小排斥范围
        const repulsionForce = 2.5; // 增强排斥力
        const friction = 0.08; // 减小摩擦力，让运动更流畅
        const returnSpeed = 0.01; // 增加回弹速度
        // 排斥效果
        if (distance < repulsionRadius) {
            const angle = Math.atan2(dy, dx);
            const ratio = (repulsionRadius - distance) / repulsionRadius;
            const force = ratio * ratio * repulsionForce;
            this.vx += Math.cos(angle) * force;
            this.vy += Math.sin(angle) * force;
        }
        // 返回原位
        const returnX = (this.originalX - this.x) * returnSpeed;
        const returnY = (this.originalY - this.y) * returnSpeed;
        this.vx += returnX;
        this.vy += returnY;
        // 摩擦力
        this.vx *= 1 - friction;
        this.vy *= 1 - friction;
        this.x += this.vx;
        this.y += this.vy;
    }
    draw(ctx) {
        ctx.fillStyle = this.baseColor;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
        ctx.fill();
    }
}
const Contact = ()=>{
    _s1();
    const [uptime, setUptime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const { visitorCount: realVisitorCount, onlineUsers: realOnlineUsers } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$analytics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnalytics"])();
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const desktopCanvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mobileCanvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const particlesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const mouseRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: -1000,
        y: -1000
    });
    const animationRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(undefined);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Contact.useEffect": ()=>{
            const calculateUptime = {
                "Contact.useEffect.calculateUptime": ()=>{
                    const startTime = new Date('2025-06-20');
                    const now = new Date();
                    const diff = now.getTime() - startTime.getTime();
                    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
                    const hours = Math.floor(diff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
                    const minutes = Math.floor(diff % (1000 * 60 * 60) / (1000 * 60));
                    const seconds = Math.floor(diff % (1000 * 60) / 1000);
                    setUptime(`${days.toString().padStart(3, '0')}:${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);
                }
            }["Contact.useEffect.calculateUptime"];
            calculateUptime();
            const interval = setInterval(calculateUptime, 1000);
            return ({
                "Contact.useEffect": ()=>clearInterval(interval)
            })["Contact.useEffect"];
        }
    }["Contact.useEffect"], []);
    // 移动端点阵图
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Contact.useEffect": ()=>{
            const canvas = mobileCanvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext('2d');
            if (!ctx) return;
            const resizeCanvas = {
                "Contact.useEffect.resizeCanvas": ()=>{
                    const container = canvas.parentElement;
                    if (container) {
                        canvas.width = container.clientWidth;
                        canvas.height = container.clientHeight;
                        generateParticles();
                    }
                }
            }["Contact.useEffect.resizeCanvas"];
            const generateParticles = {
                "Contact.useEffect.generateParticles": ()=>{
                    particlesRef.current = [];
                    const spacing = 4; // 减小间距使点阵更密集
                    const offsetX = canvas.width * 0.02; // 减小偏移量使图案更大
                    const offsetY = canvas.height * 0.02;
                    const maxWidth = canvas.width * 0.98; // 增大可用区域
                    const maxHeight = canvas.height * 0.96;
                    const img = new window.Image();
                    img.crossOrigin = 'anonymous';
                    img.onload = ({
                        "Contact.useEffect.generateParticles": ()=>{
                            if (img.width === 0 || img.height === 0) return;
                            const tempCanvas = document.createElement('canvas');
                            const tempCtx = tempCanvas.getContext('2d');
                            if (!tempCtx) return;
                            const scale = Math.min(maxWidth / img.width, maxHeight / img.height) * 0.95; // 增大缩放比例
                            tempCanvas.width = img.width * scale;
                            tempCanvas.height = img.height * scale;
                            tempCtx.drawImage(img, 0, 0, tempCanvas.width, tempCanvas.height);
                            if (tempCanvas.width === 0 || tempCanvas.height === 0) return;
                            const imageData = tempCtx.getImageData(0, 0, tempCanvas.width, tempCanvas.height);
                            const data = imageData.data;
                            const imgOffsetX = offsetX + (maxWidth - tempCanvas.width) / 2;
                            const imgOffsetY = offsetY + (maxHeight - tempCanvas.height) / 2;
                            for(let y = 0; y < tempCanvas.height; y += spacing){
                                for(let x = 0; x < tempCanvas.width; x += spacing){
                                    const index = (y * tempCanvas.width + x) * 4;
                                    const alpha = data[index + 3];
                                    if (alpha > 128) {
                                        const r = data[index];
                                        const g = data[index + 1];
                                        const b = data[index + 2];
                                        const brightness = (r + g + b) / 3;
                                        const whiteIntensity = Math.max(0.3, brightness / 255);
                                        const color = `rgba(255, 255, 255, ${whiteIntensity})`;
                                        particlesRef.current.push(new Particle(x + imgOffsetX, y + imgOffsetY, color));
                                    }
                                }
                            }
                        }
                    })["Contact.useEffect.generateParticles"];
                    img.onerror = ({
                        "Contact.useEffect.generateParticles": ()=>{
                            for(let y = 0; y < maxHeight; y += spacing){
                                for(let x = 0; x < maxWidth; x += spacing){
                                    const centerX = maxWidth / 2;
                                    const centerY = maxHeight / 2;
                                    const relX = (x - centerX) / 120;
                                    const relY = (y - centerY) / 120;
                                    const heartEquation = Math.pow(relX * relX + relY * relY - 1, 3) - relX * relX * relY * relY * relY;
                                    if (heartEquation <= 0 && Math.sqrt(relX * relX + relY * relY) <= 1.8) {
                                        particlesRef.current.push(new Particle(x + offsetX, y + offsetY, 'rgba(255, 255, 255, 0.8)'));
                                    }
                                }
                            }
                        }
                    })["Contact.useEffect.generateParticles"];
                    img.src = './assets/logo/白画透明.png';
                }
            }["Contact.useEffect.generateParticles"];
            const animate = {
                "Contact.useEffect.animate": ()=>{
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    particlesRef.current.forEach({
                        "Contact.useEffect.animate": (particle)=>{
                            particle.update(mouseRef.current.x, mouseRef.current.y, true);
                            particle.draw(ctx);
                        }
                    }["Contact.useEffect.animate"]);
                    animationRef.current = requestAnimationFrame(animate);
                }
            }["Contact.useEffect.animate"];
            resizeCanvas();
            animate();
            window.addEventListener('resize', resizeCanvas);
            return ({
                "Contact.useEffect": ()=>{
                    window.removeEventListener('resize', resizeCanvas);
                    if (animationRef.current) {
                        cancelAnimationFrame(animationRef.current);
                    }
                }
            })["Contact.useEffect"];
        }
    }["Contact.useEffect"], []);
    // 初始化点阵图
    // 桌面端点阵图
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Contact.useEffect": ()=>{
            const canvas = desktopCanvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext('2d');
            if (!ctx) return;
            const resizeCanvas = {
                "Contact.useEffect.resizeCanvas": ()=>{
                    const container = canvas.parentElement;
                    if (container) {
                        canvas.width = container.clientWidth;
                        canvas.height = container.clientHeight;
                        generateParticles();
                    }
                }
            }["Contact.useEffect.resizeCanvas"];
            const generateParticles = {
                "Contact.useEffect.generateParticles": ()=>{
                    particlesRef.current = [];
                    const spacing = 6; // 减小间距使点阵更密集
                    const offsetX = canvas.width * 0.05; // 减小偏移量使图案更大
                    const offsetY = canvas.height * 0.25;
                    const maxWidth = canvas.width * 1.0; // 增大可用区域
                    const maxHeight = canvas.height * 1.0;
                    // 从指定图片生成点阵图
                    const img = new Image();
                    img.crossOrigin = 'anonymous';
                    img.onload = ({
                        "Contact.useEffect.generateParticles": ()=>{
                            if (img.width === 0 || img.height === 0) return;
                            const tempCanvas = document.createElement('canvas');
                            const tempCtx = tempCanvas.getContext('2d');
                            if (!tempCtx) return;
                            // 设置临时画布尺寸
                            const scale = Math.min(maxWidth / img.width, maxHeight / img.height) * 0.8;
                            tempCanvas.width = img.width * scale;
                            tempCanvas.height = img.height * scale;
                            // 绘制图片到临时画布
                            tempCtx.drawImage(img, 0, 0, tempCanvas.width, tempCanvas.height);
                            // 获取图片数据
                            if (tempCanvas.width === 0 || tempCanvas.height === 0) return;
                            const imageData = tempCtx.getImageData(0, 0, tempCanvas.width, tempCanvas.height);
                            const data = imageData.data;
                            // 计算居中偏移
                            const imgOffsetX = offsetX + (maxWidth - tempCanvas.width) / 2;
                            const imgOffsetY = offsetY + (maxHeight - tempCanvas.height) / 2;
                            // 根据图片像素生成粒子
                            for(let y = 0; y < tempCanvas.height; y += spacing){
                                for(let x = 0; x < tempCanvas.width; x += spacing){
                                    const index = (y * tempCanvas.width + x) * 4;
                                    const alpha = data[index + 3];
                                    // 只在非透明像素处创建粒子
                                    if (alpha > 128) {
                                        const r = data[index];
                                        const g = data[index + 1];
                                        const b = data[index + 2];
                                        // 将颜色转换为白色系
                                        const brightness = (r + g + b) / 3;
                                        const whiteIntensity = Math.max(0.3, brightness / 255);
                                        const color = `rgba(255, 255, 255, ${whiteIntensity})`;
                                        particlesRef.current.push(new Particle(x + imgOffsetX, y + imgOffsetY, color));
                                    }
                                }
                            }
                        }
                    })["Contact.useEffect.generateParticles"];
                    // 如果图片加载失败，使用默认心形图案
                    img.onerror = ({
                        "Contact.useEffect.generateParticles": ()=>{
                            for(let y = 0; y < maxHeight; y += spacing){
                                for(let x = 0; x < maxWidth; x += spacing){
                                    const centerX = maxWidth / 2;
                                    const centerY = maxHeight / 2;
                                    const relX = (x - centerX) / 120;
                                    const relY = (y - centerY) / 120;
                                    const heartEquation = Math.pow(relX * relX + relY * relY - 1, 3) - relX * relX * relY * relY * relY;
                                    if (heartEquation <= 0 && Math.sqrt(relX * relX + relY * relY) <= 1.8) {
                                        particlesRef.current.push(new Particle(x + offsetX, y + offsetY, 'rgba(255, 255, 255, 0.8)'));
                                    }
                                }
                            }
                        }
                    })["Contact.useEffect.generateParticles"];
                    // 加载指定的logo图片
                    img.src = './assets/logo/白画透明.png';
                }
            }["Contact.useEffect.generateParticles"];
            const animate = {
                "Contact.useEffect.animate": ()=>{
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    particlesRef.current.forEach({
                        "Contact.useEffect.animate": (particle)=>{
                            particle.update(mouseRef.current.x, mouseRef.current.y, false);
                            particle.draw(ctx);
                        }
                    }["Contact.useEffect.animate"]);
                    animationRef.current = requestAnimationFrame(animate);
                }
            }["Contact.useEffect.animate"];
            resizeCanvas();
            animate();
            window.addEventListener('resize', resizeCanvas);
            return ({
                "Contact.useEffect": ()=>{
                    window.removeEventListener('resize', resizeCanvas);
                    if (animationRef.current) {
                        cancelAnimationFrame(animationRef.current);
                    }
                }
            })["Contact.useEffect"];
        }
    }["Contact.useEffect"], []);
    const handleMouseMove = (e)=>{
        const canvas = desktopCanvasRef.current;
        if (!canvas) return;
        const rect = canvas.getBoundingClientRect();
        const dpr = window.devicePixelRatio || 1;
        mouseRef.current = {
            x: (e.clientX - rect.left) * (canvas.width / rect.width),
            y: (e.clientY - rect.top) * (canvas.height / rect.height)
        };
    };
    const [isExpanded, setIsExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showMessageBoard, setShowMessageBoard] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // { name: 'Alice', description: '前端开发者', url: '#', avatar: './assets/logo/logo_0.jpg', subAvatar: './assets/logo/logo_0.jpg' },
    const friendLinks = [
        {
            name: '墨间黑沢',
            description: '"阵雨"的作者',
            url: 'https://space.bilibili.com/24271342',
            avatar: '/assets/friend/墨间黑沢.webp',
            subAvatar: undefined
        },
        {
            name: '时隐重工',
            description: '兴趣使然的未来主义建造者',
            url: 'https://shiyin.cafe/',
            avatar: '/assets/friend/shiyina.ico',
            subAvatar: undefined
        },
        {
            name: 'MuXiaoChen🍊',
            description: '柴米油盐酱醋茶，般般都在别人家',
            url: 'https://miraii.cn/',
            avatar: '/assets/friend/MuXiaoChen.webp',
            subAvatar: '/assets/friend/MuXiaoChen_siteshot.webp'
        },
        {
            name: 'RainMorime',
            description: '你我命运与此刻纠缠不休',
            url: 'https://www.rainmorime.com',
            avatar: '/assets/friend/RainMorime.jpg',
            subAvatar: undefined
        },
        {
            name: 'Roxy_Magicの咖啡馆',
            description: '昨日之书已合，今日之页当以“真本事”为墨',
            url: 'https://blog.roxymagic.top/',
            avatar: '/assets/friend/Roxy_Magicの咖啡馆.png',
            subAvatar: undefined
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "contact",
        className: "relative min-h-screen overflow-hidden",
        style: {
            fontFamily: 'Georgia, serif',
            background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 opacity-30",
                style: {
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3Ccircle cx='53' cy='53' r='1'/%3E%3Ccircle cx='37' cy='23' r='1'/%3E%3Ccircle cx='23' cy='37' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Contact.tsx",
                lineNumber: 429,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 h-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden lg:flex h-full relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                                        ref: desktopCanvasRef,
                                        className: "w-full h-screen cursor-crosshair",
                                        onMouseMove: handleMouseMove,
                                        onMouseLeave: ()=>mouseRef.current = {
                                                x: -1000,
                                                y: -1000
                                            }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/Contact.tsx",
                                        lineNumber: 438,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute top-8 left-8 text-white",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "text-6xl font-bold mb-2",
                                                style: {
                                                    fontFamily: 'Times New Roman, serif'
                                                },
                                                children: "CONTACT"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Contact.tsx",
                                                lineNumber: 447,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-lg opacity-70",
                                                children: "Interactive Particle System"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Contact.tsx",
                                                lineNumber: 448,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sections/Contact.tsx",
                                        lineNumber: 446,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute bottom-8 left-8",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setShowMessageBoard(!showMessageBoard),
                                            className: "px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white font-bold border-2 border-amber-800 transition-all duration-300 shadow-lg",
                                            style: {
                                                boxShadow: '4px 4px 0px rgba(120, 53, 15, 0.3)',
                                                fontFamily: 'Times New Roman, serif'
                                            },
                                            onMouseEnter: (e)=>{
                                                e.currentTarget.style.transform = 'translate(-2px, -2px)';
                                                e.currentTarget.style.boxShadow = '6px 6px 0px rgba(120, 53, 15, 0.4)';
                                            },
                                            onMouseLeave: (e)=>{
                                                e.currentTarget.style.transform = 'translateZ(0)';
                                                e.currentTarget.style.boxShadow = '4px 4px 0px rgba(120, 53, 15, 0.3)';
                                            },
                                            children: [
                                                "💬 ",
                                                showMessageBoard ? '关闭留言板' : '打开留言板'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/sections/Contact.tsx",
                                            lineNumber: 453,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/Contact.tsx",
                                        lineNumber: 452,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/Contact.tsx",
                                lineNumber: 437,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `w-96 bg-gradient-to-b from-amber-100/90 to-orange-100/90 backdrop-blur-sm border-l-4 border-amber-800 p-0 flex flex-col relative z-20 transition-all duration-500 ${isExpanded ? 'min-h-screen' : ''}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 p-8 border-b-4 border-amber-800",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-amber-50/80 border-2 border-amber-800 p-6 rounded-none shadow-lg",
                                            style: {
                                                boxShadow: '8px 8px 0px rgba(120, 53, 15, 0.3)'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-3xl font-bold text-amber-900 mb-6 text-center",
                                                    style: {
                                                        fontFamily: 'Times New Roman, serif'
                                                    },
                                                    children: "网站统计"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/Contact.tsx",
                                                    lineNumber: 481,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-4 text-amber-800",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between items-center border-b border-amber-300 pb-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-lg font-semibold",
                                                                    children: "运行时长:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/sections/Contact.tsx",
                                                                    lineNumber: 485,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-mono text-lg bg-amber-200 px-2 py-1 rounded border border-amber-400",
                                                                    children: uptime
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/sections/Contact.tsx",
                                                                    lineNumber: 486,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/sections/Contact.tsx",
                                                            lineNumber: 484,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between items-center border-b border-amber-300 pb-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-lg font-semibold",
                                                                    children: "在线用户:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/sections/Contact.tsx",
                                                                    lineNumber: 495,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-mono text-lg bg-amber-200 px-2 py-1 rounded border border-amber-400",
                                                                    children: realOnlineUsers
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/sections/Contact.tsx",
                                                                    lineNumber: 496,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/sections/Contact.tsx",
                                                            lineNumber: 494,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProgressBars, {}, void 0, false, {
                                                            fileName: "[project]/src/components/sections/Contact.tsx",
                                                            lineNumber: 499,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-6 pt-4 border-t-2 border-amber-800",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-sm text-amber-700 space-y-1 text-center",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        children: "2025 CodeRains By Code"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/sections/Contact.tsx",
                                                                        lineNumber: 502,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        children: "爱与奇迹的魔法是存在的"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/sections/Contact.tsx",
                                                                        lineNumber: 503,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                            href: "https://icp.gov.moe/?keyword=20250577",
                                                                            target: "_blank",
                                                                            className: "border border-orange-400 rounded px-2 text-orange-500",
                                                                            children: "萌ICP备20250577号"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/sections/Contact.tsx",
                                                                            lineNumber: 504,
                                                                            columnNumber: 26
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/sections/Contact.tsx",
                                                                        lineNumber: 504,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/sections/Contact.tsx",
                                                                lineNumber: 501,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/sections/Contact.tsx",
                                                            lineNumber: 500,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/sections/Contact.tsx",
                                                    lineNumber: 483,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/sections/Contact.tsx",
                                            lineNumber: 478,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/Contact.tsx",
                                        lineNumber: 477,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 p-8",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `bg-amber-50/80 border-2 border-amber-800 p-6 rounded-none shadow-lg h-full transition-all duration-500 ${isExpanded ? 'w-[calc(100vw-200px)] absolute right-0 z-30 top-0' : ''}`,
                                            style: {
                                                boxShadow: '8px 8px 0px rgba(120, 53, 15, 0.3)',
                                                transform: isExpanded ? 'translateX(calc(-50% + 48%))' : 'translateX(0)',
                                                transition: 'transform 0.5s ease-in-out, width 0.5s ease-in-out'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between mb-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            className: "text-3xl font-bold text-amber-900",
                                                            style: {
                                                                fontFamily: 'Times New Roman, serif'
                                                            },
                                                            children: "友情链接"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/sections/Contact.tsx",
                                                            lineNumber: 519,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setIsExpanded(!isExpanded),
                                                            className: "px-3 py-1 bg-amber-600 hover:bg-amber-700 text-white text-sm font-bold border-2 border-amber-800 transition-all duration-300",
                                                            style: {
                                                                boxShadow: '2px 2px 0px rgba(120, 53, 15, 0.3)'
                                                            },
                                                            children: isExpanded ? '收起' : '展开'
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/sections/Contact.tsx",
                                                            lineNumber: 520,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/sections/Contact.tsx",
                                                    lineNumber: 518,
                                                    columnNumber: 17
                                                }, this),
                                                isExpanded ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-5 gap-3 min-h-35 max-h-[40rem] overflow-y-auto pr-2",
                                                    style: {
                                                        scrollbarWidth: 'thin',
                                                        scrollbarColor: 'rgba(180, 83, 9, 0.3) transparent'
                                                    },
                                                    children: friendLinks.map((friend, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: friend.url,
                                                            target: "_blank",
                                                            rel: "noopener noreferrer",
                                                            className: "group block p-3 bg-orange-100 hover:bg-orange-200 border-2 border-amber-700 hover:border-amber-900 transition-all duration-300 hover:shadow-md",
                                                            style: {
                                                                boxShadow: '3px 3px 0px rgba(120, 53, 15, 0.2)',
                                                                transform: 'translateZ(0)'
                                                            },
                                                            onMouseEnter: (e)=>{
                                                                e.currentTarget.style.transform = 'translate(-1px, -1px)';
                                                                e.currentTarget.style.boxShadow = '4px 4px 0px rgba(120, 53, 15, 0.3)';
                                                            },
                                                            onMouseLeave: (e)=>{
                                                                e.currentTarget.style.transform = 'translateZ(0)';
                                                                e.currentTarget.style.boxShadow = '3px 3px 0px rgba(120, 53, 15, 0.2)';
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-col items-center space-y-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center space-x-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "relative w-12 h-12 bg-gradient-to-br from-amber-600 to-orange-600 flex items-center justify-center text-white font-bold text-lg border border-amber-800 overflow-hidden",
                                                                                children: friend.avatar ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                    src: toAssetPath(friend.avatar),
                                                                                    alt: friend.name + '头像',
                                                                                    fill: true,
                                                                                    sizes: "48px",
                                                                                    className: "object-cover"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/sections/Contact.tsx",
                                                                                    lineNumber: 560,
                                                                                    columnNumber: 33
                                                                                }, this) : friend.name.charAt(0)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/sections/Contact.tsx",
                                                                                lineNumber: 558,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            friend.subAvatar && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "relative w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white font-bold text-lg border border-amber-700 overflow-hidden",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                    src: toAssetPath(friend.subAvatar),
                                                                                    alt: friend.name + '副头像',
                                                                                    fill: true,
                                                                                    sizes: "48px",
                                                                                    className: "object-cover"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/sections/Contact.tsx",
                                                                                    lineNumber: 567,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/sections/Contact.tsx",
                                                                                lineNumber: 566,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/sections/Contact.tsx",
                                                                        lineNumber: 557,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-center",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                                className: "text-amber-900 font-bold text-base group-hover:text-amber-700 transition-colors duration-300 truncate",
                                                                                children: friend.name
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/sections/Contact.tsx",
                                                                                lineNumber: 572,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-amber-700 text-sm group-hover:text-amber-600 transition-colors duration-300 truncate",
                                                                                children: friend.description
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/sections/Contact.tsx",
                                                                                lineNumber: 575,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/sections/Contact.tsx",
                                                                        lineNumber: 571,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/sections/Contact.tsx",
                                                                lineNumber: 556,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, index, false, {
                                                            fileName: "[project]/src/components/sections/Contact.tsx",
                                                            lineNumber: 537,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/Contact.tsx",
                                                    lineNumber: 532,
                                                    columnNumber: 20
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-4 max-h-48 overflow-y-auto",
                                                    children: friendLinks.map((friend, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: friend.url,
                                                            target: "_blank",
                                                            rel: "noopener noreferrer",
                                                            className: "group block p-3 bg-orange-100 hover:bg-orange-200 border-2 border-amber-700 hover:border-amber-900 transition-all duration-300 hover:shadow-md",
                                                            style: {
                                                                boxShadow: '4px 4px 0px rgba(120, 53, 15, 0.2)',
                                                                transform: 'translateZ(0)'
                                                            },
                                                            onMouseEnter: (e)=>{
                                                                e.currentTarget.style.transform = 'translate(-2px, -2px)';
                                                                e.currentTarget.style.boxShadow = '6px 6px 0px rgba(120, 53, 15, 0.3)';
                                                            },
                                                            onMouseLeave: (e)=>{
                                                                e.currentTarget.style.transform = 'translateZ(0)';
                                                                e.currentTarget.style.boxShadow = '4px 4px 0px rgba(120, 53, 15, 0.2)';
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center space-x-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center space-x-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "relative w-10 h-10 bg-gradient-to-br from-amber-600 to-orange-600 flex items-center justify-center text-white font-bold text-lg border border-amber-800 overflow-hidden",
                                                                                children: friend.avatar ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                    src: toAssetPath(friend.avatar),
                                                                                    alt: friend.name + '头像',
                                                                                    fill: true,
                                                                                    sizes: "40px",
                                                                                    className: "object-cover"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/sections/Contact.tsx",
                                                                                    lineNumber: 609,
                                                                                    columnNumber: 33
                                                                                }, this) : friend.name.charAt(0)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/sections/Contact.tsx",
                                                                                lineNumber: 607,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            friend.subAvatar && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "relative w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white font-bold text-lg border border-amber-700 overflow-hidden",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                    src: toAssetPath(friend.subAvatar),
                                                                                    alt: friend.name + '副头像',
                                                                                    fill: true,
                                                                                    sizes: "40px",
                                                                                    className: "object-cover"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/sections/Contact.tsx",
                                                                                    lineNumber: 616,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/sections/Contact.tsx",
                                                                                lineNumber: 615,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/sections/Contact.tsx",
                                                                        lineNumber: 606,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex-1 min-w-0",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                                className: "text-amber-900 font-bold text-base group-hover:text-amber-700 transition-colors duration-300 truncate",
                                                                                children: friend.name
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/sections/Contact.tsx",
                                                                                lineNumber: 621,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-amber-700 text-sm group-hover:text-amber-600 transition-colors duration-300 truncate",
                                                                                children: friend.description
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/sections/Contact.tsx",
                                                                                lineNumber: 624,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/sections/Contact.tsx",
                                                                        lineNumber: 620,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-amber-600 group-hover:text-amber-800 transition-colors duration-300",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                            className: "w-5 h-5",
                                                                            fill: "none",
                                                                            stroke: "currentColor",
                                                                            viewBox: "0 0 24 24",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                strokeLinecap: "round",
                                                                                strokeLinejoin: "round",
                                                                                strokeWidth: 2,
                                                                                d: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/sections/Contact.tsx",
                                                                                lineNumber: 630,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/sections/Contact.tsx",
                                                                            lineNumber: 629,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/sections/Contact.tsx",
                                                                        lineNumber: 628,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/sections/Contact.tsx",
                                                                lineNumber: 605,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, index, false, {
                                                            fileName: "[project]/src/components/sections/Contact.tsx",
                                                            lineNumber: 586,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/Contact.tsx",
                                                    lineNumber: 584,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/sections/Contact.tsx",
                                            lineNumber: 513,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/Contact.tsx",
                                        lineNumber: 512,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/Contact.tsx",
                                lineNumber: 475,
                                columnNumber: 11
                            }, this),
                            showMessageBoard && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-amber-50/95 border-4 border-amber-800 p-6 rounded-none shadow-2xl max-w-2xl w-full mx-4 max-h-[80vh] overflow-y-auto",
                                    style: {
                                        boxShadow: '12px 12px 0px rgba(120, 53, 15, 0.4)'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between mb-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-3xl font-bold text-amber-900",
                                                    style: {
                                                        fontFamily: 'Times New Roman, serif'
                                                    },
                                                    children: "留言交流"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/Contact.tsx",
                                                    lineNumber: 649,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setShowMessageBoard(false),
                                                    className: "px-3 py-1 bg-amber-600 hover:bg-amber-700 text-white font-bold border-2 border-amber-800 transition-all duration-300",
                                                    style: {
                                                        boxShadow: '2px 2px 0px rgba(120, 53, 15, 0.3)'
                                                    },
                                                    children: "✕ 关闭"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/Contact.tsx",
                                                    lineNumber: 650,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/sections/Contact.tsx",
                                            lineNumber: 648,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-amber-100/50 border-2 border-amber-600 p-4 rounded-none",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MessageBoard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                fileName: "[project]/src/components/sections/Contact.tsx",
                                                lineNumber: 662,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/Contact.tsx",
                                            lineNumber: 661,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-4 pt-4 border-t-2 border-amber-800",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm text-amber-700 text-center space-y-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: "💬 欢迎留下你的足迹和想法"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/Contact.tsx",
                                                        lineNumber: 667,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: "让我们一起分享这个美好的世界"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/Contact.tsx",
                                                        lineNumber: 668,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/sections/Contact.tsx",
                                                lineNumber: 666,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/Contact.tsx",
                                            lineNumber: 665,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/sections/Contact.tsx",
                                    lineNumber: 645,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/Contact.tsx",
                                lineNumber: 644,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/Contact.tsx",
                        lineNumber: 435,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:hidden flex flex-col min-h-screen",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-8 text-center text-white",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-4xl md:text-6xl font-bold mb-2",
                                        style: {
                                            fontFamily: 'Times New Roman, serif'
                                        },
                                        children: "CONTACT"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/Contact.tsx",
                                        lineNumber: 681,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-lg opacity-70",
                                        children: "Interactive Particle System"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/Contact.tsx",
                                        lineNumber: 682,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/Contact.tsx",
                                lineNumber: 680,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative h-80 md:h-96 mb-8",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                                    ref: mobileCanvasRef,
                                    className: "w-full h-full cursor-crosshair",
                                    onMouseMove: handleMouseMove,
                                    onTouchStart: (e)=>{
                                        e.preventDefault(); // 阻止默认触摸行为
                                    },
                                    onTouchMove: (e)=>{
                                        e.preventDefault(); // 阻止滚动
                                        const canvas = mobileCanvasRef.current;
                                        if (!canvas) return;
                                        const rect = canvas.getBoundingClientRect();
                                        const touch = e.touches[0];
                                        mouseRef.current = {
                                            x: (touch.clientX - rect.left) * (canvas.width / rect.width),
                                            y: (touch.clientY - rect.top) * (canvas.height / rect.height)
                                        };
                                    },
                                    onTouchEnd: (e)=>{
                                        e.preventDefault(); // 阻止默认触摸行为
                                        mouseRef.current = {
                                            x: -1000,
                                            y: -1000
                                        };
                                    },
                                    onMouseLeave: ()=>mouseRef.current = {
                                            x: -1000,
                                            y: -1000
                                        },
                                    style: {
                                        touchAction: 'none'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/Contact.tsx",
                                    lineNumber: 687,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/Contact.tsx",
                                lineNumber: 686,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 px-4 pb-8 space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-amber-50/80 border-2 border-amber-800 p-6 rounded-none shadow-lg",
                                        style: {
                                            boxShadow: '8px 8px 0px rgba(120, 53, 15, 0.3)'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-2xl md:text-3xl font-bold text-amber-900 mb-6 text-center",
                                                style: {
                                                    fontFamily: 'Times New Roman, serif'
                                                },
                                                children: "网站统计"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Contact.tsx",
                                                lineNumber: 721,
                                                columnNumber: 16
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-4 text-amber-800",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between items-center border-b border-amber-300 pb-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-base md:text-lg font-semibold",
                                                                children: "网站亲吻这个世界以来:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/sections/Contact.tsx",
                                                                lineNumber: 725,
                                                                columnNumber: 20
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-mono text-base md:text-lg bg-amber-200 px-2 py-1 rounded border border-amber-400",
                                                                children: uptime
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/sections/Contact.tsx",
                                                                lineNumber: 726,
                                                                columnNumber: 20
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/sections/Contact.tsx",
                                                        lineNumber: 724,
                                                        columnNumber: 18
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between items-center border-b border-amber-300 pb-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-base md:text-lg font-semibold",
                                                                children: "在线用户:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/sections/Contact.tsx",
                                                                lineNumber: 735,
                                                                columnNumber: 20
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-mono text-base md:text-lg bg-amber-200 px-2 py-1 rounded border border-amber-400",
                                                                children: realOnlineUsers
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/sections/Contact.tsx",
                                                                lineNumber: 736,
                                                                columnNumber: 20
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/sections/Contact.tsx",
                                                        lineNumber: 734,
                                                        columnNumber: 18
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProgressBars, {}, void 0, false, {
                                                        fileName: "[project]/src/components/sections/Contact.tsx",
                                                        lineNumber: 739,
                                                        columnNumber: 18
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-6 pt-4 border-t-2 border-amber-800",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-sm text-amber-700 space-y-1 text-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    children: "2025 CodeRains By Code"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/sections/Contact.tsx",
                                                                    lineNumber: 742,
                                                                    columnNumber: 22
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    children: "爱与奇迹的魔法是存在的"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/sections/Contact.tsx",
                                                                    lineNumber: 743,
                                                                    columnNumber: 22
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                        href: "https://icp.gov.moe/?keyword=20250577",
                                                                        target: "_blank",
                                                                        className: "border border-orange-400 rounded px-2 text-orange-500",
                                                                        children: "萌ICP备20250577号"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/sections/Contact.tsx",
                                                                        lineNumber: 744,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/sections/Contact.tsx",
                                                                    lineNumber: 744,
                                                                    columnNumber: 22
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/sections/Contact.tsx",
                                                            lineNumber: 741,
                                                            columnNumber: 20
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/Contact.tsx",
                                                        lineNumber: 740,
                                                        columnNumber: 18
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/sections/Contact.tsx",
                                                lineNumber: 723,
                                                columnNumber: 16
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sections/Contact.tsx",
                                        lineNumber: 718,
                                        columnNumber: 14
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-amber-50/80 border-2 border-amber-800 p-4 rounded-none shadow-lg",
                                        style: {
                                            boxShadow: '8px 8px 0px rgba(120, 53, 15, 0.3)'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-xl md:text-2xl font-bold text-amber-900 mb-4 text-center",
                                                style: {
                                                    fontFamily: 'Times New Roman, serif'
                                                },
                                                children: "留言交流"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Contact.tsx",
                                                lineNumber: 754,
                                                columnNumber: 16
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-amber-100/50 border border-amber-600 p-3 rounded-none",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MessageBoard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                    fileName: "[project]/src/components/sections/Contact.tsx",
                                                    lineNumber: 756,
                                                    columnNumber: 18
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Contact.tsx",
                                                lineNumber: 755,
                                                columnNumber: 16
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-3 pt-3 border-t border-amber-600",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-amber-700 text-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: "💬 欢迎留下你的足迹和想法"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/Contact.tsx",
                                                        lineNumber: 760,
                                                        columnNumber: 20
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/Contact.tsx",
                                                    lineNumber: 759,
                                                    columnNumber: 18
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Contact.tsx",
                                                lineNumber: 758,
                                                columnNumber: 16
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sections/Contact.tsx",
                                        lineNumber: 751,
                                        columnNumber: 14
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-amber-50/80 border-2 border-amber-800 p-6 rounded-none shadow-lg",
                                        style: {
                                            boxShadow: '8px 8px 0px rgba(120, 53, 15, 0.3)'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-2xl md:text-3xl font-bold text-amber-900 mb-6 text-center",
                                                style: {
                                                    fontFamily: 'Times New Roman, serif'
                                                },
                                                children: "友情链接"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Contact.tsx",
                                                lineNumber: 769,
                                                columnNumber: 16
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 md:grid-cols-2 gap-3",
                                                children: friendLinks.map((friend, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: friend.url,
                                                        className: "group block p-3 bg-orange-100 hover:bg-orange-200 border-2 border-amber-700 hover:border-amber-900 transition-all duration-300 hover:shadow-md",
                                                        style: {
                                                            boxShadow: '4px 4px 0px rgba(120, 53, 15, 0.2)',
                                                            transform: 'translateZ(0)'
                                                        },
                                                        onMouseEnter: (e)=>{
                                                            e.currentTarget.style.transform = 'translate(-2px, -2px)';
                                                            e.currentTarget.style.boxShadow = '6px 6px 0px rgba(120, 53, 15, 0.3)';
                                                        },
                                                        onMouseLeave: (e)=>{
                                                            e.currentTarget.style.transform = 'translateZ(0)';
                                                            e.currentTarget.style.boxShadow = '4px 4px 0px rgba(120, 53, 15, 0.2)';
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center space-x-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center space-x-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "relative w-8 h-8 bg-gradient-to-br from-amber-600 to-orange-600 flex items-center justify-center text-white font-bold text-sm border border-amber-800 overflow-hidden",
                                                                            children: friend.avatar ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                src: toAssetPath(friend.avatar),
                                                                                alt: friend.name + '头像',
                                                                                fill: true,
                                                                                sizes: "32px",
                                                                                className: "object-cover"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/sections/Contact.tsx",
                                                                                lineNumber: 794,
                                                                                columnNumber: 30
                                                                            }, this) : friend.name.charAt(0)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/sections/Contact.tsx",
                                                                            lineNumber: 792,
                                                                            columnNumber: 26
                                                                        }, this),
                                                                        friend.subAvatar && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "relative w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white font-bold text-sm border border-amber-700 overflow-hidden",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                src: toAssetPath(friend.subAvatar),
                                                                                alt: friend.name + '副头像',
                                                                                fill: true,
                                                                                sizes: "32px",
                                                                                className: "object-cover"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/sections/Contact.tsx",
                                                                                lineNumber: 801,
                                                                                columnNumber: 30
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/sections/Contact.tsx",
                                                                            lineNumber: 800,
                                                                            columnNumber: 28
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/sections/Contact.tsx",
                                                                    lineNumber: 791,
                                                                    columnNumber: 24
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex-1 min-w-0",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                            className: "text-amber-900 font-bold text-sm group-hover:text-amber-700 transition-colors duration-300 truncate",
                                                                            children: friend.name
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/sections/Contact.tsx",
                                                                            lineNumber: 806,
                                                                            columnNumber: 26
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-amber-700 text-xs group-hover:text-amber-600 transition-colors duration-300 truncate",
                                                                            children: friend.description
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/sections/Contact.tsx",
                                                                            lineNumber: 809,
                                                                            columnNumber: 26
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/sections/Contact.tsx",
                                                                    lineNumber: 805,
                                                                    columnNumber: 24
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-amber-600 group-hover:text-amber-800 transition-colors duration-300",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                        className: "w-4 h-4",
                                                                        fill: "none",
                                                                        stroke: "currentColor",
                                                                        viewBox: "0 0 24 24",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            strokeLinecap: "round",
                                                                            strokeLinejoin: "round",
                                                                            strokeWidth: 2,
                                                                            d: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/sections/Contact.tsx",
                                                                            lineNumber: 815,
                                                                            columnNumber: 28
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/sections/Contact.tsx",
                                                                        lineNumber: 814,
                                                                        columnNumber: 26
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/sections/Contact.tsx",
                                                                    lineNumber: 813,
                                                                    columnNumber: 24
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/sections/Contact.tsx",
                                                            lineNumber: 790,
                                                            columnNumber: 22
                                                        }, this)
                                                    }, index, false, {
                                                        fileName: "[project]/src/components/sections/Contact.tsx",
                                                        lineNumber: 773,
                                                        columnNumber: 20
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Contact.tsx",
                                                lineNumber: 771,
                                                columnNumber: 16
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sections/Contact.tsx",
                                        lineNumber: 766,
                                        columnNumber: 14
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/Contact.tsx",
                                lineNumber: 716,
                                columnNumber: 12
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/Contact.tsx",
                        lineNumber: 678,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/Contact.tsx",
                lineNumber: 433,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/Contact.tsx",
        lineNumber: 424,
        columnNumber: 5
    }, this);
};
_s1(Contact, "AZ6FGiZ9JQ+Z1EFOib3GwFhEqzY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$analytics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnalytics"]
    ];
});
_c1 = Contact;
const __TURBOPACK__default__export__ = Contact;
var _c, _c1;
__turbopack_context__.k.register(_c, "ProgressBars");
__turbopack_context__.k.register(_c1, "Contact");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
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
"[project]/src/components/ui/animated-testimonials.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "AnimatedTestimonials": (()=>AnimatedTestimonials)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconArrowLeft$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconArrowLeft.mjs [app-client] (ecmascript) <export default as IconArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconArrowRight$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconArrowRight.mjs [app-client] (ecmascript) <export default as IconArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const AnimatedTestimonials = ({ testimonials, autoplay = false })=>{
    _s();
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const handleNext = ()=>{
        setActive((prev)=>(prev + 1) % testimonials.length);
    };
    const handlePrev = ()=>{
        setActive((prev)=>(prev - 1 + testimonials.length) % testimonials.length);
    };
    const isActive = (index)=>{
        return index === active;
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnimatedTestimonials.useEffect": ()=>{
            if (autoplay) {
                const interval = setInterval(handleNext, 5000);
                return ({
                    "AnimatedTestimonials.useEffect": ()=>clearInterval(interval)
                })["AnimatedTestimonials.useEffect"];
            }
        }
    }["AnimatedTestimonials.useEffect"], [
        autoplay
    ]);
    const [rotations, setRotations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnimatedTestimonials.useEffect": ()=>{
            const randomRotations = testimonials.map({
                "AnimatedTestimonials.useEffect.randomRotations": ()=>Math.floor(Math.random() * 21) - 10
            }["AnimatedTestimonials.useEffect.randomRotations"]);
            setRotations(randomRotations);
        }
    }["AnimatedTestimonials.useEffect"], [
        testimonials
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mx-auto max-w-md px-4 py-20 font-sans antialiased md:max-w-6xl md:px-8 lg:px-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "block md:hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative h-[400px] w-80 mx-auto mb-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                            children: testimonials.map((testimonial, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                            width: 500,
                                            height: 500,
                                            draggable: false,
                                            className: "h-full w-full rounded-3xl object-cover object-center"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ui/animated-testimonials.tsx",
                                            lineNumber: 99,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 bg-gray-800 opacity-8 rounded-3xl"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ui/animated-testimonials.tsx",
                                            lineNumber: 108,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, testimonial.src, true, {
                                    fileName: "[project]/src/components/ui/animated-testimonials.tsx",
                                    lineNumber: 69,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/animated-testimonials.tsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/animated-testimonials.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-4 justify-center mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handlePrev,
                                className: "group/button flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconArrowLeft$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconArrowLeft$3e$__["IconArrowLeft"], {
                                    className: "h-5 w-5 text-black transition-transform duration-300 group-hover/button:rotate-12 dark:text-neutral-400"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/animated-testimonials.tsx",
                                    lineNumber: 120,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/animated-testimonials.tsx",
                                lineNumber: 116,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleNext,
                                className: "group/button flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconArrowRight$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconArrowRight$3e$__["IconArrowRight"], {
                                    className: "h-5 w-5 text-black transition-transform duration-300 group-hover/button:-rotate-12 dark:text-neutral-400"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/animated-testimonials.tsx",
                                    lineNumber: 126,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/animated-testimonials.tsx",
                                lineNumber: 122,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/animated-testimonials.tsx",
                        lineNumber: 115,
                        columnNumber: 9
                    }, this),
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
                        className: "text-center px-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xl font-bold text-white dark:text-white mb-2",
                                children: testimonials[active].name
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/animated-testimonials.tsx",
                                lineNumber: 151,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-400 dark:text-neutral-500 mb-4",
                                children: testimonials[active].designation
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/animated-testimonials.tsx",
                                lineNumber: 154,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                className: "text-base text-gray-400 dark:text-neutral-300",
                                children: testimonials[active].quote.split('\n').map((line, lineIndex)=>{
                                    // 解析链接格式 [文本](URL)
                                    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
                                    const parts = [];
                                    let lastIndex = 0;
                                    let match;
                                    while((match = linkRegex.exec(line)) !== null){
                                        // 添加链接前的文本
                                        if (match.index > lastIndex) {
                                            parts.push({
                                                type: 'text',
                                                content: line.slice(lastIndex, match.index)
                                            });
                                        }
                                        // 添加链接
                                        parts.push({
                                            type: 'link',
                                            text: match[1],
                                            url: match[2]
                                        });
                                        lastIndex = match.index + match[0].length;
                                    }
                                    // 添加剩余文本
                                    if (lastIndex < line.length) {
                                        parts.push({
                                            type: 'text',
                                            content: line.slice(lastIndex)
                                        });
                                    }
                                    // 如果没有链接，直接处理为文本
                                    if (parts.length === 0) {
                                        parts.push({
                                            type: 'text',
                                            content: line
                                        });
                                    }
                                    let wordIndex = 0;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            parts.map((part, partIndex)=>{
                                                if (part.type === 'link') {
                                                    const currentWordIndex = wordIndex++;
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
                                                        href: part.url,
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        initial: {
                                                            filter: "blur(10px)",
                                                            opacity: 0,
                                                            y: 5
                                                        },
                                                        animate: {
                                                            filter: "blur(0px)",
                                                            opacity: 1,
                                                            y: 0
                                                        },
                                                        transition: {
                                                            duration: 0.2,
                                                            ease: "easeInOut",
                                                            delay: 0.02 * (lineIndex * 10 + currentWordIndex)
                                                        },
                                                        className: "inline-block text-blue-400 hover:text-blue-300 underline transition-colors",
                                                        children: part.text
                                                    }, `${lineIndex}-${partIndex}`, false, {
                                                        fileName: "[project]/src/components/ui/animated-testimonials.tsx",
                                                        lineNumber: 193,
                                                        columnNumber: 15
                                                    }, this);
                                                } else {
                                                    return part.content.split(" ").map((word, wordIdx)=>{
                                                        if (word === '') return null;
                                                        const currentWordIndex = wordIndex++;
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                                            initial: {
                                                                filter: "blur(10px)",
                                                                opacity: 0,
                                                                y: 5
                                                            },
                                                            animate: {
                                                                filter: "blur(0px)",
                                                                opacity: 1,
                                                                y: 0
                                                            },
                                                            transition: {
                                                                duration: 0.2,
                                                                ease: "easeInOut",
                                                                delay: 0.02 * (lineIndex * 10 + currentWordIndex)
                                                            },
                                                            className: "inline-block",
                                                            children: [
                                                                word,
                                                                " "
                                                            ]
                                                        }, `${lineIndex}-${partIndex}-${wordIdx}`, true, {
                                                            fileName: "[project]/src/components/ui/animated-testimonials.tsx",
                                                            lineNumber: 223,
                                                            columnNumber: 17
                                                        }, this);
                                                    });
                                                }
                                            }),
                                            lineIndex < testimonials[active].quote.split('\n').length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/src/components/ui/animated-testimonials.tsx",
                                                lineNumber: 248,
                                                columnNumber: 75
                                            }, this)
                                        ]
                                    }, lineIndex, true, {
                                        fileName: "[project]/src/components/ui/animated-testimonials.tsx",
                                        lineNumber: 188,
                                        columnNumber: 7
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/animated-testimonials.tsx",
                                lineNumber: 157,
                                columnNumber: 11
                            }, this)
                        ]
                    }, active, true, {
                        fileName: "[project]/src/components/ui/animated-testimonials.tsx",
                        lineNumber: 131,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/animated-testimonials.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden md:block",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative grid grid-cols-1 gap-24 md:grid-cols-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative h-[500px] w-80 mx-auto",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                    children: testimonials.map((testimonial, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                                    width: 500,
                                                    height: 500,
                                                    draggable: false,
                                                    className: "h-full w-full rounded-3xl object-cover object-center"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ui/animated-testimonials.tsx",
                                                    lineNumber: 293,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 bg-gray-800 opacity-8 rounded-3xl"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ui/animated-testimonials.tsx",
                                                    lineNumber: 302,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, testimonial.src, true, {
                                            fileName: "[project]/src/components/ui/animated-testimonials.tsx",
                                            lineNumber: 263,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/animated-testimonials.tsx",
                                    lineNumber: 261,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/animated-testimonials.tsx",
                                lineNumber: 260,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/animated-testimonials.tsx",
                            lineNumber: 259,
                            columnNumber: 11
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
                                            fileName: "[project]/src/components/ui/animated-testimonials.tsx",
                                            lineNumber: 328,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-m text-gray-400 dark:text-neutral-500",
                                            children: testimonials[active].designation
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ui/animated-testimonials.tsx",
                                            lineNumber: 331,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                            className: "mt-8 text-lg text-gray-400 dark:text-neutral-300",
                                            children: testimonials[active].quote.split('\n').map((line, lineIndex)=>{
                                                // 解析链接格式 [文本](URL)
                                                const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
                                                const parts = [];
                                                let lastIndex = 0;
                                                let match;
                                                while((match = linkRegex.exec(line)) !== null){
                                                    // 添加链接前的文本
                                                    if (match.index > lastIndex) {
                                                        parts.push({
                                                            type: 'text',
                                                            content: line.slice(lastIndex, match.index)
                                                        });
                                                    }
                                                    // 添加链接
                                                    parts.push({
                                                        type: 'link',
                                                        text: match[1],
                                                        url: match[2]
                                                    });
                                                    lastIndex = match.index + match[0].length;
                                                }
                                                // 添加剩余文本
                                                if (lastIndex < line.length) {
                                                    parts.push({
                                                        type: 'text',
                                                        content: line.slice(lastIndex)
                                                    });
                                                }
                                                // 如果没有链接，直接处理为文本
                                                if (parts.length === 0) {
                                                    parts.push({
                                                        type: 'text',
                                                        content: line
                                                    });
                                                }
                                                let wordIndex = 0;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        parts.map((part, partIndex)=>{
                                                            if (part.type === 'link') {
                                                                const currentWordIndex = wordIndex++;
                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
                                                                    href: part.url,
                                                                    target: "_blank",
                                                                    rel: "noopener noreferrer",
                                                                    initial: {
                                                                        filter: "blur(10px)",
                                                                        opacity: 0,
                                                                        y: 5
                                                                    },
                                                                    animate: {
                                                                        filter: "blur(0px)",
                                                                        opacity: 1,
                                                                        y: 0
                                                                    },
                                                                    transition: {
                                                                        duration: 0.2,
                                                                        ease: "easeInOut",
                                                                        delay: 0.02 * (lineIndex * 10 + currentWordIndex)
                                                                    },
                                                                    className: "inline-block text-blue-400 hover:text-blue-300 underline transition-colors",
                                                                    children: part.text
                                                                }, `${lineIndex}-${partIndex}`, false, {
                                                                    fileName: "[project]/src/components/ui/animated-testimonials.tsx",
                                                                    lineNumber: 370,
                                                                    columnNumber: 29
                                                                }, this);
                                                            } else {
                                                                return part.content.split(" ").map((word, wordIdx)=>{
                                                                    if (word === '') return null;
                                                                    const currentWordIndex = wordIndex++;
                                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                                                        initial: {
                                                                            filter: "blur(10px)",
                                                                            opacity: 0,
                                                                            y: 5
                                                                        },
                                                                        animate: {
                                                                            filter: "blur(0px)",
                                                                            opacity: 1,
                                                                            y: 0
                                                                        },
                                                                        transition: {
                                                                            duration: 0.2,
                                                                            ease: "easeInOut",
                                                                            delay: 0.02 * (lineIndex * 10 + currentWordIndex)
                                                                        },
                                                                        className: "inline-block",
                                                                        children: [
                                                                            word,
                                                                            " "
                                                                        ]
                                                                    }, `${lineIndex}-${partIndex}-${wordIdx}`, true, {
                                                                        fileName: "[project]/src/components/ui/animated-testimonials.tsx",
                                                                        lineNumber: 400,
                                                                        columnNumber: 31
                                                                    }, this);
                                                                });
                                                            }
                                                        }),
                                                        lineIndex < testimonials[active].quote.split('\n').length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                            fileName: "[project]/src/components/ui/animated-testimonials.tsx",
                                                            lineNumber: 425,
                                                            columnNumber: 89
                                                        }, this)
                                                    ]
                                                }, lineIndex, true, {
                                                    fileName: "[project]/src/components/ui/animated-testimonials.tsx",
                                                    lineNumber: 365,
                                                    columnNumber: 21
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ui/animated-testimonials.tsx",
                                            lineNumber: 334,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, active, true, {
                                    fileName: "[project]/src/components/ui/animated-testimonials.tsx",
                                    lineNumber: 309,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-4 pt-12 justify-start",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handlePrev,
                                            className: "group/button flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconArrowLeft$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconArrowLeft$3e$__["IconArrowLeft"], {
                                                className: "h-5 w-5 text-black transition-transform duration-300 group-hover/button:rotate-12 dark:text-neutral-400"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ui/animated-testimonials.tsx",
                                                lineNumber: 436,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ui/animated-testimonials.tsx",
                                            lineNumber: 432,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleNext,
                                            className: "group/button flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconArrowRight$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconArrowRight$3e$__["IconArrowRight"], {
                                                className: "h-5 w-5 text-black transition-transform duration-300 group-hover/button:-rotate-12 dark:text-neutral-400"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ui/animated-testimonials.tsx",
                                                lineNumber: 442,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ui/animated-testimonials.tsx",
                                            lineNumber: 438,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ui/animated-testimonials.tsx",
                                    lineNumber: 431,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/animated-testimonials.tsx",
                            lineNumber: 308,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui/animated-testimonials.tsx",
                    lineNumber: 258,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/animated-testimonials.tsx",
                lineNumber: 257,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/animated-testimonials.tsx",
        lineNumber: 62,
        columnNumber: 5
    }, this);
};
_s(AnimatedTestimonials, "AcfSi0rGW3spafb/lYA0Cmk9lKc=");
_c = AnimatedTestimonials;
var _c;
__turbopack_context__.k.register(_c, "AnimatedTestimonials");
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
"[project]/src/components/sections/About.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlanetSystem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/PlanetSystem.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$animated$2d$testimonials$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/animated-testimonials.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$three$2d$examples$2f$DeskLamp3D$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/three-examples/DeskLamp3D.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const testimonials = [
    {
        quote: "时间已经过去太久，已经记不清当时的心情了\n当时有一个比较朦胧的想法，在朋友的介绍下认识了[墨间黑沢](https://space.bilibili.com/24271342/dynamic)老师，很快便有了这第一件衣服\n看着脑子里面的想法从模糊到清晰，再到具体，是一种很奇妙的体验。我加入了很多我自己的喜好：白发、蓝瞳、和一点恰到好处的浅浅微笑\n幻象中诞生的少女从纸上走来，很惭愧，我至今没用为她想好一个合适的名字，既然是二次元的“我”，那就以本名 “阵雨” 暂且称呼吧",
        name: "初始之服",
        designation: "阵雨的第一件衣服",
        src: "assets/oc/oc1.png"
    },
    {
        quote: "旗袍的形象很经典，虽其历史不过区区百年，但其展现的温婉曲线美是近乎无可替代的\n由于其发色瞳色，衣服的形象便也非常自然的确定为蓝白色了，青花瓷的一般的少女也应运而生，微微扎起的头发及垂落的鬓尾更将其含蓄而内敛展现地淋漓尽致\n天青色等烟雨，而我在等你",
        name: "旗袍",
        designation: "青花瓷",
        src: "assets/oc/oc2.png"
    },
    {
        quote: "其实原本是有死库水的打算，但实在不符合年龄，最后墨间老师画了这种偏水手服风格的泳装\n说真的，我这辈子除游泳课外穿泳装的次数简直屈指可数（大夏天宅空调房不香吗真的是），南方的大火炉实在是太可怕了\n不过阵雨是美少女，美少女是不会被晒黑的（确信）\n相对保守的服饰很好遮住了上身，但空隙间展现的娇小可爱很完美的补足了少女感\n\n※设定上很怕水，刚开始学游泳时很艰难才克服溺水感",
        name: "泳装",
        designation: "正常人谁大夏天去沙滩啊",
        src: "assets/oc/oc3.png"
    },
    {
        quote: "出于对影视作品里黑客的印象，加上对编程的喜好，便约了这套黑客服设\n高考完后也上了跟计算机相关的专业，虽然学得杂而不精，但看着想法用逻辑变成现实还是很有成就感\n阵雨这套衣服参考了我喜欢的一些黑客形象：宽松而厚的外套、较为凌乱的头发、以及不健康作息带来的黑眼圈\n...还有大腿绑带，大腿绑带是极好的！\n黑客是不愿意受管教和约束的存在，一个关着的门对于黑客来说是一种挑衅，一个锁着的门对黑客来说是一种侮辱。 \n\n这么飒气的女孩子，谁会想到她的算法课是被老师捞过的呢(*^_^*)",
        name: "黑客服",
        designation: "喂喂，验证码发我一下",
        src: "assets/oc/oc4.png"
    },
    {
        quote: "赛车手是比较远离日常生活的形象，这套服设参考了[赛车服远坂凛](https://www.hpoi.net/hobby/36512)形象，经典的皮克外套及充满速度感的花纹，护目镜、手环等配饰也增添了赛车手的气质，少见的高马尾也是我很喜欢的一点。\n在网站开始页面是墨间老师为其绘制的一幅赠图，超！帅！的！",
        name: "赛车服",
        designation: "昨晚我输给一辆AE86，他用惯性漂移过弯，他的车很快，我只看到他有个豆腐店的招牌。",
        src: "assets/oc/oc5.png"
    },
    {
        quote: "看起来很像贵族女子学校的校服（不过实际是什么学校我也还没想过）\n深色而典雅的长裙在运动时并不太方便，所以体育课时会换成更方便的款式\n面料舒适，保暖且透气，适合四季穿用\n但是不便清洗，经常不小心弄脏发阵雨只能买多套衣服以备用\n\n※除了校服外，学校对袜子、鞋子及发型也有相应要求，意外严苛",
        name: "校服",
        designation: "贵安",
        src: "assets/oc/oc6.png"
    },
    {
        quote: "与初始之服相似，但更精炼大方，不对称的设计使其在人群中很容易脱颖而出\n初始服胸口的山荷叶挂饰被挂到腰间，走路时会随之轻轻摇摆。发型和绑带也换成更干练的，颇显成熟\n阵雨并不太习惯这身衣服，但出乎意料的是收到了众多好评，一改往日傻傻憨态的她以性格里另一面出场，着实吓到了不少人",
        name: "礼服",
        designation: "用于出席重要场合的衣服",
        src: "assets/oc/oc7.png"
    },
    {
        quote: "长下摆，对襟而长袖的白大褂，既用来保护实验服下的身体，也表示角色的知性美。\n话是这么说，可后半句在阵雨身上似乎不适用）\n请千万注意不要在实验室外（至少不要在实验楼外）穿着实验服，以避免将沾染的有毒有害物质带出造成污染\n虽不太符合实验规范，但高跟鞋子的不适让她始终提醒自己保持专注。当然，护目镜和扎起头发这两点仍然不能马虎",
        name: "实验服",
        designation: "为什么结果重复不出来啊/(ㄒoㄒ)/~~",
        src: "assets/oc/oc8.png"
    }
];
// 流星雨组件
const MeteorShower = ()=>{
    _s();
    const [meteors, setMeteors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MeteorShower.useEffect": ()=>{
            // 只在客户端生成随机值，避免水合错误
            // 增加流星数量，并让一部分流星集中在右侧中部和右下部
            const meteorData = Array.from({
                length: 16
            }, {
                "MeteorShower.useEffect.meteorData": (_, i)=>{
                    let left;
                    if (i < 6) {
                        // 右侧中部 60%~90%
                        left = 60 + Math.random() * 30;
                    } else if (i < 10) {
                        // 右下部 70%~100%
                        left = 70 + Math.random() * 30;
                    } else {
                        // 其余随机分布
                        left = Math.random() * 100;
                    }
                    return {
                        id: i,
                        delay: Math.random() * 10,
                        duration: 18 + Math.random() * 14,
                        left,
                        angle: -30
                    };
                }
            }["MeteorShower.useEffect.meteorData"]);
            setMeteors(meteorData);
        }
    }["MeteorShower.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute inset-0 pointer-events-none overflow-hidden",
        children: meteors.map((meteor)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "meteor",
                style: {
                    left: `${meteor.left}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${meteor.delay}s`,
                    animationDuration: `${meteor.duration}s`,
                    transform: `rotate(${meteor.angle}deg)`
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "meteor-tail"
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/About.tsx",
                    lineNumber: 118,
                    columnNumber: 11
                }, this)
            }, meteor.id, false, {
                fileName: "[project]/src/components/sections/About.tsx",
                lineNumber: 107,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/sections/About.tsx",
        lineNumber: 105,
        columnNumber: 5
    }, this);
};
_s(MeteorShower, "vPH6X3GfhrN4/SyF/S9PolfqZFU=");
_c = MeteorShower;
const About = ()=>{
    _s1();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [lampLightOn, setLampLightOn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "About.useEffect": ()=>{
            const observer = new IntersectionObserver({
                "About.useEffect": ([entry])=>{
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                }
            }["About.useEffect"], {
                threshold: 0.3,
                rootMargin: '0px 0px -100px 0px'
            });
            if (sectionRef.current) {
                observer.observe(sectionRef.current);
            }
            return ({
                "About.useEffect": ()=>{
                    if (sectionRef.current) {
                        observer.unobserve(sectionRef.current);
                    }
                }
            })["About.useEffect"];
        }
    }["About.useEffect"]);
    const sectionClass = lampLightOn ? 'lamp-light-mobile lamp-light-desktop' : 'lamp-off-mobile lamp-off-desktop';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: sectionRef,
        id: "about",
        className: `relative py-16 bg-black min-h-[1200px] md:min-h-[1400px] lg:min-h-[1300px] no-zoom overflow-hidden ${sectionClass}`,
        style: {
            backgroundBlendMode: 'overlay'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MeteorShower, {}, void 0, false, {
                fileName: "[project]/src/components/sections/About.tsx",
                lineNumber: 168,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "block md:hidden relative w-full h-[320px] mb-8 z-[200]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlanetSystem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/components/sections/About.tsx",
                    lineNumber: 171,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/sections/About.tsx",
                lineNumber: 170,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "block md:hidden text-center text-white drop-shadow-2xl relative z-10 mb-16 mt-60 ",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-4xl  font-bold drop-shadow-lg filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.8)] transition-all duration-300 hover:text-yellow-100",
                        children: "About Me"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/About.tsx",
                        lineNumber: 176,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-bold transition-all duration-300 hover:text-yellow-100   bg-clip-text text-white   inline-block w-full mt-4 px-15",
                        children: "在上方，你可以看见我的互联网生活，以及友链"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/About.tsx",
                        lineNumber: 182,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-bold transition-all duration-300 hover:text-yellow-100   bg-clip-text text-white   inline-block w-full mt-4 mx-4 px-15",
                        children: "在下方的是我的自设，以及为她约稿设计的各种衣服"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/About.tsx",
                        lineNumber: 190,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/About.tsx",
                lineNumber: 175,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "block md:hidden relative w-full h-[320px] mb-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$three$2d$examples$2f$DeskLamp3D$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    onToggleLight: setLampLightOn
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/About.tsx",
                    lineNumber: 200,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/sections/About.tsx",
                lineNumber: 199,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "block md:hidden relative w-full mb-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$animated$2d$testimonials$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedTestimonials"], {
                    testimonials: testimonials
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/About.tsx",
                    lineNumber: 203,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/sections/About.tsx",
                lineNumber: 202,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden md:block absolute top-40 md:top-40 left-4 w-60 h-60 md:w-96 md:h-96 z-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$three$2d$examples$2f$DeskLamp3D$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    onToggleLight: setLampLightOn
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/About.tsx",
                    lineNumber: 208,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/sections/About.tsx",
                lineNumber: 207,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden md:block text-center relative z-10 mt-48 text-xl mx-auto max-w-2xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-6xl font-bold mb-8 transition-all duration-300 hover:text-yellow-100   bg-gradient-to-r from-black via-white to-white bg-clip-text text-transparent   inline-block w-full   drop-shadow-[2px_2px_4px_rgba(0,0,0,0.6)]",
                        children: "About Me"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/About.tsx",
                        lineNumber: 215,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold transition-all duration-300 hover:text-yellow-100   bg-gradient-to-r from-black via-white to-white bg-clip-text text-transparent   inline-block w-full   drop-shadow-[1px_1px_0_rgba(0,0,0,0.8)] drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]",
                        children: "在右侧，你可以看见我的互联网生活，以及友链"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/About.tsx",
                        lineNumber: 224,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-2xl font-bold transition-all duration-300 hover:text-yellow-100   bg-gradient-to-r from-black via-white to-white bg-clip-text text-transparent   inline-block w-full   drop-shadow-[1px_1px_0_rgba(0,0,0,0.8)] drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]   ",
                        children: "在下方的是我的自设，以及为她约稿设计的各种衣服"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/About.tsx",
                        lineNumber: 233,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/About.tsx",
                lineNumber: 214,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden md:block absolute top-[-100px] right-[-100px] w-[600px] h-[600px] md:w-[1000px] md:h-[1000px] md:-translate-y-1/4 md:translate-x-1/4 pointer-events-none drop-shadow-2xl filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.6)] transition-all duration-500 hover:brightness-110",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlanetSystem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/components/sections/About.tsx",
                    lineNumber: 249,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/sections/About.tsx",
                lineNumber: 248,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden md:block absolute bottom-40 md:bottom-20 left-1/2 md:left-20 -translate-x-1/2 md:translate-x-0 w-[90%] md:w-auto z-10 drop-shadow-2xl filter drop-shadow-[0_16px_32px_rgba(0,0,0,0.7)] transition-all duration-300 hover:brightness-105",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$animated$2d$testimonials$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedTestimonials"], {
                    testimonials: testimonials
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/About.tsx",
                    lineNumber: 254,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/sections/About.tsx",
                lineNumber: 253,
                columnNumber: 7
            }, this),
            lampLightOn && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-20 left-20 w-80 h-80 pointer-events-none opacity-20 transition-opacity duration-1000 ease-in-out",
                style: {
                    background: 'radial-gradient(circle, rgba(255, 200, 100, 0.3) 0%, rgba(255, 230, 150, 0.1) 50%, transparent 80%)',
                    filter: 'blur(30px)',
                    animation: 'pulse 3s ease-in-out infinite alternate',
                    opacity: 0.2,
                    visibility: 'visible',
                    transition: 'opacity 1s, visibility 1s'
                }
            }, void 0, false, {
                fileName: "[project]/src/components/sections/About.tsx",
                lineNumber: 261,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/About.tsx",
        lineNumber: 161,
        columnNumber: 5
    }, this);
};
_s1(About, "90aFfYZI0bJ11SIcMiqN/EqfgnM=");
_c1 = About;
const __TURBOPACK__default__export__ = About;
var _c, _c1;
__turbopack_context__.k.register(_c, "MeteorShower");
__turbopack_context__.k.register(_c1, "About");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/magicui/dock.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Dock": (()=>Dock),
    "DockIcon": (()=>DockIcon),
    "dockVariants": (()=>dockVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-spring.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const DEFAULT_SIZE = 40;
const DEFAULT_MAGNIFICATION = 60;
const DEFAULT_DISTANCE = 140;
const dockVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("supports-backdrop-blur:bg-white/10 supports-backdrop-blur:dark:bg-black/10 mx-auto mt-8 flex h-[58px] w-max items-center justify-center gap-2 rounded-2xl border p-2");
const Dock = /*#__PURE__*/ _s(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forwardRef(_c = _s(({ className, children, iconSize = DEFAULT_SIZE, iconMagnification = DEFAULT_MAGNIFICATION, iconDistance = DEFAULT_DISTANCE, direction = "middle", mouseX: externalMouseX, ...props }, ref)=>{
    _s();
    const internalMouseX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(Infinity);
    const mouseX = externalMouseX ?? internalMouseX;
    const renderChildren = ()=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Children.map(children, (child)=>{
            if (/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isValidElement(child) && child.type === DockIcon) {
                return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].cloneElement(child, {
                    ...child.props,
                    mouseX: mouseX,
                    size: iconSize,
                    magnification: iconMagnification,
                    distance: iconDistance
                });
            }
            return child;
        });
    };
    // 添加全局点击监听器来处理点击外部区域
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "Dock.useEffect": ()=>{
            const handleGlobalTouch = {
                "Dock.useEffect.handleGlobalTouch": (e)=>{
                    const target = e.target;
                    const dockElement = ref && 'current' in ref ? ref.current : null;
                    if (dockElement && !dockElement.contains(target)) {
                        mouseX.set(Infinity);
                    }
                }
            }["Dock.useEffect.handleGlobalTouch"];
            document.addEventListener('touchstart', handleGlobalTouch);
            return ({
                "Dock.useEffect": ()=>{
                    document.removeEventListener('touchstart', handleGlobalTouch);
                }
            })["Dock.useEffect"];
        }
    }["Dock.useEffect"], [
        mouseX,
        ref
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        ref: ref,
        onMouseMove: (e)=>mouseX.set(e.pageX),
        onMouseLeave: ()=>mouseX.set(Infinity),
        onTouchStart: (e)=>{
            e.stopPropagation();
            mouseX.set(e.touches[0].pageX);
        },
        onTouchEnd: ()=>mouseX.set(Infinity),
        ...props,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(dockVariants({
            className
        }), {
            "items-start": direction === "top",
            "items-center": direction === "middle",
            "items-end": direction === "bottom" || direction === "middle"
        }),
        children: renderChildren()
    }, void 0, false, {
        fileName: "[project]/src/components/magicui/dock.tsx",
        lineNumber: 86,
        columnNumber: 7
    }, this);
}, "5CrCrmJahFe7EJKdt8YAWZhDbtc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"]
    ];
})), "5CrCrmJahFe7EJKdt8YAWZhDbtc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"]
    ];
});
_c1 = Dock;
Dock.displayName = "Dock";
const DockIcon = ({ size = DEFAULT_SIZE, magnification = DEFAULT_MAGNIFICATION, distance = DEFAULT_DISTANCE, mouseX, className, children, ...props })=>{
    _s1();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const padding = Math.max(6, size * 0.2);
    const defaultMouseX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(Infinity);
    const distanceCalc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(mouseX ?? defaultMouseX, {
        "DockIcon.useTransform[distanceCalc]": (val)=>{
            const bounds = ref.current?.getBoundingClientRect() ?? {
                x: 0,
                width: 0
            };
            return val - bounds.x - bounds.width / 2;
        }
    }["DockIcon.useTransform[distanceCalc]"]);
    const sizeTransform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(distanceCalc, [
        -distance,
        0,
        distance
    ], [
        size,
        magnification,
        size
    ]);
    const scaleSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(sizeTransform, {
        mass: 0.1,
        stiffness: 150,
        damping: 12
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        ref: ref,
        style: {
            width: scaleSize,
            height: scaleSize,
            padding
        },
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex aspect-square cursor-pointer items-center justify-center rounded-full", className),
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/magicui/dock.tsx",
        lineNumber: 152,
        columnNumber: 5
    }, this);
};
_s1(DockIcon, "bgHgzMUgIJHYGS0iOBc/yA7pakI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"]
    ];
});
_c2 = DockIcon;
DockIcon.displayName = "DockIcon";
;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "Dock$React.forwardRef");
__turbopack_context__.k.register(_c1, "Dock");
__turbopack_context__.k.register(_c2, "DockIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/MusicControl.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pause.js [app-client] (ecmascript) <export default as Pause>");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
const MusicControl = ({ songs, className = '' })=>{
    _s();
    const [currentSongIndex, setCurrentSongIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loadedSongId, setLoadedSongId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const audioRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const currentSong = songs[currentSongIndex] || null;
    // 播放/暂停切换
    const togglePlay = async ()=>{
        if (!audioRef.current || !currentSong) return;
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            if (loadedSongId !== currentSong.id) {
                setLoadedSongId(currentSong.id);
                return;
            }
            try {
                await audioRef.current.play();
            } catch  {
                setIsPlaying(false);
            }
        }
    };
    // 音频事件处理
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MusicControl.useEffect": ()=>{
            const audio = audioRef.current;
            if (!audio) return;
            const handlePlay = {
                "MusicControl.useEffect.handlePlay": ()=>setIsPlaying(true)
            }["MusicControl.useEffect.handlePlay"];
            const handlePause = {
                "MusicControl.useEffect.handlePause": ()=>setIsPlaying(false)
            }["MusicControl.useEffect.handlePause"];
            const handleEnded = {
                "MusicControl.useEffect.handleEnded": ()=>{
                    // 循环播放当前歌曲
                    audio.currentTime = 0;
                    audio.play();
                }
            }["MusicControl.useEffect.handleEnded"];
            audio.addEventListener('play', handlePlay);
            audio.addEventListener('pause', handlePause);
            audio.addEventListener('ended', handleEnded);
            return ({
                "MusicControl.useEffect": ()=>{
                    audio.removeEventListener('play', handlePlay);
                    audio.removeEventListener('pause', handlePause);
                    audio.removeEventListener('ended', handleEnded);
                }
            })["MusicControl.useEffect"];
        }
    }["MusicControl.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MusicControl.useEffect": ()=>{
            const audio = audioRef.current;
            if (!audio || !currentSong) return;
            if (loadedSongId !== currentSong.id) {
                audio.pause();
                setIsPlaying(false);
                audio.removeAttribute('src');
                audio.load();
            }
        }
    }["MusicControl.useEffect"], [
        currentSong,
        loadedSongId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MusicControl.useEffect": ()=>{
            const audio = audioRef.current;
            if (!audio || !currentSong || loadedSongId !== currentSong.id) return;
            audio.load();
            audio.play().catch({
                "MusicControl.useEffect": ()=>{
                    setIsPlaying(false);
                }
            }["MusicControl.useEffect"]);
        }
    }["MusicControl.useEffect"], [
        currentSong,
        loadedSongId
    ]);
    if (!currentSong) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `music-control ${className}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("audio", {
                    ref: audioRef,
                    preload: "none",
                    src: loadedSongId === currentSong.id ? currentSong.src : undefined
                }, void 0, false, {
                    fileName: "[project]/src/components/MusicControl.tsx",
                    lineNumber: 102,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden cursor-pointer group",
                    onClick: togglePlay,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `w-full h-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center transition-transform duration-300 ${isPlaying ? 'animate-spin' : ''}`,
                            children: currentSong.img ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: currentSong.img,
                                alt: currentSong.name,
                                fill: true,
                                sizes: "40px",
                                className: "object-cover",
                                onError: (e)=>{
                                    // 如果图片加载失败，隐藏图片元素
                                    e.currentTarget.style.display = 'none';
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/MusicControl.tsx",
                                lineNumber: 118,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-6 h-6 md:w-8 md:h-8 bg-white/20 rounded-full flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-white text-xs font-bold",
                                    children: currentSong.name.charAt(0).toUpperCase()
                                }, void 0, false, {
                                    fileName: "[project]/src/components/MusicControl.tsx",
                                    lineNumber: 131,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/MusicControl.tsx",
                                lineNumber: 130,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/MusicControl.tsx",
                            lineNumber: 114,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200",
                            children: isPlaying ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__["Pause"], {
                                className: "w-4 h-4 md:w-5 md:h-5 text-white"
                            }, void 0, false, {
                                fileName: "[project]/src/components/MusicControl.tsx",
                                lineNumber: 141,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                className: "w-4 h-4 md:w-5 md:h-5 text-white ml-0.5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/MusicControl.tsx",
                                lineNumber: 143,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/MusicControl.tsx",
                            lineNumber: 139,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/MusicControl.tsx",
                    lineNumber: 109,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/MusicControl.tsx",
            lineNumber: 100,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/MusicControl.tsx",
        lineNumber: 99,
        columnNumber: 5
    }, this);
};
_s(MusicControl, "+2iptVXRdFvpXZEa+Cs+whA5OLQ=");
_c = MusicControl;
const __TURBOPACK__default__export__ = MusicControl;
var _c;
__turbopack_context__.k.register(_c, "MusicControl");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/Navbar.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$magicui$2f$dock$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/magicui/dock.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/folder.js [app-client] (ecmascript) <export default as Folder>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paintbrush$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Paintbrush2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/paintbrush-vertical.js [app-client] (ecmascript) <export default as Paintbrush2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$monitor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Monitor$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/monitor.js [app-client] (ecmascript) <export default as Monitor>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$handshake$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Handshake$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/handshake.js [app-client] (ecmascript) <export default as Handshake>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MusicControl$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/MusicControl.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
const navLinks = [
    {
        label: "项目",
        href: "#projects",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__["Folder"]
    },
    {
        label: "爱好",
        href: "#hobbies",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paintbrush$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Paintbrush2$3e$__["Paintbrush2"]
    },
    {
        label: "追番",
        href: "#bangumi",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$monitor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Monitor$3e$__["Monitor"]
    },
    {
        label: "关于",
        href: "#about",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"]
    },
    // { label: "联系", href: "#contact", icon: Mail },
    //{ label: "友链", href: "#friends", icon: Handshake }
    {
        label: "友链",
        href: "#contact",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$handshake$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Handshake$3e$__["Handshake"]
    }
];
const Navbar = ({ show, songs = [] })=>{
    _s();
    const [current, setCurrent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(navLinks[0].href); // 默认高亮第一个
    const [iconColors, setIconColors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const observer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const sectionRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    const iconRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    const dockMouseX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(Infinity);
    // 检测背景颜色亮度
    const getBackgroundBrightness = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Navbar.useCallback[getBackgroundBrightness]": (element)=>{
            const rect = element.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            // 获取图标位置下的背景颜色
            const elementsAtPoint = document.elementsFromPoint(centerX, centerY);
            for (const el of elementsAtPoint){
                if (el === element || el.contains(element)) continue;
                const styles = window.getComputedStyle(el);
                const bgColor = styles.backgroundColor;
                if (bgColor && bgColor !== 'rgba(0, 0, 0, 0)' && bgColor !== 'transparent') {
                    // 解析RGB值
                    const rgbMatch = bgColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
                    if (rgbMatch) {
                        const r = parseInt(rgbMatch[1]);
                        const g = parseInt(rgbMatch[2]);
                        const b = parseInt(rgbMatch[3]);
                        const alpha = rgbMatch[4] ? parseFloat(rgbMatch[4]) : 1;
                        // 如果透明度太低，继续查找
                        if (alpha < 0.3) continue;
                        // 计算亮度 (使用相对亮度公式)
                        const brightness = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
                        return brightness;
                    }
                }
            }
            // 如果没有找到有效背景色，检查body的背景
            const bodyStyles = window.getComputedStyle(document.body);
            const bodyBgColor = bodyStyles.backgroundColor;
            if (bodyBgColor && bodyBgColor !== 'rgba(0, 0, 0, 0)') {
                const rgbMatch = bodyBgColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
                if (rgbMatch) {
                    const r = parseInt(rgbMatch[1]);
                    const g = parseInt(rgbMatch[2]);
                    const b = parseInt(rgbMatch[3]);
                    const brightness = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
                    return brightness;
                }
            }
            // 默认返回中等亮度
            return 0.5;
        }
    }["Navbar.useCallback[getBackgroundBrightness]"], []);
    // 更新图标颜色
    const updateIconColors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Navbar.useCallback[updateIconColors]": ()=>{
            const newColors = {};
            navLinks.forEach({
                "Navbar.useCallback[updateIconColors]": (link)=>{
                    const iconElement = iconRefs.current[link.href];
                    if (iconElement) {
                        const brightness = getBackgroundBrightness(iconElement);
                        // 如果背景亮度大于0.5，使用深色图标；否则使用浅色图标
                        newColors[link.href] = brightness > 0.5 ? 'dark' : 'light';
                    }
                }
            }["Navbar.useCallback[updateIconColors]"]);
            setIconColors(newColors);
        }
    }["Navbar.useCallback[updateIconColors]"], [
        getBackgroundBrightness
    ]);
    const handleNavClick = (e, href)=>{
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
            window.history.pushState(null, "", href);
            setCurrent(href);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            // 初始化 IntersectionObserver
            // 优化配置以改善About页面识别
            observer.current = new IntersectionObserver({
                "Navbar.useEffect": (entries)=>{
                    // 找到可见度最高的section
                    const visibleEntries = entries.filter({
                        "Navbar.useEffect.visibleEntries": (entry)=>entry.isIntersecting
                    }["Navbar.useEffect.visibleEntries"]);
                    if (visibleEntries.length > 0) {
                        // 按照可见度排序，选择可见度最高的
                        const mostVisibleEntry = visibleEntries.reduce({
                            "Navbar.useEffect.mostVisibleEntry": (prev, current)=>{
                                return prev.intersectionRatio > current.intersectionRatio ? prev : current;
                            }
                        }["Navbar.useEffect.mostVisibleEntry"]);
                        setCurrent(`#${mostVisibleEntry.target.id}`);
                        window.history.replaceState(null, "", `#${mostVisibleEntry.target.id}`);
                    }
                }
            }["Navbar.useEffect"], {
                threshold: [
                    0.1,
                    0.2,
                    0.3,
                    0.4,
                    0.5,
                    0.6,
                    0.7,
                    0.8,
                    0.9
                ],
                rootMargin: '-20% 0px -20% 0px' // 调整为中间60%区域
            });
            // 观察所有导航链接对应的区块
            navLinks.forEach({
                "Navbar.useEffect": (link)=>{
                    const section = document.querySelector(link.href);
                    if (section) {
                        sectionRefs.current[link.href] = section;
                        observer.current?.observe(section);
                    }
                }
            }["Navbar.useEffect"]);
            // 清理
            return ({
                "Navbar.useEffect": ()=>{
                    navLinks.forEach({
                        "Navbar.useEffect": (link)=>{
                            if (sectionRefs.current[link.href]) {
                                observer.current?.unobserve(sectionRefs.current[link.href]);
                            }
                        }
                    }["Navbar.useEffect"]);
                    observer.current?.disconnect();
                }
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    // 处理初始加载和手动 URL hash 更改
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const handleHashChange = {
                "Navbar.useEffect.handleHashChange": ()=>{
                    if (window.location.hash) {
                        setCurrent(window.location.hash);
                    } else {
                        // 如果没有 hash，并且第一个 section 可见，则高亮第一个
                        const firstSection = sectionRefs.current[navLinks[0].href];
                        if (firstSection && observer.current) {
                            const isVisible = observer.current.takeRecords().some({
                                "Navbar.useEffect.handleHashChange.isVisible": (record)=>record.target === firstSection && record.isIntersecting
                            }["Navbar.useEffect.handleHashChange.isVisible"]);
                            if (isVisible) setCurrent(navLinks[0].href);
                        }
                    }
                }
            }["Navbar.useEffect.handleHashChange"];
            handleHashChange(); // 初始加载
            window.addEventListener('hashchange', handleHashChange);
            return ({
                "Navbar.useEffect": ()=>window.removeEventListener('hashchange', handleHashChange)
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    // 监听滚动和窗口大小变化，更新图标颜色
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const handleUpdate = {
                "Navbar.useEffect.handleUpdate": ()=>{
                    // 延迟执行以确保DOM更新完成
                    setTimeout(updateIconColors, 100);
                }
            }["Navbar.useEffect.handleUpdate"];
            // 初始更新
            handleUpdate();
            // 监听滚动
            window.addEventListener('scroll', handleUpdate);
            // 监听窗口大小变化
            window.addEventListener('resize', handleUpdate);
            // 使用MutationObserver监听DOM变化
            const mutationObserver = new MutationObserver(handleUpdate);
            mutationObserver.observe(document.body, {
                childList: true,
                subtree: true,
                attributes: true,
                attributeFilter: [
                    'style',
                    'class'
                ]
            });
            return ({
                "Navbar.useEffect": ()=>{
                    window.removeEventListener('scroll', handleUpdate);
                    window.removeEventListener('resize', handleUpdate);
                    mutationObserver.disconnect();
                }
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], [
        updateIconColors
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `fixed top-1/2 left-4 md:left-8 -translate-y-1/2 z-[100] transition-opacity duration-500 ${show ? "opacity-100" : "opacity-0 pointer-events-none"} group`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white/0 backdrop-blur-md shadow-lg rounded-2xl p-2 md:p-3",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$magicui$2f$dock$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dock"], {
                mouseX: dockMouseX,
                direction: "bottom",
                className: "flex flex-col gap-5 md:gap-6 !bg-transparent border-none p-0 !h-auto !w-auto group !mt-0",
                children: [
                    navLinks.map((link)=>{
                        const Icon = link.icon;
                        const isActive = current === link.href;
                        const iconColor = iconColors[link.href] || 'dark';
                        // 根据背景颜色和激活状态确定图标颜色
                        const getIconColorClass = ()=>{
                            if (isActive) {
                                return iconColor === 'light' ? 'text-blue-300' : 'text-blue-600';
                            } else {
                                if (iconColor === 'light') {
                                    return 'text-white hover:text-blue-300';
                                } else {
                                    return 'text-gray-700 hover:text-blue-600';
                                }
                            }
                        };
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$magicui$2f$dock$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DockIcon"], {
                            className: "bg-transparent",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex aspect-square cursor-pointer items-center justify-center rounded-full bg-transparent",
                                style: {
                                    padding: '8px',
                                    width: '40px',
                                    height: '40px'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    ref: (el)=>{
                                        iconRefs.current[link.href] = el;
                                    },
                                    href: link.href,
                                    onClick: (e)=>handleNavClick(e, link.href),
                                    className: `flex flex-col items-center transition-colors group/icon ${getIconColorClass()}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "flex items-center justify-center w-12 h-12 md:w-12 md:h-12 mb-1 rounded-full transition-all duration-200 group-hover/icon:bg-gray-200/20",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                className: "w-8 h-8 md:w-8 md:h-8 group-hover:scale-110 transition-transform"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Navbar.tsx",
                                                lineNumber: 250,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Navbar.tsx",
                                            lineNumber: 249,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-300 pointer-events-none select-none",
                                            style: {
                                                transitionProperty: 'opacity, transform'
                                            },
                                            children: link.label
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Navbar.tsx",
                                            lineNumber: 252,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 243,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 242,
                                columnNumber: 17
                            }, this)
                        }, link.href, false, {
                            fileName: "[project]/src/components/Navbar.tsx",
                            lineNumber: 241,
                            columnNumber: 15
                        }, this);
                    }),
                    songs.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$magicui$2f$dock$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DockIcon"], {
                        className: "bg-transparent",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex aspect-square cursor-pointer items-center justify-center rounded-full bg-transparent",
                            style: {
                                padding: '8px',
                                width: '40px',
                                height: '40px'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-center group/music",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex items-center justify-center mb-1 rounded-full transition-all duration-200 group-hover/music:bg-gray-200/20 p-0",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MusicControl$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            songs: songs,
                                            className: "group-hover/music:scale-110 transition-transform"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Navbar.tsx",
                                            lineNumber: 270,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navbar.tsx",
                                        lineNumber: 269,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-white opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-300 pointer-events-none select-none",
                                        style: {
                                            transitionProperty: 'opacity, transform'
                                        },
                                        children: "Pieces"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navbar.tsx",
                                        lineNumber: 275,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 268,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navbar.tsx",
                            lineNumber: 267,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Navbar.tsx",
                        lineNumber: 266,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Navbar.tsx",
                lineNumber: 221,
                columnNumber: 7
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.tsx",
            lineNumber: 220,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Navbar.tsx",
        lineNumber: 215,
        columnNumber: 5
    }, this);
};
_s(Navbar, "yJrJTxuuSn5XQtQFxAUc8Shs8X8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"]
    ];
});
_c = Navbar;
const __TURBOPACK__default__export__ = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Home)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$magicui$2f$text$2d$animate$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/magicui/text-animate.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LoadingCanvas$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LoadingCanvas.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$Projects$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/sections/Projects.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$Hobbies$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/sections/Hobbies.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$Bangumi$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/sections/Bangumi.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$Contact$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/sections/Contact.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$About$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/sections/About.tsx [app-client] (ecmascript)");
// import Friends from "@/components/sections/Friends";
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Navbar.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
;
function Home() {
    _s();
    const [showMain, setShowMain] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [showContent, setShowContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [introReady, setIntroReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false); // New state for intro screen fade-in
    const introRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // 示例音乐数据 - 请替换为你的实际音频文件
    const sampleSongs = [
        {
            id: '1',
            name: 'Pieces',
            src: '/assets/music/Pieces/Pieces-ClariS.mp3',
            author: 'ClariS',
            album: 'カラフル (アニメ盤)(Colorful)',
            img: '/assets/music/covers/Pieces-ClariS.jpg' // 如果没有封面，将显示默认图标
        }
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            if (!loading && !showMain) {
                const handleScroll = {
                    "Home.useEffect.handleScroll": (e)=>{
                        let deltaY = 0;
                        if (e.type === 'wheel') {
                            deltaY = e.deltaY;
                        } else if (e.type === 'touchmove' && e.touches.length > 0) {
                            if (introRef.current && introRef.current.dataset.startY) {
                                deltaY = parseFloat(introRef.current.dataset.startY) - e.touches[0].clientY;
                            }
                        }
                        if (deltaY > 0) {
                            setShowMain(true);
                            setTimeout({
                                "Home.useEffect.handleScroll": ()=>{
                                    const projectsSection = document.getElementById("projects");
                                    if (projectsSection) {
                                        projectsSection.scrollIntoView({
                                            behavior: "smooth"
                                        });
                                    }
                                }
                            }["Home.useEffect.handleScroll"], 100); // 等待内容渲染后再滚动
                        }
                    }
                }["Home.useEffect.handleScroll"];
                const handleTouchStart = {
                    "Home.useEffect.handleTouchStart": (e)=>{
                        if (introRef.current && e.touches.length > 0) {
                            introRef.current.dataset.startY = e.touches[0].clientY.toString();
                        }
                    }
                }["Home.useEffect.handleTouchStart"];
                window.addEventListener("wheel", handleScroll, {
                    passive: false
                });
                window.addEventListener("touchstart", handleTouchStart, {
                    passive: true
                });
                window.addEventListener("touchmove", handleScroll, {
                    passive: false
                });
                return ({
                    "Home.useEffect": ()=>{
                        window.removeEventListener("wheel", handleScroll);
                        window.removeEventListener("touchstart", handleTouchStart);
                        window.removeEventListener("touchmove", handleScroll);
                        if (introRef.current) {
                            delete introRef.current.dataset.startY;
                        }
                    }
                })["Home.useEffect"];
            }
        }
    }["Home.useEffect"], [
        loading,
        showMain
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LoadingCanvas$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onFinish: ()=>{
                    setLoading(false);
                    setIntroReady(true); // Trigger intro screen fade-in
                    setTimeout(()=>setShowContent(true), 400);
                }
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 82,
                columnNumber: 19
            }, this),
            !loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: introRef,
                className: `fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden
                      ${introReady && !showMain ? 'opacity-100' : 'opacity-0'} 
                      ${showMain ? 'pointer-events-none' : ''}
                      transition-opacity duration-700 ease-in-out`,
                style: {
                    background: 'linear-gradient(180deg, #325d78 0%, #1c3f61 18%, #10233f 52%, #050c17 100%)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 -z-10",
                        style: {
                            background: 'radial-gradient(ellipse at 50% -8%, rgba(186, 230, 253, 0.36), transparent 26%), radial-gradient(circle at 18% 20%, rgba(103, 232, 249, 0.18), transparent 24%), radial-gradient(circle at 82% 16%, rgba(125, 211, 252, 0.14), transparent 22%), radial-gradient(circle at 50% 76%, rgba(59, 130, 246, 0.16), transparent 34%)'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 101,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 -z-10 opacity-20",
                        style: {
                            backgroundImage: 'linear-gradient(rgba(186, 230, 253, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(186, 230, 253, 0.07) 1px, transparent 1px)',
                            backgroundSize: '46px 46px',
                            maskImage: 'linear-gradient(180deg, rgba(0,0,0,0.75), rgba(0,0,0,0.14))'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 108,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 -z-10 opacity-45",
                        style: {
                            backgroundImage: 'linear-gradient(102deg, transparent 0%, transparent 28%, rgba(186,230,253,0.18) 38%, transparent 48%, transparent 100%), linear-gradient(78deg, transparent 0%, transparent 18%, rgba(125,211,252,0.14) 29%, transparent 40%, transparent 100%), linear-gradient(92deg, transparent 0%, transparent 58%, rgba(147,197,253,0.12) 68%, transparent 78%, transparent 100%)',
                            filter: 'blur(10px)',
                            maskImage: 'linear-gradient(180deg, rgba(0,0,0,0.95), rgba(0,0,0,0.18))'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 117,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-x-0 top-0 -z-10 h-28 opacity-80",
                        style: {
                            background: 'linear-gradient(180deg, rgba(240, 249, 255, 0.34), rgba(186,230,253,0.12) 36%, transparent 100%)',
                            filter: 'blur(10px)'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 126,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-x-0 top-0 -z-10 h-36 opacity-45",
                        style: {
                            backgroundImage: 'repeating-linear-gradient(96deg, transparent 0 32px, rgba(255,255,255,0.2) 32px 42px, transparent 42px 92px), repeating-linear-gradient(84deg, transparent 0 28px, rgba(186,230,253,0.16) 28px 38px, transparent 38px 84px)',
                            filter: 'blur(14px)',
                            maskImage: 'linear-gradient(180deg, rgba(0,0,0,0.95), rgba(0,0,0,0.08))'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 134,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 -z-10 opacity-30",
                        style: {
                            backgroundImage: 'radial-gradient(circle at 18% 36%, rgba(255,255,255,0.16) 0 2px, transparent 2.6px), radial-gradient(circle at 31% 62%, rgba(186,230,253,0.14) 0 1.8px, transparent 2.4px), radial-gradient(circle at 48% 24%, rgba(255,255,255,0.14) 0 2px, transparent 2.8px), radial-gradient(circle at 67% 56%, rgba(191,219,254,0.14) 0 1.8px, transparent 2.5px), radial-gradient(circle at 82% 28%, rgba(255,255,255,0.14) 0 2px, transparent 2.6px), radial-gradient(circle at 76% 74%, rgba(165,243,252,0.12) 0 1.6px, transparent 2.4px), radial-gradient(circle at 24% 78%, rgba(186,230,253,0.12) 0 1.7px, transparent 2.4px)'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 143,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -left-24 top-6 -z-10 h-80 w-80 rounded-full bg-cyan-300/10 blur-3xl animate-pulse"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 150,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute right-[-4rem] top-10 -z-10 h-96 w-96 rounded-full bg-sky-300/10 blur-3xl animate-pulse [animation-delay:1200ms]"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 151,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-0 left-1/2 -z-10 h-[28rem] w-[32rem] -translate-x-1/2 rounded-full bg-blue-500/8 blur-3xl animate-pulse [animation-delay:2200ms]"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 152,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 -z-10 opacity-55",
                        style: {
                            backgroundImage: 'radial-gradient(circle at 12% 20%, rgba(255,255,255,0.88) 0 1px, transparent 1.8px), radial-gradient(circle at 22% 30%, rgba(191,219,254,0.78) 0 1px, transparent 1.9px), radial-gradient(circle at 35% 15%, rgba(255,255,255,0.72) 0 1px, transparent 1.8px), radial-gradient(circle at 46% 22%, rgba(186,230,253,0.72) 0 1px, transparent 1.9px), radial-gradient(circle at 58% 12%, rgba(255,255,255,0.84) 0 1px, transparent 1.8px), radial-gradient(circle at 68% 26%, rgba(191,219,254,0.74) 0 1px, transparent 1.9px), radial-gradient(circle at 82% 18%, rgba(255,255,255,0.8) 0 1px, transparent 2px), radial-gradient(circle at 74% 34%, rgba(165,243,252,0.64) 0 1px, transparent 1.9px)'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 153,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "backdrop-blur-[2px] bg-[linear-gradient(180deg,rgba(4,10,24,0.06),rgba(2,6,23,0.32))] w-full h-full absolute top-0 left-0 -z-10"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 160,
                        columnNumber: 11
                    }, this),
                    introReady && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-8 relative group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-50 h-50 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl relative transform transition-all duration-300 group-hover:scale-110 group-hover:border-white/60",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: "/assets/logo/正方形.webp",
                                                alt: "Logo",
                                                fill: true,
                                                sizes: "(max-width: 768px) 160px, 200px",
                                                className: "object-cover transition-transform duration-300 group-hover:scale-105",
                                                priority: false
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 166,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 rounded-full bg-white/20 animate-ping opacity-75"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 175,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 rounded-full bg-white/10 animate-pulse"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 176,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 165,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 rounded-full border-2 border-white/20 animate-ping scale-110"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 179,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 164,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$magicui$2f$text$2d$animate$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextAnimate"], {
                                animation: "slideUp",
                                by: "character",
                                as: "h1",
                                startOnView: false,
                                className: "text-7xl font-bold text-white mb-4 text-center",
                                children: "晓   雨"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 182,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$magicui$2f$text$2d$animate$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextAnimate"], {
                                animation: "slideUp",
                                by: "line",
                                as: "p",
                                delay: 0.5,
                                startOnView: false,
                                className: "text-3xl text-white text-center max-w-2xl mb-8",
                                children: "CodeRains"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 191,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-10 flex flex-col items-center animate-bounce",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "26",
                                height: "26",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "white",
                                strokeWidth: "2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    d: "M19 9l-7 7-7-7"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 204,
                                    columnNumber: 104
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 204,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-white mt-2",
                                children: "下滑进入"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 205,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 203,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 90,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `
        ${!loading && showMain && showContent ? "opacity-100" : "opacity-0 pointer-events-none h-0 overflow-hidden"}
        transition-opacity duration-700 ease-in-out 
      `,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$Projects$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 213,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$Hobbies$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 214,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$Bangumi$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 215,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$About$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 216,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$Contact$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 217,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 209,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                show: !loading && showMain && showContent,
                songs: sampleSongs
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 220,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 81,
        columnNumber: 5
    }, this);
}
_s(Home, "FFjNoNFtSyg4PFu8eJbFupZI+qQ=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_2a69e955._.js.map