"use client";

import { FaRegNewspaper, FaBullhorn, FaNewspaper } from 'react-icons/fa'; // Menggunakan ikon yang sesuai
import { Card } from "flowbite-react";
import Image from 'next/image';
import gambar2 from "@/assets/sherlyy1a.png";

export function CarouselHomepage() {
  return (
    <div className="flex justify-center my-20">
      {/* Main Container */}
      <div className="flex flex-wrap w-full max-w-screen-xl">
        {/* Sidebar */}
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <div className="bg-white shadow-md rounded-lg p-4 h-full">
            <ul className="space-y-2">
              <li className="flex items-center p-4 rounded-lg bg-white hover:bg-[#007bff] transition dark:bg-[#f0f0f0] dark:hover:bg-[#007bff]">
                <FaRegNewspaper className="text-[#007bff] mr-3" size={24} /> {/* Ikon diganti */}
                <div>
                  <div className="text-gray-900 dark:text-white font-bold">TERBARU</div>
                  <div className="text-gray-500 dark:text-gray-400 text-sm">Rangkuman Berita</div>
                </div>
              </li>
              <li className="flex items-center p-4 rounded-lg bg-white hover:bg-[#007bff] transition dark:bg-[#f0f0f0] dark:hover:bg-[#007bff]">
                <FaNewspaper className="text-[#007bff] mr-3" size={24} /> {/* Ikon diganti menjadi Media */}
                <div>
                  <div className="text-gray-900 dark:text-white font-bold">MEDIA</div>
                  <div className="text-gray-500 dark:text-gray-400 text-sm">Berita Media Terbaru</div>
                </div>
              </li>
              <li className="flex items-center p-4 rounded-lg bg-white hover:bg-[#007bff] transition dark:bg-[#f0f0f0] dark:hover:bg-[#007bff]">
                <FaBullhorn className="text-[#007bff] mr-3" size={24} />
                <div>
                  <div className="text-gray-900 dark:text-white font-bold">BERITA</div>
                  <div className="text-gray-500 dark:text-gray-400 text-sm">Berita Terbaru</div>
                </div>
              </li>
              <li className="flex items-center p-4 rounded-lg bg-white hover:bg-[#007bff] transition dark:bg-[#f0f0f0] dark:hover:bg-[#007bff]">
                <FaBullhorn className="text-[#007bff] mr-3" size={24} />
                <div>
                  <div className="text-gray-900 dark:text-white font-bold">PENGUMUMAN</div>
                  <div className="text-gray-500 dark:text-gray-400 text-sm">Pengumuman Terbaru</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Berita */}
        <div className="w-full md:w-3/4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="max-w-sm mx-4">
              <Image width={500} height={250} src={gambar2} alt="Gambar 1" className="object-cover h-full w-full" />
              <div className="p-5">
                <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Gempa Bumi Cianjur: Ratusan Rumah Rusak Berat
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Gempa bumi dengan kekuatan 5,6 SR mengguncang wilayah Cianjur, menyebabkan kerusakan parah pada ratusan rumah dan fasilitas umum.
                </p>
                <a href="#" className="text-blue-600 hover:underline">
                  Read more
                </a>
              </div>
            </Card>
            <Card className="max-w-sm mx-4">
              <Image width={500} height={250} src={gambar2} alt="Gambar 2" className="object-cover h-full w-full" />
              <div className="p-5">
                <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Gempa Bumi Cianjur: Ratusan Rumah Rusak Berat
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Gempa bumi dengan kekuatan 5,6 SR mengguncang wilayah Cianjur, menyebabkan kerusakan parah pada ratusan rumah dan fasilitas umum.
                </p>
                <a href="#" className="text-blue-600 hover:underline">
                  Read more
                </a>
              </div>
            </Card>
            <Card className="max-w-sm mx-4">
              <Image width={500} height={250} src={gambar2} alt="Gambar 3" className="object-cover h-full w-full" />
              <div className="p-5">
                <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Gempa Bumi Cianjur: Ratusan Rumah Rusak Berat
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Gempa bumi dengan kekuatan 5,6 SR mengguncang wilayah Cianjur, menyebabkan kerusakan parah pada ratusan rumah dan fasilitas umum.
                </p>
                <a href="#" className="text-blue-600 hover:underline">
                  Read more
                </a>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
