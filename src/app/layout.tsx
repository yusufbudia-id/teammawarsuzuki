import type { Metadata } from "next";
import "./globals.css";
import { ClientBodyProvider } from "@/components/client-body-provider";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Promo Suzuki Jogja | Dealer Resmi Mobil Suzuki Indonesia - Diskon & Penawaran Terbaik",
  description: "Promo Suzuki Jogja terbaru 2026! Dealer resmi Suzuki Indonesia menawarkan diskon besar, bunga 0%, dan paket servis gratis untuk Ertiga, XL7, Carry, Jimny, Baleno, S-Presso. Dapatkan harga terbaik di Jogja sekarang.",
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
  authors: [{ name: "Suzuki Dealer Indonesia" }],
  creator: "Suzuki Dealer Indonesia",
  publisher: "Suzuki Dealer Indonesia",
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
    title: "Promo Suzuki Jogja | Dealer Resmi Mobil Suzuki Indonesia - Diskon & Penawaran Terbaik",
    description: "Promo Suzuki Jogja terbaru 2024! Dealer resmi Suzuki Indonesia menawarkan diskon besar, bunga 0%, dan paket servis gratis untuk Ertiga, XL7, Carry, Jimny, Baleno, S-Presso. Dapatkan harga terbaik di Jogja sekarang.",
    type: "website",
    locale: "id_ID",
    url: "https://suzukijogjamagelang.vercel.app",
    siteName: "Suzuki Dealer Indonesia",
  },
  twitter: {
    card: "summary_large_image",
    title: "Promo Suzuki Jogja | Dealer Resmi Mobil Suzuki Indonesia - Diskon & Penawaran Terbaik",
    description: "Promo Suzuki Jogja terbaru 2024! Dealer resmi Suzuki Indonesia menawarkan diskon besar, bunga 0%, dan paket servis gratis.",
    creator: "@suzukiindonesia",
  },
  metadataBase: new URL('https://suzukijogjamagelang.vercel.app'),
  alternates: {
    canonical: '/', // Ini akan menghasilkan <link rel="canonical" href="https://suzukijogjamagelang.vercel.app/" />
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
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
