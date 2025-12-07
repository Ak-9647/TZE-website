"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X, Send, Phone, Sparkles } from "lucide-react"

export function WhatsAppWidget() {
    const [isOpen, setIsOpen] = useState(false)
    const [isHovered, setIsHovered] = useState(false)
    const [message, setMessage] = useState("")
    const [mounted, setMounted] = useState(false)

    // Phone number (replace with actual number)
    const phoneNumber = "12145550123"
    const defaultMessage = "Hi, I'm interested in your services. Can you help me?"

    useEffect(() => {
        // Delay mount animation
        const timer = setTimeout(() => setMounted(true), 1500)
        return () => clearTimeout(timer)
    }, [])

    const handleSendMessage = () => {
        const encodedMessage = encodeURIComponent(message || defaultMessage)
        window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank")
        setMessage("")
        setIsOpen(false)
    }

    if (!mounted) return null

    return (
        <>
            {/* Floating Button */}
            <div className="fixed bottom-6 right-6 z-50">
                {/* Outer glow rings */}
                <motion.div
                    className="absolute inset-0 rounded-full"
                    animate={{
                        boxShadow: isOpen
                            ? "0 0 0 0 rgba(34, 197, 94, 0)"
                            : [
                                "0 0 0 0 rgba(34, 197, 94, 0.4)",
                                "0 0 0 20px rgba(34, 197, 94, 0)",
                                "0 0 0 0 rgba(34, 197, 94, 0)"
                            ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                />

                {/* Secondary ring */}
                {!isOpen && (
                    <motion.div
                        className="absolute inset-0 rounded-full"
                        animate={{
                            boxShadow: [
                                "0 0 0 0 rgba(34, 197, 94, 0.3)",
                                "0 0 0 30px rgba(34, 197, 94, 0)",
                                "0 0 0 0 rgba(34, 197, 94, 0)"
                            ]
                        }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    />
                )}

                {/* Hover label */}
                <AnimatePresence>
                    {isHovered && !isOpen && (
                        <motion.div
                            className="absolute right-full mr-4 top-1/2 -translate-y-1/2 whitespace-nowrap"
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 10 }}
                        >
                            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl px-4 py-2 text-white text-sm font-medium shadow-xl">
                                💬 Chat with us!
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Main button */}
                <motion.button
                    onClick={() => setIsOpen(!isOpen)}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className="relative w-16 h-16 rounded-full flex items-center justify-center text-white overflow-hidden group"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                >
                    {/* Gradient background */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-green-400 via-green-500 to-emerald-600"
                        animate={{
                            background: isOpen
                                ? "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)"
                                : "linear-gradient(135deg, #4ade80 0%, #22c55e 50%, #059669 100%)"
                        }}
                    />

                    {/* Shimmer effect */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        initial={{ x: "-100%" }}
                        animate={{ x: "100%" }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                    />

                    {/* Icon */}
                    <AnimatePresence mode="wait">
                        {isOpen ? (
                            <motion.div
                                key="close"
                                initial={{ scale: 0, rotate: -90 }}
                                animate={{ scale: 1, rotate: 0 }}
                                exit={{ scale: 0, rotate: 90 }}
                                transition={{ duration: 0.2 }}
                                className="relative z-10"
                            >
                                <X className="w-7 h-7" />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="chat"
                                initial={{ scale: 0, rotate: 90 }}
                                animate={{ scale: 1, rotate: 0 }}
                                exit={{ scale: 0, rotate: -90 }}
                                transition={{ duration: 0.2 }}
                                className="relative z-10"
                            >
                                <MessageCircle className="w-7 h-7" />
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Notification dot */}
                    {!isOpen && (
                        <motion.div
                            className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold border-2 border-white"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.5, type: "spring" }}
                        >
                            1
                        </motion.div>
                    )}
                </motion.button>
            </div>

            {/* Chat Panel */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed bottom-28 right-6 z-50 w-[360px]"
                        initial={{ opacity: 0, y: 20, scale: 0.9, originX: 1, originY: 1 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        transition={{ type: "spring", damping: 20, stiffness: 300 }}
                    >
                        <div className="relative bg-slate-900/95 backdrop-blur-2xl rounded-3xl border border-white/10 shadow-2xl shadow-black/50 overflow-hidden">
                            {/* Header with gradient */}
                            <div className="relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-green-500 via-green-600 to-emerald-700" />
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                    animate={{ x: ["-100%", "100%"] }}
                                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                                />
                                <div className="relative p-5">
                                    <div className="flex items-center gap-4">
                                        <motion.div
                                            className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30"
                                            whileHover={{ rotate: [0, -10, 10, 0] }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            <Sparkles className="w-7 h-7 text-white" />
                                        </motion.div>
                                        <div>
                                            <h3 className="text-white font-bold text-lg">Trading Solutions</h3>
                                            <p className="text-white/80 text-sm flex items-center gap-2">
                                                <motion.span
                                                    className="w-2 h-2 rounded-full bg-white"
                                                    animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
                                                    transition={{ duration: 1.5, repeat: Infinity }}
                                                />
                                                Online • Typically replies instantly
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Chat Area */}
                            <div className="p-5 max-h-[350px] overflow-y-auto">
                                {/* Welcome Message */}
                                <motion.div
                                    className="flex gap-3 mb-4"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 }}
                                >
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center flex-shrink-0">
                                        <Sparkles className="w-4 h-4 text-white" />
                                    </div>
                                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl rounded-tl-md p-4 max-w-[80%] border border-white/5">
                                        <p className="text-white text-sm leading-relaxed">
                                            👋 Welcome to Trading Solutions LLC! How can we help you today?
                                        </p>
                                        <p className="text-white/40 text-xs mt-2">Just now</p>
                                    </div>
                                </motion.div>

                                {/* Quick Options */}
                                <motion.div
                                    className="space-y-2 ml-11"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    <p className="text-white/40 text-xs mb-3">Quick replies:</p>
                                    {[
                                        { emoji: "♻️", text: "Get a scrap quote" },
                                        { emoji: "🛢️", text: "Oilfield equipment inquiry" },
                                        { emoji: "🚚", text: "Schedule a pickup" },
                                        { emoji: "📞", text: "Request a callback" }
                                    ].map((option, i) => (
                                        <motion.button
                                            key={i}
                                            onClick={() => setMessage(option.text)}
                                            className="w-full text-left p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-green-500/30 text-white text-sm transition-all flex items-center gap-2 group"
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.3 + i * 0.1 }}
                                            whileHover={{ x: 5 }}
                                        >
                                            <span>{option.emoji}</span>
                                            <span className="flex-1">{option.text}</span>
                                            <motion.span
                                                className="text-green-400 opacity-0 group-hover:opacity-100"
                                                initial={{ x: -5 }}
                                                whileHover={{ x: 0 }}
                                            >
                                                →
                                            </motion.span>
                                        </motion.button>
                                    ))}
                                </motion.div>
                            </div>

                            {/* Input Area */}
                            <div className="p-4 border-t border-white/10 bg-slate-950/50">
                                <div className="flex gap-2 mb-3">
                                    <input
                                        type="text"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        placeholder="Type your message..."
                                        className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-green-500/50 focus:ring-2 focus:ring-green-500/20 transition-all"
                                        onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                                    />
                                    <motion.button
                                        onClick={handleSendMessage}
                                        className="p-3 rounded-xl bg-gradient-to-br from-green-400 to-green-600 text-white shadow-lg shadow-green-500/30"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Send className="w-5 h-5" />
                                    </motion.button>
                                </div>

                                <motion.a
                                    href="tel:+12145550123"
                                    className="flex items-center justify-center gap-2 w-full p-3 rounded-xl bg-white/5 border border-white/10 text-white/70 text-sm hover:bg-white/10 hover:text-white transition-all group"
                                    whileHover={{ y: -2 }}
                                >
                                    <Phone className="w-4 h-4 group-hover:animate-pulse" />
                                    <span>Prefer to call? <strong className="text-white">(214) 555-0123</strong></span>
                                </motion.a>
                            </div>

                            {/* Powered by footer */}
                            <div className="px-4 pb-3 text-center">
                                <p className="text-white/20 text-xs">⚡ Powered by Trading Solutions</p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
