import { Plus, X } from "lucide-react";
interface ModalContent {
  title: string;
  sections: {
    type: 'paragraph' | 'list';
    content?: React.ReactNode;
    intro?: string;
    items?: string[];
  }[];
}

interface CardData {
  id: string;
  title: string;
  subtitle?: string;
  modalContent: ModalContent;
  gridClass: string;
}

const cardsData: CardData[] = [
  {
    id: "ai-driven",
    title: "High Performance",
    subtitle: "Agile Leader",
    modalContent: {
      title: "High Performance Agile Leader",
      sections: [
        {
          type: 'paragraph',
          content: (
            <>
              High performance comes from how leaders <strong>design the system around it</strong>.
            </>
          )
        },
        {
          type: 'paragraph',
          content: (
            <>
              Teams cannot become hyper-productive in isolation.
              <br />
              Without aligned leadership, clear decision rights, and outcome-driven priorities, productivity gains remain local and temporary.
            </>
          )
        },
        {
          type: 'paragraph',
          content: (
            <>
              This program helps leaders understand how <strong>enterprise-level patterns</strong> create sustained performance — not through pressure, but through system design.
            </>
          )
        },
        {
          type: 'list',
          intro: 'The goal is not speed for its own sake, but a system capable of:',
          items: [
            '<strong>Scaling productivity across teams</strong>',
            '<strong>Maintaining quality under growth</strong>',
            '<strong>Adapting faster as complexity increases</strong>'
          ]
        },
        {
          type: 'paragraph',
          content: (
            <em>This is how performance becomes predictable, not heroic.</em>
          )
        }
      ]
    },
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    id: "hyper-productivity",
    title: "Leading",
    subtitle: "Hyper-Productive Team",
    modalContent: {
      title: "Leading Hyper-productive Team",
      sections: [
        {
          type: 'paragraph',
          content: (
            <>
              Most general-purpose AI tools do not understand how Scrum works in real enterprises. Used incorrectly, they <strong>amplify bad practices instead of fixing them</strong>.
            </>
          )
        },
        {
          type: 'paragraph',
          content: (
            <>
              Industry data shows that poorly implemented Scrum leads to delayed delivery, budget overruns, and dissatisfied customers — not because teams are slow, but because the <strong>system guiding them is weak</strong>.
            </>
          )
        },
        {
          type: 'paragraph',
          content: (
            <>
              This program introduces AI that is grounded in <strong>True Scrum principles</strong>, inspired by <em>The Art of Doing Twice the Work in Half the Time</em>.
            </>
          )
        },
        {
          type: 'list',
          intro: 'Leaders learn how AI can:',
          items: [
            '"Reduce administrative overhead by over 90%"',
            '"Improve backlog quality and decision readiness"',
            '"Enable faster, more reliable execution — without increasing chaos"'
          ]
        },
        {
          type: 'paragraph',
          content: (
            <>
              The result is not "AI-powered teams," but a <strong>cleaner execution system leaders can trust</strong>.
            </>
          )
        },
        {
          type: 'paragraph',
          content: (
            <em>This is how leaders reduce noise before scaling execution.</em>
          )
        }
      ]
    },
    gridClass: "md:col-span-1 md:row-span-1",
  },
];

