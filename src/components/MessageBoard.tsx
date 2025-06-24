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
      <div className="bg-amber-50/80 border-2 border-amber-800 p-6 rounded-none shadow-lg" style={{
        boxShadow: '8px 8px 0px rgba(120, 53, 15, 0.3)'
      }}>
        <h2 className="text-3xl font-bold text-amber-900 mb-6 text-center" style={{ fontFamily: 'Times New Roman, serif' }}>留言板</h2>
        
        <div className="min-h-[400px]">
          {status === 'loading' && (
            <div className="flex items-center justify-center h-32 text-amber-700">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-amber-700 mr-3"></div>
              留言系统加载中...
            </div>
          )}
          {status === 'error' && (
            <div className="flex items-center justify-center h-32 text-amber-700">
              <div className="text-center">
                <div className="text-red-600 mb-2">留言系统加载失败</div>
                <div className="text-sm">请刷新页面重试</div>
              </div>
            </div>
          )}
          <div
            ref={containerRef}
            style={{ display: status === 'loaded' ? 'block' : 'none' }}
            className="w-full"
          />
        </div>
        
        <div className="mt-4 pt-4 border-t-2 border-amber-800">
          <div className="text-sm text-amber-700 text-center">
            <p>欢迎在此留言交流，分享你的想法和建议</p>
          </div>
        </div>
      </div>
      
      <noscript>
        <div className="text-amber-700 text-center py-4 bg-amber-50 border border-amber-300 mt-4">
          为正常使用留言功能请激活JavaScript
        </div>
      </noscript>
    </div>
  );
};

export default MessageBoard;