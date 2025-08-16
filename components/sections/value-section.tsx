"use client"

import { Check, ChevronRight } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookDemoButton } from "@/components/leads"

export default function ValueSection() {
  const items = [
    "Turn more bookings into repeat clients",
    "Reduce no-shows with smart WhatsApp reminders",
    "Auto-track staff commissions & productivity",
    "Sell more services with AI-backed upsell insights",
    "Keep your shelves stocked & your revenue flowing",
  ]
  return (
    <section className="relative">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white to-stone-50" />
      <div className="mx-auto max-w-7xl px-4 py-16 grid lg:grid-cols-2 gap-10">
        <div>
          <Badge className="mb-3 bg-amber-100 text-amber-800 hover:bg-amber-100">Why SaloonMate</Badge>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-950">
            SaloonMate: Your Salon’s Money-Making Machine
          </h1>
          <p className="mt-4 text-neutral-700">
            Running a salon is no small task — managing staff, handling bookings, tracking payments, and keeping clients
            happy. SaloonMate isn’t just software — it’s your silent partner, business booster, and money-making machine.
          </p>
          <ul className="mt-6 space-y-2 text-neutral-800">
            {items.map((t, i) => (
              <li key={i} className="flex items-start gap-2">
                <Check className="mt-0.5 h-5 w-5 text-amber-600" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <BookDemoButton />
            <Button asChild variant="outline" className="border-neutral-300">
              <a href="/contact">
                <ChevronRight className="mr-2 h-4 w-4" /> Contact us
              </a>
            </Button>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <AudienceCard
            title="Who Is SaloonMate For?"
            bullets={[
              "Boutique Salons",
              "Spas & Wellness Clinics",
              "Unisex Beauty Studios",
              "Barbershops",
              "Franchise Chains",
              "Multi-Location Businesses",
            ]}
          />
          <AudienceCard
            title="Why Salon Owners Trust Us"
            bullets={[
              "Reduce No-Shows & Manual Work",
              "Boost Revenue & Staff Efficiency",
              "Re-Engage Clients Automatically",
              "Make Informed Business Decisions",
              "Save Time — Operate like a CEO",
            ]}
          />
        </div>
      </div>
    </section>
  )
}

function AudienceCard({ title, bullets }: { title: string; bullets: string[] }) {
  return (
    <Card className="border-neutral-200">
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <ul className="space-y-2 text-sm text-neutral-800">
          {bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-2">
              <Check className="mt-0.5 h-4 w-4 text-amber-600" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
