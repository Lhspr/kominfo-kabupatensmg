import { Dropdown, Navbar } from 'flowbite-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import icon from "@/assets/kominfo7.png";

const NavigationBar = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar
      fluid
      rounded
      className={`fixed w-full z-10 transition-all duration-300 ${
        isActive ? "bg-white shadow-md text-gray-800" : "bg-transparent text-white"
      }`}
    >
      <Navbar.Brand as={Link} href="/" className="flex justify-self-start">
        <Image
          height={55}
          width={200}
          src={icon}
          className="ml-0 mr-3 sm:h-auto w-28 h-24"
          alt="Kominfo Logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle />
      <div className="flex-grow flex justify-center items-center">
        <Navbar.Collapse className="flex justify-center items-center">
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
          <Navbar.Link href="LINK" className="hover:text-blue-500">
            PPID
          </Navbar.Link>
          <Dropdown label="Gallery" inline>
            <Dropdown.Item as="div" className="p-0">
              <Link
                className="block px-4 py-2 text-sm hover:text-blue-500"
                href={'/Foto'}
              >
                Foto
              </Link>
            </Dropdown.Item>
            <Dropdown.Item as="div" className="p-0">
              <Link
                className="block px-4 py-2 text-sm hover:text-blue-500"
                href={'/Video'}
              >
                Video
              </Link>
            </Dropdown.Item>
          </Dropdown>
          <Navbar.Link href="#" className="hover:text-blue-500">
            Contact
          </Navbar.Link>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default NavigationBar;
