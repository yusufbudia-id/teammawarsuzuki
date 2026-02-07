'use client';

import Link from 'next/link';
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navItems = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'tentang-kami', label: 'Tentang Kami', href: '/tentang-kami' },
  { id: 'produk', label: 'Produk', href: '/produk' },
  { id: 'testimoni', label: 'Testimoni', href: '/testimoni' },
  { id: 'promo', label: 'Promo', href: '/promo' },
  { id: 'kontak', label: 'Kontak', href: '/kontak' },
];

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo & Description */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <img
                src="/suzuki-logo.png"
                alt="Suzuki"
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Dealer resmi Suzuki Indonesia yang menyediakan berbagai model mobil berkualitas dengan
              penawaran terbaik dan pelayanan profesional.
            </p>
            <div className="flex space-x-3">
              <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Navigasi</h4>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Kontak Kami</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-muted-foreground text-sm">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Jl. Magelang KM 8, Mlati Glondong<br/>Sendangadi, Kec. Mlati, Kabupaten Sleman<br/>Daerah Istimewa Yogyakarta 55285</span>
              </li>
              <li className="flex items-center space-x-3 text-muted-foreground text-sm">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <span>+62 21 1234 5678</span>
              </li>
              <li className="flex items-center space-x-3 text-muted-foreground text-sm">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <span>info@suzukidealer.co.id</span>
              </li>
            </ul>
          </div>

          {/* Jam Operasional */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Jam Operasional</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li className="flex justify-between">
                <span>Senin - Jumat</span>
                <span className="font-medium">08:00 - 17:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sabtu</span>
                <span className="font-medium">08:00 - 15:00</span>
              </li>
              <li className="flex justify-between">
                <span>Minggu</span>
                <span className="font-medium">Tutup</span>
              </li>
            </ul>
            <Button
              className="w-full bg-green-600 hover:bg-green-700 text-white mt-4"
              onClick={() => window.open('https://wa.me/6282174635218', '_blank')}
            >
              Chat WhatsApp
            </Button>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Suzuki Dealer Indonesia. Semua hak dilindungi undang-undang.
          </p>
        </div>
      </div>
    </footer>
  );
}
