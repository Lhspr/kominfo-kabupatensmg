'use client';
import { Inter } from 'next/font/google';
import React from 'react';
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