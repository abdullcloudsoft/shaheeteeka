import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, ExternalLink, Navigation } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-10 sm:py-14 bg-[#fcfaf6] border-b border-stone-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 border border-amber-200 text-amber-800 text-xs font-semibold uppercase tracking-wider mb-2">
            Get In Touch
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
            Contact & Location
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-stone-600">
            Visit us in Satellite Town, Rawalpindi or reach out for orders and inquiries.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {/* Contact Details Card */}
          <div className="bg-white rounded-2xl border border-stone-200 p-5 sm:p-6 shadow-xs flex flex-col justify-between h-full">
            <div>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-stone-900 mb-4 pb-2 border-b border-stone-100">
                Shahi Tikka House
              </h3>

              <div className="space-y-4 text-sm text-stone-700">
                {/* Address */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 border border-amber-200/60 text-amber-800 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-amber-700" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-stone-500 uppercase">Address</span>
                    <p className="font-medium text-stone-800 mt-0.5 text-xs sm:text-sm leading-relaxed">
                      {RESTAURANT_INFO.address}
                    </p>
                  </div>
                </div>

                {/* Phone Numbers */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 border border-amber-200/60 text-amber-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4 text-amber-700" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-stone-500 uppercase">Phone Numbers</span>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mt-1">
                      <a
                        id="contact-phone-1"
                        href={`tel:${RESTAURANT_INFO.phone1Clean}`}
                        className="font-semibold text-amber-800 hover:text-amber-900 transition-colors"
                      >
                        {RESTAURANT_INFO.phone1}
                      </a>
                      <span className="hidden sm:inline text-stone-300">|</span>
                      <a
                        id="contact-phone-2"
                        href={`tel:${RESTAURANT_INFO.phone2Clean}`}
                        className="font-semibold text-stone-800 hover:text-stone-900 transition-colors"
                      >
                        {RESTAURANT_INFO.phone2}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 border border-amber-200/60 text-amber-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4 text-amber-700" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-stone-500 uppercase">Email</span>
                    <a
                      id="contact-email-link"
                      href={`mailto:${RESTAURANT_INFO.email}`}
                      className="font-medium text-stone-800 hover:text-amber-800 break-all text-xs sm:text-sm transition-colors"
                    >
                      {RESTAURANT_INFO.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Compact Action Buttons Grid */}
            <div className="mt-6 pt-5 border-t border-stone-100">
              <span className="block text-[11px] font-semibold text-stone-500 uppercase tracking-wider mb-2.5">
                Quick Actions
              </span>
              <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
                <a
                  id="action-call-now"
                  href={`tel:${RESTAURANT_INFO.phone1Clean}`}
                  className="flex items-center justify-center gap-1.5 px-3 py-2.5 bg-amber-700 hover:bg-amber-800 text-white rounded-lg text-xs font-semibold shadow-2xs transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Now</span>
                </a>

                <a
                  id="action-whatsapp"
                  href={RESTAURANT_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 px-3 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-semibold shadow-2xs transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>

                <a
                  id="action-get-directions"
                  href={RESTAURANT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 px-3 py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-800 border border-stone-200 rounded-lg text-xs font-semibold transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5 text-amber-700" />
                  <span>Get Directions</span>
                </a>

                <a
                  id="action-email-us"
                  href={`mailto:${RESTAURANT_INFO.email}`}
                  className="flex items-center justify-center gap-1.5 px-3 py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-800 border border-stone-200 rounded-lg text-xs font-semibold transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-stone-700" />
                  <span>Email Us</span>
                </a>
              </div>
            </div>
          </div>

          {/* Location / Landmarks & Social Media */}
          <div className="flex flex-col gap-4">
            {/* Location Landmarks Card */}
            <div className="bg-white rounded-2xl border border-stone-200 p-5 sm:p-6 shadow-xs">
              <h4 className="font-serif text-base font-bold text-stone-900 mb-2">
                Finding Us in Satellite Town
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
                We are situated right on <strong className="text-stone-800">Main Commercial Market Road</strong>, near Subway and directly opposite Askari Bank, making it effortless to locate for both dine-in pickup and takeaway orders.
              </p>

              {/* Visual Map Anchor Card */}
              <a
                id="maps-navigation-card"
                href={RESTAURANT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-3.5 bg-amber-50/70 hover:bg-amber-100/70 border border-amber-200 rounded-xl transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-amber-600 text-white flex items-center justify-center shadow-2xs">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-stone-900 group-hover:text-amber-900">
                        Open in Google Maps
                      </span>
                      <span className="block text-[11px] text-stone-600">
                        Commercial Market Rd, Satellite Town
                      </span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-amber-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </a>
            </div>

            {/* Social Media Channels */}
            <div className="bg-white rounded-2xl border border-stone-200 p-5 sm:p-6 shadow-xs">
              <h4 className="font-serif text-base font-bold text-stone-900 mb-1">
                Follow Shahi Tikka House
              </h4>
              <p className="text-xs text-stone-500 mb-3.5">
                Stay updated with our latest offerings and visuals on official social pages.
              </p>

              <div className="grid grid-cols-2 gap-2.5">
                <a
                  id="social-facebook-link"
                  href={RESTAURANT_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl border border-stone-200 bg-[#fbf9f6] hover:bg-amber-50 hover:border-amber-300 text-stone-800 transition-colors text-xs font-semibold"
                >
                  <svg
                    className="w-4 h-4 text-[#1877F2]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  <span>Facebook</span>
                </a>

                <a
                  id="social-instagram-link"
                  href={RESTAURANT_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl border border-stone-200 bg-[#fbf9f6] hover:bg-amber-50 hover:border-amber-300 text-stone-800 transition-colors text-xs font-semibold"
                >
                  <svg
                    className="w-4 h-4 text-[#E4405F]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
