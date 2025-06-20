import React from 'react';
import { Article } from '@/lib/articles';
import { motion } from 'motion/react';

interface ArticleCardProps {
  article: Article;
  onClick: (article: Article) => void;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02, y: -2 }}
      className="bg-black/30 backdrop-blur-sm border-2 border-white/30 p-4 cursor-pointer transition-all duration-300 hover:bg-black/40 hover:border-white/50 shadow-lg"
      style={{
        clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))',
        background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0.3) 100%)'
      }}
      onClick={() => onClick(article)}
    >
      <div className="aspect-video bg-gray-900/50 relative overflow-hidden" 
           style={{
             clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
           }}>
        <img 
          src={article.thumbnail} 
          alt={article.title}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIyNSIgdmlld0JveD0iMCAwIDQwMCAyMjUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjI1IiBmaWxsPSIjMzc0MTUxIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTEyLjUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzlDQTNBRiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+5Zu+54mH5Yqg6L295aSx6LSlPC90ZXh0Pgo8L3N2Zz4K';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="absolute bottom-2 left-2 right-2">
          <div className="flex flex-wrap gap-1">
            {article.tags.slice(0, 2).map((tag, index) => (
              <span 
                key={index}
                className="px-2 py-1 bg-black/40 backdrop-blur-sm border border-white/30 text-xs text-white font-medium"
                style={{
                  clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))'
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <div className="mt-3">
        <h3 className="text-white font-bold text-lg mb-1 line-clamp-1">
          {article.title}
        </h3>
        <p className="text-white/80 text-sm mb-3 line-clamp-2">
          {article.subtitle}
        </p>
        <div className="flex justify-between items-center text-xs text-white/60 font-medium">
          <span>{new Date(article.publishDate).toLocaleDateString('zh-CN')}</span>
          <span className="capitalize px-2 py-1 bg-white/10 border border-white/20"
                style={{
                  clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))'
                }}>{article.category}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ArticleCard;