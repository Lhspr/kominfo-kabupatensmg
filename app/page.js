import { Beritasidebar } from '@/components/beritasidebar'; 
import Jumbotron from '@/components/Jumbotron';
import { CarouselDown } from '@/components/CarouselDown';
export default function HomePage() {
  return (
    <div className="min-h-screen mx-auto">
      <Jumbotron/>
      <Beritasidebar />
      <CarouselDown/>
    </div>
  );
}
