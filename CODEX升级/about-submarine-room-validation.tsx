"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { AnimatePresence, LayoutGroup, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

import PlanetSystem from "@/components/PlanetSystem";
import DeskLamp3D from "@/lib/three-examples/DeskLamp3D";

import roomDarkTexture from "../舱室关灯.png";
import roomLitTexture from "../舱室开灯.png";
import styles from "./about-submarine-room-validation.module.css";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};

type SceneConfig = {
  scrollTrackVh: number;
  roomRevealStart: number;
  roomRevealEnd: number;
  portholeBaseScale: number;
  portholeZoomGain: number;
  cardsFadeStart: number;
  cardsFadeEnd: number;
  sceneShift: string;
  roomImageShift: string;
  roomImageScale: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "时间已经过去太久，已经记不清当时的心情了\n当时有一个比较朦胧的想法，在朋友的介绍下认识了[墨间黑沢](https://space.bilibili.com/24271342/dynamic)老师，很快便有了这第一件衣服\n看着脑子里面的想法从模糊到清晰，再到具体，是一种很奇妙的体验。我加入了很多我自己的喜好：白发、蓝瞳、和一点恰到好处的浅浅微笑\n幻象中诞生的少女从纸上走来，很惭愧，我至今没用为她想好一个合适的名字，既然是二次元的“我”，那就以本名 “阵雨” 暂且称呼吧",
    name: "初始之服",
    designation: "阵雨的第一件衣服",
    src: "/assets/oc/oc1.png",
  },
  {
    quote:
      "旗袍的形象很经典，虽其历史不过区区百年，但其展现的温婉曲线美是近乎无可替代的\n由于其发色瞳色，衣服的形象便也非常自然的确定为蓝白色了，青花瓷的一般的少女也应运而生，微微扎起的头发及垂落的鬓尾更将其含蓄而内敛展现地淋漓尽致\n天青色等烟雨，而我在等你",
    name: "旗袍",
    designation: "青花瓷",
    src: "/assets/oc/oc2.png",
  },
  {
    quote:
      "其实原本是有死库水的打算，但实在不符合年龄，最后墨间老师画了这种偏水手服风格的泳装\n说真的，我这辈子除游泳课外穿泳装的次数简直屈指可数（大夏天宅空调房不香吗真的是），南方的大火炉实在是太可怕了\n不过阵雨是美少女，美少女是不会被晒黑的（确信）\n相对保守的服饰很好遮住了上身，但空隙间展现的娇小可爱很完美的补足了少女感\n\n※设定上很怕水，刚开始学游泳时很艰难才克服溺水感",
    name: "泳装",
    designation: "正常人谁大夏天去沙滩啊",
    src: "/assets/oc/oc3.png",
  },
  {
    quote:
      "出于对影视作品里黑客的印象，加上对编程的喜好，便约了这套黑客服设\n高考完后也上了跟计算机相关的专业，虽然学得杂而不精，但看着想法用逻辑变成现实还是很有成就感\n阵雨这套衣服参考了我喜欢的一些黑客形象：宽松而厚的外套、较为凌乱的头发、以及不健康作息带来的黑眼圈\n...还有大腿绑带，大腿绑带是极好的！\n黑客是不愿意受管教和约束的存在，一个关着的门对于黑客来说是一种挑衅，一个锁着的门对黑客来说是一种侮辱。 \n\n这么飒气的女孩子，谁会想到她的算法课是被老师捞过的呢(*^_^*)",
    name: "黑客服",
    designation: "喂喂，验证码发我一下",
    src: "/assets/oc/oc4.png",
  },
  {
    quote:
      "赛车手是比较远离日常生活的形象，这套服设参考了[赛车服远坂凛](https://www.hpoi.net/hobby/36512)形象，经典的皮克外套及充满速度感的花纹，护目镜、手环等配饰也增添了赛车手的气质，少见的高马尾也是我很喜欢的一点。\n在网站开始页面是墨间老师为其绘制的一幅赠图，超！帅！的！",
    name: "赛车服",
    designation: "昨晚我输给一辆AE86，他用惯性漂移过弯，他的车很快，我只看到他有个豆腐店的招牌。",
    src: "/assets/oc/oc5.png",
  },
  {
    quote:
      "看起来很像贵族女子学校的校服（不过实际是什么学校我也还没想过）\n深色而典雅的长裙在运动时并不太方便，所以体育课时会换成更方便的款式\n面料舒适，保暖且透气，适合四季穿用\n但是不便清洗，经常不小心弄脏发阵雨只能买多套衣服以备用\n\n※除了校服外，学校对袜子、鞋子及发型也有相应要求，意外严苛",
    name: "校服",
    designation: "贵安",
    src: "/assets/oc/oc6.png",
  },
  {
    quote:
      "与初始之服相似，但更精炼大方，不对称的设计使其在人群中很容易脱颖而出\n初始服胸口的山荷叶挂饰被挂到腰间，走路时会随之轻轻摇摆。发型和绑带也换成更干练的，颇显成熟\n阵雨并不太习惯这身衣服，但出乎意料的是收到了众多好评，一改往日傻傻憨态的她以性格里另一面出场，着实吓到了不少人",
    name: "礼服",
    designation: "用于出席重要场合的衣服",
    src: "/assets/oc/oc7.png",
  },
  {
    quote:
      "长下摆，对襟而长袖的白大褂，既用来保护实验服下的身体，也表示角色的知性美。\n话是这么说，可后半句在阵雨身上似乎不适用）\n请千万注意不要在实验室外（至少不要在实验楼外）穿着实验服，以避免将沾染的有毒有害物质带出造成污染\n虽不太符合实验规范，但高跟鞋子的不适让她始终提醒自己保持专注。当然，护目镜和扎起头发这两点仍然不能马虎",
    name: "实验服",
    designation: "为什么结果重复不出来啊/(ㄒoㄒ)/~~",
    src: "/assets/oc/oc8.png",
  },
];

