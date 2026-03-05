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
  MessageCircle, CheckCircle2, Timer
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
    const message = `Halo admin Suzuki!!\n\nSaya tertarik untuk mengajukan kredit untuk unit *${targetName}*. Mohon info simulasi kredit dan penawaran terbaiknya ya..`;
    window.open(`https://wa.me/${getRandomWANumber()}?text=${encodeURIComponent(message)}`, '_blank');
  };

  // ✅ FITUR CRO 1: Fungsi untuk menghitung "Hemat Rp XX Juta"
  const getSavings = (otr: string, nett: string) => {
    const numOtr = parseInt(otr.replace(/[^0-9]/g, ''));
    const numNett = parseInt(nett.replace(/[^0-9]/g, ''));
    if (numOtr > numNett) {
      const diff = numOtr - numNett;
      return `Hemat Rp ${(diff / 1000000).toLocaleString('id-ID')} Jt`;
    }
    return null;
  };

  // ✅ Komponen Kartu Varian yang Dioptimasi (Price Anchoring)
  const VariantCard = ({ variant, priceData, region, idx }: any) => {
    const savings = getSavings(priceData.priceOtr, priceData.priceNett);
    
    return (
      <Card
        className="border border-gray-200 dark:border-gray-800 hover:border-blue-500 hover:shadow-lg transition-all duration-300 animate-fade-in bg-white dark:bg-gray-900"
        style={{ animationDelay: `${idx * 50}ms` }}
      >
        <CardContent className="p-4 sm:p-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex-1">
              <h4 className="text-lg font-extrabold text-gray-900 dark:text-white mb-2">
                {variant.name}
              </h4>
              
              <div className="flex items-center gap-2 mb-1">
                <p className="text-sm text-gray-500 line-through decoration-red-500/50">
                  {priceData.priceOtr}
                </p>
                {savings && (
                  <span className="text-[11px] font-bold text-red-600 bg-red-50 dark:bg-red-900/20 px-2 py-0.5 rounded-full border border-red-200 dark:border-red-800/30 animate-pulse">
                    {savings}
                  </span>
                )}
              </div>
              
              <p className="text-2xl font-black text-blue-700 dark:text-blue-500 tracking-tight">
                {priceData.priceNett}
              </p>
            </div>
            
            <Button
              onClick={() => handleAjukanKredit(variant.name, region)}
              className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white font-bold whitespace-nowrap shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
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
    // Tambahkan pb-24 untuk memberi ruang bagi Sticky Bottom Bar di mobile
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-black pb-20 md:pb-0 relative">
      <Header />
      <main className="flex-1">
        
        {/* TEMA 1: "Premium Tech" (Gelap) untuk Hero Section */}
        <section className="relative py-12 md:py-24 bg-[#0a0f1c] overflow-hidden">
          {/* Efek Cahaya Belakang */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              
              {/* Product Info (Kiri di Desktop) */}
              <div className="flex flex-col justify-center animate-fade-in order-2 lg:order-1">
                {/* ✅ FITUR CRO 2: Urgensi Label */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-red-500/10 border border-red-500/20 text-red-400 rounded-full text-xs font-bold w-fit mb-6 shadow-inner">
                  <Timer className="w-4 h-4 animate-pulse" />
                  PROMO SPESIAL MARET 2026
                </div>
                
                <span className="text-blue-400 font-semibold tracking-wider uppercase text-sm mb-2">
                  Suzuki {product.category}
                </span>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight tracking-tight">
                  {product.name}
                </h1>
                
                <p className="text-lg text-gray-400 mb-8 leading-relaxed max-w-xl">
                  {product.description}
                </p>

                <div className="flex items-end space-x-3 mb-10 bg-white/5 border border-white/10 p-5 rounded-2xl w-fit backdrop-blur-sm">
                  <span className="text-gray-400 font-medium pb-1">Harga Mulai</span>
                  <span className="text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">
                    Rp {product.priceText} Jt
                  </span>
                </div>

                <div className="hidden md:flex flex-row gap-4">
                  <Button
                    size="lg"
                    onClick={handleTestDrive}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 shadow-lg shadow-blue-900/50"
                  >
                    <Car className="mr-2 h-5 w-5" />
                    Pesan Test Drive
                  </Button>
                  {product.brochureUrl && (
                    <Button
                      size="lg"
                      variant="outline"
                      onClick={() => window.open(product.brochureUrl, '_blank')}
                      className="border-gray-600 text-gray-300 hover:bg-white/10 hover:text-white px-8"
                    >
                      <Download className="mr-2 h-5 w-5" />
                      Unduh Brosur
                    </Button>
                  )}
                </div>
              </div>

              {/* Image Gallery (Kanan di Desktop) */}
              <div className="space-y-4 animate-fade-in order-1 lg:order-2 mt-8 lg:mt-0">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-gradient-to-b from-gray-800 to-gray-900 group">
                  <img
                    src={product.gallery?.[selectedImage] || product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="grid grid-cols-3 gap-3">
                  {product.gallery?.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(idx)}
                      className={`relative aspect-[4/3] rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                        selectedImage === idx ? 'border-blue-500 scale-95 opacity-100' : 'border-transparent opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt={`${product.name} ${idx + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* ✅ FITUR CRO 3: Highlight USP Grid (Nilai Jual) */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 lg:mt-20">
              {product.features.map((feat, i) => (
                <div key={i} className="bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-2xl text-center hover:bg-white/10 transition-colors">
                  <CheckCircle2 className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                  <p className="text-sm md:text-base font-bold text-white">{feat}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* TEMA 2: "Corporate Trust" (Terang/Bersih) untuk Spesifikasi & Harga */}
        <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-950">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-4">
                  Daftar Harga & Spesifikasi
                </h2>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                  Pilih varian {product.name} yang paling sesuai dengan kebutuhan Anda. Nikmati promo eksklusif untuk wilayah Jogja, Kedu, dan Banyumas.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
                
                {/* Variant List / Harga (Kiri/Utama) */}
                <div className="lg:col-span-7 order-1">
                  <div className="bg-white dark:bg-gray-900 p-2 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
                    <Tabs defaultValue="plat-ab" className="w-full">
                      <TabsList className="grid w-full grid-cols-2 mb-6 bg-gray-100 dark:bg-gray-950 p-1.5 rounded-xl">
                        <TabsTrigger value="plat-ab" className="rounded-lg data-[state=active]:bg-blue-600 data-[state=active]:text-white font-bold py-2.5 transition-all">
                          Plat AB (Jogja)
                        </TabsTrigger>
                        <TabsTrigger value="plat-aa-r" className="rounded-lg data-[state=active]:bg-blue-600 data-[state=active]:text-white font-bold py-2.5 transition-all">
                          Plat AA & R (Kedu/Bms)
                        </TabsTrigger>
                      </TabsList>

                      <TabsContent value="plat-ab" className="mt-0 outline-none">
                        <div className="space-y-4 px-2 pb-2">
                          {product.variants[0]?.bonus && (
                            <div className="mb-6 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 border border-yellow-200 dark:border-yellow-700/50 rounded-xl flex items-start gap-3 shadow-sm">
                              <Gift className="h-6 w-6 text-yellow-600 dark:text-yellow-500 flex-shrink-0 mt-0.5" />
                              <div>
                                <h4 className="font-bold text-yellow-800 dark:text-yellow-400 text-sm mb-1 uppercase tracking-wider">Super Promo Bulan Ini</h4>
                                <p className="text-sm font-medium text-yellow-900/80 dark:text-yellow-200/80">{product.variants[0].bonus}</p>
                              </div>
                            </div>
                          )}
                          {product.variants.map((variant, idx) => (
                            <VariantCard key={`ab-${idx}`} idx={idx} variant={variant} priceData={variant.priceAB} region="Plat AB" />
                          ))}
                        </div>
                      </TabsContent>

                      <TabsContent value="plat-aa-r" className="mt-0 outline-none">
                        <div className="space-y-4 px-2 pb-2">
                          {product.variants[0]?.bonus && (
                            <div className="mb-6 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 border border-yellow-200 dark:border-yellow-700/50 rounded-xl flex items-start gap-3 shadow-sm">
                              <Gift className="h-6 w-6 text-yellow-600 dark:text-yellow-500 flex-shrink-0 mt-0.5" />
                              <div>
                                <h4 className="font-bold text-yellow-800 dark:text-yellow-400 text-sm mb-1 uppercase tracking-wider">Super Promo Kedu & Banyumas</h4>
                                <p className="text-sm font-medium text-yellow-900/80 dark:text-yellow-200/80">{product.variants[0].bonus}</p>
                              </div>
                            </div>
                          )}
                          {product.variants.map((variant, idx) => (
                            <VariantCard key={`aar-${idx}`} idx={idx} variant={variant} priceData={variant.priceAAR} region="Plat AA/R" />
                          ))}
                          <p className="text-xs text-gray-400 mt-6 italic text-center px-4">
                            *Harga di atas berlaku untuk wilayah Kedu, Banyumas, Cilacap, Purworejo, Kebumen, Temanggung, Wonosobo, dan Magelang.
                          </p>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </div>
                </div>

                {/* Specifications (Kanan/Samping) */}
                <div className="lg:col-span-5 order-2">
                  <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden sticky top-24">
                    <div className="bg-gray-50 dark:bg-gray-950 p-6 border-b border-gray-100 dark:border-gray-800">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                        <Settings className="w-5 h-5 text-blue-600" />
                        Spesifikasi Teknis
                      </h3>
                    </div>
                    <div className="p-6">
                      <div className="space-y-5">
                        <div className="flex items-center justify-between py-2 border-b border-gray-50 dark:border-gray-800/50">
                          <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2">
                            <Wrench className="w-4 h-4" /> Mesin
                          </span>
                          <span className="text-sm font-bold text-gray-900 dark:text-gray-100 text-right">{product.specifications.engine}</span>
                        </div>
                        <div className="flex items-center justify-between py-2 border-b border-gray-50 dark:border-gray-800/50">
                          <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2">
                            <Settings className="w-4 h-4" /> Transmisi
                          </span>
                          <span className="text-sm font-bold text-gray-900 dark:text-gray-100 text-right">{product.specifications.transmission}</span>
                        </div>
                        <div className="flex items-center justify-between py-2 border-b border-gray-50 dark:border-gray-800/50">
                          <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2">
                            <Droplets className="w-4 h-4" /> Bensin
                          </span>
                          <span className="text-sm font-bold text-gray-900 dark:text-gray-100 text-right">{product.specifications.fuel}</span>
                        </div>
                        <div className="flex items-center justify-between py-2 border-b border-gray-50 dark:border-gray-800/50">
                          <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2">
                            <Zap className="w-4 h-4" /> Power
                          </span>
                          <span className="text-sm font-bold text-gray-900 dark:text-gray-100 text-right">{product.specifications.power}</span>
                        </div>
                        <div className="flex items-center justify-between py-2 border-b border-gray-50 dark:border-gray-800/50">
                          <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2">
                            <Shield className="w-4 h-4" /> Torsi
                          </span>
                          <span className="text-sm font-bold text-gray-900 dark:text-gray-100 text-right">{product.specifications.torque}</span>
                        </div>
                        <div className="flex items-center justify-between py-2 border-b border-gray-50 dark:border-gray-800/50">
                          <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2">
                            <UsersIcon className="w-4 h-4" /> Kapasitas
                          </span>
                          <span className="text-sm font-bold text-gray-900 dark:text-gray-100 text-right">{product.specifications.seating}</span>
                        </div>
                        <div className="flex items-center justify-between py-2">
                          <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2">
                            <Ruler className="w-4 h-4" /> Dimensi
                          </span>
                          <span className="text-sm font-bold text-gray-900 dark:text-gray-100 text-right">{product.specifications.dimensions}</span>
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
        <section className="py-16 bg-white dark:bg-black border-t border-gray-100 dark:border-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                FAQ (Pertanyaan Seputar Suzuki {product.name})
              </h2>
            </div>
            <div className="space-y-4">
              <Card className="border border-gray-200 dark:border-gray-800 shadow-none bg-gray-50 dark:bg-gray-900/50">
                <CardContent className="p-5 flex items-start gap-4">
                  <HelpCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">Berapa harga Suzuki {product.name} di Jogja?</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">Harga Suzuki {product.name} Jogja saat ini dibanderol mulai dari kisaran Rp {product.priceText} Jutaan. Harga dapat berubah sewaktu-waktu sesuai dengan program dan promo yang sedang berjalan.</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border border-gray-200 dark:border-gray-800 shadow-none bg-gray-50 dark:bg-gray-900/50">
                <CardContent className="p-5 flex items-start gap-4">
                  <HelpCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">Apakah ada promo kredit Suzuki {product.name}?</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">Tentu saja. Dealer Suzuki Jogja menawarkan berbagai kemudahan pembiayaan, mulai dari DP ringan, cicilan terjangkau, hingga bonus aksesoris eksklusif untuk pembelian secara kredit maupun tunai.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Internal Links (Produk Lain) */}
        <section className="py-12 bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">Lihat Mobil Suzuki Lainnya</h3>
              <Link href="/produk" className="text-blue-600 hover:underline text-sm font-bold flex items-center">Lihat Semua <ChevronRight className="w-4 h-4 ml-1"/></Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {otherProducts.map((other) => (
                <Link href={`/produk/${other.slug}`} key={other.id}>
                  <Card className="hover:border-blue-500 hover:shadow-md transition-all cursor-pointer border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 group">
                    <CardContent className="p-4 flex items-center gap-4">
                      <div className="w-24 h-16 rounded overflow-hidden flex-shrink-0 bg-gray-100">
                        <img src={other.image} alt={other.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">{other.name}</h4>
                        <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mt-1">Mulai Rp {other.priceText} Jt</p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />

      {/* ✅ FITUR CRO 4: Sticky Bottom Action Bar (Khusus Tampilan HP) */}
      <div className="fixed bottom-0 left-0 right-0 p-3 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] z-50 md:hidden flex gap-3 animate-fade-in">
        <Button 
          onClick={handleTestDrive} 
          variant="outline" 
          className="flex-1 border-blue-600 text-blue-600 dark:border-blue-500 dark:text-blue-500 font-bold h-12"
        >
          <Car className="w-5 h-5 mr-2" />
          Test Drive
        </Button>
        <Button 
          onClick={() => handleAjukanKredit()} 
          className="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold h-12"
        >
          <MessageCircle className="w-5 h-5 mr-2" />
          Chat WA
        </Button>
      </div>

    </div>
  );
}