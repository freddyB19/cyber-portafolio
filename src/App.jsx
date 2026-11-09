import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import ExperienceTimeline from './components/ExperienceTimeline';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-slate-950 min-h-screen text-cyan-500 font-mono relative overflow-hidden">
      {/* Efecto de Scanlines (Líneas de monitor antiguo) */}
      <div className="pointer-events-none fixed inset-0 z-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
      
      <AnimatePresence>
        {loading ? (
          <motion.div 
            key="loader"
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center h-screen space-y-4"
          >
            <p className="text-xl animate-pulse">INITIALIZING SYSTEM...</p>
            <div className="w-64 h-4 border border-cyan-500 p-1">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 2.5 }}
                className="h-full bg-cyan-500"
              />
            </div>
          </motion.div>
        ) : (
          <motion.main 
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-5xl mx-auto p-4 md:p-8 shadow-[0_0_50px_rgba(6,182,212,0.2)] border-x border-cyan-900/30"
          >
            <Header />
            {/* <ExperienceTimeline /> */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="md:col-span-2 space-y-12">
                <Projects />
              </div>
              <div className="space-y-12">
                <About />
                <TechStack />
              </div>
            </div>

            <Footer />
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;

