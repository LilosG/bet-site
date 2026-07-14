import { getLocalLocation, getNationalLocation, localLocations, nationalLocations } from '../lib/cms';

export type LocationPage = (typeof localLocations)[number] | (typeof nationalLocations)[number];
export const LOCAL_LOCATIONS = localLocations;
export const NATIONAL_LOCATIONS = nationalLocations;
export const getLocalLocationBySlug = getLocalLocation;
export const getNationalLocationBySlug = getNationalLocation;
