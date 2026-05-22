'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutHero() {
  return (
    <section className="relative h-[70vh] w-full overflow-hidden">
      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="absolute inset-0"
      >
        <Image
          src="/images/masjid.jpg"
          alt="About Al-Infotech Tours"
          fill
          priority
          className="object-cover"
          quality={90}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to right, rgba(26,58,42,0.85) 0%, rgba(26,58,42,0.45) 65%, rgba(26,58,42,0.75) 100%)',
          }}
        />
      </motion.div>

      {/* Content */}
      <div className="relative h-full">
        <div className="container-custom h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="max-w-[720px]"
          >
            <p className="eyebrow text-gold-light tracking-[0.3em] mb-8">
              OUR STORY · TRUSTED SINCE 2010
            </p>
            <div className="w-[80px] h-[1px] bg-gold-light mb-8" />
            
            <h1
              className="font-playfair font-bold text-white mb-6"
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                lineHeight: '1.1',
                letterSpacing: '-0.02em',
              }}
            >
              The Man Behind Every Sacred Journey
            </h1>
            
            <p
              className="font-lato font-light text-[18px] leading-relaxed max-w-[600px]"
              style={{ color: 'rgba(255,255,255,0.88)' }}
            >
              For over fifteen years, one name has guided hundreds of families from Andhra Pradesh and Telangana to the holy cities of Makkah and Madina — with care, integrity, and complete accountability.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
