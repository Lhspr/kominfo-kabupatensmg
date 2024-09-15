'use client'; // Menunjukkan bahwa komponen ini adalah komponen klien di Next.js
import { Inter } from 'next/font/google'; // Mengimpor font Inter dari Google Fonts
import React from 'react'; // Mengimpor React
import { Footer1 } from '@/components/Footer1'; // Mengimpor komponen Footer1
import FixNavigation from './homepage/FixNavigation'; // Mengimpor komponen FixNavigation
// import { AccessibilityProvider } from '@/contexts/AccessibilityContext'; // Konteks aksesibilitas (dalam komentar)
import AccessibilityControls from './AccessibilityControls'; // Mengimpor komponen AccessibilityControls
const inter = Inter({ subsets: ['latin'] }); // Menginisialisasi font Inter dengan subset Latin

// Definisi komponen MainLayout
const MainLayout = ({ children }) => {
  return (
    <html lang="en"> {/* Mengatur atribut bahasa untuk dokumen HTML */}
      <body className={inter.className}> {/* Menerapkan kelas font Inter ke body */}
        {/* <AccessibilityProvider> */} {/* Penyedia konteks aksesibilitas (dalam komentar) */}
          <FixNavigation /> {/* Merender komponen FixNavigation */}
          {/* <AccessibilityControls /> */} {/* Merender komponen AccessibilityControls (dalam komentar) */}
          {children} {/* Merender komponen anak */}
          <Footer1 /> {/* Merender komponen Footer1 */}
        {/* </AccessibilityProvider> */} {/* Menutup penyedia konteks aksesibilitas (dalam komentar) */}
      </body>
    </html>
  );
};

export default MainLayout; // Mengekspor komponen MainLayout untuk digunakan di bagian lain aplikasi
