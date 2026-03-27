import React from 'react';
import { motion } from 'framer-motion';

const InstagramSection = () => {
  return (
    <section id="instagram" className="w-full py-32 border-t border-zinc-900/50 bg-black relative z-10 overflow-hidden flex flex-col items-center">
      
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-electric/5 rounded-full blur-[200px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-6 text-center flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <a 
            href="https://www.instagram.com/activ.ebr/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-6"
          >
            {/* Insta Icon */}
            <div className="w-16 h-16 rounded-full border border-zinc-800 bg-zinc-900/50 flex items-center justify-center group-hover:border-electric group-hover:shadow-[0_0_20px_rgba(255,215,0,0.2)] transition-all duration-500">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-300 group-hover:text-electric transition-colors">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </div>
            
            <h2 className="font-display font-bold text-5xl md:text-7xl tracking-tighter text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-electric transition-all duration-500">
              @ACTIV.EBR
            </h2>
            <p className="font-sans text-zinc-400 tracking-widest text-sm uppercase">
              Acompanhe a tribo em tempo real
            </p>
          </a>
        </motion.div>

        {/* Emulated "Feed" Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 mt-16 max-w-5xl">
          {[
            { img: "hero-bg.jpg", delay: 0.2 },
            { img: "sobre-bg.jpg", delay: 0.4 },
            { img: "liquid-metal.png", delay: 0.6 }
          ].map((post, i) => (
            <motion.a
              key={i}
              href="https://www.instagram.com/activ.ebr/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: post.delay }}
              className="relative aspect-square w-full overflow-hidden group border border-zinc-800 filter-cyber-dark"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                style={{ backgroundImage: `url('/activemusic/assets/${post.img}')` }}
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-electric"><path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm2 14.121v-8.242l7.139 4.121L14 16.121zM9.99 16.12L2.852 12l7.139-4.121v8.24h-.001z"/></svg>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16"
        >
          <a
            href="https://www.instagram.com/activ.ebr/"
            target="_blank"
            rel="noopener noreferrer"
            className="glitch-hover inline-flex items-center justify-center px-10 py-4 border border-zinc-700 bg-zinc-900 text-white font-display font-medium tracking-widest uppercase hover:border-electric hover:bg-black transition-all"
            data-text="SEGUIR NO INSTAGRAM"
          >
            SEGUIR NO INSTAGRAM
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default InstagramSection;
