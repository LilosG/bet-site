import { collection, config, fields, singleton } from "@keystatic/core";
import homePage from "./src/content/pages/home.json";
import aboutPage from "./src/content/pages/about.json";
import servicesPage from "./src/content/pages/services.json";
import equipmentPage from "./src/content/pages/equipment.json";
import industriesPage from "./src/content/pages/industries.json";
import locationsPage from "./src/content/pages/locations.json";
import blogPage from "./src/content/pages/blog.json";
import contactPage from "./src/content/pages/contact.json";
import privacyPage from "./src/content/pages/privacy.json";
import termsPage from "./src/content/pages/terms.json";
import thankYouPage from "./src/content/pages/thank-you.json";
import serviceSample from "./src/content/services/rigging.json";
import equipmentSample from "./src/content/equipment/brewhouses.json";
import industrySample from "./src/content/industries/craft-brewery.json";
import localLocationSample from "./src/content/locations/local/san-diego.json";
import nationalLocationSample from "./src/content/locations/national/seattle.json";
import serviceLocationSample from "./src/content/service-locations/rigging--san-diego.json";
import equipmentLocationSample from "./src/content/equipment-locations/brewhouses--san-diego.json";

const humanize = (value: string) =>
  value
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (character) => character.toUpperCase());

type EditorKind =
  | "page"
  | "settings"
  | "service"
  | "equipment"
  | "industry"
  | "localMarket"
  | "nationalMarket"
  | "serviceMarket"
  | "equipmentMarket";

type SchemaContext = {
  editor: EditorKind;
  path?: string[];
};

const imageKeys = new Set(["image", "heroImage", "logo"]);
const multilineKeys = new Set([
  "description",
  "metaDescription",
  "body",
  "bodyContent",
  "intro",
  "paragraph",
  "locationParagraph",
  "marketParagraph",
  "sidebarBody",
  "subtext",
  "contactBody",
  "heroBody",
  "finalCtaBody",
]);

const advancedKeys = new Set([
  "slug",
  "serviceSlug",
  "categorySlug",
  "locationSlug",
  "order",
  "priority",
  "type",
  "icon",
  "keywords",
  "shopifyCollectionUrl",
  "mapUrl",
  "mapTitle",
  "url",
  "sameAs",
  "defaultOgImage",
  "placeId",
  "lat",
  "lng",
  "phonePlain",
  "geo",
]);

const relationshipCollections: Record<string, string> = {
  serviceSlug: "services",
  categorySlug: "equipmentCategories",
};

const multiRelationshipCollections: Record<string, string> = {
  industries: "industries",
  relatedServices: "services",
  relevantServices: "services",
  relatedEquipment: "equipmentCategories",
  relevantEquipment: "equipmentCategories",
  featuredEquipmentTypes: "equipmentCategories",
};

