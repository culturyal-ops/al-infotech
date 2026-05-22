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
      description: 'Airport/Railway pickup, welcome drink, check-in to hotel, 1-hour Shikara ride on Dal Lake, local sightseeing',
    },
    {
      day: 2,
      title: 'Srinagar to Sonamarg',
      description: 'Full day excursion to Sonamarg (Meadow of Gold), experience heaven on earth, return to Srinagar',
    },
    {
      day: 3,
      title: 'Srinagar to Gulmarg',
      description: 'Visit Gulmarg (Meadow of Flowers), optional Gondola cable car ride, snow activities, return to Srinagar',
    },
    {
      day: 4,
      title: 'Srinagar to Pahalgam',
      description: 'Day trip to Pahalgam (Valley of Shepherds), scenic beauty, leisure time, return to Srinagar',
    },
    {
      day: 5,
      title: 'Departure',
      description: 'Check-out after breakfast, transfer to Srinagar Airport/Railway Station with wonderful memories',
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
            <p className="font-cormorant italic text-xl text-text-muted mb-6">
              Heaven on Earth. May to June departures.
            </p>
            <div className="inline-block bg-green-muted text-green px-4 py-2 rounded-sm mb-12">
              <span className="font-marcellus text-[11px] tracking-widest uppercase">
                3 STAR HOTEL & DELUXE HOUSEBOAT
              </span>
            </div>

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
            {/* Package Inclusions */}
            <div className="card p-6 mb-8 bg-green-muted">
              <p className="font-marcellus text-[11px] tracking-widest uppercase text-green mb-4">
                PACKAGE INCLUSIONS
              </p>
              <ul className="space-y-2 font-lato text-sm text-text">
                <li className="flex items-start gap-2">
                  <span className="text-green mt-1">✓</span>
                  <span>Srinagar Airport/Railway station Pickup & Drop</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green mt-1">✓</span>
                  <span>Welcome Drink on Arrival</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green mt-1">✓</span>
                  <span>3 Nights Stay in Srinagar Hotel</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green mt-1">✓</span>
                  <span>1 Night Stay in Srinagar Houseboat</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green mt-1">✓</span>
                  <span>Breakfast & Dinner (Buffet)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green mt-1">✓</span>
                  <span>1 Hour Shikara Ride</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green mt-1">✓</span>
                  <span>All Tour by AC Cab</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green mt-1">✓</span>
                  <span>Toll Charges, Parking, Driver Allowance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green mt-1">✓</span>
                  <span>24*7 Customer Support</span>
                </li>
              </ul>
              <p className="font-lato text-xs text-text-muted mt-4 italic">
                * Flight ticket not included
              </p>
            </div>

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
