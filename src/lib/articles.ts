export interface Article {
  id: string;
  title: string;
  subtitle: string;
  category: 'chat' | 'study' | 'life' | 'other';
  thumbnail: string;
  htmlPath: string;
  publishDate: string;
  tags: string[];
}

export const articles: Article[] = [
  {
    id: 'First',
    title: 'Hello World',
    subtitle: '你好啊',
    category: 'chat',
    thumbnail: '/assets/bg_big.png',
    htmlPath: '/articles/chat/hello.html',
    publishDate: '2025-06-23',
    tags: ['打招呼', '碎碎念']
  },
  {
    id: 'aboutstudy',
    title: '代码是毒药',
    subtitle: '关于学习',
    category: 'study',
    thumbnail: '/articles_img/20250623-study-1.jpg',
    htmlPath: '/articles/study/aboutstudy.html',
    publishDate: '2025-06-23',
    tags: ['校园', '成长', '回忆']
  },
  {
    id: 'cos-cat',
    title: 'cos与猫',
    subtitle: '生活就像糖果，总要有什么甜的来支撑',
    category: 'life',
    thumbnail: '/articles_img/20250623-life-1.jpg',
    htmlPath: '/articles/life/cos-cat.html',
    publishDate: '2025-06-23',
    tags: ['生活', '你这样可爱的猫猫是要被人吃干抹净的']
  },
  {
    id: 'PB',
    title: '看完魔圆，关于鹿目圆和晓美焰写点感想',
    subtitle: '粉＆黑',
    category: 'other',
    thumbnail: '/articles_img/20250623-other-1.jpg',
    htmlPath: '/articles/other/PinkBlack.html',
    publishDate: '2025-03-02',
    tags: ['魔法少女小圆', '随笔']
  },
  {
    id: 'GE',
    title: '当焰魔看到金色美瞳的圆，会有怎么样的展开呢',
    subtitle: '同人百合',
    category: 'other',
    thumbnail: '/articles_img/20250623-other-3.jpg',
    htmlPath: '/articles/other/GoldEye.html',
    publishDate: '2025-05-03',
    tags: ['魔法少女小圆', '同人', '百合']
  },
  {
    id: 'GE2',
    title: '当焰魔看到金色美瞳的圆，会有怎么样的展开呢',
    subtitle: '同人百合',
    category: 'other',
    thumbnail: '/articles_img/20250623-other-3.jpg',
    htmlPath: '/articles/other/GoldEye.html',
    publishDate: '2025-05-03',
    tags: ['魔法少女小圆', '同人', '百合']
  },
  {
    id: 'GE3',
    title: '当焰魔看到金色美瞳的圆，会有怎么样的展开呢',
    subtitle: '同人百合',
    category: 'other',
    thumbnail: '/articles_img/20250623-other-3.jpg',
    htmlPath: '/articles/other/GoldEye.html',
    publishDate: '2025-05-03',
    tags: ['魔法少女小圆', '同人', '百合']
  }
];

export const getArticlesByCategory = (category: Article['category']) => {
  return articles
    .filter(article => article.category === category)
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
};

export const getArticleById = (id: string) => {
  return articles.find(article => article.id === id);
};

export const categories = [
  { label: '杂谈', value: 'chat' as const },
  { label: '学习', value: 'study' as const },
  { label: '生活', value: 'life' as const },
  { label: '其他', value: 'other' as const }
];