'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function ServicesSplit() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    }),
  };

  return (
    <section ref={ref} className="py-24 md:py-32 px-6 bg-[var(--bg)]" id="services">
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="font-['Cinzel'] text-[var(--gold)] text-xs tracking-[0.3em] uppercase mb-4">
            WHAT WE OFFER
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Umrah Card */}
          <motion.div
            custom={0}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="relative h-[500px] rounded-lg overflow-hidden border border-[var(--border)] group cursor-pointer"
          >
            <Image
              src="https://images.unsplash.com/photo-1564769662533-4f00a87b4056?q=80&w=1200"
              alt="Kaaba"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-[rgba(13,12,10,0.7)] to-transparent" />
            
            <motion.div
              className="absolute inset-0 border border-[var(--gold-light)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              whileHover={{ boxShadow: '0 0 40px rgba(201, 168, 76, 0.1)' }}
            />

            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="inline-block px-3 py-1 bg-[var(--gold)] text-[var(--bg)] font-['Cinzel'] text-[10px] tracking-widest rounded-full mb-4">
                NUSUK CERTIFIED
              </div>
              <h3 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl text-[var(--cream)] mb-4">
                Sacred Journeys
              </h3>
              <p className="text-[var(--muted)] text-base leading-relaxed mb-6 max-w-md">
                First licensed Umrah operator in AP & Telangana. Direct flights,
                premium hotels, complete visa services.
              </p>
              <a
                href="#umrah"
                className="inline-flex items-center gap-2 text-[var(--gold)] font-['Cinzel'] text-sm tracking-wider group-hover:gap-4 transition-all"
              >
                VIEW UMRAH PACKAGES
                <span>→</span>
              </a>
            </div>
          </motion.div>

          {/* Tours Card */}
          <motion.div
            custom={1}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="relative h-[500px] rounded-lg overflow-hidden border border-[var(--border)] group cursor-pointer"
          >
            <Image
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1200"
              alt="Kashmir mountains"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-[rgba(13,12,10,0.7)] to-transparent" />
            
            <motion.div
              className="absolute inset-0 border border-[var(--gold-light)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              whileHover={{ boxShadow: '0 0 40px rgba(201, 168, 76, 0.1)' }}
            />

            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h3 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl text-[var(--cream)] mb-4">
                Discover India
              </h3>
              <p className="text-[var(--muted)] text-base leading-relaxed mb-6 max-w-md">
                Curated domestic packages to Kashmir, Goa, Kerala and beyond.
                Group and private options available.
              </p>
              <a
                href="#tours"
                className="inline-flex items-center gap-2 text-[var(--gold)] font-['Cinzel'] text-sm tracking-wider group-hover:gap-4 transition-all"
              >
                VIEW TOUR PACKAGES
                <span>→</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
