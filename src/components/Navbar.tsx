import React from "react";
import { Dock, DockIcon } from "@/components/magicui/dock";
import {
  Folder,
  Paintbrush2,
  User,
  Mail,
  Handshake
} from "lucide-react";
import { useEffect, useState, useCallback, useRef } from "react";

const navLinks = [
  { label: "项目", href: "#projects", icon: Folder },
  { label: "爱好", href: "#hobbies", icon: Paintbrush2 },
  { label: "关于", href: "#about", icon: User },
  { label: "联系", href: "#contact", icon: Mail },
  { label: "友链", href: "#friends", icon: Handshake }
];

const Navbar: React.FC<{ show: boolean }> = ({ show }) => {
  const [current, setCurrent] = useState<string>(navLinks[0].href); // 默认高亮第一个
  const observer = useRef<IntersectionObserver | null>(null);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

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
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) { // 当区块一半以上可见时
            setCurrent(`#${entry.target.id}`);
            window.history.replaceState(null, "", `#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.5 } // 可见性阈值
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


  return (
    <div
      className={`fixed top-1/2 left-4 md:left-8 -translate-y-1/2 z-[100] transition-opacity duration-500 ${
        show ? "opacity-100" : "opacity-0 pointer-events-none"
      } group`}
    >
      <div className="bg-white/60 backdrop-blur-md shadow-lg rounded-2xl p-2 md:p-3">
        <Dock className="flex flex-col gap-4 md:gap-6 bg-transparent border-none p-0 h-auto w-auto group">
          {navLinks.map(link => {
            const Icon = link.icon;
            const isActive = current === link.href;
            return (
              <DockIcon key={link.href} className="bg-transparent">
                <a
                  href={link.href}
                  onClick={e => handleNavClick(e, link.href)}
                  className={`flex flex-col items-center transition-colors group/icon ${isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-600"}`}
                >
                  <span className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 mb-1 rounded-full transition-all duration-200 group-hover/icon:bg-gray-200/90">
                    <Icon className="w-6 h-6 md:w-8 md:h-8 group-hover:scale-110 transition-transform" />
                  </span>
                  <span
                    className="text-xs opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-300 pointer-events-none select-none"
                    style={{ transitionProperty: 'opacity, transform' }}
                  >
                    {link.label}
                  </span>
                </a>
              </DockIcon>
            );
          })}
        </Dock>
      </div>
    </div>
  );
};

export default Navbar;