'use client';

import { motion } from 'framer-motion';

export default function GuideHero() {
  return (
    <section className="bg-green section-padding" style={{ paddingTop: 'clamp(120px, 15vw, 180px)' }}>
      <div className="container-custom max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center"
        >
          <p className="eyebrow text-gold-light mb-6">UMRAH GUIDE</p>
          <h1
            className="font-playfair font-medium text-white mb-8"
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              lineHeight: '1.15',
              letterSpacing: '-0.01em',
            }}
          >
            Everything You Need to Know Before Your First Umrah
          </h1>
          <div className="gold-rule mx-auto" style={{ backgroundColor: 'rgba(212,175,55,0.4)' }} />
          
          <p
            className="font-lato text-lg leading-relaxed mt-8 max-w-3xl mx-auto"
            style={{ color: 'rgba(255,255,255,0.85)' }}
          >
            Umrah is one of the most profound journeys a Muslim can undertake. Unlike Hajj, it can be performed at any time of the year — but performing it with peace of mind requires careful preparation and a trustworthy operator.
          </p>
          
          <p
            className="font-lato text-lg leading-relaxed mt-6 max-w-3xl mx-auto"
            style={{ color: 'rgba(255,255,255,0.85)' }}
          >
            This guide is written for first-time pilgrims from Andhra Pradesh and Telangana who want to understand the process before making any booking decisions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
