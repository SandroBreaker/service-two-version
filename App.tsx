import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Section from './components/Section';
import Features from './components/Features';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import QuoteChat from './components/QuoteChat';
import FloatingRobot from './components/FloatingRobot';
import { ArrowUp } from 'lucide-react';

const App: React.FC = () => {
  
  // "About" Content Component (Embedded here for simplicity as it's text-heavy)
  const AboutContent = () => (
    <Section id="about" className="overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2 relative">
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-100 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-amber-100 rounded-full blur-2xl"></div>
          <img 
            src="https://picsum.photos/600/800?worker" 
            alt="Profissional trabalhando" 
            className="relative rounded-2xl shadow-2xl w-full object-cover transform rotate-1 hover:rotate-0 transition-transform duration-500"
          />
        </div>
        <div className="lg:w-1/2 space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            Mais que um técnico, <br/>
            <span className="text-primary-600">um parceiro para sua casa.</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Sou um profissional dedicado a oferecer serviços com qualidade e agilidade. 
            Entendo que receber alguém em casa exige confiança. Por isso, prezo pela 
            pontualidade, limpeza e transparência total.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed">
            Meu objetivo é facilitar sua vida com um processo simples: você descreve o problema, 
            eu resolvo, e você volta a ter tranquilidade.
          </p>
          
          <div className="pt-4 border-t border-slate-100 flex items-center gap-4">
            <div className="flex flex-col">
              <span className="font-bold text-slate-900 text-lg">Carlos Silva</span>
              <span className="text-slate-500">Técnico Responsável</span>
            </div>
            <img src="https://picsum.photos/100/60?signature" alt="Assinatura" className="h-10 opacity-60" />
          </div>
        </div>
      </div>
    </Section>
  );

  return (
    <div className="min-h-screen font-sans selection:bg-primary-100 selection:text-primary-900">
      <Navbar />
      
      <main>
        <Hero />
        <Stats />
        <AboutContent />
        <Features />
        <Portfolio />
        <Testimonials />
        <FAQ />
        
        {/* Quote Section */}
        <Section id="orcamento" title="Orçamento Inteligente" subtitle="Responda algumas perguntas rápidas e receba uma estimativa agora mesmo.">
          <QuoteChat />
        </Section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 font-bold text-2xl text-white mb-6">
            <span>ProService Elite</span>
          </div>
          <p className="max-w-md mx-auto mb-8 text-slate-400">
            Transformando problemas em soluções com qualidade técnica e atendimento humanizado.
          </p>
          <div className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} ProService. Todos os direitos reservados.
          </div>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="mt-8 mx-auto flex items-center gap-2 text-primary-400 hover:text-white transition-colors"
          >
            Voltar ao topo <ArrowUp size={16} />
          </button>
        </div>
      </footer>

      <FloatingRobot />
    </div>
  );
};

export default App;