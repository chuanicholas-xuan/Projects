# Projects

My personal site: blog, notes and projects. Built with [Astro](https://astro.build), published at
https://chuanicholas-xuan.github.io/Projects

## Adding content

| To add a... | Create a `.md` file in |
|---|---|
| Blog post | `src/content/blog/` |
| Note | `src/content/notes/` |
| Project page | `src/content/projects/` |

Each file starts with frontmatter:

```md
---
title: 'My title'
description: 'One-line summary'
pubDate: '2026-10-04'
tags: ['ml']
---
```

Project pages can also set `repo:` and `demo:` links.

Then commit and push in GitHub Desktop. The site rebuilds automatically.

## Running locally

```bash
npm install
npm run dev
```

Open http://localhost:4321/Projects
