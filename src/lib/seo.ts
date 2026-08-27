import { businessConfig } from '@/config/siteConfig'

const isPlaceholder = (value: string) => value.startsWith('[')

/** LocalBusiness structured data, built from siteConfig. Omits any field still a placeholder. */
export function buildLocalBusinessJsonLd() {
  const data: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'ClothingStore',
    name: businessConfig.name,
    description: businessConfig.seo.description,
    url: businessConfig.seo.canonicalUrl,
  }

  if (!isPlaceholder(businessConfig.address)) data.address = businessConfig.address
  if (!isPlaceholder(businessConfig.phone)) data.telephone = businessConfig.phone
  if (!isPlaceholder(businessConfig.googleMapsUrl)) data.hasMap = businessConfig.googleMapsUrl

  const sameAs = [businessConfig.instagramUrl, businessConfig.facebookUrl].filter((url) => !isPlaceholder(url))
  if (sameAs.length) data.sameAs = sameAs

  return data
}

/** Applies document.title and injects/updates the LocalBusiness JSON-LD script tag. */
export function applySeo() {
  document.title = businessConfig.seo.title

  let script = document.getElementById('ld-json') as HTMLScriptElement | null
  if (!script) {
    script = document.createElement('script')
    script.id = 'ld-json'
    script.type = 'application/ld+json'
    document.head.appendChild(script)
  }
  script.textContent = JSON.stringify(buildLocalBusinessJsonLd())
}
