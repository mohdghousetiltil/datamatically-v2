
import React from 'react';
import { motion } from 'framer-motion';
import { MousePointer2, MailCheck, FileClock, Users, AlertCircle } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';

const MotionDiv = motion.div as any;

const FrictionCard = ({ icon: Icon, title, index }: { icon: any, title: string, index: number }) => (
  <MotionDiv
    variants={fadeInUp}
    className="group relative p-6 md:p-8 rounded-2xl md:rounded-[2rem] bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 hover:border-blue-500/50 transition-all duration-500 shadow-sm hover:shadow-xl dark:shadow-none overflow-hidden"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="relative z-10 flex items-start gap-4 md:gap-6">
      <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 text-blue-600 dark:text-blue-400">
        <Icon className="w-5 h-5 md:w-6 md:h-6" />
      </div>
      <div>
        <h3 className="text-base md:text-lg font-bold text-slate-900 dark:text-white leading-snug tracking-tight">
          {title}
        </h3>
        <div className="mt-2 w-0 group-hover:w-full h-0.5 bg-blue-500/30 transition-all duration-500" />
      </div>
    </div>
  </MotionDiv>
);

const SystemProblem = () => {
  const problems = [
    { icon: MousePointer2, title: "Manual data entry between tools" },
    { icon: MailCheck, title: "Email-based approvals and handoffs" },
    { icon: FileClock, title: "Staff re-keying the same information" },
    { icon: Users, title: "Processes dependent on individuals" }
  ];

  return (
    <section className="py-16 md:py-32 px-6 md:px-12 relative z-10 scroll-mt-28 overflow-hidden bg-slate-50/30 dark:bg-transparent">
      <div className="max-w-7xl mx-auto">
        <MotionDiv
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid lg:grid-cols-12 gap-10 md:gap-16 items-start"
        >
          <div className="lg:col-span-5">
            <MotionDiv variants={fadeInUp}>
              <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-red-100 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 text-red-600 dark:text-red-400 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] mb-4 md:mb-6">
                <AlertCircle className="w-3 h-3" />
                The Friction Reality
              </div>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-slate-900 dark:text-white tracking-tighter leading-[1.1] font-space">
                Most businesses don’t have a growth problem. <br />
                <span className="text-blue-600 dark:text-blue-500">They have a systems problem.</span>
              </h2>
              <p className="text-base md:text-xl text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                Operational drag hides in plain sight — in manual handoffs, spreadsheets, and processes that only work because <span className="italic font-normal text-slate-900 dark:text-white">“someone knows how.”</span>
              </p>
            </MotionDiv>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {problems.map((p, i) => (
                <FrictionCard key={i} icon={p.icon} title={p.title} index={i} />
              ))}
            </div>
          </div>

          <div className="lg:col-span-12 mt-4 md:mt-8">
            <MotionDiv variants={fadeInUp}>
              <div className="space-y-4">
                <p className="text-lg md:text-2xl font-space leading-tight tracking-tight">
                  <span className="text-slate-900 dark:text-white font-bold">These issues do not just waste time.</span>
                  <span className="text-gray-400 dark:text-gray-500 font-medium sm:ml-3 block sm:inline mt-2 sm:mt-0">
                    They silently cap scale, increase errors, and force unnecessary headcount.
                  </span>
                </p>
                <div className="h-px w-20 bg-blue-500/30" />
                <p className="text-lg md:text-2xl text-blue-600 dark:text-blue-500 font-bold font-space tracking-tight">
                  Datamatically exists to remove this friction permanently.
                </p>
              </div>
            </MotionDiv>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
};

export default SystemProblem;
