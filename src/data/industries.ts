// ─────────────────────────────────────────────
//  INDUSTRIES DATA — Niche Expansion Silo
//  BET equipment and services mapped to buyer industries.
//  These pages target non-brewery buyers searching by their
//  industry type, not equipment type.
//
//  Each page answers: "Do you serve my type of operation?"
//  Then routes to relevant equipment categories and services.
// ─────────────────────────────────────────────

export interface IndustryPage {
  slug: string;
  name: string;
  shortName: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  bodyContent: string;
  // Equipment categories most relevant to this industry
  relevantEquipment: string[]; // equipment slugs
  // Services most used by this industry
  relevantServices: string[];  // service slugs
  // What they typically buy/sell
  buyerNeeds: {
    title: string;
    description: string;
  }[];
  // Featured equipment types for this industry (for display)
  featuredEquipmentTypes: string[];
  faqs: { q: string; a: string }[];
  keywords: string[];
}

export const INDUSTRIES: IndustryPage[] = [
  {
    slug: 'craft-brewery',
    name: 'Craft Breweries',
    shortName: 'Breweries',
    h1: 'Brewery Equipment for Craft Breweries',
    metaTitle: 'Brewery Equipment for Craft Breweries | Beverage Equipment Traders',
    metaDescription:
      'New and used brewery equipment for craft breweries. Brewhouses, fermenters, canning lines, glycol chillers, and rigging. Serving breweries nationwide from San Marcos, CA.',
    intro:
      'From 7 BBL taproom systems through 30 BBL+ production brewhouses — equipment, services, and operator experience built for craft production.',
    bodyContent: `Craft breweries represent the core of the Beverage Equipment Traders business. We have worked with production breweries ranging from startup taproom operations through established regional distribution brands, and our equipment inventory reflects the real capital needs of a working craft brewery.

What sets us apart from a listing site or general equipment broker is operating context. Beverage Equipment Traders was founded by brewery operators. We have run the equipment we sell — sized glycol systems, configured fermentation programs, and troubleshot brewhouse failures at 2 a.m. That experience means we advise on what a craft brewery actually needs, not just what we have available.

Our inventory covers the full range of craft brewery capital equipment: complete brewhouses from 7 BBL to 30 BBL+, fermentation vessels and brite tanks, canning lines from taproom crowler volume through full automated production, glycol chilling systems, kegs and casks, and supporting systems including boilers and cold storage. All equipment is inspected and photographed before listing.

We also provide full-service rigging and installation for equipment moves, new builds, and expansion projects. For breweries selling or upgrading equipment, our consignment and auction programs provide structured liquidation options.`,
    relevantEquipment: ['brewhouses', 'fermenters', 'canning', 'chillers', 'kegs', 'boilers', 'cold-rooms'],
    relevantServices: ['rigging', 'consignment', 'auctions', 'consulting', 'new-equipment'],
    buyerNeeds: [
      {
        title: 'Starting a New Brewery',
        description:
          'First equipment purchase for a new production operation. We help spec the right system for your projected volume and capital structure.',
      },
      {
        title: 'Expanding Production Capacity',
        description:
          'Adding fermenters, upgrading to a larger brewhouse, or adding a canning line to match distribution growth.',
      },
      {
        title: 'Upgrading Core Systems',
        description:
          'Replacing aging or undersized equipment — brewhouse, glycol, or packaging — with production-ready systems.',
      },
      {
        title: 'Selling or Liquidating Equipment',
        description:
          'Consigning surplus equipment, liquidating after a closure, or selling assets from a brewery you are upgrading out of.',
      },
    ],
    featuredEquipmentTypes: ['Brewhouses', 'Fermenters & Tanks', 'Canning Lines', 'Glycol Chillers'],
    faqs: [
      {
        q: 'Do you work with taproom-scale breweries as well as production breweries?',
        a: 'Yes. Our inventory includes both taproom-scale systems (7–10 BBL) and full production brewhouses (15–30 BBL+). We advise on what system size makes sense for your projected volume before you commit.',
      },
      {
        q: 'Can you source a complete brewery equipment package?',
        a: 'Yes. For new brewery builds, we can help spec and source a complete equipment package — brewhouse, fermenters, glycol, and packaging — from a combination of new and used inventory.',
      },
      {
        q: 'Do you buy brewery equipment outright or only on consignment?',
        a: 'Both. Direct purchase, consignment, and auction are all available depending on your timeline and recovery goals. Contact us to discuss which approach fits your situation.',
      },
    ],
    keywords: [
      'brewery equipment for sale', 'craft brewery equipment', 'used brewery equipment',
      'new brewery equipment', 'brewery equipment dealer California',
      'brewery startup equipment', 'production brewery equipment',
    ],
  },
  {
    slug: 'distillery',
    name: 'Craft Distilleries',
    shortName: 'Distilleries',
    h1: 'Distillery Equipment for Craft Spirits Producers',
    metaTitle: 'Distillery Equipment for Craft Spirits | Beverage Equipment Traders',
    metaDescription:
      'New and used distillery equipment including copper pot stills, column stills, fermenters, and complete distillery systems. Nationwide shipping from San Marcos, CA.',
    intro:
      'Copper pot stills, column stills, fermenters, and supporting systems for craft spirits producers at every scale.',
    bodyContent: `The craft distillery market shares significant equipment overlap with craft brewing, and Beverage Equipment Traders serves both communities from our San Marcos facility. Our distillery equipment inventory includes copper pot stills, column stills, proofing tanks, fermenters suited for spirits production, and supporting equipment including bottling systems and cold storage.

The distillery equipment buyer base extends well beyond California. Craft spirits production is growing in every state, and the national buyer searching for a specific still configuration or proofing tank is as qualified a buyer as a local one. We ship nationwide and have worked with distillery operations from startup single-still operations through multi-still production facilities.

Our current distillery inventory includes a 300-gallon copper pot still at $75,000 — a standout piece for a craft distillery building out or expanding a small-batch program. Inventory changes regularly; contact us for current availability on specific configurations.

For distilleries selling equipment — upgrading stills, liquidating after a closure, or selling surplus fermenters from a production program — our consignment and auction programs handle the full process from photography through buyer settlement.`,
    relevantEquipment: ['distilling', 'fermenters', 'cold-rooms', 'boilers'],
    relevantServices: ['rigging', 'consignment', 'auctions', 'consulting'],
    buyerNeeds: [
      {
        title: 'Starting a Distillery',
        description:
          'First still and supporting equipment for a new craft spirits operation. We advise on used vs. new and help spec supporting equipment for your production program.',
      },
      {
        title: 'Expanding Still Capacity',
        description:
          'Adding a second still, upgrading to a larger pot or column, or adding proofing and fermentation capacity to match production growth.',
      },
      {
        title: 'Sourcing Fermentation Equipment',
        description:
          'Distillery fermentation uses similar vessels to brewery fermentation. Our fermenter inventory is relevant to spirits producers needing wash fermenters.',
      },
      {
        title: 'Selling Distillery Assets',
        description:
          'Liquidating a distillery, upgrading equipment, or selling surplus assets. Consignment and auction programs available for all distillery equipment types.',
      },
    ],
    featuredEquipmentTypes: ['Copper Pot Stills', 'Column Stills', 'Fermenters', 'Cold Rooms'],
    faqs: [
      {
        q: 'Do you carry copper pot stills?',
        a: 'Yes. Current inventory includes a 300-gallon copper pot still. Distillery equipment availability changes regularly — contact us for current stock on specific configurations.',
      },
      {
        q: 'Can brewery fermenters be used for distillery wash fermentation?',
        a: 'Yes. Many standard brewery fermenters are appropriate for distillery wash fermentation, depending on vessel configuration and your production program. We can advise on what specifications to look for.',
      },
      {
        q: 'Do you ship distillery equipment nationwide?',
        a: 'Yes. All distillery equipment in our inventory ships nationwide. Rigging and installation services available for larger still installations.',
      },
    ],
    keywords: [
      'distillery equipment for sale', 'copper still for sale', 'craft distillery equipment',
      'used distillery equipment', 'distillery equipment dealer', 'pot still for sale',
      'column still for sale', 'craft spirits equipment',
    ],
  },
  {
    slug: 'cidery',
    name: 'Cideries & Meaderies',
    shortName: 'Cideries',
    h1: 'Equipment for Cideries, Meaderies, and Fermented Beverage Producers',
    metaTitle: 'Cidery & Meadery Equipment | Beverage Equipment Traders',
    metaDescription:
      'Fermentation tanks, brite tanks, canning lines, and cold storage for cideries and meaderies. New and used equipment from San Marcos, CA. Ships nationwide.',
    intro:
      'Fermentation vessels, canning and packaging systems, and cold storage for cider and mead producers at every scale.',
    bodyContent: `Cideries and meaderies share most of their core equipment requirements with craft breweries — fermentation vessels, brite tanks, glycol chilling, canning and packaging systems, and cold storage. Beverage Equipment Traders serves cidery and meadery operations from our San Marcos facility with the same equipment inventory we maintain for brewery clients.

The crossover between craft brewing and cider/mead production is high. Many operations run fermentation programs that include both beer and cider or mead production, and the equipment requirements overlap significantly. We can help source vessels, packaging equipment, and cold storage appropriate for fermented beverage production beyond brewing.

For cideries and meaderies looking to sell equipment — upgrading packaging capacity, downsizing production, or closing — our consignment program handles the full process with access to our qualified beverage producer buyer network.`,
    relevantEquipment: ['fermenters', 'canning', 'chillers', 'cold-rooms', 'kegs'],
    relevantServices: ['rigging', 'consignment', 'consulting'],
    buyerNeeds: [
      {
        title: 'Fermentation Capacity',
        description:
          'Conical fermenters, jacketed tanks, and brite tanks appropriate for cider and mead fermentation programs at taproom through production scale.',
      },
      {
        title: 'Canning and Packaging',
        description:
          'Canning lines and crowler machines for taproom and retail packaging of cider and mead products.',
      },
      {
        title: 'Cold Storage',
        description:
          'Walk-in coolers and cold rooms for product conditioning and finished goods storage.',
      },
      {
        title: 'Selling Equipment',
        description:
          'Cidery and meadery equipment sells to our broad beverage producer network — the same buyers sourcing brewery equipment.',
      },
    ],
    featuredEquipmentTypes: ['Fermenters & Tanks', 'Canning Lines', 'Glycol Chillers', 'Cold Rooms'],
    faqs: [
      {
        q: 'Can brewery fermenters be used for cider or mead fermentation?',
        a: 'Yes. Standard conical fermenters and jacketed tanks from brewery production are appropriate for cider and mead fermentation. We can advise on vessel configuration and sizing for your production program.',
      },
      {
        q: 'Do you serve small-scale cidery operations?',
        a: 'Yes. Our inventory includes both taproom-scale and production-scale equipment. We advise on what makes sense for your volume and capital structure.',
      },
    ],
    keywords: [
      'cidery equipment', 'meadery equipment', 'cider production equipment',
      'fermenters for cidery', 'canning line cidery', 'cold storage cidery',
      'used cidery equipment', 'fermented beverage equipment',
    ],
  },
  {
    slug: 'beverage-production',
    name: 'Beverage Manufacturers',
    shortName: 'Beverage Production',
    h1: 'Equipment for Beverage Manufacturers and Producers',
    metaTitle: 'Beverage Manufacturing Equipment | Beverage Equipment Traders',
    metaDescription:
      'Tanks, processing equipment, canning lines, cold storage, and packaging systems for beverage manufacturers. New and used equipment from San Marcos, CA. Ships nationwide.',
    intro:
      'Processing tanks, canning and packaging lines, cold storage, and production systems for non-alcoholic and specialty beverage manufacturers.',
    bodyContent: `Beverage Equipment Traders serves the broader beverage manufacturing industry beyond craft alcohol production. The processing equipment used in craft brewing — stainless tanks, heat exchangers, canning systems, cold storage, and packaging lines — has direct applications in kombucha production, cold brew coffee, sparkling water, energy drinks, functional beverages, and other non-alcoholic beverage categories.

Our inventory of food-grade stainless tanks, canning and packaging equipment, glycol chilling systems, and cold storage is relevant to beverage manufacturers across these categories. The same fermentation vessels, brite tanks, and canning lines that serve a craft brewery are appropriate capital equipment for many non-alcoholic production operations.

National buyer demand in beverage manufacturing has grown significantly as the functional and specialty beverage category has expanded. A non-alcoholic beverage producer in Chicago or Austin sourcing processing tanks is in the same buyer pool as a craft brewery — and we serve both from our San Marcos facility.`,
    relevantEquipment: ['fermenters', 'canning', 'chillers', 'cold-rooms', 'boilers'],
    relevantServices: ['rigging', 'consignment', 'consulting'],
    buyerNeeds: [
      {
        title: 'Processing Tanks',
        description:
          'Stainless jacketed tanks for mixing, blending, fermentation, and storage in non-alcoholic beverage production.',
      },
      {
        title: 'Canning and Packaging',
        description:
          'Canning lines and packaging equipment for non-alcoholic beverages — same systems used in craft brewing, applicable across beverage categories.',
      },
      {
        title: 'Cold Storage',
        description:
          'Walk-in coolers and refrigeration for finished goods storage and temperature-controlled processing.',
      },
      {
        title: 'Process Heat',
        description:
          'Commercial boilers and heat exchangers for pasteurization, hot fill, and process heating applications in beverage manufacturing.',
      },
    ],
    featuredEquipmentTypes: ['Processing Tanks', 'Canning Lines', 'Cold Storage', 'Boilers'],
    faqs: [
      {
        q: 'Do you serve non-alcoholic beverage producers?',
        a: 'Yes. Our stainless processing equipment, canning lines, and cold storage are appropriate for many non-alcoholic beverage categories including kombucha, cold brew, sparkling water, and functional beverages.',
      },
      {
        q: 'Are brewery fermenters food-grade for beverage production?',
        a: 'Production brewery fermenters are typically food-grade 304 or 316L stainless steel, appropriate for many beverage production applications. We note stainless grade and construction in our listings.',
      },
    ],
    keywords: [
      'beverage manufacturing equipment', 'beverage production equipment',
      'kombucha equipment', 'cold brew equipment', 'beverage processing tanks',
      'canning equipment beverage', 'non-alcoholic beverage equipment',
    ],
  },
  {
    slug: 'hard-seltzer',
    name: 'Hard Seltzer Producers',
    shortName: 'Hard Seltzer',
    h1: 'Equipment for Hard Seltzer and RTD Producers',
    metaTitle: 'Hard Seltzer Production Equipment | Beverage Equipment Traders',
    metaDescription:
      'Fermentation tanks, canning lines, glycol systems, and cold storage for hard seltzer and RTD beverage producers. New and used equipment from San Marcos, CA.',
    intro:
      'Fermentation, packaging, and cold-side equipment for hard seltzer and ready-to-drink beverage production.',
    bodyContent: `Hard seltzer and ready-to-drink beverage production uses the same core equipment as craft brewing — fermentation vessels, glycol chilling, canning lines, and cold storage — with some production-specific differences in vessel sizing, carbonation, and packaging line configuration.

Beverage Equipment Traders serves hard seltzer producers with the same equipment inventory we maintain for craft brewery clients. The rapid growth and subsequent consolidation in the hard seltzer category has created a significant secondary market for production-scale equipment — fermenters, canning lines, and processing systems from operations that scaled quickly and later adjusted capacity.

Our inventory is updated regularly and reflects current secondary market availability. For hard seltzer producers acquiring equipment or liquidating surplus capacity, we provide the same full-service approach: equipment assessment, photography, marketing to qualified buyers, and logistics coordination.`,
    relevantEquipment: ['fermenters', 'canning', 'chillers', 'cold-rooms'],
    relevantServices: ['rigging', 'consignment', 'auctions'],
    buyerNeeds: [
      {
        title: 'Production Fermentation',
        description:
          'Large-format fermentation vessels for high-volume seltzer production. Used production-scale fermenters from the secondary market offer significant value.',
      },
      {
        title: 'High-Speed Canning',
        description:
          'Canning lines capable of 50+ CPM for high-volume RTD packaging. Production-scale canning systems from the secondary market as the category consolidates.',
      },
      {
        title: 'Surplus Liquidation',
        description:
          'Hard seltzer category consolidation has created significant surplus equipment. Our auction and consignment programs handle structured liquidation of production-scale assets.',
      },
    ],
    featuredEquipmentTypes: ['Fermenters & Tanks', 'Canning Lines', 'Glycol Chillers'],
    faqs: [
      {
        q: 'Do you carry large-format fermenters for high-volume seltzer production?',
        a: 'Our fermenter inventory includes production-scale vessels suited for high-volume operations. Contact us for current availability on specific volumes.',
      },
      {
        q: 'Are you seeing more hard seltzer equipment on the secondary market?',
        a: 'Yes. Category consolidation has added significant production-scale equipment to the secondary market — particularly large fermenters and high-speed canning lines. Contact us for current availability.',
      },
    ],
    keywords: [
      'hard seltzer equipment', 'RTD production equipment', 'seltzer canning line',
      'hard seltzer fermenters', 'RTD beverage equipment', 'seltzer production tanks',
    ],
  },
];

export function getIndustryBySlug(slug: string): IndustryPage | undefined {
  return INDUSTRIES.find((i) => i.slug === slug);
}
