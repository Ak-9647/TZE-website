"use client"

import { useState, useMemo, useSyncExternalStore, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"

// Subscribe function for useSyncExternalStore (no-op for client detection)
const emptySubscribe = () => () => { }
const getServerSnapshot = () => false
const getClientSnapshot = () => true

// Client-only hook
function useIsClient() {
    return useSyncExternalStore(emptySubscribe, getClientSnapshot, getServerSnapshot)
}

// Animated particles for visual effect - client-side only with stable values
function FloatingParticles({ color }: { color: string }) {
    const isClient = useIsClient()

    // Generate particles once with deterministic values
    const particles = useMemo(() => {
        return [...Array(20)].map((_, i) => ({
            x: (i * 5) % 100,
            duration: 10 + (i % 10),
            delay: i * 0.5,
        }))
    }, [])

    if (!isClient) return null

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map((particle, i) => (
                <motion.div
                    key={i}
                    className={`absolute w-1 h-1 rounded-full ${color}`}
                    initial={{
                        x: `${particle.x}%`,
                        y: "110%",
                        opacity: 0,
                    }}
                    animate={{
                        y: "-10%",
                        opacity: [0, 1, 0],
                    }}
                    transition={{
                        duration: particle.duration,
                        repeat: Infinity,
                        delay: particle.delay,
                        ease: "linear",
                    }}
                />
            ))}
        </div>
    )
}


// Stats counter animation
function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
    const [count, setCount] = useState(0)

    useEffect(() => {
        const duration = 2000
        const steps = 60
        const increment = value / steps
        let current = 0

        const timer = setInterval(() => {
            current += increment
            if (current >= value) {
                setCount(value)
                clearInterval(timer)
            } else {
                setCount(Math.floor(current))
            }
        }, duration / steps)

        return () => clearInterval(timer)
    }, [value])

    return <span>{count}{suffix}</span>
}

