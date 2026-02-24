export function MetricsSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div
          className="grid grid-cols-1 sm:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
              500+
            </div>
            <div className="text-slate-400">Enterprises & leadership teams transformed</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
              50+
            </div>
            <div className="text-slate-400">Countries with active JESS adoption</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
              95%
            </div>
            <div className="text-slate-400">Leaders reporting improved execution confidence</div>
          </div>
        </div>
      </div>
    </section>
  );
}
