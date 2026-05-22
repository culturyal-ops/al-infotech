# Deployment Guide

## Pre-Deployment Checklist

### ✅ Content Ready
- [ ] Gallery images added to `/public/images/gallery/`
- [ ] Gallery array updated in `/app/gallery/page.tsx`
- [ ] Team photos added to `/public/images/team/`
- [ ] Team info updated in `/components/about/TeamSection.tsx`
- [ ] Office photo added to `/public/images/office/`
- [ ] Contact details updated in `/components/LocationSection.tsx`

### ✅ Configuration
- [ ] Mapbox token obtained
- [ ] `.env.local` created with token
- [ ] Office coordinates verified
- [ ] All contact info verified (phone, email, address)

### ✅ Testing
- [ ] Site runs locally (`npm run dev`)
- [ ] Gallery page loads and filters work
- [ ] Lightbox opens and closes
- [ ] Map displays correctly
- [ ] Team section displays
- [ ] All links work
- [ ] Mobile responsive
- [ ] No console errors

### ✅ Build
- [ ] Production build succeeds (`npm run build`)
- [ ] No build errors
- [ ] No TypeScript errors

---

## Deployment Steps

### For Vercel (Recommended)

#### 1. Push to Git

```bash
git add .
git commit -m "Add gallery, team, and location features"
git push origin main
```

#### 2. Configure Environment Variables

In Vercel dashboard:
1. Go to your project
2. Settings → Environment Variables
3. Add these variables:

```
NEXT_PUBLIC_MAPBOX_TOKEN=pk.your_actual_token_here
NEXT_PUBLIC_OFFICE_LAT=14.7502
NEXT_PUBLIC_OFFICE_LNG=78.5482
```

4. Apply to: Production, Preview, Development
5. Save

#### 3. Deploy

Vercel will auto-deploy on push, or:
1. Go to Deployments tab
2. Click "Redeploy"
3. Wait for build to complete

#### 4. Verify

Visit your live site and check:
- Gallery page loads
- Map displays
- Team section shows
- All images load
- No errors in browser console

---

### For Netlify

#### 1. Push to Git

```bash
git add .
git commit -m "Add gallery, team, and location features"
git push origin main
```

#### 2. Configure Environment Variables

In Netlify dashboard:
1. Site settings → Environment variables
2. Add variables:

```
NEXT_PUBLIC_MAPBOX_TOKEN=pk.your_actual_token_here
NEXT_PUBLIC_OFFICE_LAT=14.7502
NEXT_PUBLIC_OFFICE_LNG=78.5482
```

3. Save

#### 3. Build Settings

Ensure these are set:
- Build command: `npm run build`
- Publish directory: `.next`

#### 4. Deploy

1. Trigger new deploy
2. Wait for build
3. Verify live site

---

### For Other Platforms

#### General Steps:

1. **Build locally**:
   ```bash
   npm run build
   ```

2. **Set environment variables** on your hosting platform:
   ```
   NEXT_PUBLIC_MAPBOX_TOKEN=your_token
   NEXT_PUBLIC_OFFICE_LAT=14.7502
   NEXT_PUBLIC_OFFICE_LNG=78.5482
   ```

3. **Upload files** or connect Git repo

4. **Configure build**:
   - Build command: `npm run build`
   - Start command: `npm start`
   - Node version: 18.x or higher

5. **Deploy and verify**

---

## Environment Variables Explained

### NEXT_PUBLIC_MAPBOX_TOKEN
- **Required**: Yes
- **Purpose**: Authenticates with Mapbox API
- **Get it from**: https://account.mapbox.com/
- **Format**: `pk.ey...` (starts with pk.)
- **Security**: Public token (safe to expose in browser)

### NEXT_PUBLIC_OFFICE_LAT
- **Required**: No (has default)
- **Purpose**: Office latitude coordinate
- **Default**: 14.7502 (Proddatur)
- **Format**: Decimal number

### NEXT_PUBLIC_OFFICE_LNG
- **Required**: No (has default)
- **Purpose**: Office longitude coordinate
- **Default**: 78.5482 (Proddatur)
- **Format**: Decimal number

---

## Post-Deployment Verification

### 1. Check All Pages

Visit and verify:
- ✅ Home page: https://yoursite.com/
- ✅ Gallery: https://yoursite.com/gallery
- ✅ About: https://yoursite.com/about
- ✅ Why Us: https://yoursite.com/why-us
- ✅ Umrah Guide: https://yoursite.com/umrah-guide

### 2. Test Gallery

- [ ] Page loads
- [ ] Images display
- [ ] Filters work
- [ ] Lightbox opens
- [ ] Lightbox closes
- [ ] Responsive on mobile

### 3. Test Map

- [ ] Map loads on About page
- [ ] Shows correct location
- [ ] Marker appears
- [ ] Can zoom/pan
- [ ] Contact details correct

### 4. Test Team Section

- [ ] Team photos load
- [ ] Hover effects work
- [ ] Office photo displays
- [ ] Info is readable

### 5. Test Navigation

- [ ] All navbar links work
- [ ] Mobile menu works
- [ ] Gallery link present
- [ ] WhatsApp buttons work

