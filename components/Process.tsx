import React from 'react';
import { motion } from 'framer-motion';
import { Search, Zap, Rocket, CheckCircle } from 'lucide-react';
import { fadeInUp } from '../utils/animations';

const MotionDiv = motion.div as any;

const Process = () => {
    const steps = [
        {
            icon: Search,
            title: "Discovery",
            desc: "We dive deep into your existing workflows to uncover bottlenecks and data silos."
        },
        {
            icon: Zap,
            title: "Strategy",
            desc: "We design a custom automation architecture tailored to your specific business KPIs."
        },
        {
            icon: Rocket,
            title: "Implementation",
            desc: "Our engineers build, test, and deploy your solution with minimal disruption to operations."
        },
        {
            icon: CheckCircle,
            title: "Optimization",
            desc: "Continuous monitoring and AI model retraining ensure your system improves over time."
        }
    ];

    return (
        <section id="process" className="py-32 px-6 md:px-12 relative z-10 bg-slate-50/50 dark:bg-white/5 border-y border-gray-200 dark:border-white/5 backdrop-blur-sm scroll-mt-28">
            <div className="max-w-7xl mx-auto">
                <MotionDiv
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="text-center mb-20"
                >
                    <span className="text-blue-600 dark:text-blue-400 font-bold tracking-widest uppercase text-xs mb-3 block">How We Work</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">The Automation Blueprint</h2>
                    <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 font-light">From audit to deployment, our proven methodology ensures a seamless transition to automated operations.</p>
                </MotionDiv>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                     <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-blue-500/0 dark:via-blue-500/50" />

                     {steps.map((step, idx) => (
                         <MotionDiv
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            className="relative z-10 flex flex-col items-center text-center group"
                         >
                             <div className="w-24 h-24 rounded-full bg-white dark:bg-black border-4 border-slate-100 dark:border-gray-800 flex items-center justify-center mb-6 group-hover:border-blue-500 transition-colors shadow-xl">
                                 <step.icon className="w-8 h-8 text-gray-400 dark:text-gray-600 group-hover:text-blue-500 transition-colors" />
                             </div>
                             <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight">{step.title}</h3>
                             <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-light">{step.desc}</p>
                         </MotionDiv>
                     ))}
                </div>
            </div>
        </section>
    );
};

export default Process;