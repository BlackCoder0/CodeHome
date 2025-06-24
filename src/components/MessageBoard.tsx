import React, { useRef, useEffect, useState } from 'react';

// 来必力留言板组件
const MessageBoard: React.FC = () => {
  const [status, setStatus] = useState<'loading' | 'loaded' | 'error'>('loading');
  const containerRef = useRef<HTMLDivElement>(null);
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    let isMounted = true;
    const container = containerRef.current;
    if (!container) return;
  
    // 清空原来的留言板
    container.innerHTML = '';
  
    // 创建新的留言板容器
    const newDiv = document.createElement('div');
    newDiv.id = 'lv-container';
    newDiv.setAttribute('data-id', 'city');
    newDiv.setAttribute('data-uid', 'MTAyMC82MDc1Ni8zNzIyNw==');
    newDiv.setAttribute('data-consult', 'coderains-messageboard'); // 使用更具体的ID
    newDiv.setAttribute('data-theme', 'light'); // 使用浅色主题
    newDiv.setAttribute('data-mode', '3'); // 设置模式
    container.appendChild(newDiv);
  
    // 加载来必力脚本
    const scriptSrc = 'https://cdn-city.livere.com/js/embed.dist.js';
    const existingScript = document.querySelector(`script[src="${scriptSrc}"]`);
    
    if (existingScript) {
      // 如果脚本已存在，等待初始化
      const checkLivere = () => {
        if ((window as any).LivereTower && isMounted) {
          setStatus('loaded');
        } else if (isMounted) {
          setTimeout(checkLivere, 100);
        }
      };
      checkLivere();
      return;
    }
  
    const script = document.createElement('script');
    script.src = scriptSrc;
    script.async = true;
    script.defer = true;
  
    script.onload = () => {
      if (isMounted) {
        // 等待LivereTower初始化
        const checkInit = () => {
          if ((window as any).LivereTower) {
            setStatus('loaded');
          } else {
            setTimeout(checkInit, 100);
          }
        };
        checkInit();
      }
    };
  
    script.onerror = () => {
      if (isMounted) {
        console.error('Failed to load Livere script');
        setStatus('error');
      }
    };
  
    document.head.appendChild(script);
  
    return () => {
      isMounted = false;
      if (container) {
        container.innerHTML = '';
      }
    };
  }, []);
  
  return (
    <div className="w-full">
      <div className="min-h-[300px]">
        {status === 'loading' && (
          <div className="flex items-center justify-center h-24 text-amber-700">
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-amber-700 mr-2"></div>
            <span className="text-sm">加载中...</span>
          </div>
        )}
        {status === 'error' && (
          <div className="flex items-center justify-center h-24 text-amber-700">
            <div className="text-center">
              <div className="text-red-600 mb-2 text-sm">留言板加载失败</div>
              <div className="text-xs mb-3">可能是网络问题或服务暂时不可用</div>
              <button
                onClick={() => {
                  setStatus('loading');
                  setRetryCount(prev => prev + 1);
                  window.location.reload();
                }}
                className="px-3 py-1 bg-amber-600 hover:bg-amber-700 text-white text-xs border border-amber-800 transition-colors"
              >
                重新加载
              </button>
            </div>
          </div>
        )}
        <div
          ref={containerRef}
          style={{ display: status === 'loaded' ? 'block' : 'none' }}
          className="w-full"
        />
      </div>
      
      <noscript>
        <div className="text-amber-700 text-center py-2 bg-amber-100/50 border border-amber-400 text-xs">
          需要JavaScript支持
        </div>
      </noscript>
    </div>
  );
};

export default MessageBoard;