'use client';
import React, { useState } from 'react';
import { FaGithub, FaEnvelope, FaSteam } from 'react-icons/fa';
import { RiLinksLine } from 'react-icons/ri';

const ringData = [
  {
    radius: 150,
    icons: [
      { icon: <FaGithub />, link: 'https://github.com/BlackCoder0' },
      {
        icon: (
          <img
            src="./assets/gitee.svg"
            alt="Gitee"
            style={{ width: 36, height: 36 }}
          />
        ),
        link: 'https://gitee.com/code-liang',
      },
    ],
  },
  {
    radius: 250,
    icons: [
      {
        icon: (
          <img
            src="./assets/bilibili.svg"
            alt="Bilibili"
            style={{ width: 36, height: 36 }}
          />
        ),
        link: 'https://space.bilibili.com/335768850',
      },
      { icon: <FaEnvelope />, link: 'copy:2943984952@qq.com' },
      {
        icon: (
          <img
            src="./assets/lofter.svg"
            alt="Lofter"
            style={{ width: 36, height: 36 }}
          />
        ),
        link: 'https://xinjinjumin4775442.lofter.com',
      },
    ],
  },
  {
    radius: 350,
    icons: [
      { icon: <RiLinksLine />, link: '#contact' },
      { icon: <FaSteam />, link: 'https://steamcommunity.com/profiles/76561199350235965/' },
    ],
  },
];

const PlanetSystem = () => {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);
  const [showToast, setShowToast] = useState(false);

  return (
    <div className="relative w-full h-full pointer-events-none z-10">
      {ringData.map((ring, ringIndex) => {
        const iconCount = ring.icons.length;

        return (
          <div key={ringIndex}>
            {/* 轨道线 */}
            <div
              className="absolute inset-0 border-2 border-white/30 rounded-full"
              style={{
                width: `${ring.radius * 2}px`,
                height: `${ring.radius * 2}px`,
                top: `calc(50% - ${ring.radius}px)`,
                left: `calc(50% - ${ring.radius}px)`,
                pointerEvents: 'none',
              }}
            />
            
            {/* 图标轨道容器 */}
            {ring.icons.map((item, iconIndex) => {
              const angle = (360 / iconCount) * iconIndex;
              const animationDuration = `${15 + ringIndex * 5}s`;
              const iconId = `${ringIndex}-${iconIndex}`;
              const isHovered = hoveredIcon === iconId;

              return (
                <div
                  key={iconId}
                  className="absolute"
                  style={{
                    left: '50%',
                    top: '50%',
                    width: `${ring.radius * 2}px`,
                    height: `${ring.radius * 2}px`,
                    marginLeft: `-${ring.radius}px`,
                    marginTop: `-${ring.radius}px`,
                    animation: `rotateRing ${animationDuration} linear infinite`,
                    animationPlayState: isHovered ? 'paused' : 'running',
                    transform: `rotate(${angle}deg)`,
                    animationDelay: `-${(angle / 360) * parseFloat(animationDuration)}s`,
                  }}
                >
                  <a
                    href={item.link}
                    target={item.link.startsWith('#') ? '_self' : '_blank'}
                    rel={item.link.startsWith('#') ? undefined : 'noopener noreferrer'}
                    className="absolute text-white text-3xl flex items-center justify-center"
                    style={{
                      left: `${ring.radius - 20}px`,
                      top: '-20px',
                      width: '40px',
                      height: '40px',
                      transform: `rotate(-${angle}deg) ${isHovered ? 'scale(1.3)' : 'scale(1)'}`,
                      transition: 'transform 0.2s',
                      pointerEvents: 'auto',
                    }}
                    onMouseEnter={() => setHoveredIcon(iconId)}
                    onMouseLeave={() => setHoveredIcon(null)}
                    onClick={(e) => {
                      if (item.link.startsWith('#')) {
                        e.preventDefault();
                        const target = document.querySelector(item.link);
                        if (target) {
                          target.scrollIntoView({ behavior: 'smooth' });
                        }
                      } else if (item.link.startsWith('copy:')) {
                        e.preventDefault();
                        const email = item.link.replace('copy:', '');
                        navigator.clipboard.writeText(email).then(() => {
                          setShowToast(true);
                          setTimeout(() => setShowToast(false), 2000);
                        });
                      }
                    }}
                  >
                    {item.icon}
                  </a>
                </div>
              );
            })}
          </div>
        );
      })}
      
      {/* 复制成功提示弹窗 */}
      {showToast && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-500 text-white px-2 py-1 rounded text-xs shadow-lg z-50 animate-fade-in pointer-events-none">
          已复制
        </div>
      )}
    </div>
  );
};

export default PlanetSystem;
