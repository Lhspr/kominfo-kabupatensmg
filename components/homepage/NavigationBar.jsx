import { Navbar } from 'flowbite-react';
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
    <Navbar fluid rounded className={`${isActive ? "bg-white py-4 shadow-md" : "bg-none py-6"
      } fixed w-full z-10 transition-all`}>
      <Navbar.Brand as={Link} href="https://flowbite-react.com" className="flex justify-self-start">
        <Image
          height={55}
          width={200}
          src={icon}
          className="ml-0 mr-3 sm:h-auto w-36 h-36" // Menghapus margin kiri untuk memastikan logo berada di kiri
          alt="Flowbite React Logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle />
      <div className="flex-grow flex justify-center items-center">
        <Navbar.Collapse className="flex justify-center items-center">
          <Navbar.Link href="#" active>
            Beranda
          </Navbar.Link>
          <Navbar.Link as={Link} href="#">
            Profil
          </Navbar.Link>
          <Navbar.Link href="#">PPID</Navbar.Link>
          <Navbar.Link href="#">Berita</Navbar.Link>
          <Navbar.Link href="#">Contact</Navbar.Link>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default NavigationBar;
