'use client';

import React, { useEffect, useState } from 'react';
import { Particles } from '@/components/magicui/Particles';
import { Lens } from '@/components/ui/lens';
import {
  getBangumiConfig,
  getBangumiIdsByGroup,
  getFavoriteBangumiIds,
  getGroupLabels,
  isManualBangumiItem,
  type BangumiManualItemConfig,
} from '@/lib/bangumi-data';

interface BangumiApiResponse {
  id: number;
  type: number;
  name: string;
  name_cn?: string;
  summary?: string;
  images?: Record<string, string>;
  rating?: {
    score?: number;
    total?: number;
  };
  air_date?: string;
  air_weekday?: number;
  eps?: number;
  collection?: Record<string, number>;
  infobox?: Array<{ key: string; value: unknown }>;
}

interface BangumiItem {
  id: number;
  name: string;
  name_cn: string;
  images: Record<string, string>;
  summary: string;
  rating: {
    score: number;
    total: number;
  };
  air_date: string;
  air_weekday: number;
  eps: number;
  collection: Record<string, number>;
  infobox: Array<{ key: string; value: unknown }>;
  manual_air_weekday?: string;
}

const DEFAULT_GROUP = '2026年1月';
const PLACEHOLDER_IMAGE = '/assets/placeholder-anime.jpg';

const getWeekdayName = (weekday: number) => {
  const weekdays = ['', '周一', '周二', '周三', '周四', '周五', '周六', '周日'];
  return weekdays[weekday] || '未定';
};

const getAirWeekdayFromInfo = (item: BangumiItem) => {
  if (item.manual_air_weekday) {
    return item.manual_air_weekday;
  }

  const airWeekdayInfo = item.infobox.find(info => info.key === '放送星期');
  if (airWeekdayInfo) {
    if (typeof airWeekdayInfo.value === 'string') {
      return airWeekdayInfo.value;
    }
    if (Array.isArray(airWeekdayInfo.value) && airWeekdayInfo.value.length > 0) {
      return String(airWeekdayInfo.value[0]);
    }
  }

  return getWeekdayName(item.air_weekday);
};

const createManualBangumiItem = (config: BangumiManualItemConfig): BangumiItem => {
  const manual = config.manual;
  const image = manual.image || PLACEHOLDER_IMAGE;

  return {
    id: config.id,
    name: manual.name,
    name_cn: manual.nameCn || config.note || manual.name,
    images: {
      large: image,
      common: image,
      medium: image,
      small: image,
      grid: image,
    },
    summary: manual.summary || '',
    rating: {
      score: manual.ratingScore || 0,
      total: manual.ratingTotal || 0,
    },
    air_date: manual.airDate || '',
    air_weekday: manual.airWeekday || 0,
    eps: manual.eps || 0,
    collection: {
      doing: manual.collection?.doing || 0,
      collect: manual.collection?.collect || 0,
      wish: manual.collection?.wish || 0,
    },
    infobox: [],
    manual_air_weekday: manual.airWeekdayText,
  };
};

