"use client";

import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import KominfoLogo from '@/assets/kominfo7.png'; // Ensure the image path is correct

export function Footer1() {
  return (
    <Footer container className="bg-[#007bff] text-white"> {/* Background color blue, text color white */}
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className="flex flex-col items-start">
            <div className="flex items-center space-x-3">
              <img src={KominfoLogo} alt="Kominfo Logo" className="w-40 h-auto" />
              <span className="text-white text-lg font-bold">
                Dinas Komunikasi Dan Informatika Kabupaten Semarang
              </span>
            </div>
            <div className="mt-4">
              <p className="text-white"><strong>Alamat:</strong> Jl. Diponegoro No. 14, Gedung D, UNGARAN – 50511</p>
              <p className="text-white"><strong>Telp:</strong> (024) 76901553</p>
              <p className="text-white"><strong>Email:</strong> kominfo@semarangkab.go.id</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <Footer.Icon href="#" icon={BsFacebook} className="text-white" />
              <Footer.Icon href="#" icon={BsInstagram} className="text-white" />
              <Footer.Icon href="#" icon={BsTwitter} className="text-white" />
              <Footer.Icon href="#" icon={BsGithub} className="text-white" />
              <Footer.Icon href="#" icon={BsDribbble} className="text-white" />
            </div>
          </div>
        </div>
        <Footer.Divider className="border-gray-400" />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Diskominfo™" year={2024} className="text-white" />
        </div>
      </div>
    </Footer>
  );
}
