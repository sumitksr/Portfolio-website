import { motion } from "framer-motion";

import { styles } from "../styles";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto overflow-hidden`}>
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-col lg:flex-row items-center justify-center gap-10`}>
        {/* Left side - Main content */}
        <motion.div 
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-500/30">
            <span className="text-blue-400 text-sm font-medium">Welcome to my portfolio</span>
          </div>
          
          <h1 className={`${styles.heroHeadText} text-white mb-6`}>
            Hi, I'm <span className='bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'>Sumit</span>
          </h1>
          
          <p className={`${styles.heroSubText} mb-8 max-w-2xl`}>
            I craft innovative digital experiences and build scalable web applications that make a difference
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <motion.a 
              href="https://github.com/sumitksr"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl inline-block text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
            <motion.a 
              href="https://bitzipp.vercel.app/resume"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border-2 border-blue-500/50 text-blue-400 rounded-full font-semibold hover:bg-blue-500/10 transition-all duration-300 inline-block text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View CV
            </motion.a>
          </div>
        </motion.div>

        {/* Right side - Animated elements */}
        <motion.div 
          className="flex-1 flex justify-center items-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative">
            {/* Animated circles */}
            <motion.div 
              className="w-64 h-64 border-2 border-blue-500/30 rounded-full absolute"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div 
              className="w-48 h-48 border-2 border-purple-500/30 rounded-full absolute top-8 left-8"
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />
            <motion.div 
              className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full absolute top-16 left-16 flex items-center justify-center"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-white text-2xl font-bold">SK</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className='absolute bottom-10 left-1/2 transform -translate-x-1/2'>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className='w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center'
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className='w-1 h-3 bg-blue-400 rounded-full mt-2'
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
