import { collection, config, fields, singleton } from '@keystatic/core';
import homePage from './src/content/pages/home.json';
import aboutPage from './src/content/pages/about.json';
import servicesPage from './src/content/pages/services.json';
import equipmentPage from './src/content/pages/equipment.json';
import industriesPage from './src/content/pages/industries.json';
import locationsPage from './src/content/pages/locations.json';
import blogPage from './src/content/pages/blog.json';
import contactPage from './src/content/pages/contact.json';
import privacyPage from './src/content/pages/privacy.json';
import termsPage from './src/content/pages/terms.json';
import thankYouPage from './src/content/pages/thank-you.json';
import serviceSample from './src/content/services/rigging.json';
import equipmentSample from './src/content/equipment/brewhouses.json';
import industrySample from './src/content/industries/craft-brewery.json';
import localLocationSample from './src/content/locations/local/san-diego.json';
import nationalLocationSample from './src/content/locations/national/seattle.json';
import serviceLocationSample from './src/content/service-locations/rigging--san-diego.json';
import equipmentLocationSample from './src/content/equipment-locations/brewhouses--san-diego.json';

const humanize = (value: string) =>
  value
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, character => character.toUpperCase());

const imageKeys = new Set(['image', 'heroImage', 'logo']);
const multilineKeys = new Set([
  'description',
  'metaDescription',
  'body',
  'bodyContent',
  'intro',
  'paragraph',
  'locationParagraph',
  'marketParagraph',
  'sidebarBody',
  'subtext',
  'contactBody',
]);

function schemaForObject(value: Record<string, unknown>): Record<string, any> {
  return Object.fromEntries(
    Object.entries(value).map(([key, child]) => [key, fieldForValue(key, child)]),
  );
}

function fieldForValue(key: string, value: unknown): any {
  const label = humanize(key);

  if (imageKeys.has(key)) {
    return fields.image({ label, directory: 'src/assets/images' });
  }

  if (Array.isArray(value)) {
    const sample = value[0];
    const element =
      typeof sample === 'object' && sample !== null
        ? fields.object(schemaForObject(sample as Record<string, unknown>))
        : typeof sample === 'number'
          ? fields.number({ label: 'Value' })
          : fields.text({ label: 'Value', multiline: multilineKeys.has(key) });
    return fields.array(element, {
      label,
      itemLabel: props => {
        const item = props as any;
        return (
          item.fields?.title?.value ||
          item.fields?.heading?.value ||
          item.fields?.label?.value ||
          item.fields?.name?.value ||
          item.value ||
          humanize(key.replace(/s$/, ''))
        );
      },
    });
  }

  if (typeof value === 'object' && value !== null) {
    return fields.object(schemaForObject(value as Record<string, unknown>), { label });
  }

  if (typeof value === 'number') return fields.number({ label });
  if (typeof value === 'boolean') return fields.checkbox({ label });
  return fields.text({ label, multiline: multilineKeys.has(key) });
}

const pageSingleton = (label: string, path: string, sample: Record<string, unknown>) =>
  singleton({
    label,
    path,
    format: { data: 'json' },
    schema: schemaForObject(sample),
  });

const recordCollection = (
  label: string,
  path: `${string}/*`,
  sample: Record<string, unknown>,
  previewUrl: string,
) => {
  const { slug: _slug, ...rest } = sample;
  return collection({
    label,
    path,
    slugField: 'slug',
    format: { data: 'json' },
    previewUrl,
    columns: ['slug'],
    schema: {
      slug: fields.slug({ name: { label: 'Record Slug' } }),
      ...schemaForObject(rest),
    },
  });
};

