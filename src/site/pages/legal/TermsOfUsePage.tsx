import { MainSiteNavigation } from "@/site/components/main/MainSiteNavigation";
import { MainSiteFooter } from "@/site/components/main/MainSiteFooter";
import type { PageMeta } from "@/types";

export const pageMeta: PageMeta = {
  path: "/terms-of-use",
  filename: "terms-of-use.html",
  title: "Terms of Use - CI Agile",
  description:
    "Read CI Agile's Terms of Use for using our website, programs, and services.",
  siteType: "main",
};

export function TermsOfUsePage() {
  return (
    <div className="size-full">
      <MainSiteNavigation />
      <div className="pt-16">
        {/* Terms of Use Content */}
        <div className="bg-white">
          <div className="max-w-[900px] mx-auto px-4 md:px-6 py-12 md:py-16">
            {/* Header */}
            <div className="mb-12">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Terms of Use
              </h1>
              <p className="text-base md:text-lg font-semibold text-gray-900 mb-2">
                CI Agile
              </p>
              <p className="text-base md:text-lg font-semibold text-gray-900 mb-8">
                Last Updated: 26th February 2026
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                Welcome to CI Agile ("CI Agile", "we", "our", or "us").
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                These Terms of Use ("Terms") govern your access to and use of our website located at https://fullsite.ciagile.com/ ↗ (the "Site"), as well as your participation in our training programs, workshops, consulting services, and related offerings (collectively, the "Services").
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                By accessing our Site or engaging with our Services, you agree to be bound by these Terms. If you do not agree, please discontinue use of the Site and Services.
              </p>
            </div>

            <hr className="border-gray-300 mb-12" />

            {/* Section 1 */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                1. Use of the Website
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                You agree to use the Site only for lawful purposes and in a manner that does not:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-base md:text-lg text-gray-700">
                <li>Violate any applicable law or regulation</li>
                <li>Infringe the rights of others</li>
                <li>Interfere with or disrupt the Site's operation</li>
                <li>Attempt to gain unauthorized access to systems or data</li>
                <li>Introduce malicious code, viruses, or harmful material</li>
              </ul>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                We reserve the right to restrict, suspend, or terminate access if these Terms are violated.
              </p>
            </section>

            <hr className="border-gray-300 mb-12" />

            {/* Section 2 */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                2. Our Services
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                CI Agile provides professional:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-base md:text-lg text-gray-700">
                <li>Leadership and team training programs</li>
                <li>Workshops and public courses</li>
                <li>Private corporate programs</li>
                <li>Consulting and advisory services</li>
              </ul>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                Descriptions of course content, schedules, formats, pricing, and availability are provided on the Site or through direct communication and may be updated from time to time.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Participation in our programs does not guarantee specific business, financial, or operational outcomes. Results depend on organisational implementation, context, and participant engagement.
              </p>
            </section>

            <hr className="border-gray-300 mb-12" />

            {/* Section 3 */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                3. Registration and Engagement
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                When you:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-base md:text-lg text-gray-700">
                <li>Submit an inquiry</li>
                <li>Book a consultation</li>
                <li>Register for a course</li>
                <li>Engage us for consulting</li>
              </ul>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                You agree that:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-base md:text-lg text-gray-700">
                <li>Information provided is accurate and complete</li>
                <li>You are authorized to act on behalf of your organisation (if applicable)</li>
                <li>A booking or engagement is only confirmed once acknowledged in writing by CI Agile</li>
              </ul>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                We reserve the right to decline or reschedule engagements where necessary.
              </p>
            </section>

            <hr className="border-gray-300 mb-12" />

            {/* Section 4 - Payment and Cancellation (implied but not visible in images) */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                4. Payment and Cancellation
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                Payment terms, cancellation policies, and refund conditions will be specified in your engagement agreement or booking confirmation.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Unless otherwise stated, cancellations must be made in accordance with the terms communicated at the time of booking.
              </p>
            </section>

            <hr className="border-gray-300 mb-12" />

            {/* Section 5 - User Conduct (implied but not visible in images) */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                5. User Conduct
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                When participating in our Services or using our Site, you agree to:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-base md:text-lg text-gray-700">
                <li>Treat facilitators, staff, and other participants with respect</li>
                <li>Comply with instructions and guidelines provided during programs</li>
                <li>Not record, photograph, or share program content without prior written permission</li>
              </ul>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                We reserve the right to remove participants who engage in disruptive or inappropriate behavior.
              </p>
            </section>

            <hr className="border-gray-300 mb-12" />

            {/* Section 6 */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                6. Intellectual Property
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                All materials provided on the Site or during our Services — including but not limited to:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-base md:text-lg text-gray-700">
                <li>Training content</li>
                <li>Slides and presentations</li>
                <li>Frameworks and methodologies</li>
                <li>Templates and tools</li>
                <li>Written and digital resources</li>
              </ul>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                are the intellectual property of CI Agile unless otherwise stated.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                You may:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-base md:text-lg text-gray-700">
                <li>Use materials internally within your organisation for implementation purposes</li>
              </ul>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                You may not:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-base md:text-lg text-gray-700">
                <li>Reproduce, distribute, publish, or sell materials externally</li>
                <li>Use materials to create competing products or services</li>
                <li>Remove copyright or proprietary notices</li>
              </ul>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                without prior written consent.
              </p>
            </section>

            <hr className="border-gray-300 mb-12" />

            {/* Section 7 */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                7. Confidentiality
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                During the course of engagements, both parties may share non-public information.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                Each party agrees to treat such information as confidential and not disclose it to third parties without consent, except where required by law.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                This obligation does not apply to information that:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-base md:text-lg text-gray-700">
                <li>Is publicly available</li>
                <li>Was already lawfully known</li>
                <li>Is independently developed</li>
              </ul>
            </section>

            <hr className="border-gray-300 mb-12" />

            {/* Section 8 */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                8. Third-Party Services
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                The Site may include links to third-party platforms or tools (e.g., scheduling systems, payment providers, CRM platforms, communication tools).
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                CI Agile is not responsible for the content, availability, security, or policies of third-party services. Use of third-party services is subject to their respective terms and policies.
              </p>
            </section>

            <hr className="border-gray-300 mb-12" />

            {/* Section 9 */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                9. Disclaimer of Warranties
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                To the fullest extent permitted by law:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-base md:text-lg text-gray-700">
                <li>The Site is provided on an "as is" and "as available" basis</li>
                <li>We do not guarantee uninterrupted or error-free access</li>
                <li>We make no warranties regarding specific business outcomes from participation in our Services</li>
              </ul>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Professional judgment and implementation remain the responsibility of the client organisation.
              </p>
            </section>

            <hr className="border-gray-300 mb-12" />

            {/* Section 10 */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                10. Limitation of Liability
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                To the maximum extent permitted by applicable law:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-base md:text-lg text-gray-700">
                <li>CI Agile shall not be liable for indirect, incidental, consequential, or special damages</li>
                <li>Our total liability arising out of or related to any Service shall not exceed the fees paid for the specific Service giving rise to the claim</li>
              </ul>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Nothing in these Terms excludes liability that cannot be excluded under applicable law.
              </p>
            </section>

            <hr className="border-gray-300 mb-12" />

            {/* Section 11 */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                11. Changes to These Terms
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                We may update these Terms periodically. Updated versions will be posted on this page with a revised "Last Updated" date.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Continued use of the Site or Services after updates constitutes acceptance of the revised Terms.
              </p>
            </section>

            <hr className="border-gray-300 mb-12" />

            {/* Section 12 */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                12. Governing Law
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                These Terms are governed by and construed in accordance with the laws of Malaysia, without regard to conflict of law principles.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Any disputes shall be subject to the jurisdiction of the courts of Malaysia.
              </p>
            </section>

            <hr className="border-gray-300 mb-12" />

            {/* Section 13 */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                13. Contact Information
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                If you have questions regarding these Terms, please contact:
              </p>
              <div className="text-base md:text-lg text-gray-700 leading-relaxed space-y-2">
                <p><strong>CI Agile</strong></p>
                <p className="mt-4">
                  📧 Email:{" "}
                  <a
                    href="mailto:romanoff@ciagile.com"
                    className="text-blue-600 hover:underline"
                  >
                    romanoff@ciagile.com
                  </a>
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
