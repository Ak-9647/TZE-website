"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/Button"
import { Menu, X, Recycle, Drill, Phone, Mail, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
    {
        label: "Scrap Recycling",
        href: "/scrap",
        icon: Recycle,
        description: "Industrial metal recycling services"
    },
    {
        label: "Oilfield Supply",
        href: "/oilfield",
        icon: Drill,
        description: "Premium drilling equipment"
    },
]

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <>
            {/* Top Bar */}
            <div className="hidden md:block fixed top-0 w-full z-[60] bg-slate-950 border-b border-white/5">
                <div className="container mx-auto px-4 h-8 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-6">
                        <a href="tel:+12145550123" className="text-white/60 hover:text-white transition-colors flex items-center gap-1">
                            <Phone className="w-3 h-3" />
                            (214) 555-0123
                        </a>
                        <a href="mailto:info@tradingsolutionsllc.com" className="text-white/60 hover:text-white transition-colors flex items-center gap-1">
                            <Mail className="w-3 h-3" />
                            info@tradingsolutionsllc.com
                        </a>
                    </div>
                    <div className="text-white/40">
                        Dallas, TX | Mon-Sat 7AM-7PM CT
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <motion.header
                className={cn(
                    "fixed top-0 md:top-8 w-full z-50 transition-all duration-300",
                    isScrolled
                        ? "bg-shoreline-blue/95 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20"
                        : "bg-transparent"
                )}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="relative group">
                        <motion.div
                            className="font-bold text-xl tracking-tighter text-white"
                            whileHover={{ scale: 1.02 }}
                        >
                            TRADING<span className="text-safety-yellow">SOLUTIONS</span>
                        </motion.div>
                        <motion.div
                            className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-safety-yellow to-sky-400"
                            initial={{ width: 0 }}
                            whileHover={{ width: "100%" }}
                            transition={{ duration: 0.3 }}
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-1">
                        {navItems.map((item) => (
                            <div
                                key={item.href}
                                className="relative"
                                onMouseEnter={() => setActiveDropdown(item.href)}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <Link
                                    href={item.href}
                                    className="px-4 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors flex items-center gap-1 group"
                                >
                                    <item.icon className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                                    {item.label}
                                    <ChevronDown className={cn(
                                        "w-3 h-3 transition-transform",
                                        activeDropdown === item.href && "rotate-180"
                                    )} />
                                </Link>

                                {/* Dropdown */}
                                <AnimatePresence>
                                    {activeDropdown === item.href && (
                                        <motion.div
                                            className="absolute top-full left-0 pt-2"
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{ duration: 0.15 }}
                                        >
                                            <div className="bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-xl p-4 min-w-[200px] shadow-xl">
                                                <div className="flex items-start gap-3">
                                                    <div className="p-2 rounded-lg bg-white/5">
                                                        <item.icon className="w-5 h-5 text-safety-yellow" />
                                                    </div>
                                                    <div>
                                                        <h4 className="text-white font-medium text-sm">{item.label}</h4>
                                                        <p className="text-white/50 text-xs mt-1">{item.description}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                        <Link
                            href="/contact"
                            className="px-4 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors"
                        >
                            Contact
                        </Link>
                    </nav>

                    {/* CTA Buttons */}
                    <div className="hidden md:flex items-center gap-3">
                        <Link href="/contact">
                            <Button variant="outline" size="sm">
                                Get a Quote
                            </Button>
                        </Link>
                        <a href="tel:+12145550123">
                            <Button variant="safety" size="sm" className="group">
                                <Phone className="w-4 h-4 mr-1 group-hover:animate-pulse" />
                                Call Now
                            </Button>
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-white"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <AnimatePresence mode="wait">
                            {isMobileMenuOpen ? (
                                <motion.div
                                    key="close"
                                    initial={{ rotate: -90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: 90, opacity: 0 }}
                                >
                                    <X className="w-6 h-6" />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="menu"
                                    initial={{ rotate: 90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: -90, opacity: 0 }}
                                >
                                    <Menu className="w-6 h-6" />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </button>
                </div>
            </motion.header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className="fixed inset-0 z-40 md:hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <div
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                            onClick={() => setIsMobileMenuOpen(false)}
                        />
                        <motion.div
                            className="absolute top-16 left-0 right-0 bg-slate-900 border-b border-white/10 p-6"
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <nav className="space-y-4">
                                {navItems.map((item, i) => (
                                    <motion.div
                                        key={item.href}
                                        initial={{ x: -20, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: i * 0.1 }}
                                    >
                                        <Link
                                            href={item.href}
                                            className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            <div className="p-2 rounded-lg bg-white/5">
                                                <item.icon className="w-5 h-5 text-safety-yellow" />
                                            </div>
                                            <div>
                                                <div className="text-white font-medium">{item.label}</div>
                                                <div className="text-white/50 text-xs">{item.description}</div>
                                            </div>
                                        </Link>
                                    </motion.div>
                                ))}
                                <motion.div
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    <Link
                                        href="/contact"
                                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        <div className="p-2 rounded-lg bg-white/5">
                                            <Mail className="w-5 h-5 text-sky-400" />
                                        </div>
                                        <div>
                                            <div className="text-white font-medium">Contact Us</div>
                                            <div className="text-white/50 text-xs">Get in touch</div>
                                        </div>
                                    </Link>
                                </motion.div>
                            </nav>
                            <div className="mt-6 pt-6 border-t border-white/10 space-y-3">
                                <a href="tel:+12145550123" className="block">
                                    <Button variant="safety" size="lg" className="w-full">
                                        <Phone className="w-4 h-4 mr-2" />
                                        Call (214) 555-0123
                                    </Button>
                                </a>
                                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                                    <Button variant="outline" size="lg" className="w-full">
                                        Get a Free Quote
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
