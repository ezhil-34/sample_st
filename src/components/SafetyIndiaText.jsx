import React from "react";

const SafetyIndiaText = () => {
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

  const ScratchOverlay = ({ count = 100 }) => (
    <div className="absolute inset-0 pointer-events-none ">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="absolute bg-white/80"
          style={{
            width: `${Math.random() * 2 + 1}px`,
            height: `${Math.random() * 40 + 20}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            transform: `rotate(${Math.random() * 120 - 60}deg)`,
            opacity: 0.25 + Math.random() * 0.35,
            filter: "blur(0.3px)",
          }}
        />
      ))}
    </div>
  );

  return (
    <div className="relative min-h-screen w-full  flex items-center justify-center bg-gradient-to-r from-blue-950 via-gray-950 to-red-950">
      {/* SVG Filters */}
      <svg className="absolute w-0 h-0">
        <defs>
          <filter id="distress-filter">
            <feTurbulence type="fractalNoise" baseFrequency="1.2" numOctaves="3" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" />
            <feMorphology operator="erode" radius="0.5" />
          </filter>
        </defs>
      </svg>

      {/* Smoke Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-0 w-1/2 h-full blur-3xl animate-pulse opacity-60"
          style={{
            background:
              "radial-gradient(circle at 30% 50%, rgba(30,58,138,0.4) 0%, rgba(30,64,175,0.2) 40%, transparent 70%)",
          }}
        />
        <div
          className="absolute top-0 right-0 w-1/2 h-full blur-3xl animate-pulse opacity-70"
          style={{
            background:
              "radial-gradient(circle at 70% 50%, rgba(153,27,27,0.5) 0%, rgba(185,28,28,0.3) 40%, transparent 70%)",
            animationDelay: "1s",
          }}
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((p) => (
          <div
            key={p.id}
            className="particle"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              animation: `particle-float ${p.duration}s ease-in-out infinite`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>

      {/* MAIN TEXT */}
      <h1 className="relative z-10 font-serif text-center select-none">
        <div className="flex flex-col items-center">

          {/* SAFETY */}
          <div className="relative">
            <span
              className="text-[120px] md:text-[180px] lg:text-[220px] font-bold leading-none block text-white text-red-glow animate-glow-pulse"
              style={{
                filter: "url(#distress-filter)",
                letterSpacing: "0.05em",
              }}
            >
              Safety
            </span>
            <ScratchOverlay count={20} />
          </div>

          {/* INDIA */}
          <div className="relative -mt-4">
            <span
              className="text-[120px] md:text-[180px] lg:text-[220px] font-bold leading-none block text-white text-red-glow animate-glow-pulse"
              style={{
                filter: "url(#distress-filter)",
                letterSpacing: "0.05em",
              }}
            >
              India
            </span>
            <ScratchOverlay count={20} />
          </div>

        </div>
      </h1>
    </div>
  );
};

export default SafetyIndiaText;
