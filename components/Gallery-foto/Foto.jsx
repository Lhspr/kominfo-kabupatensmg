'use client';

import { Card } from 'flowbite-react';
import gambar2 from '@/assets/sherlyy1a.png';
import { Pagination } from 'flowbite-react';
import { useState } from 'react';
import Image from 'next/image';

export function Foto() {
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = page => setCurrentPage(page);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-10 px-5">
      <h1 className="text-3xl font-bold mb-4">GALERI TERBARU</h1>
      <h2 className="text-lg mb-10">
        Informasi terbaru dari DISKOMINFO Kabupaten Semarang dalam bentuk Foto &
        Video
      </h2>

      {/* Main Content for Photo Gallery and Sidebar */}
      <div className="flex w-full max-w-screen-lg flex-col lg:flex-row">
        <div className="flex flex-col lg:flex-row justify-center w-full">
          {/* Main Gallery */}
          <div className="flex flex-col items-center justify-center w-full lg:w-3/4">
            {/* Grid Gallery */}
            <div className="grid grid-cols-3 gap-9">
              {Array.from({ length: 9 }).map((_, index) => (
                <div key={index} className="flex justify-center">
                  <Card className="w-full max-w-xs">
                    <Image
                      src={gambar2}
                      alt="Kegiatan Diskominfo"
                      className="w-full h-auto"
                    />
                    <div className="p-5">
                      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Galeri Terbaru Diskominfo
                      </h5>
                      <p className="font-normal text-gray-700 dark:text-gray-400">
                        Informasi terbaru dari DISKOMINFO Kabupaten Semarang
                        dalam bentuk Foto & Video.
                      </p>
                    </div>
                  </Card>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-10">
              <Pagination
                currentPage={currentPage}
                totalPages={100}
                onPageChange={onPageChange}
                showIcons
              />
            </div>
          </div>

          {/* Kategori Berita */}
          <div className="w-full lg:w-1/4 lg:ml-10 mt-10 lg:mt-0">
            <Card>
              <h3 className="text-xl font-bold mb-4">KATEGORI BERITA</h3>
              <ul className="list-none space-y-2">
                <li className="flex items-center text-gray-700">
                  <span className="mr-2 text-orange-500">▶</span> Berita
                  Semarang
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="mr-2 text-orange-500">▶</span> Berita
                  Transisi
                </li>
                <li className="flex items-center text-gray-700 font">
                  <span className="mr-2 text-orange-500">▶</span> Sorotan Media
                </li>
              </ul>
            </Card>

            <Card className="mt-6">
              <h3 className="text-xl font-bold mb-4">TERPOPULER</h3>
              <div className="space-y-4">
                <div className="flex flex-col">
                  <Image
                    src={gambar2}
                    alt="Logo Kominfo"
                    className="w-full h-auto"
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
                  <h3 className="text-xl font-bold mb-4">BERITA SEMARANG</h3>
                  <Image
                    src={gambar2}
                    alt="Temuan Isu Hoaks"
                    className="w-full h-auto"
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
                  <div>
                    <h3 className="text-xl font-bold mb-4">
                      BERITA TRANSPARASI
                    </h3>
                    <Image
                      src={gambar2}
                      alt="Temuan Isu Hoaks"
                      className="w-full h-auto"
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
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
