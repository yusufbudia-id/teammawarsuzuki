import { MetadataRoute } from 'next';
import { products } from '@/lib/products-data'; // Pastikan path data produk benar

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://suzukijogjamagelang.vercel.app/'; // Ganti dengan domain asli Anda

  // 1. Halaman Statis
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

  // 2. Halaman Dinamis (Produk)
  const productPages = products.map((product) => ({
    url: `${baseUrl}/produk/${product.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...productPages];
}