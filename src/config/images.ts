/**
 * ============================================================================
 * IMAGE REGISTRY — swap imagery here, nowhere else
 * ============================================================================
 * Every image URL used anywhere on the site lives in this one file. No
 * component ever hard-codes an image URL directly.
 *
 * To reuse this template for a real launch:
 *   1. Drop your own photography into /public/images/<category>/...
 *   2. Replace the `src` values below with local paths, e.g.
 *      "/images/hero/hero-01.jpg"
 *
 * The current values are stock photography (sourced from Unsplash, a free
 * stock photo service — every URL below was verified to resolve before
 * being committed here) used ONLY so this demo looks complete before real
 * photography of the boutique is available. Replace with real photos of
 * the business before going live.
 * ============================================================================
 */

export interface SiteImage {
  src: string
  alt: string
}

function unsplash(id: string, width: number) {
  return `https://images.unsplash.com/photo-${id}?q=80&w=${width}&auto=format&fit=crop`
}

export const images = {
  hero: {
    primary: {
      src: unsplash('1742891601435-39de27531cc7', 1600),
      alt: 'Bride in an ornate silver headpiece and gold-embroidered silk drape',
    },
  },

  collections: {
    bridal: {
      src: unsplash('1769500804057-ca1391bf4617', 1200),
      alt: 'Bride in a richly embroidered red and gold bridal saree',
    },
    blouses: {
      src: unsplash('1771098206736-4cb6bc441dd3', 1200),
      alt: 'Embroidered red designer blouse displayed in a boutique',
    },
    aari: {
      src: unsplash('1724856604254-f7cf4e9c8f72', 1200),
      alt: 'Close-up of hand-embroidered tassels and zari beadwork',
    },
    embroidery: {
      src: unsplash('1634726605491-100b150374ec', 1200),
      alt: 'Macro shot of gold sequin embroidery with metallic thread pattern',
    },
    custom: {
      src: unsplash('1753162658216-13e9cb395982', 1200),
      alt: 'Fashion designer sketching a new design at her atelier table',
    },
    occasion: {
      src: unsplash('1745482036050-3d644032416d', 1200),
      alt: 'Woman in a red and gold silk saree with statement jewelry',
    },
  },

  products: [
    { src: unsplash('1617055407123-3d7130c1f940', 900), alt: 'Close-up of pink textured silk fabric weave' },
    { src: unsplash('1617627143750-d86bc21e42bb', 900), alt: 'Woman in a pink and orange silk saree with gold jewelry' },
    { src: unsplash('1552710307-537199cd41c0', 900), alt: 'Stack of vividly colored folded fabric bolts' },
    { src: unsplash('1760786933951-ce3791011d1e', 900), alt: 'Traditional gold bridal jewelry and stacked bangles' },
    { src: unsplash('1768341395956-fed92f537228', 900), alt: 'Woman wearing traditional gold jewelry and a red silk saree' },
    { src: unsplash('1614881064213-180b1c28f743', 900), alt: 'Studio portrait of a woman in a blue and gold silk saree' },
    { src: unsplash('1692992193981-d3d92fabd9cb', 900), alt: 'Woman elegantly draped in a colorful silk saree' },
    { src: unsplash('1743229995505-d6374996df1c', 900), alt: 'Editorial portrait of a woman in traditional ethnic wear' },
  ] satisfies SiteImage[],

  bridal: {
    wide1: {
      src: unsplash('1587271407850-8d438ca9fdf2', 1800),
      alt: 'Wedding ceremony beneath a lush floral canopy',
    },
    wide2: {
      src: unsplash('1742891603263-a32036d63f3b', 1800),
      alt: 'Bride peeking through an ornate red bridal veil',
    },
  },

  embroideryDetail: [
    { src: unsplash('1622461962346-a4d6c6ffade5', 900), alt: 'Macro shot of a needle threading red embroidery thread' },
    { src: unsplash('1502217625004-89c03571bcca', 900), alt: 'Macro photography of a sewing needle mid-stitch' },
    { src: unsplash('1703202189129-cf7ba26a6dfc', 900), alt: 'Close-up of shimmering red and gold sequin embroidery' },
    { src: unsplash('1671530191715-b1019db3944a', 900), alt: 'Macro detail of a richly woven red textile pattern' },
    { src: unsplash('1560796952-f1c9b838544c', 900), alt: 'Black and white macro shot of a sewing machine needle stitching fabric' },
  ] satisfies SiteImage[],

  customDesign: {
    src: unsplash('1753162657546-fe4f94c65192', 1000),
    alt: "Designer's hands sketching a garment pattern on paper",
  },

  gallery: [
    { src: unsplash('1753162657600-211fdc95ecaf', 900), alt: 'Fashion designer sketching a new garment design in her studio' },
    { src: unsplash('1742891603547-950f510710d7', 900), alt: 'Portrait of a bride adorned in traditional gold jewelry' },
    { src: unsplash('1742891602017-40b3a924f476', 900), alt: 'Bride with elaborate bridal makeup and jewelry' },
    { src: unsplash('1563962750292-d3401f66d46b', 900), alt: "Close-up of intricate henna design on a bride's hand" },
    { src: unsplash('1764641851953-0657059e70fc', 900), alt: 'Hands exchanging wedding rings, adorned with henna designs' },
    { src: unsplash('1745482036066-5d215ed6b910', 900), alt: 'Woman in an emerald green silk saree in a floral garden' },
    { src: unsplash('1743015346338-24d9627085b2', 900), alt: 'Woman draped in a traditional saree, photographed outdoors' },
    { src: unsplash('1742038106824-ae078f37b633', 900), alt: 'Woman in a dark green saree photographed at night' },
    { src: unsplash('1616926885190-52dbe533292f', 900), alt: 'Editorial fashion portrait in a black ensemble' },
    { src: unsplash('1734527225029-a202aec0ad98', 900), alt: 'Woman in a vibrant yellow silk saree' },
    { src: unsplash('1727934404036-58e5b557288e', 900), alt: 'Woman in a yellow saree holding a bouquet of flowers' },
    { src: unsplash('1724856604254-f7cf4e9c8f72', 900), alt: 'Hand-embroidered tassels and zari beadwork detail' },
    { src: unsplash('1610030469983-98e550d6193c', 900), alt: 'Model in a deep purple silk saree with a gold zari border' },
    { src: unsplash('1587271407850-8d438ca9fdf2', 900), alt: 'Wedding ceremony beneath a lush floral canopy' },
  ] satisfies SiteImage[],

  about: {
    src: unsplash('1653030814303-e017d40ff405', 1100),
    alt: 'Modern boutique storefront with a fashion mannequin in the window',
  },
} satisfies Record<string, SiteImage | SiteImage[] | Record<string, SiteImage>>
