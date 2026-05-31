import React from 'react';
import { Clock, MapPin, Beer, Waves, Compass, BookOpen } from 'lucide-react';

export default function ToursGrid({ lang }) {
  // 1. Static structural labels switching by language state
  const labels = {
    en: { 
      heading: "Featured Itineraries", 
      sub: "Carefully curated excursions across Mbeya.", 
      include: "Activities Included:", 
      cost: "Estimated Cost", 
      btn: "Book This Trip via WhatsApp" 
    },
    sw: { 
      heading: "Vifurushi Vinavyovuma", 
      sub: "Ratiba zilizopangwa vizuri kukuonyesha uzuri wa Mbeya.", 
      include: "Shughuli Zitakazofanyika:", 
      cost: "Kadirio la Bei", 
      btn: "Weka Booking Kupitia WhatsApp" 
    }
  };

  // 2. Specific package data switching based on selection
  const toursData = {
    en: {
      title: "Chunya to Mpanga Kipengele Adventure",
      subtitle: "Our Signature Southern Highlands Day Tour",
      duration: "1 Day (8:00 AM - 6:30 PM)",
      departure: "Chunya Sangambi, Mbeya",
      highlights: [
        "Swimming in pristine natural pools", 
        "Guided waterfall trekking & viewing", 
        "Historical storytelling & cultural history", 
        "Complimentary drinks & refreshments"
      ],
      wa: "https://wa.me/255654423395?text=Hello%20Bhcheetah%20Tours!%20I%20am%20viewing%2520your%20website%20and%20would%20like%20to%20book%20the%20Chunya%20to%20Mpanga%20Kipengele%20Adventure."
    },
    sw: {
      title: "Safari ya Chunya Kwenda Mpanga Kipengele",
      subtitle: "Safari Yetu Maarufu ya Siku Moja",
      duration: "Siku 1 (Saa 2:00 Asubuhi - Saa 12:30 Jioni)",
      departure: "Chunya Sangambi, Mbeya",
      highlights: [
        "Kuogelea kwenye mabwawa ya asili (natural pools)", 
        "Kutembea na kutazama maporomoko ya maji", 
        "Masimulizi ya kihistoria na maadili ya utamaduni", 
        "Vinywaji na viburudisho vya njiani bure"
      ],
      wa: "https://wa.me/255654423395?text=Habari%20Bhcheetah%20Tours!%20Nimeona%20website%20yenu%20na%20ningependa%20kuweka%20booking%20kwa%20ajili%20ya%20safari%20ya%20Chunya%20kwenda%20Mpanga%20Kipengele."
    }
  };

  const l = labels[lang];
  const tour = toursData[lang];

  return (
    <section id="tours-section" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Component Header Elements */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">{l.heading}</h2>
          <p className="text-gray-500 max-w-md mx-auto text-sm">{l.sub}</p>
        </div>

        {/* Itinerary Showcase Card */}
        <div className="flex justify-center">
          <div className="w-full max-w-md bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col">
            
            {/* Visual Header Node with Dynamic Background Image */}
            <div 
              className="relative h-56 bg-cover bg-center flex items-center justify-center text-white px-6 text-center"
              style={{ 
                backgroundImage: `url('https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=800')` 
              }}
            >
              {/* Dark linear overlay gradient to ensure clean text contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/50 to-gray-900/30" />
              
              <div className="relative z-10">
                <span className="bg-amber-400 text-gray-950 text-[10px] uppercase tracking-widest font-black px-2.5 py-1 rounded-full">
                  {lang === 'en' ? 'Active Package' : 'Kifurushi Kipo Wazi'}
                </span>
                <h3 className="text-xl font-black mt-3 leading-tight drop-shadow-md">{tour.title}</h3>
                <p className="text-xs text-emerald-300 mt-1 font-semibold drop-shadow-sm">{tour.subtitle}</p>
              </div>
            </div>

            {/* Content Specifications Grid */}
            <div className="p-6 flex-1 flex flex-col">
              
              {/* Trip Metadata Checkpoints */}
              <div className="space-y-2.5 mb-6 border-b border-gray-100 pb-5 text-xs font-medium text-gray-600">
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{tour.duration}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{tour.departure}</span>
                </div>
              </div>

              {/* Dynamic Activities Mapping */}
              <div className="flex-1 mb-6">
                <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-3.5">{l.include}</h4>
                <ul className="space-y-3">
                  {tour.highlights.map((hl, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-gray-700 font-normal">
                      <span className="mt-0.5 shrink-0 bg-amber-50 p-1 rounded-md">
                        {index === 0 && <Waves className="w-4 h-4 text-amber-500" />}
                        {index === 1 && <Compass className="w-4 h-4 text-amber-500" />}
                        {index === 2 && <BookOpen className="w-4 h-4 text-amber-500" />}
                        {index === 3 && <Beer className="w-4 h-4 text-amber-500" />}
                      </span>
                      <span className="leading-snug">{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Package Rates & Interactive Direct Action Link */}
              <div className="border-t border-gray-100 pt-4 mt-auto">
                <div className="flex items-baseline justify-between mb-4">
                  <span className="text-xs text-gray-400 font-semibold uppercase">{l.cost}</span>
                  <span className="text-lg font-black text-gray-900">
                    TSH 45,000 - 70,000 <span className="text-xs text-gray-400 font-normal">{lang === 'en' ? '/Person' : '/Mtu'}</span>
                  </span>
                </div>
                <a 
                  href={tour.wa} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block w-full text-center py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl transition-colors shadow-sm active:scale-[0.98] duration-150"
                >
                  {l.btn}
                </a>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}