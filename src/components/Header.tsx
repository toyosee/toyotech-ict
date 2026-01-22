import React, { useState } from 'react';
import { NAV_LINKS, SITE_NAME } from '../constants/constants';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass border-b border-white/5">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Name */}
          <a href="#/" className="flex items-center space-x-3 group">
            <div className="relative w-10 h-10 flex items-center justify-center rounded-lg overflow-hidden border border-white/20 group-hover:border-toyoorange transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-toyoblue/20 to-toyoorange/10"></div>
              {/* Logo from public folder */}
              <img 
                src="/toyotech-logo.png" // Change to your actual logo filename if different
                alt={`${SITE_NAME} Logo`}
                className="w-6 h-6 object-contain relative z-10"
                onError={(e) => {
                  // Fallback to letter if logo doesn't load
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = document.createElement('span');
                  fallback.className = 'font-orbitron text-xl font-bold text-toyoorange';
                  fallback.textContent = 'T';
                  target.parentNode?.appendChild(fallback);
                }}
              />
              <div className="absolute -inset-1 bg-gradient-to-r from-toyoblue/10 to-toyoorange/10 blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div className="flex flex-col">
              <span className="font-orbitron text-lg font-bold tracking-tight text-white group-hover:text-toyoblue transition-colors">
                {'ToyotechICT'}<span className="text-toyoorange">solutions</span>
              </span>
              <span className="text-[9px] italic text-gray-400 font-light -mt-1 tracking-widest uppercase">...a step into the future</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-sm font-medium text-gray-300 hover:text-white hover:scale-105 transition-all duration-200 group/nav-link"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-toyoblue to-toyoorange group-hover/nav-link:w-full transition-all duration-300"></span>
              </a>
            ))}
            <a
              href="#/enroll"
              className="relative bg-toyoorange hover:bg-orange-600 text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-orange-600/20 transition-all hover:-translate-y-0.5 group/enroll"
            >
              <span className="relative z-10">Enroll Now</span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-toyoblue to-toyoorange opacity-0 group-hover/enroll:opacity-100 transition-opacity duration-300"></div>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-2 hover:bg-white/5 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <div className="relative w-6 h-5">
              {/* Animated hamburger icon */}
              <span className={`absolute left-0 w-6 h-0.5 bg-current transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 top-2' : 'top-0'}`}></span>
              <span className={`absolute left-0 w-6 h-0.5 bg-current top-2 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`absolute left-0 w-6 h-0.5 bg-current transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 top-2' : 'top-4'}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden glass border-t border-white/5 py-6 px-6 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col space-y-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-between text-gray-300 hover:text-white transition-colors py-3 group/mobile-link"
              >
                <span>{link.label}</span>
                <svg className="w-4 h-4 opacity-0 -translate-x-2 group-hover/mobile-link:opacity-100 group-hover/mobile-link:translate-x-0 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            ))}
            <div className="pt-4 mt-2 border-t border-white/10">
              <a
                href="#/enroll"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full bg-gradient-to-r from-toyoblue to-toyoorange text-white text-center px-6 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                Enroll Now
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;