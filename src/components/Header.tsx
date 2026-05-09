'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Home, Grid, Tag, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { openWhatsApp } from '@/lib/whatsapp';

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

  const handleHubungiKami = () => {
    const message = `*Halo* admin Suzuki!! Saya dari website, mau tanya promo terbaik hari ini. Bisa dibantu ya..`;
    openWhatsApp(message);
  }

  const activePath = pathname === '/' ? 'home' : pathname.slice(1);
  
  // Logika pintar: Deteksi jika ini halaman detail produk (/produk/nama-mobil)
  const isProductDetailPage = pathname.startsWith('/produk/') && pathname !== '/produk';

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          isScrolled 
            ? 'bg-white/80 backdrop-blur-xl shadow-sm border-b border-slate-100 py-2' 
            : 'bg-transparent py-4'
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center space-x-2 hover:opacity-80 transition-opacity duration-200"
            >
              <div className="flex items-center justify-center bg-white p-2 rounded-2xl shadow-sm border border-slate-100">
                <img
                  src="/suzuki-logo.png"
                  alt="Dealer Resmi Suzuki Jogja"
                  className="h-8 w-auto"
                />
              </div>
            </Link>

            {/* Desktop Navigation (Gaya Pill Modern) */}
            <nav className="hidden md:flex items-center space-x-1 bg-white/50 backdrop-blur-md px-2 py-1.5 rounded-full border border-slate-200 shadow-sm">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className={cn(
                    'px-5 py-2 text-sm font-bold transition-all duration-300 rounded-full',
                    activePath === item.id
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center gap-3 md:gap-4">
              <Button
                onClick={handleHubungiKami}
                className="bg-amber-400 hover:bg-amber-500 text-slate-900 
                  h-10 px-6 text-sm rounded-full font-black tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-amber-400/30 hover:-translate-y-0.5 hidden sm:flex"
              >
                Tanya Promo WA
              </Button>

              {/* Mobile Menu Trigger (Hanya muncul jika bukan di halaman detail produk agar tidak ganda dengan Bottom Bar) */}
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild className="md:hidden">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    aria-label="Buka Menu"
                    className="bg-white text-slate-900 rounded-full shadow-sm border border-slate-200 hover:bg-slate-100"
                  >
                    {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[350px] rounded-l-[2rem] border-l-0">
                  <SheetTitle className="sr-only">Menu Navigasi Suzuki</SheetTitle>
                  <nav className="flex flex-col space-y-2 mt-12">
                    {navItems.map((item) => (
                      <Link
                        key={item.id}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={cn(
                          'text-left px-5 py-4 rounded-2xl text-base font-bold transition-all duration-200',
                          activePath === item.id
                            ? 'bg-blue-50 text-blue-600'
                            : 'hover:bg-slate-50 text-slate-600'
                        )}
                      >
                        {item.label}
                      </Link>
                    ))}
                    <div className="pt-6 mt-6 border-t border-slate-100">
                      <Button 
                        onClick={() => {
                          handleHubungiKami();
                          setIsMobileMenuOpen(false);
                        }}
                        className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold w-full h-14 rounded-2xl text-lg"
                      >
                        Chat WhatsApp
                      </Button>
                    </div>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      {/* GLOBAL MOBILE BOTTOM NAVIGATION */}
      {!isProductDetailPage && (
        <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden animate-in slide-in-from-bottom-8 duration-500">
          <div className="bg-slate-900/95 backdrop-blur-xl border border-slate-700/50 rounded-[2rem] shadow-2xl p-2 flex justify-between items-center gap-1">
            
            <Link 
              href="/" 
              className={cn(
                "flex flex-col items-center justify-center flex-1 py-2 px-1 rounded-2xl transition-colors",
                activePath === 'home' ? 'text-white' : 'text-slate-500 hover:text-slate-300'
              )}
            >
              <Home className={cn("w-5 h-5 mb-1", activePath === 'home' ? 'text-blue-400 fill-blue-400/20' : '')} />
              <span className="text-[10px] font-bold tracking-wider">Home</span>
            </Link>

            <Link 
              href="/produk" 
              className={cn(
                "flex flex-col items-center justify-center flex-1 py-2 px-1 rounded-2xl transition-colors",
                activePath === 'produk' ? 'text-white' : 'text-slate-500 hover:text-slate-300'
              )}
            >
              <Grid className={cn("w-5 h-5 mb-1", activePath === 'produk' ? 'text-blue-400 fill-blue-400/20' : '')} />
              <span className="text-[10px] font-bold tracking-wider">Katalog</span>
            </Link>

            <Link 
              href="/promo" 
              className={cn(
                "flex flex-col items-center justify-center flex-1 py-2 px-1 rounded-2xl transition-colors",
                activePath === 'promo' ? 'text-white' : 'text-slate-500 hover:text-slate-300'
              )}
            >
              <Tag className={cn("w-5 h-5 mb-1", activePath === 'promo' ? 'text-blue-400 fill-blue-400/20' : '')} />
              <span className="text-[10px] font-bold tracking-wider">Promo</span>
            </Link>

            <button 
              onClick={handleHubungiKami}
              className="flex flex-col items-center justify-center flex-[1.2] py-2 px-1 bg-[#25D366] hover:bg-[#1DA851] text-white rounded-2xl shadow-lg shadow-[#25D366]/20 transition-all active:scale-95"
            >
              <MessageCircle className="w-5 h-5 mb-1" />
              <span className="text-[10px] font-bold tracking-wider">Hubungi</span>
            </button>

          </div>
        </div>
      )}
    </>
  );
}