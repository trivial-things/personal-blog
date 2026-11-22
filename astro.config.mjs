import { defineConfig } from 'astro/config';
import { satteri } from '@astrojs/markdown-satteri';

export default defineConfig({
  site: 'https://trivial-things.github.io',
  base: '/personal-blog',
  trailingSlash: 'always',
  markdown: {
  processor: satteri(),
},
});