const labels: Record<string, string> = {
  seo: "Search Engine Settings",
  hero: "Hero Section",
  h1: "Main Page Heading",
  heroBody: "Introductory Text",
  intro: "Introductory Text",
  body: "Section Text",
  bodyContent: "Main Page Text",
  paragraph: "Section Text",
  paragraphs: "Section Paragraphs",
  heading: "Section Heading",
  eyebrow: "Small Section Label",
  heroImage: "Main Page Image",
  heroImageAlt: "Image Description for Accessibility",
  imageAlt: "Image Description for Accessibility",
  logoAlt: "Logo Description for Accessibility",
  metaTitle: "Search Result Title",
  metaDescription: "Search Result Description",
  slug: "Page URL",
  serviceSlug: "Service",
  categorySlug: "Equipment Category",
  locationSlug: "Market",
  primaryCta: "Primary Button",
  secondaryCta: "Secondary Button",
  cta: "Call-to-Action Button",
  label: "Button or Link Text",
  href: "Button or Link Destination",
  finalCta: "Final Call to Action",
  finalPrimaryCta: "Primary Button",
  finalSecondaryCta: "Secondary Button",
  finalCtaHeading: "Call-to-Action Heading",
  finalCtaBody: "Call-to-Action Text",
  breadcrumbLabel: "Breadcrumb Page Name",
  draft: "Save as Draft",
  order: "Display Order",
  priority: "Display Priority",
  shopifyCollectionUrl: "Live Inventory Link",
  keywords: "Search Keywords",
  image: "Section Image",
  logo: "Company Logo",
  name: "Name",
  shortName: "Short Name",
  shortTitle: "Short Display Name",
  title: "Display Name",
  description: "Introductory Text",
  statistics: "Statistics",
  clients: "Client Logos",
  faqs: "Frequently Asked Questions",
  faqHeading: "FAQ Section Heading",
  q: "Question",
  a: "Answer",
  processSteps: "Process Steps",
  buyerGuide: "Buyer Guide Steps",
  bestFitScenarios: "Best-Fit Scenarios",
  bestFitBuyers: "Best-Fit Buyers",
  buyerNeeds: "Buyer Needs",
  relatedServices: "Related Services",
  relevantServices: "Related Services",
  relatedEquipment: "Related Equipment Categories",
  relevantEquipment: "Related Equipment Categories",
  featuredEquipmentTypes: "Featured Equipment Categories",
  featuredItems: "Featured Inventory Items",
  industries: "Related Industries",
  labels: "Advanced Page Labels",
  ariaLabel: "Accessibility Label",
  accessibilityLabel: "Accessibility Label",
  rosterAriaLabel: "Client List Accessibility Label",
  statAriaLabel: "Statistics Accessibility Label",
  ctaAriaLabel: "Call-to-Action Accessibility Label",
  breadcrumbAriaLabel: "Breadcrumb Accessibility Label",
  legalNavigationAriaLabel: "Legal Navigation Accessibility Label",
  primaryNavigationAriaLabel: "Desktop Navigation Accessibility Label",
  mobileNavigationAriaLabel: "Mobile Navigation Accessibility Label",
  serviceHighlightsAriaLabel: "Service Highlights Accessibility Label",
  heroImageAltText: "Image Description for Accessibility",
  external: "Open in a New Tab",
  mapUrl: "Map Embed Link",
  mapTitle: "Map Accessibility Title",
  stateAbbr: "State Abbreviation",
  phonePlain: "Phone Number for Links",
  sameAs: "Official Profile Links",
  defaultOgImage: "Default Social Sharing Image",
  pubDate: "Publication Date",
  updatedDate: "Last Updated Date",
  author: "Author Name",
  category: "Post Category",
  tags: "Post Topics",
  content: "Post Content",
  heroEyebrow: "Small Hero Label",
  processEyebrow: "Small Process Section Label",
  processHeading: "Process Section Heading",
  inventoryEyebrow: "Small Inventory Section Label",
  inventoryHeading: "Inventory Section Heading",
  locationsEyebrow: "Small Locations Section Label",
  locationsHeading: "Locations Section Heading",
  bodyHeading: "Main Content Heading",
  locationParagraph: "Local Service Text",
  marketParagraph: "Market-Specific Text",
  sidebarBody: "Sidebar Text",
  sidebarHeading: "Sidebar Heading",
  trustChips: "Trust Statements",
  relatedServicesLabel: "Related Services Heading",
  relatedLabel: "Related Equipment Heading",
  allInventoryLabel: "All Inventory Link Text",
  browseLabel: "Browse Link Text",
  viewAllLabel: "View All Link Text",
  contactLabel: "Contact Link Text",
  open: "Opening Time",
  close: "Closing Time",
  lat: "Latitude",
  lng: "Longitude",
  placeId: "Google Place ID",
  url: "Website Address",
  group: "Navigation Group",
  step: "Step Number",
  value: "Displayed Value",
  condition: "Equipment Condition",
  price: "Displayed Price",
};

const arrayItemLabels: Record<string, string> = {
  sameAs: "Profile Link",
  keywords: "Keyword",
  trustChips: "Trust Statement",
  facts: "Market Fact",
  cities: "City",
  paragraphs: "Paragraph",
};

