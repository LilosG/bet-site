import company from '../content/settings/company.json';
import header from '../content/settings/header.json';
import footer from '../content/settings/footer.json';
import globalCtas from '../content/settings/global-ctas.json';
import trustProof from '../content/settings/trust.json';
import coverageMap from '../content/settings/coverage-map.json';
import homePage from '../content/pages/home.json';
import aboutPage from '../content/pages/about.json';
import servicesPage from '../content/pages/services.json';
import equipmentPage from '../content/pages/equipment.json';
import industriesPage from '../content/pages/industries.json';
import locationsPage from '../content/pages/locations.json';
import blogPage from '../content/pages/blog.json';
import contactPage from '../content/pages/contact.json';
import privacyPage from '../content/pages/privacy.json';
import termsPage from '../content/pages/terms.json';
import thankYouPage from '../content/pages/thank-you.json';
import serviceSample from '../content/services/rigging.json';
import equipmentSample from '../content/equipment/brewhouses.json';
import industrySample from '../content/industries/craft-brewery.json';
import localLocationSample from '../content/locations/local/san-diego.json';
import nationalLocationSample from '../content/locations/national/seattle.json';
import serviceLocationSample from '../content/service-locations/rigging--san-diego.json';
import equipmentLocationSample from '../content/equipment-locations/brewhouses--san-diego.json';

function recordsFrom<T>(modules: Record<string, { default: T }>): T[] {
  return Object.values(modules)
    .map(module => module.default)
    .sort((left, right) => ((left as any).order ?? 0) - ((right as any).order ?? 0));
}

const serviceModules = import.meta.glob<{ default: typeof serviceSample }>('../content/services/*.json', { eager: true });
const equipmentModules = import.meta.glob<{ default: typeof equipmentSample }>('../content/equipment/*.json', { eager: true });
const industryModules = import.meta.glob<{ default: typeof industrySample }>('../content/industries/*.json', { eager: true });
const localLocationModules = import.meta.glob<{ default: typeof localLocationSample }>('../content/locations/local/*.json', { eager: true });
const nationalLocationModules = import.meta.glob<{ default: typeof nationalLocationSample }>('../content/locations/national/*.json', { eager: true });
const serviceLocationModules = import.meta.glob<{ default: typeof serviceLocationSample }>('../content/service-locations/*.json', { eager: true });
const equipmentLocationModules = import.meta.glob<{ default: typeof equipmentLocationSample }>('../content/equipment-locations/*.json', { eager: true });

export const cms = {
  company,
  header,
  footer,
  globalCtas,
  trustProof,
  coverageMap,
  pages: {
    home: homePage,
    about: aboutPage,
    services: servicesPage,
    equipment: equipmentPage,
    industries: industriesPage,
    locations: locationsPage,
    blog: blogPage,
    contact: contactPage,
    privacy: privacyPage,
    terms: termsPage,
    thankYou: thankYouPage,
  },
} as const;

export const services = recordsFrom(serviceModules);
export const equipmentCategories = recordsFrom(equipmentModules);
export const industries = recordsFrom(industryModules);
export const localLocations = recordsFrom(localLocationModules);
export const nationalLocations = recordsFrom(nationalLocationModules);
export const serviceLocations = recordsFrom(serviceLocationModules);
export const equipmentLocations = recordsFrom(equipmentLocationModules);

export const getService = (slug: string) => services.find(record => record.slug === slug);
export const getEquipmentCategory = (slug: string) => equipmentCategories.find(record => record.slug === slug);
export const getIndustry = (slug: string) => industries.find(record => record.slug === slug);
export const getLocalLocation = (slug: string) => localLocations.find(record => record.slug === slug);
export const getNationalLocation = (slug: string) => nationalLocations.find(record => record.slug === slug);
export const getServiceLocation = (serviceSlug: string, locationSlug: string) =>
  serviceLocations.find(record => record.serviceSlug === serviceSlug && record.locationSlug === locationSlug);
export const getEquipmentLocation = (categorySlug: string, locationSlug: string) =>
  equipmentLocations.find(record => record.categorySlug === categorySlug && record.locationSlug === locationSlug);

export function interpolate(template: string, values: Record<string, string>): string {
  return Object.entries(values).reduce(
    (result, [key, value]) => result.replaceAll(`{${key}}`, value),
    template,
  );
}
