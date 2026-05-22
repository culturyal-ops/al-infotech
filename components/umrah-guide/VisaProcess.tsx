'use client';

import { motion } from 'framer-motion';
import { FileText, AlertCircle } from 'lucide-react';

export default function VisaProcess() {
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
            <FileText className="w-12 h-12 text-green mb-6" strokeWidth={1.5} />
            <h2 className="heading-section mb-6">How Umrah Visa Works in 2025</h2>
          </div>

          <div className="space-y-6 font-lato text-text leading-relaxed text-lg">
            <p>
              The Umrah visa is issued exclusively through the Saudi government&apos;s NUSUK platform. Individual pilgrims cannot apply directly — the application must be submitted through a licensed Umrah operator registered with the Saudi Ministry of Hajj and Umrah.
            </p>

            <div className="card p-8 bg-gold-bg border-gold">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-green mb-2">Why Licensing Matters</p>
                  <p className="text-text-muted">
                    An unlicensed agent cannot legally process your visa, and any visa obtained through unofficial channels puts your entry into Saudi Arabia at risk.
                  </p>
                </div>
              </div>
            </div>

            <p>
              At Al-Infotech, we submit your documentation through our verified NUSUK account. The process requires your valid passport (minimum 6 months validity), recent passport photographs, and a completed application form.
            </p>

            <div className="card p-8">
              <p className="font-marcellus text-[11px] tracking-widest uppercase text-green mb-6">
                PROCESSING TIMELINE
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-green flex-shrink-0" />
                  <p><span className="font-medium">Document submission:</span> 1-2 days</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-green flex-shrink-0" />
                  <p><span className="font-medium">NUSUK processing:</span> 7-14 working days</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-green flex-shrink-0" />
                  <p><span className="font-medium">Visa approval:</span> Confirmed before payment</p>
                </div>
              </div>
            </div>

            <p className="font-medium text-green">
              We guide you through every document requirement personally, ensuring nothing is missed.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
