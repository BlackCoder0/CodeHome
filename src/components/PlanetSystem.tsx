'use client';
import React, { useEffect, useState } from 'react';
import { FaGithub, FaEnvelope, FaSteam } from 'react-icons/fa';
import { RiLinksLine } from 'react-icons/ri';

const ringData = [
  {
    radius: 150,
    icons: [
      { icon: <FaGithub />, link: 'https://github.com/' },
      {
        icon: (
          <img
            src="/assets/gitee.svg"
            alt="Gitee"
            style={{ width: 36, height: 36 }}
          />
        ),
        link: 'https://gitee.com/',
      },
    ],
  },
  {
    radius: 250,
    icons: [
      {
        icon: (
          <img
            src="/assets/bilibili.svg"
            alt="Bilibili"
            style={{ width: 36, height: 36 }}
          />
        ),
        link: 'https://bilibili.com/',
      },
      { icon: <FaEnvelope />, link: 'mailto:your@email.com' },
      {
        icon: (
          <img
            src="/assets/lofter.svg"
            alt="Lofter"
            style={{ width: 36, height: 36 }}
          />
        ),
        link: 'https://www.lofter.com/',
      },
    ],
  },
  {
    radius: 350,
    icons: [
      { icon: <RiLinksLine />, link: 'https://yourfriendlink.com/' },
      { icon: <FaSteam />, link: 'https://store.steampowered.com/' },
    ],
  },
];

const PlanetSystem = () => {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

  return (
    <div className="relative w-full h-full">
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
              const animationDuration = `${15 + ringIndex * 8}s`;
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
                    target="_blank"
                    rel="noopener noreferrer"
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
                  >
                    {item.icon}
                  </a>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default PlanetSystem;
