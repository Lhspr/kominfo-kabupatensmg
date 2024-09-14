'use client';

import { useEffect, useState } from 'react';
import { Card, Pagination } from 'flowbite-react';
import { fetchVideoDatas } from '@/services/video_services';

export function Video() {
  // State untuk mengelola pagination dan data video
  const [currentPage, setCurrentPage] = useState(1);
  const [videos, setVideos] = useState([]); // Tambahkan state untuk menyimpan video

  const onPageChange = page => {
    setCurrentPage(page);
    // Anda dapat memuat video baru berdasarkan parameter `page` di sini
  };

  // fetching data menggunakan services function
  const fetchData = async () => {
    try {
      const data = await fetchVideoDatas('videos');
      if (data) {
        setVideos(data); // Simpan data video ke state
      }
    } catch (error) {
      console.error('Error Fetching data Photos', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [0]);

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
          {videos.map(
            (
              video,
              index // Gunakan state videos untuk merender video
            ) => (
              <div key={index} className="flex justify-center">
                <div className="w-full max-w-md">
                  <iframe
                    width="100%"
                    height="auto"
                    src={`https://www.youtube.com/embed/${video.id}`} // Pastikan video.id ada dalam data
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <p className="mt-2 text-center">{video.title}</p>
                </div>
              </div>
            )
          )}
        </div>
      </div>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={10} // total pages
        onPageChange={onPageChange}
        className="mt-6"
      />
    </div>
  );
}
