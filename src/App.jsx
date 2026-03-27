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
        <img src="/assets/LOGO A NOVO BRANCO SEM FUNDO.png" alt="" className="h-28 opacity-60" />
        <p className="font-sans text-zinc-600 text-sm tracking-widest mt-8">© 2026 ACTIVE PSY TRANCE. ALL RIGHTS RESERVED.</p>
      </footer>
    </div>
  );
};

export default App;
