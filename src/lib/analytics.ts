// 访问统计服务
class AnalyticsService {
  private static instance: AnalyticsService;
  private visitorCount: number = 0;
  private onlineUsers: Set<string> = new Set();
  private sessionId: string;
  private heartbeatInterval: NodeJS.Timeout | null = null;
  private readonly STORAGE_KEY = 'site_analytics';
  private readonly SESSION_KEY = 'session_id';
  private readonly HEARTBEAT_INTERVAL = 30000; // 30秒
  private readonly SESSION_TIMEOUT = 300000; // 5分钟

  private constructor() {
    this.sessionId = this.generateSessionId();
    this.loadFromStorage();
    this.startHeartbeat();
    this.handleVisibilityChange();
  }

  public static getInstance(): AnalyticsService {
    if (!AnalyticsService.instance) {
      AnalyticsService.instance = new AnalyticsService();
    }
    return AnalyticsService.instance;
  }

  private generateSessionId(): string {
    const stored = sessionStorage.getItem(this.SESSION_KEY);
    if (stored) {
      return stored;
    }
    
    const newId = Date.now().toString(36) + Math.random().toString(36).substr(2);
    sessionStorage.setItem(this.SESSION_KEY, newId);
    return newId;
  }

  private loadFromStorage(): void {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      if (stored) {
        const data = JSON.parse(stored);
        this.visitorCount = data.visitorCount || 0;
        
        // 清理过期的在线用户
        const now = Date.now();
        const validSessions = new Map(Object.entries(data.onlineSessions || {})
          .filter(([_, timestamp]) => now - (timestamp as number) < this.SESSION_TIMEOUT));
        
        this.onlineUsers = new Set(validSessions.keys());
        
        // 如果是新会话，增加访问量
        if (!validSessions.has(this.sessionId)) {
          this.visitorCount++;
        }
        
        // 添加当前会话
        this.onlineUsers.add(this.sessionId);
        this.saveToStorage();
      } else {
        // 首次访问
        this.visitorCount = 1;
        this.onlineUsers.add(this.sessionId);
        this.saveToStorage();
      }
    } catch (error) {
      console.warn('Failed to load analytics data:', error);
      this.visitorCount = 1;
      this.onlineUsers.add(this.sessionId);
    }
  }

  private saveToStorage(): void {
    try {
      const now = Date.now();
      const onlineSessions: Record<string, number> = {};
      this.onlineUsers.forEach(sessionId => {
        onlineSessions[sessionId] = now;
      });

      const data = {
        visitorCount: this.visitorCount,
        onlineSessions,
        lastUpdate: now
      };
      
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
    } catch (error) {
      console.warn('Failed to save analytics data:', error);
    }
  }

  private startHeartbeat(): void {
    this.heartbeatInterval = setInterval(() => {
      this.onlineUsers.add(this.sessionId);
      this.saveToStorage();
    }, this.HEARTBEAT_INTERVAL);
  }

  private handleVisibilityChange(): void {
    if (typeof document !== 'undefined') {
      document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
          // 页面隐藏时停止心跳
          if (this.heartbeatInterval) {
            clearInterval(this.heartbeatInterval);
            this.heartbeatInterval = null;
          }
        } else {
          // 页面显示时恢复心跳
          if (!this.heartbeatInterval) {
            this.startHeartbeat();
          }
        }
      });

      // 页面卸载时清理
      window.addEventListener('beforeunload', () => {
        if (this.heartbeatInterval) {
          clearInterval(this.heartbeatInterval);
        }
      });
    }
  }

  public getVisitorCount(): number {
    return this.visitorCount;
  }

  public getOnlineUsers(): number {
    // 清理过期会话
    const now = Date.now();
    const stored = localStorage.getItem(this.STORAGE_KEY);
    if (stored) {
      try {
        const data = JSON.parse(stored);
        const validSessions = Object.entries(data.onlineSessions || {})
          .filter(([_, timestamp]) => now - (timestamp as number) < this.SESSION_TIMEOUT);
        
        this.onlineUsers = new Set(validSessions.map(([sessionId]) => sessionId));
        
        // 确保当前会话在线
        this.onlineUsers.add(this.sessionId);
        this.saveToStorage();
      } catch (error) {
        console.warn('Failed to clean expired sessions:', error);
      }
    }
    
    return this.onlineUsers.size;
  }

  public destroy(): void {
    if (this.heartbeatInterval) {
      clearInterval(this.heartbeatInterval);
      this.heartbeatInterval = null;
    }
  }
}

// React Hook for analytics
export const useAnalytics = () => {
  const [visitorCount, setVisitorCount] = React.useState<number>(0);
  const [onlineUsers, setOnlineUsers] = React.useState<number>(0);
  const analyticsRef = React.useRef<AnalyticsService | null>(null);

  React.useEffect(() => {
    // 只在客户端初始化
    if (typeof window !== 'undefined') {
      analyticsRef.current = AnalyticsService.getInstance();
      
      const updateStats = () => {
        if (analyticsRef.current) {
          setVisitorCount(analyticsRef.current.getVisitorCount());
          setOnlineUsers(analyticsRef.current.getOnlineUsers());
        }
      };

      // 初始更新
      updateStats();

      // 定期更新在线用户数
      const interval = setInterval(updateStats, 10000); // 每10秒更新一次

      return () => {
        clearInterval(interval);
        if (analyticsRef.current) {
          analyticsRef.current.destroy();
        }
      };
    }
  }, []);

  return { visitorCount, onlineUsers };
};

// 导入React
import React from 'react';

export default AnalyticsService;