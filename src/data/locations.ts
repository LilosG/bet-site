// ─────────────────────────────────────────────
//  LOCATION DATA — Local + National Pages
// ─────────────────────────────────────────────

import locationsData from '../content/data/locations.json';
export interface LocationPage {
  slug: string;
  city: string;
  state: string;
  stateAbbr: string;
  type: 'local' | 'national';
  h1: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  bodyContent: string;
  keywords: string[];
  heroImage?: string;
}

// ─── Local Service Areas ──────────────────────
export const LOCAL_LOCATIONS = locationsData.localLocations as LocationPage[];

export const NATIONAL_LOCATIONS = locationsData.nationalLocations as LocationPage[];

export function getLocalLocationBySlug(slug: string): LocationPage | undefined {
  return LOCAL_LOCATIONS.find((l) => l.slug === slug);
}

export function getNationalLocationBySlug(slug: string): LocationPage | undefined {
  return NATIONAL_LOCATIONS.find((l) => l.slug === slug);
}
