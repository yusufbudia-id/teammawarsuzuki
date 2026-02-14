'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { id: 'home', label: 'Home', href: '/' },
    { id: 'tentang-kami', label: 'Tentang Kami', href: '/tentang-kami' },
    { id: 'produk', label: 'Produk', href: '/produk' },
    { id: 'artikel', label: 'Artikel', href: '/artikel' },
    { id: 'testimoni', label: 'Testimoni', href: '/testimoni' },
    { id: 'promo', label: 'Promo', href: '/promo' },
    { id: 'kontak', label: 'Kontak', href: '/kontak' },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

    const waTeam = [
    { nama: 'Yusuf', no: '6282174635218' },
    { nama: 'Dimas', no: '6287775741091' },
    { nama: 'Bima', no: '6289637144539' },
    { nama: 'Kafi', no: '6281329095557' },
    { nama: 'Nabila', no: '6283103278381' },
    { nama: 'Risya', no: '6281818405854' }
  ];

const handleWhatsAppClick = () => {
    // Logika untuk memilih nomor secara random
    const randomIndex = Math.floor(Math.random() * waTeam.length);
    const selectedContact = waTeam[randomIndex];
    
    const message = encodeURIComponent(`*Halo* admin Suzuki!! Saya dari website, mau tanya promo terbaik hari ini. Bisa dibantu ya..`);
    window.open(`https://wa.me/${selectedContact.no}?text=${message}`, '_blank');

  // Get active path from pathname
  const activePath = pathname === '/' ? 'home' : pathname.slice(1);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-background/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2 hover:scale-105 transition-transform duration-200"
          >
            <div className="flex items-center justify-center">
              <img
                src="/suzuki-logo.png"
                alt="Suzuki Logo"
                className="h-10 w-auto"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className={cn(
                  'px-6 py-2 text-sm font-medium transition-all duration-200 relative group',
                  activePath === item.id
                    ? 'text-primary font-semibold'
                    : 'text-muted-foreground hover:text-primary'
                )}
              >
                {item.label}
                <span className={cn(
                  'absolute bottom-0 left-0 h-0.5 rounded-full transition-all duration-300',
                  activePath === item.id
                    ? 'w-full bg-primary'
                    : 'w-0 group-hover:w-full group-hover:bg-primary'
                )} />
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              onClick={handleHubungiKami}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 rounded-full font-semibold transition-all duration-200 hover:shadow-lg hover:scale-105"
            >
              Hubungi Kami
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="hover:bg-accent text-primary">
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[350px]">
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <nav className="flex flex-col space-y-4 mt-12">
                {navItems.map((item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      'text-left px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 relative border-b-2 border-transparent group',
                      activePath === item.id
                        ? 'text-primary font-semibold'
                        : 'hover:bg-accent hover:text-primary text-muted-foreground'
                    )}
                  >
                    {item.label}
                    <span className={cn(
                      'absolute bottom-0 left-0 h-0.5 rounded-full transition-all duration-300',
                      activePath === item.id
                        ? 'w-full bg-primary'
                        : 'w-0 group-hover:w-full group-hover:bg-primary'
                    )} />
                  </Link>
                ))}
                <Button 
                  onClick={handleWhatsAppClick}
                  className="bg-green-600 hover:bg-green-700 text-white"
                >
                  Hubungi Kami
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
