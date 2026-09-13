import React from 'react';
import { Flame, Sparkles, Utensils, MapPin } from 'lucide-react';
import { HIGHLIGHTS } from '../data/restaurantData';

const iconMap = {
  flame: Flame,
  sparkles: Sparkles,
  utensils: Utensils,
  'map-pin': MapPin,
};

export const Highlights: React.FC = () => {
  return (
    <section id="highlights" aria-label="Restaurant Highlights" className="py-6 sm:py-8 bg-[#f5ede3] border-b border-stone-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {HIGHLIGHTS.map((item) => {
            const Icon = iconMap[item.iconName];
            return (
              <div
                key={item.id}
                id={`highlight-${item.id}`}
                className="bg-[#faf7f2] p-3.5 sm:p-4 rounded-xl border border-stone-200/90 shadow-xs flex flex-col items-start gap-2 transition-all hover:border-amber-300"
              >
                <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4 text-amber-700" />
                </div>
                <div>
                  <h2 className="text-xs sm:text-sm font-bold text-stone-900 leading-snug">
                    {item.title}
                  </h2>
                  <p className="text-[11px] sm:text-xs text-stone-600 mt-1 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
