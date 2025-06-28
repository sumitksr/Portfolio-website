import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { achievements } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const AchievementCard = ({ achievement, index }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;
    gsap.fromTo(
      el,
      { opacity: 0, y: 100, scale: 0.8 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        delay: index * 0.2,
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
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="relative group"
    >
      <div className="bg-gradient-to-br from-blue-500/10 to-purple-600/10 p-[1px] rounded-2xl shadow-2xl border border-blue-500/20">
        <div className="bg-black/80 backdrop-blur-sm rounded-2xl p-8 h-full flex flex-col justify-center relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></div>
          
          {/* Achievement number */}
          <div className="absolute top-4 left-4 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-bold">{index + 1}</span>
          </div>
          
          {/* Achievement content */}
          <div className="relative z-10">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-white text-[16px] font-medium leading-relaxed group-hover:text-blue-300 transition-colors duration-300">
                {achievement}
              </p>
            </div>
            
            {/* Bottom accent line */}
            <div className="w-16 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Achievements = () => {
  return (
    <div className={`mt-12 relative`}>
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-600/5 rounded-3xl"></div>
      
      <div className={`relative bg-black/40 backdrop-blur-sm rounded-3xl ${styles.padding} min-h-[200px] border border-blue-500/20`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-block mb-4 px-6 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-500/30">
            <span className="text-blue-400 text-sm font-medium">My Journey</span>
          </div>
          <p className={styles.sectionSubText}>Milestones</p>
          <h2 className={styles.sectionHeadText}>Achievements.</h2>
        </motion.div>
      </div>
      
      <div className={`-mt-10 pb-14 ${styles.paddingX} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center`}>
        {achievements.map((achievement, index) => (
          <AchievementCard key={index} achievement={achievement} index={index} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Achievements, "achievements");
