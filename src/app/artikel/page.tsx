'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar, User, ArrowRight, Sparkles, Newspaper, MailOpen } from 'lucide-react';
import { articles, getAllCategories } from '@/lib/articles-data';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function ArtikelPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const categories = ['Semua', ...getAllCategories()];

  // LOGIKA PENGURUTAN: Terbaru ke Terlama
  const sortedArticles = [...articles].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  // Filter setelah diurutkan
  const filteredArticles = selectedCategory && selectedCategory !== 'Semua'
    ? sortedArticles.filter(article => article.category === selectedCategory)
    : sortedArticles;

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F7F9] font-sans selection:bg-amber-400 selection:text-slate-900">
      <Header />

      <main className="flex-1">
        
        {/* HERO SECTION - Playful Corporate Style */}
        <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-white rounded-b-[3rem] lg:rounded-b-[5rem] shadow-sm z-20 overflow-hidden">
          {/* Latar Belakang Shape Ceria */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-red-50 rounded-full blur-3xl opacity-50 translate-y-1/3 -translate-x-1/3"></div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 font-bold text-sm border border-blue-100 animate-fade-in mb-6">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>Blog & Kabar Terbaru</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 leading-[1.1] tracking-tight animate-fade-in stagger-1">
                Wawasan & Tips <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-blue-400">Seputar Otomotif.</span>
              </h1>

              <p className="text-lg md:text-xl text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto animate-fade-in stagger-2 mt-6">
                Temukan panduan merawat kendaraan, berita peluncuran mobil Suzuki terbaru, dan tips cerdas agar mobil Anda selalu dalam kondisi prima.
              </p>
            </div>
          </div>
        </section>

        {/* ARTICLES & FILTER SECTION */}
        <section className="py-16 relative z-10 -mt-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Filter Chips - Floating effect */}
            <div className="flex flex-wrap justify-center gap-3 bg-white/80 backdrop-blur-md p-3 rounded-[2rem] shadow-lg shadow-slate-200/50 border border-slate-100 max-w-fit mx-auto mb-16 animate-fade-in stagger-3 relative z-30">
              {categories.map((category) => {
                const isActive = (selectedCategory === null && category === 'Semua') || selectedCategory === category;
                return (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category === 'Semua' ? null : category)}
                    className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                      isActive
                        ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20 scale-105'
                        : 'bg-transparent text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>

            <div className="max-w-7xl mx-auto">
              {filteredArticles.length > 0 ? (
                /* Article Grid - Modern Premium Cards */
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {filteredArticles.map((article, index) => (
                    <Link
                      href={`/artikel/${article.slug}`}
                      key={article.id}
                      className="group relative bg-white rounded-[2rem] overflow-hidden border border-slate-200 hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 flex flex-col animate-fade-in"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {/* Image Thumbnail - Edge-to-Edge */}
                      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                        <img
                          src={article.thumbnail}
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        {/* Category Badge - Red Accent */}
                        <div className="absolute top-4 left-4 bg-red-600/95 backdrop-blur-md px-4 py-1.5 rounded-xl z-10 shadow-sm">
                          <span className="text-[10px] font-black text-white uppercase tracking-widest">{article.category}</span>
                        </div>
                      </div>

                      {/* Article Content */}
                      <div className="p-6 md:p-8 flex-1 flex flex-col relative">
                        <h3 className="text-xl md:text-2xl font-black text-slate-900 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2 leading-tight mb-3">
                          {article.title}
                        </h3>

                        <p className="text-sm text-slate-500 font-medium line-clamp-3 leading-relaxed mb-6">
                          {article.excerpt}
                        </p>

                        <div className="mt-auto pt-5 border-t border-slate-100 flex items-center justify-between">
                          {/* Meta Data */}
                          <div className="flex items-center gap-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                            <div className="flex items-center gap-1.5">
                              <Calendar className="h-3.5 w-3.5 text-blue-500" />
                              <span>{new Date(article.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <User className="h-3.5 w-3.5 text-amber-500" />
                              <span className="line-clamp-1">{article.author}</span>
                            </div>
                          </div>

                          {/* Interactive Arrow Button */}
                          <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center group-hover:bg-blue-600 text-slate-400 group-hover:text-white transition-colors duration-300 shrink-0">
                            <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                /* Empty State */
                <div className="text-center py-20 bg-white rounded-[3rem] border border-slate-100 shadow-sm mt-8 animate-fade-in">
                  <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Newspaper className="w-10 h-10 text-slate-300" />
                  </div>
                  <h3 className="text-xl font-black text-slate-900 mb-2">Kategori Kosong</h3>
                  <p className="text-slate-500 font-medium">
                    Belum ada artikel yang diterbitkan untuk kategori <span className="text-blue-600 font-bold">{selectedCategory}</span>.
                  </p>
                  <Button 
                    variant="outline" 
                    className="mt-6 rounded-full border-slate-200 font-bold"
                    onClick={() => setSelectedCategory('Semua')}
                  >
                    Tampilkan Semua Artikel
                  </Button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* CTA / NEWSLETTER SECTION - Menjadi Base/Bawah agar Footer Menyatu */}
        <section className="pt-24 pb-40 lg:pb-52 bg-white rounded-t-[3rem] lg:rounded-t-[5rem] border-t border-slate-100 mt-12 relative z-0">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-blue-600 rounded-[2.5rem] p-10 md:p-14 relative overflow-hidden shadow-2xl shadow-blue-900/10 text-center animate-fade-in">
              {/* Dekorasi Latar Belakang Kotak CTA */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400 rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl opacity-10 translate-y-1/2 -translate-x-1/2"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/20">
                  <MailOpen className="w-8 h-8 text-amber-400" />
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">
                  Jangan Ketinggalan Info Terbaru!
                </h2>
                <p className="text-blue-100 font-medium text-lg max-w-2xl mx-auto mb-8">
                  Konsultasikan kebutuhan mobil Suzuki Anda atau tanyakan promo yang sedang berlangsung langsung ke tim representatif kami melalui WhatsApp.
                </p>
                <Link href="/kontak">
                  <Button className="bg-amber-400 hover:bg-amber-500 text-slate-900 h-14 px-8 rounded-full font-black text-lg shadow-lg hover:scale-105 transition-all w-full sm:w-auto">
                    Hubungi Sales Kami <ArrowRight className="ml-2 w-5 h-5" />
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