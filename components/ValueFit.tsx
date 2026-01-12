
import React from 'react';
import { motion } from 'framer-motion';
import { X, Check, Target, Zap, TrendingUp, ShieldCheck, ArrowRight, Ban, Layers } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';

const MotionDiv = motion.div as any;

const ValueFit = () => {
  return (
    <section id="fit" className="py-16 md:py-32 px-6 md:px-12 relative z-10 overflow-hidden bg-white dark:bg-[#030712] transition-colors duration-500">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-white/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto">
        <MotionDiv
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-stretch"
        >
          <div className="lg:col-span-7 flex flex-col justify-between">
            <MotionDiv variants={fadeInUp} className="mb-8">
              <span className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-500 font-bold tracking-[0.3em] uppercase text-[9px] md:text-[10px] mb-3 md:mb-4 block font-space">
                <Layers className="w-3 h-3" /> Partnership Alignment
              </span>
              <h2 className="text-2xl md:text-5xl font-bold mb-4 md:mb-6 text-slate-900 dark:text-white tracking-tighter leading-tight font-space">
                Who this is for
              </h2>
              <p className="text-lg md:text-2xl text-gray-600 dark:text-gray-400 font-light leading-relaxed max-w-2xl">
                Datamatically works best with <span className="text-slate-900 dark:text-white font-medium underline decoration-blue-500/30 underline-offset-8">operations-heavy businesses</span> growing faster than their systems can support.
              </p>
            </MotionDiv>

            <MotionDiv variants={fadeInUp} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="group relative p-6 md:p-8 rounded-2xl md:rounded-[2rem] border border-slate-200 dark:border-white/5 bg-slate-50/50 dark:bg-white/[0.01] transition-all duration-500 hover:border-red-500/20">
                <div className="mb-4 md:mb-6 flex items-center justify-between">
                  <div className="p-2 bg-red-50 dark:bg-red-500/10 rounded-xl text-red-500">
                    <Ban className="w-5 h-5" />
                  </div>
                  <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400 font-space">Avoid If</span>
                </div>
                <h4 className="text-base md:text-lg font-bold mb-2 text-slate-900 dark:text-white font-space">Quick Fixes</h4>
                <p className="text-xs md:text-sm text-slate-500 dark:text-gray-500 leading-relaxed">
                  If you need a <span className="text-slate-700 dark:text-gray-400 font-medium">quick script</span> to patch a leaking process, we aren't the right fit.
                </p>
              </div>

              <div className="group relative p-6 md:p-8 rounded-2xl md:rounded-[2rem] border border-blue-500/20 dark:border-blue-500/10 bg-blue-50/50 dark:bg-blue-500/5 transition-all duration-500 hover:border-blue-500/50">
                <div className="mb-4 md:mb-6 flex items-center justify-between">
                  <div className="p-2 bg-blue-100 dark:bg-blue-500/20 rounded-xl text-blue-600 dark:text-blue-400">
                    <Check className="w-5 h-5" />
                  </div>
                  <span className="text-[9px] font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 font-space">Partner If</span>
                </div>
                <h4 className="text-base md:text-lg font-bold mb-2 text-slate-900 dark:text-white font-space">Systemic Leverage</h4>
                <p className="text-xs md:text-sm text-slate-700 dark:text-gray-300 leading-relaxed">
                  If you want <span className="text-blue-600 dark:text-blue-400 font-semibold italic">resilience and clarity</span> in your operations, we are built for you.
                </p>
                <div className="mt-4 flex gap-2">
                  <div className="w-7 h-7 rounded-lg bg-white/80 dark:bg-slate-900/80 flex items-center justify-center shadow-sm">
                    <TrendingUp className="w-3.5 h-3.5 text-blue-600" />
                  </div>
                  <div className="w-7 h-7 rounded-lg bg-white/80 dark:bg-slate-900/80 flex items-center justify-center shadow-sm">
                    <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                  </div>
                </div>
              </div>
            </MotionDiv>
          </div>

          <div className="lg:col-span-5 flex flex-col items-center justify-center mt-6 lg:mt-0">
            <MotionDiv 
              variants={fadeInUp}
              className="w-full relative p-8 md:p-12 rounded-[2.5rem] md:rounded-[3rem] bg-slate-900 dark:bg-white text-white dark:text-slate-900 overflow-hidden shadow-2xl transition-all"
            >
              <div className="relative z-10">
                <div className="mb-8 flex items-center gap-4">
                  <div className="w-10 h-10 bg-white/10 dark:bg-slate-900/10 rounded-xl flex items-center justify-center backdrop-blur-md">
                    <Target className="w-5 h-5 text-blue-400 dark:text-blue-600" />
                  </div>
                  <div className="h-px flex-1 bg-white/10 dark:bg-slate-900/10" />
                </div>
                
                <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] mb-4 text-blue-400 dark:text-blue-600 font-space">Philosophy</h3>
                <h2 className="text-2xl md:text-4xl font-bold mb-6 tracking-tighter leading-tight font-space">
                  Why Datamatically
                </h2>
                
                <div className="space-y-4 md:space-y-6">
                  <p className="text-xl md:text-2xl font-bold tracking-tight leading-tight">
                    Automation fails because it focuses on tools instead of <span className="text-blue-400 dark:text-blue-600 italic">operations.</span>
                  </p>
                  
                  <div className="flex gap-4 items-start">
                    <div className="mt-1.5 w-1 h-12 bg-gradient-to-b from-blue-500 to-transparent rounded-full shrink-0" />
                    <p className="text-sm md:text-lg opacity-70 dark:opacity-60 font-light leading-relaxed">
                      We start with how your business runs. We don't just "connect apps"—we engineer the flow of your entire enterprise.
                    </p>
                  </div>
                </div>
                
                <div className="mt-10 pt-6 border-t border-white/10 dark:border-slate-900/10 flex items-center justify-end">
                   <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </MotionDiv>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
};

export default ValueFit;
