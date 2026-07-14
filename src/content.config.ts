// ─────────────────────────────────────────────
//  CONTENT COLLECTIONS — Astro 6 Content Layer
//  File location: src/content.config.ts
//  Uses glob() loader — required in Astro 5+/6.
//  Defines type-safe frontmatter schema for all
//  content collections. Add new collections here.
// ─────────────────────────────────────────────

import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/blog' }),
  schema: z.object({
    // Required
    title:       z.string(),
    description: z.string(),
    pubDate:     z.coerce.date(),
    // Optional
    updatedDate: z.coerce.date().optional(),
    author:      z.string().default('Beverage Equipment Traders'),
    category:    z.enum([
      'Buyer Guides',
      'Equipment Types',
      'Industry News',
      'Rigging & Install',
      'Consignment',
      'Brewery Start-Up',
    ]),
    tags:      z.array(z.string()).default([]),
    heroImage: z.string().optional(),
    heroImageAlt: z.string().min(1),
    draft:     z.boolean().default(false),
  }),
});

export const collections = { blog };
