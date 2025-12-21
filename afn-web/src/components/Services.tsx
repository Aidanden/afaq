"use client";

import { motion } from 'framer-motion';
import { Layers, Activity, Shield, Terminal, BookOpen, Cpu } from 'lucide-react';

const services = [
    {
        title: "Planning & Design",
        subtitle: "Built for Tomorrow",
        description: "At AFN, we prioritize a client-centered approach by considering each client's unique business goals and infrastructure. We deliver comprehensive planning ensuring solutions are future-proof.",
        icon: Layers,
        color: "from-blue-600 to-cyan-500",
    },
    {
        title: "Implementation",
        subtitle: "Precise Engineering",
        description: "Full-service implementation and coordination. We're proficient in building new infrastructure and enhancing existing systems with cost-effective solutions.",
        icon: Cpu,
        color: "from-purple-600 to-blue-500",
    },
    {
        title: "System Monitoring",
        subtitle: "Real-time Intelligence",
        description: "Specialized software tools that proactively detect and address potential issues, guaranteeing optimal system performance 24/7.",
        icon: Activity,
        color: "from-cyan-600 to-emerald-500",
    },
    {
        title: "Support & Health",
        subtitle: "Mission Critical",
        description: "Dedicated local technical team in Libya ensuring maximum return on investment and seamless business operations with round-the-clock support.",
        icon: Shield,
        color: "from-indigo-600 to-blue-500",
    },
    {
        title: "Technical Training",
        subtitle: "Knowledge Transfer",
        description: "State-of-the-art training programs led by certified experts. Keep your team updated with the latest IT trends and technologies.",
        icon: BookOpen,
        color: "from-rose-600 to-orange-500",
    },
    {
        title: "DevOps & Core",
        subtitle: "Smart Automation",
        description: "Modernizing your infrastructure with the latest automation standards and cloud-ready architectures.",
        icon: Terminal,
        color: "from-slate-700 to-slate-900",
    }
];

export default function Services() {
    return (
        <section id="services" className="py-32 bg-slate-50 dark:bg-[#050505]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-24 flex flex-col items-center text-center">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-secondary font-bold tracking-[0.4em] uppercase text-xs mb-4"
                    >
                        How we help
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white"
                    >
                        Professional Solutions.
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            whileHover={{ y: -10 }}
                            className="glass-morphism p-10 rounded-[40px] transition-all group relative overflow-hidden"
                        >
                            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-[0.03] group-hover:opacity-[0.08] transition-opacity rounded-bl-full`} />

                            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-8 shadow-xl shadow-blue-500/10 group-hover:scale-110 transition-transform`}>
                                <service.icon size={32} strokeWidth={1.5} />
                            </div>

                            <span className="text-secondary font-bold text-xs uppercase tracking-widest mb-2 block">
                                {service.subtitle}
                            </span>

                            <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4">
                                {service.title}
                            </h3>

                            <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
