"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function SubNavbar() {
    const links = [
        { name: "Home", href: "/" },
        { name: "Learn with Forge", href: "/learn" },
        { name: "Build with Forge", href: "/build" },
        { name: "Grow with Forge", href: "/grow" },
        { name: "Events", href: "/events" },
        { name: "Contact Us", href: "/contact" },
    ];

    return (
        <div className="w-full border-b border-zinc-100 bg-white shadow-sm">
            <div className="mx-auto flex h-11 max-w-7xl items-center px-4 sm:px-6 lg:px-8">
                {/* Main Navigation Links */}
                <nav className="flex h-full items-center gap-6 sm:gap-8 overflow-x-auto no-scrollbar scroll-smooth flex-1">
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="relative flex h-full items-center whitespace-nowrap text-[13px] font-medium text-zinc-600 transition-all hover:text-indigo-600 group"
                        >
                            {link.name}
                            {(link.name.includes("Forge") || link.name === "Events") && (
                                <ChevronDown size={12} className="ml-1 text-zinc-400 group-hover:text-indigo-400 transition-colors" />
                            )}
                            {/* Animated Underline */}
                            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-indigo-600 transition-all duration-300 group-hover:w-full" />
                        </Link>
                    ))}
                </nav>

                {/* Right Section - CTA */}
                <div className="hidden items-center gap-6 border-l border-zinc-100 pl-6 sm:flex">
                    <Link
                        href="#"
                        className="text-[13px] font-semibold text-indigo-600 transition-colors hover:text-indigo-700"
                    >
                        Become an Instructor
                    </Link>
                    <Link
                        href="#"
                        className="text-[13px] font-medium text-zinc-500 transition-colors hover:text-zinc-900"
                    >
                        Business
                    </Link>
                </div>
            </div>
        </div>
    );
}
