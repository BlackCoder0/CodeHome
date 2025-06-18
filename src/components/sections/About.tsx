// src/components/sections/About.tsx
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="min-h-screen py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">关于我</h2>
        <p className="text-lg text-center">这里将展示关于我的介绍...</p>
        {/* 在这里添加具体的介绍内容 */}
      </div>
    </section>
  );
};

export default About;