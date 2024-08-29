"use client";

import { Card } from "flowbite-react";
import gambar2 from "@/assets/sherlyy1a.png";

export function Foto() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-10">
      <h1>GALERI TERBARU</h1>
      <h2>Informasi terbaru dari DISKOMINFO Kabupaten Semarang dalam bentuk Foto & Video</h2>
      {/* Kontainer ini memastikan Card berada di tengah dengan spasi yang cukup */}
      <Card className="max-w-sm" imgAlt="Kegiatan Diskominfo" imgSrc={gambar2}>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Galeri Terbaru Diskominfo
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Informasi terbaru dari DISKOMINFO Provinsi Jawa Tengah dalam bentuk Foto & Video.
        </p>
      </Card>
    </div>
  );
}