const objectLabels: Record<string, string> = {
  nap: "Contact Information",
  social: "Social Media",
  geo: "Map and Location Data",
  navigation: "Navigation Menu",
  inventoryLink: "Inventory Link",
  companyLinks: "Company Links",
  legalLinks: "Legal Links",
  socialLabels: "Social Media Labels",
  featured: "Featured Equipment Section",
  services: "Services Section",
  why: "Why Choose Us Section",
  rigging: "Rigging Section",
  national: "National Service Section",
  local: "Local Markets Section",
  story: "Company Story Section",
  lifecycle: "Equipment Lifecycle Section",
  visit: "Visit Our Facility Section",
  form: "Contact Form",
  sidebar: "Sidebar",
  beverage: "Beverage Industries Section",
  industrial: "Industrial Industries Section",
  posts: "Blog Posts Section",
  topics: "Blog Topics Section",
  postLabels: "Blog Post Labels",
  postFinalCta: "Blog Post Call to Action",
};

function labelFor(key: string, context: SchemaContext) {
  const path = [...(context.path ?? []), key].join(".");
  if (path === "hero.heading") return "Main Page Heading";
  if (path === "hero.body") return "Introductory Text";
  if (path === "hero.image") return "Main Page Image";
  if (path === "hero.imageAlt") return "Image Description for Accessibility";
  if (path === "seo.title") return "Search Result Title";
  if (path === "seo.description") return "Search Result Description";
  if (path.endsWith(".primaryCta.label")) return "Primary Button Text";
  if (path.endsWith(".primaryCta.href")) return "Primary Button Link";
  if (path.endsWith(".secondaryCta.label")) return "Secondary Button Text";
  if (path.endsWith(".secondaryCta.href")) return "Secondary Button Link";
  if (path.endsWith(".cta.label")) return "Button Text";
  if (path.endsWith(".cta.href")) return "Button Link";
  if (path.endsWith(".imageAlt") || path.endsWith(".alt")) {
    return "Image Description for Accessibility";
  }
  if (key === "title" && (context.path?.length ?? 0) > 0) return "Item Title";
  if (key === "name" && (context.path?.length ?? 0) > 0) return "Item Name";
  if (key === "title" && context.editor === "service") return "Service Name";
  if (key === "title" && context.editor === "equipment")
    return "Equipment Category Name";
  if (key === "name" && context.editor === "industry") return "Industry Name";
  if (
    key === "city" &&
    ["localMarket", "nationalMarket"].includes(context.editor)
  ) {
    return "Market Name";
  }
  return labels[key] ?? objectLabels[key] ?? humanize(key);
}

