'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Car, Award, Users, Shield, HeadphonesIcon } from 'lucide-react';

const advantages = [
  {
    icon: Award,
    title: 'Dealer Resmi',
    description: 'Dealer resmi Suzuki Indonesia dengan jaminan keaslian produk'
  },
  {
    icon: Users,
    title: 'Pelayanan Profesional',
    description: 'Tim sales berpengalaman siap melayani kebutuhan Anda'
  },
  {
    icon: Shield,
    title: 'Garansi Resmi',
    description: 'Garansi resmi Suzuki Indonesia untuk ketenangan pikiran'
  },
  {
    icon: HeadphonesIcon,
    title: 'Layanan Purna Jual',
    description: 'Bengkel resmi dan suku cadang original yang mudah diakses'
  }
];

export default function TentangKamiPage() {
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
                  Tentang Kami
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight animate-fade-in stagger-1 mt-8">
                Dealer Suzuki <span className="text-primary">Terpercaya</span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto animate-fade-in stagger-2 mt-6">
                Kami adalah dealer resmi Suzuki Indonesia yang berkomitmen memberikan pelayanan terbaik
                untuk kebutuhan kendaraan Anda.
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 md:py-32 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              {/* Vision & Mission */}
              <div className="grid md:grid-cols-2 gap-8 mb-16">
                <Card className="border border-border hover-lift animate-fade-in">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                        <Car className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground">Visi</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      Menjadi dealer Suzuki terdepan yang memberikan kepuasan pelanggan maksimal
                      melalui pelayanan berkualitas dan produk otomotif terbaik di Indonesia.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border border-border hover-lift animate-fade-in stagger-1">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                        <Award className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground">Misi</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      Menyediakan produk Suzuki berkualitas dengan penawaran terbaik, memberikan
                      layanan purna jual yang andal, dan membangun hubungan jangka panjang dengan
                      pelanggan.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Advantages */}
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center animate-fade-in">
                  Keunggulan <span className="text-primary">Dealer Kami</span>
                </h2>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {advantages.map((advantage, index) => {
                    const Icon = advantage.icon;
                    return (
                      <Card key={index} className="border border-border hover-lift text-center animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                        <CardContent className="p-6">
                          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                            <Icon className="h-8 w-8 text-primary" />
                          </div>
                          <h4 className="text-lg font-bold text-foreground mb-2">{advantage.title}</h4>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {advantage.description}
                          </p>
                        </CardContent>
                      </Card>
                    );
                  })}
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
