"use client";

import Link from "next/link";
import { ChevronDown, Home, BookOpen, Code, TrendingUp, Calendar, Mail } from "lucide-react";

export default function SubNavbar() {
    const links = [
        { name: "Home", href: "/", icon: <Home size={16} /> },
        { name: "Learn with Forge", href: "/learn", icon: <BookOpen size={16} /> },
        { name: "Build with Forge", href: "/build", icon: <Code size={16} /> },
        { name: "Grow with Forge", href: "/grow", icon: <TrendingUp size={16} /> },
        { name: "Events", href: "/events", icon: <Calendar size={16} /> },
        { name: "Contact Us", href: "/contact", icon: <Mail size={16} /> },
    ];

    return (
        <div className="w-full border-b border-zinc-100 bg-white">
            <div className="mx-auto flex h-12 max-w-7xl items-center gap-8 px-4 sm:px-6 lg:px-8 overflow-x-auto no-scrollbar">
                {links.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        className="flex items-center gap-1.5 whitespace-nowrap text-sm font-medium text-zinc-600 transition-colors hover:text-indigo-600 group"
                    >
                        <span className="text-zinc-400 group-hover:text-indigo-500 transition-colors">
                            {link.icon}
                        </span>
                        {link.name}
                        {link.name !== "Home" && link.name !== "Contact Us" && (
                            <ChevronDown size={14} className="text-zinc-300 group-hover:text-indigo-300 transition-colors" />
                        )}
                    </Link>
                ))}

                <div className="ml-auto flex items-center gap-6">
                    <Link href="#" className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-700 sm:block">
                        Become an Instructor
                    </Link>
                    <Link href="#" className="hidden text-sm font-medium text-zinc-500 hover:text-zinc-900 sm:block">
                        Student Forge for Business
                    </Link>
                </div>
            </div>
        </div>
    );
}
