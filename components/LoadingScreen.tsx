'use client';

/**
 * LoadingScreen - Cinematic Boot Animation
 * 
 * IMPORTANT: This is a ONE-TIME boot animation, NOT a route transition loader.
 * 
 * Architecture:
 * - Lives ONLY in app/layout.tsx (root layout)
 * - Should NOT be imported in any page.tsx or nested layouts
 * - Mounted once at app initialization
 * - Uses sessionStorage to prevent re-showing on route navigation
 * 
 * Behavior:
 * - Shows ONLY on first site load/refresh in a browser session
 * - Does NOT show when navigating between pages
 * - Minimum display time: 3.5 seconds for cinematic feel
 * - Holds at 90% progress briefly for premium effect
 * - Locks body scroll while active
 * - Smooth exit animation with reduced blur for clean transition
 * 
 * Technical Details:
 * - useRef guard prevents React Strict Mode double-execution
 * - useMemo for particle positions (prevents recalculation on every render)
 * - Progress capped at 100 to prevent overshoot
 * - SSR-safe with isMounted check
 * - Cleanup restores body scroll on unmount
 */

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef, useMemo } from 'react';
import Image from 'next/image';

const MINIMUM_DISPLAY_TIME = 3500; // 3.5 seconds minimum
const PROGRESS_INCREMENT = 2; // Slower increments (2% instead of 10%)
const PROGRESS_INTERVAL = 70; // Slower interval (70ms instead of 150ms)
const HOLD_AT_90_DURATION = 600; // Hold at 90% for premium feel

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  
  // Prevent double initialization in React Strict Mode
  const hasInitialized = useRef(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Generate particle positions once and memoize them
  const particlePositions = useMemo(() => {
    return Array.from({ length: 20 }, () => ({
      initialX: Math.random() * 1920,
      initialY: 1130,
      targetX: Math.random() * 1920,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5,
    }));
  }, []);

  useEffect(() => {
    // Prevent double execution in React Strict Mode
    if (hasInitialized.current) return;
    hasInitialized.current = true;

    // Only run on client side
    setIsMounted(true);
    
    // Check if user has already seen the loading screen in this session
    const hasSeenLoader = sessionStorage.getItem('hasSeenLoader');
    
    if (hasSeenLoader === 'true') {
      // User has already seen the loader, don't show it again
      setIsLoading(false);
      return;
    }

    // First time in this session - show the boot animation
    setIsLoading(true);
    
    // Lock body scroll while loader is active
    document.body.style.overflow = 'hidden';
    
    const startTime = Date.now();
    let hasHeldAt90 = false;

    // Smooth progress animation
    intervalRef.current = setInterval(() => {
      setProgress((prev) => {
        // Hold at 90% for premium feel
        if (prev >= 90 && prev < 100 && !hasHeldAt90) {
          hasHeldAt90 = true;
          setTimeout(() => {
            setProgress(100);
          }, HOLD_AT_90_DURATION);
          return 90;
        }

        if (prev >= 100) {
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
          }
          
          // Calculate remaining time to meet minimum display duration
          const elapsedTime = Date.now() - startTime;
          const remainingTime = Math.max(0, MINIMUM_DISPLAY_TIME - elapsedTime);
          
          // Wait for remaining time + extra delay for cinematic effect
          setTimeout(() => {
            setIsLoading(false);
            // Restore body scroll
            document.body.style.overflow = '';
            // Mark that user has seen the loader for this session
            sessionStorage.setItem('hasSeenLoader', 'true');
          }, remainingTime + 600); // Reduced from 800ms to 600ms for cleaner exit
          
          return 100;
        }
        
        // Prevent overshooting 100
        return Math.min(prev + PROGRESS_INCREMENT, 100);
      });
    }, PROGRESS_INTERVAL);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      // Restore body scroll on cleanup
      document.body.style.overflow = '';
    };
  }, []);

  // Don't render anything until mounted (prevents SSR issues)
  if (!isMounted) {
    return null;
  }

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            scale: 1.03,
            filter: "blur(4px)" // Reduced blur for cleaner exit
          }}
          transition={{ 
            duration: 0.9, // Reduced from 1.2s for snappier feel
            ease: [0.43, 0.13, 0.23, 0.96]
          }}
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
        >
          {/* Glassmorphism background */}
          <div className="absolute inset-0 bg-gradient-to-br from-bg via-bg-section to-gold-bg">
            {/* Animated blurred shapes for glass effect */}
            <motion.div
              animate={{
                x: [0, 100, 0],
                y: [0, -50, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/20 rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                x: [0, -80, 0],
                y: [0, 100, 0],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green/20 rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                x: [0, 50, 0],
                y: [0, -80, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold-light/15 rounded-full blur-3xl"
            />
          </div>

          {/* Glass card container */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              ease: [0.34, 1.56, 0.64, 1],
              delay: 0.2 // Slight delay for dramatic entrance
            }}
            className="relative z-10 glass-effect-light rounded-3xl p-12 md:p-16 max-w-md mx-4"
            style={{
              backdropFilter: 'blur(20px) saturate(180%)',
              WebkitBackdropFilter: 'blur(20px) saturate(180%)',
            }}
          >
            {/* Logo with animations */}
            <div className="relative mb-8">
              {/* Glow effect behind logo */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
                className="absolute inset-0 bg-gold blur-2xl"
              />
              
              {/* Logo */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{
                  scale: 1,
                  opacity: 1,
                  y: [0, -8, 0],
                }}
                transition={{
                  scale: { duration: 0.6, ease: "easeOut", delay: 0.4 },
                  opacity: { duration: 0.6, ease: "easeOut", delay: 0.4 },
                  y: {
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }
                }}
                className="relative"
              >
                <Image
                  src="/images/logo.png"
                  alt="AL-INFOTECH Tours & Travels"
                  width={300}
                  height={120}
                  className="w-full h-auto"
                  priority
                />
              </motion.div>
            </div>

            {/* Loading text */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-center mb-6"
            >
              <motion.p
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="font-marcellus text-sm tracking-[0.3em] uppercase text-green"
              >
                Preparing Your Journey
              </motion.p>
            </motion.div>

            {/* Progress bar with glass effect */}
            <div className="relative w-full h-2 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ 
                  duration: 0.5, 
                  ease: [0.25, 0.46, 0.45, 0.94] // Smooth easing
                }}
                className="h-full bg-gradient-to-r from-gold via-gold-light to-gold rounded-full relative"
                style={{
                  boxShadow: '0 0 20px rgba(184, 150, 12, 0.5)',
                }}
              >
                {/* Shimmer effect */}
                <motion.div
                  animate={{
                    x: ['-100%', '200%'],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent"
                />
              </motion.div>
            </div>

            {/* Progress percentage */}
            <motion.p
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="mt-6 text-center font-playfair text-3xl font-bold text-gold"
              style={{
                textShadow: '0 2px 10px rgba(184, 150, 12, 0.3)',
              }}
            >
              {progress}%
            </motion.p>

            {/* Decorative glass orbs */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: [0, 0.15, 0],
                    scale: [0, 1.5, 2],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 1,
                    ease: "easeOut",
                  }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-gold/30 rounded-full"
                  style={{
                    backdropFilter: 'blur(2px)',
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Floating particles */}
          {particlePositions.map((particle, i) => (
            <motion.div
              key={i}
              initial={{
                x: typeof window !== 'undefined' ? particle.initialX : particle.initialX,
                y: typeof window !== 'undefined' ? particle.initialY : particle.initialY,
              }}
              animate={{
                y: -50,
                x: typeof window !== 'undefined' ? particle.targetX : particle.targetX,
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                ease: "linear",
                delay: particle.delay,
              }}
              className="absolute w-1 h-1 bg-gold/30 rounded-full"
              style={{
                boxShadow: '0 0 10px rgba(184, 150, 12, 0.5)',
              }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
