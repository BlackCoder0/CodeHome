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
    thumbnail: './assets/bg_big.png',
    htmlPath: './articles/chat/hello.html',
    publishDate: '2025-06-23',
    tags: ['打招呼', '碎碎念']
  },
  {
    id: 'aboutstudy',
    title: '代码很好玩，虽然并不总是快乐',
    subtitle: '关于学习',
    category: 'study',
    thumbnail: './articles_img/20250623-study-1.jpg',
    htmlPath: './articles/study/aboutstudy.html',
    publishDate: '2025-06-23',
    tags: ['校园', '成长', '回忆']
  },
  {
    id: 'cos-cat',
    title: 'cos与猫',
    subtitle: '生活就像糖果，总要有什么甜的来支撑',
    category: 'life',
    thumbnail: './articles_img/20250623-life-1.jpg',
    htmlPath: './articles/life/cos-cat.html',
    publishDate: '2025-06-23',
    tags: ['生活', '你这样可爱的猫猫是要被人吃干抹净的']
  },
  {
    id: 'PB',
    title: '看完魔圆，关于鹿目圆和晓美焰写点感想',
    subtitle: '粉＆黑',
    category: 'other',
    thumbnail: './articles_img/20250623-other-1.jpg',
    htmlPath: './articles/other/PinkBlack.html',
    publishDate: '2025-03-02',
    tags: ['魔法少女小圆', '随笔']
  },
  {
    id: 'GE',
    title: '当焰魔看到金色美瞳的圆，会有怎么样的展开呢',
    subtitle: '同人百合',
    category: 'other',
    thumbnail: './articles_img/20250623-other-3.jpg',
    htmlPath: './articles/other/GoldEye.html',
    publishDate: '2025-05-03',
    tags: ['魔法少女小圆', '同人', '百合']
  },
  {
    id: '2025062901',
    title: '手机摔坏了',
    subtitle: '倒霉日常',
    category: 'life',
    thumbnail: 'undefined',
    htmlPath: './articles/life/20250629.html',
    publishDate: '2025-06-29',
    tags: ['倒霉', '日常']
  },
  {
    id: '2025062902',
    title: '看完末日后酒店了，写点感想',
    subtitle: '荒诞末日下的故事',
    category: 'other',
    thumbnail: './articles_img/20250629-other-2.jpg',
    htmlPath: './articles/other/Hotel.html',
    publishDate: '2025-06-19',
    tags: ['末日后酒店', '随笔']
  },
    {
    id: '2025062903',
    title: '2025.06 更新日志',
    subtitle: '小修小补',
    category: 'chat',
    thumbnail: './articles_img/UPDATE.png',
    htmlPath: './articles/chat/20250629UPDATE.html',
    publishDate: '2025-06-29',
    tags: ['阶段性更新汇报']
  },
    {
    id: '2025071301',
    title: '准备去实习',
    subtitle: '半只脚探了探社会',
    category: 'life',
    thumbnail: 'undefined',
    htmlPath: './articles/life/20250713.html',
    publishDate: '2025-07-13',
    tags: ['实习', '暑假工']
  },
];

export const getArticlesByCategory = (category: Article['category']) => {
  const filtered = articles.filter(article => article.category === category);
  if (category === 'chat') {
    const firstIdx = filtered.findIndex(a => a.id === 'First');
    if (firstIdx > 0) {
      const [firstArticle] = filtered.splice(firstIdx, 1);
      filtered.unshift(firstArticle);
    }
  }
  return filtered.sort((a, b) => {
    if (category === 'chat' && a.id === 'First') return -1;
    if (category === 'chat' && b.id === 'First') return 1;
    return new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime();
  });
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