import { MainSiteNavigation } from "@/site/components/main/MainSiteNavigation";
import { MainSiteFooter } from "@/site/components/main/MainSiteFooter";
import type { PageMeta } from "@/types";

export const pageMeta: PageMeta = {
  path: "/cookie-policy",
  filename: "cookie-policy.html",
  title: "Cookie Policy - CI Agile",
  description:
    "Read CI Agile's Cookie Policy, including how cookies and similar technologies are used on our website.",
  siteType: "main",
};

export function CookiePolicyPage() {
  return (
    <div className="size-full">
      <MainSiteNavigation />
      <div className="pt-16">
        {/* Cookie Policy Content */}
        <div className="bg-white">
          <div className="max-w-[900px] mx-auto px-4 md:px-6 py-12 md:py-16">
            {/* Header */}
            <div className="mb-12">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Cookie Policy
              </h1>
              <p className="text-base md:text-lg text-gray-600 mb-8">
                <strong>Last updated:</strong> 26<sup>th</sup> February 2026
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                At <strong>CI Agile</strong>, we use cookies and similar technologies to enhance your browsing experience, analyze website performance, and support our marketing efforts.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                This Cookie Policy explains what cookies are, how we use them, and how you can control your preferences.
              </p>
            </div>

            <hr className="border-gray-300 mb-12" />

            {/* Section 1 */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                1. What Are Cookies?
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                Cookies are small text files stored on your device (computer, tablet, or smartphone) when you visit a website. They help the website recognize your device and remember information about your visit, such as your preferences or actions.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Cookies may be set by the website you're visiting (<strong>"first-party cookies"</strong>) or by third-party services integrated into the website (<strong>"third-party cookies"</strong>).
              </p>
            </section>

            <hr className="border-gray-300 mb-12" />

            {/* Section 2 */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                2. Why We Use Cookies
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                We use cookies to:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-base md:text-lg text-gray-700">
                <li>Ensure our website functions properly</li>
                <li>Remember your preferences and settings</li>
                <li>Analyze how visitors use our website to improve content and performance</li>
                <li>Provide relevant marketing and advertising (with your consent, where required)</li>
                <li>Support security and fraud prevention</li>
              </ul>
            </section>

            <hr className="border-gray-300 mb-12" />

            {/* Section 3 */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                3. Types of Cookies We Use
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8">
                The cookies used on our website fall into the following categories:
              </p>

              {/* Subsection A */}
              <div className="mb-8 pl-6">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                  A. Strictly Necessary Cookies
                </h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                  These cookies are essential for the website to function and cannot be disabled in our systems. They are usually set in response to actions you take, such as setting privacy preferences, logging in, or filling out forms.
                </p>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  <strong>Examples:</strong> Session management, security cookies, load balancing.
                </p>
              </div>

              {/* Subsection B */}
              <div className="mb-8 pl-6">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                  B. Functional Cookies
                </h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                  These cookies allow our website to remember choices you make (such as your username, language, or region) and provide enhanced, personalized features.
                </p>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  <strong>Examples:</strong> Language preferences, saved settings, user interface customization.
                </p>
              </div>

              {/* Subsection C */}
              <div className="mb-8 pl-6">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                  C. Performance / Analytics Cookies
                </h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                  These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve the website's performance and user experience.
                </p>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  <strong>Examples:</strong> Google Analytics, heatmaps, page visit tracking.
                </p>
              </div>

              {/* Subsection D */}
              <div className="pl-6">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                  D. Marketing / Advertising Cookies
                </h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                  These cookies are used to deliver advertisements that are relevant to you and your interests. They may also limit the number of times you see an advertisement and help measure the effectiveness of marketing campaigns.
                </p>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                  These cookies may be set by us or by third-party advertising partners.
                </p>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  <strong>Examples:</strong> Retargeting pixels, social media advertising (e.g., Facebook, LinkedIn).
                </p>
              </div>
            </section>

            <hr className="border-gray-300 mb-12" />

            {/* Section 4 */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                4. Third-Party Cookies
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                Some cookies on our website are placed by third-party services we use to provide analytics, advertising, or functionality. These third parties may collect information about your online activities across different websites.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                <strong>Third-party services we may use include:</strong>
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-base md:text-lg text-gray-700">
                <li><strong>Google Analytics:</strong> To analyze website traffic and usage</li>
                <li><strong>Google Ads / Facebook Ads:</strong> For targeted advertising</li>
                <li><strong>Social media platforms:</strong> For sharing and engagement features</li>
              </ul>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                We recommend reviewing the privacy and cookie policies of these third-party providers for more information about their practices.
              </p>
            </section>

            <hr className="border-gray-300 mb-12" />

            {/* Section 5 */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                5. How to Control Cookies
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8">
                You have the right to control and manage cookies in several ways:
              </p>

              {/* Subsection A */}
              <div className="mb-8 pl-6">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                  A. Browser Controls
                </h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                  Most web browsers allow you to manage cookies through their settings. You can:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2 text-base md:text-lg text-gray-700">
                  <li>Block all cookies</li>
                  <li>Accept only first-party cookies</li>
                  <li>Delete cookies after each browsing session</li>
                  <li>View and delete existing cookies</li>
                </ul>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                  <strong>How to access cookie settings in common browsers:</strong>
                </p>
                <ul className="list-disc pl-6 space-y-2 text-base md:text-lg text-gray-700">
                  <li>
                    <strong>Google Chrome:</strong> Settings &gt; Privacy and security &gt; Cookies and other site data
                  </li>
                  <li>
                    <strong>Mozilla Firefox:</strong> Settings &gt; Privacy & Security &gt; Cookies and Site Data
                  </li>
                  <li>
                    <strong>Safari:</strong> Preferences &gt; Privacy &gt; Cookies and website data
                  </li>
                  <li>
                    <strong>Microsoft Edge:</strong> Settings &gt; Privacy, search, and services &gt; Cookies and site permissions
                  </li>
                </ul>
              </div>

              {/* Subsection B */}
              <div className="mb-8 pl-6">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                  B. Device-Level Controls
                </h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  On mobile devices, you can control tracking and advertising through your device settings (e.g., "Limit Ad Tracking" on iOS or "Opt out of Ads Personalization" on Android).
                </p>
              </div>

              {/* Subsection C */}
              <div className="pl-6">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                  C. Analytics Opt-Out
                </h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                  You can opt out of Google Analytics tracking by installing the{" "}
                  <a
                    href="https://tools.google.com/dlpage/gaoptout"
                    className="text-blue-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Google Analytics Opt-out Browser Add-on
                  </a>
                  .
                </p>
              </div>

              <div className="mt-8 p-6 bg-yellow-50 border-l-4 border-yellow-400">
                <p className="text-base md:text-lg text-gray-900 font-semibold mb-2">
                  ⚠️ Note:
                </p>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  If you block or delete cookies, some parts of our website may not function properly, and your user experience may be affected.
                </p>
              </div>
            </section>

            <hr className="border-gray-300 mb-12" />

            {/* Section 6 */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                6. International Users
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                If you are accessing our website from outside Singapore, please note that cookies may be transferred to and processed in countries where we or our service providers operate.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                By using our website, you consent to such transfers in accordance with this Cookie Policy and our Privacy Policy.
              </p>
            </section>

            <hr className="border-gray-300 mb-12" />

            {/* Section 7 */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                7. Data Collected Through Cookies
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                Cookies may collect information such as:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-base md:text-lg text-gray-700">
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Device information</li>
                <li>Pages viewed and time spent on pages</li>
                <li>Referring website</li>
                <li>Interaction with website features</li>
              </ul>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                This data is typically anonymized or aggregated and is used to improve website performance and user experience.
              </p>
            </section>

            <hr className="border-gray-300 mb-12" />

            {/* Section 8 */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                8. Updates to This Cookie Policy
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                We may update this Cookie Policy from time to time to reflect changes in technology, legal requirements, or our business practices.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Any updates will be posted on this page with a revised "Last updated" date. We encourage you to review this policy periodically.
              </p>
            </section>

            <hr className="border-gray-300 mb-12" />

            {/* Section 9 */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                9. Contact Us
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                If you have any questions about this Cookie Policy or how we use cookies, please contact us at:
              </p>
              <div className="text-base md:text-lg text-gray-700 leading-relaxed space-y-2">
                <p><strong>CI Agile</strong></p>
                <p className="flex items-center gap-2">
                  <span>📧 Email: romanoff@ciagile.com</span>
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
      <MainSiteFooter />
    </div>
  );
}
