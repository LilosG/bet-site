// ─────────────────────────────────────────────
//  BEVERAGE EQUIPMENT TRADERS — Site Config
//  Single source of truth. All components pull from here.
// ─────────────────────────────────────────────

export const SITE = {
  name: 'Beverage Equipment Traders',
  shortName: 'BET',
  tagline: 'New and Used Brewery Equipment For Sale',
  description:
    'San Marcos, CA brewery and beverage equipment dealer. New and used brewhouses, fermenters, canning lines, kegs, and more. Rigging, consignment, and auction services. Shipping nationwide.',
  url: 'https://beverageequipmenttraders.com',
} as const;

// ─── Canonical NAP ────────────────────────────
export const NAP = {
  street: '1520 E Barham Dr',
  city: 'San Marcos',
  state: 'CA',
  zip: '92078',
  phone: '(949) 888-2739',
  phonePlain: '+19498882739',
  email: 'sales@beverageequipmenttraders.com',
  // Full formatted strings
  get address() {
    return `${this.street}, ${this.city}, ${this.state} ${this.zip}`;
  },
  get cityStateZip() {
    return `${this.city}, ${this.state} ${this.zip}`;
  },
} as const;

// ─── Business Hours ───────────────────────────
export const HOURS = [
  { day: 'Monday',    open: '10:00', close: '16:00', label: '10AM – 4PM' },
  { day: 'Tuesday',   open: '10:00', close: '16:00', label: '10AM – 4PM' },
  { day: 'Wednesday', open: '10:00', close: '16:00', label: '10AM – 4PM' },
  { day: 'Thursday',  open: '10:00', close: '16:00', label: '10AM – 4PM' },
  { day: 'Friday',    open: '10:00', close: '15:00', label: '10AM – 3PM' },
  { day: 'Saturday',  open: null,    close: null,    label: 'By Appointment' },
  { day: 'Sunday',    open: null,    close: null,    label: 'Closed' },
] as const;

// ─── Social Profiles ──────────────────────────
export const SOCIAL = {
  instagram: 'https://www.instagram.com/beverageequipmenttraders',
  facebook:  'https://www.facebook.com/beverageequipmenttraders',
  linkedin:  'https://www.linkedin.com/company/beverage-equipment-traders',
} as const;

// ─── GBP / Maps ───────────────────────────────
export const GEO = {
  lat:  33.1434,
  lng: -117.1662,
  placeId: 'ChIJVVUFwSn124ARobkQHYWH_vo',
} as const;

// ─── Navigation ───────────────────────────────
export const NAV = {
  primary: [
    {
      label: 'Shop Equipment',
      href: '/equipment',
      children: [
        { label: 'Brewhouses',         href: '/equipment/brewhouses' },
        { label: 'Fermenters & Tanks', href: '/equipment/fermenters' },
        { label: 'Canning & Packaging',href: '/equipment/canning' },
        { label: 'Glycol Chillers',    href: '/equipment/chillers' },
        { label: 'Distilling Equipment',href:'/equipment/distilling' },
        { label: 'Kegs & Casks',       href: '/equipment/kegs' },
        { label: 'Boilers',            href: '/equipment/boilers' },
        { label: 'Cold Rooms',         href: '/equipment/cold-rooms' },
        { label: 'View All Inventory', href: 'https://beverageequipmenttraders.com/collections/all', external: true },
      ],
    },
    {
      label: 'Services',
      href: '/services',
      children: [
        { label: 'Rigging & Installation', href: '/services/rigging' },
        { label: 'Consignment',            href: '/services/consignment' },
        { label: 'Auctions',               href: '/services/auctions' },
        { label: 'Consulting',             href: '/services/consulting' },
        { label: 'New Equipment',          href: '/services/new-equipment' },
      ],
    },
    { label: 'Auctions', href: '/services/auctions' },
    { label: 'About',    href: '/about' },
    { label: 'Contact',  href: '/contact' },
  ],
  cta: { label: 'Get a Rigging Quote', href: '/contact?type=rigging' },
} as const;

// ─── Trust Stats ──────────────────────────────
export const STATS = [
  { value: '15+',  label: 'Years Industry Experience' },
  { value: '600+', label: 'Equipment Placements' },
  { value: '50',   label: 'States Covered' },
  { value: '225+', label: 'Items In Stock' },
] as const;

// ─── Client Logos (Trust Bar) ─────────────────
export const CLIENTS = [
  'Karl Strauss',
  'AleSmith',
  'Societe Brewing',
  'Thorn Brewing',
  'The Bronx Brewery',
] as const;

// ─── Schema.org sameAs ───────────────────────
export const SAME_AS = [
  SOCIAL.instagram,
  SOCIAL.facebook,
  SOCIAL.linkedin,
  'https://probrewer.com',
] as const;
