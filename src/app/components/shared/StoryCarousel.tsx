import { Sparkles, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "@/shared/ImageWithFallback";
import type { StorySlide } from "@/types";

interface StoryCarouselProps {
  stories: StorySlide[];
}

export function StoryCarousel({ stories }: StoryCarouselProps) {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="relative" data-tw05-carousel>
        {stories.map((story, index) => (
          <div
            key={index}
            data-tw05-slide
            data-index={index}
            className={`transition-opacity duration-600 ${index === 0 ? "block opacity-100" : "hidden opacity-0"}`}
          >
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center px-4">
              {/* Image */}
              <div className="relative order-1 mb-12 lg:mb-8">
                <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
                  <ImageWithFallback
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 right-4 bg-white px-6 py-3 rounded-xl border-2 border-[#0EA7E9] shadow-lg">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#0EA7E9]" />
                    <span className="text-sm font-medium text-gray-900">{story.emotion}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="order-2 space-y-6">
                <div>
                  <Quote className="w-10 h-10 text-[#0EA7E9]/20 mb-4" />
                  <h3 className="text-2xl lg:text-3xl text-gray-900 mb-4 leading-tight">
                    {story.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    {story.story}
                  </p>
                  <div className="bg-[#0EA7E9]/5 border-l-4 border-[#0EA7E9] px-5 py-4 rounded-r-lg">
                    <p className="text-base font-medium text-gray-900">
                      {story.highlight}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation */}
        <div className="mt-12 space-y-4">
          {/* Controls row: prev, dots, next */}
          <div className="flex items-center justify-center gap-4">
            <button
              type="button"
              data-tw05-prev
              className="w-10 h-10 rounded-full bg-white border-2 border-gray-200 hover:border-[#0EA7E9] hover:bg-[#0EA7E9] text-gray-600 hover:text-white transition-all duration-300 flex items-center justify-center shadow-sm hover:shadow-md"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2.5">
              {stories.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  data-tw05-dot
                  data-index={index}
                  className={`transition-all duration-300 rounded-full ${
                    index === 0
                      ? "w-8 h-2 bg-[#0EA7E9]"
                      : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              data-tw05-next
              className="w-10 h-10 rounded-full bg-white border-2 border-gray-200 hover:border-[#0EA7E9] hover:bg-[#0EA7E9] text-gray-600 hover:text-white transition-all duration-300 flex items-center justify-center shadow-sm hover:shadow-md"
              aria-label="Next slide"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Progress bar — separated below controls */}
          <div className="mx-auto w-48 h-1 bg-gray-200 rounded-full overflow-hidden">
            <div
              data-tw05-progress
              className="h-full bg-[#0EA7E9] rounded-full origin-left"
              style={{ transform: "scaleX(0)" }}
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
