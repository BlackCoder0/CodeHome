// src/components/sections/Contact.tsx
import React from 'react';
import { OrbitingCircles } from "@/components/magicui/orbiting-circles";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="min-h-screen py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">联系方式</h2>
        <p className="text-lg text-center">这里将展示我的联系方式...</p>
        {/* 在这里添加具体的联系方式 */}
      </div>
    </section>
  );
};

export default Contact;