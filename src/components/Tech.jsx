import React, { useEffect } from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { styles } from "../styles";

gsap.registerPlugin(ScrollTrigger);

const Tech = () => {
  useEffect(() => {
    gsap.fromTo(
      ".tech-chip",
      { opacity: 0, y: 60, scale: 0.8 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".tech-chips-wrapper",
          start: "top 80%",
          end: "bottom 70%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section>
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
          <span className="text-[#d4af37] text-sm font-mono font-medium tracking-wider">My Arsenal</span>
        </motion.div>
        <p className={styles.sectionSubText}>Technologies</p>
        <h2 className={`${styles.sectionHeadText} mt-2`}>Tech Stack.</h2>
      </div>

      {/* Tech chips grid */}
      <div className="tech-chips-wrapper flex flex-row flex-wrap justify-center gap-4">
        {technologies.map((technology) => (
          <motion.div
            key={technology.name}
            className="tech-chip group relative flex items-center gap-3 px-5 py-3 rounded-full cursor-default transition-all duration-300"
            style={{
              background: "rgba(14, 8, 40, 0.9)",
              border: "1px solid rgba(124, 58, 237, 0.25)",
              backdropFilter: "blur(10px)",
            }}
            whileHover={{
              scale: 1.08,
              borderColor: "rgba(212,175,55,0.6)",
              boxShadow: "0 0 20px rgba(212,175,55,0.2), 0 0 40px rgba(124,58,237,0.1)",
            }}
          >
            {/* Icon */}
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
              style={{
                background: "rgba(124,58,237,0.15)",
                border: "1px solid rgba(124,58,237,0.3)",
              }}
            >
              <img
                src={technology.icon}
                alt={technology.name}
                className="w-5 h-5 object-contain"
              />
            </div>

            {/* Name */}
            <span className="text-[#a89fd8] text-sm font-medium group-hover:text-white transition-colors duration-300 whitespace-nowrap">
              {technology.name}
            </span>

            {/* Hover gold dot */}
            <span
              className="absolute -top-1 -right-1 w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: "#d4af37",
                boxShadow: "0 0 6px rgba(212,175,55,0.8)",
              }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Tech, "");
