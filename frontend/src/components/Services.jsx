import React from 'react';
import { Compass, Car, Ticket } from 'lucide-react';

export default function Services({ lang }) {
  // 1. Static structural headers switching by language state
  const headers = {
    en: {
      title: "Our Core Operations",
      sub: "Comprehensive ground transportation, travel planning, and destination management across Mbeya Region."
    },
    sw: {
      title: "Huduma Zetu Kuu",
      sub: "Usimamizi kamili wa usafirishaji, mipango ya safari, na miongozo ya utalii ndani ya Mkoa wa Mbeya."
    }
  };

  // 2. Transformed operational arrays based on current language
  const corporateServices = {
    en: [
      {
        icon: <Compass className="w-6 h-6 text-emerald-600" />,
        title: "Custom Safaris & Day Trips",
        desc: "Tailored guided expeditions into hidden landmarks like Mpanga Kipengele, Chunya, Kitulo National Park, and Mount Rungwe fields."
      },
      {
        icon: <Car className="w-6 h-6 text-emerald-600" />,
        title: "Rugged 4x4 Vehicle Rental",
        desc: "Heavy-duty safari cruisers and commercial coaches specifically engineered to conquer high-altitude mountain terrain and remote gravel tracks safely."
      },
      {
        icon: <Ticket className="w-6 h-6 text-emerald-600" />,
        title: "Logistics & Ticket Agency",
        desc: "Airport transit connections from Songwe Airport, regional line coach booking management, and trusted local hotel reservation partnerships."
      }
    ],
    sw: [
      {
        icon: <Compass className="w-6 h-6 text-emerald-600" />,
        title: "Safari za Kupanga & Siku Moja",
        desc: "Safari zilizoandaliwa vizuri kuelekea maeneo ya kipekee kama Mpanga Kipengele, Chunya, Hifadhi ya Kitulo, na milima ya Rungwe."
      },
      {
        icon: <Car className="w-6 h-6 text-emerald-600" />,
        title: "Kukodisha Magari ya Safari (4x4)",
        desc: "Magari imara ya safari na mabasi madogo yaliyofanyiwa matengenezo maalum kwa ajili ya kuhimili barabara za milimani na vijijini mkoani Mbeya."
      },
      {
        icon: <Ticket className="w-6 h-6 text-emerald-600" />,
        title: "Uratibu wa Safari & Tiketi",
        desc: "Huduma za usafiri kutoka Uwanja wa Ndege wa Songwe, kukata tiketi za mabasi na ndege, pamoja na ushirika wa hoteli salama za kulala."
      }
    ]
  };

  const h = headers[lang];
  const servicesList = corporateServices[lang];

  return (
    <section id="services-section" className="py-20 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">
            {h.title}
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto text-sm leading-relaxed">
            {h.sub}
          </p>
        </div>

        {/* 3-Column Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesList.map((srv, idx) => (
            <div 
              key={idx} 
              className="p-6 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-xl hover:border-transparent transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Icon Wrapper Accent */}
                <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center mb-4">
                  {srv.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {srv.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {srv.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}