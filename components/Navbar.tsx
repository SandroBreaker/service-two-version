import React, { useState, useEffect } from 'react';
import { Menu, X, Hammer } from 'lucide-react';
import Button from './Button';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
    { label: 'Sobre', id: 'about' },
    { label: 'Diferenciais', id: 'features' },
    { label: 'Portfólio', id: 'portfolio' },
    { label: 'Depoimentos', id: 'reviews' },
    { label: 'FAQ', id: 'faq' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div 
          className="flex items-center gap-2 font-bold text-xl cursor-pointer text-slate-900" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary-600/20">
            <Hammer size={20} />
          </div>
          <span>ProService</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1 bg-slate-100/50 p-1 rounded-full backdrop-blur-sm border border-slate-200/50">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="px-5 py-2 rounded-full text-sm font-medium text-slate-600 hover:text-primary-700 hover:bg-white transition-all"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button 
            size="sm" 
            onClick={() => scrollTo('orcamento')}
            className={!isScrolled ? 'bg-slate-900 hover:bg-black border-none' : ''}
          >
            Orçamento
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-slate-800"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-slate-100 p-4 md:hidden shadow-xl animate-fade-in-up">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-left px-4 py-3 rounded-lg hover:bg-slate-50 font-medium text-slate-700"
              >
                {link.label}
              </button>
            ))}
            <Button className="mt-2 w-full" onClick={() => scrollTo('orcamento')}>
              Solicitar Orçamento
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;