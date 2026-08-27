import { useEffect } from 'react'
import { businessConfig } from '@/config/siteConfig'
import { applyBrandColors } from '@/lib/theme'
import { applySeo } from '@/lib/seo'

import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { WhatsAppFloatButton } from '@/components/layout/WhatsAppFloatButton'

import { Hero } from '@/components/sections/Hero'
import { BrandIntro } from '@/components/sections/BrandIntro'
import { CollectionShowcase } from '@/components/sections/CollectionShowcase'
import { ProductGrid } from '@/components/sections/ProductGrid'
import { BridalSection } from '@/components/sections/BridalSection'
import { CraftSection } from '@/components/sections/CraftSection'
import { CustomDesignSection } from '@/components/sections/CustomDesignSection'
import { Gallery } from '@/components/sections/Gallery'
import { AboutSection } from '@/components/sections/AboutSection'
import { Reviews } from '@/components/sections/Reviews'
import { SocialSection } from '@/components/sections/SocialSection'
import { ContactSection } from '@/components/sections/ContactSection'

function App() {
  useEffect(() => {
    applyBrandColors(businessConfig.colors)
    applySeo()
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <BrandIntro />
        <CollectionShowcase />
        <ProductGrid />
        <BridalSection />
        <CraftSection />
        <CustomDesignSection />
        <Gallery />
        <AboutSection />
        <Reviews />
        <SocialSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFloatButton />
    </>
  )
}

export default App
