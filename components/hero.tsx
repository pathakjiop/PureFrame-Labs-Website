"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function Hero() {

  const [isOpen, setIsOpen] = useState(false)
  
    const handleSmoothScroll = (e, targetId) => {
      e.preventDefault()
      const element = document.querySelector(targetId)
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start"
        })
        setIsOpen(false) // Close mobile menu after clicking
      }
    }
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-background via-background to-muted/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-pretty">
                Strategic insights powered by data
              </h1>
              <p className="text-lg text-foreground/60 text-pretty">
                We combine expert insights with smart analytics to help you make confident decisions.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
               href="#contact"
               onClick={(e) => handleSmoothScroll(e, "#contact")}>
              <button className="px-6 py-3 bg-foreground text-background text-sm font-semibold rounded-md hover:bg-foreground/90 transition-colors">
                Schedule Consultation
              </button>
              </Link>
              <Link
               href="#services"
               onClick={(e) => handleSmoothScroll(e, "#services")}>
              <button className="px-6 py-3 border border-foreground/20 text-foreground text-sm font-semibold rounded-md hover:border-foreground/40 hover:bg-foreground/5 transition-colors">
                Learn More
              </button>
               </Link>
            </div>
          </div>
          {/* Visual Element */}
          <div className="hidden md:flex items-center justify-center">
            <div className="relative w-150 h-100 rounded-lg overflow-hidden">
              <Image 
                src="/assets/GD.png" 
                alt="Analytics visualization" 
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
