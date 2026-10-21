import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    slug: z.string(),
    categories: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    cover: z.string().optional(),
    draft: z.boolean().default(false),
    comments: z
      .array(z.object({ author: z.string(), date: z.coerce.date(), content: z.string() }))
      .default([]),
  }),
});

export const collections = { posts };
