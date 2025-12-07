"use client"

import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Button } from "@/components/ui/Button"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Clock, MessageCircle, ArrowRight, Send } from "lucide-react"
import { useState } from "react"

const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
}

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        inquiryType: "general",
        message: "",
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1500))
        setIsSubmitting(false)
        setSubmitted(true)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    // Dynamic fields based on inquiry type
    const showTonnage = formData.inquiryType === "scrap"
    const showPartNumber = formData.inquiryType === "oilfield"

    return (
        <main className="min-h-screen bg-background">
            <Header />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-4 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-shoreline-blue via-slate-900 to-slate-800" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
                <motion.div
                    className="container mx-auto relative z-10 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                        Get In <span className="text-safety-yellow">Touch</span>
                    </h1>
                    <p className="text-xl text-white/70 max-w-2xl mx-auto">
                        Ready to discuss your scrap recycling or oilfield supply needs? Our team is here to help.
                    </p>
                </motion.div>
            </section>

            {/* Contact Info Cards */}
            <section className="py-12 px-4 -mt-12 relative z-20">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { icon: Phone, label: "Call Us", value: "(214) 555-0123", sub: "Mon-Fri 8am-6pm CT" },
                            { icon: Mail, label: "Email Us", value: "info@tradingsolutionsllc.com", sub: "24/7 Response" },
                            { icon: MapPin, label: "Visit Us", value: "Dallas, TX", sub: "By Appointment" },
                            { icon: Clock, label: "Hours", value: "Mon-Sat 7am-7pm", sub: "Central Time" },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                className="glass-card p-6 text-center group hover:bg-white/10 transition-all cursor-pointer"
                                variants={fadeInUp}
                                initial="initial"
                                whileInView="animate"
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                            >
                                <div className="p-3 rounded-xl bg-gradient-to-br from-safety-yellow/10 to-sky-500/10 w-fit mx-auto mb-4">
                                    <item.icon className="w-6 h-6 text-white" />
                                </div>
                                <div className="text-sm text-white/50 mb-1">{item.label}</div>
                                <div className="text-white font-semibold mb-1">{item.value}</div>
                                <div className="text-xs text-white/40">{item.sub}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form & Map */}
            <section className="py-20 px-4">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Form */}
                        <motion.div
                            className="glass-card p-8"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            {submitted ? (
                                <div className="text-center py-12">
                                    <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                                        <Send className="w-8 h-8 text-green-400" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4">Message Sent!</h3>
                                    <p className="text-white/70 mb-6">Thank you for reaching out. We&apos;ll get back to you within 24 hours.</p>
                                    <Button variant="outline" onClick={() => setSubmitted(false)}>Send Another Message</Button>
                                </div>
                            ) : (
                                <>
                                    <h2 className="text-2xl font-bold text-white mb-6">Send Us a Message</h2>
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm text-white/70 mb-2">Name *</label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-safety-yellow/50 transition-colors"
                                                    placeholder="Your name"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm text-white/70 mb-2">Email *</label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-safety-yellow/50 transition-colors"
                                                    placeholder="your@email.com"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm text-white/70 mb-2">Phone</label>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-safety-yellow/50 transition-colors"
                                                    placeholder="(214) 555-0000"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm text-white/70 mb-2">Company</label>
                                                <input
                                                    type="text"
                                                    name="company"
                                                    value={formData.company}
                                                    onChange={handleChange}
                                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-safety-yellow/50 transition-colors"
                                                    placeholder="Your company"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm text-white/70 mb-2">Inquiry Type *</label>
                                            <select
                                                name="inquiryType"
                                                value={formData.inquiryType}
                                                onChange={handleChange}
                                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-safety-yellow/50 transition-colors"
                                            >
                                                <option value="general" className="bg-slate-900">General Inquiry</option>
                                                <option value="scrap" className="bg-slate-900">Scrap Recycling</option>
                                                <option value="oilfield" className="bg-slate-900">Oilfield Equipment</option>
                                                <option value="quote" className="bg-slate-900">Request Quote</option>
                                            </select>
                                        </div>

                                        {/* Dynamic field for Scrap */}
                                        {showTonnage && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                exit={{ opacity: 0, height: 0 }}
                                            >
                                                <label className="block text-sm text-white/70 mb-2">Estimated Tonnage (Short Tons)</label>
                                                <input
                                                    type="text"
                                                    name="tonnage"
                                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-safety-yellow/50 transition-colors"
                                                    placeholder="e.g., 50 short tons"
                                                />
                                            </motion.div>
                                        )}

                                        {/* Dynamic field for Oilfield */}
                                        {showPartNumber && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                exit={{ opacity: 0, height: 0 }}
                                            >
                                                <label className="block text-sm text-white/70 mb-2">Part Number / Equipment Type</label>
                                                <input
                                                    type="text"
                                                    name="partNumber"
                                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-safety-yellow/50 transition-colors"
                                                    placeholder="e.g., API 6A Gate Valve 2-1/16"
                                                />
                                            </motion.div>
                                        )}

                                        <div>
                                            <label className="block text-sm text-white/70 mb-2">Message *</label>
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                                rows={4}
                                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-safety-yellow/50 transition-colors resize-none"
                                                placeholder="Tell us about your needs..."
                                            />
                                        </div>

                                        <Button
                                            type="submit"
                                            variant="accent"
                                            size="lg"
                                            className="w-full group"
                                            disabled={isSubmitting}
                                        >
                                            {isSubmitting ? "Sending..." : "Send Message"}
                                            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                                        </Button>
                                    </form>
                                </>
                            )}
                        </motion.div>

                        {/* Quick Contact Options */}
                        <motion.div
                            className="space-y-6"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="glass-card p-8">
                                <h3 className="text-xl font-bold text-white mb-4">Quick Contact</h3>
                                <p className="text-white/70 mb-6">Prefer to chat? Reach us instantly via WhatsApp or phone.</p>

                                <a
                                    href="https://wa.me/12145550123?text=Hi%2C%20I%27m%20interested%20in%20your%20services"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 p-4 rounded-xl bg-green-500/10 border border-green-500/20 hover:bg-green-500/20 transition-colors mb-4 group"
                                >
                                    <div className="p-3 rounded-full bg-green-500/20">
                                        <MessageCircle className="w-6 h-6 text-green-400" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-white font-semibold">Chat on WhatsApp</div>
                                        <div className="text-sm text-white/60">Quick response, usually within minutes</div>
                                    </div>
                                    <ArrowRight className="w-5 h-5 text-green-400 transition-transform group-hover:translate-x-1" />
                                </a>

                                <a
                                    href="tel:+12145550123"
                                    className="flex items-center gap-4 p-4 rounded-xl bg-sky-500/10 border border-sky-500/20 hover:bg-sky-500/20 transition-colors group"
                                >
                                    <div className="p-3 rounded-full bg-sky-500/20">
                                        <Phone className="w-6 h-6 text-sky-400" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-white font-semibold">Call Us Directly</div>
                                        <div className="text-sm text-white/60">(214) 555-0123</div>
                                    </div>
                                    <ArrowRight className="w-5 h-5 text-sky-400 transition-transform group-hover:translate-x-1" />
                                </a>
                            </div>

                            <div className="glass-card p-8">
                                <h3 className="text-xl font-bold text-white mb-4">Business Hours</h3>
                                <div className="space-y-3">
                                    {[
                                        { day: "Monday - Friday", hours: "7:00 AM - 7:00 PM" },
                                        { day: "Saturday", hours: "8:00 AM - 5:00 PM" },
                                        { day: "Sunday", hours: "Closed" },
                                    ].map((schedule, index) => (
                                        <div key={index} className="flex justify-between text-sm">
                                            <span className="text-white/70">{schedule.day}</span>
                                            <span className="text-white">{schedule.hours}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-4 pt-4 border-t border-white/10">
                                    <p className="text-xs text-white/50">All times are Central Time (CT). Emergency inquiries available 24/7 via WhatsApp.</p>
                                </div>
                            </div>

                            <div className="glass-card p-8">
                                <h3 className="text-xl font-bold text-white mb-4">Office Location</h3>
                                <div className="aspect-video rounded-xl overflow-hidden bg-white/5 border border-white/10 relative">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="text-center">
                                            <MapPin className="w-8 h-8 text-safety-yellow mx-auto mb-2" />
                                            <p className="text-white font-semibold">Dallas, TX</p>
                                            <p className="text-sm text-white/60">Industrial District</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