const DESKTOP_SCENE_CONFIG: SceneConfig = {
  scrollTrackVh: 560,
  roomRevealStart: 220,
  roomRevealEnd: 2460,
  portholeBaseScale: 1.28,
  portholeZoomGain: 0.72,
  cardsFadeStart: 0.48,
  cardsFadeEnd: 0.64,
  sceneShift: "0px",
  roomImageShift: "0%",
  roomImageScale: "1",
};

const MOBILE_SCENE_CONFIG: SceneConfig = {
  scrollTrackVh: 440,
  roomRevealStart: 180,
  roomRevealEnd: 1640,
  portholeBaseScale: 1.08,
  portholeZoomGain: 0.46,
  cardsFadeStart: 0.42,
  cardsFadeEnd: 0.58,
  sceneShift: "0px",
  roomImageShift: "0%",
  roomImageScale: "1.04",
};

const floorBoardConfig = {
  boardSize: {
    width: 420,
    height: 620,
  },
  corners: [
    { x: 768, y: 570.4 },
    { x: 1020.8, y: 597.6 },
    { x: 857.6, y: 768.8 },
    { x: 538.4, y: 723.2 },
  ],
  cards: [
    { id: "oc1", x: 176.35, y: 241.46, rotation: 15, z: 40 },
    { id: "oc2", x: 285, y: 370, rotation: 16, z: 28 },
    { id: "oc3", x: 127.33, y: 364.85, rotation: -3, z: 39 },
    { id: "oc4", x: 118.75, y: 85.71, rotation: 28, z: 41 },
    { id: "oc5", x: 225.21, y: 69.25, rotation: -13, z: 38 },
    { id: "oc6", x: 23, y: 316, rotation: 19, z: 32 },
    { id: "oc7", x: 29.73, y: 159.04, rotation: -32, z: 37 },
    { id: "oc8", x: 302.29, y: 207.24, rotation: -29, z: 42 },
  ],
};

const clamp = (value: number, min: number, max: number) =>
  Math.max(min, Math.min(max, value));

const mapRange = (value: number, start: number, end: number) =>
  clamp((value - start) / (end - start), 0, 1);

const smoothstep = (value: number) => value * value * (3 - 2 * value);

const mapRangeSmooth = (value: number, start: number, end: number) =>
  smoothstep(mapRange(value, start, end));

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

type RoomPhase = "outside-hull" | "room-reveal" | "crossfade" | "settle" | "interior";

const resolveRoomPhase = (
  progress: number,
  previousPhase?: RoomPhase,
): RoomPhase => {
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
  "outside-hull": { start: 0, end: 0.32 },
  "room-reveal": { start: 0.32, end: 0.42 },
  crossfade: { start: 0.42, end: 0.54 },
  settle: { start: 0.54, end: 0.688 },
  interior: { start: 0.688, end: 1 },
} as const;

