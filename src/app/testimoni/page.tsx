'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Budi Santoso',
    role: 'Pemilik Ertiga',
    rating: 5,
    text: 'Pelayanan sangat memuaskan! Tim sales sangat profesional dan membantu saya memilih unit yang tepat untuk keluarga. Recommended banget!',
    initials: 'BS',
    color: 'bg-blue-500',
  },
  {
    name: 'Siti Rahayu',
    role: 'Pemilik XL7',
    rating: 5,
    text: 'Proses pembelian sangat mudah dan cepat. Harga sangat kompetitif dengan fitur lengkap. Sangat puas dengan pelayanan dealer ini.',
    initials: 'SR',
    color: 'bg-pink-500',
  },
  {
    name: 'Ahmad Wijaya',
    role: 'Pemilik Carry',
    rating: 5,
    text: 'Sangat puas dengan pelayanan purna jual. Bengkelnya profesional dan sparepart selalu tersedia. Dealer terpercaya!',
    initials: 'AW',
    color: 'bg-green-500',
  },
  {
    name: 'Dewi Lestari',
    role: 'Pemilik Jimny',
    rating: 5,
    text: 'Jimny impian saya akhirnya tercapai! Terima kasih kepada tim yang sudah membantu dari awal sampai akhir dengan pelayanan yang sangat baik.',
    initials: 'DL',
    color: 'bg-purple-500',
  },
  {
    name: 'Rudi Hermawan',
    role: 'Pemilik Baleno',
    rating: 4,
    text: 'Mobil berkualitas dengan harga yang wajar. Pelayanan sales ramah dan responsif. Cukup puas dengan pengalaman pembelian di sini.',
    initials: 'RH',
    color: 'bg-orange-500',
  },
  {
    name: 'Maya Sari',
    role: 'Pemilik S-Presso',
    rating: 5,
    text: 'S-Presso cocok banget buat keseharian saya. Irit bensin dan nyaman dikendarai. Pelayanan dealer sangat memuaskan dari awal sampai akhir!',
    initials: 'MS',
    color: 'bg-teal-500',
  },
];

export default function TestimoniPage() {
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
                  Apa Kata Mereka?
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight animate-fade-in stagger-1 mt-8">
                Testimoni <span className="text-primary">Pelanggan</span>
              </h1>

              <p className="text-xl text-gray-300 max-w-2xl mx-auto animate-fade-in stagger-2 mt-6">
                Dengarkan langsung dari pelanggan kami tentang pengalaman mereka bersama dealer resmi Suzuki
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-20 md:py-32 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {testimonials.map((testimonial, idx) => (
                  <Card
                    key={idx}
                    className="border border-border hover:border-primary transition-all duration-300 hover-lift animate-fade-in"
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className={`w-12 h-12 rounded-full ${testimonial.color} flex items-center justify-center text-white font-bold`}>
                            {testimonial.initials}
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground">{testimonial.name}</h3>
                            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-1 mb-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                        ))}
                        {testimonial.rating < 5 && [...Array(5 - testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-muted-foreground" />
                        ))}
                      </div>

                      <div className="relative">
                        <Quote className="absolute -top-2 -left-2 h-8 w-8 text-primary/20" />
                        <p className="text-sm text-foreground leading-relaxed pl-4">
                          {testimonial.text}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
