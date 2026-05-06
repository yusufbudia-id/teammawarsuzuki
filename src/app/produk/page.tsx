'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Heart, ArrowRight, Sparkles, Calculator } from 'lucide-react';
import { products } from '@/lib/products-data';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

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
  const [activeCategory, setActiveCategory] = useState('Semua');

  const toggleWishlist = (id: number) => {
    if (wishlist.includes(id)) {
      setWishlist(wishlist.filter(item => item !== id));
    } else {
      setWishlist([...wishlist, id]);
    }
  };

  const categories = ['Semua', ...Array.from(new Set(products.map(p => p.category)))];

  const filteredProducts = activeCategory === 'Semua'
    ? products
    : products.filter(p => p.category === activeCategory);

  const getPromoInfo = (productName: string) => {
    const name = productName.toLowerCase();
    
    // Perhitungan diskon berdasarkan selisih OTR dan Nett
    if (name.includes('fronx')) return { label: 'Diskon', value: '14 Jt' };
    if (name.includes('xl7')) return { label: 'Diskon', value: '21 Jt' };
    if (name.includes('carry')) return { label: 'Diskon', value: '34 Jt' };
    if (name.includes('vitara')) return { label: 'Diskon', value: '43 Jt' };
    if (name.includes('presso')) return { label: 'Diskon', value: '16 Jt' };
    if (name.includes('ertiga')) return { label: 'Diskon', value: '26 Jt' };
    if (name.includes('apv')) return { label: 'Diskon', value: '3 Jt' };
    if (name.includes('jimny') || name.includes('jimnny')) return { label: 'Bonus', value: 'Aksesoris' }; 
    
    return null;
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F7F9] font-sans selection:bg-amber-400 selection:text-slate-900">
      <Header />

      <main className="flex-1">
        
        {/* HERO SECTION - Playful Corporate Style */}
        <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-white rounded-b-[3rem] lg:rounded-b-[5rem] shadow-sm z-20 overflow-hidden">
          {/* Latar Belakang Shape Ceria */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-50 rounded-full blur-3xl opacity-50 translate-y-1/3 -translate-x-1/3"></div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 font-bold text-sm border border-blue-100 animate-fade-in mb-6">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>Katalog Lengkap Suzuki 2026</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 leading-[1.1] tracking-tight animate-fade-in stagger-1">
                Pilih Armada <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-blue-400">Terbaik Anda.</span>
              </h1>

              <p className="text-lg md:text-xl text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto animate-fade-in stagger-2 mt-6">
                Temukan spesifikasi lengkap, fitur canggih, dan penawaran diskon eksklusif untuk setiap model mobil Suzuki impian Anda.
              </p>
            </div>
          </div>
        </section>

        {/* CATALOG SECTION */}
        <section className="py-16 relative z-10 -mt-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Filter Chips - Floating effect */}
            <div className="flex flex-wrap justify-center gap-3 bg-white/80 backdrop-blur-md p-3 rounded-[2rem] shadow-lg shadow-slate-200/50 border border-slate-100 max-w-fit mx-auto mb-16 animate-fade-in stagger-3 relative z-30">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                    activeCategory === cat
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20 scale-105'
                      : 'bg-transparent text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="max-w-7xl mx-auto">
              
              {/* Product Grid - Premium Edge-to-Edge Design */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-8">
                {filteredProducts.map((product, index) => {
                  const promo = getPromoInfo(product.name);
                  const productUrl = `/produk/${(product as any).slug || product.id}`;

                  return (
                    <div
                      key={product.id}
                      className="group relative bg-white rounded-[2rem] overflow-hidden border border-slate-200 hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 flex flex-col animate-fade-in"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      {/* Image Section - Gambar Full Edge-to-Edge */}
                      <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                        <Link href={productUrl} className="block w-full h-full">
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                          />
                          {/* Overlay gelap halus yang muncul saat di-hover */}
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </Link>

                        {/* Wishlist Button - Mengambang di atas gambar */}
                        <button
                          onClick={(e) => { e.preventDefault(); toggleWishlist(product.id); }}
                          className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all shadow-sm z-10"
                        >
                          <Heart className={`w-5 h-5 ${wishlist.includes(product.id) ? 'fill-red-500 text-red-500' : 'text-slate-400'}`} />
                        </button>

                        {/* Category Badge - Sudut kiri atas */}
                        <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-xl z-10">
                          <span className="text-[10px] font-black text-white uppercase tracking-wider">{product.category}</span>
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="p-6 flex-1 flex flex-col relative">
                        
                        {/* Floating Promo Badge - Aksen Playful & Konversi */}
                        {promo && (
                          <div className="absolute -top-6 right-6 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 px-4 py-2 rounded-2xl shadow-lg transform rotate-3 group-hover:rotate-0 transition-transform duration-300 border-2 border-white z-20">
                            <span className="text-[9px] font-black uppercase block leading-none mb-1 opacity-80">{promo.label}</span>
                            <span className="text-sm font-black leading-none">{promo.value}</span>
                          </div>
                        )}

                        <Link href={productUrl} className="block mb-2 mt-2">
                          <h3 className="text-2xl font-black text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1">
                            {product.name}
                          </h3>
                        </Link>
                        
                        <div className="mb-6">
                          <p className="text-xs font-bold text-slate-400 mb-1 uppercase tracking-wider">Harga OTR</p>
                          <div className="flex items-start text-slate-900">
                            <span className="text-sm font-bold mt-1.5 mr-1 text-slate-500">Rp</span>
                            <span className="text-3xl font-black tracking-tight">{product.priceText}</span>
                            <span className="text-sm font-bold ml-1 mt-1.5 text-slate-500">Jt</span>
                          </div>
                        </div>

                        {/* Tombol Aksi - Layout Asimetris Modern */}
                        <div className="mt-auto flex items-center gap-3">
                          <Link href="/kontak" className="flex-1">
                            <Button className="w-full rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold h-12 transition-all shadow-md shadow-blue-600/20 group-hover:shadow-blue-600/40">
                              Hitung DP
                            </Button>
                          </Link>
                          <Link href={productUrl}>
                            <Button variant="outline" size="icon" className="w-12 h-12 rounded-xl border-slate-200 text-slate-600 hover:border-slate-900 hover:bg-slate-900 hover:text-white transition-all group/btn">
                              {/* Ikon panah miring yang akan lurus saat di-hover */}
                              <ArrowRight className="w-5 h-5 -rotate-45 group-hover/btn:rotate-0 transition-transform duration-300" />
                            </Button>
                          </Link>
                        </div>

                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Empty State */}
              {filteredProducts.length === 0 && (
                <div className="text-center py-20 bg-white rounded-[3rem] border border-slate-100 shadow-sm mt-8 animate-fade-in">
                  <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calculator className="w-10 h-10 text-slate-300" />
                  </div>
                  <h3 className="text-xl font-black text-slate-900 mb-2">Belum Tersedia</h3>
                  <p className="text-slate-500 font-medium">
                    Kendaraan untuk kategori <span className="text-blue-600 font-bold">{activeCategory}</span> belum tersedia saat ini.
                  </p>
                  <Button 
                    variant="outline" 
                    className="mt-6 rounded-full border-slate-200 font-bold"
                    onClick={() => setActiveCategory('Semua')}
                  >
                    Lihat Semua Kendaraan
                  </Button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* LEASING PARTNER SECTION */}
        <section className="py-24 bg-white rounded-t-[3rem] lg:rounded-t-[5rem] border-t border-slate-100 mt-12 relative z-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
                Partner Pembiayaan Terpercaya
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto font-medium text-lg">
                Proses kredit lebih mudah dan aman berkat dukungan lembaga pembiayaan resmi dan terkemuka di Indonesia.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 animate-fade-in stagger-1">
              {leasingPartners.map((partner, index) => (
                <div 
                  key={index} 
                  className="group relative w-28 h-16 md:w-36 md:h-20 flex items-center justify-center p-3 transition-all duration-300 hover:scale-110 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 bg-slate-50 rounded-2xl hover:bg-white hover:shadow-xl hover:shadow-slate-200/50"
                >
                  <img
                    src={partner.src}
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain transition-all duration-300"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      if (e.currentTarget.parentElement) {
                        e.currentTarget.parentElement.innerHTML = `<span class="text-[10px] font-black text-slate-400 uppercase tracking-widest text-center w-full">${partner.name}</span>`;
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