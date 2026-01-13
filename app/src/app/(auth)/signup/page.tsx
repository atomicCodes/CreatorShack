"use client";

import { useState, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

function SignupForm() {
  const searchParams = useSearchParams();
  const selectedPlan = searchParams.get("plan") || "free";
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords don't match");
      return;
    }

    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }

    if (!agreedToTerms) {
      setError("Please agree to the terms and privacy policy");
      return;
    }

    setIsLoading(true);

    try {
      // TODO: Implement actual registration
      console.log("Signup attempt:", { name: formData.name, email: formData.email, plan: selectedPlan });
      
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Redirect to dashboard on success
      window.location.href = "/dashboard?welcome=true";
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleOAuthSignup = async (provider: string) => {
    // TODO: Implement OAuth authentication
    console.log("OAuth signup with:", provider);
    
    // Placeholder - redirect to OAuth provider
    alert(`OAuth signup with ${provider} - Coming soon!`);
  };

  return (
    <>
      <div className="text-center mb-8">
        <Link href="/" className="inline-block">
          <Image
            src="/logo.png"
            alt="CreatorShack"
            width={60}
            height={60}
            className="mx-auto mb-4"
          />
        </Link>
        <h1 className="text-3xl font-bold mb-2">Create Your Account</h1>
        <p className="text-[var(--foreground-muted)]">
          Start your creative journey with CreatorShack
        </p>
        {selectedPlan !== "free" && (
          <p className="mt-2 text-sm">
            Selected plan:{" "}
            <span className="font-semibold text-[var(--creator-blue)] capitalize">
              {selectedPlan}
            </span>
          </p>
        )}
      </div>

      <div className="card p-8">
        {/* OAuth Buttons */}
        <div className="space-y-3 mb-6">
          <button
            onClick={() => handleOAuthSignup("google")}
            className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-lg border border-[var(--border)] hover:bg-[var(--background-secondary)] transition-colors font-medium"
          >
            <GoogleIcon />
            Continue with Google
          </button>
          <button
            onClick={() => handleOAuthSignup("github")}
            className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-lg border border-[var(--border)] hover:bg-[var(--background-secondary)] transition-colors font-medium"
          >
            <GitHubIcon />
            Continue with GitHub
          </button>
          <button
            onClick={() => handleOAuthSignup("apple")}
            className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-lg border border-[var(--border)] hover:bg-[var(--background-secondary)] transition-colors font-medium"
          >
            <AppleIcon />
            Continue with Apple
          </button>
        </div>

        {/* Divider */}
        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-[var(--border)]"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-[var(--background)] text-[var(--foreground-muted)]">
              or sign up with email
            </span>
          </div>
        </div>

        {/* Email Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="p-3 rounded-lg bg-red-500 bg-opacity-10 border border-red-500 border-opacity-20 text-red-500 text-sm">
              {error}
            </div>
          )}

          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-[var(--background)] focus:outline-none focus:border-[var(--creator-blue)] transition-colors"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-[var(--background)] focus:outline-none focus:border-[var(--creator-blue)] transition-colors"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              required
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-[var(--background)] focus:outline-none focus:border-[var(--creator-blue)] transition-colors"
              placeholder="••••••••"
            />
            <p className="text-xs text-[var(--foreground-muted)] mt-1">
              Must be at least 8 characters
            </p>
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              required
              value={formData.confirmPassword}
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-[var(--background)] focus:outline-none focus:border-[var(--creator-blue)] transition-colors"
              placeholder="••••••••"
            />
          </div>

          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="terms"
              checked={agreedToTerms}
              onChange={(e) => setAgreedToTerms(e.target.checked)}
              className="mt-1"
            />
            <label htmlFor="terms" className="text-sm text-[var(--foreground-muted)]">
              I agree to the{" "}
              <Link href="/terms" className="text-[var(--creator-blue)] hover:underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="text-[var(--creator-blue)] hover:underline">
                Privacy Policy
              </Link>
            </label>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full btn-gradient py-3 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? "Creating account..." : "Create Account"}
          </button>
        </form>
      </div>

      <p className="text-center mt-6 text-[var(--foreground-muted)]">
        Already have an account?{" "}
        <Link
          href="/login"
          className="text-[var(--creator-blue)] hover:underline font-medium"
        >
          Sign in
        </Link>
      </p>
    </>
  );
}

function SignupLoading() {
  return (
    <>
      <div className="text-center mb-8">
        <div className="w-[60px] h-[60px] bg-[var(--border)] rounded-full mx-auto mb-4 animate-pulse"></div>
        <div className="h-8 bg-[var(--border)] rounded w-48 mx-auto mb-2 animate-pulse"></div>
        <div className="h-4 bg-[var(--border)] rounded w-64 mx-auto animate-pulse"></div>
      </div>
      <div className="card p-8">
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-12 bg-[var(--border)] rounded-lg animate-pulse"></div>
          ))}
        </div>
      </div>
    </>
  );
}

export default function SignupPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 flex items-center justify-center">
      <div className="w-full max-w-md px-4">
        <Suspense fallback={<SignupLoading />}>
          <SignupForm />
        </Suspense>
      </div>
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}
