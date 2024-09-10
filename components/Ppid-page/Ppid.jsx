import React from 'react';

export default function Ppid() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Section 1: Layanan PPID */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <h1 className="text-center text-4xl font-bold mb-8">LAYANAN PPID</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1: Form Informasi Publik */}
            <div className="bg-gray-50 p-8 rounded shadow-md text-center">
              <h2 className="text-xl font-semibold mb-4">FORMULIR INFORMASI PUBLIK</h2>
              <button className="px-4 py-2 bg-blue-600 text-white rounded">Isi Formulir</button>
            </div>
            {/* Card 2: Form Keberatan Informasi */}
            <div className="bg-gray-50 p-8 rounded shadow-md text-center">
              <h2 className="text-xl font-semibold mb-4">FORM KEBERATAN INFORMASI</h2>
              <button className="px-4 py-2 bg-blue-600 text-white rounded">Isi Formulir</button>
            </div>
            {/* Card 3: Formulir Pengaduan */}
            <div className="bg-gray-50 p-8 rounded shadow-md text-center">
              <h2 className="text-xl font-semibold mb-4">FORMULIR PENGADUAN</h2>
              <button className="px-4 py-2 bg-blue-600 text-white rounded">Isi Formulir</button>
            </div>
            {/* Card 4: SIPIPI */}
            <div className="bg-gray-50 p-8 rounded shadow-md text-center">
              <h2 className="text-xl font-semibold mb-4">SIPIPI</h2>
              <button className="px-4 py-2 bg-blue-600 text-white rounded">Isi Formulir</button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: PPID Information */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-8">PPID</h1>
          <p className="mb-6 text-gray-700">
            PPID adalah kepanjangan dari Pejabat Pengelola Informasi dan Dokumentasi,
            di mana PPID berfungsi sebagai pengelola dan penyampai dokumen yang dimiliki oleh badan publik.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded shadow-md">
              <h3 className="text-xl font-semibold mb-4">Waktu Layanan</h3>
              <p>Senin - Kamis: 07.00 - 15.30</p>
              <p>Jumat: 07.00 - 14.00</p>
              <p>Sabtu - Minggu: Libur</p>
            </div>
            <div className="bg-white p-6 rounded shadow-md">
              <h3 className="text-xl font-semibold mb-4">Alamat</h3>
              <p>Jl. Example No.123, Semarang</p>
            </div>
            <div className="bg-white p-6 rounded shadow-md">
              <h3 className="text-xl font-semibold mb-4">Kontak</h3>
              <p>Email: info@example.com</p>
              <p>Telp: (024) 1234567</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Survey Kepuasan Masyarakat */}
      <section className="py-16 bg-gray-800 text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-8">SURVEY KEPUASAN MASYARAKAT</h1>
          <p className="mb-6">
            Survey ini bertujuan untuk memperoleh gambaran secara objektif mengenai kepuasan masyarakat terhadap pelayanan publik.
          </p>
          <button className="px-4 py-2 bg-blue-600 rounded">Isi Survey</button>
        </div>
      </section>
    </div>
  );
}
