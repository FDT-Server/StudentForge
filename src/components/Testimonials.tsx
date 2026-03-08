"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
    {
        name: "Aditya Sharma",
        role: "Full Stack Developer",
        content: "Student Forge transformed my career. The hands-on projects and mentorship helped me land my dream job at a top tech company.",
        avatar: "https://i.pravatar.cc/150?u=aditya",
        rating: 5,
    },
    {
        name: "Sarah Jenkins",
        role: "UI/UX Designer",
        content: "The community at Forge is incredible. I've collaborated with people globally and built a portfolio I'm truly proud of.",
        avatar: "https://i.pravatar.cc/150?u=sarah",
        rating: 5,
    },
    {
        name: "Rohan Gupta",
        role: "Data Scientist",
        content: "Industry-relevant training at its best. The bootcamps were intense but incredibly rewarding. Highly recommended!",
        avatar: "https://i.pravatar.cc/150?u=rohan",
        rating: 5,
    },
    {
        name: "Emily Chen",
        role: "Product Manager",
        content: "Forge Grow gave me the leadership opportunities I needed. The exposure to mentors changed my perspective on growth.",
        avatar: "https://i.pravatar.cc/150?u=emily",
        rating: 5,
    }
];

export default function Testimonials() {
    return (
        <section className="py-24 md:py-32 bg-[#0A0A0B] relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-1/2 -left-1/4 w-[1000px] h-[1000px] bg-indigo-600/10 rounded-full blur-[120px]" />
                <div className="absolute -bottom-1/2 -right-1/4 w-[800px] h-[800px] bg-violet-600/10 rounded-full blur-[120px]" />
            </div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16 md:mb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6"
                    >
                        <Star className="h-4 w-4 text-amber-400 fill-amber-400" />
                        <span className="text-[11px] font-bold text-zinc-400 tracking-[0.2em] uppercase">Trusted by Thousands</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
                    >
                        Stories of <span className="text-indigo-500">Success</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="mt-6 text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto"
                    >
                        Don't just take our word for it. Hear from the students who have transformed their lives with Student Forge.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="group relative flex flex-col rounded-[2.5rem] bg-white/[0.03] border border-white/10 p-8 transition-all duration-500 hover:bg-white/[0.05] hover:border-white/20 hover:shadow-2xl hover:shadow-indigo-500/10"
                        >
                            <div className="absolute top-8 right-8 text-white/5 group-hover:text-indigo-500/20 transition-colors">
                                <Quote size={48} strokeWidth={3} />
                            </div>

                            <div className="mb-6 flex gap-1">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                                ))}
                            </div>

                            <p className="flex-grow text-zinc-300 text-[15px] leading-relaxed mb-8 italic">
                                "{testimonial.content}"
                            </p>

                            <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                                <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-indigo-500/30">
                                    <img src={testimonial.avatar} alt={testimonial.name} className="h-full w-full object-cover" />
                                </div>
                                <div>
                                    <h4 className="text-[15px] font-bold text-white leading-none mb-1">{testimonial.name}</h4>
                                    <p className="text-[12px] text-zinc-500 font-medium">{testimonial.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
