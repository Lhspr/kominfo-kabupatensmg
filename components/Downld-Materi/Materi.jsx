"use client";

import { Tables } from "flowbite-react";

export const Materi = () => {
  return (
    <div className="flex flex-col items-center pt-20 mb-32">
      {/* Heading di atas card */}
      <h1 className="text-5xl font-extrabold dark:text-white mb-8">
        Materi
      </h1>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg pt-10 pb-20">
        {/* Menggunakan padding-top untuk memberi ruang bagi navbar dan padding-bottom untuk memberi jarak ke footer */}
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 border border-gray-300 divide-y divide-gray-300 dark:divide-gray-700 dark:border-gray-700">
  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
    <tr className="divide-x divide-gray-300 dark:divide-gray-700">
      <th scope="col" className="px-6 py-3 font-extrabold text-center">No</th>
      <th scope="col" className="px-6 py-3 font-extrabold text-center">Nommor Peraturan</th>
      <th scope="col" className="px-6 py-3 text-center">Tentang</th>
      <th scope="col" className="px-6 py-3 text-center">Tanggal Penetapan</th>
      <th scope="col" className="px-6 py-3 text-center">Status</th>
      <th scope="col" className="px-6 py-3 text-center">Unduhan</th>
    </tr>
  </thead>
          <tbody className="divide-y divide-gray-300 dark:divide-gray-700">
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 divide-x divide-gray-300 dark:divide-gray-700">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                1
              </th>
              <td className="px-6 py-4 font-medium text-gray-900">
                Peraturan Daerah Provinsi Jawa Tengah Nomor 6 Tahun 2012
              </td>
              <td className="px-6 py-4 font-medium text-gray-900">
                PELAYANAN INFORMASI PUBLIK PENYELENGGARAAN PEMERINTAHAN DAERAH PROVINSI JAWA TENGAH
              </td>
              <td className="px-6 py-4 font-medium text-gray-900">
                30-Mei-2012
              </td>
              <td className="px-6 py-4 font-medium text-gray-900">
                diubah dengan Peraturan Gubernur Jawa Tengah Nomor 45 Tahun 2013
              </td>
              <td className="px-6 py-4">
                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Unduh</a>
              </td>
            </tr>

            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 divide-x divide-gray-300 dark:divide-gray-700">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                2
              </th>
              <td className="px-6 py-4 font-medium text-gray-900">
                Peraturan Daerah Provinsi Jawa Tengah Nomor 6 Tahun 2012
              </td>
              <td className="px-6 py-4 font-medium text-gray-900">
                PELAYANAN INFORMASI PUBLIK PENYELENGGARAAN PEMERINTAHAN DAERAH PROVINSI JAWA TENGAH
              </td>
              <td className="px-6 py-4 font-medium text-gray-900">
                30-Mei-2012
              </td>
              <td className="px-6 py-4 font-medium text-gray-900">
                diubah dengan Peraturan Gubernur Jawa Tengah Nomor 45 Tahun 2013
              </td>
              <td className="px-6 py-4">
                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Unduh</a>
              </td>
            </tr>

            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 divide-x divide-gray-300 dark:divide-gray-700">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                3
              </th>
              <td className="px-6 py-4 font-medium text-gray-900">
                Peraturan Daerah Provinsi Jawa Tengah Nomor 6 Tahun 2012
              </td>
              <td className="px-6 py-4 font-medium text-gray-900">
                PELAYANAN INFORMASI PUBLIK PENYELENGGARAAN PEMERINTAHAN DAERAH PROVINSI JAWA TENGAH
              </td>
              <td className="px-6 py-4 font-medium text-gray-900">
                30-Mei-2012
              </td>
              <td className="px-6 py-4 font-medium text-gray-900">
                diubah dengan Peraturan Gubernur Jawa Tengah Nomor 45 Tahun 2013
              </td>
              <td className="px-6 py-4">
                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Unduh</a>
              </td>
            </tr>

            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 divide-x divide-gray-300 dark:divide-gray-700">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                4
              </th>
              <td className="px-6 py-4 font-medium text-gray-900">
                Peraturan Daerah Provinsi Jawa Tengah Nomor 6 Tahun 2012
              </td>
              <td className="px-6 py-4 font-medium text-gray-900">
                PELAYANAN INFORMASI PUBLIK PENYELENGGARAAN PEMERINTAHAN DAERAH PROVINSI JAWA TENGAH
              </td>
              <td className="px-6 py-4 font-medium text-gray-900">
                30-Mei-2012
              </td>
              <td className="px-6 py-4 font-medium text-gray-900">
                diubah dengan Peraturan Gubernur Jawa Tengah Nomor 45 Tahun 2013
              </td>
              <td className="px-6 py-4">
                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Unduh</a>
              </td>
            </tr>

            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 divide-x divide-gray-300 dark:divide-gray-700">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                5
              </th>
              <td className="px-6 py-4 font-medium text-gray-900">
                Peraturan Daerah Provinsi Jawa Tengah Nomor 6 Tahun 2012
              </td>
              <td className="px-6 py-4 font-medium text-gray-900">
                PELAYANAN INFORMASI PUBLIK PENYELENGGARAAN PEMERINTAHAN DAERAH PROVINSI JAWA TENGAH
              </td>
              <td className="px-6 py-4 font-medium text-gray-900">
                30-Mei-2012
              </td>
              <td className="px-6 py-4 font-medium text-gray-900">
                diubah dengan Peraturan Gubernur Jawa Tengah Nomor 45 Tahun 2013
              </td>
              <td className="px-6 py-4">
                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Unduh</a>
              </td>
            </tr>

            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 divide-x divide-gray-300 dark:divide-gray-700">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                6
              </th>
              <td className="px-6 py-4 font-medium text-gray-900">
                Peraturan Daerah Provinsi Jawa Tengah Nomor 6 Tahun 2012
              </td>
              <td className="px-6 py-4 font-medium text-gray-900">
                PELAYANAN INFORMASI PUBLIK PENYELENGGARAAN PEMERINTAHAN DAERAH PROVINSI JAWA TENGAH
              </td>
              <td className="px-6 py-4 font-medium text-gray-900">
                30-Mei-2012
              </td>
              <td className="px-6 py-4 font-medium text-gray-900">
                diubah dengan Peraturan Gubernur Jawa Tengah Nomor 45 Tahun 2013
              </td>
              <td className="px-6 py-4">
                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Unduh</a>
              </td>
            </tr>

            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 divide-x divide-gray-300 dark:divide-gray-700">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                7
              </th>
              <td className="px-6 py-4 font-medium text-gray-900">
                Peraturan Daerah Provinsi Jawa Tengah Nomor 6 Tahun 2012
              </td>
              <td className="px-6 py-4 font-medium text-gray-900">
                PELAYANAN INFORMASI PUBLIK PENYELENGGARAAN PEMERINTAHAN DAERAH PROVINSI JAWA TENGAH
              </td>
              <td className="px-6 py-4 font-medium text-gray-900">
                30-Mei-2012
              </td>
              <td className="px-6 py-4 font-medium text-gray-900">
                diubah dengan Peraturan Gubernur Jawa Tengah Nomor 45 Tahun 2013
              </td>
              <td className="px-6 py-4">
                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Unduh</a>
              </td>
            </tr>

            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 divide-x divide-gray-300 dark:divide-gray-700">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                8
              </th>
              <td className="px-6 py-4 font-medium text-gray-900">
                Peraturan Daerah Provinsi Jawa Tengah Nomor 6 Tahun 2012
              </td>
              <td className="px-6 py-4 font-medium text-gray-900">
                PELAYANAN INFORMASI PUBLIK PENYELENGGARAAN PEMERINTAHAN DAERAH PROVINSI JAWA TENGAH
              </td>
              <td className="px-6 py-4 font-medium text-gray-900">
                30-Mei-2012
              </td>
              <td className="px-6 py-4 font-medium text-gray-900">
                diubah dengan Peraturan Gubernur Jawa Tengah Nomor 45 Tahun 2013
              </td>
              <td className="px-6 py-4">
                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Unduh</a>
              </td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Materi;
