
import React, { useEffect, useState, useRef } from 'react';
import { Button } from './ui/button';
import { ExternalLink, Play, Pause, Volume2, VolumeX } from 'lucide-react';

const HeroSection = () => {
  // Cole aqui o ID do vídeo do YouTube (ex: se a URL é youtube.com/watch?v=ABC123, use "ABC123")
  const youtubeVideoId = "czhzDKGdWg0";
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    
    const reveal = () => {
      revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100 && elementBottom > 0) {
          element.classList.add('revealed');
        }
      });
    };
    
    window.addEventListener('scroll', reveal);
    window.addEventListener('load', reveal);
    
    // Trigger reveal on initial load
    setTimeout(reveal, 100);
    
    return () => {
      window.removeEventListener('scroll', reveal);
      window.removeEventListener('load', reveal);
    };
  }, []);
  
  return (
    <div className="relative min-h-screen flex items-center cyber-grid pb-20 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute left-1/4 top-1/4 w-64 h-64 bg-cyber-purple/20 rounded-full blur-[100px]" />
        <div className="absolute right-1/4 bottom-1/4 w-80 h-80 bg-cyber-pink/20 rounded-full blur-[120px]" />
      </div>
      
      <div className="section-container relative z-10 pt-48 md:pt-28">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="reveal-on-scroll" style={{animationDelay: '0.4s'}}>
            <div className="relative w-full rounded-xl overflow-hidden border border-cyber-purple/30 shadow-2xl shadow-cyber-purple/20">
              {/* Container responsivo para vídeo 16:9 */}
              <div className="relative w-full" style={{paddingBottom: '56.25%'}}>
                {youtubeVideoId ? (
                  // Vídeo do YouTube
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=0&rel=0&modestbranding=1`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  // Mensagem quando não há vídeo
                  <div className="absolute top-0 left-0 w-full h-full bg-black flex items-center justify-center">
                    <div className="text-center text-white/60 p-8">
                      <Play className="w-16 h-16 mx-auto mb-4 text-cyber-purple" />
                      <p className="text-lg">Cole o ID do vídeo do YouTube no código</p>
                      <p className="text-sm mt-2">Edite a variável <code className="bg-cyber-purple/20 px-2 py-1 rounded">youtubeVideoId</code></p>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Efeitos decorativos */}
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-cyber-purple/20 rounded-full blur-2xl pointer-events-none"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-cyber-pink/20 rounded-full blur-2xl pointer-events-none"></div>
            </div>
            
            {/* Texto abaixo do vídeo */}
            <div className="mt-6 text-center">
              <p className="text-white/80 text-sm">
                🎥 Assista e descubra como transformar seu WhatsApp
              </p>
            </div>
          </div>
          
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-white reveal-on-scroll leading-tight">
                Domine a <span className="text-cyber-purple text-glow">Automação com IA</span> no WhatsApp
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 mb-6 md:mb-8 reveal-on-scroll leading-relaxed" style={{animationDelay: '0.2s'}}>
                Aprenda na prática a criar automações inteligentes e transforme seu atendimento e vendas com a <span className="text-cyber-purple font-medium">Fulltime Academy</span>.
              </p>
            </div>
            
            <div className="reveal-on-scroll flex flex-wrap gap-4 items-center" style={{animationDelay: '0.3s'}}>
              <a 
                href="#inscricao" 
                className="inline-block px-8 py-4 text-lg font-medium rounded-md bg-gradient-to-r from-cyber-purple to-cyber-pink text-white hover:from-cyber-pink hover:to-cyber-purple transition-all duration-300 shadow-lg shadow-cyber-purple/30 animate-pulse-glow">
                Quero Me Inscrever Agora!
              </a>
              <Button 
                variant="outline" 
                className="px-6 py-6 border-cyber-purple hover:bg-cyber-purple/20 text-white"
                onClick={() => window.open('https://hub.la/g/gADxxrJCI7RmD84DoiOV', '_blank', 'noopener,noreferrer')}
              >
                Ver Conteúdo do Curso <ExternalLink className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
