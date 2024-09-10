
"use client";

import { Card } from "flowbite-react";
import gambar2 from "@/assets/visi.jpeg";
import Image from "next/image";

export function VisiMisi() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-20 px-5">
      <Card className="w-[70%] p-4">
        <div>
          <Image
            src={gambar2}
            alt="Gambar Struktur Organisasi"
            width={2000}
            height={1500}
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="flex justify-center items-center">
          <h1 className="text-white text-4xl font-bold bg-black bg-opacity-50 p-4 rounded">
            visi
          </h1>
        </div>
        <p>“Menjadi Fasilitator Penerapan dan Pengembangan E-Government serta Pemantapan Layanan Informasi Publik dalam Penyelenggaraan Pemerintahan dan Pembangunan Daerah Kabupaten Semarang”.</p>
        <div className="flex justify-center items-center">
          <h1 className="text-white text-4xl font-bold bg-black bg-opacity-50 p-4 rounded">
            Misi
          </h1>
        </div>
        <p>Peningkatan kualitas SDM aparatur dan masyarakat dibidang teknologi informasi dan komunikasi</p>
        <p>Mendukung terwujudnya tata kelola pemerintahan yang baik melalui penerapan dan pengembangan e-Government</p>
        <p>Memfasilitasi penyebarluasan informasi penyelenggaraan pemerintahan dan pembangunan daerah</p>
        <p>Mengembangan data/informasi/statistik daerah yang berkualitas sebagai bahan penyusunan perencanaan daerah</p>
        <p>Memfasilitasi dan meningkatkan dukungan keamanan informasi internal melalui pengelolaandan layanan persandian</p>
        <p>Peningkatan kualitas pembinaan manajemen dan dukungan administrasi dinas</p>
      </Card>
    </div>
  );
}
