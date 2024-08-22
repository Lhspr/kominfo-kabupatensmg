import { CarouselHomepage } from '@/components/CarouselHomepage'; 
import { Berita } from '@/components/Berita';
import Jumbotron from '@/components/Jumbotron';
export default function HomePage() {
  return (
    <div className="container mx-auto">
      <Jumbotron/>
      {/* Carousel Section */}
      <CarouselHomepage />
      {/* Card Section */}
        <Berita />
    </div>
  );
}
