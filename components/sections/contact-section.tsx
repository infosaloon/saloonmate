"use client"

import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LeadForm, WHATSAPP_LINK } from "@/components/leads"
import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, Mail, Globe, MapPin } from 'lucide-react'
import { cn } from "@/lib/utils"

function ContactLine({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode
  label: string
  value: string
  href?: string
}) {
  const Comp = href ? "a" : "div"
  return (
    <Comp
      {...(href ? { href, target: href?.startsWith("http") ? "_blank" : undefined, rel: "noopener noreferrer" } : {})}
      className={cn("flex items-center gap-3", href && "hover:underline")}
    >
      <div className="h-8 w-8 rounded-md bg-amber-50 text-amber-700 grid place-items-center">{icon}</div>
      <div>
        <p className="text-xs text-neutral-500">{label}</p>
        <p className="text-sm">{value}</p>
      </div>
    </Comp>
  )
}

export default function ContactSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <div className="grid lg:grid-cols-2 gap-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-950">Get in touch</h1>
          <p className="mt-3 text-neutral-700">
            Book your FREE Demo & Business Walkthrough. Work less and earn more — on autopilot.
          </p>
          <div className="mt-6 space-y-3 text-neutral-800">
            <ContactLine icon={<Phone className="h-4 w-4" />} label="Call or WhatsApp" value="+91 9993023243" href="tel:+919993023243" />
            <ContactLine icon={<MessageCircle className="h-4 w-4" />} label="WhatsApp" value="Chat now" href={WHATSAPP_LINK} />
            <ContactLine icon={<Mail className="h-4 w-4" />} label="Email" value="info@saloonmate.com" href="mailto:info@saloonmate.com" />
            <ContactLine icon={<Globe className="h-4 w-4" />} label="Web" value="www.saloonmate.in | www.botivate.in" href="https://www.saloonmate.in" />
            <ContactLine icon={<MapPin className="h-4 w-4" />} label="Serving" value="Boutique to multi-location salons worldwide" />
          </div>
          <div className="mt-8">
            <Image
              src="/salon-software-demo.png"
              alt="SaloonMate demo"
              width={540}
              height={300}
              className="w-full rounded-lg border object-cover"
            />
          </div>
        </div>
        <Card className="border-neutral-200">
          <CardHeader>
            <CardTitle className="text-lg">Request a demo</CardTitle>
            <CardDescription>Prefer WhatsApp? Click the button below to chat now.</CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <LeadForm />
            <div className="mt-3">
              <Button asChild variant="outline" className="border-neutral-300">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp Now
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
