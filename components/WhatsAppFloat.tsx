"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Phone } from "lucide-react";

export default function WhatsAppFloat() {
    const [open, setOpen] = useState(false);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), 2500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {visible && (
                <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
                    {/* Popup card */}
                    <AnimatePresence>
                        {open && (
                            <motion.div
                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                transition={{ duration: 0.2 }}
                                className="bg-[#0f1629] border border-white/10 rounded-2xl p-5 shadow-2xl w-64"
                            >
                                <button
                                    onClick={() => setOpen(false)}
                                    className="absolute top-3 right-3 text-white/40 hover:text-white transition-colors"
                                    aria-label="Kapat"
                                >
                                    <X size={14} />
                                </button>
                                <div className="text-white font-semibold text-sm mb-1">Merhaba! 👋</div>
                                <p className="text-white/50 text-xs mb-4 leading-relaxed">
                                    Rezervasyon için bizi arayın veya WhatsApp&apos;tan yazın.
                                </p>
                                <div className="flex flex-col gap-2">
                                    <a
                                        href="https://wa.me/905414305050"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2 py-2.5 bg-green-500 text-white text-xs font-bold rounded-xl hover:bg-green-400 transition-colors"
                                    >
                                        <MessageCircle size={14} />
                                        WhatsApp
                                    </a>
                                    <a
                                        href="tel:+905414305050"
                                        className="flex items-center justify-center gap-2 py-2.5 bg-[#D4AF37] text-[#0a0e1a] text-xs font-bold rounded-xl hover:bg-[#F0D060] transition-colors"
                                    >
                                        <Phone size={14} />
                                        +90 541 430 50 50
                                    </a>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Main FAB */}
                    <motion.button
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setOpen(!open)}
                        aria-label="İletişim"
                        className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/40 whatsapp-pulse"
                    >
                        <AnimatePresence mode="wait">
                            {open ? (
                                <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                                    <X size={24} className="text-white" />
                                </motion.div>
                            ) : (
                                <motion.div key="chat" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                                    <MessageCircle size={26} className="text-white" />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.button>
                </div>
            )}
        </AnimatePresence>
    );
}
