# Gallery Images

Organize your images in the following folders:

## Folder Structure

```
gallery/
├── food/           - Meals and dining during trips
├── umrah/          - Umrah pilgrimage moments, rituals, groups
├── hajj/           - Hajj pilgrimage photos
├── hotels/         - Hotel rooms, facilities, accommodations
├── transport/      - Buses, flights, vehicles
├── groups/         - Group photos, social proof
└── landmarks/      - Kaaba, Masjid al-Nabawi, Kashmir scenery
```

## Image Guidelines

- **Format**: JPG or WebP preferred
- **Size**: Optimize images before uploading (max 2MB per image)
- **Dimensions**: Minimum 1200px width for best quality
- **Naming**: Use descriptive names (e.g., `hotel-room-makkah-1.jpg`)

## Adding Images

1. Place images in the appropriate category folder
2. Update the `galleryImages` array in `/app/gallery/page.tsx`
3. Add proper alt text and captions for accessibility

Example:
```typescript
{
  id: 'unique-id',
  src: '/images/gallery/umrah/group-at-kaaba.jpg',
  alt: 'Pilgrims performing Tawaf at Kaaba',
  category: 'umrah',
  caption: 'Our group during Tawaf at Masjid al-Haram'
}
```
