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
          src="https://images.pexels.com/photos/5255233/pexels-photo-5255233.jpeg?auto=compress&cs=tinysrgb&w=2400"
          alt="Masjid al-Haram Mecca"
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
              'linear-gradient(to right, rgba(13,12,10,0.85) 0%, rgba(13,12,10,0.6) 50%, rgba(13,12,10,0.75) 100%)',
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
              className="font-playfair font-bold text-white mb-8 leading-tight"
              style={{
                fontSize: 'clamp(42px, 6vw, 84px)',
                lineHeight: '1.15',
                letterSpacing: '-0.02em',
              }}
            >
              Your Journey of a Lifetime,
              <br />
              <span className="text-gold-light">Planned to Perfection.</span>
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
              <a href="#umrah" className="btn-primary">
                EXPLORE UMRAH
              </a>
              <a href="#tours" className="btn-secondary">
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
