"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function MissionVision() {
    return (
        <section className="py-24 overflow-hidden bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center mb-20">
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
                    className="mt-4 text-lg text-zinc-600 max-w-2xl mx-auto"
                >
                    We are more than just a platform; we are a movement dedicated to unlocking human potential.
                </motion.p>
            </div>

            <div className="relative space-y-12 flex flex-col">
                {/* Vision Arrow (From Left pointing Right) */}
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative w-[95%] md:w-[85%] lg:w-[75%] self-start"
                >
                    <div
                        className="bg-indigo-600 text-white py-14 pl-8 md:pl-16 pr-12 md:pr-32 shadow-2xl transition-all duration-500"
                        style={{ clipPath: "polygon(0% 0%, 92% 0%, 100% 50%, 92% 100%, 0% 100%)" }}
                    >
                        <div className="max-w-2xl">
                            <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                                Our Vision
                            </h3>
                            <p className="text-indigo-100 text-[18px] leading-relaxed mb-8 font-medium">
                                To build a dynamic student platform where every learner can learn new skills, build real projects, and grow into a confident, future-ready professional.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                                {[
                                    "Build the Strongest Student Network.",
                                    "Create Access to Opportunities, Events, Mentors, and Exposure.",
                                    "Empower Students to “lead from the front”."
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-3 bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/10 group hover:bg-white/20 transition-colors">
                                        <div className="mt-1 bg-white text-indigo-600 rounded-full p-0.5 shrink-0">
                                            <Check size={12} strokeWidth={4} />
                                        </div>
                                        <span className="text-[14px] font-semibold leading-tight">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="inline-block bg-indigo-500/50 px-4 py-2 rounded-lg border border-indigo-400/30">
                                <p className="text-indigo-50 text-[15px] font-bold italic tracking-wide">
                                    "We’re here to bridge the gap between where students are and where they can be."
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Mission Arrow (From Right pointing Left) - Keeping it simple yet balanced */}
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    className="relative w-[90%] md:w-[75%] lg:w-[65%] self-end"
                >
                    <div
                        className="bg-zinc-900 text-white py-12 pr-8 md:pr-16 pl-12 md:pl-24 shadow-2xl"
                        style={{ clipPath: "polygon(8% 0%, 100% 0%, 100% 100%, 8% 100%, 0% 50%)" }}
                    >
                        <div className="max-w-lg ml-auto text-right">
                            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                            <p className="text-zinc-400 text-[17px] leading-relaxed">
                                To provide students and educators with cutting-edge tools, hands-on projects, and a supportive network to bridge the gap between learning and career.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