const solveLinearSystem = (matrix: number[][], vector: number[]) => {
  const size = vector.length;
  const augmented = matrix.map((row, rowIndex) => [...row, vector[rowIndex]]);

  for (let pivot = 0; pivot < size; pivot += 1) {
    let maxRow = pivot;
    for (let row = pivot + 1; row < size; row += 1) {
      if (Math.abs(augmented[row][pivot]) > Math.abs(augmented[maxRow][pivot])) {
        maxRow = row;
      }
    }

    if (Math.abs(augmented[maxRow][pivot]) < 1e-10) {
      return null;
    }

    if (maxRow !== pivot) {
      [augmented[pivot], augmented[maxRow]] = [augmented[maxRow], augmented[pivot]];
    }

    const pivotValue = augmented[pivot][pivot];
    for (let column = pivot; column <= size; column += 1) {
      augmented[pivot][column] /= pivotValue;
    }

    for (let row = 0; row < size; row += 1) {
      if (row === pivot) {
        continue;
      }

      const factor = augmented[row][pivot];
      for (let column = pivot; column <= size; column += 1) {
        augmented[row][column] -= factor * augmented[pivot][column];
      }
    }
  }

  return augmented.map((row) => row[size]);
};

const computeHomography = (
  source: Array<[number, number]>,
  destination: Array<[number, number]>,
) => {
  const matrix: number[][] = [];
  const vector: number[] = [];

  for (let index = 0; index < 4; index += 1) {
    const [x, y] = source[index];
    const [targetX, targetY] = destination[index];

    matrix.push([x, y, 1, 0, 0, 0, -x * targetX, -y * targetX]);
    vector.push(targetX);
    matrix.push([0, 0, 0, x, y, 1, -x * targetY, -y * targetY]);
    vector.push(targetY);
  }

  const solution = solveLinearSystem(matrix, vector);
  if (!solution) {
    return null;
  }

  return [
    solution[0], solution[1], solution[2],
    solution[3], solution[4], solution[5],
    solution[6], solution[7], 1,
  ];
};

const matrixToCss = (matrix: number[]) =>
  `matrix3d(${[
    matrix[0], matrix[3], 0, matrix[6],
    matrix[1], matrix[4], 0, matrix[7],
    0, 0, 1, 0,
    matrix[2], matrix[5], 0, matrix[8],
  ].join(",")})`;

const createFloorBoardTransform = (boardConfig: typeof floorBoardConfig) => {
  const homography = computeHomography(
    [
      [0, 0],
      [boardConfig.boardSize.width, 0],
      [boardConfig.boardSize.width, boardConfig.boardSize.height],
      [0, boardConfig.boardSize.height],
    ],
    boardConfig.corners.map(({ x, y }) => [x, y] as [number, number]),
  );

  return homography ? matrixToCss(homography) : undefined;
};

const renderQuote = (quote: string) => {
  const lines = quote.split("\n");

  return lines.map((line, lineIndex) => {
    const fragments: React.ReactNode[] = [];
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    let lastIndex = 0;
    let match: RegExpExecArray | null;

    while ((match = linkRegex.exec(line)) !== null) {
      if (match.index > lastIndex) {
        fragments.push(line.slice(lastIndex, match.index));
      }
      fragments.push(
        <a
          key={`${lineIndex}-${match.index}`}
          href={match[2]}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 underline transition-colors hover:text-blue-300"
        >
          {match[1]}
        </a>,
      );
      lastIndex = match.index + match[0].length;
    }

    if (lastIndex < line.length) {
      fragments.push(line.slice(lastIndex));
    }

    if (fragments.length === 0) {
      fragments.push(line);
    }

    return (
      <span key={lineIndex}>
        {fragments}
        {lineIndex < lines.length - 1 ? <br /> : null}
      </span>
    );
  });
};

