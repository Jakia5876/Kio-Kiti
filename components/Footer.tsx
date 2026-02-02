
import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 bg-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16 animate-on-scroll">
          <div className="space-y-4">
            <a href="#" className="text-xl tracking-tight font-playfair font-medium flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-orange-600"></span>
              Kio&kiti
            </a>
            <p className="text-sm text-neutral-500 leading-relaxed">
              Dog training with heart and mind.<br />
              Your partner for a harmonious life together.
            </p>
          </div>
          
          <div>
            <p className="text-sm font-semibold tracking-wide text-neutral-900 mb-4">Contact</p>
            <ul className="space-y-3 text-sm text-neutral-600">
              <li className="flex items-center gap-2 hover:text-orange-600 transition cursor-pointer">
                <Mail className="w-4 h-4" />
                hello@kioandkiti.com
              </li>
              <li className="flex items-center gap-2 hover:text-orange-600 transition cursor-pointer">
                <Phone className="w-4 h-4" />
                +49 171 123 456 78
              </li>
              <li className="flex items-center gap-2 text-neutral-400">
                <MapPin className="w-4 h-4" />
                123 Bark Street, Berlin
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-wide text-neutral-900 mb-4">Legal</p>
            <ul className="space-y-3 text-sm text-neutral-600">
              <li><a href="#" className="hover:text-neutral-900 transition">Imprint</a></li>
              <li><a href="#" className="hover:text-neutral-900 transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-neutral-900 transition">Terms & Conditions</a></li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-wide text-neutral-900 mb-4">Newsletter</p>
            <div className="flex flex-col gap-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full px-4 py-2 rounded-lg bg-neutral-50 border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-400 transition" 
              />
              <button className="w-full px-4 py-2 rounded-lg bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-800 transition">Subscribe</button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-neutral-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-400">© <span>{currentYear}</span> Kio&kiti Dog Training. All rights reserved.</p>
          <div className="flex items-center gap-4">
             <a href="#" className="text-neutral-400 hover:text-neutral-900 transition"><Instagram className="w-5 h-5" /></a>
             <a href="#" className="text-neutral-400 hover:text-neutral-900 transition"><Facebook className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};
