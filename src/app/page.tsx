"use client";

import Link from "next/link";
import { Code, Rocket, Users } from "lucide-react";
import Hero from "@/components/Hero";
import MissionVision from "@/components/MissionVision";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-zinc-950 selection:bg-indigo-100 selection:text-indigo-700">
      <main className="flex-grow">
        <Hero />
        <MissionVision />

        {/* Features Section */}
        <section id="features" className="bg-zinc-50 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-indigo-600 uppercase tracking-wide">Next Generation Learning</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
                Everything you need to thrive in the modern world
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                <FeatureCard
                  icon={<Code className="h-6 w-6" />}
                  title="Hands-on Projects"
                  description="Build real-world applications and projects that solidify your understanding and showcase your skills."
                />
                <FeatureCard
                  icon={<Users className="h-6 w-6" />}
                  title="Global Community"
                  description="Connect with fellow learners and mentors from around the world. Learn, share, and grow together."
                />
                <FeatureCard
                  icon={<Rocket className="h-6 w-6" />}
                  title="Career Acceleration"
                  description="Get access to exclusive job boards, interview prep, and career coaching to land your dream job."
                />
              </dl>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-100 bg-white py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="flex items-center gap-2 text-zinc-900 group">
              <div className="relative flex h-8 w-8 items-center justify-center transition-transform group-hover:scale-110">
                <img
                  src="/logo.png"
                  alt="Student Forge Logo"
                  className="h-full w-full object-contain"
                />
              </div>
              <span className="text-lg font-bold tracking-tight">StudentForge</span>
            </div>
            <p className="text-sm text-zinc-500">
              &copy; 2026 Student Forge Inc. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors">Twitter</Link>
              <Link href="#" className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors">LinkedIn</Link>
              <Link href="#" className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors">GitHub</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="group relative flex flex-col rounded-3xl border border-zinc-100 bg-white p-8 transition-all hover:border-indigo-100 hover:shadow-2xl hover:shadow-indigo-50">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 transition-colors group-hover:bg-indigo-600 group-hover:text-white">
        {icon}
      </div>
      <dt className="mt-6 text-xl font-bold text-zinc-900">{title}</dt>
      <dd className="mt-4 text-base leading-7 text-zinc-600">{description}</dd>
    </div>
  );
}
