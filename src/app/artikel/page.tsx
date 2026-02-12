'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Calendar, User, Tag, ArrowRight } from 'lucide-react';
import { articles, getAllCategories } from '@/lib/articles-data';
import Link from 'next/link';
import { useState } from 'react';

export default function ArtikelPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const categories = ['Semua', ...getAllCategories()];

  // LOGIKA PENGURUTAN DI SINI:
  // 1. Kita buat copy array dulu dengan [...articles] agar data asli tidak termutasi
  // 2. Kita sort berdasarkan tanggal (terbaru - terlama)
  const sortedArticles = [...articles].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  // Filter dilakukan SETELAH data diurutkan
  const filteredArticles = selectedCategory && selectedCategory !== 'Semua'
    ? sortedArticles.filter(article => article.category === selectedCategory)
    : sortedArticles;

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
                  Blog & Artikel
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight animate-fade-in stagger-1 mt-8">
                Artikel & <span className="text-primary">Tips Otomotif</span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto animate-fade-in stagger-2 mt-6">
                Temukan informasi menarik seputar Suzuki, tips merawat kendaraan, dan berita otomotif terkini
              </p>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-muted/30 border-b">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-wrap gap-3 justify-center">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category === 'Semua' ? null : category)}
                    className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      (selectedCategory === null && category === 'Semua') || selectedCategory === category
                        ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                        : 'bg-white text-foreground hover:bg-gray-100 border'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50/50 to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              {filteredArticles.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {filteredArticles.map((article, index) => (
                    <Link
                      href={`/artikel/${article.slug}`}
                      key={article.id}
                      className="animate-fade-in"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <Card className="overflow-hidden border-0 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer group bg-white h-full">
                        {/* Article Thumbnail */}
                        <div className="relative aspect-[16/10] overflow-hidden">
                          <img
                            src={article.thumbnail}
                            alt={article.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                          />
                          {/* Gradient Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                          {/* Category Badge */}
                          <div className="absolute top-4 left-4">
                            <span className="px-3 py-1.5 text-xs font-semibold text-white bg-black/70 backdrop-blur-sm rounded-full">
                              {article.category}
                            </span>
                          </div>
                        </div>

                        {/* Article Content */}
                        <div className="p-6">
                          {/* Title */}
                          <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-300">
                            {article.title}
                          </h3>

                          {/* Excerpt */}
                          <p className="text-sm text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
                            {article.excerpt}
                          </p>

                          {/* Meta Info */}
                          <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                            <div className="flex items-center gap-1.5">
                              <Calendar className="h-4 w-4" />
                              <span>{new Date(article.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <User className="h-4 w-4" />
                              <span>{article.author}</span>
                            </div>
                          </div>

                          {/* Tags */}
                          <div className="flex items-center gap-2 flex-wrap mb-4">
                            {article.tags.slice(0, 3).map((tag, idx) => (
                              <span
                                key={idx}
                                className="px-2 py-1 text-xs font-medium bg-muted/50 text-muted-foreground rounded"
                              >
                                #{tag}
                              </span>
                            ))}
                          </div>

                          {/* Read More Link */}
                          <div className="flex items-center text-primary font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                            <span>Baca Selengkapnya</span>
                            <ArrowRight className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                          </div>
                        </div>
                      </Card>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <p className="text-xl text-muted-foreground">Tidak ada artikel ditemukan untuk kategori ini.</p>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}