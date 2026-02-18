'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Download, Car, Settings, Zap, Shield, 
  Wrench, Ruler, Users as UsersIcon, 
  Droplets, ChevronRight, Gift, MessageCircle
} from 'lucide-react';
import { products, getProductById } from '@/lib/products-data';

const leasingPartners = [
  { name: 'Suzuki Finance', src: '/images/leasing/sufi.webp' },
  { name: 'BCA Finance', src: '/images/leasing/bca.webp' },
  { name: 'Mandiri Tunas Finance', src: '/images/leasing/mtf.webp' },
  { name: 'Adira Finance', src: '/images/leasing/adira.webp' },
  { name: 'Oto Finance', src: '/images/leasing/muf.webp' },
  { name: 'Clipan Finance', src: '/images/leasing/clipan.webp' },
  { name: 'IMFI Finance', src: '/images/leasing/imfi.webp' },
];

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [selectedImage, setSelectedImage] = useState(0);
  const id = parseInt(params.id as string);
  const product = getProductById(id);

  const waTeam = [
    { nama: 'Yusuf', no: '6282174635218' },
    { nama: 'Dimas', no: '6287775741091' },
    { nama: 'Bima', no: '6289637144539' },
    { nama: 'Kafi', no: '6281329095557' },
    { nama: 'Nabila', no: '6283103278381' },
    { nama: 'Risya', no: '6281818405854' }
  ];

  const getRandomWANumber = () => {
    const randomIndex = Math.floor(Math.random() * waTeam.length);
    return waTeam[randomIndex].no;
  };

  useEffect(() => {
    if (!product) router.push('/produk');
  }, [product, router]);

  if (!product) return null;

  const handleAction = (type: 'test-drive' | 'kredit' | 'brosur', variant?: string) => {
    let message = "";
    if (type === 'test-drive') {
      message = `Halo admin Suzuki!!\n\nSaya ingin memesan Test Drive untuk *${product.name}*. Mohon info jadwal dan lokasinya ya..`;
    } else if (type === 'kredit') {
      message = `Halo admin Suzuki!!\n\nSaya tertarik dengan *${product.name} ${variant || ''}*. Mohon info simulasi kredit dan promonya.`;
    }

    if (type === 'brosur') {
      window.open(product.brochureUrl, '_blank');
    } else {
      window.open(`https://wa.me/${getRandomWANumber()}?text=${encodeURIComponent(message)}`, '_blank');
    }
  };

  // Sub-komponen Spesifikasi Grid
  const SpecItem = ({ icon: Icon, label, value }: any) => (
    <div className="flex flex-col p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700 transition-hover hover:border-primary/30">
      <Icon className="h-6 w-6 text-primary mb-3" />
      <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">{label}</span>
      <span className="text-sm font-bold text-foreground mt-1 leading-tight">{value}</span>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950 font-sans">
      <Header />
      
      <main className="flex-1">
        {/* --- HERO SECTION (DARK PREMIUM) --- */}
        <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-slate-950">
          <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
            <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/30 rounded-full blur-[120px]" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Gallery */}
              <div className="space-y-6">
                <div className="relative group aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-slate-900">
                  <img
                    src={product.gallery?.[selectedImage] || product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex gap-4 overflow-x-auto pb-2 no-scrollbar">
                  {product.gallery?.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(idx)}
                      className={`relative flex-shrink-0 w-24 md:w-32 aspect-video rounded-xl overflow-hidden border-2 transition-all ${
                        selectedImage === idx ? 'border-primary ring-4 ring-primary/20' : 'border-transparent opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Text Content */}
              <div className="text-white">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6">
                  Suzuki Indonesia
                </div>
                <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4 italic uppercase">
                  {product.name}
                </h1>
                <p className="text-lg text-slate-400 mb-8 max-w-xl leading-relaxed">
                  {product.description}
                </p>
                <div className="flex items-baseline gap-3 mb-10">
                  <span className="text-slate-500 text-sm uppercase font-bold tracking-widest">Harga Mulai</span>
                  <span className="text-4xl md:text-5xl font-black text-primary">Rp {product.priceText} <span className="text-2xl italic">Juta</span></span>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button 
                    size="lg" 
                    onClick={() => handleAction('test-drive')}
                    className="h-14 px-8 rounded-full bg-primary hover:bg-primary/90 text-white font-bold text-lg shadow-xl shadow-primary/20"
                  >
                    <Car className="mr-2 h-5 w-5" /> Pesan Test Drive
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    onClick={() => handleAction('brosur')}
                    className="h-14 px-8 rounded-full border-white/20 hover:bg-white/10 text-white font-bold text-lg"
                  >
                    <Download className="mr-2 h-5 w-5" /> Brosur
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- SPECS & VARIANTS (CLEAN LIGHT/DARK) --- */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              
              {/* Specs Grid (8 Cols) */}
              <div className="lg:col-span-7 space-y-8">
                <div>
                  <h2 className="text-3xl font-black tracking-tight mb-2 italic uppercase">Spesifikasi Teknikal</h2>
                  <div className="h-1.5 w-20 bg-primary rounded-full" />
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <SpecItem icon={Wrench} label="Mesin" value={product.specifications.engine} />
                  <SpecItem icon={Settings} label="Transmisi" value={product.specifications.transmission} />
                  <SpecItem icon={Zap} label="Tenaga" value={product.specifications.power} />
                  <SpecItem icon={Droplets} label="BBM" value={product.specifications.fuel} />
                  <SpecItem icon={UsersIcon} label="Kapasitas" value={product.specifications.seating} />
                  <SpecItem icon={Ruler} label="Dimensi" value={product.specifications.dimensions} />
                </div>
              </div>

              {/* Variants (5 Cols) */}
              <div className="lg:col-span-5">
                <Tabs defaultValue="plat-ab" className="w-full">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold uppercase tracking-tight">Daftar Harga</h3>
                    <TabsList className="bg-slate-100 dark:bg-slate-800 rounded-full p-1">
                      <TabsTrigger value="plat-ab" className="rounded-full px-4 data-[state=active]:bg-primary data-[state=active]:text-white">Jogja</TabsTrigger>
                      <TabsTrigger value="plat-aa-r" className="rounded-full px-4 data-[state=active]:bg-primary data-[state=active]:text-white">Kedu/Bms</TabsTrigger>
                    </TabsList>
                  </div>

                  <TabsContent value="plat-ab" className="space-y-4 outline-none">
                    {product.variants.map((v, i) => (
                      <VariantRow key={i} name={v.name} price={v.priceAB.priceNett} otr={v.priceAB.priceOtr} onAction={() => handleAction('kredit', v.name)} />
                    ))}
                  </TabsContent>
                  <TabsContent value="plat-aa-r" className="space-y-4 outline-none">
                    {product.variants.map((v, i) => (
                      <VariantRow key={i} name={v.name} price={v.priceAAR.priceNett} otr={v.priceAAR.priceOtr} onAction={() => handleAction('kredit', v.name)} />
                    ))}
                  </TabsContent>
                </Tabs>
              </div>

            </div>
          </div>
        </section>

        {/* --- LEASING SECTION --- */}
        <section className="py-20 bg-slate-50 dark:bg-slate-900/50 border-y border-slate-100 dark:border-slate-800">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-12 uppercase tracking-widest text-slate-400">Leasing Partners</h2>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 hover:opacity-100 transition-opacity">
              {leasingPartners.map((lp, i) => (
                <img key={i} src={lp.src} alt={lp.name} className="h-8 md:h-12 w-auto grayscale hover:grayscale-0 transition-all duration-500" />
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Floating Call to Action (Mobile Only) */}
      <div className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-md">
        <Button 
          onClick={() => handleAction('test-drive')}
          className="w-full h-14 rounded-full bg-green-600 hover:bg-green-700 shadow-2xl flex items-center justify-center gap-2 text-white font-bold text-lg"
        >
          <MessageCircle className="h-6 w-6" /> Chat Konsultan Sekarang
        </Button>
      </div>

      <Footer />
    </div>
  );
}

// Komponen Row Varian yang lebih clean
function VariantRow({ name, price, otr, onAction }: any) {
  return (
    <div className="group flex items-center justify-between p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-all">
      <div className="space-y-1">
        <h4 className="font-bold text-slate-900 dark:text-white leading-none group-hover:text-primary transition-colors">{name}</h4>
        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-400 line-through">{otr}</span>
          <span className="text-lg font-black text-primary tracking-tight">{price}</span>
        </div>
      </div>
      <Button onClick={onAction} size="sm" className="rounded-full bg-slate-900 dark:bg-primary text-white hover:scale-105 transition-transform">
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
}