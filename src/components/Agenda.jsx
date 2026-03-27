import React from 'react';
import { motion } from 'framer-motion';

const Agenda = () => {
  const dates = [
    { date: "12 ABR", city: "SÃO PAULO - SP", venue: "ALLTRIBE FESTIVAL", link: "#" },
    { date: "26 ABR", city: "CURITIBA - PR", venue: "ALIEN RECORDS SHOWCASE", link: "#" },
    { date: "15 MAI", city: "BELO HORIZONTE - MG", venue: "CLUB NIGHT", link: "#" },
    { date: "02 JUN", city: "FLORIANÓPOLIS - SC", venue: "RITUAL", link: "#" },
  ];

  return (
    <section id="agenda" className="w-full py-32 bg-black relative z-10 border-t border-b border-zinc-900 overflow-hidden">
      
      {/* Background glow for contrast */}
      <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-electric/5 rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex items-center gap-4 mb-20 fade-in">
          <span className="w-16 h-[1px] bg-electric"></span>
          <h2 className="font-display font-medium tracking-[0.3em] uppercase text-zinc-500">Upcoming Dates</h2>
        </div>

        <div className="flex flex-col">
          {dates.map((item, idx) => (
            <motion.a 
              href={item.link}
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="group flex flex-col md:flex-row md:items-center justify-between py-10 lg:py-12 border-b border-zinc-900 hover:border-electric transition-colors duration-500 cursor-pointer"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-16">
                <span className="font-display font-bold text-4xl lg:text-6xl text-zinc-800 group-hover:text-electric transition-colors duration-500 w-[200px]">
                  {item.date}
                </span>
                <div className="flex flex-col">
                  <span className="font-sans font-medium text-white text-2xl lg:text-3xl group-hover:text-white transition-colors">
                    {item.city}
                  </span>
                  <span className="font-sans text-sm tracking-[0.2em] text-zinc-500 uppercase mt-2">
                    {item.venue}
                  </span>
                </div>
              </div>

              <div className="mt-8 md:mt-0 flex items-center gap-4 text-electric md:opacity-0 md:-translate-x-8 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 pr-4">
                <span className="font-display uppercase tracking-widest text-sm font-bold">TICKETS</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Agenda;
