import type { PageMeta } from "@/types";

export const pageMeta: PageMeta = {
  path: "/thankyou",
  filename: "thankyou.html",
  title: "Thank You - CI Agile",
  description: "Thank you for contacting CI Agile. We will get back to you within 24 hours.",
  siteType: "main",
};

export function ThankYouPage() {
  return (
    <div className="site-main">
      <div className="bg-white w-full">
        
        {/* Thank You Content Section */}
        <section className="px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-white min-h-screen flex items-center justify-center">
          <div className="max-w-3xl mx-auto text-center w-full">
            {/* Success Icon */}
            <div className="mb-6 md:mb-8 inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-green-100">
              <svg 
                className="w-8 h-8 md:w-10 md:h-10 text-green-600" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M5 13l4 4L19 7" 
                />
              </svg>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-4 md:mb-6 tracking-tight px-4">
              Thank You for Contacting Us
            </h1>

            {/* Body Text */}
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed mb-6 md:mb-8 px-4">
              We've received your message and will get back to you within 24 hours.
            </p>

            <p className="text-base sm:text-lg text-gray-600 mb-8 md:mb-12 px-4">
              Our team is reviewing your inquiry and will respond with the information you need. 
              If your matter is urgent, you can also reach us directly at{" "}
              <a 
                href="mailto:services@ciagile.com" 
                className="text-blue-600 hover:text-blue-800 underline break-all"
              >
                services@ciagile.com
              </a>
            </p>

            {/* Countdown Timer */}
            <div className="py-6 md:py-8 px-4">
              <p className="text-gray-600 mb-3 md:mb-4 text-sm sm:text-base">
                Redirecting to home page in
              </p>
              <div 
                id="countdown-timer" 
                className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900"
                data-countdown="5"
              >
                05
              </div>
              <p className="text-xs sm:text-sm text-gray-500 mt-3 md:mt-4">
                seconds
              </p>
            </div>

            {/* Manual Link */}
            <div className="mt-6 md:mt-8 px-4">
              <a 
                href="/index.html" 
                className="text-blue-600 hover:text-blue-800 underline text-base sm:text-lg inline-flex items-center gap-2"
              >
                <svg 
                  className="w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" 
                  />
                </svg>
                Go now
              </a>
            </div>
          </div>
        </section>

      </div>

      {/* Countdown and Redirect Script - Inline for static export */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              let countdown = 5;
              const timerElement = document.getElementById('countdown-timer');
              
              const interval = setInterval(function() {
                countdown--;
                if (timerElement) {
                  timerElement.textContent = countdown < 10 ? '0' + countdown : countdown;
                }
                
                if (countdown <= 0) {
                  clearInterval(interval);
                  window.location.href = 'index.html';
                }
              }, 1000);
            })();
          `
        }}
      />
    </div>
  );
}