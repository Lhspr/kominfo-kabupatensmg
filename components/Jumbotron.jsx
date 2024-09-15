import Image from 'next/image';
import React from 'react';
import { Carousel } from 'flowbite-react'; 
import gambar1 from "@/assets/bg2.jpg"; 
import gambar2 from "@/assets/bg2.jpg"; 
import gambar3 from "@/assets/bg2.jpg";

const Jumbotron = () => {
  return (
    <div className="relative min-w-screen">
      {/* Carousel untuk menampilkan gambar */}
      <div className="w-full h-screen">
        <Carousel>
          {/* Gambar pertama dalam carousel */}
          <div className="flex h-full items-center justify-center bg-[#B3DDF2] dark:bg-[#85B7CC] dark:text-white">
            <Image src={gambar1} alt="Gambar 1" className="object-cover h-full w-full" />
          </div>
          {/* Gambar kedua dalam carousel */}
          <div className="flex h-full items-center justify-center bg-[#B3DDF2] dark:bg-[#85B7CC] dark:text-white">
            <Image src={gambar2} alt="Gambar 2" className="object-cover h-full w-full" />
          </div>
          {/* Gambar ketiga dalam carousel */}
          <div className="flex h-full items-center justify-center bg-[#B3DDF2] dark:bg-[#85B7CC] dark:text-white">
            <Image src={gambar3} alt="Gambar 3" className="object-cover h-full w-full" />
          </div>
        </Carousel>
      </div>

      {/* Konten di atas carousel dengan animasi */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 w-full space-y-4 md:space-y-6 fadeInUp">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
          DINAS KOMUNIKASI DAN INFORMATIKA
        </h1>
        <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light mb-4">
          KABUPATEN SEMARANG
        </h2>
      </div>
    </div>
  );
}

export default Jumbotron;
