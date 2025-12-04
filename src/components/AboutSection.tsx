
import React from 'react';
import { Button } from './ui/button';
import { ExternalLink } from 'lucide-react';

const AboutSection = () => {
  const courseModules = [
    {
      id: 1,
      title: "Fundamentos da IA no WhatsApp",
      description: "Aprenda os conceitos básicos de integração de IA com o WhatsApp e configure seu ambiente de automação.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Criação de Chatbots Inteligentes",
      description: "Desenvolva assistentes virtuais capazes de realizar atendimento humanizado e responder perguntas complexas.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Desenvolvimento de Apps Componentizados",
      description: "Construa aplicativos modulares e escaláveis usando arquitetura de componentes reutilizáveis e design systems modernos.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      id: 4,
      title: "Integração com APIs e Ferramentas",
      description: "Conecte seu sistema de automação com outras plataformas para criar fluxos de trabalho completos e eficientes.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ];
  
  return (
    <section id="sobre" className="py-20 relative overflow-hidden">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white reveal-on-scroll">
            Sobre o <span className="text-cyber-purple text-glow">Curso</span>
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto reveal-on-scroll" style={{animationDelay: '0.1s'}}>
            A Fulltime Academy é um programa completo que ensina como utilizar inteligência artificial para criar automações poderosas no WhatsApp, transformando a maneira como você se comunica com seus clientes.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courseModules.map((module, index) => (
            <div 
              key={module.id} 
              className="glass p-6 rounded-xl border border-cyber-purple/20 hover:border-cyber-purple/50 transition-all duration-300 reveal-on-scroll"
              style={{animationDelay: `${0.1 + index * 0.1}s`}}
            >
              <div className="w-16 h-16 rounded-full bg-cyber-purple/20 flex items-center justify-center mb-4 text-cyber-purple">
                {module.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{module.title}</h3>
              <p className="text-white/70">{module.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center reveal-on-scroll" style={{animationDelay: '0.5s'}}>
          <p className="text-xl text-white/90 font-medium mb-8">
            Transforme seu conhecimento em resultados reais com nossas <span className="text-cyber-purple">aulas práticas e exemplos do mundo real</span>.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="#inscricao" 
              className="inline-block px-6 py-3 text-base font-medium rounded-md bg-gradient-to-r from-cyber-purple to-cyber-pink text-white hover:from-cyber-pink hover:to-cyber-purple transition-all duration-300 shadow-lg shadow-cyber-purple/30">
              Começar Agora
            </a>
            <Button 
              variant="outline" 
              className="border-cyber-purple hover:bg-cyber-purple/20 text-white"
              onClick={() => window.open('https://hub.la/g/gADxxrJCI7RmD84DoiOV', '_blank', 'noopener,noreferrer')}
            >
              Ver Conteúdo do Curso <ExternalLink className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute right-0 top-1/4 w-1/3 h-64 bg-cyber-purple/10 rounded-full blur-[100px] -z-10"></div>
    </section>
  );
};

export default AboutSection;
