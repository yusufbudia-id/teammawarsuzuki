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
  Droplets, ChevronRight, Gift, CheckCircle2
} from 'lucide-react';
import { products, getProductById } from '@/lib/products-data';

const leasingPartners = [
  { name: 'Suzuki Finance', src: '/images/leasing/sufi.webp' },
  { name: 'BCA Finance', src: '/images/leasing/bca.webp' },
  { name: 'Mandiri Tunas Finance', src: '/images/leasing/mtf.webp' },
  { name: 'Adira Finance', src: '/images/leasing/adira.webp' },
  { name: 'Oto Finance', src: '/images/leasing/muf.webp' },
  { name: 'Clipan Finance', src: '/images/leasing/clipan.webp' },
  { name: 'IMFI', src: '/images/leasing/imfi.webp' },
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
    if (!product) {
      router.push('/produk');
    }
  }, [product, router]);

  if (!product) return null;

  const handleAction = (type: 'test-drive' | 'kredit' | 'brosur', variant?: string, region?: string) => {
    const waBase = `https://wa.me/${getRandomWANumber()}?text=`;
    let message = "";

    if (type === 'test-drive') {
      message = `Halo admin Suzuki!!\n\nSaya ingin memesan Test Drive untuk *${product.name}*. Mohon info jadwal dan lokasinya ya..`;
    } else if (type === 'kredit') {
      const target = variant ? `${product.name} - ${variant}${region ? ` (${region})` : ''}` : product.name;
      message = `Halo admin Suzuki!!\n\nSaya tertarik untuk mengajukan kredit untuk unit *${target}*. Mohon info simulasi kreditnya ya..`;
    } else if (type === 'brosur') {
      window.open(product.brochureUrl, '_blank');
      return;
    }

    window.open(`${waBase}${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-1">
        {/* --- HERO SECTION --- */}
        <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-slate-950">
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10 pointer-events-none"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* Left: Product Gallery */}
              <div className="space-y-6 animate-in fade-in slide-in-from-left duration-700">
                <div className="relative group aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-gray-900">
                  <img
                    src={product.gallery?.[selectedImage] || product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="grid grid-cols-4 gap-4">
                  {product.gallery?.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(idx)}
                      className={`relative aspect-video rounded-xl overflow-hidden border-2 transition-all ${
                        selectedImage === idx ? 'border-primary ring-2 ring-primary/20' : 'border-transparent opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="Gallery" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Right: Product Info */}
              <div className="text-white space-y-8 animate-in fade-in slide-in-from-right duration-700">
                <div>
                  <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                    <span>{product.category}</span>
                  </div>
                  <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4">
                    {product.name}
                  </h1>
                  <p className="text-lg text-gray-400 max-w-lg leading-relaxed">
                    {product.description}
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm inline-block">
                  <p className="text-sm text-gray-400 mb-1">Harga Mulai Dari</p>
                  <p className="text-4xl font-bold text-primary">
                    <span className="text-xl mr-1">Rp</span>{product.priceText}<span className="text-xl ml-1">Jutaan</span>
                  </p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button 
                    size="xl" 
                    className="bg-primary hover:bg-primary/90 text-white rounded-full px-10 h-14 text-lg font-bold shadow-xl shadow-primary/20"
                    onClick={() => handleAction('test-drive')}
                  >
                    <Car className="mr-2 h-5 w-5" /> Pesan Test Drive
                  </Button>
                  <Button 
                    variant="outline" 
                    size="xl" 
                    className="rounded-full px-10 h-14 text-lg font-bold border-white/20 text-white hover:bg-white/10"
                    onClick={() => handleAction('brosur')}
                  >
                    <Download className="mr-2 h-5 w-5" /> Brosur
                  </Button>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* --- SPECIFICATIONS & PRICES --- */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-12 gap-16">
              
              {/* Left: Spec Grid (7 Cols) */}
              <div className="lg:col-span-7">
                <div className="mb-10">
                  <h2 className="text-3xl font-black text-slate-900 tracking-tight mb-2">Spesifikasi Unggulan</h2>
                  <div className="h-1.5 w-20 bg-primary rounded-full"></div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    { label: 'Mesin', value: product.specifications.engine, icon: Wrench },
                    { label: 'Transmisi', value: product.specifications.transmission, icon: Settings },
                    { label: 'Bahan Bakar', value: product.specifications.fuel, icon: Droplets },
                    { label: 'Tenaga', value: product.specifications.power, icon: Zap },
                    { label: 'Torsi', value: product.specifications.torque, icon: Shield },
                    { label: 'Kapasitas', value: product.specifications.seating, icon: UsersIcon },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center p-5 bg-white rounded-2xl shadow-sm border border-slate-200 transition-hover hover:border-primary/30">
                      <div className="h-12 w-12 rounded-xl bg-slate-100 flex items-center justify-center mr-4 text-primary">
                        <item.icon size={24} />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">{item.label}</p>
                        <p className="text-slate-900 font-bold">{item.value}</p>
                      </div>
                    </div>
                  ))}
                  <div className="sm:col-span-2 flex items-center p-5 bg-white rounded-2xl shadow-sm border border-slate-200">
                    <div className="h-12 w-12 rounded-xl bg-slate-100 flex items-center justify-center mr-4 text-primary">
                      <Ruler size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Dimensi (P x L x T)</p>
                      <p className="text-slate-900 font-bold">{product.specifications.dimensions}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Price Tabs (5 Cols) */}
              <div className="lg:col-span-5">
                <Tabs defaultValue="plat-ab" className="w-full">
                  <div className="flex flex-col mb-8">
                    <h2 className="text-3xl font-black text-slate-900 tracking-tight mb-4">Daftar Harga</h2>
                    <TabsList className="bg-slate-200 p-1 rounded-xl h-14">
                      <TabsTrigger value="plat-ab" className="rounded-lg font-bold data-[state=active]:bg-white data-[state=active]:text-primary">
                        Plat AB (Jogja)
                      </TabsTrigger>
                      <TabsTrigger value="plat-aa-r" className="rounded-lg font-bold data-[state=active]:bg-white data-[state=active]:text-primary">
                        Plat AA & R
                      </TabsTrigger>
                    </TabsList>
                  </div>

                  <TabsContent value="plat-ab" className="space-y-4 focus-visible:outline-none">
                    {product.variants.map((v, i) => (
                      <VariantRow key={i} name={v.name} otr={v.priceAB.priceOtr} nett={v.priceAB.priceNett} onAction={() => handleAction('kredit', v.name, 'Plat AB')} />
                    ))}
                  </TabsContent>
                  
                  <TabsContent value="plat-aa-r" className="space-y-4 focus-visible:outline-none">
                    {product.variants.map((v, i) => (
                      <VariantRow key={i} name={v.name} otr={v.priceAAR.priceOtr} nett={v.priceAAR.priceNett} onAction={() => handleAction('kredit', v.name, 'Plat AA/R')} />
                    ))}
                  </TabsContent>
                </Tabs>
                
                <div className="mt-8 p-6 rounded-2xl bg-primary/5 border border-primary/10">
                  <div className="flex gap-3">
                    <Gift className="text-primary flex-shrink-0" />
                    <p className="text-sm text-slate-600">
                      <strong>Promo Bulan Ini:</strong> Gratis jasa servis hingga 50.000km, kaca film premium, dan paket merchandise eksklusif.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* --- LEASING --- */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Partner Pembiayaan</h3>
              <p className="text-slate-500">Proses cepat, bunga ringan, dan syarat mudah.</p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-10 opacity-60 hover:opacity-100 transition-opacity">
              {leasingPartners.map((p, i) => (
                <img key={i} src={p.src} alt={p.name} className="h-10 md:h-12 w-auto grayscale hover:grayscale-0 transition-all cursor-pointer" />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

// Sub-component agar kode lebih bersih
function VariantRow({ name, otr, nett, onAction }: { name: string, otr: string, nett: string, onAction: () => void }) {
  return (
    <div className="group flex items-center justify-between p-5 bg-white rounded-2xl border border-slate-200 shadow-sm hover:border-primary/50 transition-all">
      <div className="flex-1">
        <h4 className="font-extrabold text-slate-800 group-hover:text-primary transition-colors">{name}</h4>
        <div className="flex items-center gap-2 text-xs mt-1">
          <span className="text-slate-400 line-through">{otr}</span>
          <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded font-bold uppercase tracking-tighter text-[10px]">Promo</span>
        </div>
        <p className="text-xl font-black text-slate-900 mt-1">{nett}</p>
      </div>
      <Button 
        onClick={onAction}
        size="sm"
        className="bg-slate-900 hover:bg-primary text-white rounded-full font-bold shadow-lg"
      >
        Simulasi Kredit
      </Button>
    </div>
  );
}