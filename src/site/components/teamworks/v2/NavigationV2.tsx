import { Menu, X } from "lucide-react";
import { useState } from "react";

export function NavigationV2() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="text-2xl tracking-tight font-semibold">TeamWorks</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#courses" className="text-sm hover:text-gray-600 transition-colors">
              Courses
            </a>
            <a href="#impact" className="text-sm hover:text-gray-600 transition-colors">
              Results
            </a>
            <a href="#pricing" className="text-sm hover:text-gray-600 transition-colors">
              Pricing
            </a>
            <a href="#testimonials" className="text-sm hover:text-gray-600 transition-colors">
              Testimonials
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a href="bookConsultation.html" className="bg-black text-white px-6 py-2.5 rounded-full text-sm hover:bg-gray-800 transition-colors">
              Book Consultation
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            id="mobile-menu-btn"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <span className={isOpen ? "hidden" : "block"} id="mobile-menu-icon" aria-hidden="true">
              <Menu className="w-6 h-6" />
            </span>
            <span className={isOpen ? "block" : "hidden"} id="mobile-menu-close-icon" aria-hidden="true">
              <X className="w-6 h-6" />
            </span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={`md:hidden py-6 border-t border-gray-200 ${isOpen ? "" : "hidden"}`}
        >
          <div className="flex flex-col gap-4">
            <a href="#courses" className="text-sm py-2">
              Courses
            </a>
            <a href="#impact" className="text-sm py-2">
              Results
            </a>
            <a href="#pricing" className="text-sm py-2">
              Pricing
            </a>
            <a href="#testimonials" className="text-sm py-2">
              Testimonials
            </a>
            <a href="bookConsultation.html" className="bg-black text-white px-6 py-3 rounded-full text-sm mt-2 text-center">
              Book Consultation
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}