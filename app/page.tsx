import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import ServicesSplit from '@/components/ServicesSplit';
import UmrahPackages from '@/components/UmrahPackages';
import KashmirPackage from '@/components/KashmirPackage';
import WhyUs from '@/components/WhyUs';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main id="main-content">
      <Navbar />
      <Hero />
      <TrustBar />
      <ServicesSplit />
      <UmrahPackages />
      <KashmirPackage />
      <WhyUs />
      <Contact />
      <Footer />
    </main>
  );
}
