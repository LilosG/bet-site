// ─────────────────────────────────────────────
//  SCHEMA.ORG JSON-LD GENERATORS
//  All structured data generated here, injected per page.
// ─────────────────────────────────────────────

import { SITE, NAP, HOURS, SAME_AS, GEO } from '../data/site';
import { requireCmsImage } from './images';

const logo = requireCmsImage(SITE.logo);

// ─── LocalBusiness (homepage and contact) ────
export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE.url}/#local-business`,
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    telephone: NAP.phonePlain,
    email: NAP.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: NAP.street,
      addressLocality: NAP.city,
      addressRegion: NAP.state,
      postalCode: NAP.zip,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: GEO.lat,
      longitude: GEO.lng,
    },
    openingHoursSpecification: HOURS.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: `https://schema.org/${h.day}`,
      ...(h.open ? { opens: h.open, closes: h.close } : {}),
    })),
    sameAs: [...SAME_AS],
    hasMap: `https://www.google.com/maps/place/${encodeURIComponent(NAP.address)}`,
    image: `${SITE.url}${SITE.defaultOgImage}`,
    priceRange: '$$',
    areaServed: [
      { '@type': 'State', name: 'California' },
      { '@type': 'Country', name: 'United States' },
    ],
  };
}

// ─── Organization (sitewide) ─────────────────
export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE.url}/#organization`,
    name: SITE.name,
    url: SITE.url,
    logo: `${SITE.url}${logo.src}`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: NAP.phonePlain,
      contactType: 'sales',
      areaServed: 'US',
    },
    sameAs: [...SAME_AS],
  };
}

// ─── BreadcrumbList ───────────────────────────
export function breadcrumbSchema(crumbs: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: crumb.name,
      item: crumb.url.startsWith('http') ? crumb.url : `${SITE.url}${crumb.url}`,
    })),
  };
}

// ─── FAQPage ──────────────────────────────────
export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };
}

// ─── Service ─────────────────────────────────
export function serviceSchema(params: {
  name: string;
  description: string;
  url: string;
  keywords: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: params.name,
    description: params.description,
    url: `${SITE.url}${params.url}`,
    provider: {
      '@id': `${SITE.url}/#organization`,
    },
    areaServed: {
      '@type': 'Country',
      name: 'United States',
    },
    keywords: params.keywords.join(', '),
  };
}

// ─── Product (equipment category) ────────────
export function productCategorySchema(params: {
  name: string;
  description: string;
  url: string;
  keywords: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: params.name,
    description: params.description,
    url: `${SITE.url}${params.url}`,
    brand: {
      '@type': 'Organization',
      name: SITE.name,
    },
    seller: {
      '@id': `${SITE.url}/#organization`,
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      seller: {
        '@id': `${SITE.url}/#organization`,
      },
    },
    keywords: params.keywords.join(', '),
  };
}

// ─── Serialize any schema to JSON string ─────
export function schemaToScript(schema: object | object[]): string {
  return JSON.stringify(Array.isArray(schema) ? schema : schema, null, 0);
}
