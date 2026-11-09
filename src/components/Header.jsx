import { Github, Linkedin } from 'lucide-react';

const Header = () => {
  return (
    <header className="border-2 border-cyan-800 p-6 bg-slate-900/50 backdrop-blur-sm relative">
      <div className="flex flex-col md:flex-row gap-6 items-center">
        {/* Foto de Perfil con efecto Pixel */}
        <div className="w-40 h-48 border border-cyan-500 relative overflow-hidden group">
          <img 
            src="https://via.placeholder.com/150" 
            alt="Profile" 
            className="w-full h-full object-cover grayscale sepia hover:grayscale-0 transition-all"
          />
          <div className="absolute inset-0 bg-cyan-500/10 mix-blend-overlay" />
        </div>

        <div className="flex-1 text-center md:text-left">
          <p className="text-xs text-cyan-700 tracking-[0.3em]">IDENTIFICATION UNIT</p>
          <h1 className="text-4xl font-bold uppercase tracking-tighter text-cyan-400">USER_NAME_HERE</h1>
          <h2 className="text-xl text-cyan-600 mb-4 tracking-widest uppercase">Backend Developer</h2>
          
          <div className="flex justify-center md:justify-start gap-4">
            <a href="#" className="hover:text-white transition-colors"><Github size={20}/></a>
            <a href="#" className="hover:text-white transition-colors"><Linkedin size={20}/></a>
          </div>
        </div>

        <div className="hidden md:block text-right border-l border-cyan-900 pl-6 text-[11px] space-y-1">
          <p>SEC CODE: 102818-G-663226</p>
          <p>STATUS: ACTIVE</p>
          <p>LOCATION: SECTOR 6</p>
        </div>
      </div>
    </header>
  );
};
export default Header;