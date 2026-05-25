'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 50);
      // Calculate scroll progress for progressive blur (0 to 1)
      setScrollProgress(Math.min(scrollY / 200, 1));
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

  // Calculate dynamic styles based on scroll - Premium glass effect
  const navbarBg = scrolled 
    ? `rgba(0, 0, 0, ${0.35 + scrollProgress * 0.15})` // More transparent, darker
    : 'rgba(0, 0, 0, 0.25)';
  
  const navbarBlur = `blur(${scrolled ? 20 + scrollProgress * 12 : 12}px)`; // More blur
  const navbarShadow = scrolled 
    ? `0 8px ${16 + scrollProgress * 16}px rgba(0, 0, 0, ${0.15 + scrollProgress * 0.1}), inset 0 1px 0 rgba(255, 255, 255, ${0.08 + scrollProgress * 0.04})`
    : '0 4px 16px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.05)';
  
  const borderColor = scrolled
    ? `rgba(255, 255, 255, ${0.08 + scrollProgress * 0.04})`
    : 'rgba(255, 255, 255, 0.08)';

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-400"
        style={{
          backgroundColor: navbarBg,
          backdropFilter: navbarBlur,
          WebkitBackdropFilter: navbarBlur,
          boxShadow: navbarShadow,
          borderBottom: `1px solid ${borderColor}`,
        }}
      >
        {/* Subtle gradient overlay for premium glass effect */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: scrolled
              ? 'linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 100%)'
              : 'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0) 100%)',
            opacity: 0.4 + scrollProgress * 0.3,
          }}
        />
        
        <div className="container-custom relative z-10">
          <div className="flex items-center justify-between py-6">
            {/* Logo */}
            <a 
              href="/" 
              className="flex items-center -ml-2 focus-visible:outline-gold focus-visible:outline-offset-4 rounded-sm"
            >
              <Image 
                src="/images/logo.png" 
                alt="AL-INFOTECH Tours & Travels" 
                width={200}
                height={85}
                className="h-16 lg:h-20 w-auto object-contain transition-all duration-400"
                style={{
                  height: scrolled ? '60px' : '80px',
                }}
                priority
              />
            </a>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-7">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className={`nav-link relative group transition-colors duration-300 font-medium text-sm link-underline ${
                    scrolled ? 'text-white/90 hover:text-gold' : 'text-white/95 hover:text-gold'
                  }`}
                  style={{
                    textShadow: scrolled ? '0 1px 4px rgba(0,0,0,0.3)' : '0 1px 8px rgba(0,0,0,0.5)'
                  }}
                >
                  {link.label}
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
              className={`md:hidden p-2 z-50 transition-colors duration-300 rounded-sm focus-visible:outline-gold focus-visible:outline-offset-4 ${
                mobileMenuOpen ? 'text-green' : scrolled ? 'text-green' : 'text-white'
              }`}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
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
                    className="font-playfair text-3xl sm:text-4xl text-green hover:text-gold transition-colors duration-300 block py-4 focus-visible:outline-gold focus-visible:outline-offset-4 rounded-sm"
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
