
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const SuccessStories: React.FC = () => {
  return (
    <section className="mt-8 sm:mt-12 bg-white border-y border-neutral-100 py-16 sm:py-24" id="success">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 animate-on-scroll">
          <div>
            <h2 className="text-3xl sm:text-4xl tracking-tight font-playfair font-medium text-neutral-900">Success Stories</h2>
            <p className="mt-4 text-neutral-600 max-w-md text-sm sm:text-base">Small steps, big impact. See what's possible when humans and dogs speak the same language.</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="p-3 rounded-full border border-neutral-200 text-neutral-500 hover:border-neutral-900 hover:text-neutral-900 transition">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="p-3 rounded-full border border-neutral-200 text-neutral-500 hover:border-neutral-900 hover:text-neutral-900 transition">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[500px]">
          <div className="md:col-span-8 rounded-[2rem] overflow-hidden relative group animate-on-scroll">
            <img 
              src="https://images.unsplash.com/photo-1534361960057-19889db9621e?q=80&w=2070&auto=format&fit=crop" 
              alt="Dog high five" 
              className="w-full h-64 md:h-full object-cover transition duration-700 group-hover:scale-105" 
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
              <p className="text-white font-medium font-playfair text-xl">Luna & Tom</p>
              <p className="text-white/80 text-sm">From leash-reactive to relaxed companion.</p>
            </div>
          </div>
          <div className="md:col-span-4 flex flex-col gap-6">
            <div className="flex-1 rounded-[2rem] overflow-hidden relative group animate-on-scroll [animation-delay:100ms]">
              <img src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=800&auto=format&fit=crop&q=60" alt="Dog portrait" className="w-full h-48 md:h-full object-cover transition duration-700 group-hover:scale-105" />
            </div>
            <div className="flex-1 rounded-[2rem] overflow-hidden relative group animate-on-scroll [animation-delay:200ms]">
              <img src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=2688&auto=format&fit=crop" alt="Training session" className="w-full h-48 md:h-full object-cover transition duration-700 group-hover:scale-105" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
