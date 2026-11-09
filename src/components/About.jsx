import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  // El texto se puede dividir para dar énfasis a ciertas partes
  const profileData = {
    origin: "SECTOR_06",
    clearance: "LEVEL_4",
    specialization: "SISTEMAS_BACKEND_CRÍTICOS",
    biography: "DESARROLLADOR ESPECIALIZADO EN LA CONSTRUCCIÓN DE ARQUITECTURAS ROBUSTAS Y ESCALABLES. EXPERTO EN LA GESTIÓN DE FLUJOS DE DATOS COMPLEJOS Y OPTIMIZACIÓN DE PROCESOS EN TIEMPO REAL. COMPROMETIDO CON LA SEGURIDAD Y LA INTEGRIDAD DEL SISTEMA."
  };

  return (
    <section className="space-y-6 relative">
      <div className="flex items-center gap-4">
        <h3 className="text-xl font-bold tracking-widest text-cyan-400 uppercase">./USER_BIO</h3>
        <div className="h-[1px] flex-1 bg-cyan-900/50"></div>
      </div>

      <div className="bg-slate-900/40 border-l-2 border-cyan-500 p-6 font-mono relative overflow-hidden">
        {/* Decoración de fondo tipo rejilla */}
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[grid:20px_20px] bg-[linear-gradient(to_right,#06b6d4_1px,transparent_1px),linear-gradient(to_bottom,#06b6d4_1px,transparent_1px)]" />

        <div className="relative z-10 space-y-4 text-xs md:text-sm">
          <div className="grid grid-cols-2 gap-2 text-cyan-700 font-bold mb-4">
            <div>ORIGIN: <span className="text-cyan-400">{profileData.origin}</span></div>
            <div>AUTH_LEVEL: <span className="text-cyan-400">{profileData.clearance}</span></div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <p className="text-cyan-500/60 uppercase tracking-tighter">
              &gt; INICIANDO RECUPERACIÓN DE PERFIL...
            </p>
            
            <p className="text-cyan-300 leading-relaxed tracking-wide border-b border-cyan-900/50 pb-4">
              {profileData.biography}
            </p>

            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-cyan-500 animate-pulse" />
              <p className="text-cyan-600 uppercase italic">
                Sistemas operativos: [UNIX/LINUX_CORE]
              </p>
            </div>
          </motion.div>
        </div>

        {/* Pequeña marca de agua de "Confidencial" */}
        <div className="absolute top-2 right-2 opacity-10 rotate-12 pointer-events-none">
          <p className="border-2 border-red-500 text-red-500 font-black px-2 py-1 text-[10px] uppercase">
            RESTRICTED_ACCESS
          </p>
        </div>
      </div>

      {/* Decoración de radar o círculo técnico */}
      <div className="hidden md:block absolute -right-4 -top-4 w-24 h-24 border border-cyan-900/20 rounded-full animate-[spin_10s_linear_infinite]" />
    </section>
  );
};

export default About;