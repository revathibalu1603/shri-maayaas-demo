import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import type { GalleryImage } from '@/config/gallery'

export function Lightbox({
  images,
  index,
  onClose,
  onNavigate,
}: {
  images: GalleryImage[]
  index: number | null
  onClose: () => void
  onNavigate: (nextIndex: number) => void
}) {
  const isOpen = index !== null

  useEffect(() => {
    if (!isOpen) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight' && index !== null) onNavigate((index + 1) % images.length)
      if (e.key === 'ArrowLeft' && index !== null) onNavigate((index - 1 + images.length) % images.length)
    }
    window.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen, index, images.length, onClose, onNavigate])

  return (
    <AnimatePresence>
      {isOpen && index !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/95 px-4 py-10 sm:px-10"
          onClick={onClose}
        >
          <button
            aria-label="Close"
            onClick={onClose}
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center text-ivory/80 transition-colors hover:text-ivory sm:right-8 sm:top-8"
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M2 2l18 18M20 2L2 20" stroke="currentColor" strokeWidth="1.4" />
            </svg>
          </button>

          <button
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation()
              onNavigate((index - 1 + images.length) % images.length)
            }}
            className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center text-ivory/80 transition-colors hover:text-ivory sm:left-6"
          >
            <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
              <path d="M19 7H1M7 1L1 7l6 6" stroke="currentColor" strokeWidth="1.4" />
            </svg>
          </button>

          <motion.img
            key={index}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            src={images[index].src}
            alt={images[index].alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] max-w-full object-contain shadow-2xl"
          />

          <button
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation()
              onNavigate((index + 1) % images.length)
            }}
            className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center text-ivory/80 transition-colors hover:text-ivory sm:right-6"
          >
            <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
              <path d="M1 7h18M13 1l6 6-6 6" stroke="currentColor" strokeWidth="1.4" />
            </svg>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
