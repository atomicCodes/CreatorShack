import Link from "next/link";

export const metadata = {
  title: "Privacy Policy - CreatorShack",
  description: "Privacy Policy for CreatorShack",
};

export default function PrivacyPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-[var(--foreground-muted)]">
            Last updated: January 1, 2024
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
              <p className="text-[var(--foreground-muted)] mb-4">
                CreatorShack (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is committed 
                to protecting your personal data. This privacy policy explains how we 
                collect, use, disclose, and safeguard your information when you use our 
                service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold mb-3">Information You Provide</h3>
              <ul className="list-disc pl-6 text-[var(--foreground-muted)] space-y-2 mb-4">
                <li>Account information (name, email address, password)</li>
                <li>Profile information (profile picture, bio)</li>
                <li>Payment information (processed securely through our payment provider)</li>
                <li>Content you upload or create using our tools</li>
                <li>Communications with us (support requests, feedback)</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Information Collected Automatically</h3>
              <ul className="list-disc pl-6 text-[var(--foreground-muted)] space-y-2 mb-4">
                <li>Device information (browser type, operating system)</li>
                <li>Usage data (features used, time spent, interactions)</li>
                <li>Log data (IP address, access times, pages viewed)</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
              <p className="text-[var(--foreground-muted)] mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-[var(--foreground-muted)] space-y-2 mb-4">
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Send you technical notices, updates, and support messages</li>
                <li>Respond to your comments and questions</li>
                <li>Analyze usage patterns and trends</li>
                <li>Detect, prevent, and address technical issues</li>
                <li>Protect against harmful or illegal activity</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Information Sharing</h2>
              <p className="text-[var(--foreground-muted)] mb-4">
                We do not sell your personal information. We may share your information with:
              </p>
              <ul className="list-disc pl-6 text-[var(--foreground-muted)] space-y-2 mb-4">
                <li><strong>Service Providers:</strong> Companies that help us operate our business 
                (hosting, payment processing, analytics)</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or 
                sale of assets</li>
                <li><strong>With Your Consent:</strong> When you explicitly agree to share information</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Data Security</h2>
              <p className="text-[var(--foreground-muted)] mb-4">
                We implement appropriate technical and organizational measures to protect 
                your personal data, including:
              </p>
              <ul className="list-disc pl-6 text-[var(--foreground-muted)] space-y-2 mb-4">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments</li>
                <li>Access controls and authentication</li>
                <li>Employee training on data protection</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Your Rights</h2>
              <p className="text-[var(--foreground-muted)] mb-4">
                Depending on your location, you may have the following rights:
              </p>
              <ul className="list-disc pl-6 text-[var(--foreground-muted)] space-y-2 mb-4">
                <li><strong>Access:</strong> Request a copy of your personal data</li>
                <li><strong>Correction:</strong> Request correction of inaccurate data</li>
                <li><strong>Deletion:</strong> Request deletion of your data</li>
                <li><strong>Portability:</strong> Request transfer of your data</li>
                <li><strong>Objection:</strong> Object to certain processing of your data</li>
                <li><strong>Withdrawal:</strong> Withdraw consent where applicable</li>
              </ul>
              <p className="text-[var(--foreground-muted)] mb-4">
                To exercise these rights, please contact us at privacy@creatorshack.com.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Cookies</h2>
              <p className="text-[var(--foreground-muted)] mb-4">
                We use cookies and similar technologies to:
              </p>
              <ul className="list-disc pl-6 text-[var(--foreground-muted)] space-y-2 mb-4">
                <li>Keep you signed in</li>
                <li>Remember your preferences</li>
                <li>Understand how you use our service</li>
                <li>Improve your experience</li>
              </ul>
              <p className="text-[var(--foreground-muted)] mb-4">
                You can control cookies through your browser settings. Note that disabling 
                cookies may affect the functionality of our service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Data Retention</h2>
              <p className="text-[var(--foreground-muted)] mb-4">
                We retain your personal data only as long as necessary to:
              </p>
              <ul className="list-disc pl-6 text-[var(--foreground-muted)] space-y-2 mb-4">
                <li>Provide you with our services</li>
                <li>Comply with legal obligations</li>
                <li>Resolve disputes</li>
                <li>Enforce our agreements</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">9. Children&apos;s Privacy</h2>
              <p className="text-[var(--foreground-muted)] mb-4">
                Our service is not intended for children under 13 years of age. We do not 
                knowingly collect personal information from children under 13. If you 
                believe we have collected information from a child under 13, please 
                contact us immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">10. International Transfers</h2>
              <p className="text-[var(--foreground-muted)] mb-4">
                Your information may be transferred to and processed in countries other 
                than your own. We ensure appropriate safeguards are in place to protect 
                your data in accordance with applicable laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">11. Changes to This Policy</h2>
              <p className="text-[var(--foreground-muted)] mb-4">
                We may update this privacy policy from time to time. We will notify you 
                of any changes by posting the new policy on this page and updating the 
                &quot;Last updated&quot; date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">12. Contact Us</h2>
              <p className="text-[var(--foreground-muted)] mb-4">
                If you have any questions about this privacy policy, please contact us:
              </p>
              <ul className="list-disc pl-6 text-[var(--foreground-muted)] space-y-2 mb-4">
                <li>By email: privacy@creatorshack.com</li>
                <li>Through our <Link href="/contact" className="text-[var(--creator-blue)] hover:underline">contact form</Link></li>
              </ul>
            </section>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[var(--border)]">
          <p className="text-[var(--foreground-muted)] text-sm">
            By using CreatorShack, you acknowledge that you have read and understood this 
            Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  );
}
