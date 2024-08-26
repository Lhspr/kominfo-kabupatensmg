"use client";

import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import KominfoLogo from '@/assets/kominfo7.png';

export function Footer1() {
  return (
    <Footer container className="bg-blue-200 text-gray-800">
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className="flex flex-col items-start">
            <Footer.Brand
              href="https://flowbite.com"
              src={KominfoLogo}
              name="Dinas Komunikasi Dan Informatika Kabupaten Semarang"
            />
            <div className="mt-4">
              <p><strong>Alamat:</strong> Jl. Diponegoro No. 14, Gedung D, UNGARAN – 50511</p>
              <p><strong>Telp:</strong> (024) 76901553</p>
              <p><strong>Email:</strong> kominfo@semarangkab.go.id</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <Footer.Icon href="#" icon={BsFacebook} />
              <Footer.Icon href="#" icon={BsInstagram} />
              <Footer.Icon href="#" icon={BsTwitter} />
              <Footer.Icon href="#" icon={BsGithub} />
              <Footer.Icon href="#" icon={BsDribbble} />
            </div>
          </div>
        </div>
        <Footer.Divider className="border-gray-400" />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Diskominfo™" year={2024} />
        </div>
      </div>
    </Footer>
  );
}
