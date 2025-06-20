import React, { useRef, useEffect, useState } from 'react';
import { webglPostprocessing } from '@/lib/three-examples/webgl_postprocessing_pixel';
import { Particles } from "@/components/magicui/Fparticles";
import { articles, getArticlesByCategory, categories, Article } from '@/lib/articles';
import ArticleCard from '@/components/ArticleCard';
import ArticleModal from '@/components/ArticleModal';

const Hobbies: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState<Article['category']>('game');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (!mountRef.current) return;
    const cleanup = webglPostprocessing(mountRef.current);
    return () => cleanup?.();
  }, []);

  const handleArticleClick = (article: Article) => {
    setSelectedArticle(article);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedArticle(null);
  };

  const filteredArticles = getArticlesByCategory(activeCategory);

  return (
    <section id="hobbies" className="relative h-screen py-8 bg-gradient-to-b from-[#2e3346] to-black overflow-hidden">
      <Particles
        className="absolute inset-0 z-0"
        quantity={300}
        ease={80}
        size={1.5}
        staticity={15}
        color={"#ffffff"}
        vy={10}
      />
      <div className="relative container mx-auto px-4 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full items-stretch">
          {/* 左侧 - 3D模型区域 */}
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-full h-full max-h-[calc(100vh-8rem)] rounded-lg overflow-hidden border border-white/10 shadow-lg relative z-10">
              <div ref={mountRef} className="w-full h-full" style={{ background: 'transparent' }} />
            </div>
          </div>
          
          {/* 右侧 - 文章区域 */}
          <div className="w-full h-full flex flex-col">
            <div className="h-full bg-black/40 backdrop-blur-sm border-2 border-white/20 shadow-2xl relative z-10 flex flex-col"
                 style={{
                   clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))',
                   background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)'
                 }}>
              {/* 标签栏 */}
              <div className="border-b-2 border-white/20 bg-black/20">
                <div className="flex overflow-x-auto">
                  {categories.map((category) => (
                    <button
                      key={category.value}
                      onClick={() => setActiveCategory(category.value)}
                      className={`px-6 py-4 text-sm font-bold whitespace-nowrap transition-all duration-300 relative ${
                        activeCategory === category.value
                          ? 'text-white bg-white/20 shadow-inner'
                          : 'text-white/70 hover:text-white hover:bg-white/10'
                      }`}
                      style={{
                        clipPath: activeCategory === category.value 
                          ? 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
                          : 'none'
                      }}
                    >
                      {category.label}
                      {activeCategory === category.value && (
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-purple-400" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* 文章列表 */}
              <div className="flex-1 p-6 overflow-hidden">
                <div className="h-full overflow-y-auto space-y-4 pr-2" 
                     style={{
                       scrollbarWidth: 'thin',
                       scrollbarColor: 'rgba(255,255,255,0.3) transparent'
                     }}>
                  {filteredArticles.length > 0 ? (
                    filteredArticles.map((article) => (
                      <ArticleCard
                        key={article.id}
                        article={article}
                        onClick={handleArticleClick}
                      />
                    ))
                  ) : (
                    <div className="flex items-center justify-center h-full text-white/50">
                      <p className="text-lg font-medium">该分类下暂无文章</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* 文章详情模态框 */}
      <ArticleModal
        article={selectedArticle}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
};

export default Hobbies;