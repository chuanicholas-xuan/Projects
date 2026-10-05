# Projects

My personal site: blog, notes and projects. Built with [Astro](https://astro.build) and the
[AstroPaper](https://github.com/satnaing/astro-paper) theme, published at
https://chuanicholas-xuan.github.io/Projects

## Adding content

**Easiest:** use the dashboard at `/admin` (see below).

Or create a `.md` file yourself:

| To add a... | Put it in | URL |
|---|---|---|
| Blog post | `src/content/blog/` | `/posts/<name>` |
| Note | `src/content/notes/` | `/posts/notes/<name>` |
| Project | `src/content/projects/` | `/posts/projects/<name>` |
| About page text | `src/content/pages/about.md` | `/about` |

```md
---
title: 'My title'
description: 'One-line summary'
pubDatetime: 2026-10-05T09:00:00+08:00
tags: ['ml']
featured: false   # true = shown on the home page
draft: false      # true = hidden from the site
repo: 'https://github.com/...'  # projects only, optional
---
```

Images go in `src/assets/images/`. Site name, socials and features are in `astro-paper.config.ts`.

## Dashboard

```bash
npm run dev
```

Open http://localhost:4321/Projects/admin in Chrome or Edge, choose **Work with Local Repository**,
and select this folder. Then commit and push in GitHub Desktop.

## Publishing

Push to `main`. GitHub Actions builds the site and deploys it to GitHub Pages.
