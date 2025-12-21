"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

const partners = [
    { name: "DELL", logo: "/partners/dell.png" },
    { name: "Sophos", logo: "/partners/Sophos.jpg" },
    { name: "F5", logo: "/partners/f5.webp" },
    { name: "Redhat", logo: "/partners/redhat.png" },
    { name: "Microsoft", logo: "/partners/microsoft.jpg" },
    { name: "VEEAM", logo: "/partners/veeam.png" },
    { name: "Cisco", logo: "/partners/cisco.png" }
];

// Double the partners to create a seamless loop
const duplicatedPartners = [...partners, ...partners];

export default function Partners() {
    return (
        <section id="partners" className="py-24 bg-white dark:bg-black border-y border-slate-100 dark:border-white/5 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                <div className="text-center">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-secondary font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block"
                    >
                        Powering the Industry
                    </motion.span>
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight">
                        Our Strategic Ecosystem.
                    </h2>
                </div>
            </div>

            <div className="relative flex overflow-x-hidden group">
                <motion.div
                    className="flex py-12 whitespace-nowrap"
                    animate={{
                        x: ['0%', '-50%'],
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 25,
                            ease: "linear",
                        },
                    }}
                >
                    {duplicatedPartners.map((partner, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-center px-12 md:px-20 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer"
                        >
                            <div className="relative h-10 md:h-14 w-28 md:w-40 transition-transform duration-500 hover:scale-110">
                                <Image
                                    src={partner.logo}
                                    alt={partner.name}
                                    fill
                                    className="object-contain clean-logo"
                                />
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* Shadow Overlays for smooth edges */}
                <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-white dark:from-black to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-white dark:from-black to-transparent z-10 pointer-events-none" />
            </div>

            <div className="max-w-4xl mx-auto px-4 mt-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="p-8 rounded-[32px] bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5"
                    >
                        <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">Technical Excellence</p>
                        <p className="text-slate-600 dark:text-slate-300 font-medium">We partner with Tier-1 vendors to ensure that every network we build and every system we monitor meets international reliability standards.</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="p-8 rounded-[32px] bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5"
                    >
                        <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">Certified Expertise</p>
                        <p className="text-slate-600 dark:text-slate-300 font-medium">Our local Libyan team is certified in all partner technologies, bringing global knowledge to local business challenges.</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
