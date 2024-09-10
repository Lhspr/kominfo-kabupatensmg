'use client';

import { Card } from 'flowbite-react';
import gambar3 from '@/assets/berita1.png';
import Image from 'next/image';

export function BeritaSemarang() {
  return (
    <div className="flex flex-col items-center pt-20 mb-32">
      {/* Heading di atas card */}
      <h1 className="text-5xl font-extrabold dark:text-white mb-8 text-center">
        Berita
        <small className="ms-2 font-semibold text-gray-500 dark:text-gray-400">
          Kabupaten Semarang
        </small>
      </h1>

      {/* Main grid container with 3 columns */}
      <div className="flex flex-col items-center justify-center w-full max-w-screen-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-10 w-full max-w-screen-lg">
          {/* Berita Cards */}
          {[...Array(6)].map((_, index) => (
            <Card key={index} className="shadow-xl flex flex-col items-center justify-center">
              {/* Image */}
              <Image
                width={400}
                height={250}
                src={gambar3}
                alt="image"
                className="w-full h-64 object-cover"
              />
              {/* Content */}
              <div className="p-4 text-center">
                <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
                <p className="text-sm font-light text-gray-700 dark:text-gray-400 mb-4">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                <a
                  href="#"
                  className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Read more
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
