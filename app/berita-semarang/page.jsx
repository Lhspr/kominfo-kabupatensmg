// Mengimpor komponen BeritaSemarang dari direktori yang sesuai
import { BeritaSemarang } from '@/components/berita-semarang/BeritaSemarang';

// Fungsi utama untuk halaman Berita Semarang
export default function BeritaSemarangPage() {
  return (
    <div className="container mx-auto">
      {/* Menampilkan komponen BeritaSemarang */}
      <BeritaSemarang />
    </div>
  );
}
