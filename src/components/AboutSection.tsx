
import React from 'react';
import { Button } from './ui/button';
import { ExternalLink } from 'lucide-react';

const AboutSection = () => {
  const courseModules = [
    {
      id: 1,
      title: "Configurando o VS Code com IA",
      description: "Configure seu ambiente de desenvolvimento profissional no VS Code com as extensões de IA certas para criar sites do zero.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Criando Sites com Inteligência Artificial",
      description: "Use IA para gerar estruturas de páginas, escrever código e criar layouts profissionais com apenas algumas descrições em texto.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Design Profissional e Responsivo",
      description: "Aprenda a estilizar seus sites com Tailwind CSS e garantir que fiquem perfeitos em qualquer dispositivo, do celular ao desktop.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      )
    },
    {
      id: 4,
      title: "Publicando seu Site Online",
      description: "Coloque seu site no ar gratuitamente em minutos usando plataformas como Vercel e GitHub, com domínio profissional.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
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
            A Fulltime Academy é um mini curso prático que ensina como criar sites profissionais usando Inteligência Artificial diretamente no VS Code, do ambiente de desenvolvimento à publicação online.
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
            Do zero ao site no ar: aprenda com <span className="text-cyber-purple">aulas práticas e projetos reais</span> usando IA como sua principal ferramenta.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="#inscricao" 
              className="inline-block px-6 py-3 text-base font-medium rounded-md bg-gradient-to-r from-cyber-purple to-cyber-pink text-white hover:from-cyber-pink hover:to-cyber-purple transition-all duration-300 shadow-lg shadow-cyber-purple/30">
              Começar Agora
            </a>
          </div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute right-0 top-1/4 w-1/3 h-64 bg-cyber-purple/10 rounded-full blur-[100px] -z-10"></div>
    </section>
  );
};

export default AboutSection;
