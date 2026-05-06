'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
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
  Quote,
  Sparkles
} from 'lucide-react';
import Image from 'next/image';

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
    <div className="min-h-screen flex flex-col bg-[#F4F7F9] font-sans selection:bg-amber-400 selection:text-slate-900">
      <Header />

      <main className="flex-1">
        
        {/* HERO SECTION - Playful Corporate Style */}
        <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-white rounded-b-[3rem] lg:rounded-b-[5rem] shadow-sm z-20 overflow-hidden">
          {/* Latar Belakang Shape Ceria */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-50 rounded-full blur-3xl opacity-50 translate-y-1/3 -translate-x-1/3"></div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 font-bold text-sm border border-blue-100 animate-fade-in mb-6">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>Profil Dealer Resmi</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 leading-[1.1] tracking-tight animate-fade-in stagger-1">
                Dedikasi Kami Untuk <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-blue-400">Mobilitas Anda.</span>
              </h1>

              <p className="text-lg md:text-xl text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto animate-fade-in stagger-2 mt-6">
                Lebih dari sekadar dealer, kami adalah mitra perjalanan Anda. Berkomitmen menghadirkan layanan penjualan dan purna jual Suzuki terbaik di Yogyakarta.
              </p>
            </div>
          </div>
        </section>

        {/* VISI & MISI SECTION - Bento Box Layout */}
        <section className="py-16 relative z-10 -mt-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
                
                {/* Visi - Blue Box */}
                <div className="bg-blue-600 rounded-[2.5rem] p-10 md:p-14 text-white relative overflow-hidden group shadow-xl shadow-blue-900/10 animate-fade-in stagger-2">
                  <div className="absolute -top-10 -right-10 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
                  <Quote className="w-16 h-16 text-blue-400/30 mb-6 rotate-180" />
                  <h2 className="text-sm font-black text-amber-400 tracking-widest uppercase mb-4">Visi Global</h2>
                  <h3 className="text-3xl md:text-4xl font-black leading-tight mb-6 tracking-tight">
                    "Menjadi Pilar ke-3 SUZUKI Group di dunia."
                  </h3>
                  <p className="text-blue-100 leading-relaxed text-lg font-medium">
                    Ditargetkan menjadi kekuatan utama setelah Jepang dan India dalam hal produksi, penjualan, dan kontribusi terhadap bisnis Suzuki secara global.
                  </p>
                </div>

                {/* Misi - White Box */}
                <div className="bg-white rounded-[2.5rem] p-10 md:p-14 border border-slate-100 relative overflow-hidden shadow-sm group animate-fade-in stagger-3">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-amber-100 rounded-full blur-3xl group-hover:bg-blue-100 transition-colors duration-500 -z-10"></div>
                  <h2 className="text-sm font-black text-blue-600 tracking-widest uppercase mb-4">Misi Utama</h2>
                  <div className="h-full flex items-center">
                    <p className="text-2xl md:text-3xl font-black text-slate-900 leading-snug italic tracking-tight">
                      "Membangun merek yang dipercaya melalui produk dan layanan yang berkualitas tinggi berorientasi pada kebutuhan konsumen."
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* STRATEGI NASIONAL SECTION - Modern Grid */}
        <section className="py-20 md:py-28 relative z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">Strategi Nasional</h2>
              <p className="text-slate-500 font-medium text-lg">
                Lima pilar strategi utama yang berkelanjutan untuk mewujudkan visi dan misi Suzuki Indonesia.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {nationalStrategies.map((strategy, idx) => {
                const Icon = strategy.icon;
                return (
                  <div 
                    key={idx} 
                    className="bg-white rounded-[2rem] p-8 md:p-10 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-500 group hover:-translate-y-2 animate-fade-in"
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-8 group-hover:bg-blue-600 transition-colors duration-300">
                      <Icon className="h-8 w-8 text-slate-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h4 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-blue-600 transition-colors tracking-tight">
                      {strategy.title}
                    </h4>
                    <p className="text-slate-500 leading-relaxed font-medium">
                      {strategy.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* IMPLEMENTASI CABANG SECTION - Menjadi Base/Bawah (Menyambung Footer) */}
        <section className="pt-24 pb-40 lg:pb-52 bg-white rounded-t-[3rem] lg:rounded-t-[5rem] border-t border-slate-100 relative z-0 mt-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
              
              {/* Kiri: Teks & Implementasi */}
              <div className="animate-fade-in order-2 lg:order-1">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 text-amber-700 text-xs font-black tracking-widest uppercase mb-6 border border-amber-200">
                  <MapPin className="w-4 h-4" />
                  Cabang Magelang KM 8
                </div>
                
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight leading-[1.1]">
                  Implementasi Nyata <br className="hidden md:block"/>
                  <span className="text-blue-600">Sumber Baru Mobil Jogja.</span>
                </h2>
                
                <p className="text-lg text-slate-500 font-medium mb-12 leading-relaxed">
                  Dealer Suzuki Sumber Baru Mobil Jl. Magelang KM 8 menyelaraskan seluruh operasionalnya dengan misi nasional melalui dedikasi tinggi terhadap masyarakat Yogyakarta.
                </p>

                <div className="space-y-8">
                  {localImplementations.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div key={idx} className="flex gap-6 group">
                        <div className="flex-shrink-0">
                          <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                            <Icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                          </div>
                        </div>
                        <div>
                          <h4 className="text-xl font-black text-slate-900 mb-2">{item.title}</h4>
                          <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Kanan: Visual Gambar Edge-to-Edge Radius */}
              <div className="relative animate-fade-in stagger-1 order-1 lg:order-2">
                <div className="aspect-square md:aspect-[4/5] rounded-[3rem] overflow-hidden relative shadow-2xl shadow-blue-900/10 border-8 border-white">
                  <img 
                    src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                    alt="Dealer Suzuki Jogja" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                  
                  {/* Floating Info Box */}
                  <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md p-6 rounded-3xl shadow-xl">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-amber-400 flex items-center justify-center flex-shrink-0 shadow-sm">
                        <Award className="w-7 h-7 text-slate-900" />
                      </div>
                      <div>
                        <p className="text-lg font-black text-slate-900 leading-none mb-1">Dealer Resmi 3S</p>
                        <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">Sales, Service, Sparepart</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-amber-400 rounded-full blur-3xl opacity-30 -z-10"></div>
                <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-blue-600 rounded-full blur-3xl opacity-20 -z-10"></div>
              </div>

            </div>
          </div>
        </section>
        
      </main>

      <Footer />
    </div>
  );
}