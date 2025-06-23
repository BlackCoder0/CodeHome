import React, { useEffect, useState, useRef } from 'react';


// 粒子类
class Particle {
  originalX: number;
  originalY: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseColor: string;

  constructor(x: number, y: number, color: string) {
    this.originalX = x;
    this.originalY = y;
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.baseColor = color;
  }

  update(mouseX: number, mouseY: number, isMobile: boolean = false) {
    const dx = this.x - mouseX;
    const dy = this.y - mouseY;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const repulsionRadius = isMobile ? 60 : 100; // 移动端减小排斥范围
    const repulsionForce = 2.5; // 增强排斥力
    const friction = 0.08; // 减小摩擦力，让运动更流畅
    const returnSpeed = 0.01; // 增加回弹速度

    // 排斥效果
    if (distance < repulsionRadius) {
      const angle = Math.atan2(dy, dx);
      const ratio = (repulsionRadius - distance) / repulsionRadius;
      const force = ratio * ratio * repulsionForce;

      this.vx += Math.cos(angle) * force;
      this.vy += Math.sin(angle) * force;
    }

    // 返回原位
    const returnX = (this.originalX - this.x) * returnSpeed;
    const returnY = (this.originalY - this.y) * returnSpeed;
    this.vx += returnX;
    this.vy += returnY;

    // 摩擦力
    this.vx *= (1 - friction);
    this.vy *= (1 - friction);

    this.x += this.vx;
    this.y += this.vy;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = this.baseColor;
    ctx.beginPath();
    ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
    ctx.fill();
  }
}

