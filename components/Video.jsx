'use client';

import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Menggunakan react-icons untuk ikon panah

export function Video() {
  const [currentPage, setCurrentPage] = useState(1);
  const videosPerPage = 3; // Jumlah video per halaman

  // Daftar video
  const allVideos = [
    {
      id: "video_id_1",
      title: "DISKOMINFO Ungaran - Andakara Kerta Raharja 'Peringatan ke-12'",
      url: "https://www.youtube.com/embed/0znJaNCqJKU",
    },
    {
      id: "video_id_2",
      title: "DISKOMINFO Kabupaten Semarang - Upacara Peringatan HUT ke-79 RI Dinas Komunikasi dan Informatika",
      url: "https://www.youtube.com/embed/0znJaNCqJKU",
    },
    {
      id: "video_id_3",
      title: "DISKOMINFO Kabupaten Semarang - Upacara Peringatan HUT ke-79 RI Dinas Komunikasi dan Informatika",
      url: "https://www.youtube.com/embed/0znJaNCqJKU",
    },
    {
      id: "video_id_4",
      title: "DISKOMINFO Kabupaten Semarang - Pelayanan Publik Terkini",
      url: "https://www.youtube.com/embed/0znJaNCqJKU",
    },
  ];

  const totalPages = Math.ceil(allVideos.length / videosPerPage);

  // Video yang akan ditampilkan berdasarkan halaman saat ini
  const currentVideos = allVideos.slice(
    (currentPage - 1) * videosPerPage,
    currentPage * videosPerPage
  );

  // Fungsi untuk mengubah halaman
  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-10 px-5" id='video-homepage'>
      <h1 className="text-3xl font-bold mb-4">Video</h1>
      <h2 className="text-lg mb-10">
        Video terbaru DISKOMINFO Kabupaten Semarang
      </h2>

      {/* Konten utama untuk Galeri Video */}
      <div className="flex w-full max-w-screen-lg flex-col lg:flex-row">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {/* Embeds Video */}
          {currentVideos.map((video) => (
            <div key={video.id} className="flex justify-center">
              <div className="w-full max-w-md">
                <iframe
                  width="100%"
                  height="auto"
                  src={video.url}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <p className="mt-2 text-center">{video.title}</p>
              </div>
            </div>
          ))}
        </div>
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
