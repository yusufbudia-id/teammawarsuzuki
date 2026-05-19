'use client';

import Link from 'next/link';
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { openWhatsApp } from '@/lib/whatsapp';

const footerNavItems = [
  { id: 'home', label: 'Beranda', href: '/' },
  { id: 'tentang-kami', label: 'Profil Dealer', href: '/tentang-kami' },
  { id: 'produk', label: 'Katalog Kendaraan', href: '/produk' },
  { id: 'simulasi-kredit', label: 'Simulasi Kredit', href: '/simulasi-kredit' },
  { id: 'testimoni', label: 'Testimoni Klien', href: '/testimoni' },
  { id: 'promo', label: 'Promo Spesial', href: '/promo' },
  { id: 'kontak', label: 'Hubungi Sales', href: '/kontak' },
];

export default function Footer() {
  const handleChatWA = () => {
    const message = `*Halo* admin Suzuki!! Saya dari website, mau tanya promo terbaik hari ini. Bisa dibantu ya..`;
    openWhatsApp(message);
  };

  return (
    <footer className="bg-slate-900 text-slate-400 pt-20 pb-10 rounded-t-[3rem] lg:rounded-t-[5rem] -mt-10 relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Call to Action Box - Playful Corporate Style */}
        <div className="bg-blue-600 rounded-[2rem] p-8 md:p-12 mb-16 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl shadow-blue-900/20 transform -translate-y-12 lg:-translate-y-24">
          <div>
            <h3 className="text-2xl md:text-4xl font-black text-white mb-2">Siap Bawa Pulang Mobil Baru?</h3>
            <p className="text-blue-100 font-medium text-lg">Dapatkan simulasi kredit teringan khusus hari ini.</p>
          </div>
          <Button 
            onClick={handleChatWA}
            className="bg-amber-400 hover:bg-amber-500 text-slate-900 h-14 px-8 rounded-full font-black text-lg shadow-lg hover:scale-105 transition-all w-full md:w-auto"
          >
            Konsultasi Sekarang <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 lg:-mt-12">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-block bg-white p-3 rounded-2xl shadow-sm">
              <img
                src="/suzuki-logo.png"
                alt="Logo Suzuki Jogja"
                className="h-10 w-auto"
              />
            </Link>
            <p className="leading-relaxed font-medium">
              Mitra dealer resmi Suzuki terpercaya di Yogyakarta. Kami memberikan jaminan harga OTR terbaik, pelayanan ramah, dan proses yang transparan.
            </p>
            <div className="flex space-x-3">
              <Button variant="outline" size="icon" className="rounded-full bg-slate-800 border-slate-700 text-white hover:bg-blue-600 hover:border-blue-600 transition-all">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full bg-slate-800 border-slate-700 text-white hover:bg-blue-600 hover:border-blue-600 transition-all">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full bg-slate-800 border-slate-700 text-white hover:bg-blue-600 hover:border-blue-600 transition-all">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 lg:col-start-6 space-y-6">
            <h4 className="text-lg font-black text-white">Eksplorasi</h4>
            <ul className="space-y-4">
              {footerNavItems.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className="hover:text-amber-400 font-medium transition-colors flex items-center gap-2"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-4 space-y-6">
            <h4 className="text-lg font-black text-white">Pusat Bantuan</h4>
            <ul className="space-y-5">
              <li className="flex items-start space-x-4">
                <div className="bg-slate-800 p-2.5 rounded-xl">
                  <MapPin className="h-5 w-5 text-amber-400" />
                </div>
                <span className="font-medium mt-1">Jl. Magelang KM 8, Mlati Glondong<br/>Sleman, DI Yogyakarta 55285</span>
              </li>
              <li className="flex items-center space-x-4">
                <div className="bg-slate-800 p-2.5 rounded-xl">
                  <Phone className="h-5 w-5 text-amber-400" />
                </div>
                <span className="font-medium">+62 813 9263 6737</span>
              </li>
              <li className="flex items-center space-x-4">
                <div className="bg-slate-800 p-2.5 rounded-xl">
                  <Mail className="h-5 w-5 text-amber-400" />
                </div>
                <span className="font-medium">info@suzukidealer.co.id</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright & Backlink */}
        <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left flex flex-col gap-1.5">
            <p className="font-medium text-sm text-slate-300">
              © {new Date().getFullYear()} Suzuki Jogja Official. Hak Cipta Dilindungi.
            </p>
            {/* Backlink SEO Natural dengan Personal Branding */}
            <p className="text-xs text-slate-500 font-medium">
              Managed by <a href="https://www.suzukiautojogja.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors underline decoration-slate-700 underline-offset-4 font-bold">Yusuf Suzuki</a>
            </p>
          </div>
          
          <div className="flex items-center gap-6 text-sm font-medium">
            <Link href="#" className="hover:text-white">Syarat & Ketentuan</Link>
            <Link href="#" className="hover:text-white">Kebijakan Privasi</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}