import { motion } from 'framer-motion'
import type { Product } from '@/config/products'
import { createWhatsAppLink, whatsappMessages } from '@/lib/whatsapp'

export function ProductCard({ product }: { product: Product }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6 }}
      className="group"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-beige/40">
        <img
          src={product.image.src}
          alt={product.image.alt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
        />
        <a
          href={createWhatsAppLink(whatsappMessages.product(product.name))}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-x-3 bottom-3 flex translate-y-3 items-center justify-center gap-2 bg-ivory/95 py-3 text-[11px] font-medium uppercase tracking-[0.15em] text-charcoal opacity-0 transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100 sm:inset-x-4 sm:bottom-4"
        >
          Enquire on WhatsApp
        </a>
      </div>

      <div className="mt-4 flex items-start justify-between gap-3">
        <div>
          <h3 className="font-serif text-lg text-charcoal">{product.name}</h3>
          {product.description && (
            <p className="mt-1 text-sm leading-relaxed text-charcoal-soft">{product.description}</p>
          )}
        </div>
      </div>
      <p className="mt-1.5 text-[11px] font-medium uppercase tracking-[0.15em] text-burgundy">{product.category}</p>

      <a
        href={createWhatsAppLink(whatsappMessages.product(product.name))}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 inline-block text-[12px] font-medium uppercase tracking-[0.15em] text-charcoal underline decoration-beige underline-offset-4 transition-colors hover:text-burgundy hover:decoration-burgundy sm:hidden"
      >
        Enquire on WhatsApp
      </a>
    </motion.div>
  )
}
