import Image from 'next/image';
import React from 'react';
import { Carousel } from 'flowbite-react'; 
import gambar1 from "@/assets/sherlyy1a.png"; 
import gambar2 from "@/assets/ss3.png"; 
import gambar3 from "@/assets/kominfo6.png";
import logo from '@/assets/kbsmg3.png';

const Jumbotron = () => {
  return (
    <div className="relative min-w-screen">
      {/* Carousel */}
      <div className="w-full h-screen">
        <Carousel>
          <div className="flex h-full items-center justify-center bg-[#B3DDF2] dark:bg-[#85B7CC] dark:text-white">
            <Image src={gambar1} alt="Gambar 1" className="object-cover h-full w-full" />
          </div>
          <div className="flex h-full items-center justify-center bg-[#B3DDF2] dark:bg-[#85B7CC] dark:text-white">
            <Image src={gambar2} alt="Gambar 2" className="object-cover h-full w-full" />
          </div>
          <div className="flex h-full items-center justify-center bg-[#B3DDF2] dark:bg-[#85B7CC] dark:text-white">
            <Image src={gambar3} alt="Gambar 3" className="object-cover h-full w-full" />
          </div>
        </Carousel>
      </div>

      {/* Content on top of the carousel */}
      <div className="absolute inset-x-0 top-44 flex flex-col items-center justify-center text-center p-4 w-full space-y-4 md:space-y-6">
        {/* <Image
          src={logo}
          alt="Logo Diskominfo"
          className="w-32 h-auto mb-0 md:w-48 lg:w-64"
        />
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Diskominfo Kabupaten Semarang
        </h1> */}
       
      </div>
    </div>
  );
}

export default Jumbotron;
