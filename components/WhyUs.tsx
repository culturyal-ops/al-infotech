'use client';

import { motion } from 'framer-motion';
import { Shield, Star, MapPin, Phone } from 'lucide-react';

export default function WhyUs() {
  const features = [
    {
      icon: Shield,
      title: 'Licensed & Authorized',
      description:
        'First Umrah operator licensed in AP & Telangana under NUSUK',
    },
    {
      icon: Star,
      title: '5-Star Rated',
      description: 'Trusted by 500+ families across Andhra Pradesh & Telangana',
    },
    {
      icon: MapPin,
      title: 'End-to-End Service',
      description: 'Visa, flights, hotels, ziyarat — everything handled for you',
    },
    {
      icon: Phone,
      title: '24/7 Support',
      description: 'Reachable before, during, and after your journey',
    },
  ];

  return (
    <section id="about" className="bg-gold-bg section-padding">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-16"
        >
          <p className="eyebrow mb-4">WHY AL-INFOTECH</p>
          <h2 className="heading-section">The Most Trusted Name in Kadapa</h2>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{
                  duration: 0.9,
                  delay: index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="text-center relative"
              >
                <div className="flex justify-center mb-6">
                  <Icon className="w-8 h-8 text-green" strokeWidth={1.5} />
                </div>
                <h3 className="font-playfair font-medium text-xl text-green mb-3">
                  {feature.title}
                </h3>
                <p className="font-lato text-text-muted leading-relaxed">
                  {feature.description}
                </p>
                {index < features.length - 1 && (
                  <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-24 bg-border" />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
