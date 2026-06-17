"use client";
import { motion } from "framer-motion";
import { Phone, MessageCircle, MapPin, Clock, ArrowRight } from "lucide-react";

const cards = [
    {
        icon: Phone,
        label: "Telefon ile Ara",
        value: "+90 541 430 50 50",
        sub: "Hızlı rezervasyon için en iyi yol",
        href: "tel:+905414305050",
        cta: "Hemen Ara",
        gradient: "from-[#1a1f35] to-[#0f1629]",
        iconBg: "bg-[#D4AF37]/15",
        iconColor: "text-[#D4AF37]",
        ctaClass: "bg-[#D4AF37] text-[#0a0e1a] hover:bg-[#F0D060]",
    },
    {
        icon: MessageCircle,
        label: "WhatsApp",
        value: "Mesaj Gönder",
        sub: "7/24 hızlı yanıt",
        href: "https://wa.me/905414305050",
        cta: "WhatsApp Yaz",
        gradient: "from-[#0d2218] to-[#0f1629]",
        iconBg: "bg-green-500/15",
        iconColor: "text-green-400",
        ctaClass: "bg-green-500 text-white hover:bg-green-400",
    },
];

const infos = [
    {
        icon: MapPin,
        label: "Adres",
        value: "Bakırköy, İstanbul",
    },
    {
        icon: Clock,
        label: "Çalışma Saati",
        value: "7/24 Açık",
    },
];

export default function Contact() {
    return (
        <section id="contact" className="py-16 sm:py-24 lg:py-28 bg-[#070b16] relative overflow-hidden">
            {/* Decorative */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-[#D4AF37]/3 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-10 sm:mb-16 lg:mb-20"
                >
                    <span className="inline-block text-[#D4AF37] text-xs tracking-[0.5em] uppercase font-medium mb-4 px-4 py-1.5 border border-[#D4AF37]/30 rounded-full">
                        Bize Ulaşın
                    </span>
                    <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white mt-4 sm:mt-6 mb-4">
                        İletişim
                    </h2>
                    <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mb-4 sm:mb-6" />
                    <p className="text-white/40 max-w-md mx-auto text-sm sm:text-base">
                        Rezervasyon ve bilgi için bizi arayın — 7/24 yanınızdayız.
                    </p>
                </motion.div>

                {/* Hero Phone CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-10 sm:mb-16"
                >
                    <a
                        href="tel:+905414305050"
                        className="group inline-flex flex-col items-center gap-2 px-6 sm:px-12 py-6 sm:py-8 rounded-2xl sm:rounded-3xl border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 bg-[#D4AF37]/5 hover:bg-[#D4AF37]/10 transition-all duration-500 w-full sm:w-auto"
                    >
                        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#D4AF37] flex items-center justify-center mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300 shadow-2xl shadow-[#D4AF37]/30">
                            <Phone size={22} className="text-[#0a0e1a] sm:hidden" />
                            <Phone size={26} className="text-[#0a0e1a] hidden sm:block" />
                        </div>
                        <span className="text-white/50 text-xs tracking-widest uppercase">Rezervasyon Hattı</span>
                        <span className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold text-white group-hover:text-[#D4AF37] transition-colors duration-300">
                            +90 541 430 50 50
                        </span>
                        <span className="flex items-center gap-2 text-[#D4AF37] text-sm font-semibold mt-1 group-hover:gap-3 transition-all duration-300">
                            Hemen Ara <ArrowRight size={14} />
                        </span>
                    </a>
                </motion.div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 max-w-2xl mx-auto mb-8 sm:mb-12">
                    {cards.map((card, i) => (
                        <motion.a
                            key={card.label}
                            href={card.href}
                            target={card.href.startsWith("http") ? "_blank" : undefined}
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -4 }}
                            className={`bg-gradient-to-br ${card.gradient} rounded-2xl p-5 sm:p-6 border border-white/8 hover:border-white/15 transition-all duration-300 group`}
                        >
                            <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl ${card.iconBg} flex items-center justify-center mb-3 sm:mb-4`}>
                                <card.icon size={18} className={card.iconColor} />
                            </div>
                            <div className="text-white/50 text-xs mb-1">{card.label}</div>
                            <div className="text-white font-bold text-sm sm:text-base mb-0.5">{card.value}</div>
                            <div className="text-white/30 text-xs mb-4 sm:mb-5">{card.sub}</div>
                            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 ${card.ctaClass}`}>
                                {card.cta}
                                <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                            </div>
                        </motion.a>
                    ))}
                </div>

                {/* Info pills */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-3 sm:gap-4"
                >
                    {infos.map((info) => (
                        <div
                            key={info.label}
                            className="flex items-center gap-3 bg-white/4 border border-white/8 rounded-2xl px-4 sm:px-5 py-3"
                        >
                            <info.icon size={14} className="text-[#D4AF37]" />
                            <div>
                                <div className="text-white/35 text-xs">{info.label}</div>
                                <div className="text-white text-xs sm:text-sm font-medium">{info.value}</div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
