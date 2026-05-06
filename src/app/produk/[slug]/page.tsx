'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from 'next/link';
import Image from 'next/image';
import { 
  Download, Car, Settings, Zap, Shield, 
  Wrench, Ruler, Users as UsersIcon, 
  Droplets, ChevronRight, Gift, HelpCircle, 
  MessageCircle, Sparkles, Star
} from 'lucide-react';
import { products, getProductBySlug } from '@/lib/products-data';

const leasingPartners = [
  { name: 'Suzuki Finance', src: '/images/leasing/sufi.webp' },
  { name: 'BCA Finance', src: '/images/leasing/bca.webp' },
  { name: 'Mandiri Tunas Finance', src: '/images/leasing/mtf.webp' },
  { name: 'Adira Finance', src: '/images/leasing/adira.webp' },
  { name: 'Oto Finance', src: '/images/leasing/muf.webp' },
  { name: 'Clipan Finance', src: '/images/leasing/clipan.webp' },
  { name: 'Indomobil Finance', src: '/images/leasing/imfi.webp' },
];

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [selectedImage, setSelectedImage] = useState(0);
  
  const slug = params.slug as string; 
  const product = getProductBySlug(slug);

  const waTeam = [
    { nama: 'Yusuf', no: '6282174635218' },
    { nama: 'Egy', no: '6281327260515' },
    { nama: 'Bima', no: '6289637144539' },
    { nama: 'Kafi', no: '6281329095557' },
    { nama: 'Nabila', no: '6283103278381' },
    { nama: 'Alma', no: '6282134148101' },
    { nama: 'Indah', no: '6282135245314' }
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

  const otherProducts = products.filter(p => p.id !== product.id).slice(0, 3);

  const handleAction = (type: 'drive' | 'credit', variant?: string) => {
    const msg = type === 'drive' 
      ? `Halo admin Suzuki!!\n\nSaya ingin memesan Test Drive untuk *${product.name}*.`
      : `Halo admin Suzuki!!\n\nSaya tertarik info kredit unit *${product.name}${variant ? ' - ' + variant : ''}*.`;
    window.open(`https://wa.me/${getRandomWANumber()}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const VariantCard = ({ variant, priceData, region, idx }: any) => {
    const otr = parseInt(priceData.priceOtr.replace(/[^0-9]/g, ''));
    const nett = parseInt(priceData.priceNett.replace(/[^0-9]/g, ''));
    const savings = otr > nett ? `Hemat Rp ${((otr - nett) / 1000000).toLocaleString('id-ID')} Jt` : null;

    return (
      <div 
        className="bg-white rounded-2xl p-5 md:p-6 border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 group flex flex-col md:flex-row md:items-center justify-between gap-4 animate-fade-in"
        style={{ animationDelay: `${idx * 100}ms` }}
      >
        <div className="space-y-1">
          <h4 className="text-xl font-black text-slate-900 group-hover:text-blue-600 transition-colors uppercase tracking-tight">{variant.name}</h4>
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-slate-400 line-through">{priceData.priceOtr}</span>
            {savings && <span className="bg-red-50 text-red-600 text-[10px] font-black px-2 py-0.5 rounded-full border border-red-100 uppercase">{savings}</span>}
          </div>
          <div className="text-2xl font-black text-slate-900 tracking-tighter">
            <span className="text-sm font-bold mr-1">Rp</span>{priceData.priceNett}
          </div>
        </div>
        <Button onClick={() => handleAction('credit', variant.name)} className="bg-blue-600 hover:bg-blue-700 text-white font-black rounded-xl h-12 px-8 shadow-lg shadow-blue-600/20">
          <MessageCircle className="mr-2 w-5 h-5" /> HUBUNGI SALES
        </Button>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F7F9] font-sans selection:bg-amber-400 selection:text-slate-900">
      <Header />
      <main className="flex-1">
        
        {/* HERO DETAIL SECTION */}
        <section className="relative pt-32 pb-20 bg-slate-950 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-40 mix-blend-overlay">
            <Image src="/hero/suzuki-hero.webp" alt="Background" fill className="object-cover blur-sm" />
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* Image Gallery */}
              <div className="space-y-4 animate-fade-in">
                <div className="relative aspect-[16/10] rounded-[2.5rem] overflow-hidden border-4 border-white/10 shadow-2xl bg-slate-900">
                  <Image src={product.gallery?.[selectedImage] || product.image} alt={product.name} fill className="object-contain p-4 md:p-8" />
                  <div className="absolute top-6 left-6 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                    <span className="text-white text-xs font-black uppercase tracking-widest">{product.category}</span>
                  </div>
                </div>
                <div className="flex gap-4 overflow-x-auto pb-2 no-scrollbar">
                  {product.gallery?.map((img, idx) => (
                    <button key={idx} onClick={() => setSelectedImage(idx)} className={`relative w-24 md:w-32 aspect-video rounded-2xl overflow-hidden border-2 transition-all shrink-0 ${selectedImage === idx ? 'border-amber-400 scale-105 shadow-lg' : 'border-white/10 opacity-50 hover:opacity-100'}`}>
                      <Image src={img} alt="Thumb" fill className="object-cover" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Product Intro */}
              <div className="text-white space-y-8 animate-fade-in stagger-1">
                <div className="flex items-center gap-2 text-amber-400 font-black text-sm uppercase tracking-widest">
                  <Sparkles className="w-5 h-5" /> <span>Unit Ready Stock</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">
                  SUZUKI <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">{product.name}</span>
                </h1>
                <p className="text-lg md:text-xl text-slate-300 font-medium leading-relaxed max-w-xl border-l-4 border-blue-600 pl-6">
                  {product.description}
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-slate-400 font-bold uppercase text-sm">Harga Mulai</span>
                  <div className="text-4xl md:text-5xl font-black text-white tracking-tighter">
                    <span className="text-xl font-bold mr-1">Rp</span>{product.priceText}<span className="text-xl font-bold ml-1 text-slate-400">Jutaan</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Button onClick={() => handleAction('drive')} className="bg-white text-slate-950 hover:bg-amber-400 transition-colors h-14 px-8 rounded-2xl font-black text-lg shadow-xl">
                    <Car className="mr-2 w-6 h-6" /> TEST DRIVE
                  </Button>
                  {product.brochureUrl && (
                    <Button onClick={() => window.open(product.brochureUrl, '_blank')} variant="outline" className="border-white/20 text-white hover:bg-white/10 h-14 px-8 rounded-2xl font-black text-lg backdrop-blur-sm">
                      <Download className="mr-2 w-6 h-6" /> BROSUR
                    </Button>
                  )}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* PRICING & SPEC SECTION */}
        <section className="py-24 relative z-20 -mt-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12">
              
              {/* Left: Prices */}
              <div className="lg:col-span-8 space-y-8 animate-fade-in stagger-2">
                <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-xl shadow-slate-200/50 border border-slate-100">
                  <Tabs defaultValue="plat-ab">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                      <h2 className="text-3xl font-black text-slate-900 tracking-tight">DAFTAR HARGA OTR</h2>
                      <TabsList className="bg-slate-100 p-1.5 rounded-2xl h-auto">
                        <TabsTrigger value="plat-ab" className="rounded-xl px-6 py-3 font-black uppercase text-xs data-[state=active]:bg-white data-[state=active]:shadow-md data-[state=active]:text-blue-600">Plat AB (Jogja)</TabsTrigger>
                        <TabsTrigger value="plat-aa-r" className="rounded-xl px-6 py-3 font-black uppercase text-xs data-[state=active]:bg-white data-[state=active]:shadow-md data-[state=active]:text-blue-600">Plat AA & R</TabsTrigger>
                      </TabsList>
                    </div>

                    <TabsContent value="plat-ab" className="space-y-4">
                      {product.variants.map((v, i) => <VariantCard key={i} idx={i} variant={v} priceData={v.priceAB} region="AB" />)}
                    </TabsContent>
                    <TabsContent value="plat-aa-r" className="space-y-4">
                      {product.variants.map((v, i) => <VariantCard key={i} idx={i} variant={v} priceData={v.priceAAR} region="AA/R" />)}
                      <p className="text-xs text-slate-400 font-bold mt-4 text-center">*Wilayah Kedu, Banyumas, Magelang & sekitarnya</p>
                    </TabsContent>
                  </Tabs>
                </div>
              </div>

              {/* Right: Spec Info */}
              <div className="lg:col-span-4 animate-fade-in stagger-3">
                <div className="bg-slate-900 rounded-[3rem] p-8 md:p-10 text-white shadow-2xl sticky top-28">
                  <div className="flex items-center gap-3 mb-8">
                    <Settings className="w-8 h-8 text-blue-500" />
                    <h3 className="text-2xl font-black tracking-tight">SPESIFIKASI</h3>
                  </div>
                  <div className="space-y-6">
                    {[
                      { label: 'Mesin', val: product.specifications.engine, icon: <Wrench className="w-4 h-4" /> },
                      { label: 'Transmisi', val: product.specifications.transmission, icon: <Settings className="w-4 h-4" /> },
                      { label: 'Tenaga', val: product.specifications.power, icon: <Zap className="w-4 h-4" /> },
                      { label: 'Kapasitas', val: product.specifications.seating, icon: <UsersIcon className="w-4 h-4" /> },
                      { label: 'Dimensi', val: product.specifications.dimensions, icon: <Ruler className="w-4 h-4" /> }
                    ].map((s, i) => (
                      <div key={i} className="border-b border-white/5 pb-4 flex justify-between items-start gap-4">
                        <span className="text-slate-400 text-sm font-bold uppercase flex items-center gap-2">{s.icon} {s.label}</span>
                        <span className="text-right font-black text-sm text-blue-400">{s.val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* FAQ & TRANSITION SECTION */}
        <section className="pt-24 pb-40 lg:pb-52 bg-white rounded-t-[3rem] lg:rounded-t-[5rem] relative z-0 border-t border-slate-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-slate-900 tracking-tighter uppercase mb-4">Pertanyaan Populer</h2>
              <div className="w-20 h-2 bg-blue-600 rounded-full mx-auto"></div>
            </div>
            <div className="space-y-6">
              {[
                { q: `Berapa harga Suzuki ${product.name} di Jogja?`, a: `Harga mulai Rp ${product.priceText} Jutaan OTR Yogyakarta. Dapatkan promo diskon dan cashback spesial hanya melalui dealer resmi kami.` },
                { q: `Apakah bisa kredit DP minim?`, a: `Sangat bisa. Kami bekerjasama dengan banyak leasing untuk menyediakan paket kredit DP mulai 10% atau angsuran ringan yang bisa disesuaikan.` }
              ].map((faq, i) => (
                <div key={i} className="bg-slate-50 rounded-[2rem] p-8 border border-slate-100 hover:border-blue-200 transition-colors">
                  <h4 className="text-xl font-black text-slate-900 mb-4 flex items-center gap-3"><HelpCircle className="text-blue-600" /> {faq.q}</h4>
                  <p className="text-slate-600 font-medium leading-relaxed pl-9">{faq.a}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-20 flex flex-col items-center">
               <h3 className="text-2xl font-black text-slate-900 mb-8">EKSPLORASI MODEL LAIN</h3>
               <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
                  {otherProducts.map(other => (
                    <Link href={`/produk/${other.slug}`} key={other.id} className="group bg-slate-50 p-6 rounded-[2rem] border border-slate-100 hover:bg-blue-600 hover:border-blue-600 transition-all duration-500">
                      <div className="relative aspect-video mb-4 rounded-xl overflow-hidden bg-white">
                        <Image src={other.image} alt={other.name} fill className="object-contain p-2 group-hover:scale-110 transition-transform" />
                      </div>
                      <h4 className="font-black text-slate-900 group-hover:text-white transition-colors">{other.name}</h4>
                      <p className="text-sm font-bold text-slate-400 group-hover:text-blue-100">Rp {other.priceText} Jt-an</p>
                    </Link>
                  ))}
               </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />

      {/* MOBILE STICKY BAR */}
      <div className="fixed bottom-4 left-4 right-4 bg-slate-950/90 backdrop-blur-xl border border-white/10 p-3 rounded-[2rem] shadow-2xl z-[60] md:hidden flex gap-2 items-center animate-fade-in">
        <Button onClick={() => handleAction('drive')} variant="outline" className="flex-1 border-white/20 text-white h-14 rounded-2xl font-black text-xs uppercase tracking-widest bg-transparent">
          <Car className="w-5 h-5 mr-2 text-blue-500" /> Test Drive
        </Button>
        <Button onClick={() => handleAction('credit')} className="flex-[1.5] bg-blue-600 hover:bg-blue-700 text-white h-14 rounded-2xl font-black text-xs uppercase tracking-widest shadow-lg">
          <MessageCircle className="w-5 h-5 mr-2" /> Tanya Promo
        </Button>
      </div>

    </div>
  );
}