import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { ImageWithFallback } from "@/shared/ImageWithFallback";
import type { InvestmentCard } from "@/types";

interface InvestmentGridProps {
  investments: InvestmentCard[];
}

export function InvestmentGrid({ investments }: InvestmentGridProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="px-4 sm:px-6 lg:px-16 xl:px-32">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-20 max-w-7xl mx-auto items-start">
        {investments.map((investment, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`bg-white border-2 border-gray-100 rounded-xl overflow-hidden transition-all duration-300 self-start ${
                isOpen ? "shadow-xl" : "shadow-sm hover:shadow-md"
              }`}
            >
              <div className="p-4 sm:p-8 flex items-center justify-start border-b border-gray-100">
                <ImageWithFallback
                  src={investment.logo}
                  alt={`${investment.company} logo`}
                  className="h-6 w-auto max-w-[80px] object-contain object-left"
                />
              </div>
              <div className="p-4 sm:p-6 text-left">
                <p className="text-3xl text-[#0EA7E9] mb-2">{investment.amount}</p>
                <p className="text-xs text-gray-500 mb-1">invested in {investment.year}</p>
                <p className="text-sm text-gray-700 font-medium mb-4">{investment.focus}</p>

                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex items-center gap-2 text-sm text-[#0EA7E9] hover:text-[#0c87bb] transition-colors w-full"
                >
                  <span className="font-medium">Learn more</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                </button>

                <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-48 mt-4" : "max-h-0"}`}>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {investment.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
