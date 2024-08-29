"use client";

import { Card } from "flowbite-react";
import gambar2 from "@/assets/sherlyy1a.png";
import Image from "next/image";

export function StrukturOrganisasi() {
  return (
    <div className="flex justify-center mb-32">
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
      </div>
    </div>
  );
}