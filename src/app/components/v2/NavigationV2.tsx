import { Menu, X } from "lucide-react";
import { useState } from "react";

export function NavigationV2() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="text-2xl tracking-tight">TeamWorks</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#courses" className="text-sm hover:text-gray-600 transition-colors">
              Courses
            </a>
            <a href="#impact" className="text-sm hover:text-gray-600 transition-colors">
              Impact
            </a>
            <a href="#testimonials" className="text-sm hover:text-gray-600 transition-colors">
              Testimonials
            </a>
            <a href="#pricing" className="text-sm hover:text-gray-600 transition-colors">
              Pricing
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-black text-white px-6 py-2.5 rounded-full text-sm hover:bg-gray-800 transition-colors">
              Book Consultation
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-6 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              <a href="#courses" className="text-sm py-2" onClick={() => setIsOpen(false)}>
                Courses
              </a>
              <a href="#impact" className="text-sm py-2" onClick={() => setIsOpen(false)}>
                Impact
              </a>
              <a href="#testimonials" className="text-sm py-2" onClick={() => setIsOpen(false)}>
                Testimonials
              </a>
              <a href="#pricing" className="text-sm py-2" onClick={() => setIsOpen(false)}>
                Pricing
              </a>
              <button className="bg-black text-white px-6 py-3 rounded-full text-sm mt-2">
                Book Consultation
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
