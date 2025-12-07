import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// Comprehensive SEO Metadata
export const metadata: Metadata = {
  metadataBase: new URL("https://tradingsolutionsllc.com"),
  title: {
    default: "Trading Solutions LLC | Industrial Scrap Recycling & Oilfield Equipment | Dallas, TX",
    template: "%s | Trading Solutions LLC",
  },
  description: "Premier industrial scrap metal recycling and oilfield equipment supply in Dallas, Texas. Ferrous & non-ferrous metals, drilling rigs, valves, flanges. Texas licensed. API certified. 15+ years experience.",
  keywords: [
    "scrap metal recycling Dallas",
    "industrial scrap buyer Texas",
    "oilfield equipment supply",
    "metal recycling Dallas TX",
    "copper recycling Texas",
    "aluminum recycling Dallas",
    "drilling equipment supplier",
    "API certified oilfield supply",
    "ferrous metals recycling",
    "non-ferrous metals buyer",
    "industrial equipment recycling",
    "Texas metal recycler",
    "Permian Basin equipment",
    "valves and flanges supplier",
    "drilling rig equipment",
    "scrap dealer Dallas",
    "battery recycling Texas",
    "cable recycling Dallas",
  ],
  authors: [{ name: "Trading Solutions LLC" }],
  creator: "Trading Solutions LLC",
  publisher: "Trading Solutions LLC",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tradingsolutionsllc.com",
    siteName: "Trading Solutions LLC",
    title: "Trading Solutions LLC | Industrial Scrap Recycling & Oilfield Equipment",
    description: "Premier industrial scrap metal recycling and oilfield equipment supply in Dallas, Texas. Texas licensed. API certified. 15+ years experience.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Trading Solutions LLC - Industrial Scrap Recycling & Oilfield Equipment",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trading Solutions LLC | Industrial Scrap & Oilfield Supply",
    description: "Premier industrial scrap metal recycling and oilfield equipment supply in Dallas, Texas.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://tradingsolutionsllc.com",
  },
  category: "Industrial Services",
  verification: {
    google: "google-site-verification-code",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0f172a" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://tradingsolutionsllc.com",
  name: "Trading Solutions LLC",
  description: "Premier industrial scrap metal recycling and oilfield equipment supply in Dallas, Texas.",
  url: "https://tradingsolutionsllc.com",
  telephone: "+1-214-555-0123",
  email: "info@tradingsolutionsllc.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dallas",
    addressRegion: "TX",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 32.7767,
    longitude: -96.7970,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "17:00",
    },
  ],
  priceRange: "$$",
  image: "https://tradingsolutionsllc.com/og-image.jpg",
  sameAs: [
    "https://www.facebook.com/tradingsolutionsllc",
    "https://www.linkedin.com/company/tradingsolutionsllc",
  ],
  areaServed: {
    "@type": "State",
    name: "Texas",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Industrial Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Scrap Metal Recycling",
          description: "Industrial ferrous and non-ferrous metal recycling services",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Oilfield Equipment Supply",
          description: "Premium drilling equipment, valves, and flanges",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-background text-foreground`}>
        {children}
        <WhatsAppWidget />
      </body>
    </html>
  );
}
