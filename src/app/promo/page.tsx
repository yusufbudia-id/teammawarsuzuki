'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ArrowRight, Sparkles, Shield, Headphones, Award, Tag, Percent } from 'lucide-react';

const promos = [
  {
    title: 'Promo Terbatas',
    subtitle: 'Diskon Spesial Hari Ini',
    description: 'Dapatkan diskon hingga puluhan juta dan gratis aksesoris eksklusif untuk pembelian unit tertentu.',
    features: [
      'Diskon maksimal OTR Jogja',
      'Gratis aksesoris premium',
      'Gratis biaya admin',
      'Free service 1 tahun',
    ],
    highlight: 'Terbatas 50 Unit',
    icon: <Tag className="w-6 h-6 text-white" />
  },
  {
    title: 'Bunga Ringan 0%',
    subtitle: 'Kredit Termudah',
    description: 'Skema cicilan paling ringan untuk semua model dengan tenor fleksibel hingga 7 tahun.',
    features: [
      'Bunga mulai 0%',
      'Tenor hingga 7 tahun',
      'DP mulai 10%',
      'Proses cepat & pasti approve',
    ],
    highlight: 'DP Fleksibel',
    icon: <Percent className="w-6 h-6 text-white" />
  },
  {
    title: 'Paket Servis Gratis',
    subtitle: 'Purna Jual Terbaik',
    description: 'Layanan purna jual gratis dengan mekanik profesional dan jaminan suku cadang asli.',
    features: [
      'Free service 4x / 50.000 KM',
      'Gratis oli & sparepart',
      'Mekanik bersertifikasi',
      'Garansi 100% SGP original',
    ],
    highlight: 'Bebas Biaya',
    icon: <Shield className="w-6 h-6 text-white" />
  },
  {
    title: 'Tukar Tambah Spesial',
    subtitle: 'Upgrade Mobil Baru',
    description: 'Nikmati nilai tukar tambah (Trade-In) tertinggi untuk mobil lama Anda dari semua merk.',
    features: [
      'Appraisal transparan',
      'Harga beli lebih tinggi',
      'Data dibantu sampai selesai',
      'Langsung bawa pulang mobil baru',
    ],
    highlight: 'All Brand',
    icon: <Award className="w-6 h-6 text-white" />
  },
];

const whyChooseUs = [
  {
    icon: <Sparkles className="h-7 w-7" />,
    title: 'Terpercaya',
    description: 'Dealer resmi Suzuki dengan rekam jejak ribuan pelanggan yang puas.',
  },
  {
    icon: <Headphones className="h-7 w-7" />,
    title: 'Profesional',
    description: 'Tim konsultan sales dan mekanik yang tersertifikasi langsung oleh Suzuki.',
  },
  {
    icon: <Shield className="h-7 w-7" />,
    title: 'Harga Jujur',
    description: 'Penawaran harga dan diskon transparan tanpa biaya tersembunyi.',
  },
  {
    icon: <Award className="h-7 w-7" />,
    title: 'Best Dealer',
    description: 'Terbukti sebagai jaringan dealer Suzuki terbaik di wilayah Yogyakarta.',
  },
];

