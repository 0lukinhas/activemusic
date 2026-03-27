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
          className="w-full h-full bg-[url('/assets/hero-bg.jpg')] bg-cover bg-left md:bg-top filter-cyber-dark object-cover"
        />
        {/* CRT Scanline Overlay - Fixed for Mobile Compositing */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0)_50%,rgba(0,0,0,0.6)_50%)] bg-[length:100%_4px] pointer-events-none z-10 opacity-40" />
        {/* Gradients to blend with root background */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/80 z-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent opacity-90 z-20" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 mt-20 flex flex-col justify-center items-start">
        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-electric font-sans font-bold tracking-[0.3em] lg:tracking-[0.5em] uppercase text-sm md:text-xl lg:text-2xl mb-8 md:mb-12 ml-2 drop-shadow-[0_0_15px_rgba(255,215,0,0.6)]"
        >
          DJ / PRODUTOR BRASILEIRO
        </motion.p>
        
        {/* Massive Logo */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-full max-w-[90vw] md:max-w-4xl lg:max-w-[1000px] mb-12 flex justify-start"
        >
          <img 
            src="/assets/LOGO ACTIVE SEM FUNDO.png" 
            alt="ACTIVE Logo" 
            className="w-full h-auto object-contain object-left drop-shadow-2xl brightness-150"
          />
        </motion.div>

        {/* Glitch CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-12"
        >
          <a
            href="#soundcloud"
            data-text="OUÇA AGORA"
            className="glitch-hover inline-flex items-center justify-center px-10 py-5 bg-electric text-black font-display font-bold text-lg tracking-widest uppercase hover:bg-white transition-all transform hover:scale-[1.02] shadow-[0_0_20px_rgba(255,215,0,0.3)] hover:shadow-[0_0_30px_rgba(255,215,0,0.6)]"
          >
            OUÇA AGORA
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 z-10"
      >
        <span className="text-[10px] tracking-widest font-display text-electric uppercase">Deslize</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-electric to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
