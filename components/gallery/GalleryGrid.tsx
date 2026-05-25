'use client';

import { useState } from 'react';
import Image from 'next/image';

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: 'food' | 'umrah' | 'hajj' | 'hotels' | 'transport' | 'groups' | 'landmarks';
  caption?: string;
}

interface GalleryGridProps {
  images: GalleryImage[];
}

const categories = [
  { id: 'all', label: 'All' },
  { id: 'umrah', label: 'Umrah' },
  { id: 'hajj', label: 'Hajj' },
  { id: 'hotels', label: 'Hotels' },
  { id: 'food', label: 'Food' },
  { id: 'transport', label: 'Transport' },
  { id: 'groups', label: 'Groups' },
  { id: 'landmarks', label: 'Landmarks' },
];

export default function GalleryGrid({ images }: GalleryGridProps) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const filteredImages = activeCategory === 'all' 
    ? images 
    : images.filter(img => img.category === activeCategory);

  return (
    <>
      {/* Filter Navigation - Softer, more curated */}
      <div className="container-custom mb-12 md:mb-20">
        <div className="flex flex-wrap gap-2 md:gap-3 justify-center">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`
                px-6 py-2.5 rounded-full text-sm font-medium tracking-wide
                transition-all duration-300 ease-out
                ${activeCategory === cat.id
                  ? 'bg-green text-surface shadow-md scale-105'
                  : 'bg-surface text-text-muted border border-border hover:border-green hover:text-green hover:shadow-sm'
                }
              `}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid - Editorial rhythm with varied scales */}
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {filteredImages.map((image, index) => {
            // Create intentional asymmetry - varied column spans
            const isLarge = index % 7 === 0;
            const isMedium = index % 5 === 0 && !isLarge;
            const colSpan = isLarge ? 'md:col-span-2 lg:col-span-2' : isMedium ? 'md:col-span-2 lg:col-span-1' : '';
            const rowSpan = isLarge ? 'md:row-span-2' : '';
            
            return (
              <div
                key={image.id}
                className={`
                  relative group cursor-pointer overflow-hidden rounded-xl
                  bg-bg-section
                  ${colSpan} ${rowSpan}
                  transition-transform duration-500 hover:scale-[1.02] hover:z-10
                `}
                style={{ 
                  aspectRatio: isLarge ? '1/1' : isMedium ? '4/3' : '3/4'
                }}
                onClick={() => setSelectedImage(image)}
              >
                {/* Graceful image with fallback */}
                <div className="relative w-full h-full">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-110"
                    sizes={isLarge ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 50vw, 25vw"}
                    onError={(e) => {
                      // Graceful fallback - hide broken image, show placeholder
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                  
                  {/* Elegant placeholder overlay if image fails */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-green/5 to-gold/5">
                    <div className="text-center opacity-40">
                      <svg className="w-12 h-12 mx-auto mb-2 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <p className="text-xs text-text-muted">{image.category}</p>
                    </div>
                  </div>
                </div>
                
                {/* Subtle overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-green/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Caption on hover */}
                {image.caption && (
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-surface text-sm font-light leading-relaxed">{image.caption}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {filteredImages.length === 0 && (
          <div className="text-center py-20">
            <svg className="w-16 h-16 mx-auto mb-4 text-text-muted opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="text-text-muted font-light">No images in this category yet</p>
          </div>
        )}
      </div>

      {/* Lightbox Modal - Immersive */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-green/97 backdrop-blur-sm flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center rounded-full bg-surface/10 text-surface text-2xl hover:bg-surface/20 transition-all"
            onClick={() => setSelectedImage(null)}
            aria-label="Close"
          >
            ×
          </button>

          <div className="relative max-w-6xl w-full h-full flex flex-col items-center justify-center">
            <div className="relative w-full h-[80vh] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>
            
            {selectedImage.caption && (
              <p className="text-surface/90 text-center mt-6 max-w-2xl font-light text-lg">
                {selectedImage.caption}
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
}
