import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-white dark:bg-black text-slate-900 dark:text-white py-24 pb-12 border-t border-slate-100 dark:border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="inline-block mb-6">
                            <Image
                                src="/images/AFN-LOGO-text1.png"
                                alt="Afaq Al-Namaa Logo"
                                width={160}
                                height={60}
                                className="w-auto h-14 object-contain"
                            />
                        </Link>
                        <p className="text-slate-500 font-medium leading-relaxed max-w-xs">
                            Pioneering information technology and smart systems for a better digital future in Libya.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Services</h4>
                        <ul className="space-y-4 text-slate-500 font-medium">
                            <li><a href="#services" className="hover:text-primary dark:hover:text-white transition-colors">Planning</a></li>
                            <li><a href="#services" className="hover:text-primary dark:hover:text-white transition-colors">Implementation</a></li>
                            <li><a href="#services" className="hover:text-primary dark:hover:text-white transition-colors">Monitoring</a></li>
                            <li><a href="#services" className="hover:text-primary dark:hover:text-white transition-colors">System Support</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Company</h4>
                        <ul className="space-y-4 text-slate-500 font-medium">
                            <li><a href="#" className="hover:text-primary dark:hover:text-white transition-colors">About Us</a></li>
                            <li><a href="#partners" className="hover:text-primary dark:hover:text-white transition-colors">Partners</a></li>
                            <li><a href="#contact" className="hover:text-primary dark:hover:text-white transition-colors">Careers</a></li>
                            <li><a href="#contact" className="hover:text-primary dark:hover:text-white transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Location</h4>
                        <ul className="space-y-4 text-slate-500 font-medium">
                            <li className="flex items-start gap-2">
                                Tripoli, Libya
                            </li>
                            <li>Info@afntech.ly</li>
                            <li>+218 94 295 1594</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-24 pt-8 border-t border-slate-100 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-slate-400 text-sm font-medium">© {new Date().getFullYear()} Afaq Al-Namaa (AFN). All rights reserved.</p>
                    <div className="flex gap-8 text-sm text-slate-400 font-medium">
                        <a href="#" className="hover:text-primary dark:hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-primary dark:hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
