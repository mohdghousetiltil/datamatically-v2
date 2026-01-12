import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/animations';

const MotionDiv = motion.div as any;

const ToolsSection = () => {
    const tools = [
        "n8n", "Python", "Zapier", "AI Agents", "NLP", "ML Models",
        "APIs", "Power Automate", "SQL", "R", "AWS", "Docker", "Azure"
    ];

    return (
        <section className="py-24 px-6 md:px-12 relative z-10 overflow-hidden bg-slate-50/50 dark:bg-white/5 border-y border-gray-200 dark:border-white/5 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto">
                <MotionDiv
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white tracking-tight">Tools Are Implementation Details</h2>
                    <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto"></div>
                </MotionDiv>

                <MotionDiv
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-4xl mx-auto"
                >
                    {tools.map((tool, idx) => (
                        <MotionDiv
                            key={idx}
                            variants={fadeInUp}
                            className="px-6 py-2.5 rounded-full bg-white/40 dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-white/10 text-slate-700 dark:text-gray-300 font-medium font-space text-sm md:text-base cursor-default transition-all duration-300 hover:scale-105 hover:bg-white/60 dark:hover:bg-white/10 hover:border-blue-500/50 hover:text-blue-600 dark:hover:text-blue-400 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                        >
                            {tool}
                        </MotionDiv>
                    ))}
                    <MotionDiv
                        variants={fadeInUp}
                        className="px-6 py-2.5 rounded-full border border-dashed border-gray-300 dark:border-white/20 text-gray-400 dark:text-gray-500 font-medium font-space text-sm md:text-base cursor-default italic"
                    >
                        and more ...
                    </MotionDiv>
                </MotionDiv>
            </div>
        </section>
    );
};

export default ToolsSection;