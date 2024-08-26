import { Dropdown, Navbar } from 'flowbite-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import icon from "@/assets/kominfo7.png";
import { useAmp } from 'next/amp';

const NavigationBar = () => {
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false)
    })
  })
  return (
    <Navbar fluid rounded className={`${isActive ? "bg-white shadow-md" : "bg-none"
      } fixed w-full z-10 transition-all`}>
      <Navbar.Brand as={Link} href="https://flowbite-react.com" className="flex justify-self-start">
        <Image
          height={55}
          width={200}
          src={icon}
          className="ml-0 mr-3 sm:h-auto w-28 h-24" // Menghapus margin kiri untuk memastikan logo berada di kiri
          alt="Flowbite React Logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle />
      <div className="flex-grow flex justify-center items-center">
        <Navbar.Collapse className="flex justify-center items-center">
          <Navbar.Link href="/" active>
            Beranda
          </Navbar.Link>
          <Dropdown label='Profil' inline>
            <Dropdown.Item as='div' className='p-0'>
              <Link className='block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600' href={'/struktur-organisasi'}>Struktur Organisasi</Link>
            </Dropdown.Item>
          </Dropdown>
          <Dropdown label='Berita' inline>
            <Dropdown.Item as='div' className='p-0'>
              <Link className='block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600' href={'/berita-semarang'}>Berita Semarang</Link>
            </Dropdown.Item>
          </Dropdown>
          <Navbar.Link href="LINK">PPID</Navbar.Link>
          <Dropdown label='Gallery' inline>
            <Dropdown.Item as='div' className='p-0'>
              <Link className='block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600' href={'/berita-semarang'}>Berita Semarang</Link>
            </Dropdown.Item>
          </Dropdown>
          <Navbar.Link href="#">Contact</Navbar.Link>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default NavigationBar;
