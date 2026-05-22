import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond, Marcellus, Lato } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-playfair",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const marcellus = Marcellus({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-marcellus",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AL-INFOTECH Tours and Travels | Umrah & Kashmir Packages",
  description: "First licensed Umrah operator in Andhra Pradesh & Telangana. Handcrafted packages for pilgrims and travelers. Based in Proddatur, Kadapa.",
  keywords: ["Umrah packages", "Kashmir tours", "AL-INFOTECH", "Proddatur travel agency", "Andhra Pradesh Umrah", "NUSUK certified"],
};

// Schema.org JSON-LD for SEO
const schemaData = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  "name": "Al-Infotech Tours and Travels",
  "founder": {
    "@type": "Person",
    "name": "Shaik Shaiksha Valli"
  },
  "foundingDate": "2010",
  "description": "First licensed Umrah operator in Andhra Pradesh and Telangana. Packages for Umrah pilgrims and domestic travelers.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Shop No. 24, 1st Floor, Nandini Cloth Market",
    "addressLocality": "Proddatur",
    "addressRegion": "Andhra Pradesh",
    "postalCode": "516360",
    "addressCountry": "IN"
  },
  "telephone": "+918919990806",
  "email": "alinfotechtours@gmail.com",
  "url": "https://alinfotech.vercel.app",
  "areaServed": ["Andhra Pradesh", "Telangana", "Karnataka"],
  "priceRange": "₹₹"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${cormorant.variable} ${marcellus.variable} ${lato.variable}`}>
      <head>
        <link href='https://api.mapbox.com/mapbox-gl-js/v3.0.0/mapbox-gl.css' rel='stylesheet' />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
