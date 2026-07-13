import { config, fields, singleton } from '@keystatic/core';

const seoFields = {
  metaTitle: fields.text({ label: 'Meta Title' }),
  metaDescription: fields.text({ label: 'Meta Description', multiline: true }),
};

const faqFields = fields.array(
  fields.object({
    q: fields.text({ label: 'Question' }),
    a: fields.text({ label: 'Answer', multiline: true }),
  }),
  {
    label: 'FAQs',
    itemLabel: props => props.fields.q.value || 'FAQ',
  }
);

const ctaFields = fields.object({
  label: fields.text({ label: 'CTA Label' }),
  href: fields.text({ label: 'CTA URL / Path' }),
});

const processStepFields = fields.array(
  fields.object({
    step: fields.number({ label: 'Step Number' }),
    title: fields.text({ label: 'Title' }),
    description: fields.text({ label: 'Description', multiline: true }),
  }),
  {
    label: 'Process Steps',
    itemLabel: props => props.fields.title.value || 'Step',
  }
);

const scenarioFields = fields.array(
  fields.object({
    title: fields.text({ label: 'Title' }),
    description: fields.text({ label: 'Description', multiline: true }),
    icon: fields.text({ label: 'Icon Path' }),
  }),
  {
    label: 'Scenarios',
    itemLabel: props => props.fields.title.value || 'Scenario',
  }
);