function descriptionFor(key: string, context: SchemaContext, value: unknown) {
  const path = [...(context.path ?? []), key].join(".");
  if (key === "title" && context.editor === "service") {
    return "Edit the main service page and shared service information used across the website.";
  }
  if (key === "title" && context.editor === "equipment") {
    return "Edit the main equipment category and shared content used across the website.";
  }
  if (key === "h1" && context.editor === "serviceMarket") {
    return "Edit one service in one specific market. Use this only when a location needs unique content.";
  }
  if (key === "h1" && context.editor === "equipmentMarket") {
    return "Edit one equipment category in one specific market. Use this only when a location needs unique content.";
  }
  if (key === "city" && context.editor === "localMarket") {
    return "Southern California market where local inspection and rigging are available.";
  }
  if (key === "city" && context.editor === "nationalMarket") {
    return "Market served through nationwide shipping and destination rigging.";
  }
  if (key === "slug")
    return "Controls the page address. Do not change after publishing unless instructed.";
  if (key === "serviceSlug")
    return "Selects the shared service used by this market page. Advanced setting; do not change unless instructed.";
  if (key === "categorySlug")
    return "Selects the shared equipment category used by this market page. Advanced setting; do not change unless instructed.";
  if (key === "locationSlug")
    return "Selects the market used by this page. Advanced setting; do not change unless instructed.";
  if (path === "hero.heading" || key === "h1")
    return "Large heading shown at the top of this page.";
  if (path === "hero.body" || key === "heroBody" || key === "intro")
    return "Introductory text shown near the top of the page. Keep it clear and concise.";
  if (path === "seo.title" || key === "metaTitle")
    return "Title shown in Google search results. Keep it concise and specific.";
  if (path === "seo.description" || key === "metaDescription")
    return "Summary shown in search results. Aim for one clear sentence about this page.";
  if (key === "heroImage" || path === "hero.image")
    return "Main image shown near the top of this page. Use a clear, high-quality landscape image.";
  if (
    key === "imageAlt" ||
    key === "heroImageAlt" ||
    path.endsWith(".imageAlt") ||
    path.endsWith(".alt")
  ) {
    return "Describe what is visible in the image for screen readers and search engines.";
  }
  if (key === "href" || key.endsWith("Href"))
    return "Enter an internal path such as /contact/ or a complete external web address.";
  if (key === "label" && path.includes("Cta"))
    return "Short text displayed on the button.";
  if (key === "draft")
    return "Turn this on to keep the post off the live website.";
  if (key === "faqs")
    return "Questions and answers shown near the bottom of this page. Reorder them into the preferred display order.";
  if (key === "q") return "Question displayed in the FAQ section.";
  if (key === "a")
    return "Answer displayed when a visitor opens this question.";
  if (key === "logo") return "Primary company logo used across the website.";
  if (key === "logoAlt")
    return "Short description of the logo for screen readers.";
  if (key === "pubDate") return "Date this post is first shown as published.";
  if (key === "updatedDate")
    return "Optional date shown when the post has been meaningfully updated.";
  if (key === "content")
    return "Main article content. Use headings to organize longer posts.";
  if (key === "description" && context.editor === "page")
    return "Text shown in this section. Keep the existing tone and formatting.";
  if (advancedKeys.has(key) || key.toLowerCase().includes("arialabel")) {
    return "Advanced setting used by page routing, integrations, or accessibility. Do not change unless instructed.";
  }
  if (Array.isArray(value))
    return "Add, edit, remove, or reorder the items displayed in this section.";
  if (typeof value === "object" && value !== null)
    return `Edit the related ${labelFor(key, context).toLowerCase()} content shown on the website.`;
  if (typeof value === "boolean")
    return `Controls whether ${labelFor(key, context).toLowerCase()} is enabled.`;
  if (typeof value === "number")
    return `Number used for ${labelFor(key, context).toLowerCase()}. Leave unchanged unless this value needs to be updated.`;
  return `Controls the ${labelFor(key, context).toLowerCase()} shown on the website.`;
}

function entryRank(key: string, context: SchemaContext) {
  const isTopLevel = (context.path?.length ?? 0) === 0;
  if (!isTopLevel) {
    if (key === "eyebrow") return 0;
    if (["heading", "h1", "title", "name"].includes(key)) return 10;
    if (
      ["body", "intro", "description", "paragraph", "paragraphs"].includes(key)
    )
      return 20;
    if (key === "image") return 40;
    if (key.endsWith("Alt") || key === "alt") return 41;
    if (key.toLowerCase().includes("cta") || key === "link") return 50;
    if (advancedKeys.has(key) || key.toLowerCase().includes("arialabel"))
      return 90;
    return 30;
  }

  if (context.editor === "page") {
    if (["heading", "intro", "updated"].includes(key)) return 0;
    if (key === "hero") return 10;
    if (key === "breadcrumbLabel") return 75;
    if (key === "seo") return 80;
    if (advancedKeys.has(key) || key === "labels") return 90;
    if (key.toLowerCase().includes("cta")) return 60;
    return 30;
  }

  if (context.editor === "settings") {
    if (advancedKeys.has(key) || key.toLowerCase().includes("arialabel"))
      return 90;
    return 20;
  }

  if (
    [
      "title",
      "shortTitle",
      "name",
      "shortName",
      "city",
      "state",
      "h1",
      "intro",
      "description",
    ].includes(key)
  )
    return 0;
  if (key === "bodyContent") return 10;
  if (["heroImage", "heroImageAlt"].includes(key)) return 30;
  if (
    key.startsWith("related") ||
    key.startsWith("relevant") ||
    key === "industries" ||
    key === "featuredEquipmentTypes"
  )
    return 40;
  if (key === "faqs" || key === "faqHeading") return 50;
  if (["metaTitle", "metaDescription"].includes(key)) return 60;
  if (advancedKeys.has(key) || key === "labels") return 90;
  return 20;
}

function orderedEntries(
  value: Record<string, unknown>,
  context: SchemaContext,
) {
  return Object.entries(value)
    .map((entry, index) => ({ entry, index }))
    .sort(
      (a, b) =>
        entryRank(a.entry[0], context) - entryRank(b.entry[0], context) ||
        a.index - b.index,
    )
    .map(({ entry }) => entry);
}

