import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { achievements } from "../constants";

gsap.registerPlugin(ScrollTrigger);

// Achievement icons mapped by type
const achievementIcons = ["🏆", "⚔️", "🎯"];

const AchievementCard = ({ achievement, index }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;
    gsap.fromTo(
      el,
      { opacity: 0, y: 80, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        delay: index * 0.15,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "top center",
          scrub: false,
        },
      }
    );
  }, [index]);

  return (
    <motion.div
      ref={cardRef}
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="relative group w-full"
    >
      <div
        className="relative rounded-2xl overflow-hidden h-full"
        style={{
          background: "rgba(14, 8, 40, 0.92)",
          border: "1px solid rgba(124,58,237,0.2)",
          backdropFilter: "blur(12px)",
        }}
      >
        {/* Gold top accent bar */}
        <div
          className="h-[2px] w-full"
          style={{
            background: "linear-gradient(90deg, transparent, #d4af37, transparent)",
          }}
        />

        <div className="p-7 h-full flex flex-col justify-between relative overflow-hidden">
          {/* Constellation decoration (top-right) */}
          <div className="absolute top-0 right-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none">
            <svg width="80" height="80" viewBox="0 0 80 80">
              <circle cx="60" cy="10" r="1.5" fill="#d4af37" />
              <circle cx="40" cy="25" r="1" fill="#7c3aed" />
              <circle cx="70" cy="30" r="1" fill="#d4af37" />
              <circle cx="50" cy="50" r="1.5" fill="#4f46e5" />
              <line x1="60" y1="10" x2="40" y2="25" stroke="rgba(212,175,55,0.4)" strokeWidth="0.5" />
              <line x1="40" y1="25" x2="70" y2="30" stroke="rgba(124,58,237,0.4)" strokeWidth="0.5" />
              <line x1="70" y1="30" x2="50" y2="50" stroke="rgba(212,175,55,0.4)" strokeWidth="0.5" />
            </svg>
          </div>

          {/* Header row */}
          <div className="flex items-start gap-4 mb-4">
            {/* Number badge */}
            <div
              className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-black font-mono text-sm"
              style={{
                background: "linear-gradient(135deg, rgba(212,175,55,0.2), rgba(212,175,55,0.1))",
                border: "1px solid rgba(212,175,55,0.4)",
                color: "#d4af37",
                boxShadow: "0 0 12px rgba(212,175,55,0.2)",
              }}
            >
              {String(index + 1).padStart(2, "0")}
            </div>

            {/* Achievement emoji icon */}
            <div
              className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-lg"
              style={{
                background: "rgba(124,58,237,0.1)",
                border: "1px solid rgba(124,58,237,0.2)",
              }}
            >
              {achievementIcons[index % achievementIcons.length]}
            </div>
          </div>

          {/* Achievement text */}
          <div className="relative z-10 flex-1">
            <p
              className="text-[15px] leading-[26px] transition-colors duration-300 group-hover:text-white"
              style={{ color: "#c4bce8" }}
            >
              {achievement}
            </p>
          </div>

          {/* Bottom accent line */}
          <div
            className="mt-5 h-[1px] w-0 group-hover:w-full transition-all duration-500 rounded-full"
            style={{ background: "linear-gradient(90deg, #7c3aed, #d4af37, transparent)" }}
          />
        </div>
      </div>
    </motion.div>
  );
};

const Achievements = () => {
  return (
    <div className="mt-6 relative">
      {/* Section header */}
      <div className="text-center mb-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 mb-4 px-5 py-2 rounded-full"
          style={{
            background: "rgba(212,175,55,0.08)",
            border: "1px solid rgba(212,175,55,0.25)",
          }}
        >
          <span className="text-[#d4af37] text-sm">✦</span>
          <span className="text-[#d4af37] text-sm font-mono font-medium tracking-wider">Milestones</span>
        </motion.div>
        <p className={styles.sectionSubText}>Competitive Programming</p>
        <h2 className={`${styles.sectionHeadText} mt-2`}>Achievements.</h2>
      </div>

      {/* Achievement cards grid */}
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`}>
        {achievements.map((achievement, index) => (
          <AchievementCard key={index} achievement={achievement} index={index} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Achievements, "achievements");
