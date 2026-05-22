'use client';

import { motion } from 'framer-motion';
import { Plane, Check } from 'lucide-react';

export default function FullService() {
  const services = [
    'Visa documentation and submission through official NUSUK channels',
    'Confirmed flight bookings — direct where available',
    'Hotel accommodation with written documentation before payment',
    'Airport transfers in Hyderabad, Jeddah, and Madina',
    'Ziyarat — sacred visits to historic sites with knowledgeable guides',
    'Meals, luggage bags, and support contact throughout the journey',
  ];

  return (
    <section className="bg-bg section-padding">
      <div className="container-custom max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="text-center mb-12">
            <Plane className="w-16 h-16 text-green mx-auto mb-6" strokeWidth={1.5} />
            <h2 className="heading-section mb-6">
              What Full Service Actually Means
            </h2>
            <p className="font-cormorant italic text-2xl text-text-muted">
              From Your Doorstep to the Haram and Back
            </p>
          </div>

          <div className="space-y-6 font-lato text-text leading-relaxed text-lg mb-12">
            <p>
              When you book with Al-Infotech, you are not buying a flight and a hotel. You are handing over the entire responsibility of your journey to a team that has made this trip hundreds of times.
            </p>
          </div>

          <div className="card p-10">
            <p className="font-marcellus text-[11px] tracking-widest uppercase text-green mb-8">
              WE HANDLE EVERYTHING
            </p>
            <ul className="space-y-5">
              {services.map((service, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.1,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="flex items-start gap-4"
                >
                  <Check className="w-6 h-6 text-green flex-shrink-0 mt-0.5" />
                  <span className="font-lato text-text text-lg">{service}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          <p className="font-cormorant italic text-2xl text-green text-center mt-12">
            You arrive. You pray. You return safely. Everything in between is our responsibility.
          </p>

          <div className="text-center mt-12">
            <a href="/contact" className="btn-primary">
              DISCUSS YOUR JOURNEY
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
