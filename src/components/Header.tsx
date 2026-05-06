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
    { id: 'produk', label: 'Katalog', href: '/produk' },
    { id: 'artikel', label: 'Artikel', href: '/artikel' },
    { id: 'testimoni', label: 'Testimoni', href: '/testimoni' },
    { id: 'promo', label: 'Promo', href: '/promo' },
    { id: 'kontak', label: 'Kontak', href: '/kontak' },
  ];

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
    { nama: 'Melly', no: '62895417267981' },
    { nama: 'Alma', no: '6282134148101' },
    { nama: 'Indah', no: '6282135245314' }
  ];

  const handleHubungiKami = () => {
    const randomIndex = Math.floor(Math.random() * waTeam.length);
    const selectedContact = waTeam[randomIndex];
    
    const message = encodeURIComponent(`*Halo* admin Suzuki!! Saya dari website, mau tanya promo terbaik hari ini. Bisa dibantu ya..`);
    window.open(`https://wa.me/${selectedContact.no}?text=${message}`, '_blank');
  }

  const activePath = pathname === '/' ? 'home' : pathname.slice(1);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-indigo-100' : 'bg-transparent'
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
                alt="Dealer Resmi Suzuki Jogja"
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
                  'px-6 py-2 text-sm transition-all duration-200 relative group',
                  activePath === item.id
                    ? (isScrolled ? 'text-indigo-900 font-bold' : 'text-yellow-400 font-bold')
                    : (isScrolled ? 'text-slate-600 hover:text-indigo-900' : 'text-white/90 hover:text-yellow-400')
                )}
              >
                {item.label}
                <span className={cn(
                  'absolute bottom-0 left-0 h-0.5 rounded-full transition-all duration-300',
                  activePath === item.id
                    ? (isScrolled ? 'w-full bg-indigo-600' : 'w-full bg-yellow-400')
                    : (isScrolled ? 'w-0 group-hover:w-full group-hover:bg-indigo-600' : 'w-0 group-hover:w-full group-hover:bg-yellow-400')
                )} />
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3 md:gap-4">
            <Button
              onClick={handleHubungiKami}
              className="bg-yellow-400 hover:bg-yellow-500 text-indigo-950 shadow-sm
                h-8 px-4 text-xs                   
                md:h-10 md:px-6 md:text-sm         
                rounded-full font-extrabold transition-all duration-200 hover:shadow-md hover:shadow-yellow-400/40 hover:scale-105"
            >
              Hubungi Kami
            </Button>

            {/* Mobile Menu Trigger */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  aria-label="Buka Menu Navigasi"
                  className={cn(
                    "hover:bg-indigo-50",
                    isScrolled ? "text-indigo-950" : "text-white"
                  )}
                >
                  {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[350px]">
                <SheetTitle className="sr-only">Menu Navigasi Suzuki</SheetTitle>
                <nav className="flex flex-col space-y-4 mt-12">
                  {navItems.map((item) => (
                    <Link
                      key={item.id}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        'text-left px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 relative group',
                        activePath === item.id
                          ? 'text-indigo-700 bg-indigo-50 font-bold'
                          : 'hover:bg-slate-50 hover:text-indigo-600 text-slate-600'
                      )}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <div className="pt-4 border-t border-slate-100">
                    <Button 
                      onClick={() => {
                        handleHubungiKami();
                        setIsMobileMenuOpen(false);
                      }}
                      className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold w-full rounded-xl"
                    >
                      Hubungi Kami (WA)
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}