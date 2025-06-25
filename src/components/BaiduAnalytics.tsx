'use client';
import { useEffect } from 'react';

const BaiduAnalytics = () => {
  useEffect(() => {
    // 确保只在客户端执行
    if (typeof window !== 'undefined') {
      // 检查是否已经加载过百度统计
      if (window._hmt) {
        return;
      }

      window._hmt = window._hmt || [];
      
      const hm = document.createElement('script');
      hm.src = 'https://hm.baidu.com/hm.js?b2220316e42d7b63a3c68978f3c89dde';
      hm.async = true;
      
      const s = document.getElementsByTagName('script')[0];
      if (s && s.parentNode) {
        s.parentNode.insertBefore(hm, s);
      }
    }
  }, []);

  return null;
};

export default BaiduAnalytics;

// 声明全局类型
declare global {
  interface Window {
    _hmt: any[];
  }
}