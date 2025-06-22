'use client';
import React, { useEffect, useRef, useState } from 'react';
import PlanetSystem from "@/components/PlanetSystem";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import DeskLamp3D from "@/lib/three-examples/DeskLamp3D";


// 声明全局Window接口扩展
// declare global {
//   interface Window {
//     matterCleanup?: () => void;
//     initMatter?: () => (() => void) | void;
//   }
// }
const testimonials = [
  {
    quote:
      "时间已经过去太久，已经记不清当时的心情了\n当时有一个比较朦胧的想法，在朋友的介绍下认识了[墨间黑沢](https://space.bilibili.com/24271342/dynamic)老师，很快便有了这第一件衣服\n看着脑子里面的想法从模糊到清晰，再到具体，是一种很奇妙的体验。我加入了很多我自己的喜好：白发、蓝瞳、和一点恰到好处的浅浅微笑\n幻象中诞生的少女从纸上走来，很惭愧，我至今没用为她想好一个合适的名字，既然是二次元的“我”，那就以本名 “阵雨” 暂且称呼吧",
    name: "初始之服",
    designation: "阵雨的第一件衣服",
    src: "assets/oc/oc1.png",
  },
  {
    quote:
      "旗袍的形象很经典，虽其历史不过区区百年，但其展现的温婉曲线美是近乎无可替代的\n由于其发色瞳色，衣服的形象便也非常自然的确定为蓝白色了，青花瓷的一般的少女也应运而生，微微扎起的头发及垂落的鬓尾更将其含蓄而内敛展现地淋漓尽致\n天青色等烟雨，而我在等你",
    name: "旗袍",
    designation: "青花瓷",
    src: "assets/oc/oc2.png",
  },
  {
    quote:
      "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
    name: "泳装",
    designation: "Operations Director at CloudScale",
    src: "assets/oc/oc3.png",
  },
  {
    quote:
      "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
    name: "黑客服",
    designation: "Engineering Lead at DataPro",
    src: "assets/oc/oc4.png",
  },
  {
    quote:
      "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
    name: "赛车服",
    designation: "VP of Technology at FutureNet",
    src: "assets/oc/oc5.png",
  },
  {
    quote:
      "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
    name: "校服",
    designation: "VP of Technology at FutureNet",
    src: "assets/oc/oc6.png",
  },
  {
    quote:
      "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
    name: "礼服",
    designation: "VP of Technology at FutureNet",
    src: "assets/oc/oc7.png",
  },
  {
    quote:
      "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
    name: "实验室服",
    designation: "VP of Technology at FutureNet",
    src: "assets/oc/oc8.png",
  },
];