export default function PromoPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F4F7F9] font-sans selection:bg-amber-400 selection:text-slate-900">
      <Header />

      <main className="flex-1">
        
        {/* HERO SECTION - Playful Corporate Style */}
        <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-white rounded-b-[3rem] lg:rounded-b-[5rem] shadow-sm z-20 overflow-hidden">
          {/* Latar Belakang Shape Ceria */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-50 rounded-full blur-3xl opacity-60 -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-50 rounded-full blur-3xl opacity-60 translate-y-1/3 -translate-x-1/3"></div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 text-red-600 font-bold text-sm border border-red-100 animate-fade-in mb-6">
                <Tag className="w-4 h-4" />
                <span>Promo Spesial Jogja 2026</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 leading-[1.1] tracking-tight animate-fade-in stagger-1">
                Penawaran Harga <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-red-600 to-amber-500">Paling Menguntungkan.</span>
              </h1>

              <p className="text-lg md:text-xl text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto animate-fade-in stagger-2 mt-6">
                Ambil kesempatan emas bulan ini! Nikmati diskon maksimal, bunga ringan, hingga bonus aksesoris premium untuk setiap pembelian mobil Suzuki impian Anda.
              </p>
            </div>
          </div>
        </section>

        {/* PROMO GRID SECTION - Premium Cards */}
        <section className="py-20 relative z-10 -mt-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {promos.map((promo, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-sm border border-slate-100 relative group hover:shadow-2xl hover:shadow-red-900/5 hover:border-red-200 transition-all duration-500 animate-fade-in"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  {/* Floating Highlight Badge */}
                  <div className="absolute -top-5 right-8 bg-gradient-to-r from-red-600 to-red-500 text-white px-5 py-2 rounded-full shadow-lg font-black text-sm uppercase tracking-wider transform group-hover:-translate-y-1 transition-transform border-2 border-white">
                    {promo.highlight}
                  </div>

                  <div className="flex items-start gap-6 mb-8">
                    <div className="w-16 h-16 rounded-2xl bg-red-600 flex items-center justify-center shrink-0 shadow-md shadow-red-600/20 group-hover:scale-110 transition-transform duration-500">
                      {promo.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-slate-900 mb-1 group-hover:text-red-600 transition-colors tracking-tight">{promo.title}</h3>
                      <p className="text-amber-500 font-bold uppercase tracking-wider text-sm">{promo.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-slate-500 font-medium text-lg leading-relaxed mb-8">
                    {promo.description}
                  </p>

                  <div className="bg-slate-50 rounded-2xl p-6 mb-8 border border-slate-100 group-hover:bg-red-50/50 transition-colors">
                    <ul className="space-y-3">
                      {promo.features.map((feature, i) => (
                        <li key={i} className="flex items-start text-slate-700 font-medium">
                          <CheckCircle2 className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link href="/kontak" className="block">
                    <Button className="w-full h-14 rounded-xl bg-slate-900 hover:bg-red-600 text-white font-bold text-lg shadow-md transition-all group-hover:shadow-red-600/30">
                      Klaim Promo Ini
                      <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US - Bento Grid */}
        <section className="py-20 bg-white border-y border-slate-200/60 relative z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
                Mengapa Beli di Sini?
              </h2>
              <p className="text-lg text-slate-500 font-medium max-w-2xl mx-auto">
                Alasan rasional mengapa ribuan pelanggan memilih dealer kami sebagai pilihan terbaik untuk pembelian mobil Suzuki di Yogyakarta.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyChooseUs.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 rounded-[2rem] p-8 text-center border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-2 transition-all duration-300 group animate-fade-in"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 flex items-center justify-center mx-auto mb-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-black text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-sm font-medium text-slate-500 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA BOTTOM / PENYAMBUNG FOOTER - Diperbaiki agar Footer kontras */}
        <section className="pt-24 pb-40 lg:pb-52 bg-white rounded-t-[3rem] lg:rounded-t-[5rem] border-t border-slate-100 mt-12 relative z-0">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto bg-blue-600 rounded-[3rem] p-10 md:p-16 relative overflow-hidden shadow-2xl shadow-blue-900/10 text-center animate-fade-in">
              {/* Dekorasi Background CTA */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400 rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl opacity-10 translate-y-1/2 -translate-x-1/2"></div>

              <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">
                  Wujudkan Mobil Impianmu <br className="hidden sm:block" /> Sekarang Juga!
                </h2>
                <p className="text-blue-100 font-medium text-lg max-w-2xl mx-auto mb-10">
                  Konsultasikan kebutuhan spesifik Anda. Kami siap memberikan penawaran harga dan simulasi DP yang paling pas dengan budget Anda.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/kontak">
                    <Button className="bg-amber-400 hover:bg-amber-500 text-slate-900 h-14 px-10 rounded-full font-black text-lg shadow-xl shadow-amber-400/20 hover:scale-105 transition-all w-full sm:w-auto">
                      Hubungi Tim Sales <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                  <Link href="/produk">
                    <Button variant="outline" className="bg-white/10 hover:bg-white/20 border-white/30 text-white h-14 px-10 rounded-full font-black text-lg backdrop-blur-md transition-all w-full sm:w-auto">
                      Lihat Katalog
                    </Button>
                  </Link>
                </div>

              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}