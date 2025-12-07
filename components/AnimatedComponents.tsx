"use client"

import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

// Animated text that reveals word by word
export function AnimatedText({
    text,
    className = "",
    delay = 0,
    wordDelay = 0.05
}: {
    text: string
    className?: string
    delay?: number
    wordDelay?: number
}) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })
    const words = text.split(" ")

    return (
        <span ref={ref} className={className}>
            {words.map((word, i) => (
                <motion.span
                    key={i}
                    className="inline-block mr-[0.25em]"
                    initial={{ opacity: 0, y: 40, rotateX: -90 }}
                    animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                    transition={{
                        duration: 0.6,
                        delay: delay + i * wordDelay,
                        ease: [0.215, 0.61, 0.355, 1]
                    }}
                >
                    {word}
                </motion.span>
            ))}
        </span>
    )
}

// Animated heading with gradient reveal
export function AnimatedHeading({
    children,
    className = "",
    delay = 0
}: {
    children: React.ReactNode
    className?: string
    delay?: number
}) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-50px" })

    return (
        <motion.div
            ref={ref}
            className={`relative overflow-hidden ${className}`}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay }}
        >
            <motion.div
                initial={{ y: "100%" }}
                animate={isInView ? { y: 0 } : {}}
                transition={{ duration: 0.8, delay: delay + 0.1, ease: [0.215, 0.61, 0.355, 1] }}
            >
                {children}
            </motion.div>
        </motion.div>
    )
}

// Parallax section - elements move at different speeds on scroll
export function ParallaxSection({
    children,
    speed = 0.5,
    className = ""
}: {
    children: React.ReactNode
    speed?: number
    className?: string
}) {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    })
    const y = useTransform(scrollYProgress, [0, 1], [100 * speed, -100 * speed])

    return (
        <motion.div ref={ref} style={{ y }} className={className}>
            {children}
        </motion.div>
    )
}

// Floating element with continuous animation
export function FloatingElement({
    children,
    duration = 4,
    distance = 20,
    delay = 0,
    className = ""
}: {
    children: React.ReactNode
    duration?: number
    distance?: number
    delay?: number
    className?: string
}) {
    return (
        <motion.div
            className={className}
            animate={{
                y: [-distance / 2, distance / 2, -distance / 2],
            }}
            transition={{
                duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay
            }}
        >
            {children}
        </motion.div>
    )
}

// Magnetic element that follows cursor
export function MagneticElement({
    children,
    strength = 0.3,
    className = ""
}: {
    children: React.ReactNode
    strength?: number
    className?: string
}) {
    const ref = useRef<HTMLDivElement>(null)

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!ref.current) return
        const rect = ref.current.getBoundingClientRect()
        const x = e.clientX - rect.left - rect.width / 2
        const y = e.clientY - rect.top - rect.height / 2
        ref.current.style.transform = `translate(${x * strength}px, ${y * strength}px)`
    }

    const handleMouseLeave = () => {
        if (!ref.current) return
        ref.current.style.transform = "translate(0, 0)"
    }

    return (
        <div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`transition-transform duration-300 ease-out ${className}`}
        >
            {children}
        </div>
    )
}

// Counter animation
export function AnimatedCounter({
    value,
    suffix = "",
    prefix = "",
    duration = 2
}: {
    value: number
    suffix?: string
    prefix?: string
    duration?: number
}) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    return (
        <motion.span ref={ref}>
            {prefix}
            <motion.span
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
            >
                {isInView ? (
                    <CounterAnimation value={value} duration={duration} />
                ) : (
                    "0"
                )}
            </motion.span>
            {suffix}
        </motion.span>
    )
}

function CounterAnimation({ value, duration }: { value: number; duration: number }) {
    const ref = useRef<HTMLSpanElement>(null)

    return (
        <motion.span
            ref={ref}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onAnimationStart={() => {
                let start = 0
                const step = value / (duration * 60)
                const animate = () => {
                    start += step
                    if (ref.current) {
                        ref.current.textContent = Math.min(Math.round(start), value).toString()
                    }
                    if (start < value) {
                        requestAnimationFrame(animate)
                    }
                }
                animate()
            }}
        >
            0
        </motion.span>
    )
}

// Reveal on scroll with blur effect
export function BlurReveal({
    children,
    className = "",
    delay = 0
}: {
    children: React.ReactNode
    className?: string
    delay?: number
}) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-50px" })

    return (
        <motion.div
            ref={ref}
            className={className}
            initial={{ opacity: 0, filter: "blur(10px)", y: 30 }}
            animate={isInView ? { opacity: 1, filter: "blur(0px)", y: 0 } : {}}
            transition={{ duration: 0.8, delay, ease: [0.215, 0.61, 0.355, 1] }}
        >
            {children}
        </motion.div>
    )
}

// Stagger reveal for lists
export function StaggerReveal({
    children,
    className = "",
    staggerDelay = 0.1
}: {
    children: React.ReactNode[]
    className?: string
    staggerDelay?: number
}) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-50px" })

    return (
        <div ref={ref} className={className}>
            {children.map((child, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                        duration: 0.5,
                        delay: i * staggerDelay,
                        ease: [0.215, 0.61, 0.355, 1]
                    }}
                >
                    {child}
                </motion.div>
            ))}
        </div>
    )
}

// Gradient border animation
export function GradientBorder({
    children,
    className = ""
}: {
    children: React.ReactNode
    className?: string
}) {
    return (
        <div className={`relative p-[1px] rounded-2xl overflow-hidden ${className}`}>
            {/* Animated gradient border */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-safety-yellow via-orange-500 to-sky-400"
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                style={{
                    background: "conic-gradient(from 0deg, #FACC15, #F97316, #38BDF8, #FACC15)",
                }}
            />
            <div className="relative bg-background rounded-2xl">
                {children}
            </div>
        </div>
    )
}

// Typewriter effect
export function TypewriterText({
    text,
    className = "",
    speed = 50,
    delay = 0
}: {
    text: string
    className?: string
    speed?: number
    delay?: number
}) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    return (
        <span ref={ref} className={className}>
            {text.split("").map((char, i) => (
                <motion.span
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: delay + i * (speed / 1000) }}
                >
                    {char}
                </motion.span>
            ))}
        </span>
    )
}
