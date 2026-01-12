"use client";
import React, { useEffect, useState } from 'react';
import { Hero } from "@/components/hero"
import { Overview } from "@/components/overview"
import { VisualTour } from "@/components/visual-tour"
import { CallToAction } from "@/components/call-to-action"
import { Amenities } from "@/components/amenities"
import { FloorPlans } from "@/components/floor-plans"
import { Location } from "@/components/location"
import { ContactForm } from "@/components/contact-form"

const Globalpage = () => {
  const isGlobalPage = true;

  return (
    <main className="min-h-screen">
      <Hero isGlobalPage={isGlobalPage} />
      <Overview isGlobalPage={isGlobalPage} />
      <VisualTour />
      <CallToAction />
      <Amenities />
      <FloorPlans />
      <Location />
      <ContactForm />
    </main>
  )
}

export default Globalpage;