export interface BangumiCollection {
  doing?: number;
  collect?: number;
  wish?: number;
}

export interface ManualBangumiMeta {
  name: string;
  nameCn?: string;
  summary?: string;
  image?: string;
  airDate?: string;
  airWeekday?: number;
  airWeekdayText?: string;
  eps?: number;
  ratingScore?: number;
  ratingTotal?: number;
  collection?: BangumiCollection;
}

export interface BangumiApiItemConfig {
  id: number;
  note?: string;
  source?: "bangumi";
}

export interface BangumiManualItemConfig {
  id: number;
  note?: string;
  source: "manual";
  manual: ManualBangumiMeta;
}

export type BangumiItemConfig = BangumiApiItemConfig | BangumiManualItemConfig;

export const isManualBangumiItem = (
  item: BangumiItemConfig
): item is BangumiManualItemConfig => {
  return item.source === "manual";
};

export const BANGUMI_GROUPS: Record<string, BangumiItemConfig[]> = {
  喜欢的番剧: [
    { id: 9717, note: "魔法少女小圆" },
    { id: 51928, note: "某科学的超电磁炮S" },
    { id: 79227, note: "游戏人生" },
    { id: 120925, note: "夏洛特" },
    { id: 428735, note: "BanG Dream! It's MyGO!!!!!" },
    { id: 431767, note: "GIRLS BAND CRY" },
    { id: 509986, note: "末日后酒店" },
    { id: 29648, note: "中二病也要谈恋爱！" },
  ],
  "2026年1月": [
    {
      id: 613150,
      source: "manual",
      note: "超时空辉夜姬！",
      manual: {
        name: "超时空辉夜姬！",
        nameCn: "超时空辉夜姬！",
        summary: "Bangumi 当前未提供可直接使用的动画条目，先以手动条目补录。",
        airDate: "2026-01",
        airWeekdayText: "待定",
      },
    },
    { id: 515759, note: "葬送的芙莉莲 第二季" },
    { id: 548818, note: "金牌得主 第二季" },
    { id: 443831, note: "Fate/strange Fake" },
    { id: 565802, note: "辉夜大小姐想让我告白 通往大人的阶梯" },
    { id: 493016, note: "异国日记" },
    {
      id: 342888,
      source: "manual",
      note: "和机器人啪啪啪能算在经验次数里吗？",
      manual: {
        name: "和机器人啪啪啪能算在经验次数里吗？",
        nameCn: "和机器人啪啪啪能算在经验次数里吗？",
        summary: "Bangumi 当前未提供可直接使用的动画条目，先以手动条目补录。",
        airDate: "2026",
        airWeekdayText: "待定",
      },
    },
    // 手动补录模板：
    // {
    //   id: 900001,
    //   source: "manual",
    //   note: "中文标题",
    //   manual: {
    //     name: "Original Title",
    //     nameCn: "中文标题",
    //     summary: "这里写简介。",
    //     image: "/assets/bangumi/custom/example.jpg",
    //     airDate: "2026-01",
    //     airWeekdayText: "未定档",
    //     eps: 12,
    //     ratingScore: 7.8,
    //     ratingTotal: 0,
    //     collection: {
    //       doing: 0,
    //       collect: 0,
    //       wish: 1,
    //     },
    //   },
    // },
  ],
  "2025年7月": [
    { id: 467930, note: "青春猪头少年不做圣诞服女郎的梦" },
    { id: 524707, note: "我怎么可能成为你的恋人，不行不行！(※不是不可能！？)" },
    { id: 510256, note: "与游戏中心的少女异文化交流的故事" },
    { id: 506677, note: "Silent Witch 沉默魔女的秘密" },
    { id: 501614, note: "Bad Girl 不良少女" },
    { id: 513345, note: "薰香花朵凛然绽放" },
  ],
  "2025年4月": [
    { id: 485936, note: "mono女孩" },
    { id: 395493, note: "男女之间的友情存在吗？（不，不存在!!）" },
    { id: 506258, note: "乡下大叔成为剑圣" },
    { id: 509986, note: "末日后酒店" },
  ],
};

export const getGroupLabels = (): string[] => {
  return Object.keys(BANGUMI_GROUPS);
};

export const getBangumiConfig = (): BangumiItemConfig[] => {
  return Object.values(BANGUMI_GROUPS).flat();
};

export const getBangumiIds = (): number[] => {
  const ids = getBangumiConfig()
    .filter(item => !isManualBangumiItem(item))
    .map(item => item.id);
  return [...new Set(ids)];
};

export const getBangumiNote = (id: number): string | undefined => {
  return getBangumiConfig().find(item => item.id === id)?.note;
};

export const getFavoriteBangumiIds = (): number[] => {
  return (BANGUMI_GROUPS["喜欢的番剧"] || []).map(item => item.id);
};

export const getBangumiIdsByGroup = (group: string): number[] => {
  return (BANGUMI_GROUPS[group] || []).map(item => item.id);
};

export const getGroupLabel = (id: number): string | undefined => {
  for (const [label, items] of Object.entries(BANGUMI_GROUPS)) {
    if (items.some(item => item.id === id)) {
      return label;
    }
  }
  return undefined;
};

export const FAVORITE_BANGUMI_IDS = getFavoriteBangumiIds();
export const MANUAL_SEASONS = getGroupLabels().map(label => ({
  label,
  bangumiIds: getBangumiIdsByGroup(label),
}));
export const MY_BANGUMI_LIST = getBangumiConfig();
