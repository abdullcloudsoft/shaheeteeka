import React from 'react';
import { Phone, UtensilsCrossed } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const Hero: React.FC = () => {
  const handleScrollToMenu = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const menuEl = document.getElementById('menu');
    if (menuEl) {
      const navOffset = 70;
      const elementPosition = menuEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="relative w-full overflow-hidden bg-stone-900">
      {/* Container with moderate height */}
      <div className="relative w-full h-[400px] sm:h-[440px] md:h-[480px] flex items-center">
        {/* ONE Hero image only */}
        <img
          src={RESTAURANT_INFO.heroImage}
          alt="Shahi Tikka House freshly grilled authentic Pakistani tikka and seekh kababs"
          referrerPolicy="no-referrer"
          loading="eager"
          className="absolute inset-0 w-full h-full object-cover object-center brightness-90"
        />

        {/* Subtle gradient overlay purely for text contrast, no giant cards or poster blocks */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/35 sm:bg-gradient-to-r sm:from-black/80 sm:via-black/40 sm:to-transparent"
          aria-hidden="true"
        />

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <div className="max-w-xl text-left">
            {/* Location Tag */}
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-200 text-xs font-semibold mb-3 backdrop-blur-xs">
              <span>Satellite Town, Rawalpindi</span>
            </div>

            {/* Main Title */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              Shahi Tikka House
            </h1>

            {/* Tagline */}
            <p className="mt-2 sm:mt-3 text-base sm:text-lg text-stone-200 font-medium leading-snug">
              Authentic Tikka & BBQ, Full of Flavor
            </p>

            {/* Compact Action Buttons */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                id="hero-view-menu-btn"
                href="#menu"
                onClick={handleScrollToMenu}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-amber-600 hover:bg-amber-700 text-white text-sm font-semibold shadow-sm transition-colors active:scale-98"
              >
                <UtensilsCrossed className="w-4 h-4" />
                <span>View Menu</span>
              </a>

              <a
                id="hero-call-now-btn"
                href={`tel:${RESTAURANT_INFO.phone1Clean}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-white/90 hover:bg-white text-stone-900 text-sm font-semibold shadow-sm transition-colors active:scale-98 backdrop-blur-xs"
              >
                <Phone className="w-4 h-4 text-amber-700" />
                <span>Call Now</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
