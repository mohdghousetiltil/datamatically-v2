
import React from 'react';
import { motion } from 'framer-motion';
import { Activity } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';

const MotionDiv = motion.div as any;

interface ProjectCardProps {
  project: {
    client: string;
    title: string;
    image: string;
    tag: string;
    stat: string;
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <MotionDiv 
      variants={fadeInUp}
      className="group relative overflow-hidden rounded-[2rem] md:rounded-[2.5rem] aspect-[4/5] shadow-xl dark:shadow-2xl bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-white/5 shrink-0 w-[85vw] md:w-auto snap-center"
    >
       <div className="absolute inset-0 overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover opacity-90 dark:opacity-70 group-hover:opacity-100 dark:group-hover:opacity-40 transition-all duration-700 scale-[1.1] group-hover:scale-[1.15]" 
          />
       </div>
       
       <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent dark:from-black dark:via-black/40 dark:to-transparent p-6 md:p-8 flex flex-col justify-end transition-all">
          <div className="transform md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-500 ease-out">
             <div className="flex justify-between items-center mb-3">
               <span className="text-blue-300 dark:text-blue-400 text-[9px] md:text-[10px] font-bold uppercase tracking-widest border border-blue-400/30 px-2 py-1 rounded-md bg-blue-900/30 dark:bg-blue-500/10 backdrop-blur-sm">{project.tag}</span>
             </div>
             <h3 className="text-xl md:text-2xl font-bold mb-1 leading-tight text-white tracking-tight">{project.title}</h3>
             <p className="text-gray-200 dark:text-gray-300 text-sm mb-4 font-light">{project.client}</p>
             
             <div className="pt-4 border-t border-white/20">
               <p className="text-white font-bold flex items-center gap-2 text-sm md:text-base">
                  <Activity className="w-4 h-4 text-green-400" /> {project.stat}
               </p>
             </div>
          </div>
       </div>
    </MotionDiv>
  );
};

const Projects = () => {
  const projects = [
    {
      client: "Elite FSA",
      title: "PODS Extraction System",
      image: "https://plus.unsplash.com/premium_photo-1705091310871-eac4ca9a06b7?q=80&w=735&auto=format&fit=crop",
      tag: "Deep Learning",
      stat: "2 Days Work → Mins"
    },
    {
      client: "Endless Turf",
      title: "Turf Quote Engine",
      image: "https://plus.unsplash.com/premium_photo-1724701624563-a7bb454393c4?q=80&w=1170&auto=format&fit=crop",
      tag: "AI Implementation",
      stat: "40m Saved Daily → 600 Hrs/Mo"
    },
    {
      client: "Melbourne FinTech",
      title: "Real-time Fraud Detection",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&format=crop",
      tag: "Finance",
      stat: "99.9% Accuracy"
    }
  ];

  return (
    <section id="projects" className="py-20 md:py-32 px-6 md:px-12 relative z-10 scroll-mt-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-slate-100 to-white dark:from-black/90 dark:via-black/95 dark:to-black -z-10" />
      <div className="max-w-7xl mx-auto">
        <MotionDiv 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 gap-6"
        >
          <div className="text-center md:text-left">
             <span className="text-blue-600 dark:text-blue-500 font-bold tracking-widest uppercase text-xs mb-3 block">Case Studies</span>
             <h2 className="text-3xl md:text-5xl font-bold mt-2 text-slate-900 dark:text-white tracking-tight">Engineered for Impact</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-md text-center md:text-left font-light text-sm md:text-base">
            See how we've helped Australian businesses save thousands of hours and millions of dollars.
          </p>
        </MotionDiv>

        <MotionDiv 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
          variants={staggerContainer}
          className="flex md:grid md:grid-cols-3 gap-6 md:gap-8 overflow-x-auto md:overflow-x-visible pb-4 md:pb-0 snap-x snap-mandatory scrollbar-hide no-scrollbar -mx-6 px-6 md:mx-0 md:px-0"
        >
          {/* Custom style to hide webkit scrollbars locally */}
          <style>{`
            .no-scrollbar::-webkit-scrollbar {
              display: none;
            }
            .no-scrollbar {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
          `}</style>
          
           {projects.map((p, i) => (
             <ProjectCard key={i} project={p} />
           ))}
        </MotionDiv>
        
        {/* Mobile Swipe Indicator (Optional - keeping it minimal) */}
        <div className="mt-6 flex justify-center gap-1.5 md:hidden">
          {projects.map((_, i) => (
            <div key={i} className="w-1 h-1 rounded-full bg-blue-500/20" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
