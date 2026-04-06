type JessStickyNavProps = {
  activePage: 'overview' | 'course-modules' | 'instructor' | 'class-schedule';
};

const navItems = [
  { key: 'overview',       label: 'Overview',       href: '/jess/leadership-training.html' },
  { key: 'course-modules', label: 'Course Modules',  href: '/jess/course-modules.html' },
  { key: 'instructor',     label: 'Instructor',      href: '/jess/instructor.html' },
  { key: 'class-schedule', label: 'Class Schedule',  href: '/jess/class-schedule.html' },
] as const;

const ctaSources: Record<JessStickyNavProps['activePage'], string> = {
  'overview':       'jess-leadership-training',
  'course-modules': 'jess-course-modules',
  'instructor':     'jess-instructor',
  'class-schedule': 'jess-class-schedule',
};

export function JessStickyNav({ activePage }: JessStickyNavProps) {
  const ctaHref = `/contactus.html?source=${ctaSources[activePage]}&cta=sticky-nav#contact-form`;

  return (
    <div className="sticky top-[72px] z-40 bg-[#0F1724] border-b border-slate-700/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Row 1: nav links + desktop CTA */}
        <div className="flex items-center">
          <nav className="flex gap-6 sm:gap-10 flex-1 min-w-0">
            {navItems.map(({ key, label, href }) => {
              const isActive = key === activePage;
              return isActive ? (
                <span
                  key={key}
                  className="relative py-4 text-sm font-medium text-white whitespace-nowrap flex-shrink-0"
                >
                  {label}
                  <div className="absolute bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500" />
                </span>
              ) : (
                <a
                  key={key}
                  href={href}
                  className="relative py-4 text-sm font-medium transition-colors text-slate-400 hover:text-white whitespace-nowrap flex-shrink-0"
                >
                  {label}
                </a>
              );
            })}
          </nav>
          {/* Desktop only CTA */}
          <a
            href={ctaHref}
            className="hidden lg:inline-flex ml-4 flex-shrink-0 px-4 py-2 text-white text-sm font-semibold rounded-lg whitespace-nowrap"
            style={{ background: 'linear-gradient(to right,#3b82f6,#06b6d4)' }}
          >
            Book a Seat →
          </a>
        </div>
        {/* Row 2: mobile CTA only */}
        <div className="lg:hidden pb-3 flex justify-start">
          <a
            href={ctaHref}
            className="px-6 py-2 text-white text-sm font-semibold rounded-lg whitespace-nowrap"
            style={{ background: 'linear-gradient(to right,#3b82f6,#06b6d4)' }}
          >
            Book a Seat →
          </a>
        </div>
      </div>
    </div>
  );
}
