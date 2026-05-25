import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex items-center justify-center bg-bg px-6 py-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="font-playfair text-[120px] md:text-[180px] font-bold text-gold leading-none">
              404
            </h1>
          </motion.div>

          <h2 className="heading-section mb-4">Page Not Found</h2>
          
          <p className="text-text-muted mb-8 font-lato text-lg">
            The page you&apos;re looking for doesn&apos;t exist or has been moved. 
            Let&apos;s get you back on track.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="btn-primary">
              Go Home
            </Link>
            <Link href="/#contact" className="btn-ghost">
              Contact Us
            </Link>
          </div>

          <div className="mt-12 pt-12 border-t border-border">
            <p className="eyebrow mb-4">POPULAR PAGES</p>
            <div className="flex flex-wrap gap-4 justify-center text-sm">
              <Link href="/#umrah" className="link-underline text-text-muted hover:text-gold">
                Umrah Packages
              </Link>
              <span className="text-border">·</span>
              <Link href="/#tours" className="link-underline text-text-muted hover:text-gold">
                Kashmir Tours
              </Link>
              <span className="text-border">·</span>
              <Link href="/gallery" className="link-underline text-text-muted hover:text-gold">
                Gallery
              </Link>
              <span className="text-border">·</span>
              <Link href="/about" className="link-underline text-text-muted hover:text-gold">
                About Us
              </Link>
            </div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </>
  );
}
