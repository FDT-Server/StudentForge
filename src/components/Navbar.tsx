"use client";

import Link from "next/link";
import { GraduationCap, Search, Bell, UserCircle } from "lucide-react";

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-40 w-full border-b border-zinc-100 bg-white/80 backdrop-blur-md">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-lg shadow-indigo-200">
                        <GraduationCap size={24} />
                    </div>
                    <span className="text-xl font-bold tracking-tight text-zinc-900">
                        Student<span className="text-indigo-600">Forge</span>
                    </span>
                </div>

                {/* Search Bar - Center */}
                <div className="hidden flex-1 max-w-md mx-8 lg:block">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
                        <input
                            type="text"
                            placeholder="Search for courses, skills, certificates..."
                            className="w-full rounded-full border border-zinc-200 bg-zinc-50 py-2 pl-10 pr-4 text-sm outline-none transition-all focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100"
                        />
                    </div>
                </div>

                {/* Right Actions */}
                <div className="flex items-center gap-4">
                    <button className="rounded-full p-2 text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 transition-colors">
                        <Bell size={20} />
                    </button>
                    <div className="h-6 w-px bg-zinc-200" />
                    <button className="flex items-center gap-2 rounded-full border border-zinc-200 px-3 py-1.5 transition-all hover:bg-zinc-50">
                        <UserCircle size={20} className="text-zinc-600" />
                        <span className="text-sm font-medium text-zinc-900 leading-none">Login</span>
                    </button>
                </div>
            </div>
        </nav>
    );
}
