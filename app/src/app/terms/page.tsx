import Link from "next/link";

export const metadata = {
  title: "Terms of Service - CreatorShack",
  description: "Terms of Service for CreatorShack",
};

export default function TermsPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
          <p className="text-[var(--foreground-muted)]">
            Last updated: January 1, 2024
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
              <p className="text-[var(--foreground-muted)] mb-4">
                By accessing and using CreatorShack (&quot;the Service&quot;), you accept and agree 
                to be bound by the terms and provision of this agreement. If you do not 
                agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Description of Service</h2>
              <p className="text-[var(--foreground-muted)] mb-4">
                CreatorShack provides a suite of creative tools and services including but 
                not limited to image editing, video tools, audio processing, and AI-powered 
                features. The service is provided &quot;as is&quot; and we reserve the right to 
                modify, suspend, or discontinue any part of the service at any time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. User Accounts</h2>
              <p className="text-[var(--foreground-muted)] mb-4">
                To access certain features of the Service, you must create an account. 
                You are responsible for:
              </p>
              <ul className="list-disc pl-6 text-[var(--foreground-muted)] space-y-2 mb-4">
                <li>Maintaining the confidentiality of your account credentials</li>
                <li>All activities that occur under your account</li>
                <li>Notifying us immediately of any unauthorized use</li>
                <li>Ensuring your account information is accurate and up-to-date</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Acceptable Use</h2>
              <p className="text-[var(--foreground-muted)] mb-4">
                You agree not to use the Service to:
              </p>
              <ul className="list-disc pl-6 text-[var(--foreground-muted)] space-y-2 mb-4">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon the rights of others</li>
                <li>Upload or distribute malicious software</li>
                <li>Attempt to gain unauthorized access to any part of the Service</li>
                <li>Use the Service for any illegal or unauthorized purpose</li>
                <li>Generate content that is harmful, offensive, or violates our content policies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Intellectual Property</h2>
              <p className="text-[var(--foreground-muted)] mb-4">
                The Service and its original content, features, and functionality are owned 
                by CreatorShack and are protected by international copyright, trademark, 
                patent, trade secret, and other intellectual property laws.
              </p>
              <p className="text-[var(--foreground-muted)] mb-4">
                You retain ownership of any content you create using our tools. By using 
                the Service, you grant us a limited license to process your content solely 
                for the purpose of providing the Service to you.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Payment Terms</h2>
              <p className="text-[var(--foreground-muted)] mb-4">
                Paid subscriptions are billed in advance on a monthly or annual basis. 
                By subscribing, you agree that:
              </p>
              <ul className="list-disc pl-6 text-[var(--foreground-muted)] space-y-2 mb-4">
                <li>You authorize us to charge your payment method for the subscription fee</li>
                <li>Subscriptions automatically renew unless cancelled</li>
                <li>Refunds are provided in accordance with our refund policy</li>
                <li>Prices may change with 30 days notice</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Termination</h2>
              <p className="text-[var(--foreground-muted)] mb-4">
                We may terminate or suspend your account and access to the Service 
                immediately, without prior notice or liability, for any reason, including 
                without limitation if you breach these Terms. Upon termination, your right 
                to use the Service will immediately cease.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Limitation of Liability</h2>
              <p className="text-[var(--foreground-muted)] mb-4">
                In no event shall CreatorShack, its directors, employees, partners, agents, 
                suppliers, or affiliates be liable for any indirect, incidental, special, 
                consequential, or punitive damages, including without limitation, loss of 
                profits, data, use, goodwill, or other intangible losses.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">9. Changes to Terms</h2>
              <p className="text-[var(--foreground-muted)] mb-4">
                We reserve the right to modify or replace these Terms at any time. If a 
                revision is material, we will provide at least 30 days notice prior to any 
                new terms taking effect. What constitutes a material change will be 
                determined at our sole discretion.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">10. Contact Us</h2>
              <p className="text-[var(--foreground-muted)] mb-4">
                If you have any questions about these Terms, please contact us:
              </p>
              <ul className="list-disc pl-6 text-[var(--foreground-muted)] space-y-2 mb-4">
                <li>By email: legal@creatorshack.com</li>
                <li>Through our <Link href="/contact" className="text-[var(--creator-blue)] hover:underline">contact form</Link></li>
              </ul>
            </section>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[var(--border)]">
          <p className="text-[var(--foreground-muted)] text-sm">
            By using CreatorShack, you acknowledge that you have read and understood these 
            Terms of Service and agree to be bound by them.
          </p>
        </div>
      </div>
    </div>
  );
}
