import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://ilen.me',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
