'use client';

import { useEffect, useRef } from 'react';

interface LocationMapProps {
  latitude?: number;
  longitude?: number;
  zoom?: number;
}

export default function LocationMap({ 
  latitude = 14.7502, // Proddatur coordinates
  longitude = 78.5482,
  zoom = 15 
}: LocationMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<any>(null);

  useEffect(() => {
    // Only initialize if mapbox is available
    if (typeof window !== 'undefined' && (window as any).mapboxgl && mapContainer.current && !map.current) {
      const mapboxgl = (window as any).mapboxgl;
      mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || '';

      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/light-v11',
        center: [longitude, latitude],
        zoom: zoom,
        interactive: true,
      });

      // Custom marker
      const el = document.createElement('div');
      el.className = 'custom-marker';
      el.style.width = '32px';
      el.style.height = '32px';
      el.style.borderRadius = '50%';
      el.style.backgroundColor = '#1A3A2A';
      el.style.border = '3px solid #B8960C';
      el.style.boxShadow = '0 4px 12px rgba(26, 58, 42, 0.3)';

      new mapboxgl.Marker(el)
        .setLngLat([longitude, latitude])
        .addTo(map.current);

      // Apply custom styling after map loads
      map.current.on('load', () => {
        // Customize map colors to match design system
        map.current.setPaintProperty('water', 'fill-color', '#E8F0EB');
        map.current.setPaintProperty('land', 'background-color', '#FDFAF5');
      });

      // Add navigation controls
      map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');
    }

    return () => {
      if (map.current) {
        map.current.remove();
      }
    };
  }, [latitude, longitude, zoom]);

  return (
    <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden" style={{ borderRadius: 'var(--radius-md)' }}>
      <div ref={mapContainer} className="w-full h-full" />
      
      {/* Fallback if Mapbox not loaded - show static map link */}
      <noscript>
        <div className="absolute inset-0 flex items-center justify-center bg-bg-section">
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            View on Google Maps
          </a>
        </div>
      </noscript>
    </div>
  );
}
