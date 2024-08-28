"use client";

import { useState } from "react";
import { Card } from "flowbite-react";
import gambar3 from "@/assets/kominfo7.png";
import gambar4 from "@/assets/gempa-cianjur.jpeg";
import Image from "next/image";

export function BeritaTransparasi() {
  // State untuk data card dan input pencarian
  const [searchTerm, setSearchTerm] = useState("");

  // Data card dengan berita viral di Indonesia
  const cards = [
    {
      id: 1,
      title: "Gempa Bumi Cianjur: Ratusan Rumah Rusak Berat",
      description:
        "Gempa bumi dengan kekuatan 5,6 SR mengguncang wilayah Cianjur, menyebabkan kerusakan parah pada ratusan rumah dan fasilitas umum.",
      image: gambar4,
    },
    {
      id: 2,
      title: "Ibu Kota Negara Baru: Pembangunan Nusantara Dimulai",
      description:
        "Proyek pembangunan Ibu Kota Negara (IKN) Nusantara resmi dimulai, dengan fokus pada infrastruktur dan keberlanjutan lingkungan.",
      image: gambar3,
    },
    {
      id: 3,
      title: "Kenaikan BBM: Dampak Ekonomi dan Reaksi Masyarakat",
      description:
        "Kenaikan harga bahan bakar minyak (BBM) memicu berbagai reaksi dari masyarakat, termasuk unjuk rasa di beberapa daerah.",
      image: gambar3,
    },
    {
      id: 4,
      title: "Pandemi COVID-19: Update Vaksinasi dan Varian Baru",
      description:
        "Pemerintah terus mempercepat program vaksinasi untuk menghadapi varian baru COVID-19 yang mulai menyebar di beberapa wilayah.",
      image: gambar3,
    },
    {
      id: 5,
      title: "Judul Berita 5",
      description:
        "Deskripsi singkat untuk berita ke-5. Detail tentang topik berita ini.",
      image: gambar3,
    },
    {
      id: 6,
      title: "Judul Berita 6",
      description:
        "Deskripsi singkat untuk berita ke-6. Detail tentang topik berita ini.",
      image: gambar3,
    },
  ];

  // Filter card berdasarkan searchTerm
  const filteredCards = cards.filter((card) =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center pt-20 mb-32">
      {/* Heading di atas card */}
      <h1 className="text-5xl font-extrabold dark:text-white mb-8">
        Berita
        <small className="ms-2 font-semibold text-gray-500 dark:text-gray-400">
          Transparasi
        </small>
      </h1>

      {/* Search Input */}
      <div className="w-full max-w-screen-md mb-8">
        <input
          type="search"
          placeholder="Cari Berita..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-3 rounded-md bg-white text-black"
        />
      </div>

      {/* Grid container untuk card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-10 pt-10 w-full max-w-screen-lg">
        {filteredCards.length > 0 ? (
          filteredCards.map((card) => (
            <div key={card.id} className="flex justify-center">
              <Card className="w-full h-full max-w-sm flex flex-col justify-between shadow-lg">
                <div>
                  <Image
                    width={400}
                    height={200}
                    src={card.image}
                    alt={card.title}
                    className="object-cover w-full h-48"
                  />
                  <div className="p-4">
                    <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white mb-2">
                      {card.title}
                    </h5>
                    <p className="text-sm text-gray-700 dark:text-gray-400">
                      {card.description}
                    </p>
                  </div>
                </div>
                <div className="p-4">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Read more
                  </a>
                </div>
              </Card>
            </div>
          ))
        ) : (
          <p className="text-lg font-semibold text-gray-500 dark:text-gray-400">
            Tidak ada hasil yang ditemukan.
          </p>
        )}
      </div>
    </div>
  );
}
