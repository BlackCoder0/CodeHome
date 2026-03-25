# CodeHome 运行、预览与部署说明

本文档说明 3 件事：

1. 怎么在本地正确运行项目
2. 怎么在本地预览最终上线效果
3. 怎么把当前仓库部署到实际页面

## 1. 项目当前部署方式

这个项目不是传统的 Node 服务端部署，而是：

- 使用 Next.js 构建
- 通过 `output: 'export'` 导出为纯静态站点
- 构建结果输出到 `docs/` 目录
- 构建完成后自动生成 `docs/CNAME` 和 `docs/.nojekyll`

也就是说：

- 开发时看效果：用 `npm run dev`
- 真正上线时使用的内容：是 `docs/` 里的静态文件
- 不要把 `npm start` 当成最终上线预览方式

## 2. 环境要求

当前本机可用环境：

- Node.js `v20.19.5`
- npm `10.9.2`

建议其他机器也尽量使用 Node 20。

## 3. 第一次运行

在项目根目录执行：

```powershell
npm install
```

如果依赖已经安装过，可以跳过这一步。

## 4. 正确的本地开发方式

开发预览使用：

```powershell
npm run dev
```

启动后默认访问：

```text
http://localhost:3000
```

这个模式的特点：

- 适合改代码时实时查看页面
- 支持热更新
- 最接近开发体验
- 但不等于最终静态部署产物

## 5. 正确的本地校验方式

在准备构建前，建议先做一次轻量检查：

```powershell
.\node_modules\.bin\tsc.cmd --noEmit --incremental false
```

如果想补充代码规范检查，可以再执行：

```powershell
npm run lint
```

说明：

- `tsc --noEmit` 用于检查 TypeScript 类型和语法
- `npm run lint` 检查 ESLint 问题
- 两者通过后再构建，出错概率更低

## 6. 本地预览“最终上线效果”的正确方式

因为本项目是静态导出，所以要预览最终部署效果，应按下面顺序执行。

### 第一步：构建静态产物

```powershell
npm run build
```

构建完成后，会得到：

- `docs/index.html`
- `docs/_next/...`
- `docs/CNAME`
- `docs/.nojekyll`

### 第二步：用静态服务器预览 `docs/`

推荐方式一，如果本机有 Python：

```powershell
python -m http.server 4173 --directory docs
```

然后访问：

```text
http://localhost:4173
```

如果你的 Python 不支持 `--directory`，可以先进入目录再启动：

```powershell
Set-Location docs
python -m http.server 4173
```

推荐方式二，如果你习惯用 VS Code Live Server，也可以直接以 `docs/` 作为静态目录打开。

### 为什么这样才是正确预览

因为线上实际访问的是静态导出后的文件，而不是 Next.js 开发服务器。

只有直接预览 `docs/`，才能确认下面这些内容是否正常：

- 静态资源路径
- 自定义域名相关文件是否生成
- 静态导出后的页面跳转是否正常
- 线上首屏资源是否与构建产物一致

## 7. 实际部署到页面的推荐流程

### 方案 A：按当前仓库方式部署到 GitHub Pages

这个仓库已经明显按 GitHub Pages 风格准备好了：

- 分支：`main`
- 导出目录：`docs/`
- 自定义域名文件：`docs/CNAME`

部署步骤如下。

#### 1. 本地更新代码

```powershell
git pull github main
```

#### 2. 安装依赖

```powershell
npm install
```

#### 3. 本地检查

```powershell
.\node_modules\.bin\tsc.cmd --noEmit --incremental false
```

#### 4. 构建静态产物

```powershell
npm run build
```

#### 5. 本地静态预览 `docs/`

```powershell
python -m http.server 4173 --directory docs
```

确认效果无误后，再提交：

```powershell
git add src public docs next.config.ts package.json package-lock.json
git commit -m "build: update static site"
git push github main
```

#### 6. GitHub Pages 配置要求

GitHub 仓库需要满足：

- `Settings -> Pages`
- `Source` 选择 `Deploy from a branch`
- 分支选择 `main`
- 目录选择 `/docs`

如果你的网站使用 `www.coderains.cn`，还需要：

- 保持 `docs/CNAME` 存在
- GitHub Pages 的 Custom domain 配置为 `www.coderains.cn`
- DNS 的 `CNAME` 指向 GitHub Pages 对应地址

## 8. 如果部署到其他静态平台

如果不是 GitHub Pages，而是 Cloudflare Pages、Netlify、静态 Nginx 或 Gitee Pages，本质也一样：

- 先执行 `npm run build`
- 再把 `docs/` 目录作为最终站点根目录上传

也就是说，这个项目真正需要发布的是 `docs/`，不是 `src/`，也不是 `.next/`。

## 9. 常见误区

### 误区 1：执行 `npm start` 就等于上线预览

不是。

当前项目配置了静态导出：

- `next.config.ts` 中有 `output: 'export'`
- 构建输出目录是 `docs/`

因此更接近线上效果的预览方式，是直接启动静态服务器去访问 `docs/`。

### 误区 2：只提交源码，不提交 `docs/`

如果你的实际托管方式是 GitHub Pages 的 `/docs` 目录，那就必须把最新构建后的 `docs/` 一起提交。

否则线上页面不会更新。

### 误区 3：改完代码直接推送，不先本地预览静态产物

这很容易出现：

- 本地开发模式正常
- 但静态导出后资源路径错误
- 结果线上白屏、图片丢失或样式异常

所以推荐流程一定是：

```text
改代码 -> 类型检查 -> npm run build -> 预览 docs -> 提交并推送
```

## 10. 推荐日常命令清单

### 日常开发

```powershell
npm run dev
```

### 类型检查

```powershell
.\node_modules\.bin\tsc.cmd --noEmit --incremental false
```

### 构建静态站点

```powershell
npm run build
```

### 本地预览最终产物

```powershell
python -m http.server 4173 --directory docs
```

## 11. 一句话总结

这个项目的正确使用方式是：

- 开发看效果，用 `npm run dev`
- 上线前验收，用静态服务器预览 `docs/`
- 真正部署时，发布 `docs/` 目录

