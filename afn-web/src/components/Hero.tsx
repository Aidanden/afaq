"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-white dark:bg-black">
            {/* Background Image Container */}
            <div className="absolute inset-0 z-0 opacity-40 dark:opacity-50">
                <Image
                    src="/hero-bg.png"
                    alt="Network Background"
                    fill
                    className="object-cover object-center scale-110 blur-sm md:blur-0"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white dark:from-black dark:via-transparent dark:to-black" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-white/10 dark:text-white/80 text-primary text-xs font-bold mb-10 tracking-widest uppercase border border-primary/5 shadow-sm"
                    >
                        <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                        <span>Next Generation IT Infrastructure</span>
                    </motion.div>

                    <h1 className="text-6xl md:text-8xl font-black tracking-tight text-slate-900 dark:text-white mb-8 leading-[0.9]">
                        Simplicity is the <br />
                        <span className="text-gradient">Ultimate Sophistication.</span>
                    </h1>

                    <p className="max-w-3xl mx-auto text-xl md:text-2xl text-slate-500 dark:text-slate-400 mb-14 font-medium leading-relaxed">
                        Afaq Al-Namaa builds the digital backbone of Libya's most ambitious enterprises with precision focused on performance and security.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="apple-button w-full sm:w-auto px-10 py-5 bg-primary text-white rounded-2xl font-bold text-lg flex items-center justify-center gap-3 shadow-2xl shadow-primary/20 dark:bg-white dark:text-black dark:shadow-white/10"
                        >
                            Explore Solutions
                            <ArrowRight size={20} />
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="apple-button w-full sm:w-auto px-10 py-5 bg-white dark:bg-slate-900/50 backdrop-blur-md border-2 border-slate-100 dark:border-white/10 text-slate-900 dark:text-white rounded-2xl font-bold text-lg hover:border-secondary dark:hover:border-secondary transition-all flex items-center justify-center gap-3 group"
                        >
                            <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                                <Play size={16} className="ml-1 fill-current" />
                            </div>
                            <span>Discover Our Story</span>
                        </motion.button>
                    </div>
                </motion.div>

                {/* Floating Abstract Element */}
                <motion.div
                    animate={{
                        y: [0, -20, 0],
                        rotate: [0, 5, 0]
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-full max-w-lg aspect-video bg-gradient-to-tr from-primary/20 to-secondary/20 blur-[100px] opacity-30 -z-10"
                />
            </div>
        </section>
    );
}
