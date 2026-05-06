import type { Metadata } from "next";
// Import Plus Jakarta Sans dari next/font/google
import { Plus_Jakarta_Sans } from 'next/font/google';
import "./globals.css";
import { ClientBodyProvider } from "@/components/client-body-provider";
import Script from "next/script";

// Inisialisasi font Plus Jakarta Sans
const jakartaSans = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  // Pilih ketebalan yang dibutuhkan untuk desain Modern UI / Playful Corporate
  weight: ['300', '400', '500', '600', '700', '800'], 
  variable: '--font-jakarta', // Buat variabel CSS kustom
});

// 1. SETUP BASE URL
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL 
  ? process.env.NEXT_PUBLIC_BASE_URL 
  : 'https://www.suzuki-jogja.com'; 

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Promo Suzuki Jogja | Dealer Resmi Mobil Suzuki Yogyakarta Indonesia",
  description: "Promo Suzuki Jogja terbaru 2026! Dealer resmi Suzuki Yogyakarta Indonesia menawarkan diskon besar, bunga 0%, dan paket servis gratis untuk Ertiga, XL7, Carry, Jimny, Fronx, S-Presso.",
  
  icons: {
    icon: [
      { url: '/icon.png', sizes: 'any', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: 'any', type: 'image/png' },
    ],
  },
  keywords: [
    "Promo Suzuki Jogja", "Dealer Resmi Suzuki Jogja", "Harga Suzuki Ertiga", 
    "Harga Suzuki XL7", "Harga Suzuki Carry", "Harga Suzuki Fronx", 
    "Suzuki Jogja", "Kredit Mobil Suzuki Jogja"
  ],
  authors: [{ name: "Yusuf Suzuki Dealer Jogja" }], // Update Author ke nama kamu
  creator: "Yusuf Suzuki Dealer Jogja",
  publisher: "Suzuki Dealer Jogja",
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  openGraph: {
    title: "Promo Suzuki Jogja | Dealer Resmi Mobil Suzuki Yogyakarta",
    description: "Dapatkan promo Suzuki Jogja terbaru 2026. Diskon besar & Bunga 0%.",
    type: "website",
    locale: "id_ID",
    url: baseUrl, 
    siteName: "Suzuki Jogja", 
    images: [
      {
        url: '/opengraph-image.png', 
        width: 1200,
        height: 630,
        alt: 'Promo Suzuki Jogja',
      },
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Promo Suzuki Jogja | Dealer Resmi",
    description: "Promo Suzuki Jogja terbaru 2026! Dealer resmi Suzuki Yogyakarta.",
    creator: "@suzukiindonesia", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoDealer", 
    "name": "Suzuki Jogja",
    "url": baseUrl,
    "logo": `${baseUrl}/icon.png`,
    "description": "Dealer Resmi Suzuki Jogja melayani penjualan mobil baru Suzuki dengan promo terbaik.",
    "priceRange": "Rp 150.000.000 - Rp 500.000.000",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jl. Magelang Km 8", 
      "addressLocality": "Sleman",
      "addressRegion": "DI Yogyakarta",
      "addressCountry": "ID"
    },
    // Nomor WA sudah diupdate sesuai profil kamu
    "telephone": "+6282174635218", 
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "08:00",
        "closes": "17:00"
      }
    ]
  };

  return (
    // Terapkan variabel font Plus Jakarta Sans ke tag html
    <html lang="id" suppressHydrationWarning className={`${jakartaSans.variable}`}>
      <head>
        {/* Inject JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      {/* Font akan di-trigger oleh konfigurasi Tailwind font-sans yang merujuk pada CSS variabel */}
      <body
        className="antialiased bg-background text-foreground no-js font-sans"
        suppHydrationWarning
      >
        <Script
          id="remove-no-js"
          strategy="beforeInteractive"
        >
          {`document.body.classList.remove('no-js');`}
        </Script>

        {/* --- GOOGLE ADS TAG MULAI DI SINI --- */}
        <Script 
          strategy="afterInteractive" 
          src="https://www.googletagmanager.com/gtag/js?id=AW-18062500429" 
        />
        <Script 
          id="google-ads-tag" 
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-18062500429');
            `,
          }}
        />
        {/* --- GOOGLE ADS TAG SELESAI --- */}

        <ClientBodyProvider>
          {children}
        </ClientBodyProvider>
      </body>
    </html>
  );
}