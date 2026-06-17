"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

// room-19 → room-29 (11 rasm) + cover rasmlar ham
const images = [
    { src: "/images/room-19.jpg", alt: "Oda 1" },
    { src: "/images/room-20.jpg", alt: "Oda 2" },
    { src: "/images/room-04.jpg", alt: "Oda 3" },
    { src: "/images/room-22.jpg", alt: "Oda 4" },
    { src: "/images/room-23.jpg", alt: "Oda 5" },

    { src: "/images/room-25.jpg", alt: "Oda 7" },
    { src: "/images/room-26.jpg", alt: "Oda 8" },
    { src: "/images/room-27.jpg", alt: "Oda 9" },
    { src: "/images/room-28.jpg", alt: "Oda 10" },
    { src: "/images/room-29.jpg", alt: "Oda 11" },
    // ilk rasmlardan bir kac tane daha
    { src: "/images/room-01.jpg", alt: "Genel" },
    { src: "/images/room-02.jpg", alt: "Genel 2" },
];

export default function Gallery() {
    const [lightbox, setLightbox] = useState<number | null>(null);

    const prev = () => setLightbox((i) => (i! > 0 ? i! - 1 : images.length - 1));
    const next = () => setLightbox((i) => (i! < images.length - 1 ? i! + 1 : 0));

    return (
        <section id="gallery" className="py-28 bg-white relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/15 to-transparent" />
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-64 bg-[#D4AF37]/4 blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-10 sm:mb-16"
                >
                    <span className="inline-block text-[#D4AF37] text-xs tracking-[0.5em] uppercase font-medium px-5 py-2 border border-[#D4AF37]/25 rounded-full mb-4 sm:mb-6 bg-[#D4AF37]/5">
                        Fotoğraflar
                    </span>
                    <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-[#0F172A] mb-4">
                        Galeri
                    </h2>
                    <div className="w-16 h-0.5 mx-auto" style={{ background: "linear-gradient(90deg,transparent,#D4AF37,transparent)" }} />
                </motion.div>

                {/* Featured top row — stacked on mobile, grid on sm+ */}
                <div className="hidden sm:grid grid-cols-3 gap-3 mb-3">
                    {/* Large left */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.97 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="col-span-2 aspect-[16/9] rounded-2xl overflow-hidden group cursor-pointer relative"
                        onClick={() => setLightbox(0)}
                    >
                        <img src={images[0].src} alt={images[0].alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-[#070b16]/0 group-hover:bg-[#070b16]/40 transition-all duration-300 flex items-center justify-center">
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity w-12 h-12 rounded-full bg-[#D4AF37] flex items-center justify-center shadow-2xl">
                                <ZoomIn size={20} className="text-[#040610]" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Tall right */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.97 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.08 }}
                        className="row-span-2 rounded-2xl overflow-hidden group cursor-pointer relative"
                        onClick={() => setLightbox(1)}
                    >
                        <img src={images[1].src} alt={images[1].alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-[#070b16]/0 group-hover:bg-[#070b16]/40 transition-all duration-300 flex items-center justify-center">
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity w-12 h-12 rounded-full bg-[#D4AF37] flex items-center justify-center shadow-2xl">
                                <ZoomIn size={20} className="text-[#040610]" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Bottom-left of top grid */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.97 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.12 }}
                        className="col-span-2 aspect-[16/7] rounded-2xl overflow-hidden group cursor-pointer relative"
                        onClick={() => setLightbox(2)}
                    >
                        <img src={images[2].src} alt={images[2].alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-[#070b16]/0 group-hover:bg-[#070b16]/40 transition-all duration-300 flex items-center justify-center">
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity w-12 h-12 rounded-full bg-[#D4AF37] flex items-center justify-center shadow-2xl">
                                <ZoomIn size={20} className="text-[#040610]" />
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Rest: equal grid — all images shown on mobile */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3">
                    {/* On mobile show ALL images; on sm+ skip first 3 (shown in featured grid above) */}
                    {images.map((img, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: (i % 8) * 0.04 }}
                            className={`aspect-square rounded-xl sm:rounded-2xl overflow-hidden group cursor-pointer relative ${i < 3 ? "sm:hidden" : ""}`}
                            onClick={() => setLightbox(i)}
                        >
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-[#070b16]/0 group-hover:bg-[#070b16]/50 transition-all duration-300 flex items-center justify-center">
                                <ZoomIn size={20} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {lightbox !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[9999] bg-black/97 flex flex-col items-center justify-center"
                        onClick={() => setLightbox(null)}
                    >
                        {/* Close */}
                        <button
                            className="absolute top-4 right-4 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
                            onClick={() => setLightbox(null)}
                            aria-label="Kapat"
                        >
                            <X size={16} />
                        </button>

                        {/* Prev */}
                        <button
                            className="absolute left-2 sm:left-6 md:left-8 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/8 hover:bg-[#D4AF37] border border-white/10 flex items-center justify-center text-white hover:text-[#040610] transition-all"
                            onClick={(e) => { e.stopPropagation(); prev(); }}
                            aria-label="Önceki"
                        >
                            <ChevronLeft size={20} />
                        </button>

                        {/* Image */}
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={lightbox}
                                initial={{ opacity: 0, scale: 0.94 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1.02 }}
                                transition={{ duration: 0.22 }}
                                src={images[lightbox].src}
                                alt={images[lightbox].alt}
                                className="max-w-[82vw] sm:max-w-[86vw] max-h-[78vh] sm:max-h-[85vh] object-contain rounded-xl sm:rounded-2xl shadow-2xl"
                                onClick={(e) => e.stopPropagation()}
                            />
                        </AnimatePresence>

                        {/* Next */}
                        <button
                            className="absolute right-2 sm:right-6 md:right-8 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/8 hover:bg-[#D4AF37] border border-white/10 flex items-center justify-center text-white hover:text-[#040610] transition-all"
                            onClick={(e) => { e.stopPropagation(); next(); }}
                            aria-label="Sonraki"
                        >
                            <ChevronRight size={20} />
                        </button>

                        {/* Counter */}
                        <div className="absolute top-4 left-4 text-white/40 text-xs tabular-nums">
                            {lightbox + 1} / {images.length}
                        </div>

                        {/* Dot indicators */}
                        <div className="absolute bottom-4 sm:bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-1 sm:gap-1.5 max-w-[90vw] overflow-x-auto">
                            {images.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={(e) => { e.stopPropagation(); setLightbox(i); }}
                                    className={`flex-shrink-0 rounded-full transition-all duration-200 ${i === lightbox
                                        ? "w-4 sm:w-5 h-1.5 bg-[#D4AF37]"
                                        : "w-1.5 h-1.5 bg-white/25"
                                        }`}
                                />
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
