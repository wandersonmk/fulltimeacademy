
import React from 'react';
import { Code, Terminal, Laptop, Cpu } from 'lucide-react';

const AppDevelopmentSection = () => {
  const features = [
    {
      id: 1, 
      icon: <Code className="h-6 w-6 text-cyber-purple" />,
      title: "Zero Conhecimento de Programação",
      description: "Desenvolva aplicativos completos sem precisar escrever uma única linha de código, graças às ferramentas de IA que transformam suas descrições em software funcional."
    },
    {
      id: 2,
      icon: <Terminal className="h-6 w-6 text-cyber-purple" />, 
      title: "Ferramentas Avançadas de IA",
      description: "Aprenda a usar plataformas revolucionárias como Lovable, Cursor, e Bolt para materializar suas ideias apenas descrevendo o que você precisa."
    },
    {
      id: 3,
      icon: <Laptop className="h-6 w-6 text-cyber-purple" />, 
      title: "Curva de Aprendizado Rápida",
      description: "Em apenas algumas horas, você estará desenvolvendo protótipos funcionais que normalmente levariam semanas ou meses para programadores experientes."
    },
    {
      id: 4,
      icon: <Cpu className="h-6 w-6 text-cyber-purple" />, 
      title: "Economia Significativa",
      description: "Reduza drasticamente seus custos de desenvolvimento, eliminando a necessidade de contratar programadores caros para tirar sua ideia do papel."
    }
  ];

  return (
    <section id="app-development" className="py-20 relative overflow-hidden">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white reveal-on-scroll">
            Desenvolvimento de <span className="text-cyber-purple text-glow">Aplicativo</span> Sem Saber Programar
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto reveal-on-scroll" style={{animationDelay: '0.1s'}}>
            Descubra como criar aplicativos completos usando apenas o poder da IA, sem precisar escrever código ou gastar fortunas com desenvolvedores.
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
                      <span className="text-white/90">Usuário:</span> <span className="text-white">Crie um aplicativo de agendamento com calendário e notificações</span><br/><br/>
                      
                      <span className="text-cyber-purple">IA:</span> <span className="text-white/90">Criando aplicativo de agendamento...</span><br/>
                      &nbsp;&nbsp;- Adicionando interface de calendário<br/>
                      &nbsp;&nbsp;- Configurando sistema de notificações<br/>
                      &nbsp;&nbsp;- Integrando banco de dados<br/><br/>
                      
                      <span className="text-cyber-pink">App criado!</span> Seu aplicativo de agendamento está pronto com:<br/>
                      &nbsp;&nbsp;✓ Interface de usuário intuitiva<br/>
                      &nbsp;&nbsp;✓ Sistema de notificações por email e WhatsApp<br/>
                      &nbsp;&nbsp;✓ Banco de dados seguro para armazenar compromissos<br/>
                      &nbsp;&nbsp;✓ Totalmente funcional sem uma linha de código escrita por você
                    </div>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-cyber-darker to-transparent"></div>
                </div>
                
                <div className="mt-6 text-center">
                  <span className="px-4 py-1 bg-cyber-purple/20 text-cyber-purple rounded-full text-sm font-medium">AI-Powered No-Code Development</span>
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
                Quero Criar Apps Sem Programar
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-16 p-6 glass rounded-xl border border-cyber-purple/20 reveal-on-scroll" style={{animationDelay: '0.6s'}}>
          <h3 className="text-2xl font-bold mb-4 text-center text-white">Ferramentas que Você Vai Dominar</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { name: 'VS Code', desc: 'Editor de código profissional' },
              { name: 'N8n', desc: 'Automação de workflows' },
              { name: 'OpenAI GPT', desc: 'Inteligência Artificial avançada' },
              { name: 'Google Cloud API', desc: 'Serviços em nuvem' },
              { name: 'Chatwoot', desc: 'Gestão de atendimento' }
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
