"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function MissionVision() {
    const visionItems = [
        "Build the Strongest Student Network.",
        "Access to Opportunities & Events.",
        "Mentors and Global Exposure."
    ];

    const missionItems = [
        "Empower Students to 'lead from the front'.",
        "Bridge the Industry-Skill gap.",
        "Support Students from all backgrounds."
    ];

    return (
        <section className="py-16 md:py-24 overflow-hidden bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center mb-12 md:mb-20">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl"
                >
                    Building the Future, <span className="text-indigo-600">Together</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="mt-4 text-base md:text-lg text-zinc-600 max-w-2xl mx-auto px-4"
                >
                    We are more than just a platform; we are a movement dedicated to unlocking human potential through accessible, high-quality education.
                </motion.p>
            </div>

            <div className="relative space-y-12 md:space-y-20 flex flex-col">
                {/* Our Vision Card (Left to Right) */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative w-full sm:w-[94%] md:w-[85%] lg:w-[75%] self-start"
                >
                    <div
                        className="bg-indigo-600 text-white py-10 md:py-14 pl-6 md:pl-16 pr-10 md:pr-32 shadow-2xl shadow-indigo-100"
                        style={{
                            clipPath: "polygon(0% 0%, 92% 0%, 100% 50%, 92% 100%, 0% 100%)"
                        }}
                    >
                        <div className="max-w-2xl">
                            <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Our Vision</h3>
                            <p className="text-indigo-100 text-[15px] md:text-lg leading-relaxed mb-6 md:mb-8 font-medium">
                                To build a dynamic student platform where every learner can learn new skills, build real projects, and grow into a confident, future-ready professional.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-8">
                                {visionItems.map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 bg-white/10 p-3 rounded-xl backdrop-blur-sm border border-white/10 group hover:bg-white/20 transition-all">
                                        <div className="bg-white text-indigo-600 rounded-full p-0.5 shrink-0">
                                            <Check size={10} strokeWidth={4} />
                                        </div>
                                        <span className="text-[12px] md:text-[14px] font-semibold tracking-tight">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="inline-block bg-indigo-500/50 px-4 py-2 rounded-lg border border-indigo-400/30">
                                <p className="text-indigo-50 text-[12px] md:text-[15px] font-bold italic">
                                    "Bridge the gap between where students are and where they can be."
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Our Mission Card (Right to Left) */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    className="relative w-full sm:w-[94%] md:w-[85%] lg:w-[75%] self-end"
                >
                    <div
                        className="bg-zinc-900 text-white py-10 md:py-14 pr-6 md:pr-16 pl-10 md:pl-32 shadow-2xl"
                        style={{
                            clipPath: "polygon(8% 0%, 100% 0%, 100% 100%, 8% 100%, 0% 50%)"
                        }}
                    >
                        <div className="max-w-2xl ml-auto text-right">
                            <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 leading-none">Our Mission</h3>
                            <p className="text-zinc-400 text-[15px] md:text-lg leading-relaxed mb-6 md:mb-8">
                                To provide high-quality, industry-relevant training that empowers students to learn essential skills, build real-world projects, and grow through structured programs, mentorship, and community-driven opportunities.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-8 justify-end">
                                {missionItems.map((item, i) => (
                                    <div key={i} className="flex items-center flex-row-reverse gap-3 bg-white/5 p-3 rounded-xl border border-white/5 group hover:bg-white/10 transition-all">
                                        <div className="bg-indigo-600 text-white rounded-full p-0.5 shrink-0">
                                            <Check size={10} strokeWidth={4} />
                                        </div>
                                        <span className="text-[12px] md:text-[14px] font-semibold text-zinc-300 tracking-tight">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="inline-block bg-zinc-800 px-4 py-2 rounded-lg border border-zinc-700">
                                <p className="text-zinc-400 text-[12px] md:text-[14px] font-bold tracking-tight">
                                    Empowering students to "lead from the front" — no matter where they come from.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
