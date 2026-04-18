
import React from 'react';

const BenefitsSection = () => {
  const benefits = [
    {
      id: 1,
      title: "Sites Sem Código Complexo",
      description: "Crie sites profissionais completos usando IA como copiloto, sem precisar memorizar sintaxes complexas ou estudar programação por anos.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Produtividade 10x Maior",
      description: "A IA acelera drasticamente seu fluxo de trabalho, permitindo criar em horas o que levaria dias ou semanas de desenvolvimento manual.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Sites 100% Responsivos",
      description: "Todos os sites criados no curso são responsivos por padrão, ficando perfeitos em celulares, tablets e computadores.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 4,
      title: "Resultados Profissionais",
      description: "Entregue sites de altíssima qualidade visual e técnica para seus clientes ou para o seu próprio negócio, impressionando a todos.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      )
    },
    {
      id: 5,
      title: "Aprenda no Seu Ritmo",
      description: "Acesso vitalício ao conteúdo. Assista quando e onde quiser, repita as aulas quantas vezes precisar até dominar cada técnica.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 6,
      title: "Publique Gratuitamente",
      description: "Aprenda a colocar seu site no ar de graça usando Vercel e GitHub, com HTTPS e domínio profissional incluso.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];
  
  return (
    <section id="beneficios" className="py-20 relative overflow-hidden">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white reveal-on-scroll">
            <span className="text-cyber-purple text-glow">Benefícios</span> do Curso
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto reveal-on-scroll" style={{animationDelay: '0.1s'}}>
            Descubra como a Fulltime Academy pode transformar sua capacidade de criar sites profissionais com o poder da Inteligência Artificial.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={benefit.id} 
              className="glass p-6 rounded-xl hover:border-cyber-purple/30 hover:shadow-lg hover:shadow-cyber-purple/10 transition-all duration-300 reveal-on-scroll border border-white/5"
              style={{animationDelay: `${0.1 + index * 0.1}s`}}
            >
              <div className="w-14 h-14 rounded-lg bg-cyber-purple/20 flex items-center justify-center mb-4 text-cyber-purple">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{benefit.title}</h3>
              <p className="text-white/70">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center reveal-on-scroll" style={{animationDelay: '0.7s'}}>
          <div className="bg-gradient-to-r from-cyber-purple/20 to-cyber-pink/20 p-8 rounded-xl border border-white/10">
            <h3 className="text-2xl font-semibold text-white mb-4">Resultado Comprovado</h3>
            <p className="text-white/80 text-lg mb-6">
              Nossos alunos criam o primeiro site profissional em menos de <span className="text-cyber-purple font-semibold">2 horas de aula</span> e já saem do curso com um <span className="text-cyber-purple font-semibold">portfólio publicado</span> pronto para apresentar a clientes.
            </p>
            <a 
              href="#inscricao" 
              className="inline-block px-8 py-4 text-lg font-medium rounded-md bg-gradient-to-r from-cyber-purple to-cyber-pink text-white hover:from-cyber-pink hover:to-cyber-purple transition-all duration-300 shadow-lg shadow-cyber-purple/30">
              Quero Criar Meu Site Profissional
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 -translate-x-1/2 w-96 h-96 bg-cyber-purple/10 rounded-full blur-[120px] -z-10"></div>
    </section>
  );
};

export default BenefitsSection;
