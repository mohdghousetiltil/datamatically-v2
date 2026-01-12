import React from 'react';

const Footer = () => (
  <footer className="py-8 bg-slate-100 dark:bg-black border-t border-gray-200 dark:border-gray-900 text-center text-gray-500 dark:text-gray-600 text-[10px] uppercase font-bold tracking-widest relative z-10 font-space">
    <p>&copy; {new Date().getFullYear()} Datamatically Pty Ltd. Registered in Australia.</p>
  </footer>
);

export default Footer;