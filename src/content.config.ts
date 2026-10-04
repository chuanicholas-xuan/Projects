import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Shared frontmatter for every page: title, description, date and tags.
const base = ({ image }: { image: () => z.ZodType }) =>
	z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		tags: z.array(z.string()).default([]),
		heroImage: z.optional(image()),
	});

const collection = (dir: string) =>
	glob({ base: `./src/content/${dir}`, pattern: '**/*.{md,mdx}' });

const blog = defineCollection({ loader: collection('blog'), schema: base });

const notes = defineCollection({ loader: collection('notes'), schema: base });

const projects = defineCollection({
	loader: collection('projects'),
	schema: (ctx) =>
		base(ctx).extend({
			repo: z.string().url().optional(), // link to the project's code
			demo: z.string().url().optional(), // link to a live demo
		}),
});

export const collections = { blog, notes, projects };
