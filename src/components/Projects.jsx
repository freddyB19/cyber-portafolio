import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import {PROJECTS_DATA} from './utils/projects.js'
import ProjectModal from './ProjectModal';



const Projects = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);

  // Filtrado por tecnología
  const filteredProjects = PROJECTS_DATA.filter(project =>
    project.tech.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <section className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-cyan-900 pb-4">
        <h3 className="text-2xl font-bold tracking-widest text-cyan-400 uppercase">./PROJECTS</h3>
        
        <div className="mt-4 md:mt-0 relative">
          <input 
            type="text"
            placeholder="FILTRAR POR TECNOLOGÍA..."
            className="bg-slate-900 border border-cyan-800 p-2 text-xs focus:outline-none focus:border-cyan-400 w-64 uppercase tracking-widest"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm && (
              <div className="absolute right-2 top-2 text-[10px] text-cyan-800 animate-pulse">SEARCHING_</div>
          )}
          
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {filteredProjects.map(project => (
          <motion.div 
            key={project.id}
            whileHover={{ scale: 1.02 }}
            onClick={() => setSelectedProject(project)}
            className="border border-cyan-900 p-4 bg-slate-900/30 cursor-pointer hover:bg-cyan-900/20 transition-all group"
          >
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-bold text-lg group-hover:text-cyan-300">{project.title}</h4>
              <span className="text-[10px] bg-cyan-950 px-2 py-1 border border-cyan-800">{project.type}</span>
            </div>
            <p className="text-sm text-cyan-700 mb-4 line-clamp-2">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map(t => (
                <span key={t} className="text-[12px] text-cyan-400 border border-cyan-900 px-1">[{t}]</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;