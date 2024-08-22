import React from 'react';
import { Card, Avatar, ListGroup, ListGroupItem } from 'flowbite-react';

const anggotaTim = [
  {
    nama: 'Nama Kepala Diskominfo',
    jabatan: 'Kepala Dinas',
    foto: 'https://via.placeholder.com/150', // Ganti dengan URL foto asli
  },
  {
    nama: 'Nama Sekretaris Diskominfo',
    jabatan: 'Sekretaris',
    foto: 'https://via.placeholder.com/150',
  },
  {
    nama: 'Nama Kepala Bidang 1',
    jabatan: 'Kepala Bidang 1',
    foto: 'https://via.placeholder.com/150',
  },
  {
    nama: 'Nama Kepala Bidang 2',
    jabatan: 'Kepala Bidang 2',
    foto: 'https://via.placeholder.com/150',
  },
  // Tambahkan anggota tim lainnya sesuai kebutuhan
];

const StrukturOrganisasi = () => {
  return (
    <div className="container mx-auto my-8 p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Struktur Organisasi Diskominfo Ungaran</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {anggotaTim.map((anggota, index) => (
          <Card key={index} className="text-center">
            <Avatar img={anggota.foto} rounded={true} size="lg" className="mx-auto mb-4" />
            <h5 className="text-xl font-semibold">{anggota.nama}</h5>
            <p className="text-gray-500">{anggota.jabatan}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default StrukturOrganisasi;
