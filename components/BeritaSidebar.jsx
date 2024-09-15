'use client';

import { FaRegNewspaper, FaNewspaper } from 'react-icons/fa'; // Menggunakan ikon yang sesuai
import { Card } from 'flowbite-react';
import Image from 'next/image';
import Calendar from 'react-calendar'; // Import kalender dari react-calendar
import 'react-calendar/dist/Calendar.css'; // Impor CSS kalender agar tampilannya bagus
import gambar2 from '@/assets/berita1.png';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { fetchNewsDatas } from '@/services/news_services';

export function Beritasidebar() {
  // State untuk menyimpan data berita
  const [news, setNews] = useState([]);

  // Fungsi untuk mengambil data berita dari service
  const fetchData = async () => {
    try {
      const data = await fetchNewsDatas('news'); // Mengambil data berita
      if (data) {
        setNews(data.slice(0, 3)); // Simpan hanya 3 berita terbaru ke state
      }
    } catch (error) {
      console.error('Error Fetching data News', error); // Menangani error saat mengambil data
    }
  };

  useEffect(() => {
    fetchData(); // Memanggil fungsi fetchData saat komponen pertama kali dimuat
  }, [0]);

  return (
    <div className="flex justify-center my-20">
      {/* Kontainer utama */}
      <div className="flex flex-wrap w-full max-w-screen-xl">
        {/* Sidebar */}
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <div className="bg-white shadow-md rounded-lg p-4 h-full flex flex-col">
            {/* Menu Sidebar */}
            <ul className="space-y-2 mb-4">
              {/* Item menu untuk berita terbaru */}
              <li className="flex items-center p-4 rounded-lg bg-white hover:bg-[#007bff] transition dark:bg-[#f0f0f0] dark:hover:bg-[#007bff]">
                <FaRegNewspaper className="text-[#007bff] mr-3" size={24} />
                <div>
                  <div className="text-gray-900 dark:text-white font-bold">
                    TERBARU
                  </div>
                  <div className="text-gray-500 dark:text-gray-400 text-sm">
                    Rangkuman
                  </div>
                </div>
              </li>
              {/* Item menu untuk kumpulan berita */}
              <li className="flex items-center p-4 rounded-lg bg-white hover:bg-[#007bff] transition dark:bg-[#f0f0f0] dark:hover:bg-[#007bff]">
                <FaNewspaper className="text-[#007bff] mr-3" size={24} />
                <Link href={'/berita-semarang'}>
                  <div className="text-gray-900 dark:text-white font-bold">
                    BERITA
                  </div>
                  <div className="text-gray-500 dark:text-gray-400 text-sm">
                    kumpulan berita
                  </div>
                </Link>
              </li>
              {/* Item menu untuk kumpulan foto */}
              <li className="flex items-center p-4 rounded-lg bg-white hover:bg-[#007bff] transition dark:bg-[#f0f0f0] dark:hover:bg-[#007bff]">
                <FaNewspaper className="text-[#007bff] mr-3" size={24} />
                <Link href={'/Gallery-foto'}>
                  <div className="text-gray-900 dark:text-white font-bold">
                    FOTO
                  </div>
                  <div className="text-gray-500 dark:text-gray-400 text-sm">
                    Kumpulan Foto
                  </div>
                </Link>
              </li>
              {/* Item menu untuk kumpulan video */}
              <li className="flex items-center p-4 rounded-lg bg-white hover:bg-[#007bff] transition dark:bg-[#f0f0f0] dark:hover:bg-[#007bff]">
                <FaNewspaper className="text-[#007bff] mr-3" size={24} />
                <Link href={'/Gallery-video'}>
                  <div className="text-gray-900 dark:text-white font-bold">
                    VIDEO
                  </div>
                  <div className="text-gray-500 dark:text-gray-400 text-sm">
                    Kumpulan Video
                  </div>
                </Link>
              </li>
            </ul>

            {/* Kalender */}
            <div className="mt-4 flex-grow">
              <Calendar className="w-full rounded-lg border" /> {/* Menampilkan kalender */}
            </div>
          </div>
        </div>

        {/* Berita */}
        <div className="w-full md:w-3/4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {news.map(
              (
                item,
                index // Tampilkan berita terbaru
              ) => (
                <Card className="max-w-sm mx-4" key={index}>
                  <Image
                    width={500}
                    height={250}
                    src={item.image || gambar2} // Ganti dengan gambar dari item
                    alt={`Gambar ${index + 1}`}
                    className="object-cover h-full w-full"
                  />
                  <div className="p-5">
                    <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {item.title} {/* Judul berita */}
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                      {item.description} {/* Deskripsi berita */}
                    </p>
                    <a
                      href={item.link} // Ganti dengan link dari item
                      className="text-blue-600 hover:underline"
                    >
                      Read more {/* Tautan untuk membaca lebih lanjut */}
                    </a>
                  </div>
                </Card>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
