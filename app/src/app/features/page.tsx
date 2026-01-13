import Link from "next/link";

export const metadata = {
  title: "Features - CreatorShack",
  description: "Explore all the powerful creative tools available in CreatorShack.",
};

export default function FeaturesPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Powerful Tools for <span className="gradient-text">Every Creator</span>
          </h1>
          <p className="text-xl text-[var(--foreground-muted)]">
            Everything you need to bring your creative vision to life, all in one platform.
          </p>
        </div>
      </section>

      {/* Feature Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {featureCategories.map((category, categoryIndex) => (
          <div key={category.name} className={`mb-24 ${categoryIndex % 2 === 1 ? "bg-[var(--background-secondary)] -mx-4 px-4 py-16 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8" : ""}`}>
            <div className="flex items-center gap-4 mb-8">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: `${category.color}20`, color: category.color }}
              >
                {category.icon}
              </div>
              <h2 className="text-3xl font-bold">{category.name}</h2>
            </div>
            <p className="text-[var(--foreground-muted)] text-lg mb-8 max-w-2xl">
              {category.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.features.map((feature) => (
                <div key={feature.name} className="card">
                  <div className="flex items-start gap-3">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                      style={{ backgroundColor: `${category.color}15`, color: category.color }}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{feature.name}</h3>
                      <p className="text-sm text-[var(--foreground-muted)]">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Coming Soon */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="card gradient-border p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">More Tools Coming Soon</h2>
          <p className="text-[var(--foreground-muted)] mb-6">
            We&apos;re constantly adding new features based on your feedback. Have a suggestion?
          </p>
          <Link href="/contact" className="btn-secondary">
            Request a Feature
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to <span className="gradient-text">Get Started</span>?
        </h2>
        <p className="text-lg text-[var(--foreground-muted)] mb-8">
          Join thousands of creators who are already using CreatorShack to power their workflows.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/signup" className="btn-gradient text-lg px-8 py-4">
            Start Free Trial
          </Link>
          <Link href="/pricing" className="btn-secondary text-lg px-8 py-4">
            View Pricing
          </Link>
        </div>
      </section>
    </div>
  );
}

const featureCategories = [
  {
    name: "Image Tools",
    description: "Professional-grade image editing and manipulation tools powered by AI.",
    color: "var(--creator-red)",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    features: [
      { name: "Background Removal", description: "Instantly remove backgrounds from any image with AI precision." },
      { name: "Image Resizer", description: "Resize images for any platform with smart cropping." },
      { name: "Format Converter", description: "Convert between PNG, JPG, WebP, and more." },
      { name: "Image Compressor", description: "Reduce file size without losing quality." },
      { name: "Color Correction", description: "AI-powered color grading and correction." },
      { name: "Batch Processing", description: "Edit multiple images at once." },
    ],
  },
  {
    name: "Video Tools",
    description: "Everything you need to create, edit, and optimize your video content.",
    color: "var(--creator-orange)",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    features: [
      { name: "Video Trimmer", description: "Cut and trim videos with precision." },
      { name: "Video Compressor", description: "Reduce video size while maintaining quality." },
      { name: "Format Converter", description: "Convert videos to any format." },
      { name: "Thumbnail Generator", description: "Create eye-catching thumbnails." },
      { name: "GIF Maker", description: "Convert videos to animated GIFs." },
      { name: "Subtitles Generator", description: "Auto-generate captions with AI." },
    ],
  },
  {
    name: "Audio Tools",
    description: "Record, edit, and enhance audio for podcasts, music, and more.",
    color: "var(--creator-yellow)",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
      </svg>
    ),
    features: [
      { name: "Audio Recorder", description: "Record high-quality audio directly in browser." },
      { name: "Noise Removal", description: "AI-powered background noise reduction." },
      { name: "Audio Trimmer", description: "Cut and splice audio with ease." },
      { name: "Voice Enhancer", description: "Improve voice clarity and presence." },
      { name: "Format Converter", description: "Convert between MP3, WAV, FLAC, and more." },
      { name: "Transcription", description: "Convert speech to text automatically." },
    ],
  },
  {
    name: "Design Tools",
    description: "Create stunning graphics and designs without any design experience.",
    color: "var(--creator-green)",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    features: [
      { name: "Template Library", description: "Thousands of customizable templates." },
      { name: "Color Palette Generator", description: "Create beautiful color schemes." },
      { name: "Font Pairing", description: "Find perfect font combinations." },
      { name: "Icon Library", description: "Access thousands of vector icons." },
      { name: "Mockup Generator", description: "Showcase designs in realistic contexts." },
      { name: "Brand Kit", description: "Keep your brand assets organized." },
    ],
  },
  {
    name: "AI Tools",
    description: "Leverage the power of AI to automate and enhance your creative work.",
    color: "var(--creator-blue)",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    features: [
      { name: "AI Image Generator", description: "Generate images from text descriptions." },
      { name: "AI Writer", description: "Generate copy, captions, and content." },
      { name: "AI Upscaler", description: "Enhance and upscale images with AI." },
      { name: "Smart Suggestions", description: "Get AI-powered creative suggestions." },
      { name: "Auto Tagging", description: "Automatically tag and categorize content." },
      { name: "Style Transfer", description: "Apply artistic styles to images." },
    ],
  },
  {
    name: "Productivity",
    description: "Tools to help you stay organized and collaborate with your team.",
    color: "var(--creator-light-blue)",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    features: [
      { name: "Project Manager", description: "Organize your creative projects." },
      { name: "Team Collaboration", description: "Work together in real-time." },
      { name: "Asset Library", description: "Store and organize all your assets." },
      { name: "Version History", description: "Track changes and restore versions." },
      { name: "Comments & Feedback", description: "Get feedback from clients and team." },
      { name: "Export & Share", description: "Export in any format and share easily." },
    ],
  },
];
