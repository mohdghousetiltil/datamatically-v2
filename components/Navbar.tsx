import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, LogIn } from 'lucide-react';
import Logo from './Logo';
import { scrollToSection } from '../utils/helpers';

const MotionHeader = motion.header as any;
const MotionDiv = motion.div as any;

const Navbar = ({ toggleTheme, isDark }: { toggleTheme: () => void, isDark: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Services', id: 'services' },
    { name: 'Process', id: 'process' },
    { name: 'Projects', id: 'projects' },
    { name: 'Founders', id: 'team' },
    { name: 'Contact Us', id: 'contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent, id: string) => {
      scrollToSection(e, id);
      setIsOpen(false);
  }

  return (
    <MotionHeader
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-700 ${
        scrolled 
          ? 'h-16 bg-white/40 dark:bg-[#030712]/40 backdrop-blur-3xl border-b border-white/20 dark:border-white/10 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)]' 
          : 'h-24 bg-transparent border-transparent'
      }`}
    >
      {/* Premium Glass Texture & Highlights */}
      <div className={`absolute inset-0 transition-opacity duration-700 pointer-events-none overflow-hidden ${scrolled ? 'opacity-100' : 'opacity-0'}`}>
        {/* Fine Grain Texture */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
        
        {/* Top Highlight line (Internal Glass Edge) */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/50 dark:via-white/20 to-transparent" />
        
        {/* Dynamic Sweep / Shine */}
        <MotionDiv 
          animate={scrolled ? { x: ['-100%', '200%'] } : {}}
          transition={{ duration: 3, repeat: Infinity, repeatDelay: 5, ease: "easeInOut" }}
          className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/10 dark:via-white/5 to-transparent skew-x-12"
        />
        
        {/* Inner Glow / Shadow for depth */}
        <div className="absolute inset-x-0 bottom-0 h-px bg-white/10 dark:bg-white/5" />
      </div>

      <div className="max-w-7xl mx-auto h-full px-6 md:px-12 flex items-center justify-between relative z-10">
        {/* Logo Section (Left) */}
        <a 
          href="#" 
          onClick={(e) => scrollToSection(e, 'root')} 
          className="flex items-center gap-3 group transition-transform duration-300 hover:scale-[1.02]"
        >
          <Logo />
          <span className="text-xl md:text-2xl font-bold font-space tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 group-hover:to-gray-900 dark:group-hover:to-white transition-all duration-500">
            Datamatically
          </span>
        </a>

        {/* Navigation and Actions (Right) */}
        <div className="hidden md:flex items-center gap-10">
          <nav className="flex items-center gap-8">
            {links.map((link) => (
              <a 
                  key={link.name} 
                  href={`#${link.id}`} 
                  onClick={(e) => handleLinkClick(e, link.id)}
                  className={`text-[11px] font-bold uppercase tracking-[0.2em] transition-all relative group font-space ${
                    link.id === 'contact' 
                      ? 'text-blue-600 dark:text-blue-400' 
                      : 'text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white'
                  }`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500/50 transition-all group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button 
              onClick={toggleTheme} 
              className="p-2 rounded-xl hover:bg-white/40 dark:hover:bg-white/10 text-gray-700 dark:text-gray-300 transition-all duration-300 border border-transparent hover:border-white/20 hover:shadow-inner"
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <a 
              href="https://app.datamatically.com/" 
              className="px-6 py-2 rounded-xl bg-slate-900/90 dark:bg-white/90 text-white dark:text-black text-[10px] font-bold uppercase tracking-[0.2em] font-space hover:scale-105 active:scale-95 transition-all shadow-md hover:shadow-blue-500/20 backdrop-blur-sm"
            >
              Login
            </a>
          </div>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-2 md:hidden">
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-xl bg-white/20 dark:bg-black/20 backdrop-blur-xl border border-white/30 dark:border-white/10 text-gray-700 dark:text-gray-300"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="p-2 rounded-xl bg-white/20 dark:bg-black/20 backdrop-blur-xl border border-white/30 dark:border-white/10 text-gray-900 dark:text-white"
          >
             {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <MotionDiv 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 bg-white/80 dark:bg-[#030712]/80 backdrop-blur-3xl border-b border-gray-200 dark:border-gray-800 shadow-2xl overflow-hidden md:hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {links.map((link) => (
                <a 
                    key={link.name} 
                    href={`#${link.id}`} 
                    onClick={(e) => handleLinkClick(e, link.id)}
                    className="text-lg text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-white font-medium font-space tracking-wide"
                >
                  {link.name}
                </a>
              ))}
              <div className="h-[1px] w-full bg-gray-200 dark:bg-white/10 my-2"></div>
              <a 
                href="https://app.datamatically.com/" 
                className="flex items-center justify-center gap-2 w-full py-4 bg-slate-900 dark:bg-white text-white dark:text-black rounded-2xl font-bold font-space uppercase tracking-widest"
              >
                Login to Dashboard
              </a>
            </div>
          </MotionDiv>
        )}
      </AnimatePresence>
    </MotionHeader>
  );
};

export default Navbar;