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
        <section className="relative py-24 md:py-32 overflow-hidden bg-white">
            {/* Background Decorative Element */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full opacity-[0.03] pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--color-indigo-600)_0%,_transparent_70%)]" />
            </div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">

                    {/* Vision Card - Modern Glass Layout */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative flex flex-col justify-between rounded-[3rem] bg-indigo-600 p-8 md:p-12 text-white shadow-2xl shadow-indigo-200"
                    >
                        <div>
                            <div className="flex items-center gap-4 mb-8">
                                <div className="bg-white/10 p-3 rounded-2xl backdrop-blur-md border border-white/20">
                                    <Compass className="h-6 w-6 text-white" />
                                </div>
                                <h3 className="text-3xl font-bold tracking-tight">Our Vision</h3>
                            </div>

                            <p className="text-xl md:text-2xl font-medium leading-tight mb-10 text-indigo-50">
                                To build a dynamic student platform where every learner grows into a <span className="text-white underline decoration-indigo-300 underline-offset-8">confident, future-ready professional.</span>
                            </p>

                            <div className="space-y-4 mb-12">
                                {visionItems.map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.2 + (i * 0.1) }}
                                        className="flex items-center gap-3"
                                    >
                                        <div className="flex-shrink-0 h-5 w-5 rounded-full bg-indigo-500 flex items-center justify-center border border-indigo-400">
                                            <Check size={10} strokeWidth={4} />
                                        </div>
                                        <span className="text-[15px] md:text-lg text-indigo-100 font-medium">{item}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-auto pt-8 border-t border-white/10">
                            <p className="text-indigo-200 text-sm md:text-base italic font-semibold leading-relaxed">
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
                        className="relative flex flex-col rounded-[3rem] border-2 border-zinc-100 bg-white p-8 md:p-12 shadow-sm transition-hover duration-500 hover:border-zinc-200 hover:shadow-xl group"
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <div className="bg-zinc-50 p-3 rounded-2xl border border-zinc-100 group-hover:bg-indigo-50 group-hover:border-indigo-100 transition-colors">
                                <Target className="h-6 w-6 text-indigo-600" />
                            </div>
                            <h3 className="text-3xl font-bold tracking-tight text-zinc-900">Our Mission</h3>
                        </div>

                        <p className="text-lg md:text-xl text-zinc-600 leading-relaxed mb-10">
                            To provide high-quality, industry-relevant training that empowers students to learn essential skills, build real-world projects, and grow through structured programs and community-driven opportunities.
                        </p>

                        <div className="mt-auto">
                            <div className="flex items-center gap-6 mb-8 overflow-hidden">
                                <div className="h-px bg-zinc-100 flex-grow" />
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 whitespace-nowrap">Core Values</span>
                                <div className="h-px bg-zinc-100 flex-grow" />
                            </div>

                            <div className="flex flex-wrap gap-3">
                                {["Empowerment", "Innovation", "Inclusion", "Leadership"].map((val) => (
                                    <span key={val} className="px-5 py-2 rounded-full border border-zinc-100 text-sm font-bold text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900 transition-all cursor-default">
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
