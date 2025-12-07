"use client"

import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Button } from "@/components/ui/Button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card"
import { motion } from "framer-motion"
import { Recycle, Truck, Battery, Cable, Cpu, Scale, Shield, Clock, Award, CheckCircle, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
}

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
}

// Materials we deal with
const materials = [
    { name: "Heavy Metals", icon: Scale },
    { name: "Galvanized Steel", icon: Shield },
    { name: "Copper", icon: Recycle },
    { name: "Aluminum", icon: Recycle },
    { name: "Stainless Steel", icon: Shield },
    { name: "Lead", icon: Scale },
    { name: "Nickel", icon: Recycle },
    { name: "Zinc", icon: Recycle },
    { name: "Brass", icon: Recycle },
]

// Services
const services = [
    {
        title: "Ferrous & Non-Ferrous Metals",
        description: "Contract for full scrap handling from construction sites or manufacturing facilities. Materials such as Copper, Aluminum, Brass, Motors, Pumps, Valves, Generators, Vehicles, and Equipment purchased at prevailing market rates.",
        icon: Recycle,
        image: "/images/scrap/ser1.jpg"
    },
    {
        title: "Battery Recycling",
        description: "All kinds of batteries are purchased to extract recycling items. Waste disposed of in an environmentally friendly manner compliant with Texas regulations.",
        icon: Battery,
        image: "/images/scrap/ser2.jpg"
    },
    {
        title: "Electrical Cable Recovery",
        description: "Electrical cables are purchased to extract Copper, Aluminum, and Lead. Transported to recycling plants for proper processing and material recovery.",
        icon: Cable,
        image: "/images/scrap/ser3.jpg"
    },
    {
        title: "Industrial Equipment",
        description: "Air conditioning chiller units, motors, pumps, valves, generators - we handle complete asset recovery for industrial facilities undergoing renovation or decommissioning.",
        icon: Cpu,
        image: "/images/scrap/who-are-we.jpg"
    }
]

// Why Choose Us
const whyChooseUs = [
    { title: "Quick & Convenient", icon: Clock },
    { title: "Reliable and Trusted", icon: Shield },
    { title: "Team of Professionals", icon: Award },
    { title: "Competitive Pricing", icon: Scale },
    { title: "Texas Compliant", icon: CheckCircle },
    { title: "Quick Turnaround", icon: Truck },
]

// Gallery images
const galleryImages = [
    "/images/scrap/g2.jpg",
    "/images/scrap/g3.jpg",
    "/images/scrap/g4.jpg",
    "/images/scrap/g5.jpg",
    "/images/scrap/g6.jpg",
    "/images/scrap/bannerfooter.jpg",
]

