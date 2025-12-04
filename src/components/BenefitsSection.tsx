
import React from 'react';

const BenefitsSection = () => {
  const benefits = [
    {
      id: 1,
      title: "Automação Completa",
      description: "Automatize 100% do seu atendimento, desde o primeiro contato até o pós-venda, garantindo respostas instantâneas 24/7.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Escalabilidade",
      description: "Atenda centenas ou milhares de clientes simultaneamente sem perder qualidade ou personalização.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Aumento nas Vendas",
      description: "Implemente técnicas avançadas de qualificação de leads e fechamento de vendas para aumentar sua taxa de conversão.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 4,
      title: "Redução de Custos",
      description: "Economize em custos de pessoal para atendimento, permitindo que sua equipe foque em tarefas estratégicas.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      id: 5,
      title: "Personalização Avançada",
      description: "Crie experiências altamente personalizadas para cada cliente, aumentando a satisfação e fidelidade.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      )
    },
    {
      id: 6,
      title: "Análise de Dados",
      description: "Obtenha insights valiosos sobre seus clientes e interações para otimizar continuamente suas estratégias.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
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
            Descubra como a Fulltime Academy pode transformar completamente sua estratégia de comunicação e vendas.
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
            <h3 className="text-2xl font-semibold text-white mb-4">Resultados Garantidos</h3>
            <p className="text-white/80 text-lg mb-6">
              Nossos alunos relatam em média <span className="text-cyber-purple font-semibold">300% de aumento</span> na eficiência de atendimento e <span className="text-cyber-purple font-semibold">40% mais conversões</span> após implementar as estratégias do curso.
            </p>
            <a 
              href="#inscricao" 
              className="inline-block px-8 py-4 text-lg font-medium rounded-md bg-gradient-to-r from-cyber-purple to-cyber-pink text-white hover:from-cyber-pink hover:to-cyber-purple transition-all duration-300 shadow-lg shadow-cyber-purple/30">
              Quero Estes Resultados
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
