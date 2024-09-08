'use client';
import { Inter } from 'next/font/google';
import React from 'react';
import { Footer1 } from '@/components/Footer1';
import FixNavigation from './homepage/FixNavigation';
const inter = Inter({ subsets: ['latin'] });

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <FixNavigation />
        {children}
        <Footer1 />
      </body>
    </html>
  );
};

export default MainLayout;