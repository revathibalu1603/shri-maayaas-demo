import { useEffect, useState } from 'react'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import { businessConfig } from '@/config/siteConfig'
import { createWhatsAppLink, whatsappMessages } from '@/lib/whatsapp'

// Edit this list to match the sections a given boutique actually has.
const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'Collections', href: '#collections' },
  { label: 'Bridal', href: '#bridal' },
  { label: 'Aari & Embroidery', href: '#craft' },
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header
      className={clsx(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled ? 'bg-ivory/95 shadow-[0_1px_0_0_rgba(0,0,0,0.06)] backdrop-blur-sm' : 'bg-transparent',
      )}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 transition-all duration-500 sm:px-10 lg:px-16"
        style={{ paddingTop: scrolled ? '1rem' : '1.75rem', paddingBottom: scrolled ? '1rem' : '1.75rem' }}
      >
        <a href="#home" className="flex flex-col leading-none">
          <span className="font-serif text-xl tracking-[0.08em] text-charcoal sm:text-2xl">
            {businessConfig.logoText}
          </span>
          <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.35em] text-burgundy">
            {businessConfig.subtitle}
          </span>
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-sans text-[13px] font-medium uppercase tracking-[0.12em] text-charcoal-soft transition-colors hover:text-burgundy"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href={createWhatsAppLink(whatsappMessages.general())}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-burgundy px-6 py-2.5 text-[12px] font-medium uppercase tracking-[0.15em] text-burgundy transition-colors hover:bg-burgundy hover:text-ivory"
          >
            WhatsApp Us
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-[6px] lg:hidden"
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            className="h-[1.5px] w-6 bg-charcoal"
          />
          <motion.span animate={menuOpen ? { opacity: 0 } : { opacity: 1 }} className="h-[1.5px] w-6 bg-charcoal" />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            className="h-[1.5px] w-6 bg-charcoal"
          />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="overflow-hidden bg-ivory lg:hidden"
          >
            <nav className="flex flex-col gap-1 px-6 pb-8 pt-2 sm:px-10">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-beige py-4 font-serif text-2xl text-charcoal"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={createWhatsAppLink(whatsappMessages.general())}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center gap-2 bg-burgundy px-6 py-4 text-[13px] font-medium uppercase tracking-[0.15em] text-ivory"
              >
                WhatsApp Us
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
