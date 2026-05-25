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
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const MINIMUM_DISPLAY_TIME = 2500; // Reduced from 3.5s to 2.5s
const PROGRESS_INCREMENT = 3; // Faster increments
const PROGRESS_INTERVAL = 60; // Faster interval
const HOLD_AT_90_DURATION = 400; // Reduced hold time

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  
  // Prevent double initialization in React Strict Mode
  const hasInitialized = useRef(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Prevent double execution in React Strict Mode
    if (hasInitialized.current) return;
    hasInitialized.current = true;

    // Only run on client side
    setIsMounted(true);
    
    // Get references to content elements
    const content = document.getElementById('app-content');
    const body = document.body;
    
    // Check if user has already seen the loading screen in this session
    const hasSeenLoader = sessionStorage.getItem('hasSeenLoader');
    
    if (hasSeenLoader === 'true') {
      // User has already seen the loader, show content immediately
      setIsLoading(false);
      if (content) {
        content.style.visibility = 'visible';
        content.style.opacity = '1';
      }
      body.classList.add('content-loaded');
      body.style.overflow = '';
      return;
    }

    // First time in this session - show the boot animation
    setIsLoading(true);
    
    // Keep content hidden and lock body scroll while loader is active
    if (content) {
      content.style.visibility = 'hidden';
    }
    body.style.overflow = 'hidden';
    
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
          
          // Wait for remaining time + reduced delay for snappier exit
          setTimeout(() => {
            setIsLoading(false);
            // Show content and restore body scroll
            if (content) {
              content.style.visibility = 'visible';
            }
            body.style.overflow = '';
            body.classList.add('content-loaded');
            // Mark that user has seen the loader for this session
            sessionStorage.setItem('hasSeenLoader', 'true');
          }, remainingTime + 400); // Reduced from 600ms
          
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
      body.style.overflow = '';
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
            scale: 1.02,
          }}
          transition={{ 
            duration: 1,
            ease: [0.43, 0.13, 0.23, 0.96]
          }}
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #050505 0%, #0d0d0d 50%, #080808 100%)',
          }}
        >
          {/* Single refined ambient glow - intentional and subtle */}
          <div className="absolute inset-0 opacity-20">
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full"
              style={{
                background: 'radial-gradient(ellipse, rgba(212,175,55,0.12) 0%, transparent 65%)',
                filter: 'blur(120px)',
              }}
            />
          </div>

          {/* Main content - centered and spacious */}
          <div className="relative z-10 flex flex-col items-center justify-center px-6 max-w-xl w-full">
            
            {/* Logo - larger and cleaner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                ease: [0.34, 1.56, 0.64, 1],
                delay: 0.2 
              }}
              className="mb-16"
            >
              <Image
                src="/images/logo.png"
                alt="AL-INFOTECH Tours & Travels"
                width={400}
                height={160}
                className="w-full max-w-[320px] md:max-w-[380px] h-auto"
                priority
              />
            </motion.div>

            {/* Loading text - stronger hierarchy */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mb-12 text-center"
            >
              <p className="font-marcellus text-xs tracking-[0.2em] uppercase text-gold-light/80 font-normal">
                Preparing Your Journey
              </p>
            </motion.div>

            {/* Progress bar - refined and elegant */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="w-full max-w-md"
            >
              {/* Elegant progress track - slightly thicker */}
              <div className="relative w-full h-[2px] bg-white/8 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ 
                    duration: 0.6, 
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  className="h-full bg-gold-light relative"
                  style={{
                    boxShadow: '0 0 8px rgba(212, 175, 55, 0.3)',
                  }}
                />
              </div>

              {/* Percentage - subtle and refined */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="mt-6 text-center"
              >
                <span className="font-lato text-xs text-white/30 tracking-wider">
                  {progress}%
                </span>
              </motion.div>
            </motion.div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
