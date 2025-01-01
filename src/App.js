import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import RoutesSection from './components/RoutesSection';
import AdvantagesSection from './components/AdvantagesSection';
import BookingSection from './components/BookingSection';  
import ConsentBanner from './components/ConsentBanner';

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <RoutesSection />
      <AdvantagesSection />
      <BookingSection /> 
      <ConsentBanner />
    </>
  );
};

export default App;