export function SplitHero() {
    const [hoveredSide, setHoveredSide] = useState<"left" | "right" | null>(null)

    return (
        <div className="relative h-[calc(100vh-4rem)] mt-16 flex flex-col md:flex-row overflow-hidden">
            {/* Animated background grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

            {/* Left Side - Scrap Recycling */}
            <Link
                href="/scrap"
                className={cn(
                    "relative flex-1 overflow-hidden cursor-pointer transition-all duration-700 ease-out group",
                    hoveredSide === "left" && "md:flex-[1.3]",
                    hoveredSide === "right" && "md:flex-[0.7]"
                )}
                onMouseEnter={() => setHoveredSide("left")}
                onMouseLeave={() => setHoveredSide(null)}
            >
                {/* Background Image with zoom effect */}
                <motion.div
                    className="absolute inset-0"
                    animate={{ scale: hoveredSide === "left" ? 1.05 : 1 }}
                    transition={{ duration: 0.7 }}
                >
                    <Image
                        src="/images/scrap/banner.jpg"
                        alt="Industrial Scrap Recycling"
                        fill
                        className="object-cover"
                        priority
                    />
                </motion.div>

                {/* Gradient overlay */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"
                    animate={{
                        opacity: hoveredSide === "left" ? 0.85 : 0.9,
                    }}
                    transition={{ duration: 0.5 }}
                />

                <FloatingParticles color="bg-safety-yellow" />

                <div className="relative h-full flex flex-col justify-center p-8 md:p-16 lg:p-24 z-10">
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        {/* Badge */}
                        <motion.div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-safety-yellow/10 backdrop-blur-md border border-safety-yellow/30 text-xs font-bold text-safety-yellow mb-6"
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            <Sparkles className="w-3 h-3" />
                            <span>INDUSTRIAL RECYCLING</span>
                        </motion.div>

                        {/* Title with animation */}
                        <motion.h2
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            <span className="block">Scrap Metal</span>
                            <span className="block text-safety-yellow">Recycling</span>
                        </motion.h2>

                        {/* Description */}
                        <motion.p
                            className="text-white/70 text-lg mb-6 max-w-md"
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            Ferrous & non-ferrous metals, batteries, cables, and industrial equipment recycling
                        </motion.p>

                        {/* Stats */}
                        <motion.div
                            className="flex gap-6 mb-8"
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            <div className="text-center">
                                <div className="text-3xl font-bold text-safety-yellow">
                                    <AnimatedCounter value={9} />
                                </div>
                                <div className="text-xs text-white/50 uppercase tracking-wider">Materials</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-safety-yellow">
                                    <AnimatedCounter value={1000} suffix="+" />
                                </div>
                                <div className="text-xs text-white/50 uppercase tracking-wider">Tons/Month</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-safety-yellow">24/7</div>
                                <div className="text-xs text-white/50 uppercase tracking-wider">Logistics</div>
                            </div>
                        </motion.div>

                        {/* CTA */}
                        <motion.div
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-safety-yellow text-shoreline-blue font-bold transition-all group-hover:bg-safety-yellow/90"
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.6 }}
                        >
                            <span>Enter Scrap Division</span>
                            <motion.div
                                animate={{ x: hoveredSide === "left" ? 5 : 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <ArrowRight className="w-5 h-5" />
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </Link>

            {/* Center Divider */}
            <div className="hidden md:flex absolute left-1/2 top-0 bottom-0 z-20 items-center">
                <motion.div
                    className="w-px h-full bg-gradient-to-b from-transparent via-white/30 to-transparent"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                />
                <motion.div
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.6, delay: 0.8, type: "spring" }}
                >
                    <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center">
                        <span className="text-white font-bold text-sm">OR</span>
                    </div>
                </motion.div>
            </div>

            {/* Right Side - Oilfield Equipment */}
            <Link
                href="/oilfield"
                className={cn(
                    "relative flex-1 overflow-hidden cursor-pointer transition-all duration-700 ease-out group",
                    hoveredSide === "right" && "md:flex-[1.3]",
                    hoveredSide === "left" && "md:flex-[0.7]"
                )}
                onMouseEnter={() => setHoveredSide("right")}
                onMouseLeave={() => setHoveredSide(null)}
            >
                {/* Background Image with zoom effect */}
                <motion.div
                    className="absolute inset-0"
                    animate={{ scale: hoveredSide === "right" ? 1.05 : 1 }}
                    transition={{ duration: 0.7 }}
                >
                    <Image
                        src="/images/oilfield/banner.jpg"
                        alt="Oilfield Equipment Supply"
                        fill
                        className="object-cover"
                        priority
                    />
                </motion.div>

                {/* Gradient overlay */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-l from-background via-background/80 to-transparent"
                    animate={{
                        opacity: hoveredSide === "right" ? 0.85 : 0.9,
                    }}
                    transition={{ duration: 0.5 }}
                />

                <FloatingParticles color="bg-sky-400" />

                <div className="relative h-full flex flex-col justify-center p-8 md:p-16 lg:p-24 z-10 md:items-end md:text-right">
                    <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        {/* Badge */}
                        <motion.div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/10 backdrop-blur-md border border-sky-500/30 text-xs font-bold text-sky-400 mb-6"
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            <Sparkles className="w-3 h-3" />
                            <span>ENERGY INFRASTRUCTURE</span>
                        </motion.div>

                        {/* Title with animation */}
                        <motion.h2
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            <span className="block">Oilfield</span>
                            <span className="block text-sky-400">Equipment</span>
                        </motion.h2>

                        {/* Description */}
                        <motion.p
                            className="text-white/70 text-lg mb-6 max-w-md"
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            Premium valves, flanges, drilling rigs & heavy machinery for the energy sector
                        </motion.p>

                        {/* Stats */}
                        <motion.div
                            className="flex gap-6 mb-8 justify-end"
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            <div className="text-center">
                                <div className="text-3xl font-bold text-sky-400">
                                    <AnimatedCounter value={7} />
                                </div>
                                <div className="text-xs text-white/50 uppercase tracking-wider">Categories</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-sky-400">
                                    <AnimatedCounter value={50} suffix="+" />
                                </div>
                                <div className="text-xs text-white/50 uppercase tracking-wider">Products</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-sky-400">API</div>
                                <div className="text-xs text-white/50 uppercase tracking-wider">Certified</div>
                            </div>
                        </motion.div>

                        {/* CTA */}
                        <motion.div
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sky-500 text-white font-bold transition-all group-hover:bg-sky-400"
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.6 }}
                        >
                            <span>Enter Oilfield Division</span>
                            <motion.div
                                animate={{ x: hoveredSide === "right" ? 5 : 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <ArrowRight className="w-5 h-5" />
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </Link>
        </div>
    )
}
