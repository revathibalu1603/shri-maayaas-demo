import { motion } from 'framer-motion'
import { businessConfig } from '@/config/siteConfig'
import { images } from '@/config/images'
import { createWhatsAppLink, whatsappMessages } from '@/lib/whatsapp'
import { Button } from '@/components/ui/Button'

export function Hero() {
  return (
    <section id="home" className="relative grid min-h-[100svh] grid-cols-1 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">
      {/* Text panel */}
      <div className="relative z-10 order-2 flex flex-col justify-center bg-ivory px-6 py-16 sm:px-10 lg:order-1 lg:px-16 lg:py-0 xl:px-20">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mb-6 font-sans text-xs font-medium uppercase tracking-[0.3em] text-burgundy"
        >
          {businessConfig.logoText} &nbsp;·&nbsp; {businessConfig.subtitle} &nbsp;•&nbsp; {businessConfig.location}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="text-balance font-serif text-[2.75rem] leading-[1.06] text-charcoal sm:text-6xl md:text-7xl lg:text-[4.2rem] xl:text-[4.6rem]"
        >
          {businessConfig.tagline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.95 }}
          className="mt-7 max-w-md text-balance font-sans text-base leading-relaxed text-charcoal-soft sm:text-lg"
        >
          {businessConfig.supportingLine}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Button href="#collections" variant="primary">
            Explore Collections
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

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-16 hidden items-center gap-6 text-[11px] font-medium uppercase tracking-[0.2em] text-charcoal-soft/70 lg:flex"
        >
          <span>Fashion</span>
          <span className="h-px w-8 bg-beige" />
          <span>Craftsmanship</span>
          <span className="h-px w-8 bg-beige" />
          <span>Bridal</span>
          <span className="h-px w-8 bg-beige" />
          <span>Premium</span>
        </motion.div>
      </div>

      {/* Image panel */}
      <div className="relative order-1 h-[58vh] overflow-hidden sm:h-[64vh] lg:order-2 lg:h-auto">
        <motion.div
          initial={{ scale: 1.18 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          className="h-full w-full"
        >
          <img
            src={images.hero.primary.src}
            alt={images.hero.primary.alt}
            className="h-full w-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
        </motion.div>
        <motion.div
          initial={{ scaleX: 1 }}
          animate={{ scaleX: 0 }}
          transition={{ duration: 1.1, ease: [0.65, 0, 0.35, 1] }}
          style={{ transformOrigin: 'right' }}
          className="absolute inset-0 bg-ivory"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/25 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-transparent" />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.6 }}
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex"
      >
        <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-charcoal-soft/60">Scroll</span>
        <span className="h-10 w-px bg-charcoal-soft/30" />
      </motion.div>
    </section>
  )
}
