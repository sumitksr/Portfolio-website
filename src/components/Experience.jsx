import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { experiences } from "../constants";

const ExperienceCard = ({ experience, index }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "rgba(14, 8, 40, 0.92)",
        backdropFilter: "blur(16px)",
        border: "1px solid rgba(124, 58, 237, 0.2)",
        borderRadius: "20px",
        boxShadow: "0 8px 32px rgba(4, 2, 15, 0.6), 0 0 0 1px rgba(124,58,237,0.08)",
        padding: "2rem",
      }}
      contentArrowStyle={{
        borderRight: "7px solid rgba(124, 58, 237, 0.3)",
      }}
      date={experience.date}
      dateClassName="text-[#d4af37] font-mono font-semibold text-sm tracking-wide"
      iconStyle={{
        background: "linear-gradient(135deg, #7c3aed, #4f46e5)",
        boxShadow: "0 0 0 4px rgba(124,58,237,0.2), 0 0 20px rgba(124,58,237,0.4)",
        animation: "beacon 2s ease-out infinite",
      }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          {experience.icon ? (
            <img
              src={experience.icon}
              alt={experience.company_name}
              className="w-[90%] h-[90%] object-contain"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-white text-xl font-black font-mono">H</span>
            </div>
          )}
        </div>
      }
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
      >
        {/* Title block */}
        <div className="mb-5">
          {/* Gold top accent */}
          <div
            className="h-[2px] w-16 mb-4 rounded-full"
            style={{ background: "linear-gradient(90deg, #d4af37, transparent)" }}
          />
          <h3 className="text-white text-[22px] font-bold mb-1">{experience.title}</h3>
          <div className="flex items-center gap-2">
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "#d4af37", boxShadow: "0 0 6px rgba(212,175,55,0.6)" }}
            />
            <p className="text-[#d4af37] text-[16px] font-semibold">
              {experience.company_name}
            </p>
          </div>
        </div>

        {/* Points */}
        <ul className="mt-4 space-y-4">
          {experience.points.map((point, idx) => (
            <motion.li
              key={`experience-point-${idx}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="text-[#a89fd8] text-[14px] pl-5 relative leading-relaxed"
            >
              <div
                className="absolute left-0 top-[7px] w-1.5 h-1.5 rounded-full"
                style={{ background: "linear-gradient(135deg, #7c3aed, #d4af37)" }}
              />
              {point}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="text-center mb-16">
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
          <span className="text-[#d4af37] text-sm font-mono font-medium tracking-wider">My Journey</span>
        </motion.div>
        <p className={`${styles.sectionSubText} mb-4`}>What I have done so far</p>
        <h2 className={`${styles.sectionHeadText}`}>Work Experience.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline lineColor="rgba(124, 58, 237, 0.2)">
          {experiences.map((experience, idx) => (
            <ExperienceCard key={idx} experience={experience} index={idx} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
