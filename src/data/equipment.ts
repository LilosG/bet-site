// ─────────────────────────────────────────────
//  EQUIPMENT CATEGORIES — Central Data
//  All equipment landing pages pull from here.
//  Image fields store filename only (e.g. 'brewhouse-hero.webp').
//  Templates resolve to ImageMetadata via import.meta.glob.
// ─────────────────────────────────────────────

import equipmentData from '../content/data/equipment.json';
export interface EquipmentCategory {
  slug: string;
  title: string;
  h1: string;
  shopifyCollectionUrl: string;
  metaTitle: string;
  metaDescription: string;
  description: string;
  bodyContent: string;
  keywords: string[];
  faqs: { q: string; a: string }[];
  priority: 'P0' | 'P1' | 'P2';
  heroImage?: string;            // filename only — resolved via import.meta.glob in template
  featuredItems?: {
    name: string;
    price: string;
    condition: 'Used' | 'New';
    category: string;
    image?: string;              // filename only — resolved via import.meta.glob in template
  }[];
  buyerGuide?: {
    step: number;
    title: string;
    description: string;
  }[];
  bestFitBuyers?: {
    title: string;
    description: string;
    icon: string;
  }[];
}

export const EQUIPMENT_CATEGORIES = equipmentData.equipmentCategories as EquipmentCategory[];

export function getCategoryBySlug(slug: string): EquipmentCategory | undefined {
  return EQUIPMENT_CATEGORIES.find((c) => c.slug === slug);
}
