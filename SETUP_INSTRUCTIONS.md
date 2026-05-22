# Setup Instructions for New Features

## 1. Gallery System ✅

The gallery is ready to use. Just add images:

1. Place images in `/public/images/gallery/` folders:
   - `food/` - Meals during trips
   - `umrah/` - Umrah moments
   - `hajj/` - Hajj photos
   - `hotels/` - Accommodations
   - `transport/` - Buses, flights
   - `groups/` - Group photos
   - `landmarks/` - Kaaba, Masjid al-Nabawi, etc.

2. Update the image array in `/app/gallery/page.tsx`:
   ```typescript
   const galleryImages: GalleryImage[] = [
     {
       id: '1',
       src: '/images/gallery/umrah/your-image.jpg',
       alt: 'Description',
       category: 'umrah',
       caption: 'Optional caption'
     },
     // Add more images...
   ];
   ```

3. Gallery is accessible at `/gallery` and linked in the navbar.

---

## 2. Map Integration (Mapbox)

### Step 1: Get Mapbox Token

1. Go to [https://account.mapbox.com/](https://account.mapbox.com/)
2. Sign up for a free account
3. Create a new access token
4. Copy the token

### Step 2: Configure Environment Variables

1. Create `.env.local` file in the project root:
   ```bash
   cp .env.local.example .env.local
   ```

2. Add your Mapbox token:
   ```
   NEXT_PUBLIC_MAPBOX_TOKEN=pk.your_actual_token_here
   ```

3. Update office coordinates if needed (currently set to Proddatur):
   ```
   NEXT_PUBLIC_OFFICE_LAT=14.7502
   NEXT_PUBLIC_OFFICE_LNG=78.5482
   ```

### Step 3: Install Mapbox

```bash
npm install mapbox-gl
npm install --save-dev @types/mapbox-gl
```

### Step 4: Add Mapbox CSS

Add to `/app/layout.tsx` in the `<head>`:
```tsx
<link href='https://api.mapbox.com/mapbox-gl-js/v3.0.0/mapbox-gl.css' rel='stylesheet' />
```

### Alternative: Use Google Maps (Simpler)

If you prefer Google Maps instead of Mapbox, I can create a simpler version using Google Maps embed. Just let me know.

---

## 3. Team Section ✅

The team section is integrated into the About page.

### Adding Team Members

1. Add team photos to `/public/images/team/`
   - Use 3:4 aspect ratio (e.g., 900x1200px)
   - Professional portraits

2. Update team info in `/components/about/TeamSection.tsx`:
   ```typescript
   const teamMembers: TeamMember[] = [
     {
       name: 'Full Name',
       role: 'Job Title',
       experience: 'X years',
       languages: ['English', 'Urdu', 'Arabic', 'Telugu'],
       image: '/images/team/filename.jpg',
       specialization: 'Area of expertise'
     },
   ];
   ```

### Adding Office Photos

1. Add office photos to `/public/images/office/`
2. Main photo should be named `office-exterior.jpg`
3. It appears in the Team section automatically

---

## 4. Contact Information

Update contact details in `/components/LocationSection.tsx`:
- Address
- Phone number
- Email
- Office hours
- WhatsApp number

---

## Quick Start Checklist

- [ ] Install Mapbox: `npm install mapbox-gl @types/mapbox-gl`
- [ ] Create `.env.local` with Mapbox token
- [ ] Add Mapbox CSS to layout
- [ ] Add gallery images to `/public/images/gallery/`
- [ ] Update gallery array in `/app/gallery/page.tsx`
- [ ] Add team photos to `/public/images/team/`
- [ ] Update team info in TeamSection component
- [ ] Add office photo to `/public/images/office/`
- [ ] Update contact details in LocationSection
- [ ] Test the site: `npm run dev`

---

## File Structure

```
app/
├── gallery/
│   └── page.tsx          # Gallery page
└── about/
    └── page.tsx          # About page (includes team)

components/
├── gallery/
│   ├── GalleryGrid.tsx   # Main gallery component
│   └── GalleryHero.tsx   # Gallery hero section
├── about/
│   └── TeamSection.tsx   # Team & office section
├── LocationMap.tsx       # Mapbox map component
└── LocationSection.tsx   # Location with map & contact

public/images/
├── gallery/              # Gallery images by category
├── team/                 # Team member portraits
└── office/               # Office photos
```

---

## Need Help?

- Gallery not showing images? Check file paths and image names
- Map not loading? Verify Mapbox token in `.env.local`
- Styling issues? All components use the existing design system
