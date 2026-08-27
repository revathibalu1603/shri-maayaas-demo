import { images } from '@/config/images'

export interface Collection {
  slug: string
  title: string
  description: string
  image: { src: string; alt: string }
  /** Controls the card's size in the editorial grid layout */
  size: 'large' | 'medium' | 'small'
}

export const collections: Collection[] = [
  {
    slug: 'bridal-wear',
    title: 'Bridal Wear',
    description: 'Statement bridal ensembles crafted for your most important day.',
    image: images.collections.bridal,
    size: 'large',
  },
  {
    slug: 'designer-blouses',
    title: 'Designer Blouses',
    description: 'Tailored silhouettes with intricate detailing, made to fit you perfectly.',
    image: images.collections.blouses,
    size: 'medium',
  },
  {
    slug: 'aari-work',
    title: 'Aari Work',
    description: 'Traditional hook embroidery, hand-worked thread by thread.',
    image: images.collections.aari,
    size: 'medium',
  },
  {
    slug: 'embroidery',
    title: 'Embroidery',
    description: 'Delicate handwork and fine detailing across every piece.',
    image: images.collections.embroidery,
    size: 'small',
  },
  {
    slug: 'custom-designs',
    title: 'Custom Designs',
    description: 'Bring your own idea to life, designed and made especially for you.',
    image: images.collections.custom,
    size: 'small',
  },
  {
    slug: 'occasion-wear',
    title: 'Occasion Wear',
    description: 'Elegant fashion for celebrations, festivities and special moments.',
    image: images.collections.occasion,
    size: 'medium',
  },
]
