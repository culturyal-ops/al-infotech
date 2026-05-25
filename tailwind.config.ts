import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['var(--font-playfair)', 'serif'],
        cormorant: ['var(--font-cormorant)', 'serif'],
        marcellus: ['var(--font-marcellus)', 'serif'],
        lato: ['var(--font-lato)', 'sans-serif'],
      },
      colors: {
        bg: '#FDFAF5',
        'bg-section': '#F5F0E8',
        surface: '#FFFFFF',
        green: '#1A3A2A',
        'green-light': '#2D5A40',
        'green-muted': '#E8F0EB',
        gold: '#B8960C',
        'gold-light': '#D4AF37',
        'gold-bg': '#FBF6E9',
        text: '#1C1917',
        'text-muted': '#6B6560',
        border: '#E8E0D0',
        'border-gold': 'rgba(184,150,12,0.25)',
        whatsapp: '#25D366',
        'whatsapp-dark': '#20BA5A',
        // Semantic colors
        success: '#10B981',
        'success-light': '#D1FAE5',
        error: '#EF4444',
        'error-light': '#FEE2E2',
        warning: '#F59E0B',
        'warning-light': '#FEF3C7',
        info: '#3B82F6',
        'info-light': '#DBEAFE',
        // Accent colors
        terracotta: '#C1694F',
        'terracotta-light': '#F4E4DF',
        burgundy: '#7C2D3A',
        'burgundy-light': '#F8E8EB',
      },
      spacing: {
        '4': '1rem',      // 16px
        '8': '2rem',      // 32px
        '12': '3rem',     // 48px
        '16': '4rem',     // 64px
        '20': '5rem',     // 80px
        '24': '6rem',     // 96px
        '32': '8rem',     // 128px
        '40': '10rem',    // 160px
        '48': '12rem',    // 192px
      },
      borderRadius: {
        'sm': '2px',
        'DEFAULT': '4px',
        'md': '4px',
        'lg': '8px',
        'xl': '12px',
        '2xl': '16px',
        'full': '9999px',
      },
      boxShadow: {
        'card': '0 2px 20px rgba(26,58,42,0.08)',
        'card-hover': '0 8px 40px rgba(26,58,42,0.12)',
        'card-active': '0 12px 48px rgba(26,58,42,0.15)',
        'button': '0 4px 16px rgba(184,150,12,0.2)',
        'button-hover': '0 8px 24px rgba(184,150,12,0.3)',
        'input-focus': '0 0 0 4px rgba(184,150,12,0.08)',
        'input-error': '0 0 0 4px rgba(239,68,68,0.08)',
        'input-success': '0 0 0 4px rgba(16,185,129,0.08)',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'bounce-soft': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        'ease-out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      transitionDuration: {
        '250': '250ms',
        '350': '350ms',
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'slide-down': 'slideDown 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'scale-in': 'scaleIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'shimmer': 'shimmer 2s infinite',
        'pulse-soft': 'pulseSoft 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-subtle': 'bounceSubtle 1s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
