import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const Footer: React.FC = () => {
  return (
    <footer id="main-footer" className="bg-[#f5ede3] border-t border-stone-200/90 py-8 text-stone-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          {/* Brand & Address */}
          <div>
            <h4 className="font-serif font-bold text-base sm:text-lg text-stone-900">
              {RESTAURANT_INFO.name}
            </h4>
            <p className="text-xs sm:text-sm text-stone-600 mt-0.5">
              Main Commercial Market Road, Satellite Town, Rawalpindi
            </p>
          </div>

          {/* Contact and Social Links */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-xs">
            <div className="flex items-center gap-3">
              <a
                id="footer-phone-1"
                href={`tel:${RESTAURANT_INFO.phone1Clean}`}
                className="font-semibold text-amber-800 hover:text-amber-900 transition-colors"
              >
                {RESTAURANT_INFO.phone1}
              </a>
              <span className="text-stone-300">|</span>
              <a
                id="footer-phone-2"
                href={`tel:${RESTAURANT_INFO.phone2Clean}`}
                className="font-semibold text-stone-700 hover:text-stone-900 transition-colors"
              >
                {RESTAURANT_INFO.phone2}
              </a>
            </div>

            <div className="flex items-center gap-4">
              <a
                id="footer-facebook-link"
                href={RESTAURANT_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-800 transition-colors font-medium"
              >
                Facebook
              </a>
              <a
                id="footer-instagram-link"
                href={RESTAURANT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-800 transition-colors font-medium"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-stone-200/60 text-center text-[11px] text-stone-500">
          <p>© {new Date().getFullYear()} Shahi Tikka House. Satellite Town, Rawalpindi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
