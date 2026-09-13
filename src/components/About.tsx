import React from 'react';
import { MapPin, Phone, MessageCircle } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-10 sm:py-14 bg-[#fcfaf6] border-b border-stone-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs">
          <div className="max-w-2xl mx-auto text-center">
            <span className="text-xs font-semibold text-amber-800 uppercase tracking-wider bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200/60">
              Welcome
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mt-2 mb-4">
              About Shahi Tikka House
            </h2>

            <div className="space-y-3 text-stone-700 text-sm sm:text-base leading-relaxed text-justify sm:text-center">
              <p>
                <strong className="text-stone-900 font-semibold">Shahi Tikka House</strong> is a destination for authentic Pakistani tikka and BBQ-style food in Satellite Town, Rawalpindi.
              </p>
              <p>
                Conveniently located on <span className="font-medium text-stone-900">Main Commercial Market Road</span> (near Subway, opposite Askari Bank), we focus on serving freshly grilled meat, succulent kebabs, and traditional Pakistani flavors crafted to satisfy BBQ lovers across Rawalpindi.
              </p>
              <p className="text-stone-600 text-xs sm:text-sm">
                Whether you are craving sizzling chicken tikka, tender seekh kababs, or hot fresh naans, Shahi Tikka House welcomes you with genuine warmth and rich spices.
              </p>
            </div>

            {/* Quick Location Snapshot */}
            <div className="mt-6 pt-6 border-t border-stone-100 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm text-stone-700">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-stone-50 rounded-lg border border-stone-200/70 text-stone-700">
                <MapPin className="w-4 h-4 text-amber-700 shrink-0" />
                <span>Commercial Market, Satellite Town, Rawalpindi</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-stone-50 rounded-lg border border-stone-200/70 text-stone-700">
                <Phone className="w-4 h-4 text-amber-700 shrink-0" />
                <span>{RESTAURANT_INFO.phone1}</span>
              </div>
            </div>

            {/* Inquire Action */}
            <div className="mt-5 flex items-center justify-center gap-3">
              <a
                id="about-directions-link"
                href={RESTAURANT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-stone-300 hover:bg-stone-50 text-xs font-semibold text-stone-800 transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 text-amber-700" />
                <span>Find on Map</span>
              </a>
              <a
                id="about-contact-whatsapp"
                href={RESTAURANT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