const Contact: React.FC = () => {
  const [uptime, setUptime] = useState('');
  const [visitorCount, setVisitorCount] = useState('？？？');
  const [onlineUsers, setOnlineUsers] = useState('？');
  const [isMobile, setIsMobile] = useState(false);
  const desktopCanvasRef = useRef<HTMLCanvasElement>(null);
  const mobileCanvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const animationRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const calculateUptime = () => {
      const startTime = new Date('2025-06-20');
      const now = new Date();
      const diff = now.getTime() - startTime.getTime();
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      setUptime(`${days.toString().padStart(3, '0')}:${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);
    };

    calculateUptime();
    const interval = setInterval(calculateUptime, 1000);
    return () => clearInterval(interval);
  }, []);

  // 移动端点阵图
  useEffect(() => {
    const canvas = mobileCanvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      const container = canvas.parentElement;
      if (container) {
        canvas.width = container.clientWidth;
        canvas.height = container.clientHeight;
        generateParticles();
      }
    };

    const generateParticles = () => {
      particlesRef.current = [];
      const spacing = 4; // 减小间距使点阵更密集
      const offsetX = canvas.width * 0.02; // 减小偏移量使图案更大
      const offsetY = canvas.height * 0.02;
      const maxWidth = canvas.width * 0.96; // 增大可用区域
      const maxHeight = canvas.height * 0.96;
      const img = new window.Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => {
        if (img.width === 0 || img.height === 0) return;
        const tempCanvas = document.createElement('canvas');
        const tempCtx = tempCanvas.getContext('2d');
        if (!tempCtx) return;
        const scale = Math.min(maxWidth / img.width, maxHeight / img.height) * 0.95; // 增大缩放比例
        tempCanvas.width = img.width * scale;
        tempCanvas.height = img.height * scale;
        tempCtx.drawImage(img, 0, 0, tempCanvas.width, tempCanvas.height);
        if (tempCanvas.width === 0 || tempCanvas.height === 0) return;
        const imageData = tempCtx.getImageData(0, 0, tempCanvas.width, tempCanvas.height);
        const data = imageData.data;
        const imgOffsetX = offsetX + (maxWidth - tempCanvas.width) / 2;
        const imgOffsetY = offsetY + (maxHeight - tempCanvas.height) / 2;
        for (let y = 0; y < tempCanvas.height; y += spacing) {
          for (let x = 0; x < tempCanvas.width; x += spacing) {
            const index = (y * tempCanvas.width + x) * 4;
            const alpha = data[index + 3];
            if (alpha > 128) {
              const r = data[index];
              const g = data[index + 1];
              const b = data[index + 2];
              const brightness = (r + g + b) / 3;
              const whiteIntensity = Math.max(0.3, brightness / 255);
              const color = `rgba(255, 255, 255, ${whiteIntensity})`;
              particlesRef.current.push(new Particle(
                x + imgOffsetX,
                y + imgOffsetY,
                color
              ));
            }
          }
        }
      };
      img.onerror = () => {
        for (let y = 0; y < maxHeight; y += spacing) {
          for (let x = 0; x < maxWidth; x += spacing) {
            const centerX = maxWidth / 2;
            const centerY = maxHeight / 2;
            const relX = (x - centerX) / 120;
            const relY = (y - centerY) / 120;
            const heartEquation = Math.pow(relX * relX + relY * relY - 1, 3) - relX * relX * relY * relY * relY;
            if (heartEquation <= 0 && Math.sqrt(relX * relX + relY * relY) <= 1.8) {
              particlesRef.current.push(new Particle(
                x + offsetX,
                y + offsetY,
                'rgba(255, 255, 255, 0.8)'
              ));
            }
          }
        }
      };
      img.src = '/assets/logo/logo_0.jpg';
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particlesRef.current.forEach(particle => {
        particle.update(mouseRef.current.x, mouseRef.current.y, true);
        particle.draw(ctx);
      });
      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();
    window.addEventListener('resize', resizeCanvas);
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // 初始化点阵图
  // 桌面端点阵图
  useEffect(() => {
    const canvas = desktopCanvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      const container = canvas.parentElement;
      if (container) {
        canvas.width = container.clientWidth;
        canvas.height = container.clientHeight;
        generateParticles();
      }
    };

    const generateParticles = () => {
      particlesRef.current = [];
      const spacing = 6; // 减小间距使点阵更密集
      const offsetX = canvas.width * 0.05; // 减小偏移量使图案更大
      const offsetY = canvas.height * 0.05;
      const maxWidth = canvas.width * 0.9; // 增大可用区域
      const maxHeight = canvas.height * 0.9;

      // 从指定图片生成点阵图
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => {
        if (img.width === 0 || img.height === 0) return;
        const tempCanvas = document.createElement('canvas');
        const tempCtx = tempCanvas.getContext('2d');
        if (!tempCtx) return;
        
        // 设置临时画布尺寸
        const scale = Math.min(maxWidth / img.width, maxHeight / img.height) * 0.8;
        tempCanvas.width = img.width * scale;
        tempCanvas.height = img.height * scale;
        
        // 绘制图片到临时画布
        tempCtx.drawImage(img, 0, 0, tempCanvas.width, tempCanvas.height);
        
        // 获取图片数据
        if (tempCanvas.width === 0 || tempCanvas.height === 0) return;
        const imageData = tempCtx.getImageData(0, 0, tempCanvas.width, tempCanvas.height);
        const data = imageData.data;
        
        // 计算居中偏移
        const imgOffsetX = offsetX + (maxWidth - tempCanvas.width) / 2;
        const imgOffsetY = offsetY + (maxHeight - tempCanvas.height) / 2;
        
        // 根据图片像素生成粒子
        for (let y = 0; y < tempCanvas.height; y += spacing) {
          for (let x = 0; x < tempCanvas.width; x += spacing) {
            const index = (y * tempCanvas.width + x) * 4;
            const alpha = data[index + 3];
            
            // 只在非透明像素处创建粒子
            if (alpha > 128) {
              const r = data[index];
              const g = data[index + 1];
              const b = data[index + 2];
              
              // 将颜色转换为白色系
              const brightness = (r + g + b) / 3;
              const whiteIntensity = Math.max(0.3, brightness / 255);
              const color = `rgba(255, 255, 255, ${whiteIntensity})`;
              
              particlesRef.current.push(new Particle(
                x + imgOffsetX,
                y + imgOffsetY,
                color
              ));
            }
          }
        }
      };
      
      // 如果图片加载失败，使用默认心形图案
      img.onerror = () => {
        for (let y = 0; y < maxHeight; y += spacing) {
          for (let x = 0; x < maxWidth; x += spacing) {
            const centerX = maxWidth / 2;
            const centerY = maxHeight / 2;
            const relX = (x - centerX) / 120;
            const relY = (y - centerY) / 120;
            
            const heartEquation = Math.pow(relX * relX + relY * relY - 1, 3) - relX * relX * relY * relY * relY;
            
            if (heartEquation <= 0 && Math.sqrt(relX * relX + relY * relY) <= 1.8) {
              particlesRef.current.push(new Particle(
                x + offsetX,
                y + offsetY,
                'rgba(255, 255, 255, 0.8)'
              ));
            }
          }
        }
      };
      
      // 加载指定的logo图片
      img.src = '/assets/logo/logo_0.jpg';
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particlesRef.current.forEach(particle => {
        particle.update(mouseRef.current.x, mouseRef.current.y, false);
        particle.draw(ctx);
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = desktopCanvasRef.current;
    if (!canvas) return;
    
    const rect = canvas.getBoundingClientRect();
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  };

  const [isExpanded, setIsExpanded] = useState(false);

  // { name: 'Alice', description: '前端开发者', url: '#', avatar: '/assets/logo/logo_0.jpg', subAvatar: '/assets/logo/logo_0.jpg' },
  const friendLinks = [
    { name: '墨间黑沢', description: '“阵雨”的作者', url: 'https://space.bilibili.com/24271342', avatar: '/assets/friend/墨间黑沢.jpg', subAvatar: undefined},
  ];

  return (
    <section id="contact" className="relative min-h-screen overflow-hidden" style={{
      fontFamily: 'Georgia, serif',
      background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)'
    }}>
      {/* 星空纹理背景 */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3Ccircle cx='53' cy='53' r='1'/%3E%3Ccircle cx='37' cy='23' r='1'/%3E%3Ccircle cx='23' cy='37' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      <div className="relative z-10 h-full">
        {/* 桌面端布局 */}
        <div className="hidden lg:flex h-full relative">
          {/* 左侧 - 点阵图 */}
          <div className="flex-1 relative">
            <canvas
              ref={desktopCanvasRef}
              className="w-full h-screen cursor-crosshair"
              onMouseMove={handleMouseMove}
              onMouseLeave={() => mouseRef.current = { x: -1000, y: -1000 }}
            />
            
            {/* 左侧装饰文字 */}
            <div className="absolute top-8 left-8 text-white">
              <h1 className="text-6xl font-bold mb-2" style={{ fontFamily: 'Times New Roman, serif' }}>CONTACT</h1>
              <p className="text-lg opacity-70">Interactive Particle System</p>
            </div>
          </div>

          {/* 右侧 - 访客统计和友情链接 */}
          <div className="w-96 bg-gradient-to-b from-amber-100/90 to-orange-100/90 backdrop-blur-sm border-l-4 border-amber-800 p-0 flex flex-col relative z-20">
            {/* 访客统计 */}
            <div className="flex-1 p-8 border-b-4 border-amber-800">
              <div className="bg-amber-50/80 border-2 border-amber-800 p-6 rounded-none shadow-lg" style={{
                boxShadow: '8px 8px 0px rgba(120, 53, 15, 0.3)'
              }}>
                <h2 className="text-3xl font-bold text-amber-900 mb-6 text-center" style={{ fontFamily: 'Times New Roman, serif' }}>网站统计</h2>
                
                <div className="space-y-4 text-amber-800">
                  <div className="flex justify-between items-center border-b border-amber-300 pb-2">
                    <span className="text-lg font-semibold">运行时长:</span>
                    <span className="font-mono text-lg bg-amber-200 px-2 py-1 rounded border border-amber-400">{uptime}</span>
                  </div>
                  
                  <div className="flex justify-between items-center border-b border-amber-300 pb-2">
                    <span className="text-lg font-semibold">访问量:</span>
                    <span className="font-mono text-lg bg-amber-200 px-2 py-1 rounded border border-amber-400">{visitorCount}</span>
                  </div>
                  
                  <div className="flex justify-between items-center border-b border-amber-300 pb-2">
                    <span className="text-lg font-semibold">在线用户:</span>
                    <span className="font-mono text-lg bg-amber-200 px-2 py-1 rounded border border-amber-400">{onlineUsers}</span>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t-2 border-amber-800">
                    <div className="text-sm text-amber-700 space-y-1">
                      <p>© 2025 CodeRains</p>
                      <p>爱与奇迹的魔法是存在的</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 友情链接 */}
            <div className="flex-1 p-8">
              <div className={`bg-amber-50/80 border-2 border-amber-800 p-6 rounded-none shadow-lg h-full transition-all duration-500 ${isExpanded ? 'w-[calc(100vw-200px)] absolute right-0 z-30' : ''}`} style={{
                boxShadow: '8px 8px 0px rgba(120, 53, 15, 0.3)',
                transform: isExpanded ? 'translateX(calc(-50% + 48%))' : 'translateX(0)',
                transition: 'transform 0.5s ease-in-out, width 0.5s ease-in-out'
              }}>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-3xl font-bold text-amber-900" style={{ fontFamily: 'Times New Roman, serif' }}>友情链接</h2>
                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="px-3 py-1 bg-amber-600 hover:bg-amber-700 text-white text-sm font-bold border-2 border-amber-800 transition-all duration-300"
                    style={{
                      boxShadow: '2px 2px 0px rgba(120, 53, 15, 0.3)'
                    }}
                  >
                    {isExpanded ? '收起' : '展开'}
                  </button>
                </div>
                
                {isExpanded ? (
                   <div className="grid grid-cols-5 gap-4 max-h-80 overflow-y-auto pr-2" style={{
                     scrollbarWidth: 'thin',
                     scrollbarColor: 'rgba(180, 83, 9, 0.3) transparent'
                   }}>
                    {friendLinks.map((friend, index) => (
                      <a
                        key={index}
                        href={friend.url}
                        className="group block p-2 bg-orange-100 hover:bg-orange-200 border-2 border-amber-700 hover:border-amber-900 transition-all duration-300 hover:shadow-md"
                        style={{
                          boxShadow: '3px 3px 0px rgba(120, 53, 15, 0.2)',
                          transform: 'translateZ(0)'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'translate(-1px, -1px)';
                          e.currentTarget.style.boxShadow = '4px 4px 0px rgba(120, 53, 15, 0.3)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'translateZ(0)';
                          e.currentTarget.style.boxShadow = '3px 3px 0px rgba(120, 53, 15, 0.2)';
                        }}
                      >
                        <div className="flex flex-col items-center space-y-2">
                          <div className="flex items-center space-x-1">
                            <div className="w-8 h-8 bg-gradient-to-br from-amber-600 to-orange-600 flex items-center justify-center text-white font-bold text-sm border border-amber-800 overflow-hidden">
                              {friend.avatar ? (
                                <img src={friend.avatar} alt={friend.name + '头像'} className="w-full h-full object-cover" />
                              ) : (
                                friend.name.charAt(0)
                              )}
                            </div>
                            {friend.subAvatar && (
                              <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white font-bold text-sm border border-amber-700 overflow-hidden">
                                <img src={friend.subAvatar} alt={friend.name + '副头像'} className="w-full h-full object-cover" />
                              </div>
                            )}
                          </div>
                          <div className="text-center">
                            <h3 className="text-amber-900 font-bold text-sm group-hover:text-amber-700 transition-colors duration-300 truncate">
                              {friend.name}
                            </h3>
                            <p className="text-amber-700 text-xs group-hover:text-amber-600 transition-colors duration-300 truncate">
                              {friend.description}
                            </p>
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-4 max-h-80 overflow-y-auto">
                    {friendLinks.map((friend, index) => (
                      <a
                        key={index}
                        href={friend.url}
                        className="group block p-3 bg-orange-100 hover:bg-orange-200 border-2 border-amber-700 hover:border-amber-900 transition-all duration-300 hover:shadow-md"
                        style={{
                          boxShadow: '4px 4px 0px rgba(120, 53, 15, 0.2)',
                          transform: 'translateZ(0)'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'translate(-2px, -2px)';
                          e.currentTarget.style.boxShadow = '6px 6px 0px rgba(120, 53, 15, 0.3)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'translateZ(0)';
                          e.currentTarget.style.boxShadow = '4px 4px 0px rgba(120, 53, 15, 0.2)';
                        }}
                      >
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center space-x-2">
                            <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-orange-600 flex items-center justify-center text-white font-bold text-lg border border-amber-800 overflow-hidden">
                              {friend.avatar ? (
                                <img src={friend.avatar} alt={friend.name + '头像'} className="w-full h-full object-cover" />
                              ) : (
                                friend.name.charAt(0)
                              )}
                            </div>
                            {friend.subAvatar && (
                              <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white font-bold text-lg border border-amber-700 overflow-hidden">
                                <img src={friend.subAvatar} alt={friend.name + '副头像'} className="w-full h-full object-cover" />
                              </div>
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-amber-900 font-bold text-base group-hover:text-amber-700 transition-colors duration-300 truncate">
                              {friend.name}
                            </h3>
                            <p className="text-amber-700 text-sm group-hover:text-amber-600 transition-colors duration-300 truncate">
                              {friend.description}
                            </p>
                          </div>
                          <div className="text-amber-600 group-hover:text-amber-800 transition-colors duration-300">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>


        </div>

        {/* 移动端布局 */}
        <div className="lg:hidden flex flex-col min-h-screen">
          {/* 标题 */}
          <div className="p-8 text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-2" style={{ fontFamily: 'Times New Roman, serif' }}>CONTACT</h1>
            <p className="text-lg opacity-70">Interactive Particle System</p>
          </div>

          {/* 点阵图 */}
          <div className="relative h-80 md:h-96 mb-8">
            <canvas
              ref={mobileCanvasRef}
              className="w-full h-full cursor-crosshair"
              onMouseMove={handleMouseMove}
              onTouchStart={(e) => {
                e.preventDefault(); // 阻止默认触摸行为
              }}
              onTouchMove={(e) => {
                e.preventDefault(); // 阻止滚动
                const canvas = mobileCanvasRef.current;
                if (!canvas) return;
                const rect = canvas.getBoundingClientRect();
                const touch = e.touches[0];
                mouseRef.current = {
                  x: touch.clientX - rect.left,
                  y: touch.clientY - rect.top
                };
              }}
              onTouchEnd={(e) => {
                e.preventDefault(); // 阻止默认触摸行为
                mouseRef.current = { x: -1000, y: -1000 };
              }}
              onMouseLeave={() => mouseRef.current = { x: -1000, y: -1000 }}
              style={{ touchAction: 'none' }} // CSS属性阻止触摸滚动
            />
          </div>

          {/* 访客统计和友情链接 */}
           <div className="flex-1 px-4 pb-8 space-y-6">
             {/* 访客统计 */}
             <div className="bg-amber-50/80 border-2 border-amber-800 p-6 rounded-none shadow-lg" style={{
               boxShadow: '8px 8px 0px rgba(120, 53, 15, 0.3)'
             }}>
               <h2 className="text-2xl md:text-3xl font-bold text-amber-900 mb-6 text-center" style={{ fontFamily: 'Times New Roman, serif' }}>网站统计</h2>
               
               <div className="space-y-4 text-amber-800">
                 <div className="flex justify-between items-center border-b border-amber-300 pb-2">
                   <span className="text-base md:text-lg font-semibold">网站亲吻这个世界以来:</span>
                   <span className="font-mono text-base md:text-lg bg-amber-200 px-2 py-1 rounded border border-amber-400">{uptime}</span>
                 </div>
                 
                 <div className="flex justify-between items-center border-b border-amber-300 pb-2">
                   <span className="text-base md:text-lg font-semibold">访问量:</span>
                   <span className="font-mono text-base md:text-lg bg-amber-200 px-2 py-1 rounded border border-amber-400">{visitorCount}</span>
                 </div>
                 
                 <div className="flex justify-between items-center border-b border-amber-300 pb-2">
                   <span className="text-base md:text-lg font-semibold">在线用户:</span>
                   <span className="font-mono text-base md:text-lg bg-amber-200 px-2 py-1 rounded border border-amber-400">{onlineUsers}</span>
                 </div>
                 
                 <div className="mt-6 pt-4 border-t-2 border-amber-800">
                   <div className="text-sm text-amber-700 space-y-1 text-center">
                     <p>© 2025 RainMorime</p>
                     <p>Powered by Next.js</p>
                   </div>
                 </div>
               </div>
             </div>

             {/* 友情链接 */}
             <div className="bg-amber-50/80 border-2 border-amber-800 p-6 rounded-none shadow-lg" style={{
               boxShadow: '8px 8px 0px rgba(120, 53, 15, 0.3)'
             }}>
               <h2 className="text-2xl md:text-3xl font-bold text-amber-900 mb-6 text-center" style={{ fontFamily: 'Times New Roman, serif' }}>友情链接</h2>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                 {friendLinks.map((friend, index) => (
                   <a
                     key={index}
                     href={friend.url}
                     className="group block p-3 bg-orange-100 hover:bg-orange-200 border-2 border-amber-700 hover:border-amber-900 transition-all duration-300 hover:shadow-md"
                     style={{
                       boxShadow: '4px 4px 0px rgba(120, 53, 15, 0.2)',
                       transform: 'translateZ(0)'
                     }}
                     onMouseEnter={(e) => {
                       e.currentTarget.style.transform = 'translate(-2px, -2px)';
                       e.currentTarget.style.boxShadow = '6px 6px 0px rgba(120, 53, 15, 0.3)';
                     }}
                     onMouseLeave={(e) => {
                       e.currentTarget.style.transform = 'translateZ(0)';
                       e.currentTarget.style.boxShadow = '4px 4px 0px rgba(120, 53, 15, 0.2)';
                     }}
                   >
                     <div className="flex items-center space-x-3">
                       <div className="flex items-center space-x-2">
                         <div className="w-8 h-8 bg-gradient-to-br from-amber-600 to-orange-600 flex items-center justify-center text-white font-bold text-sm border border-amber-800 overflow-hidden">
                           {friend.avatar ? (
                             <img src={friend.avatar} alt={friend.name + '头像'} className="w-full h-full object-cover" />
                           ) : (
                             friend.name.charAt(0)
                           )}
                         </div>
                         {friend.subAvatar && (
                           <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white font-bold text-sm border border-amber-700 overflow-hidden">
                             <img src={friend.subAvatar} alt={friend.name + '副头像'} className="w-full h-full object-cover" />
                           </div>
                         )}
                       </div>
                       <div className="flex-1 min-w-0">
                         <h3 className="text-amber-900 font-bold text-sm group-hover:text-amber-700 transition-colors duration-300 truncate">
                           {friend.name}
                         </h3>
                         <p className="text-amber-700 text-xs group-hover:text-amber-600 transition-colors duration-300 truncate">
                           {friend.description}
                         </p>
                       </div>
                       <div className="text-amber-600 group-hover:text-amber-800 transition-colors duration-300">
                         <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                         </svg>
                       </div>
                     </div>
                   </a>
                 ))}
               </div>
             </div>
           </div>
         </div>
       </div>
    </section>
  );
};

export default Contact;