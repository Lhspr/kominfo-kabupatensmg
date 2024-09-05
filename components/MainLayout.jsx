'use client';
import { Inter } from 'next/font/google';
import React from 'react';
import NavigationBar from './homepage/NavigationBar';
import { Footer1 } from '@/components/Footer1';
const inter = Inter({ subsets: ['latin'] });

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavigationBar />
        {children}
        <Footer1 />
      </body>
    </html>
  );
};

export default MainLayout;