### 6. Mobile Testing

Test on actual devices:
- [ ] iPhone/iOS Safari
- [ ] Android/Chrome
- [ ] Tablet
- [ ] Different screen sizes

### 7. Performance

Check with Lighthouse:
- [ ] Performance score > 80
- [ ] Accessibility score > 90
- [ ] Best Practices score > 90
- [ ] SEO score > 90

---

## Common Deployment Issues

### Issue: Map not loading

**Symptoms**: Blank space where map should be

**Solutions**:
1. Check Mapbox token is set in environment variables
2. Verify token is valid at https://account.mapbox.com/
3. Check browser console for errors
4. Ensure Mapbox CSS is loading (check Network tab)
5. Try regenerating token

### Issue: Images not showing

**Symptoms**: Broken image icons or 404 errors

**Solutions**:
1. Verify images are in `/public/images/` folders
2. Check file paths in code match actual filenames
3. Ensure images were committed to Git
4. Check image file extensions (.jpg, .png, .webp)
5. Verify images aren't too large (< 2MB each)

### Issue: Build fails

**Symptoms**: Deployment fails during build

**Solutions**:
1. Run `npm run build` locally to see errors
2. Check for TypeScript errors
3. Verify all imports are correct
4. Ensure all dependencies are in package.json
5. Check Node version (should be 18+)

### Issue: Environment variables not working

**Symptoms**: Map doesn't load, coordinates wrong

**Solutions**:
1. Verify variables are set in hosting platform
2. Check variable names are exact (case-sensitive)
3. Ensure variables start with `NEXT_PUBLIC_`
4. Redeploy after adding variables
5. Check variables are applied to correct environment

### Issue: Slow loading

**Symptoms**: Site takes long to load

**Solutions**:
1. Optimize images (compress before uploading)
2. Use WebP format for images
3. Ensure images are under 2MB each
4. Check Mapbox is loading asynchronously
5. Verify no console errors blocking render

---

## Rollback Plan

If deployment has issues:

### Quick Rollback (Vercel/Netlify)
1. Go to Deployments
2. Find previous working deployment
3. Click "Promote to Production"

### Git Rollback
```bash
git revert HEAD
git push origin main
```

### Manual Rollback
1. Remove new features temporarily
2. Deploy stable version
3. Fix issues locally
4. Redeploy when ready

---

## Monitoring

### After Deployment

**First 24 hours**:
- Check analytics for errors
- Monitor user behavior on new pages
- Watch for console errors in browser tools
- Check mobile usage patterns

**First week**:
- Gather user feedback
- Monitor page load times
- Check bounce rates on new pages
- Verify WhatsApp clicks working

**Ongoing**:
- Update gallery images regularly
- Keep team info current
- Monitor Mapbox usage (free tier limits)
- Check for broken links

---

## Maintenance

### Regular Updates

**Monthly**:
- [ ] Add new gallery images
- [ ] Update team info if changed
- [ ] Verify contact details current
- [ ] Check all links work

**Quarterly**:
- [ ] Review and optimize images
- [ ] Update dependencies (`npm update`)
- [ ] Check Lighthouse scores
- [ ] Review analytics

**Annually**:
- [ ] Refresh team photos
- [ ] Update office photos
- [ ] Review and update content
- [ ] Check Mapbox token expiry

---

## Support Resources

### Documentation
- Next.js: https://nextjs.org/docs
- Mapbox: https://docs.mapbox.com/
- Vercel: https://vercel.com/docs
- Tailwind: https://tailwindcss.com/docs

### Your Documentation
- `QUICK_START.md` - Setup guide
- `SETUP_INSTRUCTIONS.md` - Detailed instructions
- `IMPLEMENTATION_CHECKLIST.md` - Complete checklist
- `NEW_FEATURES_SUMMARY.md` - What was built

### Getting Help
1. Check browser console for errors
2. Review documentation files
3. Check hosting platform logs
4. Verify environment variables
5. Test locally first

---

## Success Metrics

Track these after deployment:

### Engagement
- Gallery page views
- Time spent on gallery
- Lightbox interactions
- About page views (team section)

### Conversions
- WhatsApp clicks from location section
- Contact form submissions
- Phone clicks
- Email clicks

### Technical
- Page load times
- Mobile vs desktop usage
- Bounce rates
- Error rates

---

## Final Checklist

Before going live:

- [ ] All content added
- [ ] All images optimized
- [ ] Environment variables set
- [ ] Build succeeds locally
- [ ] Tested on mobile
- [ ] All links work
- [ ] Contact info correct
- [ ] Map displays correctly
- [ ] No console errors
- [ ] Lighthouse scores good
- [ ] Git committed and pushed
- [ ] Deployed successfully
- [ ] Verified on live site
- [ ] Tested all features live
- [ ] Mobile tested on real devices

---

## 🚀 Ready to Deploy!

Once checklist is complete:
1. Push to Git
2. Set environment variables
3. Deploy
4. Verify
5. Monitor

**Your premium travel agency website is ready to build trust and convert visitors into pilgrims.**
