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
      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="absolute inset-0"
      >
        <Image
          src="/images/masjid.jpg"
          alt="Masjid al-Haram Mecca"
          fill
          priority
          className="object-cover"
          quality={90}
        />
        {/* Rich Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to right, rgba(10,10,10,0.82) 0%, rgba(10,10,10,0.35) 65%, rgba(10,10,10,0.65) 100%)',
          }}
        />
      </motion.div>

      {/* Content Grid */}
      <div className="relative h-full">
        <div className="container-custom h-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-full items-center">
            {/* Left Column - Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="lg:col-span-7 max-w-[820px]"
              style={{ paddingTop: '16vh' }}
            >
              {/* Eyebrow */}
              <motion.div variants={itemVariants} className="mb-8">
                <p className="eyebrow text-gold-light tracking-[0.3em]">
                  TRUSTED SINCE 2018 · NUSUK CERTIFIED
                </p>
                <div className="w-[80px] h-[1px] bg-gold-light mt-5" />
              </motion.div>

              {/* Headline */}
              <motion.h1
                variants={itemVariants}
                className="heading-hero text-white mb-8"
              >
                Your Journey <br />
                of a Lifetime, <br />
                <span className="text-gold-light">Planned to</span> <br />
                <span className="text-gold-light">Perfection.</span>
              </motion.h1>

              {/* Subtext */}
              <motion.p
                variants={itemVariants}
                className="font-lato font-light text-[18px] leading-relaxed mb-12 max-w-[580px]"
                style={{ color: 'rgba(255,255,255,0.88)' }}
              >
                First licensed Umrah operator in Andhra Pradesh & Telangana.
                Handcrafted packages for pilgrims and travelers.
              </motion.p>

              {/* CTAs */}
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-5"
              >
                <a href="#umrah" className="btn-primary">
                  EXPLORE UMRAH
                </a>
                <a href="#tours" className="btn-secondary">
                  VIEW TOURS
                </a>
              </motion.div>
            </motion.div>

            {/* Right Column - Intentional Space */}
            <div className="hidden lg:block lg:col-span-5" />
          </div>
        </div>

        {/* Scroll Indicator - Aligned to Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.7 }}
          className="absolute bottom-16 left-0 hidden md:flex items-center gap-4"
          style={{ paddingLeft: 'clamp(20px, 5vw, 80px)' }}
        >
          <div className="w-[1px] h-[70px] bg-gold-light/60" />
          <p
            className="font-marcellus text-[10px] text-white/70 tracking-[0.3em]"
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
          >
            SCROLL
          </p>
        </motion.div>
      </div>
    </section>
  );
}
