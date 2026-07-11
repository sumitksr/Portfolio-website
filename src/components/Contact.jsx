import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const InputField = ({ label, children }) => (
  <label className="flex flex-col gap-2">
    <span className="text-[#a89fd8] text-sm font-mono font-medium tracking-wide uppercase">{label}</span>
    {children}
  </label>
);

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const params = {
      name: form.name,
      email: form.email,
      message: form.message,
      time: new Date().toLocaleString(),
    };

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        params
      )
      .then(
        () => {
          setLoading(false);
          setSent(true);
          setForm({ name: "", email: "", message: "" });
          setTimeout(() => setSent(false), 4000);
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  const inputStyle = {
    background: "rgba(14, 8, 40, 0.8)",
    border: "1px solid rgba(124, 58, 237, 0.25)",
    borderRadius: "12px",
    color: "#f0eeff",
    padding: "14px 18px",
    fontSize: "15px",
    outline: "none",
    width: "100%",
    fontFamily: "Space Grotesk, sans-serif",
    transition: "all 0.3s ease",
    backdropFilter: "blur(8px)",
  };

  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      {/* Form Panel */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] rounded-2xl overflow-hidden"
        style={{
          background: "rgba(14, 8, 40, 0.85)",
          border: "1px solid rgba(124,58,237,0.2)",
          backdropFilter: "blur(16px)",
          boxShadow: "0 8px 40px rgba(4,2,15,0.6)",
        }}
      >
        {/* Top gradient bar */}
        <div
          className="h-[2px] w-full"
          style={{ background: "linear-gradient(90deg, #7c3aed, #4f46e5, #d4af37)" }}
        />

        <div className="p-8">
          {/* Header */}
          <div className="mb-8">
            <div
              className="inline-flex items-center gap-2 mb-3 px-4 py-1.5 rounded-full"
              style={{
                background: "rgba(212,175,55,0.08)",
                border: "1px solid rgba(212,175,55,0.25)",
              }}
            >
              <span className="text-[#d4af37] text-xs">✦</span>
              <span className="text-[#d4af37] text-xs font-mono tracking-wider">Get in touch</span>
            </div>
            <p className={styles.sectionSubText}>Reach out</p>
            <h3 className={styles.sectionHeadText}>Contact.</h3>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6">
            <InputField label="Your Name">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                required
                style={inputStyle}
                onFocus={(e) => {
                  e.target.style.borderColor = "rgba(124,58,237,0.6)";
                  e.target.style.boxShadow = "0 0 16px rgba(124,58,237,0.2)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "rgba(124,58,237,0.25)";
                  e.target.style.boxShadow = "none";
                }}
              />
            </InputField>

            <InputField label="Your Email">
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email address?"
                required
                style={inputStyle}
                onFocus={(e) => {
                  e.target.style.borderColor = "rgba(124,58,237,0.6)";
                  e.target.style.boxShadow = "0 0 16px rgba(124,58,237,0.2)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "rgba(124,58,237,0.25)";
                  e.target.style.boxShadow = "none";
                }}
              />
            </InputField>

            <InputField label="Your Message">
              <textarea
                rows={6}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What would you like to say?"
                required
                style={{ ...inputStyle, resize: "vertical", minHeight: "140px" }}
                onFocus={(e) => {
                  e.target.style.borderColor = "rgba(124,58,237,0.6)";
                  e.target.style.boxShadow = "0 0 16px rgba(124,58,237,0.2)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "rgba(124,58,237,0.25)";
                  e.target.style.boxShadow = "none";
                }}
              />
            </InputField>

            <motion.button
              type="submit"
              disabled={loading}
              className="relative overflow-hidden w-fit px-10 py-3.5 rounded-full font-semibold text-white text-[15px] transition-all duration-300 disabled:opacity-60"
              style={{
                background: loading
                  ? "rgba(124,58,237,0.5)"
                  : "linear-gradient(135deg, #7c3aed, #4f46e5)",
                boxShadow: "0 0 20px rgba(124,58,237,0.4)",
              }}
              whileHover={!loading ? { scale: 1.04, boxShadow: "0 0 32px rgba(124,58,237,0.6)" } : {}}
              whileTap={!loading ? { scale: 0.97 } : {}}
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Sending...
                </span>
              ) : sent ? (
                <span className="flex items-center gap-2">
                  <span>✓</span> Message Sent!
                </span>
              ) : (
                "Send Message ✦"
              )}
            </motion.button>
          </form>
        </div>
      </motion.div>

      {/* Earth Canvas */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
