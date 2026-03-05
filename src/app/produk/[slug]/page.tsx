'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Download, Car, Settings, Zap, Shield, 
  Wrench, Ruler, Users as UsersIcon, 
  Droplets, ChevronRight, Gift 
} from 'lucide-react';
// ✅ UBAH: Import getProductBySlug alih-alih getProductById
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
  
  // ✅ UBAH: Mengambil parameter sebagai string (slug) bukan parseInt
  // Asumsi nama folder diubah dari [id] menjadi [slug]
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

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product?.name,
    image: `https://www.suzuki-jogja.com${product?.image}`,
    description: product?.description,
    brand: {
      '@type': 'Brand',
      name: 'Suzuki'
    },
    offers: {
      '@type': 'Offer',
      price: product?.priceText ? parseFloat(product.priceText) * 1000000 : 0,
      priceCurrency: 'IDR',
      availability: 'https://schema.org/InStock',
      // ✅ UBAH: URL menggunakan slug produk
      url: `https://www.suzuki-jogja.com/produk/${slug}`,
    },
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
            <p className="text-xl text-muted-foreground mb-4">Memuat...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleTestDrive = () => {
      if (!product) return;
      const message = `Halo admin Suzuki!!\n\nSaya ingin memesan Test Drive untuk *${product.name}*. Mohon info jadwal dan lokasinya ya..`;
      const encodedMessage = encodeURIComponent(message);
      window.open(`https://wa.me/${getRandomWANumber()}?text=${encodedMessage}`, '_blank');
  };

  const handleAjukanKredit = (variantName?: string, region?: string) => {
    if (!product) return;
    const regionText = region ? ` (${region})` : '';
    const targetName = variantName ? `${product.name} - ${variantName}${regionText}` : product.name;
    const message = `Halo admin Suzuki!!\n\nSaya tertarik untuk mengajukan kredit untuk unit *${targetName}*. Mohon info simulasi kredit dan persyaratannya ya..`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${getRandomWANumber()}?text=${encodedMessage}`, '_blank');
  };

  const handleDownloadBrosur = () => {
    if (!product?.brochureUrl) return;
    window.open(product.brochureUrl, '_blank');
  };

  const VariantCard = ({ variant, priceData, region, idx }: any) => (
    <Card
      className="border-2 border-border hover:border-primary transition-all duration-300 animate-fade-in"
      style={{ animationDelay: `${idx * 50}ms` }}
    >
      <CardContent className="p-3">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <h4 className="text-base font-bold text-foreground mb-1">
              {variant.name}
            </h4>
            <p className="text-sm text-muted-foreground line-through mb-1">
              {priceData.priceOtr}
            </p>
            <p className="text-xl font-bold text-primary">
              {priceData.priceNett}
            </p>
          </div>
          <Button
            onClick={() => handleAjukanKredit(variant.name, region)}
            className="bg-green-600 hover:bg-green-700 text-white whitespace-nowrap text-sm px-4"
          >
            Ajukan Kredit
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="flex-1">
        {/* ... (Hero Section dan spesifikasi tetap sama persis) ... */}
        {/* Hero Section */}
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

              {/* Product Info */}
              <div className="flex flex-col justify-center animate-fade-in stagger-1">
                <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary-foreground text-sm font-medium w-fit mb-4">
                  {product.category}
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  {product.name}
                </h1>
                <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                  {product.description}
                </p>
                <div className="flex items-baseline space-x-2 mb-8">
                  <span className="text-gray-300 text-lg">Mulai</span>
                  <span className="text-4xl font-bold text-primary">
                    Rp {product.priceText} Jutaan
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    onClick={handleTestDrive}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8"
                  >
                    <Car className="mr-2 h-5 w-5" />
                    Pesan Test Drive
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={handleDownloadBrosur}
                    className="border-primary text-primary hover:bg-primary/10 text-lg px-8"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download Brosur
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specifications & Variants Section */}
        <section className="py-20 md:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16 animate-fade-in">
                <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary-foreground text-sm font-medium mb-4">
                  Spesifikasi & Harga
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Detail {product.name}
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                
                {/* Specifications */}
                <div className="order-2 lg:order-1 animate-fade-in stagger-1">
                  <Card className="border-2 border-border h-full">
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-bold text-foreground mb-6">
                        Spesifikasi Umum
                      </h3>
                      <div className="space-y-6">
                        <div className="flex items-start">
                          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                            <Wrench className="h-6 w-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm text-muted-foreground mb-1">Mesin</p>
                            <p className="text-foreground font-medium">{product.specifications.engine}</p>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                            <Settings className="h-6 w-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm text-muted-foreground mb-1">Transmisi</p>
                            <p className="text-foreground font-medium">{product.specifications.transmission}</p>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                            <Droplets className="h-6 w-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm text-muted-foreground mb-1">Bahan Bakar</p>
                            <p className="text-foreground font-medium">{product.specifications.fuel}</p>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                            <Zap className="h-6 w-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm text-muted-foreground mb-1">Daya Maksimum</p>
                            <p className="text-foreground font-medium">{product.specifications.power}</p>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                            <Shield className="h-6 w-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm text-muted-foreground mb-1">Torsi Maksimum</p>
                            <p className="text-foreground font-medium">{product.specifications.torque}</p>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                            <UsersIcon className="h-6 w-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm text-muted-foreground mb-1">Kapasitas Tempat Duduk</p>
                            <p className="text-foreground font-medium">{product.specifications.seating}</p>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                            <Ruler className="h-6 w-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm text-muted-foreground mb-1">Dimensi (P x L x T)</p>
                            <p className="text-foreground font-medium">{product.specifications.dimensions}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Variant List / Harga */}
                <div className="order-1 lg:order-2 animate-fade-in stagger-2">
                  <Tabs defaultValue="plat-ab" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 mb-6 bg-gray-800 p-1 rounded-lg">
                      <TabsTrigger 
                        value="plat-ab" 
                        className="data-[state=active]:bg-primary data-[state=active]:text-white text-gray-400 font-bold"
                      >
                        Plat AB (Jogja)
                      </TabsTrigger>
                      <TabsTrigger 
                        value="plat-aa-r" 
                        className="data-[state=active]:bg-primary data-[state=active]:text-white text-gray-400 font-bold"
                      >
                        Plat AA & R (Kedu/Bms)
                      </TabsTrigger>
                    </TabsList>

                    {/* Tab Content: Plat AB */}
                    <TabsContent value="plat-ab" className="mt-0">
                      <div className="space-y-3">
                        {product.variants[0]?.bonus && (
                          <div className="mb-4 p-4 bg-gradient-to-r from-blue-600/20 to-blue-900/20 border border-blue-600/50 rounded-lg flex items-start gap-3">
                            <Gift className="h-6 w-6 text-blue-500 flex-shrink-0 mt-1" />
                            <div>
                              <h4 className="font-bold text-blue-500 text-sm mb-1">Promo Spesial Plat AB</h4>
                              <p className="text-sm text-gray-300">{product.variants[0].bonus}</p>
                            </div>
                          </div>
                        )}

                        {product.variants.map((variant, idx) => (
                          <VariantCard 
                            key={`ab-${idx}`}
                            idx={idx}
                            variant={variant}
                            priceData={variant.priceAB}
                            region="Plat AB"
                          />
                        ))}
                      </div>
                    </TabsContent>

                    {/* Tab Content: Plat AA & R */}
                    <TabsContent value="plat-aa-r" className="mt-0">
                      <div className="space-y-3">
                        {product.variants[0]?.bonus && (
                          <div className="mb-4 p-4 bg-gradient-to-r from-yellow-600/20 to-yellow-900/20 border border-yellow-600/50 rounded-lg flex items-start gap-3">
                            <Gift className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-1" />
                            <div>
                              <h4 className="font-bold text-yellow-500 text-sm mb-1">Special Promo AA & R</h4>
                              <p className="text-sm text-gray-300">{product.variants[0].bonus}</p>
                            </div>
                          </div>
                        )}

                        {product.variants.map((variant, idx) => (
                          <VariantCard 
                            key={`aar-${idx}`}
                            idx={idx}
                            variant={variant}
                            priceData={variant.priceAAR}
                            region="Plat AA/R"
                          />
                        ))}
                        
                        <p className="text-xs text-muted-foreground mt-4 italic text-center">
                          *Harga berlaku untuk wilayah Kedu, Banyumas, Cilacap, Purworejo, Kebumen, Temanggung, Wonosobo, Magelang.
                        </p>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              </div>

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
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      if (e.currentTarget.parentElement) {
                        e.currentTarget.parentElement.innerHTML = `<span class="text-xs font-bold text-gray-400 border border-dashed border-gray-300 p-2 rounded">${partner.name}</span>`;
                      }
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}