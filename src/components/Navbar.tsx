import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src="/images/hilios/logo.svg" alt="HiliosAI Logo" className="h-10" />
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/team" className="text-gray-700 hover:text-primary font-medium">
              Team
            </Link>
            <Link to="/features" className="text-gray-700 hover:text-primary font-medium">
              Integration
            </Link>
            <Link to="/pricing" className="text-gray-700 hover:text-primary font-medium">
              Pricing
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-primary font-medium">
              Contact
            </Link>
            <Link to="/blog" className="text-gray-700 hover:text-primary font-medium">
              Blog
            </Link>
          </div>
          
          {/* Contact Sales Button */}
          <div className="hidden md:block">
            <Link to="/contact" className="btn-primary">
              Contact Sales
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-700"
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
            <Link to="/team" className="block text-gray-700 hover:text-primary">
              Team
            </Link>
            <Link to="/features" className="block text-gray-700 hover:text-primary">
              Integration
            </Link>
            <Link to="/pricing" className="block text-gray-700 hover:text-primary">
              Pricing
            </Link>
            <Link to="/contact" className="block text-gray-700 hover:text-primary">
              Contact
            </Link>
            <Link to="/blog" className="block text-gray-700 hover:text-primary">
              Blog
            </Link>
            <Link to="/contact" className="block btn-primary text-center mt-6">
              Contact Sales
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
} 