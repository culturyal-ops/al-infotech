# Implementation Checklist

## ✅ Completed (Code Ready)

- [x] Gallery system components created
- [x] Gallery page created at `/gallery`
- [x] Gallery added to navbar
- [x] Map components created (Mapbox integration)
- [x] Location section with contact details
- [x] Team section component
- [x] Team section integrated into About page
- [x] Location section integrated into About page
- [x] All components follow design system
- [x] No TypeScript errors
- [x] Responsive layouts implemented
- [x] Accessibility considerations (alt text, aria labels)
- [x] Documentation created

---

## 🔧 Setup Required (Before Testing)

### 1. Install Mapbox Dependencies

**Option A: Use the batch file**
```bash
.\install-mapbox.bat
```

**Option B: Manual installation**
```bash
npm install mapbox-gl
npm install --save-dev @types/mapbox-gl
```

### 2. Configure Environment Variables

1. Copy the example file:
   ```bash
   copy .env.local.example .env.local
   ```

2. Get Mapbox token:
   - Go to https://account.mapbox.com/
   - Sign up (free tier is fine)
   - Create access token
   - Copy token

3. Edit `.env.local`:
   ```
   NEXT_PUBLIC_MAPBOX_TOKEN=pk.your_actual_token_here
   NEXT_PUBLIC_OFFICE_LAT=14.7502
   NEXT_PUBLIC_OFFICE_LNG=78.5482
   ```

### 3. Verify Coordinates

Current coordinates are set for Proddatur:
- Latitude: 14.7502
- Longitude: 78.5482

If your office is at a different location:
1. Find coordinates on Google Maps (right-click → "What's here?")
2. Update in `.env.local`

---

## 📸 Content to Add

### Gallery Images

Create these folders and add images:

```
public/images/gallery/
├── food/           ← Meals, dining during trips
├── umrah/          ← Umrah moments, rituals, groups at Kaaba
├── hajj/           ← Hajj pilgrimage photos
├── hotels/         ← Hotel rooms, facilities, accommodations
├── transport/      ← Buses, flights, vehicles
├── groups/         ← Group photos with pilgrims
└── landmarks/      ← Kaaba, Masjid al-Nabawi, Kashmir scenery
```

**Image specs**:
- Format: JPG or WebP
- Size: Max 2MB per image
- Dimensions: Minimum 1200px width
- Optimize before uploading

**After adding images**, update `/app/gallery/page.tsx`:
```typescript
const galleryImages: GalleryImage[] = [
  {
    id: 'unique-id',
    src: '/images/gallery/umrah/your-image.jpg',
    alt: 'Descriptive alt text',
    category: 'umrah',
    caption: 'Optional caption'
  },
  // Add more...
];
```

### Team Photos

Add to `public/images/team/`:
- Format: JPG or WebP
- Aspect ratio: 3:4 (e.g., 900x1200px)
- Style: Professional portraits
- Size: Under 500KB per image
- Naming: `guide-1.jpg`, `coordinator-1.jpg`, etc.

