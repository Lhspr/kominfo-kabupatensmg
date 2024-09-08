'use client';

import { Card } from 'flowbite-react';
import gambar3 from '@/assets/berita1.png';
import Image from 'next/image';

export function BeritaSemarang() {
  return (
    <div className="flex flex-col items-center pt-20 mb-32">
      {/* Heading di atas card */}
      <h1 className="text-5xl font-extrabold dark:text-white mb-8">
        Berita
        <small className="ms-2 font-semibold text-gray-500 dark:text-gray-400">
          Kabupaten Semarang
        </small>
      </h1>

      <div className="w-full max-w-screen-md">
        <input
          type="search"
          placeholder="Cari Berita..."
          className="w-full p-3 rounded-md bg-white text-black"
        />
      </div>

      {/* Main grid container with 3 columns */}
      <div className="flex w-full max-w-screen-lg flex-col lg:flex-row">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-9 pt-10 w-full max-w-screen-xl">
          {/* Berita Cards */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9">
            {/* Set up 2 rows with 3 columns */}
            {[...Array(6)].map((_, index) => (
              <Card key={index} className="shadow-xl" horizontal>
                {/* Image */}
                <Image
                  width={400}
                  height={250}
                  src={gambar3}
                  alt="image"
                  className="w-full h-64 object-cover"
                />
                {/* Content */}
                <div className="p-4">
                  <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions 2021
                  </h5>
                  <p className="text-sm font-light text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                  <a
                    href="#"
                    className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Read more
                  </a>
                </div>
              </Card>
            ))}
          </div>

          {/* Sidebar for Kategori Berita and Terpopuler */}
          <div className="w-full">
            <Card className="mb-6">
              <h3 className="text-xl font-bold mb-4">KATEGORI BERITA</h3>
              {/* Ubah kategori berita menjadi horizontal */}
              <ul className="flex flex-wrap gap-4">
                <li className="flex items-center text-gray-700">
                  <span className="mr-2 text-orange-500">▶</span> Berita
                  Semarang
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="mr-2 text-orange-500">▶</span> Berita
                  Transisi
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="mr-2 text-orange-500">▶</span> Sorotan Media
                </li>
              </ul>
            </Card>

            {/* Terpopuler */}
            <Card>
              <h3 className="text-xl font-bold mb-4">TERPOPULER</h3>
              <div className="space-y-4">
                <div className="flex flex-col">
                  <Image
                    src={gambar3}
                    alt="Logo Kominfo"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-5">
                    <h5 className="text-lg font-bold">
                      Siaran Pers No. 01/HM/KOMINFO/01/2024
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                      Putus Akses Lebih dari 800 Ribu Konten, Gerak Cepat
                      Menteri Budi Arie Berantas Judi Online.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col">
                  <Image
                    src={gambar3}
                    alt="Temuan Isu Hoaks"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-5">
                    <h5 className="text-lg font-bold">
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
    </div>
  );
}
