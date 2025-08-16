"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Users, CalendarClock, Scissors, Wallet, Settings2, MessageCircle, RefreshCcw, Cpu } from 'lucide-react'

type Feature = {
  icon: React.ReactNode
  title: string
  desc: string
  bullets: string[]
}

const features: Feature[] = [
  {
    icon: <Users className="h-5 w-5" />,
    title: "STAFF & COMMISSION",
    desc: "Automated staff management & transparent commissions with real-time performance tracking.",
    bullets: ["AI productivity tracking", "Auto commission calculations", "Reduce manual errors"],
  },
  {
    icon: <CalendarClock className="h-5 w-5" />,
    title: "SMART BOOKING",
    desc: "24/7 AI-powered appointment scheduling across devices with live staff availability.",
    bullets: ["No missed bookings", "AI-optimized time slots", "Real-time sync"],
  },
  {
    icon: <Scissors className="h-5 w-5" />,
    title: "SERVICE CONTROL",
    desc: "Total control over services & pricing with top-performers and quick updates.",
    bullets: ["AI suggestions from trends", "Track service performance", "Instant updates"],
  },
  {
    icon: <Wallet className="h-5 w-5" />,
    title: "PAYMENTS DASHBOARD",
    desc: "Instant visibility into revenue, tips, commissions, and taxes — all in one place.",
    bullets: ["AI sales analytics", "Improve profitability", "Clarity & control"],
  },
  {
    icon: <Settings2 className="h-5 w-5" />,
    title: "AI INTEGRATION",
    desc: "Let AI handle repetitive tasks from scheduling to reporting.",
    bullets: ["Save time", "Reduce errors", "Scale smarter"],
  },
  {
    icon: <MessageCircle className="h-5 w-5" />,
    title: "WHATSAPP READY",
    desc: "Automated reminders, updates, and re-engagement — replies handled by AI.",
    bullets: ["Auto follow-ups", "Reminders & confirmations", "Happier clients"],
  },
  {
    icon: <RefreshCcw className="h-5 w-5" />,
    title: "FOLLOW-UP WITH AI",
    desc: "Re-engage silent clients automatically with personalized offers.",
    bullets: ["More repeat bookings", "AI targeting", "Hands-off retention"],
  },
  {
    icon: <Cpu className="h-5 w-5" />,
    title: "AI-POWERED APPOINTMENTS",
    desc: "Right staff, right time, right service — every time.",
    bullets: ["No clashes", "No confusion", "Smooth service"],
  },
]

export default function FeaturesSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <div className="mb-8 md:mb-10">
        <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">🚀 Smart Features That Work for You</Badge>
        <h1 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-neutral-950">
          Everything you need to grow — on autopilot
        </h1>
        <p className="mt-3 text-neutral-700 max-w-2xl">
          We automate the boring stuff so you can focus on what matters most — growing your brand and delighting your clients.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {features.map((f, i) => (
          <FeatureCard key={i} {...f} />
        ))}
      </div>
    </section>
  )
}

function FeatureCard({ icon, title, desc, bullets }: Feature) {
  return (
    <Card className="h-full border-neutral-200 hover:shadow-md transition-shadow">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-md bg-amber-50 text-amber-700 grid place-items-center">{icon}</div>
          <CardTitle className="text-base">{title}</CardTitle>
        </div>
        <CardDescription className="pt-2 text-neutral-700">{desc}</CardDescription>
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
