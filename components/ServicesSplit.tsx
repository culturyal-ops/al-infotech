'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ServicesSplit() {
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        delay: custom * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    }),
  };

  return (
    <section className="bg-bg-section section-padding">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-16"
        >
          <p className="eyebrow mb-4">WHAT WE OFFER</p>
          <h2 className="heading-section">Two Journeys. One Trusted Name.</h2>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Umrah Card */}
          <motion.div
            custom={0}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="card overflow-hidden group"
          >
            <div className="relative h-[300px] overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/5255233/pexels-photo-5255233.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Sacred Journeys - Umrah Packages"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-green/40 mix-blend-multiply" />
            </div>
            <div className="p-8">
              <div className="inline-block bg-green-muted text-green px-4 py-2 rounded-sm mb-4">
                <span className="font-marcellus text-[11px] tracking-widest uppercase">
                  NUSUK CERTIFIED
                </span>
              </div>
              <h3 className="heading-card mb-4">Sacred Journeys</h3>
              <p className="font-lato text-text-muted leading-relaxed mb-6">
                First licensed Umrah operator in AP & Telangana. Complete visa
                processing, direct flights, premium hotels.
              </p>
              <a
                href="#umrah"
                className="font-marcellus text-gold text-[13px] tracking-widest uppercase hover:text-gold-light transition-colors duration-300 inline-flex items-center gap-2"
              >
                View Umrah Packages
                <span>→</span>
              </a>
            </div>
          </motion.div>

          {/* Tours Card */}
          <motion.div
            custom={1}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="card overflow-hidden group"
          >
            <div className="relative h-[300px] overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Discover India - Tour Packages"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-green/40 mix-blend-multiply" />
            </div>
            <div className="p-8">
              <div className="inline-block bg-green-muted text-green px-4 py-2 rounded-sm mb-4">
                <span className="font-marcellus text-[11px] tracking-widest uppercase">
                  DOMESTIC TOURS
                </span>
              </div>
              <h3 className="heading-card mb-4">Discover India</h3>
              <p className="font-lato text-text-muted leading-relaxed mb-6">
                Curated packages to Kashmir, Goa, Kerala and beyond. Group rates
                and private options available.
              </p>
              <a
                href="#tours"
                className="font-marcellus text-gold text-[13px] tracking-widest uppercase hover:text-gold-light transition-colors duration-300 inline-flex items-center gap-2"
              >
                View Tour Packages
                <span>→</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
