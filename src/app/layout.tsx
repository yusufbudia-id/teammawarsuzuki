import type { Metadata } from "next";
import "./globals.css";
import { ClientBodyProvider } from "@/components/client-body-provider";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Promo Suzuki Jogja | Dealer Resmi Mobil Suzuki Yogyakarta Indonesia - Diskon & Penawaran Terbaik",
  description: "Promo Suzuki Jogja terbaru 2026! Dealer resmi Suzuki Yogyakarta Indonesia menawarkan diskon besar, bunga 0%, dan paket servis gratis untuk Ertiga, XL7, Carry, Jimny, Fronx, S-Presso. Dapatkan harga terbaik di Jogja sekarang.",
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
    "Promo Suzuki Jogja",
    "Dealer Resmi Suzuki Jogja",
    "Dealer Mobil Suzuki Indonesia",
    "Harga Suzuki Ertiga",
    "Harga Suzuki XL7",
    "Harga Suzuki Carry",
    "Harga Suzuki Jimny",
    "Harga Suzuki Baleno",
    "Harga Suzuki S-Presso",
    "Promo Bunga 0% Suzuki",
    "Diskon Mobil Suzuki",
    "Tukar Tambah Suzuki",
    "Test Drive Suzuki Gratis",
    "Garansi Resmi Suzuki",
    "Dealer Suzuki Terpercaya",
    "Suzuki Indonesia",
    "Mobil Murah Jogja",
    "Kredit Mobil Suzuki"
  ],
  authors: [{ name: "Suzuki Dealer Jogja Indonesia" }],
  creator: "Suzuki Dealer Jogja Indonesia",
  publisher: "Suzuki Dealer Jogja Indonesia",
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
    title: "Promo Suzuki Jogja | Dealer Resmi Mobil Suzuki Yogyakarta, Indonesia - Diskon & Penawaran Terbaik",
    description: "Promo Suzuki Jogja terbaru 2026! Dealer resmi Suzuki Yogyakarta Indonesia menawarkan diskon besar, bunga 0%, dan paket servis gratis untuk Ertiga, XL7, Carry, Jimny, Fronx, S-Presso. Dapatkan harga terbaik di Jogja sekarang.",
    type: "website",
    locale: "id_ID",
    url: "https://suzukijogjamagelang.vercel.app",
    siteName: "Suzuki Jogja Magelang", // Saran: Sesuaikan agar sama dengan JSON-LD di bawah
  },
  twitter: {
    card: "summary_large_image",
    title: "Promo Suzuki Jogja | Dealer Resmi Mobil Suzuki Yogyakarta, Indonesia - Diskon & Penawaran Terbaik",
    description: "Promo Suzuki Jogja terbaru 2026! Dealer resmi Suzuki Yogyakarta Indonesia menawarkan diskon besar, bunga 0%, dan paket servis gratis.",
    creator: "@suzukiindonesia",
  },
  metadataBase: new URL('https://suzukijogjamagelang.vercel.app'),
  alternates: {
    canonical: '/', 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  // --- TAMBAHAN PENTING (JSON-LD) ---
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Suzuki Jogja Magelang", // Ini nama yang akan muncul di Google menggantikan 'Vercel'
    "url": "https://suzukijogjamagelang.vercel.app/"
  };
  // -----------------------------------

  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        {/* Masukkan JSON-LD disini */}
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
        <ClientBodyProvider>
          {children}
        </ClientBodyProvider>
      </body>
    </html>
  );
}