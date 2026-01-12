import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';
import { fadeInUp } from '../utils/animations';

const MotionDiv = motion.div as any;

const Founders = () => {
    const founders = [
        { 
            name: "Mohammed Ghouse Tiltil", 
            role: "Head of Technology", 
            img: "https://ui-avatars.com/api/?name=Mohammed+Ghouse+Tiltil&background=0f172a&color=fff&size=200",
            desc: "Leading the technical vision, architecting bespoke AI models and data ecosystems that drive automation.",
            linkedin: "https://www.linkedin.com/in/mohammed-ghouse-tiltil/",
            email: "mailto:hello@datamatically.com"
        },
        { 
            name: "Charlie Guthrie", 
            role: "Head of Sales", 
            img: "https://ui-avatars.com/api/?name=Charlie+Guthrie&background=0f172a&color=fff&size=200",
            desc: "Spearheading client partnerships and ensuring every automation solution delivers measurable financial ROI.",
            linkedin: "#",
            email: "#"
        },
        { 
            name: "Craig Haydon", 
            role: "Head of Strategy", 
            img: "https://ui-avatars.com/api/?name=Craig+Haydon&background=0f172a&color=fff&size=200",
            desc: "Developing long-term strategic roadmaps and financial frameworks to sustain rapid business growth.",
            linkedin: "https://www.linkedin.com/in/craig-haydon-447aa673/",
            email: "#"
        }
    ];

    return (
        <section id="team" className="py-24 px-6 md:px-12 relative z-10 scroll-mt-28">
            <div className="max-w-7xl mx-auto">
                 <MotionDiv 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="text-center mb-16"
                 >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white tracking-tight">Meet the Leadership</h2>
                    <p className="text-gray-600 dark:text-gray-400 font-light">The minds behind the automation revolution.</p>
                 </MotionDiv>

                 <div className="grid md:grid-cols-3 gap-8">
                     {founders.map((founder, idx) => (
                         <MotionDiv
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            className="bg-white/60 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-[2.5rem] p-8 backdrop-blur-md hover:-translate-y-2 transition-transform duration-300 group"
                         >
                             <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden border-2 border-blue-500/20 group-hover:border-blue-500 transition-colors">
                                 <img src={founder.img} alt={founder.name} className="w-full h-full object-cover" />
                             </div>
                             <h3 className="text-xl font-bold text-slate-900 dark:text-white text-center mb-1 tracking-tight">{founder.name}</h3>
                             <p className="text-blue-600 dark:text-blue-400 text-[10px] font-bold text-center uppercase tracking-widest mb-4">{founder.role}</p>
                             <p className="text-center text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 font-light">{founder.desc}</p>
                             <div className="flex justify-center gap-4">
                                 {founder.linkedin !== "#" && (
                                     <a href={founder.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-100 dark:bg-white/10 rounded-full hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-all text-gray-600 dark:text-gray-400">
                                         <Linkedin className="w-4 h-4" />
                                     </a>
                                 )}
                                 {founder.email !== "#" && (
                                     <a href={founder.email} className="p-2 bg-gray-100 dark:bg-white/10 rounded-full hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-all text-gray-600 dark:text-gray-400">
                                         <Mail className="w-4 h-4" />
                                     </a>
                                 )}
                             </div>
                         </MotionDiv>
                     ))}
                 </div>
            </div>
        </section>
    );
};

export default Founders;