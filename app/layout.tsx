import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Bakirkoy Apart | Konforlu Konaklama, Uygun Fiyatlar | İstanbul",
    description:
        "Bakırköy'de temiz, modern ve uygun fiyatlı apart daireleri. Saatlik ve günlük kiralık odalar. Metro, Marmaray ve AVM'lere yürüme mesafesinde. ☎ +90 541 430 50 50",
    keywords:
        "bakirkoy apart, bakırköy apart otel, günlük kiralık oda istanbul, saatlik oda bakırköy, bakirkoy kiralık daire, istanbul apart",
    authors: [{ name: "Bakirkoy Apart" }],
    openGraph: {
        title: "Bakirkoy Apart | Konforlu Konaklama",
        description:
            "Bakırköy'de temiz, modern ve uygun fiyatlı apart daireleri. Saatlik ve günlük kiralık odalar.",
        locale: "tr_TR",
        type: "website",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="tr" className="scroll-smooth">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="anonymous"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,600&family=Inter:wght@300;400;500;600;700&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body className="antialiased">{children}</body>
        </html>
    );
}
