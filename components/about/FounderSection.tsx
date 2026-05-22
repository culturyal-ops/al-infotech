'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function FounderSection() {
  return (
    <section className="bg-bg section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            <div className="relative h-[600px] rounded-sm overflow-hidden">
              <Image
                src="/images/masjid.jpg"
                alt="Shaik Shaiksha Valli - Founder"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-green/10 mix-blend-multiply" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-gold px-8 py-6 rounded-sm">
              <p className="font-marcellus text-[11px] tracking-widest uppercase text-white mb-2">
                FOUNDER & MANAGING DIRECTOR
              </p>
              <p className="font-playfair text-2xl text-white font-medium">
                Shaik Shaiksha Valli
              </p>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <p className="eyebrow mb-6">FOUNDER & MANAGING DIRECTOR</p>
            <h2 className="font-playfair font-medium text-4xl text-green mb-8">
              Shaik Shaiksha Valli
            </h2>

            <div className="space-y-6 font-lato text-text leading-relaxed">
              <p>
                Shaik Shaiksha Valli founded Al-Infotech Tours and Travels in Proddatur with a single conviction — that every Muslim family in Andhra Pradesh deserves access to a trustworthy, fully licensed Umrah operator who speaks their language, understands their concerns, and handles every detail with complete transparency.
              </p>

              <p>
                With over fifteen years of experience in religious tourism and domestic travel, he built Al-Infotech into the first officially licensed Umrah operator in Andhra Pradesh and Telangana under the NUSUK framework — a distinction that no other agency in the Kadapa district holds.
              </p>

              <p>
                His approach is personal. Every pilgrim group that travels under Al-Infotech receives direct access to him — not just an office number. Families from Proddatur, Kadapa, Kurnool, Nellore, and Hyderabad have trusted him with their parents' Umrah, their family's first trip to Kashmir, and everything in between.
              </p>

              <p className="font-medium text-green">
                Today, Al-Infotech has facilitated the sacred journeys of over 500 pilgrims and serves clients across Andhra Pradesh, Telangana, and Karnataka — with a reputation built entirely on word of mouth and genuine service.
              </p>
            </div>

            <div className="mt-12">
              <a href="#contact" className="btn-primary">
                SPEAK WITH THE FOUNDER
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
