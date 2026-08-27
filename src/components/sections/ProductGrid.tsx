import { products } from '@/config/products'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ProductCard } from '@/components/sections/ProductCard'

export function ProductGrid() {
  return (
    <section id="featured" className="bg-ivory-deep py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Featured Designs"
          title="Pieces Made to Be Remembered"
          align="center"
          className="mx-auto"
        />

        <div className="mt-14 grid grid-cols-2 gap-x-5 gap-y-12 sm:gap-x-8 sm:gap-y-14 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  )
}
