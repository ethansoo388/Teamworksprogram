export function AboutHero() {
  return (
    <div className="bg-white relative w-full py-20" data-name="Section">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="flex flex-col gap-6">
            <div className="h-1 w-12 bg-[#06c]" />
            <div className="flex flex-col gap-4">
              <h1 className="text-6xl font-light text-[#101828] leading-tight tracking-[-1.2px]">
                We Fix How
              </h1>
              <h1 className="text-6xl font-light text-[#06c] leading-tight tracking-[-1.2px]">
                Work Gets Done
              </h1>
            </div>
            <p className="text-lg font-light text-[#4a5565] leading-relaxed">
              CI Agile helps organizations move faster, deliver better outcomes, and build teams that don't burn out.
            </p>
          </div>

          {/* Right side - Image */}
          <div className="flex justify-center lg:justify-end">
            <img 
              src="https://images.unsplash.com/photo-1768796370577-c6e8b708b980?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjB3b3Jrc2hvcCUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzY5MzUyOTk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
              alt="Team collaboration and workshop" 
              className="w-full max-w-md h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
