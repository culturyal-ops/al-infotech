'use client';

import { motion } from 'framer-motion';
import { Building2 } from 'lucide-react';

export default function HotelProximity() {
  return (
    <section className="bg-bg section-padding">
      <div className="container-custom max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="mb-12">
            <Building2 className="w-12 h-12 text-green mb-6" strokeWidth={1.5} />
            <h2 className="heading-section mb-6">Understanding Hotel Proximity to the Haram</h2>
          </div>

          <div className="space-y-6 font-lato text-text leading-relaxed text-lg">
            <p>
              The distance of your hotel from Masjid al-Haram in Makkah is one of the most important factors in your Umrah experience — especially for elderly pilgrims or those with mobility considerations.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="card p-8 bg-green-muted border-green">
                <p className="font-playfair font-medium text-2xl text-green mb-4">
                  300-500 metres
                </p>
                <p className="text-text-muted">
                  Premium proximity. Allows multiple daily prayers in the masjid without physical strain. Ideal for elderly pilgrims.
                </p>
              </div>

              <div className="card p-8">
                <p className="font-playfair font-medium text-2xl text-green mb-4">
                  900m - 1.5km
                </p>
                <p className="text-text-muted">
                  Budget range. Still walkable for most pilgrims but requires more energy. Reasonable trade-off for significant cost savings.
                </p>
              </div>
            </div>

            <div className="card p-8 bg-gold-bg border-gold">
              <p className="font-marcellus text-[11px] tracking-widest uppercase text-green mb-4">
                OUR PACKAGES
              </p>
              <div className="space-y-4">
                <p>
                  <span className="font-medium text-green">Budget Package:</span> Hotel approximately 900m from Masjid al-Haram in Makkah, near Bilal Masjid in Madina
                </p>
                <p>
                  <span className="font-medium text-green">Premium Package:</span> Hotel 300m from the Haram in Makkah and 200m in Madina — allowing elderly or less mobile pilgrims to perform prayers with minimal walking
                </p>
              </div>
            </div>

            <p className="font-cormorant italic text-2xl text-green text-center py-8">
              Discuss your group&apos;s physical needs with us honestly. We will recommend the right package for your situation.
            </p>

            <div className="text-center mt-12">
              <a href="/contact" className="btn-primary">
                DISCUSS YOUR REQUIREMENTS
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
