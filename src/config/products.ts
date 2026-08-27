import { images } from '@/config/images'

export interface Product {
  id: string
  name: string
  category: string
  description?: string
  image: { src: string; alt: string }
}

export const products: Product[] = [
  {
    id: 'p1',
    name: 'Regal Zardozi Lehenga',
    category: 'Bridal Wear',
    description: 'Hand-embroidered bridal lehenga with fine zari detailing.',
    image: images.products[0],
  },
  {
    id: 'p2',
    name: 'Aari Thread Work Blouse',
    category: 'Designer Blouses',
    description: 'Densely worked Aari embroidery on rich silk fabric.',
    image: images.products[1],
  },
  {
    id: 'p3',
    name: 'Floral Aari Saree Blouse',
    category: 'Aari Work',
    description: 'Delicate floral motifs worked entirely by hand.',
    image: images.products[2],
  },
  {
    id: 'p4',
    name: 'Mirror & Thread Ensemble',
    category: 'Embroidery',
    description: 'A striking mix of mirror work and fine thread embroidery.',
    image: images.products[3],
  },
  {
    id: 'p5',
    name: 'Bespoke Reception Gown',
    category: 'Custom Designs',
    description: 'Designed from scratch to match a personal vision.',
    image: images.products[4],
  },
  {
    id: 'p6',
    name: 'Festive Silk Ensemble',
    category: 'Occasion Wear',
    description: 'Rich silk drape styled for festive celebrations.',
    image: images.products[5],
  },
  {
    id: 'p7',
    name: 'Antique Gold Bridal Set',
    category: 'Bridal Wear',
    description: 'Antique gold tones with dense hand embroidery.',
    image: images.products[6],
  },
  {
    id: 'p8',
    name: 'Contemporary Fusion Blouse',
    category: 'Designer Blouses',
    description: 'A modern silhouette with traditional handwork.',
    image: images.products[7],
  },
]
