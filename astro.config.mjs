// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';

export default defineConfig({
  adapter: vercel(),
  site: 'https://beverageequipmenttraders.com',
  trailingSlash: 'never',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    keystatic(),
    react(),
    mdx(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }),
  ],
  image: {
    remotePatterns: [{ protocol: 'https' }],
  },
});
