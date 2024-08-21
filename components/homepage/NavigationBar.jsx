import { Navbar } from 'flowbite-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import icon from "@/assets/kominfo5.png";

const NavigationBar = () => {
  return (
    <Navbar fluid rounded className="flex items-center justify-center">
      <Navbar.Brand as={Link} href="https://flowbite-react.com" className="flex items-center">
        <Image
          height={55} 
          width={200} 
          src={icon}
          className="ml-0 mr-3 h-auto sm:h-auto" // Menghapus margin kiri untuk memastikan logo berada di kiri
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
