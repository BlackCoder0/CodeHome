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

  useEffect(() => {
    if (!loading && !showMain) {
      const handleScroll = (e: WheelEvent | TouchEvent) => {
        let deltaY = 0;
        if (e.type === 'wheel') {
          deltaY = (e as WheelEvent).deltaY;
        } else if (e.type === 'touchmove' && (e as TouchEvent).touches.length > 0) {
          // 简单处理，取第一个触摸点的 Y 轴变化
          // 更完善的处理需要记录 touchstart 时的位置
          // 这里假设用户是单指向上滑动
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
          style={{ backgroundImage: 'url(/assets/bg_big2.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className="backdrop-blur-sm bg-black/40 w-full h-full absolute top-0 left-0 -z-10" />
          {introReady && (
            <>
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
                Codeの家  ciallo~
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
      <Navbar show={!loading && showMain && showContent} />
    </div>
  );
}
