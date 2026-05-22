'use client';

import { useEffect, useRef } from 'react';

interface LocationMapProps {
  latitude?: number;
  longitude?: number;
  zoom?: number;
}

interface MapboxGL {
  accessToken: string;
  Map: new (options: Record<string, unknown>) => MapInstance;
  Marker: new (element?: HTMLElement) => MarkerInstance;
  NavigationControl: new () => object;
}

interface MapInstance {
  on: (event: string, callback: () => void) => void;
  setPaintProperty: (layer: string, property: string, value: string) => void;
  addControl: (control: object, position: string) => void;
  remove: () => void;
}

interface MarkerInstance {
  setLngLat: (coords: [number, number]) => MarkerInstance;
  addTo: (map: MapInstance) => MarkerInstance;
}

export default function LocationMap({ 
  latitude = 14.750045, // AL-INFOTECH TOURS AND TRAVELS exact location
  longitude = 78.55125,
  zoom = 16 
}: LocationMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<MapInstance | null>(null);

  useEffect(() => {
    // Only initialize if mapbox is available
    if (typeof window !== 'undefined' && (window as unknown as { mapboxgl?: MapboxGL }).mapboxgl && mapContainer.current && !map.current) {
      const mapboxgl = (window as unknown as { mapboxgl: MapboxGL }).mapboxgl;
      mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || '';

      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/light-v11',
        center: [longitude, latitude],
        zoom: zoom,
        interactive: true,
      });

      // Custom marker with brand colors
      const el = document.createElement('div');
      el.className = 'custom-marker';
      el.style.width = '40px';
      el.style.height = '40px';
      el.style.borderRadius = '50%';
      el.style.backgroundColor = '#1A3A2A';
      el.style.border = '4px solid #B8960C';
      el.style.boxShadow = '0 6px 20px rgba(26, 58, 42, 0.4)';
      el.style.cursor = 'pointer';
      el.style.transition = 'transform 0.2s ease';
      
      // Add hover effect
      el.addEventListener('mouseenter', () => {
        el.style.transform = 'scale(1.1)';
      });
      el.addEventListener('mouseleave', () => {
        el.style.transform = 'scale(1)';
      });

      new mapboxgl.Marker(el)
        .setLngLat([longitude, latitude])
        .addTo(map.current);

      // Apply custom styling after map loads
      map.current.on('load', () => {
        // Customize map colors to match design system
        if (map.current) {
          map.current.setPaintProperty('water', 'fill-color', '#E8F0EB');
          map.current.setPaintProperty('land', 'background-color', '#FDFAF5');
        }
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
    <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden rounded-2xl shadow-lg border border-border">
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
