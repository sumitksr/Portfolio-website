import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa6";
import { SiLeetcode, SiCodeforces } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="w-full py-4 bg-black-100/55 text-white flex justify-center gap-6">
      <a
        href="https://github.com/sumitksr"
        target="_blank"
        rel="noopener noreferrer"
        title="GitHub"
      >
        <FaGithub size={24} />
      </a>
      <a
        href="https://leetcode.com/u/sumitksr"
        target="_blank"
        rel="noopener noreferrer"
        title="LeetCode"
      >
        <SiLeetcode size={24} />
      </a>
      <a
        href="https://codeforces.com/profile/sumitksr"
        target="_blank"
        rel="noopener noreferrer"
        title="Codeforces"
      >
        <SiCodeforces size={24} />
      </a>
      <a
        href="https://www.linkedin.com/in/sumit-kumar-016377282/"
        target="_blank"
        rel="noopener noreferrer"
        title="LinkedIn"
      >
        <FaLinkedin size={24} />
      </a>
      <a
        href="mailto:sumitksr4156@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        title="Email"
      >
        <FaEnvelope size={24} />
      </a>
      <a
        href="https://www.instagram.com/_sk_3110/"
        target="_blank"
        rel="noopener noreferrer"
        title="Instagram"
      >
        <FaInstagram size={24} />
      </a>
    </footer>
  );
};

export default Footer;