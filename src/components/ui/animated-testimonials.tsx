"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";

import { useEffect, useState } from "react";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};

type TextPart = {
  type: 'text';
  content: string;
};

type LinkPart = {
  type: 'link';
  text: string;
  url: string;
};

type ParsedPart = TextPart | LinkPart;
export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const [rotations, setRotations] = useState<number[]>([]);

  useEffect(() => {
    const randomRotations = testimonials.map(() => Math.floor(Math.random() * 21) - 10);
    setRotations(randomRotations);
  }, [testimonials]);
  return (
    <div className="mx-auto max-w-md px-4 py-20 font-sans antialiased md:max-w-6xl md:px-8 lg:px-12">
      {/* 移动端布局 */}
      <div className="block md:hidden">
        {/* 图片区域 */}
        <div className="relative h-[400px] w-80 mx-auto mb-6">
          <AnimatePresence>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.src}
                initial={{
                  opacity: 0,
                  scale: 0.9,
                  z: -100,
                  rotate: rotations[index] || 0,
                }}
                animate={{
                  opacity: isActive(index) ? 1 : 0.7,
                  scale: isActive(index) ? 1 : 0.95,
                  z: isActive(index) ? 0 : -100,
                  rotate: isActive(index) ? 0 : rotations[index] || 0,
                  zIndex: isActive(index)
                    ? 40
                    : testimonials.length + 2 - index,
                  y: isActive(index) ? [0, -80, 0] : 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.9,
                  z: 100,
                  rotate: rotations[index] || 0,
                }}
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 origin-bottom"
              >
                <img
                  src={testimonial.src}
                  alt={testimonial.name}
                  width={500}
                  height={500}
                  draggable={false}
                  className="h-full w-full rounded-3xl object-cover object-center"
                />
                {/* 添加半透明灰色蒙版 */}
                <div className="absolute inset-0 bg-gray-800 opacity-8 rounded-3xl"></div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        {/* 切换箭头 */}
        <div className="flex gap-4 justify-center mb-6">
          <button
            onClick={handlePrev}
            className="group/button flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
          >
            <IconArrowLeft className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:rotate-12 dark:text-neutral-400" />
          </button>
          <button
            onClick={handleNext}
            className="group/button flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
          >
            <IconArrowRight className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:-rotate-12 dark:text-neutral-400" />
          </button>
        </div>
        
        {/* 文字内容 */}
        <motion.div
          key={active}
          initial={{
            y: 20,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          exit={{
            y: -20,
            opacity: 0,
          }}
          transition={{
            duration: 0.2,
            ease: "easeInOut",
          }}
          className="text-center px-4"
        >
          <h3 className="text-xl font-bold text-white dark:text-white mb-2">
            {testimonials[active].name}
          </h3>
          <p className="text-sm text-gray-400 dark:text-neutral-500 mb-4">
            {testimonials[active].designation}
          </p>
          <motion.p className="text-base text-gray-400 dark:text-neutral-300">
  {testimonials[active].quote.split('\n').map((line, lineIndex) => {
    // 解析链接格式 [文本](URL)
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const parts: ParsedPart[] = [];
    let lastIndex = 0;
    let match;
    
    while ((match = linkRegex.exec(line)) !== null) {
      // 添加链接前的文本
      if (match.index > lastIndex) {
        parts.push({ type: 'text', content: line.slice(lastIndex, match.index) });
      }
      // 添加链接
      parts.push({ type: 'link', text: match[1], url: match[2] });
      lastIndex = match.index + match[0].length;
    }
    
    // 添加剩余文本
    if (lastIndex < line.length) {
      parts.push({ type: 'text', content: line.slice(lastIndex) });
    }
    
    // 如果没有链接，直接处理为文本
    if (parts.length === 0) {
      parts.push({ type: 'text', content: line });
    }
    
    let wordIndex = 0;
    
    return (
      <span key={lineIndex}>
        {parts.map((part, partIndex) => {
          if (part.type === 'link') {
            const currentWordIndex = wordIndex++;
            return (
              <motion.a
                key={`${lineIndex}-${partIndex}`}
                href={part.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{
                  filter: "blur(10px)",
                  opacity: 0,
                  y: 5,
                }}
                animate={{
                  filter: "blur(0px)",
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.2,
                  ease: "easeInOut",
                  delay: 0.02 * (lineIndex * 10 + currentWordIndex),
                }}
                className="inline-block text-blue-400 hover:text-blue-300 underline transition-colors"
              >
                {part.text}
              </motion.a>
            );
          } else {
            return (part as TextPart).content.split(" ").map((word, wordIdx) => {
              if (word === '') return null;
              const currentWordIndex = wordIndex++;
              return (
                <motion.span
                  key={`${lineIndex}-${partIndex}-${wordIdx}`}
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * (lineIndex * 10 + currentWordIndex),
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              );
            });
          }
        })}
        {lineIndex < testimonials[active].quote.split('\n').length - 1 && <br />}
      </span>
    );
  })}
</motion.p>
        </motion.div>
      </div>
      
      {/* 桌面端布局 */}
      <div className="hidden md:block">
        <div className="relative grid grid-cols-1 gap-24 md:grid-cols-2">
          <div>
            <div className="relative h-[500px] w-80 mx-auto">
              <AnimatePresence>
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.src}
                    initial={{
                      opacity: 0,
                      scale: 0.9,
                      z: -100,
                      rotate: rotations[index] || 0,
                    }}
                    animate={{
                      opacity: isActive(index) ? 1 : 0.7,
                      scale: isActive(index) ? 1 : 0.95,
                      z: isActive(index) ? 0 : -100,
                      rotate: isActive(index) ? 0 : rotations[index] || 0,
                      zIndex: isActive(index)
                        ? 40
                        : testimonials.length + 2 - index,
                      y: isActive(index) ? [0, -80, 0] : 0,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.9,
                      z: 100,
                      rotate: rotations[index] || 0,
                    }}
                    transition={{
                      duration: 0.4,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 origin-bottom"
                  >
                    <img
                      src={testimonial.src}
                      alt={testimonial.name}
                      width={500}
                      height={500}
                      draggable={false}
                      className="h-full w-full rounded-3xl object-cover object-center"
                    />
                    {/* 添加半透明灰色蒙版 */}
                    <div className="absolute inset-0 bg-gray-800 opacity-8 rounded-3xl"></div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
          <div className="flex flex-col justify-between py-4">
            <motion.div
              key={active}
              initial={{
                y: 20,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              exit={{
                y: -20,
                opacity: 0,
              }}
              transition={{
                duration: 0.2,
                ease: "easeInOut",
              }}
            >
              <h3 className="text-2xl font-bold text-gray-500 dark:text-white">
                {testimonials[active].name}
              </h3>
              <p className="text-m text-gray-400 dark:text-neutral-500">
                {testimonials[active].designation}
              </p>
              <motion.p className="mt-8 text-lg text-gray-400 dark:text-neutral-300">
                {testimonials[active].quote.split('\n').map((line, lineIndex) => {
                  // 解析链接格式 [文本](URL)
                  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
                  const parts: ParsedPart[] = [];
                  let lastIndex = 0;
                  let match;
                  
                  while ((match = linkRegex.exec(line)) !== null) {
                    // 添加链接前的文本
                    if (match.index > lastIndex) {
                      parts.push({ type: 'text', content: line.slice(lastIndex, match.index) });
                    }
                    // 添加链接
                    parts.push({ type: 'link', text: match[1], url: match[2] });
                    lastIndex = match.index + match[0].length;
                  }
                  
                  // 添加剩余文本
                  if (lastIndex < line.length) {
                    parts.push({ type: 'text', content: line.slice(lastIndex) });
                  }
                  
                  // 如果没有链接，直接处理为文本
                  if (parts.length === 0) {
                    parts.push({ type: 'text', content: line });
                  }
                  
                  let wordIndex = 0;
                  
                  return (
                    <span key={lineIndex}>
                      {parts.map((part, partIndex) => {
                        if (part.type === 'link') {
                          const currentWordIndex = wordIndex++;
                          return (
                            <motion.a
                              key={`${lineIndex}-${partIndex}`}
                              href={part.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              initial={{
                                filter: "blur(10px)",
                                opacity: 0,
                                y: 5,
                              }}
                              animate={{
                                filter: "blur(0px)",
                                opacity: 1,
                                y: 0,
                              }}
                              transition={{
                                duration: 0.2,
                                ease: "easeInOut",
                                delay: 0.02 * (lineIndex * 10 + currentWordIndex),
                              }}
                              className="inline-block text-blue-400 hover:text-blue-300 underline transition-colors"
                            >
                              {part.text}
                            </motion.a>
                          );
                        } else {
                          return (part as TextPart).content.split(" ").map((word, wordIdx) => {
                            if (word === '') return null;
                            const currentWordIndex = wordIndex++;
                            return (
                              <motion.span
                                key={`${lineIndex}-${partIndex}-${wordIdx}`}
                                initial={{
                                  filter: "blur(10px)",
                                  opacity: 0,
                                  y: 5,
                                }}
                                animate={{
                                  filter: "blur(0px)",
                                  opacity: 1,
                                  y: 0,
                                }}
                                transition={{
                                  duration: 0.2,
                                  ease: "easeInOut",
                                  delay: 0.02 * (lineIndex * 10 + currentWordIndex),
                                }}
                                className="inline-block"
                              >
                                {word}&nbsp;
                              </motion.span>
                            );
                          });
                        }
                      })}
                      {lineIndex < testimonials[active].quote.split('\n').length - 1 && <br />}
                    </span>
                  );
                })}
              </motion.p>
            </motion.div>
            <div className="flex gap-4 pt-12 justify-start">
              <button
                onClick={handlePrev}
                className="group/button flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
              >
                <IconArrowLeft className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:rotate-12 dark:text-neutral-400" />
              </button>
              <button
                onClick={handleNext}
                className="group/button flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
              >
                <IconArrowRight className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:-rotate-12 dark:text-neutral-400" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
