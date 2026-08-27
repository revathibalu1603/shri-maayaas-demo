import { collections } from '@/config/collections'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { CollectionCard } from '@/components/sections/CollectionCard'

// Editorial mosaic pattern applied by position, not category — so this
// still looks intentional however many/whichever collections are configured.
const LAYOUT = [
  'lg:col-span-7 lg:row-span-2',
  'lg:col-span-5',
  'lg:col-span-5',
  'lg:col-span-4',
  'lg:col-span-4',
  'lg:col-span-4',
]

export function CollectionShowcase() {
  return (
    <section id="collections" className="bg-ivory py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow="Collections" title="Explore Our Collections" align="left" />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:gap-6 lg:auto-rows-[300px] lg:grid-cols-12">
          {collections.map((collection, i) => (
            <CollectionCard key={collection.slug} collection={collection} className={LAYOUT[i % LAYOUT.length]} />
          ))}
        </div>
      </Container>
    </section>
  )
}
