'use client';

import { useState, useMemo } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Calculator, Car, CreditCard, Clock, MessageCircle, Sparkles, Info } from 'lucide-react';
import { products } from '@/lib/products-data';
import { openWhatsApp } from '@/lib/whatsapp';

export default function SimulasiKreditPage() {
  const [selectedModel, setSelectedModel] = useState<string>('');
  const [selectedVariant, setSelectedVariant] = useState<string>('');
  const [dpAmount, setDp) = useState<string>('');
  const [tenure, setTenure] = useState<string>('60'); // Default 5 tahun

  // 1. Ambil data mobil yang dipilih
  const currentProduct = useMemo(() => {
    return products.find(p => p.name === selectedModel);
  }, [selectedModel]);

  // 2. Ambil data varian yang dipilih
  const currentVariantData = useMemo(() => {
    if (!currentProduct) return null;
    return currentProduct.variants.find(v => v.name === selectedVariant);
  }, [currentProduct, selectedVariant]);

  // 3. Harga OTR Otomatis (Default Plat AB)
  const otrPrice = currentVariantData?.priceAB.priceOtr || '0';
  const otrNumber = parseInt(otrPrice.replace(/[^0-9]/g, '')) || 0;

  // 4. Hitung Rekomendasi DP Minimal (20%)
  const minDp = otrNumber > 0 ? (otrNumber * 0.2) : 0;

  const handleCalculate = () => {
    if (!selectedModel || !selectedVariant) {
      alert('Silakan pilih model dan tipe mobil terlebih dahulu.');
      return;
    }

    const message = `Halo admin Suzuki!! 👋\n\nSaya ingin konsultasi *Simulasi Kredit*:\n\n🚗 *Mobil:* Suzuki ${selectedModel}\n🛠️ *Tipe:* ${selectedVariant}\n💰 *Harga OTR:* ${otrPrice}\n💵 *Rencana DP:* Rp ${parseInt(dpAmount || '0').toLocaleString('id-ID')}\n📅 *Tenor:* ${parseInt(tenure)/12} Tahun\n\nMohon rincian angsuran dan promo terbaiknya ya..`;
    
    openWhatsApp(message);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F7F9] font-sans selection:bg-amber-400">
      <Header />
      
      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative pt-32 pb-20 bg-white rounded-b-[3rem] lg:rounded-b-[5rem] shadow-sm z-20 overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-3xl opacity-60 -translate-y-1/2 translate-x-1/3"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 font-bold text-sm border border-blue-100 mb-6">
              <Calculator className="w-4 h-4" />
              <span>Kalkulator Kredit Suzuki</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight mb-4">
              Simulasi <span className="text-blue-600">Kredit Cerdas.</span>
            </h1>
            <p className="text-lg text-slate-500 font-medium max-w-2xl mx-auto">
              Hitung rencana pembiayaan mobil impian Anda dengan harga OTR terbaru Yogyakarta & Jawa Tengah.
            </p>
          </div>
        </section>

        {/* SIMULATION FORM */}
        <section className="py-12 relative z-30 -mt-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-blue-900/10 border border-slate-100 overflow-hidden">
                <div className="grid md:grid-cols-12">
                  
                  {/* Left Column: Form */}
                  <div className="md:col-span-7 p-8 md:p-12 space-y-8">
                    
                    {/* Pilih Model */}
                    <div className="space-y-3">
                      <label className="text-sm font-black text-slate-700 uppercase tracking-wider flex items-center gap-2">
                        <Car className="w-4 h-4 text-blue-600" /> 1. Pilih Model Mobil
                      </label>
                      <Select onValueChange={(val) => {
                        setSelectedModel(val);
                        setSelectedVariant(''); // Reset varian jika model ganti
                      }}>
                        <SelectTrigger className="h-14 rounded-2xl border-slate-200 bg-slate-50 focus:ring-blue-500">
                          <SelectValue placeholder="Pilih Model (Fronx, XL7, dll)" />
                        </SelectTrigger>
                        <SelectContent className="rounded-2xl">
                          {products.map(p => (
                            <SelectItem key={p.id} value={p.name} className="py-3">{p.name}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Pilih Tipe */}
                    <div className="space-y-3">
                      <label className="text-sm font-black text-slate-700 uppercase tracking-wider flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-blue-600" /> 2. Pilih Tipe / Varian
                      </label>
                      <Select 
                        disabled={!selectedModel} 
                        value={selectedVariant}
                        onValueChange={setSelectedVariant}
                      >
                        <SelectTrigger className="h-14 rounded-2xl border-slate-200 bg-slate-50 focus:ring-blue-500">
                          <SelectValue placeholder={selectedModel ? "Pilih Tipe Mobil" : "Pilih Model Dahulu"} />
                        </SelectTrigger>
                        <SelectContent className="rounded-2xl">
                          {currentProduct?.variants.map((v, i) => (
                            <SelectItem key={i} value={v.name} className="py-3">{v.name}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Input DP */}
                    <div className="space-y-3">
                      <label className="text-sm font-black text-slate-700 uppercase tracking-wider flex items-center gap-2">
                        <CreditCard className="w-4 h-4 text-blue-600" /> 3. Nominal DP (Uang Muka)
                      </label>
                      <div className="relative">
                        <span className="absolute left-5 top-1/2 -translate-y-1/2 font-bold text-slate-400">Rp</span>
                        <Input 
                          type="number"
                          placeholder="Masukkan rencana DP Anda"
                          value={dpAmount}
                          onChange={(e) => setDp(e.target.value)}
                          className="h-14 pl-12 rounded-2xl border-slate-200 bg-slate-50 focus:ring-blue-500 font-bold text-lg"
                        />
                      </div>
                      {otrNumber > 0 && (
                        <p className="text-[11px] text-slate-400 font-bold ml-1">
                          *Saran DP Min 20%: <span className="text-blue-600">Rp {minDp.toLocaleString('id-ID')}</span>
                        </p>
                      )}
                    </div>

                    {/* Pilih Tenor */}
                    <div className="space-y-3">
                      <label className="text-sm font-black text-slate-700 uppercase tracking-wider flex items-center gap-2">
                        <Clock className="w-4 h-4 text-blue-600" /> 4. Jangka Waktu (Tenor)
                      </label>
                      <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                        {['12', '24', '36', '48', '60'].map((t) => (
                          <button
                            key={t}
                            onClick={() => setTenure(t)}
                            className={`py-3 rounded-xl text-xs font-black transition-all border ${
                              tenure === t 
                              ? 'bg-blue-600 border-blue-600 text-white shadow-md' 
                              : 'bg-white border-slate-200 text-slate-500 hover:border-blue-200'
                            }`}
                          >
                            {parseInt(t)/12} Thn
                          </button>
                        ))}
                      </div>
                    </div>

                  </div>

                  {/* Right Column: Result Summary */}
                  <div className="md:col-span-5 bg-slate-900 p-8 md:p-12 text-white flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-black mb-8 border-b border-slate-800 pb-4">Ringkasan Kredit</h3>
                      
                      <div className="space-y-6">
                        <div className="flex justify-between items-start">
                          <span className="text-slate-400 text-sm font-bold uppercase tracking-widest">Harga OTR</span>
                          <span className="text-right font-black text-blue-400 text-lg">{otrPrice !== '0' ? otrPrice : '-'}</span>
                        </div>
                        <div className="flex justify-between items-start">
                          <span className="text-slate-400 text-sm font-bold uppercase tracking-widest">Varian</span>
                          <span className="text-right font-black text-sm">{selectedVariant || '-'}</span>
                        </div>
                        <div className="flex justify-between items-start">
                          <span className="text-slate-400 text-sm font-bold uppercase tracking-widest">Rencana DP</span>
                          <span className="text-right font-black text-sm text-amber-400">
                            {dpAmount ? `Rp ${parseInt(dpAmount).toLocaleString('id-ID')}` : '-'}
                          </span>
                        </div>
                      </div>

                      <div className="mt-12 p-5 bg-white/5 rounded-2xl border border-white/10 flex gap-4 items-start">
                        <Info className="w-5 h-5 text-blue-400 shrink-0" />
                        <p className="text-[11px] text-slate-300 leading-relaxed font-medium">
                          Hasil hitungan adalah estimasi. Suku bunga dapat berubah sewaktu-waktu sesuai kebijakan leasing partner kami.
                        </p>
                      </div>
                    </div>

                    <Button 
                      onClick={handleCalculate}
                      className="w-full h-16 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-black text-lg mt-10 shadow-xl shadow-blue-900/50"
                    >
                      HITUNG ANGSURAN <MessageCircle className="ml-2 w-6 h-6" />
                    </Button>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>

        {/* LEASING PARTNERS */}
        <section className="py-20 opacity-50">
          <div className="container mx-auto px-4 text-center">
            <p className="text-xs font-black text-slate-400 uppercase tracking-[0.3em] mb-10">Mitra Pembiayaan Resmi</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 grayscale">
              {leasingPartners.map((l, i) => (
                <img key={i} src={l.src} alt={l.name} className="h-8 md:h-12 w-auto object-contain" />
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}

const leasingPartners = [
  { name: 'Suzuki Finance', src: '/images/leasing/sufi.webp' },
  { name: 'BCA Finance', src: '/images/leasing/bca.webp' },
  { name: 'Mandiri Tunas Finance', src: '/images/leasing/mtf.webp' },
  { name: 'Adira Finance', src: '/images/leasing/adira.webp' },
];