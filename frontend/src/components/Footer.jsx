import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 py-16 border-t border-gray-900">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Brand Block */}
        <div className="space-y-4">
          <h3 className="text-white font-black text-lg tracking-tight">
            BHCHEETAH <span className="font-light text-amber-400">TOURS</span>
          </h3>
          <p className="text-sm leading-relaxed max-w-xs">
            A locally-owned tourism operator based in Mbeya Town, showcasing the raw nature, wildlife, and deep histories of the Southern Highlands circuit.
          </p>
          <div className="pt-2">
            <span className="text-xs px-2.5 py-1 bg-gray-900 border border-gray-800 text-gray-400 rounded-md font-mono">
              Registered Tour Operator
            </span>
          </div>
        </div>

        {/* Contact Links Block */}
        <div className="space-y-4">
          <h4 className="text-white font-bold text-sm uppercase tracking-wider">Direct Channels</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-amber-400 shrink-0" />
              <a href="tel:+255620508340" className="hover:text-white transition-colors">+255 620 508 40</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-amber-400 shrink-0" />
              <a href="mailto:hbcheetah.toursandsafaris@gmail.com" className="hover:text-white transition-colors break-all">
                hbcheetah.toursandsafaris@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Mbeya Town, Tanzania</span>
            </li>
          </ul>
        </div>

        {/* Local Target Message Block */}
        <div className="space-y-4">
          <h4 className="text-white font-bold text-sm uppercase tracking-wider">Our Destination Focus</h4>
          <p className="text-sm leading-relaxed">
            Specialized excursions through local communities in Chunya, Sangambi, Tukuyu fields, Matema waters, and pristine national reserve borders.
          </p>
          <p className="text-xs text-gray-600 pt-2">
            &copy; {new Date().getFullYear()} Bhcheetah Tours & Safaris. Developed by your premier local digital development partner.
          </p>
        </div>

      </div>
    </footer>
  );
}