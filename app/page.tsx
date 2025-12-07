"use client"

import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { SplitHero } from "@/components/home/SplitHero"
import { TrustBar } from "@/components/home/TrustBar"
import { motion } from "framer-motion"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { Recycle, Drill, ArrowRight, Truck, Shield, Award, Clock, Users, CheckCircle } from "lucide-react"
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

// Services Overview
const servicesOverview = [
  {
    title: "Scrap Metal Recycling",
    description: "Ferrous & non-ferrous metals trading. Complete facility scrap handling for construction and manufacturing.",
    icon: Recycle,
    color: "safety-yellow",
    link: "/scrap",
    items: ["Heavy Metals", "Copper & Aluminum", "Batteries & Cables", "Industrial Equipment"]
  },
  {
    title: "Oilfield Equipment Supply",
    description: "Premium valves, flanges, and drilling equipment. API certified supply chain for energy sector.",
    icon: Drill,
    color: "sky-400",
    link: "/oilfield",
    items: ["Drilling Rigs", "Valves & Flanges", "Heavy Machinery", "Spare Parts"]
  }
]

// Why Choose Us
const whyChooseUs = [
  {
    icon: Shield,
    title: "Texas Compliant",
    description: "Registered Metal Recycling Entity. Full compliance with Texas Occupations Code Chapter 1956."
  },
  {
    icon: Award,
    title: "API Certified",
    description: "Our supply chain adheres to API 6A and API Q1 standards for quality management."
  },
  {
    icon: Truck,
    title: "Statewide Logistics",
    description: "24/7 pickup and delivery services across Texas. Roll-off container service available."
  },
  {
    icon: Clock,
    title: "Quick Turnaround",
    description: "Same-day quotes. Fast processing and competitive market pricing."
  },
  {
    icon: Users,
    title: "15+ Years Experience",
    description: "Professional team with deep industry connections and expertise."
  },
  {
    icon: CheckCircle,
    title: "Full Traceability",
    description: "Mill Test Reports (MTRs) available. Complete documentation and tracking."
  }
]

// Gallery Images
const galleryImages = [
  { src: "/images/scrap/g2.jpg", alt: "Scrap Processing" },
  { src: "/images/oilfield/serv1.jpg", alt: "Oilfield Equipment" },
  { src: "/images/scrap/g3.jpg", alt: "Metal Recycling" },
  { src: "/images/oilfield/serv2.jpg", alt: "Valves & Fittings" },
  { src: "/images/scrap/g4.jpg", alt: "Industrial Scrap" },
  { src: "/images/oilfield/serv3.jpg", alt: "Drilling Equipment" },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-safety-yellow selection:text-shoreline-blue">
      <Header />
      <SplitHero />
      <TrustBar />

      {/* About Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs font-bold text-white/60 mb-6">
                ABOUT TRADING SOLUTIONS LLC
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Your Partner in <br />
                <span className="text-safety-yellow">Industrial Solutions</span>
              </h2>
              <p className="text-lg text-white/70 mb-6">
                Trading Solutions LLC is a Dallas-based company specializing in two core business lines: Industrial Scrap Recycling and Oil & Gas Equipment Supply.
              </p>
              <p className="text-white/60 mb-8">
                Our team of professionals, with over 15 years of industry experience, provides material processing, material handling, and support to recycling businesses and industrial clients throughout Texas and beyond. We are a reliable business associate to Recycling, Construction, Contracting, Processing, Refining, Smelting, and Manufacturing sectors.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/scrap">
                  <Button variant="accent" size="lg">Learn More</Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" size="lg">Contact Us</Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative h-48 rounded-2xl overflow-hidden">
                    <Image
                      src="/images/scrap/abtsecimg.jpg"
                      alt="About"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-64 rounded-2xl overflow-hidden">
                    <Image
                      src="/images/oilfield/abtefes.jpg"
                      alt="Equipment"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="relative h-64 rounded-2xl overflow-hidden">
                    <Image
                      src="/images/scrap/who-are-we.jpg"
                      alt="Team"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-48 rounded-2xl overflow-hidden">
                    <Image
                      src="/images/oilfield/sec3.jpg"
                      alt="Industrial"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-background border border-white/10 rounded-2xl p-6 shadow-2xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-safety-yellow">15+</div>
                    <div className="text-xs text-white/50">Years</div>
                  </div>
                  <div className="w-px h-12 bg-white/10" />
                  <div className="text-center">
                    <div className="text-3xl font-bold text-sky-400">2</div>
                    <div className="text-xs text-white/50">Divisions</div>
                  </div>
                  <div className="w-px h-12 bg-white/10" />
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">TX</div>
                    <div className="text-xs text-white/50">Based</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 px-4 bg-white/5">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Two specialized divisions serving the industrial sector
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {servicesOverview.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={service.link}>
                  <Card className="glass-card border-white/5 h-full group hover:bg-white/10 transition-all duration-300 cursor-pointer">
                    <CardHeader>
                      <div className={`p-4 rounded-2xl bg-${service.color}/10 w-fit mb-4 group-hover:scale-110 transition-transform`}>
                        <service.icon className={`w-8 h-8 text-${service.color}`} />
                      </div>
                      <CardTitle className="text-2xl">{service.title}</CardTitle>
                      <CardDescription className="text-white/70 text-base">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-2 mb-6">
                        {service.items.map((item, i) => (
                          <div key={i} className="flex items-center gap-2 text-white/60 text-sm">
                            <CheckCircle className={`w-4 h-4 text-${service.color}`} />
                            {item}
                          </div>
                        ))}
                      </div>
                      <div className={`flex items-center gap-2 text-${service.color} font-semibold group-hover:gap-4 transition-all`}>
                        Explore Division <ArrowRight className="w-4 h-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Why Choose Us</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Reasons for partnering with Trading Solutions LLC
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                className="glass-card p-6 group hover:bg-white/10 transition-all"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <div className="flex gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-safety-yellow/10 to-sky-500/10 text-white h-fit group-hover:from-safety-yellow/20 group-hover:to-sky-500/20 transition-all">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-white/60 text-sm">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 px-4 bg-white/5">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Work</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              A glimpse of our operations across both divisions
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
                className="relative h-48 md:h-64 rounded-2xl overflow-hidden group cursor-pointer"
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-white font-medium text-sm">{image.alt}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <motion.div
          className="container mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-shoreline-blue to-slate-900" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
            <div className="relative z-10 p-12 md:p-20 text-center">
              <motion.h2
                className="text-3xl md:text-5xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Ready to Get Started?
              </motion.h2>
              <motion.p
                className="text-xl text-white/70 mb-10 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                Whether you need scrap recycling services or oilfield equipment supply, our team is ready to help.
              </motion.p>
              <motion.div
                className="flex flex-wrap gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <Link href="/contact">
                  <Button variant="accent" size="lg" className="text-lg px-8">
                    Get a Quote
                  </Button>
                </Link>
                <a href="tel:+12145550123">
                  <Button variant="outline" size="lg" className="text-lg px-8">
                    Call Now
                  </Button>
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  )
}
