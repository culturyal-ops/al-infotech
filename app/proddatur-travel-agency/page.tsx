import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProddaturHero from '@/components/proddatur/ProddaturHero';
import LocalPresence from '@/components/proddatur/LocalPresence';

export const metadata: Metadata = {
  title: 'Travel Agency in Proddatur | Umrah & Tour Packages | Al-Infotech',
  description: 'Al-Infotech Tours and Travels is Proddatur\'s most trusted travel agency. Licensed Umrah packages from ₹79,000. Kashmir tours. Office at Nandini Cloth Market, Proddatur.',
  keywords: ['Proddatur travel agency', 'Umrah agent Proddatur', 'Kadapa travel agency', 'Nandini Cloth Market', 'Proddatur tours'],
};

export default function ProddaturPage() {
  return (
    <main>
      <Navbar />
      <ProddaturHero />
      <LocalPresence />
      <Footer />
    </main>
  );
}
