"use client";
import { motion } from "framer-motion";
import { Phone, MessageCircle, ChevronDown } from "lucide-react";

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Background */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
                style={{ backgroundImage: "url('/images/room-01.jpg')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#070b16]/80 via-[#070b16]/40 to-[#070b16]/95" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#070b16]/50 via-transparent to-[#070b16]/50" />

            {/* Glows */}
            <div className="absolute top-1/3 left-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#D4AF37]/6 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none" />

            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />

            {/* Content */}
            <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto w-full">
                {/* Eyebrow */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="flex items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8"
                >
                    <div className="h-px w-8 sm:w-14 bg-gradient-to-r from-transparent to-[#D4AF37]/70" />
                    <span className="text-[#D4AF37] text-[10px] sm:text-xs tracking-[0.5em] sm:tracking-[0.7em] uppercase font-medium">
                        İstanbul · Bakırköy
                    </span>
                    <div className="h-px w-8 sm:w-14 bg-gradient-to-l from-transparent to-[#D4AF37]/70" />
                </motion.div>

                {/* Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.5 }}
                    className="font-serif font-bold text-white leading-[0.9] mb-6 sm:mb-8"
                    style={{ fontSize: "clamp(2.8rem, 10vw, 8rem)" }}
                >
                    Konforlu
                    <br />
                    <span
                        style={{
                            background: "linear-gradient(135deg,#B8960C 0%,#D4AF37 40%,#F0D060 65%,#D4AF37 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                        }}
                    >
                        Konaklama
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="text-white/55 text-base sm:text-lg md:text-xl max-w-lg mx-auto mb-8 sm:mb-12 leading-relaxed"
                >
                    Bakırköy merkezinde modern apart daireler.
                    <br />
                    <span className="text-white/80 font-medium">Saatlik · Günlük · Aylık</span>
                </motion.p>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                    className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
                >
                    <a
                        href="tel:+905414305050"
                        className="flex items-center gap-3 px-7 sm:px-9 py-3.5 sm:py-4 font-black rounded-2xl text-[#070b16] text-sm sm:text-base tracking-wide transition-all duration-300 hover:scale-105 shadow-2xl shadow-[#D4AF37]/20 w-full sm:w-auto justify-center"
                        style={{ background: "linear-gradient(135deg,#D4AF37 0%,#F0D060 50%,#D4AF37 100%)" }}
                    >
                        <Phone size={17} />
                        Hemen Ara
                    </a>
                    <a
                        href="https://wa.me/905414305050"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-7 sm:px-9 py-3.5 sm:py-4 bg-white/8 backdrop-blur-md border border-white/20 text-white font-semibold rounded-2xl hover:bg-white/15 hover:border-[#D4AF37]/40 transition-all duration-300 text-sm sm:text-base w-full sm:w-auto justify-center"
                    >
                        <MessageCircle size={17} />
                        WhatsApp
                    </a>
                </motion.div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    className="flex justify-center gap-8 sm:gap-12 md:gap-20 mt-14 sm:mt-20 pt-8 sm:pt-10 border-t border-white/8"
                >
                    {[
                        { value: "7/24", label: "Açık" },
                        { value: "1000+", label: "Misafir" },
                        { value: "5★", label: "Puan" },
                    ].map((stat) => (
                        <div key={stat.label} className="text-center">
                            <div
                                className="text-2xl sm:text-3xl md:text-4xl font-black font-serif"
                                style={{
                                    background: "linear-gradient(135deg,#D4AF37,#F0D060)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text",
                                }}
                            >
                                {stat.value}
                            </div>
                            <div className="text-white/35 text-[10px] sm:text-xs tracking-[0.3em] uppercase mt-1">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Scroll hint */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 7, 0] }}
                    transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
                    className="text-[#D4AF37]/50"
                >
                    <ChevronDown size={22} />
                </motion.div>
            </motion.div>

            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />
        </section>
    );
}