export function AIBenefitsCards() {
  return (
    <>
      <div data-reveal-group data-stagger="80" className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {cardsData.map((card, index) => (
          <div
            key={card.id}
            data-reveal-item className={`${card.gridClass} bg-slate-50 border border-slate-200 rounded-3xl p-8 relative md:pb-8 pb-6 group hover:bg-slate-100 transition-all flex flex-col`}
          >
            {/* Course Label */}
            <div className="mb-4">
              <span className="text-xs font-medium text-blue-600 uppercase tracking-widest">
                Course {index + 1}
              </span>
            </div>

            {/* Title Section */}
            <div className="mb-8">
              <h3 className="text-slate-900 text-2xl font-light mb-1">
                {card.title}
              </h3>
              {card.subtitle && (
                <h3 className="text-4xl font-light">
                  {card.subtitle.startsWith('AI-') ? (
                    <>
                      <span className="text-blue-600">AI</span>
                      <span className="text-slate-900">-{card.subtitle.slice(3)}</span>
                    </>
                  ) : (
                    <span className="text-slate-900">{card.subtitle}</span>
                  )}
                </h3>
              )}
            </div>

            {/* Bullet Points - Only for Course 1 */}
            {index === 0 && (
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2 text-slate-700 text-sm">
                  <span className="text-blue-600 mt-1">{'\u2022'}</span>
                  <span>Shift leadership from status updates to outcome ownership</span>
                </li>
                <li className="flex items-start gap-2 text-slate-700 text-sm">
                  <span className="text-blue-600 mt-1">{'\u2022'}</span>
                  <span>Enterprise agility by design aligning funding, governance and strategy.</span>
                </li>
                <li className="flex items-start gap-2 text-slate-700 text-sm">
                  <span className="text-blue-600 mt-1">{'\u2022'}</span>
                  <span>Clear decision rights across teams, products, and portfolios</span>
                </li>
              </ul>
            )}

            {/* Bullet Points - Only for Course 2 */}
            {index === 1 && (
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2 text-slate-700 text-sm">
                  <span className="text-blue-600 mt-1">{'\u2022'}</span>
                  <span>AI-driven execution system.</span>
                </li>
                <li className="flex items-start gap-2 text-slate-700 text-sm">
                  <span className="text-blue-600 mt-1">{'\u2022'}</span>
                  <span>System-wide Hyper-productive System</span>
                </li>
                <li className="flex items-start gap-2 text-slate-700 text-sm">
                  <span className="text-blue-600 mt-1">{'\u2022'}</span>
                  <span>A scalable path from pilot teams to enterprise transformation</span>
                </li>
              </ul>
            )}

            {/* Learn More Button */}
            <button
              data-modal-open={\`ai-modal-${card.id}\`}
              className="w-full md:w-auto md:absolute md:bottom-2 md:right-6 bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700 transition-all shadow-lg flex items-center justify-end md:justify-center gap-2 group/btn mt-auto"
              aria-label="Learn more"
            >
              <span className="text-sm font-medium ml-0 md:ml-0 text-left flex-1">Learn More</span>
              <Plus size={18} className="group-hover/btn:rotate-90 transition-transform duration-300" />
            </button>
          </div>
        ))}
      </div>

      {/* Modals */}
      {cardsData.map((card) => (
        <div key={card.id} data-modal id={`ai-modal-${card.id}`} className="hidden">
          {/* Backdrop */}
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50" data-modal-close />

          {/* Modal Content */}
          <div className="fixed inset-x-4 top-1/2 -translate-y-1/2 md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:w-full md:max-w-3xl z-50 max-h-[90vh] overflow-y-auto">
            <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-2xl relative">
              {/* Close Button */}
              <button
                data-modal-close
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-all"
                aria-label="Close"
              >
                <X size={20} className="text-slate-600" />
              </button>

              <div className="pr-8">
                <h3 className="text-2xl md:text-3xl font-light text-slate-900 mb-8 leading-tight">
                  {card.modalContent.title}
                </h3>

                <div className="space-y-6">
                  {card.modalContent.sections.map((section, index) => (
                    <div key={index}>
                      {section.type === 'paragraph' && (
                        <div className="border-l-4 border-slate-300 pl-6 py-1">
                          <p className="text-slate-900 text-base md:text-lg leading-relaxed">
                            {section.content}
                          </p>
                        </div>
                      )}

                      {section.type === 'list' && (
                        <div className="border-l-4 border-slate-300 pl-6 py-1">
                          {section.intro && (
                            <p className="text-slate-900 text-base md:text-lg leading-relaxed mb-3">
                              {section.intro}
                            </p>
                          )}
                          <ul className="space-y-2 ml-4">
                            {section.items?.map((item, itemIndex) => (
                              <li key={itemIndex} className="text-slate-900 text-base md:text-lg leading-relaxed list-disc">
                                <span dangerouslySetInnerHTML={{ __html: item }} />
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Register Button */}
                <div className="mt-8 pt-6 border-t border-slate-200">
                  <a
                    href="mailto:romanoff@ciagile.com?subject=JESS Learning Program Registration"
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-all"
                  >
                    Register me
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
