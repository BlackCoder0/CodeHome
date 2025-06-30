"use client"

import { useEffect, useRef, useState } from "react";
import { TextAnimate } from "@/components/magicui/text-animate";
import LoadingCanvas from "@/components/LoadingCanvas";
import Projects from "@/components/sections/Projects";
import Hobbies from "@/components/sections/Hobbies";
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
      src: './assets/music/Pieces/Pieces-ClariS.mp3', // 请添加实际的音频文件
      author: 'ClariS',
      album: 'カラフル (アニメ盤)(Colorful)',
      img: './assets/music/covers/Pieces-ClariS.jpg' // 如果没有封面，将显示默认图标
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
          className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/80 
                      ${introReady && !showMain ? 'opacity-100' : 'opacity-0'} 
                      ${showMain ? 'pointer-events-none' : ''}
                      transition-opacity duration-700 ease-in-out`}
          style={{ backgroundImage: 'url(./assets/bg_big2.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className="backdrop-blur-sm bg-black/40 w-full h-full absolute top-0 left-0 -z-10" />
          {introReady && (
            <>
              {/* Logo Avatar with pulse effect and hover interaction */}
              <div className="mb-8 relative group">
                <div className="w-50 h-50 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl relative transform transition-all duration-300 group-hover:scale-110 group-hover:border-white/60">
                  <img 
                    src="./assets/logo/正方形.png" 
                    alt="Logo" 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
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
        <About />
        <Contact />
        {/* <Friends /> */}
      </div>
      <Navbar show={!loading && showMain && showContent} songs={sampleSongs} />
    </div>
  );
}
