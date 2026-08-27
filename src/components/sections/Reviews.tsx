import { motion } from 'framer-motion'
import { businessConfig } from '@/config/siteConfig'
import { reviews, reviewsSummary } from '@/config/reviews'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'

const isPlaceholder = (value: string) => value.startsWith('[')

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => {
        const fill = Math.min(1, Math.max(0, rating - i))
        return (
          <svg key={i} viewBox="0 0 20 20" className="h-4 w-4" aria-hidden="true">
            <defs>
              <linearGradient id={`star-fill-${i}`}>
                <stop offset={`${fill * 100}%`} stopColor="currentColor" />
                <stop offset={`${fill * 100}%`} stopColor="transparent" />
              </linearGradient>
            </defs>
            <path
              d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.79L10 14.9l-5.2 2.61.99-5.79-4.21-4.1 5.82-.85z"
              fill={`url(#star-fill-${i})`}
              stroke="currentColor"
              strokeWidth="1"
              className="text-gold"
            />
          </svg>
        )
      })}
    </div>
  )
}

function Avatar({ name }: { name: string }) {
  const initial = name.trim().charAt(0).toUpperCase()
  return (
    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-burgundy/10 font-serif text-lg text-burgundy">
      {initial}
    </div>
  )
}

export function Reviews() {
  const showMapsLink = !isPlaceholder(businessConfig.googleMapsUrl)

  return (
    <section id="reviews" className="bg-ivory-deep py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow="Google Reviews" title="What Our Customers Say" align="center" className="mx-auto" />

        <div className="mx-auto mt-8 flex max-w-2xl flex-col items-center gap-2 text-center">
          <div className="flex items-center gap-3">
            <span className="font-serif text-3xl text-charcoal">{reviewsSummary.rating.toFixed(1)}</span>
            <Stars rating={reviewsSummary.rating} />
          </div>
          <p className="text-sm text-charcoal-soft">
            Based on {reviewsSummary.totalReviews} reviews on Google
          </p>
          {showMapsLink && (
            <a
              href={businessConfig.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 text-xs font-medium uppercase tracking-[0.15em] text-burgundy underline underline-offset-4 hover:text-burgundy-deep"
            >
              Read all reviews on Google
            </a>
          )}
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name + i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
              className="flex flex-col border border-beige bg-ivory p-6"
            >
              <div className="flex items-center gap-3">
                <Avatar name={r.name} />
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-charcoal">{r.name}</p>
                  <p className="text-xs text-charcoal-soft">
                    {r.isLocalGuide && <span>Local Guide · </span>}
                    {r.reviewCount} review{r.reviewCount === 1 ? '' : 's'}
                    {r.photoCount ? ` · ${r.photoCount} photo${r.photoCount === 1 ? '' : 's'}` : ''}
                  </p>
                </div>
              </div>

              <p className="mt-2 text-xs text-charcoal-soft/70">{r.date}</p>

              <p className="mt-4 flex-1 text-balance text-sm leading-relaxed text-charcoal">{r.quote}</p>

              {r.reaction && (
                <p className="mt-4 text-sm text-charcoal-soft">
                  <span>{r.reaction.emoji}</span>
                  <span className="ml-1">{r.reaction.count}</span>
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
