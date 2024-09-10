'use client';

import { useState } from 'react';
import { Card, Pagination } from 'flowbite-react';

export function Video() {
  // State for managing pagination
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page) => {
    setCurrentPage(page);
    // You can load the new videos based on the `page` parameter here
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-40 px-5">
      <h1 className="text-3xl font-bold mb-4">Video</h1>
      <h2 className="text-lg mb-10">
        Video terbaru DISKOMINFO Kabupaten Semarang
      </h2>

      {/* Main Content for Video Gallery */}
      <div className="flex w-full max-w-screen-lg flex-col lg:flex-row">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {/* Video Embeds */}
          {[
            {
              id: "0znJaNCqJKU", // Your provided video ID
              title: "DISKOMINFO Ungaran - Andakara Kerta Raharja 'Peringatan ke-12 UUK DIY'",
            },
            {
              id: "video_id_2",
              title: "DISKOMINFO Kabupaten Semarang - Upacara Peringatan HUT ke-79 RI Dinas Komunikasi dan Informatika",
            },
            {
              id: "video_id_3",
              title: "DISKOMINFO Kabupaten Semarang - Upacara Peringatan HUT ke-79 RI Dinas Komunikasi dan Informatika",
            },
            {
              id: "video_id_3",
              title: "DISKOMINFO Kabupaten Semarang - Upacara Peringatan HUT ke-79 RI Dinas Komunikasi dan Informatika",
            },
            {
              id: "video_id_3",
              title: "DISKOMINFO Kabupaten Semarang - Upacara Peringatan HUT ke-79 RI Dinas Komunikasi dan Informatika",
            },
            {
              id: "video_id_3",
              title: "DISKOMINFO Kabupaten Semarang - Upacara Peringatan HUT ke-79 RI Dinas Komunikasi dan Informatika",
            },
          ].map((video, index) => (
            <div key={index} className="flex justify-center">
              <div className="w-full max-w-md">
                <iframe
                  width="100%"
                  height="auto"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <p className="mt-2 text-center">{video.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={10}  // total pages
        onPageChange={onPageChange}
        className="mt-6"
      />
    </div>
  );
}
