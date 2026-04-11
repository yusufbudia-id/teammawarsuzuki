import type { Metadata } from "next";
import "./globals.css";
import { ClientBodyProvider } from "@/components/client-body-provider";
import Script from "next/script";

// 1. SETUP BASE URL
// Prioritas: Ambil dari Env Variable, kalau kosong pakai domain baru langsung
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL 
  ? process.env.NEXT_PUBLIC_BASE_URL 
  : 'https://www.suzuki-jogja.com'; 

export const metadata: Metadata = {
  // 2. METADATA BASE (PENTING)
  // Ini menjadi patokan untuk semua link relatif dan gambar OG
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
  authors: [{ name: "Suzuki Dealer Jogja" }],
  creator: "Suzuki Dealer Jogja",
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

  // 3. OPEN GRAPH (Untuk Tampilan Share WA/FB)
  openGraph: {
    title: "Promo Suzuki Jogja | Dealer Resmi Mobil Suzuki Yogyakarta",
    description: "Dapatkan promo Suzuki Jogja terbaru 2026. Diskon besar & Bunga 0%.",
    type: "website",
    locale: "id_ID",
    url: baseUrl, // Otomatis mengarah ke domain baru
    siteName: "Suzuki Jogja", 
    images: [
      {
        url: '/opengraph-image.png', // Pastikan kamu punya gambar ini di folder public
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
    creator: "@suzukiindonesia", // Bisa diganti akun twittermu jika ada
  },

  // 4. CANONICAL URL TELAH DIHAPUS
  // Bagian alternates: { canonical: '/' } dihapus dari sini 
  // agar sub-halaman tidak terbaca sebagai duplikat homepage oleh Google.
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  // 5. UPGRADE JSON-LD (Schema Markup)
  // Menggunakan tipe "AutoDealer" agar lebih valid di mata Google Bisnis
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
      "streetAddress": "Jl. Magelang Km 8", // Boleh dilengkapi nomornya
      "addressLocality": "Sleman",
      "addressRegion": "DI Yogyakarta",
      "addressCountry": "ID"
    },
    // Tambahkan nomor WA mu di sini agar orang bisa klik call dari Google
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
    <html lang="id" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        {/* Inject JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className="antialiased bg-background text-foreground no-js"
        style={{ fontFamily: '"Montserrat", sans-serif' }}
        suppressHydrationWarning
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
