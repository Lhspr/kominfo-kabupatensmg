import { CarouselHomepage } from '@/components/CarouselHomepage'; 
import { Footer1 } from '@/components/Footer1';
import { Berita } from '@/components/Berita';
export default function HomePage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Selamat Datang</h1>
      {/* Carousel Section */}
      <CarouselHomepage />
      {/* Card Section */}
        <Berita />
      {/* Footer Section */}
      <Footer1 />
        
    </div>
  );
}
