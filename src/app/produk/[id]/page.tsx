'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Download, Car, Settings, CheckCircle, Zap, Shield, Users, Wrench, Ruler, Users as UsersIcon, Droplets, ChevronRight } from 'lucide-react';
import { products, ProductType, getProductById } from '@/lib/products-data';

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [selectedImage, setSelectedImage] = useState(0);
  const id = parseInt(params.id as string);
  const product = getProductById(id);

  // 1. Tambahkan daftar tim WA untuk randomisasi
  const waTeam = [
    { nama: 'Yusuf', no: '6282174635218' },
    { nama: 'Dimas', no: '6287775741091' },
    { nama: 'Bima', no: '6289637144539' },
    { nama: 'Kafi', no: '6281329095557' },
    { nama: 'Nabila', no: '6283103278381' },
    { nama: 'Risya', no: '6281818405854' }
  ];

  // Helper untuk mendapatkan nomor random
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
            <p className="text-xl text-muted-foreground mb-4">Memuat...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const advantagesIcons = [Zap, Shield, Users, Settings];

  const handleTestDrive = () => {
      if (!product) return;
      const message = `Halo admin Suzuki!!\n\nSaya ingin memesan Test Drive untuk *${product.name}*. Mohon info jadwal dan lokasinya ya..`;
      const encodedMessage = encodeURIComponent(message);
      window.open(`https://wa.me/${getRandomWANumber()}?text=${encodedMessage}`, '_blank');
  };
      // 2. MODIFIKASI: Fungsi Ajukan Kredit dengan parameter varian
  const handleAjukanKredit = (variantName?: string) => {
    if (!product) return;

    // Jika variantName ada, masukkan ke pesan, jika tidak gunakan nama produk umum
    const targetName = variantName ? `${product.name} - ${variantName}` : product.name;
    
    const message = `Halo admin Suzuki!!\n\nSaya tertarik untuk mengajukan kredit untuk unit *${targetName}*. Mohon info simulasi kredit dan persyaratannya ya..`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${getRandomWANumber()}?text=${encodedMessage}`, '_blank');
  };

  const handleDownloadBrosur = () => {
    if (!product?.brochureUrl) return;
    window.open(product.brochureUrl, '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 pt-6 md:pt-7">
        {/* Hero Section */}
        <section className="py-12 md:py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Image Gallery */}
              <div className="space-y-4 animate-fade-in">
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

                {/* CTA Buttons */}
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

              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                {/* Specifications - Left Side */}
                <div className="animate-fade-in stagger-1">
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

                {/* Variant List - Right Side */}
                <div className="animate-fade-in stagger-2">
                  <div className="space-y-2 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
                    {product.variants.map((variant, idx) => (
                      <Card
                        key={idx}
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
                                {variant.priceOtr}
                              </p>
                              <p className="text-xl font-bold text-primary">
                                {variant.priceNett}
                              </p>
                            </div>
                            {/* UBAH DI SINI: bg-primary menjadi bg-green-600 dan hover:bg-green-700 */}
                            <Button
                              onClick={() => handleAjukanKredit(variant.name)}
                              className="bg-green-600 hover:bg-green-700 text-white whitespace-nowrap text-sm px-4"
                            >
                              Ajukan Kredit
                              <ChevronRight className="ml-2 h-4 w-4" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
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
