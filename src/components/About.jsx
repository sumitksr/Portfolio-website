import React, { useRef, useEffect } from "react";
import { Tilt } from "react-tilt";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";

gsap.registerPlugin(ScrollTrigger);

const useGsap = (elementRef, animation, delay = 0) => {
  useEffect(() => {
    if (elementRef.current) {
      gsap.fromTo(
        elementRef.current,
        animation.from,
        {
          ...animation.to,
          delay,
          scrollTrigger: {
            trigger: elementRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, [elementRef, animation, delay]);
};

// Icon map for cosmic color treatment
const cardColors = [
  { accent: "#7c3aed", glow: "rgba(124,58,237,0.3)" },
  { accent: "#4f46e5", glow: "rgba(79,70,229,0.3)" },
  { accent: "#d4af37", glow: "rgba(212,175,55,0.3)" },
  { accent: "#7c3aed", glow: "rgba(124,58,237,0.3)" },
];

const ServiceCard = ({ index, title, icon }) => {
  const cardRef = useRef(null);
  useGsap(
    cardRef,
    {
      from: { opacity: 0, y: 80, scale: 0.85 },
      to: { opacity: 1, y: 0, scale: 1, duration: 0.9, ease: "power3.out" },
    },
    index * 0.15
  );

  const color = cardColors[index % cardColors.length];

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <Tilt className="xs:w-[260px] w-full" options={{ max: 20, scale: 1.02, speed: 400 }}>
        <div
          ref={cardRef}
          className="relative w-full rounded-2xl overflow-hidden group"
          style={{
            background: "rgba(14, 8, 40, 0.9)",
            border: "1px solid rgba(124,58,237,0.2)",
            backdropFilter: "blur(12px)",
            transition: "all 0.4s ease",
          }}
        >
          {/* Gold top accent bar (appears on hover) */}
          <div
            className="h-[2px] w-full transition-all duration-500"
            style={{
              background: `linear-gradient(90deg, transparent, ${color.accent}, #d4af37, transparent)`,
              opacity: 0.6,
            }}
          />

          <div className="py-10 px-8 min-h-[280px] flex flex-col justify-center items-center text-center">
            {/* Icon container */}
            <div
              className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transition-all duration-400 group-hover:scale-110"
              style={{
                background: `linear-gradient(135deg, rgba(124,58,237,0.2), rgba(79,70,229,0.1))`,
                border: `1px solid ${color.accent}40`,
                boxShadow: `0 0 20px ${color.glow}`,
              }}
            >
              <img src={icon} alt={title} className="w-12 h-12 object-contain" />
            </div>

            {/* Title */}
            <h3
              className="text-white text-[20px] font-bold mb-4 group-hover:text-transparent transition-all duration-300"
              style={{
                backgroundImage: `linear-gradient(135deg, #ffffff, ${color.accent})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "inherit",
              }}
            >
              {title}
            </h3>

            {/* Bottom accent */}
            <div
              className="w-12 h-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-400"
              style={{ background: `linear-gradient(90deg, ${color.accent}, #d4af37)` }}
            />

            {/* Corner star decoration */}
            <span
              className="absolute top-4 right-4 text-xs opacity-20 group-hover:opacity-60 transition-opacity duration-300"
              style={{ color: "#d4af37" }}
            >
              ✦
            </span>
          </div>

          {/* Hover glow overlay */}
          <div
            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
            style={{ boxShadow: `inset 0 0 40px ${color.glow}`, borderColor: color.accent + "60" }}
          />
        </div>
      </Tilt>
    </motion.div>
  );
};

const About = () => {
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);

  useGsap(headingRef, {
    from: { opacity: 0, x: -50 },
    to: { opacity: 1, x: 0, duration: 1, ease: "power2.out" },
  });

  useGsap(
    paragraphRef,
    {
      from: { opacity: 0, y: 40 },
      to: { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" },
    },
    0.3
  );

  return (
    <>
      {/* Section header */}
      <div ref={headingRef} className="text-center mb-16">
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
          <span className="text-[#d4af37] text-sm font-mono font-medium tracking-wider">Get to know me</span>
        </motion.div>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={`${styles.sectionHeadText} mt-2`}>Overview.</h2>
      </div>

      {/* Bio paragraph */}
      <div ref={paragraphRef} className="max-w-4xl mx-auto text-center mb-20">
        <div
          className="relative p-8 rounded-2xl"
          style={{
            background: "rgba(14,8,40,0.6)",
            border: "1px solid rgba(124,58,237,0.15)",
            backdropFilter: "blur(10px)",
          }}
        >
          {/* Decorative corner stars */}
          <span className="absolute top-4 left-4 text-[#d4af37] opacity-30 text-lg">✦</span>
          <span className="absolute bottom-4 right-4 text-[#7c3aed] opacity-30 text-lg">✦</span>

          <p className="text-[#a89fd8] text-[17px] leading-[32px]">
            Passionate <span className="text-white font-semibold">Full-Stack Developer</span> with expertise in{" "}
            <span className="text-[#7c3aed] font-semibold">C++, JavaScript, React, Node.js, Express.js, and MongoDB</span>. Former
            <span className="text-[#d4af37] font-semibold"> IT Intern at Honda Cars India</span>, where I worked on AI solutions and UI/UX improvements. I enjoy building scalable applications such as an{" "}
            <span className="text-white font-semibold">AI Interview Preparation Platform</span> and a{" "}
            <span className="text-white font-semibold">Movie Recommendation System</span>. With 900+ LeetCode problems solved, I have a strong foundation in data structures and algorithms and am currently exploring Machine Learning and AI to develop intelligent, real-world solutions.
          </p>
        </div>
      </div>

      {/* Service cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
