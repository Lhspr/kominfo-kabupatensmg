// Mengimpor komponen Video dari direktori yang sesuai
import { Video } from "@/components/Gallery-video/Video";

// Fungsi utama untuk halaman video
export default function Videopage() {
  return (
    <div className="container mx-auto">
      {/* Menampilkan komponen Video */}
      <Video/>
    </div>
  );
}
