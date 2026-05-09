'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ArrowRight, Phone, Mail, MapPin, Sparkles, MessageSquare, Clock, Map } from 'lucide-react';
import { openWhatsApp } from '@/lib/whatsapp';

export default function KontakPage() {
  const defaultMessage = 'Halo admin Suzuki 👋 saya dari website, mau tanya promo terbaik hari ini. Bisa dibantu ya..';
  const [formData, setFormData] = useState({ name: '', email: '', message: defaultMessage });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const fullMessage = `Halo admin Suzuki!!\n\nNama: ${formData.name}\nEmail: ${formData.email}\n\nPesan:\n${formData.message}`;
    openWhatsApp(fullMessage);

    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: defaultMessage });
    }, 1000);
  };

  const handleDirectChat = () => {
    openWhatsApp(defaultMessage);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F7F9] font-sans selection:bg-amber-400 selection:text-slate-900">
      <Header />
      
      <main className="flex-1">
        
        {/* HERO SECTION - Playful Corporate Style */}
        <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-white rounded-b-[3rem] lg:rounded-b-[5rem] shadow-sm z-20 overflow-hidden">
          {/* Latar Belakang Shape Ceria */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-3xl opacity-60 -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-50 rounded-full blur-3xl opacity-60 translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 font-bold text-sm border border-blue-100 animate-fade-in mb-6">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>Pusat Bantuan & Layanan</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 leading-[1.1] tracking-tight animate-fade-in stagger-1">
                Mari Diskusikan <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-blue-400">Mobil Impian Anda.</span>
              </h1>

              <p className="text-lg md:text-xl text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto animate-fade-in stagger-2 mt-6">
                Tim ahli kami siap memberikan penawaran harga terbaik, simulasi kredit paling ringan, dan menjadwalkan *test drive* ke rumah Anda hari ini juga.
              </p>
            </div>
          </div>
        </section>

        {/* CONTACT FORM & INFO (BENTO GRID) */}
        <section className="py-16 relative z-10 -mt-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-10">
              
              {/* LEFT COLUMN: Contact Form */}
              <div className="lg:col-span-7">
                <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-slate-100 animate-fade-in stagger-3">
                  
                  {/* Tips Box */}
                  <div className="mb-10 p-5 bg-amber-50 rounded-2xl border border-amber-100 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                      <MessageSquare className="w-5 h-5 text-amber-600" />
                    </div>
                    <p className="text-slate-600 font-medium leading-relaxed text-sm">
                      <strong className="text-slate-900">Butuh respons cepat?</strong> Kami merekomendasikan Anda untuk langsung menekan tombol WhatsApp. Tim kami membalas rata-rata dalam 2 menit!
                    </p>
                  </div>

                  <h3 className="text-3xl font-black text-slate-900 mb-8 tracking-tight">Kirim Pesan Cepat</h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="block text-sm font-bold text-slate-700 ml-1">
                          Nama Lengkap
                        </label>
                        <Input
                          id="name"
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Ketik nama Anda"
                          required
                          className="h-14 rounded-xl bg-slate-50 border-slate-200 focus:bg-white focus:border-blue-500 focus:ring-blue-500 px-4 font-medium"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-bold text-slate-700 ml-1">
                          Alamat Email
                        </label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="Ketik email Anda"
                          required
                          className="h-14 rounded-xl bg-slate-50 border-slate-200 focus:bg-white focus:border-blue-500 focus:ring-blue-500 px-4 font-medium"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="block text-sm font-bold text-slate-700 ml-1">
                        Pesan Anda
                      </label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tuliskan pertanyaan atau kebutuhan Anda di sini..."
                        required
                        rows={5}
                        className="resize-none rounded-xl bg-slate-50 border-slate-200 focus:bg-white focus:border-blue-500 focus:ring-blue-500 p-4 font-medium text-base"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-14 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-lg font-black tracking-wide shadow-lg shadow-blue-600/20 transition-all hover:-translate-y-1"
                    >
                      {isSubmitting ? 'Mengarahkan ke WA...' : 'Kirim Pesan Sekarang'}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </div>
              </div>

              {/* RIGHT COLUMN: Contact Info (Dark Premium Bento) */}
              <div className="lg:col-span-5 flex flex-col gap-6 animate-fade-in stagger-4">
                
                {/* Info Card */}
                <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-10 text-white relative overflow-hidden shadow-2xl flex-1">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                  
                  <div className="relative z-10">
                    <h3 className="text-2xl font-black mb-8 tracking-tight">Informasi Kontak</h3>
                    
                    <ul className="space-y-8">
                      <li className="flex items-start space-x-5 group">
                        <div className="w-14 h-14 rounded-2xl bg-slate-800 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors duration-300">
                          <MapPin className="h-6 w-6 text-blue-400 group-hover:text-white transition-colors" />
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-300 mb-1 text-sm uppercase tracking-wider">Kunjungi Kami</h4>
                          <p className="text-white font-medium leading-relaxed">
                            Jl. Magelang KM 8, Mlati Glondong,<br/>
                            Sleman, Daerah Istimewa Yogyakarta 55285
                          </p>
                        </div>
                      </li>

                      <li className="flex items-start space-x-5 group">
                        <div className="w-14 h-14 rounded-2xl bg-slate-800 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors duration-300">
                          <Phone className="h-6 w-6 text-blue-400 group-hover:text-white transition-colors" />
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-300 mb-1 text-sm uppercase tracking-wider">Telepon & WA</h4>
                          <p className="text-white font-medium text-lg">+62 813 9263 6737</p>
                        </div>
                      </li>

                      <li className="flex items-start space-x-5 group">
                        <div className="w-14 h-14 rounded-2xl bg-slate-800 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors duration-300">
                          <Mail className="h-6 w-6 text-blue-400 group-hover:text-white transition-colors" />
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-300 mb-1 text-sm uppercase tracking-wider">Email Resmi</h4>
                          <p className="text-white font-medium">info@suzukidealer.co.id</p>
                        </div>
                      </li>
                      
                      <li className="flex items-start space-x-5 group">
                        <div className="w-14 h-14 rounded-2xl bg-slate-800 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors duration-300">
                          <Clock className="h-6 w-6 text-blue-400 group-hover:text-white transition-colors" />
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-300 mb-1 text-sm uppercase tracking-wider">Jam Buka</h4>
                          <p className="text-white font-medium">Senin - Sabtu: 08:00 - 17:00 <br/> Minggu: 09:00 - 15:00</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Direct WhatsApp Button Card */}
                <div className="bg-[#25D366] rounded-[2rem] p-6 text-center hover:bg-[#20bd5a] transition-colors shadow-xl shadow-[#25D366]/20 cursor-pointer" onClick={handleDirectChat}>
                  <div className="flex items-center justify-center gap-3">
                    <Phone className="h-8 w-8 text-white fill-white" />
                    <span className="text-white font-black text-2xl tracking-tight">Chat via WhatsApp</span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* MAP & FOOTER TRANSITION SECTION */}
        <section className="pt-24 pb-40 lg:pb-52 bg-white rounded-t-[3rem] lg:rounded-t-[5rem] border-t border-slate-100 mt-12 relative z-0">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 animate-fade-in">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 mb-6">
                <Map className="w-8 h-8" />
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
                Lokasi Dealer Kami
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto font-medium text-lg">
                Dealer Suzuki Sumber Baru Mobil sangat mudah dijangkau. Kami tunggu kedatangan Anda untuk melihat langsung unit yang tersedia.
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto animate-fade-in stagger-2">
              <div className="bg-slate-100 rounded-[2.5rem] overflow-hidden border-8 border-white shadow-2xl shadow-slate-200/50 h-[400px] md:h-[500px] relative">
                <iframe
                  title="Lokasi Suzuki Mlati Sumber Baru Mobil"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.308722421371!2d110.3585098750058!3d-7.756994992261541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a58f4a7cd2543%3A0xc07949bd00c8227b!2sSuzuki%20Sleman%20-%20Sumber%20Baru%20Mobil!5e0!3m2!1sen!2sid!4v1716301234567!5m2!1sen!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="filter contrast-[0.95] saturate-100"
                />
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}