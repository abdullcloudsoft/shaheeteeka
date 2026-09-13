import React, { useState, useEffect } from 'react';
import { Phone, Menu as MenuIcon, X } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'About', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const navOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        isScrolled
          ? 'bg-[#faf7f2]/95 backdrop-blur-md shadow-xs border-b border-stone-200/80'
          : 'bg-[#faf7f2] border-b border-stone-200/60'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo / Brand Name */}
        <a
          id="navbar-brand-logo"
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center gap-2 group"
        >
          <div className="w-8 h-8 rounded-full bg-amber-700 text-amber-50 flex items-center justify-center font-serif font-bold text-base shadow-xs group-hover:bg-amber-800 transition-colors">
            S
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-lg sm:text-xl text-stone-900 leading-tight tracking-tight">
              Shahi Tikka House
            </span>
            <span className="text-[10px] sm:text-xs text-amber-800 font-medium tracking-wide">
              Satellite Town, Rawalpindi
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav id="desktop-navigation" aria-label="Main Navigation" className="hidden md:flex items-center gap-6 text-sm font-medium text-stone-700">
          {navLinks.map((link) => (
            <a
              key={link.name}
              id={`nav-link-${link.name.toLowerCase()}`}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="hover:text-amber-800 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-amber-700 hover:after:w-full after:transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Actions (Call Now & Mobile Menu Toggle) */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            id="nav-call-btn"
            href={`tel:${RESTAURANT_INFO.phone1Clean}`}
            className="inline-flex items-center gap-1.5 px-3 py-2 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold text-white bg-amber-700 hover:bg-amber-800 rounded-lg shadow-xs transition-colors active:scale-98 whitespace-nowrap"
          >
            <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-100" />
            <span>Call Now</span>
          </a>

          {/* Mobile hamburger button */}
          <button
            id="mobile-menu-toggle-btn"
            type="button"
            aria-label="Toggle navigation menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-stone-700 hover:text-stone-900 hover:bg-stone-200/50 transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <MenuIcon className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="md:hidden border-t border-stone-200 bg-[#faf7f2] px-4 pt-3 pb-5 shadow-lg animate-in slide-in-from-top-2 duration-150"
        >
          <nav aria-label="Mobile Navigation" className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                id={`mobile-nav-${link.name.toLowerCase()}`}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2.5 rounded-md text-stone-800 font-medium hover:bg-amber-100/60 hover:text-amber-900 transition-colors text-base"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="mt-3 pt-3 border-t border-stone-200/80 flex flex-col gap-2 text-xs text-stone-600">
            <p className="px-3 text-stone-500 font-medium">Quick Orders & Inquiries:</p>
            <div className="grid grid-cols-2 gap-2">
              <a
                id="mobile-drawer-call-1"
                href={`tel:${RESTAURANT_INFO.phone1Clean}`}
                className="flex items-center justify-center gap-1.5 py-2 px-2 bg-stone-100 border border-stone-300/80 rounded-md font-semibold text-stone-800"
              >
                <Phone className="w-3.5 h-3.5 text-amber-700" />
                <span>0300 0341022</span>
              </a>
              <a
                id="mobile-drawer-call-2"
                href={`tel:${RESTAURANT_INFO.phone2Clean}`}
                className="flex items-center justify-center gap-1.5 py-2 px-2 bg-stone-100 border border-stone-300/80 rounded-md font-semibold text-stone-800"
              >
                <Phone className="w-3.5 h-3.5 text-amber-700" />
                <span>0326 5348743</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