function schemaForObject(
  value: Record<string, unknown>,
  context: SchemaContext,
): Record<string, any> {
  return Object.fromEntries(
    orderedEntries(value, context).map(([key, child]) => [
      key,
      fieldForValue(key, child, context),
    ]),
  );
}

function fieldForValue(
  key: string,
  value: unknown,
  context: SchemaContext,
): any {
  const label = labelFor(key, context);
  const description = descriptionFor(key, context, value);
  const childContext = { ...context, path: [...(context.path ?? []), key] };

  if (relationshipCollections[key] && typeof value === "string") {
    return fields.relationship({
      label,
      description,
      collection: relationshipCollections[key],
      validation: { isRequired: true },
    });
  }

  if (multiRelationshipCollections[key] && Array.isArray(value)) {
    return fields.multiRelationship({
      label,
      description,
      collection: multiRelationshipCollections[key],
    });
  }

  if (imageKeys.has(key)) {
    return fields.image({ label, description, directory: "src/assets/images" });
  }

  if (Array.isArray(value)) {
    const sample = value[0];
    const element =
      typeof sample === "object" && sample !== null
        ? fields.object(
            schemaForObject(sample as Record<string, unknown>, childContext),
            {
              layout: [12],
            },
          )
        : typeof sample === "number"
          ? fields.number({
              label: "Value",
              description: "Numeric value displayed for this item.",
            })
          : fields.text({
              label: arrayItemLabels[key] ?? humanize(key.replace(/s$/, "")),
              description: "Text displayed for this item.",
              multiline: multilineKeys.has(key),
            });
    return fields.array(element, {
      label,
      description,
      itemLabel: (props) => {
        const item = props as any;
        return (
          item.fields?.title?.value ||
          item.fields?.heading?.value ||
          item.fields?.label?.value ||
          item.fields?.name?.value ||
          item.fields?.q?.value ||
          item.fields?.city?.value ||
          item.value ||
          humanize(key.replace(/s$/, ""))
        );
      },
    });
  }

  if (typeof value === "object" && value !== null) {
    const objectValue = value as Record<string, unknown>;
    return fields.object(schemaForObject(objectValue, childContext), {
      label: objectLabels[key] ?? label,
      description,
      layout: Object.keys(objectValue).length === 2 ? [6, 6] : [12],
    });
  }

  if (typeof value === "number") return fields.number({ label, description });
  if (typeof value === "boolean")
    return fields.checkbox({ label, description });
  return fields.text({ label, description, multiline: multilineKeys.has(key) });
}

const pageSingleton = (
  label: string,
  path: string,
  sample: Record<string, unknown>,
  editor: EditorKind = "page",
) =>
  singleton({
    label,
    path,
    format: { data: "json" },
    schema: schemaForObject(sample, { editor }),
  });

const recordCollection = (
  label: string,
  path: `${string}/*`,
  sample: Record<string, unknown>,
  previewUrl: string,
  editor: EditorKind,
  columns: string[],
) => {
  const { slug: _slug, ...rest } = sample;
  return collection({
    label,
    path,
    slugField: "slug",
    format: { data: "json" },
    previewUrl,
    columns: columns as any,
    schema: {
      ...schemaForObject(rest, { editor }),
      slug: fields.slug({
        name: {
          label: "Page URL",
          description:
            "Controls the page address. Do not change after publishing unless instructed.",
        },
        slug: {
          label: "Generated Route Identifier",
          description: "Advanced setting. Do not change unless instructed.",
        },
      }),
    },
  });
};

