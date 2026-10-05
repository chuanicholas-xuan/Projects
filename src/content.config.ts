import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";
import config from "@/config";

// Blog posts, notes and projects all live under src/content/<section>/
// and share the post pages, tags, search and RSS.
export const BLOG_PATH = "src/content";
export const SECTIONS = ["blog", "notes", "projects"] as const;

const posts = defineCollection({
  loader: glob({ pattern: `{${SECTIONS.join(",")}}/**/[^_]*.{md,mdx}`,
    base: `./${BLOG_PATH}`, }),
  schema: ({ image }) =>
    z.object({
      author: z.string().default(config.site.author),
      pubDatetime: z.coerce.date(),
      modDatetime: z.coerce.date().optional().nullable(),
      title: z.string(),
      featured: z.boolean().optional(),
      draft: z.boolean().optional(),
      tags: z.array(z.string()).default(["others"]),
      ogImage: image().or(z.string()).optional(),
      description: z.string(),
      canonicalURL: z.string().optional(),
      hideEditPost: z.boolean().optional(),
      timezone: z.string().optional(),
      repo: z.string().optional(), // projects: link to the code
      demo: z.string().optional(), // projects: link to a live demo
    }),
});

const pages = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/pages" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    ogImage: z.string().optional(),
    canonicalURL: z.string().optional(),
  }),
});

export const collections = { posts, pages };
