'use client';
import { Inter } from 'next/font/google';
import React from 'react';
import { Footer1 } from '@/components/Footer1';
import FixNavigation from './homepage/FixNavigation';
import { AccessibilityProvider } from '@/contexts/AccessibilityContext';
import AccessibilityControls from './AccessibilityControls';
const inter = Inter({ subsets: ['latin'] });

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AccessibilityProvider>
          <FixNavigation />
          <AccessibilityControls />
          {children}
          <Footer1 />
        </AccessibilityProvider>
      </body>
    </html>
  );
};

export default MainLayout;
