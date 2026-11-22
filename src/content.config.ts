import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const papers = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './paper-notes/papers',
  }),
  schema: z.object({
    title: z.string(),
    paper: z.string(),
    authors: z.string(),
    venue: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()),
  }),
});

export const collections = { papers };
