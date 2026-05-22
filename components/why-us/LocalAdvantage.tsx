'use client';

import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

export default function LocalAdvantage() {
  return (
    <section className="bg-bg-section section-padding">
      <div className="container-custom max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="text-center mb-12">
            <MapPin className="w-16 h-16 text-green mx-auto mb-6" strokeWidth={1.5} />
            <h2 className="heading-section mb-6">We Are From Here. We Understand You.</h2>
          </div>

          <div className="space-y-6 font-lato text-text leading-relaxed text-lg">
            <p>
              Most large Umrah operators are based in Hyderabad, Delhi, or Mumbai. They process your booking like a transaction. They do not know Proddatur. They do not know what it means for a family from Kadapa to save for years for this journey.
            </p>

            <p>
              Al-Infotech is based in Proddatur. Our office is in Nandini Cloth Market. You can walk in, sit down, and speak to us directly in Telugu or Urdu. You can bring your elderly parents and we will explain every detail of the itinerary to them personally.
            </p>

            <div className="card p-8 my-8 bg-green-muted border-green">
              <p className="font-playfair font-medium text-2xl text-green mb-4">
                We Serve Your Region
              </p>
              <p className="text-text-muted">
                Families from Proddatur, Mydukur, Jammalamadugu, Rajampet, Badvel, Nandyal, Kurnool, and across Telangana trust us because we understand the concerns of this region — budget pressures, elderly pilgrims with health considerations, families travelling together for the first time.
              </p>
            </div>

            <p>
              Our packages are built around these realities. We know the concerns of this region, and we address them with complete transparency.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
