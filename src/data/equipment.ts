// ─────────────────────────────────────────────
//  EQUIPMENT CATEGORIES — Central Data
//  All equipment landing pages pull from here.
// ─────────────────────────────────────────────

export interface EquipmentCategory {
  slug: string;
  title: string;
  h1: string;
  shopifyCollectionUrl: string;
  metaTitle: string;
  metaDescription: string;
  description: string;
  bodyContent: string;
  keywords: string[];
  faqs: { q: string; a: string }[];
  priority: 'P0' | 'P1' | 'P2';
  heroImage?: string;            // optional hero background image path
  featuredItems?: {
    name: string;
    price: string;
    condition: 'Used' | 'New' | 'Refurbished';
    category: string;
    image?: string;              // optional card image path
  }[];
}

export const EQUIPMENT_CATEGORIES: EquipmentCategory[] = [
  {
    slug: 'brewhouses',
    title: 'Brewhouses',
    h1: 'New and Used Brewhouses For Sale',
    shopifyCollectionUrl: 'https://beverageequipmenttraders.com/collections/brewhouses',
    metaTitle: 'New and Used Brewhouses For Sale | Beverage Equipment Traders — San Marcos, CA',
    metaDescription:
      'Shop new and used brewhouses from 7BBL to 30BBL+. Inspected, photographed, and ready to ship nationwide from San Marcos, CA. Rigging and installation available.',
    description:
      'Beverage Equipment Traders maintains one of the largest inventories of new and used brewhouses in the western United States. Every system is inspected on-site before listing.',
    bodyContent: `Complete brewhouse systems from 7BBL to 30BBL and larger, sourced from working brewery liquidations, upgrades, and direct manufacturer relationships. Our catalog spans 2-vessel and 3-vessel configurations from manufacturers including Marks Design and Metalworks, Specific Mechanical Systems, Premier Stainless, and DME Brewing.

What sets Beverage Equipment Traders apart is operator context. We started as a brewery. We have sized brewhouses, run the same equipment we sell, and troubleshot every failure point buyers encounter. When you call us, you are speaking with someone who has actually brewed on it.

Every brewhouse in our inventory is photographed inside and out. High-value systems include inspection documentation, manufacturer details, and condition notes beyond a single-word summary. For full brewhouse systems, we also provide rigging, de-installation, transportation, and installation nationwide.

Whether you are scaling a production facility, outfitting a new build, or sourcing a specific vessel configuration, our inventory is updated regularly and our team is available to help match equipment to your capacity needs.`,
    keywords: [
      'used brewhouse for sale', '15bbl brewhouse', '30 barrel brewing system',
      'used brewery equipment California', 'new brewhouse for sale',
      'brewery expansion equipment', '7bbl brewhouse', 'premier stainless brewhouse',
    ],
    faqs: [
      {
        q: 'What brewhouse sizes do you carry?',
        a: 'Our inventory includes systems from 7BBL pilot setups through 30BBL+ production brewhouses. Availability changes frequently — contact us for current stock.',
      },
      {
        q: 'Do you offer rigging and installation for brewhouses?',
        a: 'Yes. Beverage Equipment Traders provides full-service rigging, de-installation, transportation, and installation for all brewhouse systems we sell. We ship and install nationwide.',
      },
      {
        q: 'Can I inspect a brewhouse before purchasing?',
        a: 'Yes. Our facility in San Marcos, CA is open for in-person inspection by appointment. We strongly encourage buyers to inspect high-value systems prior to purchase.',
      },
    ],
    priority: 'P0',
    heroImage: '/images/brewhouse-hero.webp',
    featuredItems: [
      {
        name: '20 BBL 2-Vessel Steam Brewhouse',
        price: '$78,500',
        condition: 'Used',
        category: 'BREWHOUSE',
        image: '/images/brewhouse-20bbl-steam.webp',
      },
      {
        name: '15 BBL 3-Vessel Direct Fire System',
        price: '$52,000',
        condition: 'Used',
        category: 'BREWHOUSE',
        image: '/images/brewhouse-15bbl-direct.webp',
      },
      {
        name: '7 BBL Electric 2-Vessel Pilot System',
        price: '$24,500',
        condition: 'Used',
        category: 'BREWHOUSE',
        image: '/images/brewhouse-7bbl-electric.webp',
      },
    ],
  },
  {
    slug: 'fermenters',
    title: 'Fermenters & Tanks',
    h1: 'Used Fermenters and Fermentation Tanks For Sale',
    shopifyCollectionUrl: 'https://beverageequipmenttraders.com/collections/fermenters-manual',
    metaTitle: 'Used Fermenters & Fermentation Tanks For Sale | Beverage Equipment Traders',
    metaDescription:
      'New and used fermenters, unitanks, brite tanks, and fermentation vessels. Multiple sizes and manufacturers in stock. Nationwide shipping from San Marcos, CA.',
    description:
      'Our fermenter inventory spans conical fermenters, jacketed unitanks, and brite tanks across a wide range of volumes from multiple manufacturers.',
    bodyContent: `Fermenters are among the most searched pieces of brewery capital equipment, and our inventory reflects genuine depth. Conical fermenters, jacketed unitanks, brite tanks, and open fermentation vessels across volumes from pilot-scale to full production. Manufacturers represented include JV Northwest, Premier Stainless, Specific Mechanical, and others.

Key specs buyers evaluate include vessel volume, cone angle, CIP compatibility, jacket configuration, stainless grade (304 vs 316L), and inlet/outlet sizing. Our listings include specification data alongside condition notes and photography. For unitanks handling both fermentation and conditioning, we note tank history where available.

Brite tanks in our inventory are typically sourced from production breweries upgrading volume, meaning they arrive with documented brewing history, legitimate usage context, and often at significantly below-replacement cost.

All fermentation vessels can be shipped nationwide. Rigging and installation services are available for multi-vessel moves and facility builds. Contact us for current availability and lead times.`,
    keywords: [
      'used fermenters for sale', 'used unitanks brewery', 'brite tanks for sale',
      'fermentation tanks brewery', 'jacketed fermenter', 'conical fermenter used',
      'JV Northwest fermenter', 'brewery tanks for sale',
    ],
    faqs: [
      {
        q: 'What fermenter sizes do you typically carry?',
        a: 'We carry fermenters from small pilot sizes up to large production vessels. Inventory changes regularly — reach out for current availability on specific volumes.',
      },
      {
        q: 'Do you sell brite tanks separately from fermenters?',
        a: 'Yes. Brite tanks, unitanks, and conical fermenters are all available independently. We can also help source matched sets if you are building out a cellaring program.',
      },
    ],
    priority: 'P0',
    featuredItems: [
      { name: '60 BBL Jacketed Unitank',    price: '$24,900', condition: 'Used', category: 'FERMENTER' },
      { name: '30 BBL Conical Fermenter',   price: '$18,500', condition: 'Used', category: 'FERMENTER' },
      { name: '15 BBL Brite Tank',          price: '$9,800',  condition: 'Used', category: 'BRITE TANK' },
    ],
  },
  {
    slug: 'canning',
    title: 'Canning & Packaging',
    h1: 'Canning Equipment and Canning Lines For Sale',
    shopifyCollectionUrl: 'https://beverageequipmenttraders.com/collections/canning',
    metaTitle: 'Canning Equipment & Canning Lines For Sale | Beverage Equipment Traders',
    metaDescription:
      'Used and new canning machines, crowlers, shrink sleeve applicators, and complete canning lines. Ships nationwide. Inspected in San Marcos, CA.',
    description:
      'Commercial canning machines, crowler fillers, Wild Goose canning lines, and full packaging systems for craft producers across all volume tiers.',
    bodyContent: `Canning and packaging equipment for craft beverage producers at every scale. Our inventory covers everything from crowler machines for taproom-volume operations through full automated canning lines capable of 50+ CPM. Wild Goose canning systems, manual and semi-automatic crowlers, shrink sleeve applicators, and inline date coders.

Canning line selection depends on your production volume, package format, and how the line integrates with your existing cellar. The most common mistake buyers make is under-sizing — selecting a line to current volume rather than projected growth. We are happy to walk through what your operation actually needs.

Shrink sleeve applicators and labeling equipment also available. The TriPack LSA 160 and similar mid-volume systems are suited for production lines running 20 to 100+ cases per hour, appropriate for craft producers and non-alcoholic beverage facilities.

All equipment ships nationwide. Rigging, installation, and commissioning services available. Contact us to confirm current canning inventory and lead times.`,
    keywords: [
      'canning machine for sale', 'used canning line brewery', 'crowler machine',
      'Wild Goose canning line', 'shrink sleeve applicator brewery',
      'commercial canning equipment', 'brewery packaging equipment',
    ],
    faqs: [
      {
        q: 'What is the difference between a crowler machine and a full canning line?',
        a: 'A crowler machine seals individual crowler cans at taproom volumes — typically 5–20 cans per minute. A full canning line is designed for packaging production runs, with fill speeds of 30–120+ CPM and inline seaming, date coding, and sometimes shrink sleeves.',
      },
      {
        q: 'Do you carry Wild Goose canning lines?',
        a: 'Yes, Wild Goose systems appear in our inventory regularly. Contact us for current availability on specific models.',
      },
    ],
    priority: 'P1',
    featuredItems: [
      { name: 'Wild Goose WGC-250 Canning Line',           price: '$112,000', condition: 'New',  category: 'CANNING LINE' },
      { name: 'Semi-Auto Crowler Machine',                  price: '$4,200',   condition: 'Used', category: 'CROWLER' },
      { name: 'TriPack LSA 160 Shrink Sleeve Applicator',  price: '$14,000',  condition: 'Used', category: 'PACKAGING' },
    ],
  },
  {
    slug: 'chillers',
    title: 'Glycol Chillers',
    h1: 'Glycol Chillers and Cooling Systems For Brewing',
    shopifyCollectionUrl: 'https://beverageequipmenttraders.com/collections/chillers',
    metaTitle: 'Glycol Chillers & Cooling Systems For Brewing | Beverage Equipment Traders',
    metaDescription:
      'New and used glycol chillers for brewing. G&D Chillers, Pro Refrigeration, and more. In stock in San Marcos, CA. Ships nationwide.',
    description:
      'Glycol chillers and complete cooling systems from G&D Chillers, Pro Refrigeration, and other leading manufacturers, sized for production breweries.',
    bodyContent: `Glycol chilling systems are critical infrastructure for any fermentation program. We carry chillers from G&D Chillers, Pro Refrigeration, Glycool, and other manufacturers in tonnage ranges suited for both smaller craft operations and large production facilities.

Chiller sizing depends on total fermentation volume, cellar design, ambient facility temperatures, and whether the system is serving fermenters only or also cold-side packaging equipment. Undersizing a chiller creates production bottlenecks that are expensive to correct post-installation. We can help buyers evaluate sizing requirements before purchase.

Used chillers from working breweries are a value-strong option for producers who need proven, heavy-duty cooling capacity at significantly below-replacement cost. Our used chillers are inspected and photographed before listing.

Contact us for current glycol chiller inventory. We can also source specific tonnage ranges on request.`,
    keywords: [
      'glycol chiller brewery', 'used glycol chiller', 'G&D chillers',
      'Pro Refrigeration chiller', 'brewery cooling system', 'fermentation chiller',
      'glycol cooling system brewing',
    ],
    faqs: [
      {
        q: 'How do I know what size glycol chiller I need?',
        a: 'Sizing depends on total fermentation volume, cellar vessel count, ambient temperature, and whether you are cooling packaging equipment as well. Our team can help you work through the calculation before you purchase.',
      },
      {
        q: 'Do you carry G&D and Pro Refrigeration units?',
        a: 'Yes, both brands appear in our inventory regularly. Contact us for current availability.',
      },
    ],
    priority: 'P1',
    featuredItems: [],
  },
  {
    slug: 'distilling',
    title: 'Distilling Equipment',
    h1: 'Distilling Equipment For Sale: Stills and Systems',
    shopifyCollectionUrl: 'https://beverageequipmenttraders.com/collections/still-distillate',
    metaTitle: 'Distilling Equipment For Sale — Stills & Systems | Beverage Equipment Traders',
    metaDescription:
      'New and used distilling equipment including copper pot stills, column stills, and complete distillery systems. Ships nationwide from San Marcos, CA.',
    description:
      'Copper pot stills, column stills, and complete distillery systems for craft spirits producers. Current inventory includes a 300-gallon copper pot still.',
    bodyContent: `Craft distillery equipment for producers at every stage — from startup operations sourcing first-generation stills through established distilleries liquidating or upgrading. Our inventory includes copper pot stills, column stills, and supporting equipment including proofing tanks, fermenters, and bottling systems suited for spirits production.

The distillery equipment market extends well beyond the craft beverage industry. Food-grade processing, essential oil extraction, water distillation, and industrial applications all use similar still configurations. Our buyer base for distillery equipment is geographically distributed across all 50 states.

Current inventory includes a 300-gallon copper pot still at $75,000 — a standout piece for a craft distillery building out a small-batch program or looking to expand capacity. Pricing reflects current market conditions, equipment condition, manufacturer, and configuration.

Contact us for current distillery equipment availability. We can also assist with sourcing specific still configurations on request.`,
    keywords: [
      'distilling equipment for sale', 'copper still for sale',
      'used distillery equipment', 'pot still for sale', 'column still brewery',
      'craft distillery equipment', '300 gallon copper still',
    ],
    faqs: [
      {
        q: 'Do you sell complete distillery setups?',
        a: 'We carry individual stills as well as supporting equipment. Complete multi-vessel distillery configurations are available depending on current inventory.',
      },
      {
        q: 'Can distilling equipment be used for food processing?',
        a: 'Yes. Many still configurations have applications beyond spirits — essential oil extraction, food processing, and industrial uses. Contact us to discuss your specific requirements.',
      },
    ],
    priority: 'P1',
    featuredItems: [
      { name: '300 Gallon Copper Pot Still', price: '$75,000', condition: 'Used', category: 'STILL' },
    ],
  },
  {
    slug: 'kegs',
    title: 'Kegs & Casks',
    h1: 'Used Kegs and Cask Kegs For Sale',
    shopifyCollectionUrl: 'https://beverageequipmenttraders.com/collections/casks',
    metaTitle: 'Used Kegs & Cask Kegs For Sale | Beverage Equipment Traders',
    metaDescription:
      'Half barrel kegs, 1/6 BBL kegs, cask kegs, and more. In stock at our San Marcos, CA facility. Ships nationwide.',
    description:
      'Half barrel kegs, sixth barrel kegs, cask kegs, and real ales containers. Multiple sizes in stock with nationwide shipping available.',
    bodyContent: `Kegs and cask containers for production breweries, taprooms, and specialty producers. Our inventory covers the full range of standard and specialty keg formats: half barrel (1/2 BBL), quarter barrel (1/4 BBL), sixth barrel (1/6 BBL), and cask kegs in both pin and firkin sizes.

Cask kegs serve the real ale and cask-conditioned market, as well as producers selling to on-premise accounts that have installed cask tap systems. We currently rank in the top results for cask keg searches, reflecting genuine inventory depth in this niche.

Used kegs from our inventory are sourced from production breweries and arrive with legitimate brewing history. New kegs from select manufacturers are also available. Contact us for volume pricing on bulk keg purchases.`,
    keywords: [
      'cask kegs for sale', 'used kegs brewery', 'half barrel kegs',
      '1/6 bbl keg', 'firkin kegs', 'pin cask kegs', 'brewery kegs for sale',
    ],
    faqs: [
      {
        q: 'Do you sell cask kegs for real ale production?',
        a: 'Yes. Pin casks and firkins are available for real ale and cask-conditioned production. Contact us for current inventory.',
      },
    ],
    priority: 'P1',
    featuredItems: [],
  },
  {
    slug: 'boilers',
    title: 'Boilers',
    h1: 'Commercial Boilers For Sale: Brewery and Beverage',
    shopifyCollectionUrl: 'https://beverageequipmenttraders.com/collections/boilers',
    metaTitle: 'Commercial Boilers For Sale — Brewery & Beverage | Beverage Equipment Traders',
    metaDescription:
      'New and used commercial boilers for brewing. Rite boilers, Lattner boilers, Sussman electric boilers in stock. Ships nationwide.',
    description:
      'Commercial steam boilers for brewery and beverage operations, including Rite, Lattner, and Sussman models in various BTU ratings.',
    bodyContent: `Commercial steam boilers for brewery, distillery, and beverage production. We carry steam boilers from Rite Engineering, Lattner Boiler Company, Sussman Electric Boilers, and other manufacturers suited for direct-steam brewhouse systems and process heating applications.

Boiler selection depends on your steam demand, facility utility infrastructure, and whether you are running a direct-fire or steam-heated brewhouse. Steam boilers require licensed installation and are subject to local utility and pressure vessel regulations — we recommend buyers verify local requirements before purchase.

Used boilers in our inventory are sourced from working production facilities. Condition documentation, nameplate specs, and operational history are provided where available. New Sussman electric boilers represent a code-compliant, lower-installation-complexity option for facilities where natural gas or steam systems are constrained.`,
    keywords: [
      'commercial boiler brewery', 'Rite boiler for sale', 'Lattner boiler',
      'Sussman electric boiler', 'steam boiler brewery', 'used boiler for sale',
    ],
    faqs: [
      {
        q: 'Do I need a licensed installer for a commercial boiler?',
        a: 'Yes. Commercial steam boilers are pressure vessels subject to state and local codes. Installation must be performed by licensed professionals. We can provide referrals to qualified installers.',
      },
    ],
    priority: 'P2',
    featuredItems: [],
  },
  {
    slug: 'cold-rooms',
    title: 'Cold Rooms',
    h1: 'Cold Rooms and Cold Boxes For Brewing',
    shopifyCollectionUrl: 'https://beverageequipmenttraders.com/collections/cold-box',
    metaTitle: 'Cold Rooms & Cold Boxes For Sale — Brewing & Beverage | Beverage Equipment Traders',
    metaDescription:
      'Used and new cold rooms, walk-in coolers, and cold boxes for brewing and beverage operations. In stock in San Marcos, CA. Ships nationwide.',
    description:
      'Walk-in coolers, cold rooms, and cold boxes for temperature-controlled storage in brewing and beverage production facilities.',
    bodyContent: `Cold storage for breweries, beverage producers, and food processing operations. Walk-in coolers, cold rooms, and modular cold boxes in various configurations — from compact taproom cold storage through large-format production coolers for high-volume packaging facilities.

Cold room configuration involves floor dimensions, door placement, refrigeration unit type (remote vs. self-contained), and target temperature range. Brewery cold storage typically operates between 34°F and 38°F for bright beer storage and lagering. Fermentation cold rooms require broader temperature control ranges including crash cooling capability.

Used cold room panels and refrigeration units from our inventory are typically sourced from food and beverage facility liquidations. Condition includes panel integrity, gasket condition, and refrigeration unit operational status. Contact us for current cold room inventory and custom configuration options.`,
    keywords: [
      'cold room brewery', 'walk-in cooler brewery', 'cold box for brewing',
      'used walk-in cooler', 'brewing cold storage', 'beverage cold room',
    ],
    faqs: [
      {
        q: 'Can you configure a cold room to specific dimensions?',
        a: 'Panel-based cold rooms can often be reconfigured to different dimensions. Contact us with your floor plan and we can advise on what is possible with available inventory.',
      },
    ],
    priority: 'P1',
    featuredItems: [],
  },
];

export function getCategoryBySlug(slug: string): EquipmentCategory | undefined {
  return EQUIPMENT_CATEGORIES.find((c) => c.slug === slug);
}
