import { Metadata } from 'next';
import { getProductBySlug } from '@/lib/products-data';

type Props = {
  params: { slug: string };
  children: React.ReactNode;
};

// Fungsi ini akan berjalan di server (Server-Side) khusus untuk men-generate SEO
// PERBAIKAN UNTUK NEXT.JS TERBARU
export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> } // <--- Ubah bagian ini
): Promise<Metadata> {
  const resolvedParams = await params; // <--- Tambahkan await
  const product = getProductBySlug(resolvedParams.slug);

  if (!product) {
    return {
      title: 'Produk Tidak Ditemukan | Suzuki Jogja',
      description: 'Halaman produk yang Anda cari tidak tersedia di Suzuki Jogja.',
    };
  }

  return {
    // ✅ Title Tag yang sangat kuat untuk SEO lokal
    title: `Harga Suzuki ${product.name} Jogja 2026 | Promo & Kredit Terbaru`,
    // ✅ Meta Description dengan keyword target
    description: `Dapatkan informasi harga, spesifikasi, dan promo kredit terbaru untuk Suzuki ${product.name} di Jogja. Promo DP ringan dan cicilan murah hanya di dealer resmi Suzuki Jogja.`,
    // ✅ Open Graph agar tampilan link bagus saat di-share ke WhatsApp/Facebook
    openGraph: {
      title: `Harga Suzuki ${product.name} Jogja 2026 | Promo & Kredit Terbaru`,
      description: `Promo kredit dan harga terbaru Suzuki ${product.name} wilayah Jogja dan sekitarnya.`,
      url: `https://www.suzuki-jogja.com/produk/${params.slug}`,
      siteName: 'Suzuki Jogja',
      images: [
        {
          url: `https://www.suzuki-jogja.com${product.image}`,
          width: 1200,
          height: 630,
          alt: `Gambar Suzuki ${product.name}`,
        },
      ],
      locale: 'id_ID',
      type: 'website',
    },
  };
}

export default function ProductLayout({ children }: Props) {
  // Komponen ini hanya membungkus page.tsx yang sudah ada
  return (
    <>
      {children}
    </>
  );
}