export default config({
  storage: {
    kind: 'cloud',
  },
  cloud: {
    project: 'gph-websites/bet-site',
  },
  ui: {
    brand: {
      name: 'BET Website CMS',
    },
    navigation: {
      'Site Data': ['siteData'],
      'Core Data': ['servicesData', 'equipmentData', 'industriesData', 'locationsData'],
    },
  },
  singletons: {
    siteData: singleton({
      label: 'Business / Site Data',
      path: 'src/content/data/site',
      format: { data: 'json' },
      schema: {
        SITE: fields.object({
          name: fields.text({ label: 'Business Name' }),
          shortName: fields.text({ label: 'Short Name' }),
          tagline: fields.text({ label: 'Tagline' }),
          description: fields.text({ label: 'Site Description', multiline: true }),
          url: fields.url({ label: 'Website URL' }),
        }),
        NAP: fields.object({
          street: fields.text({ label: 'Street Address' }),
          city: fields.text({ label: 'City' }),
          state: fields.text({ label: 'State' }),
          zip: fields.text({ label: 'ZIP' }),
          phone: fields.text({ label: 'Phone Display' }),
          phonePlain: fields.text({ label: 'Phone E.164' }),
          email: fields.text({ label: 'Email' }),
        }),
        HOURS: fields.array(
          fields.object({
            day: fields.text({ label: 'Day' }),
            open: fields.text({ label: 'Open Time', defaultValue: '' }),
            close: fields.text({ label: 'Close Time', defaultValue: '' }),
            label: fields.text({ label: 'Display Label' }),
          }),
          {
            label: 'Business Hours',
            itemLabel: props => props.fields.day.value || 'Day',
          }
        ),
        SOCIAL: fields.object({
          instagram: fields.url({ label: 'Instagram' }),
          facebook: fields.url({ label: 'Facebook' }),
          linkedin: fields.url({ label: 'LinkedIn' }),
        }),
        GEO: fields.object({
          lat: fields.number({ label: 'Latitude' }),
          lng: fields.number({ label: 'Longitude' }),
          placeId: fields.text({ label: 'Google Place ID' }),
        }),
        STATS: fields.array(
          fields.object({
            value: fields.text({ label: 'Value' }),
            label: fields.text({ label: 'Label' }),
          }),
          {
            label: 'Trust Stats',
            itemLabel: props => props.fields.label.value || 'Stat',
          }
        ),
        CLIENTS: fields.array(fields.text({ label: 'Client Name' }), {
          label: 'Client Names',
          itemLabel: props => props.value || 'Client',
        }),
        SAME_AS: fields.array(fields.url({ label: 'Profile URL' }), {
          label: 'Schema SameAs URLs',
          itemLabel: props => props.value || 'URL',
        }),
      },
    }),

    servicesData: singleton({
      label: 'Services',
      path: 'src/content/data/services',
      format: { data: 'json' },
      schema: {
        services: fields.array(
          fields.object({
            slug: fields.text({ label: 'Slug' }),
            title: fields.text({ label: 'Title' }),
            shortTitle: fields.text({ label: 'Short Title' }),
            h1: fields.text({ label: 'H1' }),
            icon: fields.text({ label: 'Icon Path' }),
            ...seoFields,
            intro: fields.text({ label: 'Intro', multiline: true }),
            bodyContent: fields.text({ label: 'Body Content', multiline: true }),
            processSteps: processStepFields,
            bestFitScenarios: scenarioFields,
            faqs: faqFields,
            cta: ctaFields,
            relatedServices: fields.array(fields.text({ label: 'Service Slug' }), { label: 'Related Services' }),
            relatedEquipment: fields.array(fields.text({ label: 'Equipment Slug' }), { label: 'Related Equipment' }),
            industries: fields.array(fields.text({ label: 'Industry Slug' }), { label: 'Industries' }),
            keywords: fields.array(fields.text({ label: 'Keyword' }), { label: 'Keywords' }),
            heroImage: fields.text({ label: 'Hero Image Filename' }),
          }),
          {
            label: 'Services',
            itemLabel: props => props.fields.title.value || 'Service',
          }
        ),
      },
    }),

    equipmentData: singleton({
      label: 'Equipment Categories',
      path: 'src/content/data/equipment',
      format: { data: 'json' },
      schema: {
        equipmentCategories: fields.array(
          fields.object({
            slug: fields.text({ label: 'Slug' }),
            title: fields.text({ label: 'Title' }),
            h1: fields.text({ label: 'H1' }),
            shopifyCollectionUrl: fields.url({ label: 'Shopify Collection URL' }),
            ...seoFields,
            description: fields.text({ label: 'Description', multiline: true }),
            bodyContent: fields.text({ label: 'Body Content', multiline: true }),
            keywords: fields.array(fields.text({ label: 'Keyword' }), { label: 'Keywords' }),
            faqs: faqFields,
            priority: fields.select({
              label: 'Priority',
              options: [
                { label: 'P0', value: 'P0' },
                { label: 'P1', value: 'P1' },
                { label: 'P2', value: 'P2' },
              ],
              defaultValue: 'P1',
            }),
            heroImage: fields.text({ label: 'Hero Image Filename' }),
            featuredItems: fields.array(
              fields.object({
                name: fields.text({ label: 'Name' }),
                price: fields.text({ label: 'Price' }),
                condition: fields.select({
                  label: 'Condition',
                  options: [
                    { label: 'Used', value: 'Used' },
                    { label: 'New', value: 'New' },
                  ],
                  defaultValue: 'Used',
                }),
                category: fields.text({ label: 'Category' }),
                image: fields.text({ label: 'Image Filename' }),
              }),
              {
                label: 'Featured Items',
                itemLabel: props => props.fields.name.value || 'Item',
              }
            ),
            buyerGuide: processStepFields,
            bestFitBuyers: scenarioFields,
          }),
          {
            label: 'Equipment Categories',
            itemLabel: props => props.fields.title.value || 'Equipment Category',
          }
        ),
      },
    }),

    industriesData: singleton({
      label: 'Industries',
      path: 'src/content/data/industries',
      format: { data: 'json' },
      schema: {
        industries: fields.array(
          fields.object({
            slug: fields.text({ label: 'Slug' }),
            title: fields.text({ label: 'Title' }),
            shortTitle: fields.text({ label: 'Short Title' }),
            h1: fields.text({ label: 'H1' }),
            ...seoFields,
            description: fields.text({ label: 'Description', multiline: true }),
            bodyContent: fields.text({ label: 'Body Content', multiline: true }),
            heroImage: fields.text({ label: 'Hero Image Filename' }),
            services: fields.array(fields.text({ label: 'Service Slug' }), { label: 'Services' }),
            equipment: fields.array(fields.text({ label: 'Equipment Slug' }), { label: 'Equipment' }),
            faqs: faqFields,
            cta: ctaFields,
          }),
          {
            label: 'Industries',
            itemLabel: props => props.fields.title.value || 'Industry',
          }
        ),
      },
    }),

    locationsData: singleton({
      label: 'Locations',
      path: 'src/content/data/locations',
      format: { data: 'json' },
      schema: {
        localLocations: fields.array(
          fields.object({
            slug: fields.text({ label: 'Slug' }),
            city: fields.text({ label: 'City' }),
            state: fields.text({ label: 'State' }),
            type: fields.text({ label: 'Type' }),
            metaTitle: fields.text({ label: 'Meta Title' }),
            metaDescription: fields.text({ label: 'Meta Description', multiline: true }),
            h1: fields.text({ label: 'H1' }),
            intro: fields.text({ label: 'Intro', multiline: true }),
            bodyContent: fields.text({ label: 'Body Content', multiline: true }),
          }),
          {
            label: 'Local Locations',
            itemLabel: props => props.fields.city.value || 'Location',
          }
        ),
        nationalLocations: fields.array(
          fields.object({
            slug: fields.text({ label: 'Slug' }),
            city: fields.text({ label: 'City' }),
            state: fields.text({ label: 'State' }),
            type: fields.text({ label: 'Type' }),
            metaTitle: fields.text({ label: 'Meta Title' }),
            metaDescription: fields.text({ label: 'Meta Description', multiline: true }),
            h1: fields.text({ label: 'H1' }),
            intro: fields.text({ label: 'Intro', multiline: true }),
            bodyContent: fields.text({ label: 'Body Content', multiline: true }),
          }),
          {
            label: 'National Locations',
            itemLabel: props => props.fields.city.value || 'Location',
          }
        ),
      },
    }),
  },
});
