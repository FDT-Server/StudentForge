"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Search, Bell, UserCircle, X, Command, Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isFocused, setIsFocused] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const suggestions = [
        "Web Development",
        "Data Science Mastery",
        "Digital Marketing Forge",
        "UI/UX Design Path",
    ];

    const mobileNavLinks = [
        { name: "Home", href: "/" },
        { name: "Learn with Forge", href: "/learn" },
        { name: "Build with Forge", href: "/build" },
        { name: "Grow with Forge", href: "/grow" },
        { name: "Events", href: "/events" },
        { name: "Contact Us", href: "/contact" },
    ];

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === "k") {
                e.preventDefault();
                inputRef.current?.focus();
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    return (
        <nav className="sticky top-0 z-40 w-full border-b border-zinc-100 bg-white/80 backdrop-blur-md">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="relative flex h-9 w-9 items-center justify-center transition-transform group-hover:scale-105">
                            <img
                                src="/logo.png"
                                alt="Student Forge Logo"
                                className="h-full w-full object-contain"
                            />
                        </div>
                        <span className="text-xl font-bold tracking-tight text-zinc-900">
                            Student<span className="text-indigo-600">Forge</span>
                        </span>
                    </Link>
                </div>

                {/* Search Bar - Center (Hidden on small mobile, simplified on tablets) */}
                <div className="hidden flex-1 max-w-lg mx-4 md:block lg:mx-8">
                    <div className="relative group">
                        <div className={`
              relative flex items-center w-full transition-all duration-300 ease-out
              ${isFocused ? "shadow-lg shadow-indigo-50" : "hover:border-zinc-300"}
            `}>
                            <Search
                                className={`absolute left-4 h-4 w-4 transition-colors duration-200 ${isFocused ? "text-indigo-600" : "text-zinc-400"}`}
                            />

                            <input
                                ref={inputRef}
                                type="text"
                                value={searchQuery}
                                onFocus={() => setIsFocused(true)}
                                onBlur={() => setTimeout(() => setIsFocused(false), 200)}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search for courses..."
                                className={`
                  w-full rounded-2xl border bg-zinc-50/50 py-2.5 pl-11 pr-12 text-sm outline-none transition-all text-zinc-900 placeholder:text-zinc-500
                  ${isFocused ? "border-indigo-500 bg-white ring-4 ring-indigo-50" : "border-zinc-200"}
                `}
                            />

                            <div className="absolute right-4 flex items-center gap-2">
                                {searchQuery ? (
                                    <button
                                        onClick={() => setSearchQuery("")}
                                        className="p-1 rounded-full hover:bg-zinc-100 text-zinc-400"
                                    >
                                        <X size={14} />
                                    </button>
                                ) : (
                                    <div className="hidden lg:flex items-center gap-1 rounded-md border border-zinc-200 bg-white px-1.5 py-0.5 text-[10px] font-medium text-zinc-400">
                                        <Command size={10} />
                                        <span>K</span>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Search Results Dropdown */}
                        <AnimatePresence>
                            {isFocused && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    className="absolute top-full mt-2 w-full overflow-hidden rounded-2xl border border-zinc-100 bg-white p-2 shadow-xl"
                                >
                                    <div className="px-3 py-2">
                                        <p className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400">Suggested</p>
                                        <div className="mt-2 space-y-1">
                                            {suggestions.map((item) => (
                                                <button
                                                    key={item}
                                                    className="flex w-full items-center gap-3 rounded-xl px-3 py-2 text-sm text-zinc-600 transition-colors hover:bg-indigo-50 hover:text-indigo-600"
                                                >
                                                    <Search size={14} className="text-zinc-300" />
                                                    {item}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Right Actions */}
                <div className="flex items-center gap-1 sm:gap-3">
                    {/* Mobile Search Toggle (Visible only on mobile) */}
                    <button className="p-2 text-zinc-500 hover:bg-zinc-100 rounded-full md:hidden">
                        <Search size={20} />
                    </button>

                    <button className="hidden sm:flex items-center gap-2 rounded-full bg-red-600 px-4 py-2 text-xs font-bold text-white transition-all hover:bg-red-700 active:scale-95 shadow-sm shadow-red-100">
                        <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" />
                        </svg>
                        <span className="">SF Merch</span>
                    </button>

                    <div className="hidden h-6 w-px bg-zinc-200 sm:block" />

                    <button className="hidden items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 transition-all hover:bg-zinc-50 active:scale-95 shadow-sm sm:flex">
                        <UserCircle size={20} className="text-zinc-600" />
                        <span className="text-sm font-semibold text-zinc-900">Login</span>
                    </button>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="p-2 text-zinc-600 hover:bg-zinc-100 rounded-full md:hidden"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="w-full bg-white border-b border-zinc-100 md:hidden overflow-hidden"
                    >
                        <div className="px-4 py-6 space-y-4">
                            {mobileNavLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block text-base font-medium text-zinc-600 hover:text-indigo-600 transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="pt-4 border-t border-zinc-100">
                                <button className="w-full flex items-center justify-center gap-2 rounded-xl bg-indigo-600 py-3 text-sm font-semibold text-white">
                                    <UserCircle size={20} />
                                    Login to Account
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
