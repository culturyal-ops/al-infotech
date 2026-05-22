'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

interface StatProps {
  end: number;
  suffix: string;
  label: string;
  delay: number;
}

function AnimatedStat({ end, suffix, label, delay }: StatProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, end]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="text-center"
    >
      <div className="font-['Cormorant_Garamond'] text-[var(--gold)] text-5xl md:text-6xl font-light mb-2">
        {count}
        {suffix}
      </div>
      <div className="text-[var(--cream)] text-sm tracking-wide">{label}</div>
    </motion.div>
  );
}

export default function TrustBar() {
  const stats = [
    { end: 500, suffix: '+', label: 'Pilgrims Sent', delay: 0 },
    { end: 14, suffix: '+', label: 'Years Experience', delay: 0.1 },
    { end: 3, suffix: '', label: 'States Served', delay: 0.2 },
    { end: 100, suffix: '%', label: 'Licensed & Authorized', delay: 0.3 },
  ];

  return (
    <section className="bg-[var(--navy)] py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="relative">
              <AnimatedStat {...stat} />
              {index < stats.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-16 bg-[var(--gold)] opacity-30" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
