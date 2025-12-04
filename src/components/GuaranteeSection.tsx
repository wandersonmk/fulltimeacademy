
import React from 'react';

const GuaranteeSection = () => {
  return (
    <section id="garantia" className="py-20 relative overflow-hidden">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="reveal-on-scroll">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyber-purple to-cyber-pink rounded-full blur-md opacity-75"></div>
              <div className="relative bg-cyber-darker rounded-full p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🛡️</div>
                  <div className="text-3xl font-bold text-white mb-2">Garantia de 7 Dias</div>
                  <div className="text-lg text-white/70">Satisfação Total ou Seu Dinheiro de Volta</div>
                </div>
              </div>
              <div className="absolute top-0 left-0 -z-10 w-full h-full bg-cyber-purple/30 rounded-full blur-[50px]"></div>
            </div>
          </div>
          
          <div className="space-y-6 reveal-on-scroll" style={{animationDelay: '0.2s'}}>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              <span className="text-cyber-purple text-glow">Garantia</span> Incondicional
            </h2>
            
            <p className="text-xl text-white/90">
              Tenha acesso ao curso completo e teste todas as estratégias por 7 dias sem risco.
            </p>
            
            <p className="text-white/80">
              Se você não ficar 100% satisfeito ou não conseguir implementar as automações, basta enviar um e-mail para nossa equipe e devolveremos 100% do seu investimento, sem perguntas.
            </p>
            
            <div className="pt-4">
              <div className="bg-cyber-dark/60 border border-cyber-purple/20 rounded-lg p-5">
                <h4 className="font-semibold text-white mb-3 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-cyber-purple" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Site Seguro
                </h4>
                <div className="flex space-x-4 justify-center">
                  <div className="w-10 h-10 bg-white/90 rounded flex items-center justify-center">
                    <span className="text-xs font-semibold text-gray-800">SSL</span>
                  </div>
                  <div className="w-10 h-10 bg-white/90 rounded flex items-center justify-center">
                    <span className="text-xs font-semibold text-gray-800">PGT</span>
                  </div>
                  <div className="w-10 h-10 bg-white/90 rounded flex items-center justify-center">
                    <span className="text-xs font-semibold text-gray-800">SCP</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute left-1/3 bottom-0 w-96 h-96 bg-cyber-pink/10 rounded-full blur-[120px] -z-10"></div>
    </section>
  );
};

export default GuaranteeSection;
