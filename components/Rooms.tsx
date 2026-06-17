"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Wifi, Wind, Bath, Coffee, Tv, Check, X,
    ChevronLeft, ChevronRight, Phone, ZoomIn, UtensilsCrossed,
} from "lucide-react";

const rooms = [
    {
        id: "standart",
        name: "Standart Oda",
        label: "MUTFAKSIZ",
        tagline: "Sade & Konforlu",
        desc: "Temiz, modern ve tam donanımlı. Klima, Wi-Fi, banyo ve TV dahil. Kısa konaklamalar için ideal.",
        features: [
            { icon: Wifi, text: "Ücretsiz Wi-Fi" },
            { icon: Wind, text: "Klima" },
            { icon: Bath, text: "Özel Banyo" },
            { icon: Tv, text: "Smart TV" },
        ],
        noFeature: { icon: UtensilsCrossed, text: "Mutfak yok" },
        images: [
            "/images/room-03.jpg", "/images/room-04.jpg", "/images/room-05.jpg",
            "/images/room-06.jpg", "/images/room-07.jpg", "/images/room-08.jpg",
            "/images/room-09.jpg", "/images/room-10.jpg",
        ],
        accentFrom: "#1a1f35",
        accentTo: "#0d1120",
    },
    {
        id: "mutfakli",
        name: "Mutfaklı Oda",
        label: "TAM DONANIMLI",
        tagline: "Ev Konforu",
        desc: "Tam donanımlı mutfak, buzdolabı ve çamaşır makinesiyle uzun konaklamalar için mükemmel.",
        features: [
            { icon: Wifi, text: "Ücretsiz Wi-Fi" },
            { icon: Wind, text: "Klima" },
            { icon: Bath, text: "Özel Banyo" },
            { icon: Tv, text: "Smart TV" },
            { icon: Coffee, text: "Tam Mutfak" },
        ],
        noFeature: null,
        images: [
            "/images/room-11.jpg", "/images/room-12.jpg", "/images/room-13.jpg",
            "/images/room-14.jpg", "/images/room-15.jpg", "/images/room-16.jpg",
            "/images/room-17.jpg", "/images/room-18.jpg",
        ],
        accentFrom: "#1a1408",
        accentTo: "#100d05",
    },
];

type Room = (typeof rooms)[number];

/* ── Lightbox ─────────────────────────── */
function Lightbox({ room, onClose }: { room: Room; onClose: () => void }) {
    const [idx, setIdx] = useState(0);
    const prev = () => setIdx((i) => (i > 0 ? i - 1 : room.images.length - 1));
    const next = () => setIdx((i) => (i < room.images.length - 1 ? i + 1 : 0));

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-[9999] bg-[#040610]/98 flex flex-col"
            onClick={onClose}
        >
            {/* Header */}
            <div
                className="flex-shrink-0 flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-white/8"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex items-center gap-3">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#D4AF37]/15 flex items-center justify-center">
                        <ZoomIn size={13} className="text-[#D4AF37]" />
                    </div>
                    <div>
                        <p className="text-white font-semibold text-sm leading-none">{room.name}</p>
                        <p className="text-[#D4AF37]/60 text-[10px] mt-0.5 tracking-widest">{room.label}</p>
                    </div>
                </div>
                <button
                    onClick={onClose}
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/8 hover:bg-white/15 flex items-center justify-center text-white/70 hover:text-white transition-all"
                    aria-label="Kapat"
                >
                    <X size={17} />
                </button>
            </div>

            {/* Image */}
            <div
                className="flex-1 flex items-center justify-center relative px-10 sm:px-16 py-3 min-h-0"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={prev}
                    className="absolute left-2 sm:left-4 z-10 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/8 hover:bg-[#D4AF37] border border-white/10 flex items-center justify-center text-white hover:text-[#040610] transition-all"
                    aria-label="Önceki"
                >
                    <ChevronLeft size={20} />
                </button>

                <AnimatePresence mode="wait">
                    <motion.img
                        key={idx}
                        initial={{ opacity: 0, x: 16 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -16 }}
                        transition={{ duration: 0.2 }}
                        src={room.images[idx]}
                        alt={`${room.name} - ${idx + 1}`}
                        className="max-w-4xl w-full max-h-[58vh] sm:max-h-[62vh] object-cover rounded-xl sm:rounded-2xl shadow-2xl"
                    />
                </AnimatePresence>

                <button
                    onClick={next}
                    className="absolute right-2 sm:right-4 z-10 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/8 hover:bg-[#D4AF37] border border-white/10 flex items-center justify-center text-white hover:text-[#040610] transition-all"
                    aria-label="Sonraki"
                >
                    <ChevronRight size={20} />
                </button>
            </div>

            {/* Footer */}
            <div
                className="flex-shrink-0 pb-4 sm:pb-6 px-4 sm:px-6"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Thumbnails */}
                <div className="flex gap-1.5 sm:gap-2 justify-center mb-3 sm:mb-4 overflow-x-auto scrollbar-hide py-1">
                    {room.images.map((img, i) => (
                        <button
                            key={i}
                            onClick={() => setIdx(i)}
                            className={`flex-shrink-0 w-11 h-11 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl overflow-hidden transition-all duration-200 ${i === idx
                                    ? "ring-2 ring-[#D4AF37] ring-offset-1 ring-offset-[#040610] scale-105"
                                    : "opacity-40 hover:opacity-70"
                                }`}
                        >
                            <img src={img} alt="" className="w-full h-full object-cover" />
                        </button>
                    ))}
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 max-w-xl mx-auto">
                    <span className="text-white/30 text-xs tabular-nums hidden sm:block">
                        {idx + 1} / {room.images.length}
                    </span>
                    <a
                        href="tel:+905414305050"
                        className="flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3 rounded-full font-bold text-sm text-[#040610] hover:scale-105 transition-transform shadow-lg"
                        style={{ background: "linear-gradient(135deg,#D4AF37,#F0D060)" }}
                    >
                        <Phone size={15} />
                        Rezervasyon İçin Ara
                    </a>
                </div>
            </div>
        </motion.div>
    );
}

