
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Pause, Play } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';

const MotionDiv = motion.div as any;

const TechnicalFoundation = () => {
  const [isPlaying, setIsPlaying] = useState(true);

  const tools = [
    "n8n", "Python", "Zapier", "AI Agents", "NLP", "ML Models",
    "APIs", "Power Automate", "SQL", "R", "AWS", "Docker", "Azure"
  ];

  const automationItems = [
    "Data Engineering", "Machine Learning Models", "Data Analysis", 
    "Manual Data Entry", "Reporting & Dashboards", "Logistics Workflows", 
    "CRM & Data Sync", "Document Automation", "Database Management", 
    "Invoice Processing", "Inventory Management", "Predictive Maintenance", 
    "Demand Forecasting", "Fraud Detection", "Real-Time Analytics", 
    "ERP Integrations", "API Integrations", "Cloud Automation", 
    "Compliance Reporting", "Route Optimization"
  ];
  
  const tickerItems = [...automationItems, ...automationItems];

  return (
    <section id="infrastructure" className="relative z-10 overflow-hidden bg-white dark:bg-[#030712]">
      
      {/* 1. Tools Section */}
      <div className="py-16 md:py-24 px-6 md:px-12 bg-slate-50/50 dark:bg-white/5 border-y border-gray-200 dark:border-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <MotionDiv
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-10 md:mb-16"
          >
            <h2 className="text-2xl md:text-5xl font-bold mb-3 md:mb-4 text-slate-900 dark:text-white tracking-tight font-space">
              Tools Are Details
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mb-6 font-space uppercase tracking-[0.2em] text-[9px] md:text-xs">
                Systems are permanent
            </p>
            <div className="h-1 w-16 md:w-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto"></div>
          </MotionDiv>

          <MotionDiv
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-wrap justify-center gap-2.5 md:gap-4 max-w-4xl mx-auto"
          >
            {tools.map((tool, idx) => (
              <MotionDiv
                key={idx}
                variants={fadeInUp}
                className="px-4 md:px-6 py-2 md:py-2.5 rounded-full bg-white/40 dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-white/10 text-slate-700 dark:text-gray-300 font-medium font-space text-xs md:text-base transition-all hover:border-blue-500/50"
              >
                {tool}
              </MotionDiv>
            ))}
            <MotionDiv
              variants={fadeInUp}
              className="px-4 md:px-6 py-2 md:py-2.5 rounded-full border border-dashed border-gray-300 dark:border-white/20 text-gray-400 dark:text-gray-500 font-medium font-space text-xs md:text-base italic"
            >
              and more ...
            </MotionDiv>
          </MotionDiv>
        </div>
      </div>

      {/* 2. Automation Ticker */}
      <div className="w-full py-12 md:py-24 relative z-10 group select-none overflow-hidden bg-white dark:bg-[#030712]">
        <div className="max-w-7xl mx-auto px-6 text-center mb-8 md:mb-10">
          <h2 className="text-base md:text-xl font-bold tracking-[0.1em] text-slate-900 dark:text-white font-space uppercase mb-1">
            The Scope
          </h2>
          <p className="text-[9px] md:text-xs text-gray-500 dark:text-gray-400 font-light max-w-2xl mx-auto uppercase tracking-[0.15em]">
            End-to-end workflows across data, AI, and operations
          </p>
        </div>

        <div className="w-full py-4 border-y border-gray-200 dark:border-white/5 bg-white/5 backdrop-blur-sm overflow-hidden relative">
          <div className="flex items-center gap-4 md:gap-6">
            <button 
              onClick={() => setIsPlaying(!isPlaying)}
              className="ml-4 md:ml-6 p-1.5 rounded-full bg-gray-100 dark:bg-white/10 hover:bg-blue-500 hover:text-white transition-all z-10 shadow-sm shrink-0"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
            </button>
            
            <div className="flex-1 overflow-hidden relative h-5">
              <MotionDiv 
                animate={isPlaying ? { x: ["0%", "-50%"] } : { x: "0%" }}
                transition={{ 
                  duration: 60, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
                className="flex gap-8 md:gap-12 whitespace-nowrap items-center w-max"
              >
                {tickerItems.map((item, idx) => (
                  <span 
                    key={idx} 
                    className="text-[9px] md:text-xs font-medium tracking-widest uppercase text-gray-500 dark:text-gray-400 flex items-center gap-8 md:gap-12 font-space"
                  >
                    {item}
                    <span className="text-blue-500/40 text-base">•</span>
                  </span>
                ))}
              </MotionDiv>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default TechnicalFoundation;
