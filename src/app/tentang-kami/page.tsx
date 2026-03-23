'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { 
  TrendingUp, 
  Globe2, 
  Users, 
  Network, 
  Leaf, 
  MapPin, 
  ShieldCheck, 
  CarFront, 
  Award,
  Quote
} from 'lucide-react';

export default function TentangKamiPage() {
  const nationalStrategies = [
    {
      icon: TrendingUp,
      title: 'Dominasi Pasar',
      desc: 'Mempertahankan posisi kuat di segmen kendaraan komersial & mengembangkan pasar mobil penumpang.'
    },
    {
      icon: Globe2,
      title: 'Fokus Ekspor',
      desc: 'Memperkuat kontribusi nasional dengan meningkatkan volume ekspor kendaraan ke berbagai negara.'
    },
    {
      icon: Users,
      title: 'Kualitas SDM',
      desc: 'Meningkatkan kompetensi karyawan secara berkelanjutan guna menghasilkan layanan terbaik.'
    },
    {
      icon: Network,
      title: 'Kemitraan & Digitalisasi',
      desc: 'Membangun rantai bisnis handal melalui kemitraan strategis serta pemanfaatan teknologi digital.'
    },
    {
      icon: Leaf,
      title: 'Kelestarian Lingkungan',
      desc: 'Berkontribusi aktif pada lingkungan melalui kebijakan "Suzuki Green" (teknologi ramah lingkungan).'
    }
  ];

  const localImplementations = [
    {
      icon: ShieldCheck,
      title: 'Fokus Kepuasan Pelanggan',
      desc: 'Menyediakan fasilitas bengkel resmi yang terstandarisasi untuk menjamin layanan purna jual yang berkualitas tinggi.'
    },
    {
      icon: CarFront,
      title: 'Ketersediaan Produk Lengkap',
      desc: 'Menghadirkan lini produk terbaru yang relevan dengan kebutuhan masyarakat Jogja, dari unit efisien hingga teknologi Hybrid.'
    },
    {
      icon: Award,
      title: 'Layanan Ekstra Profesional',
      desc: 'Wiraniaga dan teknisi kami dilatih khusus agar memiliki kompetensi yang sejalan dengan standar kualitas global Suzuki.'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans">
      <Header />

      <main className="flex-1">
        {/* HERO SECTION - Bernuansa Navy Premium */}
        <section className="relative pt-28 pb-20 md:pt-40 md:pb-32 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#020617] overflow-hidden border-b border-slate-800">
          {/* Efek Cahaya Artistik (Glow) */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] mix-blend-screen" />
            <div className="absolute bottom-0 -left-20 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[100px] mix-blend-screen" />
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 backdrop-blur-md mb-8 animate-fade-in shadow-lg">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span className="text-slate-300 text-sm font-semibold tracking-wider uppercase">
                  Suzuki Sumber Baru Mobil Jogja
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight animate-fade-in stagger-1 tracking-tight">
                Melayani dengan <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Integritas</span> & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Kualitas</span>
              </h1>

              <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto animate-fade-in stagger-2 mt-6 leading-relaxed font-light">
                Sebagai bagian dari Suzuki Group global, kami memiliki komitmen kuat untuk menjadi pemain kunci dalam memajukan industri otomotif di tanah air, khususnya di wilayah Yogyakarta dan sekitarnya.
              </p>
            </div>
          </div>
        </section>

        {/* VISI & MISI SECTION - Layout Asimetris Elegan */}
        <section className="py-20 md:py-32 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              
              {/* VISI */}
              <div className="lg:col-span-5 animate-fade-in">
                <div className="relative">
                  <Quote className="absolute -top-6 -left-6 w-20 h-20 text-blue-50 dark:text-slate-800/10 z-0 rotate-180" />
                  <div className="relative z-10">
                    <h2 className="text-sm font-bold text-blue-600 tracking-widest uppercase mb-4">Visi Global Kami</h2>
                    <h3 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight mb-6">
                      "Menjadi Pilar ke-3 SUZUKI Group di dunia."
                    </h3>
                    <p className="text-slate-500 leading-relaxed text-lg">
                      Artinya, Suzuki Indonesia ditargetkan menjadi kekuatan utama setelah Jepang dan India dalam hal produksi, penjualan, dan kontribusi terhadap bisnis Suzuki secara global.
                    </p>
                  </div>
                </div>
              </div>

              {/* Garis Pemisah (Desktop) */}
              <div className="hidden lg:flex lg:col-span-2 justify-center">
                <div className="w-[1px] h-full min-h-[250px] bg-gradient-to-b from-transparent via-slate-200 to-transparent"></div>
              </div>

              {/* MISI */}
              <div className="lg:col-span-5 animate-fade-in stagger-1 lg:pl-8">
                <h2 className="text-sm font-bold text-blue-600 tracking-widest uppercase mb-4">Misi Utama</h2>
                <div className="bg-slate-50 rounded-[24px] p-8 md:p-10 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-full blur-3xl group-hover:bg-blue-600/10 transition-colors duration-500"></div>
                  <p className="text-xl md:text-2xl font-bold text-slate-800 leading-relaxed relative z-10 italic text-center md:text-left">
                    "Membangun merek yang dipercaya melalui produk dan layanan yang berkualitas tinggi berorientasi pada kebutuhan konsumen."
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* STRATEGI NASIONAL SECTION - Grid Clean */}
        <section className="py-20 md:py-28 bg-slate-50 border-y border-slate-200/60">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight">Strategi Nasional Suzuki</h2>
              <div className="w-16 h-1.5 bg-blue-600 mx-auto rounded-full mb-6"></div>
              <p className="text-slate-500 text-lg">
                Untuk mewujudkan visi dan misi tersebut, Suzuki Indonesia menjalankan lima pilar strategi utama yang berkelanjutan.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {nationalStrategies.map((strategy, idx) => {
                const Icon = strategy.icon;
                return (
                  <Card key={idx} className="border-0 shadow-sm hover:shadow-[0_10px_40px_rgba(0,0,0,0.06)] transition-all duration-400 rounded-[20px] bg-white group hover:-translate-y-1 overflow-hidden">
                    <CardContent className="p-8">
                      <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                        <Icon className="h-6 w-6 text-slate-600 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{strategy.title}</h4>
                      <p className="text-slate-500 leading-relaxed">
                        {strategy.desc}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* IMPLEMENTASI CABANG SECTION - Desain Menonjol / Highlight */}
        <section className="py-20 md:py-32 bg-white relative overflow-hidden">
          {/* Background Aksen */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 -z-10 clip-path-slant hidden lg:block"></div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              
              <div className="animate-fade-in">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-bold tracking-widest uppercase mb-6 border border-blue-100">
                  <MapPin className="w-3.5 h-3.5" />
                  Cabang Magelang KM 8
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 tracking-tight leading-tight">
                  Implementasi Nyata di <br className="hidden md:block"/>Sumber Baru Mobil Jogja
                </h2>
                <p className="text-lg text-slate-500 mb-10 leading-relaxed">
                  Dealer Suzuki Sumber Baru Mobil Jl. Magelang KM 8 menyelaraskan seluruh operasionalnya dengan misi nasional Suzuki melalui dedikasi tinggi terhadap masyarakat Yogyakarta.
                </p>

                <div className="space-y-8">
                  {localImplementations.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div key={idx} className="flex gap-5 group">
                        <div className="flex-shrink-0 mt-1">
                          <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300 shadow-sm border border-blue-100 group-hover:border-transparent">
                            <Icon className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors duration-300" />
                          </div>
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h4>
                          <p className="text-slate-500 leading-relaxed text-base">{item.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Visual Gambar / Representasi Dealer */}
              <div className="relative animate-fade-in stagger-1 lg:pl-10">
                <div className="aspect-[4/5] md:aspect-square rounded-[32px] overflow-hidden relative shadow-2xl">
                  {/* GANTI SRC DI BAWAH DENGAN GAMBAR DEALER ASLI ANDA JIKA ADA */}
                  <img 
                    src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                    alt="Dealer Suzuki Jogja" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                  
                  {/* Floating Info Box */}
                  <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/20">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 shadow-md">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-900">Dealer Resmi 3S</p>
                        <p className="text-xs text-slate-500 font-medium">Sales, Service, Sparepart</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-100 rounded-full blur-2xl -z-10"></div>
                <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-slate-200 rounded-full blur-2xl -z-10"></div>
              </div>

            </div>
          </div>
        </section>
        
      </main>

      <Footer />
    </div>
  );
}