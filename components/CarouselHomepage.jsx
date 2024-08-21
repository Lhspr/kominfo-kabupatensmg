"use client";

import { Carousel } from "flowbite-react";
import Image from 'next/image'; // Mengimpor komponen Image dari Next.js
import gambar1 from "@/assets/sherlyy1a.png"; 
import gambar2 from "@/assets/ss,3.png";
import gambar3 from "@/assets/kominfo6.png";

export function CarouselHomepage() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel onSlideChange={(index) => console.log('onSlideChange()', index)}>
        <div className="flex h-full items-center justify-center bg-blue-400 dark:bg-blue-700 dark:text-white">
          <Image src={gambar1} alt="Gambar 1" className="object-cover h-full w-full" />
        </div>
        <div className="flex h-full items-center justify-center bg-blue-400 dark:bg-blue-700 dark:text-white">
          <Image src={gambar2} alt="Gambar 2" className="object-cover h-full w-full" />
        </div>
        <div className="flex h-full items-center justify-center bg-blue-400 dark:bg-blue-700 dark:text-white">
          <Image src={gambar3} alt="Gambar 3" className="object-cover h-full w-full" />
        </div>
      </Carousel>
    </div>
  );
}
