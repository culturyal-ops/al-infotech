import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GuideHero from '@/components/umrah-guide/GuideHero';
import VisaProcess from '@/components/umrah-guide/VisaProcess';
import PackingList from '@/components/umrah-guide/PackingList';
import HotelProximity from '@/components/umrah-guide/HotelProximity';

export const metadata: Metadata = {
  title: 'Complete Umrah Guide for First-Time Pilgrims | Al-Infotech Tours Proddatur',
  description: 'First time performing Umrah? Our complete guide covers visa requirements, what to pack, Makkah hotels, Madina ziyarat, and how to choose a licensed operator in India.',
  keywords: ['Umrah guide', 'first time Umrah', 'Umrah visa process', 'what to pack for Umrah', 'Makkah hotels', 'NUSUK visa'],
};

export default function UmrahGuidePage() {
  return (
    <main>
      <Navbar />
      <GuideHero />
      <VisaProcess />
      <PackingList />
      <HotelProximity />
      <Footer />
    </main>
  );
}
