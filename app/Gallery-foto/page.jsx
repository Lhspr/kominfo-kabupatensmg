import { Foto } from '@/components/Gallery-foto/Foto';

// Fungsi utama untuk halaman foto
export default function fotopage() {
  return (
    <div className="container mx-auto">
      {/* Menampilkan komponen Foto */}
      <Foto />
    </div>
  );
}
