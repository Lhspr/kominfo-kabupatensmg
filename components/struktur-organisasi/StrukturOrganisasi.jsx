"use client";

import { Card } from "flowbite-react";
import gambar2 from "@/assets/struktur.jpeg";
import Image from "next/image";

export function StrukturOrganisasi() {
  return ( 
    <div className="flex justify-center items-center h-screen mb-32">
      <Card className="w-full p-4">
        {/* Div untuk teks, ditempatkan sebelum gambar */}
        <div className="flex justify-center items-center">
          <h1 className="text-white text-4xl font-bold bg-black bg-opacity-50 p-4 rounded">
            Struktur Organisasi
          </h1>
        </div>

        {/* Gambar sebagai elemen berikutnya */}
        <div>
          <Image
            width={2000}  // Lebar gambar
            height={1500} // Tinggi gambar
            src={gambar2}
            alt="Gambar Struktur Organisasi"
            className="w-full h-auto object-cover"
          />
        </div>
      </Card>
    </div>
  );
}
