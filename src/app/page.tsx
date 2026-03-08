"use client";

import Link from "next/link";
import Hero from "@/components/Hero";
import MissionVision from "@/components/MissionVision";
import Ecosystem from "@/components/Ecosystem";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-zinc-950 selection:bg-indigo-100 selection:text-indigo-700">
      <main className="flex-grow">
        <Hero />
        <MissionVision />
        <Ecosystem />
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
