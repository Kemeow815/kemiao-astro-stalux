# Stalux 主题使用指南

## 🚀 安装主题

### 方法一：使用 Astro CLI（推荐）

使用 Astro CLI 可以快速创建一个基于 Stalux 主题的新网站。在命令行中运行：

```bash
# 创建新的 Astro 项目
npm create astro@latest my-blog -- --template xingwangzhe/stalux

# 进入项目目录
cd my-blog

# 安装依赖
npm install

# 开始开发
npm run dev
```

### 方法二：手动安装主题

如果您已经有一个 Astro 项目，也可以手动安装 Stalux 主题：

```bash
# 安装主题
npm install astro-theme-stalux

# 安装所需依赖
npm install @astrojs/mdx @astrojs/sitemap @astrojs/vue astro-expressive-code @expressive-code/plugin-line-numbers astro-pagefind astro-seo dayjs @waline/client
```

## ⚙️ 配置主题

### 基本配置

1. 创建或修改 `src/_config.ts` 文件：
   ```typescript
   // 将 useConfig 设置为 true 以启用自定义配置
   export const useConfig: boolean = true;
   
   // 自定义您的站点配置
   export const siteConfig: SiteConfig = {
     title: '我的博客',
     siteName: '我的博客',
     description: '这是我的个人博客...',
     url: 'https://myblog.com', // 您的网站 URL
     author: '您的名字',
     // 更多配置...
   }
   ```

2. 配置文件结构说明：
   - `title`: 网站标题
   - `description`: 网站描述，用于 SEO
   - `url`: 您的网站完整 URL
   - `author`: 作者名称
   - 完整配置选项请参考 [配置文档](#配置文档)

### 添加内容

1. 在 `src/content/posts/` 目录下创建 Markdown 文件发布文章：

```markdown
---
title: 我的第一篇文章
date: 2025-05-14
tags:
  - 博客
  - Astro
categories:
  - 技术
---

这里是文章内容...
```

2. 在 `src/content/about/` 目录下创建或修改关于页面。

## 📝 内容创作

### 文章结构

所有博客文章应放在 `src/content/posts/` 目录下，支持 `.md` 和 `.mdx` 格式。

文章元数据格式：

```yaml
---
title: 文章标题
date: 2025-05-14
updated: 2025-05-15  # 可选
description: 文章描述，用于 SEO 和预览  # 可选
tags:                # 可选
  - 标签1
  - 标签2
categories:          # 可选
  - 分类1
  - 分类2
  - { name: 分类3, subcategories: [子分类1, 子分类2] }
cover: /path/to/image.jpg  # 可选：文章封面图
---
```

### 关于页面

在 `src/content/about/` 目录下创建 `.md` 或 `.mdx` 文件：

```yaml
---
title: 关于我
priority: 1  # 优先级，数字越大优先级越高
---

这里是关于页面内容...
```

## 🔍 高级功能

### 评论系统

Stalux 集成了 Waline 评论系统，需在配置文件中设置：

```typescript
comment: {
  waline: {
    serverURL: 'https://your-waline-server.vercel.app', // 您的 Waline 服务器地址
    // 更多配置...
  }
}
```

### 搜索功能

Stalux 使用 Pagefind 提供站内搜索功能，构建时会自动生成搜索索引。

### RSS 和站点地图

自动生成 RSS 订阅源和站点地图，无需额外配置。

## 🔧 自定义主题

### 样式定制

您可以在 `src/styles/` 目录下修改或添加样式文件：

- `global.styl`: 全局样式
- `blog.styl`: 博客相关样式
- `themes/`: 主题色彩方案

### 添加自定义页面

在 `src/pages/` 目录下创建新的 `.astro` 文件，设计自己的页面布局和功能。

## 📚 配置文档

详细的配置选项和示例请参考 [完整配置文档](https://stalux.needhelp.icu)。

## 🤝 支持与贡献

如果您在使用过程中遇到问题或有改进建议，欢迎在 [GitHub 仓库](https://github.com/xingwangzhe/stalux) 提交 Issue 或 Pull Request。

## 📄 许可证

Stalux 主题基于 MIT 许可证开源，您可以自由地使用、修改和分发。
