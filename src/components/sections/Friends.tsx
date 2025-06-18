// src/components/sections/Friends.tsx
import React from 'react';

const Friends: React.FC = () => {
  return (
    <section id="friends" className="min-h-screen py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">友情链接</h2>
        <p className="text-lg text-center">这里将展示友情链接...</p>
        {/* 在这里添加具体的友链内容 */}
      </div>
    </section>
  );
};

export default Friends;