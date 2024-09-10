'use client';

import { useState } from 'react';
import { Card, Pagination } from 'flowbite-react';
import gambar2 from '@/assets/kegiatan1.jpeg'; // Ganti dengan gambar yang sesuai
import Image from 'next/image';

export function Foto() {
  // State untuk mengelola halaman saat ini
  const [currentPage, setCurrentPage] = useState(1);
  const photosPerPage = 3; // Jumlah foto per halaman

  // Fungsi untuk mengubah halaman
  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  // Array foto untuk galeri
  const allPhotos = Array.from({ length: 9 }).map((_, index) => ({
    id: index + 1,
    src: gambar2,
    alt: `Foto ${index + 1}`,
  }));

  const totalPages = Math.ceil(allPhotos.length / photosPerPage);

  // Menentukan foto yang akan ditampilkan di halaman saat ini
  const currentPhotos = allPhotos.slice(
    (currentPage - 1) * photosPerPage,
    currentPage * photosPerPage
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-5 px-2.5 bg-[#270b60] text-white">
      {/* Judul Galeri */}
      <h1 className="text-3xl font-bold mb-4">GALERI TERBARU</h1>
      <h2 className="text-lg mb-10">
        Kegiatan terbaru dari DISKOMINFO Kabupaten Semarang
      </h2>

      {/* Grid untuk Galeri Foto */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-screen-lg">
        {currentPhotos.map((photo) => (
          <div key={photo.id} className="overflow-hidden">
            <Image
              src={photo.src}
              alt={photo.alt}
              className="w-full h-full object-cover"
              layout="responsive"
              width={300}
              height={200}
            />
          </div>
        ))}
      </div>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
        className="mt-6"
      />
    </div>
  );
}
