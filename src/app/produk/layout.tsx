import { Metadata } from 'next';

export const metadata: Metadata = {
  // ✅ Judul khusus untuk halaman daftar produk
  title: 'Daftar Harga & Promo Mobil Suzuki Jogja 2026 | Dealer Resmi',
  
  // ✅ Deskripsi yang mencakup semua produk
  description: 'Lihat daftar lengkap harga, spesifikasi, dan promo kredit mobil Suzuki terbaru di Yogyakarta. Tersedia Ertiga, XL7, Jimny, Carry, Baleno, dan lainnya.',
  
  // ✅ Canonical mengarah tepat ke /produk
  alternates: {
    canonical: '/produk', 
  },

  openGraph: {
    title: 'Daftar Harga Mobil Suzuki Jogja 2026 | Promo Terbaru',
    description: 'Pilihan lengkap mobil Suzuki dengan penawaran diskon, DP ringan, dan kredit terbaik di Yogyakarta.',
    url: 'https://www.suzuki-jogja.com/produk', 
    siteName: 'Suzuki Jogja',
    locale: 'id_ID',
    type: 'website',
    // Anda bisa menambahkan 'images' di sini jika ingin gambar spesifik saat halaman /produk di-share
  },
};

export default function ProdukListLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
    </>
  );
}