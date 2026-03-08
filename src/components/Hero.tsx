"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-[85vh] overflow-hidden bg-white">
            {/* Background Decorative Element */}
            <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(ellipse_at_center,#f5f3ff_0%,#ffffff_100%)] opacity-70" />

            <div className="mx-auto flex max-w-7xl flex-col items-center px-4 pt-20 pb-20 sm:px-6 lg:flex-row lg:px-8 lg:pt-32">
                {/* Left Content */}
                <div className="relative z-10 w-full lg:w-1/2 lg:pr-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50/50 px-3 py-1 text-sm font-semibold text-indigo-700"
                    >
                        <Zap size={14} />
                        <span>Transforming Education for 2026</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="mt-8 text-5xl font-extrabold tracking-tight text-zinc-900 sm:text-7xl"
                    >
                        Forge Your Success <br />
                        <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">With Student Forge</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mt-8 max-w-xl text-lg leading-8 text-zinc-600"
                    >
                        Master modern skills, collaborate with peers, and build a professional portfolio that stands out. Student Forge is where passion meets opportunity in the digital age.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="mt-10 flex flex-col gap-4 sm:flex-row"
                    >
                        <button className="group flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-indigo-600 px-8 text-lg font-semibold text-white transition-all hover:bg-indigo-700 hover:shadow-xl hover:shadow-indigo-200 active:scale-95 sm:w-auto">
                            Get Started for Free
                            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </button>
                        <button className="flex h-14 w-full items-center justify-center rounded-2xl border border-zinc-200 bg-white px-8 text-lg font-semibold text-zinc-900 transition-all hover:border-zinc-300 hover:bg-zinc-50 active:scale-95 sm:w-auto">
                            View Programs
                        </button>
                    </motion.div>

                    {/* Trust Indicators */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="mt-12 flex items-center gap-6 text-zinc-400"
                    >
                        <div className="flex flex-col">
                            <span className="text-2xl font-bold text-zinc-900">10k+</span>
                            <span className="text-xs uppercase tracking-wider">Active Students</span>
                        </div>
                        <div className="h-8 w-px bg-zinc-200" />
                        <div className="flex flex-col">
                            <span className="text-2xl font-bold text-zinc-900">95%</span>
                            <span className="text-xs uppercase tracking-wider">Job Placement</span>
                        </div>
                    </motion.div>
                </div>

                {/* Right Image/Visual Area */}
                <div className="relative mt-20 w-full lg:mt-0 lg:w-1/2">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 0.8, type: "spring" }}
                        className="relative mx-auto max-w-[500px] lg:max-w-none"
                    >
                        {/* Image Backdrop Decorations */}
                        <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full bg-indigo-100 opacity-50 blur-2xl" />
                        <div className="absolute -right-8 -bottom-8 h-40 w-40 rounded-full bg-violet-100 opacity-50 blur-3xl" />

                        <img
                            src="/hero-image.png"
                            alt="Student Learning Experience"
                            className="relative z-10 w-full drop-shadow-2xl"
                        />

                        {/* Floating Elements (Optional Visual Polish) */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -right-4 top-1/4 z-20 hidden rounded-2xl border border-white bg-white/80 p-4 shadow-xl backdrop-blur-md lg:block"
                        >
                            <div className="flex items-center gap-3">
                                <div className="h-2 w-2 rounded-full bg-green-500" />
                                <span className="text-sm font-semibold">Live Workshop Started</span>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
