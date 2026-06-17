"use client";
import { motion } from "framer-motion";
import { Wifi, Wind, Tv, Coffee, Clock, Bath, Phone, MapPin, Zap } from "lucide-react";

const features = [
    { icon: Wifi, label: "Ücretsiz Wi-Fi", desc: "Yüksek hızlı" },
    { icon: Wind, label: "Klima", desc: "Tüm odalarda" },
    { icon: Tv, label: "Smart TV", desc: "Netflix dahil" },
    { icon: Bath, label: "Özel Banyo", desc: "Sıcak su 7/24" },
    { icon: Coffee, label: "Mutfak", desc: "Seçili odalarda" },
    { icon: Clock, label: "7/24 Resepsiyon", desc: "Her zaman açık" },
    { icon: Zap, label: "Kesintisiz Elektrik", desc: "Jeneratör" },
    { icon: Phone, label: "Kolay İletişim", desc: "Hızlı yanıt" },
    { icon: MapPin, label: "Merkezi Konum", desc: "Her yere yakın" },
];

export default function Features() {
    return (
        <section id="features" className="py-16 sm:py-24 lg:py-28 bg-[#070b16] relative overflow-hidden">
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage:
                        "linear-gradient(#D4AF37 1px,transparent 1px),linear-gradient(90deg,#D4AF37 1px,transparent 1px)",
                    backgroundSize: "60px 60px",
                }}
            />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 sm:mb-16 lg:mb-20"
                >
                    <span className="inline-block text-[#D4AF37] text-[10px] sm:text-xs tracking-[0.5em] uppercase font-medium px-4 sm:px-5 py-2 border border-[#D4AF37]/30 rounded-full mb-4 sm:mb-6">
                        Neler Sunuyoruz
                    </span>
                    <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-3 sm:mb-4">
                        Özellikler
                    </h2>
                    <div className="w-14 sm:w-16 h-0.5 mx-auto" style={{ background: "linear-gradient(90deg,transparent,#D4AF37,transparent)" }} />
                </motion.div>

                {/* Grid — 2 cols mobile, 3 cols tablet+ */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 max-w-3xl mx-auto">
                    {features.map((item, i) => (
                        <motion.div
                            key={item.label}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.06 }}
                            whileHover={{ y: -4, scale: 1.02 }}
                            className="group relative bg-[#0f1629]/80 border border-white/6 hover:border-[#D4AF37]/30 rounded-xl sm:rounded-2xl p-4 sm:p-5 text-center transition-all duration-300 cursor-default overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                            <div className="relative">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2.5 sm:mb-3 rounded-lg sm:rounded-xl bg-[#D4AF37]/10 group-hover:bg-[#D4AF37]/20 flex items-center justify-center transition-colors duration-300">
                                    <item.icon size={18} className="text-[#D4AF37]" />
                                </div>
                                <div className="text-white font-semibold text-xs sm:text-sm mb-0.5">{item.label}</div>
                                <div className="text-white/35 text-[10px] sm:text-xs">{item.desc}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
