"use client"

import { motion } from "framer-motion"
import { ShieldCheck, Truck, Award, Clock, CheckCircle, Star } from "lucide-react"

export function TrustBar() {
    const items = [
        {
            icon: ShieldCheck,
            label: "Texas Licensed",
            sub: "Registered Metal Recycler",
        },
        {
            icon: Award,
            label: "API Supply Chain",
            sub: "6A & Q1 Certified",
        },
        {
            icon: Truck,
            label: "24/7 Logistics",
            sub: "Statewide Coverage",
        },
        {
            icon: Clock,
            label: "Quick Turnaround",
            sub: "Same-Day Quotes",
        },
        {
            icon: CheckCircle,
            label: "Full Traceability",
            sub: "MTR Documentation",
        },
        {
            icon: Star,
            label: "15+ Years",
            sub: "Industry Experience",
        },
    ]

    return (
        <motion.div
            className="w-full border-y border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
        >
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-y md:divide-y-0 divide-x-0 md:divide-x divide-white/10">
                    {items.map((item, i) => (
                        <motion.div
                            key={i}
                            className="flex items-center justify-center gap-3 py-6 px-4 group cursor-pointer hover:bg-white/5 transition-colors"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 + i * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                        >
                            <motion.div
                                className="p-2 rounded-lg bg-gradient-to-br from-safety-yellow/20 to-sky-500/20 text-white group-hover:from-safety-yellow/30 group-hover:to-sky-500/30 transition-all"
                                whileHover={{ rotate: [0, -10, 10, 0] }}
                                transition={{ duration: 0.5 }}
                            >
                                <item.icon className="w-5 h-5" />
                            </motion.div>
                            <div>
                                <div className="font-semibold text-white text-sm">{item.label}</div>
                                <div className="text-xs text-white/50">{item.sub}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}
