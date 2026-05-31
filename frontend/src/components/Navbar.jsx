import React, { useState } from 'react';
import { Phone, Menu, X, Globe } from 'lucide-react';
import logoImg from '../assets/bhcheetah logo.png';

export default function Navbar({ isScrolled, lang, toggleLanguage }) {
  const [isOpen, setIsOpen] = useState(false);

  // Dictionary Object
  const content = {
    en: { services: "Services", tours: "Featured Tours", call: "Call Agent" },
    sw: { services: "Huduma Zetu", tours: "Safari Zetu", call: "Piga Simu" }
  };

  const t = content[lang];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4 text-gray-900' : 'bg-transparent py-6 text-white'
    }`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        
        <a href="#" className="flex items-center gap-2 font-black text-xl tracking-tight">
          <img 
            src={logoImg} 
            alt="Bhcheetah Tours Logo" 
            className="w-50 h-50 object-contain" // Tailwind rules controlling logo dimensions
          />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 font-medium text-sm">
          <button onClick={() => document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-amber-500 transition-colors">{t.services}</button>
          <button onClick={() => document.getElementById('tours-section')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-amber-500 transition-colors">{t.tours}</button>
          
          {/* Inline Language switcher indicator */}
          <button onClick={toggleLanguage} className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider opacity-80 hover:opacity-100 transition-opacity">
            <Globe className="w-3.5 h-3.5" /> {lang === 'en' ? 'SW' : 'EN'}
          </button>

          <a 
            href="tel:+255654423395" 
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
              isScrolled ? 'bg-emerald-700 text-white hover:bg-emerald-800' : 'bg-white/20 text-white hover:bg-white/30 border border-white/20'
            }`}
          >
            <Phone className="w-3.5 h-3.5" /> {t.call}
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-1.5 rounded-lg" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
    </nav>
  );
}