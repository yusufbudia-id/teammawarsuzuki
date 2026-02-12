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
        {/* --- 1. HERO SECTION (HEADER) --- */}
        {/* Hanya berisi Judul & Meta Data dengan background gelap */}
        <section className="relative py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
          {/* Hiasan Background (Opsional) */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -mr-20 -mt-20" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl -ml-20 -mb-20" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="max-w-4xl mx-auto">
              {/* Tombol Kembali */}
              <div className="mb-8 flex justify-center">
                <Link
                  href="/artikel"
                  className="inline-flex items-center text-gray-400 hover:text-white transition-colors"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Kembali ke Daftar
                </Link>
              </div>

              {/* Badge Kategori */}
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary-foreground border border-primary/30 text-sm font-semibold mb-6">
                {article.category}
              </span>

              {/* Judul Artikel */}
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

        {/* --- 2. MAIN CONTENT --- */}
        <section className="pb-16 md:pb-24 bg-gray-50 relative z-20">
          {/* Margin negatif (-mt-20) membuat kotak konten naik sedikit menutupi header */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-20">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
                
                {/* --- KOLOM KIRI: KONTEN UTAMA --- */}
                <div className="lg:col-span-2 animate-fade-in">
                  
                  {/* Container Artikel */}
                  <article className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                    
                    {/* BAGIAN GAMBAR/POSTER (TAMPIL UTUH) */}
                    {/* Menggunakan p-4 agar ada jarak frame putih di sekeliling gambar */}
                    <div className="p-2 md:p-4">
                      <img
                        src={article.thumbnail}
                        alt={article.title}
                        // w-full: Lebar mengikuti container
                        // h-auto: Tinggi menyesuaikan otomatis (agar tidak gepeng/tercrop)
                        className="w-full h-auto rounded-xl shadow-sm border border-gray-100"
                      />
                    </div>

                    {/* Isi Artikel */}
                    <div className="p-6 md:p-10 pt-2">
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

                      {/* Share Button */}
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
                {/* (Bagian ini sama persis dengan sebelumnya) */}
                <div className="lg:col-span-1 animate-fade-in stagger-2">
                  <div className="sticky top-24 space-y-6">
                    <aside>
                      {/* Related Articles */}
                      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                        <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                          <span className="w-1 h-6 bg-primary rounded-full"></span>
                          Artikel Terkait
                        </h3>
                        {relatedArticles.length > 0 ? (
                          <div className="space-y-4">
                            {relatedArticles.map((relatedArticle, idx) => (
                              <Link
                                href={`/artikel/${relatedArticle.slug}`}
                                key={relatedArticle.id}
                                className="group block animate-fade-in"
                                style={{ animationDelay: `${idx * 50}ms` }}
                              >
                                <div className="flex gap-3">
                                  <div className="relative w-24 h-20 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
                                    <img
                                      src={relatedArticle.thumbnail}
                                      alt={relatedArticle.title}
                                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                  </div>
                                  <div className="flex-1">
                                    <h4 className="text-sm font-bold text-gray-800 mb-1 line-clamp-2 group-hover:text-primary transition-colors">
                                      {relatedArticle.title}
                                    </h4>
                                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                      <Calendar className="h-3 w-3" />
                                      <span>{new Date(relatedArticle.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'short' })}</span>
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        ) : (
                          <p className="text-sm text-muted-foreground">Tidak ada artikel terkait.</p>
                        )}
                      </div>

                      {/* Categories Widget */}
                      <div className="bg-white rounded-xl shadow-lg p-6 mt-6 border border-gray-100">
                        <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                          <span className="w-1 h-6 bg-primary rounded-full"></span>
                          Kategori
                        </h3>
                        <div className="space-y-2">
                          {['Review', 'Tips', 'Perawatan', 'Promo'].map((cat) => (
                             <Link
                                key={cat}
                                href="/artikel"
                                className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors group"
                              >
                                <span className="text-sm font-medium group-hover:text-primary transition-colors">{cat}</span>
                                <ArrowRight className="h-3 w-3 text-gray-300 group-hover:text-primary" />
                              </Link>
                          ))}
                        </div>
                      </div>

                      {/* Newsletter Widget */}
                      <div className="bg-primary rounded-xl shadow-lg p-6 mt-6 text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
                        <h3 className="text-xl font-bold mb-3 relative z-10">
                          Berlangganan Newsletter
                        </h3>
                        <p className="text-sm text-primary-foreground/90 mb-4 relative z-10">
                          Dapatkan update terbaru Suzuki langsung di inbox Anda.
                        </p>
                        <input
                          type="email"
                          placeholder="Email Anda"
                          className="w-full px-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-white mb-3 relative z-10"
                        />
                        <button className="w-full py-3 bg-white text-primary font-bold rounded-lg hover:bg-gray-100 transition-colors relative z-10 shadow-lg">
                          Berlangganan
                        </button>
                      </div>
                    </aside>
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
