export function OurImpactV2() {
  const impacts = [
    {
      number: "5,000+",
      label: "Professionals trained across Southeast Asia"
    },
    {
      number: "60%",
      label: "Of course time spent on hands-on activities"
    },
    {
      number: "2 weeks",
      label: "Average time to see measurable improvements"
    },
    {
      number: "10+ years",
      label: "Combined instructor experience"
    }
  ];

  return (
    <section id="impact" className="py-32 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header - Apollo Style */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="text-xs tracking-[0.2em] uppercase text-gray-500 mb-4">
            OUR RESULTS
          </div>
          <h2 className="text-4xl lg:text-6xl leading-[1.1] tracking-tight mb-6">
            Proven results across the region
          </h2>
          <p className="text-lg text-gray-600">
            Trusted by SME and enterprise teams across Southeast Asia to improve teamwork, delivery, and decision-making.
          </p>
        </div>

        {/* Impact Grid - Clean and Minimal */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {impacts.map((impact, index) => (
            <div key={index} className="text-center">
              <div className="text-6xl lg:text-7xl mb-4 tracking-tight font-bold">
                {impact.number}
              </div>
              <div className="text-sm text-gray-600 leading-relaxed max-w-[200px] mx-auto">
                {impact.label}
              </div>
            </div>
          ))}
        </div>

        {/* Location Badges - Minimal */}
        <div className="mt-20 flex flex-wrap justify-center gap-4">
          {['Malaysia', 'Singapore', 'Indonesia', 'Thailand'].map((location, index) => (
            <div 
              key={index}
              className="px-6 py-3 border border-gray-300 rounded-full text-sm"
            >
              {location}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}