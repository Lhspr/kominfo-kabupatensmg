import { Beritasidebar } from '@/components/beritasidebar'; 
import Jumbotron from '@/components/Jumbotron';
import { CarouselDown } from '@/components/CarouselDown';
import { Foto } from '@/components/Photo';
import { Video } from '@/components/Video';
export default function HomePage() {
  return (
    <div className="min-h-screen mx-auto">
      <Jumbotron/>
      <Beritasidebar />
      <Foto/>
      <Video/>
      <CarouselDown/>
    </div>
  );
}
