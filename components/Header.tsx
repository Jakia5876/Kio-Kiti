
import React, { useState } from 'react';
import { Menu, Phone, X } from 'lucide-react';
import { NavLink } from '../types';

const NAV_LINKS: NavLink[] = [
  { label: 'Philosophy', href: '#philosophy' },
  { label: 'Services', href: '#training' },
  { label: 'About Me', href: '#team' },
  { label: 'Success Stories', href: '#success' },
];

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass border-b border-neutral-200/60 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 -ml-2 rounded-full text-neutral-600 hover:bg-neutral-100 transition"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Logo */}
          <a href="#" className="text-xl sm:text-2xl tracking-tight font-playfair font-medium flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-600"></span>
            Kio&kiti
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-500">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-neutral-900 transition-colors">
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <button className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-200 bg-white text-neutral-600 hover:text-neutral-900 hover:border-neutral-300 transition text-xs font-medium tracking-wide uppercase">
              Login
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900 text-white hover:bg-neutral-800 transition text-sm font-medium shadow-lg shadow-neutral-900/10">
              <span className="hidden sm:inline">Contact</span>
              <Phone className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden border-t border-neutral-100 bg-white/95 backdrop-blur-md absolute top-full left-0 w-full p-4 space-y-4 shadow-xl animate-in slide-in-from-top-2">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="block text-lg font-playfair font-medium text-neutral-900 py-2 border-b border-neutral-50"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 flex flex-col gap-3">
             <button className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-neutral-900 text-white font-medium">
               Get in touch
             </button>
          </div>
        </div>
      )}
    </header>
  );
};
