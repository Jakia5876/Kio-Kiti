
import React from 'react';
import { Clock, Users, MapPin, Calendar, ArrowRight } from 'lucide-react';
import { TrainingService } from '../types';

const SERVICES: TrainingService[] = [
  {
    id: '1',
    title: 'Intensive Coaching',
    category: 'Private Session',
    price: '$85',
    duration: '60 Min.',
    description: 'Individual analysis and solutions for specific issues. Leash reactivity, anxiety, or hunting drive.',
    image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?q=80&w=2070&auto=format&fit=crop',
    bestseller: true,
  },
  {
    id: '2',
    title: 'Puppy School',
    category: 'Small Group',
    price: '$25',
    duration: 'Max. 6 Dogs',
    description: 'Socialization, environmental habituation and first basic signals. Fun and games in a controlled environment.',
    image: 'https://images.unsplash.com/photo-1591160690555-5debfba289f0?q=80&w=1964&auto=format&fit=crop',
  },
  {
    id: '3',
    title: 'Social Walk',
    category: 'Guided Walk',
    price: '$30',
    duration: 'Various Locations',
    description: "Together, not alone. We practice leash encounters and relaxed behavior in the presence of other dogs.",
    image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=2069&auto=format&fit=crop',
  },
  {
    id: '4',
    title: 'Recall Training',
    category: 'Specialized Course',
    price: '$180',
    duration: '6 Sessions',
    description: 'Control in high-distraction environments. A 6-week course for relaxed walks without a long leash.',
    image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=2062&auto=format&fit=crop',
  },
];

const CATEGORIES = ['All Services', 'Puppies', 'Private Training', 'Groups', 'Online'];

export const TrainingSection: React.FC = () => {
  return (
    <>
      <section className="mt-8 sm:mt-16 sticky top-16 sm:top-20 z-30 bg-neutral-50/95 backdrop-blur-sm border-b border-neutral-200 py-4" id="training">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 animate-on-scroll [animation-delay:0.1s]">
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar w-full sm:w-auto pb-2 sm:pb-0">
              {CATEGORIES.map((cat, idx) => (
                <button 
                  key={cat}
                  className={`whitespace-nowrap inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition ${
                    idx === 0 ? 'bg-neutral-900 text-white' : 'border border-neutral-200 bg-white text-neutral-600 hover:border-neutral-400 hover:text-neutral-900'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            
            <div className="hidden md:flex items-center gap-2 text-xs text-neutral-500 font-medium uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Summer schedule now available
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {SERVICES.map((service) => (
              <article key={service.id} className="group flex flex-col h-full rounded-[2rem] overflow-hidden border border-neutral-200 bg-white hover:border-neutral-300 transition-all duration-300 animate-on-scroll">
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition duration-700 group-hover:scale-105" 
                  />
                  {service.bestseller && (
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur rounded-full px-3 py-1 text-xs font-semibold tracking-wide border border-neutral-100">
                      Bestseller
                    </div>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl tracking-tight font-semibold text-neutral-900">{service.title}</h3>
                      <p className="text-xs text-neutral-500 mt-1 uppercase tracking-wider">{service.category}</p>
                    </div>
                    <p className="text-lg font-medium text-neutral-900 font-playfair">{service.price}</p>
                  </div>
                  <p className="text-sm text-neutral-600 leading-relaxed mb-6 flex-grow">
                    {service.description}
                  </p>
                  <div className="pt-4 border-t border-neutral-100 flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-1.5 text-neutral-600 text-xs font-medium">
                      {service.id === '1' && <Clock className="w-4 h-4 text-neutral-400" />}
                      {service.id === '2' && <Users className="w-4 h-4 text-neutral-400" />}
                      {service.id === '3' && <MapPin className="w-4 h-4 text-neutral-400" />}
                      {service.id === '4' && <Calendar className="w-4 h-4 text-neutral-400" />}
                      <span>{service.duration}</span>
                    </div>
                    <button className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-900 hover:text-orange-600 transition">
                      Details <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
