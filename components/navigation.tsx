"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="RaghuVatsal Logo" width={40} height={40} className="h-10 w-auto" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">

            <Link href="#services" className="text-sm font-medium hover:text-accent transition-colors">
              Services
            </Link>

            <Link href="#courses" className="text-sm font-medium hover:text-accent transition-colors">
              Courses
            </Link>

             <Link href="/portfolio" className="text-sm font-medium hover:text-accent transition-colors">
              Portfolio
            </Link>



            <Link href="#contact" className="text-sm font-medium hover:text-accent transition-colors">
              Contact
            </Link>

          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link href="#services" className="block px-2 py-2 text-sm hover:text-accent transition-colors">
              Services
            </Link>
            <Link href="#courses" className="block px-2 py-2 text-sm hover:text-accent transition-colors">
              Courses
            </Link>

              <Link href="/portfolio" className="block px-2 py-2 text-sm hover:text-accent transition-colors">
                Portfolio
              </Link>


            <Link href="#contact" className="block px-2 py-2 text-sm hover:text-accent transition-colors">
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
