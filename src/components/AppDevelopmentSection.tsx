
import React from 'react';
import { Code, Terminal, Laptop, Cpu } from 'lucide-react';

const AppDevelopmentSection = () => {
  const features = [
    {
      id: 1, 
      icon: <Code className="h-6 w-6 text-cyber-purple" />,
      title: "Zero Experiência Necessária",
      description: "Você não precisa saber programação. A IA escreve o código por você enquanto você descreve o que quer em português."
    },
    {
      id: 2,
      icon: <Terminal className="h-6 w-6 text-cyber-purple" />, 
      title: "VS Code + GitHub Copilot",
      description: "Aprenda a usar o editor mais popular do mundo junto com o assistente de IA que acelera sua produção em até 10x."
    },
    {
      id: 3,
      icon: <Laptop className="h-6 w-6 text-cyber-purple" />, 
      title: "Resultados em Horas, Não Semanas",
      description: "Em poucas horas de aula você já terá um site profissional completo e publicado, pronto para apresentar a clientes."
    },
    {
      id: 4,
      icon: <Cpu className="h-6 w-6 text-cyber-purple" />, 
      title: "Economia de R$ Milhares",
      description: "Pare de pagar caro por agências ou devs freelancers. Com este curso você mesmo cria e mantém seus sites."
    }
  ];

  return (
    <section id="app-development" className="py-20 relative overflow-hidden">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white reveal-on-scroll">
            Criando Sites <span className="text-cyber-purple text-glow">Profissionais</span> com IA no VS Code
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto reveal-on-scroll" style={{animationDelay: '0.1s'}}>
            Veja como a IA transforma o VS Code em uma máquina de criação de sites. Você descreve, a IA cria, você personaliza e publica.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="reveal-on-scroll" style={{animationDelay: '0.2s'}}>
            <div className="relative">
              <div className="bg-cyber-darker p-6 rounded-xl border border-cyber-purple/30 shadow-lg shadow-cyber-purple/10">
                <div className="flex items-center justify-center mb-6">
                  <Code className="h-12 w-12 text-cyber-purple" />
                </div>
                
                <div className="bg-cyber-dark/80 p-4 rounded-lg border border-white/10 font-mono text-sm text-white/80 h-64 overflow-hidden relative">
                  <div className="absolute inset-0 p-4 overflow-hidden">
                    <div className="typing-code">
                      <span className="text-white/90">Você:</span> <span className="text-white">Crie um site institucional moderno com hero section, serviços e contato</span><br/><br/>
                      
                      <span className="text-cyber-purple">GitHub Copilot:</span> <span className="text-white/90">Gerando site profissional...</span><br/>
                      &nbsp;&nbsp;- Criando Hero Section com CTA<br/>
                      &nbsp;&nbsp;- Adicionando seção de serviços<br/>
                      &nbsp;&nbsp;- Configurando formulário de contato<br/><br/>
                      
                      <span className="text-cyber-pink">Site criado!</span> Seu site profissional está pronto com:<br/>
                      &nbsp;&nbsp;✓ Design responsivo e moderno<br/>
                      &nbsp;&nbsp;✓ Animações e transições suaves<br/>
                      &nbsp;&nbsp;✓ SEO otimizado para Google<br/>
                      &nbsp;&nbsp;✓ Pronto para publicar na Vercel
                    </div>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-cyber-darker to-transparent"></div>
                </div>
                
                <div className="mt-6 text-center">
                  <span className="px-4 py-1 bg-cyber-purple/20 text-cyber-purple rounded-full text-sm font-medium">VS Code + IA = Sites Profissionais</span>
                </div>
              </div>
              
              <div className="absolute top-0 left-0 -z-10 w-full h-full bg-cyber-purple/30 rounded-xl blur-[50px]"></div>
            </div>
          </div>
          
          <div className="space-y-6 reveal-on-scroll" style={{animationDelay: '0.4s'}}>
            {features.map((feature) => (
              <div key={feature.id} className="glass p-5 rounded-lg border border-white/5 hover:border-cyber-purple/30 transition-all duration-300 flex items-start gap-4">
                <div className="mt-1">{feature.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-white/70">{feature.description}</p>
                </div>
              </div>
            ))}
            
            <div className="pt-4">
              <a 
                href="#inscricao" 
                className="inline-block px-6 py-3 text-base font-medium rounded-md bg-gradient-to-r from-cyber-purple to-cyber-pink text-white hover:from-cyber-pink hover:to-cyber-purple transition-all duration-300 shadow-lg shadow-cyber-purple/30">
                Quero Criar Meu Site com IA
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-16 p-6 glass rounded-xl border border-cyber-purple/20 reveal-on-scroll" style={{animationDelay: '0.6s'}}>
          <h3 className="text-2xl font-bold mb-4 text-center text-white">Tecnologias que Você Vai Dominar</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { name: 'VS Code', desc: 'Editor profissional com IA' },
              { name: 'GitHub Copilot', desc: 'IA para gerar código' },
              { name: 'Tailwind CSS', desc: 'Design responsivo moderno' },
              { name: 'React', desc: 'Componentes interativos' },
              { name: 'Vercel', desc: 'Publicação grátis e rápida' }
            ].map((tool) => (
              <div key={tool.name} className="bg-cyber-dark/50 p-4 rounded-lg border border-white/10 text-center hover:border-cyber-purple/30 hover:shadow-lg hover:shadow-cyber-purple/10 transition-all duration-300">
                <div className="text-xl font-semibold text-cyber-purple mb-2">{tool.name}</div>
                <p className="text-white/70 text-sm">{tool.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-72 h-72 bg-cyber-blue/10 rounded-full blur-[100px] -z-10"></div>
    </section>
  );
};

export default AppDevelopmentSection;
