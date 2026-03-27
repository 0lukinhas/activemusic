import React from 'react';

const LiquidMetalBg = () => {
  return (
    <div className="fixed inset-0 w-full h-full z-[-2] pointer-events-none overflow-hidden bg-black">
      {/* Fallback pattern for deeper texture */}
      <div className="absolute inset-0 bg-[url('/assets/liquid-metal.png')] bg-cover bg-center opacity-10 mix-blend-color-dodge animate-subtle-float"></div>
      
      {/* High-def logo video as a kinetic background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-20 filter contrast-125 grayscale mix-blend-screen"
      >
        <source src="/assets/logo-video.mp4" type="video/mp4" />
      </video>

      {/* Vignette mask to keep edges dark and text legible */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-80" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-60" />
    </div>
  );
};

export default LiquidMetalBg;
