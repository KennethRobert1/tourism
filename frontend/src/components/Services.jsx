import React from 'react';
import { Compass, Car, Ticket } from 'lucide-react';

export default function Services() {
  const corporateServices = [
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
  ];

  return (
    <section id="services-section" className="py-20 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">Our Core Operations</h2>
          <p className="text-gray-500 max-w-lg mx-auto text-sm">Comprehensive ground transportation, travel planning, and destination management across Mbeya Region.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {corporateServices.map((srv, idx) => (
            <div key={idx} className="p-6 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-xl hover:border-transparent transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center mb-4">
                {srv.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{srv.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{srv.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}