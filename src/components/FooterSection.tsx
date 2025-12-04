
import React from 'react';

const FooterSection = () => {
  return (
    <footer className="py-12 bg-cyber-darker relative overflow-hidden">
      <div className="section-container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="mb-4">
              <img src="/images/logo.png" alt="Fulltime Academy" className="h-16 w-auto" />
            </div>
            <p className="text-white/70 mb-6">
              Transformando o atendimento e as vendas no WhatsApp com tecnologia de IA avançada.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-cyber-dark flex items-center justify-center text-white/70 hover:text-cyber-purple hover:bg-cyber-dark/80 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-cyber-dark flex items-center justify-center text-white/70 hover:text-cyber-purple hover:bg-cyber-dark/80 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-cyber-dark flex items-center justify-center text-white/70 hover:text-cyber-purple hover:bg-cyber-dark/80 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-cyber-dark flex items-center justify-center text-white/70 hover:text-cyber-purple hover:bg-cyber-dark/80 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-medium text-white mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-white/70">
              <li><a href="#" className="hover:text-cyber-purple transition-colors">Início</a></li>
              <li><a href="#sobre" className="hover:text-cyber-purple transition-colors">Sobre o Curso</a></li>
              <li><a href="#para-quem" className="hover:text-cyber-purple transition-colors">Para Quem é</a></li>
              <li><a href="#beneficios" className="hover:text-cyber-purple transition-colors">Benefícios</a></li>
              <li><a href="#depoimentos" className="hover:text-cyber-purple transition-colors">Depoimentos</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium text-white mb-4">Contato</h4>
            <ul className="space-y-3 text-white/70">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 text-cyber-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>(11) 91460-0243</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 text-cyber-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>São Paulo - SP, Brasil</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium text-white mb-4">Newsletter</h4>
            <p className="text-white/70 mb-4">
              Receba dicas, novidades e ofertas exclusivas.
            </p>
            <form className="space-y-3">
              <input 
                type="email" 
                placeholder="Seu melhor e-mail" 
                className="w-full px-4 py-2 bg-cyber-dark border border-white/10 rounded-md text-white placeholder:text-white/50 focus:outline-none focus:border-cyber-purple"
              />
              <button 
                type="submit"
                className="w-full px-4 py-2 bg-cyber-purple text-white rounded-md hover:bg-cyber-purple-bright transition-colors"
              >
                Inscrever-se
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-center text-white/50 text-sm">
          <p>© {new Date().getFullYear()} Fulltime Academy. Todos os direitos reservados.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#" className="hover:text-cyber-purple transition-colors">Termos de Uso</a>
            <span>•</span>
            <a href="#" className="hover:text-cyber-purple transition-colors">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
