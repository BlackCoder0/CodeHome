import React, { useEffect } from 'react';

// 来必力留言板组件
const MessageBoard: React.FC = () => {
  useEffect(() => {
    // 检查是否已经加载过脚本
    if (typeof (window as any).LivereTower === 'function') {
      return;
    }

    // 按照官方代码加载来必力脚本
    const d = document;
    const s = 'script';
    const j = d.createElement(s) as HTMLScriptElement;
    const e = d.getElementsByTagName(s)[0];

    j.src = 'https://cdn-city.livere.com/js/embed.dist.js';
    j.async = true;

    if (e && e.parentNode) {
      e.parentNode.insertBefore(j, e);
    } else {
      d.head.appendChild(j);
    }
  }, []);

  return (
    <div className="w-full">
      <div className="min-h-[300px]">
        {/* 来必力City版安装代码 */}
        <div id="lv-container" data-id="city" data-uid="MTAyMC82MDc1Ni8zNzIyNw==">
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