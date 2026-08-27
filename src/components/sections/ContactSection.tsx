import { motion } from 'framer-motion'
import { businessConfig } from '@/config/siteConfig'
import { createCallLink, createWhatsAppLink, whatsappMessages } from '@/lib/whatsapp'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

const isPlaceholder = (value: string) => value.startsWith('[')

export function ContactSection() {
  return (
    <section id="contact">
      <div className="bg-charcoal py-24 text-center sm:py-32">
        <Container>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-5 font-sans text-xs font-medium uppercase tracking-[0.3em] text-gold"
          >
            Contact
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mx-auto max-w-2xl text-balance font-serif text-4xl leading-[1.1] text-ivory sm:text-5xl md:text-6xl"
          >
            Let's Create Something Beautiful.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto mt-6 max-w-lg text-balance text-base leading-relaxed text-ivory/75 sm:text-lg"
          >
            For bridal wear, custom designs, Aari work and fashion enquiries, get in touch with us.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-11 flex flex-wrap items-center justify-center gap-4"
          >
            <Button
              href={createWhatsAppLink(whatsappMessages.general())}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
            >
              WhatsApp Us
            </Button>
            <Button href={createCallLink()} variant="outline-light">
              Call Us
            </Button>
            <Button
              href={isPlaceholder(businessConfig.googleMapsUrl) ? '#' : businessConfig.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline-light"
            >
              Get Directions
            </Button>
          </motion.div>
        </Container>
      </div>

      <div className="bg-ivory-deep py-16">
        <Container>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
            <div>
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-burgundy">Address</p>
              <p className="text-sm leading-relaxed text-charcoal-soft">
                {businessConfig.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
            </div>
            <div>
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-burgundy">Phone / WhatsApp</p>
              <p className="text-sm leading-relaxed text-charcoal-soft">
                <span className="block">{businessConfig.whatsapp}</span>
              </p>
            </div>
            <div>
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-burgundy">Opening Hours</p>
              <p className="text-sm leading-relaxed text-charcoal-soft">
                {businessConfig.openingHours.map((entry) => (
                  <span key={entry.days} className="block">
                    {entry.days}: {entry.hours}
                  </span>
                ))}
              </p>
            </div>
          </div>
        </Container>
      </div>
    </section>
  )
}
