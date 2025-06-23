import React, { useRef, useEffect, useState } from 'react';
import { webglPostprocessing } from '@/lib/three-examples/webgl_postprocessing_pixel';
import { Particles } from "@/components/magicui/Fparticles";
import { articles, getArticlesByCategory, categories, Article } from '@/lib/articles';
import ArticleCard from '@/components/ArticleCard';

// 来必力评论组件
interface LivereCommentProps {
  articleId: string;
}

const LivereComment: React.FC<LivereCommentProps> = ({ articleId }) => {
  const commentRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const scriptLoadedRef = useRef(false);

  useEffect(() => {
    let mounted = true;

    // 安全地清理之前的评论实例
    if (commentRef.current) {
      commentRef.current.innerHTML = '';
    }

    // 为每个文章创建唯一的容器ID
    const containerId = `lv-container-${articleId}`;

    // 创建评论容器
    const container = document.createElement('div');
    container.id = containerId;
    container.setAttribute('data-id', 'city');
    container.setAttribute('data-uid', 'MTAyMC82MDc1Ni8zNzIyNw==');
    container.setAttribute('data-consult', articleId);

    // 保存容器引用
    containerRef.current = container;

    if (commentRef.current && mounted) {
      commentRef.current.appendChild(container);
    }

    // 检查脚本是否已加载
    const existingScript = document.querySelector('script[src="./js/embed.dist.js"]');

    if (existingScript && typeof (window as any).LivereTower === 'function') {
      // 脚本已存在且已加载完成，直接标记为已加载
      if (mounted) {
        setIsLoaded(true);
        setHasError(false);
      }
    } else if (!existingScript) {
      // 动态加载来必力脚本
      const script = document.createElement('script');
      script.src = './js/embed.dist.js';
      script.async = true;

      script.onload = () => {
        scriptLoadedRef.current = true;
        if (mounted) {
          // 脚本加载完成后，来必力会自动初始化
          setIsLoaded(true);
          setHasError(false);
        }
      };

      script.onerror = () => {
        console.error('Failed to load Livere comment system');
        if (mounted) {
          setHasError(true);
          setIsLoaded(false);
        }
      };

      // 插入脚本到页面头部
      document.head.appendChild(script);
    }

    // 清理函数
    return () => {
      mounted = false;
      containerRef.current = null;
    };
  }, [articleId]);

  // 组件卸载时的清理
  useEffect(() => {
    return () => {
      // 简化清理逻辑，避免DOM操作冲突
      if (containerRef.current) {
        containerRef.current = null;
      }
    };
  }, []);

  return (
    <div className="mt-8 pt-6 border-t border-white/20">
      <h3 className="text-xl font-bold text-white mb-4">评论区</h3>
      <div ref={commentRef} className="min-h-[200px]">
        {hasError ? (
          <div className="flex items-center justify-center h-32 text-white/60">
            <div className="text-center">
              <div className="text-red-400 mb-2">评论系统加载失败</div>
              <div className="text-sm">请刷新页面重试</div>
            </div>
          </div>
        ) : !isLoaded ? (
          <div className="flex items-center justify-center h-32 text-white/60">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white/60 mr-3"></div>
            评论系统加载中...
          </div>
        ) : null}
      </div>
      <noscript>
        <div className="text-white/60 text-center py-4">
          为正常使用来必力评论功能请激活JavaScript
        </div>
      </noscript>
    </div>
  );
};

const Hobbies: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState<Article['category']>('chat');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [isViewingArticle, setIsViewingArticle] = useState(false);
  const [htmlContent, setHtmlContent] = useState<string>('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!mountRef.current) return;
    const cleanup = webglPostprocessing(mountRef.current);
    return () => cleanup?.();
  }, []);

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
    <section id="hobbies" className="relative min-h-screen py-8 bg-gradient-to-b from-[#2e3346] to-black">
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
        quantity={300}
        ease={80}
        size={1.5}
        staticity={15}
        color={"#ffffff"}
        vy={10}
      />
      <div className="relative w-full px-4 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 min-h-[calc(100vh-4rem)] lg:h-full items-stretch">
          {/* 左侧 - 3D模型区域 */}
          <div className={`w-full h-[60vh] lg:h-full items-center lg:items-start justify-center ${isViewingArticle ? 'hidden lg:flex' : 'flex'}`}>
            <div className="w-full h-full max-h-[calc(100vh-8rem)] rounded-lg overflow-hidden shadow-lg relative z-10">
              <div ref={mountRef} className="w-full h-full" style={{ background: 'transparent' }} />
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
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-purple-400" />
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

                          {/* 评论区 - 使用文章ID确保隔离 */}
                          {selectedArticle && (
                            <LivereComment key={selectedArticle.id} articleId={selectedArticle.id} />
                          )}
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