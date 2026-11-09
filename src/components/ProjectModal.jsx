import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, X, ChevronLeft, ChevronRight } from 'lucide-react';

const glitchAnimation = {
  initial: { opacity: 0, x: 10 },
  animate: { 
    opacity: [0, 1, 0.8, 1], // Simula parpadeo
    x: [10, -5, 2, 0],       // Simula interferencia horizontal
    transition: { duration: 0.2 } 
  }
};



const ProjectModal = ({ project, onClose }) => {
  const [currentImg, setCurrentImg] = useState(0);

  const nextImg = () => setCurrentImg((prev) => (prev + 1) % project.images.length);
  const prevImg = () => setCurrentImg((prev) => (prev - 1 + project.images.length) % project.images.length);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Fondo desenfocado */}
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
      />


      <motion.div
        variants={glitchAnimation}
        initial="initial"
        animate="animate"
        exit={{ opacity: 0, scale: 0.9 }}
        /*initial={{ scale: 0.9, y: 20, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.9, y: 20, opacity: 0 }}*/
        className="relative bg-slate-900 border-2 border-cyan-500 w-full max-w-3xl overflow-hidden shadow-[0_0_100px_rgba(6,182,212,0.3)] max-h-[90vh] overflow-y-auto"
      >
        <button onClick={onClose} className="absolute right-4 top-4 text-cyan-500 hover:text-white z-10">
          <X size={24} />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Lado Izquierdo: Slideshow */}
          <div className="relative bg-black aspect-video md:aspect-auto flex items-center justify-center group">
            <img 
              src={project.images[currentImg]} 
              className="w-full h-full object-cover opacity-80"
              alt="Project view"
            />
            {project.images.length > 1 && (
              <>
                <button onClick={prevImg} className="absolute left-2 p-1 bg-black/50 text-cyan-400 hover:bg-cyan-500 hover:text-black">
                  <ChevronLeft size={20}/>
                </button>
                <button onClick={nextImg} className="absolute right-2 p-1 bg-black/50 text-cyan-400 hover:bg-cyan-500 hover:text-black">
                  <ChevronRight size={20}/>
                </button>
              </>
            )}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[10px] bg-black/50 px-2 py-1">
              IMG_{currentImg + 1}/0{project.images.length}
            </div>
          </div>

          {/* Lado Derecho: Info */}
          <div className="p-8 space-y-4">
            <h3 className="text-3xl font-black text-cyan-400 tracking-tighter uppercase">{project.title}</h3>
            <div className="border-l-2 border-cyan-600 pl-4 py-2 bg-cyan-950/20">
              <p className="text-[13px] text-cyan-300 leading-relaxed italic">'{project.description}'</p>
            </div>
            
            <div className="space-y-2">
              <p className="text-[11px] text-cyan-700 font-bold uppercase tracking-[0.2em]">Detailed_Log:</p>
              <p className="text-md text-cyan-100">{project.details}</p>
            </div>

            <div className="pt-4">
              <p className="text-[11px] text-cyan-700 font-bold uppercase mb-2">Build_Stack:</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map(t => (
                  <span key={t} className="text-xs bg-cyan-500 text-black px-2 py-0.5 font-bold uppercase">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-wrap gap-4">
          {/* Enlace de GitHub - Siempre se muestra */}
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border border-cyan-500 text-cyan-400 text-xs font-bold uppercase hover:bg-cyan-500 hover:text-black transition-all"
          >
            <Github size={18} />
            <span>Source_Code</span>
          </a>

          {/* Enlace de Demo - Solo se muestra si project.demo existe */}
          {project.demo && (
            <a 
              href={project.demo} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-cyan-600 text-black text-xs font-bold uppercase hover:bg-cyan-400 transition-all shadow-[0_0_10px_rgba(8,145,178,0.5)]"
            >
              <ExternalLink size={18} />
              <span>Live_System</span>
            </a>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectModal;