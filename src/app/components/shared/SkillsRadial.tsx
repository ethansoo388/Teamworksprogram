import type { SkillItem } from "@/types";

interface SkillsRadialProps {
  skills: SkillItem[];
}

export function SkillsRadial({ skills }: SkillsRadialProps) {
  return (
    <div>
      {/* Mobile Grid Layout */}
      <div className="md:hidden">
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center justify-center bg-blue-50 text-[#0EA7E9] px-6 py-3 rounded-full shadow-lg">
            <span className="text-base font-bold">AI Capability</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto px-4">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white border-2 border-gray-200 rounded-xl px-4 py-4 shadow-md">
              <p className="text-gray-900 text-sm font-medium leading-snug mb-2">{skill.title}</p>
              <p className="text-gray-500 text-xs leading-relaxed">{skill.details}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Radial Layout */}
      <div className="hidden md:block relative max-w-6xl mx-auto min-h-[500px] py-8">
        <div className="absolute z-20 w-32 h-32 rounded-full bg-blue-50 flex items-center justify-center shadow-xl left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <span className="text-[#0EA7E9] text-xl font-bold text-center leading-tight px-2">AI<br/>Capability</span>
        </div>
        <div className="absolute w-[700px] h-[400px] rounded-full border border-gray-100 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>

        <div className="relative w-full h-[500px]">
          {skills.map((skill, index) => {
            const angle = (index * 360) / skills.length - 90;
            const radiusX = 350;
            const radiusY = 200;
            let x = Math.cos((angle * Math.PI) / 180) * radiusX;
            let y = Math.sin((angle * Math.PI) / 180) * radiusY;

            if (index === 3) {
              y = y + 30;
            }

            return (
              <div key={index}>
                <svg
                  className="absolute left-1/2 top-1/2 pointer-events-none z-0"
                  style={{
                    width: radiusX * 2,
                    height: radiusY * 2,
                    marginLeft: -radiusX,
                    marginTop: -radiusY,
                  }}
                >
                  <line
                    x1={radiusX}
                    y1={radiusY}
                    x2={radiusX + x}
                    y2={radiusY + y}
                    stroke="#d1d5db"
                    strokeWidth="2"
                  />
                </svg>
                <div
                  className="absolute z-10"
                  style={{
                    left: "50%",
                    top: "50%",
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                  }}
                >
                  <div className="relative bg-white border-2 border-gray-200 hover:border-[#0EA7E9] rounded-xl px-6 py-4 shadow-md hover:shadow-xl transition-all duration-300">
                    <p className="text-gray-900 text-lg font-medium whitespace-nowrap">{skill.title}</p>
                    <p className="text-gray-500 text-sm mt-1">{skill.details}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
