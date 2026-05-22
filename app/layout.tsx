import type { Metadata } from 'next';
import { Cormorant_Garamond, Cinzel, DM_Sans } from 'next/font/google';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';
import CustomCursor from '@/components/CustomCursor';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cinzel',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'AL-INFOTECH Tours and Travels | Umrah & Kashmir Packages',
  description:
    'First licensed Umrah operator in Andhra Pradesh & Telangana. Premium Umrah packages and domestic tour packages to Kashmir, Goa, Kerala. Based in Proddatur, Kadapa.',
  keywords:
    'Umrah packages, Kashmir tour, Proddatur travel agency, Kadapa tours, Andhra Pradesh Umrah, licensed Umrah operator, domestic tour packages',
  openGraph: {
    title: 'AL-INFOTECH Tours and Travels',
    description: 'Your Journey of a Lifetime, Planned to Perfection',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${cinzel.variable} ${dmSans.variable}`}>
      <body>
        <SmoothScroll>
          <CustomCursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
