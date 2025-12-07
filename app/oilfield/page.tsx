"use client"

import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Button } from "@/components/ui/Button"
import { motion } from "framer-motion"
import { Drill, Settings, FileCheck, Award, Wrench, Truck, Cog, Zap, Gauge, ArrowRight, CheckCircle, Shield } from "lucide-react"
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

// All 7 Service Categories from Shoreline
const serviceCategories = [
    {
        title: "Oil & Gas Equipment Supply",
        description: "Leading supplier of oilfield equipment for drilling operations across Texas and the Permian Basin.",
        icon: Drill,
        image: "/images/oilfield/homebanner1.jpg",
        items: [
            "Drilling Rigs & Drilling Equipment",
            "Tubulars & Handling Tools",
            "Fittings",
            "Flanges & Valves",
            "Pressure Control Equipment",
            "Instrumentation Items",
            "Line Pipes & Process Pipes",
            "Stud Bolts",
            "Gaskets, Insulation Kits & Sheets",
            "Steam Traps, Strainers & Pressure Regulators",
            "Pipeline Ancillaries",
            "Access Platform & Telescopic Handlers"
        ]
    },
    {
        title: "Handling, Loading & Lifting Equipment",
        description: "Complete range of cranes, forklifts, and material handling solutions for industrial operations.",
        icon: Truck,
        image: "/images/oilfield/homebanner2.jpg",
        items: [
            "Hydraulic Truck Mounted Cranes",
            "Rough Terrain & All Terrain Cranes",
            "Crawler Cranes",
            "Industrial & Rough Terrain Forklift Trucks",
            "Container Handling Equipment",
            "Access Platform & Telescopic Handlers"
        ]
    },
    {
        title: "Well Drilling Equipment",
        description: "Specialized drilling tools and equipment for well construction and maintenance.",
        icon: Drill,
        image: "/images/oilfield/homebanner3.jpg",
        items: [
            "Piling/Drilling Tools & Consumables",
            "Steel Wire Ropes",
            "Well Head, Industrial & Pipeline Valves",
            "Piling, Drilling & Construction Machines",
            "CNC Machining Services",
            "Hydraulic Hammer & Pneumatic Tools"
        ]
    },
    {
        title: "Heavy Equipment & Machinery",
        description: "Industrial machinery parts and components for heavy-duty operations.",
        icon: Cog,
        image: "/images/oilfield/homebanner4.jpg",
        items: [
            "Engine Parts",
            "Transmission And Final Drive Parts",
            "Hydraulic Parts",
            "Ground Engaging Tools",
            "Plant Machinery Parts",
            "Measuring & Levelling Tools"
        ]
    },
    {
        title: "Power Generation & Distribution",
        description: "Generating sets and power distribution equipment for industrial and oilfield applications.",
        icon: Zap,
        image: "/images/oilfield/serv1.jpg",
        items: [
            "Generating Sets",
            "Transmission Equipment",
            "Distribution Equipment",
            "Power Control Systems"
        ]
    },
    {
        title: "Engines & Machinery Spare Parts",
        description: "Comprehensive inventory of spare parts to keep your operations running.",
        icon: Wrench,
        image: "/images/oilfield/serv2.jpg",
        items: [
            "Ground Engaging Tools",
            "Engine Gears",
            "Hydraulics",
            "Filters",
            "Electrical Parts"
        ]
    },
    {
        title: "Pumps, Engines & Valves",
        description: "High-quality valves and pumping solutions for industrial and oilfield applications.",
        icon: Settings,
        image: "/images/oilfield/serv3.jpg",
        items: [
            "Diaphragm Valves",
            "Check Valves",
            "Sluice Valves",
            "Knife Gate Valves",
            "Centrifugal Pumps",
            "Horizontal Centrifugal Pumps",
            "Fire Hydrant Systems"
        ]
    }
]

