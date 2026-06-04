// ─────────────────────────────────────────────
//  LOCATION DATA — Local + National Pages
// ─────────────────────────────────────────────

export interface LocationPage {
  slug: string;
  city: string;
  state: string;
  stateAbbr: string;
  type: 'local' | 'national';
  h1: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  bodyContent: string;
  keywords: string[];
  heroImage?: string;
}

// ─── Local Service Areas ──────────────────────
export const LOCAL_LOCATIONS: LocationPage[] = [
  {
    slug: 'san-diego',
    city: 'San Diego',
    state: 'California',
    stateAbbr: 'CA',
    type: 'local',
    heroImage: 'hero-locations.webp',
    h1: 'Brewery Equipment San Diego — New and Used Equipment Dealer',
    metaTitle: 'Brewery Equipment San Diego | Beverage Equipment Traders — San Marcos, CA',
    metaDescription:
      'New and used brewery equipment serving San Diego, CA. Brewhouses, fermenters, canning lines, and more. Rigging and installation available. 30 minutes from downtown San Diego.',
    intro:
      'Serving San Diego\'s craft brewery community from our facility in San Marcos — the region\'s largest concentration of craft producers.',
    bodyContent: `San Diego has one of the highest concentrations of craft breweries per capita in the United States. Beverage Equipment Traders is based in San Marcos, approximately 30 minutes north of downtown San Diego, making us the nearest full-service brewery equipment dealer to most San Diego County breweries.

For San Diego area buyers, in-person inspection of high-value equipment is available by appointment at our 40,000 sq ft facility. Rigging and installation for San Diego County jobs typically turn around within 1 to 2 weeks.

We have worked with San Diego-area craft producers including Karl Strauss, AleSmith, Societe Brewing, and Thorn Brewing. Our equipment inventory reflects the scale of operations common in this market — systems sized for production breweries, not just startup operations.

San Diego buyers benefit from the proximity: shorter freight leads times, local rigging crew availability, and the ability to walk our facility and inspect equipment firsthand before committing.`,
    keywords: [
      'brewery equipment San Diego', 'used brewing equipment San Diego',
      'beer equipment dealer San Diego', 'brewery equipment dealer Southern California',
      'brewery rigging San Diego', 'used fermenters San Diego',
    ],
  },
  {
    slug: 'san-marcos',
    city: 'San Marcos',
    state: 'California',
    stateAbbr: 'CA',
    type: 'local',
    heroImage: 'hero-locations.webp',
    h1: 'Brewery Equipment Dealer San Marcos, CA — Beverage Equipment Traders',
    metaTitle: 'Brewery Equipment Dealer San Marcos CA | Beverage Equipment Traders',
    metaDescription:
      'Beverage Equipment Traders is based in San Marcos, CA. 40,000 sq ft facility with 225+ items in stock. New and used brewhouses, fermenters, canning lines, and more. Visit by appointment.',
    intro:
      'Our home base. 40,000 square feet of inspected, photographed brewery and beverage equipment in San Marcos, CA.',
    bodyContent: `Beverage Equipment Traders is headquartered at 1520 E Barham Dr, San Marcos, CA 92078. Our 40,000 sq ft consolidation facility houses 225+ items across the full spectrum of brewery and beverage production equipment: brewhouses, fermenters, canning lines, glycol chillers, kegs, boilers, distilling equipment, cold boxes, and supporting systems.

All equipment in our facility has been photographed, inspected, and listed with condition details before being offered for sale. We are a dealer, not an aggregator — every piece in our yard has been evaluated by someone who has personally run production equipment.

In-person inspection is available by appointment. Many buyers prefer to evaluate high-value equipment on-site before committing, and we encourage it. Our team is available to walk you through equipment, discuss specifications, and answer technical questions from an operator's perspective.

Hours: Monday through Thursday 10AM to 4PM, Friday 10AM to 3PM, Saturday by appointment. Located off SR-78 in the San Marcos Business Park area.`,
    keywords: [
      'brewery equipment San Marcos CA', 'beverage equipment dealer San Marcos',
      'used brewery equipment San Marcos', 'brewery equipment North County San Diego',
    ],
  },
  {
    slug: 'los-angeles',
    city: 'Los Angeles',
    state: 'California',
    stateAbbr: 'CA',
    type: 'local',
    heroImage: 'hero-locations.webp',
    h1: 'Brewery Equipment Los Angeles — New and Used Dealer',
    metaTitle: 'Brewery Equipment Los Angeles | Beverage Equipment Traders — San Marcos, CA',
    metaDescription:
      'New and used brewery equipment serving Los Angeles, CA. Brewhouses, fermenters, canning lines, rigging, and consignment. Ships from San Marcos. (949) 888-2739.',
    intro:
      'Serving Los Angeles-area breweries and beverage producers with equipment, rigging, and consignment services.',
    bodyContent: `Beverage Equipment Traders serves the Los Angeles and greater Southern California market from our facility in San Marcos. We regularly ship equipment to LA-area breweries, cideries, distilleries, and beverage facilities — and our rigging crews travel throughout Southern California and beyond.

Los Angeles has a substantial and growing craft brewery and beverage production community. Equipment needs in this market range from startup-scale systems for taproom operations through large-format production equipment for regional distribution brands.

We can ship most items to Los Angeles within 1 to 2 business days depending on equipment size and rigging requirements. For large systems requiring crane work or complex installation, our crews are experienced with urban LA facilities including constrained loading docks and multi-story installations.

Contact us with your equipment requirements or consignment inquiry. Our trade desk responds within one business day.`,
    keywords: [
      'brewery equipment Los Angeles', 'used brewery equipment LA',
      'beer equipment dealer Los Angeles', 'brewery rigging Los Angeles',
      'used fermenters Los Angeles', 'brewery equipment Southern California',
    ],
  },
  {
    slug: 'orange-county',
    city: 'Orange County',
    state: 'California',
    stateAbbr: 'CA',
    type: 'local',
    heroImage: 'hero-locations.webp',
    h1: 'Brewery Equipment Orange County, CA',
    metaTitle: 'Brewery Equipment Orange County CA | Beverage Equipment Traders',
    metaDescription:
      'Brewery equipment serving Orange County, CA. Used brewhouses, fermenters, canning lines, and rigging from our San Marcos facility. (949) 888-2739.',
    intro:
      'Equipment and services for Orange County\'s growing craft beverage scene.',
    bodyContent: `Orange County's craft brewery market has expanded substantially over the past decade. Beverage Equipment Traders serves OC breweries from our San Marcos facility, approximately 45 minutes south via the I-5 or SR-78/241.

For Orange County buyers, in-person inspection trips to our San Marcos facility are practical and encouraged for high-value equipment. We can also arrange equipment viewing appointments and provide detailed video walk-throughs for buyers evaluating remotely.

Rigging and installation services extend to Orange County with crew availability typically within 1 to 2 weeks for local jobs. Equipment freight to Orange County is typically overnight or same-day depending on truck availability.

Contact us for current inventory and to discuss your equipment needs.`,
    keywords: [
      'brewery equipment Orange County', 'used brewery equipment OC',
      'beer equipment dealer Orange County', 'brewery rigging Orange County',
    ],
  },
  {
    slug: 'riverside',
    city: 'Riverside',
    state: 'California',
    stateAbbr: 'CA',
    type: 'local',
    heroImage: 'hero-locations.webp',
    h1: 'Brewery Equipment Riverside, CA',
    metaTitle: 'Brewery Equipment Riverside CA | Beverage Equipment Traders',
    metaDescription:
      'Brewery equipment serving Riverside County, CA. Used and new brewhouses, tanks, canning lines, and rigging from our San Marcos facility.',
    intro:
      'Serving Riverside County breweries and beverage producers from our San Marcos facility.',
    bodyContent: `Beverage Equipment Traders serves Riverside County from our San Marcos, CA facility. The Inland Empire has a growing craft beverage production community, and our equipment inventory suits both startup and production-scale operations.

We ship to Riverside County regularly, and our rigging crews are available for local installations and equipment moves throughout the region. Contact us for current inventory, freight quotes, and rigging estimates for your Riverside County location.`,
    keywords: [
      'brewery equipment Riverside CA', 'used brewery equipment Inland Empire',
      'beer equipment dealer Riverside', 'brewery rigging Riverside County',
    ],
  },
];

