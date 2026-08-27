import { businessConfig } from '@/config/siteConfig'
import { createWhatsAppLink, whatsappMessages } from '@/lib/whatsapp'

const QUICK_LINKS = [
  { label: 'Collections', href: '#collections' },
  { label: 'Bridal', href: '#bridal' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-charcoal text-ivory/80">
      <div className="mx-auto max-w-[1400px] px-6 py-16 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-serif text-2xl tracking-[0.08em] text-ivory">{businessConfig.logoText}</p>
            <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.35em] text-gold">
              {businessConfig.subtitle}
            </p>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-ivory/60">{businessConfig.supportingLine}</p>
          </div>

          <div>
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.25em] text-ivory/50">Quick Links</p>
            <ul className="space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-ivory/80 transition-colors hover:text-gold">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.25em] text-ivory/50">Visit / Contact</p>
            <ul className="space-y-3 text-sm text-ivory/80">
              <li>{businessConfig.address}</li>
              <li>{businessConfig.phone}</li>
            </ul>
          </div>

          <div>
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.25em] text-ivory/50">Connect</p>
            <ul className="space-y-3">
              <li>
                <a
                  href={createWhatsAppLink(whatsappMessages.general())}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-ivory/80 transition-colors hover:text-gold"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={businessConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-ivory/80 transition-colors hover:text-gold"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-ivory/10 pt-8 text-xs text-ivory/40 sm:flex-row sm:items-center">
          <p>
            © {year} {businessConfig.name}. All rights reserved.
          </p>
          <p>Crafted for a premium boutique experience.</p>
        </div>
      </div>
    </footer>
  )
}
