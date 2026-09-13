import React from 'react';
import { Phone, MessageCircle, AlertCircle } from 'lucide-react';
import { MENU_ITEMS, RESTAURANT_INFO } from '../data/restaurantData';

export const Menu: React.FC = () => {
  return (
    <section id="menu" className="py-10 sm:py-14 bg-[#faf7f2] border-b border-stone-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 border border-amber-200 text-amber-800 text-xs font-semibold uppercase tracking-wider mb-2">
            Selected Highlights
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
            Our Menu
          </h2>
          <p className="mt-1.5 text-xs sm:text-sm text-stone-600">
            Authentic Pakistani BBQ, freshly grilled tikkas, and specialty karahi dishes.
          </p>

          {/* Verification Disclaimer as explicitly required */}
          <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-100/90 border border-stone-200 text-[11px] sm:text-xs text-stone-600">
            <AlertCircle className="w-3.5 h-3.5 text-amber-700 shrink-0" />
            <span>Note: Suggested menu items only unless verified directly from the restaurant.</span>
          </div>
        </div>

        {/* Compact Menu Grid (8 items maximum) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 max-w-4xl mx-auto">
          {MENU_ITEMS.map((item) => (
            <div
              key={item.id}
              id={`menu-item-${item.id}`}
              className="bg-white rounded-xl border border-stone-200/90 p-3 flex items-center gap-3.5 shadow-2xs hover:border-amber-300 transition-colors"
            >
              {/* Small Food Image thumbnail */}
              <div className="relative w-18 h-18 sm:w-20 sm:h-20 shrink-0 rounded-lg overflow-hidden bg-stone-100 border border-stone-100">
                <img
                  src={item.image}
                  alt={item.name}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Item Info */}
              <div className="flex-1 min-w-0 pr-1">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-semibold text-stone-900 text-sm sm:text-base leading-snug truncate">
                    {item.name}
                  </h3>
                  <span className="shrink-0 text-[11px] font-medium text-amber-900 bg-amber-50 border border-amber-200/80 px-2 py-0.5 rounded-full">
                    {item.priceNote}
                  </span>
                </div>
                <p className="text-xs text-stone-600 mt-1 line-clamp-1">
                  {item.description}
                </p>
                <div className="mt-2 flex items-center gap-3">
                  <a
                    href={`tel:${RESTAURANT_INFO.phone1Clean}`}
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-800 hover:text-amber-900"
                  >
                    <Phone className="w-3 h-3 text-amber-700" />
                    <span>Order by Call</span>
                  </a>
                  <span className="text-stone-300">|</span>
                  <a
                    href={`${RESTAURANT_INFO.whatsappUrl}?text=${encodeURIComponent(`Hello Shahi Tikka House, I would like to inquire about ${item.name}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 hover:text-emerald-800"
                  >
                    <MessageCircle className="w-3 h-3 text-emerald-600" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Order Note at bottom of menu */}
        <div className="mt-8 text-center">
          <p className="text-xs text-stone-500 mb-3">
            Ready to order? Call us or contact via WhatsApp for quick takeaway & inquiry.
          </p>
          <div className="flex items-center justify-center gap-3">
            <a
              id="menu-call-now-action"
              href={`tel:${RESTAURANT_INFO.phone1Clean}`}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-amber-700 hover:bg-amber-800 text-white text-xs sm:text-sm font-semibold shadow-2xs transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call: {RESTAURANT_INFO.phone1}</span>
            </a>
            <a
              id="menu-whatsapp-action"
              href={RESTAURANT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold shadow-2xs transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
