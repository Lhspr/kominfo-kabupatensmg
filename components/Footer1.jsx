'use client';

import dynamic from 'next/dynamic';
import { Footer } from 'flowbite-react';
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from 'react-icons/bs';
import logo from '@/assets/kbsmg3-crop.png';
import Image from 'next/image';

// Import komponen MapComponent secara dinamis
const MapComponent = dynamic(() => import('./MapComponent'), { ssr: false });

export function Footer1() {
  return (
    <Footer
      container
      className="bg-[#007bff] text-white overflow-hidden"
      id="Footer"
    >
      <div className="w-full">
        {/* OpenStreetMap with Leaflet.js */}
        <MapComponent />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
            <div className="flex flex-col items-start w-[50%]">
              <div className="flex items-center justify-center space-x-3 mt-8">
                <Image
                  src={logo}
                  alt="Kominfo Logo"
                  className="w-40 h-full object-contain"
                />
                <div className="">
                  <span className="text-white text-lg font-bold">
                    Dinas Komunikasi Dan Informatika Kabupaten Semarang
                  </span>
                  <div className="mt-4">
                    <p className="text-white">
                      <strong>Alamat:</strong> Jl. Diponegoro No. 14, Gedung D,
                      UNGARAN – 50511
                    </p>
                    <p className="text-white">
                      <strong>Telp:</strong> (024) 76901553
                    </p>
                    <p className="text-white">
                      <strong>Email:</strong> kominfo@semarangkab.go.id
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-end w-[50%] justify-center">
              <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                <Footer.Icon
                  href="#"
                  icon={BsFacebook}
                  className="text-white"
                />
                <Footer.Icon
                  href="#"
                  icon={BsInstagram}
                  className="text-white"
                />
                <Footer.Icon href="#" icon={BsTwitter} className="text-white" />
                <Footer.Icon href="#" icon={BsGithub} className="text-white" />
                <Footer.Icon
                  href="#"
                  icon={BsDribbble}
                  className="text-white"
                />
              </div>
            </div>
          </div>
        </div>
        <Footer.Divider className="border-gray-400" />
        <Footer.Copyright
          href="#"
          by="Diskominfo™"
          year={2024}
          className="text-white"
        />
      </div>
    </Footer>
  );
}