export default config({
  storage: { kind: 'cloud' },
  cloud: { project: 'gph-websites/bet-site' },
  ui: {
    brand: { name: 'BET Website CMS' },
    navigation: {
      'Global Content': ['company', 'header', 'footer', 'globalCtas', 'trustProof', 'coverageMap'],
      Pages: ['home', 'about', 'servicesPage', 'equipmentPage', 'industriesPage', 'locations', 'blog', 'contact', 'privacy', 'terms', 'thankYou'],
      'Core Records': ['services', 'equipmentCategories', 'industries', 'localLocations', 'nationalLocations'],
      'Location Pages': ['serviceLocations', 'equipmentLocations'],
      Blog: ['blogPosts'],
    },
  },
  singletons: {
    company: pageSingleton('Company / NAP', 'src/content/settings/company', {
      name: 'Beverage Equipment Traders', shortName: 'BET', tagline: '', description: '', url: '',
      nap: { street: '', city: '', state: '', zip: '', phone: '', phonePlain: '', email: '', address: '', cityStateZip: '' },
      hours: [{ day: '', open: '', close: '', label: '' }],
      social: { instagram: '', facebook: '', linkedin: '' },
      geo: { lat: 0, lng: 0, placeId: '' }, sameAs: [''], defaultOgImage: '', logo: '', logoAlt: '',
    }),
    header: pageSingleton('Header / Navigation', 'src/content/settings/header', {
      logoAriaLabel: '', primaryNavigationAriaLabel: '', mobileNavigationAriaLabel: '', mobileMenuOpenLabel: '',
      navigation: [{ label: '', href: '', children: [{ label: '', href: '', external: false, group: '' }] }],
      cta: { label: '', href: '' },
    }),
    footer: pageSingleton('Footer', 'src/content/settings/footer', {
      tagline: '', equipmentHeading: '', inventoryLink: { label: '', href: '' }, servicesHeading: '', companyHeading: '',
      companyLinks: [{ label: '', href: '' }], contactHeading: '', hoursHeading: '', saturdayShortLabel: '', copyrightSuffix: '',
      legalNavigationAriaLabel: '', legalLinks: [{ label: '', href: '' }], socialLabels: { instagram: '', facebook: '', linkedin: '' },
    }),
    globalCtas: pageSingleton('Global Labels / CTAs', 'src/content/settings/global-ctas', {
      cardLearnMoreLabel: '', cardViewDetailsLabel: '', breadcrumbHomeLabel: '', breadcrumbAriaLabel: '', faqEyebrow: '', statAriaLabel: '', ctaAriaLabel: '',
      defaultFaqHeading: '', defaultProcessEyebrow: '', defaultProcessHeading: '', defaultBestFitEyebrow: '', defaultBestFitHeading: '',
      defaultBuyerNeedsEyebrow: '', defaultBuyerNeedsHeading: '',
    }),
    trustProof: pageSingleton('Trust / Proof', 'src/content/settings/trust', {
      heading: '', rosterAriaLabel: '', statistics: [{ value: '', label: '' }], clients: [{ name: '', image: '', imageAlt: '' }],
    }),
    coverageMap: pageSingleton('Coverage Map', 'src/content/settings/coverage-map', {
      eyebrow: '', heading: '', paragraph: '', loadingText: '', accessibilityLabel: '', headquartersLegend: '', marketLegend: '',
    }),
    home: pageSingleton('Home', 'src/content/pages/home', homePage),
    about: pageSingleton('About', 'src/content/pages/about', aboutPage),
    servicesPage: pageSingleton('Services Landing', 'src/content/pages/services', servicesPage),
    equipmentPage: pageSingleton('Equipment Landing', 'src/content/pages/equipment', equipmentPage),
    industriesPage: pageSingleton('Industries Landing', 'src/content/pages/industries', industriesPage),
    locations: pageSingleton('Locations Landing', 'src/content/pages/locations', locationsPage),
    blog: pageSingleton('Blog Landing / Post Labels', 'src/content/pages/blog', blogPage),
    contact: pageSingleton('Contact', 'src/content/pages/contact', contactPage),
    privacy: pageSingleton('Privacy', 'src/content/pages/privacy', privacyPage),
    terms: pageSingleton('Terms', 'src/content/pages/terms', termsPage),
    thankYou: pageSingleton('Thank You', 'src/content/pages/thank-you', thankYouPage),
  },
  collections: {
    services: recordCollection('Services', 'src/content/services/*', serviceSample, '/services/{slug}'),
    equipmentCategories: recordCollection('Equipment Categories', 'src/content/equipment/*', equipmentSample, '/equipment/{slug}'),
    industries: recordCollection('Industries', 'src/content/industries/*', industrySample, '/industries/{slug}'),
    localLocations: recordCollection('Local Locations', 'src/content/locations/local/*', localLocationSample, '/locations/local/{slug}'),
    nationalLocations: recordCollection('National Locations', 'src/content/locations/national/*', nationalLocationSample, '/locations/national/{slug}'),
    serviceLocations: recordCollection('Service + Location Pages', 'src/content/service-locations/*', serviceLocationSample, '/services/{slug}'),
    equipmentLocations: recordCollection('Equipment + Location Pages', 'src/content/equipment-locations/*', equipmentLocationSample, '/equipment/{slug}'),
    blogPosts: collection({
      label: 'Blog Posts',
      path: 'src/content/blog/*',
      slugField: 'title',
      format: { contentField: 'content' },
      entryLayout: 'content',
      previewUrl: '/blog/{slug}',
      columns: ['title', 'category', 'pubDate', 'draft'],
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        description: fields.text({ label: 'Description', multiline: true }),
        pubDate: fields.date({ label: 'Publication Date', validation: { isRequired: true } }),
        updatedDate: fields.date({ label: 'Updated Date' }),
        author: fields.text({ label: 'Author' }),
        category: fields.select({
          label: 'Category',
          options: ['Buyer Guides', 'Equipment Types', 'Industry News', 'Rigging & Install', 'Consignment', 'Brewery Start-Up'].map(value => ({ label: value, value })),
          defaultValue: 'Buyer Guides',
        }),
        tags: fields.array(fields.text({ label: 'Tag' }), { label: 'Tags', itemLabel: props => props.value }),
        heroImage: fields.image({ label: 'Hero Image', directory: 'src/assets/images' }),
        heroImageAlt: fields.text({ label: 'Hero Image Alt Text' }),
        draft: fields.checkbox({ label: 'Draft', defaultValue: false }),
        content: fields.mdx({ label: 'Body' }),
      },
    }),
  },
});
