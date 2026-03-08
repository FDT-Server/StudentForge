"use client";

import { motion } from "framer-motion";
import { GraduationCap, Monitor, TrendingUp, ArrowRight, Sparkles } from "lucide-react";

const ecosystemItems = [
    {
        title: "Learn with Forge",
        subtitle: "Acquire & Master",
        description: "Students learn industry-relevant skills through workshops, bootcamps, and hands-on sessions.",
        icon: <GraduationCap className="h-6 w-6" />,
        image: "https://ik.imagekit.io/dypkhqxip/sf-learn-eco",
        color: "from-blue-600 to-indigo-600",
        shadow: "shadow-blue-500/20",
        accent: "bg-blue-600"
    },
    {
        title: "Build with Forge",
        subtitle: "Create & Innovate",
        description: "They apply their skills by building apps, websites, and real projects within the community.",
        icon: <Monitor className="h-6 w-6" />,
        image: "https://ik.imagekit.io/dypkhqxip/sf-build-eco",
        color: "from-indigo-600 to-violet-600",
        shadow: "shadow-indigo-500/20",
        accent: "bg-indigo-600"
    },
    {
        title: "Grow with Forge",
        subtitle: "Lead & Scale",
        description: "Students gain exposure, internships, leadership roles, and opportunities that help them grow.",
        icon: <TrendingUp className="h-6 w-6" />,
        image: "https://ik.imagekit.io/dypkhqxip/sf-grow-eco",
        color: "from-violet-600 to-fuchsia-600",
        shadow: "shadow-violet-500/20",
        accent: "bg-violet-600"
    }
];

export default function Ecosystem() {
    return (
        <section className="py-24 md:py-32 bg-white relative overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] bg-indigo-50 rounded-full blur-3xl opacity-50" />
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[500px] h-[500px] bg-violet-50 rounded-full blur-3xl opacity-50" />

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16 md:mb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 mb-6"
                    >
                        <Sparkles className="h-4 w-4 text-indigo-600" />
                        <span className="text-[12px] font-bold text-indigo-700 tracking-wide">THE ECOSYSTEM</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl"
                    >
                        Our <span className="text-indigo-600">Ecosystem</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="mt-6 text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto"
                    >
                        A continuous cycle designed to transform ambitious students into industry-leading professionals.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    {ecosystemItems.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            className="group relative flex flex-col"
                        >
                            {/* Card Container */}
                            <div className="relative flex flex-col h-full bg-white rounded-[2.5rem] border border-zinc-100 p-3 transition-all duration-500 hover:border-zinc-200 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)]">

                                {/* Image Section */}
                                <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden bg-zinc-50">
                                    <motion.img
                                        src={item.image}
                                        alt={item.title}
                                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop`;
                                        }}
                                    />

                                    {/* Floating Icon Badge */}
                                    <div className={`absolute top-4 left-4 p-3 rounded-2xl backdrop-blur-md bg-white/90 text-zinc-900 shadow-xl shadow-black/5 transition-transform duration-500 group-hover:scale-110`}>
                                        {item.icon}
                                    </div>

                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                                </div>

                                {/* Content Section */}
                                <div className="flex flex-col p-6 pt-8">
                                    <span className="text-[11px] font-bold tracking-[0.2em] text-indigo-500 mb-2 uppercase">{item.subtitle}</span>
                                    <h3 className="text-2xl font-bold text-zinc-900 mb-4 transition-colors group-hover:text-indigo-600">
                                        {item.title}
                                    </h3>
                                    <p className="text-zinc-500 text-[15px] leading-relaxed mb-10 flex-grow">
                                        {item.description}
                                    </p>

                                    <div className="mt-auto">
                                        <button className={`w-full flex items-center justify-between rounded-2xl bg-zinc-900 px-6 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-indigo-600 hover:shadow-xl ${item.shadow}`}>
                                            <span>Explore Portal</span>
                                            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative Number/Index Background */}
                            <span className="absolute -top-10 -right-6 text-[120px] font-black text-zinc-50 pointer-events-none select-none -z-10 group-hover:text-indigo-50 transition-colors duration-500">
                                0{index + 1}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
