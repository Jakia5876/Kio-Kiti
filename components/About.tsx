
import React from 'react';
import { Check } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section className="py-20 sm:py-32" id="team">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2.5rem] bg-neutral-100 overflow-hidden relative animate-on-scroll">
          <div className="grid lg:grid-cols-2">
            <div className="h-64 sm:h-[500px] lg:h-auto relative">
              <img 
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop" 
                alt="Sarah - Dog Trainer" 
                className="absolute inset-0 w-full h-full object-cover" 
              />
            </div>
            <div className="p-8 sm:p-16 lg:p-20 flex flex-col justify-center">
              <h4 className="text-3xl sm:text-5xl tracking-tight text-neutral-900 font-playfair font-medium mb-6">Hi, I'm Sarah.</h4>
              <p className="text-neutral-600 text-sm sm:text-base leading-relaxed mb-8">
                As a certified dog trainer, I help you see the world through your dog's eyes. My goal is to make you an expert on your own dog – for a relaxed daily life on six paws.
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-sm text-neutral-700">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white border border-neutral-200 shadow-sm text-green-600"><Check className="w-3.5 h-3.5" /></span>
                  Certified Canine Behavior Consultant
                </li>
                <li className="flex items-center gap-3 text-sm text-neutral-700">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white border border-neutral-200 shadow-sm text-green-600"><Check className="w-3.5 h-3.5" /></span>
                  Specialized in Anxiety & Fear
                </li>
                <li className="flex items-center gap-3 text-sm text-neutral-700">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white border border-neutral-200 shadow-sm text-green-600"><Check className="w-3.5 h-3.5" /></span>
                  Lecturer in Behavioral Biology
                </li>
              </ul>

              <div className="flex flex-wrap gap-4">
                <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-neutral-900 text-white hover:bg-neutral-800 transition text-sm font-medium">
                  Book initial consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
