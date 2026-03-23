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
  MessageCircle, Info
} from 'lucide-react';
import { products, getProductBySlug } from '@/lib/products-data';

const leasingPartners = [
  { name: 'Suzuki Finance', src: '/images/leasing/sufi.webp' },
  { name: 'BCA Finance', src: '/images/leasing/bca.webp' },
  { name: 'Mandiri Tunas Finance', src: '/images/leasing/mtf.webp' },
  { name: 'Adira Finance', src: '/images/leasing/adira.webp' },
  { name: 'Oto Finance', src: '/images/leasing/muf.webp' },
  { name: 'Clipan Finance', src: '/images/leasing/clipan.webp' },
  { name: 'IMFI', src: '/images/leasing/imfi.webp' },
];

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [selectedImage, setSelectedImage] = useState(0);
  
  const slug = params.slug as string; 
  const product = getProductBySlug(slug);

  const waTeam = [
    { nama: 'Yusuf', no: '6282174635218' },
    { nama: 'Dimas', no: '6287775741091' },
    { nama: 'Bima', no: '6289637144539' },
    { nama: 'Kafi', no: '6281329095557' },
    { nama: 'Nabila', no: '6283103278381' },
    { nama: 'Melly', no: '62895417267981' }
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
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <p className="text-xl text-muted-foreground mb-4">Memuat data kendaraan...</p>
          </div>
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
    const message = `Halo admin Suzuki!!\n\nSaya tertarik dengan promo untuk unit *${targetName}*. Boleh minta info simulasi kredit & diskon maksimalnya?`;
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

  // KOMPONEN SPESIFIKASI VISUAL (Poin 5)
  const SpecRow = ({ icon: Icon, label, value }: { icon: any, label: string, value: string }) => (
    <div className="group flex items-center justify-between py-3.5 border-b border-slate-100 dark:border-gray-800/60 last:border-0 hover:bg-slate-50 dark:hover:bg-gray-800/30 transition-colors px-3 rounded-xl -mx-3 cursor-default">
      <span className="text-sm font-medium text-slate-500 dark:text-slate-400 flex items-center gap-3">
        <div className="p-1.5 bg-slate-100 dark:bg-slate-800 rounded-lg text-slate-500 dark:text-slate-400 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          <Icon className="w-4 h-4" />
        </div>
        {label}
      </span>
      <span className="text-sm font-black text-slate-900 dark:text-white text-right group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors tracking-tight">
        {value}
      </span>
    </div>
  );

  // KOMPONEN CARD VARIAN (Poin 1, 2, 4, 8)
  const VariantCard = ({ variant, priceData, region, idx }: any) => {
    const savings = getSavings(priceData.priceOtr, priceData.priceNett);
    const showOtr = priceData.priceOtr !== priceData.priceNett;
    const isBestSeller = idx === 0; // Memberi badge pada varian pertama
    
    return (
      <Card
        className="relative overflow-hidden border-0 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_35px_rgba(0,0,0,0.08)] dark:bg-gray-900/70 dark:shadow-none dark:border dark:border-gray-800/80 transition-all duration-400 transform hover:-translate-y-1.5 rounded-[20px] bg-white mb-5 group"
        style={{ animationDelay: `${idx * 50}ms` }}
      >
        {/* Badge Visual Hierarchy */}
        {isBestSeller && (
          <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-600 to-blue-800 text-white text-[10px] font-extrabold px-4 py-1.5 rounded-bl-2xl uppercase tracking-widest shadow-sm z-10 flex items-center gap-1">
            🔥 Paling Laris
          </div>
        )}

        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-5">
            <div className="flex-1 mt-2 md:mt-0">
              <h4 className="text-xl font-extrabold text-slate-900 dark:text-white mb-3 tracking-tight group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">
                {variant.name}
              </h4>
              
              <div className="flex flex-col gap-1">
                {/* Harga Coret lebih subtle */}
                <div className="flex items-center gap-2 min-h-[20px]">
                  {showOtr && (
                    <p className="text-sm font-semibold text-slate-400 dark:text-slate-500 line-through decoration-slate-300 dark:decoration-slate-600">
                      {priceData.priceOtr}
                    </p>
                  )}
                  {savings && (
                    <span className="text-[10px] font-bold text-red-600 bg-red-50 dark:bg-red-900/20 px-2 py-0.5 rounded-md border border-red-100 dark:border-red-800/30 uppercase tracking-wider">
                      {savings}
                    </span>
                  )}
                </div>
                
                {/* Harga Utama sebagai Focal Point */}
                <p className="text-3xl font-black text-blue-700 dark:text-blue-500 tracking-tighter">
                  {priceData.priceNett}
                </p>
              </div>
            </div>
            
            {/* Tombol CTA Menjual */}
            <Button
              onClick={() => handleAjukanKredit(variant.name, region)}
              className="w-full md:w-auto bg-[#25D366] hover:bg-[#1DA851] text-white font-extrabold whitespace-nowrap shadow-[0_4px_14px_rgba(37,211,102,0.3)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.4)] transition-all duration-300 rounded-xl h-12 px-7 active:scale-[0.97]"
            >
              <MessageCircle className="mr-2 h-5 w-5 animate-pulse" />
              Tanya Promo Sekarang
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-[#0a0a0a] pb-24 md:pb-0 relative font-sans">
      <Header />
      <main className="flex-1">
        
        {/* HERO SECTION */}
        <section className="py-12 md:py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-black relative overflow-hidden">
          {/* Subtle Background Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-14">
              
              {/* Image Gallery */}
              <div className="space-y-4 animate-fade-in mt-12 md:mt-10">
                <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-slate-800">
                  <img
                    src={product.gallery?.[selectedImage] || product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="grid grid-cols-3 gap-3 md:gap-4">
                  {product.gallery?.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(idx)}
                      className={`relative aspect-video rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                        selectedImage === idx ? 'border-blue-500 opacity-100 scale-[1.02] shadow-lg' : 'border-transparent opacity-60 hover:opacity-100 hover:scale-[1.02]'
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

              {/* Product Info */}
              <div className="flex flex-col justify-center animate-fade-in stagger-1">
                <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-bold tracking-wider uppercase w-fit mb-5 backdrop-blur-sm">
                  {product.category}
                </span>
                
                <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight leading-tight">
                  Suzuki {product.name} Jogja
                </h1>
                
                <p className="text-lg text-slate-300 mb-6 leading-relaxed font-light">
                  {product.description}
                </p>

                <div className="flex items-baseline space-x-3 mb-8 bg-slate-800/40 p-5 rounded-2xl border border-white/5 inline-flex w-fit backdrop-blur-md">
                  <div className="flex flex-col">
                    <span className="text-slate-400 text-sm font-medium mb-1 uppercase tracking-widest">Mulai Dari</span>
                    <span className="text-4xl font-black text-white tracking-tighter flex items-end gap-2">
                      Rp {product.priceText} <span className="text-xl font-bold text-slate-400 mb-1">Juta</span>
                    </span>
                  </div>
                </div>

                <div className="hidden md:flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    onClick={handleTestDrive}
                    className="bg-white text-slate-900 hover:bg-gray-100 text-lg px-8 rounded-xl shadow-lg font-bold transition-transform active:scale-95"
                  >
                    <Car className="mr-2 h-5 w-5" />
                    Pesan Test Drive
                  </Button>
                  {product.brochureUrl && (
                    <Button
                      size="lg"
                      variant="outline"
                      onClick={() => window.open(product.brochureUrl, '_blank')}
                      className="border-slate-600 text-white hover:bg-slate-800 hover:text-white text-lg px-8 rounded-xl bg-transparent transition-transform active:scale-95"
                    >
                      <Download className="mr-2 h-5 w-5" />
                      Unduh Brosur
                    </Button>
                  )}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION HARGA & SPESIFIKASI (Desain Premium) */}
        <section className="py-20 md:py-28 bg-slate-50 dark:bg-[#0a0a0a]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              
              <div className="text-center mb-16 animate-fade-in">
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">
                  Daftar Harga & Spesifikasi
                </h2>
                <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mb-6"></div>
                <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg">
                  Pilih varian {product.name} yang sesuai dengan kebutuhan Anda. Nikmati penawaran khusus dan diskon maksimal hari ini.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                
                {/* Variant List / Harga (Kiri - Col 7) */}
                <div className="lg:col-span-7 order-1 animate-fade-in stagger-1">
                  <div className="w-full">
                    <Tabs defaultValue="plat-ab" className="w-full">
                      
                      {/* Tabs Micro-interaction */}
                      <TabsList className="grid w-full grid-cols-2 mb-8 bg-slate-200/50 dark:bg-gray-900/80 p-1.5 rounded-[20px] shadow-inner">
                        <TabsTrigger 
                          value="plat-ab" 
                          className="rounded-2xl data-[state=active]:bg-white dark:data-[state=active]:bg-gray-800 data-[state=active]:text-blue-700 dark:data-[state=active]:text-blue-400 data-[state=active]:shadow-md font-bold py-3.5 text-slate-500 transition-all duration-300"
                        >
                          Plat AB (Jogja)
                        </TabsTrigger>
                        <TabsTrigger 
                          value="plat-aa-r" 
                          className="rounded-2xl data-[state=active]:bg-white dark:data-[state=active]:bg-gray-800 data-[state=active]:text-blue-700 dark:data-[state=active]:text-blue-400 data-[state=active]:shadow-md font-bold py-3.5 text-slate-500 transition-all duration-300"
                        >
                          Plat AA & R (Kedu/Bms)
                        </TabsTrigger>
                      </TabsList>

                      <TabsContent value="plat-ab" className="mt-0 outline-none">
                        <div className="space-y-4">
                          {/* Promo Banner Premium (Poin 3 & 7) */}
                          {product.variants[0]?.bonus && (
                            <div className="mb-8 p-6 bg-gradient-to-br from-blue-50 via-white to-indigo-50/50 dark:from-blue-950/40 dark:via-gray-900 dark:to-indigo-900/20 border border-blue-100 dark:border-blue-800/40 rounded-[20px] flex items-start gap-5 shadow-sm relative overflow-hidden group">
                              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 blur-3xl rounded-full pointer-events-none transition-transform group-hover:scale-150 duration-700"></div>
                              <div className="bg-blue-100/80 dark:bg-blue-900/50 p-3 rounded-2xl text-blue-600 dark:text-blue-400 z-10 shadow-sm">
                                <Gift className="h-7 w-7" />
                              </div>
                              <div className="z-10 flex-1">
                                <div className="flex items-center gap-3 mb-1.5">
                                  <h4 className="font-black text-blue-900 dark:text-blue-300 text-sm uppercase tracking-widest">
                                    Super Promo Jogja
                                  </h4>
                                  <span className="bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400 px-2 py-0.5 rounded uppercase text-[10px] font-bold animate-pulse">
                                    Bulan Ini
                                  </span>
                                </div>
                                <p className="text-sm font-semibold text-slate-600 dark:text-slate-300 leading-relaxed">{product.variants[0].bonus}</p>
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
                            <div className="mb-8 p-6 bg-gradient-to-br from-blue-50 via-white to-indigo-50/50 dark:from-blue-950/40 dark:via-gray-900 dark:to-indigo-900/20 border border-blue-100 dark:border-blue-800/40 rounded-[20px] flex items-start gap-5 shadow-sm relative overflow-hidden group">
                              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 blur-3xl rounded-full pointer-events-none transition-transform group-hover:scale-150 duration-700"></div>
                              <div className="bg-blue-100/80 dark:bg-blue-900/50 p-3 rounded-2xl text-blue-600 dark:text-blue-400 z-10 shadow-sm">
                                <Gift className="h-7 w-7" />
                              </div>
                              <div className="z-10 flex-1">
                                <div className="flex items-center gap-3 mb-1.5">
                                  <h4 className="font-black text-blue-900 dark:text-blue-300 text-sm uppercase tracking-widest">
                                    Super Promo Jateng
                                  </h4>
                                  <span className="bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400 px-2 py-0.5 rounded uppercase text-[10px] font-bold animate-pulse">
                                    Bulan Ini
                                  </span>
                                </div>
                                <p className="text-sm font-semibold text-slate-600 dark:text-slate-300 leading-relaxed">{product.variants[0].bonus}</p>
                              </div>
                            </div>
                          )}
                          {product.variants.map((variant, idx) => (
                            <VariantCard key={`aar-${idx}`} idx={idx} variant={variant} priceData={variant.priceAAR} region="Plat AA/R" />
                          ))}
                          <div className="flex items-start gap-2 bg-slate-100 dark:bg-gray-900/50 p-4 rounded-xl mt-6">
                            <Info className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
                            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                              Harga OTR di atas berlaku untuk wilayah Kedu, Banyumas, Cilacap, Purworejo, Kebumen, Temanggung, Wonosobo, dan Magelang.
                            </p>
                          </div>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </div>
                </div>

                {/* Specifications (Kanan - Col 5) */}
                <div className="lg:col-span-5 order-2 animate-fade-in stagger-2">
                  <div className="bg-white dark:bg-gray-900/60 rounded-[24px] shadow-[0_8px_30px_rgba(0,0,0,0.03)] dark:shadow-none border border-slate-200/60 dark:border-gray-800 overflow-hidden sticky top-28 backdrop-blur-sm">
                    <div className="p-7 md:p-8 border-b border-slate-100 dark:border-gray-800/60 flex items-center gap-4 bg-slate-50/50 dark:bg-gray-900/30">
                      <div className="bg-blue-600 p-2.5 rounded-xl text-white shadow-md shadow-blue-600/20">
                        <Settings className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-xl font-black text-slate-900 dark:text-white tracking-tight">
                          Spesifikasi Teknis
                        </h3>
                        <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mt-1">Data Performa & Dimensi</p>
                      </div>
                    </div>
                    <div className="p-7 md:p-8">
                      <div className="flex flex-col">
                        <SpecRow icon={Wrench} label="Mesin" value={product.specifications.engine} />
                        <SpecRow icon={Settings} label="Transmisi" value={product.specifications.transmission} />
                        <SpecRow icon={Droplets} label="Bahan Bakar" value={product.specifications.fuel} />
                        <SpecRow icon={Zap} label="Tenaga Maksimal" value={product.specifications.power} />
                        <SpecRow icon={Shield} label="Torsi Maksimal" value={product.specifications.torque} />
                        <SpecRow icon={UsersIcon} label="Kapasitas Penumpang" value={product.specifications.seating} />
                        <SpecRow icon={Ruler} label="Dimensi (PxLxT)" value={product.specifications.dimensions} />
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white dark:bg-[#0a0a0a] border-t border-slate-100 dark:border-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mb-3 tracking-tight">
                Pertanyaan Seputar Suzuki {product.name}
              </h2>
            </div>
            <div className="space-y-4">
              <Card className="border-0 shadow-sm hover:shadow-md transition-shadow duration-300 bg-slate-50 dark:bg-gray-900/40 rounded-2xl">
                <CardContent className="p-6 md:p-8 flex items-start gap-5">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-2.5 rounded-xl flex-shrink-0 text-blue-600 dark:text-blue-400">
                    <HelpCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-900 dark:text-white mb-2 text-lg">Berapa harga Suzuki {product.name} di Jogja?</h4>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">Harga Suzuki {product.name} Jogja saat ini dibanderol mulai dari kisaran Rp {product.priceText} Jutaan. Harga dapat berubah sewaktu-waktu sesuai dengan program dan promo yang sedang berjalan.</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-sm hover:shadow-md transition-shadow duration-300 bg-slate-50 dark:bg-gray-900/40 rounded-2xl">
                <CardContent className="p-6 md:p-8 flex items-start gap-5">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-2.5 rounded-xl flex-shrink-0 text-blue-600 dark:text-blue-400">
                    <HelpCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-900 dark:text-white mb-2 text-lg">Apakah ada promo kredit Suzuki {product.name}?</h4>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">Tentu saja. Dealer Suzuki Jogja menawarkan berbagai kemudahan pembiayaan, mulai dari DP sangat ringan, cicilan terjangkau, hingga bonus aksesoris eksklusif untuk pembelian secara kredit maupun tunai.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="py-20 bg-slate-50 dark:bg-gray-950 border-t border-slate-200 dark:border-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="flex items-center justify-between mb-10">
              <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">Lihat Mobil Lainnya</h3>
              <Link href="/produk" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors text-sm font-bold flex items-center group">
                Lihat Semua <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"/>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
              {otherProducts.map((other) => (
                <Link href={`/produk/${other.slug}`} key={other.id}>
                  <Card className="border-0 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all duration-400 cursor-pointer bg-white dark:bg-gray-900 group rounded-[20px] overflow-hidden hover:-translate-y-1">
                    <CardContent className="p-5 flex items-center gap-5">
                      <div className="w-28 h-20 rounded-xl overflow-hidden flex-shrink-0 bg-slate-100 dark:bg-gray-800">
                        <img src={other.image} alt={other.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      </div>
                      <div>
                        <h4 className="font-black text-lg text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{other.name}</h4>
                        <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mt-1">Mulai Rp {other.priceText} Jt</p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Leasing Partner Section */}
        <section className="py-16 bg-white dark:bg-[#0a0a0a] border-t border-slate-100 dark:border-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14 opacity-60">
              {leasingPartners.map((partner, index) => (
                <div 
                  key={index} 
                  className="group relative w-24 h-12 md:w-32 md:h-16 flex items-center justify-center p-2 transition-all duration-300 hover:scale-110 hover:opacity-100 cursor-pointer"
                >
                  <img
                    src={partner.src}
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />

      {/* STICKY BOTTOM ACTION BAR (Khusus Mobile) */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border-t border-slate-200 dark:border-gray-800 shadow-[0_-10px_40px_rgba(0,0,0,0.08)] z-50 md:hidden flex gap-3 animate-fade-in pb-safe">
        <Button 
          onClick={handleTestDrive} 
          variant="outline" 
          className="flex-1 border-slate-300 text-slate-700 dark:border-slate-700 dark:text-slate-300 font-bold h-14 rounded-[14px] active:scale-95 transition-transform"
        >
          <Car className="w-5 h-5 mr-2" />
          Test Drive
        </Button>
        <Button 
          onClick={() => handleAjukanKredit()} 
          className="flex-1 bg-[#25D366] hover:bg-[#1DA851] text-white font-extrabold h-14 rounded-[14px] shadow-lg shadow-green-500/20 active:scale-95 transition-all"
        >
          <MessageCircle className="w-5 h-5 mr-2 animate-pulse" />
          Tanya Promo
        </Button>
      </div>

    </div>
  );
}