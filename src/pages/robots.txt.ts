// ─────────────────────────────────────────────
//  robots.txt — Astro endpoint
//  Disallows non-content paths, references sitemap.
// ─────────────────────────────────────────────

import type { APIRoute } from 'astro';
import { SITE } from '../data/site';

export const GET: APIRoute = () => {
  const content = `User-agent: *
Allow: /

# Disallow Shopify-style non-content paths
Disallow: /cart
Disallow: /checkout
Disallow: /customer_authentication
Disallow: /search
Disallow: /account

# Sitemap
Sitemap: ${SITE.url}/sitemap-index.xml
`.trim();

  return new Response(content, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
