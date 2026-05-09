'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from 'next/link';
import { 
  Download, Car, Settings, Zap, Shield, 
  Wrench, Ruler, Users as UsersIcon, 
  Droplets, ChevronRight, Gift, HelpCircle, 
  MessageCircle, Sparkles
} from 'lucide-react';
import { products, getProductBySlug } from '@/lib/products-data';
import { openWhatsApp } from '@/lib/whatsapp';

const leasingPartners = [
  { name: 'Suzuki Finance', src: '/images/leasing/sufi.webp' },
  { name: 'BCA Finance', src: '/images/leasing/bca.webp' },
  { name: 'Mandiri Tunas Finance', src: '/images/leasing/mtf.webp' },
  { name: 'Adira Finance', src: '/images/leasing/adira.webp' },
  { name: 'Oto Finance', src: '/images/leasing/muf.webp' },
  { name: 'Clipan Finance', src: '/images/leasing/clipan.webp' },
  { name: 'Indomobil Finance', src: '/images/leasing/imfi.webp' },
];

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [selectedImage, setSelectedImage] = useState(0);
  
  const slug = params.slug as string; 
  const product = getProductBySlug(slug);

  useEffect(() => {
    if (!product) {
      router.push('/produk');
    }
  }, [product, router]);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col bg-[#F4F7F9]">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <p className="text-xl font-bold text-slate-500 animate-pulse">Memuat data kendaraan...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const otherProducts = products.filter(p => p.id !== product.id).slice(0, 3);

  const handleTestDrive = () => {
      const message = `Halo admin Suzuki!!\n\nSaya ingin memesan Test Drive untuk *${product.name}*. Mohon info jadwal dan lokasinya ya..`;
      openWhatsApp(message);
  };

  const handleAjukanKredit = (variantName?: string, region?: string) => {
    const regionText = region ? ` (${region})` : '';
    const targetName = variantName ? `${product.name} - ${variantName}${regionText}` : product.name;
    const message = `Halo admin Suzuki!!\n\nSaya tertarik untuk mengajukan kredit untuk unit *${targetName}*. Mohon info simulasi kredit dan penawaran terbaiknya ya..`;
    openWhatsApp(message);
  };

  const getSavings = (otr: string, nett: string) => {
    const numOtr = parseInt(otr.replace(/[^0-9]/g, ''));
    const numNett = parseInt(nett.replace(/[^0-9]/g, ''));
    if (numOtr > numNett) {
      const diff = numOtr - numNett;
      return `Hemat Rp ${(diff / 1000000).toLocaleString('id-ID')} Jt`;
    }
    return null;
  };

  const VariantCard = ({ variant, priceData, region, idx }: any) => {
    const savings = getSavings(priceData.priceOtr, priceData.priceNett);
    const showOtr = priceData.priceOtr !== priceData.priceNett;
    
    return (
      <Card
        className="border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-500 transform hover:-translate-y-1 rounded-[1.5rem] bg-white mb-4 group overflow-hidden animate-fade-in"
        style={{ animationDelay: `${idx * 50}ms` }}
      >
        <CardContent className="p-5 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
            <div className="flex-1">
              <h4 className="text-xl font-black text-slate-900 group-hover:text-blue-600 transition-colors mb-2 tracking-tight">
                {variant.name}
              </h4>
              
              <div className="flex items-center gap-3 mb-1 min-h-[24px]">
                {showOtr && (
                  <p className="text-sm font-bold text-slate-400 line-through decoration-slate-300">
                    {priceData.priceOtr}
                  </p>
                )}
                {savings && (
                  <span className="text-[10px] font-black text-red-600 bg-red-50 px-3 py-1 rounded-full border border-red-100 uppercase tracking-widest">
                    {savings}
                  </span>
                )}
              </div>
              
              <p className="text-3xl font-black text-slate-900 tracking-tighter">
                {priceData.priceNett}
              </p>
            </div>
            
            <Button
              onClick={() => handleAjukanKredit(variant.name, region)}
              className="w-full sm:w-auto bg-[#25D366] hover:bg-[#1DA851] text-white font-bold whitespace-nowrap shadow-lg shadow-[#25D366]/20 transition-all rounded-xl h-12 px-6 group-hover:scale-105"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Chat Sales
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F7F9] font-sans selection:bg-amber-400 selection:text-slate-900 pb-20 md:pb-0 relative">
      <Header />
      <main className="flex-1">
        
        {/* HERO SECTION - Playful Corporate Style */}
        <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-white rounded-b-[3rem] lg:rounded-b-[5rem] shadow-sm z-20 overflow-hidden">
          {/* Latar Belakang Shape Ceria */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-3xl opacity-60 -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-50 rounded-full blur-3xl opacity-60 translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              
              {/* Left: Info Text */}
              <div className="flex flex-col justify-center animate-fade-in stagger-1 order-2 lg:order-1">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 font-bold text-sm border border-blue-100 w-fit mb-6">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  <span>Unit Tersedia</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-4 tracking-tight leading-[1.1]">
                  Suzuki <br className="hidden sm:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-blue-400">{product.name}</span>
                </h1>
                
                <p className="text-lg text-slate-500 font-medium mb-8 leading-relaxed max-w-xl">
                  {product.description}
                </p>

                <div className="bg-slate-50 border border-slate-100 p-6 rounded-[2rem] mb-10 shadow-sm max-w-md">
                  <span className="text-slate-400 text-sm font-bold uppercase tracking-wider block mb-1">Harga Mulai</span>
                  <div className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">
                    <span className="text-xl font-bold mr-1 text-slate-500">Rp</span>{product.priceText} <span className="text-xl font-bold ml-1 text-slate-500">Jutaan</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    onClick={handleTestDrive}
                    className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 rounded-full shadow-xl shadow-blue-600/20 font-black h-14 transition-transform hover:-translate-y-1"
                  >
                    <Car className="mr-2 h-5 w-5" /> Pesan Test Drive
                  </Button>
                  {product.brochureUrl && (
                    <Button
                      size="lg"
                      variant="outline"
                      onClick={() => window.open(product.brochureUrl, '_blank')}
                      className="border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900 text-lg px-8 rounded-full font-bold h-14 transition-transform hover:-translate-y-1 bg-white shadow-sm"
                    >
                      <Download className="mr-2 h-5 w-5 text-blue-600" /> Unduh Brosur
                    </Button>
                  )}
                </div>
              </div>

              {/* Right: Image Gallery */}
              <div className="space-y-4 animate-fade-in order-1 lg:order-2">
                <div className="relative aspect-[4/3] rounded-[3rem] overflow-hidden border-8 border-slate-50 shadow-2xl shadow-blue-900/10 bg-white flex items-center justify-center p-8">
                  <img
                    src={product.gallery?.[selectedImage] || product.image}
                    alt={product.name}
                    className="w-full h-full object-contain hover:scale-105 transition-transform duration-700"
                  />
                  {/* Category Badge */}
                  <div className="absolute top-6 left-6 bg-slate-900/80 backdrop-blur-md px-4 py-2 rounded-xl z-10">
                    <span className="text-xs font-black text-white uppercase tracking-wider">{product.category}</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-3 md:gap-4">
                  {product.gallery?.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(idx)}
                      className={`relative aspect-[4/3] rounded-2xl overflow-hidden border-4 transition-all duration-300 bg-white ${
                        selectedImage === idx ? 'border-blue-500 shadow-md scale-105' : 'border-transparent opacity-70 hover:opacity-100 hover:border-slate-200'
                      }`}
                    >
                      <img
                        src={img}
                        alt={`${product.name} ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* PRICING & SPECS (BENTO BOX LAYOUT) */}
        <section className="py-20 relative z-10 -mt-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
                Daftar Harga & Varian
              </h2>
              <p className="text-slate-500 font-medium max-w-2xl mx-auto text-lg">
                Pilih varian {product.name} yang paling sesuai dengan gaya Anda. Nikmati penawaran khusus wilayah DIY & Jawa Tengah.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
              
              {/* TABS PRICING */}
              <div className="lg:col-span-7 order-2 lg:order-1 animate-fade-in stagger-1">
                <Tabs defaultValue="plat-ab" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-8 bg-white p-2 rounded-[2rem] shadow-sm border border-slate-100">
                    <TabsTrigger 
                      value="plat-ab" 
                      className="rounded-[1.5rem] data-[state=active]:bg-blue-600 data-[state=active]:text-white font-black py-4 text-slate-500 transition-all duration-300 text-xs sm:text-sm uppercase tracking-wider"
                    >
                      Plat AB (Jogja)
                    </TabsTrigger>
                    <TabsTrigger 
                      value="plat-aa-r" 
                      className="rounded-[1.5rem] data-[state=active]:bg-blue-600 data-[state=active]:text-white font-black py-4 text-slate-500 transition-all duration-300 text-xs sm:text-sm uppercase tracking-wider"
                    >
                      Plat AA & R
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="plat-ab" className="mt-0 outline-none">
                    <div className="space-y-4">
                      {product.variants[0]?.bonus && (
                        <div className="mb-8 p-6 bg-gradient-to-br from-amber-50 to-amber-100/50 border border-amber-200 rounded-[2rem] flex items-start gap-5 shadow-sm">
                          <div className="bg-white p-3 rounded-2xl shadow-sm shrink-0">
                            <Gift className="h-6 w-6 text-amber-500" />
                          </div>
                          <div>
                            <h4 className="font-black text-slate-900 text-sm mb-1 uppercase tracking-wider">Super Promo Bulan Ini</h4>
                            <p className="text-sm font-medium text-slate-600 leading-relaxed">{product.variants[0].bonus}</p>
                          </div>
                        </div>
                      )}
                      {product.variants.map((variant, idx) => (
                        <VariantCard key={`ab-${idx}`} idx={idx} variant={variant} priceData={variant.priceAB} region="Plat AB" />
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="plat-aa-r" className="mt-0 outline-none">
                    <div className="space-y-4">
                      {product.variants[0]?.bonus && (
                        <div className="mb-8 p-6 bg-gradient-to-br from-amber-50 to-amber-100/50 border border-amber-200 rounded-[2rem] flex items-start gap-5 shadow-sm">
                          <div className="bg-white p-3 rounded-2xl shadow-sm shrink-0">
                            <Gift className="h-6 w-6 text-amber-500" />
                          </div>
                          <div>
                            <h4 className="font-black text-slate-900 text-sm mb-1 uppercase tracking-wider">Super Promo Wilayah Jateng</h4>
                            <p className="text-sm font-medium text-slate-600 leading-relaxed">{product.variants[0].bonus}</p>
                          </div>
                        </div>
                      )}
                      {product.variants.map((variant, idx) => (
                        <VariantCard key={`aar-${idx}`} idx={idx} variant={variant} priceData={variant.priceAAR} region="Plat AA/R" />
                      ))}
                      <div className="bg-slate-200/50 rounded-2xl p-4 mt-6 text-center">
                        <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">
                          *Berlaku untuk Kedu, Banyumas, Cilacap, Purworejo, Kebumen, Temanggung, Wonosobo & Magelang.
                        </p>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>

              {/* SPECIFICATIONS */}
              <div className="lg:col-span-5 order-1 lg:order-2 animate-fade-in stagger-2">
                <div className="bg-slate-900 rounded-[3rem] shadow-2xl overflow-hidden sticky top-28 border-8 border-slate-800">
                  <div className="p-8 md:p-10 border-b border-slate-800 flex items-center gap-4 bg-slate-950">
                    <div className="bg-blue-600 p-3 rounded-2xl">
                      <Settings className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-black text-white tracking-tight">
                      Spesifikasi Teknis
                    </h3>
                  </div>
                  <div className="p-8 md:p-10 bg-slate-900">
                    <div className="space-y-6">
                      {[
                        { label: 'Mesin', val: product.specifications.engine, icon: <Wrench className="w-5 h-5 text-slate-500" /> },
                        { label: 'Transmisi', val: product.specifications.transmission, icon: <Settings className="w-5 h-5 text-slate-500" /> },
                        { label: 'Bahan Bakar', val: product.specifications.fuel, icon: <Droplets className="w-5 h-5 text-slate-500" /> },
                        { label: 'Tenaga', val: product.specifications.power, icon: <Zap className="w-5 h-5 text-amber-500" /> },
                        { label: 'Torsi', val: product.specifications.torque, icon: <Shield className="w-5 h-5 text-blue-500" /> },
                        { label: 'Kapasitas', val: product.specifications.seating, icon: <UsersIcon className="w-5 h-5 text-slate-500" /> },
                        { label: 'Dimensi', val: product.specifications.dimensions, icon: <Ruler className="w-5 h-5 text-slate-500" /> }
                      ].map((spec, i) => (
                        <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-800 last:border-0 last:pb-0">
                          <span className="text-sm font-bold text-slate-400 flex items-center gap-3 uppercase tracking-wider">
                            {spec.icon} {spec.label}
                          </span>
                          <span className="text-sm font-black text-white sm:text-right ml-8 sm:ml-0">
                            {spec.val}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* OTHER PRODUCTS */}
        <section className="py-20 relative z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 animate-fade-in">
              <h3 className="text-3xl font-black text-slate-900 tracking-tight">Eksplorasi Model Lain</h3>
              <Link href="/produk" className="text-blue-600 hover:text-blue-700 transition-colors text-sm font-black uppercase tracking-widest flex items-center bg-blue-50 px-4 py-2 rounded-full w-fit">
                Lihat Semua <ChevronRight className="w-4 h-4 ml-1"/>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 animate-fade-in stagger-1">
              {otherProducts.map((other) => (
                <Link href={`/produk/${other.slug}`} key={other.id}>
                  <Card className="border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-500 cursor-pointer bg-white group rounded-[2rem] overflow-hidden hover:-translate-y-1">
                    <CardContent className="p-6 flex items-center gap-6">
                      <div className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0 bg-slate-50 border border-slate-100 p-2">
                        <img src={other.image} alt={other.name} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      <div>
                        <h4 className="font-black text-xl text-slate-900 group-hover:text-blue-600 transition-colors mb-1">{other.name}</h4>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Mulai Rp {other.priceText} Jt</p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ & TRANSISI FOOTER (ROUNDED-T) */}
        <section className="pt-24 pb-40 lg:pb-52 bg-white rounded-t-[3rem] lg:rounded-t-[5rem] border-t border-slate-100 relative z-0 mt-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="text-center mb-16 animate-fade-in">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 mb-6">
                <HelpCircle className="w-8 h-8" />
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
                Pertanyaan Populer
              </h2>
            </div>
            
            <div className="space-y-6 animate-fade-in stagger-1">
              <div className="bg-slate-50 rounded-[2rem] p-8 md:p-10 border border-slate-100 hover:border-blue-200 transition-colors shadow-sm">
                <h4 className="font-black text-slate-900 mb-3 text-xl">Berapa harga OTR Suzuki {product.name} di Jogja?</h4>
                <p className="text-slate-600 font-medium leading-relaxed">Harga Suzuki {product.name} Jogja saat ini dibanderol mulai dari kisaran Rp {product.priceText} Jutaan. Harga dapat berubah sewaktu-waktu sesuai dengan program dan promo yang sedang berjalan. Hubungi sales kami untuk harga nett terbaik.</p>
              </div>
              <div className="bg-slate-50 rounded-[2rem] p-8 md:p-10 border border-slate-100 hover:border-blue-200 transition-colors shadow-sm">
                <h4 className="font-black text-slate-900 mb-3 text-xl">Apakah ada promo kredit DP ringan?</h4>
                <p className="text-slate-600 font-medium leading-relaxed">Tentu saja. Dealer Suzuki Jogja bekerjasama dengan puluhan leasing (Suzuki Finance, BCA, Mandiri, dll) menawarkan kemudahan pembiayaan, mulai dari DP 10%, cicilan ringan hingga 7 tahun, dan bonus aksesoris eksklusif.</p>
              </div>
            </div>

            {/* Leasing Partner Logos (Dimasukkan ke dalam section putih) */}
            <div className="mt-20 flex flex-wrap justify-center items-center gap-8 md:gap-14 animate-fade-in stagger-2 opacity-60">
              {leasingPartners.map((partner, index) => (
                <div key={index} className="group relative w-24 md:w-32 h-14 flex items-center justify-center transition-all duration-300 hover:scale-110 grayscale hover:grayscale-0 cursor-pointer">
                  <img src={partner.src} alt={partner.name} className="max-w-full max-h-full object-contain" />
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />

      {/* MOBILE STICKY BOTTOM BAR - FLOATING PILL STYLE */}
      <div className="fixed bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-xl p-2 rounded-[2rem] shadow-2xl border border-slate-700 z-[60] md:hidden flex gap-2 animate-fade-in">
        {product.brochureUrl && (
          <Button 
            onClick={() => window.open(product.brochureUrl, '_blank')} 
            variant="outline" 
            className="w-14 border-slate-700 bg-slate-800 text-white hover:bg-slate-700 h-14 rounded-2xl flex-shrink-0"
            title="Unduh Brosur"
          >
            <Download className="w-5 h-5" />
          </Button>
        )}
        <Button 
          onClick={handleTestDrive} 
          variant="outline" 
          className="flex-1 border-slate-700 bg-slate-800 hover:bg-slate-700 text-white font-bold h-14 rounded-2xl text-xs uppercase tracking-wider"
        >
          <Car className="w-4 h-4 mr-2 text-blue-400" />
          Test Drive
        </Button>
        <Button 
          onClick={() => handleAjukanKredit()} 
          className="flex-1 bg-[#25D366] hover:bg-[#1DA851] text-white font-bold h-14 rounded-2xl shadow-lg text-xs uppercase tracking-wider"
        >
          <MessageCircle className="w-4 h-4 mr-2" />
          Tanya Promo
        </Button>
      </div>

    </div>
  );
}