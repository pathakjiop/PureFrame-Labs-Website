"use client"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { LogoIcon } from "./Logo" 

export default function Header() {

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
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo Area */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
           <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g>
                  <path d="M22 22L2 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path>
                  <path d="M2 11L6.06296 7.74968M22 11L13.8741 4.49931C12.7784 3.62279 11.2216 3.62279 10.1259 4.49931L9.34398 5.12486" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path>
                  <path d="M15.5 5.5V3.5C15.5 3.22386 15.7239 3 16 3H18.5C18.7761 3 19 3.22386 19 3.5V8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path>
                  <path d="M4 22V9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path>
                  <path d="M20 9.5V13.5M20 22V17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path>
                  <path d="M15 22V17C15 15.5858 15 14.8787 14.5607 14.4393C14.1213 14 13.4142 14 12 14C10.5858 14 9.87868 14 9.43934 14.4393M9 22V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M14 9.5C14 10.6046 13.1046 11.5 12 11.5C10.8954 11.5 10 10.6046 10 9.5C10 8.39543 10.8954 7.5 12 7.5C13.1046 7.5 14 8.39543 14 9.5Z" stroke="currentColor" strokeWidth="1.5"></path>
                </g>
              </svg>
            <div className="flex flex-col leading-none">
              <span className="text-base font-bold tracking-tighter uppercase">
                PureFrame Labs
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            
            <Link
              href="#services"
              onClick={(e) => handleSmoothScroll(e, "#services")}
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors cursor-pointer"
            >
              Services
            </Link>
            <Link
              href="#approach"
              onClick={(e) => handleSmoothScroll(e, "#approach")}
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors cursor-pointer"
            >
              Approach
            </Link>
            <Link
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, "#contact")}
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors cursor-pointer"
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <button 
              onClick={(e) => handleSmoothScroll(e, "#contact")}
              className="px-5 py-2 bg-foreground text-background text-sm font-medium rounded-md hover:bg-foreground/90 transition-colors"
            >
              Let's Talk
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-4 border-t border-border pt-4">
            <Link 
              href="#services" 
              onClick={(e) => handleSmoothScroll(e, "#services")}
              className="text-sm font-medium text-foreground/70 hover:text-foreground cursor-pointer"
            >
              Services
            </Link>
            <Link 
              href="#approach" 
              onClick={(e) => handleSmoothScroll(e, "#approach")}
              className="text-sm font-medium text-foreground/70 hover:text-foreground cursor-pointer"
            >
              Approach
            </Link>
            <Link 
              href="#contact" 
              onClick={(e) => handleSmoothScroll(e, "#contact")}
              className="text-sm font-medium text-foreground/70 hover:text-foreground cursor-pointer"
            >
              Contact
            </Link>
            <button 
              onClick={(e) => handleSmoothScroll(e, "#contact")}
              className="w-full px-4 py-2 bg-foreground text-background text-sm font-medium rounded-md hover:bg-foreground/90"
            >
              Let's Talk
            </button>
          </nav>
        )}
      </div>
    </header>
  )
}