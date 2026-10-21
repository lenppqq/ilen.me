import { getCollection } from 'astro:content';
import categories from './data/categories.json';

export async function getPosts() {
  const posts = await getCollection('posts', ({ data }) => !data.draft);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export const categoryName = (slug: string) =>
  (categories as Record<string, string>)[slug] ?? slug;
export const categorySlugs = Object.keys(categories);

export const postUrl = (slug: string) => `/${slug}/`;

export const formatDate = (d: Date) =>
  `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`;
