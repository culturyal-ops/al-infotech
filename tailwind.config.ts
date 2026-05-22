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
      },
      boxShadow: {
        card: '0 2px 20px rgba(26,58,42,0.08)',
        'card-hover': '0 8px 40px rgba(26,58,42,0.12)',
      },
    },
  },
  plugins: [],
};
export default config;
