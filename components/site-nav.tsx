"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";
import { BookDemoButton } from "@/components/leads";
import { WHATSAPP_LINK } from "@/components/leads";
import { cn } from "@/lib/utils";

export default function SiteNav() {
  const pathname = usePathname();
  const link = (href: string, label: string) => (
    <Link
      href={href}
      className={cn(
        "transition-colors hover:text-neutral-950",
        pathname === href ? "text-neutral-950 font-medium" : "text-neutral-700"
      )}
    >
      {label}
    </Link>
  );

  return (
    <header className="sticky top-0 z-30 w-full backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b py-3">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logoProject.jpg"
            alt="SaloonMate logo"
            width={220}
            height={60}
            className="h-16 md:h-18 lg:h-20 xl:h-24 w-auto"
            priority
          />
          <span className="sr-only">SaloonMate</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {link("/features", "Features")}
          {link("/why-saloonmate", "Why SaloonMate")}
          {link("/contact", "Contact")}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild variant="ghost" className="hidden sm:inline-flex">
            <a href="tel:+919993023243">
              <Phone className="mr-2 h-4 w-4" /> Call
            </a>
          </Button>
          <Button asChild variant="outline" className="hidden sm:inline-flex">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp
            </a>
          </Button>
          <BookDemoButton />
        </div>
      </div>
    </header>
  );
}


