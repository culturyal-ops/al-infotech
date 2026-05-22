# Site Structure Overview

## Navigation Flow

```
┌─────────────────────────────────────────────────────────────┐
│                         NAVBAR                              │
│  [UMRAH] [TOURS] [GALLERY]* [ABOUT] [WHY US] [GUIDE] [CONTACT] │
│                                                             │
│  * = NEW                                                    │
└─────────────────────────────────────────────────────────────┘
```

---

## Page Structure

### 🏠 Home Page (`/`)
```
├── Hero
├── Umrah Packages
├── Kashmir Packages
├── Why Us (preview)
├── Services Split
├── Trust Bar
└── Contact Form
```

### 📸 Gallery Page (`/gallery`) ⭐ NEW
```
├── Gallery Hero
│   └── "Experience Through Our Lens"
│
└── Gallery Grid
    ├── Filter Buttons
    │   └── [All] [Umrah] [Hajj] [Hotels] [Food] [Transport] [Groups] [Landmarks]
    │
    ├── Image Grid (responsive)
    │   ├── Standard images (3 columns)
    │   └── Wide images (2 columns, asymmetric)
    │
    └── Lightbox Modal
        └── Full-size image viewer
```

### 👥 About Page (`/about`) - UPDATED
```
├── About Hero
│   └── Company introduction
│
├── Founder Section
│   └── Shaik Shaiksha Valli story
│
├── Team Section ⭐ NEW
│   ├── Team Profiles
│   │   ├── Guide 1 (portrait + info)
│   │   ├── Coordinator 1
│   │   ├── Guide 2
│   │   └── Coordinator 2
│   │
│   └── Office Showcase
│       ├── Text about local presence
│       └── Office photo
│
└── Location Section ⭐ NEW
    ├── Section Header
    │   └── "Our Office in Proddatur"
    │
    ├── Mapbox Map (custom styled)
    │   └── Shows office location
    │
    └── Contact Details
        ├── 📍 Address
        ├── ☎️ Phone
        ├── ✉️ Email
        ├── 🕐 Office Hours
        └── [WhatsApp Button]
```

### 🤔 Why Us Page (`/why-us`)
```
├── Why Us Hero
├── License Difference
├── Local Advantage
└── Full Service
```

### 📖 Umrah Guide Page (`/umrah-guide`)
```
├── Guide Hero
├── Visa Process
├── Hotel Proximity
└── Packing List
```

### 🏔️ Proddatur Travel Page (`/proddatur-travel-agency`)
```
├── Proddatur Hero
└── Local Presence
```

---

## Component Hierarchy

### New Components

```
components/
│
├── gallery/
│   ├── GalleryGrid.tsx
│   │   ├── Filter buttons
│   │   ├── Image grid
│   │   └── Lightbox modal
│   │
│   └── GalleryHero.tsx
│       └── Hero section for gallery page
│
├── about/
│   ├── AboutHero.tsx (existing)
│   ├── FounderSection.tsx (existing)
│   └── TeamSection.tsx ⭐ NEW
│       ├── Team member cards
│       └── Office showcase
│
├── LocationMap.tsx ⭐ NEW
│   └── Mapbox integration
│
└── LocationSection.tsx ⭐ NEW
    ├── Map container
    └── Contact details
```

---

## User Journeys

### Journey 1: Exploring Services
```
Home → Umrah Packages → Gallery (see real photos) → Contact
```

### Journey 2: Building Trust
```
Home → About (meet founder) → Team (see guides) → Location (verify office) → Contact
```

### Journey 3: Research
```
Home → Why Us → Umrah Guide → Gallery (see examples) → Contact
```

### Journey 4: Direct Inquiry
```
Any page → WhatsApp button (instant contact)
```

---

## Information Architecture

```
AL Infotech Website
│
├── Services
│   ├── Umrah Packages (home)
│   ├── Hajj Packages (home)
│   └── Kashmir Tours (home)
│
├── Trust Assets ⭐ ENHANCED
│   ├── Gallery (new page)
│   │   ├── Food photos
│   │   ├── Umrah/Hajj moments
│   │   ├── Hotel accommodations
│   │   ├── Transportation
│   │   ├── Group photos
│   │   └── Landmarks
│   │
│   ├── Team (on about page)
│   │   ├── Guides
│   │   ├── Coordinators
│   │   └── Office
│   │
│   └── Location (on about page)
│       ├── Map
│       └── Contact details
│
├── Information
│   ├── About (founder story)
│   ├── Why Us (differentiators)
│   └── Umrah Guide (educational)
│
└── Contact
    ├── Contact form (home)
    ├── WhatsApp (everywhere)
    └── Location section (about)
```

