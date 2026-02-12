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
        {/* Hero Section */}
        <section className="relative py-12 md:py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="animate-fade-in">
                <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary-foreground text-sm font-medium mb-4">
                  {article.category}
                </span>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                  {article.title}
                </h1>

                <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm text-gray-300 mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(article.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{readingTime} menit baca</span>
                  </div>
                </div>

                {/* Featured Image */}
                <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl">
                  <img
                    src={article.thumbnail}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content & Sidebar */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50/50 to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
                {/* Main Content */}
                <div className="lg:col-span-2 animate-fade-in">
                  <article className="bg-white rounded-xl shadow-sm p-6 md:p-8">
                    {/* Article Body */}
                    <div
                      className="prose prose-lg max-w-none"
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
                            className="px-3 py-1.5 text-sm font-medium bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition-colors cursor-pointer"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Share Button */}
                    <div className="mt-6">
                      <button
                        onClick={handleShare}
                        className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
                      >
                        <Share2 className="h-5 w-5" />
                        <span>Bagikan Artikel</span>
                      </button>
                    </div>

                    {/* Back Button */}
                    <div className="mt-8 pt-6 border-t">
                      <Link
                        href="/artikel"
                        className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all duration-300 font-semibold"
                      >
                        <ArrowRight className="h-4 w-4 rotate-180" />
                        <span>Kembali ke Daftar Artikel</span>
                      </Link>
                    </div>
                  </article>
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-1 animate-fade-in stagger-2">
                  <div className="sticky top-24">
                    <aside>
                      {/* Related Articles */}
                      <div className="bg-white rounded-xl shadow-sm p-6">
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
                                  <div className="relative w-24 h-16 flex-shrink-0 rounded-lg overflow-hidden">
                                    <img
                                      src={relatedArticle.thumbnail}
                                      alt={relatedArticle.title}
                                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                  </div>
                                  <div className="flex-1">
                                    <h4 className="text-sm font-semibold text-foreground mb-1 line-clamp-2 group-hover:text-primary transition-colors">
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
                      <div className="bg-white rounded-xl shadow-sm p-6 mt-6">
                        <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                          <span className="w-1 h-6 bg-primary rounded-full"></span>
                          Kategori
                        </h3>

                        <div className="space-y-2">
                          <Link
                            href="/artikel"
                            className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-muted/50 transition-colors"
                          >
                            <span className="text-sm font-medium">Review</span>
                            <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">3</span>
                          </Link>
                          <Link
                            href="/artikel"
                            className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-muted/50 transition-colors"
                          >
                            <span className="text-sm font-medium">Tips</span>
                            <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">2</span>
                          </Link>
                          <Link
                            href="/artikel"
                            className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-muted/50 transition-colors"
                          >
                            <span className="text-sm font-medium">Perawatan</span>
                            <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">1</span>
                          </Link>
                        </div>
                      </div>

                      {/* Newsletter Widget */}
                      <div className="bg-gradient-to-br from-primary to-primary/80 rounded-xl shadow-sm p-6 mt-6 text-white">
                        <h3 className="text-xl font-bold mb-3">
                          Berlangganan Newsletter
                        </h3>
                        <p className="text-sm text-primary-foreground/90 mb-4">
                          Dapatkan artikel dan tips otomotif terbaru langsung di inbox Anda.
                        </p>
                        <input
                          type="email"
                          placeholder="Email Anda"
                          className="w-full px-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 mb-3"
                        />
                        <button className="w-full py-3 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-colors">
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
