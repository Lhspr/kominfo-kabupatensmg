"use client";

import { Card } from "flowbite-react";
import gambar2 from "@/assets/struktur.jpeg";
import Image from "next/image";

export function StrukturOrganisasi() {
  return (
    <div className="flex justify-center items-center h-screen mb-32">
      <Card className="w-auto max-w-4xl p-4">
        <div className="flex justify-center">
          <Image
            width={800}  // Ukuran lebar gambar, sesuaikan sesuai kebutuhan
            height={400} // Ukuran tinggi gambar, sesuaikan sesuai kebutuhan
            src={gambar2}
            alt="Gambar Struktur Organisasi"
            className="object-cover max-w-full max-h-full"
          />
        </div>
      </Card>
    </div>
  );
}
