'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'UMRAH', href: '#umrah' },
    { name: 'TOURS', href: '#tours' },
    { name: 'ABOUT', href: '#about' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[var(--bg)] backdrop-blur-md border-b border-[var(--border)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <motion.div
              className="text-[var(--gold)] font-['Cinzel'] text-xl tracking-wider"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              AL-INFOTECH
            </motion.div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Link
                  href={link.href}
                  className="text-[var(--cream)] font-['Cinzel'] text-[11px] tracking-widest relative group"
                >
                  {link.name}
                  <motion.span
                    className="absolute bottom-0 left-0 w-full h-[1px] bg-[var(--gold)] origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Book Now Button */}
          <motion.a
            href="https://wa.me/918919990806"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block px-6 py-2 border border-[var(--gold)] text-[var(--cream)] font-['Cinzel'] text-[11px] tracking-widest rounded-full hover:bg-[var(--gold)] hover:text-[var(--bg)] transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            BOOK NOW
          </motion.a>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <motion.span
              animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-[var(--gold)] block"
            />
            <motion.span
              animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-6 h-0.5 bg-[var(--gold)] block"
            />
            <motion.span
              animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-[var(--gold)] block"
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-[var(--bg)] z-40 flex flex-col items-center justify-center md:hidden"
          >
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: index * 0.08, duration: 0.6 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-[var(--cream)] font-['Cinzel'] text-2xl tracking-widest py-4 block"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <motion.a
              href="https://wa.me/918919990806"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-8 px-8 py-3 border border-[var(--gold)] text-[var(--cream)] font-['Cinzel'] text-sm tracking-widest rounded-full"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              BOOK NOW
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
