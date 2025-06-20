import React, { useState, useEffect } from 'react';
import { Article } from '@/lib/articles';
import { motion, AnimatePresence } from 'motion/react';
import { X, ZoomIn } from 'lucide-react';

interface ArticleModalProps {
  article: Article | null;
  isOpen: boolean;
  onClose: () => void;
}

const ArticleModal: React.FC<ArticleModalProps> = ({ article, isOpen, onClose }) => {
  const [htmlContent, setHtmlContent] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    if (article && isOpen) {
      setLoading(true);
      // 模拟加载HTML内容
      fetch(article.htmlPath)
        .then(response => response.text())
        .then(html => {
          // 提取body内容
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
          // 如果加载失败，使用默认内容
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
    }
  }, [article, isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const handleContentClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.tagName === 'IMG') {
      const img = target as HTMLImageElement;
      handleImageClick(img.src);
    }
  };

  if (!article) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* 背景遮罩 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          
          {/* 模态框 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-4 md:inset-8 lg:inset-16 bg-gray-900 rounded-lg z-50 flex flex-col overflow-hidden border border-white/10"
          >
            {/* 头部 */}
            <div className="flex items-center justify-between p-4 border-b border-white/10 bg-gray-800/50">
              <div>
                <h2 className="text-xl font-bold text-white">{article.title}</h2>
                <p className="text-white/70 text-sm">{article.subtitle}</p>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>
            
            {/* 内容区域 */}
            <div className="flex-1 overflow-y-auto p-6">
              {loading ? (
                <div className="flex items-center justify-center h-full">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
                </div>
              ) : (
                <div 
                  className="prose prose-invert max-w-none article-content"
                  dangerouslySetInnerHTML={{ __html: htmlContent }}
                  onClick={handleContentClick}
                />
              )}
            </div>
          </motion.div>
          
          {/* 图片放大查看 */}
          <AnimatePresence>
            {selectedImage && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-black/90 z-60"
                  onClick={() => setSelectedImage(null)}
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="fixed inset-4 z-60 flex items-center justify-center"
                  onClick={() => setSelectedImage(null)}
                >
                  <img
                    src={selectedImage}
                    alt="放大查看"
                    className="max-w-full max-h-full object-contain rounded-lg"
                  />
                  <button
                    className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 rounded-lg transition-colors"
                    onClick={() => setSelectedImage(null)}
                  >
                    <X className="w-5 h-5 text-white" />
                  </button>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </>
      )}
    </AnimatePresence>
  );
};

export default ArticleModal;