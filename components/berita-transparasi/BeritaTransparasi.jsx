
"use client";

import { Card } from "flowbite-react";
import gambar2 from "@/assets/sherlyy1a.png";
import Image from "next/image";

export function BeritaTransparasi() {
  return (
    <div className="flex justify-center pt-40 mb-32" >
    <div className="grid grid-rows-2 grid-flow-col gap-y-5 gap-x-5 content-around">
      <Card renderImage={() => <Image width={250} height={125} src={gambar2} alt="image 1" />} alt="Gambar 1" className="object-cover h-full w-full " horizontal>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology acquisitions 2021
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
        </p>
      </Card>
      <Card renderImage={() => <Image width={250} height={125} src={gambar2} alt="image 1" />} alt="Gambar 1" className="object-cover h-full w-full " horizontal>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology acquisitions 2021
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
        </p>
      </Card>
      <Card renderImage={() => <Image width={250} height={125} src={gambar2} alt="image 1" />} alt="Gambar 1" className="object-cover h-full w-full " horizontal>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology acquisitions 2021
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
        </p>
      </Card>
      <Card renderImage={() => <Image width={250} height={125} src={gambar2} alt="image 1" />} alt="Gambar 1" className="object-cover h-full w-full " horizontal>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology acquisitions 2021
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
        </p>
      </Card>
    </div>
    </div>
  );
}
