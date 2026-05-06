'use client';

import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronDown, Heart, Calculator, Tag, ChevronUp } from 'lucide-react';
import { products } from '@/lib/products-data';
import { useState, useMemo } from 'react';

export default function HomeClient() {
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [activeFilter, setActiveFilter] = useState('Semua');
  const [isSeoExpanded, setIsSeoExpanded] = useState(false);

  // Daftar kategori untuk Filter Cepat
  const categories = ['Semua', 'SUV', 'MPV', 'City Car', 'Pickup'];

  const toggleWishlist = (id: number) => {
    if (wishlist.includes(id)) {
      setWishlist(wishlist.filter(item => item !== id));
    } else {
      setWishlist([...wishlist, id]);
    }
  };

  const getPromoInfo = (productName: string) => {
    const name = productName.toLowerCase();
    // Nominal disesuaikan kembali dengan Promo Primadona April 2026
    if (name.includes('vitara')) return { label: 'DISKON', value: '43 JT' };
    if (name.includes('carry')) return { label: 'DISKON', value: '34 JT' };
    if (name.includes('xl7')) return { label: 'DISKON', value: '21 JT' };
    if (name.includes('ertiga')) return { label: 'DISKON', value: '26 JT' };
    if (name.includes('presso')) return { label: 'DISKON', value: '16 JT' };
    if (name.includes('fronx')) return { label: 'DISKON', value: '16 JT' };
    if (name.includes('apv')) return { label: 'DISKON', value: '3 JT' };
    if (name.includes('jimny') || name.includes('jimnny')) return { label: 'BONUS', value: 'Aksesoris' };
    return null;
  };

  // Logika Filter Cepat
  const displayProducts = useMemo(() => {
    if (activeFilter === 'Semua') {
      return products.slice(0, 8); 
    }
    return products.filter(p => p.category?.toLowerCase() === activeFilter.toLowerCase());
  }, [activeFilter]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-32">
          <div className="absolute inset-0 z-0">
            <Image
              src="/hero/suzuki-hero.webp"
              alt="Showroom Dealer Mobil Suzuki Jogja"
              fill
              priority
              className="object-cover"
            />
            {/* TEMA TEGAS & PROFESIONAL: Indigo pekat sebagai dasar */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/95 via-blue-900/90 to-indigo-950/95" />
          </div>

          {/* TEMA CERIA: Variasi efek glow teal dan kuning */}
          <div className="absolute top-20 right-10 w-72 h-72 bg-teal-400/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-yellow-400/15 rounded-full blur-3xl" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mb-16">
            <div className="max-w-6xl mx-auto text-center space-y-8 md:space-y-10">
              <div className="inline-block animate-fade-in">
                {/* Badge: Kuning cerah untuk menarik perhatian namun tetap terstruktur */}
                <span className="px-4 py-2 rounded-full bg-yellow-400/20 text-yellow-300 text-sm font-bold border border-yellow-400/30 tracking-wide uppercase">
                  Dealer Resmi Suzuki Jogja & Sekitarnya
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight animate-fade-in stagger-1 tracking-wide">
                Promo Suzuki Jogja <br />
                {/* Aksen Kuning untuk kesan Ceria & Tegas */}
                <span className="text-yellow-400">XL7 Hybrid, Fronx & Carry Box</span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-indigo-100 max-w-3xl mx-auto animate-fade-in stagger-2 font-medium leading-relaxed">
                Nikmati pengalaman membeli mobil yang mudah, transparan, dan profesional. Tersedia promo spesial hingga puluhan juta rupiah. Dukungan after-sales resmi dan harga paling kompetitif di Yogyakarta siap menanti Anda.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in stagger-3">
                <Link href="#produk-unggulan">
                  {/* CTA Utama: Kuning Solid dengan Teks Biru Gelap (Tegas & Ceria) */}
                  <Button
                    size="lg"
                    className="bg-yellow-400 hover:bg-yellow-500 text-indigo-950 px-8 py-6 rounded-full text-lg font-extrabold transition-all hover:shadow-lg hover:shadow-yellow-400/40 hover:-translate-y-1 w-full sm:w-auto border-0"
                  >
                    Klaim Promo Bulan Ini
                    <ArrowRight className="ml-2 h-5 w-5 stroke-[3px]" />
                  </Button>
                </Link>
                <Link href="/kontak">
                  <Button
                    size="lg"
                    className="bg-white/10 backdrop-blur-md border-2 border-white/40 !text-white hover:bg-white hover:!text-indigo-950 px-8 py-6 rounded-full text-lg font-bold transition-all w-full sm:w-auto flex items-center justify-center"
                  >
                    <Calculator className="mr-2 h-5 w-5" />
                    Hitung Simulasi Kredit
                  </Button>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-10 border-t border-indigo-400/20 animate-fade-in stagger-4">
                {[
                  { value: '1000+', label: 'Unit Terjual' },
                  { value: '500+', label: 'Pelanggan Puas' },
                  { value: '10+', label: 'Tahun Pengalaman' },
                  { value: '8', label: 'Model Tersedia' }
                ].map((stat, idx) => (
                  <div key={idx} className="text-center">
                    {/* Angka Stats dengan warna kuning solid yang ceria */}
                    <div className="text-3xl md:text-4xl font-extrabold text-yellow-400 mb-2 drop-shadow-sm">
                      {stat.value}
                    </div>
                    <div className="text-indigo-100 text-sm md:text-base font-semibold">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="h-10 w-10 text-yellow-400/70" />
          </div>
        </section>

        {/* SECTION PRODUK UNGGULAN */}
        <section id="produk-unggulan" className="py-20 md:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              
              <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-10 gap-6">
                <div className="text-center md:text-left">
                  <h2 className="text-3xl md:text-4xl font-extrabold text-indigo-950 mb-3">Eksplorasi Mobil Suzuki</h2>
                  <p className="text-slate-600 text-lg font-medium">Temukan kendaraan yang paling pas untuk kebutuhan Anda.</p>
                </div>

                <div className="flex flex-wrap justify-center gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveFilter(cat)}
                      className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                        activeFilter === cat 
                        ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200' 
                        : 'bg-white text-slate-600 border-2 border-slate-200 hover:border-indigo-400 hover:text-indigo-600'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                {displayProducts.map((product, index) => {
                  const promo = getPromoInfo(product.name);
                  const productUrl = `/produk/${(product as any).slug || product.id}`;

                  return (
                    <div
                      key={product.id}
                      className="group bg-white rounded-2xl overflow-hidden border-2 border-slate-100 shadow-sm hover:shadow-xl hover:shadow-indigo-600/10 hover:border-indigo-200 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full animate-fade-in"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <Link href={productUrl} className="relative aspect-[4/3] overflow-hidden shrink-0 block">
                        <div className="absolute inset-0 bg-indigo-50/50 group-hover:bg-indigo-100/30 transition-colors z-0"></div>
                        <Image
                          src={product.image}
                          alt={`Promo Harga ${product.name} Jogja`}
                          fill
                          className="object-cover relative z-10 group-hover:scale-110 transition-transform duration-700 ease-out p-4"
                        />
                        
                        <div className="absolute top-4 left-4 z-20">
                          <span className="px-3 py-1 text-xs font-extrabold text-indigo-900 bg-white/90 backdrop-blur-md rounded-md border border-indigo-100 uppercase tracking-wider shadow-sm">
                            {product.category}
                          </span>
                        </div>

                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            toggleWishlist(product.id);
                          }}
                          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/90 backdrop-blur-md shadow-sm flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 group/btn"
                        >
                          <Heart
                            className={`h-4 w-4 transition-all duration-300 ${wishlist.includes(product.id) ? 'fill-rose-500 text-rose-500' : 'text-slate-400 group-hover/btn:text-rose-500'}`}
                            strokeWidth={2.5}
                          />
                        </button>
                      </Link>

                      <div className="p-5 flex flex-col flex-grow border-t border-slate-50">
                        <Link href={productUrl}>
                          <h3 className="text-xl font-extrabold text-indigo-950 mb-1 group-hover:text-indigo-600 transition-colors duration-300 line-clamp-1">
                            {product.name}
                          </h3>
                        </Link>
                        
                        <div className="mt-3 mb-4">
                          <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0.5">Harga Mulai</p>
                          <div className="flex items-baseline gap-1">
                            <span className="text-sm font-medium text-slate-400 line-through mr-1">
                              Rp {parseInt(product.priceText) + 20} Jt
                            </span>
                          </div>
                          <div className="flex items-baseline text-indigo-600">
                            <span className="text-sm font-bold mr-1">Rp</span>
                            <span className="text-2xl font-extrabold">{product.priceText}</span>
                            <span className="text-sm font-bold ml-1">Jutaan</span>
                          </div>
                        </div>

                        {promo && (
                          <div className="mt-auto mb-4 bg-rose-50 border border-rose-100 rounded-xl p-2.5 flex items-center gap-3">
                            <div className="bg-rose-500 text-white rounded-lg p-2 shrink-0 shadow-sm shadow-rose-500/20">
                              <Tag className="w-4 h-4" />
                            </div>
                            <div>
                              <p className="text-[10px] font-extrabold text-rose-600/80 uppercase leading-none mb-1">Potongan Spesial</p>
                              <p className="text-sm font-extrabold text-rose-600 leading-none">{promo.label} {promo.value}</p>
                            </div>
                          </div>
                        )}

                        <div className="grid grid-cols-2 gap-2 mt-auto">
                          <Link href={productUrl} className="w-full">
                            <Button variant="outline" className="w-full bg-white border-2 border-slate-200 text-indigo-950 hover:bg-indigo-50 hover:border-indigo-200 hover:text-indigo-700 text-sm font-bold h-11 transition-colors">
                              Detail
                            </Button>
                          </Link>
                          <Link href="/kontak" className="w-full">
                            <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold h-11 shadow-md shadow-indigo-600/20">
                              Hitung DP
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {displayProducts.length === 0 && (
                <div className="text-center py-12 text-slate-500 font-medium">
                  Mobil untuk kategori {activeFilter} belum tersedia.
                </div>
              )}

              <div className="mt-12 text-center">
                <Link href="/produk">
                  <Button variant="outline" className="px-8 rounded-full border-2 border-slate-200 text-indigo-950 hover:border-indigo-600 hover:text-indigo-600 hover:bg-indigo-50 font-extrabold transition-all h-12">
                    Lihat Seluruh Katalog Suzuki
                    <ArrowRight className="ml-2 w-4 h-4 stroke-[3px]" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION SEO */}
        <section className="py-16 bg-white border-t border-slate-100 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-indigo-950">
                  Pusat Promo Suzuki Jogja & Magelang Terlengkap
                </h2>
                <div className="w-20 h-1.5 bg-gradient-to-r from-yellow-400 to-teal-400 mx-auto mt-4 rounded-full"></div>
              </div>
              
              <div 
                className={`relative overflow-hidden transition-all duration-700 ease-in-out ${
                  isSeoExpanded ? 'max-h-[1000px]' : 'max-h-32'
                }`}
              >
                <div className="space-y-4 text-slate-600 text-base font-medium leading-relaxed text-justify md:text-left">
                  <p>
                    Selamat datang di website representatif Dealer Resmi Suzuki. Jika Anda sedang mencari informasi terkait <strong className="text-indigo-900">Promo Suzuki Jogja</strong> dengan diskon terbesar dan simulasi kredit paling ringan, Anda berada di tempat yang tepat. Kami melayani pembelian kendaraan baik untuk kebutuhan mobil penumpang pribadi maupun armada niaga perusahaan Anda dengan cakupan wilayah Yogyakarta, Sleman, Bantul, Gunungkidul, Kulon Progo, hingga area Magelang dan sekitarnya.
                  </p>
                  <p>
                    Untuk Anda yang mendambakan kenyamanan dan teknologi terkini bersama keluarga, lini produk SUV dan MPV kami siap menemani perjalanan Anda. Nikmati efisiensi bahan bakar ekstra dengan <strong className="text-indigo-900">XL7 Hybrid</strong> dan Ertiga Hybrid, atau tampil lebih tangguh dan modern di jalanan perkotaan bersama <strong className="text-indigo-900">Fronx</strong> dan Grand Vitara. Setiap pembelian mobil penumpang akan mendapatkan berbagai bonus aksesoris menarik serta garansi mesin resmi dari Suzuki Indonesia.
                  </p>
                  <p>
                    Tidak hanya kendaraan penumpang, kami juga sangat memahami kebutuhan para pengusaha dan pebisnis. Oleh karena itu, kami memberikan penawaran harga OTR dan cicilan termurah untuk kendaraan niaga. Suzuki <strong className="text-indigo-900">Carry</strong> Pick Up telah terbukti selama puluhan tahun sebagai rajanya mobil niaga di Indonesia. Kami juga menyediakan varian <strong className="text-indigo-900">Mobil Box</strong> dari Suzuki Carry yang sangat cocok untuk memaksimalkan efisiensi logistik dan distribusi barang usaha Anda. Hubungi tim sales kami sekarang juga untuk mendapatkan pelayanan test drive langsung di rumah Anda.
                  </p>
                </div>
                
                {!isSeoExpanded && (
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent pointer-events-none" />
                )}
              </div>

              <div className="mt-6 text-center">
                <button
                  onClick={() => setIsSeoExpanded(!isSeoExpanded)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-indigo-50 text-indigo-700 hover:bg-indigo-100 font-bold text-sm transition-colors duration-300"
                >
                  {isSeoExpanded ? (
                    <>Tutup Ringkasan <ChevronUp className="w-4 h-4 stroke-[3px]" /></>
                  ) : (
                    <>Baca Selengkapnya <ChevronDown className="w-4 h-4 stroke-[3px]" /></>
                  )}
                </button>
              </div>

            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}