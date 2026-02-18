'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronRight, ChevronDown } from 'lucide-react';

// ✅ DAFTAR LOGO LEASING (Format .webp)
const leasingPartners = [
  { name: 'Suzuki Finance', src: '/images/leasing/sufi.webp' },
  { name: 'BCA Finance', src: '/images/leasing/bca.webp' },
  { name: 'Mandiri Tunas Finance', src: '/images/leasing/mtf.webp' },
  { name: 'Adira Finance', src: '/images/leasing/adira.webp' },
  { name: 'Oto Finance', src: '/images/leasing/muf.webp' },
  { name: 'Clipan Finance', src: '/images/leasing/clipan.webp' },
  { name: 'Clipan Finance', src: '/images/leasing/imfi.webp' },
];

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="/images/suzuki-hero.jpg"
              alt="Suzuki Showroom"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-800/85 to-black/90" />
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-6xl mx-auto text-center space-y-8">
              <div className="inline-block animate-fade-in">
                <span className="px-4 py-2 rounded-full bg-primary/20 text-primary-foreground text-sm font-medium border border-primary/30">
                  Dealer Resmi Suzuki Indonesia
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight animate-fade-in stagger-1">
                Temukan Mobil Suzuki{' '}
                <br />
                <span className="text-primary">Impian Anda</span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto animate-fade-in stagger-2">
                Nikmati pengalaman membeli mobil yang mudah, transparan, dan profesional. Tersedia promo spesial untuk New Ertiga, XL7 Hybrid, Carry Pick-up, Jimny, Fronx, hingga S-Presso. Dukungan after-sales resmi dan harga paling kompetitif di Yogyakarta siap menanti Anda.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in stagger-3">
                <Link href="/produk">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-white px-8 py-6 rounded-full text-lg font-semibold transition-all hover:shadow-2xl hover:scale-105 w-full sm:w-auto"
                  >
                    Lihat Produk
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/testimoni">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white/30 text-blue-500 hover:bg-white/10 px-8 py-6 rounded-full text-lg font-semibold transition-all w-full sm:w-auto"
                  >
                    Lihat Galeri
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8 pt-8 border-t border-white/10 animate-fade-in stagger-4">
                <div className="text-center animate-fade-in">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">1000+</div>
                  <div className="text-gray-400 text-sm md:text-base">Unit Terjual</div>
                </div>
                <div className="text-center animate-fade-in stagger-1">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</div>
                  <div className="text-gray-400 text-sm md:text-base">Pelanggan Puas</div>
                </div>
                <div className="text-center animate-fade-in stagger-2">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">10+</div>
                  <div className="text-gray-400 text-sm md:text-base">Tahun Pengalaman</div>
                </div>
                <div className="text-center animate-fade-in stagger-3">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">6</div>
                  <div className="text-gray-400 text-sm md:text-base">Model Tersedia</div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="h-10 w-10 text-gray-400" />
          </div>
        </section>

        {/* ✅ LEASING PARTNER SECTION - LOGO BERWARNA */}
        <section className="py-16 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
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
                    // ✅ Perubahan di sini: class grayscale dan opacity dihapus agar logo tetap berwarna
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