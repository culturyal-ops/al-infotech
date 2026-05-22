'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  const navLinks = [
    { label: 'Umrah Packages', href: '/#umrah' },
    { label: 'Tour Packages', href: '/#tours' },
    { label: 'About Us', href: '/about' },
    { label: 'Why Choose Us', href: '/why-us' },
    { label: 'Umrah Guide', href: '/umrah-guide' },
    { label: 'Proddatur Office', href: '/proddatur-travel-agency' },
    { label: 'Contact', href: '/#contact' },
  ];

  return (
    <footer className="bg-[#0F1F17] border-t-2 border-gold">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Left: Logo & Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h3 className="font-playfair text-2xl text-white mb-2">
              AL-INFOTECH
            </h3>
            <p className="font-lato text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Tours and Travels
            </p>
            <p className="font-lato text-sm mt-4" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Trusted by 500+ families since 2010
            </p>
          </motion.div>

          {/* Center: Nav Links */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex flex-col gap-3"
          >
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="font-marcellus text-sm hover:text-gold-light transition-colors duration-300"
                style={{ color: 'rgba(255,255,255,0.6)' }}
              >
                {link.label}
              </a>
            ))}
          </motion.div>

          {/* Right: Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <p className="font-lato text-sm mb-2" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Shop No. 24, 1st Floor,
              <br />
              Nandini Cloth Market, Proddatur
            </p>
            <a
              href="tel:+918919990806"
              className="font-lato text-sm hover:text-gold-light transition-colors duration-300 block"
              style={{ color: 'rgba(255,255,255,0.6)' }}
            >
              +91 89199 90806
            </a>
            <a
              href="mailto:alinfotechtours@gmail.com"
              className="font-lato text-sm hover:text-gold-light transition-colors duration-300 block"
              style={{ color: 'rgba(255,255,255,0.6)' }}
            >
              alinfotechtours@gmail.com
            </a>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t pt-8" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
          <p className="font-lato text-xs text-center" style={{ color: 'rgba(255,255,255,0.4)' }}>
            © 2025 Al-Infotech Tours and Travels. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
