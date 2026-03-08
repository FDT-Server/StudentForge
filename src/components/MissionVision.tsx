"use client";

import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";

export default function MissionVision() {
    return (
        <section className="py-24 overflow-hidden bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center mb-16">
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
                    We are more than just a platform; we are a movement dedicated to unlocking human potential through accessible, high-quality education.
                </motion.p>
            </div>

            <div className="relative space-y-8 flex flex-col">
                {/* Vision Arrow (From Left pointing Right) */}
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative w-[90%] md:w-[70%] lg:w-[60%] self-start"
                >
                    <div
                        className="bg-indigo-600 text-white py-12 pl-8 md:pl-16 pr-12 md:pr-24 shadow-2xl"
                        style={{ clipPath: "polygon(0% 0%, 90% 0%, 100% 50%, 90% 100%, 0% 100%)" }}
                    >
                        <div className="flex items-start gap-4 max-w-md">
                            <div className="mt-1 bg-white/20 p-2 rounded-lg backdrop-blur-sm">
                                <Eye className="h-6 w-6 text-white" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-2">Our Vision</h3>
                                <p className="text-indigo-100 text-lg leading-relaxed">
                                    To create a world where world-class education is accessible to everyone, everywhere, enabling a global community of lifelong learners.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Mission Arrow (From Right pointing Left) */}
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    className="relative w-[90%] md:w-[70%] lg:w-[60%] self-end"
                >
                    <div
                        className="bg-zinc-900 text-white py-12 pr-8 md:pr-16 pl-12 md:pl-24 shadow-2xl"
                        style={{ clipPath: "polygon(10% 0%, 100% 0%, 100% 100%, 10% 100%, 0% 50%)" }}
                    >
                        <div className="flex items-start flex-row-reverse gap-4 max-w-md ml-auto text-right">
                            <div className="mt-1 bg-white/10 p-2 rounded-lg backdrop-blur-sm">
                                <Target className="h-6 w-6 text-indigo-400" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-2">Our Mission</h3>
                                <p className="text-zinc-400 text-lg leading-relaxed">
                                    To provide students and educators with cutting-edge tools, hands-on projects, and a supportive network to bridge the gap between learning and career.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
