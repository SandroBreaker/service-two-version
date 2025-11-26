import React, { useState, useEffect } from 'react';
import { Bot } from 'lucide-react';

const FloatingRobot: React.FC = () => {
  const [showBubble, setShowBubble] = useState(false);
  const [bubbleText, setBubbleText] = useState("Posso ajudar? 🤖");

  const phrases = [
    "Orçamento na hora! ⚡",
    "Fale comigo aqui 👇",
    "Dúvidas? Clique! 💬",
    "Atendimento Rápido 🚀"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setShowBubble(true);
      setBubbleText(phrases[Math.floor(Math.random() * phrases.length)]);
      
      setTimeout(() => setShowBubble(false), 4000);
    }, 15000);

    // Initial show
    setTimeout(() => setShowBubble(true), 3000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = () => {
    document.getElementById('orcamento')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
      {/* Bubble */}
      <div 
        className={`bg-white px-4 py-2 rounded-xl rounded-br-none shadow-lg border border-slate-100 text-sm font-semibold text-slate-700 transition-all duration-300 transform origin-bottom-right ${
          showBubble ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-4'
        }`}
      >
        {bubbleText}
      </div>

      {/* Button */}
      <button 
        onClick={handleClick}
        className="pointer-events-auto bg-primary-600 hover:bg-primary-500 text-white p-4 rounded-full shadow-xl shadow-primary-600/40 transform hover:scale-110 hover:rotate-6 transition-all duration-300 group"
        aria-label="Abrir Chat"
      >
        <Bot size={32} className="group-hover:animate-bounce-slow" />
      </button>
    </div>
  );
};

export default FloatingRobot;