'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from 'next/link';
import { 
  Download, Car, Settings, Zap, Shield, 
  Wrench, Ruler, Users as UsersIcon, 
  Droplets, ChevronRight, Gift, HelpCircle, 
  MessageCircle, Star
} from 'lucide-react';
import { products, getProductBySlug } from '@/lib/products-data';

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

  const waTeam = [
    { nama: 'Yusuf', no: '6282174635218' },
    { nama: 'Egy', no: '6281327260515' },
    { nama: 'Bima', no: '6289637144539' },
    { nama: 'Kafi', no: '6281329095557' },
    { nama: 'Nabila', no: '6283103278381' },
    { nama: 'Alma', no: '6282134148101' },
    { nama: 'Indah', no: '6282135245314' }
  ];

  const getRandomWANumber = () => {
    const randomIndex = Math.floor(Math.random() * waTeam.length);
    return waTeam[randomIndex].no;
  };

  useEffect(() => {
    if (!product) {
      router.push('/produk');
    }
  }, [product, router]);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <p className="text-sm font-bold uppercase tracking-widest text-slate-500">Memuat Data Kendaraan...</p>
        </main>
        <Footer />
      </div>
    );
  }

  const otherProducts = products.filter(p => p.id !== product.id).slice(0, 3);

  const handleTestDrive = () => {
      const message = `Halo admin Suzuki!!\n\nSaya ingin memesan Test Drive untuk *${product.name}*. Mohon info jadwal dan lokasinya ya..`;
      window.open(`https://wa.me/${getRandomWANumber()}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleAjukanKredit = (variantName?: string, region?: string) => {
    const regionText = region ? ` (${region})` : '';
    const targetName = variantName ? `${product.name} - ${variantName}${regionText}` : product.name;
    const message = `Halo admin Suzuki!!\n\nSaya tertarik untuk mengajukan kredit unit *${targetName}*. Mohon info simulasi cicilan dan penawaran terbaiknya.`;
    window.open(`https://wa.me/${getRandomWANumber()}?text=${encodeURIComponent(message)}`, '_blank');
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
      <div 
        className="group border border-slate-200 bg-white p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-blue-600 transition-colors animate-fade-in"
        style={{ animationDelay: `${idx * 50}ms` }}
      >
        <div className="space-y-2">
          <h4 className="text-lg font-extrabold text-slate-900 uppercase tracking-tight group-hover:text-blue-600 transition-colors">
            {variant.name}
          </h4>
          
          <div className="flex items-center gap-3">
            {showOtr && (
              <p className="text-sm font-bold text-slate-400 line-through">
                {priceData.priceOtr}
              </p>
            )}
            {savings && (
              <span className="text-[10px] font-bold text-white bg-red-600 px-2 py-1 uppercase tracking-widest">
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
          className="w-full md:w-auto bg-[#25D366] hover:bg-[#1DA851] text-white font-bold uppercase tracking-widest text-xs h-12 px-8 rounded-none transition-all"
        >
          <MessageCircle className="mr-2 h-4 w-4" />
          Chat Sales
        </Button>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-white pb-20 md:pb-0">
      <Header />
      <main className="flex-1">
        
        {/* HERO SECTION - Dark & Sharp */}
        <section className="pt-32 pb-20 bg-slate-950 min-h-[80vh] flex items-center relative overflow-hidden">
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 z-0 opacity-20 mix-blend-luminosity pointer-events-none">
             <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              
              {/* Product Gallery */}
              <div className="space-y-4 animate-fade-in">
                <div className="relative aspect-[4/3] bg-slate-900 border border-slate-800 flex items-center justify-center p-8">
                  <img
                    src={product.gallery?.[selectedImage] || product.image}
                    alt={product.name}
                    className="w-full h-full object-contain drop-shadow-2xl"
                  />
                  <div className="absolute top-4 left-4 border border-blue-600/50 bg-blue-600/10 backdrop-blur-md px-3 py-1">
                    <span className="text-blue-400 text-[10px] font-bold tracking-[0.2em] uppercase">{product.category}</span>
                  </div>
                </div>
                
                {/* Thumbnails */}
                <div className="flex gap-4 overflow-x-auto pb-2 no-scrollbar">
                  {product.gallery?.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(idx)}
                      className={`relative w-28 aspect-video shrink-0 border-2 transition-all duration-300 bg-slate-900 ${
                        selectedImage === idx ? 'border-blue-500 opacity-100' : 'border-transparent opacity-40 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={img}
                        alt={`Thumbnail ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Product Info */}
              <div className="flex flex-col justify-center text-white animate-fade-in stagger-1">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-[2px] w-8 bg-blue-600"></div>
                  <span className="text-blue-500 font-bold uppercase tracking-[0.3em] text-xs">
                    Suzuki Indonesia
                  </span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight uppercase leading-none">
                  {product.name}
                </h1>
                
                <p className="text-lg text-slate-400 leading-relaxed font-medium mb-10 max-w-xl">
                  {product.description}
                </p>

                <div className="flex items-baseline gap-3 mb-10">
                  <span className="text-slate-500 text-sm font-bold uppercase tracking-widest">Mulai</span>
                  <span className="text-4xl md:text-5xl font-black tracking-tighter text-white">
                    <span className="text-xl font-bold mr-1">Rp</span>{product.priceText} <span className="text-xl font-bold ml-1 text-slate-500">JT</span>
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    onClick={handleTestDrive}
                    className="bg-blue-600 hover:bg-blue-700 text-white rounded-none h-14 px-10 text-xs font-bold uppercase tracking-widest transition-all"
                  >
                    <Car className="mr-2 h-4 w-4" />
                    Pesan Test Drive
                  </Button>
                  {product.brochureUrl && (
                    <Button
                      size="lg"
                      variant="outline"
                      onClick={() => window.open(product.brochureUrl, '_blank')}
                      className="border-white/20 text-white hover:bg-white hover:text-slate-950 bg-transparent rounded-none h-14 px-10 text-xs font-bold uppercase tracking-widest transition-all"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Unduh Brosur
                    </Button>
                  )}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* PRICING & SPECS SECTION - Structured & Clean */}
        <section className="py-24 bg-white border-b border-slate-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
              
              {/* Left Column: Pricing Tabs */}
              <div className="lg:col-span-8 animate-fade-in stagger-1">
                <div className="mb-10 space-y-4">
                  <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight uppercase">
                    Daftar Harga OTR
                  </h2>
                  <div className="w-12 h-1 bg-blue-600"></div>
                </div>

                <Tabs defaultValue="plat-ab" className="w-full">
                  <TabsList className="bg-transparent border-b border-slate-200 w-full justify-start rounded-none p-0 h-auto space-x-6 md:space-x-10 mb-8 overflow-x-auto no-scrollbar flex-nowrap">
                    <TabsTrigger 
                      value="plat-ab" 
                      className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:bg-transparent data-[state=active]:shadow-none px-0 py-4 font-extrabold uppercase tracking-widest text-xs text-slate-400 data-[state=active]:text-blue-600 whitespace-nowrap"
                    >
                      Plat AB (Yogyakarta)
                    </TabsTrigger>
                    <TabsTrigger 
                      value="plat-aa-r" 
                      className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:bg-transparent data-[state=active]:shadow-none px-0 py-4 font-extrabold uppercase tracking-widest text-xs text-slate-400 data-[state=active]:text-blue-600 whitespace-nowrap"
                    >
                      Plat AA & R (Kedu/Bms)
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="plat-ab" className="mt-0 outline-none">
                    <div className="space-y-4">
                      {product.variants[0]?.bonus && (
                        <div className="mb-8 border border-slate-200 bg-slate-50 p-6 flex gap-4 items-start">
                          <Gift className="w-6 h-6 text-blue-600 flex-shrink-0" />
                          <div>
                            <h4 className="font-extrabold text-slate-900 text-xs uppercase tracking-widest mb-2">Promo Spesial Bulan Ini</h4>
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
                        <div className="mb-8 border border-slate-200 bg-slate-50 p-6 flex gap-4 items-start">
                          <Gift className="w-6 h-6 text-blue-600 flex-shrink-0" />
                          <div>
                            <h4 className="font-extrabold text-slate-900 text-xs uppercase tracking-widest mb-2">Promo Wilayah Jateng</h4>
                            <p className="text-sm font-medium text-slate-600 leading-relaxed">{product.variants[0].bonus}</p>
                          </div>
                        </div>
                      )}
                      {product.variants.map((variant, idx) => (
                        <VariantCard key={`aar-${idx}`} idx={idx} variant={variant} priceData={variant.priceAAR} region="Plat AA/R" />
                      ))}
                      <p className="text-xs text-slate-400 font-bold mt-6 uppercase tracking-wider">
                        *Harga OTR berlaku untuk wilayah Kedu, Banyumas, Cilacap, Purworejo, Kebumen, Temanggung, Wonosobo, dan Magelang.
                      </p>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>

              {/* Right Column: Specifications */}
              <div className="lg:col-span-4 animate-fade-in stagger-2">
                <div className="bg-slate-50 border border-slate-200 p-8 md:p-10 sticky top-28">
                  <h3 className="text-xl font-extrabold text-slate-900 uppercase tracking-tight mb-8 flex items-center gap-3">
                    <Settings className="w-5 h-5 text-blue-600" /> Spesifikasi Utama
                  </h3>
                  
                  <div className="space-y-6">
                    {[
                      { label: 'Mesin', val: product.specifications.engine, icon: <Wrench className="w-4 h-4 text-slate-400" /> },
                      { label: 'Transmisi', val: product.specifications.transmission, icon: <Settings className="w-4 h-4 text-slate-400" /> },
                      { label: 'Tenaga', val: product.specifications.power, icon: <Zap className="w-4 h-4 text-slate-400" /> },
                      { label: 'Torsi', val: product.specifications.torque, icon: <Shield className="w-4 h-4 text-slate-400" /> },
                      { label: 'Kapasitas', val: product.specifications.seating, icon: <UsersIcon className="w-4 h-4 text-slate-400" /> },
                      { label: 'Dimensi', val: product.specifications.dimensions, icon: <Ruler className="w-4 h-4 text-slate-400" /> }
                    ].map((spec, i) => (
                      <div key={i} className="flex justify-between items-start gap-4 pb-4 border-b border-slate-200/60 last:border-0 last:pb-0">
                        <span className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-2 shrink-0">
                          {spec.icon} {spec.label}
                        </span>
                        <span className="text-right font-extrabold text-sm text-slate-900">
                          {spec.val}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* FAQ Section - Clean Accordion Look */}
        <section className="py-24 bg-slate-50 border-b border-slate-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight uppercase">
                Tanya Jawab {product.name}
              </h2>
              <div className="w-12 h-1 bg-blue-600 mx-auto"></div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white border border-slate-200 p-8 hover:border-blue-600 transition-colors">
                <h4 className="text-lg font-extrabold text-slate-900 uppercase tracking-tight mb-3 flex items-center gap-3">
                  <HelpCircle className="w-5 h-5 text-blue-600" /> Berapa OTR {product.name} di Jogja?
                </h4>
                <p className="text-slate-600 font-medium leading-relaxed pl-8">
                  Harga Suzuki {product.name} untuk wilayah Yogyakarta (Plat AB) saat ini dibanderol mulai dari kisaran Rp {product.priceText} Jutaan. Harga dapat berubah sewaktu-waktu sesuai dengan program dan promo yang sedang berjalan.
                </p>
              </div>
              
              <div className="bg-white border border-slate-200 p-8 hover:border-blue-600 transition-colors">
                <h4 className="text-lg font-extrabold text-slate-900 uppercase tracking-tight mb-3 flex items-center gap-3">
                  <HelpCircle className="w-5 h-5 text-blue-600" /> Apakah melayani tukar tambah (Trade-In)?
                </h4>
                <p className="text-slate-600 font-medium leading-relaxed pl-8">
                  Tentu saja. Dealer Suzuki Jogja menerima tukar tambah mobil lama Anda (semua merk) dengan harga appraisal terbaik untuk dijadikan DP pembelian Suzuki {product.name} baru Anda.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* OTHER PRODUCTS - Minimalist Grid */}
        <section className="py-24 bg-white border-b border-slate-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
              <div className="space-y-4">
                <h2 className="text-3xl font-extrabold text-slate-900 uppercase tracking-tight">Eksplorasi Model Lain</h2>
                <div className="w-12 h-1 bg-blue-600"></div>
              </div>
              <Link href="/produk" className="text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-blue-600 flex items-center pb-1">
                Lihat Semua Katalog <ChevronRight className="w-4 h-4 ml-1"/>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {otherProducts.map((other) => (
                <Link href={`/produk/${other.slug}`} key={other.id} className="group border border-slate-200 bg-slate-50 p-6 flex items-center gap-6 hover:border-blue-600 hover:bg-white transition-all">
                  <div className="w-24 md:w-32 aspect-video relative bg-white border border-slate-100 shrink-0 flex items-center justify-center p-2">
                    <img src={other.image} alt={other.name} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-900 uppercase tracking-tight group-hover:text-blue-600 transition-colors">{other.name}</h4>
                    <p className="text-xs font-bold text-slate-500 mt-1 uppercase tracking-widest">Mulai Rp {other.priceText} JT</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* LEASING PARTNERS */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              {leasingPartners.map((partner, index) => (
                <div key={index} className="w-24 md:w-32 h-12 relative flex items-center justify-center">
                  <img src={partner.src} alt={partner.name} className="max-w-full max-h-full object-contain" />
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />

      {/* MOBILE STICKY BOTTOM BAR - Sharp & Flat */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-slate-200 shadow-2xl z-50 md:hidden flex gap-3 animate-fade-in">
        <Button 
          onClick={handleTestDrive} 
          variant="outline" 
          className="flex-1 rounded-none border-slate-300 text-slate-900 font-bold h-12 uppercase tracking-widest text-[10px]"
        >
          <Car className="w-4 h-4 mr-2" />
          Test Drive
        </Button>
        <Button 
          onClick={() => handleAjukanKredit()} 
          className="flex-[1.5] rounded-none bg-blue-600 hover:bg-blue-700 text-white font-bold h-12 uppercase tracking-widest text-[10px]"
        >
          <MessageCircle className="w-4 h-4 mr-2" />
          Kredit / Promo
        </Button>
      </div>

    </div>
  );
}