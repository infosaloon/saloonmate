"use client"

import SiteNav from "@/components/site-nav"
import SiteFooter from "@/components/site-footer"
import FloatingWhatsApp from "@/components/floating-whatsapp"
import FeaturesSection from "@/components/sections/features-section"

export default function FeaturesPage() {
  return (
    <div className="min-h-svh bg-white">
      <SiteNav />
      <FeaturesSection />
      <SiteFooter />
      <FloatingWhatsApp />
    </div>
  )
}
