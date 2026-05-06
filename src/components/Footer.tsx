'use client';

import Link from 'next/link';
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';

const footerNavItems = [
  { id: 'home', label: 'Beranda Suzuki Jogja', href: '/' },
  { id: 'tentang-kami', label: 'Profil Dealer Kami', href: '/tentang-kami' },
  { id: 'produk', label: 'Katalog Kendaraan', href: '/produk' },
  { id: 'testimoni', label: 'Review Pelanggan', href: '/testimoni' },
  { id: 'promo', label: 'Info Promo Terbaru', href: '/promo' },
  { id: 'kontak', label: 'Hubungi Sales', href: '/kontak' },
];

const waTeam = [
  { nama: 'Yusuf', no: '6282174635218' },
  { nama: 'Dimas', no: '6287775741091' },
  { nama: 'Bima', no: '6289637144539' },
  { nama: 'Kafi', no: '6281329095557' },
  { nama: 'Nabila', no: '6283103278381' },
  { nama: 'Melly', no: '62895417267981' },
  { nama: 'Alma', no: '6282134148101' },
  { nama: 'Indah', no: '6282135245314' }
];

export default function Footer() {
  const handleChatWA = () => {
    const randomIndex = Math.floor(Math.random() * waTeam.length);
    const selectedContact = waTeam[randomIndex];
    
    const message = encodeURIComponent(`*Halo* admin Suzuki!! Saya dari website, mau tanya promo terbaik hari ini. Bisa dibantu ya..`);
    window.open(`https://wa.me/${selectedContact.no}?text=${message}`, '_blank');
  };

  return (
    {/* TEMA: Background Indigo pekat dengan aksen border atas Kuning */}
    <footer className="bg-indigo-950 border-t-4 border-yellow-400">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Logo & Description */}
          <div className="space-y-5">
            <Link href="/" className="inline-block bg-white p-2 rounded-xl shadow-sm">
              <img
                src="/suzuki-logo.png"
                alt="Logo Suzuki Jogja Footer"
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-indigo-200 leading-relaxed text-sm">
              Dealer resmi Suzuki Indonesia yang menyediakan berbagai model mobil berkualitas dengan
              penawaran terbaik dan pelayanan profesional.
            </p>
            <div className="flex space-x-3">
              <Button variant="outline" size="icon" className="border-indigo-700 bg-indigo-900/50 text-indigo-300 hover:bg-yellow-400 hover:text-indigo-950 hover:border-yellow-400 transition-all duration-300">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="border-indigo-700 bg-indigo-900/50 text-indigo-300 hover:bg-yellow-400 hover:text-indigo-950 hover:border-yellow-400 transition-all duration-300">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="border-indigo-700 bg-indigo-900/50 text-indigo-300 hover:bg-yellow-400 hover:text-indigo-950 hover:border-yellow-400 transition-all duration-300">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-5">
            <h4 className="text-lg font-bold text-white">Pintasan Cepat</h4>
            <ul className="space-y-3">
              {footerNavItems.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className="text-indigo-200 hover:text-yellow-400 transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-700"></span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-5">
            <h4 className="text-lg font-bold text-white">Kontak Kami</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-indigo-200 text-sm">
                <MapPin className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                <span>Jl. Magelang KM 8, Mlati Glondong<br/>Sendangadi, Kec. Mlati, Kabupaten Sleman<br/>Daerah Istimewa Yogyakarta 55285</span>
              </li>
              <li className="flex items-center space-x-3 text-indigo-200 text-sm">
                <Phone className="h-5 w-5 text-yellow-400 flex-shrink-0" />
                <span>+62 813 9263 6737</span>
              </li>
              <li className="flex items-center space-x-3 text-indigo-200 text-sm">
                <Mail className="h-5 w-5 text-yellow-400 flex-shrink-0" />
                <span>info@suzukidealer.co.id</span>
              </li>
            </ul>
          </div>

          {/* Jam Operasional */}
          <div className="space-y-5">
            <h4 className="text-lg font-bold text-white">Jam Operasional</h4>
            <ul className="space-y-3 text-indigo-200 text-sm">
              <li className="flex justify-between border-b border-indigo-800/50 pb-2">
                <span>Senin - Jumat</span>
                <span className="font-semibold text-white">08:00 - 17:00</span>
              </li>
              <li className="flex justify-between border-b border-indigo-800/50 pb-2">
                <span>Sabtu</span>
                <span className="font-semibold text-white">08:00 - 15:00</span>
              </li>
              <li className="flex justify-between pb-2">
                <span>Minggu</span>
                <span className="font-semibold text-white">09:00 - 15:00</span>
              </li>
            </ul>
            <Button
              className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold mt-2 shadow-lg shadow-[#25D366]/20"
              onClick={handleChatWA}
            >
              Chat WhatsApp
            </Button>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-indigo-800 mt-12 pt-8 text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-indigo-400 text-sm">
            © {new Date().getFullYear()} Suzuki Dealer Indonesia. Semua hak dilindungi undang-undang.
          </p>
          <p className="text-indigo-400 text-sm">
            Powered by <span className="text-yellow-400 font-semibold">Dealer Resmi Suzuki Jogja</span>
          </p>
        </div>
      </div>
    </footer>
  );
}