// Product categories for quick navigation
const productCategories = [
    { name: "Oil & Gas Fittings", icon: Settings },
    { name: "Valves", icon: Gauge },
    { name: "Instrumentation", icon: Cog },
    { name: "Flanges", icon: Wrench },
    { name: "Safety Products", icon: Shield },
    { name: "Electrical", icon: Zap },
]

// Gallery images
const galleryImages = [
    "/images/oilfield/serv1.jpg",
    "/images/oilfield/serv2.jpg",
    "/images/oilfield/serv3.jpg",
    "/images/oilfield/serv4.jpg",
    "/images/oilfield/serv5.jpg",
    "/images/oilfield/sec3.jpg",
]

export default function OilfieldPage() {
    return (
        <main className="min-h-screen bg-background">
            <Header />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-4 overflow-hidden min-h-[80vh] flex items-center">
                <div className="absolute inset-0">
                    <Image
                        src="/images/oilfield/abtefes.jpg"
                        alt="Oilfield Equipment"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-l from-shoreline-blue via-shoreline-blue/90 to-shoreline-blue/50" />
                </div>
                <div className="container mx-auto relative z-10">
                    <motion.div
                        className="max-w-3xl ml-auto text-right"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/20 text-sm font-bold text-sky-400 mb-6"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            <Drill className="w-4 h-4" />
                            ENERGY INFRASTRUCTURE DIVISION
                        </motion.div>
                        <motion.h1
                            className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            Premium Oilfield <br />
                            <span className="text-sky-400">Supply Solutions</span>
                        </motion.h1>
                        <motion.p
                            className="text-xl text-white/70 mb-8 max-w-2xl ml-auto"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            Trading Solutions LLC is a leading supplier to the Oil & Gas sector, engaged in high-profile projects with major Drilling companies across the United States.
                        </motion.p>
                        <motion.div
                            className="flex flex-wrap gap-4 justify-end"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                        >
                            <Link href="/contact">
                                <Button variant="default" size="lg" className="bg-sky-600 hover:bg-sky-500 text-white border-none group">
                                    View Product Catalog
                                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </Button>
                            </Link>
                            <Link href="/contact">
                                <Button variant="outline" size="lg">Contact Sales</Button>
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Product Categories Quick Links */}
            <section className="py-12 px-4 bg-sky-500/5 border-y border-sky-500/10">
                <div className="container mx-auto">
                    <motion.div
                        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >
                        {productCategories.map((category, index) => (
                            <motion.div
                                key={index}
                                className="glass-card p-4 text-center cursor-pointer hover:bg-sky-500/10 transition-all group"
                                variants={fadeInUp}
                                whileHover={{ scale: 1.05, y: -5 }}
                            >
                                <category.icon className="w-8 h-8 text-sky-400 mx-auto mb-2 transition-transform group-hover:scale-110" />
                                <span className="text-white text-sm font-medium">{category.name}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="py-20 px-4">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <motion.div
                            className="glass-card p-8 border-sky-500/20"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="p-3 rounded-lg bg-sky-500/10 w-fit mb-6">
                                <Award className="w-8 h-8 text-sky-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                            <p className="text-white/70">
                                Trading Solutions LLC is focused on building long-term partnerships with our customers and principals throughout the American energy industry.
                            </p>
                        </motion.div>
                        <motion.div
                            className="glass-card p-8 border-sky-500/20"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="p-3 rounded-lg bg-sky-500/10 w-fit mb-6">
                                <Shield className="w-8 h-8 text-sky-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                            <p className="text-white/70">
                                With dedication and focus on professionalism, we work to become a leading supplier to the Oil & Gas sector throughout Texas and the broader United States market.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* All 7 Service Categories */}
            <section className="py-20 px-4 bg-white/5">
                <div className="container mx-auto">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Services</h2>
                        <p className="text-white/60 max-w-2xl mx-auto">
                            Comprehensive oilfield and industrial equipment supply across 7 major categories
                        </p>
                    </motion.div>

                    <div className="space-y-16">
                        {serviceCategories.map((category, index) => (
                            <motion.div
                                key={index}
                                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-3 rounded-lg bg-sky-500/10">
                                            <category.icon className="w-6 h-6 text-sky-400" />
                                        </div>
                                        <span className="text-sky-400 text-sm font-bold uppercase tracking-wider">Service {index + 1}</span>
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{category.title}</h3>
                                    <p className="text-white/70 mb-6">{category.description}</p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                                        {category.items.map((item, itemIndex) => (
                                            <div key={itemIndex} className="flex items-center gap-2 text-white/60 text-sm">
                                                <CheckCircle className="w-4 h-4 text-sky-400 flex-shrink-0" />
                                                <span>{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <Button variant="ghost" className="text-sky-400 hover:text-sky-300 p-0 group">
                                        View Products
                                        <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                                    </Button>
                                </div>
                                <div className={`relative h-[400px] rounded-2xl overflow-hidden ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                                    <Image
                                        src={category.image}
                                        alt={category.title}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-shoreline-blue via-transparent to-transparent" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quality Assurance */}
            <section className="py-20 px-4">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Quality Assurance</h2>
                            <p className="text-white/70 mb-8">
                                We understand that failure is not an option in the oilfield. That&apos;s why every component we supply undergoes rigorous inspection and comes with complete documentation.
                            </p>

                            <div className="space-y-6">
                                <motion.div
                                    className="flex gap-4"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 }}
                                >
                                    <div className="p-3 rounded-lg bg-sky-500/10 text-sky-400 h-fit">
                                        <FileCheck className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">Full Traceability</h3>
                                        <p className="text-white/60">Mill Test Reports (MTRs) available for all steel products, ensuring material grade and heat number tracking.</p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    className="flex gap-4"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 }}
                                >
                                    <div className="p-3 rounded-lg bg-sky-500/10 text-sky-400 h-fit">
                                        <Award className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">API Certified</h3>
                                        <p className="text-white/60">Our supply chain adheres to API 6A and API Q1 standards for quality management and product specification.</p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    className="flex gap-4"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 }}
                                >
                                    <div className="p-3 rounded-lg bg-sky-500/10 text-sky-400 h-fit">
                                        <Shield className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">PSI Rated Products</h3>
                                        <p className="text-white/60">All pressure-rated equipment supplied with proper PSI certifications for your specific application requirements.</p>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>

                        <motion.div
                            className="relative h-[600px] rounded-2xl overflow-hidden border border-white/10"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <Image
                                src="/images/oilfield/sec3.jpg"
                                alt="Quality Assurance"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-shoreline-blue via-transparent to-transparent" />
                            <div className="absolute bottom-8 left-8 right-8">
                                <div className="bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-xl">
                                    <p className="text-white font-medium">&quot;Reliability is our currency. We deliver the right parts, on time, every time.&quot;</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Gallery */}
            <section className="py-20 px-4 bg-white/5">
                <div className="container mx-auto">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Product Gallery</h2>
                        <p className="text-white/60 max-w-2xl mx-auto">
                            View our extensive range of oilfield and industrial equipment
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
                            src="/images/oilfield/homebanner4.jpg"
                            alt="CTA Background"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-shoreline-blue via-shoreline-blue/90 to-shoreline-blue/70" />
                        <div className="relative z-10 p-12 md:p-20 text-right">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                                Need a Quote for Your Project?
                            </h2>
                            <p className="text-xl text-white/70 mb-8 max-w-xl ml-auto">
                                From drilling rigs to valves, we supply the equipment you need to keep your operations running smoothly.
                            </p>
                            <div className="flex flex-wrap gap-4 justify-end">
                                <Link href="/contact">
                                    <Button variant="default" size="lg" className="bg-sky-600 hover:bg-sky-500 text-white border-none">
                                        Request Quote
                                    </Button>
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