**After adding photos**, update `/components/about/TeamSection.tsx`:
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
  // Add more...
];
```

### Office Photos

Add to `public/images/office/`:
- `office-exterior.jpg` - Main office photo (required)
- `office-interior.jpg` - Optional
- `meeting-room.jpg` - Optional

**Image specs**:
- Format: JPG or WebP
- Size: Under 1MB
- Dimensions: Minimum 1200px width

---

## 📝 Contact Information to Update

Edit `/components/LocationSection.tsx` and update:

1. **Address** (line ~35):
   ```tsx
   <p className="body-base text-text-muted">
     AL Infotech Tours & Travels<br />
     Your actual address here<br />
     Proddatur, Andhra Pradesh 516360
   </p>
   ```

2. **Phone** (line ~47):
   ```tsx
   <a href="tel:+919876543210">
     +91 98765 43210  ← Update this
   </a>
   ```

3. **Email** (line ~59):
   ```tsx
   <a href="mailto:info@alinfotechtravel.com">
     info@alinfotechtravel.com  ← Update this
   </a>
   ```

4. **Office Hours** (line ~71):
   ```tsx
   <p className="body-base text-text-muted">
     Monday - Saturday: 9:00 AM - 7:00 PM<br />
     Sunday: 10:00 AM - 5:00 PM  ← Update if needed
   </p>
   ```

5. **WhatsApp** (line ~82):
   ```tsx
   <a href="https://wa.me/919876543210">
     ← Update phone number
   ```

---

## 🧪 Testing Checklist

After setup, test these:

### Gallery
- [ ] Navigate to `/gallery`
- [ ] All filter buttons work
- [ ] Images load correctly
- [ ] Click image opens lightbox
- [ ] Lightbox shows full image
- [ ] Close button (X) works
- [ ] Click outside closes lightbox
- [ ] Responsive on mobile

### Map
- [ ] Navigate to `/about`
- [ ] Scroll to location section
- [ ] Map loads and shows correct location
- [ ] Custom marker appears
- [ ] Map is interactive (zoom, pan)
- [ ] Contact details are correct
- [ ] WhatsApp button works

### Team
- [ ] Navigate to `/about`
- [ ] Team section displays
- [ ] Team photos load
- [ ] Hover changes grayscale to color
- [ ] Office photo displays
- [ ] All info is readable on mobile

### Navigation
- [ ] Gallery link in navbar works
- [ ] Mobile menu includes Gallery
- [ ] All links work correctly

---

## 🚀 Launch Steps

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run Mapbox setup**:
   ```bash
   .\install-mapbox.bat
   ```

3. **Configure environment**:
   - Create `.env.local`
   - Add Mapbox token

4. **Add content**:
   - Gallery images
   - Team photos
   - Office photo

5. **Update contact info**:
   - Edit LocationSection.tsx

6. **Test locally**:
   ```bash
   npm run dev
   ```
   Open http://localhost:3000

7. **Check all pages**:
   - Home page
   - Gallery page
   - About page (with team & map)
   - Mobile responsiveness

8. **Build for production**:
   ```bash
   npm run build
   ```

9. **Deploy**:
   - Ensure `.env.local` variables are set in your hosting platform
   - Deploy as usual

---

## 📚 Documentation Files

Reference these for help:

- `SETUP_INSTRUCTIONS.md` - Detailed setup guide
- `NEW_FEATURES_SUMMARY.md` - What was added and why
- `VISUAL_REFERENCE.md` - Layout and design specs
- `public/images/gallery/README.md` - Gallery image guide
- `public/images/team/README.md` - Team photo guide
- `public/images/office/README.md` - Office photo guide

---

## ⚠️ Common Issues

### Map not loading?
- Check Mapbox token in `.env.local`
- Verify token is valid at https://account.mapbox.com/
- Check browser console for errors
- Ensure Mapbox CSS is loaded in layout

### Images not showing?
- Verify file paths are correct
- Check image file names match code
- Ensure images are in correct folders
- Check browser console for 404 errors

### TypeScript errors?
- Run `npm install` to ensure all deps installed
- Check for missing imports
- Verify file paths are correct

### Styling looks off?
- Clear browser cache
- Check if globals.css is loading
- Verify Tailwind is compiling correctly
- Run `npm run dev` fresh

---

## 🎯 Success Criteria

You're done when:

- ✅ Gallery page loads with real images
- ✅ Filtering works smoothly
- ✅ Lightbox opens and closes properly
- ✅ Map displays office location correctly
- ✅ Team section shows real team members
- ✅ All contact info is accurate
- ✅ Everything is responsive on mobile
- ✅ No console errors
- ✅ Site maintains premium aesthetic
- ✅ Build completes without errors

---

## 💡 Tips

- Start with Mapbox setup first (it's the only external dependency)
- Add placeholder images initially to test layout
- Replace with real images once you get them from client
- Test on mobile frequently (most users will be on mobile)
- Keep the calm, premium aesthetic - don't add extra effects
- If stuck, check the documentation files listed above

---

## Need Help?

Check these in order:
1. `SETUP_INSTRUCTIONS.md` - Step-by-step setup
2. Browser console - Look for error messages
3. `NEW_FEATURES_SUMMARY.md` - Understand what was built
4. `VISUAL_REFERENCE.md` - See how it should look
