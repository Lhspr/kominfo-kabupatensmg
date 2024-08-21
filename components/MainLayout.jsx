'use client';
import Link from 'next/link';
import { Inter } from 'next/font/google';
import React from 'react';
import { Navbar } from 'flowbite-react';
import Image from 'next/image';
import icon from '@/public/next.svg';
import NavigationBar from './homepage/NavigationBar';

const inter = Inter({ subsets: ['latin'] });

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavigationBar/>
        {children}
      </body>
    </html>
  );
};

export default MainLayout;