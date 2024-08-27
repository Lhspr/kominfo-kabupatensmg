"use client"; 

import { Carousel } from "flowbite-react";
import Image from 'next/image';
import { FaPaperPlane, FaBullhorn, FaMicrophone } from 'react-icons/fa'; 
import gambar1 from "@/assets/sherlyy1a.png"; 
import gambar2 from "@/assets/ss3.png"; 
import gambar3 from "@/assets/kominfo6.png";

export function CarouselHomepage() {
  return (
    <div className="flex justify-center my-20">
      {/* Main Container */}
      <div className="flex w-full max-w-screen-xl"> {/* Memperluas lebar container utama */}
        {/* Sidebar */}
        <div className="w-1/4 p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg"> {/* Mengurangi lebar sidebar */}
          <ul className="space-y-2">
            <li className="flex items-center p-4 rounded-lg bg-[#B3DDF2] hover:bg-teal-300 transition dark:bg-[#85B7CC] dark:hover:bg-teal-600">
              <FaPaperPlane className="text-teal-500 mr-3" size={24} />
              <div>
                <div className="text-gray-900 dark:text-white font-bold">TERBARU</div>
                <div className="text-gray-500 dark:text-gray-400 text-sm">Rangkuman Berita</div>
              </div>
            </li>
            <li className="flex items-center p-4 rounded-lg bg-[#B3DDF2] hover:bg-teal-300 transition dark:bg-[#85B7CC] dark:hover:bg-teal-600">
              <FaMicrophone className="text-teal-500 mr-3" size={24} />
              <div>
                <div className="text-gray-900 dark:text-white font-bold">SIARAN PERS</div>
                <div className="text-gray-500 dark:text-gray-400 text-sm">Siaran Pers Terbaru</div>
              </div>
            </li>
            <li className="flex items-center p-4 rounded-lg bg-[#B3DDF2] hover:bg-teal-300 transition dark:bg-[#85B7CC] dark:hover:bg-teal-600">
              <FaBullhorn className="text-teal-500 mr-3" size={24} />
              <div>
                <div className="text-gray-900 dark:text-white font-bold">BERITA</div>
                <div className="text-gray-500 dark:text-gray-400 text-sm">Berita Terbaru</div>
              </div>
            </li>
            <li className="flex items-center p-4 rounded-lg bg-[#B3DDF2] hover:bg-teal-300 transition dark:bg-[#85B7CC] dark:hover:bg-teal-600">
              <FaBullhorn className="text-teal-500 mr-3" size={24} />
              <div>
                <div className="text-gray-900 dark:text-white font-bold">PENGUMUMAN</div>
                <div className="text-gray-500 dark:text-gray-400 text-sm">Pengumuman Terbaru</div>
              </div>
            </li>
          </ul>
        </div>

        {/* Carousel */}
        <div className="w-3/4 ml-4"> {/* Memperluas lebar carousel */}
          <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
            <Carousel onSlideChange={(index) => console.log('onSlideChange()', index)}>
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
        </div>
      </div>
    </div>
  );
}
