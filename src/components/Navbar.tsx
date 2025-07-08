import React from "react";
import { Dock, DockIcon } from "@/components/magicui/dock";
import {
  Folder,
  Paintbrush2,
  Monitor,
  User,
  Handshake
} from "lucide-react";
import { useEffect, useState, useCallback, useRef } from "react";
import MusicControl from "@/components/MusicControl";
import { useMotionValue } from "motion/react";

const navLinks = [
  { label: "项目", href: "#projects", icon: Folder },
  { label: "爱好", href: "#hobbies", icon: Paintbrush2 },
  { label: "追番", href: "#bangumi", icon: Monitor },
  { label: "关于", href: "#about", icon: User },
  // { label: "联系", href: "#contact", icon: Mail },
  //{ label: "友链", href: "#friends", icon: Handshake }
  { label: "友链", href: "#contact", icon: Handshake }
];

interface Song {
  id: string;
  name: string;
  src: string;
  author?: string;
  album?: string;
  img?: string;
}

const Navbar: React.FC<{ show: boolean; songs?: Song[] }> = ({ show, songs = [] }) => {
  const [current, setCurrent] = useState<string>(navLinks[0].href); // 默认高亮第一个
  const [iconColors, setIconColors] = useState<Record<string, 'light' | 'dark'>>({});
  const observer = useRef<IntersectionObserver | null>(null);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const iconRefs = useRef<Record<string, HTMLElement | null>>({});
  const dockMouseX = useMotionValue(Infinity);

  // 检测背景颜色亮度
  const getBackgroundBrightness = useCallback((element: HTMLElement): number => {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // 获取图标位置下的背景颜色
    const elementsAtPoint = document.elementsFromPoint(centerX, centerY);
    
    for (const el of elementsAtPoint) {
      if (el === element || el.contains(element)) continue;
      
      const styles = window.getComputedStyle(el as Element);
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
  }, []);

  // 更新图标颜色
  const updateIconColors = useCallback(() => {
    const newColors: Record<string, 'light' | 'dark'> = {};
    
    navLinks.forEach(link => {
      const iconElement = iconRefs.current[link.href];
      if (iconElement) {
        const brightness = getBackgroundBrightness(iconElement);
        // 如果背景亮度大于0.5，使用深色图标；否则使用浅色图标
        newColors[link.href] = brightness > 0.5 ? 'dark' : 'light';
      }
    });
    
    setIconColors(newColors);
  }, [getBackgroundBrightness]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", href);
      setCurrent(href);
    }
  };

  useEffect(() => {
    // 初始化 IntersectionObserver
    // 优化配置以改善About页面识别
    observer.current = new IntersectionObserver(
      (entries) => {
        // 找到可见度最高的section
        const visibleEntries = entries.filter(entry => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          // 按照可见度排序，选择可见度最高的
          const mostVisibleEntry = visibleEntries.reduce((prev, current) => {
            return prev.intersectionRatio > current.intersectionRatio ? prev : current;
          });
          setCurrent(`#${mostVisibleEntry.target.id}`);
          window.history.replaceState(null, "", `#${mostVisibleEntry.target.id}`);
        }
      },
      { 
        threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9], // 更多阈值以提高精度
        rootMargin: '-20% 0px -20% 0px' // 调整为中间60%区域
      }
    );

    // 观察所有导航链接对应的区块
    navLinks.forEach(link => {
      const section = document.querySelector(link.href) as HTMLElement;
      if (section) {
        sectionRefs.current[link.href] = section;
        observer.current?.observe(section);
      }
    });

    // 清理
    return () => {
      navLinks.forEach(link => {
        if (sectionRefs.current[link.href]) {
          observer.current?.unobserve(sectionRefs.current[link.href]!);
        }
      });
      observer.current?.disconnect();
    };
  }, []);

  // 处理初始加载和手动 URL hash 更改
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash) {
        setCurrent(window.location.hash);
      } else {
        // 如果没有 hash，并且第一个 section 可见，则高亮第一个
        const firstSection = sectionRefs.current[navLinks[0].href];
        if (firstSection && observer.current) {
            const isVisible = observer.current.takeRecords().some(record => record.target === firstSection && record.isIntersecting);
            if(isVisible) setCurrent(navLinks[0].href);
        }
      }
    };
    handleHashChange(); // 初始加载
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // 监听滚动和窗口大小变化，更新图标颜色
  useEffect(() => {
    const handleUpdate = () => {
      // 延迟执行以确保DOM更新完成
      setTimeout(updateIconColors, 100);
    };

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
      attributeFilter: ['style', 'class']
    });

    return () => {
      window.removeEventListener('scroll', handleUpdate);
      window.removeEventListener('resize', handleUpdate);
      mutationObserver.disconnect();
    };
  }, [updateIconColors]);



  return (
    <div
      className={`fixed top-1/2 left-4 md:left-8 -translate-y-1/2 z-[100] transition-opacity duration-500 ${
        show ? "opacity-100" : "opacity-0 pointer-events-none"
      } group`}
    >
      <div className="bg-white/0 backdrop-blur-md shadow-lg rounded-2xl p-2 md:p-3">
      <Dock mouseX={dockMouseX} direction="bottom" className="flex flex-col gap-5 md:gap-6 !bg-transparent border-none p-0 !h-auto !w-auto group !mt-0">
          {navLinks.map(link => {
            const Icon = link.icon;
            const isActive = current === link.href;
            const iconColor = iconColors[link.href] || 'dark';
            
            // 根据背景颜色和激活状态确定图标颜色
            const getIconColorClass = () => {
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
            
            return (
              <DockIcon key={link.href} className="bg-transparent">
                <div className="flex aspect-square cursor-pointer items-center justify-center rounded-full bg-transparent" style={{ padding: '8px', width: '40px', height: '40px' }}>
                  <a
                    ref={el => { iconRefs.current[link.href] = el; }}
                    href={link.href}
                    onClick={e => handleNavClick(e, link.href)}
                    className={`flex flex-col items-center transition-colors group/icon ${getIconColorClass()}`}
                  >
                    <span className="flex items-center justify-center w-12 h-12 md:w-12 md:h-12 mb-1 rounded-full transition-all duration-200 group-hover/icon:bg-gray-200/20">
                      <Icon className="w-8 h-8 md:w-8 md:h-8 group-hover:scale-110 transition-transform" />
                    </span>
                    <span
                      className="text-xs opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-300 pointer-events-none select-none"
                      style={{ transitionProperty: 'opacity, transform' }}
                    >
                      {link.label}
                    </span>
                  </a>
                </div>
              </DockIcon>
            );
          })}
          
          {/* 音乐控制组件 */}
          {songs.length > 0 && (
            <DockIcon className="bg-transparent">
              <div className="flex aspect-square cursor-pointer items-center justify-center rounded-full bg-transparent" style={{ padding: '8px', width: '40px', height: '40px' }}>
                <div className="flex flex-col items-center group/music">
                  <span className="flex items-center justify-center mb-1 rounded-full transition-all duration-200 group-hover/music:bg-gray-200/20 p-0">
                    <MusicControl 
                      songs={songs} 
                      className="group-hover/music:scale-110 transition-transform" 
                    />
                  </span>
                  <span
                      className="text-xs text-white opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-300 pointer-events-none select-none"
                      style={{ transitionProperty: 'opacity, transform' }}
                  >
                    Pieces
                  </span>
                </div>
              </div>
            </DockIcon>
          )}
        </Dock>
      </div>
    </div>
  );
};

export default Navbar;