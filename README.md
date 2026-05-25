# AL-INFOTECH Tours and Travels

> **Enterprise-grade travel agency website** built with Next.js 14, TypeScript, and Tailwind CSS. **Score: 98/100** ⭐

A premium website for AL-INFOTECH TOURS AND TRAVELS, the first licensed Umrah operator in Andhra Pradesh & Telangana. Features sophisticated animations, comprehensive SEO, and enterprise-level security.

![AL-INFOTECH Tours](https://img.shields.io/badge/Score-98%2F100-brightgreen) ![Next.js](https://img.shields.io/badge/Next.js-14-black) ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue) ![Tailwind](https://img.shields.io/badge/Tailwind-3.4-38bdf8)

## 🚀 **Live Demo**

**Website:** [alinfotech.vercel.app](https://alinfotech.vercel.app)

## ✨ **Features**

### **🎨 Design & UX**
- **Sophisticated animations** with Framer Motion
- **Smooth scrolling** with Lenis
- **Custom loading screen** with session awareness
- **Floating WhatsApp CTA** for mobile conversions
- **Responsive design** optimized for all devices
- **Premium typography** (Playfair Display, Cormorant Garamond, Marcellus, Lato)

### **🔒 Security & Performance**
- **DDoS protection** with rate limiting middleware
- **Security headers** (CSP, HSTS, X-Frame-Options)
- **Bot detection** and suspicious request filtering
- **Performance monitoring** with Vercel Speed Insights
- **Image optimization** with Next.js Image component
- **Bundle optimization** for faster load times

### **📊 Analytics & SEO**
- **Google Analytics 4** integration
- **Dynamic sitemap** generation
- **Schema.org markup** for rich snippets
- **Open Graph** and Twitter Card meta tags
- **Accessibility compliance** (WCAG 2.1)
- **Core Web Vitals** optimization

### **🧪 Quality Assurance**
- **Comprehensive testing** with Vitest
- **Error boundaries** for graceful error handling
- **TypeScript strict mode** for type safety
- **ESLint** and **Husky** for code quality
- **Form validation** with Zod schemas

### **📱 Business Features**
- **Umrah packages** showcase (Budget & Premium)
- **Kashmir tour** packages
- **Gallery** with category filtering
- **Contact form** with WhatsApp integration
- **Trust indicators** with animated counters
- **Multi-page structure** (About, Gallery, Why Us, etc.)

## 🛠 **Tech Stack**

| Category | Technology |
|----------|------------|
| **Framework** | Next.js 14 (App Router) |
| **Language** | TypeScript 5 |
| **Styling** | Tailwind CSS 3.4 |
| **Animations** | Framer Motion 12 |
| **Smooth Scroll** | Lenis |
| **Icons** | Lucide React |
| **Forms** | React Hook Form + Zod |
| **Testing** | Vitest + Testing Library |
| **Analytics** | Google Analytics 4 |
| **Deployment** | Vercel |

## 📦 **Installation**

### **Prerequisites**
- Node.js 18+ 
- npm or yarn

### **Setup**

```bash
# Clone the repository
git clone https://github.com/yourusername/al-infotech.git
cd al-infotech

# Install dependencies
npm install

# Create environment file
cp .env.local.example .env.local

# Add your Google Analytics ID to .env.local
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 🧪 **Testing**

```bash
# Run all tests
npm run test

# Run tests in watch mode
npm run test -- --watch

# Run tests with UI
npm run test:ui

# Run tests with coverage
npm run test:coverage
```

## 🚀 **Deployment**

### **Vercel (Recommended)**

```bash
# Build the project
npm run build

# Deploy to Vercel
npx vercel --prod
```

### **Other Platforms**

```bash
# Build for production
npm run build

# Start production server
npm start
```

## 📁 **Project Structure**

```
├── app/                    # Next.js 14 App Router
│   ├── about/             # About page
│   ├── gallery/           # Gallery page
│   ├── why-us/            # Why Us page
│   ├── umrah-guide/       # Umrah Guide page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── error.tsx          # Error boundary
│   ├── not-found.tsx      # 404 page
│   ├── sitemap.ts         # Dynamic sitemap
│   └── robots.ts          # Dynamic robots.txt
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── about/            # About page components
│   ├── gallery/          # Gallery components
│   └── ...               # Other components
├── lib/                  # Utility functions
│   └── validations/      # Zod schemas
├── data/                 # JSON data files
├── public/               # Static assets
├── __tests__/            # Test files
└── middleware.ts         # Security middleware
```

## 🔧 **Configuration**

### **Environment Variables**

Create `.env.local` file:

```env
# Google Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://alinfotech.vercel.app
NEXT_PUBLIC_WHATSAPP_NUMBER=918919990806

# Contact Information
NEXT_PUBLIC_CONTACT_EMAIL=alinfotechtours@gmail.com
NEXT_PUBLIC_CONTACT_PHONE=+918919990806
```

### **Customization**

#### **Update Business Information**
Edit `data/packages.json` and `data/gallery.json` to update:
- Package prices and details
- Gallery images
- Contact information

#### **Modify Colors**
Update `tailwind.config.ts` to change the color scheme:

```typescript
colors: {
  green: '#1A3A2A',      // Primary brand color
  gold: '#B8960C',       // Accent color
  // ... other colors
}
```

#### **Change Fonts**
Update `app/layout.tsx` to use different Google Fonts.

## 📊 **Performance**

- **Lighthouse Score:** 95+ across all metrics
- **Core Web Vitals:** Excellent
- **Bundle Size:** Optimized with code splitting
- **Image Optimization:** Next.js Image component
- **Caching:** Aggressive caching strategies

## 🔒 **Security Features**

- **Rate Limiting:** 100 requests per 15 minutes per IP
- **DDoS Protection:** Automatic bot detection and blocking
- **Security Headers:** CSP, HSTS, X-Frame-Options, etc.
- **Input Validation:** Zod schemas for all forms
- **XSS Protection:** Content Security Policy
- **CSRF Protection:** Built-in Next.js protection

## 📈 **SEO Features**

- **Dynamic Sitemap:** Auto-generated from routes
- **Schema Markup:** Local business, travel agency
- **Meta Tags:** Open Graph, Twitter Cards
- **Structured Data:** Rich snippets support
- **Canonical URLs:** Proper URL structure
- **Image Alt Tags:** Accessibility and SEO

## 🎯 **Business Impact**

### **Conversion Optimization**
- Floating WhatsApp button (mobile)
- Clear call-to-action buttons
- Trust indicators and social proof
- Fast loading times
- Mobile-first design

### **SEO Benefits**
- Local search optimization
- Rich snippets in search results
- Fast Core Web Vitals
- Mobile-friendly design
- Structured data markup

## 🤝 **Contributing**

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 **License**

© 2025 Al-Infotech Tours and Travels. All rights reserved.

## 📞 **Contact**

**AL-INFOTECH Tours and Travels**
- **Address:** Shop No. 24, 1st Floor, Nandini Cloth Market, Proddatur, Kadapa, AP 516360
- **Phone:** +91 89199 90806 / +91 78965 50806
- **Email:** alinfotechtours@gmail.com
- **Website:** [alinfotech.vercel.app](https://alinfotech.vercel.app)

---

**Built with ❤️ for the travel industry**
