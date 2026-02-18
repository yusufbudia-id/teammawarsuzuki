'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Download, MessageCircle, Check, 
  ChevronRight, ArrowRight, Star
} from 'lucide-react';
import { getProductById } from '@/lib/products-data';

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [selectedImage, setSelectedImage] = useState(0);
  const id = parseInt(params.id as string);
  const product = getProductById(id);

  // --- LOGIC ---
  const waTeam = [
    { nama: 'Yusuf', no: '6282174635218' },
    { nama: 'Dimas', no: '6287775741091' },
    // ... sisa tim
  ];

  const getRandomWANumber = () => waTeam[Math.floor(Math.random() * waTeam.length)].no;

  useEffect(() => {
    if (!product) router.push('/produk');
  }, [product, router]);

  if (!product) return null;

  const handleAction = (type: 'wa' | 'brosur', text?: string) => {
    if (type === 'brosur') {
      window.open(product.brochureUrl, '_blank');
    } else {
      const msg = encodeURIComponent(text || `Halo Suzuki Jogja, saya tertarik dengan ${product.name}`);
      window.open(`https://wa.me/${getRandomWANumber()}?text=${msg}`, '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100">
      <Header />

      <main className="container mx-auto px-4 py-8 md:py-12">
        {/* BREADCRUMB SIMPLE */}
        <nav className="text-sm text-slate-500 mb-8 flex items-center gap-2">
          <span>Home</span> <ChevronRight className="h-3 w-3" />
          <span>Produk</span> <ChevronRight className="h-3 w-3" />
          <span className="font-semibold text-slate-900">{product.name}</span>
        </nav>

        {/* --- MAIN SPLIT LAYOUT (Sticky Product) --- */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          
          {/* LEFT: GALLERY (Sticky on Desktop) */}
          <div className="lg:col-span-7 h-fit lg:sticky lg:top-24">
            <div className="bg-slate-50 rounded-2xl overflow-hidden mb-4 border border-slate-100">
              <img
                src={product.gallery?.[selectedImage] || product.image}
                alt={product.name}
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Minimalist Thumbnails */}
            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
              {product.gallery?.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden border transition-all ${
                    selectedImage === idx 
                      ? 'border-slate-900 ring-1 ring-slate-900 opacity-100' 
                      : 'border-transparent opacity-50 hover:opacity-100'
                  }`}
                >
                  <img src={img} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* Quick Highlights (Desktop Only) */}
            <div className="hidden lg:grid grid-cols-3 gap-4 mt-8">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                <p className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">Engine</p>
                <p className="font-semibold">{product.specifications.engine}</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                <p className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">Seat</p>
                <p className="font-semibold">{product.specifications.seating} Penumpang</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                <p className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">Transmission</p>
                <p className="font-semibold">{product.specifications.transmission}</p>
              </div>
            </div>
          </div>

          {/* RIGHT: DETAILS & ACTION (Scrollable) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            
            {/* Header Info */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                 <span className="bg-blue-600 text-white text-[10px] font-bold px-2 py-1 uppercase tracking-widest rounded-sm">
                   New Arrival
                 </span>
                 <span className="text-xs font-medium text-slate-500">Unit Ready Stock</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">
                {product.name}
              </h1>
              <p className="text-slate-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Pricing Card */}
            <div className="p-6 rounded-2xl border border-slate-200 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] bg-white">
              <p className="text-sm text-slate-500 mb-1">Harga OTR Mulai Dari</p>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-3xl font-bold text-slate-900">Rp {product.priceText}</span>
                <span className="text-xl text-slate-500">Juta</span>
              </div>

              <div className="space-y-3">
                <Button 
                  onClick={() => handleAction('wa', `Saya ingin Test Drive ${product.name}`)}
                  className="w-full h-12 bg-slate-900 hover:bg-slate-800 text-white rounded-lg font-medium text-base"
                >
                  Jadwalkan Test Drive
                </Button>
                <div className="grid grid-cols-2 gap-3">
                  <Button 
                    variant="outline"
                    onClick={() => handleAction('wa', `Minta Simulasi Kredit ${product.name}`)}
                    className="h-12 border-slate-300 text-slate-700 hover:bg-slate-50"
                  >
                    Simulasi Kredit
                  </Button>
                  <Button 
                    variant="ghost"
                    onClick={() => handleAction('brosur')}
                    className="h-12 text-slate-600 hover:text-blue-600 hover:bg-blue-50"
                  >
                    <Download className="mr-2 h-4 w-4" /> E-Brosur
                  </Button>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-100 flex items-center justify-center gap-6 text-sm text-slate-500">
                <div className="flex items-center gap-1.5">
                  <Check className="h-4 w-4 text-green-500" /> Resmi
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="h-4 w-4 text-green-500" /> Garansi
                </div>
                <div className="flex items-center gap-1.5">
                   <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" /> Best Seller
                </div>
              </div>
            </div>

            {/* Variant List Table Style */}
            <div>
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                Pilihan Tipe & Harga
              </h3>
              
              <Tabs defaultValue="ab" className="w-full">
                <TabsList className="w-full grid grid-cols-2 mb-4 bg-slate-100 p-1 h-auto rounded-lg">
                  <TabsTrigger value="ab" className="py-2 text-sm font-medium">Plat AB (Jogja)</TabsTrigger>
                  <TabsTrigger value="aa" className="py-2 text-sm font-medium">Plat AA/R (Kedu)</TabsTrigger>
                </TabsList>
                
                <TabsContent value="ab">
                   <VariantTable variants={product.variants} type="AB" onSelect={(v:string) => handleAction('wa', `Minat ${product.name} tipe ${v}`)} />
                </TabsContent>
                <TabsContent value="aa">
                   <VariantTable variants={product.variants} type="AAR" onSelect={(v:string) => handleAction('wa', `Minat ${product.name} tipe ${v}`)} />
                </TabsContent>
              </Tabs>
            </div>

            {/* Specs Accordion/List Style */}
            <div className="pt-6 border-t border-slate-200">
              <h3 className="text-lg font-bold mb-4">Spesifikasi Detail</h3>
              <dl className="space-y-4 text-sm">
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <dt className="text-slate-500">Dimensi (P x L x T)</dt>
                  <dd className="font-medium text-slate-900 text-right">{product.specifications.dimensions}</dd>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <dt className="text-slate-500">Bahan Bakar</dt>
                  <dd className="font-medium text-slate-900 text-right">{product.specifications.fuel}</dd>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <dt className="text-slate-500">Tenaga Maksimum</dt>
                  <dd className="font-medium text-slate-900 text-right">{product.specifications.power}</dd>
                </div>
                 <div className="flex justify-between py-2 border-b border-slate-100">
                  <dt className="text-slate-500">Torsi</dt>
                  <dd className="font-medium text-slate-900 text-right">{product.specifications.torque}</dd>
                </div>
              </dl>
            </div>

          </div>
        </div>
      </main>

      {/* FOOTER CALL TO ACTION (Clean) */}
      <div className="border-t border-slate-200 bg-slate-50 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-2">Masih ragu dengan pilihan Anda?</h2>
          <p className="text-slate-600 mb-6">Konsultasikan kebutuhan mobil Suzuki Anda dengan Sales Consultant kami.</p>
          <Button 
            onClick={() => handleAction('wa', 'Halo, saya mau konsultasi')}
            className="rounded-full bg-green-600 hover:bg-green-700 text-white px-8 h-12 text-lg shadow-lg shadow-green-600/20"
          >
            <MessageCircle className="mr-2 h-5 w-5" /> Chat via WhatsApp
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

// Sub-component Table Varian
function VariantTable({ variants, type, onSelect }: any) {
  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden">
      {variants.map((variant: any, idx: number) => {
        const price = type === 'AB' ? variant.priceAB : variant.priceAAR;
        return (
          <div 
            key={idx} 
            className="flex items-center justify-between p-4 bg-white border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors cursor-pointer group"
            onClick={() => onSelect(variant.name)}
          >
            <div>
              <div className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                {variant.name}
              </div>
              <div className="text-xs text-slate-400 mt-1 line-through">
                Rp {price.priceOtr}
              </div>
            </div>
            <div className="text-right">
              <div className="font-bold text-slate-900">
                {price.priceNett}
              </div>
              <div className="text-[10px] font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded-full inline-block mt-1">
                Promo Tersedia
              </div>
            </div>
            <ChevronRight className="h-5 w-5 text-slate-300 group-hover:text-blue-600 ml-2" />
          </div>
        );
      })}
    </div>
  );
}