import { useState } from 'react'
import { motion } from 'framer-motion'
import { galleryImages } from '@/config/gallery'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Lightbox } from '@/components/sections/Lightbox'

export function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <section id="gallery" className="bg-ivory py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Gallery"
          title="A Closer Look"
          copy="A glimpse into our designs, detailing and the boutique."
          align="center"
          className="mx-auto"
        />

        <div className="mt-14 columns-2 gap-4 sm:gap-5 md:columns-3 lg:columns-4">
          {galleryImages.map((img, i) => (
            <motion.button
              key={img.src}
              type="button"
              onClick={() => setActiveIndex(i)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.06 }}
              className="group relative mb-4 block w-full overflow-hidden sm:mb-5"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full object-cover transition-transform duration-[1100ms] ease-out group-hover:scale-[1.08]"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-charcoal/0 transition-colors duration-400 group-hover:bg-charcoal/25">
                <span className="translate-y-2 text-[11px] font-medium uppercase tracking-[0.2em] text-ivory opacity-0 transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100">
                  View
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </Container>

      <Lightbox
        images={galleryImages}
        index={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNavigate={setActiveIndex}
      />
    </section>
  )
}
