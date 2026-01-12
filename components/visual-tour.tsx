"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function VisualTour() {
  const [activeTab, setActiveTab] = useState<"exterior" | "interior" | "amenities">("exterior")
  const [isVisible, setIsVisible] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
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

  useEffect(() => {
    setCurrentIndex(0)
  }, [activeTab])

  const exteriorImages = [
    { src: "/exterior-1.jpg", alt: "Podium View" },
    { src: "/exterior-2.webp", alt: "Amenities View" },
    // { src: "/exterior-3.webp", alt: "Exterior View 3" },
    // { src: "/exterior-4.webp", alt: "Exterior View 4" },
    { src: "/exterior-5.webp", alt: "Seaview from Balcony" },
    // { src: "/exterior-6.webp", alt: "Exterior View 6" },
    { src: "/exterior-7.webp", alt: "Front Facade" },
    // { src: "/exterior-8.webp", alt: "Exterior View 8" },
  ]

  const interiorImages = [
    { src: "/Interior-01.webp", alt: "3 BR - Bedroom" },
    { src: "/Interior-02.webp", alt: "3 BR - Living Room" },
    { src: "/Interior-03.webp", alt: "3 BR - Bathroom" },
    { src: "/Interior-04.webp", alt: "3 BR - Dining Area and Living Room" },
    { src: "/Interior-05.webp", alt: "2 BR - Bedroom" },
    { src: "/Interior-06.webp", alt: "2 BR - Living Room" },
    { src: "/Interior-07.webp", alt: "2 BR - Entrance Lobby" },
    { src: "/Interior-08.webp", alt: "2 BR - Bathroom" },
    { src: "/Interior-09.webp", alt: "Living Room" },
    // { src: "/Interior-10.webp", alt: "Interior View 10" },
    // { src: "/Interior-11.webp", alt: "Interior View 11" },
    // { src: "/Interior-12.webp", alt: "Interior View 12" },
  ]

  // Amenities tab: show actual images from public/
  const amenitiesImages = [
    { src: "/aminities-1.webp", alt: "Seaview Rooftop Infinity Pool" },
    { src: "/aminities-2.webp", alt: "Balcony Jacuzzi" },
    { src: "/aminities-3.webp", alt: "Rooftop Lounge" },
    { src: "/aminities-4.webp", alt: "10th Floor Private Courtyard" },
    { src: "/aminities-5.webp", alt: "Podium Infinity Pool" },
    { src: "/aminities-6.webp", alt: "Bamboo Oxygen Park" },
    { src: "/aminities-7.webp", alt: "Male / Female Spa" },
    { src: "/aminities-8.webp", alt: "Indoor Gym" },
    { src: "/exterior-3.webp", alt: "Wall Climbing" },
  ];

  const images = activeTab === "exterior" ? exteriorImages : activeTab === "interior" ? interiorImages : amenitiesImages;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }


  return (
    <section ref={sectionRef} className=" pb-[80px] md:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2
          className={`text-xl sm:text-3xl md:text-4xl font-bold text-center mb-10 md:mb-16 lg:mb-20 leading-tight text-gray-900 transition-all duration-1000 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          Explore Treppan Serenique Residences
        </h2>

        <div
          className={`flex justify-center gap-3 md:gap-4 mb-12 md:mb-16 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
        >
          <Button
            onClick={() => setActiveTab("exterior")}
            variant={activeTab === "exterior" ? "default" : "outline"}
            className={`px-6 md:px-8 py-5 md:py-6 text-sm md:text-base transition-all duration-300 transform hover:scale-105 ${activeTab === "exterior"
              ? "bg-[#DAAA97] hover:bg-[#c99a87] text-white shadow-lg shadow-[#DAAA97]/30"
              : "text-gray-700 hover:border-[#DAAA97] hover:text-[#DAAA97]"
              }`}
          >
            Exterior
          </Button>
          <Button
            onClick={() => setActiveTab("interior")}
            variant={activeTab === "interior" ? "default" : "outline"}
            className={`px-6 md:px-8 py-5 md:py-6 text-sm md:text-base transition-all duration-300 transform hover:scale-105 ${activeTab === "interior"
              ? "bg-[#DAAA97] hover:bg-[#c99a87] text-white shadow-lg shadow-[#DAAA97]/30"
              : "text-gray-700 hover:border-[#DAAA97] hover:text-[#DAAA97]"
              }`}
          >
            Interior
          </Button>
          <Button
            onClick={() => setActiveTab("amenities")}
            variant={activeTab === "amenities" ? "default" : "outline"}
            className={`px-6 md:px-8 py-5 md:py-6 text-sm md:text-base transition-all duration-300 transform hover:scale-105 ${activeTab === "amenities"
              ? "bg-[#DAAA97] hover:bg-[#c99a87] text-white shadow-lg shadow-[#DAAA97]/30"
              : "text-gray-700 hover:border-[#DAAA97] hover:text-[#DAAA97]"
              }`}
          >
            Amenities
          </Button>
        </div>

        <div className="max-w-6xl mx-auto relative">
          <div className="relative aspect-video rounded-xl md:rounded-[4px] overflow-hidden shadow-2xl">
            <Image
              src={images[currentIndex].src || "/placeholder.svg"}
              alt={images[currentIndex].alt}
              fill
              className="object-cover"
            />

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 md:p-3 rounded-[4px] shadow-lg transition-all duration-300 hover:scale-110 z-10"
            >
              <ChevronLeft className="w-4 h-4 md:w-6 md:h-6 text-gray-800" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 md:p-3 rounded-[4px] shadow-lg transition-all duration-300 hover:scale-110 z-10"
            >
              <ChevronRight className="w-4 h-4 md:w-6 md:h-6 text-gray-800" />
            </button>

            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

            {/* Image caption */}
            <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 text-white z-10">
              <p className="text-lg md:text-2xl font-bold drop-shadow-lg">{images[currentIndex].alt}</p>
              <p className="text-xs md:text-sm text-white/80">
                {currentIndex + 1} / {images.length}
              </p>
            </div>
          </div>

          {/* Thumbnail dots */}
          <div className="flex justify-center gap-2 mt-6">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 md:h-3 rounded-[4px] transition-all duration-300 ${index === currentIndex ? "bg-[#DAAA97] w-8 md:w-10" : "bg-gray-300 w-2 md:w-3 hover:bg-gray-400"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
