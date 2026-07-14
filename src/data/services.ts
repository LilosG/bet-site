import { getService, services } from '../lib/cms';

export type Service = (typeof services)[number];
export const SERVICES = services;
export const getServiceBySlug = getService;
