"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-white border-b border-zinc-50">
            <div className="mx-auto flex max-w-7xl flex-col items-center px-4 pt-12 pb-8 sm:px-6 lg:flex-row lg:px-8 lg:pt-20 lg:pb-12">
                {/* Left Content (Banner Style) */}
                <div className="relative z-10 w-full text-center lg:text-left lg:w-3/5 lg:pr-16 order-2 lg:order-1 mt-10 lg:mt-0">
                    <motion.h1
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl leading-[1.1] sm:leading-tight"
                    >
                        Forge Your Success <br />
                        <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">With Student Forge</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="mt-6 mx-auto lg:mx-0 max-w-lg text-[15px] sm:text-[16px] leading-relaxed text-zinc-600"
                    >
                        Master modern skills, collaborate with peers, and build a professional portfolio. Student Forge is where passion meets opportunity.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start"
                    >
                        <button className="group flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-indigo-600 px-6 text-sm font-semibold text-white transition-all hover:bg-indigo-700 active:scale-95 sm:w-auto">
                            Get Started for Free
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </button>
                        <button className="flex h-11 w-full items-center justify-center rounded-lg border border-zinc-200 bg-white px-6 text-sm font-semibold text-zinc-900 transition-all hover:bg-zinc-50 active:scale-95 sm:w-auto">
                            View Programs
                        </button>
                    </motion.div>

                    {/* Minimalist Trust Indicators */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="mt-10 flex flex-wrap justify-center lg:justify-start items-center gap-6 sm:gap-8 text-[11px] sm:text-[12px] font-medium uppercase tracking-widest text-zinc-400"
                    >
                        <div className="flex flex-col items-center lg:items-start">
                            <span className="text-zinc-900 text-lg font-semibold">10k+</span>
                            <span>Learners</span>
                        </div>
                        <div className="hidden sm:block h-4 w-px bg-zinc-200" />
                        <div className="flex flex-col items-center lg:items-start">
                            <span className="text-zinc-900 text-lg font-semibold">95%</span>
                            <span>Hiring</span>
                        </div>
                        <div className="hidden sm:block h-4 w-px bg-zinc-200" />
                        <div className="flex flex-col items-center lg:items-start">
                            <span className="text-zinc-900 text-lg font-semibold">4.9/5</span>
                            <span>Rating</span>
                        </div>
                    </motion.div>
                </div>

                {/* Right Illustration Area */}
                <div className="relative w-full lg:w-2/5 order-1 lg:order-2 flex justify-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="relative w-[85%] sm:w-full max-w-[350px] sm:max-w-[450px] lg:max-w-full"
                    >
                        <img
                            src="https://ik.imagekit.io/dypkhqxip/sf-next-hero"
                            alt="Student Forge Illustration"
                            className="relative z-10 w-full"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
