'use client';

import { motion } from 'framer-motion';

export default function WhyUsHero() {
  return (
    <section className="bg-green section-padding" style={{ paddingTop: 'clamp(120px, 15vw, 180px)' }}>
      <div className="container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <p className="eyebrow text-gold-light mb-6">WHY IT MATTERS</p>
          <h1
            className="font-playfair font-medium text-white mb-8"
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              lineHeight: '1.15',
              letterSpacing: '-0.01em',
            }}
          >
            Not Every Agent Is Authorized. We Are.
          </h1>
          <div className="gold-rule" style={{ backgroundColor: 'rgba(212,175,55,0.4)' }} />
        </motion.div>
      </div>
    </section>
  );
}
