import clsx from 'clsx'
import { motion } from 'framer-motion'

export function SectionHeading({
  eyebrow,
  title,
  copy,
  align = 'left',
  light = false,
  className,
}: {
  eyebrow?: string
  title: string
  copy?: string
  align?: 'left' | 'center'
  light?: boolean
  className?: string
}) {
  return (
    <div className={clsx('max-w-2xl', align === 'center' && 'mx-auto text-center', className)}>
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className={clsx(
            'mb-4 font-sans text-xs font-medium uppercase tracking-[0.3em]',
            light ? 'text-ivory/70' : 'text-burgundy',
          )}
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, delay: 0.05 }}
        className={clsx(
          'text-balance font-serif text-4xl leading-[1.1] sm:text-5xl md:text-6xl',
          light ? 'text-ivory' : 'text-charcoal',
        )}
      >
        {title}
      </motion.h2>
      {copy && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className={clsx(
            'mt-5 text-balance font-sans text-base leading-relaxed sm:text-lg',
            light ? 'text-ivory/80' : 'text-charcoal-soft',
          )}
        >
          {copy}
        </motion.p>
      )}
    </div>
  )
}
