import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GalleryHero from '@/components/gallery/GalleryHero';
import GalleryGrid, { GalleryImage } from '@/components/gallery/GalleryGrid';
import Contact from '@/components/Contact';

// Placeholder images - replace with real images when client provides them
const galleryImages: GalleryImage[] = [
  {
    id: '1',
    src: '/images/gallery/umrah/placeholder-1.jpg',
    alt: 'Pilgrims at Masjid al-Haram',
    category: 'umrah',
    caption: 'Guided group at Masjid al-Haram'
  },
  {
    id: '2',
    src: '/images/gallery/hotels/placeholder-1.jpg',
    alt: 'Hotel room near Haram',
    category: 'hotels',
    caption: 'Comfortable accommodations near the Haram'
  },
  {
    id: '3',
    src: '/images/gallery/food/placeholder-1.jpg',
    alt: 'Traditional meals',
    category: 'food',
    caption: 'Nutritious meals throughout your journey'
  },
  {
    id: '4',
    src: '/images/gallery/groups/placeholder-1.jpg',
    alt: 'Group photo',
    category: 'groups',
    caption: 'Our pilgrims from Proddatur'
  },
  {
    id: '5',
    src: '/images/gallery/transport/placeholder-1.jpg',
    alt: 'Comfortable buses',
    category: 'transport',
    caption: 'Air-conditioned transport for all journeys'
  },
  {
    id: '6',
    src: '/images/gallery/landmarks/placeholder-1.jpg',
    alt: 'Masjid al-Nabawi',
    category: 'landmarks',
    caption: 'The Prophet\'s Mosque in Madinah'
  },
  // Add more placeholder images as needed
];

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
        
        <section className="py-12 md:py-16 bg-bg-section">
          <GalleryGrid images={galleryImages} />
        </section>

        <Contact />
      </main>
      <Footer />
    </>
  );
}
