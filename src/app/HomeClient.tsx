'use client';

import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calculator, Sparkles, CheckCircle2, ChevronDown, Heart } from 'lucide-react';
import { products } from '@/lib/products-data';
import { useState, useMemo } from 'react';

export default function HomeClient() {
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [activeFilter, setActiveFilter] = useState('Semua');
  const [isSeoExpanded, setIsSeoExpanded] = useState(false);

  const categories = ['Semua', 'SUV', 'MPV', 'City Car', 'Pickup'];

  const toggleWishlist = (id: number) => {
    setWishlist(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const getPromoInfo = (productName: string) => {
    const name = productName.toLowerCase();
    if (name.includes('vitara')) return { label: 'Diskon', value: '43 Juta' };
    if (name.includes('carry')) return { label: 'Diskon', value: '34 Juta' };
    if (name.includes('xl7')) return { label: 'Diskon', value: '33 Juta' };
    if (name.includes('ertiga')) return { label: 'Diskon', value: '26 Juta' };
    if (name.includes('presso')) return { label: 'Diskon', value: '16 Juta' };
    if (name.includes('fronx')) return { label: 'Diskon', value: '16 Juta' };
    if (name.includes('apv')) return { label: 'Diskon', value: '3 Juta' };
    if (name.includes('jimny') || name.includes('jimnny')) return { label: 'Special', value: 'Bonus Aksesoris' };
    return null;
  };

  const displayProducts = useMemo(() => {
    if (activeFilter === 'Semua') return products.slice(0, 8); 
    return products.filter(p => p.category?.toLowerCase() === activeFilter.toLowerCase());
  }, [activeFilter]);

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F7F9] font-sans selection:bg-amber-400 selection:text-slate-900">
      <Header />

      <main className="flex-1">
        
        {/* NEW HERO SECTION: Split Layout + Modern Shapes */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-white rounded-b-[3rem] lg:rounded-b-[5rem] shadow-sm">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
              
              {/* Kiri: Tipografi & CTA (Tegas & Profesional) */}
              <div className="max-w-2xl space-y-8 z-10 relative">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 font-bold text-sm border border-blue-100 animate-fade-in">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  <span>Promo Spesial Jogja 2026</span>
                </div>
                
                <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-[1.1] tracking-tight animate-fade-in stagger-1">
                  Mulai Perjalanan Baru Bersama <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-blue-400">Suzuki.</span>
                </h1>
                
                <p className="text-lg text-slate-600 font-medium leading-relaxed animate-fade-in stagger-2">
                  Dapatkan penawaran terbaik untuk <strong>XL7 Hybrid, Fronx,</strong> dan armada <strong>Carry</strong>. Proses cepat, transparan, dan DP bisa disesuaikan dengan budget Anda.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 animate-fade-in stagger-3">
                  <Link href="#katalog">
                    <Button size="lg" className="w-full sm:w-auto h-16 px-8 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg shadow-xl shadow-blue-600/20 transition-all hover:-translate-y-1">
                      Lihat Promo Kendaraan
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                  {/* UPDATE: Arahkan ke link eksternal simulasi kredit */}
                  <Link href="https://www.suzukiautojogja.com/simulasi-kredit" target="_blank" rel="noopener noreferrer">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto h-16 px-8 rounded-2xl border-2 border-slate-200 text-slate-700 hover:border-amber-400 hover:bg-amber-50 hover:text-amber-700 font-bold text-lg transition-all">
                      <Calculator className="mr-2 w-5 h-5" />
                      Hitung Kredit
                    </Button>
                  </Link>
                </div>

                <div className="flex items-center gap-6 pt-4 animate-fade-in stagger-4">
                  <div className="flex items-center gap-6 pt-4 animate-fade-in stagger-4">
                      <div className="flex -space-x-4">
                        {[
                          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
                          "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80",
                          "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=100&q=80",
                          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
                        ].map((url, i) => (
                          <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-slate-200 overflow-hidden relative shadow-sm">
                            <Image 
                              src={url} 
                              alt={`Pelanggan Suzuki Jogja ${i + 1}`} 
                              fill 
                              className="object-cover" 
                              unoptimized 
                            />
                          </div>
                        ))}
                      </div>
                      
                    </div>
                  <div className="text-sm font-bold text-slate-600">
                    Dipercaya oleh <span className="text-blue-600 text-lg font-black">500+</span><br/>Keluarga di Jogja
                  </div>
                </div>
              </div>

              {/* Kanan: Visual Dinamis (Ceria) */}
              <div className="relative h-[400px] lg:h-[600px] w-full animate-fade-in stagger-2">
                {/* Latar Belakang Shape Ceria */}
                <div className="absolute inset-0 bg-amber-400 rounded-[3rem] rotate-3 scale-95 origin-bottom-right transition-transform hover:rotate-6 duration-500"></div>
                <div className="absolute inset-0 bg-blue-600 rounded-[3rem] -rotate-3 scale-95 origin-top-left transition-transform hover:-rotate-6 duration-500"></div>
                
                {/* Kontainer Gambar Utama */}
                <div className="absolute inset-0 bg-slate-100 rounded-[3rem] overflow-hidden border-4 border-white shadow-2xl">
                  <Image
                    src="/hero/suzuki-hero.webp"
                    alt="Suzuki XL7 Promo"
                    fill
                    className="object-cover"
                    priority
                  />
                  {/* Overlay Gradient Halus */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                  
                  {/* Floating Badge di dalam gambar */}
                  <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md rounded-2xl p-4 flex items-center justify-between shadow-lg">
                    <div>
                      <p className="text-sm font-bold text-slate-500">Promo Unggulan</p>
                      <p className="text-xl font-black text-slate-900">XL7 Hybrid</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-slate-500">Diskon Hingga</p>
                      <p className="text-2xl font-black text-red-600">33 Jt</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* NEW SECTION: Fitur Layanan (Bento Box Style) */}
        <section className="py-12 -mt-12 relative z-20 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Proses Cepat & Mudah', desc: 'Data dibantu sampai approval leasing.', color: 'bg-blue-600 text-white' },
              { title: 'Bebas Pilih Leasing', desc: 'Kerjasama dengan banyak lembaga pembiayaan terpercaya.', color: 'bg-amber-400 text-slate-900' },
              { title: 'Layanan Test Drive', desc: 'Mobil kami antar ke rumah atau kantor Anda.', color: 'bg-slate-900 text-white' },
            ].map((feature, idx) => (
              <div key={idx} className={`${feature.color} p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition-transform duration-300`}>
                <CheckCircle2 className="w-8 h-8 mb-4 opacity-80" />
                <h3 className="text-xl font-black mb-2">{feature.title}</h3>
                <p className="font-medium opacity-90">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* NEW CATALOG SECTION: Modern App-Like Grid */}
        <section id="katalog" className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header Katalog & Filter */}
            <div className="flex flex-col lg:flex-row justify-between items-center gap-8 mb-16">
              <div className="text-center lg:text-left">
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">Pilih Mobil Impianmu</h2>
                <p className="text-lg text-slate-600 font-medium">Temukan spesifikasi dan promo yang paling pas untuk Anda.</p>
              </div>

              {/* Filter Ceria dengan gaya "Pill" besar */}
              <div className="flex flex-wrap justify-center gap-3 bg-white p-2 rounded-full shadow-sm border border-slate-200">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveFilter(cat)}
                    className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                      activeFilter === cat 
                      ? 'bg-blue-600 text-white shadow-md' 
                      : 'bg-transparent text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Grid Produk Baru: Edge-to-Edge Premium Layout */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
              {displayProducts.map((product, index) => {
                const promo = getPromoInfo(product.name);
                const productUrl = `/produk/${(product as any).slug || product.id}`;

                return (
                  <div
                    key={product.id}
                    className="group relative bg-white rounded-[2rem] overflow-hidden border border-slate-200 hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 flex flex-col"
                  >
                    {/* Image Section - Gambar Full Edge-to-Edge */}
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                      <Link href={productUrl} className="block w-full h-full">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                        />
                        {/* Overlay gelap halus yang muncul saat di-hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </Link>

                      {/* Wishlist Button - Mengambang di atas gambar */}
                      <button
                        onClick={(e) => { e.preventDefault(); toggleWishlist(product.id); }}
                        className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all shadow-sm z-10"
                      >
                        <Heart className={`w-5 h-5 ${wishlist.includes(product.id) ? 'fill-red-500 text-red-500' : 'text-slate-400'}`} />
                      </button>

                      {/* Category Badge - Sudut kiri atas */}
                      <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-xl z-10">
                        <span className="text-[10px] font-black text-white uppercase tracking-wider">{product.category}</span>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6 flex-1 flex flex-col relative">
                      
                      {/* Floating Promo Badge - Aksen Playful & Konversi */}
                      {promo && (
                        <div className="absolute -top-6 right-6 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 px-4 py-2 rounded-2xl shadow-lg transform rotate-3 group-hover:rotate-0 transition-transform duration-300 border-2 border-white z-20">
                          <span className="text-[9px] font-black uppercase block leading-none mb-1 opacity-80">{promo.label}</span>
                          <span className="text-sm font-black leading-none">{promo.value}</span>
                        </div>
                      )}

                      <Link href={productUrl} className="block mb-2 mt-2">
                        <h3 className="text-2xl font-black text-slate-900 group-hover:text-blue-600 transition-colors">
                          {product.name}
                        </h3>
                      </Link>
                      
                      <div className="mb-6">
                        <p className="text-xs font-bold text-slate-400 mb-1 uppercase tracking-wider">Harga OTR</p>
                        <div className="flex items-start text-slate-900">
                          <span className="text-sm font-bold mt-1.5 mr-1 text-slate-500">Rp</span>
                          <span className="text-3xl font-black tracking-tight">{product.priceText}</span>
                          <span className="text-sm font-bold ml-1 mt-1.5 text-slate-500">Jt</span>
                        </div>
                      </div>

                      {/* Tombol Aksi - Layout Asimetris Modern */}
                      <div className="mt-auto flex items-center gap-3">
                        {/* UPDATE: Hitung DP dikembalikan ke /kontak */}
                        <Link href="/kontak" className="flex-1">
                          <Button className="w-full rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold h-12 transition-all shadow-md shadow-blue-600/20 group-hover:shadow-blue-600/40">
                            Hitung DP
                          </Button>
                        </Link>
                        <Link href={productUrl}>
                          <Button variant="outline" size="icon" className="w-12 h-12 rounded-xl border-slate-200 text-slate-600 hover:border-slate-900 hover:bg-slate-900 hover:text-white transition-all group/btn">
                            {/* Ikon panah miring yang akan lurus saat di-hover */}
                            <ArrowRight className="w-5 h-5 -rotate-45 group-hover/btn:rotate-0 transition-transform duration-300" />
                          </Button>
                        </Link>
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-16 text-center">
              <Link href="/produk">
                <Button className="rounded-full bg-white border-2 border-slate-200 text-slate-900 hover:border-slate-900 px-10 h-14 text-lg font-bold transition-all shadow-sm">
                  Tampilkan Semua Kendaraan
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* NEW SEO SECTION: Editorial / Magazine Layout */}
        <section className="py-24 bg-white rounded-t-[3rem] lg:rounded-t-[5rem] border-t border-slate-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              
              <div className="grid lg:grid-cols-12 gap-12 items-start">
                {/* Heading Area */}
                <div className="lg:col-span-5">
                  <div className="sticky top-24">
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight mb-6">
                      Partner Otomotif Terpercaya Anda di Yogyakarta.
                    </h2>
                    <div className="w-20 h-2 bg-blue-600 rounded-full mb-6"></div>
                    <p className="text-lg text-slate-500 font-medium">
                      Informasi resmi seputar produk, promo, dan layanan purna jual Suzuki.
                    </p>
                  </div>
                </div>

                {/* Content Area */}
                <div className="lg:col-span-7">
                  <div className={`relative overflow-hidden transition-all duration-700 ${isSeoExpanded ? 'max-h-[2000px]' : 'max-h-60'}`}>
                    <div className="space-y-6 text-slate-600 text-lg leading-relaxed font-medium">
                      <p>
                        Selamat datang di portal informasi resmi Dealer Suzuki. Jika Anda mencari informasi akurat mengenai <strong>Promo Suzuki Jogja</strong>, harga OTR terbaru, hingga simulasi kredit teringan, kami siap melayani Anda. Area jangkauan kami mencakup seluruh wilayah Yogyakarta, Sleman, Bantul, Gunungkidul, Kulon Progo, hingga Magelang.
                      </p>
                      
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 my-8">
                        <h4 className="text-xl font-black text-slate-900 mb-3">Mobil Penumpang Modern</h4>
                        <p>Dambakan kenyamanan dan efisiensi bersama keluarga? Lini produk SUV dan MPV kami seperti <strong>XL7 Hybrid</strong> dan Ertiga Hybrid menawarkan teknologi pintar ramah lingkungan. Atau tampil beda di jalanan perkotaan bersama <strong>Fronx</strong> dan Grand Vitara.</p>
                      </div>

                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <h4 className="text-xl font-black text-slate-900 mb-3">Ketangguhan Armada Niaga</h4>
                        <p>Untuk mendukung laju bisnis Anda, kami memberikan kemudahan kepemilikan armada niaga. Suzuki <strong>Carry Pick Up</strong> terbukti legendaris. Kami juga sedia <strong>Mobil Box</strong> dari basis Carry yang ideal untuk keamanan distribusi barang.</p>
                      </div>
                    </div>
                    
                    {!isSeoExpanded && (
                      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
                    )}
                  </div>

                  <button
                    onClick={() => setIsSeoExpanded(!isSeoExpanded)}
                    className="mt-8 flex items-center gap-2 text-blue-600 font-bold hover:text-blue-800 transition-colors bg-blue-50 px-6 py-3 rounded-full"
                  >
                    {isSeoExpanded ? (
                      <>Tutup Ringkasan <ChevronDown className="w-5 h-5 rotate-180" /></>
                    ) : (
                      <>Baca Selengkapnya <ChevronDown className="w-5 h-5" /></>
                    )}
                  </button>
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