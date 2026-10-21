# ilen.me

新·太空飞鸽脑内工厂 — 从 WordPress 迁移来的 Astro 静态博客。

- 写文章：在 `src/content/posts/` 新建 `.md`，frontmatter 参考已有文章（`slug` 决定网址 `/<slug>/`）
- 本地预览：`npm run dev`
- 构建：`npm run build`，输出在 `dist/`
- 评论：Giscus，配置在 `src/config.ts`
- 旧地址重定向：`public/_redirects`
