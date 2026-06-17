import { Phone, MessageCircle, MapPin, Mail } from "lucide-react";

const navLinks = [
    { label: "Ana Sayfa", href: "#hero" },
    { label: "Hakkımızda", href: "#about" },
    { label: "Odalar", href: "#rooms" },
    { label: "Özellikler", href: "#features" },
    { label: "Galeri", href: "#gallery" },
    { label: "Konum", href: "#location" },
    { label: "İletişim", href: "#contact" },
];

export default function Footer() {
    return (
        <footer className="bg-[#040712] border-t border-white/5 text-white">
            {/* Top gold line */}
            <div className="h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-12">
                    {/* Brand */}
                    <div>
                        <div className="mb-5">
                            <span
                                className="text-xl font-black tracking-[0.2em] text-white"
                                style={{ fontFamily: "Playfair Display, serif" }}
                            >
                                BAKIRKOY
                            </span>
                            <br />
                            <span className="text-xs tracking-[0.5em] text-[#D4AF37] font-light uppercase">
                                Apart
                            </span>
                        </div>
                        <p className="text-white/35 text-sm leading-relaxed max-w-xs">
                            Bakırköy&apos;de konforlu, temiz ve uygun fiyatlı apart daireler.
                            Saatlik ve günlük kiralama.
                        </p>
                        <div className="flex gap-3 mt-6">
                            <a
                                href="tel:+905414305050"
                                className="w-9 h-9 rounded-xl bg-white/6 hover:bg-[#D4AF37]/20 border border-white/8 flex items-center justify-center transition-colors"
                                aria-label="Ara"
                            >
                                <Phone size={14} className="text-[#D4AF37]" />
                            </a>
                            <a
                                href="https://wa.me/905414305050"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-xl bg-white/6 hover:bg-green-500/20 border border-white/8 flex items-center justify-center transition-colors"
                                aria-label="WhatsApp"
                            >
                                <MessageCircle size={14} className="text-green-400" />
                            </a>
                            <a
                                href="mailto:info@bakirkoyapart.com"
                                className="w-9 h-9 rounded-xl bg-white/6 hover:bg-[#D4AF37]/20 border border-white/8 flex items-center justify-center transition-colors"
                                aria-label="E-posta"
                            >
                                <Mail size={14} className="text-[#D4AF37]" />
                            </a>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="text-white/40 text-xs tracking-[0.4em] uppercase font-medium mb-5">
                            Bağlantılar
                        </h3>
                        <ul className="space-y-2.5">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className="text-white/40 hover:text-[#D4AF37] text-sm transition-colors duration-200"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white/40 text-xs tracking-[0.4em] uppercase font-medium mb-5">
                            İletişim
                        </h3>
                        <div className="space-y-4">
                            <div className="flex gap-3 items-start">
                                <MapPin size={14} className="text-[#D4AF37] mt-0.5 flex-shrink-0" />
                                <span className="text-white/40 text-sm">Zeytinlik, Fazıl Paşa Sk. No:4<br />34140 Bakırköy / İstanbul</span>
                            </div>
                            <div className="flex gap-3 items-center">
                                <Phone size={14} className="text-[#D4AF37] flex-shrink-0" />
                                <a href="tel:+905414305050" className="text-white/40 hover:text-[#D4AF37] text-sm transition-colors">
                                    +90 541 430 50 50
                                </a>
                            </div>
                            <div className="flex gap-3 items-center">
                                <Mail size={14} className="text-[#D4AF37] flex-shrink-0" />
                                <a href="mailto:info@bakirkoyapart.com" className="text-white/40 hover:text-[#D4AF37] text-sm transition-colors">
                                    info@bakirkoyapart.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-white/5 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
                    <p className="text-white/20 text-xs text-center sm:text-left">
                        © {new Date().getFullYear()} Bakirkoy Apart. Tüm hakları saklıdır.
                    </p>
                    <p className="text-white/15 text-xs">
                        İstanbul · Türkiye
                    </p>
                </div>
            </div>
        </footer>
    );
}
