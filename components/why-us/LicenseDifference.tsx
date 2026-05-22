'use client';

import { motion } from 'framer-motion';
import { Shield, CheckCircle, AlertCircle } from 'lucide-react';

export default function LicenseDifference() {
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
            <Shield className="w-16 h-16 text-green mx-auto mb-6" strokeWidth={1.5} />
            <h2 className="heading-section mb-6">The License Difference</h2>
          </div>

          <div className="space-y-6 font-lato text-text leading-relaxed text-lg">
            <p>
              The Umrah travel market in India is filled with agents — most of them unlicensed, unregistered, and completely unaccountable if something goes wrong in Makkah or Madina.
            </p>

            <p>
              Al-Infotech Tours and Travels operates under full authorization from the NUSUK platform — the official Saudi government system for Umrah service providers. We were among the first operators in Andhra Pradesh and Telangana to receive this certification, and we maintain it through annual compliance.
            </p>

            <div className="card p-8 my-8">
              <p className="font-marcellus text-[11px] tracking-widest uppercase text-green mb-6">
                WHAT THIS MEANS FOR YOU
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green flex-shrink-0 mt-1" />
                  <span>Your visa gets processed through official channels</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green flex-shrink-0 mt-1" />
                  <span>Your hotel bookings are confirmed, not provisional</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green flex-shrink-0 mt-1" />
                  <span>Your flights are real tickets, not last-minute scrambles</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green flex-shrink-0 mt-1" />
                  <span>You have a licensed operator who is legally responsible for your welfare</span>
                </li>
              </ul>
            </div>

            <p className="font-cormorant italic text-2xl text-green text-center py-8">
              This is not a small distinction. This is the difference between a journey of peace and a journey of anxiety.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
