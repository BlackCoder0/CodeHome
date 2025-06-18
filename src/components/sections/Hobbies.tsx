// src/components/sections/Hobbies.tsx
import React from 'react';

const Hobbies: React.FC = () => {
  return (
    <section id="hobbies" className="min-h-screen py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">我的爱好</h2>
        <p className="text-lg text-center">这里将展示我的爱好...</p>
        {/* 在这里添加具体的爱好内容 */}
      </div>
    </section>
  );
};

export default Hobbies;