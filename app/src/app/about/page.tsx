import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About - CreatorShack",
  description: "Learn about CreatorShack and our mission to empower creators everywhere.",
};

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-3xl mx-auto text-center">
          <Image
            src="/logo.png"
            alt="CreatorShack"
            width={80}
            height={80}
            className="mx-auto mb-6"
          />
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Empowering <span className="gradient-text">Creators</span> Everywhere
          </h1>
          <p className="text-xl text-[var(--foreground-muted)]">
            We believe everyone has the potential to create something amazing. 
            Our mission is to make professional creative tools accessible to all.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-[var(--background-secondary)] py-20 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-[var(--foreground-muted)]">
                <p>
                  CreatorShack was born from a simple frustration: creative professionals 
                  were spending more time switching between tools than actually creating.
                </p>
                <p>
                  We saw designers juggling a dozen subscriptions, video creators 
                  downloading multiple apps for simple tasks, and photographers 
                  wasting hours on repetitive edits that could be automated.
                </p>
                <p>
                  So we built CreatorShack — a unified platform where all your 
                  creative tools live together. No more context switching. No more 
                  subscription fatigue. Just pure creativity.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl gradient-bg-animated opacity-20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-6xl font-bold gradient-text">2024</p>
                  <p className="text-[var(--foreground-muted)] mt-2">Founded</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value) => (
            <div key={value.title} className="card text-center">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: `${value.color}20`, color: value.color }}
              >
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
              <p className="text-[var(--foreground-muted)]">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="bg-[var(--background-secondary)] py-20 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4 text-center">Meet the Team</h2>
          <p className="text-[var(--foreground-muted)] text-center mb-12 max-w-2xl mx-auto">
            A passionate group of creators, engineers, and designers working to build the future of creative tools.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div
                  className="w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-white"
                  style={{ background: member.color }}
                >
                  {member.initials}
                </div>
                <h3 className="font-semibold">{member.name}</h3>
                <p className="text-sm text-[var(--foreground-muted)]">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="card gradient-border p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold gradient-text">10K+</p>
              <p className="text-[var(--foreground-muted)] mt-1">Happy Creators</p>
            </div>
            <div>
              <p className="text-4xl font-bold gradient-text">50+</p>
              <p className="text-[var(--foreground-muted)] mt-1">Creative Tools</p>
            </div>
            <div>
              <p className="text-4xl font-bold gradient-text">180+</p>
              <p className="text-[var(--foreground-muted)] mt-1">Countries</p>
            </div>
            <div>
              <p className="text-4xl font-bold gradient-text">24/7</p>
              <p className="text-[var(--foreground-muted)] mt-1">Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Join Our <span className="gradient-text">Creative Community</span>
        </h2>
        <p className="text-lg text-[var(--foreground-muted)] mb-8">
          Be part of a growing community of creators who are building the future together.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/signup" className="btn-gradient text-lg px-8 py-4">
            Get Started Free
          </Link>
          <Link href="/contact" className="btn-secondary text-lg px-8 py-4">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}

const values = [
  {
    title: "Creator First",
    description: "Every decision we make starts with how it helps creators do their best work.",
    color: "var(--creator-red)",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Simplicity",
    description: "Powerful doesn't have to mean complicated. We make complex tools simple to use.",
    color: "var(--creator-green)",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Innovation",
    description: "We're constantly pushing boundaries with AI and cutting-edge technology.",
    color: "var(--creator-blue)",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
];

const team = [
  { name: "Alex Chen", role: "CEO & Founder", initials: "AC", color: "var(--creator-red)" },
  { name: "Sarah Kim", role: "CTO", initials: "SK", color: "var(--creator-orange)" },
  { name: "Marcus Johnson", role: "Head of Design", initials: "MJ", color: "var(--creator-green)" },
  { name: "Emily Torres", role: "Head of Product", initials: "ET", color: "var(--creator-blue)" },
];
