"use client";

import { useState, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

function DashboardContent() {
  const searchParams = useSearchParams();
  const isWelcome = searchParams.get("welcome") === "true";
  const checkoutSuccess = searchParams.get("checkout") === "success";
  
  const [showWelcome, setShowWelcome] = useState(isWelcome);
  const [showCheckoutSuccess, setShowCheckoutSuccess] = useState(checkoutSuccess);

  // Mock user data - in production, this would come from your auth system
  const user = {
    name: "Creative User",
    email: "user@example.com",
    plan: "Free",
    avatar: null,
  };

  // Mock projects - in production, this would come from your database
  const projects = [
    { id: 1, name: "Brand Assets", type: "folder", updatedAt: "2 hours ago" },
    { id: 2, name: "Social Media Kit", type: "folder", updatedAt: "Yesterday" },
    { id: 3, name: "Product Photos", type: "folder", updatedAt: "3 days ago" },
  ];

  return (
    <>
      {/* Welcome Modal */}
      {showWelcome && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="card max-w-md mx-4 p-8 text-center animate-fade-in-up">
            <div className="w-16 h-16 rounded-full bg-[var(--creator-green)] bg-opacity-20 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-[var(--creator-green)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-2">Welcome to CreatorShack!</h2>
            <p className="text-[var(--foreground-muted)] mb-6">
              Your account has been created successfully. You&apos;re all set to start creating!
            </p>
            <button
              onClick={() => setShowWelcome(false)}
              className="btn-gradient px-8 py-3"
            >
              Get Started
            </button>
          </div>
        </div>
      )}

      {/* Checkout Success Modal */}
      {showCheckoutSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="card max-w-md mx-4 p-8 text-center animate-fade-in-up">
            <div className="w-16 h-16 rounded-full bg-[var(--creator-blue)] bg-opacity-20 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-[var(--creator-blue)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-2">Upgrade Successful!</h2>
            <p className="text-[var(--foreground-muted)] mb-6">
              Thank you for upgrading! Your new features are now available.
            </p>
            <button
              onClick={() => setShowCheckoutSuccess(false)}
              className="btn-gradient px-8 py-3"
            >
              Continue
            </button>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-1">Dashboard</h1>
            <p className="text-[var(--foreground-muted)]">
              Welcome back, {user.name}!
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/pricing" className="btn-secondary text-sm">
              Upgrade Plan
            </Link>
            <button className="btn-gradient text-sm">
              + New Project
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="card">
            <p className="text-sm text-[var(--foreground-muted)] mb-1">Current Plan</p>
            <p className="text-2xl font-bold">{user.plan}</p>
          </div>
          <div className="card">
            <p className="text-sm text-[var(--foreground-muted)] mb-1">Projects</p>
            <p className="text-2xl font-bold">{projects.length} / 5</p>
          </div>
          <div className="card">
            <p className="text-sm text-[var(--foreground-muted)] mb-1">Storage Used</p>
            <p className="text-2xl font-bold">256 MB</p>
          </div>
          <div className="card">
            <p className="text-sm text-[var(--foreground-muted)] mb-1">This Month</p>
            <p className="text-2xl font-bold">12 exports</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Actions */}
            <div className="card">
              <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {quickActions.map((action) => (
                  <button
                    key={action.name}
                    className="p-4 rounded-xl border border-[var(--border)] hover:border-[var(--creator-blue)] hover:bg-[var(--background-secondary)] transition-all text-center group"
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center mx-auto mb-2 transition-transform group-hover:scale-110"
                      style={{ backgroundColor: `${action.color}20`, color: action.color }}
                    >
                      {action.icon}
                    </div>
                    <p className="text-sm font-medium">{action.name}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Recent Projects */}
            <div className="card">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">Recent Projects</h2>
                <button className="text-sm text-[var(--creator-blue)] hover:underline">
                  View All
                </button>
              </div>
              
              {projects.length > 0 ? (
                <div className="space-y-3">
                  {projects.map((project) => (
                    <div
                      key={project.id}
                      className="flex items-center justify-between p-4 rounded-lg border border-[var(--border)] hover:border-[var(--creator-blue)] transition-colors cursor-pointer"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-[var(--creator-blue)] bg-opacity-20 flex items-center justify-center">
                          <svg className="w-5 h-5 text-[var(--creator-blue)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium">{project.name}</p>
                          <p className="text-sm text-[var(--foreground-muted)]">
                            Updated {project.updatedAt}
                          </p>
                        </div>
                      </div>
                      <svg className="w-5 h-5 text-[var(--foreground-muted)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-[var(--background-secondary)] flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-[var(--foreground-muted)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                    </svg>
                  </div>
                  <p className="text-[var(--foreground-muted)] mb-4">No projects yet</p>
                  <button className="btn-primary">Create Your First Project</button>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Profile Card */}
            <div className="card text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[var(--creator-blue)] to-[var(--creator-green)] flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                {user.name.charAt(0)}
              </div>
              <h3 className="font-semibold text-lg">{user.name}</h3>
              <p className="text-sm text-[var(--foreground-muted)] mb-4">{user.email}</p>
              <Link href="/dashboard/settings" className="btn-secondary text-sm w-full">
                Edit Profile
              </Link>
            </div>

            {/* Upgrade Card */}
            {user.plan === "Free" && (
              <div className="card gradient-border p-6">
                <h3 className="font-semibold mb-2">Upgrade to Pro</h3>
                <p className="text-sm text-[var(--foreground-muted)] mb-4">
                  Get unlimited projects, all tools, and priority support.
                </p>
                <Link href="/pricing" className="btn-gradient text-sm w-full block text-center">
                  View Plans
                </Link>
              </div>
            )}

            {/* Recent Activity */}
            <div className="card">
              <h3 className="font-semibold mb-4">Recent Activity</h3>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${activity.color}20`, color: activity.color }}
                    >
                      {activity.icon}
                    </div>
                    <div>
                      <p className="text-sm">{activity.text}</p>
                      <p className="text-xs text-[var(--foreground-muted)]">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function DashboardLoading() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header Skeleton */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <div className="h-8 w-48 bg-[var(--border)] rounded animate-pulse mb-2"></div>
          <div className="h-4 w-64 bg-[var(--border)] rounded animate-pulse"></div>
        </div>
        <div className="flex items-center gap-4">
          <div className="h-10 w-32 bg-[var(--border)] rounded animate-pulse"></div>
          <div className="h-10 w-32 bg-[var(--border)] rounded animate-pulse"></div>
        </div>
      </div>

      {/* Stats Grid Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="card">
            <div className="h-4 w-24 bg-[var(--border)] rounded animate-pulse mb-2"></div>
            <div className="h-8 w-16 bg-[var(--border)] rounded animate-pulse"></div>
          </div>
        ))}
      </div>

      {/* Content Skeleton */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="card h-64 animate-pulse bg-[var(--border)]"></div>
          <div className="card h-96 animate-pulse bg-[var(--border)]"></div>
        </div>
        <div className="space-y-6">
          <div className="card h-48 animate-pulse bg-[var(--border)]"></div>
          <div className="card h-40 animate-pulse bg-[var(--border)]"></div>
          <div className="card h-48 animate-pulse bg-[var(--border)]"></div>
        </div>
      </div>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-[var(--background-secondary)]">
      <Suspense fallback={<DashboardLoading />}>
        <DashboardContent />
      </Suspense>
    </div>
  );
}

const quickActions = [
  {
    name: "Edit Image",
    color: "var(--creator-red)",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    name: "Edit Video",
    color: "var(--creator-orange)",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    name: "Audio Tools",
    color: "var(--creator-yellow)",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
      </svg>
    ),
  },
  {
    name: "AI Generate",
    color: "var(--creator-blue)",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
];

const recentActivity = [
  {
    text: "Account created",
    time: "Just now",
    color: "var(--creator-green)",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    ),
  },
  {
    text: "Logged in",
    time: "Just now",
    color: "var(--creator-blue)",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
      </svg>
    ),
  },
];
