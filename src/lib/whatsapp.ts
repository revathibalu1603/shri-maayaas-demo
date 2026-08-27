import { businessConfig } from '@/config/siteConfig'

/**
 * Builds a wa.me deep link that opens WhatsApp with a pre-filled message.
 * Works on both mobile (opens the app) and desktop (opens WhatsApp Web).
 */
export function createWhatsAppLink(message: string, phoneOverride?: string): string {
  const phone = (phoneOverride ?? businessConfig.whatsapp).replace(/\D/g, '')
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
}

export const whatsappMessages = {
  general: () =>
    `Hi, I'm interested in ${businessConfig.name}. I'd like to know more about your designs.`,
  product: (designName: string) =>
    `Hi, I'm interested in the ${designName}. Could you please share more details?`,
  bridal: () => `Hi, I'd like to enquire about bridal/custom design services.`,
  collection: (collectionName: string) =>
    `Hi, I'd like to know more about your ${collectionName} collection.`,
  customDesign: () =>
    `Hi, I have a design in mind and would like to discuss a custom order. Could you help me with this?`,
}

export function createCallLink(phoneOverride?: string): string {
  const phone = (phoneOverride ?? businessConfig.phone).replace(/[^\d+]/g, '')
  return `tel:${phone}`
}
