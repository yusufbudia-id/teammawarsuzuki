import { MetadataRoute } from 'next';
import { products } from '@/lib/products-data';
// 1. IMPORT DATA ARTIKEL (Sesuaikan path ini dengan lokasi data kamu)
import { articles } from '@/lib/articles-data'; 

export default function sitemap(): MetadataRoute.Sitemap {
  // Tips: Hapus slash di akhir URL ini agar tidak double slash nanti
  const baseUrl = 'https://suzukijogjamagelang.vercel.app'; 

  // --- 1. Halaman Statis ---
  const staticPages = [
    '',
    '/tentang-kami',
    '/produk',
    '/artikel',
    '/testimoni',
    '/promo',
    '/kontak',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // --- 2. Halaman Dinamis (Produk) ---
  const productPages = products.map((product) => ({
    // Pastikan URL pattern sesuai (misal: /produk/1 atau /produk/nama-mobil)
    url: `${baseUrl}/produk/${product.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // --- 3. Halaman Dinamis (Artikel) ---
  const articlePages = articles.map((article) => ({
    // Biasanya artikel menggunakan 'slug' bukan 'id'. Sesuaikan dengan routing kamu.
    url: `${baseUrl}/artikel/${article.slug}`, 
    
    // Jika data artikel punya tanggal update/publish, gunakan itu agar lebih SEO friendly
    // Jika tidak ada, pakai new Date()
    lastModified: article.date ? new Date(article.date) : new Date(),
    
    changeFrequency: 'weekly' as const, // Artikel blog biasanya lebih sering di-crawl
    priority: 0.6, // Priority sedikit di bawah produk utama
  }));

  // 4. Gabungkan Semuanya
  return [...staticPages, ...productPages, ...articlePages];
}