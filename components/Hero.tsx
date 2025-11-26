import React from 'react';
import { ShieldCheck, ChevronRight } from 'lucide-react';
import Button from './Button';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/1920/1080?grayscale&blur=2" 
          alt="Professional Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-slate-50/80 to-slate-50"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        
        {/* Profile / Badge */}
        <div className="relative inline-block mb-8 group cursor-default">
          <div className="relative p-1 bg-white rounded-full shadow-2xl">
            <img 
              src="https://picsum.photos/150/150?people" 
              alt="Carlos Professional" 
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-slate-50"
            />
            {/* Status Dot */}
            <div className="absolute bottom-4 right-4 w-6 h-6 bg-green-500 border-4 border-white rounded-full animate-pulse"></div>
          </div>
          
          {/* Verified Badge */}
          <div className="absolute -top-2 -right-10 bg-primary-600 text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1 shadow-lg transform rotate-6 group-hover:rotate-0 transition-transform duration-300">
            <ShieldCheck size={14} />
            <span>VERIFICADO</span>
          </div>
        </div>

        {/* Text Content */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight mb-6">
          Serviço Profissional <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
            Sem Complicação
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          Especialista em resolver problemas com agilidade. 
          Instalação, manutenção e suporte técnico com garantia e preço justo.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            size="lg" 
            onClick={() => document.getElementById('orcamento')?.scrollIntoView()}
            className="w-full sm:w-auto min-w-[200px] shadow-primary-500/40"
          >
            Orçamento Rápido <ChevronRight className="ml-2 w-5 h-5" />
          </Button>
          <Button 
            variant="secondary" 
            size="lg" 
            onClick={() => document.getElementById('portfolio')?.scrollIntoView()}
            className="w-full sm:w-auto"
          >
            Ver Portfólio
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;