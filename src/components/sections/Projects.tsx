// src/components/sections/Projects.tsx
import React from 'react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="min-h-screen py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">我的项目</h2>
        <p className="text-lg text-center">这里将展示我的项目列表...</p>
        {/* 在这里添加具体的项目内容 */}
      </div>
    </section>
  );
};

export default Projects;