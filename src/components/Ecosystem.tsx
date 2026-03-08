"use client";

import { motion } from "framer-motion";
import { BookOpen, Code2, Users2, Rocket, ShoppingBag, Globe } from "lucide-react";

const ecosystemItems = [
    {
        title: "Forge Learn",
        description: "Access high-quality, industry-relevant courses and structured learning paths designed by experts.",
        icon: <BookOpen className="h-6 w-6" />,
        color: "bg-blue-500",
        lightColor: "bg-blue-50",
        textColor: "text-blue-600",
    },
    {
        title: "Forge Build",
        description: "Work on real-world projects, collaborate with peers, and build a professional portfolio that stands out.",
        icon: <Code2 className="h-6 w-6" />,
        color: "bg-indigo-500",
        lightColor: "bg-indigo-50",
        textColor: "text-indigo-600",
    },
    {
        title: "Forge Connect",
        description: "Join a vibrant community of passionate students, mentors, and industry professionals to grow together.",
        icon: <Users2 className="h-6 w-6" />,
        color: "bg-violet-500",
        lightColor: "bg-violet-50",
        textColor: "text-violet-600",
    },
    {
        title: "Forge Grow",
        description: "Unlock career opportunities, prep for interviews, and land your dream role with our dedicated support.",
        icon: <Rocket className="h-6 w-6" />,
        color: "bg-rose-500",
        lightColor: "bg-rose-50",
        textColor: "text-rose-600",
    },
    {
        title: "Forge Merch",
        description: "Wear your passion. Exclusive Student Forge merchandise to celebrate your journey and identity.",
        icon: <ShoppingBag className="h-6 w-6" />,
        color: "bg-red-500",
        lightColor: "bg-red-50",
        textColor: "text-red-600",
    },
    {
        title: "Forge Global",
        description: "Access events, hackathons, and global opportunities to showcase your talent on a world stage.",
        icon: <Globe className="h-6 w-6" />,
        color: "bg-emerald-500",
        lightColor: "bg-emerald-50",
        textColor: "text-emerald-600",
    },
];

export default function Ecosystem() {
    return (
        <section className="py-20 md:py-24 bg-zinc-50/50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl lg:text-5xl"
                    >
                        The Student Forge <span className="text-indigo-600">Ecosystem</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="mt-4 text-base md:text-lg text-zinc-600 max-w-2xl mx-auto"
                    >
                        A comprehensive world of learning, building, and growth designed to take you from student to industry professional.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {ecosystemItems.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="group relative flex flex-col rounded-[2rem] border border-zinc-100 bg-white p-8 shadow-sm transition-all hover:border-zinc-200 hover:shadow-xl hover:shadow-indigo-500/5 overflow-hidden"
                        >
                            {/* Background Accent */}
                            <div className={`absolute -right-12 -top-12 h-32 w-32 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-10 ${item.lightColor}`} />

                            <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ${item.lightColor} ${item.textColor} transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg`}>
                                {item.icon}
                            </div>

                            <h3 className="text-xl font-bold text-zinc-900 mb-3 group-hover:text-indigo-600 transition-colors">
                                {item.title}
                            </h3>

                            <p className="text-zinc-600 text-[15px] leading-relaxed">
                                {item.description}
                            </p>

                            <div className="mt-8 flex items-center gap-2 text-sm font-bold text-zinc-400 opacity-0 transition-all duration-300 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0">
                                <span>Explore more</span>
                                <svg className="h-4 w-4 transform transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