// 流星雨组件
const MeteorShower: React.FC = () => {
  const [meteors, setMeteors] = useState<Array<{
    id: number;
    delay: number;
    duration: number;
    left: number;
    angle: number;
  }>>([]);

  useEffect(() => {
    // 只在客户端生成随机值，避免水合错误
    // 增加流星数量，并让一部分流星集中在右侧中部和右下部
    const meteorData = Array.from({ length: 16 }, (_, i) => {
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
        angle: -30,
      };
    });
    setMeteors(meteorData);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor"
          style={{
            left: `${meteor.left}%`,
            top: `${Math.random() * 100}%`, // 随机起始位置，或指定为某个范围，如 60%~100%
            animationDelay: `${meteor.delay}s`,
            animationDuration: `${meteor.duration}s`,
            transform: `rotate(${meteor.angle}deg)`,
          }}
        >
          <div className="meteor-tail" />
        </div>
      ))}
    </div>
  );
};

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [lampLightOn, setLampLightOn] = useState(true);
  // const [matterInitialized, setMatterInitialized] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting /* && !matterInitialized */) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [/* matterInitialized */]);

  // useEffect(() => {
  //   let matterCleanup: (() => void) | undefined;
  //   let retryCount = 0;
  //   const maxRetry = 3;

  //   const loadMatter = async () => {
  //     if (isVisible && !matterInitialized) {
  //       try {
  //         // 动态加载 matter.js
  //         await new Promise<void>((resolve, reject) => {
  //           const matterScript = document.createElement('script');
  //           matterScript.src = '/matter/matter.min.js';
  //           matterScript.async = true;
  //           matterScript.onload = () => resolve();
  //           matterScript.onerror = reject;
  //           document.head.appendChild(matterScript);
  //         });

  //         // 动态加载 matter-example.js
  //         await new Promise<void>((resolve, reject) => {
  //           const exampleScript = document.createElement('script');
  //           exampleScript.src = '/matter/matter-example.js';
  //           exampleScript.async = true;
  //           exampleScript.onload = () => {
  //             function tryInitMatter() {
  //               if (typeof window.initMatter === 'function') {
  //                 const result = window.initMatter();
  //                 if (typeof result === 'function') {
  //                   matterCleanup = result;
  //                 }
  //                 setMatterInitialized(true);
  //                 resolve();
  //               } else if (retryCount < maxRetry) {
  //                 retryCount++;
  //                 setTimeout(tryInitMatter, 300);
  //               } else {
  //                 reject(new Error('initMatter function not found after retry'));
  //               }
  //             }
  //             tryInitMatter();
  //           };
  //           exampleScript.onerror = reject;
  //           document.head.appendChild(exampleScript);
  //         });
  //       } catch (error) {
  //         console.error('Failed to load Matter.js scripts:', error);
  //       }
  //     }
  //   };

  //   loadMatter();

  //   return () => {
  //     if (matterCleanup) {
  //       matterCleanup();
  //     }
  //     // 移除脚本
  //     const scripts = document.querySelectorAll('script[src*="matter"]');
  //     scripts.forEach(script => script.remove());
  //   };
  // }, [isVisible, matterInitialized]);

  // useEffect(() => {
  //   return () => {
  //     // 清理Matter.js资源
  //     if (window.matterCleanup) {
  //       window.matterCleanup();
  //     }
  //     const scripts = document.querySelectorAll('script[src*="matter"]');
  //     scripts.forEach(script => script.remove());
  //   };
  // }, []);

  const sectionClass = lampLightOn
    ? 'lamp-light-mobile lamp-light-desktop'
    : 'lamp-off-mobile lamp-off-desktop';

  return (
    <section
      ref={sectionRef}
      id="about"
      className={`relative py-16 bg-black min-h-[1200px] md:min-h-[1400px] lg:min-h-[1300px] no-zoom overflow-hidden ${sectionClass}`}
      style={{ backgroundBlendMode: 'overlay' }}
    >
      {/* 白色流星雨背景效果 */}
      <MeteorShower />
      {/* 响应式布局：移动端顺序为PlanetSystem/"About Me"文字/DeskLamp3D/AnimatedTestimonials */}
      <div className="block md:hidden relative w-full h-[320px] mb-8 z-[200]">
        <PlanetSystem />
      </div>

      {/* 移动端 About Me 标题 */}
      <div className="block md:hidden text-center text-white drop-shadow-2xl relative z-10 mb-16 mt-60 ">
        <h2 className="text-4xl font-bold drop-shadow-lg filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.8)] transition-all duration-300 hover:text-yellow-100">About Me</h2>
      </div>

      <div className="block md:hidden relative w-full h-[320px] mb-8">
        <DeskLamp3D onToggleLight={setLampLightOn} />
      </div>
      <div className="block md:hidden relative w-full mb-4">
        <AnimatedTestimonials testimonials={testimonials} />
      </div>

      {/* 桌面端布局 */}
      <div className="hidden md:block absolute top-40 md:top-40 left-4 w-60 h-60 md:w-96 md:h-96 z-20">
        <DeskLamp3D onToggleLight={setLampLightOn} />
      </div>



      {/* 内容层 - 位于物理引擎之上，添加阴影效果 - 仅桌面端显示 */}
      <div className="hidden md:block text-center relative z-10 mt-48 text-xl mx-auto max-w-2xl">
        <h1
          className="text-6xl font-bold mb-8 transition-all duration-300 hover:text-yellow-100
               bg-gradient-to-r from-black via-white to-white bg-clip-text text-transparent
               inline-block w-full
               drop-shadow-[2px_2px_4px_rgba(0,0,0,0.6)]"
        >
          About Me
        </h1>

        <h2
          className="text-2xl font-bold transition-all duration-300 hover:text-yellow-100
               bg-gradient-to-r from-black via-white to-white bg-clip-text text-transparent
               inline-block w-full
               drop-shadow-[1px_1px_0_rgba(0,0,0,0.8)] drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]"
        >
          在右侧，你可以看见我的互联网生活，以及友链
        </h2>

        <h3
          className="text-2xl font-bold transition-all duration-300 hover:text-yellow-100
               bg-gradient-to-r from-black via-white to-white bg-clip-text text-transparent
               inline-block w-full
               drop-shadow-[1px_1px_0_rgba(0,0,0,0.8)] drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]
"
        >
          在下方的是我的自设，以及为她约稿设计的各种衣服
        </h3>
      </div>




      {/* 行星系统 - 桌面端 */}
      <div className="hidden md:block absolute top-[-100px] right-[-100px] w-[600px] h-[600px] md:w-[1000px] md:h-[1000px] md:-translate-y-1/4 md:translate-x-1/4 pointer-events-none drop-shadow-2xl filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.6)] transition-all duration-500 hover:brightness-110">
        <PlanetSystem />
      </div>

      {/* 推荐卡片 - 桌面端 */}
      <div className="hidden md:block absolute bottom-40 md:bottom-20 left-1/2 md:left-20 -translate-x-1/2 md:translate-x-0 w-[90%] md:w-auto z-10 drop-shadow-2xl filter drop-shadow-[0_16px_32px_rgba(0,0,0,0.7)] transition-all duration-300 hover:brightness-105">
        <AnimatedTestimonials testimonials={testimonials} />
      </div>



      {/* 额外的暖光效果 - 仅在台灯开启时显示 */}
      {lampLightOn && (
        <div
          className="absolute top-20 left-20 w-80 h-80 pointer-events-none opacity-20 transition-opacity duration-1000 ease-in-out"
          style={{
            background: 'radial-gradient(circle, rgba(255, 200, 100, 0.3) 0%, rgba(255, 230, 150, 0.1) 50%, transparent 80%)',
            filter: 'blur(30px)',
            animation: 'pulse 3s ease-in-out infinite alternate',
            opacity: 0.2,
            visibility: 'visible',
            transition: 'opacity 1s, visibility 1s'
          }}
        />
      )}

      {/* Matter.js 物理引擎将在这里渲染 - 位于最底层 */}
      {/* Matter.js 相关代码已被注释 */}
    </section>
  );
};

export default About;