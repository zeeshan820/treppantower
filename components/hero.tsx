"use client"

import { Button } from "@/components/ui/button"
import { ExpressInterestModal } from "@/components/form-modals/express-interest-modal"
import { DownloadBrochureModal3 } from "@/components/download-brochure-modal3"
import { useEffect, useState } from "react"
import { Download, Send } from "lucide-react"
import { Modal } from "./form-modals/common-form-modal"

export function Hero({ isGlobalPage }: { isGlobalPage?: boolean }) {
  const [isVisible, setIsVisible] = useState(false);

  // const [brochureOpen, setBrochureOpen] = useState(false);
  const tabs = isGlobalPage ? [
    { value: "53+", label: "Resort Amenities" },
    { value: "90&nbsp;Sec.", label: "From Beach" },
    { value: "$ 790K", label: "Premium Residences" },
    { value: "1, 2 & 3 BR", label: "Fully furnished" },
  ] : [
    { value: "53+", label: "Resort Amenities" },
    { value: "90&nbsp;Sec.", label: "From Beach" },
    { value: "AED 1.15M", label: "Premium Residences" },
    { value: "1, 2 & 3 BR", label: "Fully furnished" },
  ];

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative flex items-center justify-center overflow-hidden py-20 md:py-20 lg:py-0 lg:h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-12000 ease-out scale-110"
        style={{
          backgroundImage: "url('/treppantower-hero-banner.jpg')",
          transform: isVisible ? "scale(1)" : "scale(1.2)",
        }}
      >
        <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/40 to-black/60" />
        <div className="absolute inset-0 bg-[#1a1a1a]/20" />
      </div>

      <div className="absolute top-20 right-20 w-64 h-64 bg-[#DAAA97]/10 rounded-lg blur-3xl animate-float" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#334058]/10 rounded-lg blur-3xl animate-float-delayed" />

      <div
        className={`relative z-10 container mx-auto px-6 text-center transition-all duration-1500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
          }`}
      >
        {/* <div className="mb-6 animate-fade-in">
          <div className="inline-block px-6 py-2 rounded-lg bg-white/10 backdrop-blur-xl border border-white/20 mb-6">
            <p className="text-sm font-semibold text-white uppercase tracking-[0.2em]">
              Dubai Islands • Launching Soon
            </p>
          </div>
        </div> */}

        {/*
        <div className="mb-6">
          <div className="inline-block animate-fade-in animation-delay-200">
            <img
              src="/serenique-new-logo.webp"
              alt="Treppan Tower"
              className="mx-auto w-80 sm:w-96 md:w-180 object-contain drop-shadow-2xl"
            />
          </div>
        </div>
        */}

        <div className="max-w-3xl mx-auto mb-8 sm:mb-10 animate-fade-in animation-delay-500">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4 leading-tight drop-shadow-lg">
            Treppan Tower
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white font-light leading-relaxed drop-shadow-lg">
            Step Inside A Tranquil Retreat in the Heart of JVT
          </p>
          <div className="w-16 sm:w-24 h-1 bg-linear-to-r from-transparent via-[#DAAA97] to-transparent mx-auto mt-4" />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center animate-fade-in animation-delay-700">
          {/* <DownloadBrochureModal3 pdfUrl="/Treppan-Serenique-Brochure.pdf">
            <Button
              size="lg"
              className="group relative overflow-hidden bg-linear-to-r from-[#DAAA97] to-[#c99a87] hover:from-[#e5baa7] hover:to-[#d9aa97] text-white px-6 py-4 sm:px-10 sm:py-7 text-sm sm:text-base font-semibold uppercase tracking-wider rounded-lg transform hover:scale-105 transition-all duration-500 shadow-2xl hover:shadow-[#DAAA97]/50"
            >
              <span className="relative z-10 flex items-center gap-2 sm:gap-3">
                <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                Download Brochure
              </span>
              <div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </Button>
          </DownloadBrochureModal3>
          <ExpressInterestModal>
            <Button
              size="lg"
              className="group relative overflow-hidden bg-white/10 backdrop-blur-xl border-2 border-white/50 text-white hover:bg-white hover:text-[#334058] hover:border-white px-6 py-4 sm:px-10 sm:py-7 text-sm sm:text-base font-semibold uppercase tracking-wider rounded-lg transform hover:scale-105 transition-all duration-500 shadow-2xl"
            >
              <span className="relative z-10 flex items-center gap-2 sm:gap-3">
                <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                Express Interest
              </span>
            </Button>
          </ExpressInterestModal> */}
          <Modal
            title="Download Brochure"
            pdfUrl="/Treppan-Serenique-Brochure.pdf"
          />
          <Modal
            title="Express Interest"
          />
        </div>

        
        <div className="mt-10 sm:mt-16 grid grid-cols-1 sm:grid-cols-4 gap-4 sm:gap-8 max-w-5xl mx-auto animate-fade-in animation-delay-800 itemscenter justify-center place-items-center">
          {tabs.map((stat, index) => (
            <div key={index} className="group">
              <div className="glass-effect rounded-lg p-4 sm:p-6 transform hover:scale-105 transition-all duration-500 hover:bg-white/15">
                <p className="text-2xl sm:text-4xl font-bold text-white mb-1 sm:mb-2" dangerouslySetInnerHTML={{ __html: stat.value }} />
                <p className="text-xs sm:text-sm text-white/80 uppercase tracking-wider">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
       
      </div>
    </section>
  )
}