// ─── National Hub Cities ──────────────────────
export const NATIONAL_LOCATIONS: LocationPage[] = [
  {
    slug: 'denver',
    city: 'Denver',
    state: 'Colorado',
    stateAbbr: 'CO',
    type: 'national',
    heroImage: 'hero-equipment.webp',
    h1: 'Used Brewery Equipment Denver, Colorado',
    metaTitle: 'Used Brewery Equipment Denver CO | Beverage Equipment Traders',
    metaDescription:
      'New and used brewery equipment shipping to Denver, CO. Brewhouses, fermenters, canning lines, rigging, and installation. Based in San Marcos, CA. Ships nationwide.',
    intro:
      'Shipping new and used brewery equipment to Denver and the Front Range from our San Marcos, CA facility.',
    bodyContent: `Denver and the Colorado Front Range represent one of the highest-density craft brewery markets in the country. Beverage Equipment Traders ships equipment to Denver-area breweries from our San Marcos, CA facility regularly, and our rigging crews travel to Colorado for larger installations and full facility builds.

Colorado breweries have been among the most active buyers of both production-scale and specialty equipment in our inventory. Systems ranging from 7BBL taproom setups through 30BBL+ production brewhouses have shipped to the Denver market.

Freight to Denver from San Marcos typically runs 2 to 3 business days for standard equipment loads. Large systems and multi-piece shipments are quoted individually. Rigging and installation coordination in Denver is available — contact us for scheduling and scope.

Browse our current inventory or contact our trade desk for help identifying equipment suited to your capacity needs in the Denver market.`,
    keywords: [
      'used brewery equipment Denver', 'brewery equipment Colorado',
      'brewery rigging Denver', 'used brewhouse Denver',
      'brewery equipment for sale Denver CO', 'craft brewery equipment Colorado',
    ],
  },
  {
    slug: 'portland',
    city: 'Portland',
    state: 'Oregon',
    stateAbbr: 'OR',
    type: 'national',
    heroImage: 'hero-equipment.webp',
    h1: 'Used Brewery Equipment Portland, Oregon',
    metaTitle: 'Used Brewery Equipment Portland OR | Beverage Equipment Traders',
    metaDescription:
      'New and used brewery equipment shipping to Portland, OR. Brewhouses, fermenters, canning, rigging, and installation from San Marcos, CA. Ships nationwide.',
    intro:
      'Shipping brewery equipment to Portland and the Pacific Northwest from San Marcos, CA.',
    bodyContent: `Portland has one of the most established craft brewery ecosystems in the Pacific Northwest. Beverage Equipment Traders ships to Portland and the broader Oregon and Washington market from our San Marcos facility. Freight to the Pacific Northwest typically runs 3 to 4 business days.

Our inventory of used production equipment is well-suited to the Portland market, where operators are sophisticated buyers with strong understanding of equipment specifications and condition. We provide detailed listing information, photography, and condition notes to support remote purchasing decisions.

Rigging and installation services in Portland are available. Contact us for current inventory and a shipping quote to your Portland location.`,
    keywords: [
      'used brewery equipment Portland', 'brewery equipment Oregon',
      'used brewhouse Portland OR', 'brewery rigging Portland',
      'craft brewery equipment Pacific Northwest',
    ],
  },
  {
    slug: 'chicago',
    city: 'Chicago',
    state: 'Illinois',
    stateAbbr: 'IL',
    type: 'national',
    heroImage: 'hero-equipment.webp',
    h1: 'Used Brewery Equipment Chicago, Illinois',
    metaTitle: 'Used Brewery Equipment Chicago IL | Beverage Equipment Traders',
    metaDescription:
      'New and used brewery equipment shipping to Chicago, IL. Brewhouses, fermenters, canning lines, rigging, and installation. Ships from San Marcos, CA.',
    intro:
      'Shipping brewery and beverage equipment to Chicago and the Midwest from our San Marcos, CA facility.',
    bodyContent: `Chicago is a major hub for craft brewery production in the Midwest, with a dense operator community and significant equipment demand for both new builds and capacity expansions. Beverage Equipment Traders ships equipment to Chicago and surrounding Midwest markets from our San Marcos facility.

Freight to Chicago typically runs 3 to 4 business days. For large systems and full facility installations, our rigging crews travel to the Chicago market. Contact us for current inventory, freight quotes, and rigging availability for your Chicago location.`,
    keywords: [
      'used brewery equipment Chicago', 'brewery equipment Illinois',
      'brewery equipment Midwest', 'used brewhouse Chicago',
      'brewery rigging Chicago IL',
    ],
  },
  {
    slug: 'austin',
    city: 'Austin',
    state: 'Texas',
    stateAbbr: 'TX',
    type: 'national',
    heroImage: 'hero-equipment.webp',
    h1: 'Used Brewery Equipment Austin, Texas',
    metaTitle: 'Used Brewery Equipment Austin TX | Beverage Equipment Traders',
    metaDescription:
      'New and used brewery equipment shipping to Austin, TX. Brewhouses, fermenters, canning lines, and rigging from San Marcos, CA. Ships nationwide.',
    intro:
      'Shipping brewery equipment to Austin and Texas from our San Marcos, CA facility.',
    bodyContent: `Austin's craft brewery market has grown dramatically over the past decade, with production operations ranging from taproom-focused nano breweries through high-volume regional distribution brands. Beverage Equipment Traders ships to Austin and the broader Texas market from our San Marcos, CA facility.

Freight to Austin from San Marcos typically runs 2 business days. Rigging and installation services are available in Austin and statewide. Contact us for current inventory and a freight quote to your Austin location.`,
    keywords: [
      'used brewery equipment Austin', 'brewery equipment Texas',
      'used brewhouse Austin TX', 'brewery rigging Austin',
      'craft brewery equipment Texas',
    ],
  },
  {
    slug: 'seattle',
    city: 'Seattle',
    state: 'Washington',
    stateAbbr: 'WA',
    type: 'national',
    heroImage: 'hero-equipment.webp',
    h1: 'Used Brewery Equipment Seattle, Washington',
    metaTitle: 'Used Brewery Equipment Seattle WA | Beverage Equipment Traders',
    metaDescription:
      'New and used brewery equipment shipping to Seattle, WA. Brewhouses, fermenters, canning lines, rigging, and installation from San Marcos, CA.',
    intro:
      'Shipping brewery equipment to Seattle and the Pacific Northwest from San Marcos, CA.',
    bodyContent: `Seattle and the greater Puget Sound region support a large and active craft brewery market. Beverage Equipment Traders ships equipment to Seattle from our San Marcos, CA facility. Freight to Seattle typically runs 3 to 4 business days. Rigging and installation services available on request. Contact us for current inventory and freight quotes.`,
    keywords: [
      'used brewery equipment Seattle', 'brewery equipment Washington state',
      'used brewhouse Seattle WA', 'brewery rigging Seattle',
    ],
  },
  {
    slug: 'nashville',
    city: 'Nashville',
    state: 'Tennessee',
    stateAbbr: 'TN',
    type: 'national',
    heroImage: 'hero-equipment.webp',
    h1: 'Used Brewery Equipment Nashville, Tennessee',
    metaTitle: 'Used Brewery Equipment Nashville TN | Beverage Equipment Traders',
    metaDescription:
      'New and used brewery equipment shipping to Nashville, TN. Brewhouses, fermenters, canning lines, and rigging from San Marcos, CA.',
    intro:
      'Shipping brewery equipment to Nashville and the Southeast from our San Marcos, CA facility.',
    bodyContent: `Nashville's craft brewing scene has grown consistently as the city's broader hospitality and food industry has expanded. Beverage Equipment Traders ships to Nashville and Southeast markets from our San Marcos, CA facility. Freight to Nashville typically runs 3 to 4 business days. Contact us for current inventory and shipping quotes.`,
    keywords: [
      'used brewery equipment Nashville', 'brewery equipment Tennessee',
      'used brewhouse Nashville TN', 'brewery equipment Southeast',
    ],
  },
];

export function getLocalLocationBySlug(slug: string): LocationPage | undefined {
  return LOCAL_LOCATIONS.find((l) => l.slug === slug);
}

export function getNationalLocationBySlug(slug: string): LocationPage | undefined {
  return NATIONAL_LOCATIONS.find((l) => l.slug === slug);
}
