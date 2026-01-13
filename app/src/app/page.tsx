import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[var(--creator-red)] opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-[var(--creator-blue)] opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-[var(--creator-green)] opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 right-1/4 w-64 h-64 bg-[var(--creator-orange)] opacity-10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="animate-fade-in-up">
              <Image
                src="/logo.png"
                alt="CreatorShack"
                width={120}
                height={120}
                className="mx-auto mb-8 animate-float"
              />
            </div>
            
            <h1 className="animate-fade-in-up animation-delay-100 text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
              Your Creative
              <span className="block gradient-text">Toolkit Hub</span>
            </h1>
            
            <p className="animate-fade-in-up animation-delay-200 text-xl md:text-2xl text-[var(--foreground-muted)] mb-8 max-w-2xl mx-auto leading-relaxed">
              Access a multitude of powerful tools to supercharge your creative workflows. 
              All in one place, designed for creators like you.
            </p>
            
            <div className="animate-fade-in-up animation-delay-300 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/signup" className="btn-gradient text-lg px-8 py-4">
                Start Creating Free
              </Link>
              <Link href="/features" className="btn-secondary text-lg px-8 py-4">
                Explore Features
              </Link>
            </div>

            <p className="animate-fade-in-up animation-delay-400 text-sm text-[var(--foreground-muted)] mt-6">
              No credit card required • Free tier available forever
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-[var(--foreground-muted)]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-24 bg-[var(--background-secondary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Everything You Need to <span className="gradient-text">Create</span>
            </h2>
            <p className="text-[var(--foreground-muted)] text-lg max-w-2xl mx-auto">
              A comprehensive suite of tools designed to streamline your creative process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="card group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `${feature.color}20`, color: feature.color }}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-[var(--foreground-muted)]">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/features" className="btn-primary">
              View All Features
            </Link>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Trusted by <span className="gradient-text">Creators</span>
            </h2>
            <p className="text-[var(--foreground-muted)] text-lg">
              Join thousands of creative professionals who use CreatorShack daily
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl md:text-5xl font-bold gradient-text">10K+</p>
              <p className="text-[var(--foreground-muted)] mt-2">Active Users</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold gradient-text">50+</p>
              <p className="text-[var(--foreground-muted)] mt-2">Creative Tools</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold gradient-text">1M+</p>
              <p className="text-[var(--foreground-muted)] mt-2">Projects Created</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold gradient-text">99.9%</p>
              <p className="text-[var(--foreground-muted)] mt-2">Uptime</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg-animated opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Unleash Your <span className="gradient-text">Creativity</span>?
          </h2>
          <p className="text-xl text-[var(--foreground-muted)] mb-8">
            Join CreatorShack today and get access to all the tools you need to bring your ideas to life.
          </p>
          <Link href="/signup" className="btn-gradient text-lg px-8 py-4">
            Get Started for Free
          </Link>
        </div>
      </section>
    </div>
  );
}

const features = [
  {
    title: "Image Editor",
    description: "Professional-grade image editing tools with AI-powered enhancements.",
    color: "var(--creator-red)",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Video Tools",
    description: "Edit, compress, and transform your videos with ease.",
    color: "var(--creator-orange)",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Audio Studio",
    description: "Record, edit, and enhance audio with professional tools.",
    color: "var(--creator-yellow)",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
      </svg>
    ),
  },
  {
    title: "Design Assets",
    description: "Access thousands of templates, icons, and design resources.",
    color: "var(--creator-green)",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
  {
    title: "AI Assistant",
    description: "Get AI-powered suggestions and automate repetitive tasks.",
    color: "var(--creator-blue)",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Collaboration",
    description: "Work together with your team in real-time on any project.",
    color: "var(--creator-light-blue)",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];
