import React from 'react';
import { Clock, MapPin, Beer, Waves, Compass, BookOpen } from 'lucide-react';

export default function ToursGrid() {
  const tours = [
    {
      id: 1,
      title: "Chunya to Mpanga Kipengele Adventure",
      subtitle: "Our Signature Southern Highlands Day Tour",
      duration: "1 Day (8:00 AM - 6:30 PM)",
      departure: "Chunya Sangambi, Mbeya",
      priceRange: "TSH 45,000 - 70,000",
      highlights: [
        { icon: <Waves className="w-4 h-4 text-amber-500" />, text: "Swimming in pristine natural pools" },
        { icon: <Compass className="w-4 h-4 text-amber-500" />, text: "Guided waterfall trekking & viewing" },
        { icon: <BookOpen className="w-4 h-4 text-amber-500" />, text: "Historical storytelling & cultural history" },
        { icon: <Beer className="w-4 h-4 text-amber-500" />, text: "Complimentary drinks & refreshments" }
      ],
      // This is their real phone number configured into a seamless WhatsApp CTA trigger
      whatsappLink: "https://wa.me/255620508340?text=Hello%20Bhcheetah%20Tours!%20I%20am%20viewing%20your%20website%20and%20would%20like%20to%20book%20the%20Chunya%20to%20Mpanga%20Kipengele%20Adventure."
    }
  ];

  return (
    <section id="tours-section" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">
            Featured Itineraries
          </h2>
          <p className="text-gray-500 max-w-md mx-auto text-sm">
            Carefully curated excursions designed to showcase the raw natural beauty and deep histories of the Mbeya region.
          </p>
        </div>

        {/* Grid Layout Container */}
        <div className="flex justify-center">
          {tours.map((tour) => (
            <div 
              key={tour.id} 
              className="w-full max-w-md bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              
              {/* Card Header Top Accent */}
              <div className="relative h-48 bg-gradient-to-br from-emerald-800 to-teal-950 flex items-center justify-center text-white px-6 text-center">
                <div className="absolute inset-0 bg-black/20" />
                
                <div className="relative z-10">
                  <span className="bg-amber-400 text-gray-950 text-[10px] uppercase tracking-widest font-black px-2.5 py-1 rounded-full">
                    Active Package
                  </span>
                  <h3 className="text-xl font-black mt-3 leading-tight">{tour.title}</h3>
                  <p className="text-xs text-emerald-200 mt-1 font-medium">{tour.subtitle}</p>
                </div>
              </div>

              {/* Card Body Elements */}
              <div className="p-6 flex-1 flex flex-col">
                
                {/* Meta Matrix (Duration and Departure) */}
                <div className="space-y-2.5 mb-6 border-b border-gray-100 pb-5 text-xs font-medium text-gray-600">
                  <div className="flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{tour.duration}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <MapPin className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Departs: {tour.departure}</span>
                  </div>
                </div>

                {/* Ground Operations / Activities Checklist */}
                <div className="flex-1 mb-6">
                  <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-3.5">
                    Activities Included:
                  </h4>
                  <ul className="space-y-3">
                    {tour.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start gap-3 text-sm text-gray-700 font-normal">
                        <span className="mt-0.5 shrink-0 bg-amber-50 p-1 rounded-md">{highlight.icon}</span>
                        <span className="leading-snug">{highlight.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer Core Conversion Action */}
                <div className="border-t border-gray-100 pt-4 mt-auto">
                  <div className="flex items-baseline justify-between mb-4">
                    <span className="text-xs text-gray-400 font-semibold uppercase">Estimated Cost</span>
                    <span className="text-lg font-black text-gray-900">
                      {tour.priceRange} 
                    </span>
                  </div>
                  
                  <a 
                    href={tour.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl transition-colors shadow-sm active:scale-[0.98] duration-150"
                  >
                    Book This Trip via WhatsApp
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}