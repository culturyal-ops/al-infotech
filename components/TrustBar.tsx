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
  const [count, setCount] = useState(end); // Initialize with target value
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!isInView || hasAnimated) return;

    setHasAnimated(true);
    setCount(0); // Reset to 0 when animation starts

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
  }, [isInView, end, hasAnimated]);

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
      <div className="font-playfair font-bold text-[56px] md:text-[64px] text-white leading-none mb-3">
        {count}
        {suffix}
      </div>
      <div
        className="font-lato text-[12px] tracking-[0.15em] uppercase"
        style={{ color: 'rgba(255,255,255,0.65)' }}
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
    { end: 24, suffix: '/7', label: 'Customer Support', delay: 0.2 },
    { end: 100, suffix: '%', label: 'Licensed & Authorized', delay: 0.3 },
  ];

  return (
    <section className="bg-green py-20 md:py-24">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-16">
          {stats.map((stat, index) => (
            <div key={index} className="relative">
              <StatCounter {...stat} />
              {index < stats.length - 1 && (
                <>
                  <div
                    className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-24"
                    style={{ backgroundColor: 'rgba(255,255,255,0.12)' }}
                  />
                  {index === 1 && (
                    <div
                      className="md:hidden absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] w-24"
                      style={{ backgroundColor: 'rgba(255,255,255,0.12)' }}
                    />
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
