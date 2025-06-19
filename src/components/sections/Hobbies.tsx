import React, { useEffect, useRef, useState } from 'react';
import { webglPostprocessing } from '@/lib/three-examples/webgl_postprocessing_pixel';

import { BookOpen, Music, Tv, Film, Users, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Particles } from "@/components/magicui/Fparticles";
import { FloatingDock } from "@/components/ui/floating-dock";


type TabType = 'books' | 'music' | 'anime' | 'movies' | 'characters';

const tabs = [
  { title: '书籍', value: 'books', icon: <BookOpen className="h-full w-full text-white" /> },
  { title: '音乐', value: 'music', icon: <Music className="h-full w-full text-white" /> },
  { title: '番剧', value: 'anime', icon: <Tv className="h-full w-full text-white" /> },
  { title: '电影', value: 'movies', icon: <Film className="h-full w-full text-white" /> },
  { title: '角色', value: 'characters', icon: <Users className="h-full w-full text-white" /> },
];

const hobbiesData: Record<TabType, any[]> = {
  books: [
    { title: '三体', author: '刘慈欣', description: '一部关于人类文明在宇宙中的兴衰史的史诗级科幻小说。', body: '《三体》是中国科幻作家刘慈欣创作的系列长篇科幻小说，由《三体》、《三体Ⅱ·黑暗森林》、《三体Ⅲ·死神永生》组成，作品讲述了地球人类文明和三体文明的信息交流、生死搏杀及两个文明在宇宙中的兴衰历程。', image: 'https://img.36krcdn.com/20200709/v2_8a338936956643b896a11393321545e3_img_png', rating: 4.9 },
  ],
  music: [
    { title: 'Bohemian Rhapsody', artist: 'Queen', description: '一首融合了歌剧、摇滚和民谣多种风格的传世经典。', body: '《波希米亚狂想曲》（Bohemian Rhapsody）是皇后乐队演唱的歌曲，由佛莱迪·摩克瑞创作，最初版本收录在专辑《A Night at the Opera》（1975年）中。歌曲在音乐结构上极为特殊，无重复的副歌，而是由几个风格差异甚大的部分构成，包括谣曲、吉他独奏、歌剧、硬摇滚等，并充满着猛烈的意识流与噩梦色彩。', image: 'https://upload.wikimedia.org/wikipedia/en/9/9f/Bohemian_Rhapsody.png', rating: 5.0 }, 

  ], 
  anime: [ 
    { title: '新世纪福音战士', studio: 'GAINAX', description: '一部探讨人性、宗教和哲学的里程碑式动画。', body: '《新世纪福音战士》（Neon Genesis Evangelion）是日本动画公司GAINAX的机器人动画作品，由庵野秀明导演。故事背景是2015年的世界，一个巨大的人形兵器“使徒”袭击了第三新东京市，14岁的少年碇真嗣被父亲强迫驾驶泛用人形决战兵器“EVA”与之战斗。作品以其复杂的故事情节、深刻的人物塑造和大量的宗教、哲学意象而闻名，对后来的动画产生了深远的影响。', image: 'https://m.media-amazon.com/images/M/MV5BODZkZjUxNmEtMGEyOS00ZDAyLWE2NDgtM2FlYjFjYjhhZDYxXkEyXkFqcGdeQXVyMTI3MDk3MzQ@._V1_.jpg', rating: 4.9 }, 

  ], 
  movies: [ 
    { title: '肖申克的救赎', director: '弗兰克·德拉邦特', description: '一部关于希望、友谊和自由的经典电影。', body: '《肖申克的救赎》（The Shawshank Redemption）是弗兰克·德拉邦特执导的美国剧情片，改编自斯蒂芬·金的小说《丽塔海华丝及萧山克监狱的救赎》。影片讲述了银行家安尼伊·杜佛兰因被误判谋杀妻子及情人而入狱，在肖申克监狱中度过了19年，最终凭借智慧和毅力重获自由的故事。影片以其深刻的主题、感人至深的情节和出色的表演而成为影史经典。', image: 'https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg', rating: 5.0 }, 
  
  ], 
  characters: [ 
    { title: '小丑', source: 'DC漫画', description: '一个混乱、无政府主义和虚无主义的象征。', body: '小丑是DC漫画旗下的超级反派，蝙蝠侠的头号宿敌。他没有超能力，但拥有超乎常人的智慧和难以捉摸的思维。他的真实身份和起源故事众说纷纭，增添了他的神秘色彩。小丑以其标志性的笑容、夸张的妆容和残忍的幽默感而闻名，是流行文化中最具代表性的反派角色之一。', image: 'https://upload.wikimedia.org/wikipedia/en/9/98/Joker_%28DC_Comics_character%29.jpg', rating: 4.9 }, 
  
  ] 
}; 
 
