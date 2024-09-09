import { Beritasidebar } from '@/components/beritasidebar'; 
import Jumbotron from '@/components/Jumbotron';
import { CarouselDown } from '@/components/CarouselDown';
import { Foto } from '@/components/Photo';
import { Video } from '@/components/Video';
// import { AccessibilityProvider } from '@/components/AccessibilityContext';
// import AccessibilityControls from '@/components/AccessibilityControls';

export default function HomePage() {
  return (
    <div className="min-h-screen mx-auto">
      {/* <AccessibilityProvider>
        <AccessibilityControls />
        <Component {...pageProps} />
      </AccessibilityProvider> */}
      <Jumbotron/>
      <Beritasidebar />
      <Foto/>
      <Video/>
      <CarouselDown/>
    </div>
  );
}

