import React from 'react';

interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}

const Section: React.FC<SectionProps> = ({ 
  id, 
  title, 
  subtitle, 
  children, 
  className = '', 
  dark = false 
}) => {
  return (
    <section 
      id={id} 
      className={`py-16 md:py-24 px-4 sm:px-6 lg:px-8 ${dark ? 'bg-slate-100' : 'bg-white'} ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {(title || subtitle) && (
          <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
            {title && (
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg text-slate-600 leading-relaxed">
                {subtitle}
              </p>
            )}
            <div className="w-24 h-1.5 bg-primary-600 mx-auto mt-6 rounded-full opacity-80"></div>
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;