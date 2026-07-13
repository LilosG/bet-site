// ─────────────────────────────────────────────
//  SERVICES DATA — Central Source
//  All service pages pull exclusively from here.
//  No hardcoded content in templates.
//  heroImage stores filename only — resolved via import.meta.glob in template.
// ─────────────────────────────────────────────

import servicesData from '../content/data/services.json';
export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface BestFitScenario {
  title: string;
  description: string;
  icon: string;
}

export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  h1: string;
  icon: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  bodyContent: string;
  processSteps: ProcessStep[];
  bestFitScenarios: BestFitScenario[];
  faqs: { q: string; a: string }[];
  cta: { label: string; href: string };
  relatedServices: string[];
  relatedEquipment: string[];
  industries: string[];
  keywords: string[];
  heroImage?: string;  // filename only — resolved via import.meta.glob in template
}

export const SERVICES = servicesData.services as Service[];

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
