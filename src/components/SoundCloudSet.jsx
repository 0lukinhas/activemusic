import React from 'react';
import { motion } from 'framer-motion';

const SoundCloudSet = () => {
  return (
    <section id="soundcloud" className="w-full min-h-screen py-24 flex items-center justify-center border-t border-zinc-900/50 relative z-10 overflow-hidden">
      
      {/* Thematic Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-electric/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          <div className="flex items-center gap-4">
            <span className="w-12 h-[1px] bg-electric"></span>
            <p className="font-sans text-electric text-sm font-semibold tracking-widest uppercase">Set Exclusivo</p>
          </div>
          <h2 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tight leading-[0.9] text-white">
            PROG TRANCE <br/>
            <span className="text-zinc-500">EXPERIENCE</span>
          </h2>
          <p className="font-sans text-zinc-400 text-lg leading-relaxed max-w-md mt-4">
            Mergulhe na atmosfera única do Off-Beat. O set que definiu a essência do projeto ACTIVE.
          </p>

          <div className="mt-8">
            <a
              href="https://soundcloud.com/activecontato/set-2017-progtrance-freedownload"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-display text-sm tracking-widest uppercase text-white hover:text-electric transition-colors border-b border-transparent hover:border-electric pb-1"
            >
              Ouvir no SoundCloud Original
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
        </motion.div>

        {/* Player Container */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full aspect-[4/3] max-h-[450px]"
        >
          {/* Brutalist Frame / Liquid Glaze Effect */}
          <div className="absolute -inset-4 border border-zinc-800 bg-zinc-900/40 backdrop-blur-xl z-0 transform skew-y-1" />
          <div className="absolute inset-0 border border-zinc-700 bg-black z-10 p-2 shadow-2xl">
            <iframe
              width="100%"
              height="100%"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/activecontato/set-2017-progtrance-freedownload&color=%23ffd700&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
              className="w-full h-full object-cover filter contrast-125 saturate-50 hover:saturate-100 transition-all duration-700"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SoundCloudSet;
