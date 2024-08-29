import Image from 'next/image';
import React from 'react';
import gambar from '@/assets/bg1.jpg';
import logo from '@/assets/kbsmg3.png';

const Jumbotron = () => {
  return (
    <div className="min-w-screen">
      <Image
        src={gambar}
        alt="Background Image"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-x-0 top-44 flex flex-col items-center justify-center text-center p-4 w-full space-y-4 md:space-y-6">
        <Image
          src={logo}
          alt="Logo Diskominfo"
          className="w-32 h-auto mb-0 md:w-48 lg:w-64"
        />
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Diskominfo Kabupaten Semarang
        </h1>
        <div className="w-full max-w-screen-sm sm:max-w-screen-md">
          <input
            type="search"
            placeholder="Cari..."
            className="w-full p-2 sm:p-3 rounded-md bg-white text-black"
          />
        </div>
      </div>
    </div>

  );
}

export default Jumbotron;
