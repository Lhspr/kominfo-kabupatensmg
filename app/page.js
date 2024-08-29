import { CarouselHomepage } from '@/components/CarouselHomepage'; 
import { Berita } from '@/components/Berita';
import Jumbotron from '@/components/Jumbotron';
import { CarouselDown } from '@/components/CarouselDown';
export default function HomePage() {
  return (
    <div className="container mx-auto">
      <Jumbotron/>
      <CarouselHomepage />
      <Berita />
      <CarouselDown/>
    </div>
  );
}
