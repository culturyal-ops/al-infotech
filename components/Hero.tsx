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

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="absolute inset-0"
      >
        <Image
          src="https://images.unsplash.com/photo-1591604466107-ec97de577aff?q=80&w=2400"
          alt="Kaaba at golden hour"
          fill
          priority
          className="object-cover"
          quality={90}
        />
        {/* Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, rgba(26,58,42,0.75) 0%, rgba(26,58,42,0.4) 50%, rgba(26,58,42,0.6) 100%)',
          }}
        />
      </motion.div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-[680px]"
          >
            {/* Eyebrow */}
            <motion.div variants={itemVariants} className="mb-6">
              <p className="eyebrow text-gold-light">
                TRUSTED SINCE 2010 · NUSUK CERTIFIED
              </p>
              <div className="w-[60px] h-[1px] bg-gold-light mt-4" />
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-playfair font-bold text-white mb-6"
              style={{
                fontSize: 'clamp(48px, 7vw, 96px)',
                lineHeight: '1.1',
                letterSpacing: '-0.02em',
              }}
            >
              Your Journey of a Lifetime,
              <br />
              Planned to Perfection.
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={itemVariants}
              className="font-lato font-light text-[17px] leading-relaxed mb-10"
              style={{ color: 'rgba(255,255,255,0.85)' }}
            >
              First licensed Umrah operator in Andhra Pradesh & Telangana.
              <br />
              Handcrafted packages for pilgrims and travelers.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#umrah"
                className="bg-white text-green font-marcellus tracking-[0.2em] uppercase text-[13px] px-8 py-[14px] rounded-sm hover:bg-bg transition-all duration-300"
              >
                EXPLORE UMRAH
              </a>
              <a
                href="#tours"
                className="bg-transparent border border-white text-white font-marcellus tracking-[0.2em] uppercase text-[13px] px-8 py-[14px] rounded-sm hover:bg-white hover:text-green transition-all duration-300"
              >
                VIEW TOURS
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.7 }}
          className="absolute bottom-12 left-12 hidden md:flex items-center gap-4"
        >
          <div className="w-[1px] h-[60px] bg-gold-light" />
          <p
            className="font-marcellus text-[10px] text-white tracking-widest"
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
          >
            SCROLL
          </p>
        </motion.div>
      </div>
    </section>
  );
}
