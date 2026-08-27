import { motion } from 'framer-motion'
import { images } from '@/config/images'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'

const LAYOUT = ['lg:col-span-5 lg:row-span-2', 'lg:col-span-4', 'lg:col-span-3', 'lg:col-span-3', 'lg:col-span-4']

export function CraftSection() {
  return (
    <section id="craft" className="bg-beige/25 py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Aari & Embroidery"
          title="Every Detail Matters."
          copy="Hand-worked thread, mirror and zari embroidery — each motif built stitch by stitch."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-5 lg:auto-rows-[220px] lg:grid-cols-12">
          {images.embroideryDetail.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.08 }}
              className={`group relative overflow-hidden lg:aspect-auto ${
                i === 0 ? 'col-span-2 aspect-[16/9]' : 'aspect-square'
              } ${LAYOUT[i % LAYOUT.length]}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
