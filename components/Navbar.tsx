'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm">
      <div className="container-custom py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary">
              Hilios
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-600 hover:text-primary">
              Home
            </Link>
            <Link href="/features" className="text-gray-600 hover:text-primary">
              Features
            </Link>
            <Link href="/pricing" className="text-gray-600 hover:text-primary">
              Pricing
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-primary">
              Contact
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <Link href="/" className="block text-gray-600 hover:text-primary">
              Home
            </Link>
            <Link href="/features" className="block text-gray-600 hover:text-primary">
              Features
            </Link>
            <Link href="/pricing" className="block text-gray-600 hover:text-primary">
              Pricing
            </Link>
            <Link href="/contact" className="block text-gray-600 hover:text-primary">
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
} 