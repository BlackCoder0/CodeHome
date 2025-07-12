// 追番配置文件
// 在这里配置你正在追的番剧ID

// 更自由的番剧配置结构，支持任意分组和季度
export interface BangumiItemConfig {
  id: number;
  note?: string;
}

// 配置对象，key为季度或自定义分组名，value为番剧数组
export const BANGUMI_GROUPS: Record<string, BangumiItemConfig[]> = {
  "喜欢的番剧": [
    { id: 9717, note: "魔法少女小圆" },
    { id: 51928, note: "某科学的超电磁炮S" },
    { id: 79227, note: "游戏人生" },
    { id: 120925, note: "夏洛特" },
    { id: 428735, note: "BanG Dream! It's MyGO!!!!!" },
    { id: 431767, note: "GIRLS BAND CRY" },
    { id: 509986, note: "末日后酒店" },
    { id: 29648, note: "中二病也要谈恋爱！" }
  ],
  "2025年7月": [
    { id: 467930, note: "青春笨蛋少年不做圣诞服女郎的梦" },
    { id: 524707, note: "我怎么可能成为你的恋人，不行不行！(※不是不可能！？) " },
    { id: 510256, note: " 与游戏中心的少女异文化交流的故事" },
    { id: 506677, note: "Silent Witch 沉默魔女的秘密" },
    { id: 501614, note: "Bad Girl 不良少女" },
    { id: 513345, note: "薰香花朵凛然绽放" },
    { id: 390555, note: "新 吊带袜天使" },
    { id: 492199, note: "明日方舟：焰烬曙明" },
  ],
  "2025年4月": [
    { id: 485936, note: "mono女孩" },
    { id: 395493, note: "男女之间的友情存在吗？（不，不存在!!）" },
    { id: 506258, note: "乡下大叔成为剑圣" },
    { id: 509986, note: "末日后酒店" }
  ]
};

// 获取所有分组名
export const getGroupLabels = (): string[] => {
  return Object.keys(BANGUMI_GROUPS);
};

// 获取所有番剧配置
export const getBangumiConfig = (): BangumiItemConfig[] => {
  return Object.values(BANGUMI_GROUPS).flat();
};

// 获取番剧ID列表
export const getBangumiIds = (): number[] => {
  const allIds = getBangumiConfig().map(item => item.id);
  return [...new Set(allIds)];
};

// 根据ID获取备注
export const getBangumiNote = (id: number): string | undefined => {
  const config = getBangumiConfig().find(item => item.id === id);
  return config?.note;
};

// 获取喜欢的番剧ID列表
export const getFavoriteBangumiIds = (): number[] => {
  return (BANGUMI_GROUPS["喜欢的番剧"] || []).map(item => item.id);
};

// 根据分组名获取番剧ID列表
export const getBangumiIdsByGroup = (group: string): number[] => {
  return (BANGUMI_GROUPS[group] || []).map(item => item.id);
};

// 根据ID获取分组名
export const getGroupLabel = (id: number): string | undefined => {
  for (const [label, items] of Object.entries(BANGUMI_GROUPS)) {
    if (items.some(item => item.id === id)) return label;
  }
  return undefined;
};

// 兼容性导出
export const FAVORITE_BANGUMI_IDS = getFavoriteBangumiIds();
export const MANUAL_SEASONS = getGroupLabels().map(label => ({
  label,
  bangumiIds: getBangumiIdsByGroup(label)
}));
export const MY_BANGUMI_LIST = getBangumiConfig();