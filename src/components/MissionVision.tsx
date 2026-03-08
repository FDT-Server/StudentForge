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
        <section className="py-12 md:py-16 overflow-hidden bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center mb-10 md:mb-14">
                <motion.h2
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl"
                >
                    Building the Future, <span className="text-indigo-600">Together</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="mt-3 text-base md:text-lg text-zinc-600 max-w-2xl mx-auto px-4"
                >
                    We are more than just a platform; we are a movement dedicated to unlocking human potential.
                </motion.p>
            </div>

            <div className="relative space-y-8 md:space-y-12 flex flex-col">
                {/* Our Vision Card (Left to Right) */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="relative w-full sm:w-[96%] md:w-[88%] lg:w-[78%] self-start"
                >
                    <div
                        className="bg-indigo-600 text-white py-10 md:py-12 pl-6 md:pl-16 pr-10 md:pr-32 shadow-xl shadow-indigo-50"
                        style={{
                            clipPath: "polygon(0% 0%, 94% 0%, 100% 50%, 94% 100%, 0% 100%)"
                        }}
                    >
                        <div className="max-w-2xl">
                            <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-5">Our Vision</h3>
                            <p className="text-indigo-100 text-[15px] md:text-[17px] leading-relaxed mb-6 md:mb-7 font-medium">
                                To build a dynamic student platform where every learner can learn new skills, build real projects, and grow into a confident, future-ready professional.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 md:mb-7">
                                {visionItems.map((item, i) => (
                                    <div key={i} className="flex items-center gap-2.5 bg-white/10 p-2.5 rounded-lg backdrop-blur-sm border border-white/10">
                                        <div className="bg-white text-indigo-600 rounded-full p-0.5 shrink-0">
                                            <Check size={10} strokeWidth={4} />
                                        </div>
                                        <span className="text-[12px] md:text-[13px] font-semibold tracking-tight">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="inline-block bg-indigo-500/50 px-3.5 py-1.5 rounded-lg border border-indigo-400/30">
                                <p className="text-indigo-50 text-[12px] md:text-[14px] font-bold italic">
                                    "Bridge the gap between where students are and where they can be."
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Our Mission Card (Right to Left) */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    className="relative w-full sm:w-[96%] md:w-[88%] lg:w-[78%] self-end"
                >
                    <div
                        className="bg-zinc-900 text-white py-10 md:py-12 pr-6 md:pr-16 pl-10 md:pl-32 shadow-xl"
                        style={{
                            clipPath: "polygon(6% 0%, 100% 0%, 100% 100%, 6% 100%, 0% 50%)"
                        }}
                    >
                        <div className="max-w-2xl ml-auto text-right">
                            <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-5 leading-none">Our Mission</h3>
                            <p className="text-zinc-400 text-[15px] md:text-[17px] leading-relaxed mb-6 md:mb-7">
                                To provide high-quality, industry-relevant training that empowers students to learn essential skills, build real-world projects, and grow through structured programs.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 md:mb-7 justify-end">
                                {missionItems.map((item, i) => (
                                    <div key={i} className="flex items-center flex-row-reverse gap-2.5 bg-white/5 p-2.5 rounded-lg border border-white/5">
                                        <div className="bg-indigo-600 text-white rounded-full p-0.5 shrink-0">
                                            <Check size={10} strokeWidth={4} />
                                        </div>
                                        <span className="text-[12px] md:text-[13px] font-semibold text-zinc-300 tracking-tight">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="inline-block bg-zinc-800 px-3.5 py-1.5 rounded-lg border border-zinc-700">
                                <p className="text-zinc-400 text-[12px] md:text-[13px] font-bold tracking-tight">
                                    Empowering students to "lead from the front".
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