export default config({
  storage: { kind: "cloud" },
  cloud: { project: "gph-websites/bet-site" },
  ui: {
    brand: { name: "BET Website CMS" },
    navigation: {
      Website: [
        "home",
        "about",
        "contact",
        "blog",
        "privacy",
        "terms",
        "thankYou",
      ],
      Services: ["servicesPage", "services", "serviceLocations"],
      Equipment: ["equipmentPage", "equipmentCategories", "equipmentLocations"],
      "Industries & Locations": [
        "industriesPage",
        "industries",
        "locations",
        "localLocations",
        "nationalLocations",
      ],
      Blog: ["blogPosts"],
      "Company & Site Settings": [
        "company",
        "header",
        "footer",
        "globalCtas",
        "trustProof",
        "coverageMap",
      ],
    },
  },
  singletons: {
    company: pageSingleton(
      "Company Information",
      "src/content/settings/company",
      {
        name: "Beverage Equipment Traders",
        shortName: "BET",
        tagline: "",
        description: "",
        url: "",
        nap: {
          street: "",
          city: "",
          state: "",
          zip: "",
          phone: "",
          phonePlain: "",
          email: "",
          address: "",
          cityStateZip: "",
        },
        hours: [{ day: "", open: "", close: "", label: "" }],
        social: { instagram: "", facebook: "", linkedin: "" },
        geo: { lat: 0, lng: 0, placeId: "" },
        sameAs: [""],
        defaultOgImage: "",
        logo: "",
        logoAlt: "",
      },
      "settings",
    ),
    header: pageSingleton(
      "Header & Navigation",
      "src/content/settings/header",
      {
        logoAriaLabel: "",
        primaryNavigationAriaLabel: "",
        mobileNavigationAriaLabel: "",
        mobileMenuOpenLabel: "",
        navigation: [
          {
            label: "",
            href: "",
            children: [{ label: "", href: "", external: false, group: "" }],
          },
        ],
        cta: { label: "", href: "" },
      },
      "settings",
    ),
    footer: pageSingleton(
      "Footer",
      "src/content/settings/footer",
      {
        tagline: "",
        equipmentHeading: "",
        inventoryLink: { label: "", href: "" },
        servicesHeading: "",
        companyHeading: "",
        companyLinks: [{ label: "", href: "" }],
        contactHeading: "",
        hoursHeading: "",
        saturdayShortLabel: "",
        copyrightSuffix: "",
        legalNavigationAriaLabel: "",
        legalLinks: [{ label: "", href: "" }],
        socialLabels: { instagram: "", facebook: "", linkedin: "" },
      },
      "settings",
    ),
    globalCtas: pageSingleton(
      "Global Buttons & Labels",
      "src/content/settings/global-ctas",
      {
        cardLearnMoreLabel: "",
        cardViewDetailsLabel: "",
        breadcrumbHomeLabel: "",
        breadcrumbAriaLabel: "",
        faqEyebrow: "",
        statAriaLabel: "",
        ctaAriaLabel: "",
        defaultFaqHeading: "",
        defaultProcessEyebrow: "",
        defaultProcessHeading: "",
        defaultBestFitEyebrow: "",
        defaultBestFitHeading: "",
        defaultBuyerNeedsEyebrow: "",
        defaultBuyerNeedsHeading: "",
      },
      "settings",
    ),
    trustProof: pageSingleton(
      "Trust, Logos & Statistics",
      "src/content/settings/trust",
      {
        heading: "",
        rosterAriaLabel: "",
        statistics: [{ value: "", label: "" }],
        clients: [{ name: "", image: "", imageAlt: "" }],
      },
      "settings",
    ),
    coverageMap: pageSingleton(
      "Coverage Map",
      "src/content/settings/coverage-map",
      {
        eyebrow: "",
        heading: "",
        paragraph: "",
        loadingText: "",
        accessibilityLabel: "",
        headquartersLegend: "",
        marketLegend: "",
      },
      "settings",
    ),
    home: pageSingleton("Home", "src/content/pages/home", homePage),
    about: pageSingleton("About", "src/content/pages/about", aboutPage),
    servicesPage: pageSingleton(
      "Services Overview",
      "src/content/pages/services",
      servicesPage,
    ),
    equipmentPage: pageSingleton(
      "Equipment Overview",
      "src/content/pages/equipment",
      equipmentPage,
    ),
    industriesPage: pageSingleton(
      "Industries Overview",
      "src/content/pages/industries",
      industriesPage,
    ),
    locations: pageSingleton(
      "Locations Overview",
      "src/content/pages/locations",
      locationsPage,
    ),
    blog: pageSingleton("Blog Overview", "src/content/pages/blog", blogPage),
    contact: pageSingleton("Contact", "src/content/pages/contact", contactPage),
    privacy: pageSingleton(
      "Privacy Policy",
      "src/content/pages/privacy",
      privacyPage,
    ),
    terms: pageSingleton("Terms", "src/content/pages/terms", termsPage),
    thankYou: pageSingleton(
      "Thank You Page",
      "src/content/pages/thank-you",
      thankYouPage,
    ),
  },
  collections: {
    services: recordCollection(
      "Individual Services",
      "src/content/services/*",
      serviceSample,
      "/services/{slug}",
      "service",
      ["title", "shortTitle", "h1"],
    ),
    equipmentCategories: recordCollection(
      "Equipment Categories",
      "src/content/equipment/*",
      equipmentSample,
      "/equipment/{slug}",
      "equipment",
      ["title", "h1"],
    ),
    industries: recordCollection(
      "Individual Industries",
      "src/content/industries/*",
      industrySample,
      "/industries/{slug}",
      "industry",
      ["name", "shortName", "h1"],
    ),
    localLocations: recordCollection(
      "Local Markets",
      "src/content/locations/local/*",
      localLocationSample,
      "/locations/local/{slug}",
      "localMarket",
      ["city", "state", "h1"],
    ),
    nationalLocations: recordCollection(
      "National Markets",
      "src/content/locations/national/*",
      nationalLocationSample,
      "/locations/national/{slug}",
      "nationalMarket",
      ["city", "state", "h1"],
    ),
    serviceLocations: recordCollection(
      "Service Areas",
      "src/content/service-locations/*",
      serviceLocationSample,
      "/services/{slug}",
      "serviceMarket",
      ["h1", "serviceSlug", "locationSlug"],
    ),
    equipmentLocations: recordCollection(
      "Equipment Markets",
      "src/content/equipment-locations/*",
      equipmentLocationSample,
      "/equipment/{slug}",
      "equipmentMarket",
      ["h1", "categorySlug", "locationSlug"],
    ),
    blogPosts: collection({
      label: "Blog Posts",
      path: "src/content/blog/*",
      slugField: "title",
      format: { contentField: "content" },
      entryLayout: "content",
      previewUrl: "/blog/{slug}",
      columns: ["title", "category", "pubDate", "draft"],
      schema: {
        title: fields.slug({
          name: {
            label: "Post Title",
            description:
              "Headline shown at the top of the article and in the blog list.",
          },
          slug: {
            label: "Page URL",
            description:
              "Controls the post address. Do not change after publishing unless instructed.",
          },
        }),
        description: fields.text({
          label: "Post Summary",
          description:
            "Short summary shown in blog cards and search results. Use one concise sentence.",
          multiline: true,
        }),
        pubDate: fields.date({
          label: "Publication Date",
          description: "Date this post is first shown as published.",
          validation: { isRequired: true },
        }),
        updatedDate: fields.date({
          label: "Last Updated Date",
          description:
            "Optional date shown when the post has been meaningfully updated.",
        }),
        author: fields.text({
          label: "Author Name",
          description: "Name credited as the author of this post.",
        }),
        category: fields.select({
          label: "Post Category",
          description: "Choose the main topic used to organize this post.",
          options: [
            "Buyer Guides",
            "Equipment Types",
            "Industry News",
            "Rigging & Install",
            "Consignment",
            "Brewery Start-Up",
          ].map((value) => ({ label: value, value })),
          defaultValue: "Buyer Guides",
        }),
        tags: fields.array(
          fields.text({
            label: "Topic",
            description: "A short search topic or phrase.",
          }),
          {
            label: "Post Topics",
            description: "Optional topics that help classify the article.",
            itemLabel: (props) => props.value,
          },
        ),
        heroImage: fields.image({
          label: "Main Post Image",
          description:
            "Large image shown near the top of the article. Use a clear landscape image.",
          directory: "src/assets/images",
        }),
        heroImageAlt: fields.text({
          label: "Image Description for Accessibility",
          description:
            "Describe what is visible in the image for screen readers and search engines.",
        }),
        draft: fields.checkbox({
          label: "Save as Draft",
          description: "Turn this on to keep the post off the live website.",
          defaultValue: false,
        }),
        content: fields.mdx({
          label: "Post Content",
          description:
            "Main article content. Use headings to organize longer posts.",
        }),
      },
    }),
  },
});
