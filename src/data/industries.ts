// ─────────────────────────────────────────────
//  INDUSTRIES DATA — Niche Expansion Silo
//  BET equipment and services mapped to buyer industries.
//  These pages target non-brewery buyers searching by their
//  industry type, not equipment type.
//
//  Each page answers: "Do you serve my type of operation?"
//  Then routes to relevant equipment categories and services.
// ─────────────────────────────────────────────

import industriesData from '../content/data/industries.json';
export interface IndustryPage {
  slug: string;
  name: string;
  shortName: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  bodyContent: string;
  // Equipment categories most relevant to this industry
  relevantEquipment: string[]; // equipment slugs
  // Services most used by this industry
  relevantServices: string[];  // service slugs
  // What they typically buy/sell
  buyerNeeds: {
    title: string;
    description: string;
  }[];
  // Featured equipment types for this industry (for display)
  featuredEquipmentTypes: string[];
  faqs: { q: string; a: string }[];
  keywords: string[];
  heroImage?: string;
}

export const INDUSTRIES = industriesData.industries as IndustryPage[];

export function getIndustryBySlug(slug: string): IndustryPage | undefined {
  return INDUSTRIES.find((i) => i.slug === slug);
}
