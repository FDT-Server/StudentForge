"use client";

import Link from "next/link";
import { ChevronDown, LayoutGrid, BookOpen, Laptop, Briefcase, Award } from "lucide-react";

export default function SubNavbar() {
    const categories = [
        { name: "Browse", icon: <LayoutGrid size={16} /> },
        { name: "Web Development", icon: <Laptop size={16} /> },
        { name: "Data Science", icon: <BookOpen size={16} /> },
        { name: "Business", icon: <Briefcase size={16} /> },
        { name: "Design", icon: <Award size={16} /> },
    ];

    return (
        <div className="w-full border-b border-zinc-100 bg-white">
            <div className="mx-auto flex h-12 max-w-7xl items-center gap-8 px-4 sm:px-6 lg:px-8 overflow-x-auto no-scrollbar">
                {categories.map((cat) => (
                    <Link
                        key={cat.name}
                        href="#"
                        className="flex items-center gap-1.5 whitespace-nowrap text-sm font-medium text-zinc-600 transition-colors hover:text-indigo-600 group"
                    >
                        <span className="text-zinc-400 group-hover:text-indigo-500 transition-colors">
                            {cat.icon}
                        </span>
                        {cat.name}
                        <ChevronDown size={14} className="text-zinc-300" />
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
