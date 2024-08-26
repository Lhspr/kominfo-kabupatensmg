import Image from 'next/image';
import React from 'react';
import gambar from '@/assets/bg1.jpg';
import logo from '@/assets/kbsmg3.png';

const Jumbotron = () => {
  return (
    <div className='relative min-h-screen min-w-screen'>
      <Image 
        src={gambar} 
        alt="Background Image" 
        className='w-full h-full object-cover' 
      />
      <div className='absolute inset-0 flex flex-col items-center justify-center text-center p-4 bg-black bg-opacity-40'>
        <Image 
          src={logo} 
          alt="Logo Diskominfo" 
          className='max-w-96 h-auto mb-0'
        />
        <h1 className='text-white text-4xl md:text-5xl font-bold mb-4'>
          Diskominfo Kabupaten Semarang
        </h1>
        <div className='w-full max-w-screen-md'>
          <input
            type="search"
            placeholder="Cari..."
            className='w-full p-3 rounded-md bg-white text-black'
          />
        </div>
      </div>
    </div>
  );
}

export default Jumbotron;
