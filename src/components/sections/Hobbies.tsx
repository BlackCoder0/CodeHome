// src/components/sections/Hobbies.tsx
import React, { useEffect, useRef } from 'react';
import { initPixelScene } from '@/lib/three-examples/webgl_postprocessing_pixel';

const Hobbies: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;
    const cleanup = initPixelScene(mountRef.current);
    return () => cleanup && cleanup();
  }, []);

  return (
    <section id="hobbies" className="min-h-screen py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* 3D组件 - 左侧 */}
          <div className="w-full lg:w-1/2">
            <div
              ref={mountRef}
              className="w-full h-[600px] rounded-lg overflow-hidden"
              style={{ background: 'transparent' }}
            />
          </div>
          
          {/* 文本内容 - 右侧 */}
          <div className="w-full lg:w-1/2 space-y-6">
            <h2 className="text-4xl font-bold text-gray-800">我的爱好</h2>
            <div className="space-y-4">
              <p className="text-lg text-gray-600 leading-relaxed">
                欢迎来到我的创意世界！这里展示了我对 3D 图形和视觉效果的热情。
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                通过 Three.js 和像素化后处理技术，我创造了这个独特的视觉体验。
                左侧的 3D 场景包含了动态光照、阴影效果和流畅的动画。
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                我热衷于探索前端技术的边界，将艺术与代码完美结合，
                创造出既美观又具有交互性的用户体验。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
