import type { Metadata } from "next";
import { Playfair_Display, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-playfair" 
});

const sourceSerif = Source_Serif_4({ 
  subsets: ["latin"], 
  variable: "--font-source-serif" 
});

export const metadata: Metadata = {
  title: "Giovanni Rent | Sewa Motor & Mobil Wonosobo Dieng",
  description: "Jasa sewa motor dan mobil di Wonosobo dan Dieng. Buka 24 jam, antar-jemput terminal & penginapan. Mulai Rp 120.000/hari.",
  keywords: ["sewa motor dieng", "rental motor wonosobo", "sewa motor wonosobo murah", "rental motor dekat terminal wonosobo", "wisata dieng naik motor"],
  openGraph: {
    title: "Giovanni Rent | Sewa Motor & Mobil Wonosobo Dieng",
    description: "Jasa sewa motor dan mobil di Wonosobo dan Dieng. Buka 24 jam, antar-jemput terminal & penginapan. Mulai Rp 120.000/hari.",
    url: "https://giovannirent.com",
    siteName: "Giovanni Rent",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Giovanni Rent",
    "description": "Jasa sewa motor dan mobil di Wonosobo dan Dieng",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jl. Mayjen Bambang Sugeng No. KM.03",
      "addressLocality": "Wonosobo",
      "addressRegion": "Jawa Tengah",
      "postalCode": "56351",
      "addressCountry": "ID"
    },
    "telephone": "+6281291321554",
    "openingHours": "Mo-Su 00:00-24:00",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -7.3584,
      "longitude": 109.9076
    },
    "url": "https://giovannirent.com",
    "sameAs": [
      "https://www.instagram.com/sewamotorwonosobo_giovanni"
    ]
  };

  return (
    <html lang="id" className={`${playfair.variable} ${sourceSerif.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col bg-bg-light text-text-primary overflow-x-hidden">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
