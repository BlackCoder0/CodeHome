import React, { useRef, useEffect, useState } from 'react';

// 来必力留言板组件
const MessageBoard: React.FC = () => {
  const [status, setStatus] = useState<'loading' | 'loaded' | 'error'>('loading');
  const containerRef = useRef<HTMLDivElement>(null);

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
    newDiv.setAttribute('data-consult', 'general-messageboard'); // 使用固定ID作为公用留言板
    newDiv.setAttribute('data-theme', 'light'); // 使用浅色主题适配Contact页面
    container.appendChild(newDiv);
  
    // 加载来必力脚本
    const scriptSrc = 'https://cdn-city.livere.com/js/embed.dist.js';
    const existingScript = document.querySelector(`script[src="${scriptSrc}"]`);
    
    if (existingScript) {
      // 如果脚本已存在，直接初始化
      if ((window as any).LivereTower) {
        setStatus('loaded');
      }
      return;
    }
  
    const script = document.createElement('script');
    script.src = scriptSrc;
    script.async = true;
  
    script.onload = () => {
      if (isMounted) {
        setStatus('loaded');
      }
    };
  
    script.onerror = () => {
      if (isMounted) {
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
              <div className="text-red-600 mb-1 text-sm">加载失败</div>
              <div className="text-xs">请刷新重试</div>
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