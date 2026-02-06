import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "@/site/components/teamworks/ImageWithFallback";

export function HeroSectionV2() {
  return (
    <section className="relative bg-white">
      {/* Ultra Clean Hero */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[90vh] py-20">
          {/* Left: Minimal Text */}
          <div className="max-w-xl">
            <div className="mb-8">
              <div className="inline-block text-xs tracking-[0.2em] uppercase text-gray-500 mb-6">
                TeamWorks Training Program
              </div>
              <h1 className="text-5xl lg:text-7xl leading-[1.1] mb-6 tracking-tight">
                Transform how your team works — in just two days
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-10">
                TeamWorks is a practical training system designed for SMEs to build aligned teams, improve execution, and deliver better results — without adding complexity or bureaucracy.
              </p>
            </div>

            {/* Course Info Cards */}
            <div className="bg-gray-50 rounded-2xl p-6 mb-8">
              <div className="grid grid-cols-3 gap-6">
                {/* Students */}
                <div className="text-center">
                  <div className="text-2xl font-semibold text-gray-900 mb-1">5K+</div>
                  <div className="text-xs text-gray-600">Students</div>
                </div>
                
                {/* Hands-On */}
                <div className="text-center">
                  <div className="text-2xl font-semibold text-gray-900 mb-1">60%</div>
                  <div className="text-xs text-gray-600">Hands-On</div>
                </div>
                
                {/* HRD Funding */}
                <div className="text-center">
                  <div className="text-2xl font-semibold text-gray-900 mb-1">100%</div>
                  <div className="text-xs text-gray-600">HRD Claimable</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#courses" className="bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-all inline-flex items-center justify-center gap-2 group">
                <span>Explore Our Courses</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#/teamworks/bookConsultation.html"
                className="border-2 border-gray-300 text-gray-900 px-8 py-4 rounded-full hover:border-black transition-all text-center"
              >
                Talk to Us
              </a>
            </div>
          </div>

          {/* Right: Large Clean Image */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
              <ImageWithFallback
                src="https://i.postimg.cc/65PR8Kdb/Two-young-asian-ladies-discussing-and-standing-smiling-vibrant-colours-with-white-background.jpg"
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-6 max-w-[200px]">
              <div className="flex flex-col items-center text-center gap-3">
                <img 
                  src="https://www.ideavit.co/web/image/996-da30adeb/HRD-Corp-Claimable-Logo-1024x1024-removebg-preview.webp" 
                  alt="HRD Corp Claimable" 
                  className="w-24 h-24 object-contain"
                />
                <div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">100%</div>
                  <div className="text-xs text-gray-600 font-medium">HRD Claimable</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}