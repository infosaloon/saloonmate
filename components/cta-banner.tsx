"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MessageCircle } from 'lucide-react'
import { BookDemoButton, WHATSAPP_LINK } from "@/components/leads"

export default function CtaBanner() {
  return (
    <section className="mx-auto max-w-7xl px-4">
      <div className="relative overflow-hidden rounded-2xl border bg-gradient-to-tr from-neutral-950 to-stone-900 text-white">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-amber-500/20 blur-3xl" />
        <div className="absolute -left-10 -bottom-24 h-64 w-64 rounded-full bg-amber-400/20 blur-3xl" />
        <div className="relative p-8 md:p-12">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <Badge className="bg-amber-500 text-white hover:bg-amber-500">Pro Tip</Badge>
              <h3 className="mt-3 text-2xl md:text-3xl font-semibold">Still using notebooks and chats to run your salon?</h3>
              <p className="mt-2 text-white/80">
                You&apos;re leaving serious money on the table. Let SaloonMate do the heavy lifting while you focus on growth.
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}
