'use client';

import { motion } from 'framer-motion';

export default function KashmirPackage() {
  const pricingOptions = [
    { pax: '12 PAX', price: '₹7,400', vehicle: 'Tempo Traveller' },
    { pax: '10 PAX', price: '₹7,800', vehicle: 'Tempo Traveller' },
    { pax: '8 PAX', price: '₹8,200', vehicle: 'Tempo Traveller' },
    { pax: '6 PAX', price: '₹7,800', vehicle: 'Xylo / Innova' },
    { pax: '4 PAX', price: '₹8,700', vehicle: 'Xylo / Innova' },
    { pax: '2 PAX', price: '₹12,000', vehicle: 'Sedan' },
  ];

  const itinerary = [
    {
      day: 1,
      title: 'Arrival in Srinagar',
      description: 'Transfer to houseboat, Shikara ride, Dal Lake evening',
    },
    {
      day: 2,
      title: 'Srinagar Local Sightseeing',
      description: 'Mughal Gardens, Shankaracharya Temple, local markets',
    },
    {
      day: 3,
      title: 'Gulmarg Excursion',
      description: 'Gondola ride, snow activities, meadow exploration',
    },
    {
      day: 4,
      title: 'Pahalgam Day Trip',
      description: 'Betaab Valley, Aru Valley, Lidder River views',
    },
    {
      day: 5,
      title: 'Departure',
      description: 'Transfer to Srinagar airport with memories',
    },
  ];

  return (
    <section id="tours" className="bg-bg-section section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <p className="eyebrow mb-4">FEATURED TOUR</p>
            <h2 className="heading-section mb-4">4 Nights / 5 Days Kashmir</h2>
            <p className="font-cormorant italic text-xl text-text-muted mb-12">
              Heaven on Earth. May to June departures.
            </p>

            {/* Itinerary Timeline */}
            <div className="space-y-8">
              {itinerary.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.1,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="flex gap-6"
                >
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-green flex items-center justify-center text-white font-playfair font-semibold">
                      {item.day}
                    </div>
                    {index < itinerary.length - 1 && (
                      <div className="w-[1px] h-12 bg-border-gold mx-auto mt-2" />
                    )}
                  </div>
                  <div className="flex-1 pb-4">
                    <h4 className="font-playfair font-medium text-xl text-green mb-2">
                      {item.title}
                    </h4>
                    <p className="font-lato text-text-muted">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Pricing Grid */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="grid grid-cols-2 gap-4 mb-8">
              {pricingOptions.map((option, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{
                    duration: 0.7,
                    delay: 0.3 + index * 0.05,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="card p-6 text-center hover:border-border-gold transition-all duration-300"
                >
                  <p className="font-marcellus text-[11px] tracking-widest uppercase text-text-muted mb-3">
                    MIN {option.pax}
                  </p>
                  <div className="font-playfair font-bold text-3xl text-gold mb-2">
                    {option.price}
                  </div>
                  <p className="font-lato text-sm text-text-muted">per person</p>
                  <div className="mt-4 pt-4 border-t border-border">
                    <p className="font-lato text-xs text-text-muted">{option.vehicle}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-center"
            >
              <a href="#contact" className="btn-primary w-full block text-center">
                BOOK KASHMIR PACKAGE
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
