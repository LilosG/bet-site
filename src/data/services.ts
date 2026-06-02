// ─────────────────────────────────────────────
//  SERVICES DATA — Central Source
// ─────────────────────────────────────────────

export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  h1: string;
  icon: string;             // inline SVG path data
  metaTitle: string;
  metaDescription: string;
  intro: string;
  bodyContent: string;
  faqs: { q: string; a: string }[];
  cta: { label: string; href: string };
  keywords: string[];
}

export const SERVICES: Service[] = [
  {
    slug: 'rigging',
    title: 'Rigging & Installation',
    shortTitle: 'Rigging',
    h1: 'Brewery Equipment Rigging and Installation Services',
    icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5',
    metaTitle: 'Brewery Equipment Rigging & Installation | Beverage Equipment Traders — San Marcos, CA',
    metaDescription:
      'Full-service brewery equipment rigging, de-installation, transportation, and installation nationwide. Crane operation, millwright crews, bonded freight. Call (949) 888-2739.',
    intro:
      'One crew, one quote, one accountable partner — from your loading dock to your new facility floor, coast to coast.',
    bodyContent: `Rigging is not an afterthought. A $78,000 brewhouse is a $78,000 liability until it is installed, level, connected, and commissioned. Beverage Equipment Traders handles every step: de-installation at the source, rigging and load-out, bonded freight, delivery, set and level, utilities connection, and startup commissioning.

Our crews are experienced with brewhouse systems, large fermentation vessels, canning lines, and full facility builds. We handle crane-in operations for large systems, multi-level installations, and urban sites with constrained access. No general contractor trying to figure it out as they go.

Service geography covers all 50 states. Local San Diego and Southern California jobs typically turn around within 1 to 2 weeks. National installations are scheduled based on crew availability and freight routing. We provide a single quote covering all phases — no surprise add-ons after the equipment is already in transit.

For buyers purchasing equipment from our inventory, rigging and installation can be quoted together with the purchase, simplifying the overall project scope and providing a single point of accountability from purchase through operational startup.`,
    faqs: [
      {
        q: 'What types of equipment do you rig and install?',
        a: 'We handle complete brewhouses, fermentation vessels, canning and packaging lines, glycol chilling systems, boilers, and full facility builds. If it is production-grade beverage equipment, we have moved it.',
      },
      {
        q: 'Do you handle de-installation as well as installation?',
        a: 'Yes. Full-service means we can de-install at the originating facility, load and transport, and install at the destination. We also handle consignment pickups for sellers liquidating equipment.',
      },
      {
        q: 'Do you work outside California?',
        a: 'Yes. We handle rigging and installation in all 50 states. National jobs are quoted and scheduled individually.',
      },
      {
        q: 'How quickly can you provide a quote?',
        a: 'Our trade desk responds within one business day. Provide the equipment list, origin address, and destination address and we will return a complete scope and price.',
      },
    ],
    cta: { label: 'Get a Rigging Quote', href: '/contact?type=rigging' },
    keywords: [
      'brewery equipment rigging', 'brewery equipment installation', 'brewery equipment movers California',
      'rigging and installation San Diego', 'brewery equipment rigging nationwide',
      'brewhouse installation service', 'millwright brewery',
    ],
  },
  {
    slug: 'consignment',
    title: 'Consignment',
    shortTitle: 'Consignment',
    h1: 'Sell Your Brewery Equipment on Consignment',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0',
    metaTitle: 'Sell Brewery Equipment on Consignment | Beverage Equipment Traders',
    metaDescription:
      'Consign your used brewery equipment with BET. We handle photography, listing, marketing, and sale. Serving breweries upgrading, downsizing, or closing. Call (949) 888-2739.',
    intro:
      'Quietly liquidate idle assets. We handle photography, listings, vetting, and payout.',
    bodyContent: `Consignment is the right choice when you need to recover maximum value from equipment without devoting internal resources to the sale. Beverage Equipment Traders handles every step: on-site photography, detailed listing creation, buyer qualification, pricing strategy, and final sale coordination.

Our buyer network spans the full spectrum of craft beverage producers — new breweries sourcing first equipment, established operations expanding capacity, and distilleries and cideries entering adjacent markets. Equipment listed with us reaches qualified buyers who are actively searching, not casual browsers.

The consignment process starts with an equipment assessment — we review what you have, advise on realistic market pricing, and provide a timeline estimate based on current inventory movement. Commission structure is transparent. We do not charge listing fees or upfront costs.

Consignment is appropriate for: breweries upgrading to larger systems, facilities reducing footprint, partnership dissolutions, and full brewery liquidations. Contact us to discuss your specific situation.`,
    faqs: [
      {
        q: 'What is your consignment commission rate?',
        a: 'Commission rate varies by equipment type and estimated sale price. We discuss this upfront during the equipment assessment. There are no listing fees or upfront costs.',
      },
      {
        q: 'How long does equipment typically take to sell on consignment?',
        a: 'Timeline depends on equipment type, condition, and pricing. Brewhouses and complete canning lines with competitive pricing typically move within 30 to 90 days.',
      },
      {
        q: 'Do you handle full brewery liquidations?',
        a: 'Yes. Full-facility liquidations can be handled on consignment, via direct purchase, or through our auction program. Contact us to discuss which approach best fits your timeline and goals.',
      },
    ],
    cta: { label: 'Discuss Consignment', href: '/contact?type=consignment' },
    keywords: [
      'sell brewery equipment', 'brewery consignment California', 'brewery equipment consignment',
      'sell used brewery equipment', 'brewery liquidation consignment', 'used brewery equipment seller',
    ],
  },
  {
    slug: 'auctions',
    title: 'Commercial Auctions',
    shortTitle: 'Auctions',
    h1: 'Brewery Equipment Auctions — Live and Online',
    icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0',
    metaTitle: 'Brewery Equipment Auctions — Live & Online | Beverage Equipment Traders',
    metaDescription:
      'Full-facility brewery equipment auctions. Fast, transparent, and marketed to a vetted buyer network. BET manages the entire process from listing through final settlement.',
    intro:
      'Full-facility liquidation with rapid asset recovery. Marketed to a vetted operator network.',
    bodyContent: `Brewery equipment auctions provide the fastest path to full-facility liquidation when timeline is the primary constraint. Beverage Equipment Traders manages the entire auction lifecycle: equipment inventory and photography, lot creation, online listing across our buyer network and third-party platforms, live or timed bidding, buyer qualification, and post-sale settlement including rigging coordination.

Our auction buyer network is active and qualified. We market directly to production breweries, cideries, distilleries, and processing facilities that are actively looking to acquire equipment. This is not a generalist auction platform — it is an industry-specific network where buyers understand what they are purchasing.

Auctions are appropriate for: full brewery or beverage facility closures, large estate sales, partial facility liquidations where consignment would take too long, and investors or lenders recovering assets on a defined timeline.

Contact us to discuss your facility, timeline, and goals. We will advise whether auction, consignment, or direct purchase best serves your situation.`,
    faqs: [
      {
        q: 'How long does the auction process take?',
        a: 'From engagement to final settlement, most auctions complete within 30 to 60 days depending on the scope of the facility and any logistical requirements.',
      },
      {
        q: 'Can I participate as a buyer in BET auctions?',
        a: 'Yes. Current and upcoming auction listings are maintained on this page. Contact us to register as a buyer and receive advance notice of upcoming events.',
      },
      {
        q: 'Do you handle auctions outside California?',
        a: 'Yes. We have facilitated brewery equipment auctions in multiple states. Contact us to discuss a specific location.',
      },
    ],
    cta: { label: 'Discuss Auction Services', href: '/contact?type=auction' },
    keywords: [
      'brewery equipment auction', 'brewery auction California', 'brewery equipment auction nationwide',
      'sell brewery equipment auction', 'brewery liquidation auction', 'beverage equipment auction',
    ],
  },
  {
    slug: 'consulting',
    title: 'Engineering Consulting',
    shortTitle: 'Consulting',
    h1: 'Brewery and Beverage Equipment Consulting Services',
    icon: 'M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 0v10',
    metaTitle: 'Brewery & Beverage Equipment Consulting | Beverage Equipment Traders',
    metaDescription:
      'Process layout, capacity planning, and commissioning support from prior brewery operators. Equipment sourcing strategy and brewery startup consulting. San Marcos, CA.',
    intro:
      'Pre-purchase audits, capacity planning, and brewery layout from people who have run the gear.',
    bodyContent: `Our consulting services are grounded in one credential that most equipment dealers cannot claim: we operated a brewery before we started trading equipment. We have sized brewhouses, designed fermentation programs, troubleshot glycol loops at 2 a.m., and rebuilt canning lines that vendors said were dead.

That operating experience translates directly into useful consulting for buyers making capital decisions. We can help you evaluate whether a specific piece of used equipment is priced correctly, whether a proposed facility layout will function efficiently at scale, and whether a new brewery build is being sourced at the right capacity for the projected volume.

Consulting engagements range from single-session equipment evaluations through full brewery design and equipment sourcing projects. We work with new brewery builders, existing operations expanding capacity, investors conducting due diligence on brewery acquisitions, and lenders evaluating brewery asset values.

Contact us to describe your situation and we will advise on what consulting engagement structure makes sense.`,
    faqs: [
      {
        q: 'Do you consult on new brewery builds from scratch?',
        a: 'Yes. We can help with equipment specification, capacity planning, facility layout, sourcing strategy, and sequencing the equipment procurement process from initial planning through installation.',
      },
      {
        q: 'Can you help with brewery acquisition due diligence?',
        a: 'Yes. We provide equipment valuation and condition assessments for investors and lenders evaluating brewery acquisitions or securing equipment as collateral.',
      },
    ],
    cta: { label: 'Schedule a Consultation', href: '/contact?type=consulting' },
    keywords: [
      'brewery consulting services', 'brewery startup equipment planning',
      'brewery build consultant California', 'brewery equipment consultant',
      'capacity planning brewery', 'brewery facility design',
    ],
  },
  {
    slug: 'new-equipment',
    title: 'New Equipment',
    shortTitle: 'New Equipment',
    h1: 'New Brewery Equipment — Custom and In-Stock',
    icon: 'M12 4v16m8-8H4',
    metaTitle: 'New Brewery Equipment For Sale | Beverage Equipment Traders',
    metaDescription:
      'New brewery equipment from Marks Design and Metalworks, Specific Mechanical, and select manufacturers. Custom brewhouse configurations and in-stock new equipment. San Marcos, CA.',
    intro:
      'Factory-new systems from trusted manufacturers, custom spec to your capacity and budget.',
    bodyContent: `Beverage Equipment Traders represents select manufacturers of new brewery and beverage production equipment, offering buyers access to factory-new systems with full warranty coverage and manufacturer support alongside our used equipment inventory.

Manufacturer relationships include Marks Design and Metalworks, Specific Mechanical Systems, and others offering custom-fabricated and in-stock configurations. New brewhouse systems are available in custom configurations, with lead times and pricing dependent on specification.

For buyers deciding between new and used, we can provide honest context: a well-maintained used brewhouse from a production facility typically offers significantly better value per barrel of capacity than a new system at the same price point, but new equipment provides warranty coverage, known operational history, and consistent lead times. Both have appropriate use cases depending on your capital structure and timeline.

Contact us to discuss your new equipment requirements. We can help with specification, pricing, and lead time estimates from our manufacturer relationships.`,
    faqs: [
      {
        q: 'Do you offer custom brewhouse configurations?',
        a: 'Yes, through our manufacturer relationships we can spec and source custom brewhouse configurations based on your volume requirements, utility infrastructure, and facility layout.',
      },
      {
        q: 'What is the lead time on new equipment?',
        a: 'Lead times vary by manufacturer and configuration. Custom fabricated systems from Marks or Specific Mechanical typically run 12 to 24 weeks depending on queue and specification complexity.',
      },
    ],
    cta: { label: 'Inquire About New Equipment', href: '/contact?type=new-equipment' },
    keywords: [
      'new brewhouse for sale', 'custom brewery equipment', 'new brewery equipment California',
      'Marks brewery equipment', 'Specific Mechanical brewhouse', 'new brewery system',
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
