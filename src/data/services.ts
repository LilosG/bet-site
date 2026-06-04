// ─────────────────────────────────────────────
//  SERVICES DATA — Central Source
//  All service pages pull exclusively from here.
//  No hardcoded content in templates.
//  heroImage stores filename only — resolved via import.meta.glob in template.
// ─────────────────────────────────────────────

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface BestFitScenario {
  title: string;
  description: string;
  icon: string;
}

export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  h1: string;
  icon: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  bodyContent: string;
  processSteps: ProcessStep[];
  bestFitScenarios: BestFitScenario[];
  faqs: { q: string; a: string }[];
  cta: { label: string; href: string };
  relatedServices: string[];
  relatedEquipment: string[];
  industries: string[];
  keywords: string[];
  heroImage?: string;  // filename only — resolved via import.meta.glob in template
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
    processSteps: [
      { step: 1, title: 'Scope & Quote',           description: 'Provide equipment list, origin address, and destination. We return a complete scope and fixed price within one business day — no open-ended estimates.' },
      { step: 2, title: 'De-Installation',          description: 'Our crew de-installs at the source facility: disconnecting utilities, draining vessels, and preparing equipment for safe load-out with full documentation.' },
      { step: 3, title: 'Load-Out & Freight',       description: 'Bonded freight and rigging load-out. Equipment is secured, documented, and shipped under our direct coordination — not handed off to a third-party broker.' },
      { step: 4, title: 'Set & Level',              description: 'Installation at the destination. We set, level, and position every vessel to spec. Crane operations, forklift work, and constrained-access installations all handled in-house.' },
      { step: 5, title: 'Utilities & Commissioning', description: 'Utilities connection and startup commissioning. We do not leave until the equipment runs. Every installation includes a commissioning walkthrough with your team.' },
    ],
    bestFitScenarios: [
      { title: 'Brewery Expansion',    description: 'Purchasing additional fermenters, a larger brewhouse, or a canning line? We handle the move from source facility through commissioned installation at your expanded space.', icon: 'M12 2v20M2 12h20' },
      { title: 'Facility Relocation',  description: 'Moving your entire operation to a new building? Full facility de-install, transport, and reinstall under a single crew and contract.', icon: 'M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z' },
      { title: 'Equipment Purchase',   description: 'Buying used equipment from our inventory or another source? Bundle rigging and installation with the purchase for a single accountable scope.', icon: 'M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2zM16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16' },
      { title: 'Consignment Pickup',   description: 'Selling equipment on consignment through us? We handle de-installation and transport to our San Marcos facility as part of the consignment process.', icon: 'M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8' },
    ],
    faqs: [
      { q: 'What types of equipment do you rig and install?', a: 'We handle complete brewhouses, fermentation vessels, canning and packaging lines, glycol chilling systems, boilers, and full facility builds. If it is production-grade beverage equipment, we have moved it.' },
      { q: 'Do you handle de-installation as well as installation?', a: 'Yes. Full-service means we can de-install at the originating facility, load and transport, and install at the destination. We also handle consignment pickups for sellers liquidating equipment.' },
      { q: 'Do you work outside California?', a: 'Yes. We handle rigging and installation in all 50 states. National jobs are quoted and scheduled individually.' },
      { q: 'How quickly can you provide a quote?', a: 'Our trade desk responds within one business day. Provide the equipment list, origin address, and destination address and we will return a complete scope and price.' },
    ],
    cta: { label: 'Get a Rigging Quote', href: '/contact?type=rigging' },
    relatedServices: ['consignment', 'new-equipment'],
    relatedEquipment: ['brewhouses', 'fermenters', 'canning', 'chillers'],
    industries: ['craft-brewery', 'distillery', 'cidery', 'beverage-production'],
    keywords: ['brewery equipment rigging', 'brewery equipment installation', 'brewery equipment movers California', 'rigging and installation San Diego', 'brewery equipment rigging nationwide', 'brewhouse installation service', 'millwright brewery'],
    heroImage: 'rigging-loaded-truck.webp',
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
    intro: 'Quietly liquidate idle assets. We handle photography, listings, vetting, and payout.',
    bodyContent: `Consignment is the right choice when you need to recover maximum value from equipment without devoting internal resources to the sale. Beverage Equipment Traders handles every step: on-site photography, detailed listing creation, buyer qualification, pricing strategy, and final sale coordination.

Our buyer network spans the full spectrum of craft beverage producers — new breweries sourcing first equipment, established operations expanding capacity, and distilleries and cideries entering adjacent markets. Equipment listed with us reaches qualified buyers who are actively searching, not casual browsers.

The consignment process starts with an equipment assessment — we review what you have, advise on realistic market pricing, and provide a timeline estimate based on current inventory movement. Commission structure is transparent. We do not charge listing fees or upfront costs.

Consignment is appropriate for: breweries upgrading to larger systems, facilities reducing footprint, partnership dissolutions, and full brewery liquidations. Contact us to discuss your specific situation.`,
    processSteps: [
      { step: 1, title: 'Equipment Assessment',     description: 'We review your equipment list, advise on realistic market pricing based on current demand, and provide an honest timeline estimate. No upfront fees.' },
      { step: 2, title: 'Photography & Documentation', description: 'On-site photography, video walkthroughs, and full condition documentation. High-quality visual presentation is one of the largest drivers of sale price and speed.' },
      { step: 3, title: 'Listing & Marketing',     description: 'Equipment is listed on our site, in our buyer network, and across relevant industry platforms. We target qualified buyers — production operators who know what they\'re purchasing.' },
      { step: 4, title: 'Buyer Qualification',     description: 'We vet buyers, handle inquiries, and manage negotiations on your behalf. You are not fielding calls from unqualified tire-kickers.' },
      { step: 5, title: 'Sale & Settlement',        description: 'Once sold, we coordinate logistics and handle final settlement. Payout is straightforward and transparent per the agreed commission structure.' },
    ],
    bestFitScenarios: [
      { title: 'Capacity Upgrade',          description: 'Replacing a 15 BBL brewhouse with a 30 BBL system? Consign the outgoing equipment to offset the capital cost of the upgrade.', icon: 'M5 3l14 9-14 9V3z' },
      { title: 'Facility Downsizing',       description: 'Reducing production capacity or consolidating operations? Consignment recovers value from equipment you no longer need without a fire-sale timeline.', icon: 'M19 14l-7 7m0 0l-7-7m7 7V3' },
      { title: 'Partnership Dissolution',   description: 'Splitting brewery assets as part of a business separation? Consignment provides a structured, documented sale process with transparent proceeds.', icon: 'M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75' },
      { title: 'Full Brewery Liquidation',  description: 'Closing your brewery? Consignment handles the full asset set methodically, maximizing recovery on each piece rather than bundling everything at a discount.', icon: 'M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3' },
    ],
    faqs: [
      { q: 'What is your consignment commission rate?', a: 'Commission rate varies by equipment type and estimated sale price. We discuss this upfront during the equipment assessment. There are no listing fees or upfront costs.' },
      { q: 'How long does equipment typically take to sell on consignment?', a: 'Timeline depends on equipment type, condition, and pricing. Brewhouses and complete canning lines with competitive pricing typically move within 30 to 90 days.' },
      { q: 'Do you handle full brewery liquidations?', a: 'Yes. Full-facility liquidations can be handled on consignment, via direct purchase, or through our auction program. Contact us to discuss which approach best fits your timeline and goals.' },
      { q: 'Do you pick up equipment or does the seller deliver?', a: 'We can coordinate pickup via our rigging team for larger equipment sets. For full facility liquidations, we typically come to the site. Contact us to discuss logistics for your specific situation.' },
    ],
    cta: { label: 'Discuss Consignment', href: '/contact?type=consignment' },
    relatedServices: ['auctions', 'rigging'],
    relatedEquipment: ['brewhouses', 'fermenters', 'canning', 'chillers'],
    industries: ['craft-brewery', 'distillery', 'cidery', 'beverage-production'],
    keywords: ['sell brewery equipment', 'brewery consignment California', 'brewery equipment consignment', 'sell used brewery equipment', 'brewery liquidation consignment', 'used brewery equipment seller'],
    heroImage: 'hero-equipment.webp',
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
    intro: 'Full-facility liquidation with rapid asset recovery. Marketed to a vetted operator network.',
    bodyContent: `Brewery equipment auctions provide the fastest path to full-facility liquidation when timeline is the primary constraint. Beverage Equipment Traders manages the entire auction lifecycle: equipment inventory and photography, lot creation, online listing across our buyer network and third-party platforms, live or timed bidding, buyer qualification, and post-sale settlement including rigging coordination.

Our auction buyer network is active and qualified. We market directly to production breweries, cideries, distilleries, and processing facilities that are actively looking to acquire equipment. This is not a generalist auction platform — it is an industry-specific network where buyers understand what they are purchasing.

Auctions are appropriate for: full brewery or beverage facility closures, large estate sales, partial facility liquidations where consignment would take too long, and investors or lenders recovering assets on a defined timeline.

Contact us to discuss your facility, timeline, and goals. We will advise whether auction, consignment, or direct purchase best serves your situation.`,
    processSteps: [
      { step: 1, title: 'Facility & Asset Review', description: 'We assess the full equipment set, provide a realistic reserve and gross estimate, and advise on whether auction, consignment, or direct purchase best fits your timeline.' },
      { step: 2, title: 'Inventory & Documentation', description: 'Complete equipment photography, video, lot creation, and condition documentation. Every lot is presented to maximize buyer confidence and bid value.' },
      { step: 3, title: 'Buyer Marketing',    description: 'Active marketing to our qualified buyer network — production operators, not general auctioneers. Cross-listed on industry platforms for maximum reach.' },
      { step: 4, title: 'Bidding & Sale',     description: 'Live or timed online bidding with buyer qualification. We manage the full bidding process, answer buyer questions, and handle all sale administration.' },
      { step: 5, title: 'Removal & Settlement', description: 'Post-sale rigging coordination, equipment removal scheduling, and final settlement to the seller. Everything handled under one roof.' },
    ],
    bestFitScenarios: [
      { title: 'Brewery Closure',            description: 'Closing your operation and need to recover assets quickly? Auction is the fastest path from full facility to cleared building and settled proceeds.', icon: 'M6 18L18 6M6 6l12 12' },
      { title: 'Facility Consolidation',     description: 'Merging two production locations into one? Auction the surplus equipment set efficiently without absorbing the timeline risk of consignment.', icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4' },
      { title: 'Production Line Upgrade',    description: 'Replacing an entire canning line or brewhouse system? Auction the outgoing equipment as a lot for faster recovery than piece-by-piece consignment.', icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15' },
      { title: 'Lender or Investor Recovery', description: 'Recovering brewery assets as a lender or investor on a defined legal timeline? Auction provides documented, transparent asset liquidation with clear settlement.', icon: 'M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z' },
    ],
    faqs: [
      { q: 'How long does the auction process take?', a: 'From engagement to final settlement, most auctions complete within 30 to 60 days depending on the scope of the facility and any logistical requirements.' },
      { q: 'Can I participate as a buyer in BET auctions?', a: 'Yes. Contact us to register as a buyer and receive advance notice of upcoming events.' },
      { q: 'Do you handle auctions outside California?', a: 'Yes. We have facilitated brewery equipment auctions in multiple states. Contact us to discuss a specific location.' },
      { q: 'How is auction different from consignment?', a: 'Consignment targets maximum recovery over a longer timeline. Auction prioritizes speed — full facility cleared and settled within 30 to 60 days. We advise which approach fits your situation after reviewing the equipment set.' },
    ],
    cta: { label: 'Discuss Auction Services', href: '/contact?type=auction' },
    relatedServices: ['consignment', 'rigging'],
    relatedEquipment: ['brewhouses', 'fermenters', 'canning', 'chillers'],
    industries: ['craft-brewery', 'distillery', 'cidery', 'beverage-production'],
    keywords: ['brewery equipment auction', 'brewery auction California', 'brewery equipment auction nationwide', 'sell brewery equipment auction', 'brewery liquidation auction', 'beverage equipment auction'],
    heroImage: 'hero-fermenters.webp',
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
    intro: 'Pre-purchase audits, capacity planning, and brewery layout from people who have run the gear.',
    bodyContent: `Our consulting services are grounded in one credential that most equipment dealers cannot claim: we operated a brewery before we started trading equipment. We have sized brewhouses, designed fermentation programs, troubleshot glycol loops at 2 a.m., and rebuilt canning lines that vendors said were dead.

That operating experience translates directly into useful consulting for buyers making capital decisions. We can help you evaluate whether a specific piece of used equipment is priced correctly, whether a proposed facility layout will function efficiently at scale, and whether a new brewery build is being sourced at the right capacity for the projected volume.

Consulting engagements range from single-session equipment evaluations through full brewery design and equipment sourcing projects. We work with new brewery builders, existing operations expanding capacity, investors conducting due diligence on brewery acquisitions, and lenders evaluating brewery asset values.

Contact us to describe your situation and we will advise on what consulting engagement structure makes sense.`,
    processSteps: [
      { step: 1, title: 'Situation Review',        description: 'We start with a conversation — what you are building, buying, or evaluating. No intake form. A direct call with someone who has actually operated production equipment.' },
      { step: 2, title: 'Equipment Evaluation',    description: 'For purchase decisions: on-site or remote equipment assessment with condition opinion, pricing context, and operational considerations the seller\'s listing won\'t tell you.' },
      { step: 3, title: 'Capacity & Layout Planning', description: 'For new builds or expansions: capacity modeling, equipment specification, and facility layout review to catch bottlenecks before they become expensive change orders.' },
      { step: 4, title: 'Sourcing Strategy',       description: 'New vs. used analysis, manufacturer options, lead time planning, and sequencing the procurement process to keep your build timeline on track.' },
      { step: 5, title: 'Commissioning Support',   description: 'On-site or remote support through startup and commissioning. We do not disappear after the sale — we make sure the equipment works.' },
    ],
    bestFitScenarios: [
      { title: 'New Brewery Build',           description: 'Planning your first brewery from scratch? We help spec the right equipment for your volume, layout, and capital structure — before you commit to anything.', icon: 'M12 4v16m8-8H4' },
      { title: 'Capacity Expansion',          description: 'Adding fermenters, upgrading your brewhouse, or building out a second location? We model capacity requirements and identify the right equipment additions.', icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' },
      { title: 'Acquisition Due Diligence',   description: 'Buying an existing brewery? We provide independent equipment valuation and condition assessment for investors and lenders evaluating asset quality.', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4' },
      { title: 'Used Equipment Assessment',   description: 'Evaluating a specific piece of used equipment from another seller? We provide an independent opinion on condition, pricing, and operational fit before you commit.', icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z' },
    ],
    faqs: [
      { q: 'Do you consult on new brewery builds from scratch?', a: 'Yes. We can help with equipment specification, capacity planning, facility layout, sourcing strategy, and sequencing the equipment procurement process from initial planning through installation.' },
      { q: 'Can you help with brewery acquisition due diligence?', a: 'Yes. We provide equipment valuation and condition assessments for investors and lenders evaluating brewery acquisitions or securing equipment as collateral.' },
      { q: 'Do you only consult on brewery equipment?', a: 'Our primary expertise is brewery and craft beverage production equipment. We also have context on distillery, cidery, and kombucha/beverage production equipment from similar systems and manufacturers.' },
    ],
    cta: { label: 'Schedule a Consultation', href: '/contact?type=consulting' },
    relatedServices: ['new-equipment', 'rigging'],
    relatedEquipment: ['brewhouses', 'fermenters', 'chillers'],
    industries: ['craft-brewery', 'distillery', 'cidery', 'beverage-production', 'cold-brew'],
    keywords: ['brewery consulting services', 'brewery startup equipment planning', 'brewery build consultant California', 'brewery equipment consultant', 'capacity planning brewery', 'brewery facility design'],
    heroImage: 'hero-brewhouse.webp',
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
    intro: 'Factory-new systems from trusted manufacturers, custom spec to your capacity and budget.',
    bodyContent: `Beverage Equipment Traders represents select manufacturers of new brewery and beverage production equipment, offering buyers access to factory-new systems with full warranty coverage and manufacturer support alongside our used equipment inventory.

Manufacturer relationships include Marks Design and Metalworks, Specific Mechanical Systems, and others offering custom-fabricated and in-stock configurations. New brewhouse systems are available in custom configurations, with lead times and pricing dependent on specification.

For buyers deciding between new and used, we can provide honest context: a well-maintained used brewhouse from a production facility typically offers significantly better value per barrel of capacity than a new system at the same price point, but new equipment provides warranty coverage, known operational history, and consistent lead times. Both have appropriate use cases depending on your capital structure and timeline.

Contact us to discuss your new equipment requirements. We can help with specification, pricing, and lead time estimates from our manufacturer relationships.`,
    processSteps: [
      { step: 1, title: 'Requirements Discussion', description: 'We start with your volume targets, facility constraints, utility infrastructure, and budget. From that we spec a system that actually fits — not the largest one we can sell you.' },
      { step: 2, title: 'Manufacturer Selection', description: 'We match your requirements to our manufacturer relationships — Marks, Specific Mechanical, and others — and provide honest comparisons on lead time, warranty, and long-term support.' },
      { step: 3, title: 'Spec & Pricing',         description: 'Final equipment specification, confirmed pricing, and lead time commitment from the manufacturer. No surprises after deposit.' },
      { step: 4, title: 'Production & Delivery',  description: 'We track production, coordinate shipping, and manage delivery logistics. You are not dealing with an overseas manufacturer\'s fulfillment team directly.' },
      { step: 5, title: 'Installation',           description: 'Our rigging team handles delivery, set, level, and commissioning. New equipment installation is included as an option with every new equipment order.' },
    ],
    bestFitScenarios: [
      { title: 'New Brewery Build',     description: 'Starting from scratch with a defined production volume and timeline? New equipment provides warranty coverage and known lead times that used equipment cannot guarantee.', icon: 'M12 4v16m8-8H4' },
      { title: 'Warranty Required',     description: 'Investor or lender requirements for new equipment warranty? We source factory-new systems with manufacturer documentation for capital-backed brewery builds.', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
      { title: 'Custom Configuration',  description: 'Need a non-standard vessel size, unusual utility configuration, or specific fabrication detail? Custom-spec new equipment is the right path when used inventory cannot match your requirements.', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z' },
      { title: 'Phased Expansion',      description: 'Adding a second brewhouse or canning line to an existing facility? We can spec new equipment to match your existing utility infrastructure and production workflow.', icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' },
    ],
    faqs: [
      { q: 'Do you offer custom brewhouse configurations?', a: 'Yes, through our manufacturer relationships we can spec and source custom brewhouse configurations based on your volume requirements, utility infrastructure, and facility layout.' },
      { q: 'What is the lead time on new equipment?', a: 'Lead times vary by manufacturer and configuration. Custom fabricated systems from Marks or Specific Mechanical typically run 12 to 24 weeks depending on queue and specification complexity.' },
      { q: 'How does new equipment pricing compare to used?', a: 'New equipment carries a significant premium over comparable used systems. In most cases, a well-maintained used brewhouse from a working brewery offers better value per barrel of capacity. We provide honest guidance on the tradeoffs based on your specific situation.' },
    ],
    cta: { label: 'Inquire About New Equipment', href: '/contact?type=new-equipment' },
    relatedServices: ['consulting', 'rigging'],
    relatedEquipment: ['brewhouses', 'fermenters', 'canning'],
    industries: ['craft-brewery', 'distillery', 'cidery', 'beverage-production', 'hard-seltzer'],
    keywords: ['new brewhouse for sale', 'custom brewery equipment', 'new brewery equipment California', 'Marks brewery equipment', 'Specific Mechanical brewhouse', 'new brewery system'],
    heroImage: 'brewhouse-hero.webp',
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
