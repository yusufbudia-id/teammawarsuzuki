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
    if (name.includes('fronx')) return { label: 'DISKON', value: '17 JT' };
    if (name.includes('xl7')) return { label: 'DISKON', value: '28 JT' };
    if (name.includes('carry')) return { label: 'DISKON', value: '37 JT' };
    if (name.includes('vitara')) return { label: 'DISKON', value: '28 JT' };
    if (name.includes('presso')) return { label: 'DISKON', value: '16 JT' };
    if (name.includes('ertiga')) return { label: 'DISKON', value: '26 JT' };
    if (name.includes('apv')) return { label: 'DISKON', value: '5 JT' };
    if (name.includes('jimny') || name.includes('jimnny')) return { label: 'BONUS', value: '50 JT' };
    return null;
  };

  // Logika Filter Cepat
  const displayProducts = useMemo(() => {
    if (activeFilter === 'Semua') {
      return products.slice(0, 8); // Tampilkan 8 jika semua
    }
    return products.filter(p => p.category?.toLowerCase() === activeFilter.toLowerCase());
  }, [activeFilter]);

  return (
    // Warna Background Utama diubah ke slate-50 untuk memecah warna putih kaku (Aturan 60-30-10)
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/suzuki-hero.jpg"
              alt="Showroom Dealer Mobil Suzuki Jogja"
              fill
              priority
              className="object-cover"
            />
            {/* Overlay sedikit digelapkan untuk visibilitas teks yang lebih baik */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-black/95" />
          </div>

          <div className="absolute top-20 right-10 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-6xl mx-auto text-center space-y-8">
              <div className="inline-block animate-fade-in">
                <span className="px-4 py-2 rounded-full bg-blue-600/20 text-blue-300 text-sm font-semibold border border-blue-500/30 tracking-wide">
                  Dealer Resmi Suzuki Jogja & Sekitarnya
                </span>
              </div>

              {/* Tipografi: Hierarki diperjelas dengan tracking-tight dan warna spesifik */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight animate-fade-in stagger-1 tracking-tight">
                Promo Suzuki Jogja <br />
                <span className="text-blue-500">XL7 Hybrid, Fronx & Carry Box</span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto animate-fade-in stagger-2 font-light leading-relaxed">
                Nikmati pengalaman membeli mobil yang mudah, transparan, dan profesional. Tersedia promo spesial hingga puluhan juta rupiah. Dukungan after-sales resmi dan harga paling kompetitif di Yogyakarta siap menanti Anda.
              </p>

              {/* Perbaikan CTA: Lebih Spesifik ke Action */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in stagger-3">
                <Link href="#produk-unggulan">
                  <Button
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-full text-lg font-semibold transition-all hover:shadow-lg hover:shadow-blue-600/30 hover:-translate-y-1 w-full sm:w-auto"
                  >
                    Klaim Promo Bulan Ini
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/kontak">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-slate-300/30 text-white hover:bg-white hover:text-slate-900 px-8 py-6 rounded-full text-lg font-semibold transition-all w-full sm:w-auto"
                  >
                    <Calculator className="mr-2 h-5 w-5" />
                    Minta Simulasi Kredit
                  </Button>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 pt-8 border-t border-white/10 animate-fade-in stagger-4">
                {[
                  { value: '1000+', label: 'Unit Terjual' },
                  { value: '500+', label: 'Pelanggan Puas' },
                  { value: '10+', label: 'Tahun Pengalaman' },
                  { value: '8', label: 'Model Tersedia' }
                ].map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-3xl md:text-4xl font-extrabold text-blue-500 mb-1">{stat.value}</div>
                    <div className="text-slate-400 text-sm md:text-base font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="h-10 w-10 text-slate-400" />
          </div>
        </section>

        {/* SECTION PRODUK UNGGULAN */}
        <section id="produk-unggulan" className="py-20 md:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              
              {/* Header Section & Fitur Filter Cepat */}
              <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-10 gap-6">
                <div className="text-center md:text-left">
                  <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3 tracking-tight">Eksplorasi Mobil Suzuki</h2>
                  <p className="text-slate-600 text-lg">Temukan kendaraan yang paling pas untuk kebutuhan Anda.</p>
                </div>

                {/* Tambahan UX: Filter Kategori Cepat */}
                <div className="flex flex-wrap justify-center gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveFilter(cat)}
                      className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                        activeFilter === cat 
                        ? 'bg-blue-600 text-white shadow-md' 
                        : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100 hover:border-slate-300'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Grid Produk */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                {displayProducts.map((product, index) => {
                  const promo = getPromoInfo(product.name);
                  const productUrl = `/produk/${(product as any).slug || product.id}`;

                  return (
                    // Perbaikan: rounded-2xl, border halus, bayangan elegan (Elevasi Visual)
                    <div
                      key={product.id}
                      className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full animate-fade-in"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <Link href={productUrl} className="relative aspect-[4/3] overflow-hidden shrink-0 block">
                        {/* Latar Belakang Netral untuk Gambar Mobil */}
                        <div className="absolute inset-0 bg-slate-100/50 group-hover:bg-slate-100/80 transition-colors z-0"></div>
                        <Image
                          src={product.image}
                          alt={`Promo Harga ${product.name} Jogja`}
                          fill
                          className="object-cover relative z-10 group-hover:scale-110 transition-transform duration-700 ease-out p-4"
                        />
                        
                        {/* Badge Kategori */}
                        <div className="absolute top-4 left-4 z-20">
                          <span className="px-3 py-1 text-xs font-bold text-slate-700 bg-white/90 backdrop-blur-md rounded-md border border-slate-200/50 uppercase tracking-wider">
                            {product.category}
                          </span>
                        </div>

                        {/* Wishlist Button */}
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            toggleWishlist(product.id);
                          }}
                          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/90 backdrop-blur-md shadow-sm flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 group/btn"
                        >
                          <Heart
                            className={`h-4 w-4 transition-all duration-300 ${wishlist.includes(product.id) ? 'fill-red-500 text-red-500' : 'text-slate-400 group-hover/btn:text-red-500'}`}
                            strokeWidth={2.5}
                          />
                        </button>
                      </Link>

                      {/* Detail & Hierarki Harga */}
                      <div className="p-5 flex flex-col flex-grow">
                        <Link href={productUrl}>
                          <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors duration-300 tracking-tight line-clamp-1">
                            {product.name}
                          </h3>
                        </Link>
                        
                        <div className="mt-3 mb-4">
                          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-0.5">Harga Mulai</p>
                          <div className="flex items-baseline gap-1">
                            <span className="text-sm font-medium text-slate-400 line-through mr-1">
                              {/* Simulasi Harga Normal (Harga Coret) */}
                              Rp {parseInt(product.priceText) + 20} Jt
                            </span>
                          </div>
                          <div className="flex items-baseline text-blue-600">
                            <span className="text-sm font-bold mr-1">Rp</span>
                            <span className="text-2xl font-black tracking-tight">{product.priceText}</span>
                            <span className="text-sm font-bold ml-1">Jutaan</span>
                          </div>
                        </div>

                        {/* Promo Badge yang lebih bersih dan terbaca */}
                        {promo && (
                          <div className="mt-auto mb-4 bg-red-50 border border-red-100 rounded-lg p-2.5 flex items-center gap-3">
                            <div className="bg-red-600 text-white rounded-md p-1.5 shrink-0">
                              <Tag className="w-4 h-4" />
                            </div>
                            <div>
                              <p className="text-[10px] font-bold text-red-600/80 uppercase leading-none mb-1">Potongan Spesial</p>
                              <p className="text-sm font-black text-red-600 leading-none">{promo.label} {promo.value}</p>
                            </div>
                          </div>
                        )}

                        {/* CTA Spesifik di dalam Card */}
                        <div className="grid grid-cols-2 gap-2 mt-auto">
                          <Link href={productUrl} className="w-full">
                            <Button variant="outline" className="w-full bg-white border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-blue-600 text-sm font-semibold h-11">
                              Detail
                            </Button>
                          </Link>
                          <Link href="/kontak" className="w-full">
                            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold h-11 shadow-md shadow-blue-500/20">
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
                <div className="text-center py-12 text-slate-500">
                  Mobil untuk kategori {activeFilter} belum tersedia.
                </div>
              )}

              <div className="mt-12 text-center">
                <Link href="/produk">
                  <Button variant="outline" className="px-8 rounded-full border-2 border-slate-200 text-slate-600 hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 font-bold transition-all h-12">
                    Lihat Seluruh Katalog Suzuki
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* PERBAIKAN: SECTION SEO DENGAN FITUR ACCORDION (Mencegah Wall of Text) */}
        <section className="py-16 bg-white border-t border-slate-100 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Pusat Promo Suzuki Jogja & Magelang Terlengkap
                </h2>
                <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
              </div>
              
              {/* Kontainer Teks dengan Animasi Ketinggian */}
              <div 
                className={`relative overflow-hidden transition-all duration-700 ease-in-out ${
                  isSeoExpanded ? 'max-h-[1000px]' : 'max-h-32'
                }`}
              >
                <div className="space-y-4 text-slate-600 text-base leading-relaxed text-justify md:text-left">
                  <p>
                    Selamat datang di website representatif Dealer Resmi Suzuki. Jika Anda sedang mencari informasi terkait <strong>Promo Suzuki Jogja</strong> dengan diskon terbesar dan simulasi kredit paling ringan, Anda berada di tempat yang tepat. Kami melayani pembelian kendaraan baik untuk kebutuhan mobil penumpang pribadi maupun armada niaga perusahaan Anda dengan cakupan wilayah Yogyakarta, Sleman, Bantul, Gunungkidul, Kulon Progo, hingga area Magelang dan sekitarnya.
                  </p>
                  <p>
                    Untuk Anda yang mendambakan kenyamanan dan teknologi terkini bersama keluarga, lini produk SUV dan MPV kami siap menemani perjalanan Anda. Nikmati efisiensi bahan bakar ekstra dengan <strong>XL7 Hybrid</strong> dan Ertiga Hybrid, atau tampil lebih tangguh dan modern di jalanan perkotaan bersama <strong>Fronx</strong> dan Grand Vitara. Setiap pembelian mobil penumpang akan mendapatkan berbagai bonus aksesoris menarik serta garansi mesin resmi dari Suzuki Indonesia.
                  </p>
                  <p>
                    Tidak hanya kendaraan penumpang, kami juga sangat memahami kebutuhan para pengusaha dan pebisnis. Oleh karena itu, kami memberikan penawaran harga OTR dan cicilan termurah untuk kendaraan niaga. Suzuki <strong>Carry</strong> Pick Up telah terbukti selama puluhan tahun sebagai rajanya mobil niaga di Indonesia. Kami juga menyediakan varian <strong>Mobil Box</strong> dari Suzuki Carry yang sangat cocok untuk memaksimalkan efisiensi logistik dan distribusi barang usaha Anda. Hubungi tim sales kami sekarang juga untuk mendapatkan pelayanan test drive langsung di rumah Anda.
                  </p>
                </div>
                
                {/* Efek Gradasi (Fading) jika belum di-expand */}
                {!isSeoExpanded && (
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent pointer-events-none" />
                )}
              </div>

              {/* Tombol Read More / Accordion */}
              <div className="mt-6 text-center">
                <button
                  onClick={() => setIsSeoExpanded(!isSeoExpanded)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200 font-semibold text-sm transition-colors duration-300"
                >
                  {isSeoExpanded ? (
                    <>Tutup Ringkasan <ChevronUp className="w-4 h-4" /></>
                  ) : (
                    <>Baca Selengkapnya <ChevronDown className="w-4 h-4" /></>
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