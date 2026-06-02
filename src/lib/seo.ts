// ─────────────────────────────────────────────
//  SEO META UTILITY
// ─────────────────────────────────────────────

import { SITE, NAP } from '../data/site';

export interface SeoProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  noindex?: boolean;
  type?: 'website' | 'article';
}

export function buildTitle(title: string): string {
  if (title === SITE.name) return title;
  return `${title} | ${SITE.name}`;
}

export function buildCanonical(path: string): string {
  const clean = path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
  return `${SITE.url}${clean}`;
}

export const DEFAULT_OG_IMAGE = '/images/og-default.jpg';
