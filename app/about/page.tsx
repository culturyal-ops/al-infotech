import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AboutHero from '@/components/about/AboutHero';
import FounderSection from '@/components/about/FounderSection';
import TeamSection from '@/components/about/TeamSection';
import LocationSection from '@/components/LocationSection';

export const metadata: Metadata = {
  title: 'About Al-Infotech Tours and Travels | Shaik Shaiksha Valli | Proddatur',
  description: 'Meet Shaik Shaiksha Valli, founder of Al-Infotech Tours and Travels — the first licensed Umrah operator in Andhra Pradesh and Telangana. Trusted since 2010, Proddatur.',
  keywords: ['Shaik Shaiksha Valli', 'Al-Infotech founder', 'Proddatur travel agency', 'licensed Umrah operator'],
};

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <AboutHero />
      <FounderSection />
      <TeamSection />
      <LocationSection />
      <Footer />
    </main>
  );
}
