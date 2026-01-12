"use client"

import { Plus, Sparkles } from "lucide-react"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

export function Amenities() {
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

  const amenitiesList = [
    "Hyperbaric Oxygen Therapy",
    "Red Light Therapy",
    "Flotation Therapy",
    "Cryotherapy",
    "Himalayan Salt Brick Sauna",
    "Meditation Pods",
    "Bamboo Oxygen Park",
    "Koi Pond",
    "Aqua Gym",
    "Mini Golf Course",
    "Green House Cafe",
    "BBQ Pits",
    "Outdoor Cinema",
    "Hot & Cold Plunge",
    "Male & Female Spa",
    "Outdoor Party Deck",
    "Kids Play Area",
    "Open Kitchen & Grill",
  ]

  // Helper to map amenity name to icon file name
  function getAmenityIcon(amenity: string): string {
    const map: Record<string, string> = {
      "Hyperbaric Oxygen Therapy": "hyperbaricoxygen.svg",
      "Red Light Therapy": "redlighttherapy.svg",
      "Flotation Therapy": "floatationtherapy.svg",
      "Cryotherapy": "cryotherapy.svg",
      "Himalayan Salt Brick Sauna": "himalayansaltbricksauna.svg",
      "Meditation Pods": "Meditationpods.svg",
      "Bamboo Oxygen Park": "Bamboooxygenapark.svg",
      "Koi Pond": "Koipond.svg",
      "Aqua Gym": "Aquagym.svg",
      "Mini Golf Course": "minigoldcourt.svg",
      "Green House Cafe": "greenhousecafe.svg",
      "BBQ Pits": "bbqpits.svg",
      "Outdoor Cinema": "outdoorcinema.svg",
      "Hot & Cold Plunge": "coldplunge.svg", // fallback to cold plunge
      "Male & Female Spa": "malespa.svg", // fallback to male spa
      "Outdoor Party Deck": "outdoorpartydeck.svg",
      "Kids Play Area": "Kidsplayarea.svg",
      "Open Kitchen & Grill": "openkitchen.svg", // fallback to open kitchen
    }
    return map[amenity] || "icon.svg"
  }

  return (
    <section
      ref={sectionRef}
      className="relative py-32 bg-gradient-to-b from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] text-white overflow-hidden"
    >
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#DAAA97]/10 rounded-[4px] blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#334058]/10 rounded-[4px] blur-3xl animate-pulse-slow animation-delay-700" />

      <div className="container mx-auto px-6 relative z-10">
        <div
          className={`text-center mb-2 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="inline-flex items-center gap-1 sm:gap-2 px-3 sm:px-6 py-1.5 sm:py-3 rounded-[4px] bg-[#DAAA97]/10 border border-[#DAAA97]/20 mb-4 sm:mb-6">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-[#DAAA97]" />
            <p className="text-xs sm:text-sm uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#DAAA97] font-bold">
              Features & Amenities
            </p>
          </div>
        </div>

        <section>
          <h2
            className={`text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-bold text-center mb-20 leading-tight transition-all duration-1000 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <span className="text-white">53+ Resort-Style Experiences Await</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Existing Amenities Loop */}
            {amenitiesList.map((amenity, index) => (
              <div
                key={index}
                className={`group relative p-6 rounded-[4px] glass-effect hover:bg-white/10 border border-white/10 hover:border-[#DAAA97]/50 cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#DAAA97]/20 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                style={{ transitionDelay: `${200 + index * 50}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#DAAA97]/0 to-[#DAAA97]/10 rounded-[4px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative flex items-center gap-4">
                  <div className="p-2 rounded-[4px] bg-[#DAAA97]/10 group-hover:bg-[#DAAA97]/20 transition-colors duration-300 flex items-center justify-center">
                    <Image
                      src={`/aminities/${getAmenityIcon(amenity)}`}
                      alt={amenity + " icon"}
                      width={28}
                      height={28}
                      className="group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <span className="text-white/90 group-hover:text-white font-medium transition-colors duration-300">
                    {amenity}
                  </span>
                </div>
              </div>
            ))}

            {/* --- NEW: "& Many More" Card --- */}
            <div
              className={`group relative p-6 rounded-[4px] glass-effect hover:bg-white/10 border border-white/10 hover:border-[#DAAA97]/50 cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#DAAA97]/20 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${200 + amenitiesList.length * 50}ms` }}
            >
              <div className="absolute inset-0 bg-linear-to-br from-[#DAAA97]/0 to-[#DAAA97]/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative flex items-center gap-4">
                <div className="p-2 rounded-[4px] bg-[#DAAA97]/10 group-hover:bg-[#DAAA97]/20 transition-colors duration-300 flex items-center justify-center h-[44px] w-[44px]"> {/* Fixed dimensions to match icon container size */}
                  <Plus className="w-7 h-7 text-[#e2a793] group-hover:scale-110 transition-transform duration-300" />
                </div>
                <span className="text-white/90 group-hover:text-white font-medium transition-colors duration-300">
                  & Many More
                </span>
              </div>
            </div>

          </div>
        </section>
      </div>
    </section>
  )
}