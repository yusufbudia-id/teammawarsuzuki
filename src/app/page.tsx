'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronDown, Heart } from 'lucide-react';
import { products } from '@/lib/products-data';
import { useState } from 'react';

export default function HomePage() {
  const [wishlist, setWishlist] = useState<number[]>([]);

  const toggleWishlist = (id: number) => {
    if (wishlist.includes(id)) {
      setWishlist(wishlist.filter(item => item !== id));
    } else {
      setWishlist([...wishlist, id]);
    }
  };

  const getPromoInfo = (productName: string) => {
    const name = productName.toLowerCase();
    if (name.includes('fronx')) return { label: 'DISKON', value: '17 JT' };
    if (name.includes('xl7')) return { label: 'DISKON', value: '28 JT' };
    if (name.includes('carry')) return { label: 'DISKON', value: '37 JT' };
    if (name.includes('vitara')) return { label: 'DISKON', value: '28 JT' };
    if (name.includes('presso')) return { label: 'DISKON', value: '16 JT' };
    if (name.includes('ertiga')) return { label: 'DISKON', value: '26 JT' };
    if (name.includes('apv')) return { label: 'DISKON', value: '5 JT' };
    if (name.includes('jimny') || name.includes('jimnny')) return { label: 'BONUS', value: '50 JT' };
    return null;
  };

  // Ambil 4 produk pertama untuk ditampilkan di beranda
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
          <div className="absolute inset-0 z-0">
            <img
              src="/images/suzuki-hero.jpg"
              alt="Suzuki Showroom"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-800/85 to-black/90" />
          </div>

          <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-6xl mx-auto text-center space-y-8">
              <div className="inline-block animate-fade-in">
                <span className="px-4 py-2 rounded-full bg-primary/20 text-primary-foreground text-sm font-medium border border-primary/30">
                  Dealer Resmi Suzuki Indonesia
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight animate-fade-in stagger-1">
                Temukan Mobil Suzuki <br />
                <span className="text-primary">Impian Anda</span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto animate-fade-in stagger-2">
                Nikmati pengalaman membeli mobil yang mudah, transparan, dan profesional. Tersedia promo spesial untuk New Ertiga, XL7 Hybrid, Carry Pick-up, Jimny, Fronx, hingga S-Presso. Dukungan after-sales resmi dan harga paling kompetitif di Yogyakarta siap menanti Anda.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in stagger-3">
                <Link href="#produk-unggulan">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-white px-8 py-6 rounded-full text-lg font-semibold transition-all hover:shadow-2xl hover:scale-105 w-full sm:w-auto"
                  >
                    Lihat Produk
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/testimoni">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white/30 text-blue-500 hover:bg-white/10 px-8 py-6 rounded-full text-lg font-semibold transition-all w-full sm:w-auto"
                  >
                    Lihat Galeri
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8 pt-8 border-t border-white/10 animate-fade-in stagger-4">
                <div className="text-center animate-fade-in">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">1000+</div>
                  <div className="text-gray-400 text-sm md:text-base">Unit Terjual</div>
                </div>
                <div className="text-center animate-fade-in stagger-1">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</div>
                  <div className="text-gray-400 text-sm md:text-base">Pelanggan Puas</div>
                </div>
                <div className="text-center animate-fade-in stagger-2">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">10+</div>
                  <div className="text-gray-400 text-sm md:text-base">Tahun Pengalaman</div>
                </div>
                <div className="text-center animate-fade-in stagger-3">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">8</div>
                  <div className="text-gray-400 text-sm md:text-base">Model Tersedia</div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="h-10 w-10 text-gray-400" />
          </div>
        </section>

        {/* SECTION PRODUK UNGGULAN */}
        <section id="produk-unggulan" className="py-16 md:py-24 bg-gradient-to-b from-gray-50/50 to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="flex justify-between items-end mb-10">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Produk Pilihan</h2>
                  <p className="text-gray-600">Jelajahi mobil Suzuki terpopuler kami bulan ini.</p>
                </div>
                <Link href="/produk" className="hidden md:flex items-center text-primary font-semibold hover:underline">
                  Lihat Semua Produk <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                {featuredProducts.map((product, index) => {
                  const promo = getPromoInfo(product.name);

                  return (
                    <Link href={`/produk/${product.id}`} key={product.id}>
                      <div
                        className="overflow-hidden border-0 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer animate-fade-in group bg-white rounded-xl flex flex-col h-full"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div className="relative aspect-[4/3] overflow-hidden shrink-0">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover block group-hover:scale-105 transition-transform duration-700 ease-out"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          <div className="absolute top-3 left-3 right-3 flex items-start justify-between z-10">
                            <span className="px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 backdrop-blur-sm rounded-full shadow-sm">
                              {product.category}
                            </span>
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                toggleWishlist(product.id);
                              }}
                              className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 group/btn"
                            >
                              <Heart
                                className={`h-5 w-5 transition-all duration-300 ${wishlist.includes(product.id) ? 'fill-red-500 text-red-500' : 'text-gray-600 group-hover/btn:text-red-500'}`}
                                strokeWidth={2}
                              />
                            </button>
                          </div>
                        </div>

                        <div className="p-4 flex justify-between items-end gap-3 flex-grow">
                          <div className="flex-1">
                            <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 text-left group-hover:text-primary transition-colors duration-300 tracking-tight line-clamp-1">
                              {product.name}
                            </h3>
                            <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Mulai</div>
                            <div className="text-left">
                              <span className="text-xl md:text-2xl font-bold text-primary">{product.priceText}</span>
                              <span className="text-sm md:text-base font-semibold text-foreground ml-2">Jutaan</span>
                            </div>
                          </div>

                          {promo && (
                            <div className="flex-shrink-0 mb-1">
                              <div className="w-14 h-14 md:w-16 md:h-16 bg-red-600 rounded-full shadow-lg flex flex-col items-center justify-center transform -rotate-12 group-hover:scale-110 group-hover:-rotate-0 transition-all duration-300 border-2 border-white">
                                <span className="text-[9px] md:text-[10px] font-bold text-white/90 leading-none mb-0.5">{promo.label}</span>
                                <span className="text-sm md:text-base font-extrabold text-white leading-none">{promo.value}</span>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>

              <div className="mt-8 text-center md:hidden">
                <Link href="/produk">
                  <Button variant="outline" className="w-full rounded-full border-primary text-primary hover:bg-primary hover:text-white">
                    Lihat Semua Produk
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}