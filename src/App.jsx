import React from 'react';
import LiquidMetalBg from './components/LiquidMetalBg';
import Header from './components/Header';
import Hero from './components/Hero';
import Sobre from './components/Sobre';
import SoundCloudSet from './components/SoundCloudSet';
import InstagramSection from './components/InstagramSection';
import Agenda from './components/Agenda';

const App = () => {
  return (
    <div className="relative min-h-screen">
      <LiquidMetalBg />
      <Header />
      
      <main>
        {/* 1. HERO */}
        <Hero />
        {/* 2. SOBRE */}
        <Sobre />
        
        {/* 3. SOUNDCLOUD */}
        <SoundCloudSet />
        
        {/* 4. INSTAGRAM */}
        <InstagramSection />
        
        {/* 5. AGENDA */}
        <Agenda />
      </main>
      
      <footer className="w-full py-24 border-t border-zinc-900 bg-black flex flex-col items-center justify-center gap-10 relative z-10">
        <img src={`${import.meta.env.BASE_URL}assets/LOGO A NOVO BRANCO SEM FUNDO.png`} alt="" className="h-28 opacity-60 hover:opacity-100 transition-opacity" />
        <div className="flex items-center gap-6">
          <a href="mailto:umprlucas@gmail.com" className="text-zinc-500 hover:text-electric transition-colors hover:scale-110 transform">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
          </a>
          <a href="https://www.instagram.com/activ.ebr/" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-electric transition-colors hover:scale-110 transform">
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </a>
        </div>
        <p className="font-sans text-zinc-600 text-sm tracking-widest mt-4 text-center px-6">© 2026 ACTIVE PSY TRANCE. ALL RIGHTS RESERVED.</p>
      </footer>
    </div>
  );
};

export default App;
