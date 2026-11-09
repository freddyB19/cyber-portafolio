import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, Briefcase } from 'lucide-react';

import {EXPERIENCE_DATA} from './utils/experienceData.js';

const ExperienceTimeline = () => {
  const [selectedExp, setSelectedExp] = useState(null);
  const containerRef = useRef(null);

  // Función para desplazar el carrusel horizontalmente
  const scroll = (direction) => {
    if (containerRef.current) {
      const { scrollLeft, clientWidth } = containerRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      containerRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="mt-16 space-y-8 relative">
      <div className="flex items-center gap-4">
        <h3 className="text-xl font-bold tracking-widest text-cyan-400 uppercase">./WORK_HISTORY</h3>
        <div className="h-[1px] flex-1 bg-cyan-900/50"></div>
      </div>

      <div className="relative group">
        {/* Botones de navegación del carrusel */}
        <button 
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-slate-950/80 border border-cyan-800 text-cyan-500 hover:text-white"
        >
          <ChevronLeft size={24} />
        </button>

        <div 
          ref={containerRef}
          className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory gap-8 px-12 py-12"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {/* La Línea Continua */}
          <div className="absolute top-[48%] left-0 w-full h-[2px] bg-cyan-900/30 z-0" />

          {EXPERIENCE_DATA.map((exp, index) => (
            <motion.div 
              key={exp.id}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedExp(exp)}
              className="flex-shrink-0 w-64 snap-center cursor-pointer relative z-10 flex flex-col items-center"
            >
              {/* Punto de la línea de tiempo */}
              <div className="w-4 h-4 rounded-full border-2 border-cyan-500 bg-slate-900 shadow-[0_0_10px_#06b6d4] mb-4" />
              
              {/* Información rápida */}
              <div className="text-center space-y-2">
                <p className="text-[11px] font-mono text-cyan-600 tracking-widest">{exp.period}</p>
                <h4 className="text-md font-bold text-cyan-400 uppercase tracking-tighter leading-tight h-8 flex items-center justify-center">
                  {exp.role}
                </h4>
                <p className="text-[12px] text-cyan-700 italic">{exp.company}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <button 
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-slate-950/80 border border-cyan-800 text-cyan-500 hover:text-white"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Modal de Detalle de Experiencia */}
      <AnimatePresence>
        {selectedExp && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setSelectedExp(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative bg-slate-900 border-2 border-cyan-500 p-8 max-w-lg w-full shadow-[0_0_50px_rgba(6,182,212,0.3)]"
            >
              <button onClick={() => setSelectedExp(null)} className="absolute right-4 top-4 text-cyan-500 hover:text-white">
                <X size={20} />
              </button>
              
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="text-cyan-500" size={24} />
                <div>
                  <h3 className="text-xl font-black text-cyan-400 uppercase tracking-tighter leading-none">{selectedExp.role}</h3>
                  <p className="text-[12px] text-cyan-700 uppercase tracking-widest mt-1">{selectedExp.company} // {selectedExp.period}</p>
                </div>
              </div>

              <div className="space-y-4 font-mono text-sm text-cyan-100">
                <p className="border-l-2 border-cyan-700 pl-4 py-1 italic text-cyan-300">"{selectedExp.description}"</p>
                <div className="space-y-2">
                  <p className="text-[12px] text-cyan-600 font-bold uppercase tracking-[0.2em] underline decoration-cyan-900 underline-offset-4">REGISTRO_DE_TAREAS:</p>
                  <p className="text-md leading-relaxed">{selectedExp.details}</p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ExperienceTimeline;