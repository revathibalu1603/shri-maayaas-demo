import type { BrandColors } from '@/config/siteConfig'

/**
 * Pushes businessConfig.colors onto the document as CSS custom properties,
 * so the whole site (all Tailwind utilities that reference these variables)
 * updates from a single config object. Call once on app mount.
 */
export function applyBrandColors(colors: BrandColors) {
  const root = document.documentElement
  root.style.setProperty('--color-ivory', colors.ivory)
  root.style.setProperty('--color-ivory-deep', colors.ivoryDeep)
  root.style.setProperty('--color-charcoal', colors.charcoal)
  root.style.setProperty('--color-charcoal-soft', colors.charcoalSoft)
  root.style.setProperty('--color-burgundy', colors.primary)
  root.style.setProperty('--color-burgundy-deep', colors.primaryDeep)
  root.style.setProperty('--color-beige', colors.beige)
  root.style.setProperty('--color-gold', colors.gold)
}
