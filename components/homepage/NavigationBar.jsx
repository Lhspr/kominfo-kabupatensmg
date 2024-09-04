"use client";

import { Dropdown, Navbar } from 'flowbite-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaSearch, FaBars } from 'react-icons/fa'; // Import ikon yang diperlukan
import icon from "@/assets/kominfo7.png";

const NavigationBar = () => {
  const [isActive, setIsActive] = useState(false);
  const [showSearch, setShowSearch] = useState(false); // State untuk mengontrol tampilan input pencarian
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State untuk mengontrol tampilan menu di perangkat mobile

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSearch = () => {
    setShowSearch(!showSearch); // Toggle untuk menampilkan atau menyembunyikan input pencarian
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle untuk menampilkan atau menyembunyikan menu di perangkat mobile
  };

  return (
    <Navbar
      fluid
      rounded
      className={`fixed w-full z-10 transition-all duration-300 ${isActive ? "bg-white shadow-md text-gray-800" : "bg-transparent text-white"
        }`}
    >
      <div className="flex justify-between items-center w-full px-4 md:px-8">
        {/* Brand Logo */}
        <Navbar.Brand as={Link} href="/" className="flex items-center">
          <Image
            height={55}
            width={200}
            src={icon}
            className="ml-0 mr-3 sm:h-auto w-28 h-24"
            alt="Kominfo Logo"
          />
        </Navbar.Brand>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-white hover:text-blue-500"
          onClick={toggleMenu}
        >
          <FaBars size={20} />
        </button>

        {/* Navbar Menu untuk Dekstop */}
        <div className={`flex-grow md:flex md:items-center md:justify-center ${isMenuOpen ? "block" : "hidden"} md:block`}>
          <Navbar.Collapse className="flex flex-col md:flex-row justify-center items-center">
            <Navbar.Link href="/" active className="hover:text-blue-500">
              Beranda
            </Navbar.Link>
            <Dropdown label="Profil" inline>
              <Dropdown.Item as="div" className="p-0">
                <Link
                  className="block px-4 py-2 text-sm hover:text-blue-500"
                  href={'/struktur-organisasi'}
                >
                  Struktur Organisasi
                </Link>
              </Dropdown.Item>
              <Dropdown.Item as="div" className="p-0">
                <Link
                  className="block px-4 py-2 text-sm hover:text-blue-500"
                  href={'/visi-misi'}
                >
                  Visi Misi
                </Link>
              </Dropdown.Item>
            </Dropdown>
            <Dropdown label="Berita" inline>
              <Dropdown.Item as="div" className="p-0">
                <Link
                  className="block px-4 py-2 text-sm hover:text-blue-500"
                  href="/berita-semarang"
                >
                  Berita Semarang
                </Link>
              </Dropdown.Item>
              <Dropdown.Item as="div" className="p-0">
                <Link
                  className="block px-4 py-2 text-sm hover:text-blue-500"
                  href="/berita-transparasi"
                >
                  Berita Transparasi
                </Link>
              </Dropdown.Item>
            </Dropdown>
            <Navbar.Link href="LINK" className="hover:text-blue-500 text-white">
              PPID
            </Navbar.Link>
            <Dropdown label="Gallery" inline>
              <Dropdown.Item as="div" className="p-0">
                <Link
                  className="block px-4 py-2 text-sm hover:text-blue-500"
                  href={'/Gallery-foto'}
                >
                  Foto
                </Link>
              </Dropdown.Item>
              <Dropdown.Item as="div" className="p-0">
                <Link
                  className="block px-4 py-2 text-sm hover:text-blue-500"
                  href={'/Gallery-video'}
                >
                  Video
                </Link>
              </Dropdown.Item>
            </Dropdown>
            <Navbar.Link href="#" className="hover:text-blue-500 text-white">
              Contact
            </Navbar.Link>
            <Dropdown label="Download" inline>
              <Dropdown.Item as="div" className="p-0">
                <Link
                  className="block px-4 py-2 text-sm hover:text-blue-500"
                  href="/dwnld-regulasi"
                >
                  Regulasi
                </Link>
              </Dropdown.Item>
              <Dropdown.Item as="div" className="p-0">
                <Link
                  className="block px-4 py-2 text-sm hover:text-blue-500"
                  href="/dwnld-materi"
                >
                  Materi
                </Link>
              </Dropdown.Item>
            </Dropdown>
          </Navbar.Collapse>
           {/* Icon untuk input pencarian */}
           <button onClick={toggleSearch} className="p-2 text-white hover:text-blue-500">
              <FaSearch size={20} />
            </button>

            {/* Tampilkan input pencarian jika showSearch bernilai true */}
            {showSearch && (
              <div className="w-full max-w-screen-sm sm:max-w-screen-md mt-2 md:mt-0">
                <input
                  type="search"
                  placeholder="Cari..."
                  className="w-full p-2 sm:p-3 rounded-md bg-white text-black"
                />
              </div>
            )}
        </div>
      </div>
    </Navbar>
  );
};

export default NavigationBar;
