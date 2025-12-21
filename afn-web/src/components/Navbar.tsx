"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/70 dark:bg-black/70 backdrop-blur-xl border-b border-white/10 py-2' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="flex items-center space-x-5 group">
                            <div className="relative overflow-hidden rounded-2xl p-1 inline-block transition-all duration-500 group-hover:scale-110">
                                <Image
                                    src="/logo.jpg"
                                    alt="AFN Logo"
                                    width={140}
                                    height={140}
                                    className="w-auto h-12 object-contain logo-mask transition-all duration-500"
                                />
                            </div>
                            <div className="flex flex-col -space-y-1.5">
                                <span className="text-2xl font-[1000] tracking-[-0.04em] text-primary dark:text-white uppercase leading-none">
                                    Afaq
                                </span>
                                <span className="text-[11px] font-black tracking-[0.45em] text-secondary dark:text-secondary opacity-90 uppercase leading-none pl-0.5">
                                    Al-Namaa
                                </span>
                                <div className="h-[2px] w-0 bg-secondary group-hover:w-full transition-all duration-500 mt-1" />
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {['Services', 'About', 'Partners', 'Contact'].map((item) => (
                                <Link
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className="text-primary/70 hover:text-primary dark:text-white/70 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                                >
                                    {item}
                                </Link>
                            ))}
                            <Link
                                href="#contact"
                                className="bg-primary text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-secondary transition-all"
                            >
                                Get Started
                            </Link>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-primary dark:text-white hover:bg-primary/10 transition-colors"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <motion.div
                initial={false}
                animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                className="md:hidden overflow-hidden bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800"
            >
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    {['Services', 'About', 'Partners', 'Contact'].map((item) => (
                        <Link
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="block px-3 py-2 rounded-md text-base font-medium text-primary dark:text-white hover:bg-primary/10"
                            onClick={() => setIsOpen(false)}
                        >
                            {item}
                        </Link>
                    ))}
                </div>
            </motion.div>
        </nav>
    );
}
