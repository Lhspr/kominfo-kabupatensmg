"use client";

import { Card } from "flowbite-react";
import gambar3 from "@/assets/kominfo7.png";
import Image from "next/image";

export function BeritaTransparasi() {
  return (
    <div className="flex flex-col items-center pt-40 mb-32">
      {/* Heading di atas card */}
      <h1 className="text-5xl font-extrabold dark:text-white mb-8">
        Berita
        <small className="ms-2 font-semibold text-gray-500 dark:text-gray-400">
          Transparasi
        </small>
      </h1>

      {/* Grid container untuk card */}
      <div className="grid grid-rows-2 grid-flow-col gap-y-5 gap-x-5 content-around">
        <Card renderImage={() => <Image width={250} height={125} src={gambar3} alt="image 1" />} alt="Gambar 1" className="object-cover h-full w-full" horizontal>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
          </p>
          <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Read more</a>
        </Card>
        <Card renderImage={() => <Image width={250} height={125} src={gambar3} alt="image 1" />} alt="Gambar 1" className="object-cover h-full w-full" horizontal>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
          </p>
          <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Read more</a>
        </Card>
        <Card renderImage={() => <Image width={250} height={125} src={gambar3} alt="image 1" />} alt="Gambar 1" className="object-cover h-full w-full" horizontal>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
          </p>
          <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Read more</a>
        </Card>
        <Card renderImage={() => <Image width={250} height={125} src={gambar3} alt="image 1" />} alt="Gambar 1" className="object-cover h-full w-full" horizontal>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
          </p>
          <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Read more</a>
        </Card>
      </div>
    </div>
  );
}
