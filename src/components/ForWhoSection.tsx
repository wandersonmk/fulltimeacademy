
import React from 'react';

const ForWhoSection = () => {
  const audienceTypes = [
    {
      icon: "👨‍💼",
      title: "Empreendedores",
      description: "Proprietários de negócios que desejam automatizar o atendimento ao cliente e aumentar conversões de vendas."
    },
    {
      icon: "🚀",
      title: "Afiliados",
      description: "Profissionais de marketing de afiliados que buscam escalar suas operações de divulgação de produtos."
    },
    {
      icon: "👩‍💻",
      title: "Freelancers",
      description: "Profissionais autônomos que querem otimizar a comunicação com clientes e prospecção de novos projetos."
    },
    {
      icon: "🏢",
      title: "Agências",
      description: "Agências de marketing e publicidade que desejam oferecer soluções de IA no WhatsApp como diferencial."
    },
    {
      icon: "🛍️",
      title: "E-commerce",
      description: "Lojistas online que precisam melhorar o atendimento, suporte e recuperação de carrinhos abandonados."
    },
    {
      icon: "🔍",
      title: "Profissionais de Marketing",
      description: "Especialistas em marketing digital que desejam implementar estratégias avançadas de automação."
    }
  ];
  
  return (
    <section id="para-quem" className="py-20 bg-cyber-darker relative overflow-hidden">
      {/* Background grid effect */}
      <div className="absolute inset-0 cyber-grid opacity-30"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white reveal-on-scroll">
            Para <span className="text-cyber-purple text-glow">Quem</span> é Este Curso
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto reveal-on-scroll" style={{animationDelay: '0.1s'}}>
            A Fulltime Academy foi desenvolvida para ajudar profissionais de diversos segmentos a aproveitar o poder da IA no WhatsApp para expandir seus negócios.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {audienceTypes.map((type, index) => (
            <div 
              key={index} 
              className="glass p-6 rounded-xl hover:bg-white/10 transition-all duration-300 reveal-on-scroll"
              style={{animationDelay: `${0.1 + index * 0.1}s`}}
            >
              <div className="text-4xl mb-4">{type.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-white">{type.title}</h3>
              <p className="text-white/70">{type.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 flex justify-center reveal-on-scroll" style={{animationDelay: '0.7s'}}>
          <div className="glass p-6 rounded-xl border border-cyber-purple/30 max-w-3xl">
            <p className="text-center text-xl text-white font-medium">
              Independente do seu setor, se você deseja <span className="text-cyber-purple">automatizar comunicações</span> e <span className="text-cyber-purple">aumentar conversões</span> no WhatsApp, este curso é para você!
            </p>
          </div>
        </div>
      </div>
      
      {/* Decorative blobs */}
      <div className="absolute left-0 bottom-0 w-1/3 h-64 bg-cyber-pink/10 rounded-full blur-[120px] -z-10"></div>
    </section>
  );
};

export default ForWhoSection;
