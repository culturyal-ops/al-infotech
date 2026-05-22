'use client';

import { motion } from 'framer-motion';
import { Backpack, Check } from 'lucide-react';

export default function PackingList() {
  const packingItems = [
    {
      category: 'Ihram Clothing',
      items: ['Two unstitched white sheets for men', 'Modest full-covering clothing for women', 'Bring a spare set'],
    },
    {
      category: 'Footwear',
      items: ['Simple sandals that slip on and off easily', 'Avoid shoes with laces', 'Comfortable walking shoes for ziyarat'],
    },
    {
      category: 'Medications',
      items: ['All personal medications in original packaging', 'Doctor&apos;s prescription', 'Bring enough for full duration plus extra'],
    },
    {
      category: 'Documents',
      items: ['Passport original', 'Visa printout', 'Hotel confirmation', 'Flight tickets', 'Emergency contact list', 'Travel insurance documents', 'Keep copies separately from originals'],
    },
    {
      category: 'Practical Items',
      items: ['Small backpack for ziyarat days', 'Reusable water bottle', 'Light jacket for air-conditioned spaces', 'Unscented soap and toiletries (scented products prohibited in ihram)'],
    },
    {
      category: 'Money',
      items: ['Saudi Riyals for personal expenses', 'Current exchange rate: ₹22-23 per Riyal', 'Budget approximately 500-800 SAR for 14 days'],
    },
  ];

  return (
    <section className="bg-bg-section section-padding">
      <div className="container-custom max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="mb-12">
            <Backpack className="w-12 h-12 text-green mb-6" strokeWidth={1.5} />
            <h2 className="heading-section mb-6">The Practical Umrah Packing List</h2>
          </div>

          <div className="space-y-6">
            {packingItems.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="card p-8"
              >
                <p className="font-marcellus text-[11px] tracking-widest uppercase text-green mb-4">
                  {section.category}
                </p>
                <ul className="space-y-3">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green flex-shrink-0 mt-0.5" />
                      <span className="font-lato text-text">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
