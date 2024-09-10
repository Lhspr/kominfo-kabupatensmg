'use client';

import { useState } from 'react';
import { Card, Pagination } from 'flowbite-react';
import gambar2 from '@/assets/sherlyy1a.png';
import Image from 'next/image';

export function Foto() {
  // State untuk mengelola pagination
  const [currentPage, setCurrentPage] = useState(1);
  const photosPerPage = 9; // Jumlah foto per halaman

  const onPageChange = (page) => {
    setCurrentPage(page);
    // memuat foto baru berdasarkan parameter `page`
  };

  // Contoh array
  const allPhotos = Array.from({ length: 27 }); //total foto
  const totalPages = Math.ceil(allPhotos.length / photosPerPage);

  // Menentukan foto yang akan ditampilkan di halaman saat ini
  const currentPhotos = allPhotos.slice(
    (currentPage - 1) * photosPerPage,
    currentPage * photosPerPage
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-40 px-5">
      <h1 className="text-3xl font-bold mb-4">GALERI TERBARU</h1>
      <h2 className="text-lg mb-10">
        Informasi terbaru dari DISKOMINFO Kabupaten Semarang dalam bentuk Foto & Video
      </h2>

      {/* Konten Utama untuk Galeri Foto */}
      <div className="flex w-full max-w-screen-lg flex-col lg:flex-row">
        <div className="flex flex-col lg:flex-row justify-center w-full">
          {/* Galeri Utama */}
          <div className="flex flex-col items-center justify-center w-full lg:w-3/4">
            {/* Grid Galeri */}
            <div className="grid grid-cols-3 gap-9">
              {currentPhotos.map((_, index) => (
                <div key={index} className="flex justify-center">
                  <Card className="w-full max-w-xs">
                    <Image
                      src={gambar2}
                      alt="Kegiatan Diskominfo"
                      className="w-full h-auto"
                    />
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
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
