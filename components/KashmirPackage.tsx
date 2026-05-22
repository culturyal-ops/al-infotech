'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function KashmirPackage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const pricingOptions = [
    { pax: 'Min 12 Pax', price: '₹7,400', vehicle: 'Tempo Traveller' },
    { pax: 'Min 10 Pax', price: '₹7,800', vehicle: 'Tempo Traveller' },
    { pax: 'Min 8 Pax', price: '₹8,200', vehicle: 'Innova Crysta' },
    { pax: 'Min 6 Pax', price: '₹7,800', vehicle: 'Innova Crysta' },
    { pax: 'Min 4 Pax', price: '₹8,700', vehicle: 'Innova' },
    { pax: 'Min 2 Pax', price: '₹12,000', vehicle: 'Sedan' },
  ];

  const itinerary = [
    { day: 'Day 1', title: 'Arrival Srinagar', desc: 'Dal Lake, Shikara ride, Mughal Gardens' },
    { day: 'Day 2', title: 'Gulmarg', desc: 'Gondola ride, snow activities, meadows' },
    { day: 'Day 3', title: 'Pahalgam', desc: 'Betaab Valley, Aru Valley, Lidder River' },
    { day: 'Day 4', title: 'Sonamarg', desc: 'Thajiwas Glacier, pony rides, local markets' },
    { day: 'Day 5', title: 'Departure', desc: 'Shopping, airport drop' },
  ];

  return (
    <section ref={ref} className="relative py-24 md:py-32 overflow-hidden" id="tours">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2400"
          alt="Kashmir landscape"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(13,12,10,0.95)] via-[rgba(13,12,10,0.85)] to-[rgba(13,12,10,0.7)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="font-['Cinzel'] text-[var(--gold)] text-xs tracking-[0.3em] uppercase mb-4">
              FEATURED TOUR
            </div>
            <h2
              className="font-['Cormorant_Garamond'] text-[var(--cream)] mb-4"
              style={{
                fontSize: 'clamp(36px, 5vw, 72px)',
                fontWeight: 400,
                lineHeight: 1.2,
              }}
            >
              4 Nights / 5 Days Kashmir
            </h2>
            <p className="text-[var(--gold-light)] text-xl mb-8">
              May to June departures. Heaven on Earth.
            </p>

            {/* Itinerary Timeline */}
            <div className="space-y-4">
              {itinerary.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    delay: 0.2 + index * 0.1,
                    duration: 0.6,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="flex gap-4 items-start"
                >
                  <div className="w-12 h-12 rounded-full border border-[var(--gold)] flex items-center justify-center flex-shrink-0">
                    <span className="text-[var(--gold)] font-['Cinzel'] text-xs">
                      {item.day.split(' ')[1]}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-[var(--cream)] font-['Cinzel'] text-sm tracking-wider mb-1">
                      {item.title}
                    </h4>
                    <p className="text-[var(--muted)] text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Pricing Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {pricingOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{
                  delay: 0.4 + index * 0.08,
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{
                  scale: 1.05,
                  borderColor: 'var(--gold-light)',
                }}
                className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-6 hover:shadow-[0_0_40px_rgba(201,168,76,0.1)] transition-all duration-500"
              >
                <div className="text-[var(--muted)] text-xs tracking-wider uppercase mb-2">
                  {option.pax}
                </div>
                <div className="font-['Cormorant_Garamond'] text-[var(--gold)] text-3xl font-light mb-2">
                  {option.price}
                  <span className="text-sm text-[var(--muted)]">/person</span>
                </div>
                <div className="text-[var(--cream)] text-xs">{option.vehicle}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-12 text-center"
        >
          <motion.a
            href="https://wa.me/918919990806"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--gold)] text-[var(--bg)] font-['Cinzel'] text-sm tracking-wider rounded-full"
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(201, 168, 76, 0.4)' }}
            whileTap={{ scale: 0.98 }}
          >
            BOOK KASHMIR PACKAGE
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
