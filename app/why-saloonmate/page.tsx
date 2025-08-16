"use client"

import SiteNav from "@/components/site-nav"
import SiteFooter from "@/components/site-footer"
import FloatingWhatsApp from "@/components/floating-whatsapp"
import ValueSection from "@/components/sections/value-section"

export default function WhyPage() {
  return (
    <div className="min-h-svh bg-white">
      <SiteNav />
      <ValueSection />
      <SiteFooter />
      <FloatingWhatsApp />
    </div>
  )
}
