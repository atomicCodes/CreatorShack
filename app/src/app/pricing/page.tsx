import Link from "next/link";

export const metadata = {
  title: "Pricing - CreatorShack",
  description: "Simple, transparent pricing for creators of all sizes.",
};

export default function PricingPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Simple, <span className="gradient-text">Transparent</span> Pricing
          </h1>
          <p className="text-xl text-[var(--foreground-muted)]">
            Choose the plan that fits your creative needs. Upgrade or downgrade anytime.
          </p>
        </div>
      </section>

      {/* Pricing Toggle */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex items-center justify-center gap-4">
          <span className="font-medium">Monthly</span>
          <div className="relative">
            <input type="checkbox" id="billing-toggle" className="sr-only peer" />
            <label
              htmlFor="billing-toggle"
              className="block w-14 h-8 bg-[var(--border)] rounded-full cursor-pointer peer-checked:bg-[var(--creator-blue)] transition-colors"
            >
              <span className="absolute left-1 top-1 w-6 h-6 bg-white rounded-full transition-transform peer-checked:translate-x-6"></span>
            </label>
          </div>
          <span className="font-medium">
            Yearly <span className="text-[var(--creator-green)] text-sm">(Save 20%)</span>
          </span>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={plan.name}
              className={`card relative ${plan.popular ? "gradient-border" : ""}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[var(--creator-blue)] text-white text-sm font-medium rounded-full">
                  Most Popular
                </div>
              )}
              
              <div className="p-6">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${plan.color}20`, color: plan.color }}
                >
                  {plan.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-[var(--foreground-muted)] mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-[var(--foreground-muted)]">/month</span>
                  {plan.price > 0 && (
                    <p className="text-sm text-[var(--foreground-muted)] mt-1">
                      ${plan.yearlyPrice}/month billed yearly
                    </p>
                  )}
                </div>

                <Link
                  href={plan.price === 0 ? "/signup" : "/signup?plan=" + plan.name.toLowerCase()}
                  className={`block w-full text-center py-3 rounded-lg font-semibold transition-all ${
                    plan.popular
                      ? "btn-gradient"
                      : "btn-secondary"
                  }`}
                >
                  {plan.cta}
                </Link>

                <div className="mt-8">
                  <p className="font-semibold mb-4">What&apos;s included:</p>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <svg
                          className="w-5 h-5 shrink-0 mt-0.5"
                          style={{ color: plan.color }}
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
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Enterprise CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="card p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-[var(--foreground-muted)] mb-6 max-w-2xl mx-auto">
            For large teams and enterprises, we offer custom pricing and features. 
            Let&apos;s discuss your specific needs.
          </p>
          <Link href="/contact" className="btn-secondary">
            Contact Sales
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="card">
              <h3 className="font-semibold mb-2">{faq.question}</h3>
              <p className="text-[var(--foreground-muted)] text-sm">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Money Back Guarantee */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-3 bg-[var(--creator-green)] bg-opacity-10 px-6 py-3 rounded-full mb-6">
          <svg className="w-6 h-6 text-[var(--creator-green)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          <span className="font-semibold text-[var(--creator-green)]">30-Day Money Back Guarantee</span>
        </div>
        <p className="text-[var(--foreground-muted)]">
          Try CreatorShack risk-free. If you&apos;re not satisfied within the first 30 days, 
          we&apos;ll give you a full refund, no questions asked.
        </p>
      </section>
    </div>
  );
}

const pricingPlans = [
  {
    name: "Free",
    description: "Perfect for getting started and exploring CreatorShack.",
    price: 0,
    yearlyPrice: 0,
    cta: "Get Started Free",
    popular: false,
    color: "var(--creator-green)",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    features: [
      "5 projects",
      "Basic image tools",
      "1GB storage",
      "Community support",
      "Standard export quality",
      "CreatorShack watermark",
    ],
  },
  {
    name: "Pro",
    description: "For serious creators who need more power and flexibility.",
    price: 19,
    yearlyPrice: 15,
    cta: "Start Free Trial",
    popular: true,
    color: "var(--creator-blue)",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    features: [
      "Unlimited projects",
      "All creative tools",
      "50GB storage",
      "Priority support",
      "HD export quality",
      "No watermark",
      "AI-powered features",
      "Team collaboration (up to 3)",
    ],
  },
  {
    name: "Team",
    description: "For teams and businesses that need to collaborate at scale.",
    price: 49,
    yearlyPrice: 39,
    cta: "Start Free Trial",
    popular: false,
    color: "var(--creator-orange)",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    features: [
      "Everything in Pro",
      "Unlimited storage",
      "Unlimited team members",
      "Admin controls",
      "SSO & advanced security",
      "4K export quality",
      "Custom branding",
      "Dedicated account manager",
      "API access",
    ],
  },
];

const faqs = [
  {
    question: "Can I switch plans at any time?",
    answer: "Yes! You can upgrade or downgrade your plan at any time. When upgrading, you'll be prorated for the remainder of your billing cycle. When downgrading, the change will take effect at your next billing date.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, Mastercard, American Express) and PayPal. For Team plans, we also offer invoice billing.",
  },
  {
    question: "Is there a free trial for paid plans?",
    answer: "Yes! Both Pro and Team plans come with a 14-day free trial. No credit card required to start.",
  },
  {
    question: "What happens to my projects if I downgrade?",
    answer: "Your projects will remain safe. However, you may lose access to some premium features. If you exceed storage limits, you'll need to remove some files before uploading new ones.",
  },
  {
    question: "Do you offer discounts for students or nonprofits?",
    answer: "Yes! We offer 50% off for students and educators, and special pricing for registered nonprofits. Contact us to learn more.",
  },
];
