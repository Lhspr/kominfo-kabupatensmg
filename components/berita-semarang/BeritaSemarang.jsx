'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';
import { Card } from 'flowbite-react';
import Image from 'next/image';
import { fetchNewsDatas } from '@/services/news_services';

export function BeritaSemarang() {
  // State untuk menyimpan data berita
  const [news, setNews] = useState([]);

  // Fungsi untuk mengambil data berita dari layanan
  const fetchData = async () => {
    try {
      // Mengambil data berita menggunakan fungsi fetchNewsDatas
      const data = await fetchNewsDatas('news');
      if (data) {
        // Menyimpan data berita ke state
        setNews(data);
      }
    } catch (error) {
      // Menangani kesalahan saat mengambil data
      console.error('Error Fetching data News', error);
    }
  };

  useEffect(() => {
    // Memanggil fungsi fetchData saat komponen dimuat
    fetchData();
  }, [0]);

  return (
    <div className="flex flex-col items-center pt-20 mb-32">
      {/* Judul halaman */}
      <h1 className="text-5xl font-extrabold dark:text-white mb-8 text-center">
        Berita
        <small className="ms-2 font-semibold text-gray-500 dark:text-gray-400">
          Kabupaten Semarang
        </small>
      </h1>

      {/* Kontainer grid utama dengan 3 kolom */}
      <div className="flex flex-col items-center justify-center w-full max-w-screen-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-10 w-full max-w-screen-lg">
          {/* Kartu berita */}
          {news.map((item, index) => (
            <Card
              key={index}
              className="shadow-xl flex flex-col items-center justify-center"
            >
              {/* Gambar berita */}
              <Image
                width={250}
                height={250}
                src={item.image}
                alt="image"
                className="w-full h-64 object-cover"
              />
              {/* Konten berita */}
              <div className="p-4 text-center">
                <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
                  {item.title}
                </h5>
                <p className="text-sm font-light text-gray-700 dark:text-gray-400 mb-2">
                  {item.description}
                </p>
                <a
                  href="#"
                  className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Baca selengkapnya
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
