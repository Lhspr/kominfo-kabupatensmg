'use client';

import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Pastikan untuk mengimpor ikon yang diperlukan
import Image from 'next/image';
import gambar2 from '@/assets/kegiatan1.jpeg'; // Ganti dengan gambar yang sesuai

export function Foto() {
  // State untuk mengelola halaman saat ini
  const [currentPage, setCurrentPage] = useState(1);
  const photosPerPage = 3; // Jumlah foto per halaman

  // Fungsi untuk mengubah halaman
  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  // Fungsi untuk halaman sebelumnya
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Fungsi untuk halaman berikutnya
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
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
    <div className="flex flex-col items-center justify-center min-h-screen py-5 px-2.5 bg-[#270b60] text-white" id="foto-homepage">
      {/* Judul Galeri */}
      <h1 className="text-3xl font-bold mb-4">GALERI TERBARU</h1>
      <h2 className="text-lg mb-10">Kegiatan terbaru dari DISKOMINFO Kabupaten Semarang</h2>

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

      {/* Pagination dengan Panah */}
      <div className="flex justify-center items-center mt-6 space-x-4">
        {/* Tombol panah kiri */}
        <button
          onClick={handlePrevPage}
          className="text-gray-700 hover:text-gray-900 disabled:text-gray-300"
          disabled={currentPage === 1}
        >
          <FaChevronLeft size={24} />
        </button>

        {/* Informasi halaman */}
        <span className="text-gray-700">
          {currentPage} / {totalPages}
        </span>

        {/* Tombol panah kanan */}
        <button
          onClick={handleNextPage}
          className="text-gray-700 hover:text-gray-900 disabled:text-gray-300"
          disabled={currentPage === totalPages}
        >
          <FaChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}
