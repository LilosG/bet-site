// ─────────────────────────────────────────────
//  EQUIPMENT CATEGORIES — Central Data
//  All equipment landing pages pull from here.
//  Image fields store filename only (e.g. 'brewhouse-hero.webp').
//  Templates resolve to ImageMetadata via import.meta.glob.
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
  heroImage?: string;            // filename only — resolved via import.meta.glob in template
  featuredItems?: {
    name: string;
    price: string;
    condition: 'Used' | 'New' | 'Refurbished';
    category: string;
    image?: string;              // filename only — resolved via import.meta.glob in template
  }[];
  buyerGuide?: {
    step: number;
    title: string;
    description: string;
  }[];
  bestFitBuyers?: {
    title: string;
    description: string;
    icon: string;
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
    heroImage: 'brewhouse-hero.webp',
    featuredItems: [
      { name: '20 BBL 2-Vessel Steam Brewhouse',      price: '$78,500', condition: 'Used', category: 'BREWHOUSE', image: 'brewhouse-20bbl-steam.webp' },
      { name: '15 BBL 3-Vessel Direct Fire System',   price: '$52,000', condition: 'Used', category: 'BREWHOUSE', image: 'brewhouse-15bbl-direct.webp' },
      { name: '7 BBL Electric 2-Vessel Pilot System', price: '$24,500', condition: 'Used', category: 'BREWHOUSE', image: 'brewhouse-7bbl-electric.webp' },
    ],
    buyerGuide: [
      { step: 1, title: 'Define Your Capacity',           description: 'Start with your projected weekly batch volume and work backward to barrel size. Buying for current volume is the most common mistake — size for 18-month growth.' },
      { step: 2, title: 'Confirm Vessel Configuration',   description: '2-vessel vs 3-vessel determines your brew day efficiency and lautering capability. Direct fire vs steam heating affects your utility infrastructure requirements.' },
      { step: 3, title: 'Review Condition Documentation', description: 'Our listings include condition notes, manufacturer data, and photography. For systems over $30K, in-person inspection at our San Marcos facility is strongly recommended.' },
      { step: 4, title: 'Get a Rigging Quote',            description: 'Before committing, get a full rigging and installation quote. We provide a single price covering de-installation, freight, delivery, set, level, and commissioning.' },
      { step: 5, title: 'Close and Commission',           description: 'Our crew handles delivery and installation. We do not leave until the system runs. Every brewhouse installation includes a commissioning walkthrough with your team.' },
    ],
    bestFitBuyers: [
      { title: 'New Brewery Build',      description: 'Starting from scratch and need a production-ready system at below-new cost? Used brewhouses from working facilities offer the best value per barrel of capacity.', icon: 'M12 4v16m8-8H4' },
      { title: 'Capacity Expansion',     description: 'Adding a second brewhouse to an existing facility? We can match systems to your utility infrastructure and existing cellar layout.', icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' },
      { title: 'Brewery Upgrade',        description: 'Replacing a smaller system with a larger one? We handle consignment of your outgoing brewhouse and sourcing of the replacement — one transaction.', icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15' },
      { title: 'Contract Brewing',       description: 'Building out contract brewing capacity and need a production-scale system quickly? Our inventory turns over regularly with production-proven systems ready to ship.', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0' },
    ],
  },
  {
    slug: 'fermenters',
    title: 'Fermenters & Tanks',
    h1: 'Used Fermenters and Fermentation Tanks For Sale',
    shopifyCollectionUrl: 'https://beverageequipmenttraders.com/collections/fermenters-manual',
    metaTitle: 'Used Fermenters & Fermentation Tanks For Sale | Beverage Equipment Traders',
    metaDescription: 'New and used fermenters, unitanks, brite tanks, and fermentation vessels. Multiple sizes and manufacturers in stock. Nationwide shipping from San Marcos, CA.',
    description: 'Our fermenter inventory spans conical fermenters, jacketed unitanks, and brite tanks across a wide range of volumes from multiple manufacturers.',
    bodyContent: `Fermenters are among the most searched pieces of brewery capital equipment, and our inventory reflects genuine depth. Conical fermenters, jacketed unitanks, brite tanks, and open fermentation vessels across volumes from pilot-scale to full production. Manufacturers represented include JV Northwest, Premier Stainless, Specific Mechanical, and others.

Key specs buyers evaluate include vessel volume, cone angle, CIP compatibility, jacket configuration, stainless grade (304 vs 316L), and inlet/outlet sizing. Our listings include specification data alongside condition notes and photography. For unitanks handling both fermentation and conditioning, we note tank history where available.

Brite tanks in our inventory are typically sourced from production breweries upgrading volume, meaning they arrive with documented brewing history, legitimate usage context, and often at significantly below-replacement cost.

All fermentation vessels can be shipped nationwide. Rigging and installation services are available for multi-vessel moves and facility builds. Contact us for current availability and lead times.`,
    keywords: ['used fermenters for sale', 'used unitanks brewery', 'brite tanks for sale', 'fermentation tanks brewery', 'jacketed fermenter', 'conical fermenter used', 'JV Northwest fermenter', 'brewery tanks for sale'],
    faqs: [
      { q: 'What fermenter sizes do you typically carry?', a: 'We carry fermenters from small pilot sizes up to large production vessels. Inventory changes regularly — reach out for current availability on specific volumes.' },
      { q: 'Do you sell brite tanks separately from fermenters?', a: 'Yes. Brite tanks, unitanks, and conical fermenters are all available independently. We can also help source matched sets if you are building out a cellaring program.' },
    ],
    priority: 'P0',
    heroImage: 'hero-fermenters.webp',
    featuredItems: [
      { name: '60 BBL Jacketed Unitank',  price: '$24,900', condition: 'Used', category: 'FERMENTER', image: 'fermenters-60bbl-pano.webp' },
      { name: '30 BBL Conical Fermenter', price: '$18,500', condition: 'Used', category: 'FERMENTER' },
      { name: '15 BBL Brite Tank',        price: '$9,800',  condition: 'Used', category: 'BRITE TANK' },
    ],
    buyerGuide: [
      { step: 1, title: 'Calculate Cellar Volume',      description: 'Match fermenter volume to your brewhouse output and desired fermentation time. A 15 BBL brewhouse typically needs 3-4x fermentation capacity to maintain steady production.' },
      { step: 2, title: 'Choose Vessel Type',           description: 'Unitanks ferment and condition in one vessel. Dedicated fermenters plus brite tanks give more flexibility but require more space. Confirm your cellar layout before purchasing.' },
      { step: 3, title: 'Review Specifications',        description: 'Confirm cone angle, jacket configuration, CIP spray ball positioning, and inlet/outlet sizes match your existing plumbing and glycol system.' },
      { step: 4, title: 'Confirm Glycol Compatibility', description: 'Verify your glycol chiller has sufficient capacity for the additional vessels. Adding fermentation volume without increasing chilling capacity creates production bottlenecks.' },
      { step: 5, title: 'Schedule Delivery',            description: 'Multi-vessel moves require coordinated rigging. We handle delivery, set, level, and CIP connection as part of our installation service.' },
    ],
    bestFitBuyers: [
      { title: 'Expanding Cellar Capacity', description: 'Adding fermentation volume to keep up with brewhouse output? We source matched vessels to your existing cellar configuration.', icon: 'M12 4v16m8-8H4' },
      { title: 'Building a New Cellar',     description: 'Outfitting a new facility from scratch? We can source a full matched set of fermenters and brite tanks at significantly below-new cost.', icon: 'M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z' },
      { title: 'Upgrading to Larger Vessels', description: 'Moving from smaller fermenters to production-scale vessels as you scale? We handle consignment of outgoing tanks and sourcing of replacements.', icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' },
      { title: 'Cidery or Distillery Build', description: 'Fermentation vessels for cider, spirits, kombucha, and beverage production require the same stainless equipment. Our inventory serves all these applications.', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0' },
    ],
  },
  {
    slug: 'canning',
    title: 'Canning & Packaging',
    h1: 'Canning Equipment and Canning Lines For Sale',
    shopifyCollectionUrl: 'https://beverageequipmenttraders.com/collections/canning',
    metaTitle: 'Canning Equipment & Canning Lines For Sale | Beverage Equipment Traders',
    metaDescription: 'Used and new canning machines, crowlers, shrink sleeve applicators, and complete canning lines. Ships nationwide. Inspected in San Marcos, CA.',
    description: 'Commercial canning machines, crowler fillers, Wild Goose canning lines, and full packaging systems for craft producers across all volume tiers.',
    bodyContent: `Canning and packaging equipment for craft beverage producers at every scale. Our inventory covers everything from crowler machines for taproom-volume operations through full automated canning lines capable of 50+ CPM. Wild Goose canning systems, manual and semi-automatic crowlers, shrink sleeve applicators, and inline date coders.

Canning line selection depends on your production volume, package format, and how the line integrates with your existing cellar. The most common mistake buyers make is under-sizing — selecting a line to current volume rather than projected growth. We are happy to walk through what your operation actually needs.

Shrink sleeve applicators and labeling equipment also available. The TriPack LSA 160 and similar mid-volume systems are suited for production lines running 20 to 100+ cases per hour, appropriate for craft producers and non-alcoholic beverage facilities.

All equipment ships nationwide. Rigging, installation, and commissioning services available. Contact us to confirm current canning inventory and lead times.`,
    keywords: ['canning machine for sale', 'used canning line brewery', 'crowler machine', 'Wild Goose canning line', 'shrink sleeve applicator brewery', 'commercial canning equipment', 'brewery packaging equipment'],
    faqs: [
      { q: 'What is the difference between a crowler machine and a full canning line?', a: 'A crowler machine seals individual crowler cans at taproom volumes — typically 5–20 cans per minute. A full canning line is designed for packaging production runs, with fill speeds of 30–120+ CPM and inline seaming, date coding, and sometimes shrink sleeves.' },
      { q: 'Do you carry Wild Goose canning lines?', a: 'Yes, Wild Goose systems appear in our inventory regularly. Contact us for current availability on specific models.' },
    ],
    priority: 'P1',
    heroImage: 'hero-canning.webp',
    featuredItems: [
      { name: 'Wild Goose WGC-250 Canning Line',          price: '$112,000', condition: 'New',  category: 'CANNING LINE' },
      { name: 'Semi-Auto Crowler Machine',                 price: '$4,200',   condition: 'Used', category: 'CROWLER' },
      { name: 'TriPack LSA 160 Shrink Sleeve Applicator', price: '$14,000',  condition: 'Used', category: 'PACKAGING' },
    ],
    buyerGuide: [
      { step: 1, title: 'Determine Required Speed',      description: 'Calculate cans per minute needed to package your weekly volume in your available packaging days. This is the single most important spec when selecting a line.' },
      { step: 2, title: 'Confirm Can Format',            description: 'Standard 12oz, 16oz, and 19.2oz formats are most common. Confirm the line supports your can format and whether it can be converted if your format changes.' },
      { step: 3, title: 'Evaluate Integration',          description: 'How does the line connect to your bright tank? What conveyance, depalletizer, and date coding do you need? Full-line integration planning prevents costly post-purchase additions.' },
      { step: 4, title: 'Review Condition and History',  description: 'Canning lines have high-wear components — seamer heads, fill valves, conveyor belts. Our condition documentation covers operational status and known wear items.' },
      { step: 5, title: 'Plan Installation',             description: 'Canning line installation requires floor space planning, utility connections, and often electrical work. Our team coordinates full installation including commissioning runs.' },
    ],
    bestFitBuyers: [
      { title: 'Entering Can Packaging',   description: 'Moving from draft-only to packaged product? A used semi-auto line at 20-30 CPM is the right starting point for most craft operations entering cans.', icon: 'M12 4v16m8-8H4' },
      { title: 'Scaling Packaging Volume', description: 'Your current line is the bottleneck. Upgrading to a higher-speed system to match brewhouse and fermentation output.', icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' },
      { title: 'Taproom Crowler Program',  description: 'Adding a crowler program to your taproom? Semi-auto and manual crowler machines provide a low-cost entry point for on-premise can sales.', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0' },
      { title: 'Contract Packaging',       description: 'Building a contract packaging operation? Production-scale lines at used prices make the economics of contract canning viable at lower contract volumes.', icon: 'M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z' },
    ],
  },
  {
    slug: 'chillers',
    title: 'Glycol Chillers',
    h1: 'Glycol Chillers and Cooling Systems For Brewing',
    shopifyCollectionUrl: 'https://beverageequipmenttraders.com/collections/chillers',
    metaTitle: 'Glycol Chillers & Cooling Systems For Brewing | Beverage Equipment Traders',
    metaDescription: 'New and used glycol chillers for brewing. G&D Chillers, Pro Refrigeration, and more. In stock in San Marcos, CA. Ships nationwide.',
    description: 'Glycol chillers and complete cooling systems from G&D Chillers, Pro Refrigeration, and other leading manufacturers, sized for production breweries.',
    bodyContent: `Glycol chilling systems are critical infrastructure for any fermentation program. We carry chillers from G&D Chillers, Pro Refrigeration, Glycool, and other manufacturers in tonnage ranges suited for both smaller craft operations and large production facilities.

Chiller sizing depends on total fermentation volume, cellar design, ambient facility temperatures, and whether the system is serving fermenters only or also cold-side packaging equipment. Undersizing a chiller creates production bottlenecks that are expensive to correct post-installation. We can help buyers evaluate sizing requirements before purchase.

Used chillers from working breweries are a value-strong option for producers who need proven, heavy-duty cooling capacity at significantly below-replacement cost. Our used chillers are inspected and photographed before listing.

Contact us for current glycol chiller inventory. We can also source specific tonnage ranges on request.`,
    keywords: ['glycol chiller brewery', 'used glycol chiller', 'G&D chillers', 'Pro Refrigeration chiller', 'brewery cooling system', 'fermentation chiller', 'glycol cooling system brewing'],
    faqs: [
      { q: 'How do I know what size glycol chiller I need?', a: 'Sizing depends on total fermentation volume, cellar vessel count, ambient temperature, and whether you are cooling packaging equipment as well. Our team can help you work through the calculation before you purchase.' },
      { q: 'Do you carry G&D and Pro Refrigeration units?', a: 'Yes, both brands appear in our inventory regularly. Contact us for current availability.' },
    ],
    priority: 'P1',
    featuredItems: [],
    buyerGuide: [
      { step: 1, title: 'Calculate Heat Load',         description: 'Total heat load depends on fermentation vessel volume, ambient temperature, and crash cooling frequency. Undersizing by even 20% creates production constraints.' },
      { step: 2, title: 'Confirm Tonnage Range',       description: 'Match chiller tonnage to your calculated heat load with a 20-30% safety margin. Account for future cellar expansion when sizing.' },
      { step: 3, title: 'Review Glycol Loop Design',   description: 'Confirm the chiller output temperature, flow rate, and glycol concentration match your vessel jacket specifications and existing piping.' },
      { step: 4, title: 'Check Electrical Requirements', description: 'Large chillers require 3-phase electrical service. Confirm your facility electrical infrastructure before purchasing.' },
      { step: 5, title: 'Plan Installation',           description: 'Chiller location, condensing unit placement, and glycol loop routing all require planning before the unit arrives. Our team can advise on installation requirements.' },
    ],
    bestFitBuyers: [
      { title: 'New Cellar Build',          description: 'Building out fermentation capacity and need a chiller sized to your full planned vessel count? We source units to your spec.', icon: 'M12 4v16m8-8H4' },
      { title: 'Existing Chiller Replacement', description: 'Current chiller failing or undersized for expanded cellar volume? Used production chillers offer immediate availability at below-new cost.', icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15' },
      { title: 'Cellar Expansion',          description: 'Adding fermentation volume and your current chiller is at capacity? We source supplemental units sized to your additional load.', icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' },
      { title: 'Distillery or Cidery',      description: 'Glycol chilling applies equally to distillery fermentation and cider production. Our inventory serves all beverage fermentation applications.', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0' },
    ],
  },
  {
    slug: 'distilling',
    title: 'Distilling Equipment',
    h1: 'Distilling Equipment For Sale: Stills and Systems',
    shopifyCollectionUrl: 'https://beverageequipmenttraders.com/collections/still-distillate',
    metaTitle: 'Distilling Equipment For Sale — Stills & Systems | Beverage Equipment Traders',
    metaDescription: 'New and used distilling equipment including copper pot stills, column stills, and complete distillery systems. Ships nationwide from San Marcos, CA.',
    description: 'Copper pot stills, column stills, and complete distillery systems for craft spirits producers. Current inventory includes a 300-gallon copper pot still.',
    bodyContent: `Craft distillery equipment for producers at every stage — from startup operations sourcing first-generation stills through established distilleries liquidating or upgrading. Our inventory includes copper pot stills, column stills, and supporting equipment including proofing tanks, fermenters, and bottling systems suited for spirits production.

The distillery equipment market extends well beyond the craft beverage industry. Food-grade processing, essential oil extraction, water distillation, and industrial applications all use similar still configurations. Our buyer base for distillery equipment is geographically distributed across all 50 states.

Current inventory includes a 300-gallon copper pot still at $75,000 — a standout piece for a craft distillery building out a small-batch program or looking to expand capacity. Pricing reflects current market conditions, equipment condition, manufacturer, and configuration.

Contact us for current distillery equipment availability. We can also assist with sourcing specific still configurations on request.`,
    keywords: ['distilling equipment for sale', 'copper still for sale', 'used distillery equipment', 'pot still for sale', 'column still brewery', 'craft distillery equipment', '300 gallon copper still'],
    faqs: [
      { q: 'Do you sell complete distillery setups?', a: 'We carry individual stills as well as supporting equipment. Complete multi-vessel distillery configurations are available depending on current inventory.' },
      { q: 'Can distilling equipment be used for food processing?', a: 'Yes. Many still configurations have applications beyond spirits — essential oil extraction, food processing, and industrial uses. Contact us to discuss your specific requirements.' },
    ],
    priority: 'P1',
    heroImage: 'hero-distilling.webp',
    featuredItems: [
      { name: '300 Gallon Copper Pot Still', price: '$75,000', condition: 'Used', category: 'STILL' },
    ],
    buyerGuide: [
      { step: 1, title: 'Define Still Type',              description: 'Pot stills produce heavier, more flavorful spirits suited for whiskey and rum. Column stills produce higher-proof neutral spirits. Hybrid stills offer flexibility across both styles.' },
      { step: 2, title: 'Determine Capacity',             description: 'Still capacity is measured in gallons of wash per run. Match still size to your fermentation vessel output and target production volume.' },
      { step: 3, title: 'Review Regulatory Requirements', description: 'Distillery equipment requires TTB approval and state licensing. Confirm your permit allows the still configuration you are purchasing before committing.' },
      { step: 4, title: 'Confirm Utility Requirements',   description: 'Stills require heat source (steam, direct fire, or electric), cooling water, and condensate handling. Verify your facility infrastructure matches the still requirements.' },
      { step: 5, title: 'Plan Installation',              description: 'Still installation involves utility connections, drainage, and often structural considerations. Our team coordinates delivery and can advise on installation requirements.' },
    ],
    bestFitBuyers: [
      { title: 'Craft Distillery Startup', description: 'Launching a craft spirits program and sourcing your first still? Used production stills offer proven performance at significantly below-new cost.', icon: 'M12 4v16m8-8H4' },
      { title: 'Capacity Expansion',       description: 'Current still is the production bottleneck? Adding a second still or upgrading to larger capacity to meet demand.', icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' },
      { title: 'Brewery Adding Spirits',   description: 'Craft brewery expanding into spirits production? We source stills sized for craft production programs that complement existing brewing infrastructure.', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0' },
      { title: 'Industrial Applications',  description: 'Food processing, essential oil extraction, and industrial distillation applications use similar equipment. We source stills for non-spirits applications as well.', icon: 'M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z' },
    ],
  },
  {
    slug: 'kegs',
    title: 'Kegs & Casks',
    h1: 'Used Kegs and Cask Kegs For Sale',
    shopifyCollectionUrl: 'https://beverageequipmenttraders.com/collections/casks',
    metaTitle: 'Used Kegs & Cask Kegs For Sale | Beverage Equipment Traders',
    metaDescription: 'Half barrel kegs, 1/6 BBL kegs, cask kegs, and more. In stock at our San Marcos, CA facility. Ships nationwide.',
    description: 'Half barrel kegs, sixth barrel kegs, cask kegs, and real ales containers. Multiple sizes in stock with nationwide shipping available.',
    bodyContent: `Kegs and cask containers for production breweries, taprooms, and specialty producers. Our inventory covers the full range of standard and specialty keg formats: half barrel (1/2 BBL), quarter barrel (1/4 BBL), sixth barrel (1/6 BBL), and cask kegs in both pin and firkin sizes.

Cask kegs serve the real ale and cask-conditioned market, as well as producers selling to on-premise accounts that have installed cask tap systems. We currently rank in the top results for cask keg searches, reflecting genuine inventory depth in this niche.

Used kegs from our inventory are sourced from production breweries and arrive with legitimate brewing history. New kegs from select manufacturers are also available. Contact us for volume pricing on bulk keg purchases.`,
    keywords: ['cask kegs for sale', 'used kegs brewery', 'half barrel kegs', '1/6 bbl keg', 'firkin kegs', 'pin cask kegs', 'brewery kegs for sale'],
    faqs: [
      { q: 'Do you sell cask kegs for real ale production?', a: 'Yes. Pin casks and firkins are available for real ale and cask-conditioned production. Contact us for current inventory.' },
    ],
    priority: 'P1',
    featuredItems: [],
    buyerGuide: [
      { step: 1, title: 'Determine Keg Format',    description: 'Half barrel (15.5 gal) for standard draft accounts. Sixth barrel for specialty and rotating taps. Cask kegs (pin and firkin) for real ale programs.' },
      { step: 2, title: 'Calculate Volume Needed', description: 'Match keg inventory to your weekly packaging volume and average account cycle time. Most production breweries maintain 3-4x weekly production volume in keg inventory.' },
      { step: 3, title: 'Inspect Condition',       description: 'Used kegs should be pressure-tested and valve-inspected. Our used keg inventory is sourced from production breweries with known maintenance history.' },
      { step: 4, title: 'Confirm Valve Type',      description: 'Sanke D is the US standard. European Sanke A, S, and G valves require different couplers. Confirm valve compatibility with your accounts before purchasing.' },
      { step: 5, title: 'Arrange Delivery',        description: 'Kegs ship efficiently by pallet. Contact us for volume pricing and freight quotes on bulk orders.' },
    ],
    bestFitBuyers: [
      { title: 'New Draft Program',       description: 'Launching draft distribution and need an initial keg inventory? We source matched sets of used half barrels and sixth barrels for startup programs.', icon: 'M12 4v16m8-8H4' },
      { title: 'Expanding Distribution',  description: 'Adding accounts and need to increase keg inventory? Bulk used keg purchases at competitive pricing.', icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' },
      { title: 'Real Ale Program',        description: 'Launching cask-conditioned ales? Pin casks and firkins for real ale programs serving on-premise accounts with cask tap installations.', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0' },
      { title: 'Taproom Only',            description: 'Taproom-focused operation needing sixth barrel kegs for rotating tap handles? Small quantities available alongside bulk orders.', icon: 'M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z' },
    ],
  },
  {
    slug: 'boilers',
    title: 'Boilers',
    h1: 'Commercial Boilers For Sale: Brewery and Beverage',
    shopifyCollectionUrl: 'https://beverageequipmenttraders.com/collections/boilers',
    metaTitle: 'Commercial Boilers For Sale — Brewery & Beverage | Beverage Equipment Traders',
    metaDescription: 'New and used commercial boilers for brewing. Rite boilers, Lattner boilers, Sussman electric boilers in stock. Ships nationwide.',
    description: 'Commercial steam boilers for brewery and beverage operations, including Rite, Lattner, and Sussman models in various BTU ratings.',
    bodyContent: `Commercial steam boilers for brewery, distillery, and beverage production. We carry steam boilers from Rite Engineering, Lattner Boiler Company, Sussman Electric Boilers, and other manufacturers suited for direct-steam brewhouse systems and process heating applications.

Boiler selection depends on your steam demand, facility utility infrastructure, and whether you are running a direct-fire or steam-heated brewhouse. Steam boilers require licensed installation and are subject to local utility and pressure vessel regulations — we recommend buyers verify local requirements before purchase.

Used boilers in our inventory are sourced from working production facilities. Condition documentation, nameplate specs, and operational history are provided where available. New Sussman electric boilers represent a code-compliant, lower-installation-complexity option for facilities where natural gas or steam systems are constrained.`,
    keywords: ['commercial boiler brewery', 'Rite boiler for sale', 'Lattner boiler', 'Sussman electric boiler', 'steam boiler brewery', 'used boiler for sale'],
    faqs: [
      { q: 'Do I need a licensed installer for a commercial boiler?', a: 'Yes. Commercial steam boilers are pressure vessels subject to state and local codes. Installation must be performed by licensed professionals. We can provide referrals to qualified installers.' },
    ],
    priority: 'P2',
    heroImage: 'hero-boilers.webp',
    featuredItems: [],
    buyerGuide: [
      { step: 1, title: 'Calculate Steam Demand',      description: 'Steam demand is driven by brewhouse heating requirements and process timing. Work with your brewhouse manufacturer or an engineer to confirm BTU requirements.' },
      { step: 2, title: 'Choose Fuel Type',            description: 'Natural gas is standard for most facilities. Electric boilers (Sussman) are code-simpler but higher operating cost. Confirm your facility utility availability.' },
      { step: 3, title: 'Verify Local Codes',          description: 'Pressure vessel installation requires permits and licensed installers in most jurisdictions. Verify local requirements before purchasing.' },
      { step: 4, title: 'Review Condition Documentation', description: 'Used boilers should have current inspection certification and maintenance records. Our listings include available documentation on condition and service history.' },
      { step: 5, title: 'Coordinate Licensed Installation', description: 'Boiler installation requires licensed plumbers and engineers. We can provide referrals to qualified installers familiar with brewery applications.' },
    ],
    bestFitBuyers: [
      { title: 'Steam-Heated Brewhouse',    description: 'Running or building a steam-heated brewhouse and need a matched boiler? We source boilers to your BTU requirements.', icon: 'M12 4v16m8-8H4' },
      { title: 'Boiler Replacement',        description: 'Existing boiler failing or at end of service life? Used production boilers offer immediate availability at below-replacement cost.', icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15' },
      { title: 'Distillery Steam System',   description: 'Steam-heated stills and process equipment require the same boiler infrastructure as brewhouses. We source boilers for distillery applications.', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0' },
      { title: 'Food Processing',           description: 'Commercial steam boilers serve food processing, dairy, and beverage production applications beyond brewing. Contact us to discuss your specific requirements.', icon: 'M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z' },
    ],
  },
  {
    slug: 'cold-rooms',
    title: 'Cold Rooms',
    h1: 'Cold Rooms and Cold Boxes For Brewing',
    shopifyCollectionUrl: 'https://beverageequipmenttraders.com/collections/cold-box',
    metaTitle: 'Cold Rooms & Cold Boxes For Sale — Brewing & Beverage | Beverage Equipment Traders',
    metaDescription: 'Used and new cold rooms, walk-in coolers, and cold boxes for brewing and beverage operations. In stock in San Marcos, CA. Ships nationwide.',
    description: 'Walk-in coolers, cold rooms, and cold boxes for temperature-controlled storage in brewing and beverage production facilities.',
    bodyContent: `Cold storage for breweries, beverage producers, and food processing operations. Walk-in coolers, cold rooms, and modular cold boxes in various configurations — from compact taproom cold storage through large-format production coolers for high-volume packaging facilities.

Cold room configuration involves floor dimensions, door placement, refrigeration unit type (remote vs. self-contained), and target temperature range. Brewery cold storage typically operates between 34°F and 38°F for bright beer storage and lagering. Fermentation cold rooms require broader temperature control ranges including crash cooling capability.

Used cold room panels and refrigeration units from our inventory are typically sourced from food and beverage facility liquidations. Condition includes panel integrity, gasket condition, and refrigeration unit operational status. Contact us for current cold room inventory and custom configuration options.`,
    keywords: ['cold room brewery', 'walk-in cooler brewery', 'cold box for brewing', 'used walk-in cooler', 'brewing cold storage', 'beverage cold room'],
    faqs: [
      { q: 'Can you configure a cold room to specific dimensions?', a: 'Panel-based cold rooms can often be reconfigured to different dimensions. Contact us with your floor plan and we can advise on what is possible with available inventory.' },
    ],
    priority: 'P1',
    heroImage: 'hero-cold-rooms.webp',
    featuredItems: [],
    buyerGuide: [
      { step: 1, title: 'Define Temperature Range',    description: 'Bright beer and serving cold rooms operate at 34-38°F. Fermentation rooms require wider range including crash cooling to 32°F. Confirm your temperature requirements before sizing refrigeration.' },
      { step: 2, title: 'Calculate Square Footage',    description: 'Size cold room to your peak package inventory — typically 2-3 weeks of production for distribution operations. Add 20% margin for operational flexibility.' },
      { step: 3, title: 'Choose Refrigeration Type',   description: 'Self-contained units are simpler to install. Remote condensing units are quieter and more efficient for larger rooms. Confirm your facility layout accommodates your choice.' },
      { step: 4, title: 'Review Panel Condition',      description: 'Insulated panels should be free of moisture infiltration and structural damage. Gaskets and door hardware are wear items — confirm their condition in our listings.' },
      { step: 5, title: 'Plan Installation',           description: 'Cold room installation requires floor preparation, electrical, and often drain work. Our team can advise on installation requirements and coordinate delivery.' },
    ],
    bestFitBuyers: [
      { title: 'Taproom Cold Storage',    description: 'Adding cold storage to a taproom operation for keg and package inventory? Compact walk-in units sized for taproom volume.', icon: 'M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z' },
      { title: 'Production Brewery',      description: 'Scaling production and need larger cold storage for bright beer and packaged product? Production-scale cold rooms from brewery liquidations.', icon: 'M12 4v16m8-8H4' },
      { title: 'Distribution Operation',  description: 'Building out distribution cold storage for packaged product inventory? Large-format cold rooms sized for distribution volume.', icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' },
      { title: 'Food Processing',         description: 'Cold rooms from brewery and beverage liquidations serve food processing, dairy, and produce storage applications. Same panel systems, different contents.', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0' },
    ],
  },
];

export function getCategoryBySlug(slug: string): EquipmentCategory | undefined {
  return EQUIPMENT_CATEGORIES.find((c) => c.slug === slug);
}
