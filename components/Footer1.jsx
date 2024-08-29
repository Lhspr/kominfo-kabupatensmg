"use client";

import { useEffect } from 'react';
import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import KominfoLogo from '@/assets/kominfo7.png';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export function Footer1() {
  useEffect(() => {
    // Check if the map is already initialized
    if (!L.DomUtil.get('map')._leaflet_id) {
      const map = L.map('map').setView([-7.104543, 110.411766], 15); // Koordinat Diskominfo

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      }).addTo(map);

      L.marker([-7.104543, 110.411766]).addTo(map)
        .bindPopup('Dinas Komunikasi Dan Informatika Kabupaten Semarang')
        .openPopup();
    }
  }, []);

  return (
    <Footer container className="bg-[#007bff] text-white">
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

        {/* OpenStreetMap with Leaflet.js */}
        <div id="map" style={{ height: '300px', width: '100%' }}></div>

        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Diskominfo™" year={2024} className="text-white" />
        </div>
      </div>
    </Footer>
  );
}
