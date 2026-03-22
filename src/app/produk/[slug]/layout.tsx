import { Metadata } from 'next';
import { getProductBySlug } from '@/lib/products-data';

type Props = {
  params: Promise<{ slug: string }>; // <--- Disamakan dengan metadata agar konsisten
  children: React.ReactNode;
};

// Fungsi ini akan berjalan di server (Server-Side) khusus untuk men-generate SEO
export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const resolvedParams = await params;
  const product = getProductBySlug(resolvedParams.slug);

  if (!product) {
    return {
      title: 'Produk Tidak Ditemukan | Suzuki Jogja',
      description: 'Halaman produk yang Anda cari tidak tersedia di Suzuki Jogja.',
    };
  }

  return {
    title: `Harga Suzuki ${product.name} Jogja 2026 | Promo & Kredit Terbaru`,
    description: `Dapatkan informasi harga, spesifikasi, dan promo kredit terbaru untuk Suzuki ${product.name} di Jogja. Promo DP ringan dan cicilan murah hanya di dealer resmi Suzuki Jogja.`,
    
    // ✅ Tambahkan Canonical URL di sini agar Google tahu URL aslinya
    alternates: {
      canonical: `/produk/${resolvedParams.slug}`, 
      // Next.js otomatis menggabungkannya dengan metadataBase dari Root Layout
    },

    openGraph: {
      title: `Harga Suzuki ${product.name} Jogja 2026 | Promo & Kredit Terbaru`,
      description: `Promo kredit dan harga terbaru Suzuki ${product.name} wilayah Jogja dan sekitarnya.`,
      url: `https://www.suzuki-jogja.com/produk/${resolvedParams.slug}`, // ✅ DIPERBAIKI (pakai resolvedParams)
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
  return (
    <>
      {children}
    </>
  );
}