export default function ScrapPage() {
    return (
        <main className="min-h-screen bg-background">
            <Header />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-4 overflow-hidden min-h-[80vh] flex items-center">
                <div className="absolute inset-0">
                    <Image
                        src="/images/scrap/bannerfooter.jpg"
                        alt="Scrap Metal Recycling"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/50" />
                </div>
                <div className="container mx-auto relative z-10">
                    <motion.div
                        className="max-w-3xl"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-safety-yellow/10 border border-safety-yellow/20 text-sm font-bold text-safety-yellow mb-6"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            <Recycle className="w-4 h-4" />
                            INDUSTRIAL RECYCLING DIVISION
                        </motion.div>
                        <motion.h1
                            className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            Leading Scrap Dealer <br />
                            <span className="text-safety-yellow">in Texas</span>
                        </motion.h1>
                        <motion.p
                            className="text-xl text-white/70 mb-8 max-w-2xl"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            Trading Solutions LLC deals in purchasing all kinds of Ferrous & Non-Ferrous metals from Manufacturing Units, Construction sites, Power plants, Refineries, Oil and Gas industries, and Petrochemical projects.
                        </motion.p>
                        <motion.div
                            className="flex flex-wrap gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                        >
                            <Link href="/contact">
                                <Button variant="accent" size="lg" className="group">
                                    Get a Quote
                                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </Button>
                            </Link>
                            <Link href="/contact">
                                <Button variant="outline" size="lg">Request Inspection</Button>
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-12 px-4 bg-safety-yellow/5 border-y border-safety-yellow/10">
                <div className="container mx-auto">
                    <motion.div
                        className="grid grid-cols-2 md:grid-cols-4 gap-8"
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >
                        {[
                            { value: "15+", label: "Years Experience" },
                            { value: "1000+", label: "Short Tons Monthly" },
                            { value: "100%", label: "Texas Compliant" },
                            { value: "24/7", label: "Logistics Support" },
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                className="text-center"
                                variants={fadeInUp}
                            >
                                <div className="text-4xl md:text-5xl font-bold text-safety-yellow mb-2">{stat.value}</div>
                                <div className="text-white/60 text-sm uppercase tracking-wider">{stat.label}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-20 px-4">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">About Our Company</h2>
                            <p className="text-white/70 mb-6">
                                Trading Solutions LLC consists of a team of professional, experienced staff associated with Metal Traders and Recyclers based across the United States and worldwide.
                            </p>
                            <p className="text-white/70 mb-6">
                                As a company, we are primarily interested in providing material processing, material handling, and support to other metal recycling businesses serving industrial clients.
                            </p>
                            <p className="text-white/70 mb-8">
                                We are a reliable business associate to numerous Recycling, Construction, Contracting, Processing, Refining, Smelting, and Manufacturing sectors throughout Texas and beyond.
                            </p>
                            <Link href="/contact">
                                <Button variant="outline">Contact Us</Button>
                            </Link>
                        </motion.div>
                        <motion.div
                            className="relative h-[500px] rounded-2xl overflow-hidden"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <Image
                                src="/images/scrap/abtsecimg.jpg"
                                alt="About Trading Solutions"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Materials We Handle */}
            <section className="py-20 px-4 bg-white/5">
                <div className="container mx-auto">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Materials We Handle</h2>
                        <p className="text-white/60 max-w-2xl mx-auto">
                            We deal with and recycle a wide range of ferrous and non-ferrous metals
                        </p>
                    </motion.div>
                    <motion.div
                        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >
                        {materials.map((material, index) => (
                            <motion.div
                                key={index}
                                className="glass-card p-6 text-center hover:bg-white/10 transition-colors cursor-pointer group"
                                variants={fadeInUp}
                                whileHover={{ scale: 1.05, y: -5 }}
                            >
                                <material.icon className="w-8 h-8 text-safety-yellow mx-auto mb-3 group-hover:scale-110 transition-transform" />
                                <span className="text-white font-medium">{material.name}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20 px-4">
                <div className="container mx-auto">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Services</h2>
                        <p className="text-white/60 max-w-2xl mx-auto">
                            With the help of our trained professionals, we provide solutions to optimize the maximum financial returns of your company&apos;s surplus materials.
                        </p>
                    </motion.div>
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 gap-8"
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                whileHover={{ y: -10 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Card className="glass-card border-white/5 overflow-hidden h-full group">
                                    <div className="relative h-48 overflow-hidden">
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                                    </div>
                                    <CardHeader>
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="p-2 rounded-lg bg-safety-yellow/10">
                                                <service.icon className="w-6 h-6 text-safety-yellow" />
                                            </div>
                                            <CardTitle>{service.title}</CardTitle>
                                        </div>
                                        <CardDescription className="text-white/70">
                                            {service.description}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <Button variant="ghost" className="text-safety-yellow hover:text-safety-yellow/80 p-0 group/btn">
                                            Learn More
                                            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                                        </Button>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="py-20 px-4 bg-white/5">
                <div className="container mx-auto">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Facility</h2>
                        <p className="text-white/60 max-w-2xl mx-auto">
                            State-of-the-art processing facility equipped to handle large volumes
                        </p>
                    </motion.div>
                    <motion.div
                        className="grid grid-cols-2 md:grid-cols-3 gap-4"
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >
                        {galleryImages.map((image, index) => (
                            <motion.div
                                key={index}
                                className="relative h-64 rounded-xl overflow-hidden cursor-pointer group"
                                variants={fadeInUp}
                                whileHover={{ scale: 1.02 }}
                            >
                                <Image
                                    src={image}
                                    alt={`Gallery image ${index + 1}`}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <div className="p-3 rounded-full bg-white/20 backdrop-blur-sm">
                                        <ArrowRight className="w-6 h-6 text-white" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 px-4">
                <div className="container mx-auto">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Us</h2>
                        <p className="text-white/60 max-w-2xl mx-auto">
                            Reasons for choosing Trading Solutions LLC
                        </p>
                    </motion.div>
                    <motion.div
                        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >
                        {whyChooseUs.map((item, index) => (
                            <motion.div
                                key={index}
                                className="glass-card p-6 text-center group hover:bg-safety-yellow/10 transition-colors"
                                variants={fadeInUp}
                                whileHover={{ y: -5 }}
                            >
                                <div className="p-3 rounded-full bg-safety-yellow/10 w-fit mx-auto mb-4 group-hover:bg-safety-yellow/20 transition-colors">
                                    <item.icon className="w-6 h-6 text-safety-yellow" />
                                </div>
                                <span className="text-white font-medium text-sm">{item.title}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4">
                <motion.div
                    className="container mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="relative rounded-3xl overflow-hidden">
                        <Image
                            src="/images/scrap/sec2.jpg"
                            alt="CTA Background"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/70" />
                        <div className="relative z-10 p-12 md:p-20">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                                Don&apos;t Know What To Start With?
                            </h2>
                            <p className="text-xl text-white/70 mb-8 max-w-xl">
                                Get solutions for all scrap trading. Our team of professionals is ready to help you maximize returns on your surplus materials.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link href="/contact">
                                    <Button variant="accent" size="lg">Contact Us Today</Button>
                                </Link>
                                <a href="tel:+12145550123">
                                    <Button variant="outline" size="lg">Call Now</Button>
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>

            <Footer />
        </main>
    )
}
