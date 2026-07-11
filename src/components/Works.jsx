import React, { useEffect, useRef } from "react";
import { Tilt } from "react-tilt";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";

gsap.registerPlugin(ScrollTrigger);

// Helper to render beautiful colored tag badges without transparent text-clip conflicts
const getTagTheme = (colorClass) => {
  if (colorClass?.includes("blue")) {
    return {
      text: "#38bdf8",
      bg: "rgba(56, 189, 248, 0.12)",
      border: "rgba(56, 189, 248, 0.35)",
      glow: "0 0 12px rgba(56, 189, 248, 0.2)",
    };
  }
  if (colorClass?.includes("green")) {
    return {
      text: "#34d399",
      bg: "rgba(52, 211, 153, 0.12)",
      border: "rgba(52, 211, 153, 0.35)",
      glow: "0 0 12px rgba(52, 211, 153, 0.2)",
    };
  }
  if (colorClass?.includes("pink")) {
    return {
      text: "#f472b6",
      bg: "rgba(244, 114, 182, 0.12)",
      border: "rgba(244, 114, 182, 0.35)",
      glow: "0 0 12px rgba(244, 114, 182, 0.2)",
    };
  }
  if (colorClass?.includes("yellow") || colorClass?.includes("orange")) {
    return {
      text: "#fbbf24",
      bg: "rgba(251, 191, 36, 0.12)",
      border: "rgba(251, 191, 36, 0.35)",
      glow: "0 0 12px rgba(251, 191, 36, 0.2)",
    };
  }
  // Default cosmic violet/white theme
  return {
    text: "#c4b5fd",
    bg: "rgba(167, 139, 250, 0.12)",
    border: "rgba(167, 139, 250, 0.35)",
    glow: "0 0 12px rgba(167, 139, 250, 0.2)",
  };
};

const ExternalLinkIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_demo_link,
}) => {
  const cardRef = useRef(null);

  return (
    <div ref={cardRef} className="project-card w-full">
      <Tilt
        options={{ max: 10, scale: 1.02, speed: 400 }}
        className="w-full h-full"
      >
        <div
          className="relative w-full h-full flex flex-col rounded-2xl overflow-hidden group transition-all duration-500"
          style={{
            background: "rgba(13, 10, 34, 0.92)",
            border: "1px solid rgba(139, 92, 246, 0.22)",
            backdropFilter: "blur(16px)",
            boxShadow: "0 10px 35px rgba(4, 2, 15, 0.7)",
          }}
        >
          {/* Top animated gradient accent bar */}
          <div
            className="h-[3px] w-full transition-all duration-500 group-hover:h-[4px]"
            style={{
              background:
                "linear-gradient(90deg, #7c3aed 0%, #4f46e5 45%, #d4af37 100%)",
            }}
          />

          {/* Project Image Container */}
          <div className="relative w-full h-[220px] overflow-hidden bg-[#0a0718]">
            {image ? (
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-110"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#1e1545] to-[#0c0820]">
                <span className="text-[#a89fd8] font-mono text-sm">✦ Project Preview</span>
              </div>
            )}

            {/* Gradient vignette overlay */}
            <div
              className="absolute inset-0 transition-opacity duration-500"
              style={{
                background:
                  "linear-gradient(to top, rgba(13,10,34,0.98) 0%, rgba(13,10,34,0.25) 50%, transparent 100%)",
              }}
            />

            {/* Project Index Badge (Top-Left) */}
            <div className="absolute top-3.5 left-3.5 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10">
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "#d4af37", boxShadow: "0 0 8px #d4af37" }}
              />
              <span className="text-white/90 text-xs font-mono font-medium">
                PROJECT {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            {/* Quick Action Floating Buttons (Top-Right) */}
            <div className="absolute top-3.5 right-3.5 flex items-center gap-2">
              {source_code_link && (
                <motion.button
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(source_code_link, "_blank");
                  }}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-9 h-9 rounded-full flex items-center justify-center bg-black/70 backdrop-blur-md border border-[rgba(139,92,246,0.4)] text-white hover:border-[#d4af37] transition-colors"
                  title="View Source Code"
                >
                  <img
                    src={github}
                    alt="github"
                    className="w-4 h-4 object-contain brightness-200"
                  />
                </motion.button>
              )}

              {live_demo_link && (
                <motion.button
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(live_demo_link, "_blank");
                  }}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-9 h-9 rounded-full flex items-center justify-center bg-gradient-to-r from-[#d4af37] to-[#f0d060] text-[#0b081d] shadow-[0_0_15px_rgba(212,175,55,0.5)]"
                  title="Live Demo"
                >
                  <ExternalLinkIcon />
                </motion.button>
              )}
            </div>
          </div>

          {/* Card Body Content */}
          <div className="p-6 flex-1 flex flex-col justify-between">
            <div>
              {/* Project Title */}
              <h3
                className="text-white font-bold text-[21px] mb-2.5 transition-colors duration-300 group-hover:text-[#f0d060]"
              >
                {name}
              </h3>

              {/* Project Description */}
              <p className="text-[#a89fd8] text-[13.5px] leading-[23px] line-clamp-3">
                {description}
              </p>

              {/* Technology Tags — Beautifully Colored & Fully Readable */}
              <div className="mt-4 flex flex-wrap gap-2">
                {tags &&
                  tags.map((tag) => {
                    const theme = getTagTheme(tag.color);
                    return (
                      <span
                        key={`${name}-${tag.name}`}
                        className="text-[11.5px] font-mono font-medium px-3 py-1 rounded-full transition-all duration-300 hover:scale-105"
                        style={{
                          color: theme.text,
                          background: theme.bg,
                          border: `1px solid ${theme.border}`,
                          boxShadow: theme.glow,
                        }}
                      >
                        #{tag.name}
                      </span>
                    );
                  })}
              </div>
            </div>

            {/* Bottom Interactive Action Footer */}
            <div className="mt-6 pt-4 border-t border-[rgba(139,92,246,0.18)] flex items-center justify-between gap-3">
              {source_code_link && (
                <button
                  onClick={() => window.open(source_code_link, "_blank")}
                  className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-[13px] font-medium text-[#c4b5fd] bg-[rgba(139,92,246,0.1)] border border-[rgba(139,92,246,0.25)] hover:bg-[rgba(139,92,246,0.2)] hover:text-white hover:border-[rgba(139,92,246,0.5)] transition-all duration-300"
                >
                  <img
                    src={github}
                    alt="github"
                    className="w-4 h-4 object-contain brightness-200"
                  />
                  <span>Source Code</span>
                </button>
              )}

              {live_demo_link && (
                <button
                  onClick={() => window.open(live_demo_link, "_blank")}
                  className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-[13px] font-semibold text-[#0f0a26] bg-gradient-to-r from-[#d4af37] to-[#f0d060] hover:shadow-[0_0_20px_rgba(212,175,55,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                >
                  <span>Live Demo</span>
                  <ExternalLinkIcon />
                </button>
              )}
            </div>
          </div>

          {/* Decorative subtle corner star */}
          <span className="absolute bottom-4 right-4 text-xs opacity-10 group-hover:opacity-40 transition-opacity duration-300 text-[#d4af37] pointer-events-none">
            ✦
          </span>
        </div>
      </Tilt>
    </div>
  );
};

const Works = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Smooth stagger reveal for all project cards
    const cards = gsap.utils.toArray(".project-card");
    if (cards.length > 0) {
      gsap.fromTo(
        cards,
        {
          opacity: 0,
          y: 60,
          scale: 0.96,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 82%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  return (
    <section className="relative z-10">
      {/* Section Header */}
      <div className="text-center mb-6">
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 mb-3 px-5 py-2 rounded-full"
          style={{
            background: "rgba(212, 175, 55, 0.08)",
            border: "1px solid rgba(212, 175, 55, 0.3)",
          }}
        >
          <span className="text-[#d4af37] text-sm">✦</span>
          <span className="text-[#d4af37] text-sm font-mono font-medium tracking-wider uppercase">
            What I have built
          </span>
        </motion.div>
        <p className={styles.sectionSubText}>Portfolio Showcase</p>
        <h2 className={`${styles.sectionHeadText} mt-1`}>Projects.</h2>
      </div>

      {/* Intro Description */}
      <div className="w-full flex justify-center mb-14">
        <p className="text-[#a89fd8] text-[16px] max-w-3xl leading-[28px] text-center px-4">
          The following projects showcase my skills and full-stack development
          experience through real-world applications. Each card features quick
          access to live interactive demos and complete code repositories.
        </p>
      </div>

      {/* Projects Grid */}
      <div
        ref={containerRef}
        className="works-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center"
      >
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Works, "projects");
