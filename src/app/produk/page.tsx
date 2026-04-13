'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Heart, ArrowRight } from 'lucide-react';
import { products } from '@/lib/products-data';
import Link from 'next/link';
import { useState } from 'react';

const leasingPartners = [
  { name: 'Suzuki Finance', src: '/images/leasing/sufi.webp' },
  { name: 'BCA Finance', src: '/images/leasing/bca.webp' },
  { name: 'Mandiri Tunas Finance', src: '/images/leasing/mtf.webp' },
  { name: 'Adira Finance', src: '/images/leasing/adira.webp' },
  { name: 'Oto Finance', src: '/images/leasing/muf.webp' },
  { name: 'Clipan Finance', src: '/images/leasing/clipan.webp' },
  { name: 'Indomobil Finance', src: '/images/leasing/imfi.webp' },
];

export default function ProdukPage() {
  const [wishlist, setWishlist] = useState<number[]>([]);

  const toggleWishlist = (id: number) => {
    if (wishlist.includes(id)) {
      setWishlist(wishlist.filter(item => item !== id));
    } else {
      setWishlist([...wishlist, id]);
    }
  };

  const [activeCategory, setActiveCategory] = useState('Semua');
  const categories = ['Semua', ...Array.from(new Set(products.map(p => p.category)))];

  const filteredProducts = activeCategory === 'Semua'
    ? products
    : products.filter(p => p.category === activeCategory);

  const getPromoInfo = (productName: string) => {
    const name = productName.toLowerCase();
    
    // Perhitungan diskon berdasarkan selisih OTR dan Nett di data CSV terbaru
    if (name.includes('fronx')) return { label: 'DISKON', value: '14 JT' };
    if (name.includes('xl7')) return { label: 'DISKON', value: '21 JT' };
    if (name.includes('carry')) return { label: 'DISKON', value: '34 JT' };
    if (name.includes('vitara')) return { label: 'DISKON', value: '43 JT' };
    if (name.includes('presso')) return { label: 'DISKON', value: '16 JT' };
    if (name.includes('ertiga')) return { label: 'DISKON', value: '26 JT' };
    if (name.includes('apv')) return { label: 'DISKON', value: '3 JT' };
    if (name.includes('jimny') || name.includes('jimnny')) return { label: 'BONUS', value: '20 JT' }; // Mengambil nilai Voucher MAP 20 Juta
    
    return null;
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-32 pb-28 md:pb-36 bg-gradient-to-br from-slate-900 via-slate-800 to-black overflow-hidden">
          {/* Subtle Background Pattern/Glow */}
          <div className="absolute inset-0 z-0 opacity-20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent" />
            <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block animate-fade-in">
                <span className="px-4 py-2 rounded-full bg-blue-500/20 text-blue-300 text-sm font-semibold border border-blue-500/30 tracking-wide">
                  Katalog Kendaraan
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight animate-fade-in stagger-1 mt-8 tracking-wide">
                Pilihan Mobil <span className="text-blue-400">Suzuki</span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto animate-fade-in stagger-2 mt-6 font-light">
                Temukan mobil Suzuki impian Anda dengan harga terbaik dan penawaran eksklusif khusus bulan ini.
              </p>
            </div>
          </div>
        </section>

        {/* Floating Filter Chips Section */}
        <section className="relative z-20 -mt-10 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-4 md:p-6 flex flex-wrap justify-center gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                    activeCategory === cat
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30 scale-105'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-800'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 md:py-20 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                {filteredProducts.map((product, index) => {
                  const promo = getPromoInfo(product.name);

                  return (
                    <Link href={`/produk/${product.slug}`} key={product.slug} className="block h-full group">
                      <div
                        className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full animate-fade-in"
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        {/* Product Image Section */}
                        <div className="relative aspect-[4/3] overflow-hidden shrink-0 bg-slate-100">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover block group-hover:scale-110 transition-transform duration-700 ease-out p-2"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                          {/* Category Badge & Wishlist */}
                          <div className="absolute top-4 left-4 right-4 flex items-start justify-between z-10">
                            <span className="px-3 py-1 text-xs font-bold text-slate-700 bg-white/90 backdrop-blur-md rounded-md border border-slate-200/50 uppercase tracking-wider shadow-sm">
                              {product.category}
                            </span>
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                toggleWishlist(product.id);
                              }}
                              className="w-9 h-9 rounded-full bg-white/90 backdrop-blur-md shadow-sm flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 relative z-20" 
                            >
                              <Heart
                                className={`h-4 w-4 transition-all duration-300 ${wishlist.includes(product.id) ? 'fill-red-500 text-red-500' : 'text-slate-400 hover:text-red-500'}`}
                                strokeWidth={2.5}
                              />
                            </button>
                          </div>
                        </div>

                        {/* Card Content */}
                        <div className="p-5 flex flex-col flex-grow">
                          <div className="flex justify-between items-start gap-3">
                            <div className="flex-1">
                              <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors duration-300 tracking-tight line-clamp-1">
                                {product.name}
                              </h3>

                              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
                                Harga Mulai
                              </div>

                              <div className="flex items-baseline text-blue-600">
                                <span className="text-sm font-bold mr-1 text-slate-900">Rp</span>
                                <span className="text-2xl font-bold">{product.priceText}</span>
                                <span className="text-sm font-bold ml-1 text-slate-900">Jutaan</span>
                              </div>
                            </div>

                            {/* Dynamic Circular Discount Badge */}
                            {promo && (
                              <div className="flex-shrink-0 mt-2">
                                <div className="w-14 h-14 bg-red-600 rounded-full shadow-lg shadow-red-500/30 flex flex-col items-center justify-center transform -rotate-12 group-hover:scale-110 group-hover:-rotate-0 transition-all duration-300 border-2 border-white">
                                  <span className="text-[9px] font-bold text-white/90 leading-none mb-0.5 uppercase">
                                    {promo.label}
                                  </span>
                                  <span className="text-sm font-extrabold text-white leading-none">
                                    {promo.value}
                                  </span>
                                </div>
                              </div>
                            )}
                          </div>

                          {/* CTA Divider Section */}
                          <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between text-sm font-bold text-blue-600 opacity-80 group-hover:opacity-100 transition-opacity">
                            <span>Lihat Spesifikasi</span>
                            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>

              {filteredProducts.length === 0 && (
                <div className="text-center py-20 text-slate-500 font-medium bg-white rounded-2xl border border-slate-100 shadow-sm mt-8">
                  Kendaraan untuk kategori {activeCategory} belum tersedia.
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Leasing Partner Section */}
        <section className="py-16 md:py-24 bg-white border-t border-slate-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 animate-fade-in">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                Leasing Partner Terpercaya
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto font-medium">
                Kami bekerjasama dengan berbagai lembaga pembiayaan terkemuka untuk memberikan kemudahan cicilan bagi pembelian mobil baru Anda.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 animate-fade-in stagger-1">
              {leasingPartners.map((partner, index) => (
                <div 
                  key={index} 
                  className="group relative w-28 h-16 md:w-36 md:h-20 flex items-center justify-center p-2 transition-all duration-300 hover:scale-110 grayscale hover:grayscale-0 opacity-70 hover:opacity-100"
                >
                  <img
                    src={partner.src}
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain transition-all duration-300"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      if (e.currentTarget.parentElement) {
                        e.currentTarget.parentElement.innerHTML = `<span class="text-xs font-bold text-slate-400 border border-dashed border-slate-300 p-2 rounded text-center w-full">${partner.name}</span>`;
                      }
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}