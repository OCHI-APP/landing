import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 md:px-10 lg:px-16">
        <Link href="/" className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-black"></span>
          <span className="font-medium text-black">OCHI</span>
        </Link>
        <Link
          href="/"
          className="flex items-center gap-2 text-black hover:opacity-70 transition-opacity"
        >
          <svg
            className="h-4 w-4 rotate-180"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
          <span className="font-medium">Back</span>
        </Link>
      </header>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-6 py-12 md:py-16">
        <h1 className="text-3xl md:text-4xl font-semibold text-black mb-2">
          Privacy Policy
        </h1>
        <p className="text-gray-500 mb-8">
          OCHI – Goal-Based AI Stylist
          <br />
          Last updated: 28.01.2026
        </p>

        <div className="prose prose-gray max-w-none">
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black mb-3">
              1. Introduction
            </h2>
            <p className="text-gray-700 leading-relaxed">
              OCHI (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) values
              your privacy and is committed to protecting your personal data.
            </p>
            <p className="text-gray-700 leading-relaxed mt-3">
              This Privacy Policy explains how information is collected, used,
              and handled when you use the OCHI mobile application (&quot;the
              App&quot;).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black mb-3">
              2. Information We Collect
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We collect only the information necessary to provide core app
              functionality.
            </p>
            <h3 className="text-lg font-medium text-black mt-4 mb-2">
              Account Information
            </h3>
            <p className="text-gray-700 leading-relaxed">
              When creating an account, you may be asked to provide:
            </p>
            <ul className="list-disc pl-6 mt-2 text-gray-700 space-y-1">
              <li>Name (as entered by the user; real or nickname)</li>
              <li>Email address (required)</li>
              <li>Phone number (optional)</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-3">
              This information is used solely for account creation,
              communication related to the App, and core feature access.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black mb-3">
              3. Optional User Content
            </h2>
            <p className="text-gray-700 leading-relaxed">
              You may voluntarily provide additional information within the App,
              including:
            </p>
            <ul className="list-disc pl-6 mt-2 text-gray-700 space-y-1">
              <li>Photos of clothing items</li>
              <li>Style preferences or goals</li>
              <li>Outfit planning choices</li>
              <li>Content shared in donation or resale sections</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-3">
              This information is used only to deliver in-app functionality.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black mb-3">
              4. Donation Feature and Contact Visibility
            </h2>
            <p className="text-gray-700 leading-relaxed">
              OCHI includes a donation feature that allows users to offer
              clothing items to others nearby.
            </p>
            <ul className="list-disc pl-6 mt-2 text-gray-700 space-y-1">
              <li>
                Sharing a phone number in donation listings is entirely
                optional.
              </li>
              <li>
                Contact information becomes visible only if the user actively
                chooses to publish it.
              </li>
              <li>
                Visibility is limited to users within a relevant geographic
                area.
              </li>
              <li>
                OCHI does not automatically share contact information and does
                not mediate or control direct communication between users.
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-3">
              Users remain fully responsible for the information they choose to
              share publicly within the App.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black mb-3">
              5. How We Use Your Information
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We use collected information only to:
            </p>
            <ul className="list-disc pl-6 mt-2 text-gray-700 space-y-1">
              <li>Create and manage user accounts</li>
              <li>Provide wardrobe and outfit planning features</li>
              <li>Enable donation-related interactions initiated by users</li>
              <li>Communicate important app-related updates</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">We do NOT:</p>
            <ul className="list-disc pl-6 mt-2 text-gray-700 space-y-1">
              <li>Sell user data</li>
              <li>Share personal data with advertisers</li>
              <li>Use data for profiling or targeted advertising</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black mb-3">
              6. Data Sharing and Third Parties
            </h2>
            <p className="text-gray-700 leading-relaxed">
              OCHI does not transfer or sell personal data to third parties.
            </p>
            <p className="text-gray-700 leading-relaxed mt-3">
              Limited third-party services (such as cloud infrastructure or
              basic analytics) may be used strictly for app functionality and
              stability. These services do not receive identifiable personal
              data beyond what is technically necessary.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black mb-3">
              7. Data Storage and Security
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We apply reasonable technical and organizational measures to
              protect user data from unauthorized access, loss, or misuse.
            </p>
            <p className="text-gray-700 leading-relaxed mt-3">
              Only essential data required for the App&apos;s operation is
              stored.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black mb-3">
              8. User Rights
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Depending on your location, you may have the right to:
            </p>
            <ul className="list-disc pl-6 mt-2 text-gray-700 space-y-1">
              <li>Access your personal data</li>
              <li>Correct or delete your data</li>
              <li>Request account deletion</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-3">
              Requests can be made via the contact information below.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black mb-3">
              9. Children&apos;s Privacy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              OCHI is not intended for children under the age of 13. We do not
              knowingly collect personal data from children.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black mb-3">
              10. Changes to This Policy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              This Privacy Policy may be updated as OCHI evolves. Any changes
              will be communicated through the App or official channels.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black mb-3">
              11. Contact
            </h2>
            <p className="text-gray-700 leading-relaxed">
              For questions regarding this Privacy Policy:
            </p>
            <p className="text-gray-700 leading-relaxed mt-3">
              Email:{" "}
              <a
                href="mailto:ochiapp.help@gmail.com"
                className="text-black underline hover:opacity-70"
              >
                ochiapp.help@gmail.com
              </a>
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-6 py-6 text-center text-sm text-gray-500">
          OCHI © 2025
        </div>
      </footer>
    </div>
  );
}
