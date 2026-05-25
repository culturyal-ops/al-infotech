import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GalleryHero from '@/components/gallery/GalleryHero';
import GalleryGrid, { GalleryImage } from '@/components/gallery/GalleryGrid';
import Contact from '@/components/Contact';
import galleryData from '@/data/gallery.json';

// Fallback: Generate gallery images from organized folders if JSON is empty
const defaultGalleryImages: GalleryImage[] = [
  // Food images (29 images)
  ...Array.from({ length: 29 }, (_, i) => ({
    id: `food-${i}`,
    src: `/images/gallery/food/food-${String(i).padStart(2, '0')}.jpg`,
    alt: `Delicious meal ${i + 1}`,
    category: 'food' as const,
    caption: 'Nutritious meals throughout your journey'
  })),
  
  // Hajj images (5 images)
  ...Array.from({ length: 5 }, (_, i) => ({
    id: `hajj-${i}`,
    src: `/images/gallery/hajj/hajj-${String(i + 1).padStart(2, '0')}.jpg`,
    alt: `Hajj journey ${i + 1}`,
    category: 'hajj' as const,
    caption: 'Sacred moments from Hajj'
  })),
  
  // Hajj people images (8 images)
  ...Array.from({ length: 8 }, (_, i) => ({
    id: `hajj-people-${i}`,
    src: `/images/gallery/hajj/hajj-people-${String(i + 1).padStart(2, '0')}.jpg`,
    alt: `Hajj pilgrims ${i + 1}`,
    category: 'groups' as const,
    caption: 'Our pilgrims during Hajj'
  })),
  
  // People images (2 images)
  ...Array.from({ length: 2 }, (_, i) => ({
    id: `people-${i}`,
    src: `/images/gallery/people/people-${String(i + 1).padStart(2, '0')}.jpg`,
    alt: `Pilgrims ${i + 1}`,
    category: 'groups' as const,
    caption: 'Our valued pilgrims'
  })),
  
  // People airport images (4 images)
  ...Array.from({ length: 4 }, (_, i) => ({
    id: `people-airport-${i}`,
    src: `/images/gallery/people/people-airport-${String(i + 1).padStart(2, '0')}.jpg`,
    alt: `Airport departure ${i + 1}`,
    category: 'transport' as const,
    caption: 'Smooth airport departures'
  })),
  
  // People group images (5 images)
  ...Array.from({ length: 5 }, (_, i) => ({
    id: `people-group-${i}`,
    src: `/images/gallery/people/people-group-${String(i + 1).padStart(2, '0')}.jpg`,
    alt: `Group photo ${i + 1}`,
    category: 'groups' as const,
    caption: 'Our pilgrims from Proddatur'
  })),
  
  // People hajj images (7 images)
  ...Array.from({ length: 7 }, (_, i) => ({
    id: `people-hajj-${i}`,
    src: `/images/gallery/people/people-hajj-${String(i + 1).padStart(2, '0')}.jpg`,
    alt: `Hajj pilgrims ${i + 1}`,
    category: 'umrah' as const,
    caption: 'Blessed moments in the holy cities'
  })),
];

// Use JSON data if available, otherwise use default
const galleryImages: GalleryImage[] = galleryData.images.length > 0 
  ? galleryData.images as GalleryImage[]
  : defaultGalleryImages;

export const metadata = {
  title: 'Gallery - AL Infotech Tours & Travels',
  description: 'View photos from our Umrah and Hajj journeys, accommodations, and travel experiences.',
};

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main>
        <GalleryHero />
        
        <section className="py-16 md:py-24 bg-bg-section">
          <GalleryGrid images={galleryImages} />
        </section>

        <Contact />
      </main>
      <Footer />
    </>
  );
}
