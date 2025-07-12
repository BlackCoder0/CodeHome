'use client';

import React, { useEffect, useState } from 'react';
import { Particles } from "@/components/magicui/Particles";
import { getBangumiIds, getBangumiConfig, getGroupLabels, getBangumiIdsByGroup, getFavoriteBangumiIds } from '@/lib/bangumi-config';
import { Lens } from '@/components/ui/lens';

interface BangumiItem {
  id: number;
  name: string;
  name_cn: string;
  images: { [key: string]: string };
  summary: string;
  rating: { score: number; total: number };
  air_date: string;
  air_weekday: number;
  eps: number;
  collection: { [key: string]: number };
  infobox: { key: string; value: any }[];
}

const getWeekdayName = (weekday: number) => {
  const weekdays = ['', '周一', '周二', '周三', '周四', '周五', '周六', '周日'];
  return weekdays[weekday] || '';
};

const getAirWeekdayFromInfo = (item: BangumiItem) => {
  if (item.infobox) {
    const airWeekdayInfo = item.infobox.find(info => info.key === '放送星期');
    if (airWeekdayInfo) {
      if (typeof airWeekdayInfo.value === 'string') {
        return airWeekdayInfo.value;
      } else if (Array.isArray(airWeekdayInfo.value) && airWeekdayInfo.value.length > 0) {
        return airWeekdayInfo.value[0];
      }
    }
  }
  return getWeekdayName(item.air_weekday);
};

