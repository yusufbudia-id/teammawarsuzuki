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
  MessageCircle
} from 'lucide-react';
import { products, getProductBySlug } from '@/lib/products-data';

const leasingPartners = [
  { name: 'Suzuki Finance', src: '/images/leasing/sufi.webp' },
  { name: 'BCA Finance', src: '/images/leasing/bca.webp' },
  { name: 'Mandiri Tunas Finance', src: '/images/leasing/mtf.webp' },
  { name: 'Adira Finance', src: '/images/leasing/adira.webp' },
  { name: 'Oto Finance', src: '/images/leasing/muf.webp' },
  { name: 'Clipan Finance', src: '/images/leasing/clipan.webp' },
  { name: 'Clipan Finance', src: '/images/leasing/imfi.webp' },
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
    { nama: 'Melly', no: '62895417267981' },
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
    const message = `Halo admin Suzuki!!\n\nSaya tertarik untuk mengajukan kredit untuk unit *${targetName}*. Mohon info simulasi kredit dan penawaran terbaiknya ya..`;
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
      <Card
        className="border-0 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)] dark:bg-gray-900/80 dark:shadow-none dark:border dark:border-gray-800 transition-all duration-300 transform hover:-translate-y-1 rounded-2xl bg-white mb-4"
        style={{ animationDelay: `${idx * 50}ms` }}
      >
        <CardContent className="p-5 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
            <div className="flex-1">
              <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2 tracking-tight">
                {variant.name}
              </h4>
              
              <div className="flex items-center gap-2 mb-1 min-h-[24px]">
                {showOtr && (
                  <p className="text-sm font-medium text-slate-400 dark:text-slate-500 line-through decoration-slate-300 dark:decoration-slate-600">
                    {priceData.priceOtr}
                  </p>
                )}
                {savings && (
                  <span className="text-[11px] font-bold text-red-600 bg-red-50 dark:bg-red-900/20 px-2.5 py-0.5 rounded-full border border-red-100 dark:border-red-800/30">
                    {savings}
                  </span>
                )}
              </div>
              
              <p className="text-2xl font-black text-slate-800 dark:text-slate-200 tracking-tighter">
                {priceData.priceNett}
              </p>
            </div>
            
            <Button
              onClick={() => handleAjukanKredit(variant.name, region)}
              className="w-full sm:w-auto bg-[#25D366] hover:bg-[#1DA851] text-white font-bold whitespace-nowrap shadow-sm hover:shadow-md transition-all rounded-xl h-11 px-6"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Chat Sales
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-black pb-20 md:pb-0 relative">
      <Header />
      <main className="flex-1">
        
        {/* BAGIAN ATAS (HERO SECTION) */}
        <section className="py-12 md:py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              
              <div className="space-y-4 animate-fade-in mt-12 md:mt-10">
                <div className="relative aspect-video rounded-2xl overflow-hidden border border-gray-800 shadow-2xl">
                  <img
                    src={product.gallery?.[selectedImage] || product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {product.gallery?.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(idx)}
                      className={`relative aspect-video rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                        selectedImage === idx ? 'border-blue-500 opacity-100' : 'border-transparent opacity-60 hover:opacity-100'
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

              <div className="flex flex-col justify-center animate-fade-in stagger-1">
                <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white text-xs font-bold tracking-wider uppercase w-fit mb-5 backdrop-blur-sm border border-white/10">
                  {product.category}
                </span>
                
                <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight leading-tight">
                  Suzuki {product.name} Jogja
                </h1>
                
                <p className="text-lg text-gray-300 mb-6 leading-relaxed font-light">
                  {product.description}
                </p>

                <div className="bg-gray-800/40 border border-gray-700/50 p-5 rounded-2xl mb-8 backdrop-blur-md">
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Suzuki {product.name} Jogja merupakan kendaraan pilihan yang banyak diminati masyarakat Yogyakarta dan sekitarnya. Nikmati promo eksklusif diskon maksimal, DP ringan, serta cicilan kredit yang terjangkau.
                  </p>
                </div>

                <div className="flex items-baseline space-x-3 mb-8">
                  <span className="text-gray-400 text-lg font-medium">Mulai</span>
                  <span className="text-4xl font-black text-white tracking-tighter">
                    Rp {product.priceText} <span className="text-2xl font-bold text-gray-400">Jt</span>
                  </span>
                </div>

                {/* PERBAIKAN: Menghapus hidden agar tampil di HP juga */}
                <div className="flex flex-col sm:flex-row gap-4 mt-2">
                  <Button
                    size="lg"
                    onClick={handleTestDrive}
                    className="bg-white text-slate-900 hover:bg-gray-100 text-lg px-8 rounded-xl shadow-lg font-bold"
                  >
                    <Car className="mr-2 h-5 w-5" />
                    Pesan Test Drive
                  </Button>
                  {product.brochureUrl && (
                    <Button
                      size="lg"
                      variant="outline"
                      onClick={() => window.open(product.brochureUrl, '_blank')}
                      className="border-gray-600 text-white hover:bg-gray-800 hover:text-white text-lg px-8 rounded-xl bg-transparent"
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

        {/* BAGIAN BAWAH - DAFTAR HARGA & SPESIFIKASI */}
        <section className="py-16 md:py-24 bg-slate-50 dark:bg-gray-950">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              
              <div className="text-center mb-14 animate-fade-in">
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">
                  Daftar Harga & Spesifikasi
                </h2>
                <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg">
                  Pilih varian {product.name} yang paling sesuai dengan gaya Anda. Nikmati penawaran khusus wilayah DIY & Jawa Tengah.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                
                <div className="lg:col-span-7 order-1 animate-fade-in stagger-1">
                  <div className="w-full">
                    <Tabs defaultValue="plat-ab" className="w-full">
                      
                      <TabsList className="grid w-full grid-cols-2 mb-8 bg-slate-200/60 dark:bg-slate-800/50 p-1.5 rounded-2xl">
                        <TabsTrigger 
                          value="plat-ab" 
                          className="rounded-xl data-[state=active]:bg-white dark:data-[state=active]:bg-slate-700 data-[state=active]:text-slate-900 dark:data-[state=active]:text-white data-[state=active]:shadow-sm font-bold py-3 text-slate-500 transition-all duration-300"
                        >
                          Plat AB (Jogja)
                        </TabsTrigger>
                        <TabsTrigger 
                          value="plat-aa-r" 
                          className="rounded-xl data-[state=active]:bg-white dark:data-[state=active]:bg-slate-700 data-[state=active]:text-slate-900 dark:data-[state=active]:text-white data-[state=active]:shadow-sm font-bold py-3 text-slate-500 transition-all duration-300"
                        >
                          Plat AA & R (Kedu/Bms)
                        </TabsTrigger>
                      </TabsList>

                      <TabsContent value="plat-ab" className="mt-0 outline-none">
                        <div className="space-y-2">
                          {product.variants[0]?.bonus && (
                            <div className="mb-6 p-5 bg-gradient-to-br from-amber-50 to-yellow-50/50 dark:from-amber-950/30 dark:to-yellow-900/10 border border-amber-200/60 dark:border-amber-800/30 rounded-2xl flex items-start gap-4 shadow-sm">
                              <div className="bg-amber-100 dark:bg-amber-900/50 p-2 rounded-lg">
                                <Gift className="h-6 w-6 text-amber-600 dark:text-amber-500 flex-shrink-0" />
                              </div>
                              <div>
                                <h4 className="font-extrabold text-amber-900 dark:text-amber-400 text-sm mb-1 uppercase tracking-wider">Super Promo Bulan Ini</h4>
                                <p className="text-sm font-medium text-amber-800/80 dark:text-amber-200/80">{product.variants[0].bonus}</p>
                              </div>
                            </div>
                          )}
                          {product.variants.map((variant, idx) => (
                            <VariantCard key={`ab-${idx}`} idx={idx} variant={variant} priceData={variant.priceAB} region="Plat AB" />
                          ))}
                        </div>
                      </TabsContent>

                      <TabsContent value="plat-aa-r" className="mt-0 outline-none">
                        <div className="space-y-2">
                          {product.variants[0]?.bonus && (
                            <div className="mb-6 p-5 bg-gradient-to-br from-amber-50 to-yellow-50/50 dark:from-amber-950/30 dark:to-yellow-900/10 border border-amber-200/60 dark:border-amber-800/30 rounded-2xl flex items-start gap-4 shadow-sm">
                              <div className="bg-amber-100 dark:bg-amber-900/50 p-2 rounded-lg">
                                <Gift className="h-6 w-6 text-amber-600 dark:text-amber-500 flex-shrink-0" />
                              </div>
                              <div>
                                <h4 className="font-extrabold text-amber-900 dark:text-amber-400 text-sm mb-1 uppercase tracking-wider">Super Promo Wilayah Jateng</h4>
                                <p className="text-sm font-medium text-amber-800/80 dark:text-amber-200/80">{product.variants[0].bonus}</p>
                              </div>
                            </div>
                          )}
                          {product.variants.map((variant, idx) => (
                            <VariantCard key={`aar-${idx}`} idx={idx} variant={variant} priceData={variant.priceAAR} region="Plat AA/R" />
                          ))}
                          <p className="text-xs text-slate-400 mt-6 text-center px-4 font-medium">
                            *Harga OTR berlaku untuk wilayah Kedu, Banyumas, Cilacap, Purworejo, Kebumen, Temanggung, Wonosobo, dan Magelang.
                          </p>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </div>
                </div>

                <div className="lg:col-span-5 order-2 animate-fade-in stagger-2">
                  <div className="bg-white dark:bg-gray-900/80 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] dark:shadow-none border border-slate-100 dark:border-gray-800 overflow-hidden sticky top-28">
                    <div className="p-6 md:p-8 border-b border-slate-100 dark:border-gray-800/60 flex items-center gap-3">
                      <div className="bg-slate-100 dark:bg-slate-800 p-2 rounded-xl">
                        <Settings className="w-5 h-5 text-slate-700 dark:text-slate-300" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                        Spesifikasi Teknis
                      </h3>
                    </div>
                    <div className="p-6 md:p-8">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between py-3 border-b border-slate-50 dark:border-gray-800/40">
                          <span className="text-sm font-medium text-slate-500 dark:text-slate-400 flex items-center gap-3">
                            <Wrench className="w-4 h-4 text-slate-400" /> Mesin
                          </span>
                          <span className="hidden"> : </span>
                          <span className="text-sm font-bold text-slate-900 dark:text-slate-100 text-right ml-4">{product.specifications.engine}</span>
                        </div>
                        <div className="flex items-center justify-between py-3 border-b border-slate-50 dark:border-gray-800/40">
                          <span className="text-sm font-medium text-slate-500 dark:text-slate-400 flex items-center gap-3">
                            <Settings className="w-4 h-4 text-slate-400" /> Transmisi
                          </span>
                          <span className="hidden"> : </span>
                          <span className="text-sm font-bold text-slate-900 dark:text-slate-100 text-right ml-4">{product.specifications.transmission}</span>
                        </div>
                        <div className="flex items-center justify-between py-3 border-b border-slate-50 dark:border-gray-800/40">
                          <span className="text-sm font-medium text-slate-500 dark:text-slate-400 flex items-center gap-3">
                            <Droplets className="w-4 h-4 text-slate-400" /> Bahan Bakar
                          </span>
                          <span className="hidden"> : </span>
                          <span className="text-sm font-bold text-slate-900 dark:text-slate-100 text-right ml-4">{product.specifications.fuel}</span>
                        </div>
                        <div className="flex items-center justify-between py-3 border-b border-slate-50 dark:border-gray-800/40">
                          <span className="text-sm font-medium text-slate-500 dark:text-slate-400 flex items-center gap-3">
                            <Zap className="w-4 h-4 text-slate-400" /> Tenaga
                          </span>
                          <span className="hidden"> : </span>
                          <span className="text-sm font-bold text-slate-900 dark:text-slate-100 text-right ml-4">{product.specifications.power}</span>
                        </div>
                        <div className="flex items-center justify-between py-3 border-b border-slate-50 dark:border-gray-800/40">
                          <span className="text-sm font-medium text-slate-500 dark:text-slate-400 flex items-center gap-3">
                            <Shield className="w-4 h-4 text-slate-400" /> Torsi
                          </span>
                          <span className="hidden"> : </span>
                          <span className="text-sm font-bold text-slate-900 dark:text-slate-100 text-right ml-4">{product.specifications.torque}</span>
                        </div>
                        <div className="flex items-center justify-between py-3 border-b border-slate-50 dark:border-gray-800/40">
                          <span className="text-sm font-medium text-slate-500 dark:text-slate-400 flex items-center gap-3">
                            <UsersIcon className="w-4 h-4 text-slate-400" /> Kapasitas
                          </span>
                          <span className="hidden"> : </span>
                          <span className="text-sm font-bold text-slate-900 dark:text-slate-100 text-right ml-4">{product.specifications.seating}</span>
                        </div>
                        <div className="flex items-center justify-between py-3">
                          <span className="text-sm font-medium text-slate-500 dark:text-slate-400 flex items-center gap-3">
                            <Ruler className="w-4 h-4 text-slate-400" /> Dimensi
                          </span>
                          <span className="hidden"> : </span>
                          <span className="text-sm font-bold text-slate-900 dark:text-slate-100 text-right ml-4">{product.specifications.dimensions}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white dark:bg-black border-t border-slate-100 dark:border-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mb-3 tracking-tight">
                Pertanyaan Seputar Suzuki {product.name}
              </h2>
            </div>
            <div className="space-y-4">
              <Card className="border-0 shadow-sm bg-slate-50 dark:bg-gray-900/50 rounded-2xl">
                <CardContent className="p-6 flex items-start gap-5">
                  <div className="bg-slate-200 dark:bg-slate-800 p-2 rounded-full flex-shrink-0">
                    <HelpCircle className="h-5 w-5 text-slate-600 dark:text-slate-300" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-2 text-lg">Berapa harga Suzuki {product.name} di Jogja?</h4>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">Harga Suzuki {product.name} Jogja saat ini dibanderol mulai dari kisaran Rp {product.priceText} Jutaan. Harga dapat berubah sewaktu-waktu sesuai dengan program dan promo yang sedang berjalan.</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-sm bg-slate-50 dark:bg-gray-900/50 rounded-2xl">
                <CardContent className="p-6 flex items-start gap-5">
                  <div className="bg-slate-200 dark:bg-slate-800 p-2 rounded-full flex-shrink-0">
                    <HelpCircle className="h-5 w-5 text-slate-600 dark:text-slate-300" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-2 text-lg">Apakah ada promo kredit Suzuki {product.name}?</h4>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">Tentu saja. Dealer Suzuki Jogja menawarkan berbagai kemudahan pembiayaan, mulai dari DP ringan, cicilan terjangkau, hingga bonus aksesoris eksklusif untuk pembelian secara kredit maupun tunai.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Internal Links (Produk Lain) */}
        <section className="py-16 bg-slate-50 dark:bg-gray-950 border-t border-slate-200 dark:border-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">Lihat Mobil Lainnya</h3>
              <Link href="/produk" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors text-sm font-bold flex items-center">
                Lihat Semua <ChevronRight className="w-4 h-4 ml-1"/>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {otherProducts.map((other) => (
                <Link href={`/produk/${other.slug}`} key={other.id}>
                  <Card className="border-0 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer bg-white dark:bg-gray-900 group rounded-2xl overflow-hidden">
                    <CardContent className="p-5 flex items-center gap-5">
                      <div className="w-28 h-20 rounded-xl overflow-hidden flex-shrink-0 bg-slate-100 dark:bg-slate-800">
                        <img src={other.image} alt={other.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">{other.name}</h4>
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
        <section className="py-16 bg-white dark:bg-gray-900 border-t border-slate-100 dark:border-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mb-3 tracking-tight">
                Mitra Pembiayaan Terpercaya
              </h2>
              <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg">
                Kami bekerjasama dengan lembaga pembiayaan terkemuka untuk memberikan kemudahan bagi Anda.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14 animate-fade-in stagger-1 opacity-70">
              {leasingPartners.map((partner, index) => (
                <div 
                  key={index} 
                  className="group relative w-28 h-16 md:w-36 md:h-20 flex items-center justify-center p-2 transition-all duration-300 hover:scale-110 hover:opacity-100 cursor-pointer"
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

      {/* PERBAIKAN STICKY BOTTOM BAR: Menambahkan ikon brosur khusus untuk tampilan Mobile */}
      <div className="fixed bottom-0 left-0 right-0 p-3 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-t border-slate-200 dark:border-gray-800 shadow-[0_-10px_40px_rgba(0,0,0,0.08)] z-50 md:hidden flex gap-2 animate-fade-in">
        {product.brochureUrl && (
          <Button 
            onClick={() => window.open(product.brochureUrl, '_blank')} 
            variant="outline" 
            className="px-3 border-slate-300 text-slate-700 dark:border-slate-700 dark:text-slate-300 font-bold h-12 rounded-xl"
            title="Unduh Brosur"
          >
            <Download className="w-5 h-5" />
          </Button>
        )}
        <Button 
          onClick={handleTestDrive} 
          variant="outline" 
          className="flex-1 border-slate-300 text-slate-700 dark:border-slate-700 dark:text-slate-300 font-bold h-12 rounded-xl"
        >
          <Car className="w-5 h-5 sm:mr-2 mr-1" />
          <span className="text-xs sm:text-sm">Test Drive</span>
        </Button>
        <Button 
          onClick={() => handleAjukanKredit()} 
          className="flex-1 bg-[#25D366] hover:bg-[#1DA851] text-white font-bold h-12 rounded-xl shadow-md"
        >
          <MessageCircle className="w-5 h-5 sm:mr-2 mr-1" />
          <span className="text-xs sm:text-sm">Chat WA</span>
        </Button>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": `Berapa harga Suzuki ${product.name} di Jogja?`,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": `Harga Suzuki ${product.name} Jogja saat ini dibanderol mulai dari kisaran Rp ${product.priceText} Jutaan. Harga dapat berubah sewaktu-waktu sesuai dengan program dan promo yang sedang berjalan.`
                }
              },
              {
                "@type": "Question",
                "name": `Apakah ada promo kredit Suzuki ${product.name}?`,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": `Tentu saja. Dealer Suzuki Jogja menawarkan berbagai kemudahan pembiayaan, mulai dari DP ringan, cicilan terjangkau, hingga bonus aksesoris eksklusif untuk pembelian secara kredit maupun tunai.`
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}

