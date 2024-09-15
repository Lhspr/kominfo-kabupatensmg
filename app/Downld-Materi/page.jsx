// Mengimpor komponen Materi dari direktori yang sesuai
import { Materi } from '@/components/Downld-Materi/Materi';

// Fungsi utama untuk halaman Materi
export default function MateriPage() {
  return (
    <div className="container mx-auto">
      {/* Menampilkan komponen Materi */}
      <Materi/>
    </div>
  );
}