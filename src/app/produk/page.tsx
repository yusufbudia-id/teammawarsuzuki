'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, ChevronRight } from 'lucide-react';
import { products } from '@/lib/products-data';
import Link from 'next/link';

export default function ProdukPage() {
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

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight animate-fade-in stagger-1 mt-8">
                Pilihan Mobil <span className="text-primary">Suzuki</span>
              </h1>

              <p className="text-xl text-gray-300 max-w-2xl mx-auto animate-fade-in stagger-2 mt-6">
                Temukan mobil Suzuki impian Anda dengan harga terbaik dan penawaran eksklusif
              </p>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20 md:py-32 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map((product, index) => (
                  <Link href={`/produk/${product.id}`} key={product.id}>
                    <Card
                      className="overflow-hidden border border-border hover-lift group cursor-pointer animate-fade-in h-full"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {/* Product Image */}
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute top-4 right-4">
                          <span className="px-3 py-1 rounded-full bg-primary/90 text-white text-xs font-medium">
                            {product.category}
                          </span>
                        </div>
                      </div>

                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-foreground mb-2">{product.name}</h3>
                        <p className="font-semibold mb-3">
                          <span className="text-foreground">Mulai </span>
                          <span className="text-primary">{product.priceText} Jutaan</span>
                        </p>
                        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                          {product.description}
                        </p>

                        {/* Features */}
                        <div className="space-y-2 mb-4">
                          {product.features.slice(0, 4).map((feature, idx) => (
                            <div key={idx} className="flex items-center text-sm text-muted-foreground">
                              <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>

                        <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                          Detail Produk
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                      </CardContent>
                    </Card>
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
