import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram, FaGlobe } from "react-icons/fa6";
import { SiLeetcode, SiCodeforces } from "react-icons/si";

const socialLinks = [
  {
    href: "https://github.com/sumitksr",
    icon: <FaGithub size={20} />,
    title: "GitHub",
    color: "#ffffff",
    glow: "rgba(255,255,255,0.25)",
  },
  {
    href: "https://leetcode.com/u/sumitksr",
    icon: <SiLeetcode size={20} />,
    title: "LeetCode",
    color: "#d4af37",
    glow: "rgba(212,175,55,0.4)",
  },
  {
    href: "https://leetcode.com/u/sumitks",
    icon: <SiLeetcode size={20} />,
    title: "LeetCode 2",
    color: "#d4af37",
    glow: "rgba(212,175,55,0.4)",
  },
  {
    href: "https://codeforces.com/profile/sumitksr",
    icon: <SiCodeforces size={20} />,
    title: "Codeforces",
    color: "#4f46e5",
    glow: "rgba(79,70,229,0.5)",
  },
  {
    href: "https://codolio.com/profile/Sumitksr",
    icon: (
      <img
        src="https://codolio.com/favicon.ico"
        alt="Codolio"
        style={{ width: 20, height: 20, filter: "brightness(2)" }}
      />
    ),
    title: "Codolio",
    color: "#a78bfa",
    glow: "rgba(167,139,250,0.4)",
  },
  {
    href: "https://www.linkedin.com/in/sumitksr",
    icon: <FaLinkedin size={20} />,
    title: "LinkedIn",
    color: "#4f46e5",
    glow: "rgba(79,70,229,0.5)",
  },
  {
    href: "mailto:sumitksr4156@gmail.com",
    icon: <FaEnvelope size={20} />,
    title: "Email",
    color: "#7c3aed",
    glow: "rgba(124,58,237,0.4)",
  },
  {
    href: "https://www.instagram.com/_sk_3110/",
    icon: <FaInstagram size={20} />,
    title: "Instagram",
    color: "#ec4899",
    glow: "rgba(236,72,153,0.4)",
  },
  {
    href: "https://takeuforward.org/profile/sumitksr",
    icon: <FaGlobe size={20} />,
    title: "Take U Forward",
    color: "#10b981",
    glow: "rgba(16,185,129,0.4)",
  },
];

const Footer = () => {
  return (
    <footer className="relative w-full overflow-hidden">
      {/* Top gradient border */}
      <div
        className="h-[1px] w-full"
        style={{
          background: "linear-gradient(90deg, transparent, #7c3aed, #d4af37, #4f46e5, transparent)",
        }}
      />

      <div
        className="py-8 px-6"
        style={{ background: "rgba(4, 2, 15, 0.95)" }}
      >
        {/* Social icons row */}
        <div className="flex justify-center items-center gap-4 flex-wrap mb-5">
          {socialLinks.map((link) => (
            <motion.a
              key={link.title}
              href={link.href}
              target={link.href.startsWith("mailto") ? "_self" : "_blank"}
              rel="noopener noreferrer"
              title={link.title}
              className="relative w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 group"
              style={{
                background: "rgba(14,8,40,0.8)",
                border: "1px solid rgba(124,58,237,0.2)",
                color: "#a89fd8",
              }}
              whileHover={{
                scale: 1.15,
                color: link.color,
                borderColor: link.color + "80",
                boxShadow: `0 0 16px ${link.glow}, 0 0 4px ${link.color}40`,
              }}
              whileTap={{ scale: 0.9 }}
            >
              {link.icon}
            </motion.a>
          ))}
        </div>

        {/* Divider */}
        <div
          className="w-16 h-[1px] mx-auto mb-5 rounded-full"
          style={{ background: "linear-gradient(90deg, transparent, rgba(124,58,237,0.4), transparent)" }}
        />

        {/* Copyright */}
        <p className="text-center text-[#a89fd8] text-sm font-mono">
          Crafted with{" "}
          <span
            className="text-[#d4af37]"
            style={{ textShadow: "0 0 8px rgba(212,175,55,0.5)" }}
          >
            ✦
          </span>{" "}
          by{" "}
          <span
            className="font-semibold text-transparent bg-clip-text"
            style={{
              backgroundImage: "linear-gradient(135deg, #7c3aed, #d4af37)",
            }}
          >
            Sumit Kumar
          </span>
          <span className="text-[#a89fd8]/50 mx-2">·</span>
          <span className="text-[#a89fd8]/50">{new Date().getFullYear()}</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
