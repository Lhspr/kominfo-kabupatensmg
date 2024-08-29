"use client";

import { Carousel } from "flowbite-react";
import gambar1 from "@/assets/bawah1.png";
import gambar2 from "@/assets/bawah2.png";
import Image from "next/image";

export function CarouselDown() {
  return (
    <div className="h-20 sm:h-24 xl:h-28 2xl:h-32">
      <Carousel slide={true} >
        <Image src={gambar1} alt="Gambar 1" className="object-contain h-full" />
        <Image src={gambar2} alt="Gambar 2" className="object-contain h-full" />
        <Image src={gambar1} alt="Gambar 3" className="object-contain h-full" />
      </Carousel>
    </div>
  );
}
