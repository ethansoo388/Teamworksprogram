import { MainSiteNavigation } from "@/site/components/main/MainSiteNavigation";
import { MainSiteFooter } from "@/site/components/main/MainSiteFooter";

export function InstructorPage() {

  return (
    <div className="min-h-screen bg-white">
      <MainSiteNavigation />
      
      {/* Hero Section */}
      <section className="relative bg-slate-800 py-16 sm:py-20 lg:py-24 border-t-4 border-amber-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-3 text-base mb-8">
            <a
              href="leadership-training.html"
              className="text-slate-300 hover:text-white transition-colors relative pb-1 border-b border-transparent hover:border-slate-300"
            >
              Leadership Training
            </a>
            <span className="text-slate-400">›</span>
            <span className="text-white font-medium relative pb-1 border-b-2 border-amber-500">Instructor</span>
          </div>
          
          <div className="text-xs font-medium text-slate-400 uppercase tracking-widest mb-6">
            About the Trainer
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-6 text-white tracking-tight leading-[1.43]">
            Meet Your Instructor
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 font-light max-w-3xl">
            Learn from one of the most experienced Scrum trainers in the Asia Pacific region.
          </p>
        </div>
      </section>

      {/* Sticky Navigation Tabs */}
      <div className="sticky top-0 z-40 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex gap-8 sm:gap-12">
            <a
              href="leadership-training.html"
              className="group relative py-4 text-sm sm:text-base font-medium transition-colors text-slate-600 hover:text-slate-900"
            >
              Overview
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#F59E0B] opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>

            <a
              href="course-modules.html"
              className="group relative py-4 text-sm sm:text-base font-medium transition-colors text-slate-600 hover:text-slate-900"
            >
              Course Modules
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#F59E0B] opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>

            <span className="relative py-4 text-sm sm:text-base font-medium text-slate-900">
              Instructor
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#F59E0B]"></div>
            </span>

            <a
              href="class-schedule.html"
              className="group relative py-4 text-sm sm:text-base font-medium transition-colors text-slate-600 hover:text-slate-900"
            >
              Class Schedule
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#F59E0B] opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>

            <a
              href="individual-enrollment.html"
              className="group relative py-4 text-sm sm:text-base font-medium transition-colors text-slate-600 hover:text-slate-900"
            >
              Enrollment
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#F59E0B] opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>
          </nav>
        </div>
      </div>

      {/* Instructor Content */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Main Instructor Bio Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
            {/* Left Column - Image and Stats */}
            <div>
              <div className="mb-8">
                <img 
                  src="https://i.postimg.cc/4ypFkVb5/Ethan-picture.png" 
                  alt="Ethan Soo - Scrum Trainer"
                  className="w-full max-w-md mx-auto rounded-2xl shadow-xl"
                />
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 max-w-md mx-auto">
                <div className="text-center p-6 bg-slate-50 rounded-xl">
                  <div className="text-4xl font-light text-slate-900 mb-2">21</div>
                  <div className="text-sm text-slate-600">years experience creating hyper-productive Scrum teams.</div>
                </div>
                <div className="text-center p-6 bg-slate-50 rounded-xl">
                  <div className="text-4xl font-light text-slate-900 mb-2">30+</div>
                  <div className="text-sm text-slate-600">Agile transformation and engagement experience.</div>
                </div>
              </div>
            </div>

            {/* Right Column - Bio Text */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl sm:text-4xl font-light text-slate-900 mb-2">Ethan Soo</h2>
                <p className="text-slate-600 font-light">About the Trainer</p>
              </div>

              <p className="text-slate-700 font-light leading-relaxed">
                Ethan is one of the most experienced Scrum Trainers in the Asia Pacific Region. With his collective real-life experience, you can trust him to deliver a transformative learning experience in your Agile journey starting from building a strong Scrum team to delivering values and work results.
              </p>

              <p className="text-slate-700 font-light leading-relaxed">
                To date, he has conducted 300+ Scrum classes and has gathered excellent feedback from participants who underwent his curriculum over the years. Many enjoyed his programs that are meticulously designed to provide him with a very immersive learning experience. You will stay charged and curious throughout his interactive lessons which often includes sharing of his own practical experiences, interactive games, and discussions on thought-provoking case studies.
              </p>

              <p className="text-slate-700 font-light leading-relaxed">
                With Ethan's excellent training performance, he was awarded to be a Scrum Fellow by Scrum Inc. In 2020, as Ethan decided to return to his home country, he accepted the invitation of Dr. Jeff Sutherland to become one of the three Regional Scrum Fellows, focusing in the Asia Pacific region.
              </p>

              <p className="text-slate-700 font-light leading-relaxed">
                Ethan is currently in charge of optimizing the Scrum Master, Product Owner, and Scrum@Scale credentialing training delivered by Agile Education by Scrum Inc. to match the learning style of people in the East.
              </p>

              <p className="text-slate-700 font-light leading-relaxed">
                Apart from that, he is also responsible to screen, coach, mentor and certify Scrum Trainers and Scrum@Scale Trainers for the Scrum Inc. Agile Education Program by designing and conducting the Train The Trainer Program (TTT).
              </p>
            </div>
          </div>

          {/* Previously Led Transformation Section */}
          <div
            className="mb-20 bg-slate-800 p-8 rounded-2xl"
          >
            <h3 className="text-2xl sm:text-3xl font-light text-white mb-8">Previously led Agile transformation at:</h3>
            <div className="p-8 rounded-2xl flex items-center justify-center">
              <img 
                src="https://i.postimg.cc/htw3PKjf/client-logos.png" 
                alt="Client Logos" 
                className="max-w-full h-auto"
              />
            </div>
          </div>

          {/* Client Testimonials */}
          <div
            className="mb-20"
          >
            <h3 className="text-2xl sm:text-3xl font-light text-slate-900 mb-8">From our clients and Agile gurus:</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-slate-50 p-8 rounded-2xl">
                <div className="mb-6">
                  <img 
                    src="https://i.postimg.cc/856hBrhp/Jeff-photo.jpg" 
                    alt="Jeff Sutherland"
                    className="w-24 h-24 rounded-full mx-auto mb-4"
                  />
                  <h4 className="text-lg font-medium text-slate-900 text-center">Jeff Sutherland</h4>
                  <p className="text-sm text-slate-600 text-center">Founder and Chairman, Scrum Inc.</p>
                </div>
                <p className="text-slate-700 font-light italic text-sm leading-relaxed text-center">
                  "Ethan recently spent two days in Tokyo with me planning his Scrum@Scale classes, having reviewed the film carefully and training with Ethan. These will be excellent courses."
                </p>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-slate-50 p-8 rounded-2xl">
                <div className="mb-6">
                  <img 
                    src="https://i.postimg.cc/tTxhtVhR/Grace-Chan-photo.jpg" 
                    alt="Grace Chan"
                    className="w-24 h-24 rounded-full mx-auto mb-4"
                  />
                  <h4 className="text-lg font-medium text-slate-900 text-center">Grace Chan</h4>
                  <p className="text-sm text-slate-600 text-center">Executive Vice President, Product, and Innovation Mastercard China</p>
                </div>
                <p className="text-slate-700 font-light italic text-sm leading-relaxed text-center">
                  "Ethan's expert team strives to help my company, as I now migrate into SCRUM, use, it is recommended in full depth. The courses I have taken have gotten raving reviews and he has helped them drove impactful financial benefit and results."
                </p>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-slate-50 p-8 rounded-2xl">
                <div className="mb-6">
                  <img 
                    src="https://i.postimg.cc/tTxhtVhj/Mike-Cohn-photo.jpg" 
                    alt="Mike Cohn"
                    className="w-24 h-24 rounded-full mx-auto mb-4"
                  />
                  <h4 className="text-lg font-medium text-slate-900 text-center">Mike Cohn</h4>
                  <p className="text-sm text-slate-600 text-center">Co-founder, Scrum Alliance</p>
                </div>
                <p className="text-slate-700 font-light italic text-sm leading-relaxed text-center">
                  "Ethan has been a strong proponent of doing Scrum well and has been of great assistance to Chinese companies looking to improve their Scrum, Kanban, and agile approaches."
                </p>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div
          >
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 sm:p-12">
              <h3 className="text-2xl sm:text-3xl font-light text-slate-900 mb-8 text-center">Certifications & Credentials</h3>
              <img 
                src="https://i.postimg.cc/9McPckGZ/ethan-trainer-certifications.png" 
                alt="Ethan's Certifications and Credentials" 
                className="w-full max-w-4xl mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <MainSiteFooter />
    </div>
  );
}