import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhyUsHero from '@/components/why-us/WhyUsHero';
import LicenseDifference from '@/components/why-us/LicenseDifference';
import LocalAdvantage from '@/components/why-us/LocalAdvantage';
import FullService from '@/components/why-us/FullService';

export const metadata: Metadata = {
  title: 'Why Choose Al-Infotech | Licensed Umrah Operator Proddatur Kadapa AP',
  description: 'Al-Infotech is the first NUSUK-licensed Umrah operator in Andhra Pradesh. Learn why 500+ families from Kadapa, Kurnool and Hyderabad trust us for Umrah and tours.',
  keywords: ['licensed Umrah operator', 'NUSUK certified', 'Kadapa Umrah agent', 'trusted travel agency Proddatur'],
};

export default function WhyUsPage() {
  return (
    <main>
      <Navbar />
      <WhyUsHero />
      <LicenseDifference />
      <LocalAdvantage />
      <FullService />
      <Footer />
    </main>
  );
}
