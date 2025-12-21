"use client";

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Globe } from 'lucide-react';

export default function Contact() {
    return (
        <section id="contact" className="py-32 bg-white dark:bg-black overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center mb-20 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-7xl font-black text-slate-900 dark:text-white"
                    >
                        Let's connect.
                    </motion.h2>
                    <p className="mt-6 text-xl text-slate-500 max-w-2xl font-medium">Ready to discuss your next big project? Our experts are standing by.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-morphism p-12 rounded-[40px] flex flex-col justify-between"
                    >
                        <div className="space-y-10">
                            {[
                                { icon: Mail, label: "Official Email", value: "Info@afntech.ly" },
                                { icon: Phone, label: "Direct Line", value: "+218 94 295 1594" },
                                { icon: MapPin, label: "HQ Address", value: "Tripoli, Libya" },
                                { icon: Globe, label: "Business Hours", value: "Sun - Thu, 9AM - 5PM" },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-6 group">
                                    <div className="w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
                                        <item.icon size={24} strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">{item.label}</p>
                                        <p className="text-xl font-bold text-slate-900 dark:text-white">{item.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 p-8 rounded-3xl bg-secondary/5 border border-secondary/10">
                            <p className="text-secondary font-black text-sm uppercase tracking-tighter italic">"Empowering the digital transformation of Libya, one project at a time."</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col gap-6"
                    >
                        <div className="glass-morphism p-10 rounded-[40px] flex-1">
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-black uppercase tracking-widest text-slate-400 px-1">Full Name</label>
                                        <input type="text" className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-transparent focus:border-secondary outline-none transition-all font-bold" placeholder="Your name" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-black uppercase tracking-widest text-slate-400 px-1">Work Email</label>
                                        <input type="email" className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-transparent focus:border-secondary outline-none transition-all font-bold" placeholder="email@company.com" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 px-1">Subject</label>
                                    <select className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-transparent focus:border-secondary outline-none transition-all font-bold appearance-none">
                                        <option>New Project Inquiry</option>
                                        <option>Technical Support</option>
                                        <option>Training Request</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 px-1">Message</label>
                                    <textarea rows={5} className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-transparent focus:border-secondary outline-none transition-all font-bold resize-none" placeholder="How can we help you?"></textarea>
                                </div>
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full py-5 bg-primary text-white rounded-2xl font-black text-lg flex items-center justify-center gap-3 shadow-2xl shadow-primary/30 dark:bg-white dark:text-black dark:shadow-white/10"
                                >
                                    Send Message <Send size={20} strokeWidth={2.5} />
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
