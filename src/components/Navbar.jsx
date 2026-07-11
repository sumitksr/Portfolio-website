import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`${styles.paddingX} w-full flex items-center py-4 fixed top-0 z-20 transition-all duration-500 ${
        scrolled
          ? "bg-[rgba(4,2,15,0.85)] backdrop-blur-xl border-b border-[rgba(124,58,237,0.2)]"
          : "bg-transparent"
      }`}
      style={scrolled ? { boxShadow: "0 1px 0 rgba(124,58,237,0.15), 0 4px 24px rgba(4,2,15,0.8)" } : {}}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            to="/"
            className="flex items-center gap-3"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            {/* Cosmic SK monogram with orbit */}
            <div className="relative w-10 h-10">
              {/* Outer orbit ring */}
              <div
                className="absolute inset-0 rounded-full border border-[rgba(212,175,55,0.4)]"
                style={{ animation: "orbit 12s linear infinite" }}
              />
              {/* Inner orbit ring */}
              <div
                className="absolute inset-[3px] rounded-full border border-[rgba(124,58,237,0.5)]"
                style={{ animation: "orbit-reverse 8s linear infinite" }}
              />
              {/* Core */}
              <div className="absolute inset-[6px] rounded-full bg-gradient-to-br from-[#7c3aed] to-[#4f46e5] flex items-center justify-center">
                <span className="text-white font-black text-[10px] font-mono">SK</span>
              </div>
            </div>
            <p className="text-white text-[20px] font-bold cursor-pointer tracking-tight">
              Sumit <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7c3aed] to-[#d4af37]">Kumar</span>
            </p>
          </Link>
        </motion.div>

        {/* Desktop Nav Links */}
        <ul className="list-none hidden sm:flex flex-row gap-8 items-center">
          {navLinks.map((nav, index) => (
            <motion.li
              key={nav.id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative group ${
                active === nav.title ? "text-[#d4af37]" : "text-[#a89fd8]"
              } hover:text-white text-[15px] font-medium cursor-pointer transition-colors duration-300`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`} className="relative py-1">
                {nav.title}
                {/* Gold underline sweep */}
                <span
                  className={`absolute -bottom-0.5 left-0 h-[2px] rounded-full transition-all duration-300 bg-gradient-to-r from-[#d4af37] to-[#f0d060] ${
                    active === nav.title ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            </motion.li>
          ))}
          {/* CTA Button */}
          <motion.li
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: navLinks.length * 0.1 }}
          >
            <a
              href="#contact"
              className="px-5 py-2 rounded-full text-[14px] font-semibold text-white border border-[rgba(124,58,237,0.5)] hover:border-[#7c3aed] hover:bg-[rgba(124,58,237,0.15)] transition-all duration-300"
              style={{ boxShadow: "0 0 12px rgba(124,58,237,0.15)" }}
            >
              Hire Me ✦
            </a>
          </motion.li>
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <motion.img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer filter brightness-200"
            onClick={() => setToggle(!toggle)}
            whileTap={{ scale: 0.9 }}
          />

          <AnimatePresence>
            {toggle && (
              <motion.div
                initial={{ opacity: 0, scale: 0.85, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.85, y: -20 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="absolute top-20 right-4 w-[200px] z-10 rounded-2xl overflow-hidden"
                style={{
                  background: "rgba(9, 5, 32, 0.95)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(124, 58, 237, 0.25)",
                  boxShadow: "0 20px 60px rgba(4, 2, 15, 0.8), 0 0 0 1px rgba(124,58,237,0.1)",
                }}
              >
                {/* Top accent bar */}
                <div className="h-[2px] w-full bg-gradient-to-r from-[#7c3aed] via-[#d4af37] to-[#4f46e5]" />
                <ul className="list-none flex flex-col gap-1 p-4">
                  {navLinks.map((nav, index) => (
                    <motion.li
                      key={nav.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: index * 0.06 }}
                      className={`font-medium cursor-pointer text-[15px] px-3 py-2 rounded-lg transition-all duration-200 ${
                        active === nav.title
                          ? "text-[#d4af37] bg-[rgba(212,175,55,0.08)]"
                          : "text-[#a89fd8] hover:text-white hover:bg-[rgba(124,58,237,0.12)]"
                      }`}
                      onClick={() => {
                        setToggle(false);
                        setActive(nav.title);
                      }}
                    >
                      <a href={`#${nav.id}`} className="flex items-center gap-2">
                        <span className="text-[#7c3aed] text-xs">✦</span>
                        {nav.title}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
