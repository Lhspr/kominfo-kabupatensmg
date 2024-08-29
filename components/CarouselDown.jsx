"use client";

import { Carousel } from "flowbite-react";
import gambar1 from "@/assets/bawah1.png"; 
import gambar2 from "@/assets/bawah2.png"; 

export function CarouselDown() {
  return (
    <div className="h-20 sm:h-24 xl:h-28 2xl:h-32"> 
      <Carousel slide={false}>
        <img src={gambar1.src} alt="Gambar 1" className="object-contain h-full" />
        <img src={gambar2.src} alt="Gambar 2" className="object-contain h-full" />
        <img src={gambar1.src} alt="Gambar 3" className="object-contain h-full" />
      </Carousel>
    </div>
  );
}
