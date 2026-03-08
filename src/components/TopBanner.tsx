"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function TopBanner() {
    return (
        <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-zinc-900 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
            <div
                className="absolute left-[max(-7rem,50%-40rem)] top-1/2 -z-10 transform-gpu blur-2xl"
                aria-hidden="true"
            >
                <div
                    className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-indigo-500 to-violet-500 opacity-30"
                    style={{
                        clipPath:
                            "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 44.5% 58.3%, 63.1% 29.5%)",
                    }}
                />
            </div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <p className="text-sm leading-6 text-white flex items-center gap-2">
                    <Sparkles size={14} className="text-indigo-400" />
                    <strong className="font-semibold">Student Forge Fall 2024</strong>
                    <svg
                        viewBox="0 0 2 2"
                        className="mx-2 inline h-0.5 w-0.5 fill-current"
                        aria-hidden="true"
                    >
                        <circle cx={1} cy={1} r={1} />
                    </svg>
                    New courses and scholarship opportunities are now open.
                </p>
                <a
                    href="#"
                    className="flex-none rounded-full bg-white px-3.5 py-1 text-sm font-semibold text-zinc-900 shadow-sm hover:bg-zinc-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 transition-all flex items-center gap-1 group"
                >
                    Check them out <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </a>
            </div>
            <div className="flex flex-1 justify-end">
            </div>
        </div>
    );
}
