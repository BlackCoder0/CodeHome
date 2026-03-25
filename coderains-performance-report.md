# coderains.cn 首次加载卡顿性能分析报告

## 核心指标

| 指标 | 数值 | 说明 |
|------|------|------|
| TTFB（首字节时间） | **934ms** | 偏高，正常应 < 200ms |
| DOM 可交互时间 | **6,230ms** | 用户要等超过 6 秒才能交互 |
| DOMContentLoaded | **6,698ms** | |
| HTML 传输大小 | 20KB（解压后 172KB） | gzip 正常 |

---

## 问题一：项目图片体积过大且全部并发加载（最严重）

所有图片在 **t=2688ms 时同时开始并发下载**，互相竞争带宽，导致每张图都要等很久：

| 文件路径 | 原始大小 | 实际耗时 |
|----------|----------|----------|
| `/assets/project/mydiary.jpg` | **621 KB** | 16.8s |
| `/assets/project/bilibili_vue.png` | **605 KB** | 12.3s |
| `/assets/project/github_page.png` | **267 KB** | 7.1s |
| `/assets/logo/正方形.png` | **133 KB** | 17.0s |
| `/assets/project/stusym.png` | **128 KB** | 16.8s |
| `/assets/friend/墨间黑沢.jpg` | **163 KB** | 22.8s |

**根本原因**：项目卡片图片没有使用 Next.js `<Image>` 组件的懒加载，所有图片通过 `preload` 提前请求，把有限带宽全部占满。

**修复方案**：

```jsx
// ❌ 当前写法（普通 img 标签，无懒加载）
<img src="/assets/project/mydiary.jpg" />

// ✅ 修复写法（Next.js Image，自动懒加载 + 自动 WebP 转换）
import Image from 'next/image';
<Image
  src="/assets/project/mydiary.jpg"
  loading="lazy"
  width={400}
  height={300}
  alt="myDiary"
/>
```

同时用 [Squoosh](https://squoosh.app/) 或 `sharp` 将图片压缩并转为 WebP，目标单张 < 50KB。


---

## 问题二：音乐文件在页面加载时立即请求（且请求 4 次）

```
/assets/music/Pieces/Pieces-ClariS.mp3  →  t=6230ms 开始，被请求 4 次（206 Range）
```

MP3 在页面还没完全加载时就开始传输，与图片竞争带宽。多次 Range Request 说明 audio 元素被重复初始化。

**修复方案**：改为用户点击时才加载

```js
// ❌ 当前写法（页面加载就请求 MP3）
const audio = new Audio('/assets/music/Pieces/Pieces-ClariS.mp3');

// ✅ 修复写法（用户交互时才赋值 src）
const audio = new Audio();
function onPlayClick() {
  if (!audio.src) {
    audio.src = '/assets/music/Pieces/Pieces-ClariS.mp3';
  }
  audio.play();
}
```

---

## 问题三：three.js 纹理从外部域名加载

```
[请求] https://threejs.org/examples/textures/checker.png  →  无响应（国内访问缓慢）
```

直接依赖 `threejs.org` 的静态资源，国内访问速度极不稳定。

**修复方案**：将文件下载到本地

```bash
# 下载到项目 public 目录
curl -o public/assets/checker.png https://threejs.org/examples/textures/checker.png
```

```js
// 代码中改为相对路径
textureLoader.load('/assets/checker.png');
```

---

## 问题四：背景图被加载两次

```
/assets/bg_big2.jpg  →  发起了 2 次独立请求
```

`bg_big2.jpg` 同时在 CSS（`background-image`）和 JS 代码中各引用了一次，导致浏览器重复下载。

**修复方案**：检查代码，统一只在一处引用：

```bash
# 在项目中搜索重复引用
grep -r "bg_big2" src/
```

---

## 优化优先级汇总

| 优先级 | 问题 | 预期收益 |
|--------|------|----------|
| 🔴 P0 | 图片压缩 + 懒加载 | 减少 80%+ 首屏加载时间 |
| 🟠 P1 | 音乐改为懒加载 | 释放带宽给首屏资源 |
| 🟠 P1 | three.js 纹理本地化 | 消除外部依赖的不确定性 |
| 🟡 P2 | 修复背景图重复请求 | 减少一次无效网络请求 |
