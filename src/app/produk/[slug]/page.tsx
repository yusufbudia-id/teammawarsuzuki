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

  // Fungsi untuk menghitung "Hemat Rp XX Juta"
  const getSavings = (otr: string, nett: string) => {
    const numOtr = parseInt(otr.replace(/[^0-9]/g, ''));
    const numNett = parseInt(nett.replace(/[^0-9]/g, ''));
    if (numOtr > numNett) {
      const diff = numOtr - numNett;
      return `Hemat Rp ${(diff / 1000000).toLocaleString('id-ID')} Jt`;
    }
    return null;
  };

  // Komponen Kartu Varian dengan Price Anchoring
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
        
        {/* BAGIAN ATAS (HERO SECTION) - TETAP MENGGUNAKAN DESAIN LAMA YANG GELAP & ELEGAN */}
        <section className="py-12 md:py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              
              {/* Image Gallery */}
              <div className="space-y-4 animate-fade-in mt-12 md:mt-10">
                <div className="relative aspect-video rounded-xl overflow-hidden border border-border">
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
                      className={`relative aspect-video rounded-lg overflow-hidden border-2 transition-all ${
                        selectedImage === idx ? 'border-primary' : 'border-border hover:border-primary/50'
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

              {/* Product Info (SEO Optimized) */}
              <div className="flex flex-col justify-center animate-fade-in stagger-1">
                <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary-foreground text-sm font-medium w-fit mb-4">
                  {product.category}
                </span>
                
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Suzuki {product.name} Jogja – Harga, Spesifikasi & Promo Kredit
                </h1>
                
                <p className="text-lg text-gray-300 mb-4 leading-relaxed">
                  {product.description}
                </p>

                {/* Section Keyword Lokal */}
                <div className="bg-gray-800/50 border border-gray-700 p-4 rounded-lg mb-6">
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Suzuki {product.name} Jogja merupakan kendaraan pilihan yang banyak diminati masyarakat Yogyakarta dan sekitarnya. Dealer Suzuki Jogja menyediakan berbagai promo menarik untuk Anda, seperti diskon harga maksimal, DP ringan, serta cicilan kredit yang terjangkau.
                  </p>
                </div>

                <div className="flex items-baseline space-x-2 mb-8">
                  <span className="text-gray-300 text-lg">Mulai</span>
                  <span className="text-4xl font-bold text-primary">
                    Rp {product.priceText} Jutaan
                  </span>
                </div>

                <div className="hidden md:flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    onClick={handleTestDrive}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8"
                  >
                    <Car className="mr-2 h-5 w-5" />
                    Pesan Test Drive
                  </Button>
                  {product.brochureUrl && (
                    <Button
                      size="lg"
                      variant="outline"
                      onClick={() => window.open(product.brochureUrl, '_blank')}
                      className="border-primary text-primary hover:bg-primary/10 text-lg px-8"
                    >
                      <Download className="mr-2 h-5 w-5" />
                      Download Brosur
                    </Button>
                  )}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* BAGIAN BAWAH - MENGGUNAKAN DESAIN BARU YANG TERANG & RAPI */}
        <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-950">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              
              <div className="text-center mb-12 animate-fade-in">
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-4">
                  Daftar Harga & Spesifikasi
                </h2>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                  Pilih varian {product.name} yang paling sesuai dengan kebutuhan Anda. Nikmati promo eksklusif untuk wilayah Jogja, Kedu, dan Banyumas.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
                
                {/* Variant List / Harga (Kiri/Utama) */}
                <div className="lg:col-span-7 order-1 animate-fade-in stagger-1">
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

                {/* Specifications (Kanan/Samping - Lengket di layar) */}
                <div className="lg:col-span-5 order-2 animate-fade-in stagger-2">
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

        {/* Leasing Partner Section */}
        <section className="py-16 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 animate-fade-in">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Leasing Partner Terpercaya
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Kami bekerjasama dengan berbagai lembaga pembiayaan terkemuka untuk memberikan kemudahan dan pilihan terbaik bagi Anda.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 animate-fade-in stagger-1">
              {leasingPartners.map((partner, index) => (
                <div 
                  key={index} 
                  className="group relative w-32 h-20 md:w-40 md:h-24 flex items-center justify-center p-2 transition-all duration-300 hover:scale-110"
                >
                  <img
                    src={partner.src}
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />

      {/* STICKY BOTTOM ACTION BAR (Khusus Mobile) */}
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