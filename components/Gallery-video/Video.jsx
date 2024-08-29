"use client";

import { Card } from "flowbite-react";

export function Video() {
  return (
    <Card
      className="max-w-sm"
      imgAlt="Kegiatan Diskominfo"
      imgSrc="/path/to/your/uploaded/image.png" 
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Galeri Terbaru Diskominfo
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Informasi terbaru dari DISKOMINFO Provinsi Jawa Tengah dalam bentuk Foto & Video.
      </p>
    </Card>
  );
}
