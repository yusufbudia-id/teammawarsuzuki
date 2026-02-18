'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Header from '@/components/Header'; // ✅ Pakai Header lamamu tanpa diubah
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Download, MessageCircle, Check, 
  ChevronRight, Star
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
    { nama: 'Admin', no: '6282174635218' },
  ];
  const getRandomWANumber = () => waTeam[0].no;

  useEffect(() => {
    if (!product) router.push('/produk');
  }, [product, router]);

  if (!product) return null;

  const handleAction = (type: 'wa' | 'brosur', text?: string) => {
    if (type === 'brosur') {
      if (product.brochureUrl) window.open(product.brochureUrl, '_blank');
    } else {
      const msg = encodeURIComponent(text || `Halo, saya tertarik dengan ${product.name}`);
      window.open(`https://wa.me/${getRandomWANumber()}?text=${msg}`, '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 flex flex-col">
      {/* 1. Header Bawaan Kamu (Tetap, tidak diubah) */}
      <Header />

      {/* 2. ✅ SOLUSI VISUAL: SUB-HEADER / BREADCRUMB BAR 
         Ini memberi warna abu-abu tipis di bawah header supaya header tidak "hilang" */}
      <div className="bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 py-3">
          <nav className="text-xs md:text-sm text-slate-500 flex items-center gap-2">
            <span className="hover:text-blue-900 cursor-pointer" onClick={() => router.push('/')}>Home</span> 
            <ChevronRight className="h-3 w-3" />
            <span className="hover:text-blue-900 cursor-pointer" onClick={() => router.push('/produk')}>Produk</span> 
            <ChevronRight className="h-3 w-3" />
            <span className="font-bold text-blue-900 uppercase tracking-wide">{product.name}</span>
          </nav>
        </div>
      </div>

      <main className="flex-1 container mx-auto px-4 py-8 md:py-12">
        {/* --- MAIN LAYOUT --- */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          
          {/* LEFT: GALLERY */}
          <div className="lg:col-span-7 h-fit lg:sticky lg:top-8 transition-all">
            <div className="relative bg-white rounded-2xl overflow-hidden mb-4 border border-slate-100 shadow-sm">
               {/* Label New Arrival (Opsional) */}
               <div className="absolute top-4 left-4 z-10 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest rounded-full shadow-lg">
                 Unit Ready Stock
               </div>
              <img
                src={product.gallery?.[selectedImage] || product.image}
                alt={product.name}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            {/* Thumbnails */}
            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
              {product.gallery?.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`relative w-20 h-16 md:w-24 md:h-20 flex-shrink-0 rounded-lg overflow-hidden border transition-all ${
                    selectedImage === idx 
                      ? 'border-blue-900 ring-1 ring-blue-900 opacity-100' 
                      : 'border-slate-200 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* Quick Specs (Desktop) */}
            <div className="hidden lg:grid grid-cols-3 gap-4 mt-8">
              <SpecBox label="Mesin" value={product.specifications.engine} />
              <SpecBox label="Penumpang" value={product.specifications.seating} />
              <SpecBox label="Transmisi" value={product.specifications.transmission} />
            </div>
          </div>

          {/* RIGHT: DETAILS & ACTION */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            
            {/* Title Section */}
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
                {product.name}
              </h1>
              <p className="text-slate-600 leading-relaxed text-lg border-l-4 border-blue-900 pl-4 bg-slate-50 py-2 rounded-r-lg">
                {product.description}
              </p>
            </div>

            {/* Pricing Card (Fokus Penjualan) */}
            <div className="p-6 md:p-8 rounded-2xl bg-white border border-slate-200 shadow-xl shadow-slate-200/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -mr-4 -mt-4" />
              
              <p className="text-sm text-slate-500 font-medium mb-1 uppercase tracking-widest relative z-10">Harga OTR Mulai</p>
              <div className="flex items-baseline gap-2 mb-8 relative z-10">
                <span className="text-4xl font-black text-blue-900">Rp {product.priceText}</span>
                <span className="text-xl text-slate-500 font-medium">Juta</span>
              </div>

              <div className="space-y-3 relative z-10">
                <Button 
                  onClick={() => handleAction('wa', `Saya ingin Test Drive ${product.name}`)}
                  className="w-full h-14 bg-blue-900 hover:bg-blue-800 text-white rounded-xl font-bold text-lg shadow-lg shadow-blue-900/20"
                >
                  Jadwalkan Test Drive
                </Button>
                <div className="grid grid-cols-2 gap-3">
                  <Button 
                    variant="outline"
                    onClick={() => handleAction('wa', `Minta Simulasi Kredit ${product.name}`)}
                    className="h-12 border-slate-300 text-slate-700 hover:bg-slate-50 font-semibold"
                  >
                    Simulasi Kredit
                  </Button>
                  <Button 
                    variant="ghost"
                    onClick={() => handleAction('brosur')}
                    className="h-12 text-slate-600 hover:text-blue-900 hover:bg-blue-50 font-semibold"
                  >
                    <Download className="mr-2 h-4 w-4" /> E-Brosur
                  </Button>
                </div>
              </div>
            </div>

            {/* Variant List Clean Style */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-slate-900">Daftar Harga & Tipe</h3>
                <span className="text-xs text-slate-400 italic">*Harga dapat berubah</span>
              </div>
              
              <Tabs defaultValue="ab" className="w-full">
                <TabsList className="w-full grid grid-cols-2 mb-4 bg-slate-100 p-1 h-auto rounded-lg">
                  <TabsTrigger value="ab" className="py-2.5 font-bold data-[state=active]:bg-white data-[state=active]:shadow-sm">Plat AB (Jogja)</TabsTrigger>
                  <TabsTrigger value="aa" className="py-2.5 font-bold data-[state=active]:bg-white data-[state=active]:shadow-sm">Plat AA/R (Kedu)</TabsTrigger>
                </TabsList>
                
                <TabsContent value="ab" className="mt-0">
                   <VariantTable variants={product.variants} type="AB" onSelect={(v:string) => handleAction('wa', `Minat ${product.name} tipe ${v}`)} />
                </TabsContent>
                <TabsContent value="aa" className="mt-0">
                   <VariantTable variants={product.variants} type="AAR" onSelect={(v:string) => handleAction('wa', `Minat ${product.name} tipe ${v}`)} />
                </TabsContent>
              </Tabs>
            </div>

             {/* Specs Simple List */}
             <div className="pt-6 border-t border-slate-100">
              <h3 className="text-lg font-bold mb-4">Spesifikasi Utama</h3>
              <dl className="grid grid-cols-1 gap-y-3 text-sm">
                <SpecRow label="Dimensi (P x L x T)" value={product.specifications.dimensions} />
                <SpecRow label="Bahan Bakar" value={product.specifications.fuel} />
                <SpecRow label="Tenaga Maksimum" value={product.specifications.power} />
                <SpecRow label="Torsi Maksimum" value={product.specifications.torque} />
              </dl>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

// --- SUB COMPONENTS (Agar kodingan utama rapi) ---

function SpecBox({ label, value }: { label: string, value: string }) {
  return (
    <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 text-center hover:border-blue-200 transition-colors">
      <p className="text-[10px] text-slate-500 uppercase font-bold tracking-wider mb-1">{label}</p>
      <p className="font-bold text-slate-900 text-sm">{value}</p>
    </div>
  )
}

function SpecRow({ label, value }: { label: string, value: string }) {
  return (
    <div className="flex justify-between items-center py-2 border-b border-slate-50 last:border-0">
      <dt className="text-slate-500 font-medium">{label}</dt>
      <dd className="font-bold text-slate-900 text-right">{value}</dd>
    </div>
  )
}

function VariantTable({ variants, type, onSelect }: any) {
  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm">
      {variants.map((variant: any, idx: number) => {
        const price = type === 'AB' ? variant.priceAB : variant.priceAAR;
        return (
          <div 
            key={idx} 
            className="flex items-center justify-between p-4 border-b border-slate-100 last:border-0 hover:bg-blue-50 transition-colors cursor-pointer group"
            onClick={() => onSelect(variant.name)}
          >
            <div>
              <div className="font-bold text-slate-800 group-hover:text-blue-800 transition-colors">
                {variant.name}
              </div>
              <div className="text-xs text-slate-400 mt-0.5 line-through">
                Rp {price.priceOtr}
              </div>
            </div>
            <div className="text-right">
              <div className="font-black text-blue-900 text-lg">
                {price.priceNett}
              </div>
            </div>
            <ChevronRight className="h-5 w-5 text-slate-300 group-hover:text-blue-600 ml-1" />
          </div>
        );
      })}
    </div>
  );
}