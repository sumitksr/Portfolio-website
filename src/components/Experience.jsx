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
        background: "rgba(0, 0, 0, 0.8)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(59, 130, 246, 0.2)",
        borderRadius: "16px",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
      }}
      contentArrowStyle={{ 
        borderRight: "7px solid rgba(59, 130, 246, 0.3)",
        borderLeft: "7px solid rgba(59, 130, 246, 0.3)",
      }}
      date={experience.date}
      dateClassName="text-blue-400 font-semibold"
      iconStyle={{ 
        background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
        boxShadow: "0 4px 16px rgba(59, 130, 246, 0.4)",
      }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          {experience.icon ? (
            <img
              src={experience.icon}
              alt={experience.company_name}
              className='w-[90%] h-[90%] object-contain'
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white text-lg font-bold">H</span>
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
        <div className="mb-4">
          <h3 className='text-white text-[24px] font-bold mb-2'>{experience.title}</h3>
          <p className='text-blue-400 text-[18px] font-semibold'>
            {experience.company_name}
          </p>
        </div>

        <ul className='mt-6 space-y-3'>
          {experience.points.map((point, idx) => (
            <motion.li
              key={`experience-point-${idx}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className='text-gray-300 text-[15px] pl-6 relative'
            >
              <div className="absolute left-0 top-2 w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
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
      <motion.div 
        variants={textVariant()}
        className="text-center mb-16"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-4 px-6 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-500/30"
        >
          <span className="text-blue-400 text-sm font-medium">My Journey</span>
        </motion.div>
        <p className={`${styles.sectionSubText} mb-4`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText}`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline lineColor="rgba(59, 130, 246, 0.2)">
          {experiences.map((experience, idx) => (
            <ExperienceCard key={idx} experience={experience} index={idx} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
