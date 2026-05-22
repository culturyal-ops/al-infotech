'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Clock } from 'lucide-react';

export default function LocalPresence() {
  const serviceAreas = [
    'Proddatur', 'Mydukur', 'Jammalamadugu', 'Rajampet', 
    'Badvel', 'Yerraguntla', 'Pulivendula', 'Kadapa',
    'Kurnool', 'Nellore', 'Hyderabad'
  ];

  return (
    <section className="bg-bg section-padding">
      <div className="container-custom max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="space-y-8 font-lato text-text leading-relaxed text-lg mb-12">
            <p>
              Al-Infotech Tours and Travels has been Proddatur&apos;s most trusted name in Umrah and domestic tourism since 2010. Our office at Shop No. 24, First Floor, Nandini Cloth Market, Proddatur is open six days a week for walk-in consultations.
            </p>

            <p>
              We serve pilgrims and travelers from across the Kadapa district and beyond — clients who prefer working with a personally accessible, locally rooted operator who understands their language, their concerns, and their budget realities.
            </p>
          </div>

          {/* Office Details */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="card p-8 text-center"
            >
              <MapPin className="w-10 h-10 text-green mx-auto mb-4" strokeWidth={1.5} />
              <p className="font-marcellus text-[11px] tracking-widest uppercase text-green mb-3">
                OFFICE LOCATION
              </p>
              <p className="font-lato text-text-muted">
                Shop No. 24, 1st Floor<br />
                Nandini Cloth Market<br />
                Proddatur, Kadapa 516360
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="card p-8 text-center"
            >
              <Phone className="w-10 h-10 text-green mx-auto mb-4" strokeWidth={1.5} />
              <p className="font-marcellus text-[11px] tracking-widest uppercase text-green mb-3">
                CONTACT
              </p>
              <p className="font-lato text-text-muted">
                +91 89199 90806<br />
                +91 94944 55736<br />
                +91 93983 27853
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="card p-8 text-center"
            >
              <Clock className="w-10 h-10 text-green mx-auto mb-4" strokeWidth={1.5} />
              <p className="font-marcellus text-[11px] tracking-widest uppercase text-green mb-3">
                LANGUAGES
              </p>
              <p className="font-lato text-text-muted">
                Telugu, Urdu, Hindi<br />
                Walk-ins welcome<br />
                Six days a week
              </p>
            </motion.div>
          </div>

          {/* Service Areas */}
          <div className="card p-10 bg-green-muted">
            <p className="font-marcellus text-[11px] tracking-widest uppercase text-green mb-6 text-center">
              WE SERVE CLIENTS FROM
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {serviceAreas.map((area, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white rounded-sm font-lato text-sm text-text border border-border"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>

          {/* Packages Summary */}
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="card p-8">
              <p className="font-playfair font-medium text-2xl text-green mb-4">
                Umrah Packages
              </p>
              <p className="font-lato text-text-muted mb-4">
                Starting at ₹79,000 per person inclusive of visa, flights, accommodation, meals, and ground transportation.
              </p>
              <a href="/umrah" className="text-gold hover:text-gold-light transition-colors font-marcellus text-sm tracking-wider">
                VIEW UMRAH PACKAGES →
              </a>
            </div>

            <div className="card p-8">
              <p className="font-playfair font-medium text-2xl text-green mb-4">
                Kashmir Tours
              </p>
              <p className="font-lato text-text-muted mb-4">
                Group pricing from ₹7,400 per person for groups of twelve. 4 Nights / 5 Days packages.
              </p>
              <a href="/tours" className="text-gold hover:text-gold-light transition-colors font-marcellus text-sm tracking-wider">
                VIEW TOUR PACKAGES →
              </a>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="font-lato text-text-muted mb-6">
              To book an appointment or discuss your requirements
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:+918919990806" className="btn-primary">
                CALL US NOW
              </a>
              <a href="/contact" className="btn-secondary">
                VISIT OUR OFFICE
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
