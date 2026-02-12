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
        {/* --- MODIFIKASI: HERO SECTION (FULL IMAGE) --- */}
        <section className="relative h-[70vh] min-h-[500px] w-full">
          {/* 1. Gambar Background Full */}
          <div className="absolute inset-0">
            <img
              src={article.thumbnail}
              alt={article.title}
              className="w-full h-full object-cover"
            />
            {/* Overlay Gradient supaya teks terbaca */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30" />
          </div>

          {/* 2. Judul & Meta Data di tengah Hero */}
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center pb-12">
            <div className="animate-fade-in max-w-4xl">
              {/* Badge Kategori */}
              <span className="inline-block px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-bold mb-6 shadow-lg">
                {article.category}
              </span>

              {/* Judul Besar */}
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-md">
                {article.title}
              </h1>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-sm md:text-base text-gray-200">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  <span>{new Date(article.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  <span>{article.author}</span>
                </div>
                {/* Pastikan variabel readingTime ada, jika tidak hapus bagian ini */}
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  <span>5 menit baca</span> 
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- ARTICLE CONTENT & SIDEBAR --- */}
        {/* Added -mt-20 to pull content up over the image for modern look */}
        <section className="pb-16 md:pb-24 bg-gray-50 relative z-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-20">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
                
                {/* Main Content */}
                <div className="lg:col-span-2 animate-fade-in">
                  <article className="bg-white rounded-xl shadow-xl p-6 md:p-10 border border-gray-100">
                    {/* Article Body */}
                    <div
                      className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-a:text-primary"
                      dangerouslySetInnerHTML={{ __html: article.content }}
                    />

                    {/* Tags */}
                    <div className="mt-8 pt-6 border-t">
                      <div className="flex items-center gap-2 mb-3">
                        <Tag className="h-5 w-5 text-primary" />
                        <span className="font-semibold text-foreground">Tags</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {article.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1.5 text-sm font-medium bg-gray-100 text-gray-600 rounded-full hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Share Button */}
                    <div className="mt-8">
                       {/* Pastikan handleShare sudah didefinisikan di atas component */}
                      <button
                        className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-primary transition-colors w-full md:w-auto justify-center"
                      >
                        <Share2 className="h-5 w-5" />
                        <span>Bagikan Artikel</span>
                      </button>
                    </div>

                    {/* Back Button */}
                    <div className="mt-8 pt-6 border-t">
                      <Link
                        href="/artikel"
                        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary hover:gap-3 transition-all duration-300 font-medium"
                      >
                        <ArrowRight className="h-4 w-4 rotate-180" />
                        <span>Kembali ke Daftar Artikel</span>
                      </Link>
                    </div>
                  </article>
                </div>

                {/* Sidebar (Tetap sama seperti kode Anda) */}
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
                                  <div className="relative w-24 h-20 flex-shrink-0 rounded-lg overflow-hidden">
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
                           {/* Contoh static categories */}
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
