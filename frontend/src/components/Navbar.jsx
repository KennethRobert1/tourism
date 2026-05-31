import React, { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

export default function Navbar({ isScrolled }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4 text-gray-900' : 'bg-transparent py-6 text-white'
    }`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        
        {/* Brand Identity / Logo */}
        <a href="#" className="flex items-center gap-2 font-black text-xl tracking-tight">
          <span className={isScrolled ? 'text-emerald-700' : 'text-amber-400'}>BHCHEETAH</span>
          <span className="font-light">TOURS</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 font-medium text-sm">
          <a href="#" className="hover:text-amber-500 transition-colors">Home</a>
          <button onClick={() => document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-amber-500 transition-colors">Services</button>
          <button onClick={() => document.getElementById('tours-section')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-amber-500 transition-colors">Featured Tours</button>
          
          <a 
            href="tel:+255620508340" 
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
              isScrolled ? 'bg-emerald-700 text-white hover:bg-emerald-800' : 'bg-white/20 text-white hover:bg-white/30 border border-white/20'
            }`}
          >
            <Phone className="w-3.5 h-3.5" /> Call Agent
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-1.5 rounded-lg" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Panel */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-xl py-6 px-6 text-gray-900 flex flex-col gap-4 font-semibold">
          <a href="#" onClick={() => setIsOpen(false)} className="hover:text-emerald-700">Home</a>
          <button onClick={() => { setIsOpen(false); document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-left hover:text-emerald-700">Services</button>
          <button onClick={() => { setIsOpen(false); document.getElementById('tours-section')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-left hover:text-emerald-700">Featured Tours</button>
          <a href="tel:+255620508340" className="flex items-center justify-center gap-2 w-full py-3 bg-emerald-700 text-white text-sm rounded-xl font-bold">
            <Phone className="w-4 h-4" /> Call Agent Now
          </a>
        </div>
      )}
    </nav>
  );
}