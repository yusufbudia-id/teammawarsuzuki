'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check, ArrowRight, Sparkles, Shield, Headphones, Award } from 'lucide-react';

const promos = [
  {
    title: 'Promo Terbatas',
    subtitle: 'Diskon Spesial Hari Ini',
    description: 'Dapatkan diskon hingga Rp 20 juta dan gratis aksesoris eksklusif untuk pembelian unit tertentu.',
    features: [
      'Diskon hingga Rp 20 juta',
      'Gratis aksesoris premium',
      'Gratis biaya admin',
      'Free service 1 tahun',
    ],
    highlight: 'Terbatas 50 Unit',
  },
  {
    title: 'Bunga Ringan 0%',
    subtitle: 'Kredit Termudah',
    description: 'NPM terendah untuk semua model dengan tenor fleksibel hingga 7 tahun.',
    features: [
      'Bunga mulai 0%',
      'Tenor hingga 7 tahun',
      'DP mulai 10%',
      'Proses cepat & mudah',
    ],
    highlight: 'S&K Berlaku',
  },
  {
    title: 'Paket Servis Gratis',
    subtitle: 'Purna Jual Terbaik',
    description: 'Layanan purna jual gratis dengan mekanik profesional dan sparepart asli.',
    features: [
      'Free service 4x',
      'Gratis sparepart',
      'Mekanik profesional',
      'Garansi 100% original',
    ],
    highlight: '3 Tahun',
  },
  {
    title: 'Tukar Tambah',
    subtitle: 'Upgrade Mobil Baru',
    description: 'Nikmati nilai tukar terbaik untuk semua model lama Anda dengan mobil baru.',
    features: [
      'Nilai tukar tinggi',
      'Proses cepat',
      'Transparan & aman',
      'Bonus aksesoris',
    ],
    highlight: 'All Brand',
  },
  {
    title: 'Garansi Resmi 3+3',
    subtitle: 'Perlindungan Lengkap',
    description: 'Garansi mesin 3 tahun plus garansi komponen 3 tahun untuk ketenangan pikiran.',
    features: [
      'Garansi mesin 3 tahun',
      'Garansi komponen 3 tahun',
      'Coverage nasional',
      'Klaim mudah',
    ],
    highlight: '100.000 KM',
  },
  {
    title: 'Test Drive Gratis',
    subtitle: 'Rasakan Sensasinya',
    description: 'Coba test drive gratis dan rasakan kenyamanan berkendara dengan mobil impian.',
    features: [
      'Test drive gratis',
      'Fasilitas lengkap',
      'Sales profesional',
      'Mobil bersih & ready',
    ],
    highlight: 'Booking Sekarang',
  },
];

const whyChooseUs = [
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: 'Terpercaya',
    description: 'Dealer resmi Suzuki dengan ribuan pelanggan puas',
  },
  {
    icon: <Headphones className="h-6 w-6" />,
    title: 'Profesional',
    description: 'Tim sales dan mekanik yang berpengalaman',
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: 'Spesial',
    description: 'Promo eksklusif yang tidak akan Anda temukan di tempat lain',
  },
  {
    icon: <Award className="h-6 w-6" />,
    title: 'Best Seller',
    description: 'Terbukti sebagai dealer Suzuki terbaik di Yogyakarta',
  },
];

export default function PromoPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block animate-fade-in">
                <span className="px-4 py-2 rounded-full bg-primary/20 text-primary-foreground text-sm font-medium border border-primary/30">
                  Promo Spesial
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight animate-fade-in stagger-1 mt-8">
                Penawaran <span className="text-primary">Terbaik</span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto animate-fade-in stagger-2 mt-6">
                Dapatkan penawaran eksklusif dan promo menarik untuk pembelian mobil Suzuki impian Anda
              </p>
            </div>
          </div>
        </section>

        {/* Promo Grid */}
        <section className="py-20 md:py-32 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {promos.map((promo, idx) => (
                  <Card
                    key={idx}
                    className="border border-border hover:border-primary transition-all duration-300 hover-lift animate-fade-in"
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    <CardContent className="p-6">
                      <div className="mb-4">
                        <span className="text-xs font-semibold text-primary-foreground bg-primary px-3 py-1 rounded-full">
                          {promo.highlight}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{promo.title}</h3>
                      <p className="text-sm text-primary font-medium mb-3">{promo.subtitle}</p>
                      <p className="text-sm text-muted-foreground mb-4">{promo.description}</p>
                      <ul className="space-y-2 mb-6">
                        {promo.features.map((feature, i) => (
                          <li key={i} className="flex items-center text-sm text-foreground">
                            <Check className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                        Pesan Sekarang
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 md:py-32 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <span className="px-4 py-2 rounded-full bg-primary/20 text-primary-foreground text-sm font-medium border border-primary/30">
                  Keunggulan
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-8 mb-4">
                  Mengapa Memilih Kami?
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Alasan mengapa ribuan pelanggan memilih dealer kami sebagai pilihan terbaik
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {whyChooseUs.map((item, idx) => (
                  <Card
                    key={idx}
                    className="border border-border hover:border-primary transition-all duration-300 animate-fade-in"
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    <CardContent className="p-6 text-center">
                      <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 text-primary">
                        {item.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-20 md:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Tertarik dengan <span className="text-primary">Promo</span> Kami?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Hubungi kami sekarang untuk informasi lebih lanjut atau klaim promo yang tersedia
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/kontak">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8"
                  >
                    Hubungi Kami
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/produk">
                  <Button
                    size="lg"
                    className="bg-white hover:bg-white/90 text-gray-900 text-lg px-8"
                  >
                    Lihat Produk
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
