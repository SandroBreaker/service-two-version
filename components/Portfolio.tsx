import React, { useState } from 'react';
import Section from './Section';
import { PORTFOLIO_ITEMS } from '../constants';
import { X, ZoomIn } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <Section id="portfolio" title="Trabalhos Realizados" subtitle="Qualidade técnica e acabamento superior em cada detalhe.">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {PORTFOLIO_ITEMS.map((item) => (
          <div 
            key={item.id} 
            className="group relative rounded-xl overflow-hidden cursor-pointer aspect-square bg-slate-100"
            onClick={() => setSelectedImage(item.imageUrl)}
          >
            <img 
              src={item.imageUrl} 
              alt={item.title} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <span className="text-xs font-bold text-primary-400 uppercase tracking-wider mb-1">{item.category}</span>
              <h3 className="text-white font-bold text-lg">{item.title}</h3>
              <div className="absolute top-4 right-4 bg-white/20 p-2 rounded-full backdrop-blur-sm">
                <ZoomIn className="text-white w-5 h-5" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in-up"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white p-2"
            onClick={() => setSelectedImage(null)}
          >
            <X size={40} />
          </button>
          <img 
            src={selectedImage} 
            alt="Ampliado" 
            className="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()} 
          />
        </div>
      )}
    </Section>
  );
};

export default Portfolio;