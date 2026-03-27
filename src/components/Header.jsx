import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-md border-b-[1px] border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="relative group flex items-center gap-2">
            {/* Invert logo so it's visible on dark bg */}
            <img 
              src="/assets/LOGO A NOVO BRANCO SEM FUNDO.png" 
              alt="ACTIVE Logo" 
              className="h-10 transition-transform duration-500 group-hover:drop-shadow-[0_0_15px_rgba(255,215,0,0.8)] group-hover:scale-105"
            />
          </a>

          <nav className="hidden md:flex items-center gap-10">
            {['SOBRE', 'SOUNDCLOUD', 'AGENDA'].map((item, idx) => (
              <a 
                key={idx} 
                href={`#${item.toLowerCase()}`}
                className="font-display font-medium text-sm tracking-[0.2em] text-zinc-400 hover:text-electric transition-colors"
              >
                {item}
              </a>
            ))}
            <a 
              href="https://wa.me/5511972931840" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative px-6 py-2 border-[1px] border-electric text-electric font-display font-bold tracking-widest text-sm hover:bg-electric hover:text-black transition-colors"
            >
              BOOKING
            </a>
            <div className="flex items-center gap-6 ml-4 border-l border-zinc-800 pl-6">
              <a href="https://www.instagram.com/activ.ebr/" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors hover:scale-110 transform">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="text-zinc-400 hover:text-white transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
              </a>
              <a href="#" className="text-zinc-400 hover:text-white transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="opacity-90"><path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm2 14.121v-8.242l7.139 4.121L14 16.121zM9.99 16.12L2.852 12l7.139-4.121v8.24h-.001z"/></svg>
              </a>
            </div>
          </nav>

          <button 
            className="md:hidden text-zinc-300 hover:text-white transition-colors"
            onClick={() => setIsOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[60] bg-black flex flex-col justify-center items-center"
          >
            <button 
              className="absolute top-6 right-6 text-zinc-300 hover:text-electric transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <X size={36} />
            </button>
            
            <nav className="flex flex-col items-center gap-12">
              {['SOBRE', 'SOUNDCLOUD', 'AGENDA'].map((item, idx) => (
                <a 
                  key={idx}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="font-display font-bold text-3xl tracking-widest text-white hover:text-electric transition-colors"
                >
                  {item}
                </a>
              ))}
              <a 
                href="https://wa.me/5511972931840"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="font-display font-bold text-3xl tracking-widest text-electric hover:text-white transition-colors"
              >
                BOOKING
              </a>
            </nav>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              className="absolute bottom-10 inset-x-0 flex justify-center pointer-events-none"
            >
              <img src="/assets/LOGO A NOVO BRANCO SEM FUNDO.png" alt="" className="h-20" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
