"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function MissionVision() {
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
                    We are more than just a platform; we are a movement dedicated to unlocking human potential.
                </motion.p>
            </div>

            <div className="relative space-y-16 md:space-y-12 flex flex-col">
                {/* Vision Arrow (From Left pointing Right) */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="relative w-full md:w-[90%] lg:w-[80%] self-start"
                >
                    <div
                        className="bg-indigo-600 text-white py-10 md:py-14 px-6 md:pl-16 md:pr-32 shadow-2xl"
                        style={{
                            clipPath: "polygon(0% 0%, 94% 0%, 100% 50%, 94% 100%, 0% 100%)"
                        }}
                    >
                        <div className="max-w-3xl">
                            <h3 className="text-2xl md:text-3xl font-bold mb-6">Our Vision</h3>
                            <p className="text-indigo-100 text-[16px] md:text-[18px] leading-relaxed mb-8 font-medium max-w-2xl">
                                To build a dynamic student platform where every learner can learn new skills, build real projects, and grow into a confident, future-ready professional.
                            </p>

                            {/* Responsive Cards Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-4 mb-8 pr-8 md:pr-0">
                                {[
                                    "Build the Strongest Student Network.",
                                    "Create Access to Opportunities, Events, Mentors.",
                                    "Empower Students to “lead from the front”."
                                ].map((item, i) => (
                                    <div key={i} className="flex flex-col gap-3 bg-white/10 p-4 md:p-5 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-all duration-300">
                                        <div className="bg-white text-indigo-600 rounded-lg p-1 w-fit shadow-sm">
                                            <Check size={14} strokeWidth={4} />
                                        </div>
                                        <span className="text-[14px] font-bold leading-tight tracking-tight">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="inline-block bg-indigo-500/40 px-5 py-3 rounded-xl border border-indigo-400/20 backdrop-blur-sm mr-8 sm:mr-0">
                                <p className="text-indigo-50 text-[14px] md:text-[15px] font-bold italic">
                                    "We’re here to bridge the gap between where students are and where they can be."
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Mission Arrow (From Right pointing Left) */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    className="relative w-full md:w-[85%] lg:w-[70%] self-end"
                >
                    <div
                        className="bg-zinc-900 text-white py-10 md:py-12 px-6 md:pr-16 md:pl-28 shadow-2xl"
                        style={{
                            clipPath: "polygon(6% 0%, 100% 0%, 100% 100%, 6% 100%, 0% 50%)"
                        }}
                    >
                        <div className="max-w-xl md:ml-auto text-left md:text-right pl-8 md:pl-0">
                            <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Mission</h3>
                            <p className="text-zinc-400 text-[16px] md:text-[17px] leading-relaxed">
                                To provide students and educators with cutting-edge tools, hands-on projects, and a supportive network to bridge the gap between learning and career.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
