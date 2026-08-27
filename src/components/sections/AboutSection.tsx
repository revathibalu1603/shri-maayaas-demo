import { motion } from 'framer-motion'
import { businessConfig } from '@/config/siteConfig'
import { images } from '@/config/images'

export function AboutSection() {
  return (
    <section id="about" className="grid grid-cols-1 bg-ivory-deep lg:grid-cols-2">
      <div className="relative order-1 h-[52vh] overflow-hidden sm:h-[60vh] lg:h-auto">
        <motion.img
          src={images.about.src}
          alt={images.about.alt}
          loading="lazy"
          initial={{ scale: 1.15 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="order-2 flex flex-col justify-center px-6 py-20 sm:px-10 lg:px-16 lg:py-0 xl:px-20">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-5 font-sans text-xs font-medium uppercase tracking-[0.3em] text-burgundy"
        >
          About
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-balance font-serif text-4xl leading-[1.1] text-charcoal sm:text-5xl md:text-6xl"
        >
          {businessConfig.aboutHeading}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-md text-balance text-base italic leading-relaxed text-charcoal-soft sm:text-lg"
        >
          {businessConfig.aboutText}
        </motion.p>
      </div>
    </section>
  )
}
