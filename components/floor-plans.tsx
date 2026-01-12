"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Download, Sparkles, Ruler, Home } from "lucide-react"
import { DownloadFloorPlanModal } from "@/components/download-floorplan-modal"

export function FloorPlans() {
  const [activeTab, setActiveTab] = useState<"2bedroom" | "3bedroom">("2bedroom")
  const [currentIndex, setCurrentIndex] = useState(0)

  const floorPlans2Bed = [
    "/Floor Plan/2 Bed Room/Even-Floor-Tower-AB_Tower-A-02.webp",
    "/Floor Plan/2 Bed Room/Even-Floor-Tower-AB_Tower-A-06.webp",
    "/Floor Plan/2 Bed Room/Even-Floor-Tower-AB_Tower-B-03.webp",
  ];

  const floorPlans3Bed = [
    "/Floor Plan/3 Bed Room/10-12-floor-Tower-A-B_Tower-A-01.webp",
    "/Floor Plan/3 Bed Room/10-12-floor-Tower-A-B_Tower-A-04.webp",
    "/Floor Plan/3 Bed Room/10-12-floor-Tower-A-B_Tower-B-04.webp",
  ];

  const plans = activeTab === "2bedroom" ? floorPlans2Bed : floorPlans3Bed

  // Modal state for lightbox
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const openLightbox = (idx: number) => {
    setLightboxIndex(idx)
    setLightboxOpen(true)
  }
  const closeLightbox = () => setLightboxOpen(false)
  const nextLightbox = () => setLightboxIndex((prev) => (prev + 1) % plans.length)
  const prevLightbox = () => setLightboxIndex((prev) => (prev - 1 + plans.length) % plans.length)

  const handleTabChange = (tab: "2bedroom" | "3bedroom") => {
    setActiveTab(tab)
    setCurrentIndex(0)
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % plans.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + plans.length) % plans.length)
  }

  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6">
        {/* <div className="text-center">
          <div className="inline-flex items-center gap-1 sm:gap-2 px-3 sm:px-6 py-1.5 sm:py-3 rounded-[4px] bg-[#DAAA97]/10 border border-[#DAAA97]/20 mb-4 sm:mb-6">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-[#DAAA97]" />
            <p className="text-xs sm:text-sm uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#DAAA97] font-bold">Floor Plann</p>
          </div>
        </div> */}

        <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 leading-tight text-gray-900 px-4">
          
          
          Discover the Floor Plans
        </h2>

        <p className="text-center text-gray-700 mb-8 sm:mb-12 md:mb-16 max-w-3xl mx-auto text-sm sm:text-base md:text-lg px-4">
          Treppan Serenique offers a curated collection of 2- and 3-bedroom residences designed for expansive living.
        </p>

        <div className="flex justify-center gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-12 md:mb-16 px-4">
          <Button
            onClick={() => handleTabChange("2bedroom")}
            variant={activeTab === "2bedroom" ? "default" : "outline"}
            className={`px-6 sm:px-8 md:px-12 py-4 sm:py-5 md:py-6 lg:py-7 text-sm sm:text-base md:text-lg font-bold rounded-[4px] transition-all duration-500 ${activeTab === "2bedroom" ? "bg-gradient-to-r from-[#DAAA97] to-[#c99a87] hover:from-[#e5baa7] hover:to-[#d9aa97] text-white shadow-xl hover:shadow-2xl scale-105" : "text-gray-700 hover:border-[#DAAA97] hover:text-[#DAAA97] border-2"}`}
          >
            2 Bedroom
          </Button>
          <Button
            onClick={() => handleTabChange("3bedroom")}
            variant={activeTab === "3bedroom" ? "default" : "outline"}
            className={`px-6 sm:px-8 md:px-12 py-4 sm:py-5 md:py-6 lg:py-7 text-sm sm:text-base md:text-lg font-bold rounded-[4px] transition-all duration-500 ${activeTab === "3bedroom" ? "bg-gradient-to-r from-[#DAAA97] to-[#c99a87] hover:from-[#e5baa7] hover:to-[#d9aa97] text-white shadow-xl hover:shadow-2xl scale-105" : "text-gray-700 hover:border-[#DAAA97] hover:text-[#DAAA97] border-2"}`}
          >
            3 Bedroom
          </Button>
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-start px-4">
          <div className="relative order-1">
            <div className="relative aspect-[4/3] rounded-[4px] overflow-hidden shadow-2xl bg-white border-2 border-gray-100 hover:shadow-[#DAAA97]/20 hover:border-[#DAAA97]/30 transition-all duration-500">
              <Image
                src={plans[currentIndex] || "/placeholder.svg"}
                alt={`Floor plan ${currentIndex + 1}`}
                fill
                className="object-contain p-3 sm:p-4 md:p-6 cursor-zoom-in"
                onClick={() => openLightbox(currentIndex)}
                style={{ zIndex: 2 }}
              />

              <button
                onClick={prevSlide}
                className="absolute left-2 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 bg-white hover:bg-[#DAAA97] hover:text-white p-2 sm:p-3 md:p-4 rounded-[4px] shadow-2xl transition-all duration-300 hover:scale-110 z-10 border-2 border-gray-100"
                aria-label="Previous floor plan"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-2 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 bg-white hover:bg-[#DAAA97] hover:text-white p-2 sm:p-3 md:p-4 rounded-[4px] shadow-2xl transition-all duration-300 hover:scale-110 z-10 border-2 border-gray-100"
                aria-label="Next floor plan"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </button>

              <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 right-3 sm:right-4 md:right-6 bg-gradient-to-r from-[#334058] to-[#273244] text-white px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-3 rounded-[4px] text-xs sm:text-sm md:text-base font-bold shadow-xl">
                {currentIndex + 1} / {plans.length}
              </div>
            </div>

            {/* Lightbox Modal */}
            <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
              <DialogContent className="flex flex-col items-center justify-center bg-black/90 p-0 max-w-[90vw] w-full max-h-[70vh] overflow-hidden">
                <DialogTitle className="sr-only">Floor Plan Image Viewer</DialogTitle>
                <button
                  onClick={closeLightbox}
                  className="absolute top-4 right-4 z-20 text-white bg-black/60 hover:bg-black/80 rounded-[4px] px-2"
                  aria-label="Close"
                >
                  <span className="text-2xl">×</span>
                </button>
                <button
                  onClick={prevLightbox}
                  className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-black/60 hover:bg-black/80 text-white rounded-[4px] p-2"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>
                <div className="relative w-full h-[60vh] flex items-center justify-center">
                  <Image
                    src={plans[lightboxIndex] || "/placeholder.svg"}
                    alt={`Floor plan large view ${lightboxIndex + 1}`}
                    fill
                    className="object-contain"
                  />
                </div>
                <button
                  onClick={nextLightbox}
                  className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-black/60 hover:bg-black/80 text-white rounded-[4px] p-2"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-8 h-8" />
                </button>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm bg-black/60 px-4 py-1 rounded-[4px]">
                  {lightboxIndex + 1} / {plans.length}
                </div>
              </DialogContent>
            </Dialog>

            <div className="flex justify-center gap-2 sm:gap-3 mt-4 sm:mt-6 md:mt-8">
              {plans.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 sm:h-2.5 md:h-3 rounded-[4px] transition-all duration-500 ${
                    index === currentIndex
                      ? "bg-gradient-to-r from-[#DAAA97] to-[#c99a87] w-8 sm:w-12 md:w-16 shadow-lg"
                      : "bg-gray-300 w-2 sm:w-2.5 md:w-3 hover:bg-gray-400 hover:w-4 sm:hover:w-5 md:hover:w-6"
                  }`}
                  aria-label={`Go to floor plan ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="space-y-4 sm:space-y-6 md:space-y-8 order-2">
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-[4px] p-6 sm:p-8 md:p-10 shadow-2xl border border-gray-100 hover:shadow-[#DAAA97]/20 hover:border-[#DAAA97]/30 transition-all duration-500">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8 text-gray-900 flex items-center gap-2 sm:gap-3">
                <Home className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-[#DAAA97]" />
                Floor Plan Details
              </h3>

              <div className="overflow-x-auto mb-6 sm:mb-8 md:mb-10 -mx-2 px-2">
                <table className="w-full min-w-[280px]">
                  <thead>
                    <tr className="border-b-2 border-[#DAAA97]/20">
                      <th className="text-left py-3 sm:py-4 md:py-5 text-gray-900 font-bold text-sm sm:text-base md:text-lg">
                        Type
                      </th>
                      <th className="text-left py-3 sm:py-4 md:py-5 text-gray-900 font-bold text-sm sm:text-base md:text-lg">
                        <div className="flex items-center gap-1 sm:gap-2">
                          <Ruler className="w-4 h-4 sm:w-5 sm:h-5 text-[#DAAA97]" />
                          <span className="hidden sm:inline">Total Area</span>
                          <span className="sm:hidden">Area</span>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100 hover:bg-[#DAAA97]/5 transition-colors">
                      <td className="py-3 sm:py-4 md:py-5 font-semibold text-sm sm:text-base md:text-lg">2 Bedroom</td>
                      <td className="py-3 sm:py-4 md:py-5 text-gray-700 text-xs sm:text-sm md:text-base lg:text-lg">
                        980 - 1,483 sq. ft.
                      </td>
                    </tr>
                    <tr className="hover:bg-[#DAAA97]/5 transition-colors">
                      <td className="py-3 sm:py-4 md:py-5 font-semibold text-sm sm:text-base md:text-lg">3 Bedroom</td>
                      <td className="py-3 sm:py-4 md:py-5 text-gray-700 text-xs sm:text-sm md:text-base lg:text-lg">
                        1,808 - 1,902 sq. ft.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <DownloadFloorPlanModal>
                <Button className="w-full mt-6 sm:mt-8 md:mt-10 bg-linear-to-r from-[#DAAA97] to-[#c99a87] hover:from-[#e5baa7] hover:to-[#d9aa97] text-white py-5 sm:py-6 md:py-7 text-sm sm:text-base md:text-lg font-bold flex items-center justify-center gap-2 sm:gap-3 shadow-2xl hover:shadow-[#DAAA97]/50 transition-all duration-500 hover:scale-105 rounded-[4px]">
                  <Download className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                  Download Floor Plan
                </Button>
              </DownloadFloorPlanModal>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
