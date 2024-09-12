'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';
import { Card, Pagination } from 'flowbite-react';
import gambar2 from '@/assets/kegiatan1.jpeg';
import gambar3 from '@/assets/kegiatan2.jpeg';
import Image from 'next/image';

export function Foto() {
  // State untuk mengelola pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [photos, setPhotos] = useState([])
  const photosPerPage = 9; // Jumlah foto per halaman


  const getdatafoto = async () => {
    axios
      .get("http://127.0.0.1:8000/api/v1/photos", {
        headers: {
          Accept: "application/json",
        },
      })
      .then((response) => {
        const data = response.data.data;
        setPhotos(data);
      })
      .catch((error) => {
        alert(`Failed to get data photo to server [${error}]`)
      });
  }

    const onPageChange = (page) => {
      setCurrentPage(page);
    };

  const totalPages = Math.ceil(photos.length / photosPerPage);

  // Menentukan foto yang akan ditampilkan di halaman saat ini
  const currentPhotos = photos.slice(
    (currentPage - 1) * photosPerPage,
    currentPage * photosPerPage
  );

  useEffect(() => {
    getdatafoto()
  },[0]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-40 px-5">
      <h1 className="text-3xl font-bold mb-4">GALERI TERBARU</h1>
      <h2 className="text-lg mb-10">
        Informasi terbaru dari DISKOMINFO Kabupaten Semarang dalam bentuk Foto &
        Video
      </h2>

      {/* Konten Utama untuk Galeri Foto */}
      <div className="flex w-full max-w-screen-lg flex-col lg:flex-row">
        <div className="flex flex-col lg:flex-row justify-center w-full">
          {/* Galeri Utama */}
          <div className="flex flex-col items-center justify-center w-full lg:w-3/4">
            {/* Grid Galeri */}
            <div className="grid grid-cols-3 gap-9">
                {photos.map((item, index) => (
                <div key={index} className="flex justify-center">
                  <Card className="w-full max-w-xs">
                    <img
                      src={item.file_path}
                      alt={`Kegiatan Diskominfo ${index + 1}`}
                      className="w-full h-auto"
                    />
                  </Card> 
                 </div>
              ))} 
            </div>
          </div>
        </div>
      </div>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
        className="mt-6"
      />
    </div>
  );
}
