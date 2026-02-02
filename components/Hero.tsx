
import React from 'react';
import { Play, Shield, ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-20 pb-16">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Headline Section */}
          <div className="lg:col-span-12 animate-on-scroll">
            <h1 className="text-[13vw] sm:text-[8rem] lg:text-[9.5rem] leading-[0.8] tracking-tighter text-neutral-900 font-playfair font-medium break-words">
              Trust <br className="hidden sm:block" /> <span className="text-neutral-300 italic pr-4">connects.</span>
            </h1>
          </div>

          {/* Visual & Intro */}
          <div className="lg:col-span-12 grid lg:grid-cols-12 gap-6 lg:gap-8 mt-4 sm:mt-8">
            
            {/* Main Hero Image */}
            <div className="lg:col-span-8 rounded-[2rem] overflow-hidden relative group animate-on-scroll [animation-delay:0.2s] aspect-[4/3] sm:aspect-[16/9] lg:aspect-auto lg:h-[500px]">
              <img 
                src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=2070&auto=format&fit=crop" 
                alt="Dog trainer working with dog in the park" 
                className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
              />
              
              {/* Floating Badges */}
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 flex flex-wrap gap-2">
                <span className="px-3 py-1.5 text-xs rounded-full bg-white/90 backdrop-blur text-neutral-900 font-medium border border-white/20">Positive Reinforcement</span>
                <span className="px-3 py-1.5 text-xs rounded-full bg-white/90 backdrop-blur text-neutral-900 font-medium border border-white/20">Certified</span>
              </div>

              {/* Video Trigger */}
              <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20 bg-white/10 backdrop-blur border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition duration-300 group-hover:scale-110">
                <Play className="w-6 h-6 sm:w-8 sm:h-8 ml-1 fill-current" />
              </button>
            </div>

            {/* Intro Card */}
            <div className="lg:col-span-4 rounded-[2rem] bg-white border border-neutral-200 p-6 sm:p-8 flex flex-col justify-between animate-on-scroll [animation-delay:0.3s] shadow-sm hover:shadow-md transition">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-orange-600">
                  <Shield className="w-5 h-5" />
                  <span className="text-xs font-bold uppercase tracking-widest">New: Puppy Course 2025</span>
                </div>
                <h2 className="text-2xl sm:text-3xl tracking-tight font-playfair font-medium leading-snug">The start of a life together</h2>
                <p className="text-sm leading-relaxed text-neutral-600">
                  The first few months are crucial. Learn to understand your dog's body language and build a deep bond – without pressure or force.
                </p>
              </div>
              
              <div className="mt-8 pt-8 border-t border-neutral-100">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex -space-x-3">
                    <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1517849845537-4d257902454a?w=100&auto=format&fit=crop&q=60" alt="Avatar" />
                    <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=100&auto=format&fit=crop&q=60" alt="Avatar" />
                    <div className="w-10 h-10 rounded-full border-2 border-white bg-neutral-100 flex items-center justify-center text-xs font-semibold text-neutral-600">+40</div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-neutral-400 uppercase tracking-wider font-medium">Spots available</p>
                    <p className="text-sm font-semibold">From March</p>
                  </div>
                </div>
                <button className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-neutral-900 text-white hover:bg-neutral-800 transition text-sm font-medium">
                  Register now <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
