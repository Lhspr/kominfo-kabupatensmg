"use client";

// Mengimpor komponen yang diperlukan dari library dan aset
import { Card } from "flowbite-react";
import gambar2 from "@/assets/profil1.png";
import Image from "next/image";

// Fungsi untuk menampilkan profil Dinas
export function ProfilDinas() {
  return (
    <div className="flex flex-col items-center pt-20 mb-32 px-4">
      {/* Heading di atas card dengan margin bawah */}
      <h1 className="text-5xl font-extrabold dark:text-white mb-4 text-center">
        Profil Dinas
        <small className="block mt-1 text-xl font-semibold text-gray-500 dark:text-gray-400">
          Kabupaten Semarang
        </small>
      </h1>

      {/* Card dengan gambar */}
      <Card className="w-full max-w-4xl p-6 flex items-center justify-center mx-auto">
        {/* Container untuk gambar dengan lebar maksimal */}
        <div className="w-full flex justify-center">
          <Image
            width={2000} // Lebar gambar asli
            height={1500} // Tinggi gambar asli
            src={gambar2}
            alt="Gambar Profil"
            className="max-w-md h-auto object-cover" // Membatasi lebar gambar dan mempertahankan aspek rasio
          />
        </div>
      </Card>

      {/* Tambahkan bagian teks sejarah */}
      <div className="w-full max-w-4xl mt-8 px-6 text-justify text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
        <h2 className="text-2xl font-bold mb-4">Profil Dinas</h2>
        <p>
          Dinas Komunikasi dan Informatika (DISKOMINFO) Kabupaten Semarang atau sering dikenal dengan Diskominfo Ungaran, adalah sebuah lembaga teknis daerah yang bertugas mengelola dan mengembangkan komunikasi serta informasi di wilayah Kabupaten Semarang. 
        </p>
        <p className="mt-4">
          Diskominfo Kabupaten Semarang dibentuk berdasarkan Peraturan Daerah Kabupaten Semarang Nomor X Tahun XXXX, yang kemudian diperbarui dengan Peraturan Daerah Nomor Y Tahun YYYY, yang mengatur tentang struktur organisasi dan tata kerja Dinas Komunikasi dan Informatika.
        </p>
        <p className="mt-4">
          Tujuan utama dari pembentukan Diskominfo adalah untuk meningkatkan transparansi dan efisiensi informasi pemerintah, memfasilitasi komunikasi publik yang efektif, dan mengelola infrastruktur teknologi informasi di seluruh Kabupaten Semarang.
        </p>
      </div>
    </div>
  );
}
