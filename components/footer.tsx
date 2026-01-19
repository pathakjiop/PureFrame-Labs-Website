"use client"
import { useState } from "react"
import Image from "next/image"
import { LogoIcon } from "./Logo"

export default function Footer() {

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
<footer className="bg-foreground text-background border-t border-border/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          
          {/* LOGO SECTION */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/assets/lighthome.svg"
                alt="PureFrame Labs logo"
                width={28}
                height={28}
                className="invert" 
              />
              <span className="font-semibold">PureFrame Labs</span>
            </div>

            <p className="text-sm text-background/60">
              Strategic consulting and analytics solutions for enterprise growth.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <a 
                href="#services" 
                onClick={(e) => handleSmoothScroll(e, "#services")}
                className="hover:text-background transition-colors">
                  Business Analytics
                </a>
              </li>
              <li>
                <a 
                href="#services" 
                onClick={(e) => handleSmoothScroll(e, "#services")}
                className="hover:text-background transition-colors">
                  Process Optimization
                </a>
              </li>
              <li>
                <a 
                href="#services" 
                onClick={(e) => handleSmoothScroll(e, "#services")}
                className="hover:text-background transition-colors">
                  Real Estate Intelligence
                </a>
              </li>
              <li>
                <a href="#services" 
                onClick={(e) => handleSmoothScroll(e, "#services")}
                className="hover:text-background transition-colors">
                  Performance Analytics
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <a href="/" className="hover:text-background transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#services"
                onClick={(e) => handleSmoothScroll(e, "#services")}
                className="hover:text-background transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact"
               onClick={(e) => handleSmoothScroll(e, "#contact")}
                className="hover:text-background transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <a
                href="mailto:pureframelabs@gmail.com"
                className="hover:text-background transition-colors">
                 pureframelabs@gmail.com
                </a>
              </li>
              <li>
                <a
                href="tel:+91 9529988048 "
                className="hover:text-background transition-colors">
                  +91 9529988048
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Talao Road, Shriram Nagar, Khamgaon<br></br>PinCode-444203, Maharashtra
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-background/10">
          <p className="text-sm text-background/60">© 2026 PureFrame Labs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
