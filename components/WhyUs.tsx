'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function WhyUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const features = [
    {
      icon: '🏛',
      title: 'Licensed & Authorized',
      description: 'First Umrah operator in AP & Telangana',
    },
    {
      icon: '⭐',
      title: '5-Star Rated',
      description: 'Consistently rated by 500+ happy clients',
    },
    {
      icon: '🕌',
      title: 'Complete Umrah Services',
      description: 'Visa, flights, hotels, ziyarat',
    },
    {
      icon: '📞',
      title: '24/7 Support',
      description: 'Always reachable before, during, after travel',
    },
  ];

  return (
    <section ref={ref} className="py-24 md:py-32 px-6 bg-[var(--bg)]" id="about">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="font-['Cinzel'] text-[var(--gold)] text-xs tracking-[0.3em] uppercase mb-4">
            WHY AL-INFOTECH
          </div>
          <h2
            className="font-['Cormorant_Garamond'] text-[var(--navy)]"
            style={{
              fontSize: 'clamp(36px, 5vw, 72px)',
              fontWeight: 600,
              lineHeight: 1.2,
            }}
          >
            The Most Trusted Name in Kadapa
          </h2>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: index * 0.1,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{
                y: -10,
                borderColor: 'var(--gold)',
              }}
              className="bg-white border-2 border-[var(--border)] rounded-lg p-8 text-center hover:shadow-[0_0_40px_rgba(212,175,55,0.2)] transition-all duration-500"
            >
              <div className="text-5xl mb-6">{feature.icon}</div>
              <h3 className="font-['Cinzel'] text-[var(--navy)] text-sm tracking-wider mb-3 font-semibold">
                {feature.title}
              </h3>
              <p className="text-[var(--muted)] text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
