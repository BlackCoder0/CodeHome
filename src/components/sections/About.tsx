'use client';
import React, { useEffect, useRef, useState } from 'react';

// 声明全局Window接口扩展
declare global {
  interface Window {
    matterCleanup?: () => void;
  }
}

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
    if (isVisible && !matterInitialized) {
      const matterScript = document.createElement('script');
      matterScript.src = '/matter/matter.min.js';
      matterScript.onload = () => {
        const exampleScript = document.createElement('script');
        exampleScript.src = '/matter/matter-example.js';
        document.head.appendChild(exampleScript);
        setMatterInitialized(true);
      };
      document.head.appendChild(matterScript);
    }
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
      className="relative py-16 bg-black min-h-[700px]" // 移除mt-20消除空白
    >
      {/* 内容层 - 位于物理引擎之上 */}
      <div className="relative z-20 container mx-auto px-4">
        <div className="text-center text-white">
          <h2 className="text-4xl font-bold mb-8">About Me</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            这里是关于我的介绍内容。背景中的物理引擎效果不会影响页面交互。
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors">
            了解更多
          </button>
        </div>
      </div>
      
      {/* Matter.js 物理引擎将在这里渲染 - 位于最底层 */}
    </section>
  );
};

export default About;