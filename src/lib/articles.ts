export interface Article {
  id: string;
  title: string;
  subtitle: string;
  category: 'game' | 'travel' | 'art' | 'other';
  thumbnail: string;
  htmlPath: string;
  publishDate: string;
  tags: string[];
}

export const articles: Article[] = [
  {
    id: 'minecraft',
    title: 'MINECRAFT',
    subtitle: '我的启蒙，也愿成为我的始终。',
    category: 'game',
    thumbnail: '/assets/bg_big.png',
    htmlPath: '/articles/game/minecraft.html',
    publishDate: '2025-01-01',
    tags: ['游戏', '沙盒', '建造']
  },
  {
    id: 'jilin',
    title: '吉林',
    subtitle: '我出生的地方，我的故乡。',
    category: 'travel',
    thumbnail: '/assets/project/jilin-sunset.jpg',
    htmlPath: '/articles/travel/jilin.html',
    publishDate: '2024-12-15',
    tags: ['故乡', '东北', '回忆']
  },
  {
    id: 'digital-art',
    title: '数字艺术',
    subtitle: '像素与创意的碰撞',
    category: 'art',
    thumbnail: '/assets/project/digital-art-banner.jpg',
    htmlPath: '/articles/art/digital-art.html',
    publishDate: '2024-11-20',
    tags: ['数字艺术', '创意', '设计']
  },
  {
    id: 'programming-journey',
    title: '编程之路',
    subtitle: '从零开始的代码人生',
    category: 'other',
    thumbnail: '/assets/project/coding-setup.jpg',
    htmlPath: '/articles/other/programming-journey.html',
    publishDate: '2024-10-10',
    tags: ['编程', '技术', '成长']
  }
];

export const getArticlesByCategory = (category: Article['category']) => {
  return articles.filter(article => article.category === category);
};

export const getArticleById = (id: string) => {
  return articles.find(article => article.id === id);
};

export const categories = [
  { label: '游戏', value: 'game' as const },
  { label: '旅行', value: 'travel' as const },
  { label: '艺术', value: 'art' as const },
  { label: '其他', value: 'other' as const }
];