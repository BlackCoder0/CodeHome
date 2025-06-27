import React, { useEffect, useState } from 'react';

// 来必力留言板组件
const MessageBoard: React.FC = () => {
  const [loadingStatus, setLoadingStatus] = useState<'loading' | 'loaded' | 'error'>('loading');
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    // 检查是否已经加载过脚本
    if (typeof (window as any).LivereTower === 'function') {
      setLoadingStatus('loaded');
      return;
    }

    // 添加全局错误捕获
    const originalConsoleError = console.error;
    const errorHandler = (...args: any[]) => {
      // 捕获来必力相关的错误但不阻止其他错误
      const error = args[0];
      if (error && (error.toString().includes('livere') || error.toString().includes('Livere'))) {
        console.warn('Livere script error caught:', error);
        // 不设置为错误状态，让来必力继续尝试工作
        return;
      }
      originalConsoleError.apply(console, args);
    };
    console.error = errorHandler;

    // 清理可能存在的旧容器
    const existingContainer = document.getElementById('lv-container');
    if (existingContainer && existingContainer.innerHTML) {
      existingContainer.innerHTML = '';
    }

    // 按照官方代码加载来必力脚本
    const loadScript = () => {
      const d = document;
      const s = 'script';
      const j = d.createElement(s) as HTMLScriptElement;
      const e = d.getElementsByTagName(s)[0];

      j.src = 'https://cdn-city.livere.com/js/embed.dist.js';
      j.async = true;
      // 移除defer属性，可能导致时序问题
      // j.defer = true;

      // 添加加载成功回调
      j.onload = () => {
        console.log('Livere script loaded successfully');
        
        // 更灵活的初始化检测
        const checkInitialization = (attempts = 0) => {
          const maxAttempts = 20; // 最多检查20次
          const interval = 500; // 每500ms检查一次
          
          if (attempts >= maxAttempts) {
            console.warn('Livere initialization timeout, but allowing to continue');
            setLoadingStatus('loaded'); // 即使超时也设为已加载，让用户看到可能的内容
            return;
          }
          
          // 检查多个可能的初始化标志
          const container = document.getElementById('lv-container');
          const hasLivereTower = typeof (window as any).LivereTower === 'function';
          const hasContent = container && (container.children.length > 1 || container.innerHTML.trim().length > 200);
          
          if (hasLivereTower || hasContent) {
            console.log('Livere initialized successfully');
            setLoadingStatus('loaded');
          } else {
            setTimeout(() => checkInitialization(attempts + 1), interval);
          }
        };
        
        // 开始检查初始化
        setTimeout(() => checkInitialization(), 1000);
      };

      // 添加加载失败回调
      j.onerror = (error) => {
        console.error('Failed to load Livere script:', error);
        setLoadingStatus('error');
        setErrorMessage('脚本加载失败，请检查网络连接');
      };

      if (e && e.parentNode) {
        e.parentNode.insertBefore(j, e);
      } else {
        d.head.appendChild(j);
      }
    };

    // 延迟加载脚本，确保DOM完全准备好
    const timer = setTimeout(loadScript, 500);

    return () => {
      clearTimeout(timer);
      // 恢复原始的console.error
      console.error = originalConsoleError;
    };
  }, []);

  const handleRetry = () => {
    setLoadingStatus('loading');
    setErrorMessage('');
    // 重新加载页面来重置状态
    window.location.reload();
  };

  return (
    <div className="w-full">
      <div className="min-h-[300px] relative">
        {/* 加载状态显示 */}
        {loadingStatus === 'loading' && (
          <div className="absolute inset-0 flex items-center justify-center bg-amber-50/80 z-10">
            <div className="text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-amber-600 mx-auto mb-2"></div>
              <p className="text-amber-700 text-sm">正在加载留言板...</p>
            </div>
          </div>
        )}

        {/* 错误状态显示 */}
        {loadingStatus === 'error' && (
          <div className="absolute inset-0 flex items-center justify-center bg-amber-50/80 z-10">
            <div className="text-center p-4">
              <div className="text-red-600 mb-2">❌ 留言板加载失败</div>
              <p className="text-sm text-gray-600 mb-3">{errorMessage || '未知错误'}</p>
              <button
                onClick={handleRetry}
                className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white text-sm rounded transition-colors"
              >
                重新加载
              </button>
            </div>
          </div>
        )}

        {/* 来必力City版安装代码 */}
        <div 
          id="lv-container" 
          data-id="city" 
          data-uid="MTAyMC82MDc1Ni8zNzIyNw=="
          style={{ opacity: loadingStatus === 'loaded' ? 1 : 0.3 }}
        >
          <noscript>
            <div className="text-amber-700 text-center py-2 bg-amber-100/50 border border-amber-400 text-xs">
              为正常使用来必力评论功能请激活JavaScript
            </div>
          </noscript>
        </div>
        {/* City版安装代码已完成 */}
      </div>
    </div>
  );
};

export default MessageBoard;