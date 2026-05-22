'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

interface StatProps {
  end: number;
  suffix: string;
  label: string;
  delay: number;
}

function StatCounter({ end, suffix, label, delay }: StatProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = end / steps;
    const stepDuration = duration / steps;

    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isInView, end]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{
        duration: 0.9,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="flex flex-col items-center text-center"
    >
      <div className="font-playfair font-bold text-[52px] text-white leading-none mb-2">
        {count}
        {suffix}
      </div>
      <div
        className="font-lato text-[13px] tracking-wider uppercase"
        style={{ color: 'rgba(255,255,255,0.7)' }}
      >
        {label}
      </div>
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
    <section className="bg-green py-12 md:py-16">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="relative">
              <StatCounter {...stat} />
              {index < stats.length - 1 && (
                <div
                  className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-16"
                  style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
