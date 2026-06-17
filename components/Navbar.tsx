"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";

const navLinks = [
    { label: "Ana Sayfa", href: "#hero" },
    { label: "Hakkımızda", href: "#about" },
    { label: "Odalar", href: "#rooms" },
    { label: "Özellikler", href: "#features" },
    { label: "Galeri", href: "#gallery" },
    { label: "Konum", href: "#location" },
    { label: "İletişim", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // body scroll lock when menu open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [menuOpen]);

    const handleNav = (href: string) => {
        setMenuOpen(false);
        setTimeout(() => {
            const el = document.querySelector(href);
            if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 100);
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                        ? "bg-[#0a0e1a]/95 backdrop-blur-xl shadow-2xl border-b border-[#D4AF37]/15"
                        : "bg-transparent"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 sm:h-20">
                        {/* Logo */}
                        <button onClick={() => handleNav("#hero")} className="flex flex-col items-start">
                            <span className="text-lg sm:text-2xl font-bold text-white tracking-widest font-serif">
                                BAKIRKOY
                            </span>
                            <span className="text-[9px] sm:text-xs tracking-[0.4em] text-[#D4AF37] font-light uppercase">
                                Apart
                            </span>
                        </button>

                        {/* Desktop Links */}
                        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
                            {navLinks.map((link) => (
                                <button
                                    key={link.href}
                                    onClick={() => handleNav(link.href)}
                                    className="text-sm text-white/75 hover:text-[#D4AF37] transition-colors duration-300 font-medium tracking-wide relative group"
                                >
                                    {link.label}
                                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#D4AF37] group-hover:w-full transition-all duration-300" />
                                </button>
                            ))}
                        </div>

                        {/* Desktop CTA */}
                        <div className="hidden lg:flex items-center gap-4">
                            <a
                                href="tel:+905414305050"
                                className="flex items-center gap-2 text-[#D4AF37] hover:text-white transition-colors text-sm font-semibold"
                            >
                                <Phone size={15} />
                                +90 541 430 50 50
                            </a>
                            <button
                                onClick={() => handleNav("#contact")}
                                className="px-5 py-2.5 bg-[#D4AF37] text-[#0a0e1a] text-sm font-bold rounded-full hover:bg-[#F0D060] transition-all duration-300 hover:scale-105"
                            >
                                Rezervasyon
                            </button>
                        </div>

                        {/* Mobile: phone icon + hamburger */}
                        <div className="lg:hidden flex items-center gap-2">
                            <a
                                href="tel:+905414305050"
                                className="w-9 h-9 flex items-center justify-center rounded-xl bg-[#D4AF37]/15 text-[#D4AF37]"
                                aria-label="Ara"
                            >
                                <Phone size={16} />
                            </a>
                            <button
                                className="w-9 h-9 flex items-center justify-center rounded-xl bg-white/8 text-white"
                                onClick={() => setMenuOpen(!menuOpen)}
                                aria-label="Menü"
                            >
                                {menuOpen ? <X size={20} /> : <Menu size={20} />}
                            </button>
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ duration: 0.28, ease: "easeInOut" }}
                        className="fixed inset-0 z-40 bg-[#0a0e1a] flex flex-col"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between px-5 py-4 border-b border-white/8 mt-16">
                            <span className="text-white/40 text-xs tracking-widest uppercase">Menü</span>
                            <button
                                onClick={() => setMenuOpen(false)}
                                className="w-8 h-8 rounded-xl bg-white/8 flex items-center justify-center text-white"
                            >
                                <X size={18} />
                            </button>
                        </div>

                        {/* Links */}
                        <div className="flex-1 overflow-y-auto px-5 py-6 flex flex-col gap-1">
                            {navLinks.map((link, i) => (
                                <motion.button
                                    key={link.href}
                                    initial={{ opacity: 0, x: 24 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                    onClick={() => handleNav(link.href)}
                                    className="flex items-center justify-between w-full text-left px-4 py-4 rounded-2xl text-white/80 hover:text-[#D4AF37] hover:bg-white/4 transition-all text-lg font-medium border-b border-white/5"
                                >
                                    {link.label}
                                    <span className="text-white/20 text-sm">→</span>
                                </motion.button>
                            ))}
                        </div>

                        {/* Bottom CTA */}
                        <div className="px-5 pb-8 pt-4 border-t border-white/8 space-y-3">
                            <a
                                href="tel:+905414305050"
                                className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl font-bold text-[#0a0e1a] text-base"
                                style={{ background: "linear-gradient(135deg,#D4AF37,#F0D060)" }}
                            >
                                <Phone size={18} />
                                +90 541 430 50 50
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
