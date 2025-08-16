"use client"

import SiteNav from "@/components/site-nav"
import SiteFooter from "@/components/site-footer"
import FloatingWhatsApp from "@/components/floating-whatsapp"
import ContactSection from "@/components/sections/contact-section"

export default function ContactPage() {
  return (
    <div className="min-h-svh bg-white">
      <SiteNav />
      <ContactSection />
      <SiteFooter />
      <FloatingWhatsApp />
    </div>
  )
}
