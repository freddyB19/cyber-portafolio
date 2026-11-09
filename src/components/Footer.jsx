import React from 'react';
import { FileText, ShieldCheck, Zap } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t-2 border-cyan-900 bg-slate-950/80 p-8 relative overflow-hidden">
      {/* Efecto de resplandor de fondo */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-cyan-500 shadow-[0_0_30px_#06b6d4] opacity-20" />

      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Lado Izquierdo: Identidad Visual */}
          <div className="flex items-center gap-4 group">
            <div className="p-3 border border-cyan-800 bg-cyan-950/30 group-hover:border-cyan-400 transition-colors">
              <ShieldCheck className="text-cyan-600 group-hover:text-cyan-400" size={32} />
            </div>
            <div className="text-[11px] tracking-[0.2em] text-cyan-800 uppercase leading-tight">
              <p>Property of Miranda</p>
              <p>Backend developer, Sector 6</p>
              <p className="text-cyan-600 font-bold mt-1">© {currentYear} ALL RIGHTS RESERVED</p>
            </div>
          </div>

          {/* Centro: Botón de CV (Call to Action) */}
          <a 
            href="/tu-cv.pdf" 
            target="_blank"
            className="relative group px-6 py-3 border border-cyan-500 bg-transparent overflow-hidden"
          >
            <div className="absolute inset-0 bg-cyan-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <div className="relative flex items-center gap-3 text-cyan-400 group-hover:text-black font-bold uppercase tracking-widest text-xs">
              <FileText size={18} />
              <span>Descargar_CV.exe</span>
            </div>
          </a>
        </div>

        {/* Línea de Estado Final */}
        <div className="mt-8 pt-4 border-t border-cyan-900/30 flex justify-between items-center text-[9px] text-cyan-900 uppercase tracking-widest">
          <div className="flex gap-4">
            <span>Uptime: 99.9%</span>
            <span>Signal: Strong</span>
          </div>
          <div className="flex items-center gap-1 animate-pulse">
            <Zap size={10} />
            <span>Connection Secure</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;