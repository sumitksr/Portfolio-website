import { useState, useEffect } from 'react';

const InitialLoader = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isTextSharp, setIsTextSharp] = useState(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  useEffect(() => {
    // Start text animation after a brief delay
    const textTimer = setTimeout(() => {
      setIsTextSharp(true);
    }, 600);

    // Start the exit animation after 3 seconds
    const exitTimer = setTimeout(() => {
      setIsAnimatingOut(true);
    }, 3000);

    // Complete the loader after exit animation
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 4200);

    return () => {
      clearTimeout(textTimer);
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-[1200ms] ease-out ${
      isAnimatingOut 
        ? 'scale-125 opacity-0 blur-lg' 
        : 'scale-100 opacity-100 blur-none'
    }`}>
      {/* Blurred background that reveals website colors */}
      <div className={`absolute inset-0 transition-all duration-[1200ms] ease-out ${
        isAnimatingOut 
          ? 'blur-2xl scale-125' 
          : 'blur-none scale-100'
      }`}>
        <div className="w-full h-full bg-gradient-to-br from-primary via-tertiary to-black-100"></div>
      </div>
      
      <h1 className={`relative z-10 text-4xl md:text-4xl font-bold text-white transition-all duration-[1200ms] ease-out ${
        isTextSharp 
          ? 'opacity-100 scale-100 blur-none' 
          : 'opacity-0 scale-90 blur-md'
      } ${
        isAnimatingOut 
          ? 'scale-125 opacity-0 blur-lg' 
          : ''
      }`}>
        Hello, World! 🌍
      </h1>
    </div>
  );
};

export default InitialLoader;
