# Quick Start Guide

## 🚀 Get Running in 5 Minutes

### Step 1: Install Mapbox (30 seconds)

Double-click this file:
```
install-mapbox.bat
```

Or run manually:
```bash
npm install mapbox-gl @types/mapbox-gl
```

---

### Step 2: Get Mapbox Token (2 minutes)

1. Go to: https://account.mapbox.com/
2. Sign up (free)
3. Click "Create a token"
4. Copy the token

---

### Step 3: Create Environment File (30 seconds)

1. Copy `.env.local.example` to `.env.local`
2. Paste your Mapbox token:
   ```
   NEXT_PUBLIC_MAPBOX_TOKEN=pk.your_token_here
   ```

---

### Step 4: Run the Site (10 seconds)

```bash
npm run dev
```

Open: http://localhost:3000

---

## ✅ What to Check

1. **Gallery**: Go to `/gallery` - should see placeholder layout
2. **About**: Go to `/about` - scroll down to see team & map sections
3. **Map**: Should load (might be slow first time)

---

## 📸 Add Your Content Later

When you get images from client:

1. **Gallery images** → `public/images/gallery/` folders
2. **Team photos** → `public/images/team/`
3. **Office photo** → `public/images/office/office-exterior.jpg`

Then update the arrays in:
- `/app/gallery/page.tsx` (gallery images)
- `/components/about/TeamSection.tsx` (team info)

---

## 🔧 Update Contact Info

Edit `/components/LocationSection.tsx`:
- Address
- Phone
- Email
- Office hours
- WhatsApp number

---

## 📚 Need More Details?

- **Full setup**: Read `SETUP_INSTRUCTIONS.md`
- **What was built**: Read `NEW_FEATURES_SUMMARY.md`
- **How it looks**: Read `VISUAL_REFERENCE.md`
- **Complete checklist**: Read `IMPLEMENTATION_CHECKLIST.md`

---

## ⚡ That's It!

The code is ready. Just need:
1. Mapbox token (done above)
2. Real images (add later)
3. Contact info (update when ready)

Everything else is built and working.
