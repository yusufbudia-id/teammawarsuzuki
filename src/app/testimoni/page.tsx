'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { X } from 'lucide-react'; // Pastikan X diimpor

const photos = [
  { id: 1, src: '/images/galeri/galeri-1.jpg', title: 'Pemandangan Laut' },
  { id: 2, src: '/images/galeri/galeri-2.jpg', title: 'Burung di Ranting' },
  { id: 3, src: '/images/galeri/galeri-3.jpg', title: 'Rumah Salju' },
  { id: 4, src: '/images/galeri/galeri-4.jpg', title: 'Burung Kecil' },
];

export default function TestimoniPage() {
  // 1. Definisikan state selectedImage agar tidak ReferenceError
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block animate-fade-in">
                <span className="px-4 py-2 rounded-full bg-primary/20 text-primary-foreground text-sm font-medium border border-primary/30">
                  Apa Kata Mereka?
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight animate-fade-in stagger-1 mt-8">
                Galeri <span className="text-primary">Foto</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto animate-fade-in stagger-2 mt-6">
                Koleksi dokumentasi dan momen berharga bersama pelanggan kami.
              </p>
            </div>
          </div>
        </section>

        {/* Photo Grid Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
          >
            <X size={32} />
          </button>

          <div 
            className="relative max-w-5xl max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
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