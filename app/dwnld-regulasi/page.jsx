// Mengimpor komponen Regulasi dari path yang ditentukan
import { Regulasi } from '@/components/dwnld-regulasi/Regulasi';

// Fungsi utama untuk halaman Regulasi
export default function RegulasiPage() {
  return (
    <div className="container mx-auto">
      {/* Menampilkan komponen Regulasi */}
      <Regulasi/>
    </div>
  );
}