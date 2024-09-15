'use client';

// Mengimpor hook dari React dan komponen dari Flowbite
import { useEffect, useState } from 'react';
import { Card, Pagination } from 'flowbite-react';
import { fetchVideoDatas } from '@/services/video_services';

// Komponen Video untuk menampilkan galeri video
export function Video() {
  // State untuk mengelola pagination dan data video
  const [currentPage, setCurrentPage] = useState(1); // Halaman saat ini
  const [videos, setVideos] = useState([]); // State untuk menyimpan data video

  // Fungsi untuk menangani perubahan halaman
  const onPageChange = page => {
    setCurrentPage(page);
    // Memuat video baru berdasarkan halaman yang dipilih
  };

  // Fungsi untuk mengambil data video dari layanan
  const fetchData = async () => {
    try {
      const data = await fetchVideoDatas('videos'); // Mengambil data video
      if (data) {
        setVideos(data); // Menyimpan data video ke state
      }
    } catch (error) {
      console.error('Error Fetching data Photos', error); // Menangani error
    }
  };

  // Mengambil data video saat komponen pertama kali dimuat
  useEffect(() => {
    fetchData();
  }, [0]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-40 px-5">
      <h1 className="text-3xl font-bold mb-4">Video</h1>
      <h2 className="text-lg mb-10">
        Video terbaru DISKOMINFO Kabupaten Semarang
      </h2>

      {/* Konten Utama untuk Galeri Video */}
      <div className="flex w-full max-w-screen-lg flex-col lg:flex-row">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {/* Embed Video */}
          {videos.map(
            (
              video,
              index // Menggunakan state videos untuk merender video
            ) => (
              <div key={index} className="flex justify-center">
                <div className="w-full max-w-md">
                  <iframe
                    width="100%"
                    height="auto"
                    src={`https://www.youtube.com/embed/${video.id}`} // Memastikan video.id ada dalam data
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <p className="mt-2 text-center">{video.title}</p>
                </div>
              </div>
            )
          )}
        </div>
      </div>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage} // Halaman saat ini
        totalPages={10} // Total halaman
        onPageChange={onPageChange} // Fungsi untuk menangani perubahan halaman
        className="mt-6"
      />
    </div>
  );
}