const HobbyCard: React.FC<{ 
  item: any; 
  onClick: () => void; 
}> = ({ item, onClick }) => { 
  const getSubtitle = () => { 
    if ('author' in item) return item.author; 
    if ('artist' in item) return item.artist; 
    if ('studio' in item) return item.studio; 
    if ('director' in item) return item.director; 
    if ('source' in item) return item.source; 
    return ''; 
  }; 
 
  return ( 
    <motion.div 
      layout 
      onClick={onClick} 
      className="group cursor-pointer w-full" 
      initial={{ opacity: 0, scale: 0.9 }} 
      animate={{ opacity: 1, scale: 1 }} 
      exit={{ opacity: 0, scale: 0.9 }} 
      transition={{ duration: 0.3 }} 
    > 
      <div 
        style={{ '--bg-image': `url(${item.image})` } as React.CSSProperties} 
        className={cn( 
          "relative overflow-hidden rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 h-64", 
          "bg-[image:var(--bg-image)] bg-cover bg-center", 
          "transition-all duration-500" 
        )} 
      > 
        <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-60 transition-opacity duration-300" /> 
        <div className="relative z-10"> 
          <h1 className="font-bold text-xl text-white">{item.title}</h1> 
          <p className="text-sm text-white/70">{getSubtitle()}</p> 
          <div className="text-sm text-white/80 mt-2 max-h-0 opacity-0 group-hover:max-h-20 group-hover:opacity-100 transition-all duration-300 overflow-hidden"> 
            {item.description} 
          </div> 
        </div> 
      </div> 
    </motion.div> 
  ); 
}; 
 
// 弹窗组件 
const HobbyModal: React.FC<{ 
  item: any; 
  onClose: () => void; 
}> = ({ item, onClose }) => { 
  const getSubtitle = () => { 
    if ('author' in item) return item.author; 
    if ('artist' in item) return item.artist; 
    if ('studio' in item) return item.studio; 
    if ('director' in item) return item.director; 
    if ('source' in item) return item.source; 
    return ''; 
  }; 
 
  return ( 
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }} 
      className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4" 
      onClick={onClose} 
    > 
      <motion.div 
        initial={{ scale: 0.95, opacity: 0 }} 
        animate={{ scale: 1, opacity: 1 }} 
        exit={{ scale: 0.95, opacity: 0 }} 
        className="bg-gradient-to-br from-[#2e3346] to-[#1e2336] border border-white/10 rounded-2xl p-6 max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl shadow-black/50" 
        onClick={(e) => e.stopPropagation()} 
      > 
        <div className="flex justify-between items-start mb-6"> 
          <div> 
            <h2 className="text-3xl font-bold text-white mb-1">{item.title}</h2> 
            <span className="text-slate-400 text-lg">{getSubtitle()}</span> 
          </div> 
          <button 
            onClick={onClose} 
            className="text-slate-400 hover:text-white transition-colors" 
          > 
            <X size={28} /> 
          </button> 
        </div> 
         
        <div className="w-full h-64 rounded-lg mb-6 overflow-hidden"> 
          <img src={item.image} alt={item.title} className="w-full h-full object-cover" /> 
        </div> 
         
        <div className="space-y-6"> 
        <div> 
            <h3 className="text-xl font-semibold text-white mb-3">评分</h3> 
            <div className="flex items-center gap-2"> 
              <div className="flex items-center"> 
                {[...Array(5)].map((_, i) => ( 
                  <svg key={i} className={`w-6 h-6 ${i < Math.floor(item.rating) ? 'text-yellow-400' : 'text-gray-600'}`} fill="currentColor" viewBox="0 0 20 20"> 
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.958a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.448a1 1 0 00-.364 1.118l1.287 3.958c.3.921-.755 1.688-1.54 1.118l-3.368-2.448a1 1 0 00-1.175 0l-3.368 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.958a1 1 0 00-.364-1.118L2.25 9.385c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z" /> 
                  </svg> 
                ))} 
              </div> 
              <span className="text-yellow-400 text-xl font-bold">{item.rating.toFixed(1)}</span> 
            </div> 
          </div> 
          <div> 
 
            <p className="text-slate-300 leading-relaxed whitespace-pre-line">{item.body}</p> 
          </div> 
           
 
        </div> 
      </motion.div> 
    </motion.div> 
  ); 
}; 
 
 
 
const Hobbies: React.FC = () => { 
  const mountRef = useRef<HTMLDivElement>(null); 
  const [activeTab, setActiveTab] = useState<TabType>('books'); 
  const [selectedItem, setSelectedItem] = useState<any | null>(null); 
 
  useEffect(() => { 
    if (!mountRef.current) return; 
    const cleanup = webglPostprocessing(mountRef.current); 
    return () => cleanup?.(); 
  }, []); 
 
  const items = hobbiesData[activeTab]; 
 
  return ( 
    <section id="hobbies" className="relative min-h-screen py-16 bg-gradient-to-b from-[#2e3346] to-black text-white">
      <Particles
        className="absolute inset-0"
        quantity={300} // 粒子数量，建议根据性能调整
        ease={80} // 缓动效果，数值越高移动越平滑
        size={1.5} // 粒子大小
        staticity={15} // 静止度，数值越低粒子越活跃
        color={"#ffffff"} // 粒子颜色
        vy={10}
      />
      <div className="relative container mx-auto px-4">
        {/* 标题 */}
        <div className="text-center mb-12 pt-36"> 
          {/* <h2 className="text-4xl font-bold mb-2">我的兴趣爱好</h2> 
          <p className="text-white/70">探索我喜欢的书籍、音乐、番剧、电影和角色</p>  */}
        </div> 
 
        {/* FloatingDock 标签切换 - 桌面端 */}
        <div className="hidden md:flex items-center justify-center w-full mb-15">
          <FloatingDock
            items={tabs.map(tab => ({
              ...tab,
              href: `#${tab.value}`,
              onClick: () => setActiveTab(tab.value as TabType)
            }))}
          />
        </div> 
 
        {/* 上半部分：3D + 卡片 */} 
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8"> 
          {/* 模型 */} 
          <div className="rounded-lg overflow-hidden border border-white/10 shadow-lg"> 
            <div ref={mountRef} className="w-full h-[300px] sm:h-[400px]" style={{ background: 'transparent' }} /> 
          </div>
          
          {/* FloatingDock 标签切换 - 移动端，放在3D模型下方 */}
          <div className="md:hidden flex items-center justify-center w-full mb-6">
            <FloatingDock
              items={tabs.map(tab => ({
                ...tab,
                href: `#${tab.value}`,
                onClick: () => setActiveTab(tab.value as TabType)
              }))}
            />
          </div> 
 
          {/* 卡片右边展示 */} 
          <div className="lg:col-span-2 grid grid-cols-2 gap-6"> 
            <AnimatePresence> 
              {items.slice(0, 4).map((item) => ( 
                <HobbyCard key={item.title} item={item} onClick={() => setSelectedItem(item)} /> 
              ))} 
            </AnimatePresence> 
          </div> 
        </div> 
 
        {/* 下半部分：继续展示卡片 */} 
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"> 
          <AnimatePresence> 
            {items.slice(4).map((item) => ( 
              <HobbyCard key={item.title} item={item} onClick={() => setSelectedItem(item)} /> 
            ))} 
          </AnimatePresence> 
        </div> 
 
        <AnimatePresence> 
          {selectedItem && <HobbyModal item={selectedItem} onClose={() => setSelectedItem(null)} />} 
        </AnimatePresence> 
      </div> 
    </section> 
  ); 
}; 
 
export default Hobbies;