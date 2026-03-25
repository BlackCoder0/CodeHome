import React, { useState } from 'react';
import { Particles } from "@/components/magicui/Particles";
import { articles, getArticlesByCategory, categories, Article } from '@/lib/articles';
import ArticleCard from '@/components/ArticleCard';

const Hobbies: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Article['category']>('chat');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [isViewingArticle, setIsViewingArticle] = useState(false);
  const [htmlContent, setHtmlContent] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const handleArticleClick = (article: Article) => {
    setSelectedArticle(article);
    setIsViewingArticle(true);
    setLoading(true);

    // 加载文章内容
    fetch(article.htmlPath)
      .then(response => response.text())
      .then(html => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const articleContent = doc.querySelector('article');
        if (articleContent) {
          setHtmlContent(articleContent.innerHTML);
        } else {
          setHtmlContent(html);
        }
      })
      .catch(() => {
        setHtmlContent(`
          <h1>${article.title}</h1>
          <p class="subtitle">${article.subtitle}</p>
          <p>文章内容加载中...</p>
          <p>这是一篇关于${article.title}的文章。</p>
          <img src="${article.thumbnail}" alt="${article.title}" class="article-image" />
          <p>更多内容正在准备中，敬请期待。</p>
        `);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleBackToList = () => {
    setIsViewingArticle(false);
    setSelectedArticle(null);
    setHtmlContent('');
  };

  const filteredArticles = getArticlesByCategory(activeCategory);

  return (
    <section
      id="hobbies"
      className="relative min-h-screen py-8 overflow-hidden"
      style={{
        background:
          'linear-gradient(180deg, #1d3654 0%, #1b3552 12%, #16304a 32%, #122743 58%, #101e35 80%, #111827 100%)'
      }}
    >
      {/* <section id="hobbies" className="relative min-h-screen py-8"
  style={{
    backgroundImage: "url('./assets/bg/sea2.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed"
  }}
> */}
      <Particles
        className="absolute inset-0 z-0"
        quantity={150}
        ease={80}
        size={1.5}
        staticity={15}
        color={"#ffffff"}
        vy={10}
      />
      <div
        className="absolute inset-x-0 top-0 z-0 h-28"
        style={{
          background:
            'linear-gradient(180deg, rgba(147, 197, 253, 0.1), rgba(125, 211, 252, 0.04) 36%, transparent 100%)'
        }}
      />
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            'radial-gradient(circle at 18% 16%, rgba(125, 211, 252, 0.15), transparent 24%), radial-gradient(circle at 82% 26%, rgba(96, 165, 250, 0.12), transparent 22%), radial-gradient(circle at 50% 72%, rgba(59, 130, 246, 0.1), transparent 34%), radial-gradient(circle at 52% 10%, rgba(186, 230, 253, 0.08), transparent 20%)'
        }}
      />
      <div
        className="absolute inset-0 z-0 opacity-18"
        style={{
          backgroundImage:
            'repeating-radial-gradient(circle at 50% -10%, rgba(186,230,253,0.12) 0 10px, transparent 10px 34px), repeating-radial-gradient(circle at 50% 0%, rgba(125,211,252,0.08) 0 12px, transparent 12px 38px)',
          filter: 'blur(12px)',
          maskImage: 'linear-gradient(180deg, rgba(0,0,0,0.82), rgba(0,0,0,0.18))'
        }}
      />
      <div
        className="absolute inset-0 z-0 opacity-12"
        style={{
          backgroundImage:
            'linear-gradient(108deg, transparent 0%, transparent 26%, rgba(186,230,253,0.18) 36%, transparent 48%, transparent 100%), linear-gradient(72deg, transparent 0%, transparent 52%, rgba(103,232,249,0.12) 64%, transparent 78%, transparent 100%)',
          filter: 'blur(14px)',
          maskImage: 'linear-gradient(180deg, rgba(0,0,0,0.9), rgba(0,0,0,0.24))'
        }}
      />
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(rgba(186, 230, 253, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(186, 230, 253, 0.06) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage: 'linear-gradient(180deg, rgba(0,0,0,0.78), rgba(0,0,0,0.12))'
        }}
      />
      <div
        className="absolute inset-x-0 bottom-0 z-0 h-40"
        style={{
          background:
            'linear-gradient(180deg, transparent 0%, rgba(129, 140, 248, 0.06) 24%, rgba(67, 56, 202, 0.12) 52%, rgba(17, 24, 39, 0.44) 100%)'
        }}
      />
      <div className="relative w-full px-4 h-full">
        <div className="relative z-10 mb-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-200 via-sky-300 to-indigo-300 bg-clip-text text-transparent drop-shadow-[0_0_24px_rgba(125,211,252,0.2)]">
            我的爱好
          </h2>
          <p className="mt-3 text-base md:text-lg text-slate-200/80">
            水波、随想、还有一些缓慢漂浮的兴趣碎片
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 min-h-[calc(100vh-4rem)] lg:h-full items-stretch">
          {/* 左侧 - HTML 动效区域 */}
          <div className={`w-full h-[60vh] lg:h-full items-center lg:items-start justify-center ${isViewingArticle ? 'hidden lg:flex' : 'flex'}`}>
            <div className="w-full h-full max-h-[calc(100vh-8rem)] rounded-lg overflow-hidden shadow-lg relative z-10">
              <iframe
                src="/111.html"
                title="Hobbies Visual"
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>
          </div>

          {/* 右侧 - 文章区域 */}
          <div className={`w-full flex flex-col ${isViewingArticle ? 'fixed inset-0 z-[300] h-screen bg-[#2e3346] overflow-hidden lg:static lg:h-full lg:z-auto lg:overflow-visible' : 'h-[90vh] sm:h-[95vh] lg:h-full max-h-[calc(100vh-2rem)]'}`} style={isViewingArticle ? { overscrollBehavior: 'contain' } : {}}>
            <div className="h-full bg-black/40 backdrop-blur-sm border-2 border-white/20 shadow-2xl relative z-10 flex flex-col"
              style={{
                clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))',
                background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                ...(isViewingArticle ? { touchAction: 'none', overscrollBehavior: 'contain' } : {})
              }}>
              {!isViewingArticle ? (
                <>
                  {/* 标签栏 */}
                  <div className="border-b-2 border-white/20 bg-black/20">
                    <div className="flex overflow-x-auto">
                      {categories.map((category) => (
                        <button
                          key={category.value}
                          onClick={() => setActiveCategory(category.value)}
                          className={`px-6 py-4 text-sm font-bold whitespace-nowrap transition-all duration-300 relative ${activeCategory === category.value
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
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-300 via-sky-300 to-indigo-300" />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* 文章列表 */}
                  <div className="flex-1 p-6 overflow-hidden">
                    <div className="h-full max-w-screen-md mx-auto overflow-y-auto space-y-4 pr-2"
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
                </>
              ) : (
                <>
                  {/* 文章详情头部 */}
                  <div className="border-b-2 border-white/20 bg-black/20 p-4">
                    <div className="flex items-center justify-between">
                      <button
                        onClick={handleBackToList}
                        className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/30 transition-all duration-300 text-white font-medium"
                        style={{
                          clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
                        }}
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        返回列表
                      </button>
                      <div className="text-right">
                        <h2 className="text-xl font-bold text-white">{selectedArticle?.title}</h2>
                        <p className="text-white/70 text-sm">{selectedArticle?.subtitle}</p>
                      </div>
                    </div>
                  </div>

                  {/* 文章内容 */}
                  <div className="flex-1 p-6 overflow-hidden" style={{ touchAction: 'none' }}>
                    <div className="h-full overflow-y-auto pr-2"
                      style={{
                        WebkitOverflowScrolling: 'touch',
                        overscrollBehavior: 'contain',
                        touchAction: 'pan-y',
                        scrollbarWidth: 'thin',
                        scrollbarColor: 'rgba(255,255,255,0.3) transparent'
                      }}>
                      {loading ? (
                        <div className="flex items-center justify-center h-full">
                          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
                        </div>
                      ) : (
                        <div className="max-w-none">
                          {/* 文章正文 */}
                          <div
                            className="prose prose-invert max-w-none article-content"
                            dangerouslySetInnerHTML={{ __html: htmlContent }}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>


    </section>
  );
};

export default Hobbies;
