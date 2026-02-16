import { Sparkles } from "lucide-react";
import type { CourseModule } from "@/types";

interface CourseModulesGridProps {
  modules: CourseModule[];
}

export function CourseModulesGrid({ modules }: CourseModulesGridProps) {
  return (
    <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
      {modules.map((module) => (
        <div
          key={module.number}
          className="group relative bg-white rounded-3xl p-8 border-2 border-gray-200 hover:border-[#0EA7E9]/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#0EA7E9]/5 via-transparent to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative">
            <div className="flex items-start justify-between mb-6">
              <div className="text-6xl text-[#0EA7E9]/30 group-hover:text-[#0EA7E9]/50 transition-colors">
                {module.number}
              </div>
            </div>
            <h3 className="text-2xl text-gray-900 mb-3 leading-tight">
              {module.title}
            </h3>
            <div className="inline-flex items-center gap-1.5 bg-[#0EA7E9]/10 text-[#0EA7E9] px-3 py-1.5 rounded-full text-sm mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              {module.highlight}
            </div>
            <p className="text-gray-600 leading-relaxed">
              {module.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
