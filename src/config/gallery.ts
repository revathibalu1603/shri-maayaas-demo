import { images } from '@/config/images'

export interface GalleryImage {
  src: string
  alt: string
}

export const galleryImages: GalleryImage[] = images.gallery
