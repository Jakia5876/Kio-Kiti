
import React from 'react';
import { Heart } from 'lucide-react';

export const Philosophy: React.FC = () => {
  return (
    <section className="py-20 sm:py-32 bg-neutral-900 text-white relative overflow-hidden" id="philosophy">
      <div className="absolute top-0 right-0 p-20 opacity-10 pointer-events-none">
        <Heart className="w-[400px] h-[400px] stroke-[0.5]" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl animate-on-scroll">
          <span className="text-orange-400 font-medium tracking-wider uppercase text-xs mb-4 block">Our Philosophy</span>
          <h3 className="text-4xl sm:text-6xl tracking-tight font-playfair font-medium leading-[1.1]">
            Dog training doesn't start with the dog,<br className="hidden sm:block" /> <span className="text-neutral-500">but with the human.</span>
          </h3>
          <p className="mt-8 text-base sm:text-lg text-neutral-300 leading-relaxed font-light">
            We work strictly according to the latest scientific findings and categorically reject force and intimidation. Instead, we focus on clear communication, fair boundaries, and needs-oriented rewards.
          </p>
          
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="text-2xl font-playfair mb-1">10+</div>
              <div className="text-xs text-neutral-400">Years Experience</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="text-2xl font-playfair mb-1">500+</div>
              <div className="text-xs text-neutral-400">Happy Teams</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="text-2xl font-playfair mb-1">§11</div>
              <div className="text-xs text-neutral-400">Certified Experts</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
