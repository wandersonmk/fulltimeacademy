
import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Carlos Silva",
      role: "Empresário",
      content: "Implementei as automações do curso e consegui reduzir meu tempo de resposta de 2 horas para 2 minutos. Meus clientes adoraram e as vendas aumentaram em 45% no primeiro mês!",
      avatar: "https://i.pravatar.cc/150?img=11"
    },
    {
      id: 2,
      name: "Mariana Costa",
      role: "Afiliada Digital",
      content: "A Fulltime Academy revolucionou a maneira como eu prospecta clientes. Consigo atender 10x mais pessoas com a mesma qualidade. Minha comissão mensal triplicou!",
      avatar: "https://i.pravatar.cc/150?img=5"
    },
    {
      id: 3,
      name: "Pedro Almeida",
      role: "Dono de Agência",
      content: "Oferecemos as automações com IA no WhatsApp como serviço premium após fazer o curso. Já conquistamos 12 novos clientes apenas com este novo produto!",
      avatar: "https://i.pravatar.cc/150?img=15"
    },
    {
      id: 4,
      name: "Ana Beatriz",
      role: "E-commerce",
      content: "Nossa taxa de recuperação de carrinhos abandonados subiu de 7% para 23% com a implementação do sistema de automação do curso. Investimento que se pagou em 2 semanas.",
      avatar: "https://i.pravatar.cc/150?img=9"
    }
  ];
  
  return (
    <section id="depoimentos" className="py-20 bg-cyber-darker relative overflow-hidden">
      {/* Background grid effect */}
      <div className="absolute inset-0 cyber-grid opacity-30"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white reveal-on-scroll">
            <span className="text-cyber-purple text-glow">Depoimentos</span> de Alunos
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto reveal-on-scroll" style={{animationDelay: '0.1s'}}>
            Veja o que nossos alunos estão falando sobre os resultados obtidos com a Fulltime Academy.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className="glass p-6 rounded-xl hover:bg-white/10 transition-all duration-300 reveal-on-scroll"
              style={{animationDelay: `${0.1 + index * 0.1}s`}}
            >
              <div className="flex items-start mb-4">
                <div className="mr-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-cyber-purple">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white">{testimonial.name}</h4>
                  <p className="text-cyber-purple">{testimonial.role}</p>
                </div>
              </div>
              <blockquote>
                <p className="text-white/80 italic">"{testimonial.content}"</p>
              </blockquote>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center reveal-on-scroll" style={{animationDelay: '0.5s'}}>
          <div className="inline-flex items-center justify-center mb-8">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="ml-3 text-white text-xl font-medium">4.9/5 (138 avaliações)</span>
          </div>
          
          <a 
            href="#inscricao" 
            className="inline-block px-8 py-3 text-lg font-medium rounded-md bg-gradient-to-r from-cyber-purple to-cyber-pink text-white hover:from-cyber-pink hover:to-cyber-purple transition-all duration-300 shadow-lg shadow-cyber-purple/30">
            Junte-se a Eles
          </a>
        </div>
      </div>
      
      {/* Decorative blobs */}
      <div className="absolute right-0 bottom-1/3 w-1/3 h-64 bg-cyber-purple/10 rounded-full blur-[120px] -z-10"></div>
    </section>
  );
};

export default TestimonialsSection;
