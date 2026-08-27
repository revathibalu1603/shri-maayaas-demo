/**
 * ============================================================================
 * BUSINESS CONFIGURATION — THE ONLY FILE YOU SHOULD NEED TO EDIT
 * ============================================================================
 * This file drives the entire site: brand name, contact details, colors,
 * copy and SEO metadata. To reuse this template for a different boutique,
 * duplicate this file's values (or fork the template) — the components
 * themselves never contain business-specific text or numbers.
 *
 * Fields marked "[ADD VERIFIED ...]" are placeholders. Do not publish the
 * site until every placeholder below has been replaced with confirmed,
 * real information for the business.
 * ============================================================================
 */

export interface BrandColors {
  /** Warm ivory / cream page background */
  ivory: string
  /** Slightly deeper ivory, used for alternating section backgrounds */
  ivoryDeep: string
  /** Primary body/heading text color */
  charcoal: string
  /** Softer secondary text color */
  charcoalSoft: string
  /** Muted burgundy / wine accent — buttons, links, highlights */
  primary: string
  /** Deeper shade of the primary accent, used for hover states */
  primaryDeep: string
  /** Soft beige — borders, dividers, subtle fills */
  beige: string
  /** Subtle gold accent used sparingly (labels, dividers, icons) */
  gold: string
}

export interface OpeningHoursEntry {
  days: string
  hours: string
}

export interface BusinessConfig {
  name: string
  shortName: string
  subtitle: string
  location: string
  tagline: string
  supportingLine: string
  brandIntroHeading: string
  brandIntroCopy: string
  aboutHeading: string
  aboutText: string
  logoText: string

  phone: string
  whatsapp: string
  address: string
  addressLines: string[]
  googleMapsUrl: string
  googleMapsEmbedUrl: string
  instagramUrl: string
  facebookUrl: string
  openingHours: OpeningHoursEntry[]

  colors: BrandColors

  seo: {
    title: string
    description: string
    canonicalUrl: string
  }
}

export const businessConfig: BusinessConfig = {
  name: 'Shri Maayaas Fashion Designers',
  shortName: 'Shri Maayaas',
  subtitle: 'Fashion Designers',
  location: 'Madurai, Tamil Nadu',
  logoText: 'SHRI MAAYAAS',

  tagline: 'Designed for Your Most Beautiful Moments.',
  supportingLine:
    'Timeless fashion, intricate craftsmanship and designs created especially for you.',

  brandIntroHeading: 'Where Craft Meets Your Style',
  brandIntroCopy:
    'From intricate Aari embroidery to thoughtfully designed bridal and occasion wear, every piece is created with attention to detail.',

  aboutHeading: 'Crafted With Intention.',
  aboutText:
    '[Add the story of Shri Maayaas here — the designer’s journey, inspiration, craftsmanship and what makes the boutique unique.]',

  // ---- Contact details -----------------------------------------------
  // Replace every placeholder below with verified information before
  // this site is shown publicly or shared with customers.
  phone: '+91 90258 97847',
  whatsapp: '+91 90258 97847', // digits only, with country code, e.g. 91XXXXXXXXXX
  // Address sourced from a public Justdial listing for this business (Branch in
  // Vasantha Nagar) — confirm with the owner before publishing.
  address: '85L, SS Colony North Gate, Mahapupalayam, Madurai, Tamil Nadu 625016',
  addressLines: [
    '85L, SS Colony North Gate',
    'Mahapupalayam (opp. Devaki Scan, near Sandhana Mariamman Kovil)',
    'Madurai, Tamil Nadu 625016',
  ],
  googleMapsUrl: '[ADD VERIFIED GOOGLE MAPS LINK]',
  googleMapsEmbedUrl: '[ADD VERIFIED GOOGLE MAPS EMBED LINK]',
  instagramUrl: 'https://instagram.com/shri_maayaas',
  facebookUrl: '[ADD VERIFIED FACEBOOK URL]',
  openingHours: [
    { days: 'Monday – Saturday', hours: '10:00 AM – 8:00 PM' },
    { days: 'Sunday', hours: 'Closed' },
  ],

  // ---- Brand colors ----------------------------------------------------
  // Change these to re-skin the entire site for a different boutique.
  // See src/lib/theme.ts — these are applied as CSS custom properties
  // at runtime, so every Tailwind utility (bg-primary, text-charcoal, etc.)
  // updates automatically.
  colors: {
    ivory: '#faf6f0',
    ivoryDeep: '#f3ecdf',
    charcoal: '#241f1c',
    charcoalSoft: '#4a423c',
    primary: '#6b1f2a',
    primaryDeep: '#4e161e',
    beige: '#e8dcc8',
    gold: '#ab8654',
  },

  seo: {
    title: 'Shri Maayaas Fashion Designers | Boutique & Fashion Designer in Madurai',
    description:
      'Shri Maayaas Fashion Designers — bridal wear, designer blouses, Aari embroidery and custom fashion design in Madurai, Tamil Nadu. Explore our collections and enquire on WhatsApp.',
    canonicalUrl: 'https://example.com/',
  },
}
