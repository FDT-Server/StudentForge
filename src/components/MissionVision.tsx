"use client";

import { motion } from "framer-motion";
import { Check, Target, Compass } from "lucide-react";

export default function MissionVision() {
    const visionItems = [
        "Build the Strongest Student Network.",
        "Access to Opportunities & Events.",
        "Mentors and Global Exposure."
    ];

    return (
        <section className="relative py-12 md:py-20 overflow-hidden bg-white">
            {/* Background Decorative Element */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full opacity-[0.03] pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--color-indigo-600)_0%,_transparent_70%)]" />
            </div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center mb-10 md:mb-14">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl lg:text-5xl"
                    >
                        Building the Future, <span className="text-indigo-600">Together</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="mt-3 text-base md:text-lg text-zinc-600 max-w-2xl mx-auto"
                    >
                        We are more than just a platform; we are a movement dedicated to unlocking human potential.
                    </motion.p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">

                    {/* Vision Card - Modern Glass Layout */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative flex flex-col justify-between rounded-[2.5rem] bg-indigo-600 p-6 md:p-10 text-white shadow-2xl shadow-indigo-200"
                    >
                        <div>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="bg-white/10 p-2.5 rounded-2xl backdrop-blur-md border border-white/20">
                                    <Compass className="h-5 w-5 text-white" />
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold tracking-tight">Our Vision</h3>
                            </div>

                            <p className="text-lg md:text-xl font-medium leading-tight mb-8 text-indigo-50">
                                To build a dynamic student platform where every learner grows into a <span className="text-white underline decoration-indigo-300 underline-offset-8">confident, future-ready professional.</span>
                            </p>

                            <div className="space-y-3 mb-10">
                                {visionItems.map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.2 + (i * 0.1) }}
                                        className="flex items-center gap-3"
                                    >
                                        <div className="flex-shrink-0 h-4 w-4 rounded-full bg-indigo-500 flex items-center justify-center border border-indigo-400">
                                            <Check size={8} strokeWidth={4} />
                                        </div>
                                        <span className="text-sm md:text-[16px] text-indigo-100 font-medium">{item}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-auto pt-6 border-t border-white/10">
                            <p className="text-indigo-200 text-[13px] md:text-sm italic font-semibold leading-relaxed">
                                "We’re here to bridge the gap between where students are and where they can be."
                            </p>
                        </div>
                    </motion.div>

                    {/* Mission Card - Sleek Minimalist Layout */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="relative flex flex-col rounded-[2.5rem] border-2 border-zinc-100 bg-white p-6 md:p-10 shadow-sm transition-hover duration-500 hover:border-zinc-200 hover:shadow-xl group"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="bg-zinc-50 p-2.5 rounded-2xl border border-zinc-100 group-hover:bg-indigo-50 group-hover:border-indigo-100 transition-colors">
                                <Target className="h-5 w-5 text-indigo-600" />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-900">Our Mission</h3>
                        </div>

                        <p className="text-[15px] md:text-[17px] text-zinc-600 leading-relaxed mb-8">
                            To provide high-quality, industry-relevant training that empowers students to learn essential skills, build real-world projects, and grow through structured programs and community-driven opportunities.
                        </p>

                        <div className="mt-auto">
                            <div className="flex items-center gap-6 mb-6 overflow-hidden">
                                <div className="h-px bg-zinc-100 flex-grow" />
                                <span className="text-[10px] font-bold tracking-[0.05em] text-zinc-400 whitespace-nowrap">Core Values</span>
                                <div className="h-px bg-zinc-100 flex-grow" />
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {["Empowerment", "Innovation", "Inclusion", "Leadership"].map((val) => (
                                    <span key={val} className="px-4 py-1.5 rounded-full border border-zinc-100 text-[12px] font-bold text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900 transition-all cursor-default">
                                        {val}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
