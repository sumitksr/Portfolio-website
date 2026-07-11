import { useState, useEffect } from 'react';

const InitialLoader = ({ onComplete }) => {
  const [phase, setPhase] = useState(0);
  // phase 0: fade in
  // phase 1: show content  
  // phase 2: animate out

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 400);
    const t2 = setTimeout(() => setPhase(2), 2800);
    const t3 = setTimeout(() => onComplete(), 3900);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-[1000ms] ease-out ${
        phase === 2 ? 'opacity-0 scale-110' : 'opacity-100 scale-100'
      }`}
      style={{ background: 'linear-gradient(135deg, #04020f 0%, #090520 50%, #04020f 100%)' }}
    >
      {/* Background ambient glows */}
      <div className="absolute top-1/4 left-1/3 w-64 h-64 rounded-full blur-[100px] opacity-20"
        style={{ background: 'radial-gradient(circle, #7c3aed, transparent)' }} />
      <div className="absolute bottom-1/4 right-1/3 w-56 h-56 rounded-full blur-[90px] opacity-15"
        style={{ background: 'radial-gradient(circle, #d4af37, transparent)' }} />

      {/* Twinkling stars */}
      {Array.from({ length: 30 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: Math.random() * 2 + 1 + 'px',
            height: Math.random() * 2 + 1 + 'px',
            top: Math.random() * 100 + '%',
            left: Math.random() * 100 + '%',
            background: '#c8b4ff',
            opacity: Math.random() * 0.6 + 0.2,
            animation: `twinkle ${2 + Math.random() * 3}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 3}s`,
          }}
        />
      ))}

      {/* Center content */}
      <div
        className={`relative z-10 flex flex-col items-center gap-6 transition-all duration-[900ms] ease-out ${
          phase >= 1 ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
        }`}
      >
        {/* Cosmic SK avatar */}
        <div className="relative w-24 h-24 flex items-center justify-center">
          {/* Outer orbit */}
          <div
            className="absolute w-24 h-24 rounded-full border border-[rgba(212,175,55,0.3)]"
            style={{ animation: 'orbit 8s linear infinite' }}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#d4af37]"
              style={{ boxShadow: '0 0 8px rgba(212,175,55,0.8)' }} />
          </div>
          {/* Inner orbit */}
          <div
            className="absolute w-16 h-16 rounded-full border border-[rgba(124,58,237,0.4)]"
            style={{ animation: 'orbit-reverse 5s linear infinite' }}
          >
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-[#7c3aed]"
              style={{ boxShadow: '0 0 6px rgba(124,58,237,0.8)' }} />
          </div>
          {/* Core */}
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center"
            style={{
              background: 'linear-gradient(135deg, #7c3aed, #4f46e5)',
              boxShadow: '0 0 30px rgba(124,58,237,0.5), 0 0 60px rgba(124,58,237,0.2)',
              animation: 'beacon 2s ease-out infinite',
            }}
          >
            <span className="text-white font-black font-mono text-lg">SK</span>
          </div>
        </div>

        {/* Name text */}
        <div className="text-center">
          <h1
            className="text-3xl font-black tracking-tight text-transparent bg-clip-text"
            style={{
              backgroundImage: 'linear-gradient(135deg, #a78bfa, #7c3aed, #d4af37)',
            }}
          >
            Sumit Kumar
          </h1>
          <p className="text-[#a89fd8] text-sm font-mono mt-1 tracking-widest">
            &lt; Loading Portfolio... /&gt;
          </p>
        </div>

        {/* Progress bar */}
        <div
          className="w-48 h-[2px] rounded-full overflow-hidden"
          style={{ background: 'rgba(124,58,237,0.2)' }}
        >
          <div
            className="h-full rounded-full"
            style={{
              background: 'linear-gradient(90deg, #7c3aed, #d4af37)',
              animation: 'shimmer-bar 2.4s ease-out forwards',
              width: phase >= 1 ? '100%' : '0%',
              transition: 'width 2.4s ease-out',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default InitialLoader;
