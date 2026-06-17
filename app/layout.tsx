import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Bakırköy Apart Otel | Günlük & Saatlik Kiralık Oda | İstanbul",
    description:
        "Bakırköy'de uygun fiyatlı apart otel. Günlük ve saatlik kiralık odalar. Metro, Marmaray, Havalimanı'na yakın. Temiz, konforlu, 7/24 resepsiyon. ☎ +90 541 430 50 50",
    keywords:
        "bakırköy apart otel, bakirkoy apart, bakırköy kiralık oda, günlük kiralık oda bakırköy, saatlik oda bakırköy, istanbul apart otel, bakırköy otel, bakirkoy hotel, bakırköy günlük daire, istanbul ucuz otel, bakırköy konaklama, bakırköy pansiyon, bakırköy airbnb, bakırköy'de otel, istanbul bakırköy kiralık apart",
    authors: [{ name: "Bakırköy Apart Otel" }],
    metadataBase: new URL("https://apartbakirkoy.com"),
    alternates: {
        canonical: "https://apartbakirkoy.com",
    },
    openGraph: {
        title: "Bakırköy Apart Otel | Günlük & Saatlik Kiralık Oda",
        description:
            "Bakırköy'de uygun fiyatlı apart otel. Günlük ve saatlik kiralık odalar. Metro ve Marmaray'a yürüme mesafesinde.",
        url: "https://apartbakirkoy.com",
        siteName: "Bakırköy Apart Otel",
        locale: "tr_TR",
        type: "website",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
        },
    },
    verification: {
        google: "WmhbYNJl2k3K4PfEZztYXBkA-8iTj4_-xb6fc9XOeWQ",
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
                {/* Google Structured Data - otel bilgileri */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "LodgingBusiness",
                            "name": "Bakırköy Apart Otel",
                            "description": "Bakırköy'de uygun fiyatlı apart otel. Günlük ve saatlik kiralık odalar.",
                            "url": "https://apartbakirkoy.com",
                            "telephone": "+905414305050",
                            "address": {
                                "@type": "PostalAddress",
                                "streetAddress": "Bakırköy",
                                "addressLocality": "Bakırköy",
                                "addressRegion": "İstanbul",
                                "addressCountry": "TR"
                            },
                            "geo": {
                                "@type": "GeoCoordinates",
                                "latitude": "40.9797",
                                "longitude": "28.8728"
                            },
                            "priceRange": "₺₺",
                            "checkinTime": "14:00",
                            "checkoutTime": "12:00",
                            "amenityFeature": [
                                { "@type": "LocationFeatureSpecification", "name": "WiFi", "value": true },
                                { "@type": "LocationFeatureSpecification", "name": "Air conditioning", "value": true },
                                { "@type": "LocationFeatureSpecification", "name": "24-hour front desk", "value": true }
                            ]
                        })
                    }}
                />
            </head>
            <body className="antialiased">{children}</body>
        </html>
    );
}
