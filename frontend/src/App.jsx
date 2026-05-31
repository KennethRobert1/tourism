import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import ToursGrid from './components/ToursGrid';
import Footer from './components/Footer';

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  // 'en' for English, 'sw' for Swahili
  const [lang, setLang] = useState('en'); 

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

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'en' ? 'sw' : 'en'));
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans antialiased selection:bg-amber-500 selection:text-gray-950 scroll-smooth">
      
      {/* 1. Pass lang and toggleLanguage function to Navbar */}
      <Navbar isScrolled={scrolled} lang={lang} toggleLanguage={toggleLanguage} />
      
      <main>
        {/* 2. Pass lang to all content blocks */}
        <Hero lang={lang} />
        <Services lang={lang} />
        <ToursGrid lang={lang} />
      </main>
      
      <Footer lang={lang} />

      {/* Floating Quick Toggle Button for better UX presentation */}
      <button 
        onClick={toggleLanguage}
        className="fixed bottom-6 right-6 z-50 bg-amber-500 hover:bg-amber-400 text-gray-950 font-black text-xs tracking-wider px-4 py-3 rounded-xl shadow-lg flex items-center gap-1.5 transition-transform active:scale-95 border border-amber-600/20"
      >
        🌐 {lang === 'en' ? 'SWAHILI' : 'ENGLISH'}
      </button>
      
    </div>
  );
}