"use client"

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { TextAnimate } from "@/components/magicui/text-animate";
import LoadingCanvas from "@/components/LoadingCanvas";
import Projects from "@/components/sections/Projects";
import Hobbies from "@/components/sections/Hobbies";
import Bangumi from "@/components/sections/Bangumi";
import Contact from "@/components/sections/Contact";
import About from "@/components/sections/About";
// import Friends from "@/components/sections/Friends";
import Navbar from "@/components/Navbar";


export default function Home() {
  const [showMain, setShowMain] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [introReady, setIntroReady] = useState(false); // New state for intro screen fade-in
  const introRef = useRef<HTMLDivElement>(null);

  // 示例音乐数据 - 请替换为你的实际音频文件
  const sampleSongs = [
    {
      id: '1',
      name: 'Pieces',
      src: '/assets/music/Pieces/Pieces-ClariS.mp3', // 请添加实际的音频文件
      author: 'ClariS',
      album: 'カラフル (アニメ盤)(Colorful)',
      img: '/assets/music/covers/Pieces-ClariS.jpg' // 如果没有封面，将显示默认图标
    },
  ];

  useEffect(() => {
    if (!loading && !showMain) {
      const handleScroll = (e: WheelEvent | TouchEvent) => {
        let deltaY = 0;
        if (e.type === 'wheel') {
          deltaY = (e as WheelEvent).deltaY;
        } else if (e.type === 'touchmove' && (e as TouchEvent).touches.length > 0) {

          if (introRef.current && introRef.current.dataset.startY) {
            deltaY = parseFloat(introRef.current.dataset.startY) - (e as TouchEvent).touches[0].clientY;
          }
        }

        if (deltaY > 0) {
          setShowMain(true);
          setTimeout(() => {
            const projectsSection = document.getElementById("projects");
            if (projectsSection) {
              projectsSection.scrollIntoView({ behavior: "smooth" });
            }
          }, 100); // 等待内容渲染后再滚动
        }
      };

      const handleTouchStart = (e: TouchEvent) => {
        if (introRef.current && e.touches.length > 0) {
          introRef.current.dataset.startY = e.touches[0].clientY.toString();
        }
      };

      window.addEventListener("wheel", handleScroll as EventListener, { passive: false });
      window.addEventListener("touchstart", handleTouchStart, { passive: true });
      window.addEventListener("touchmove", handleScroll as EventListener, { passive: false });

      return () => {
        window.removeEventListener("wheel", handleScroll as EventListener);
        window.removeEventListener("touchstart", handleTouchStart);
        window.removeEventListener("touchmove", handleScroll as EventListener);
        if (introRef.current) {
          delete introRef.current.dataset.startY;
        }
      };
    }
  }, [loading, showMain]);

  return (
    <div>
      {loading && <LoadingCanvas onFinish={() => {
        setLoading(false);
        setIntroReady(true); // Trigger intro screen fade-in
        setTimeout(() => setShowContent(true), 400); 
      }} />}
      
      {/* Intro Screen - modified for fade-in and fade-out */}
      {!loading && (
        <div
          ref={introRef}
          className={`fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden
                      ${introReady && !showMain ? 'opacity-100' : 'opacity-0'} 
                      ${showMain ? 'pointer-events-none' : ''}
                      transition-opacity duration-700 ease-in-out`}
          style={{
            background:
              'linear-gradient(180deg, #325d78 0%, #1c3f61 18%, #10233f 52%, #050c17 100%)'
          }}
        >
          <div
            className="absolute inset-0 -z-10"
            style={{
              background:
                'radial-gradient(ellipse at 50% -8%, rgba(186, 230, 253, 0.36), transparent 26%), radial-gradient(circle at 18% 20%, rgba(103, 232, 249, 0.18), transparent 24%), radial-gradient(circle at 82% 16%, rgba(125, 211, 252, 0.14), transparent 22%), radial-gradient(circle at 50% 76%, rgba(59, 130, 246, 0.16), transparent 34%)'
            }}
          />
          <div
            className="absolute inset-0 -z-10 opacity-20"
            style={{
              backgroundImage:
                'linear-gradient(rgba(186, 230, 253, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(186, 230, 253, 0.07) 1px, transparent 1px)',
              backgroundSize: '46px 46px',
              maskImage: 'linear-gradient(180deg, rgba(0,0,0,0.75), rgba(0,0,0,0.14))'
            }}
          />
          <div
            className="absolute inset-0 -z-10 opacity-45"
            style={{
              backgroundImage:
                'linear-gradient(102deg, transparent 0%, transparent 28%, rgba(186,230,253,0.18) 38%, transparent 48%, transparent 100%), linear-gradient(78deg, transparent 0%, transparent 18%, rgba(125,211,252,0.14) 29%, transparent 40%, transparent 100%), linear-gradient(92deg, transparent 0%, transparent 58%, rgba(147,197,253,0.12) 68%, transparent 78%, transparent 100%)',
              filter: 'blur(10px)',
              maskImage: 'linear-gradient(180deg, rgba(0,0,0,0.95), rgba(0,0,0,0.18))'
            }}
          />
          <div
            className="absolute inset-x-0 top-0 -z-10 h-28 opacity-80"
            style={{
              background:
                'linear-gradient(180deg, rgba(240, 249, 255, 0.34), rgba(186,230,253,0.12) 36%, transparent 100%)',
              filter: 'blur(10px)'
            }}
          />
          <div
            className="absolute inset-x-0 top-0 -z-10 h-36 opacity-45"
            style={{
              backgroundImage:
                'repeating-linear-gradient(96deg, transparent 0 32px, rgba(255,255,255,0.2) 32px 42px, transparent 42px 92px), repeating-linear-gradient(84deg, transparent 0 28px, rgba(186,230,253,0.16) 28px 38px, transparent 38px 84px)',
              filter: 'blur(14px)',
              maskImage: 'linear-gradient(180deg, rgba(0,0,0,0.95), rgba(0,0,0,0.08))'
            }}
          />
          <div
            className="absolute inset-0 -z-10 opacity-30"
            style={{
              backgroundImage:
                'radial-gradient(circle at 18% 36%, rgba(255,255,255,0.16) 0 2px, transparent 2.6px), radial-gradient(circle at 31% 62%, rgba(186,230,253,0.14) 0 1.8px, transparent 2.4px), radial-gradient(circle at 48% 24%, rgba(255,255,255,0.14) 0 2px, transparent 2.8px), radial-gradient(circle at 67% 56%, rgba(191,219,254,0.14) 0 1.8px, transparent 2.5px), radial-gradient(circle at 82% 28%, rgba(255,255,255,0.14) 0 2px, transparent 2.6px), radial-gradient(circle at 76% 74%, rgba(165,243,252,0.12) 0 1.6px, transparent 2.4px), radial-gradient(circle at 24% 78%, rgba(186,230,253,0.12) 0 1.7px, transparent 2.4px)'
            }}
          />
          <div className="absolute -left-24 top-6 -z-10 h-80 w-80 rounded-full bg-cyan-300/10 blur-3xl animate-pulse" />
          <div className="absolute right-[-4rem] top-10 -z-10 h-96 w-96 rounded-full bg-sky-300/10 blur-3xl animate-pulse [animation-delay:1200ms]" />
          <div className="absolute bottom-0 left-1/2 -z-10 h-[28rem] w-[32rem] -translate-x-1/2 rounded-full bg-blue-500/8 blur-3xl animate-pulse [animation-delay:2200ms]" />
          <div
            className="absolute inset-0 -z-10 opacity-55"
            style={{
              backgroundImage:
                'radial-gradient(circle at 12% 20%, rgba(255,255,255,0.88) 0 1px, transparent 1.8px), radial-gradient(circle at 22% 30%, rgba(191,219,254,0.78) 0 1px, transparent 1.9px), radial-gradient(circle at 35% 15%, rgba(255,255,255,0.72) 0 1px, transparent 1.8px), radial-gradient(circle at 46% 22%, rgba(186,230,253,0.72) 0 1px, transparent 1.9px), radial-gradient(circle at 58% 12%, rgba(255,255,255,0.84) 0 1px, transparent 1.8px), radial-gradient(circle at 68% 26%, rgba(191,219,254,0.74) 0 1px, transparent 1.9px), radial-gradient(circle at 82% 18%, rgba(255,255,255,0.8) 0 1px, transparent 2px), radial-gradient(circle at 74% 34%, rgba(165,243,252,0.64) 0 1px, transparent 1.9px)'
            }}
          />
          <div className="backdrop-blur-[2px] bg-[linear-gradient(180deg,rgba(4,10,24,0.06),rgba(2,6,23,0.32))] w-full h-full absolute top-0 left-0 -z-10" />
          {introReady && (
            <>
              {/* Logo Avatar with pulse effect and hover interaction */}
              <div className="mb-8 relative group">
                <div className="w-50 h-50 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl relative transform transition-all duration-300 group-hover:scale-110 group-hover:border-white/60">
                  <Image
                    src="/assets/logo/正方形.webp"
                    alt="Logo"
                    fill
                    sizes="(max-width: 768px) 160px, 200px"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    priority={false}
                  />
                  {/* Pulse effect overlay */}
                  <div className="absolute inset-0 rounded-full bg-white/20 animate-ping opacity-75"></div>
                  <div className="absolute inset-0 rounded-full bg-white/10 animate-pulse"></div>
                </div>
                {/* Outer pulse ring */}
                <div className="absolute inset-0 rounded-full border-2 border-white/20 animate-ping scale-110"></div>
              </div>
              
              <TextAnimate
                animation="slideUp"
                by="character"
                as="h1"
                startOnView={false}
                className="text-7xl font-bold text-white mb-4 text-center"
              >
                晓   雨
              </TextAnimate>
              <TextAnimate
                animation="slideUp"
                by="line"
                as="p"
                delay={0.5}
                startOnView={false}
                className="text-3xl text-white text-center max-w-2xl mb-8"
              >
                CodeRains
              </TextAnimate>
            </>
          )}
          <div className="absolute bottom-10 flex flex-col items-center animate-bounce">
            <svg width="26" height="26" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
            <span className="text-white mt-2">下滑进入</span>
          </div>
        </div>
      )}
      <div className={`
        ${!loading && showMain && showContent ? "opacity-100" : "opacity-0 pointer-events-none h-0 overflow-hidden"}
        transition-opacity duration-700 ease-in-out 
      `}>
        <Projects />
        <Hobbies />
        <Bangumi />
        <About />
        <Contact />
        {/* <Friends /> */}
      </div>
      <Navbar show={!loading && showMain && showContent} songs={sampleSongs} />
    </div>
  );
}
