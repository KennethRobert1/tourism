import React from 'react';

export default function Hero({ lang }) {
  const content = {
    en: {
      badge: "Explore Tanzania's Southern Circuit",
      title: "Discover Mbeya With",
      desc: "From swimming in natural pools at Mpanga Kipengele to rugged 4x4 car rentals and smooth regional ticketing, we organize seamless travel logistics across the Southern Highlands.",
      cta1: "Explore Our Packages",
      cta2: "Chat with an Agent"
    },
    sw: {
      badge: "Utalii Nyanda za Juu Kusini",
      title: "Ijue Mbeya Kupitia",
      desc: "Kuanzia kuogelea kwenye mabwawa ya asili ya Mpanga Kipengele, kukodisha magari imara ya safari (4x4), hadi uratibu wa tiketi za usafiri—tunarahisisha safari zako zote za Nyanda za Juu Kusini.",
      cta1: "Angalia Vifurushi Vyetu",
      cta2: "Chat nasi WhatsApp"
    }
  };

  const t = content[lang];

  return (
    <section className="relative h-[85vh] flex items-center justify-center bg-gray-950 overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60 scale-105" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&q=80&w=1200')` }} />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/40 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white mt-12">
        <span className="inline-block px-3.5 py-1.5 mb-4 text-xs font-bold tracking-widest uppercase bg-amber-500 text-gray-950 rounded-full">{t.badge}</span>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-tight">{t.title} <br /><span className="text-amber-400">Bhcheetah Tours</span></h1>
        <p className="max-w-2xl mx-auto text-base md:text-lg text-gray-200 mb-8 font-light leading-relaxed">{t.desc}</p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button onClick={() => document.getElementById('tours-section')?.scrollIntoView({ behavior: 'smooth' })} className="w-full sm:w-auto px-8 py-3.5 bg-amber-500 hover:bg-amber-400 text-gray-950 font-bold rounded-xl transition-all duration-200 shadow-md">{t.cta1}</button>
          <a href="https://wa.me/255620508340" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white font-medium rounded-xl border border-white/20 backdrop-blur-sm text-center">{t.cta2}</a>
        </div>
      </div>
    </section>
  );
}