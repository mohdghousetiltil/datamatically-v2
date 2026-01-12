import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Logo from './Logo';

const MotionDiv = motion.div as any;

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.floor(Math.random() * 3) + 1;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 400);
          return 100;
        }
        return next;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <MotionDiv 
      className="fixed inset-0 z-[100] bg-slate-50 dark:bg-[#030712] flex flex-col items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
    >
       <div className="relative flex flex-col items-center">
         <MotionDiv
           initial={{ opacity: 0, scale: 0.9, y: 10 }}
           animate={{ opacity: 1, scale: 1, y: 0 }}
           transition={{ duration: 0.5 }}
           className="mb-8 scale-[1.5]"
         >
           <Logo />
         </MotionDiv>
         
         <div className="w-48 h-[2px] bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden relative">
            <MotionDiv 
                className="absolute top-0 left-0 bottom-0 bg-gradient-to-r from-blue-600 to-purple-600"
                style={{ width: `${progress}%` }}
                layoutId="progress"
            />
         </div>
         
         <div className="mt-4 flex justify-between w-48 text-[10px] font-mono uppercase tracking-widest text-gray-400 dark:text-gray-500">
             <span>System Load</span>
             <span>{progress}%</span>
         </div>
       </div>
    </MotionDiv>
  );
};

export default LoadingScreen;