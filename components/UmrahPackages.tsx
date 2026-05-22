'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function UmrahPackages() {
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        delay: custom * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    }),
  };

  const budgetInclusions = [
    'Visa & Insurance',
    'Flights Included',
    'Hotel Accommodation',
    '3x Hyderabadi Buffet Daily',
    'AC Transportation',
    'Airport to Airport Transfer',
    'Luggage + Shoulder Bag Free',
  ];

  const premiumInclusions = [
    'Airfare + Visa + Food + Transport',
    'Hotel Accommodation',
    'Ziyarat of Makkah & Madina',
    'Ziyarat of Badr',
    'Umrah from Masjid Zohrana',
    'Handbag + Passport Bag + Chappal Bag',
    'Laundry + Zamzam',
    'Tour Guide',
  ];

  return (
    <section id="umrah" className="bg-bg section-padding">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-12"
        >
          <p className="eyebrow mb-4">UMRAH PACKAGES</p>
          <h2 className="heading-section mb-6">Begin Your Sacred Journey</h2>
          <div className="gold-rule" />
        </motion.div>

        {/* Package Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {/* Budget Package */}
          <motion.div
            custom={0}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="card overflow-hidden"
          >
            <div className="h-2 bg-green-muted" />
            <div className="p-8">
              <p className="font-marcellus text-[11px] tracking-widest uppercase text-text-muted mb-4">
                BUDGET PACKAGE
              </p>
              <div className="price mb-6">₹79,000/person</div>
              <div className="flex flex-wrap gap-4 text-sm font-lato text-text-muted mb-4">
                <span>Duration: 14 Days</span>
                <span>·</span>
                <span>Departure: June/July</span>
              </div>
              <p className="font-lato text-text-muted mb-6">
                Hotel: Makkah 900m · Madina near Bilal Masjid
              </p>
              <div className="border-t border-border pt-6">
                <p className="label-small text-green mb-4">INCLUSIONS</p>
                <ul className="space-y-3">
                  {budgetInclusions.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green flex-shrink-0 mt-0.5" />
                      <span className="font-lato text-text">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Premium Package */}
          <motion.div
            custom={1}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="card overflow-hidden border-border-gold relative"
          >
            <div className="h-2 bg-gold" />
            <div className="absolute top-6 right-6 bg-gold text-white px-4 py-2 rounded-sm">
              <span className="font-marcellus text-[10px] tracking-widest uppercase">
                DIRECT FLIGHT
              </span>
            </div>
            <div className="p-8">
              <p className="font-marcellus text-[11px] tracking-widest uppercase text-text-muted mb-4">
                PREMIUM PACKAGE
              </p>
              <div className="price mb-6">₹95,000/person</div>
              <div className="flex flex-wrap gap-4 text-sm font-lato text-text-muted mb-4">
                <span>Duration: 14 Days</span>
                <span>·</span>
                <span>Departure: June/July</span>
              </div>
              <p className="font-lato text-text-muted mb-6">
                Hotel: Makkah 300m · Madina 200m
              </p>
              <div className="border-t border-border pt-6">
                <p className="label-small text-green mb-4">INCLUSIONS</p>
                <ul className="space-y-3">
                  {premiumInclusions.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green flex-shrink-0 mt-0.5" />
                      <span className="font-lato text-text">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Custom Packages Note */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center"
        >
          <p className="font-cormorant italic text-xl text-text-muted mb-6">
            Custom group packages available — contact us for special rates
          </p>
          <a
            href="https://wa.me/918919990806?text=Hi, I'm interested in Umrah packages"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            CHAT ON WHATSAPP
          </a>
        </motion.div>
      </div>
    </section>
  );
}
