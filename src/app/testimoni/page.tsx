'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const photos = [
  { id: 1, src: '/images/galeri-1.jpg', title: 'Pemandangan Laut', span: 'col-span-1' },
  { id: 2, src: '/images/galeri-2.jpg', title: 'Burung di Ranting', span: 'col-span-1' },
  { id: 3, src: '/images/galeri-3.jpg', title: 'Rumah Salju', span: 'col-span-1' },
  { id: 4, src: '/images/galeri-4.jpg', title: 'Burung Kecil', span: 'col-span-1' },
  { id: 5, src: '/images/galeri-5.jpg', title: 'Interior Klasik', span: 'col-span-1' },
  // Tambahkan foto lainnya sesuai kebutuhan
];
export default function GaleriPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-end mb-8">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Popular Photos</h1>
                <p className="text-sm text-gray-500 mt-1">New uploads with the highest Pulse rating</p>
              </div>
              <button className="text-primary font-semibold text-sm flex items-center hover:underline">
                View All <span className="ml-1">›</span>
              </button>
            </div>

            {/* Photo Grid - Mengikuti desain referensi */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {photos.map((photo) => (
                <div 
                  key={photo.id}
                  className="relative group cursor-pointer overflow-hidden rounded-lg aspect-[4/3]"
                  onClick={() => setSelectedImage(photo.src)}
                >
                  <img 
                    src={photo.src} 
                    alt={photo.title}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Lightbox / Modal Overlay */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)} // Klik di samping gambar untuk keluar
        >
          {/* Tombol Close (X) */}
          <button 
            className="absolute top-6 right-6 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
            onClick={(e) => {
              e.stopPropagation(); // Mencegah bubbling ke div parent
              setSelectedImage(null);
            }}
          >
            <X size={32} />
          </button>

          {/* Gambar Utuh */}
          <div 
            className="relative max-w-5xl max-h-[85vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()} // Mencegah tutup saat gambar diklik
          >
            <img 
              src={selectedImage} 
              className="w-full h-auto object-contain rounded-sm shadow-2xl"
              alt="Full view"
            />
          </div>
        </div>
      )}
    </div>
  );
}