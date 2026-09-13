import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/restaurantData';
import { GalleryItem } from '../types';
import { X, ZoomIn } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [activeImage, setActiveImage] = useState<GalleryItem | null>(null);

  return (
    <section id="gallery" className="py-10 sm:py-14 bg-[#faf7f2] border-b border-stone-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 border border-amber-200 text-amber-800 text-xs font-semibold uppercase tracking-wider mb-2">
            Visual Highlights
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
            Food Gallery
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-stone-600">
            A glimpse into the authentic Pakistani BBQ and tandoori favorites we prepare.
          </p>
        </div>

        {/* Compact Grid of 6 Distinct Images */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 max-w-4xl mx-auto">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              id={`gallery-item-${item.id}`}
              className="group relative rounded-xl overflow-hidden bg-stone-200 border border-stone-200/80 aspect-4/3 cursor-pointer shadow-2xs transition-transform hover:-translate-y-0.5"
              onClick={() => setActiveImage(item)}
            >
              <img
                src={item.image}
                alt={item.title}
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-80 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity flex flex-col justify-end p-2.5 sm:p-3">
                <div className="flex items-center justify-between text-white">
                  <span className="font-semibold text-xs sm:text-sm leading-tight drop-shadow-xs">
                    {item.title}
                  </span>
                  <ZoomIn className="w-3.5 h-3.5 text-amber-300 opacity-90" />
                </div>
                <p className="text-[10px] text-stone-200 mt-0.5 line-clamp-1">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Dialog if user taps an image */}
      {activeImage && (
        <div
          id="gallery-lightbox-modal"
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4 backdrop-blur-xs animate-in fade-in duration-150"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="relative max-w-md w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              id="gallery-modal-close-btn"
              type="button"
              aria-label="Close image preview"
              onClick={() => setActiveImage(null)}
              className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="aspect-4/3 w-full bg-stone-100">
              <img
                src={activeImage.image}
                alt={activeImage.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 bg-[#faf7f2]">
              <h3 className="font-serif text-lg font-bold text-stone-900">
                {activeImage.title}
              </h3>
              <p className="text-xs text-stone-600 mt-1">
                {activeImage.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
