import React from 'react';
import Section from './Section';
import { TESTIMONIALS } from '../constants';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <Section id="reviews" title="O Que Dizem Nossos Clientes" subtitle="A opinião de quem já confiou no nosso trabalho." dark>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {TESTIMONIALS.map((t) => (
          <div key={t.id} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative group hover:-translate-y-1 transition-transform duration-300">
            <Quote className="absolute top-8 right-8 text-primary-100 group-hover:text-primary-200 transition-colors w-12 h-12" />
            
            <div className="flex items-center gap-4 mb-6">
              <img src={t.imageUrl} alt={t.name} className="w-14 h-14 rounded-full object-cover ring-4 ring-slate-50" />
              <div>
                <h4 className="font-bold text-slate-900">{t.name}</h4>
                <p className="text-sm text-slate-500">{t.role}</p>
              </div>
            </div>

            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className={`${i < t.rating ? 'fill-amber-400 text-amber-400' : 'text-slate-300'}`} />
              ))}
            </div>

            <p className="text-slate-600 leading-relaxed italic">"{t.content}"</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Testimonials;