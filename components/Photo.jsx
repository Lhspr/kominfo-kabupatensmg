'use client';

import { Card } from 'flowbite-react';
import gambar2 from '@/assets/sherlyy1a.png'; // Ganti dengan gambar yang sesuai
import Image from 'next/image';

export function Foto() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-5 px-2.5 bg-[#270b60] text-white">
      {/* Judul Galeri */}
      <h1 className="text-3xl font-bold mb-4">GALERI TERBARU</h1>
      <h2 className="text-lg mb-10">
        Informasi terbaru dari DISKOMINFO Kabupaten Semarang dalam bentuk Foto & Video
      </h2>

      {/* Grid untuk Galeri Foto */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-screen-lg">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="overflow-hidden">
            <Image
              src={gambar2}
              alt={`Foto ${index + 1}`}
              className="w-full h-full object-cover"
              layout="responsive"
              width={300}
              height={200}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
