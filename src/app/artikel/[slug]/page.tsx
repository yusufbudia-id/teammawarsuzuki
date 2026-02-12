import { getArticleBySlug, getRelatedArticles } from '@/lib/articles-data';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar, User, Tag, ArrowLeft, Clock, Share2 } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default function ArticleDetail({ params }: { params: { slug: string } }) {
  // 1. Ambil data artikel berdasarkan slug dari URL
  const article = getArticleBySlug(params.slug);

  // 2. Jika artikel tidak ditemukan, arahkan ke 404
  if (!article) {
    notFound();
  }

  // 3. Ambil artikel terkait untuk bagian bawah halaman
  const relatedArticles = getRelatedArticles(params.slug, article.category);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 pb-20">
        {/* --- HERO IMAGE SECTION (FULL WIDTH) --- */}
        <div className="relative w-full h-[50vh] md:h-[70vh] min-h-[400px]">
          {/* Gambar Full */}
          <img
            src={article.thumbnail}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          
          {/* Overlay Gradient supaya teks di atasnya terbaca (opsional) */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />

          {/* Tombol Kembali (Absolute di atas gambar) */}
          <div className="absolute top-8 left-0 w-full z-20">
            <div className="container mx-auto px-4">
              <Link 
                href="/artikel" 
                className="inline-flex items-center text-white/80 hover:text-white hover:bg-white/10 px-4 py-2 rounded-full transition-all backdrop-blur-sm"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Kembali ke Artikel
              </Link>
            </div>
          </div>

          {/* Judul & Info di dalam Hero (Centered) */}
          <div className="absolute bottom-0 left-0 w-full z-10 pb-12 md:pb-20">
            <div className="container mx-auto px-4 text-center">
              {/* Badge Kategori */}
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm mb-6 shadow-lg">
                {article.category}
              </span>

              {/* Judul Artikel */}
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-5xl mx-auto drop-shadow-lg">
                {article.title}
              </h1>

              {/* Meta Data (Penulis & Tanggal) */}
              <div className="flex flex-wrap items-center justify-center gap-6 text-gray-200 text-sm md:text-base">
                <div className="flex items-center gap-2">
                  <div className="p-1 bg-white/20 rounded-full">
                    <User className="w-4 h-4" />
                  </div>
                  <span>{article.author}</span>
                </div>
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full hidden sm:block" />
                <div className="flex items-center gap-2">
                  <div className="p-1 bg-white/20 rounded-full">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <span>
                    {new Date(article.date).toLocaleDateString('id-ID', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </span>
                </div>
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full hidden sm:block" />
                <div className="flex items-center gap-2">
                  <div className="p-1 bg-white/20 rounded-full">
                    <Clock className="w-4 h-4" />
                  </div>
                  <span>5 menit baca</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- ARTICLE CONTENT SECTION --- */}
        <div className="container mx-auto px-4 -mt-10 relative z-20">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl p-6 md:p-12 border border-gray-100">
            
            {/* Render HTML Content dari data */}
            <article 
              className="prose prose-lg md:prose-xl max-w-none text-gray-700 
              prose-headings:text-gray-900 prose-headings:font-bold prose-headings:mt-8 prose-headings:mb-4
              prose-p:leading-relaxed prose-p:mb-6
              prose-a:text-primary prose-a:no-underline hover:prose-a:underline
              prose-img:rounded-xl prose-img:shadow-lg prose-img:my-8"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-gray-100">
              <div className="flex flex-wrap gap-2 items-center">
                <Tag className="w-5 h-5 text-gray-400 mr-2" />
                {article.tags.map((tag, idx) => (
                  <span 
                    key={idx} 
                    className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors cursor-default"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Share Button (Optional UI) */}
            <div className="mt-8 flex justify-center">
                <button className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-primary transition-colors font-medium">
                    <Share2 className="w-4 h-4" />
                    Bagikan Artikel Ini
                </button>
            </div>
          </div>
        </div>

        {/* --- RELATED ARTICLES SECTION --- */}
        {relatedArticles.length > 0 && (
          <section className="container mx-auto px-4 mt-20 max-w-6xl">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Artikel Terkait</h2>
              <Link href="/artikel" className="text-primary font-medium hover:underline">
                Lihat Semua
              </Link>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {relatedArticles.map((item) => (
                <Link key={item.id} href={`/artikel/${item.slug}`} className="group">
                  <div className="bg-white rounded-xl shadow-sm border overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                    <div className="aspect-video relative overflow-hidden">
                      <img 
                        src={item.thumbnail} 
                        alt={item.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-3 left-3 px-2 py-1 bg-black/60 text-white text-xs rounded backdrop-blur-sm">
                        {item.category}
                      </span>
                    </div>
                    <div className="p-5 flex-1 flex flex-col">
                      <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm line-clamp-2 mb-4 flex-1">
                        {item.excerpt}
                      </p>
                      <span className="text-xs text-gray-400">
                        {new Date(item.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}