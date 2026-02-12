'use client';

import { useEffect, useMemo } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, User, Tag, ArrowRight, Clock, Share2 } from 'lucide-react';
import { getArticleBySlug, getRelatedArticles, ArticleType } from '@/lib/articles-data';

export default function ArticleDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;

  // Get article directly (synchronous)
  const article = useMemo(() => getArticleBySlug(slug), [slug]);

  // Get related articles
  const relatedArticles = useMemo(() => {
    if (!article) return [];
    return getRelatedArticles(slug, article?.category || '', 5);
  }, [article, slug]);

  // Redirect if article not found
  useEffect(() => {
    if (!article) {
      router.push('/artikel');
    }
  }, [article, router]);

  if (!article) {
    return null;
  }

  const readingTime = Math.ceil(article.content.split(' ').length / 200);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: article.title,
          text: article.excerpt,
          url: window.location.href,
        });
      } catch (err) {
        console.error('Share failed:', err);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link berhasil disalin!');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

<main className="flex-1">
        {/* --- 1. HERO SECTION (Hanya Teks Judul & Meta) --- */}
        <section className="relative pt-24 pb-32 bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -mr-20 -mt-20" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl -ml-20 -mb-20" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="max-w-4xl mx-auto">
              {/* Back Button */}
              <div className="mb-8 flex justify-center">
                <Link
                  href="/artikel"
                  className="inline-flex items-center text-gray-400 hover:text-white transition-colors"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Kembali ke Daftar
                </Link>
              </div>

              {/* Category Badge */}
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary-foreground border border-primary/30 text-sm font-semibold mb-6">
                {article.category}
              </span>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                {article.title}
              </h1>

              {/* Meta Data */}
              <div className="flex flex-wrap items-center justify-center gap-6 text-gray-300 text-sm">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{article.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>
                    {new Date(article.date).toLocaleDateString('id-ID', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- 2. MAIN CONTENT (Poster Utuh & Artikel) --- */}
        <section className="pb-16 md:pb-24 bg-gray-50 relative z-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-20">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
                
                {/* --- KOLOM KIRI: KONTEN UTAMA --- */}
                <div className="lg:col-span-2 animate-fade-in">
                  
                  {/* Container Poster & Artikel */}
                  <article className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                    
                    {/* BAGIAN POSTER: Tampil Utuh (No Crop) */}
                    <div className="p-2 md:p-4 bg-white">
                      <img
                        src={article.thumbnail}
                        alt={article.title}
                        className="w-full h-auto rounded-xl shadow-sm border border-gray-100"
                        // 'h-auto' memastikan gambar tidak gepeng
                        // 'w-full' memastikan lebar mengikuti container
                      />
                    </div>

                    {/* Isi Artikel */}
                    <div className="p-6 md:p-10 pt-4">
                      <div
                        className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-a:text-primary prose-img:rounded-xl"
                        dangerouslySetInnerHTML={{ __html: article.content }}
                      />

                      {/* Tags */}
                      <div className="mt-8 pt-6 border-t flex flex-wrap gap-2">
                        {article.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gray-100 text-gray-600 rounded-lg text-sm font-medium"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      {/* Share Button (Optional) */}
                      <div className="mt-8">
                        <button className="flex items-center justify-center w-full md:w-auto gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
                          <Share2 className="w-4 h-4" />
                          Bagikan Info Ini
                        </button>
                      </div>
                    </div>
                  </article>
                </div>

                {/* --- KOLOM KANAN: SIDEBAR --- */}
                <div className="lg:col-span-1 animate-fade-in stagger-2">
                  <div className="sticky top-24 space-y-6">
                    
                    {/* Related Articles Widget */}
                    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                      <h3 className="text-lg font-bold text-gray-900 mb-4 border-l-4 border-primary pl-3">
                        Artikel Lainnya
                      </h3>
                      <div className="space-y-4">
                        {relatedArticles.map((item) => (
                          <Link
                            key={item.id}
                            href={`/artikel/${item.slug}`}
                            className="flex gap-3 group"
                          >
                            <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100">
                              <img
                                src={item.thumbnail}
                                alt={item.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                              />
                            </div>
                            <div className="flex-1">
                              <h4 className="text-sm font-bold text-gray-800 line-clamp-2 group-hover:text-primary transition-colors">
                                {item.title}
                              </h4>
                              <span className="text-xs text-gray-500 mt-1 block">
                                {new Date(item.date).toLocaleDateString('id-ID', { month: 'short', day: 'numeric', year: 'numeric' })}
                              </span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* CTA Widget (Contoh untuk Sales Mobil) */}
                    <div className="bg-primary rounded-xl shadow-lg p-6 text-white text-center">
                      <h3 className="text-xl font-bold mb-2">Tertarik dengan Promo ini?</h3>
                      <p className="text-primary-foreground/90 text-sm mb-4">
                        Jangan lewatkan kesempatan mendapatkan penawaran terbaik bulan ini.
                      </p>
                      <a 
                        href="https://wa.me/628174635218" // Ganti dengan nomor WA Anda
                        target="_blank"
                        className="block w-full py-3 bg-white text-primary font-bold rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        Hubungi via WhatsApp
                      </a>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
