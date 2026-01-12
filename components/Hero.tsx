
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Calendar } from 'lucide-react';
import { scrollToSection } from '../utils/helpers';

const MotionDiv = motion.div as any;

const Hero = () => {
  const { scrollY } = useScroll();
  
  // Use slightly less aggressive transforms on mobile to ensure smoothness
  const yText = useTransform(scrollY, [0, 500], [0, 100]);
  const opacityText = useTransform(scrollY, [0, 400], [1, 0]);
  const rotateX = useTransform(scrollY, [0, 600], [0, 20]);
  const scale = useTransform(scrollY, [0, 600], [1, 0.9]);

  return (
    <section className="relative min-h-[90vh] md:min-h-screen w-full flex flex-col items-center justify-center pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden perspective-[1200px]">
      <MotionDiv 
        style={{ y: yText, opacity: opacityText, rotateX, scale, transformStyle: "preserve-3d", transformOrigin: "center top" }}
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
      >
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex items-center gap-2 py-1.5 px-3.5 rounded-full bg-blue-100 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-blue-600 dark:text-blue-400 text-[10px] md:text-xs font-bold mb-6 md:mb-8 tracking-wider uppercase backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 animate-pulse"></span>
            Automation for Australian Industry
          </span>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter leading-[1.1] mb-6 bg-clip-text text-transparent bg-gradient-to-b from-slate-900 via-slate-800 to-slate-500 dark:from-white dark:via-white dark:to-gray-500/50 pb-2">
            We Remove Operational Drag From Growing Businesses. <span className="block sm:inline">Permanently.</span>
          </h1>
          
          <p className="text-base md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed font-light">
            Datamatically designs automation systems that replace manual work, reduce friction, and turn messy processes into scalable infrastructure.
          </p>

          <div className="mb-10 md:mb-14 max-w-3xl mx-auto relative px-4">
            <p className="text-sm md:text-lg font-light text-slate-600 dark:text-slate-400 leading-relaxed font-space italic">
              If your business relies on spreadsheets and people remembering steps, growth will always 
              feel harder than it should. <span className="text-slate-900 dark:text-white font-bold not-italic border-b border-blue-500/40 pb-0.5">We fix that at the system level.</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4">
             <a 
                href="https://calendly.com/datamatically"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-bold rounded-full hover:opacity-90 transition-all flex items-center justify-center gap-2 group hover:scale-105 active:scale-95 shadow-xl font-space text-sm md:text-base"
             >
                Free consultation <Calendar className="w-4 h-4 transition-transform" />
             </a>
             <a 
                href="#projects" 
                onClick={(e) => scrollToSection(e, 'projects')}
                className="w-full sm:w-auto px-8 py-4 bg-transparent border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white font-bold rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-all backdrop-blur-sm font-space text-sm md:text-base"
             >
                View Case Studies
             </a>
          </div>
        </MotionDiv>
      </MotionDiv>

      <MotionDiv 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        className="absolute bottom-6 inset-x-0 flex flex-col items-center gap-1.5 text-gray-400 dark:text-gray-500 pointer-events-none"
      >
        <span className="text-[9px] uppercase tracking-[0.3em] opacity-50">Explore</span>
        <ChevronDown className="w-4 h-4" />
      </MotionDiv>
    </section>
  );
};

export default Hero;
