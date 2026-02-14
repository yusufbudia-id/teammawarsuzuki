'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

export default function KontakPage() {
  const waTeam = [
    { nama: 'Yusuf', no: '6282174635218' },
    { nama: 'Dimas', no: '6287775741091' },
    { nama: 'Bima', no: '6289637144539' },
    { nama: 'Kafi', no: '6281329095557' },
    { nama: 'Nabila', no: '6283103278381' },
    { nama: 'Risya', no: '6281818405854' }
  ];
  const defaultMessage = 'Halo admin Suzuki 👋 saya dari website, mau tanya promo terbaik hari ini. Bisa dibantu ya..';
  const [formData, setFormData] = useState({ name: '', email: '', message: defaultMessage });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 2. Fungsi helper untuk mendapatkan nomor random
  const getRandomWANumber = () => {
    const randomIndex = Math.floor(Math.random() * waTeam.length);
    return waTeam[randomIndex].no;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const fullMessage = `Halo admin Suzuki!!\n\n${formData.message}`;
    const encodedMessage = encodeURIComponent(fullMessage);
    
    // 3. Gunakan nomor random saat submit form
    const randomNo = getRandomWANumber();
    window.open(`https://wa.me/${randomNo}?text=${encodedMessage}`, '_blank');

    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: defaultMessage });
    }, 1000);
  };

  // 4. Fungsi untuk tombol chat langsung di bagian bawah
  const handleDirectChat = () => {
    const randomNo = getRandomWANumber();
    const message = encodeURIComponent(defaultMessage);
    window.open(`https://wa.me/${randomNo}?text=${message}`, '_blank');
  };
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
                  Hubungi Kami
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight animate-fade-in stagger-1 mt-8">
                Mari <span className="text-primary">Berdiskusi</span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto animate-fade-in stagger-2 mt-6">
                Tim kami siap membantu Anda menemukan mobil Suzuki yang tepat
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20 md:py-32 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <Card className="border border-border animate-fade-in">
                  <CardContent className="p-8">
                    <div className="mb-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
                      <p className="text-sm text-foreground leading-relaxed">
                        <span className="font-semibold">💡 Tips:</span> Hubungi admin Suzuki di bawah untuk menanyakan promo terbaik hari ini dengan menekan tombol WhatsApp atau mengisi form di samping.
                      </p>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-6">Hubungi Kami</h3>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="animate-fade-in stagger-1">
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          Nama Lengkap
                        </label>
                        <Input
                          id="name"
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Masukkan nama Anda"
                          required
                          className="h-12"
                        />
                      </div>

                      <div className="animate-fade-in stagger-2">
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          Email
                        </label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="Masukkan email Anda"
                          required
                          className="h-12"
                        />
                      </div>

                      <div className="animate-fade-in stagger-3">
                        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                          Pesan
                        </label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Halo admin Suzuki 👋 saya dari website, mau tanya promo terbaik hari ini. Bisa dibantu ya.."
                          required
                          rows={5}
                          className="resize-none"
                        />
                      </div>

                      <div className="animate-fade-in stagger-4">
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12 text-lg font-semibold"
                        >
                          {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>

                {/* Contact Info & Map */}
                <div className="space-y-6">
                  {/* Quick Contact */}
                  <Card className="border border-border animate-fade-in" style={{ animationDelay: '100ms' }}>
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-bold text-foreground mb-6">Informasi Kontak</h3>
                      <div className="space-y-6">
                        <div className="flex items-start space-x-4 animate-fade-in stagger-1">
                          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <MapPin className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground mb-1">Alamat</h4>
                            <p className="text-muted-foreground">
                              Jl. Magelang KM 8, Mlati Glondong,<br/>
                              Sendangadi, Kec. Mlati, Kabupaten Sleman,<br/>
                              Daerah Istimewa Yogyakarta 55285
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start space-x-4 animate-fade-in stagger-2">
                          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Phone className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground mb-1">Telepon</h4>
                            <p className="text-muted-foreground">+62 813 9263 6737</p>
                          </div>
                        </div>

                        <div className="flex items-start space-x-4 animate-fade-in stagger-3">
                          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Mail className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground mb-1">Email</h4>
                            <p className="text-muted-foreground">info@suzukidealer.co.id</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* WhatsApp Button */}
                  <Button
                    onClick={handleDirectChat} // Menggunakan fungsi random
                    className="w-full bg-green-600 hover:bg-green-700 text-white h-14 text-lg font-semibold animate-fade-in"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Chat via WhatsApp
                  </Button>

                  {/* Google Maps */}
                  <Card className="border border-border overflow-hidden animate-fade-in" style={{ animationDelay: '300ms' }}>
                    <div className="relative h-64 bg-muted">
                      <iframe
                        title="Lokasi Suzuki Mlati Sumber Baru Mobil"
                        src="https://maps.google.com/maps?q=Suzuki+Mlati+Sumber+Baru+Mobil+Yogyakarta&t=&z=15&ie=UTF8&iwloc=&output=embed"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </div>
                  </Card>
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
