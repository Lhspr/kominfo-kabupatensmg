// Mengimpor komponen StrukturOrganisasi dari path yang ditentukan
import { StrukturOrganisasi } from "@/components/struktur-organisasi/StrukturOrganisasi";

// Fungsi utama untuk halaman struktur organisasi
export default function strukturpage() {
  return (
    <div className="container mx-auto">
      {/* Menampilkan komponen StrukturOrganisasi */}
      <StrukturOrganisasi/>
    </div>
  );
}
