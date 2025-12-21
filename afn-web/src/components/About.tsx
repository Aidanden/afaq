"use client";

import { motion } from 'framer-motion';
import { Target, Users, Zap, ShieldCheck } from 'lucide-react';

const stats = [
    { label: 'Certified Team', value: '100%' },
    { label: 'Global Partners', value: '7+' },
    { label: 'SLA Compliance', value: '100%' },
    { label: 'Support Coverage', value: '24/7' },
];

export default function About() {
    return (
        <section id="about" className="py-32 bg-white dark:bg-black overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.span
                            className="text-secondary font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block"
                        >
                            Our Vision
                        </motion.span>
                        <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-8 leading-tight">
                            Empowering Libya's <br />
                            Digital Transformation.
                        </h2>
                        <p className="text-xl text-slate-500 dark:text-slate-400 mb-10 leading-relaxed font-medium">
                            At AFN, we don't just build networks; we create the digital infrastructure that powers the future. By combining global standards with local expertise, we help businesses navigate the complexities of modern technology.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                { icon: Target, title: "Client Centered", desc: "Tailored to your unique business goals and financial limits." },
                                { icon: ShieldCheck, title: "Global Standards", desc: "Ensuring solutions are future-proof and compliant." }
                            ].map((item, i) => (
                                <div key={i} className="flex flex-col gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-primary/5 dark:bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                        <item.icon size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 dark:text-white mb-1">{item.title}</h4>
                                        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="grid grid-cols-2 gap-4">
                            {stats.map((stat, i) => (
                                <div key={i} className="glass-morphism p-10 rounded-[40px] text-center group hover:border-secondary transition-all">
                                    <p className="text-4xl md:text-5xl font-black text-primary dark:text-secondary mb-2 tracking-tighter group-hover:scale-110 transition-transform duration-500">{stat.value}</p>
                                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400">{stat.label}</p>
                                </div>
                            ))}
                        </div>

                        {/* Decorative Background Element */}
                        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full blur-[100px]" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
