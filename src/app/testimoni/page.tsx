'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { X, Star, Quote, Sparkles, Camera, MessageCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

// Data Foto (Judul disesuaikan dengan konteks Dealer Mobil)
const photos = [
  { id: 1, src: '/images/galeri/galeri-1.jpg', title: 'Serah Terima Suzuki Fronx' },
  { id: 2, src: '/images/galeri/galeri-2.jpg', title: 'Delivery Fronx Keluarga Baru' },
  { id: 3, src: '/images/galeri/galeri-3.jpg', title: 'XL7 Hybrid Sampai Tujuan' },
  { id: 4, src: '/images/galeri/galeri-4.jpg', title: 'Sahabat Suzuki Fronx' },
  { id: 5, src: '/images/galeri/galeri-5.jpg', title: 'Sahabat Usaha Carry Pick Up' },
  { id: 6, src: '/images/galeri/galeri-6.jpg', title: 'Menunjang MBG dengan APV Blindvan' },
  { id: 7, src: '/images/galeri/galeri-7.jpg', title: 'Meluncur bersama Carry Pick Up' },
];

// Data Dummy Testimoni Pelanggan
const testimonials = [
  {
    id: 1,
    name: 'Budi Santoso',
    car: 'Suzuki XL7 Hybrid',
    text: 'Pelayanan sangat memuaskan! Proses kredit dibantu sampai *approve*, dan mobil dikirim tepat waktu ke rumah. Sales-nya ramah dan sangat edukatif menjelaskan fitur Hybrid.',
  },
  {
    id: 2,
    name: 'Siti Aminah',
    car: 'Suzuki Ertiga',
    text: 'Dapat diskon paling besar di Jogja! Terima kasih atas pelayanannya yang jujur dan transparan. Sekarang keluarga makin nyaman jalan-jalan pakai Ertiga baru.',
  },
  {
    id: 3,
    name: 'Andi Pratama',
    car: 'Suzuki Jimny 5-Door',
    text: 'Impian punya Jimny terwujud tanpa inden yang ribet. Komunikasi dari tim dealer sangat proaktif mengabarkan status unit. Aftersales-nya juga top!',
  },
  {
    id: 4,
    name: 'CV. Maju Jaya',
    car: 'Suzuki Carry Pick Up',
    text: 'Pengadaan armada usaha jadi sangat mudah. Penawaran harga OTR untuk pembelian borongan sangat bersahabat. Terima kasih Suzuki Jogja.',
  },
];

export default function TestimoniPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F7F9] font-sans selection:bg-amber-400 selection:text-slate-900">
      <Header />

      <main className="flex-1">
        
        {/* HERO SECTION - Playful Corporate Style */}
        <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-white rounded-b-[3rem] lg:rounded-b-[5rem] shadow-sm z-20 overflow-hidden">
          {/* Latar Belakang Shape Ceria */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-50 rounded-full blur-3xl opacity-50 translate-y-1/3 -translate-x-1/3"></div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 font-bold text-sm border border-blue-100 animate-fade-in mb-6">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>Apa Kata Mereka?</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 leading-[1.1] tracking-tight animate-fade-in stagger-1">
                Kisah Bahagia <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-blue-400">Pelanggan Kami.</span>
              </h1>

              <p className="text-lg md:text-xl text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto animate-fade-in stagger-2 mt-6">
                Kepercayaan dan kepuasan Anda adalah prioritas utama kami. Lihat bukti nyata pelayanan terbaik dari ratusan keluarga di Yogyakarta dan sekitarnya.
              </p>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS (TEXT REVIEWS) SECTION */}
        <section className="py-20 relative z-10 -mt-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="flex items-center justify-center gap-3 mb-12 animate-fade-in stagger-2">
              <MessageCircle className="w-8 h-8 text-blue-600" />
              <h2 className="text-3xl font-black text-slate-900 tracking-tight">Ulasan Pelanggan</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {testimonials.map((review, index) => (
                <div 
                  key={review.id} 
                  className="bg-white rounded-[2rem] p-8 md:p-10 shadow-sm border border-slate-100 relative group hover:shadow-xl hover:border-blue-200 transition-all duration-500 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Quote className="absolute top-8 right-8 w-16 h-16 text-slate-50 group-hover:text-blue-50 transition-colors duration-500 rotate-180 z-0" />
                  
                  <div className="relative z-10">
                    <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    
                    <p className="text-slate-600 font-medium text-lg leading-relaxed mb-8">
                      "{review.text}"
                    </p>
                    
                    <div className="flex items-center gap-4 mt-auto">
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl flex items-center justify-center text-blue-600 font-black text-2xl border border-blue-200/50 shadow-sm">
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-black text-slate-900 text-lg">{review.name}</h4>
                        <p className="text-xs text-blue-600 font-bold uppercase tracking-wider">{review.car}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PHOTO GALLERY SECTION */}
        <section className="py-16 relative z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="flex items-center justify-center gap-3 mb-12 animate-fade-in">
              <Camera className="w-8 h-8 text-blue-600" />
              <h2 className="text-3xl font-black text-slate-900 tracking-tight">Galeri Dokumentasi</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {photos.map((photo, index) => (
                <div 
                  key={photo.id}
                  className="relative group cursor-pointer overflow-hidden rounded-[2rem] aspect-[4/3] bg-slate-100 shadow-sm border border-slate-200 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => setSelectedImage(photo.src)}
                >
                  <img 
                    src={photo.src} 
                    alt={photo.title}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Overlay Gradient & Teks */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <div>
                      <p className="text-white font-bold text-sm tracking-wide leading-tight">
                        {photo.title}
                      </p>
                      <p className="text-amber-400 text-[10px] font-black uppercase tracking-widest mt-1">
                        Klik untuk memperbesar
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA BOTTOM / PENYAMBUNG FOOTER - Diperbaiki agar Footer kontras */}
        <section className="pt-24 pb-40 lg:pb-52 bg-white rounded-t-[3rem] lg:rounded-t-[5rem] border-t border-slate-100 mt-20 relative z-0">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto bg-blue-600 rounded-[3rem] p-10 md:p-16 relative overflow-hidden shadow-2xl shadow-blue-900/10 text-center animate-fade-in">
              {/* Dekorasi Background CTA */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400 rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl opacity-10 translate-y-1/2 -translate-x-1/2"></div>

              <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">
                  Siap Menjadi Bagian dari <br className="hidden sm:block" /> Keluarga Suzuki?
                </h2>
                <p className="text-blue-100 font-medium text-lg max-w-2xl mx-auto mb-10">
                  Jangan tunda lagi. Hubungi tim sales kami sekarang untuk mendapatkan promo spesial dan layanan test drive langsung di rumah Anda.
                </p>
                <Link href="/kontak">
                  <Button className="bg-amber-400 hover:bg-amber-500 text-slate-900 h-14 px-10 rounded-full font-black text-lg shadow-xl shadow-amber-400/20 hover:scale-105 transition-all">
                    Konsultasi Sekarang <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />

      {/* Lightbox / Modal Overlay - Diperbarui desainnya agar lebih premium */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/95 backdrop-blur-sm p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
          >
            <X size={24} strokeWidth={3} />
          </button>

          <div 
            className="relative max-w-5xl max-h-[85vh] w-full rounded-2xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImage} 
              className="w-full h-full max-h-[85vh] object-contain bg-transparent"
              alt="Full view Galeri"
            />
          </div>
        </div>
      )}
    </div>
  );
}