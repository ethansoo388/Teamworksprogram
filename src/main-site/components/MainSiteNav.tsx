// Main site navigation component
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

export function MainSiteNav() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a href="index.html" className="flex items-center">
              <ImageWithFallback 
                src="https://i.postimg.cc/C155yBn1/white-bg-big.jpg" 
                alt="CI Agile Logo" 
                className="h-12"
              />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="index.html" className="text-sm hover:text-gray-600 transition-colors">
              Home
            </a>
            <a href="aboutus.html" className="text-sm hover:text-gray-600 transition-colors">
              About Us
            </a>
            <a href="teamworks/index.html" className="text-sm hover:text-gray-600 transition-colors">
              TeamWorks
            </a>
            <a href="contactus.html" className="text-sm hover:text-gray-600 transition-colors">
              Contact
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a 
              href="contactus.html" 
              className="bg-black text-white px-6 py-2.5 rounded-full text-sm hover:bg-gray-800 transition-colors"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}