import type { CollectionEntry } from "astro:content";
import { BLOG_PATH, SECTIONS } from "@/content.config";

/** True when a post's file lives in src/content/<section>/. */
export function inSection(
  post: CollectionEntry<"posts">,
  section: (typeof SECTIONS)[number]
) {
  return post.filePath?.startsWith(`${BLOG_PATH}/${section}/`) ?? false;
}
