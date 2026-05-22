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
      {/* Filter Navigation */}
      <div className="container-custom mb-8">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`label px-5 py-2 border transition-colors ${
                activeCategory === cat.id
                  ? 'bg-green text-surface border-green'
                  : 'bg-transparent text-green border-border hover:border-green'
              }`}
              style={{ borderRadius: 'var(--radius-sm)' }}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid - Editorial Layout */}
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {filteredImages.map((image, index) => {
            // Create intentional asymmetry - some images span 2 columns
            const isWide = index % 7 === 0 || index % 11 === 0;
            
            return (
              <div
                key={image.id}
                className={`relative group cursor-pointer overflow-hidden ${
                  isWide ? 'lg:col-span-2' : ''
                }`}
                style={{ 
                  borderRadius: 'var(--radius-md)',
                  aspectRatio: isWide ? '16/9' : '4/3'
                }}
                onClick={() => setSelectedImage(image)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes={isWide ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
                />
                
                {/* Subtle overlay on hover */}
                <div className="absolute inset-0 bg-green opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                
                {/* Caption if exists */}
                {image.caption && (
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-green/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <p className="text-surface text-sm">{image.caption}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {filteredImages.length === 0 && (
          <div className="text-center py-16">
            <p className="text-text-muted">No images in this category yet.</p>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-green/95 flex items-center justify-center p-4 md:p-8"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-surface text-4xl leading-none hover:text-gold transition-colors"
            onClick={() => setSelectedImage(null)}
            aria-label="Close"
          >
            ×
          </button>

          <div className="relative max-w-6xl w-full h-full flex flex-col items-center justify-center">
            <div className="relative w-full h-[80vh]">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>
            
            {selectedImage.caption && (
              <p className="text-surface text-center mt-6 max-w-2xl">
                {selectedImage.caption}
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
}