const createApiBangumiItem = (configNote: string | undefined, item: BangumiApiResponse): BangumiItem => {
  return {
    id: item.id,
    name: item.name,
    name_cn: item.name_cn || configNote || item.name,
    summary: item.summary || '',
    rating: {
      score: item.rating?.score || 0,
      total: item.rating?.total || 0,
    },
    air_date: item.air_date || '',
    air_weekday: item.air_weekday || 0,
    eps: item.eps || 0,
    infobox: item.infobox || [],
    images: item.images || {},
    collection: item.collection || {},
  };
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
    const fetchBangumiData = async () => {
      try {
        setLoading(true);
        setError(null);

        const configs = getBangumiConfig();
        if (configs.length === 0) {
          throw new Error('请在 bangumi-data.ts 中配置你的追番列表');
        }

        const bangumiData: BangumiItem[] = [];

        for (const config of configs) {
          if (isManualBangumiItem(config)) {
            bangumiData.push(createManualBangumiItem(config));
            continue;
          }

          try {
            const response = await fetch(`https://api.bgm.tv/v0/subjects/${config.id}`);
            if (!response.ok) {
              continue;
            }

            const item = (await response.json()) as BangumiApiResponse;
            if (item.type !== 2) {
              console.warn(`番剧 ${config.id} 不是动画条目，已跳过。`);
              continue;
            }

            bangumiData.push(createApiBangumiItem(config.note, item));
          } catch (itemError) {
            console.warn(`获取番剧 ${config.id} 信息失败:`, itemError);
          }

          await new Promise(resolve => setTimeout(resolve, 200));
        }

        if (bangumiData.length === 0) {
          throw new Error('未能获取到任何番剧数据');
        }

        setSeasonOptions(getGroupLabels().filter(label => label !== '喜欢的番剧'));
        setBangumiList(bangumiData);
      } catch (err) {
        console.error('获取番剧数据失败:', err);
        setError('获取番剧数据失败，请检查 bangumi-data.ts 配置或稍后重试');
      } finally {
        setLoading(false);
      }
    };

    fetchBangumiData();
  }, []);

  useEffect(() => {
    const source = [...bangumiList];
    if (filterType === 'favorite') {
      const favoriteIds = getFavoriteBangumiIds();
      setFilteredList(source.filter(item => favoriteIds.includes(item.id)));
      return;
    }

    const groupIds = getBangumiIdsByGroup(filterType);
    setFilteredList(source.filter(item => groupIds.includes(item.id)));
  }, [bangumiList, filterType]);

  const handleItemClick = (item: BangumiItem) => {
    setSelectedItem(item);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseDetail = () => {
    setSelectedItem(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section
      id="bangumi"
      className="relative min-h-screen overflow-hidden py-8"
      style={{
        background:
          'linear-gradient(180deg, #111827 0%, #12172a 18%, #151625 40%, #14131f 62%, #111117 82%, #0d1016 100%)',
      }}
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-x-0 top-0 h-32 bg-[linear-gradient(180deg,rgba(129,140,248,0.1),rgba(99,102,241,0.05)_34%,transparent)]" />
        <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute right-8 top-36 h-[26rem] w-[26rem] rounded-full bg-fuchsia-400/8 blur-3xl" />
        <div className="absolute bottom-24 right-10 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/5 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-52 bg-[linear-gradient(180deg,transparent,rgba(245,158,11,0.05)_42%,rgba(13,16,22,0.84)_100%)]" />
      </div>

      <Particles
        className="absolute inset-0 z-0"
        quantity={150}
        ease={80}
        size={1.5}
        staticity={30}
        color="#6366f1"
        vy={3}
      />

      <div className="relative z-10 container mx-auto ml-20 px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-6 bg-gradient-to-r from-cyan-200 via-sky-300 to-indigo-300 bg-clip-text text-4xl font-bold text-transparent drop-shadow-[0_0_24px_rgba(125,211,252,0.18)] md:text-5xl">
            我的追番
          </h2>
          <p className="mx-auto mb-4 max-w-2xl text-xl text-gray-300">
            正在追的番剧，支持 Bangumi 数据和手动补录条目
          </p>

          <div className="mb-8 flex justify-center gap-4">
            <select
              value={filterType}
              onChange={e => setFilterType(e.target.value)}
              className="rounded-full bg-white/10 px-6 py-2 text-gray-300 shadow backdrop-blur-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="favorite">喜欢的番剧</option>
              {seasonOptions.map(opt => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
        </div>

        {loading && (
          <div className="flex h-64 items-center justify-center">
            <div className="h-16 w-16 animate-spin rounded-full border-b-2 border-t-2 border-blue-500" />
            <span className="ml-4 text-lg text-white">加载中...</span>
          </div>
        )}

        {error && (
          <div className="py-12 text-center">
            <div className="mx-auto max-w-md rounded-lg border border-red-500/50 bg-red-500/20 p-6">
              <p className="mb-4 text-red-300">{error}</p>
            </div>
          </div>
        )}

        {!loading && !error && (
          <div className="relative">
            <div className="overflow-x-auto pb-4">
              <div className="flex min-w-max gap-6 px-4">
                {filteredList.map(item => (
                  <div key={item.id} className="flex-shrink-0">
                    <div className="hidden md:block">
                      <div
                        onClick={() => handleItemClick(item)}
                        className="group w-64 cursor-pointer overflow-hidden rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm transition-all duration-300 hover:border-blue-400/50 hover:shadow-2xl"
                      >
                        <div className="relative h-80 w-64 overflow-hidden">
                          <Lens zoomFactor={1.2} lensSize={180}>
                            <img
                              src={item.images.large || PLACEHOLDER_IMAGE}
                              alt={item.name_cn || item.name}
                              className="h-full w-full object-cover"
                              onError={e => {
                                const target = e.target as HTMLImageElement;
                                target.src = PLACEHOLDER_IMAGE;
                              }}
                            />
                          </Lens>
                          {item.rating.score > 0 && (
                            <div className="absolute right-2 top-2 rounded bg-black/70 px-2 py-1 text-sm font-bold text-white">
                              {item.rating.score.toFixed(1)}
                            </div>
                          )}
                        </div>
                        <div className="p-4 transition-opacity duration-300">
                          <h3 className="mb-2 h-10 line-clamp-2 text-sm font-semibold text-white">
                            {item.name_cn || item.name}
                          </h3>
                          <div className="flex items-center justify-between text-xs text-gray-300">
                            <span>{getAirWeekdayFromInfo(item)}</span>
                            {(item.collection.doing || 0) > 0 && (
                              <span>{item.collection.doing} 人在看</span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="block md:hidden">
                      <div
                        onClick={() => handleItemClick(item)}
                        className="w-36 cursor-pointer overflow-hidden rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/20 hover:shadow-2xl"
                      >
                        <div className="relative aspect-[3/4] overflow-hidden">
                          <img
                            src={item.images.large || PLACEHOLDER_IMAGE}
                            alt={item.name_cn || item.name}
                            className="h-full w-full object-cover"
                            onError={e => {
                              const target = e.target as HTMLImageElement;
                              target.src = PLACEHOLDER_IMAGE;
                            }}
                          />
                          {item.rating.score > 0 && (
                            <div className="absolute right-2 top-2 rounded bg-black/70 px-2 py-1 text-sm font-bold text-white">
                              {item.rating.score.toFixed(1)}
                            </div>
                          )}
                        </div>
                        <div className="p-4">
                          <h3 className="mb-2 h-10 line-clamp-2 text-sm font-semibold text-white">
                            {item.name_cn || item.name}
                          </h3>
                          <div className="flex items-center justify-between text-xs text-gray-300">
                            <span>{getAirWeekdayFromInfo(item)}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {filteredList.length > 0 ? (
              <div className="mt-4 text-center">
                <p className="mb-2 text-sm text-gray-400">左右滑动查看更多</p>
                <p className="text-xs text-gray-500">当前显示 {filteredList.length} 部番</p>
              </div>
            ) : (
              <div className="mt-8 text-center">
                <p className="mb-2 text-lg text-gray-400">暂无符合条件的番剧</p>
                <p className="text-sm text-gray-500">试试切换其他筛选条件</p>
              </div>
            )}
          </div>
        )}

        {selectedItem && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={handleCloseDetail}
          >
            <div
              className="max-h-[80vh] w-full max-w-2xl overflow-y-auto rounded-lg border border-white/20 bg-white/10 backdrop-blur-md"
              onClick={e => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="mb-4 flex items-start justify-between">
                  <h3 className="text-2xl font-bold text-white">
                    {selectedItem.name_cn || selectedItem.name}
                  </h3>
                  <button
                    onClick={handleCloseDetail}
                    className="text-2xl text-gray-400 hover:text-white"
                  >
                    ×
                  </button>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <img
                      src={selectedItem.images.large || PLACEHOLDER_IMAGE}
                      alt={selectedItem.name_cn || selectedItem.name}
                      className="w-full rounded-lg"
                      onError={e => {
                        const target = e.target as HTMLImageElement;
                        target.src = PLACEHOLDER_IMAGE;
                      }}
                    />
                  </div>

                  <div className="space-y-3 text-white">
                    <div>
                      <span className="text-gray-300">原名：</span>
                      <span>{selectedItem.name}</span>
                    </div>

                    <div>
                      <span className="text-gray-300">放送时间：</span>
                      <span>{getAirWeekdayFromInfo(selectedItem)}</span>
                    </div>

                    {selectedItem.eps > 0 && (
                      <div>
                        <span className="text-gray-300">总集数：</span>
                        <span>{selectedItem.eps}</span>
                      </div>
                    )}

                    {selectedItem.air_date && (
                      <div>
                        <span className="text-gray-300">首播日期：</span>
                        <span>{selectedItem.air_date}</span>
                      </div>
                    )}

                    {selectedItem.rating.score > 0 && (
                      <div>
                        <span className="text-gray-300">评分：</span>
                        <span className="font-bold text-yellow-400">
                          {selectedItem.rating.score.toFixed(1)}
                        </span>
                        <span className="ml-1 text-gray-400">
                          ({selectedItem.rating.total} 人评价)
                        </span>
                      </div>
                    )}

                    <div>
                      <span className="text-gray-300">收藏状态：</span>
                      <div className="mt-1 space-y-1 text-sm">
                        {(selectedItem.collection.doing || 0) > 0 && (
                          <div>在看：{selectedItem.collection.doing} 人</div>
                        )}
                        {(selectedItem.collection.collect || 0) > 0 && (
                          <div>看过：{selectedItem.collection.collect} 人</div>
                        )}
                        {(selectedItem.collection.wish || 0) > 0 && (
                          <div>想看：{selectedItem.collection.wish} 人</div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {selectedItem.summary && (
                  <div className="mt-6">
                    <h4 className="mb-2 text-lg font-semibold text-white">简介</h4>
                    <p className="leading-relaxed text-gray-300">{selectedItem.summary}</p>
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
