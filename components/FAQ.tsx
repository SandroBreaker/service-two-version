import React, { useState } from 'react';
import Section from './Section';
import { FAQS } from '../constants';
import { Plus, Minus } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section id="faq" title="Dúvidas Frequentes" subtitle="Transparência total antes de fechar o negócio." dark>
      <div className="max-w-3xl mx-auto space-y-4">
        {FAQS.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div 
              key={index} 
              className="bg-white rounded-xl border border-slate-200 overflow-hidden transition-all duration-200"
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left"
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span className="font-bold text-slate-800 text-lg">{faq.question}</span>
                {isOpen ? <Minus className="text-primary-600 shrink-0" /> : <Plus className="text-slate-400 shrink-0" />}
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out ${
                  isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-50">
                  {faq.answer}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default FAQ;