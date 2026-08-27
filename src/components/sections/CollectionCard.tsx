import clsx from 'clsx'
import { motion } from 'framer-motion'
import type { Collection } from '@/config/collections'
import { createWhatsAppLink, whatsappMessages } from '@/lib/whatsapp'

export function CollectionCard({ collection, className }: { collection: Collection; className?: string }) {
  return (
    <motion.a
      href={createWhatsAppLink(whatsappMessages.collection(collection.title))}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7 }}
      className={clsx('group relative block h-[340px] overflow-hidden lg:h-full', className)}
    >
      <img
        src={collection.image.src}
        alt={collection.image.alt}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/10 to-transparent transition-opacity duration-500 group-hover:from-charcoal/90" />

      <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
        <h3 className="font-serif text-2xl text-ivory sm:text-3xl">{collection.title}</h3>
        <p className="mt-2 max-w-xs text-sm leading-relaxed text-ivory/75">{collection.description}</p>
        <span className="mt-4 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] text-gold opacity-0 transition-all duration-500 group-hover:translate-x-1 group-hover:opacity-100">
          Explore
          <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
            <path d="M1 5h13.5M10 1l4.5 4L10 9" stroke="currentColor" strokeWidth="1.4" />
          </svg>
        </span>
      </div>
    </motion.a>
  )
}