function ValidationTestimonials({
  active,
  onPrev,
  onNext,
}: {
  active: number;
  onPrev: () => void;
  onNext: () => void;
}) {
  const [rotations, setRotations] = useState<number[]>([]);

  useEffect(() => {
    setRotations(testimonials.map(() => Math.floor(Math.random() * 21) - 10));
  }, []);

  const isActive = (index: number) => index === active;

  return (
    <div className="mx-auto max-w-md px-4 py-20 font-sans antialiased md:max-w-6xl md:px-8 lg:px-12">
      <div className="relative grid grid-cols-1 gap-24 md:grid-cols-2">
        <div>
          <div className="relative mx-auto w-80 aspect-[17/25]">
            <AnimatePresence initial={false}>
              {testimonials.map((testimonial, index) => {
                const sharedLayoutId =
                  isActive(index) ? `about-validation-card-${index}` : undefined;

                return (
                  <motion.div
                    key={testimonial.src}
                    initial={{
                      opacity: 0,
                      z: -100,
                      rotate: rotations[index] || 0,
                    }}
                    animate={{
                      opacity: isActive(index) ? 1 : 0.7,
                      z: isActive(index) ? 0 : -100,
                      rotate: isActive(index) ? 0 : rotations[index] || 0,
                      zIndex: isActive(index)
                        ? 40
                        : testimonials.length + 2 - index,
                      y: isActive(index) ? [0, -80, 0] : 0,
                    }}
                    exit={{
                      opacity: 0,
                      z: 100,
                      rotate: rotations[index] || 0,
                    }}
                    transition={{
                      duration: 0.4,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 origin-bottom"
                  >
                    <motion.div
                      layoutId={sharedLayoutId}
                      onLayoutAnimationStart={() => {
                        if (!isActive(index)) {
                          return;
                        }
                        console.debug("[about-validation] detail card layout start", {
                          index,
                          active,
                        });
                      }}
                      onLayoutAnimationComplete={() => {
                        if (!isActive(index)) {
                          return;
                        }
                        console.debug("[about-validation] detail card layout complete", {
                          index,
                          active,
                        });
                      }}
                      className="relative h-full w-full overflow-hidden rounded-3xl shadow-2xl"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={testimonial.src}
                        alt={testimonial.name}
                        draggable={false}
                        className="h-full w-full object-cover object-center"
                      />
                      <div className="absolute inset-0 rounded-3xl bg-gray-800 opacity-8" />
                    </motion.div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex flex-col justify-between py-4">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            <h3 className="text-2xl font-bold text-gray-500 dark:text-white">
              {testimonials[active].name}
            </h3>
            <p className="text-m text-gray-400 dark:text-neutral-500">
              {testimonials[active].designation}
            </p>
            <motion.p className="mt-8 text-lg text-gray-400 dark:text-neutral-300">
              {renderQuote(testimonials[active].quote)}
            </motion.p>
          </motion.div>
          <div className="flex justify-start gap-4 pt-12">
            <button
              onClick={onPrev}
              className="group/button flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
            >
              <IconArrowLeft className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:rotate-12 dark:text-neutral-400" />
            </button>
            <button
              onClick={onNext}
              className="group/button flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
            >
              <IconArrowRight className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:-rotate-12 dark:text-neutral-400" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AboutSubmarineRoomValidation() {
  const scrollTrackRef = useRef<HTMLElement>(null);
  const frameRef = useRef<number | null>(null);
  const progressTickRef = useRef<number | null>(null);
  const targetProgressRef = useRef(0);
  const renderedProgressRef = useRef(0);
  const scrollMetricsRef = useRef({
    totalScrollablePx: 1,
    targetScrollPx: 0,
  });
  const transitionDebugRef = useRef<{
    bucket: number;
    phase: RoomPhase;
    targetProgress: number;
    lastProgress: number;
    lastReveal: number;
    lastScale: number;
    lastHullOpacity: number;
    lastTargetScrollPx: number;
    lastTs: number;
  } | null>(null);
  const [progress, setProgress] = useState(0);
  const [lampOn, setLampOn] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const mobileLoopCards = isMobile ? [...testimonials, ...testimonials] : testimonials;

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const updateViewportMode = () => setIsMobile(mediaQuery.matches);

    updateViewportMode();
    mediaQuery.addEventListener("change", updateViewportMode);
    return () => mediaQuery.removeEventListener("change", updateViewportMode);
  }, []);

  useEffect(() => {
    const animateProgress = () => {
      progressTickRef.current = window.requestAnimationFrame(() => {
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

    const scheduleProgressAnimation = () => {
      if (progressTickRef.current !== null) {
        return;
      }
      animateProgress();
    };

    const updateProgress = () => {
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

    const onScroll = () => {
      if (frameRef.current !== null) {
        return;
      }

      frameRef.current = window.requestAnimationFrame(() => {
        frameRef.current = null;
        updateProgress();
      });
    };

    updateProgress();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
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

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isDetailOpen) {
        console.debug("[about-validation] escape close", { selectedIndex });
        setIsDetailOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isDetailOpen, selectedIndex]);

  useEffect(() => {
    console.debug("[about-validation] detail state", {
      selectedIndex,
      isDetailOpen,
    });
  }, [selectedIndex, isDetailOpen]);

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
  const roomBrightness = lampOn
    ? 0.54 + roomDetail * 0.16 + settle * 0.22
    : 0.38 + roomDetail * 0.1 + settle * 0.08;
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

  useEffect(() => {
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
    const phaseProgress = clamp(
      phaseSpanPx <= 0 ? 1 : (renderedScrollPx - phaseStartPx) / phaseSpanPx,
      0,
      1,
    );

    if (!previous) {
      console.debug("[about-validation] scroll geometry", {
        totalScrollablePx: Math.round(totalScrollablePx),
        viewportHeight: window.innerHeight,
        phaseDistancesPx: {
          outsideHull: Math.round(PHASE_RANGES["outside-hull"].end * totalScrollablePx),
          roomReveal: Math.round(
            (PHASE_RANGES["room-reveal"].end - PHASE_RANGES["room-reveal"].start) * totalScrollablePx,
          ),
          crossfade: Math.round(
            (PHASE_RANGES.crossfade.end - PHASE_RANGES.crossfade.start) * totalScrollablePx,
          ),
          settle: Math.round(
            (PHASE_RANGES.settle.end - PHASE_RANGES.settle.start) * totalScrollablePx,
          ),
          interior: Math.round(
            (PHASE_RANGES.interior.end - PHASE_RANGES.interior.start) * totalScrollablePx,
          ),
        },
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
        lastTs: now,
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
        hullOpacity: Number(hullOpacity.toFixed(3)),
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
        causticsOpacity: Number(causticsOpacity.toFixed(3)),
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
      lastTs: now,
    };
  }, [
    progress,
    roomReveal,
    portholeScale,
    hullOpacity,
    roomBrightness,
    roomBlur,
    cardsOpacity,
    causticsOpacity,
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
    "--room-image-scale": roomImageScale,
  } as React.CSSProperties;

  return (
    <LayoutGroup>
      <div className={styles.page}>
        <section className={styles.blankPanel}>
          <span className={styles.blankPill}>Before About Validation</span>
        </section>

        <section
          ref={scrollTrackRef}
          className={styles.scrollTrack}
          style={{ height: `${scene.scrollTrackVh}vh` }}
        >
          <div className={styles.stage} style={stageStyle}>
            <div className={styles.stageUi}>
              <div className={styles.statusPill}>
                {lampOn ? "灯光已开" : "灯光已关"}
              </div>
            </div>

            <div className={styles.aboutLabel}>About Submarine Room Validation</div>

            <div className={styles.roomMask}>
              <div className={styles.roomLayers}>
                <div
                  className={styles.roomLayer}
                  style={{ backgroundImage: `url(${roomDarkTexture.src})`, opacity: lampOn ? 0 : 1 }}
                />
                <div
                  className={styles.roomLayer}
                  style={{ backgroundImage: `url(${roomLitTexture.src})`, opacity: lampOn ? 1 : 0 }}
                />
              </div>
              <div className={styles.roomVeil} />
            </div>

            <div className={styles.waterCaustics} />

            <div className={styles.roomContent}>
              <div className={styles.roomShade} />
              <div className={styles.warmGlow} />

              <div className={styles.lampAnchor}>
                <DeskLamp3D onToggleLight={setLampOn} />
              </div>

              <div className={styles.planetAnchor}>
                <div className={styles.planetCoreGlow} />
                <PlanetSystem />
              </div>

              {isMobile ? (
                <div
                  className={`${styles.mobileFloorCards} ${
                    isDetailOpen ? styles.mobileFloorCardsDimmed : ""
                  }`}
                >
                  <div className={styles.mobileFloorCardsTrack}>
                    {mobileLoopCards.map((testimonial, loopIndex) => {
                      const index = loopIndex % testimonials.length;

                      return (
                        <motion.button
                          key={`${testimonial.name}-${loopIndex}`}
                          type="button"
                          className={`${styles.mobileFloorCard} ${
                            selectedIndex === index && isDetailOpen ? styles.floorCardSelectedSource : ""
                          }`}
                          onClick={() => {
                            console.debug("[about-validation] open card", {
                              index,
                              name: testimonial.name,
                            });
                            setSelectedIndex(index);
                            setIsDetailOpen(true);
                          }}
                        >
                          <motion.span
                            layoutId={`about-validation-card-${index}`}
                            className={styles.mobileFloorCardFrame}
                          >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={testimonial.src}
                              alt={testimonial.name}
                              className={styles.floorCardImage}
                              draggable={false}
                            />
                          </motion.span>
                        </motion.button>
                      );
                    })}
                  </div>
                </div>
              ) : (
                <div
                  className={`${styles.floorCards} ${
                    isDetailOpen ? styles.floorCardsDimmed : ""
                  }`}
                >
                  <div
                    className={styles.floorBoard}
                    style={
                      {
                        width: `${floorBoardConfig.boardSize.width}px`,
                        height: `${floorBoardConfig.boardSize.height}px`,
                        transform: floorBoardTransform,
                      } as React.CSSProperties
                    }
                  >
                    {testimonials.map((testimonial, index) => {
                      const card = floorBoardConfig.cards.find(
                        (item) => item.id === `oc${index + 1}`,
                      );

                      if (!card) {
                        return null;
                      }

                      return (
                        <motion.button
                          key={testimonial.name}
                          type="button"
                          className={`${styles.floorCard} ${
                            selectedIndex === index && isDetailOpen ? styles.floorCardSelectedSource : ""
                          }`}
                          style={
                            {
                              left: `${card.x}px`,
                              top: `${card.y}px`,
                              "--card-rotate": `${card.rotation ?? 0}deg`,
                              zIndex: card.z,
                            } as React.CSSProperties
                          }
                          onClick={() => {
                            console.debug("[about-validation] open card", {
                              index,
                              name: testimonial.name,
                            });
                            setSelectedIndex(index);
                            setIsDetailOpen(true);
                          }}
                        >
                          <motion.span
                            layoutId={`about-validation-card-${index}`}
                            className={styles.floorCardFrame}
                          >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={testimonial.src}
                              alt={testimonial.name}
                              className={styles.floorCardImage}
                              draggable={false}
                            />
                          </motion.span>
                        </motion.button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            <div className={styles.hullOverlay}>
              <div className={styles.hullShell} />
              <div className={styles.hullShade} />
              <div className={styles.porthole}>
                <div className={styles.portholeFrame} />
                <div className={styles.portholeGlass} />
                {Array.from({ length: 12 }, (_, index) => {
                  const angle = (index / 12) * Math.PI * 2;
                  const radius = 49;
                  const x = 50 + Math.cos(angle) * radius;
                  const y = 50 + Math.sin(angle) * radius;

                  return (
                    <span
                      key={index}
                      className={styles.rivet}
                      style={{ left: `${x}%`, top: `${y}%` }}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className={styles.afterPanel}>
          <span className={styles.blankPill}>After About Validation</span>
          <div id="contact" style={{ position: "absolute", inset: "auto 0 0", width: 1, height: 1, opacity: 0 }} />
        </section>

        <AnimatePresence
          onExitComplete={() => {
            console.debug("[about-validation] detail exit complete", {
              selectedIndex,
            });
            setSelectedIndex(null);
          }}
        >
          {selectedIndex !== null && isDetailOpen ? (
            <motion.div
              className={styles.detailOverlay}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                console.debug("[about-validation] overlay close", {
                  selectedIndex,
                });
                setIsDetailOpen(false);
              }}
            >
              <motion.div
                className={styles.detailShell}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.24, ease: "easeOut" }}
                onClick={(event) => event.stopPropagation()}
              >
                <button
                  type="button"
                  className={styles.detailClose}
                  onClick={() => {
                    console.debug("[about-validation] button close", {
                      selectedIndex,
                    });
                    setIsDetailOpen(false);
                  }}
                >
                  ×
                </button>
                <ValidationTestimonials
                  active={selectedIndex}
                  onPrev={() =>
                    setSelectedIndex(
                      (selectedIndex - 1 + testimonials.length) % testimonials.length,
                    )
                  }
                  onNext={() =>
                    setSelectedIndex((selectedIndex + 1) % testimonials.length)
                  }
                />
              </motion.div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </LayoutGroup>
  );
}
