
import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrainingSection } from './components/TrainingSection';
import { SuccessStories } from './components/SuccessStories';
import { Philosophy } from './components/Philosophy';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { useIntersectionObserver } from './hooks/useIntersectionObserver';

const App: React.FC = () => {
  // Initialize scroll-driven animations
  useIntersectionObserver();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <TrainingSection />
        <SuccessStories />
        <Philosophy />
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default App;
