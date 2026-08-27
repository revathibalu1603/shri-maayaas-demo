import { motion } from 'framer-motion'
import { images } from '@/config/images'
import { createWhatsAppLink, whatsappMessages } from '@/lib/whatsapp'
import { Button } from '@/components/ui/Button'

const HIGHLIGHTS = ['Bridal Designs', 'Custom Blouses', 'Aari Embroidery', 'Personalized Styling']

export function BridalSection() {
  return (
    <section id="bridal" className="relative flex min-h-[85vh] items-center overflow-hidden bg-charcoal py-28 sm:py-36">
      <motion.img
        src={images.bridal.wide1.src}
        alt={images.bridal.wide1.alt}
        loading="lazy"
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 h-full w-full object-cover object-top"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/70 to-charcoal/20" />

      <div className="relative mx-auto w-full max-w-[1400px] px-6 sm:px-10 lg:px-16">
        <div className="max-w-xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-5 font-sans text-xs font-medium uppercase tracking-[0.3em] text-gold"
          >
            Bridal
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-balance font-serif text-4xl leading-[1.1] text-ivory sm:text-5xl md:text-6xl"
          >
            Made for Your Special Day.
          </motion.h2>

          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-9 flex flex-wrap gap-x-8 gap-y-3"
          >
            {HIGHLIGHTS.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-ivory/85">
                <span className="h-1 w-1 rounded-full bg-gold" />
                {item}
              </li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-11"
          >
            <Button
              href={createWhatsAppLink(whatsappMessages.bridal())}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline-light"
            >
              Discuss Your Bridal Design
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
