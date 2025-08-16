"use client"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Sparkles, Shield, Wand2, BarChart3, Check } from 'lucide-react'
import SiteNav from "@/components/site-nav"
import SiteFooter from "@/components/site-footer"
import FloatingWhatsApp from "@/components/floating-whatsapp"
import { BookDemoButton, WHATSAPP_LINK } from "@/components/leads"
import FeaturesSection from "@/components/sections/features-section"
import ValueSection from "@/components/sections/value-section"
import CtaBanner from "@/components/cta-banner"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <div className="min-h-svh w-full bg-white text-neutral-900">
      <SiteNav />
      <Hero />
      <TrustBar />
      {/* Preview sections on home */}
      <FeaturesSection />
      <ValueSection />
      <CtaBanner />
      <div className="mx-auto max-w-7xl px-4 pb-16">
        <div className="flex flex-wrap gap-3">
          
        </div>
      </div>
      <SiteFooter />
      <FloatingWhatsApp />
    </div>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-stone-50 via-white to-white" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[40rem] w-[40rem] rounded-full bg-amber-200/30 blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <Badge className="mb-4 bg-amber-100 text-amber-800 hover:bg-amber-100">💼 Welcome to SaloonMate</Badge>
          <h1 className="text-4xl md:text-5xl/tight font-semibold tracking-tight text-neutral-950">
            Run Your Salon on Autopilot — Maximize Time & Revenue
          </h1>
          <p className="mt-4 text-lg text-neutral-700">
            SaloonMate is your boss-level money-making system — built to handle the backend hustle while you focus on style,
            service, and success.
          </p>
          <ul className="mt-6 space-y-2 text-neutral-800">
            <HeroPoint text="Cloud-based automation for single or multi-location salons" />
            <HeroPoint text="AI-powered scheduling, analytics, CRM, and WhatsApp automation" />
            <HeroPoint text="Operate like a CEO — with control, clarity, and confidence" />
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <BookDemoButton size="lg" />
            <Button asChild size="lg" variant="outline" className="border-neutral-300">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                Chat on WhatsApp
              </a>
            </Button>
          </div>
          <p className="mt-3 text-sm text-neutral-500">FREE Demo & Business Walkthrough. No credit card needed.</p>
        </div>
        <div className="relative">
          <div className="absolute -inset-3 rounded-2xl bg-gradient-to-tr from-amber-400/20 via-amber-300/10 to-transparent blur-xl" />
          <Card className="relative overflow-hidden border-neutral-200 shadow-lg">
            <Image
              src="/premium-salon-interior.png"
              alt="Premium salon interior"
              width={900}
              height={600}
              className="h-full w-full object-cover"
              priority
            />
            <div className="absolute bottom-4 left-4 right-4 rounded-lg bg-white/85 backdrop-blur p-3 flex items-center gap-3 shadow">
              <Sparkles className="h-5 w-5 text-amber-600" />
              <p className="text-sm text-neutral-800">
                “No more chaos. No more guesswork. Just pure salon success — on autopilot.”
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}

function HeroPoint({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-2">
      <Check className="mt-0.5 h-5 w-5 text-amber-600" />
      <span>{text}</span>
    </li>
  )
}

function TrustBar() {
  return (
    <div className="border-y bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm text-neutral-700">
        <TrustItem icon={<Shield className="h-4 w-4" />} label="Secure & Cloud-based" />
        <TrustItem icon={<Wand2 className="h-4 w-4" />} label="AI-Optimized Workflows" />
        <TrustItem icon={<BarChart3 className="h-4 w-4" />} label="Real-time Analytics" />
        <TrustItem icon={<Sparkles className="h-4 w-4" />} label="Premium Experience" />
      </div>
    </div>
  )
}

function TrustItem({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2 justify-center md:justify-start">
      <div className="text-amber-700">{icon}</div>
      <span>{label}</span>
    </div>
  )
}
