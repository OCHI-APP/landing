import Link from "next/link";

export default function TermsOfUse() {
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
          Terms of Use
        </h1>
        <p className="text-gray-500 mb-8">
          OCHI – Goal-Based AI Stylist
          <br />
          Last updated: 28.01.2026
        </p>

        <div className="prose prose-gray max-w-none">
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black mb-3">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-700 leading-relaxed">
              By accessing or using the OCHI mobile application, you agree to
              these Terms of Use.
            </p>
            <p className="text-gray-700 leading-relaxed mt-3">
              If you do not agree, please discontinue use of the App.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black mb-3">
              2. Description of the Service
            </h2>
            <p className="text-gray-700 leading-relaxed">
              OCHI is a digital wardrobe and outfit planning application that
              helps users organize clothing, plan outfits, and interact with
              conscious fashion features.
            </p>
            <p className="text-gray-700 leading-relaxed mt-3">
              The App provides suggestions and organizational tools only and
              does not guarantee specific results.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black mb-3">
              3. User Accounts
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Users are responsible for maintaining the confidentiality of their
              account credentials.
            </p>
            <p className="text-gray-700 leading-relaxed mt-3">
              You are responsible for all activity that occurs under your
              account.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black mb-3">
              4. User Content
            </h2>
            <p className="text-gray-700 leading-relaxed">
              You retain ownership of all content you upload.
            </p>
            <p className="text-gray-700 leading-relaxed mt-3">
              By using the App, you grant OCHI a limited, non-exclusive right to
              process your content solely for the purpose of providing app
              functionality.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black mb-3">
              5. Donation Feature Disclaimer
            </h2>
            <p className="text-gray-700 leading-relaxed">
              OCHI provides a platform that allows users to connect with each
              other for clothing donation.
            </p>
            <ul className="list-disc pl-6 mt-2 text-gray-700 space-y-1">
              <li>
                OCHI does not act as an intermediary, broker, or guarantor.
              </li>
              <li>
                Any communication or exchange occurs directly between users.
              </li>
              <li>
                Users are responsible for their own safety and decisions when
                sharing contact details or arranging exchanges.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black mb-3">
              6. Prohibited Use
            </h2>
            <p className="text-gray-700 leading-relaxed">You agree not to:</p>
            <ul className="list-disc pl-6 mt-2 text-gray-700 space-y-1">
              <li>Use the App for unlawful purposes</li>
              <li>Upload misleading, harmful, or abusive content</li>
              <li>
                Attempt to interfere with the App&apos;s operation or security
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black mb-3">
              7. Availability and Modifications
            </h2>
            <p className="text-gray-700 leading-relaxed">
              As an early-stage product, OCHI may update, modify, or discontinue
              features at any time without notice.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black mb-3">
              8. Limitation of Liability
            </h2>
            <p className="text-gray-700 leading-relaxed">
              The App is provided &quot;as is&quot; without warranties of any
              kind.
            </p>
            <p className="text-gray-700 leading-relaxed mt-3">
              To the maximum extent permitted by law, OCHI shall not be liable
              for damages arising from use of the App or interactions between
              users.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black mb-3">
              9. Governing Law
            </h2>
            <p className="text-gray-700 leading-relaxed">
              These Terms are governed by applicable laws of the jurisdiction in
              which OCHI operates.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black mb-3">
              10. Contact
            </h2>
            <p className="text-gray-700 leading-relaxed">
              For questions regarding these Terms:
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
