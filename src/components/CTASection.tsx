
import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { ExternalLink } from 'lucide-react';

const CTASection = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Define o tempo final (24 horas a partir de agora)
    const targetTime = new Date().getTime() + (24 * 60 * 60 * 1000);
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetTime - now;
      
      if (difference > 0) {
        setTimeLeft({
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="inscricao" className="py-24 bg-gradient-to-b from-cyber-darker to-cyber-dark relative overflow-hidden">
      {/* Background grid effect */}
      <div className="absolute inset-0 cyber-grid opacity-30"></div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-1 h-1 bg-cyber-purple rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.7 + 0.3,
              boxShadow: '0 0 8px 2px rgba(155, 135, 245, 0.5)',
              animation: `float ${Math.random() * 10 + 10}s linear infinite`
            }}
          />
        ))}
      </div>
      
      <div className="section-container relative z-10">
        <div className="glass p-8 md:p-12 rounded-2xl border border-cyber-purple/30 max-w-5xl mx-auto">
          <div className="text-center mb-12 reveal-on-scroll">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
              Comece sua <span className="text-cyber-purple text-glow">Jornada</span> Hoje
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Transforme o WhatsApp em uma máquina de vendas automática e leve seu negócio para o próximo nível com inteligência artificial.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-5 reveal-on-scroll" style={{animationDelay: '0.2s'}}>
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyber-purple mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h4 className="text-lg font-medium text-white mb-1">Acesso Imediato</h4>
                  <p className="text-white/70">Comece a implementar as automações ainda hoje.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyber-purple mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h4 className="text-lg font-medium text-white mb-1">Suporte Exclusivo</h4>
                  <p className="text-white/70">Tire suas dúvidas diretamente com nossa equipe.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyber-purple mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h4 className="text-lg font-medium text-white mb-1">Conteúdo Sempre Atualizado</h4>
                  <p className="text-white/70">Receba atualizações à medida que as tecnologias evoluem.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyber-purple mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h4 className="text-lg font-medium text-white mb-1">Comunidade VIP</h4>
                  <p className="text-white/70">Troque experiências com outros alunos e especialistas.</p>
                </div>
              </div>
            </div>
            
            <div className="reveal-on-scroll" style={{animationDelay: '0.4s'}}>
              <div className="bg-cyber-dark/80 p-6 rounded-lg border border-white/10">
                {/* Cronômetro de Escassez */}
                <div className="mb-6 p-4 bg-gradient-to-r from-cyber-purple/20 to-cyber-pink/20 rounded-lg border border-cyber-purple/30">
                  <div className="text-center mb-3">
                    <div className="text-white/90 text-sm font-medium mb-1">⚡ OFERTA POR TEMPO LIMITADO</div>
                    <div className="text-white/70 text-xs">A promoção expira em:</div>
                  </div>
                  <div className="flex justify-center gap-3">
                    <div className="bg-cyber-darker/80 p-3 rounded-lg min-w-[70px] border border-cyber-purple/20">
                      <div className="text-3xl font-bold text-cyber-purple">{String(timeLeft.hours).padStart(2, '0')}</div>
                      <div className="text-xs text-white/60 uppercase">Horas</div>
                    </div>
                    <div className="bg-cyber-darker/80 p-3 rounded-lg min-w-[70px] border border-cyber-purple/20">
                      <div className="text-3xl font-bold text-cyber-purple">{String(timeLeft.minutes).padStart(2, '0')}</div>
                      <div className="text-xs text-white/60 uppercase">Min</div>
                    </div>
                    <div className="bg-cyber-darker/80 p-3 rounded-lg min-w-[70px] border border-cyber-purple/20">
                      <div className="text-3xl font-bold text-cyber-purple">{String(timeLeft.seconds).padStart(2, '0')}</div>
                      <div className="text-xs text-white/60 uppercase">Seg</div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center mb-4">
                  <div className="text-white/70">Investimento único:</div>
                  <div className="flex items-center">
                    <span className="text-white/50 line-through text-sm mr-2">R$497,00</span>
                    <span className="bg-cyber-purple text-white px-2 py-0.5 rounded text-xs font-medium">80% OFF</span>
                  </div>
                </div>
                
                <div className="mb-8 text-center">
                  <div className="text-white text-4xl font-bold mb-1">
                    12x <span className="text-cyber-purple">R$9,86</span>
                  </div>
                  <div className="text-white/70">ou R$97,00 à vista</div>
                </div>
                
                <div className="space-y-4">
                  <a 
                    href="https://pay.hub.la/gADxxrJCI7RmD84DoiOV" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-4 px-6 bg-gradient-to-r from-cyber-purple to-cyber-pink text-white text-lg font-medium rounded-lg text-center hover:from-cyber-pink hover:to-cyber-purple transition-all duration-300 shadow-lg shadow-cyber-purple/30 animate-pulse-glow">
                    Quero Me Inscrever Agora!
                  </a>
                  
                  <Button 
                    variant="outline" 
                    className="w-full border-cyber-purple hover:bg-cyber-purple/20 text-white"
                    onClick={() => window.open('https://hub.la/g/gADxxrJCI7RmD84DoiOV', '_blank', 'noopener,noreferrer')}
                  >
                    Ver Conteúdo do Curso <ExternalLink className="ml-2" />
                  </Button>
                </div>
                
                <div className="mt-4 text-center text-white/60 text-sm">
                  Pagamento 100% seguro via PIX, cartão ou boleto
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center text-white/80 reveal-on-scroll" style={{animationDelay: '0.6s'}}>
          <p>Oferta por tempo limitado. Vagas sujeitas a disponibilidade.</p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
