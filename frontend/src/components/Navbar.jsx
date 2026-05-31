import React, { useState } from 'react';
import { Phone, Menu, X, Globe, Compass, Layers, PhoneCall, Home } from 'lucide-react';

import logoImg from '../assets/bhcheetah logo.png'; 

export default function Navbar({ isScrolled, lang, toggleLanguage }) {
  const [isOpen, setIsOpen] = useState(false);

  const content = {
    en: { 
      home: "Home",
      services: "Services", 
      tours: "Featured Tours", 
      call: "Call Agent",
      menuTitle: "Navigation Menu"
    },
    sw: { 
      home: "Mwanzo",
      services: "Huduma Zetu", 
      tours: "Safari Zetu", 
      call: "Piga Simu",
      menuTitle: "Miongozo ya Ukurasa"
    }
  };

  const t = content[lang];

  return (
    <>
      {/* Structural Fixed Scrolling Navbar Header Unit */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5 text-gray-900 border-b border-gray-100' 
          : 'bg-gradient-to-b from-black/70 via-black/30 to-transparent py-3 text-white'
      }`}>
        <div className="max-w-6xl mx-auto px-5 flex items-center justify-between">
          
          {/* Identity Anchor Component - Wide Rectangle Shape */}
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="flex items-center group focus:outline-none"
          >
            {/* Ultra-Wide Rectangular Card Frame (Exactly 2.5x width ratio) */}
            <div className="h-16 w-40 md:h-20 md:w-50 rounded-xl bg-white/95 p-2 shadow-sm border border-gray-100/80 flex items-center justify-center overflow-hidden transition-transform group-hover:scale-[1.02] duration-200">
              <img 
                src={logoImg} 
                alt="Bhcheetah Tours Panoramic Brand Logo" 
                className="w-full h-full object-contain object-center"
              />
            </div>
          </a>

          {/* Desktop Navigation Links (Viewport md and above) */}
          <div className="hidden md:flex items-center gap-8 font-semibold text-sm">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
              className="hover:text-amber-500 transition-colors focus:outline-none"
            >
              {t.home}
            </button>

            <button 
              onClick={() => document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' })} 
              className="hover:text-amber-500 transition-colors focus:outline-none"
            >
              {t.services}
            </button>
            
            <button 
              onClick={() => document.getElementById('tours-section')?.scrollIntoView({ behavior: 'smooth' })} 
              className="hover:text-amber-500 transition-colors focus:outline-none"
            >
              {t.tours}
            </button>
            
            <button 
              onClick={toggleLanguage} 
              className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider px-2.5 py-1.5 rounded-lg bg-gray-500/10 hover:bg-gray-500/20 transition-all focus:outline-none"
            >
              <Globe className="w-3.5 h-3.5 text-amber-500" /> {lang === 'en' ? 'SW' : 'EN'}
            </button>

            <a 
              href="tel:+255654423395" 
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 active:scale-95 shadow-sm ${
                isScrolled 
                  ? 'bg-emerald-700 text-white hover:bg-emerald-800 shadow-emerald-700/10' 
                  : 'bg-amber-500 text-gray-950 hover:bg-amber-400 shadow-amber-500/10'
              }`}
            >
              <Phone className="w-3.5 h-3.5" /> {t.call}
            </a>
          </div>

          {/* Mobile Viewport Quick Action Controls Container */}
          <div className="flex items-center gap-3 md:hidden">
            <button 
              onClick={toggleLanguage} 
              className={`text-xs font-bold uppercase px-2.5 py-1.5 rounded-lg focus:outline-none ${
                isScrolled ? 'bg-gray-100 text-gray-800' : 'bg-white/20 text-white backdrop-blur-sm'
              }`}
            >
              {lang === 'en' ? 'SW' : 'EN'}
            </button>
            
            <button 
              className={`p-2.5 rounded-xl focus:outline-none transition-colors ${
                isScrolled ? 'bg-gray-100 text-gray-900' : 'bg-white/20 text-white backdrop-blur-sm'
              }`} 
              onClick={() => setIsOpen(true)}
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>

        </div>
      </nav>

      {/* Full-Screen Premium Sliding Overlay Sheet (Mobile Drawer) */}
      <div className={`fixed inset-0 z-50 transition-all duration-300 md:hidden ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        {/* Backdrop Dismiss Layer Mask */}
        <div className="absolute inset-0 bg-gray-950/50 backdrop-blur-md" onClick={() => setIsOpen(false)} />

        {/* Interactive Drawer View Sheet */}
        <div className={`absolute top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white p-6 shadow-2xl flex flex-col justify-between transition-transform duration-300 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div>
            {/* Header Area with Close Control */}
            <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-6">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                {t.menuTitle}
              </span>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 bg-gray-50 text-gray-500 hover:text-gray-900 rounded-xl transition-colors focus:outline-none"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* High-Impact Rectangular Branding Box for Mobile Menu */}
            <div className="flex flex-col items-center justify-center p-5 mb-6 bg-gradient-to-br from-emerald-50/50 to-amber-50/30 rounded-2xl border border-gray-100 text-center">
              <div className="h-16 w-40 bg-white p-1.5 rounded-xl shadow-md border border-gray-100 flex items-center justify-center overflow-hidden mb-2">
                <img 
                  src={logoImg} 
                  alt="High-res Detailed Corporate Rectangular Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-[10px] font-semibold text-amber-600 tracking-widest uppercase">Mbeya, Tanzania</p>
            </div>

            {/* Menu Routing Node Trees */}
            <div className="flex flex-col gap-2.5">
              <button 
                onClick={() => { setIsOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="w-full flex items-center gap-3.5 px-4 py-3.5 rounded-xl text-left font-bold text-emerald-800 bg-emerald-50/60 text-sm focus:outline-none"
              >
                <Home className="w-4 h-4 text-amber-500" />
                {t.home}
              </button>
              
              <button 
                onClick={() => { setIsOpen(false); document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' }); }} 
                className="w-full flex items-center gap-3.5 px-4 py-3.5 rounded-xl text-left font-bold text-gray-700 hover:bg-gray-50 text-sm focus:outline-none"
              >
                <Layers className="w-4 h-4 text-emerald-600" />
                {t.services}
              </button>

              <button 
                onClick={() => { setIsOpen(false); document.getElementById('tours-section')?.scrollIntoView({ behavior: 'smooth' }); }} 
                className="w-full flex items-center gap-3.5 px-4 py-3.5 rounded-xl text-left font-bold text-gray-700 hover:bg-gray-50 text-sm focus:outline-none"
              >
                <Compass className="w-4 h-4 text-emerald-600" />
                {t.tours}
              </button>
            </div>
          </div>

          {/* Persistent Sticky Drawer Footer Call Action */}
          <div className="mt-auto border-t border-gray-100 pt-5">
            <a 
              href="tel:+255654423395" 
              className="flex items-center justify-center gap-2.5 w-full py-4 bg-emerald-700 hover:bg-emerald-800 text-white text-sm rounded-xl font-bold transition-all shadow-md shadow-emerald-700/10 active:scale-[0.98]"
            >
              <PhoneCall className="w-4 h-4 text-amber-400" /> {t.call} Now
            </a>
          </div>

        </div>
      </div>
    </>
  );
}