---

## Mobile Navigation

```
┌─────────────────────┐
│   AL-INFOTECH       │
│   Tours & Travels   │  [☰]
└─────────────────────┘

Tap [☰] opens full-screen menu:

┌─────────────────────┐
│                     │
│      UMRAH          │
│      ─────          │
│      TOURS          │
│      ─────          │
│      GALLERY ⭐     │
│      ─────          │
│      ABOUT          │
│      ─────          │
│      WHY US         │
│      ─────          │
│      UMRAH GUIDE    │
│      ─────          │
│      CONTACT        │
│                     │
│   [BOOK NOW]        │
│                     │
└─────────────────────┘
```

---

## Content Flow

### Gallery Page Flow
```
1. Land on gallery
   ↓
2. See hero: "Experience Through Our Lens"
   ↓
3. Browse categories or view all
   ↓
4. Click image → Lightbox opens
   ↓
5. View full-size, read caption
   ↓
6. Close or browse more
   ↓
7. Convinced? → Contact
```

### About Page Flow
```
1. Land on about
   ↓
2. Read founder story
   ↓
3. Meet the team (guides, coordinators)
   ↓
4. See office location on map
   ↓
5. Get contact details
   ↓
6. Click WhatsApp or call
```

---

## Responsive Breakpoints

### Mobile (< 768px)
- 1 column layouts
- Stacked sections
- Full-width images
- Hamburger menu

### Tablet (768px - 1024px)
- 2 column layouts
- Gallery: 2 columns
- Team: 2 columns
- Map + contact: stacked

### Desktop (> 1024px)
- 3 column layouts (gallery)
- 2 column layouts (team)
- Map + contact: side-by-side
- Full navigation bar

---

## Key Interactions

### Gallery
- **Filter**: Click category → Grid updates
- **View**: Click image → Lightbox opens
- **Close**: Click X or outside → Lightbox closes
- **Hover**: Subtle scale + overlay

### Team
- **Hover**: Grayscale → Color transition
- **Mobile**: Tap for color (no hover)

### Map
- **Pan**: Drag to move
- **Zoom**: Scroll or +/- buttons
- **Marker**: Shows office location
- **Mobile**: Pinch to zoom

---

## SEO Structure

```
/ (Home)
├── Title: AL-INFOTECH Tours | Umrah & Kashmir Packages
└── Focus: Services, packages, booking

/gallery ⭐ NEW
├── Title: Gallery - AL Infotech Tours & Travels
└── Focus: Visual proof, trust building

/about (ENHANCED)
├── Title: About AL-Infotech | Shaik Shaiksha Valli | Proddatur
└── Focus: Founder, team, location, trust

/why-us
├── Title: Why Choose AL-Infotech | Licensed Umrah Operator
└── Focus: Differentiators, credentials

/umrah-guide
├── Title: Umrah Guide | Visa, Hotels, Packing | AL-Infotech
└── Focus: Educational content, SEO
```

---

## Data Flow

### Gallery Images
```
/public/images/gallery/
    ↓
/app/gallery/page.tsx (galleryImages array)
    ↓
<GalleryGrid> component
    ↓
Rendered on page
```

### Team Data
```
/public/images/team/
    ↓
/components/about/TeamSection.tsx (teamMembers array)
    ↓
Rendered on /about page
```

### Map Data
```
.env.local (Mapbox token + coordinates)
    ↓
<LocationMap> component
    ↓
Mapbox API
    ↓
Rendered map on /about page
```

---

## Future Expansion Points

Potential additions (not implemented):

- 🔮 Testimonials section
- 🔮 Blog/News section
- 🔮 Online booking system
- 🔮 Package comparison tool
- 🔮 Live chat integration
- 🔮 Multi-language support

**Note**: Only add if they increase trust and don't clutter the experience.

---

This structure maintains the **calm, premium aesthetic** while adding essential trust-building features.
