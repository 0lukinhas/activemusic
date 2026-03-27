import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);

  return (
    <section className="relative w-full h-screen bg-black overflow-hidden flex items-center z-10">
      {/* Background Image with Parallax & Cyber Dark Filter */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0 h-[120vh]"
      >
        <motion.div 
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          style={{ backgroundImage: `url('${import.meta.env.BASE_URL}assets/hero-bg.jpg')` }}
          className="w-full h-full bg-cover bg-center md:bg-top filter-cyber-dark object-cover"
        />
        {/* CRT Scanline Overlay - Fixed for Mobile Compositing */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0)_50%,rgba(0,0,0,0.6)_50%)] bg-[length:100%_4px] pointer-events-none z-10 opacity-40" />
        {/* Gradients to blend with root background */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/80 z-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent opacity-90 z-20" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-6 flex flex-col justify-center items-center text-center">
        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-electric font-sans font-bold tracking-[0.2em] md:tracking-[0.4em] uppercase text-xs md:text-xl mb-6 relative z-50 drop-shadow-[0_0_10px_rgba(255,215,0,0.8)]"
        >
          DJ / PRODUTOR BRASILEIRO
        </motion.p>
        
        {/* Massive Logo */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-[180vw] max-w-[180vw] min-w-[180vw] md:min-w-0 md:w-full md:max-w-4xl lg:max-w-[1000px] mb-8 md:mb-12 flex justify-center"
        >
          <img 
            src={`${import.meta.env.BASE_URL}assets/LOGO ACTIVE SEM FUNDO.png`} 
            alt="ACTIVE Logo" 
            className="w-full h-auto max-h-[50vh] md:max-h-[40vh] object-contain drop-shadow-2xl brightness-150 transform scale-[1.4] md:scale-100"
          />
        </motion.div>

        {/* Glitch CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-6 md:mt-12 relative z-50"
        >
          <a
            href="#soundcloud"
            data-text="OUÇA AGORA"
            className="glitch-hover inline-flex items-center justify-center px-10 py-5 bg-electric text-black font-display font-bold text-lg tracking-widest uppercase hover:bg-white transition-all transform hover:scale-[1.02] shadow-[0_0_20px_rgba(255,215,0,0.3)] hover:shadow-[0_0_30px_rgba(255,215,0,0.6)]"
          >
            OUÇA AGORA
          </a>
        </motion.div>

        {/* Scroll Indicator Inside Stack */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-16 md:absolute md:bottom-10 flex flex-col items-center gap-2 opacity-50"
        >
          <span className="text-[10px] tracking-widest font-display text-electric uppercase">Deslize</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-electric to-transparent" />
        </motion.div>
      </div>

    </section>
  );
};

export default Hero;
