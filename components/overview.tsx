"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { Download, Sparkles, Waves, TreePalm, Droplets, Wind, Brain, Zap, Home } from "lucide-react"
import { DownloadBrochureModal } from "@/components/download-brochure-modal"
import { Modal } from "./form-modals/common-form-modal"

export function Overview({ isGlobalPage }: { isGlobalPage?: boolean }) {

  const price = isGlobalPage ? "$ 790K" : "AED 2.9 Million";

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

  const features = [
    { icon: Waves, title: "Perpetual Island Escape", desc: "Set on Dubai Islands, just 90 seconds from the beach, offering effortless seaview island living every day." },
    { icon: TreePalm, title: "Resort-Style Indulgence", desc: "53+ curated amenities across three levels, including a seaview infinity pool, rooftop lounge, bamboo park, and meditation pods." },
    { icon: Zap, title: "Rejuvenation & Cellular Renewal", desc: "Advanced biohacking therapies such as cryotherapy, hyperbaric oxygen therapy, red light therapy, and immersive sensory pods." },
    { icon: Wind, title: "Pure Air, Elevated Health", desc: "NASA-designed Airocide technology with advanced SAHU systems delivering exceptionally clean, fresh indoor air." },
    { icon: Droplets, title: "Vitalising Water at Home", desc: "Hydrogenated, oxygenated, mineralised alkaline drinking water supplied directly to every residence." },
    { icon: Brain, title: "Views That Restore the Mind", desc: "Deep balconies framing sea views, golf vistas, natural light, and calming coastal breezes." },
    { icon: Home, title: "Intelligent Living, Lower Impact", desc: "AI-enabled residences that adapt to your lifestyle while reducing energy consumption by up to 30%." },
  ]

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-28 lg:py-28 bg-gradient-to-br from-slate-50 via-white to-[#DAAA97]/5 overflow-hidden"
    >
      {/* Premium Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#DAAA97]/10 via-[#DAAA97]/5 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#334058]/10 via-[#334058]/5 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-[#DAAA97]/5 to-transparent rounded-full" />
      </div>

      {/* Decorative Lines */}
      {/* <div className="absolute top-20 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#DAAA97]/20 to-transparent" /> */}
      {/* <div className="absolute bottom-20 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#334058]/20 to-transparent" /> */}

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header Section */}
        <div className={`text-center mb-16 md:mb-20 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          {/* <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#DAAA97]/20 via-[#DAAA97]/10 to-[#DAAA97]/20 border border-[#DAAA97]/30 mb-6 backdrop-blur-sm shadow-lg shadow-[#DAAA97]/10">
            <div className="relative">
              <Sparkles className="w-4 h-4 text-[#DAAA97] animate-pulse" />
              <div className="absolute inset-0 w-4 h-4 bg-[#DAAA97] rounded-full blur-md opacity-50 animate-ping" />
            </div>
            <p className="text-sm uppercase tracking-[0.25em] text-[#DAAA97] font-bold">Overview</p>
          </div> */}

          <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight transition-all duration-1000 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <span className="bg-gradient-to-r from-[#334058] via-[#4a5d7a] to-[#334058] bg-clip-text text-transparent">A Sanctuary of Serenity</span>
            <br />
            <span className="bg-gradient-to-r from-[#DAAA97] via-[#c99b86] to-[#DAAA97] bg-clip-text text-transparent">by the Sea</span>
          </h2>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Hero Image with Text Overlay */}
          <div className={`relative mb-16 md:mb-20 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden group shadow-2xl shadow-[#334058]/20">
              <div className="relative aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/9] lg:aspect-[21/8]">
                <Image
                  src="/Sanctuary of Serenity.jpg"
                  alt="Sanctuary of Serenity"
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-1000"
                  sizes="100vw"
                  priority
                />
                {/* Gradient overlays only on md+ */}
                <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-[#334058]/90 via-[#334058]/30 to-transparent" />
                <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-[#334058]/50 via-transparent to-transparent" />
              </div>

              {/* Floating Content on Image - Desktop Only */}
              <div className="hidden md:block absolute bottom-0 left-0 right-0 p-8 md:p-12">
                <div className="max-w-3xl space-y-4">
                  <p className="text-white/90 text-lg md:text-xl font-light leading-relaxed drop-shadow-lg">
                    Welcome home to perpetual holidays at <span className="font-semibold text-[#DAAA97]">Treppan Serenique Residences</span>. Created with a singular purpose, this address reimagines home as a sanctuary for longevity, balance, and inspired island living.
                  </p>
                </div>
              </div>

              {/* Corner Accents - Desktop Only */}
              <div className="hidden md:block absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 border-[#DAAA97]/60 rounded-tl-xl" />
              <div className="hidden md:block absolute top-4 right-4 w-12 h-12 border-r-2 border-t-2 border-[#DAAA97]/60 rounded-tr-xl" />
              <div className="hidden md:block absolute bottom-4 left-4 w-12 h-12 border-l-2 border-b-2 border-[#DAAA97]/60 rounded-bl-xl" />
              <div className="hidden md:block absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-[#DAAA97]/60 rounded-br-xl" />
            </div>
          </div>

          {/* Welcome Text - Mobile Only */}
          <div className={`md:hidden mb-10 -mt-4 transition-all duration-1000 delay-250 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="relative p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-[#334058] to-[#3d4d6a] shadow-xl">
              <div className="absolute -top-3 left-6 px-4 py-1 bg-[#DAAA97] rounded-full">
                <span className="text-xs font-bold text-[#334058] uppercase tracking-wider">Welcome</span>
              </div>
              <p className="text-white/90 text-sm sm:text-base leading-relaxed pt-2">
                Welcome home to perpetual holidays at <span className="font-semibold text-[#DAAA97]">Treppan Serenique Residences</span>. Created with a singular purpose, this address reimagines home as a sanctuary for longevity, balance, and inspired island living.
              </p>
            </div>
          </div>

          {/* Description Cards */}
          <div className={`grid md:grid-cols-2 gap-6 mb-16 md:mb-20 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="group p-6 sm:p-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-[#DAAA97]/20 shadow-xl shadow-[#DAAA97]/5 hover:shadow-2xl hover:shadow-[#DAAA97]/10 hover:border-[#DAAA97]/40 transition-all duration-500 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#DAAA97] to-[#c99b86] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                Designed for those who seek more than luxury, Serenique was envisioned as a place where life unfolds with intention and ease. Every element nurtures physical vitality, mental clarity, and emotional harmony.
              </p>
            </div>
            <div className="group p-6 sm:p-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-[#334058]/10 shadow-xl shadow-[#334058]/5 hover:shadow-2xl hover:shadow-[#334058]/10 hover:border-[#334058]/30 transition-all duration-500 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#334058] to-[#4a5d7a] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                Here, daily living transcends routine to become a state of calm, energy, and renewal. A future-forward way of living where wellbeing is sustained, minds are elevated, and life is lived beautifully longer.
              </p>
            </div>
          </div>

          {/* Features Grid - Premium Cards */}
          <div className={`mb-16 md:mb-20 transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <h3 className="text-xl sm:text-2xl font-bold text-center mb-10 text-[#334058]">
              <span className="relative inline-block">
                Experience Exceptional Living
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#DAAA97] to-transparent rounded-full" />
              </span>
            </h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`group relative p-5 sm:p-6 rounded-2xl bg-white border border-gray-100 shadow-lg hover:shadow-2xl hover:shadow-[#DAAA97]/20 transition-all duration-500 hover:-translate-y-2 overflow-hidden ${index === features.length - 1 && features.length % 2 !== 0 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  {/* Hover Gradient Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#DAAA97]/10 via-transparent to-[#334058]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Icon Container */}
                  <div className="relative mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#DAAA97]/20 to-[#DAAA97]/5 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 border border-[#DAAA97]/20">
                      <feature.icon className="w-7 h-7 text-[#DAAA97] group-hover:text-[#c99b86] transition-colors duration-300" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#DAAA97] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-ping" />
                  </div>

                  {/* Content */}
                  <h4 className="font-bold text-[#334058] mb-2 group-hover:text-[#DAAA97] transition-colors duration-300">{feature.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>

                  {/* Bottom Line Accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#DAAA97] to-[#334058] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
              ))}
            </div>
          </div>

          {/* Price CTA Card */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="relative p-6 sm:p-8 md:p-10 rounded-3xl bg-gradient-to-br from-[#334058] via-[#3d4d6a] to-[#2c3a4f] overflow-hidden group hover:shadow-[0_25px_60px_-15px_rgba(51,64,88,0.5)] transition-all duration-700">
              {/* Animated Background Elements */}
              <div className="absolute inset-0 opacity-30">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,#DAAA97_0%,transparent_50%)] opacity-20" />
                <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,#DAAA97_0%,transparent_50%)] opacity-20" />
              </div>
              <div className="absolute -right-20 -top-20 w-60 h-60 bg-[#DAAA97]/20 rounded-full blur-3xl group-hover:bg-[#DAAA97]/30 transition-all duration-700" />
              <div className="absolute -left-20 -bottom-20 w-60 h-60 bg-[#DAAA97]/10 rounded-full blur-3xl group-hover:bg-[#DAAA97]/20 transition-all duration-700" />

              <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8">
                <div className="text-center sm:text-left">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#DAAA97]/20 border border-[#DAAA97]/30 mb-3">
                    <div className="w-2 h-2 rounded-full bg-[#DAAA97] animate-pulse" />
                    <p className="text-xs text-[#DAAA97] uppercase tracking-[0.2em] font-bold">Starting From</p>
                  </div>
                  <div className="flex items-baseline gap-2 justify-center sm:justify-start">
                    <span className="text-4xl sm:text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-[#DAAA97] to-white animate-shimmer" style={{ backgroundSize: '200% auto' }}>{price}</span>
                  </div>
                  <p className="text-white/60 text-sm mt-2">Premium Seaview Residences</p>
                </div>

                {/* <DownloadBrochureModal pdfUrl="/Treppan-Serenique-Brochure.pdf">
                  <Button className="group/btn relative flex items-center gap-3 bg-[#DAAA97] text-[#334058] hover:bg-white px-8 py-5 sm:px-10 sm:py-6 text-base sm:text-lg font-bold uppercase tracking-wider rounded-2xl shadow-xl shadow-[#DAAA97]/30 hover:shadow-white/30 border-2 border-[#DAAA97] hover:border-white transition-all duration-500 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
                    <Download className="w-5 h-5 group-hover/btn:animate-bounce relative z-10" />
                    <span className="relative z-10">Download Brochure</span>
                  </Button>
                </DownloadBrochureModal> */}
                <Modal
                  title="Download Brochure"
                  pdfUrl="/Treppan-Serenique-Brochure.pdf"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Full Width Payment Plan CTA */}
        <div className={`mt-12 md:mt-16 lg:mt-20 max-w-7xl mx-auto transition-all duration-1000 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#334058] via-[#3d4d6a] to-[#334058] p-8 sm:p-10 md:p-12 shadow-2xl">
            {/* Background decorations */}
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
            <div className="absolute -left-32 -top-32 w-80 h-80 bg-[#DAAA97]/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '3s' }} />
            <div className="absolute -right-32 -bottom-32 w-80 h-80 bg-[#DAAA97]/15 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
              {/* Left - Title */}
              <div className="flex items-center gap-5">
                <div className="hidden sm:flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#DAAA97]/30 to-[#DAAA97]/10 border border-[#DAAA97]/40 shadow-lg shadow-[#DAAA97]/20">
                  <Sparkles className="w-7 h-7 text-[#DAAA97]" />
                </div>
                <div>
                  <p className="text-[#DAAA97]/80 text-sm uppercase tracking-widest mb-1">Flexible Payment</p>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">60/40 Post Handover Plan</h3>
                </div>
              </div>

              {/* Center - Payment Split */}
              <div className="flex items-center gap-4 sm:gap-8">
                <div className="text-center px-6 sm:px-8 py-4 sm:py-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl hover:bg-white/15 hover:scale-105 transition-all duration-300">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl sm:text-5xl font-black bg-gradient-to-b from-[#DAAA97] to-[#c99b86] bg-clip-text text-transparent">60</span>
                    <span className="text-xl text-[#DAAA97] font-bold">%</span>
                  </div>
                  <p className="text-white/70 text-xs sm:text-sm font-medium mt-2">During Construction</p>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <div className="w-10 sm:w-16 h-0.5 bg-gradient-to-r from-transparent via-[#DAAA97] to-transparent" />
                  <div className="w-8 h-8 rounded-full bg-[#DAAA97]/20 flex items-center justify-center border border-[#DAAA97]/40">
                    <span className="text-[#DAAA97] text-lg font-bold">+</span>
                  </div>
                  <div className="w-10 sm:w-16 h-0.5 bg-gradient-to-r from-transparent via-[#DAAA97] to-transparent" />
                </div>

                <div className="text-center px-6 sm:px-8 py-4 sm:py-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl hover:bg-white/15 hover:scale-105 transition-all duration-300">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl sm:text-5xl font-black bg-gradient-to-b from-[#DAAA97] to-[#c99b86] bg-clip-text text-transparent">40</span>
                    <span className="text-xl text-[#DAAA97] font-bold">%</span>
                  </div>
                  <p className="text-white/70 text-xs sm:text-sm font-medium mt-2">Post Handover</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
