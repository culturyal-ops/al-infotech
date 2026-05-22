# AL-INFOTECH Tours and Travels

A luxury travel agency website for AL-INFOTECH TOURS AND TRAVELS, a Proddatur, Andhra Pradesh based agency offering Umrah pilgrim packages and domestic tourism.

## Design Philosophy: "Sacred Luxury"

This website embodies a calm, premium, and trustworthy aesthetic — think aged atlas, leather passport cover, an old mosque at golden hour. It's designed to make AL-INFOTECH look like the most credible travel agency in Kadapa district.

## Tech Stack

- **Next.js 14** (App Router)
- **Tailwind CSS** for styling
- **Framer Motion** for all animations
- **Lenis** for smooth scrolling
- **Shadcn/ui** for form elements
- **next/image** for optimized images
- **next/font** for Google Fonts (Cormorant Garamond, Cinzel, DM Sans)

## Features

- ✨ Smooth scroll with Lenis
- 🎨 Custom cursor (desktop only)
- 🎭 Sophisticated animations with Framer Motion
- 📱 Fully responsive design
- 🕌 Umrah package showcase
- 🏔️ Kashmir tour packages
- 📞 WhatsApp integration
- 📧 Contact form

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with fonts and providers
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles and CSS variables
├── components/
│   ├── Navbar.tsx          # Fixed navigation bar
│   ├── Hero.tsx            # Hero section with parallax
│   ├── TrustBar.tsx        # Stats counter section
│   ├── ServicesSplit.tsx   # Umrah & Tours split cards
│   ├── UmrahPackages.tsx   # Umrah package details
│   ├── KashmirPackage.tsx  # Kashmir tour details
│   ├── WhyUs.tsx           # Features section
│   ├── Contact.tsx         # Contact form
│   ├── Footer.tsx          # Footer
│   ├── CustomCursor.tsx    # Custom cursor component
│   └── SmoothScroll.tsx    # Lenis smooth scroll wrapper
└── components/ui/          # Shadcn UI components
```

## Color Palette

- **Background**: `#0D0C0A` (warm near-black)
- **Surface**: `#131210` (card backgrounds)
- **Navy**: `#1C2B4A` (deep navy for sections)
- **Gold**: `#C9A84C` (antique gold — primary accent)
- **Gold Light**: `#E8C97A` (hover states)
- **Cream**: `#F5EDD8` (primary text)
- **Muted**: `#9A9082` (secondary text)

## Typography

- **Display**: Cormorant Garamond (headlines, hero text)
- **Accent**: Cinzel (section labels, nav, all-caps moments)
- **Body**: DM Sans (paragraphs, UI text)

## Contact Information

- **Address**: Shop No. 24, 1st Floor, Nandini Cloth Market, Proddatur, Kadapa, Andhra Pradesh 516360
- **Phone**: +91 8919990806 / +91 9494455736 / +91 9398327853
- **Email**: alinfotechtours@gmail.com

## License

© 2025 Al-Infotech Tours and Travels. All rights reserved.
