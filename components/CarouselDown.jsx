'use client';

import { Carousel } from 'flowbite-react';
import gambar1 from '@/assets/bawah1.png';
import gambar2 from '@/assets/bawah2.png';
import Image from 'next/image';

// Komponen CarouselDown untuk menampilkan carousel gambar
export function CarouselDown() {
  return (
    <div className="h-20 sm:h-24 xl:h-28 2xl:h-32">
      {/* Carousel dengan opsi slide diaktifkan */}
      <Carousel slide={true}>
        {/* Gambar pertama */}
        <Image src={gambar1} alt="Gambar 1" className="object-contain h-full" />
        {/* Gambar kedua */}
        <Image src={gambar2} alt="Gambar 2" className="object-contain h-full" />
        {/* Gambar ketiga (sama dengan gambar pertama) */}
        <Image src={gambar1} alt="Gambar 3" className="object-contain h-full" />
      </Carousel>
    </div>
  );
}
