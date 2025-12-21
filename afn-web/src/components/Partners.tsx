"use client";

import { motion } from 'framer-motion';

const partners = [
    { name: "Microsoft", logo: "/images/microsoft.png" },
    { name: "Cisco", logo: "/images/cisco.png" },
    { name: "Dell", logo: "/images/dell3.jpg" },
    { name: "Sophos", logo: "/images/Sophos.webp" },
    { name: "VEEAM", logo: "/images/veeam.png" },
    { name: "Redhat", logo: "/images/redhat1.png" },
    { name: "F5", logo: "/images/F51.png" }
];

// Double the partners to create a seamless loop
const duplicatedPartners = [...partners, ...partners];

export default function Partners() {
    return (
        <section id="partners" className="py-24 bg-black border-y border-white/5 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                <div className="text-center">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-white/60 font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block"
                    >
                        Our Strategic Ecosystem
                    </motion.span>
                    <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
                        Trusted Technology Partners.
                    </h2>
                </div>
            </div>

            <div className="relative flex overflow-x-hidden group py-10">
                <motion.div
                    className="flex whitespace-nowrap"
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
                            className="flex items-center justify-center px-12 md:px-20 transition-all duration-500 cursor-pointer opacity-70 hover:opacity-100"
                        >
                            <div className="relative h-16 md:h-20 w-32 md:w-48 transition-transform duration-500 hover:scale-110 flex items-center justify-center">
                                <img
                                    src={partner.logo}
                                    alt={partner.name}
                                    className="max-h-full max-w-full object-contain"
                                />
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* Shadow Overlays for smooth edges */}
                <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
            </div>

            <div className="max-w-4xl mx-auto px-4 mt-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="p-8 rounded-[32px] bg-white/5 border border-white/5"
                    >
                        <p className="text-sm font-bold text-white/40 uppercase tracking-widest mb-2">Technical Excellence</p>
                        <p className="text-slate-300 font-medium">We partner with Tier-1 vendors to ensure that every network we build meets international reliability standards.</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="p-8 rounded-[32px] bg-white/5 border border-white/5"
                    >
                        <p className="text-sm font-bold text-white/40 uppercase tracking-widest mb-2">Certified Expertise</p>
                        <p className="text-slate-300 font-medium">Our local Libyan team is certified in all partner technologies, bringing global knowledge to local business challenges.</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
