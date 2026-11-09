import React from 'react';
import { motion } from 'framer-motion';

const TECHNOLOGIES = [
  { name: 'HTML5', icon: 'https://cdn.simpleicons.org/html5/06B6D4', level: '88%' },
  { name: 'Javascript', icon: 'https://cdn.simpleicons.org/javascript/06B6D4', level: '75%' },
  { name: 'CSS', icon: 'https://cdn.simpleicons.org/css/06B6D4', level: '55%' },
  { name: 'Python', icon: 'https://cdn.simpleicons.org/python/06B6D4', level: '85%' },
  { name: 'Django', icon: 'https://cdn.simpleicons.org/django/06B6D4', level: '75%' },
  { name: 'Fastapi', icon: 'https://cdn.simpleicons.org/fastapi/06B6D4', level: '75%' },
  { name: 'Flask', icon: 'https://cdn.simpleicons.org/flask/06B6D4', level: '75%' },
  { name: 'PostgreSQL', icon: 'https://cdn.simpleicons.org/postgresql/06B6D4', level: '70%' },
  { name: 'Redis', icon: 'https://cdn.simpleicons.org/redis/06B6D4', level: '60%' },

];


const TechStack = () => {
  return (
    <section className="space-y-6">
      <div className="flex items-center gap-4">
        <h3 className="text-xl font-bold tracking-widest text-cyan-400 uppercase">./TECH_STACK</h3>
        <div className="h-[1px] flex-1 bg-cyan-900/50"></div>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {TECHNOLOGIES.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.1 }} º
            className="flex flex-col cursor-help items-center"
          >
            {/* Contenedor del Icono con Resplandor */}
            <div className="w-full max-w-[100px] aspect-square border border-cyan-900 bg-slate-900/50 flex items-center justify-center p-4 relative overflow-hidden">
              {/* Efecto de pulso de fondo */}
              <div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              
                <img 
                  src={tech.icon} 
                  alt={tech.name}
                  className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(6,182,212,0.8)] grayscale group-hover:grayscale-0 transition-all"
                />
            </div>
            
            {/* Etiqueta de información tipo terminal */}
            <div className="mt-2 text-center w-full max-w-[100px]">
              <p className="text-[11px] text-cyan-600 font-bold truncate">{tech.name}</p>
              <div className="w-full h-1 bg-cyan-950 mt-1">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: tech.level }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-full bg-cyan-500 shadow-[0_0_5px_#06b6d4]"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;