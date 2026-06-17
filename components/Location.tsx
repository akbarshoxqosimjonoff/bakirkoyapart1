"use client";
import { motion } from "framer-motion";
import { MapPin, Train, ShoppingBag, Plane, Clock, ArrowUpRight } from "lucide-react";

const nearbyPlaces = [
    { icon: Train, label: "Metro İstasyonu", distance: "3 dk", color: "text-blue-400", bg: "bg-blue-400/10" },
    { icon: Train, label: "Marmaray", distance: "1 dk", color: "text-green-400", bg: "bg-green-400/10" },
    { icon: ShoppingBag, label: "Capacity AVM", distance: "7 dk", color: "text-purple-400", bg: "bg-purple-400/10" },
    { icon: ShoppingBag, label: "Galleria AVM", distance: "10 dk", color: "text-pink-400", bg: "bg-pink-400/10" },
    { icon: Plane, label: "Atatürk Havalimanı", distance: "15 dk", color: "text-orange-400", bg: "bg-orange-400/10" },
    { icon: Clock, label: "Taksim", distance: "25 dk", color: "text-[#D4AF37]", bg: "bg-[#D4AF37]/10" },
];

export default function Location() {
    return (
        <section id="location" className="py-16 sm:py-24 lg:py-28 bg-[#f5f5f7] relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/15 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-10 sm:mb-16"
                >
                    <span className="inline-block text-[#D4AF37] text-xs tracking-[0.5em] uppercase font-medium mb-4 px-4 py-1.5 border border-[#D4AF37]/30 rounded-full bg-white">
                        Neredeyiz
                    </span>
                    <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-[#0F172A] mt-4 sm:mt-6 mb-4">
                        Konum
                    </h2>
                    <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto" />
                </motion.div>

                <div className="grid lg:grid-cols-5 gap-6 sm:gap-8 items-stretch">
                    {/* Map */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="lg:col-span-3 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl min-h-[280px] sm:min-h-[380px] lg:min-h-[420px]"
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d755.8!2d28.8723!3d40.9808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa4e9b4d2ef5d%3A0x1!2sFaz%C4%B1l+Pa%C5%9Fa+Sk.+No%3A4%2C+34140+Bak%C4%B1rk%C3%B6y%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1700000000001"
                            width="100%"
                            height="100%"
                            style={{ border: 0, minHeight: "280px" }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Bakirkoy Apart Konum"
                        />
                    </motion.div>

                    {/* Info panel */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="lg:col-span-2 flex flex-col gap-4 sm:gap-5"
                    >
                        {/* Address card */}
                        <div className="bg-[#0F172A] rounded-2xl sm:rounded-3xl p-5 sm:p-7 flex-shrink-0">
                            <div className="flex items-start gap-3 mb-4">
                                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#D4AF37]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <MapPin size={16} className="text-[#D4AF37]" />
                                </div>
                                <div>
                                    <div className="text-white font-semibold text-sm mb-1">Adresimiz</div>
                                    <div className="text-white/50 text-xs leading-relaxed">
                                        Zeytinlik, Fazıl Paşa Sk. No:4<br />
                                        34140 Bakırköy / İstanbul
                                    </div>
                                </div>
                            </div>
                            <a
                                href="https://maps.google.com/?q=Zeytinlik+Fazıl+Paşa+Sk+No+4+Bakırköy+İstanbul"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 w-full py-3 bg-[#D4AF37] text-[#0F172A] font-bold rounded-xl hover:bg-[#F0D060] transition-all duration-300 text-sm"
                            >
                                <ArrowUpRight size={15} />
                                Yol Tarifi Al
                            </a>
                        </div>

                        {/* Nearby */}
                        <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 flex-1 shadow-sm">
                            <h3 className="font-semibold text-[#0F172A] text-xs tracking-[0.3em] uppercase mb-4 sm:mb-5 flex items-center gap-2">
                                <div className="h-px flex-1 bg-gray-100" />
                                Yakın Noktalar
                                <div className="h-px flex-1 bg-gray-100" />
                            </h3>
                            <div className="space-y-2.5 sm:space-y-3">
                                {nearbyPlaces.map((place) => (
                                    <div key={place.label} className="flex items-center gap-3">
                                        <div className={`w-7 h-7 rounded-lg ${place.bg} flex items-center justify-center flex-shrink-0`}>
                                            <place.icon size={13} className={place.color} />
                                        </div>
                                        <span className="text-gray-600 text-xs sm:text-sm flex-1">{place.label}</span>
                                        <span className="text-gray-400 text-xs font-medium bg-gray-50 px-2 py-0.5 rounded-full whitespace-nowrap">{place.distance}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
