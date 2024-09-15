// Mengimpor komponen BeritaTransparasi dari direktori yang sesuai
import { BeritaTransparasi } from "@/components/berita-transparasi/BeritaTransparasi";

// Fungsi utama untuk halaman Berita Transparasi
export default function BeritaTransparasiPage() {
  return (
    <div className="container mx-auto">
      {/* Menampilkan komponen BeritaTransparasi */}
      <BeritaTransparasi/>
    </div>
  );
}
