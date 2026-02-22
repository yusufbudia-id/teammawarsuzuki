'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Heart } from 'lucide-react';
import { products } from '@/lib/products-data';
import Link from 'next/link';
import { useState } from 'react';

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

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block animate-fade-in">
                <span className="px-4 py-2 rounded-full bg-primary/20 text-primary-foreground text-sm font-medium border border-primary/30">
                  Produk Kami
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight animate-fade-in stagger-1 mt-8">
                Pilihan Mobil <span className="text-primary">Suzuki</span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto animate-fade-in stagger-2 mt-6">
                Temukan mobil Suzuki impian Anda dengan harga terbaik dan penawaran eksklusif
              </p>
            </div>
          </div>
        </section>

        {/* Filter Chips Section */}
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === cat
                      ? 'bg-red-600 text-white shadow-md scale-105'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50/50 to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                {filteredProducts.map((product, index) => (
                  <Link href={`/produk/${product.id}`} key={product.id}>
                    <div
                      className="overflow-hidden border-0 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer animate-fade-in group bg-white rounded-xl flex flex-col h-full"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {/* Product Image Section */}
                      <div className="relative aspect-[4/3] overflow-hidden shrink-0">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover block group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        {/* Category Badge & Wishlist */}
                        <div className="absolute top-3 left-3 right-3 flex items-start justify-between z-10">
                          <span className="px-3 py-1.5 text-xs font-semibold text-white bg-red-600 backdrop-blur-sm rounded-full shadow-sm">
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

                      {/* Card Content - Modified Layout */}
                      <div className="p-4 flex justify-between items-end gap-3 flex-grow">
                        {/* Text Container */}
                        <div className="flex-1">
                          <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 text-left group-hover:text-primary transition-colors duration-300 tracking-tight line-clamp-1">
                            {product.name}
                          </h3>

                          <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                            Mulai
                          </div>

                          <div className="text-left">
                            <span className="text-xl md:text-2xl font-bold text-primary">
                              {product.priceText}
                            </span>
                            <span className="text-sm md:text-base font-semibold text-foreground ml-2">Jutaan</span>
                          </div>
                        </div>

                        {/* === BARU: Circular Discount Badge === */}
                        <div className="flex-shrink-0 mb-1">
                          <div className="w-14 h-14 md:w-16 md:h-16 bg-red-600 rounded-full shadow-lg flex flex-col items-center justify-center transform -rotate-12 group-hover:scale-110 group-hover:-rotate-0 transition-all duration-300 border-2 border-white">
                            <span className="text-[9px] md:text-[10px] font-bold text-white/90 leading-none mb-0.5">
                              DISKON
                            </span>
                            <span className="text-sm md:text-base font-extrabold text-white leading-none">
                              20%
                            </span>
                          </div>
                        </div>
                        {/* ===================================== */}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}