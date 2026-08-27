import { motion } from 'framer-motion'
import { businessConfig } from '@/config/siteConfig'
import { Container } from '@/components/ui/Container'

export function BrandIntro() {
  return (
    <section className="bg-ivory py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto mb-8 block h-px w-16 bg-gold"
          />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-balance font-serif text-4xl leading-tight text-charcoal sm:text-5xl md:text-6xl"
          >
            {businessConfig.brandIntroHeading}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mx-auto mt-7 max-w-xl text-balance text-base leading-relaxed text-charcoal-soft sm:text-lg"
          >
            {businessConfig.brandIntroCopy}
          </motion.p>
        </div>
      </Container>
    </section>
  )
}
