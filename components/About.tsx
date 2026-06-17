"use client";
import { motion } from "framer-motion";
import { Shield, Clock, MapPin, Star } from "lucide-react";

const highlights = [
    { icon: Shield, title: "Temiz & Hijyenik", desc: "Profesyonel temizlik, her konaklamada." },
    { icon: Clock, title: "7/24 Açık", desc: "Gece ya da gündüz, her zaman hizmetinizdeyiz." },
    { icon: MapPin, title: "Merkezi Konum", desc: "Metro ve AVM'lere yürüme mesafesinde." },
    { icon: Star, title: "Uygun Fiyat", desc: "Saatlik ve günlük esnek fiyatlandırma." },
];

export default function About() {
    return (
        <section id="about" className="py-16 sm:py-24 lg:py-28 bg-white relative overflow-hidden">
            <div className="absolute -top-32 -right-32 w-64 sm:w-96 h-64 sm:h-96 bg-[#D4AF37]/6 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Image collage */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                            <img
                                src="/images/room-02.jpg"
                                alt="Bakirkoy Apart"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Small images — only md+ */}
                        <div className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 w-28 sm:w-36 h-28 sm:h-36 rounded-xl sm:rounded-2xl overflow-hidden shadow-xl border-2 sm:border-4 border-white hidden sm:block">
                            <img src="/images/room-05.jpg" alt="Detay" className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 w-36 sm:w-44 h-24 sm:h-32 rounded-xl sm:rounded-2xl overflow-hidden shadow-xl border-2 sm:border-4 border-white hidden sm:block">
                            <img src="/images/room-08.jpg" alt="Mutfak" className="w-full h-full object-cover" />
                        </div>
                        {/* Badge */}
                        <div className="absolute -bottom-4 sm:-bottom-5 left-4 sm:left-6 bg-[#0F172A] rounded-xl sm:rounded-2xl px-4 sm:px-5 py-3 sm:py-4 shadow-2xl">
                            <div
                                className="text-2xl sm:text-3xl font-black font-serif leading-none"
                                style={{
                                    background: "linear-gradient(135deg,#D4AF37,#F0D060)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text",
                                }}
                            >10+</div>
                            <div className="text-white/50 text-[10px] sm:text-xs mt-1 tracking-wider">Yıl Tecrübe</div>
                        </div>
                    </motion.div>

                    {/* Text */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="pt-10 sm:pt-12 lg:pt-0"
                    >
                        <div className="flex items-center gap-3 mb-4 sm:mb-5">
                            <div className="h-px w-6 sm:w-8 bg-[#D4AF37]" />
                            <span className="text-[#D4AF37] text-[10px] sm:text-xs tracking-[0.5em] uppercase font-medium">
                                Hakkımızda
                            </span>
                        </div>
                        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F172A] leading-tight mb-4 sm:mb-6">
                            Neden Bakirkoy
                            <br />
                            <span className="text-[#D4AF37]">Apart?</span>
                        </h2>
                        <p className="text-gray-500 leading-relaxed mb-4 sm:mb-5 text-sm sm:text-base">
                            Bakırköy&apos;ün merkezinde, metro ve alışveriş merkezlerine yürüme
                            mesafesindeki modern apart dairelerimiz, iş seyahati veya tatil
                            için ideal çözüm sunuyor.
                        </p>
                        <p className="text-gray-500 leading-relaxed mb-8 sm:mb-10 text-sm sm:text-base">
                            Standart ve mutfaklı iki farklı oda tipiyle her bütçeye uygun
                            konaklama sağlıyoruz. Klima, Wi-Fi ve banyo tüm odalarda mevcuttur.
                        </p>

                        <div className="grid grid-cols-2 gap-3 sm:gap-4">
                            {highlights.map((item, i) => (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 14 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex gap-2.5 sm:gap-3 items-start p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gray-50 hover:bg-[#D4AF37]/6 border border-transparent hover:border-[#D4AF37]/20 transition-all duration-300"
                                >
                                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-[#D4AF37]/12 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <item.icon size={15} className="text-[#D4AF37]" />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-[#0F172A] text-xs sm:text-sm">{item.title}</div>
                                        <div className="text-gray-400 text-[10px] sm:text-xs mt-0.5 leading-relaxed">{item.desc}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
