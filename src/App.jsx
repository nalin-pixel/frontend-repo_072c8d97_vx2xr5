import React from 'react';
import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-violet-900">
      <Hero />
      <FeatureGrid />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
