import { motion } from 'framer-motion'
import { images } from '@/config/images'
import { createWhatsAppLink, whatsappMessages } from '@/lib/whatsapp'
import { Button } from '@/components/ui/Button'

export function CustomDesignSection() {
  return (
    <section className="grid grid-cols-1 bg-ivory lg:grid-cols-2">
      <div className="relative order-1 h-[52vh] overflow-hidden sm:h-[60vh] lg:order-2 lg:h-auto">
        <motion.img
          src={images.customDesign.src}
          alt={images.customDesign.alt}
          loading="lazy"
          initial={{ scale: 1.15 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="order-2 flex flex-col justify-center px-6 py-20 sm:px-10 lg:order-1 lg:px-16 lg:py-0 xl:px-20">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-5 font-sans text-xs font-medium uppercase tracking-[0.3em] text-burgundy"
        >
          Custom Design
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-balance font-serif text-4xl leading-[1.1] text-charcoal sm:text-5xl md:text-6xl"
        >
          Your Vision. Beautifully Crafted.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-md text-balance text-base leading-relaxed text-charcoal-soft sm:text-lg"
        >
          Have a design in mind? Share your idea and let's create something made especially for you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <Button
            href={createWhatsAppLink(whatsappMessages.customDesign())}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
          >
            Send Your Design
          </Button>
          <Button
            href={createWhatsAppLink(whatsappMessages.general())}
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
          >
            WhatsApp Us
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
