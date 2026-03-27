import React from 'react';
import { motion } from 'framer-motion';

const Sobre = () => {
  return (
    <section id="sobre" className="w-full min-h-screen border-t border-zinc-900 bg-black flex relative overflow-hidden z-10 py-32">
      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col lg:flex-row relative items-center">
        
        {/* The vertical text bar for asymmetric brutalist look */}
        <div className="hidden lg:flex flex-col justify-end pb-12 pr-12 text-zinc-800/40 font-display font-bold uppercase tracking-[0.5em] text-2xl" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
          BRAZILIAN PRODUCER
        </div>

        {/* Image block (Left Side on Desktop) */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="w-full lg:w-[45%] relative z-10"
        >
          <div className="aspect-[3/4] w-full bg-zinc-900 relative">
             <img src={`${import.meta.env.BASE_URL}assets/sobre-bg.jpg`} alt="Active Profile" className="w-full h-full object-cover filter-cyber-dark z-10 relative" />
             {/* Decorator Box */}
             <div className="absolute -inset-4 border border-electric/30 -z-10 translate-x-4 translate-y-4"></div>
          </div>
        </motion.div>

        {/* Text Block overlapping (Right Side) */}
        <div className="w-full lg:w-[65%] mt-16 lg:mt-0 lg:-ml-12 flex flex-col justify-center relative z-20">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display font-bold text-6xl lg:text-[7rem] leading-[0.85] tracking-tighter text-white uppercase"
          >
            FUSÃO DE
            <br />
            <span className="text-electric">ENERGIAS</span>
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 lg:mt-12 bg-zinc-950/90 backdrop-blur-md p-8 lg:p-12 border border-zinc-800 max-w-2xl shadow-2xl skew-y-1 lg:skew-y-0"
          >
            <p className="font-sans text-zinc-400 text-lg lg:text-xl leading-loose">
              O projeto ACTIVE nasceu da necessidade de distorcer o óbvio e romper a barreira do Off-Beat tradicional. Com fortes influências Cyber-Futuristas e linhas de baixo magnéticas.
            </p>
            <p className="font-sans text-zinc-400 text-lg lg:text-xl leading-loose mt-6">
              Cada apresentação não é apenas um set, é uma imersão sonora focada em frequências alienígenas, construindo texturas rasgadas e kicks massivos. Uma colisão absoluta na pista de dança.
            </p>
            
            <a 
              href="https://wa.me/5511972931840"
              target="_blank"
              rel="noopener noreferrer" 
              className="mt-10 inline-flex items-center gap-3 text-white font-display uppercase tracking-widest text-sm hover:text-electric transition-colors border-b border-transparent hover:border-electric pb-1"
            >
              CIDADES & TOURS
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Sobre;
