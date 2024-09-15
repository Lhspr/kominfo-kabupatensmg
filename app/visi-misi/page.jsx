// Mengimpor komponen VisiMisi dari direktori komponen
import { VisiMisi } from "@/components/visi-misi/VisiMisi";

// Fungsi utama untuk halaman struktur
export default function strukturpage() {
  return (
    <div className="container mx-auto">
      {/* Menampilkan komponen VisiMisi */}
      <VisiMisi/>
    </div>
  );
}
