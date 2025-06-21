'use client';
import React, { useEffect, useRef, useState } from 'react';
import PlanetSystem from "@/components/PlanetSystem";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import DeskLamp3D from "@/lib/three-examples/DeskLamp3D";

// 声明全局Window接口扩展
declare global {
  interface Window {
    matterCleanup?: () => void;
    initMatter?: () => (() => void) | void;
  }
}
const testimonials = [
  {
    quote:
      "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
    name: "Sarah Chen",
    designation: "Product Manager at TechFlow",
    src: "assets/oc/oc1.png",
  },
  {
    quote:
      "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
    name: "Michael Rodriguez",
    designation: "CTO at InnovateSphere",
    src: "assets/oc/oc2.png",
  },
  {
    quote:
      "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
    name: "Emily Watson",
    designation: "Operations Director at CloudScale",
    src: "assets/oc/oc3.png",
  },
  {
    quote:
      "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
    name: "James Kim",
    designation: "Engineering Lead at DataPro",
    src: "assets/oc/oc4.png",
  },
  {
    quote:
      "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
    name: "Lisa Thompson",
    designation: "VP of Technology at FutureNet",
    src: "assets/oc/oc5.png",
  },
  {
    quote:
      "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
    name: "Lisa Thompson",
    designation: "VP of Technology at FutureNet",
    src: "assets/oc/oc6.png",
  },
  {
    quote:
      "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
    name: "Lisa Thompson",
    designation: "VP of Technology at FutureNet",
    src: "assets/oc/oc7.png",
  },
  {
    quote:
      "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
    name: "Lisa Thompson",
    designation: "VP of Technology at FutureNet",
    src: "assets/oc/oc8.png",
  },
];


const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [matterInitialized, setMatterInitialized] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !matterInitialized) {
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
  }, [matterInitialized]);

  useEffect(() => {
    let matterCleanup: (() => void) | undefined;
    let retryCount = 0;
    const maxRetry = 3;

    const loadMatter = async () => {
      if (isVisible && !matterInitialized) {
        try {
          // 动态加载 matter.js
          await new Promise<void>((resolve, reject) => {
            const matterScript = document.createElement('script');
            matterScript.src = '/matter/matter.min.js';
            matterScript.async = true;
            matterScript.onload = () => resolve();
            matterScript.onerror = reject;
            document.head.appendChild(matterScript);
          });

          // 动态加载 matter-example.js
          await new Promise<void>((resolve, reject) => {
            const exampleScript = document.createElement('script');
            exampleScript.src = '/matter/matter-example.js';
            exampleScript.async = true;
            exampleScript.onload = () => {
              function tryInitMatter() {
                if (typeof window.initMatter === 'function') {
                  const result = window.initMatter();
                  if (typeof result === 'function') {
                    matterCleanup = result;
                  }
                  setMatterInitialized(true);
                  resolve();
                } else if (retryCount < maxRetry) {
                  retryCount++;
                  setTimeout(tryInitMatter, 300);
                } else {
                  reject(new Error('initMatter function not found after retry'));
                }
              }
              tryInitMatter();
            };
            exampleScript.onerror = reject;
            document.head.appendChild(exampleScript);
          });
        } catch (error) {
          console.error('Failed to load Matter.js scripts:', error);
        }
      }
    };

    loadMatter();

    return () => {
      if (matterCleanup) {
        matterCleanup();
      }
      // 移除脚本
      const scripts = document.querySelectorAll('script[src*="matter"]');
      scripts.forEach(script => script.remove());
    };
  }, [isVisible, matterInitialized]);

  useEffect(() => {
    return () => {
      // 清理Matter.js资源
      if (window.matterCleanup) {
        window.matterCleanup();
      }
      const scripts = document.querySelectorAll('script[src*="matter"]');
      scripts.forEach(script => script.remove());
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="relative py-16 bg-black min-h-[1200px] md:min-h-[1400px] lg:min-h-[1600px] no-zoom overflow-hidden" // 移除mt-20消除空白，添加no-zoom防止双击缩放
      style={{
         background: 'radial-gradient(ellipse 800px 600px at 20% 20%, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.08) 30%, rgba(0, 0, 0, 1) 70%)',
         backgroundBlendMode: 'overlay'
      //   background: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url('/assets/bg/star2.jpg')
      // `,
         
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      //   backgroundRepeat: "no-repeat",
      //   backgroundAttachment: "cover" // 可选，固定背景
       }}
    >
      {/* 响应式布局：移动端顺序为PlanetSystem/"About Me"文字/DeskLamp3D/AnimatedTestimonials */}
      <div className="block md:hidden relative w-full h-[320px] mb-8">
        <PlanetSystem />
      </div>
      
      {/* 移动端 About Me 标题 */}
      <div className="block md:hidden text-center text-white drop-shadow-2xl relative z-10 mb-16">
        <h2 className="text-4xl font-bold drop-shadow-lg filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.8)] transition-all duration-300 hover:text-yellow-100">About Me</h2>
      </div>
      
      <div className="block md:hidden relative w-full h-[320px] mb-8">
        <DeskLamp3D />
      </div>
      <div className="block md:hidden relative w-full mb-4">
        <AnimatedTestimonials testimonials={testimonials} />
      </div>

      {/* 桌面端布局 */}
      <div className="hidden md:block absolute top-20 md:top-10 left-4 w-60 h-60 md:w-96 md:h-96 z-20">
        <DeskLamp3D />
      </div>

      {/* 光照效果层 */}
      <div 
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 1000px 800px at 15% 15%, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.06) 40%, transparent 70%)',
          mixBlendMode: 'screen'
        }}
      />
      
      {/* 内容层 - 位于物理引擎之上，添加阴影效果 - 仅桌面端显示 */}
      <div className="hidden md:block text-center text-white drop-shadow-2xl relative z-10">
        <h2 className="text-4xl font-bold mb-8 drop-shadow-lg filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.8)] transition-all duration-300 hover:text-yellow-100">
          About Me
          </h2>
          <h3>在右侧，你可以看见我的互联网生活，以及友链</h3><h3>在下方的是我的自设，以及为她约稿设计的各种衣服</h3>
      </div>

      {/* 行星系统 - 桌面端 */}
      <div className="hidden md:block absolute top-[-100px] right-[-100px] w-[600px] h-[600px] md:w-[1000px] md:h-[1000px] md:-translate-y-1/4 md:translate-x-1/4 pointer-events-none drop-shadow-2xl filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.6)] transition-all duration-500 hover:brightness-110">
        <PlanetSystem />
      </div>

      {/* 推荐卡片 - 桌面端 */}
      <div className="hidden md:block absolute bottom-40 md:bottom-20 left-1/2 md:left-20 -translate-x-1/2 md:translate-x-0 w-[90%] md:w-auto z-10 drop-shadow-2xl filter drop-shadow-[0_16px_32px_rgba(0,0,0,0.7)] transition-all duration-300 hover:brightness-105">
        <AnimatedTestimonials testimonials={testimonials} />
      </div>

      {/* 额外的光晕效果 */}
      <div 
        className="absolute top-4 left-4 w-96 h-96 pointer-events-none opacity-30"
        style={{
          background: 'radial-gradient(circle, rgba(255, 215, 0, 0.3) 0%, rgba(255, 255, 255, 0.1) 30%, transparent 70%)',
          filter: 'blur(20px)',
          animation: 'pulse 3s ease-in-out infinite'
        }}
      />

      {/* Matter.js 物理引擎将在这里渲染 - 位于最底层 */}
    </section>
  );
};

export default About;