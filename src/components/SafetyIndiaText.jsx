import React from "react";
import { useState, useEffect } from "react";

const SafetyIndiaText = () => {

  const [showLine, setShowLine ] = useState(false);

  useEffect(() => {
        const timer = setTimeout(() => setShowLine(true), 2000);
        return() => clearTimeout(timer);
  }, []);
  // Generate particles around letters
  const generateParticles = (count = 20) => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 2 + Math.random() * 2,
    }));
  };

  const particles = generateParticles(30);

  // Scratch Overlay Component
  const ScratchOverlay = ({ count = 1200 }) => (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="absolute bg-white"
          style={{
            width: `${Math.random() * 2 + 1}px`,
            height: `${Math.random() * 40 + 20}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            transform: `rotate(${Math.random() * 120 - 60}deg)`,
            opacity: 0.2 + Math.random() * 0.3,
            filter: "blur(0.3px)",
          }}
        />
      ))}
    </div>
  );

  return (
    <section className="relative flex flex-col justify-center items-center min-h-screen overflow-hidden px-4 sm:px-6 md:px-10 bg-gradient-to-r from-blue-950 via-gray-950 to-red-950">

      {/* SVG Filters for distressed effect */}
      <svg className="absolute w-0 h-0">
        <defs>
          <filter id="distress-filter">
            <feTurbulence type="fractalNoise" baseFrequency="1.2" numOctaves="3" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" />
            <feMorphology operator="erode" radius="0.5" in="SourceGraphic" result="eroded" />
          </filter>
          <filter id="stranger-glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
      </svg>

      {/* Background smoke/atmosphere effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Blue smoke area */}
        <div 
          className="absolute top-0 left-0 w-1/2 h-full blur-3xl animate-pulse opacity-60" 
          style={{
            background: 'radial-gradient(circle at 30% 50%, rgba(30, 58, 138, 0.4) 0%, rgba(30, 64, 175, 0.2) 40%, transparent 70%)'
          }}
        />
        
        {/* Red smoke area */}
        <div 
          className="absolute top-0 right-0 w-1/2 h-full blur-3xl animate-pulse opacity-70" 
          style={{
            background: 'radial-gradient(circle at 70% 50%, rgba(153, 27, 27, 0.5) 0%, rgba(185, 28, 28, 0.3) 40%, transparent 70%)',
            animationDelay: '1s'
          }}
        />
      </div>

      {/* Floating particles in background */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="particle"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animation: `particle-float ${particle.duration}s ease-in-out infinite`,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}
      </div>
        <div className="inline-block">
      {/* Main Text Container */}
      <h1 className="relative z-10 font-serif text-center select-none">
        <div className="flex flex-col items-center">
          {/* "Safety" Text */}
          <div className="relative flex justify-center w-full animate-zoom">
            <span 
              className="text-[120px] md:text-[180px] lg:text-[100px] font-bold leading-none block text-white text-red-glow animate-glow-pulse text-distressed"
              style={{
                filter: 'url(#distress-filter)',
                letterSpacing: '0.05em',
              }}
            >
              Symposium
            </span>
            {/* Particles emanating from "Safety" */}
            <div className="absolute inset-0 pointer-events-none overflow-visible">
              {/* Top S - particles */}
              <div className="absolute top-0 left-[8%] w-[2px] h-4 bg-red-500 shadow-[0_0_8px_red,0_0_12px_red] animate-flicker" style={{ transform: 'rotate(45deg)', clipPath: 'polygon(0 0, 100% 0, 100% 80%, 0 100%)' }} />
              <div className="absolute top-2 left-[12%] w-[1px] h-5 bg-red-400 shadow-[0_0_6px_red,0_0_10px_red] animate-flicker" style={{ transform: 'rotate(-30deg)', animationDelay: '0.3s', clipPath: 'polygon(0 0, 100% 0, 100% 75%, 0 100%)' }} />
              
              {/* y - particles */}
              <div className="absolute top-1/2 left-[58%] w-[2px] h-6 bg-red-500 shadow-[0_0_10px_red,0_0_14px_red] animate-flicker" style={{ transform: 'rotate(60deg)', animationDelay: '0.5s', clipPath: 'polygon(0 0, 100% 0, 100% 70%, 0 100%)' }} />
              <div className="absolute top-1/2 left-[62%] w-[1.5px] h-5 bg-red-400 shadow-[0_0_8px_red,0_0_12px_red] animate-flicker" style={{ transform: 'rotate(-45deg)', animationDelay: '0.8s', clipPath: 'polygon(0 0, 100% 0, 100% 80%, 0 100%)' }} />
              
              {/* Right edge particles */}
              <div className="absolute top-1/4 right-[8%] w-[2px] h-4 bg-red-500 shadow-[0_0_8px_red,0_0_12px_red] animate-flicker" style={{ transform: 'rotate(75deg)', animationDelay: '1s', clipPath: 'polygon(0 0, 100% 0, 100% 75%, 0 100%)' }} />
              <div className="absolute top-1/2 right-[5%] w-[2px] h-6 bg-red-500 shadow-[0_0_10px_red,0_0_14px_red] animate-flicker" style={{ transform: 'rotate(-60deg)', animationDelay: '1.2s', clipPath: 'polygon(0 0, 100% 0, 100% 70%, 0 100%)' }} />
              
              {/* Additional small particles */}
              <div className="absolute top-1/4 left-[15%] w-1 h-1 bg-red-500 rounded-full shadow-[0_0_6px_red] animate-ping" style={{ animationDuration: '2s', animationDelay: '0.7s' }} />
              <div className="absolute top-2/3 left-[50%] w-1 h-1 bg-red-400 rounded-full shadow-[0_0_8px_red] animate-ping" style={{ animationDuration: '1.8s', animationDelay: '1.1s' }} />
            </div>
          </div>
                
      
        </div>
        
      </h1>
       <div
            className={`h-[3px] sm:h-1 bg-white mt-4 origin-center transition-transform duration-1000 border-red-600
              ${showLine ? "scale-x-100 delay-500 shadow-[0_0_10px_rgba(229,9,20,0.8),0_0_20px_rgba(229,9,20,0.6)]" : "scale-x-0"}
            `}
          />
</div>
     
    </section>
  );
};

export default SafetyIndiaText;
