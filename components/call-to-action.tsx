"use client"

import { Button } from "@/components/ui/button"
import { useEffect, useRef, useState } from "react"
import { Sparkles, MapPin, Award, Home } from "lucide-react"
import { BookMeetingModal } from "@/components/form-modals/book-meeting-modal"
import { DownloadBrochureModal2 } from "@/components/download-brochure-modal2"
import { Modal } from "./form-modals/common-form-modal"

export function CallToAction() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-linear-to-br from-[#3d5a80] via-[#4a6890] to-[#5a7a9f] overflow-hidden"
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-lg blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#DAAA97] rounded-lg blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-300 rounded-lg blur-3xl animate-pulse-slow" />
      </div>

      <div
        className="absolute inset-0 opacity-5"
        style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "50px 50px" }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div
          className={`max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="flex justify-center animate-fade-in">
            <div className="inline-flex items-center gap-1 sm:gap-2 px-3 sm:px-6 py-1.5 sm:py-3 rounded-lg bg-[#DAAA97]/10 border border-[#DAAA97]/20 mb-4 sm:mb-6">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-[#DAAA97]" />
              <p className="text-xs sm:text-sm uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#DAAA97] font-bold">UAE's First Longevity Living Community
              </p>
            </div>
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-center animate-fade-in animation-delay-200 leading-tight">
            Ready to Experience Treppan Tower?
          </h2>

          <p className="text-white/90 text-base md:text-xl leading-relaxed mb-4 text-center animate-fade-in animation-delay-300 px-4">
            Step into a world where thoughtful design meets future-ready living.
          </p>

          <p className="text-white/90 text-base md:text-xl leading-relaxed mb-12 text-center animate-fade-in animation-delay-300 px-4">
            Experience a tranquil, villa-led sanctuary with calm at its core. From AI-enabled smart homes to wellness-centred design and 20+ curated amenities, Treppan Tower transforms everyday life into a rhythm of balance and ease.
          </p>

          {/*
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-12 animate-fade-in animation-delay-400">
            {[
              { icon: Home, title: "Fully Furnished AI-Enabled Residences", desc: "Apartments and sky villas come fully furnished with elegant, ready-to-live interiors and integrated AI smart-home systems." },
              { icon: Award, title: "Extensive Resort-Style Amenities", desc: "Two full floors dedicated to fitness, entertainment, wellness, recreation and leisure — 20+ curated amenities for every age." },
              { icon: MapPin, title: "Wellness & Longevity Lab", desc: "A dedicated biohacking and wellness lab plus smart sustainable systems, purified water, and clean indoor air to prioritise resident health." },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-xl p-5 md:p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <feature.icon className="w-6 md:w-8 h-6 md:h-8 text-[#DAAA97] mb-3" />
                <h3 className="text-white font-semibold text-base md:text-lg mb-1">{feature.title}</h3>
                <p className="text-white/70 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
          */}

          <div className="flex flex-col sm:flex-row gap-4 justify-center text-center align-middle animate-fade-in animation-delay-500">
            {/* <BookMeetingModal>
              <Button
                size="lg"
                className="bg-[#DAAA97] hover:bg-[#c99a87] text-white px-8 md:px-10 py-5 md:py-6 text-base md:text-lg transform hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-[#DAAA97]/50 relative overflow-hidden group"
              >
                <span className="relative z-10">Book a Meeting</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </Button>
            </BookMeetingModal>
            <DownloadBrochureModal2>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#334058] px-8 md:px-10 py-5 md:py-6 text-base md:text-lg bg-transparent transform hover:scale-110 transition-all duration-300 shadow-2xl"
              >
                Download Brochure
              </Button>
            </DownloadBrochureModal2> */}
            <Modal title="Book a meeting" />
            <Modal title="Download Brochure" pdfUrl="/Treppan-Serenique-Brochure.pdf" />
          </div>
        </div>
      </div>
    </section>
  )
}
