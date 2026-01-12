import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Pause, Play } from 'lucide-react';

const MotionDiv = motion.div as any;

export const AutomationTicker = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const items = [
    "Data Engineering", "Machine Learning Models", "Data Analysis", 
    "Manual Data Entry", "Reporting & Dashboards", "Logistics Workflows", 
    "CRM & Data Sync", "Document Automation", "Database Management", 
    "Invoice Processing", "Inventory Management", "Predictive Maintenance", 
    "Demand Forecasting", "Fraud Detection", "Real-Time Analytics", 
    "ERP Integrations", "API Integrations", "Cloud Automation", 
    "Compliance Reporting", "Route Optimization"
  ];
  
  const tickerItems = [...items, ...items];

  return (
    <section className="w-full py-16 md:py-24 relative z-10 group select-none overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center mb-10">
        <h2 className="text-lg md:text-xl font-bold tracking-[0.1em] text-slate-900 dark:text-white font-space uppercase mb-1">
          What We Automate
        </h2>
        <p className="text-[10px] md:text-xs text-gray-500 dark:text-gray-400 font-light max-w-2xl mx-auto uppercase tracking-[0.15em]">
          End-to-end workflows across data, AI, and operations
        </p>
      </div>

      <div className="w-full py-4 border-y border-gray-200 dark:border-white/5 bg-white/5 backdrop-blur-sm overflow-hidden relative">
        <div className="flex items-center gap-6">
          <button 
            onClick={() => setIsPlaying(!isPlaying)}
            className="ml-6 p-1.5 rounded-full bg-gray-100 dark:bg-white/10 hover:bg-blue-500 hover:text-white transition-all z-10 shadow-sm shrink-0"
            aria-label={isPlaying ? "Pause Ticker" : "Play Ticker"}
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
              className="flex gap-12 whitespace-nowrap items-center w-max"
            >
              {tickerItems.map((item, idx) => (
                <span 
                  key={idx} 
                  className="text-[10px] md:text-xs font-medium tracking-widest uppercase text-gray-500 dark:text-gray-400 flex items-center gap-12 font-space"
                >
                  {item}
                  <span className="text-blue-500/40 text-base">•</span>
                </span>
              ))}
            </MotionDiv>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomationTicker;