'use client';

import { useState } from 'react';
import { Card } from 'flowbite-react';
import Image from 'next/image';
import gambar4 from '@/assets/berita1.png';

export function BeritaTransparasi() {
  // State untuk data card dan input pencarian
  const [searchTerm, setSearchTerm] = useState('');

  // Data card dengan berita viral di Indonesia
  const cards = [
    // Setiap objek card berisi id, judul, deskripsi, dan gambar
    {
      id: 1,
      title: 'Gempa Bumi Cianjur: Ratusan Rumah Rusak Berat',
      description:
        'Gempa bumi dengan kekuatan 5,6 SR mengguncang wilayah Cianjur, menyebabkan kerusakan parah pada ratusan rumah dan fasilitas umum.',
      image: gambar4,
    },
    {
      id: 2,
      title: 'Ibu Kota Negara Baru: Pembangunan Nusantara Dimulai',
      description:
        'Proyek pembangunan Ibu Kota Negara (IKN) Nusantara resmi dimulai, dengan fokus pada infrastruktur dan keberlanjutan lingkungan.',
      image: gambar4,
    },
    {
      id: 3,
      title: 'Kenaikan BBM: Dampak Ekonomi dan Reaksi Masyarakat',
      description:
        'Kenaikan harga bahan bakar minyak (BBM) memicu berbagai reaksi dari masyarakat, termasuk unjuk rasa di beberapa daerah.',
      image: gambar4,
    },
    {
      id: 4,
      title: 'Pandemi COVID-19: Update Vaksinasi dan Varian Baru',
      description:
        'Pemerintah terus mempercepat program vaksinasi untuk menghadapi varian baru COVID-19 yang mulai menyebar di beberapa wilayah.',
      image: gambar4,
    },
    {
      id: 5,
      title: 'Judul Berita 5',
      description:
        'Deskripsi singkat untuk berita ke-5. Detail tentang topik berita ini.',
      image: gambar4,
    },
    {
      id: 6,
      title: 'Judul Berita 6',
      description:
        'Deskripsi singkat untuk berita ke-6. Detail tentang topik berita ini.',
      image: gambar4,
    },
  ];

  // Filter card berdasarkan searchTerm
  const filteredCards = cards.filter(card =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center pt-20 mb-32 px-4 sm:px-6 lg:px-8">
      {/* Heading di atas card */}
      <h1 className="text-5xl font-extrabold dark:text-white mb-8 text-center">
        Berita
        <small className="ms-2 font-semibold text-gray-500 dark:text-gray-400">
          Transparasi
        </small>
      </h1>

      {/* Input pencarian untuk mencari berita */}
      <div className="w-full max-w-screen-md mb-8">
        <input
          type="search"
          placeholder="Cari Berita..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="w-full p-3 rounded-md bg-white text-black"
        />
      </div>

      <div className="flex w-full max-w-screen-lg flex-col lg:flex-row">
        {/* Grid container untuk card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full lg:w-3/4">
          {filteredCards.length > 0 ? (
            filteredCards.map(card => (
              <Card
                key={card.id}
                className="flex flex-col justify-between h-full shadow-lg"
              >
                {/* Gambar berita */}
                <Image
                  width={400}
                  height={200}
                  src={card.image}
                  alt={card.title}
                  className="object-cover w-full h-48"
                />
                {/* Konten berita */}
                <div className="p-4 flex-grow flex flex-col justify-between">
                  <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white mb-2">
                    {card.title}
                  </h5>
                  <p className="text-sm text-gray-700 dark:text-gray-400 mb-4">
                    {card.description}
                  </p>
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline mt-auto"
                  >
                    Read more
                  </a>
                </div>
              </Card>
            ))
          ) : (
            <p className="text-lg font-semibold text-gray-500 dark:text-gray-400">
              Tidak ada hasil yang ditemukan.
            </p>
          )}
        </div>

        {/* Kategori Berita */}
        <div className="w-full lg:w-1/4 lg:ml-10 mt-10 lg:mt-0">
          <Card className="w-full">
            <h3 className="text-xl font-bold mb-4">KATEGORI BERITA</h3>
            <ul className="list-none space-y-2">
              {/* Daftar kategori berita */}
              <li className="flex items-center text-gray-700">
                <span className="mr-2 text-orange-500">▶</span> Berita Semarang
              </li>
              <li className="flex items-center text-gray-700">
                <span className="mr-2 text-orange-500">▶</span> Berita Transisi
              </li>
              <li className="flex items-center text-gray-700">
                <span className="mr-2 text-orange-500">▶</span> Sorotan Media
              </li>
            </ul>
          </Card>

          {/* Terpopuler */}
          <Card className="mt-6">
            <h3 className="text-xl font-bold mb-4">TERPOPULER</h3>
            <div className="space-y-4">
              {/* Daftar berita terpopuler */}
              <div className="flex flex-col">
                <Image
                  src={gambar4}
                  alt="Logo Kominfo"
                  className="w-full h-auto"
                />
                <div className="p-5 flex flex-col">
                  <h5 className="text-lg font-bold w-full overflow-auto">
                    Siaran Pers No. 01/HM/KOMINFO/01/2024
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    Putus Akses Lebih dari 800 Ribu Konten, Gerak Cepat Menteri
                    Budi Arie Berantas Judi Online.
                  </p>
                </div>
              </div>
              <div className="flex flex-col">
                <Image
                  src={gambar4}
                  alt="Temuan Isu Hoaks"
                  className="w-full h-auto"
                />
                <div className="p-5">
                  <h5 className="text-lg font-bold overflow-auto">
                    Siaran Pers No. 02/HM/KOMINFO/01/2024
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    Temuan Isu Hoaks, Gerak Cepat Menangani Informasi yang
                    Menyesatkan.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
