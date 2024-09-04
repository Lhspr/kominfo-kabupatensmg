"use client";

import { Card } from "flowbite-react";
import gambar2 from "@/assets/sherlyy1a.png";
import gambar3 from "@/assets/ahy.jpg";
import Image from "next/image";

export function BeritaSemarang() {
  return (
    <div className="flex flex-col items-center pt-20 mb-32">
      {/* Heading di atas card */}
      <h1 className="text-5xl font-extrabold dark:text-white mb-8">
        Berita
        <small className="ms-2 font-semibold text-gray-500 dark:text-gray-400">
          Kabupaten Semarang
        </small>
      </h1>

      <div className="w-full max-w-screen-md">
        <input
          type="search"
          placeholder="Cari Berita..."
          className="w-full p-3 rounded-md bg-white text-black"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-20 gap-x-20 pt-20">
        <Card renderImage={() => <Image width={250} height={125} src={gambar2} alt="image 1" />} alt="Gambar 1" className="object-cover h-full w-full shadow-xl " horizontal>
          <h5 className="text-base font-semibold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="text-xs font-light text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
          </p>
          <a href="#" className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">Read more</a>
        </Card>
        <Card renderImage={() => <Image width={250} height={125} src={gambar2} alt="image 1" />} alt="Gambar 1" className="object-cover h-full w-full shadow-xl " horizontal>
          <h5 className="text-base font-semibold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="text-xs font-light text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
          </p>
          <a href="#" className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">Read more</a>
        </Card>

        <Card renderImage={() => <Image width={250} height={125} src={gambar2} alt="image 1" />} alt="Gambar 1" className="object-cover h-full w-full shadow-xl " horizontal>
          <h5 className="text-base font-semibold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="text-xs font-light text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
          </p>
          <a href="#" className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">Read more</a>
        </Card>
        <Card renderImage={() => <Image width={250} height={125} src={gambar2} alt="image 1" />} alt="Gambar 1" className="object-cover h-full w-full shadow-xl " horizontal>
          <h5 className="text-base font-semibold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="text-xs font-light text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
          </p>
          <a href="#" className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">Read more</a>
        </Card>
        
        <Card renderImage={() => <Image width={250} height={125} src={gambar2} alt="image 1" />} alt="Gambar 1" className="object-cover h-full w-full shadow-xl " horizontal>
          <h5 className="text-base font-semibold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="text-xs font-light text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
          </p>
          <a href="#" className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">Read more</a>
        </Card>
        
        <Card renderImage={() => <Image width={250} height={125} src={gambar3} alt="image 1" />} alt="Gambar 1" className="object-cover h-full w-full shadow-xl " horizontal>
          <h5 className="text-base font-semibold tracking-tight text-gray-900 dark:text-white">
            Menteri AHY: Sertipikat Hak Milik Tanah Untuk Modal Usaha
          </h5>
          <p className="text-xs font-light text-gray-700 dark:text-gray-400">
            Diskominfo-Pringapus: Menteri Agraria Tata Ruang / Kepala Badan Pertanahan Nasional
          </p>
          <a
            href="https://main.semarangkab.go.id/menteri-ahy-sertipikat-hak-milik-tanah-untuk-modal-usaha/"
            className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read more
          </a>
        </Card>
      </div>
    </div>
  );
}
