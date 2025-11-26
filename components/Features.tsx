import React from 'react';
import Section from './Section';
import { Clock, Shield, Wrench, HeartHandshake } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Clock className="w-8 h-8 text-primary-600" />,
      title: "Atendimento Rápido",
      desc: "Sem enrolação. Respondemos seu orçamento rapidamente e respeitamos os horários agendados."
    },
    {
      icon: <Shield className="w-8 h-8 text-primary-600" />,
      title: "Segurança Total",
      desc: "Profissional verificado, com antecedentes checados e identificação na visita técnica."
    },
    {
      icon: <Wrench className="w-8 h-8 text-primary-600" />,
      title: "Garantia Estendida",
      desc: "Confiamos no nosso trabalho. Se algo não ficar 100%, voltamos para ajustar sem custo."
    },
    {
      icon: <HeartHandshake className="w-8 h-8 text-primary-600" />,
      title: "Preço Justo",
      desc: "Valores transparentes antes de começar o serviço. Sem surpresas na hora de pagar."
    }
  ];

  return (
    <Section id="features" title="Por Que Nos Escolher?" subtitle="Não é apenas sobre consertar coisas, é sobre sua tranquilidade.">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((f, idx) => (
          <div 
            key={idx} 
            className="group bg-slate-50 hover:bg-white p-8 rounded-2xl border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
          >
            <div className="w-16 h-16 bg-white group-hover:bg-primary-50 rounded-2xl border border-slate-100 flex items-center justify-center mb-6 transition-colors shadow-sm">
              {f.icon}
            </div>
            <h3 className="font-bold text-xl text-slate-900 mb-3">{f.title}</h3>
            <p className="text-slate-600 leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Features;