
import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/animations';

const MotionDiv = motion.div as any;

const Step = ({ number, title, desc, delay }: { number: string, title: string, desc: string, delay: number }) => (
  <MotionDiv
    variants={fadeInUp}
    transition={{ delay }}
    className="relative group p-6 md:p-8 rounded-2xl md:rounded-[2.5rem] bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-blue-500/50 transition-all duration-500"
  >
    <div className="absolute -top-3 -left-3 md:-top-4 md:-left-4 w-10 h-10 md:w-12 md:h-12 bg-slate-900 dark:bg-blue-600 rounded-xl md:rounded-2xl flex items-center justify-center text-white font-bold font-space text-lg md:text-xl shadow-lg group-hover:scale-110 transition-transform">
      {number}
    </div>
    <div className="pt-4 md:pt-4">
      <h3 className="text-lg md:text-2xl font-bold mb-2 md:mb-4 text-slate-900 dark:text-white tracking-tight font-space">
        {title}
      </h3>
      <p className="text-sm md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed font-light">
        {desc}
      </p>
    </div>
    
    <span className="absolute bottom-2 right-4 md:bottom-4 md:right-8 text-6xl md:text-8xl font-black text-slate-100 dark:text-white/[0.02] pointer-events-none select-none transition-colors group-hover:text-blue-500/[0.05]">
      {number}
    </span>
  </MotionDiv>
);

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Diagnose the friction",
      desc: "We map where time, money, and attention are leaking across your operations."
    },
    {
      number: "02",
      title: "Design the system",
      desc: "We redesign workflows so information moves automatically between people, tools, and decisions."
    },
    {
      number: "03",
      title: "Implement & harden",
      desc: "Automations are deployed, documented, and stress-tested in real operating conditions."
    },
    {
      number: "04",
      title: "Compound the result",
      desc: "Once in place, systems continue to deliver value every day without additional effort."
    }
  ];

  return (
    <section id="process" className="py-16 md:py-32 px-6 md:px-12 relative z-10 scroll-mt-28 bg-slate-50/50 dark:bg-transparent">
      <div className="max-w-7xl mx-auto">
        <MotionDiv
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-12 md:mb-20"
        >
          <span className="text-blue-600 dark:text-blue-500 font-bold tracking-[0.2em] uppercase text-[9px] md:text-[10px] mb-3 md:mb-4 block">
            The Methodology
          </span>
          <h2 className="text-2xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white tracking-tighter leading-tight font-space">
            How it works
          </h2>
        </MotionDiv>

        <MotionDiv 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 relative"
        >
          {/* Connecting Line - Only for Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-slate-200 dark:bg-white/5 -z-10" />
          <div className="hidden lg:block absolute top-0 left-1/2 w-px h-full bg-slate-200 dark:bg-white/5 -z-10" />

          {steps.map((step, i) => (
            <Step 
              key={i}
              number={step.number}
              title={step.title}
              desc={step.desc}
              delay={i * 0.1}
            />
          ))}
        </MotionDiv>
      </div>
    </section>
  );
};

export default HowItWorks;
