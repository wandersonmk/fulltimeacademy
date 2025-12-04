
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled ? "bg-cyber-darker/80 backdrop-blur-md shadow-md" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-1">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img src="/images/logo.png" alt="Fulltime Academy" className="h-12 sm:h-16 w-auto" />
            </a>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#sobre" className="text-sm text-white/80 hover:text-cyber-purple transition-colors">
              Sobre o Curso
            </a>
            <a href="#para-quem" className="text-sm text-white/80 hover:text-cyber-purple transition-colors">
              Para Quem é
            </a>
            <a href="#beneficios" className="text-sm text-white/80 hover:text-cyber-purple transition-colors">
              Benefícios
            </a>
            <a href="#depoimentos" className="text-sm text-white/80 hover:text-cyber-purple transition-colors">
              Depoimentos
            </a>
            <a href="#garantia" className="text-sm text-white/80 hover:text-cyber-purple transition-colors">
              Garantia
            </a>
          </nav>
          <div className="hidden md:block">
            <a 
              href="#inscricao" 
              className="px-5 py-2 rounded-md bg-gradient-to-r from-cyber-purple to-cyber-pink text-white font-medium hover:from-cyber-pink hover:to-cyber-purple transition-all duration-300 shadow-lg shadow-cyber-purple/30">
              Inscreva-se
            </a>
          </div>
          <button className="md:hidden text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
