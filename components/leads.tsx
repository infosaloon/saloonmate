"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { MessageCircle } from 'lucide-react'
import { useToast } from "@/hooks/use-toast"
import { useState, useTransition } from "react"

const WHATSAPP_NUMBER_E164 = "919993023243"
const WHATSAPP_DEMO_TEXT = encodeURIComponent("Hi SaloonMate team! I'd like to book a FREE demo and business walkthrough.")
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER_E164}?text=${WHATSAPP_DEMO_TEXT}`

export function BookDemoButton({
  size = "default",
  variant = "default",
}: {
  size?: "sm" | "default" | "lg"
  variant?: "default" | "secondary"
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size={size}
          variant={variant === "secondary" ? "secondary" : "default"}
          className="bg-amber-600 hover:bg-amber-700 text-white"
        >
          Book FREE Demo
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Book Your FREE Demo</DialogTitle>
          <DialogDescription>Tell us a few details and we&apos;ll reach out to schedule your walkthrough.</DialogDescription>
        </DialogHeader>
        <LeadForm compact />
      </DialogContent>
    </Dialog>
  )
}

export function LeadForm({ compact = false }: { compact?: boolean }) {
  const { toast } = useToast()
  const [isPending, startTransition] = useTransition()
  const [state, setState] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    businessSize: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Basic validation
    if (!state.name.trim() || !state.phone.trim()) {
      toast({
        title: "Missing Information",
        description: "Please fill in your name and phone number.",
        variant: "destructive",
      });
      return;
    }
    
    startTransition(async () => {
      try {
        // Create FormData object
        const formData = new FormData();
        formData.append('name', state.name.trim());
        formData.append('phone', state.phone.trim());
        formData.append('email', state.email.trim());
        formData.append('location', state.location.trim());
        formData.append('businessSize', state.businessSize.trim());
        formData.append('message', state.message.trim());
        formData.append('sheetName', 'Sheet1');
        
        console.log("Submitting form data:", Object.fromEntries(formData));
        
        const response = await fetch(
          "https://script.google.com/macros/s/AKfycbzbN7NW_KQPTY8WwOPdFSPlHiKW2l4Z8TcF-Ajw5mgKeHOc20Al4UQTGzddy8Zf595UYQ/exec",
          {
            method: "POST",
            body: formData,
            mode: 'cors', // Explicitly set CORS mode
            credentials: 'omit', // Don't send credentials
          }
        );

        console.log("Response status:", response.status);
        
        // For Google Apps Script, sometimes we get response even with CORS errors
        // Check if we at least got a 200 status
        if (response.status === 200) {
          try {
            const text = await response.text();
            console.log("Response text:", text);
            
            let result;
            try {
              result = text ? JSON.parse(text) : { success: true };
            } catch (parseError) {
              console.warn("Could not parse response as JSON, but got 200 status");
              result = { success: true };
            }

            if (result.success !== false) {
              toast({
                title: "Request sent successfully!",
                description: "We'll contact you shortly to schedule your FREE demo.",
              });

              // Reset form
              setState({
                name: "",
                phone: "",
                email: "",
                location: "",
                businessSize: "",
                message: "",
              });
              return;
            } else {
              throw new Error(result.error || "Server reported failure");
            }
          } catch (textError) {
            console.warn("Could not read response text, but got 200 status");
            // If we got 200 but can't read response due to CORS, assume success
            toast({
              title: "Request sent successfully!",
              description: "We'll contact you shortly to schedule your FREE demo.",
            });

            setState({
              name: "",
              phone: "",
              email: "",
              location: "",
              businessSize: "",
              message: "",
            });
            return;
          }
        }
        
        throw new Error(`HTTP error! status: ${response.status}`);
        
      } catch (error) {
        console.error("Submission error:", error);
        
        // Check if it's a CORS error but request might have succeeded
        if (error.message.includes('Failed to fetch') || error.message.includes('CORS')) {
          toast({
            title: "Request likely sent!",
            description: "Due to browser security, we can't confirm delivery, but your request was probably received. Check your email or contact us on WhatsApp if you don't hear back.",
            variant: "default",
          });
          
          // Reset form on likely success
          setState({
            name: "",
            phone: "",
            email: "",
            location: "",
            businessSize: "",
            message: "",
          });
        } else {
          toast({
            title: "Something went wrong",
            description: error.message || "Please try again or reach us on WhatsApp.",
            variant: "destructive",
          });
        }
      }
    });
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-3">
      <Input
        placeholder="Full Name"
        value={state.name}
        onChange={(e) => setState((s) => ({ ...s, name: e.target.value }))}
        required
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Input
          placeholder="Phone (WhatsApp)"
          value={state.phone}
          onChange={(e) => setState((s) => ({ ...s, phone: e.target.value }))}
          required
        />
        <Input
          type="email"
          placeholder="Email"
          value={state.email}
          onChange={(e) => setState((s) => ({ ...s, email: e.target.value }))}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Input
          placeholder="Location / City"
          value={state.location}
          onChange={(e) => setState((s) => ({ ...s, location: e.target.value }))}
        />
        <Input
          placeholder="Business Size (e.g. 6 seats, 2 outlets)"
          value={state.businessSize}
          onChange={(e) => setState((s) => ({ ...s, businessSize: e.target.value }))}
        />
      </div>
      <Textarea
        placeholder="What would you like to improve? (Optional)"
        rows={compact ? 3 : 4}
        value={state.message}
        onChange={(e) => setState((s) => ({ ...s, message: e.target.value }))}
      />
      <div className="flex flex-wrap gap-3 pt-1">
        <Button type="submit" disabled={isPending} className="bg-amber-600 hover:bg-amber-700 text-white">
          {isPending ? "Sending..." : "Request Demo"}
        </Button>
        <Button asChild variant="outline" className="border-neutral-300">
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp Now
          </a>
        </Button>
      </div>
      <p className="text-xs text-neutral-500">
        We&apos;ll never share your info. You can also email us at{" "}
        <a href="mailto:info@saloonmate.com" className="underline">
          info@saloonmate.com
        </a>
        .
      </p>
    </form>
  )
}