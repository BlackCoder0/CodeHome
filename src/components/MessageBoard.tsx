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
  
    // 创建新的留言板容器，按照官方代码格式
    const newDiv = document.createElement('div');
    newDiv.id = 'lv-container';
    newDiv.setAttribute('data-id', 'city');
    newDiv.setAttribute('data-uid', 'MTAyMC82MDc1Ni8zNzIyNw==');
    container.appendChild(newDiv);
  
    // 按照官方代码加载来必力脚本
    // 在loadLivereScript函数中添加重试逻辑
    const loadLivereScript = (retryCount = 0) => {
      const maxRetries = 3;
      const d = document;
      const s = 'script';
      let j: HTMLScriptElement;
      const e = d.getElementsByTagName(s)[0];
      
      if (typeof (window as any).LivereTower === 'function') {
        if (isMounted) {
          setStatus('loaded');
        }
        return;
      }
      
      j = d.createElement(s) as HTMLScriptElement;
      j.src = 'https://livere.com/js/embed.dist.js';
      j.async = true;
      
      // 添加超时处理
      const timeout = setTimeout(() => {
        if (isMounted && retryCount < maxRetries) {
          console.warn(`Livere script timeout, retrying... (${retryCount + 1}/${maxRetries})`);
          j.remove();
          loadLivereScript(retryCount + 1);
        } else if (isMounted) {
          setStatus('error');
        }
      }, 10000); // 10秒超时
      
      j.onload = () => {
        clearTimeout(timeout);
        if (isMounted) {
          const checkInit = () => {
            if ((window as any).LivereTower) {
              setStatus('loaded');
            } else {
              setTimeout(checkInit, 100);
            }
          };
          setTimeout(checkInit, 100);
        }
      };
      
      j.onerror = () => {
        clearTimeout(timeout);
        if (isMounted && retryCount < maxRetries) {
          console.error(`Failed to load Livere script, retrying... (${retryCount + 1}/${maxRetries})`);
          setTimeout(() => loadLivereScript(retryCount + 1), 2000);
        } else if (isMounted) {
          console.error('Failed to load Livere script after all retries');
          setStatus('error');
        }
      };
      
      if (e && e.parentNode) {
        e.parentNode.insertBefore(j, e);
      } else {
        d.head.appendChild(j);
      }
    };
    
    // 延迟加载脚本，确保DOM已准备好
    setTimeout(loadLivereScript, 100);
  
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