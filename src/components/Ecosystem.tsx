"use client";

import { motion } from "framer-motion";
import { GraduationCap, Monitor, TrendingUp, ArrowRight } from "lucide-react";

const ecosystemItems = [
    {
        title: "Learn with Forge",
        description: "Students learn industry-relevant skills through workshops, bootcamps, and hands-on sessions.",
        icon: <GraduationCap className="h-8 w-8" />,
        image: "https://ik.imagekit.io/dypkhqxip/sf-learn-eco",
        color: "bg-blue-600",
        lightColor: "bg-blue-50",
        textColor: "text-blue-600",
    },
    {
        title: "Build with Forge",
        description: "They apply their skills by building apps, websites, and real projects within the community.",
        icon: <Monitor className="h-8 w-8" />,
        image: "https://ik.imagekit.io/dypkhqxip/sf-build-eco",
        color: "bg-indigo-600",
        lightColor: "bg-indigo-50",
        textColor: "text-indigo-600",
    },
    {
        title: "Grow with Forge",
        description: "Students gain exposure, internships, leadership roles, and opportunities that help them grow into future-ready professionals.",
        icon: <TrendingUp className="h-8 w-8" />,
        image: "https://ik.imagekit.io/dypkhqxip/sf-grow-eco",
        color: "bg-violet-600",
        lightColor: "bg-violet-50",
        textColor: "text-violet-600",
    }
];

export default function Ecosystem() {
    return (
        <section className="py-20 md:py-24 bg-white overflow-hidden">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 md:mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl lg:text-5xl"
                    >
                        Our <span className="text-indigo-600">Ecosystem</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="mt-4 text-base md:text-lg text-zinc-600 max-w-2xl mx-auto"
                    >
                        A continuous loop of learning, building, and professional growth.
                    </motion.p>
                </div>

                <div className="space-y-4 md:space-y-0 md:grid md:grid-cols-3 md:gap-8">
                    {ecosystemItems.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            whileHover={{ y: -10 }}
                            className="group flex flex-col rounded-[2.5rem] border border-zinc-100 bg-zinc-50/30 p-8 transition-all hover:bg-white hover:border-zinc-200 hover:shadow-2xl hover:shadow-indigo-500/5"
                        >
                            {/* Illustration Container */}
                            <div className="relative mb-8 aspect-video w-full overflow-hidden rounded-2xl bg-white border border-zinc-100/50">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    onError={(e) => {
                                        // Fallback for missing illustrations
                                        (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1522071823991-b51830403bad?q=80&w=800&auto=format&fit=crop`;
                                    }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
                            </div>

                            {/* Icon & Title */}
                            <div className="flex items-center gap-4 mb-4">
                                <div className={`p-2.5 rounded-xl ${item.lightColor} ${item.textColor}`}>
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-zinc-900 leading-tight">
                                    {item.title}
                                </h3>
                            </div>

                            <p className="flex-grow text-zinc-600 text-[15px] leading-relaxed mb-8">
                                {item.description}
                            </p>

                            {/* Explore Button */}
                            <button className="flex items-center gap-2 text-sm font-bold text-indigo-600 transition-all hover:gap-3 group-hover:translate-x-1">
                                Explore
                                <ArrowRight size={16} strokeWidth={2.5} />
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
