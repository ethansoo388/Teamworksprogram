import { MainSiteNavigation } from "@/site/components/main/MainSiteNavigation";
import { MainSiteFooter } from "@/site/components/main/MainSiteFooter";
import type { PageMeta } from "@/types";

export const pageMeta: PageMeta = {
  path: "/privacy-policy",
  filename: "privacy-policy.html",
  title: "Privacy Policy - CI Agile",
  description:
    "Read CI Agile's Privacy Policy, including how we collect, use, and protect your personal data.",
  siteType: "main",
};

export function PrivacyPolicyPage() {
  return (
    <div className="size-full">
      <MainSiteNavigation />
      <div className="pt-16">
        {/* Privacy Policy Content */}
        <div className="bg-white">
          <div className="max-w-[900px] mx-auto px-4 md:px-6 py-12 md:py-16">
            {/* Header */}
            <div className="mb-12">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Privacy Policy
              </h1>
              <p className="text-base md:text-lg text-gray-600 mb-8">
                <strong>Last updated:</strong> 26<sup>th</sup> February 2026
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                At <strong>CI Agile</strong> ("we", "our", "us"), we respect your privacy and are committed to protecting
                your personal data. This Privacy Policy explains how we collect, use, disclose, and
                safeguard your information when you visit our website or engage with our programs and
                services.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                By using our website or submitting your information, you agree to the terms of this Privacy
                Policy.
              </p>
            </div>

            <hr className="border-gray-300 mb-12" />

            {/* Section 1 */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                1. Information We Collect
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                We may collect personal information that you voluntarily provide to us, including but not
                limited to:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-base md:text-lg text-gray-700">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Company name and role</li>
                <li>Information submitted through contact forms, consultation bookings, or inquiries</li>
              </ul>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                We may also automatically collect limited technical information such as:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-base md:text-lg text-gray-700">
                <li>IP address</li>
                <li>Browser type</li>
                <li>Device information</li>
                <li>Pages visited and time spent on our website</li>
              </ul>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                This information helps us understand how our website is used and improve user
                experience.
              </p>
            </section>

            <hr className="border-gray-300 mb-12" />

            {/* Section 2 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                2. How We Use Your Information
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We use your information to:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-lg text-gray-700">
                <li>Respond to inquiries and consultation requests</li>
                <li>Provide information about our courses, programs, and services</li>
                <li>Communicate with you regarding scheduling, logistics, or updates</li>
                <li>Improve our website, offerings, and customer experience</li>
                <li>Comply with legal or regulatory requirements</li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                We do <strong>not</strong> sell or rent your personal data to third parties.
              </p>
            </section>

            <hr className="border-gray-300 mb-12" />

            {/* Section 3 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                3. Marketing Communications
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                If you choose to receive updates or marketing communications from us, we may contact
                you via email or other channels.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                You may opt out of marketing communications at any time by:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-lg text-gray-700">
                <li>Clicking the "unsubscribe" link in our emails, or</li>
                <li>Contacting us directly at the email address below</li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                Transactional or service-related communications may still be sent when necessary.
              </p>
            </section>

            <hr className="border-gray-300 mb-12" />

            {/* Section 4 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                4. Sharing of Information
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We may share your information only in the following situations:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-lg text-gray-700">
                <li>
                  With trusted service providers who assist us in operating our website or delivering
                  our services (e.g. email platforms, scheduling tools), under confidentiality
                  obligations
                </li>
                <li>When required by law, regulation, or legal process</li>
                <li>To protect our rights, safety, or property</li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                All third parties are expected to handle your data responsibly and securely.
              </p>
            </section>

            <hr className="border-gray-300 mb-12" />

            {/* Section 5 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                5. Data Security
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We take reasonable administrative, technical, and physical measures to protect your
                personal data from unauthorized access, loss, misuse, or disclosure.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                However, no method of transmission over the internet or electronic storage is 100%
                secure. While we strive to protect your data, we cannot guarantee absolute security.
              </p>
            </section>

            <hr className="border-gray-300 mb-12" />

            {/* Section 6 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                6. Data Retention
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                We retain personal data only for as long as necessary to fulfill the purposes outlined in this
                Privacy Policy, unless a longer retention period is required or permitted by law.
              </p>
            </section>

            <hr className="border-gray-300 mb-12" />

            {/* Section 7 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                7. Your Rights
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Depending on applicable laws, you may have the right to:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-lg text-gray-700">
                <li>Access the personal data we hold about you</li>
                <li>Request correction of inaccurate or incomplete data</li>
                <li>Request deletion of your personal data</li>
                <li>Withdraw consent for certain data processing activities</li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                To exercise these rights, please contact us using the details below.
              </p>
            </section>

            <hr className="border-gray-300 mb-12" />

            {/* Section 8 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                8. Cookies and Tracking Technologies
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our website may use cookies or similar technologies to enhance functionality and analyze
                usage.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                You can choose to disable cookies through your browser settings. Please note that some
                features of the website may not function properly without cookies.
              </p>
            </section>

            <hr className="border-gray-300 mb-12" />

            {/* Section 9 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                9. Third-Party Links
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the
                privacy practices or content of those external sites. We encourage you to review their
                privacy policies separately.
              </p>
            </section>

            <hr className="border-gray-300 mb-12" />

            {/* Section 10 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                10. Changes to This Privacy Policy
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We may update this Privacy Policy from time to time to reflect changes in our practices or
                legal requirements.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Any updates will be posted on this page with a revised "Last updated" date.
              </p>
            </section>

            <hr className="border-gray-300 mb-12" />

            {/* Section 11 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                11. Contact Us
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                If you have any questions about this Privacy Policy or how we handle your personal data,
                please contact us at:
              </p>
              <div className="text-lg text-gray-700 leading-relaxed space-y-2">
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
