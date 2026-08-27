import { motion } from 'framer-motion'
import { businessConfig } from '@/config/siteConfig'
import { galleryImages } from '@/config/gallery'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'

const SOCIAL_PREVIEW_COUNT = 6

export function SocialSection() {
  const previewImages = galleryImages.slice(0, SOCIAL_PREVIEW_COUNT)

  return (
    <section className="bg-ivory-deep py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Instagram"
          title="Follow Our Latest Designs"
          align="center"
          className="mx-auto"
        />

        <div className="mt-14 grid grid-cols-3 gap-2 sm:gap-4 md:grid-cols-6">
          {previewImages.map((img, i) => (
            <motion.a
              key={img.src}
              href={businessConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative block aspect-square overflow-hidden"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-burgundy/0 transition-colors duration-400 group-hover:bg-burgundy/50">
                <svg
                  className="h-6 w-6 scale-75 text-ivory opacity-0 transition-all duration-400 group-hover:scale-100 group-hover:opacity-100"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
                </svg>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button href={businessConfig.instagramUrl} target="_blank" rel="noopener noreferrer" variant="outline">
            Follow on Instagram
          </Button>
        </div>
      </Container>
    </section>
  )
}
