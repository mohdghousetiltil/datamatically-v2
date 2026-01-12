
import React, { useState, useEffect, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Scene from './components/Scene';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SystemProblem from './components/SystemProblem';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import ValueFit from './components/ValueFit';
import TechnicalFoundation from './components/TechnicalFoundation';
import Projects from './components/Projects';
import Founders from './components/Founders';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';

const MotionMain = motion.main as any;

export default function App() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      return savedTheme || 'light'; 
    }
    return 'light';
  });

  const isDark = theme === 'dark';

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <>
      <AnimatePresence>
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>
      
      {!loading && (
        <div className="min-h-screen bg-slate-50 dark:bg-[#030712] transition-colors duration-500">
            <div className="fixed inset-0 z-0 pointer-events-none opacity-40 dark:opacity-100">
                <Suspense fallback={<div className="w-full h-full bg-slate-50 dark:bg-[#030712]" />}>
                    <Scene isDark={isDark} />
                </Suspense>
            </div>

            <MotionMain
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="relative z-10 min-h-screen selection:bg-blue-500 selection:text-white"
            >
              <Navbar toggleTheme={toggleTheme} isDark={isDark} />
              <Hero />
              <SystemProblem />
              <Services />
              <HowItWorks />
              <ValueFit />
              <Projects />
              <TechnicalFoundation />
              <Founders />
              <Contact />
              <Footer />
            </MotionMain>
        </div>
      )}
    </>
  );
}