const Bangumi: React.FC = () => {
  const [bangumiList, setBangumiList] = useState<BangumiItem[]>([]);
  const [filteredList, setFilteredList] = useState<BangumiItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<BangumiItem | null>(null);
  const [filterType, setFilterType] = useState<string>(DEFAULT_GROUP);
  const [seasonOptions, setSeasonOptions] = useState<string[]>([]);

  useEffect(() => {
    fetchBangumiData();
  }, []);

  const fetchBangumiData = async () => {
    try {
      setLoading(true);
      setError(null);
      const bangumiData: BangumiItem[] = [];
      const bangumiIds = getBangumiIds();
      if (bangumiIds.length === 0) {
        throw new Error('请在 bangumi-config.ts 中配置你的追番列表');
      }
      for (const id of bangumiIds) {
        try {
          const response = await fetch(
            `https://api.bgm.tv/v0/subjects/${id}`
          );
          if (response.ok) {
            const item = await response.json();
            if (item.type === 2) {
              bangumiData.push({
                id: item.id,
                name: item.name,
                name_cn: item.name_cn || item.name,
                summary: item.summary || '',
                rating: item.rating,
                air_date: item.air_date,
                air_weekday: item.air_weekday || 0,
                eps: item.eps,
                infobox: item.infobox || [],
                images: item.images,
                collection: item.collection
              });
            }
          }
        } catch (itemError) {
          console.warn(`获取番剧 ${id} 信息失败:`, itemError);
        }
        await new Promise(resolve => setTimeout(resolve, 200));
      }
      if (bangumiData.length === 0) {
        throw new Error('未能获取到任何番剧数据');
      }
      // 使用配置的分组选项
      const groups = getGroupLabels().filter(label => label !== "喜欢的番剧");
      setSeasonOptions(groups);
      setBangumiList(bangumiData);
      setFilteredList(bangumiData);
    } catch (err) {
      console.error('获取番剧数据失败:', err);
      setError('获取番剧数据失败，请检查番剧ID配置或稍后重试');
      
    } finally {
      setLoading(false);
    }
  };

  // 筛选番剧
  const filterBangumi = (type: string) => {
    setFilterType(type);
    let listToFilter = [...bangumiList];

    if (type === "favorite") {
      const favoriteIds = getFavoriteBangumiIds();
      setFilteredList(listToFilter.filter(item => favoriteIds.includes(item.id)));
    } else {
      const groupIds = getBangumiIdsByGroup(type);
      setFilteredList(listToFilter.filter(item => groupIds.includes(item.id)));
    }
  };

  useEffect(() => {
    filterBangumi(filterType);
  }, [bangumiList]);

  const handleItemClick = (item: BangumiItem) => {
    setSelectedItem(item);
    // 锁定背景滚动
    document.body.style.overflow = 'hidden';
  };
  
  const handleCloseDetail = () => {
    setSelectedItem(null);
    // 恢复背景滚动
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="bangumi" className="relative min-h-screen py-8 bg-black overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <Particles
        className="absolute inset-0 z-0"
        quantity={150}
        ease={80}
        size={1.5}
        staticity={30}
        color={"#6366f1"}
        vy={3}
      />
      
      <div className="relative z-10 container mx-auto px-4 ml-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent mb-6">
            我的追番
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-4">
            正在追的番剧，数据来源于 Bangumi.tv
          </p>
          
          {/* 筛选下拉框 */}
          <div className="flex justify-center gap-4 mb-8">
            <select
              value={filterType}
              onChange={e => filterBangumi(e.target.value)}
              className="px-6 py-2 rounded-full bg-white/10 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 shadow backdrop-blur-sm"
            >
              <option value="favorite">喜欢的番剧</option>
              {seasonOptions.map((opt: string) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>
        </div>

        {loading && (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
            <span className="ml-4 text-white text-lg">加载中...</span>
          </div>
        )}

        {error && (
          <div className="text-center py-12">
            <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-6 max-w-md mx-auto">
              <p className="text-red-300 mb-4">{error}</p>
              <button 
                onClick={fetchBangumiData}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition-colors"
              >
                重试
              </button>
            </div>
          </div>
        )}

        {!loading && !error && (
          <div className="relative">
            {/* 横向滚动容器 */}
            <div className="overflow-x-auto pb-4">
              <div className="flex gap-6 min-w-max px-4">
                {filteredList.map((item) => (
                  <div key={item.id} className="flex-shrink-0">
                    {/* 电脑端使用Lens效果，移动端保持原样 */}
                    <div className="hidden md:block">
                      <div
                        onClick={() => handleItemClick(item)}
                        className="w-64 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg overflow-hidden transition-all duration-300 cursor-pointer hover:shadow-2xl group hover:border-blue-400/50"
                      >
                        <div className="aspect-[3/4] relative overflow-hidden h-80 w-64">
                          {item.images?.large ? (
                            <Lens zoomFactor={1.2} lensSize={180}>
                              <img
                                src={item.images.large}
                                alt={item.name_cn || item.name}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                  const target = e.target as HTMLImageElement;
                                  target.src = '/assets/placeholder-anime.jpg';
                                }}
                              />
                            </Lens>
                          ) : (
                            <div className="w-full h-full bg-gradient-to-br from-blue-500/30 to-purple-500/30 flex items-center justify-center">
                              <span className="text-white text-sm text-center px-2">
                                {item.name_cn || item.name}
                              </span>
                            </div>
                          )}
                          {item.rating?.score && (
                            <div className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm font-bold">
                              {item.rating.score.toFixed(1)}
                            </div>
                          )}
                        </div>
                        <div className="p-4 transition-opacity duration-300">
                          <h3 className="text-white font-semibold text-sm mb-2 line-clamp-2 h-10">
                            {item.name_cn || item.name}
                          </h3>
                          <div className="flex justify-between items-center text-xs text-gray-300">
                            <span>{getAirWeekdayFromInfo(item)}</span>
                            {item.collection?.doing && (
                              <span>{item.collection.doing} 人在看</span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* 移动端保持原有效果 */}
                    <div className="block md:hidden">
                      <div
                        onClick={() => handleItemClick(item)}
                        className="w-36 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg overflow-hidden hover:bg-white/20 transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-2xl"
                      >
                        <div className="aspect-[3/4] relative overflow-hidden">
                          {item.images?.large ? (
                            <img
                              src={item.images.large}
                              alt={item.name_cn || item.name}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = '/assets/placeholder-anime.jpg';
                              }}
                            />
                          ) : (
                            <div className="w-full h-full bg-gradient-to-br from-blue-500/30 to-purple-500/30 flex items-center justify-center">
                              <span className="text-white text-sm text-center px-2">
                                {item.name_cn || item.name}
                              </span>
                            </div>
                          )}
                          
                          {item.rating?.score && (
                            <div className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm font-bold">
                              {item.rating.score.toFixed(1)}
                            </div>
                          )}
                        </div>
                        
                        <div className="p-4">
                           <h3 className="text-white font-semibold text-sm mb-2 line-clamp-2 h-10">
                             {item.name_cn || item.name}
                           </h3>
                           
                           <div className="flex justify-between items-center text-xs text-gray-300">
                             <span>{getAirWeekdayFromInfo(item)}</span>
                             {/* 移动端不显示在看 */}
                             {/* {item.collection?.doing && (
                               <span>{item.collection.doing} 人在看</span>
                             )} */}
                           </div>
                           
                         </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* 滚动提示和统计信息 */}
            {filteredList.length > 0 ? (
              <div className="text-center mt-4">
                <p className="text-gray-400 text-sm mb-2">
                  ← 左右滑动查看更多 →
                </p>
                <p className="text-gray-500 text-xs">
                  当前显示 {filteredList.length} 部番
                </p>
              </div>
            ) : (
              <div className="text-center mt-8">
                <p className="text-gray-400 text-lg mb-2">暂无符合条件的番剧</p>
                <p className="text-gray-500 text-sm">尝试切换其他筛选条件</p>
              </div>
            )}
          </div>
        )}

        {/* 详情弹窗 */}
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={handleCloseDetail}>
            <div 
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white">
                    {selectedItem.name_cn || selectedItem.name}
                  </h3>
                  <button 
                    onClick={handleCloseDetail}
                    className="text-gray-400 hover:text-white text-2xl"
                  >
                    ×
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    {selectedItem.images?.large && (
                      <img
                        src={selectedItem.images.large}
                        alt={selectedItem.name_cn || selectedItem.name}
                        className="w-full rounded-lg"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = '/assets/placeholder-anime.jpg';
                        }}
                      />
                    )}
                  </div>
                  
                  <div className="text-white space-y-3">
                    <div>
                      <span className="text-gray-300">原名：</span>
                      <span>{selectedItem.name}</span>
                    </div>
                    
                    <div>
                      <span className="text-gray-300">播出时间：</span>
                      <span>{getAirWeekdayFromInfo(selectedItem)}</span>
                    </div>
                    <div>
                      <span className="text-gray-300">总集数：</span>
                      <span>{selectedItem.collection.doing} 人在看</span>
                    </div>
                    {selectedItem.air_date && (
                      <div>
                        <span className="text-gray-300">首播日期：</span>
                        <span>{selectedItem.air_date}</span>
                      </div>
                    )}
                    
                    {selectedItem.rating?.score && (
                      <div>
                        <span className="text-gray-300">评分：</span>
                        <span className="text-yellow-400 font-bold">
                          {selectedItem.rating.score.toFixed(1)}
                        </span>
                        <span className="text-gray-400 ml-1">
                          ({selectedItem.rating.total} 人评价)
                        </span>
                      </div>
                    )}
                    
                    {selectedItem.collection && (
                      <div>
                        <span className="text-gray-300">收藏状态：</span>
                        <div className="text-sm mt-1 space-y-1">
                          {selectedItem.collection.doing > 0 && (
                            <div>在看：{selectedItem.collection.doing} 人</div>
                          )}
                          {selectedItem.collection.collect > 0 && (
                            <div>看过：{selectedItem.collection.collect} 人</div>
                          )}
                          {selectedItem.collection.wish > 0 && (
                            <div>想看：{selectedItem.collection.wish} 人</div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                
                {selectedItem.summary && (
                  <div className="mt-6">
                    <h4 className="text-lg font-semibold text-white mb-2">简介</h4>
                    <p className="text-gray-300 leading-relaxed">
                      {selectedItem.summary}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Bangumi;
const DEFAULT_GROUP = "2025年7月";