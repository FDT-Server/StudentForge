"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-white">
            {/* Background Decorative Element */}
            <div className="absolute right-0 top-0 h-full w-1/3 bg-[radial-gradient(ellipse_at_center,#f5f3ff_0%,#ffffff_100%)] opacity-60" />

            <div className="mx-auto flex max-w-7xl flex-col items-center px-4 pt-12 pb-16 sm:px-6 lg:flex-row lg:px-8 lg:pt-20 lg:pb-24">
                {/* Left Content */}
                <div className="relative z-10 w-full lg:w-1/2 lg:pr-10">
                    <motion.div
                        initial={{ opacity: 0, x: -15 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4 }}
                        className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50/40 px-3 py-1 text-[13px] font-semibold text-indigo-700"
                    >
                        <Zap size={12} />
                        <span>Transforming Education for 2026</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, x: -15 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="mt-6 text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-6xl"
                    >
                        Forge Your Success <br />
                        <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent italic">With Student Forge</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, x: -15 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        className="mt-6 max-w-lg text-[17px] leading-7 text-zinc-600"
                    >
                        Master modern skills, collaborate with peers, and build a professional portfolio. Student Forge is where passion meets opportunity.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                        className="mt-8 flex flex-col gap-3 sm:flex-row"
                    >
                        <button className="group flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 text-base font-semibold text-white transition-all hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-100 active:scale-95 sm:w-auto">
                            Get Started for Free
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </button>
                        <button className="flex h-12 w-full items-center justify-center rounded-xl border border-zinc-200 bg-white px-6 text-base font-semibold text-zinc-900 transition-all hover:border-zinc-300 hover:bg-zinc-50 active:scale-95 sm:w-auto">
                            View Programs
                        </button>
                    </motion.div>

                    {/* Trust Indicators */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="mt-10 flex items-center gap-8 text-zinc-400"
                    >
                        <div className="flex flex-col">
                            <span className="text-xl font-bold text-zinc-900 leading-none">10k+</span>
                            <span className="mt-1 text-[11px] uppercase tracking-wider font-medium">Students</span>
                        </div>
                        <div className="h-6 w-px bg-zinc-200" />
                        <div className="flex flex-col">
                            <span className="text-xl font-bold text-zinc-900 leading-none">95%</span>
                            <span className="mt-1 text-[11px] uppercase tracking-wider font-medium">Placement</span>
                        </div>
                        <div className="h-6 w-px bg-zinc-200" />
                        <div className="flex flex-col text-zinc-900">
                            <span className="text-lg font-bold">4.9/5</span>
                            <span className="text-[11px] uppercase tracking-wider text-zinc-400 font-medium">Rating</span>
                        </div>
                    </motion.div>
                </div>

                {/* Right Image/Visual Area */}
                <div className="relative mt-12 w-full lg:mt-0 lg:w-1/2">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="relative mx-auto max-w-[420px] lg:max-w-none"
                    >
                        {/* Image Backdrop Decorations */}
                        <div className="absolute -left-2 -top-2 h-20 w-20 rounded-full bg-indigo-50 opacity-40 blur-xl" />

                        <img
                            src="/hero-image.png"
                            alt="Student Learning Experience"
                            className="relative z-10 w-full drop-shadow-xl saturate-[1.1]"
                        />

                        {/* Floating Element */}
                        <motion.div
                            animate={{ y: [0, -6, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -right-2 top-10 z-20 hidden rounded-xl border border-zinc-100 bg-white/90 p-3 shadow-lg backdrop-blur-sm lg:block"
                        >
                            <div className="flex items-center gap-2">
                                <div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                                <span className="text-[12px] font-bold text-zinc-800">Live Workshop Started</span>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
