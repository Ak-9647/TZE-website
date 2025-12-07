"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Facebook, Linkedin, Twitter, ArrowRight } from "lucide-react"

export function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="relative border-t border-white/10 bg-gradient-to-b from-shoreline-blue to-slate-950 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f1a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f1a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-50" />

            {/* CTA Banner */}
            <div className="relative border-b border-white/10">
                <div className="container mx-auto px-4 py-12">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Ready to get started?</h3>
                            <p className="text-white/60">Get a free quote for your scrap or equipment needs today.</p>
                        </div>
                        <div className="flex gap-3">
                            <Link
                                href="/contact"
                                className="px-6 py-3 rounded-xl bg-safety-yellow text-shoreline-blue font-bold hover:bg-safety-yellow/90 transition-colors flex items-center gap-2 group"
                            >
                                Get a Quote
                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                            <a
                                href="tel:+12145550123"
                                className="px-6 py-3 rounded-xl border border-white/20 text-white hover:bg-white/10 transition-colors flex items-center gap-2"
                            >
                                <Phone className="w-4 h-4" />
                                Call Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
                    {/* Company Info */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="font-bold text-xl tracking-tighter text-white mb-4 block">
                            TRADING<span className="text-safety-yellow">SOLUTIONS</span>
                        </Link>
                        <p className="text-white/60 mb-6 max-w-sm">
                            Premier industrial asset recovery and oilfield supply services in Dallas, Texas.
                            Bridging the gap between scrap recycling and energy infrastructure.
                        </p>
                        <div className="flex gap-3">
                            {[
                                { icon: Facebook, href: "#", label: "Facebook" },
                                { icon: Linkedin, href: "#", label: "LinkedIn" },
                                { icon: Twitter, href: "#", label: "Twitter" },
                            ].map((social, i) => (
                                <motion.a
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className="p-2 rounded-lg bg-white/5 text-white/60 hover:bg-white/10 hover:text-white transition-colors"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <social.icon className="w-5 h-5" />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Divisions */}
                    <div>
                        <h3 className="font-semibold text-white mb-4">Our Divisions</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/scrap" className="text-sm text-white/60 hover:text-safety-yellow transition-colors flex items-center gap-2 group">
                                    <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                                    Industrial Scrap Recycling
                                </Link>
                            </li>
                            <li>
                                <Link href="/oilfield" className="text-sm text-white/60 hover:text-sky-400 transition-colors flex items-center gap-2 group">
                                    <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                                    Oilfield Equipment Supply
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-sm text-white/60 hover:text-white transition-colors flex items-center gap-2 group">
                                    <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                                    Request a Quote
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold text-white mb-4">Quick Links</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/contact" className="text-sm text-white/60 hover:text-white transition-colors">
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact#quote" className="text-sm text-white/60 hover:text-white transition-colors">
                                    Get a Quote
                                </Link>
                            </li>
                            <li>
                                <span className="text-sm text-white/40 cursor-default">Privacy Policy</span>
                            </li>
                            <li>
                                <span className="text-sm text-white/40 cursor-default">Terms of Service</span>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-semibold text-white mb-4">Contact Us</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="tel:+12145550123" className="text-sm text-white/60 hover:text-white transition-colors flex items-center gap-2">
                                    <Phone className="w-4 h-4 text-safety-yellow" />
                                    (214) 555-0123
                                </a>
                            </li>
                            <li>
                                <a href="mailto:info@tradingsolutionsllc.com" className="text-sm text-white/60 hover:text-white transition-colors flex items-center gap-2">
                                    <Mail className="w-4 h-4 text-safety-yellow" />
                                    info@tradingsolutionsllc.com
                                </a>
                            </li>
                            <li>
                                <span className="text-sm text-white/60 flex items-start gap-2">
                                    <MapPin className="w-4 h-4 text-safety-yellow flex-shrink-0 mt-0.5" />
                                    Dallas, TX<br />Industrial District
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8">
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
                        <div className="text-xs text-white/40 text-center lg:text-left">
                            <p>© {currentYear} Trading Solutions LLC. All rights reserved.</p>
                        </div>
                        <div className="text-xs text-white/40 text-center lg:text-right space-y-1">
                            <p>Trading Solutions LLC is a registered Metal Recycling Entity in the State of Texas.</p>
                            <p>Compliance: Texas Occupations Code Chapter 1956 | <a href="https://www.dps.texas.gov/section/texas-metals-program" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Texas Metals Program</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