/* ── Room Card ────────────────────────── */
function RoomCard({ room, index, onOpen }: { room: Room; index: number; onOpen: () => void }) {
    const [hoverImg, setHoverImg] = useState(0);

    return (
        <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="group relative rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden border border-white/6 hover:border-[#D4AF37]/35 transition-all duration-500 cursor-pointer"
            style={{ background: `linear-gradient(160deg,${room.accentFrom},${room.accentTo})` }}
            onClick={onOpen}
        >
            {/* Image */}
            <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
                <AnimatePresence mode="wait">
                    <motion.img
                        key={hoverImg}
                        initial={{ opacity: 0, scale: 1.04 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        src={room.images[hoverImg]}
                        alt={room.name}
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                </AnimatePresence>
                <div
                    className="absolute inset-0"
                    style={{ background: `linear-gradient(to bottom,transparent 40%,${room.accentTo} 100%)` }}
                />

                {/* Label */}
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                    <span className="text-[9px] sm:text-[10px] font-black tracking-[0.2em] text-[#D4AF37] bg-[#D4AF37]/10 border border-[#D4AF37]/30 px-2.5 sm:px-3 py-1 rounded-full backdrop-blur-sm">
                        {room.label}
                    </span>
                </div>

                {/* Photo count */}
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                    <div className="flex items-center gap-1 bg-black/40 backdrop-blur-sm rounded-full px-2.5 py-1 text-white/80 text-[10px] sm:text-xs">
                        <ZoomIn size={10} />
                        <span>{room.images.length} foto</span>
                    </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-black/50 backdrop-blur-sm border border-white/20 rounded-xl sm:rounded-2xl px-4 sm:px-5 py-2 sm:py-2.5 flex items-center gap-2 text-white text-xs sm:text-sm font-semibold">
                        <ZoomIn size={13} className="text-[#D4AF37]" />
                        Tüm Fotoğraflar
                    </div>
                </div>

                {/* Thumbnail strip (desktop hover) */}
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 hidden sm:flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {room.images.slice(0, 5).map((img, i) => (
                        <button
                            key={i}
                            onMouseEnter={() => setHoverImg(i)}
                            onClick={(e) => { e.stopPropagation(); setHoverImg(i); }}
                            className={`w-8 h-8 rounded-lg overflow-hidden border-2 transition-all ${i === hoverImg ? "border-[#D4AF37] scale-110" : "border-white/30"
                                }`}
                        >
                            <img src={img} alt="" className="w-full h-full object-cover" />
                        </button>
                    ))}
                    {room.images.length > 5 && (
                        <div className="w-8 h-8 rounded-lg bg-black/50 border-2 border-white/20 flex items-center justify-center text-white/60 text-[9px] font-bold">
                            +{room.images.length - 5}
                        </div>
                    )}
                </div>
            </div>

            {/* Content */}
            <div className="p-5 sm:p-7 pb-6 sm:pb-8">
                <div className="mb-3 sm:mb-4">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-white group-hover:text-[#D4AF37] transition-colors duration-300">
                        {room.name}
                    </h3>
                    <p className="text-white/35 text-[10px] sm:text-xs tracking-[0.3em] uppercase mt-1">{room.tagline}</p>
                </div>

                <p className="text-white/45 text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6">{room.desc}</p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 mb-6 sm:mb-8">
                    {room.features.map((f) => (
                        <div key={f.text} className="flex items-center gap-2">
                            <Check size={11} className="text-[#D4AF37] flex-shrink-0" />
                            <span className="text-white/55 text-xs sm:text-sm truncate">{f.text}</span>
                        </div>
                    ))}
                    {room.noFeature && (
                        <div className="flex items-center gap-2 opacity-35">
                            <X size={11} className="text-white/40 flex-shrink-0" />
                            <span className="text-white/30 text-xs sm:text-sm line-through truncate">{room.noFeature.text}</span>
                        </div>
                    )}
                </div>

                {/* CTA */}
                <a
                    href="tel:+905414305050"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center justify-center gap-2 w-full py-3.5 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-[#040610] text-sm transition-all duration-300 hover:shadow-xl hover:shadow-[#D4AF37]/20 hover:scale-[1.02] active:scale-[0.98]"
                    style={{ background: "linear-gradient(135deg,#D4AF37 0%,#F0D060 50%,#D4AF37 100%)" }}
                >
                    <Phone size={15} />
                    Rezervasyon İçin Ara
                </a>
            </div>

            <div className="absolute inset-0 rounded-[1.5rem] sm:rounded-[2rem] ring-1 ring-inset ring-[#D4AF37]/0 group-hover:ring-[#D4AF37]/15 transition-all duration-500 pointer-events-none" />
        </motion.article>
    );
}

/* ── Main ─────────────────────────────── */
export default function Rooms() {
    const [activeRoom, setActiveRoom] = useState<Room | null>(null);

    return (
        <section id="rooms" className="py-16 sm:py-24 lg:py-28 bg-[#070b16] relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[400px] sm:h-[500px] bg-[#D4AF37]/4 rounded-full blur-[100px] sm:blur-[120px]" />
            </div>

            <div className="max-w-5xl lg:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 sm:mb-16 lg:mb-20"
                >
                    <span className="inline-flex items-center text-[#D4AF37] text-[10px] sm:text-xs tracking-[0.4em] uppercase font-medium px-4 sm:px-5 py-2 border border-[#D4AF37]/25 rounded-full mb-4 sm:mb-6">
                        Konaklama Seçenekleri
                    </span>
                    <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-3 sm:mb-4">
                        Odalarımız
                    </h2>
                    <div className="w-14 sm:w-16 h-0.5 mx-auto mb-4 sm:mb-6" style={{ background: "linear-gradient(90deg,transparent,#D4AF37,transparent)" }} />
                    <p className="text-white/40 max-w-sm sm:max-w-md mx-auto text-sm sm:text-base">
                        İki farklı oda tipimizden size uygun olanı seçin.
                    </p>
                </motion.div>

                {/* Cards */}
                <div className="grid sm:grid-cols-2 gap-5 sm:gap-6 lg:gap-7">
                    {rooms.map((room, i) => (
                        <RoomCard key={room.id} room={room} index={i} onOpen={() => setActiveRoom(room)} />
                    ))}
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center text-white/25 text-xs sm:text-sm mt-8 sm:mt-12"
                >
                    Saatlik ve özel fiyatlar için{" "}
                    <a href="tel:+905414305050" className="text-[#D4AF37]/70 hover:text-[#D4AF37] transition-colors font-semibold">
                        +90 541 430 50 50
                    </a>{" "}
                    arayın.
                </motion.p>
            </div>

            <AnimatePresence>
                {activeRoom && <Lightbox room={activeRoom} onClose={() => setActiveRoom(null)} />}
            </AnimatePresence>

            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />
        </section>
    );
}
