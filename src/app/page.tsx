"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, GraduationCap, Code, Rocket, BookOpen, Users, Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-zinc-950 selection:bg-indigo-100 selection:text-indigo-700">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative overflow-hidden px-4 pt-24 pb-32 sm:px-6 lg:px-8">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_50%_50%,#f5f3ff_0%,#ffffff_100%)]" />
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50/50 px-3 py-1 text-sm font-semibold text-indigo-700"
              >
                <Zap size={14} />
                <span>Transforming Education for the Digital Age</span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mt-8 text-5xl font-extrabold tracking-tight text-zinc-900 sm:text-7xl"
              >
                Forge Your Success <br />
                <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">With Student Forge</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-600"
              >
                Master modern skills, collaborate with peers, and build a professional portfolio that stands out. Student Forge is where passion meets opportunity.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
              >
                <button className="group flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-indigo-600 px-8 text-lg font-semibold text-white transition-all hover:bg-indigo-700 hover:shadow-xl hover:shadow-indigo-200 active:scale-95 sm:w-auto">
                  Get Started for Free
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </button>
                <button className="flex h-14 w-full items-center justify-center rounded-2xl border border-zinc-200 bg-white px-8 text-lg font-semibold text-zinc-900 transition-all hover:border-zinc-300 hover:bg-zinc-50 active:scale-95 sm:w-auto">
                  View Programs
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="bg-zinc-50 py-24 sm:py-32">
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
      <footer className="border-t border-zinc-100 bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="flex items-center gap-2 text-zinc-900 group">
              <div className="relative flex h-8 w-8 items-center justify-center transition-transform group-hover:scale-110">
                <img
                  src="https://ik.imagekit.io/dypkhqxip/sf-next-logo"
                  alt="Student Forge Logo"
                  className="h-full w-full object-contain"
                />
              </div>
              <span className="text-lg font-bold tracking-tight">StudentForge</span>
            </div>
            <p className="text-sm text-zinc-500">
              &copy; 2024 Student Forge Inc. All rights reserved.
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
