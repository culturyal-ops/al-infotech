'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'UMRAH', href: '/#umrah' },
    { label: 'TOURS', href: '/#tours' },
    { label: 'GALLERY', href: '/gallery' },
    { label: 'ABOUT', href: '/about' },
    { label: 'WHY US', href: '/why-us' },
    { label: 'UMRAH GUIDE', href: '/umrah-guide' },
    { label: 'CONTACT', href: '/#contact' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          scrolled
            ? 'bg-bg/98 backdrop-blur-xl border-b border-border shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between py-6">
            {/* Logo - MASSIVE SIZE */}
            <a href="/" className="flex items-center">
              <Image 
                src="/images/logo.png" 
                alt="AL-INFOTECH Tours & Travels" 
                width={240}
                height={100}
                className="h-24 lg:h-28 w-auto object-contain"
                priority
              />
            </a>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-12">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className={`nav-link relative group transition-colors duration-300 font-medium ${
                    scrolled ? 'text-text hover:text-green' : 'text-white hover:text-gold'
                  }`}
                  style={{
                    textShadow: scrolled ? 'none' : '0 1px 8px rgba(0,0,0,0.5)'
                  }}
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold group-hover:w-full transition-all duration-300 origin-left" />
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <a href="#contact" className="btn-primary">
                BOOK NOW
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-2 z-50 transition-colors duration-300 ${
                mobileMenuOpen ? 'text-green' : scrolled ? 'text-green' : 'text-white'
              }`}
              aria-label="Toggle menu"
              style={{
                textShadow: !scrolled && !mobileMenuOpen ? '0 1px 8px rgba(0,0,0,0.5)' : 'none'
              }}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-bg z-40 md:hidden overflow-y-auto"
          >
            <div className="min-h-full flex flex-col items-center justify-center py-24 px-6">
              {navLinks.map((link, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.08,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="w-full text-center"
                >
                  <a
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-playfair text-3xl sm:text-4xl text-green hover:text-gold transition-colors duration-300 block py-4"
                  >
                    {link.label}
                  </a>
                  {index < navLinks.length - 1 && (
                    <div className="w-20 h-[1px] bg-border-gold mx-auto my-2" />
                  )}
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: navLinks.length * 0.08,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="mt-8 mb-4"
              >
                <a
                  href="/#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn-primary"
                >
                  BOOK NOW
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
