import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { styles } from "../styles";

// Typewriter hook
const useTypewriter = (words, typingSpeed = 80, deletingSpeed = 50, pauseTime = 1800) => {
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    let timeout;

    if (!isDeleting && displayText === current) {
      // Pause before deleting
      timeout = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && displayText === "") {
      // Move to next word
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    } else {
      timeout = setTimeout(() => {
        setDisplayText((prev) =>
          isDeleting ? prev.slice(0, -1) : current.slice(0, prev.length + 1)
        );
      }, isDeleting ? deletingSpeed : typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return displayText;
};

// Constellation Canvas
const ConstellationCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Create stars
    const stars = Array.from({ length: 120 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.3,
      alpha: Math.random(),
      speed: Math.random() * 0.008 + 0.002,
      phase: Math.random() * Math.PI * 2,
    }));

    // Shooting stars
    let shooters = [];
    const addShooter = () => {
      shooters.push({
        x: Math.random() * canvas.width * 0.7,
        y: Math.random() * canvas.height * 0.5,
        vx: 3 + Math.random() * 3,
        vy: 1.5 + Math.random() * 1.5,
        len: 80 + Math.random() * 60,
        alpha: 1,
        life: 0,
        maxLife: 60 + Math.random() * 40,
      });
    };

    let frame = 0;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      frame++;

      // Add shooting stars occasionally
      if (frame % 200 === 0) addShooter();

      // Draw static stars
      stars.forEach((s) => {
        s.phase += s.speed;
        const a = 0.3 + 0.7 * Math.abs(Math.sin(s.phase));
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200, 180, 255, ${a})`;
        ctx.fill();
      });

      // Draw constellation lines (connect nearby stars)
      for (let i = 0; i < stars.length; i++) {
        for (let j = i + 1; j < stars.length; j++) {
          const dx = stars[i].x - stars[j].x;
          const dy = stars[i].y - stars[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 90) {
            const opacity = (1 - dist / 90) * 0.12;
            ctx.beginPath();
            ctx.moveTo(stars[i].x, stars[i].y);
            ctx.lineTo(stars[j].x, stars[j].y);
            ctx.strokeStyle = `rgba(124, 58, 237, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Draw shooting stars
      shooters = shooters.filter((s) => s.life < s.maxLife);
      shooters.forEach((s) => {
        s.life++;
        s.x += s.vx;
        s.y += s.vy;
        const progress = s.life / s.maxLife;
        const a = (1 - progress) * s.alpha;
        const grad = ctx.createLinearGradient(s.x, s.y, s.x - s.vx * 15, s.y - s.vy * 15);
        grad.addColorStop(0, `rgba(240, 208, 96, ${a})`);
        grad.addColorStop(1, `rgba(212, 175, 55, 0)`);
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(s.x - s.vx * 15, s.y - s.vy * 15);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5;
        ctx.stroke();
        // Head dot
        ctx.beginPath();
        ctx.arc(s.x, s.y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(240, 208, 96, ${a})`;
        ctx.fill();
      });

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
};

const roles = ["Full-Stack Developer", "Competitive Programmer", "ML Enthusiast", "Problem Solver"];

const Hero = () => {
  const typedText = useTypewriter(roles);

  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">
      {/* Deep space background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#04020f] via-[#080320] to-[#04020f]" />

      {/* Constellation canvas */}
      <ConstellationCanvas />

      {/* Ambient glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[120px] opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, #7c3aed, transparent)" }} />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-[100px] opacity-15 pointer-events-none"
        style={{ background: "radial-gradient(circle, #d4af37, transparent)" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full blur-[100px] opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #4f46e5, transparent)" }} />

      {/* Main content */}
      <div
        className={`absolute inset-0 top-[100px] max-w-7xl mx-auto ${styles.paddingX} flex flex-col lg:flex-row items-center justify-center gap-12`}
        style={{ zIndex: 1 }}
      >
        {/* LEFT: Text content */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border"
            style={{
              background: "rgba(212, 175, 55, 0.08)",
              borderColor: "rgba(212, 175, 55, 0.3)",
              boxShadow: "0 0 20px rgba(212,175,55,0.1)",
            }}
          >
            <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-beacon" />
            <span className="text-[#d4af37] text-sm font-mono font-medium tracking-wider">
              Available for opportunities
            </span>
          </motion.div>

          {/* Heading */}
          <h1 className={`${styles.heroHeadText} text-white mb-3`}>
            Hi, I'm{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: "linear-gradient(135deg, #7c3aed 0%, #a78bfa 40%, #d4af37 100%)",
              }}
            >
              Sumit
            </span>
          </h1>

          {/* Typewriter role */}
          <div className="flex items-center justify-center lg:justify-start gap-2 mb-8">
            <span className="text-[#a89fd8] text-xl sm:text-2xl font-light">I am a </span>
            <span className="text-white text-xl sm:text-2xl font-semibold font-mono min-w-[280px] text-left">
              {typedText}
              <span className="text-[#7c3aed] animate-blink ml-0.5">|</span>
            </span>
          </div>

          {/* Description */}
          <motion.p
            className="text-[#a89fd8] text-[17px] leading-[30px] max-w-xl mb-10 lg:mx-0 mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            I craft innovative digital experiences and build scalable web applications. 
            Passionate about algorithms, clean code, and turning ideas into reality.
          </motion.p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <motion.a
              href="#projects"
              className="relative px-8 py-3.5 rounded-full font-semibold text-white text-[15px] overflow-hidden group"
              style={{
                background: "linear-gradient(135deg, #7c3aed, #4f46e5)",
                boxShadow: "0 0 24px rgba(124,58,237,0.4)",
              }}
              whileHover={{ scale: 1.04, boxShadow: "0 0 36px rgba(124,58,237,0.6)" }}
              whileTap={{ scale: 0.96 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <span className="relative z-10">Explore My Work ✦</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#7c3aed] via-[#9d5cf0] to-[#7c3aed] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>

            <motion.a
              href="https://bitzipp.vercel.app/resume"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full font-semibold text-[15px] border transition-all duration-300"
              style={{
                color: "#d4af37",
                borderColor: "rgba(212,175,55,0.4)",
                background: "rgba(212,175,55,0.06)",
              }}
              whileHover={{
                scale: 1.04,
                borderColor: "rgba(212,175,55,0.8)",
                boxShadow: "0 0 24px rgba(212,175,55,0.25)",
              }}
              whileTap={{ scale: 0.96 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.85 }}
            >
              View CV →
            </motion.a>
          </div>

          {/* Stats row */}
          <motion.div
            className="flex gap-8 mt-12 justify-center lg:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            {[
              { value: "1919+", label: "LeetCode Rating" },
              { value: "6+", label: "Projects Built" },
              { value: "Top 20", label: "TUF+ Leaderboard" },
            ].map((stat) => (
              <div key={stat.label} className="text-center lg:text-left">
                <div
                  className="text-2xl font-black font-mono text-transparent bg-clip-text"
                  style={{ backgroundImage: "linear-gradient(135deg, #d4af37, #f0d060)" }}
                >
                  {stat.value}
                </div>
                <div className="text-[#a89fd8] text-xs mt-0.5">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT: Cosmic avatar card */}
        <motion.div
          className="flex-1 flex justify-center items-center"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
        >
          <div className="relative w-[300px] h-[300px] flex items-center justify-center animate-float">
            {/* Outer orbit ring */}
            <div
              className="absolute w-[300px] h-[300px] rounded-full border border-[rgba(212,175,55,0.2)]"
              style={{ animation: "orbit 25s linear infinite" }}
            >
              {/* Orbit dot */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#d4af37] shadow-[0_0_12px_rgba(212,175,55,0.8)]" />
            </div>

            {/* Middle orbit ring */}
            <div
              className="absolute w-[230px] h-[230px] rounded-full border border-[rgba(124,58,237,0.3)]"
              style={{ animation: "orbit-reverse 18s linear infinite" }}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#7c3aed] shadow-[0_0_10px_rgba(124,58,237,0.8)]" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-[#4f46e5] shadow-[0_0_8px_rgba(79,70,229,0.8)]" />
            </div>

            {/* Inner orbit ring */}
            <div
              className="absolute w-[165px] h-[165px] rounded-full border border-[rgba(167,139,250,0.25)]"
              style={{ animation: "orbit 12s linear infinite" }}
            />

            {/* Core avatar card */}
            <div
              className="relative w-[140px] h-[140px] rounded-full flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, rgba(124,58,237,0.9), rgba(79,70,229,0.9))",
                boxShadow: "0 0 40px rgba(124,58,237,0.5), 0 0 80px rgba(124,58,237,0.2), inset 0 0 30px rgba(212,175,55,0.1)",
              }}
            >
              <span
                className="text-white text-4xl font-black font-mono"
                style={{ textShadow: "0 0 20px rgba(240,208,96,0.6)" }}
              >
                SK
              </span>
              {/* Inner glow ring */}
              <div className="absolute inset-0 rounded-full border-2 border-[rgba(212,175,55,0.3)]" />
            </div>

            {/* Floating skill chips */}
            {[
              { text: "React", x: "105%", y: "15%", delay: 0 },
              { text: "C++", x: "-35%", y: "10%", delay: 0.5 },
              { text: "Node.js", x: "98%", y: "75%", delay: 1 },
              { text: "MERN", x: "-25%", y: "78%", delay: 1.5 },
            ].map((chip) => (
              <motion.div
                key={chip.text}
                className="absolute px-3 py-1 rounded-full text-xs font-mono font-semibold"
                style={{
                  left: chip.x,
                  top: chip.y,
                  background: "rgba(9,5,32,0.9)",
                  border: "1px solid rgba(124,58,237,0.4)",
                  color: "#a89fd8",
                  boxShadow: "0 0 10px rgba(124,58,237,0.2)",
                  whiteSpace: "nowrap",
                  animation: `float ${4 + chip.delay}s ease-in-out infinite`,
                  animationDelay: `${chip.delay}s`,
                }}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 + chip.delay * 0.3 }}
              >
                {chip.text}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2" style={{ zIndex: 1 }}>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[#a89fd8] text-xs font-mono tracking-widest uppercase">Scroll</span>
          <div
            className="w-6 h-10 rounded-full flex justify-center pt-2"
            style={{ border: "1px solid rgba(124,58,237,0.4)" }}
          >
            <motion.div
              animate={{ y: [0, 14, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-3 rounded-full"
              style={{ background: "linear-gradient(to bottom, #7c3aed, #d4af37)" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
