import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import ToursGrid from './components/ToursGrid';
import Footer from './components/Footer';

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  // Monitors page scroll to dynamically change the Navbar layout style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans antialiased selection:bg-amber-500 selection:text-gray-950 scroll-smooth">
      
      {/* Passing the scroll state down to change Navbar background from transparent to solid */}
      <Navbar isScrolled={scrolled} />
      
      <main>
        {/* The primary screen-entry visual viewport section */}
        <Hero />
        
        {/* Features the 3 core pillars (Safaris, Car Rental, Tickets) */}
        <Services />
        
        {/* Displays the explicit Mbeya tour packages with WhatsApp routing actions */}
        <ToursGrid />
      </main>
      
      {/* Features formal agency registrations, email contact nodes, and footer grids */}
      <Footer />
      
    </div>
  );
}