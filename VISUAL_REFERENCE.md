# Visual Reference Guide

## Gallery Layout

```
┌─────────────────────────────────────────────────────────┐
│                    GALLERY HERO                         │
│              "Experience Through Our Lens"              │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  [All] [Umrah] [Hajj] [Hotels] [Food] [Transport]...   │  ← Filter buttons
└─────────────────────────────────────────────────────────┘

┌──────────────┬──────────────┬──────────────┐
│              │              │              │
│   Image 1    │   Image 2    │   Image 3    │  ← Standard 3-column grid
│              │              │              │
└──────────────┴──────────────┴──────────────┘

┌─────────────────────────────┬──────────────┐
│                             │              │
│      Wide Image 4           │   Image 5    │  ← Asymmetric (every 7th & 11th)
│      (spans 2 cols)         │              │
└─────────────────────────────┴──────────────┘

┌──────────────┬──────────────┬──────────────┐
│              │              │              │
│   Image 6    │   Image 7    │   Image 8    │
│              │              │              │
└──────────────┴──────────────┴──────────────┘
```

**Hover Behavior**:
- Subtle scale (1.05x) over 700ms
- 10% green overlay fade-in
- Caption slides up from bottom

**Click Behavior**:
- Opens full-screen lightbox
- Dark green background (95% opacity)
- Image centered, caption below
- Click anywhere or X to close

---

## Team Section (on About Page)

```
┌─────────────────────────────────────────────────────────┐
│              "Experienced Guides & Coordinators"        │
└─────────────────────────────────────────────────────────┘

┌──────────────────────┬──────────────────────┐
│                      │                      │
│   Portrait (3:4)     │   Portrait (3:4)     │  ← 2-column grid
│   Grayscale          │   Grayscale          │
│                      │                      │
├──────────────────────┼──────────────────────┤
│ Name                 │ Name                 │
│ ROLE                 │ ROLE                 │
│ Experience: X years  │ Experience: X years  │
│ Specialization: ...  │ Specialization: ...  │
│ Languages: ...       │ Languages: ...       │
└──────────────────────┴──────────────────────┘

┌──────────────────────┬──────────────────────┐
│                      │                      │
│   Portrait (3:4)     │   Portrait (3:4)     │
│   Grayscale          │   Grayscale          │
│                      │                      │
└──────────────────────┴──────────────────────┘

─────────────────────────────────────────────────

┌──────────────────────────────────────────────┐
│  "Rooted in Proddatur, Connected to World"   │
├──────────────────────┬───────────────────────┤
│                      │                       │
│  Text about office   │   Office Photo        │
│  and local presence  │   (landscape)         │
│                      │                       │
└──────────────────────┴───────────────────────┘
```

**Hover Behavior**:
- Portrait transitions from grayscale to color (700ms)
- No other effects

---

## Location Section (on About Page)

```
┌─────────────────────────────────────────────────────────┐
│                "Our Office in Proddatur"                │
└─────────────────────────────────────────────────────────┘

┌──────────────────────────┬──────────────────────────┐
│                          │                          │
│                          │  📍 Address              │
│    Mapbox Map            │  AL Infotech Tours...    │
│    (custom styled)       │                          │
│                          │  ☎ Phone                 │
│                          │  +91 98765 43210         │
│                          │                          │
│                          │  ✉ Email                 │
│                          │  info@...                │
│                          │                          │
│                          │  🕐 Office Hours         │
│                          │  Mon-Sat: 9AM-7PM        │
│                          │                          │
│                          │  [Chat on WhatsApp]      │
└──────────────────────────┴──────────────────────────┘
```

**Map Styling**:
- Light theme base
- Water: `#E8F0EB` (green-muted)
- Land: `#FDFAF5` (bg)
- Custom marker: Green circle with gold border
- Navigation controls top-right

---

## Color Usage

### Gallery
- Background: `bg-section` (#F5F0E8)
- Filter buttons: Green text, gold when active
- Lightbox: Green 95% opacity background

### Team
- Background: `bg` (#FDFAF5)
- Portraits: Grayscale → Color on hover
- Text: Green headings, gold role labels

### Location
- Background: `bg` (#FDFAF5)
- Icons: Green on light green circles
- Map: Custom styled to match palette

---

## Typography Hierarchy

### Gallery
- Hero: `heading-display` (Playfair, 3-5rem)
- Eyebrow: `eyebrow` (Marcellus, 10px, 0.25em tracking)
- Body: `body-lg` (Lato, 18px)

### Team
- Section title: `heading-xl` (Playfair, 2.5-3.5rem)
- Names: `heading-md` (Playfair, 1.5-1.875rem)
- Roles: `label` (Marcellus, 10px, uppercase)
- Details: `body-base` (Lato, 16px)

### Location
- Section title: `heading-xl`
- Subsections: `heading-md`
- Details: `body-base`

---

## Spacing Rhythm

All sections use:
- Section padding: `clamp(5rem, 12vw, 9rem)` top/bottom
- Container padding: `clamp(1.5rem, 5vw, 5rem)` left/right
- Grid gaps: 32px (md), 48px (lg)
- Vertical spacing between elements: 24-48px

---

## Motion Timing

All animations use:
- Duration: 700ms (slow, cinematic)
- Easing: `cubic-bezier(0.25, 0.46, 0.45, 0.94)`
- Hover transitions: 500ms
- No stagger delays
- No entrance animations (except navbar)

---

## Responsive Breakpoints

- Mobile: 1 column
- Tablet (md): 2 columns
- Desktop (lg): 3 columns (gallery), 2 columns (team)

Gallery asymmetry only applies on desktop (lg+).
