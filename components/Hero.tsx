'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3,
      },
    },
  };

  const lineVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <Image
          src="https://images.unsplash.com/photo-1564769662533-4f00a87b4056?q=80&w=2400"
          alt="Kaaba at golden hour"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(13,12,10,0.5)] to-[rgba(13,12,10,0.85)]" />
      </motion.div>

      {/* Gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--gold)] opacity-5 blur-[120px] rounded-full" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-[900px] text-center"
        >
          {/* Eyebrow */}
          <motion.div
            variants={lineVariants}
            className="font-['Cinzel'] text-[var(--gold)] text-xs tracking-[0.3em] uppercase mb-6"
          >
            TRUSTED TRAVEL PARTNER SINCE 2010
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={lineVariants}
            className="font-['Cormorant_Garamond'] font-light text-[var(--cream)] mb-6"
            style={{
              fontSize: 'clamp(56px, 8vw, 120px)',
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
            }}
          >
            Your Journey of a Lifetime,
          </motion.h1>
          <motion.h1
            variants={lineVariants}
            className="font-['Cormorant_Garamond'] font-light text-[var(--cream)] mb-8"
            style={{
              fontSize: 'clamp(56px, 8vw, 120px)',
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
            }}
          >
            Planned to Perfection
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={lineVariants}
            className="text-[var(--muted)] text-lg leading-relaxed mb-12 max-w-[700px] mx-auto"
          >
            Licensed Umrah operator. Handcrafted tour packages. Serving pilgrims
            and travelers across Andhra Pradesh & Telangana.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={lineVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="#umrah"
              className="px-8 py-4 bg-[var(--gold)] text-[var(--bg)] font-['Cinzel'] text-sm tracking-widest rounded-full"
              whileHover={{
                scale: 1.02,
                boxShadow: '0 0 40px rgba(201, 168, 76, 0.4)',
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3 }}
            >
              EXPLORE UMRAH PACKAGES
            </motion.a>
            <motion.a
              href="#tours"
              className="px-8 py-4 border border-[var(--cream)] text-[var(--cream)] font-['Cinzel'] text-sm tracking-widest rounded-full"
              whileHover={{
                scale: 1.02,
                borderColor: 'var(--gold)',
                color: 'var(--gold)',
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3 }}
            >
              VIEW TOUR PACKAGES
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <div className="w-px h-16 bg-[var(--gold)] mb-4" />
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            className="text-[var(--gold)] text-2xl"
          >
            ↓
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
