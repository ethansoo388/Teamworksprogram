import type { PersonaCard } from "@/types";

interface PersonaCardsProps {
  personas: PersonaCard[];
}

export function PersonaCards({ personas }: PersonaCardsProps) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
      {personas.map((persona, index) => {
        const Icon = persona.icon;
        return (
          <div key={index} className="border-2 hover: transition-colors text-center rounded-xl bg-white overflow-hidden">
            <div className="pb-2 sm:pb-6 pt-6 px-4">
              <div className={`w-10 h-10 sm:w-16 sm:h-16 mx-auto rounded-full flex items-center justify-center ${persona.color} mb-2 sm:mb-4`}>
                <Icon className="h-5 w-5 sm:h-8 sm:w-8" />
              </div>
              <h3 className="text-sm sm:text-lg font-semibold text-gray-900">{persona.title}</h3>
            </div>
            <div className="pt-0 pb-3 sm:pb-6 px-4">
              <p className="text-xs sm:text-base text-gray-500">
                {persona.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
