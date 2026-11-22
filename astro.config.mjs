import { defineConfig } from 'astro/config';
import { satteri } from '@astrojs/markdown-satteri';

export default defineConfig({
  site: 'https://trivial-things.github.io',
  base: '/paper-notes',
  trailingSlash: 'always',
  markdown: {
    processor: satteri(),
  },
});
