import { getIndustry, industries } from '../lib/cms';

export type IndustryPage = (typeof industries)[number];
export const INDUSTRIES = industries;
export const getIndustryBySlug = getIndustry;
