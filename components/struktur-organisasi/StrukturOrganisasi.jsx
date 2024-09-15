"use client";

import { Card } from "flowbite-react";
import gambar2 from "@/assets/struktur.jpg";
import Image from "next/image";

export function StrukturOrganisasi() {
  return (
    <div className="flex flex-col items-center pt-20 mb-32">
        {/* Heading di atas card */}
        <h1 className="text-5xl font-extrabold dark:text-white mb-8 text-center">
          Struktur Organisasi
          <small className="ms-2 font-semibold text-gray-500 dark:text-gray-400">
            Kabupaten Semarang
          </small>
        </h1>
        {/* Gambar sebagai elemen berikutnya */}
        <Card className="w-full p-4 items-center">
        <div>
          <Image
            width={2000}  // Lebar gambar
            height={1500} // Tinggi gambar
            src={gambar2}
            alt="Gambar Struktur Organisasi" // Deskripsi gambar untuk aksesibilitas
            className="w-full h-auto object-cover" // Mengatur ukuran dan tampilan gambar
          />
        </div>
      </Card>
    </div>
  );
}
