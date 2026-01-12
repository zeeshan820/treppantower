"use client"
import { Hero } from "@/components/hero"
import { Overview } from "@/components/overview"
import { VisualTour } from "@/components/visual-tour"
import { CallToAction } from "@/components/call-to-action"
import { Amenities } from "@/components/amenities"
import { FloorPlans } from "@/components/floor-plans"
import { Location } from "@/components/location"
import { ContactForm } from "@/components/contact-form"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Overview />
      <VisualTour />
      <CallToAction />
      <FloorPlans />
      <Location />
      <Amenities />
      <ContactForm />

    </main>
  )
}
