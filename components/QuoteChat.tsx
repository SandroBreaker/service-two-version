import React, { useState, useEffect, useRef } from 'react';
import { Send, MessageSquare, Check, User, Bot } from 'lucide-react';
import { ChatMessage, ChatState } from '../types';
import { WHATSAPP_NUMBER } from '../constants';

const QuoteChat: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  
  // State Machine for the Chat Flow
  const [chatState, setChatState] = useState<ChatState>({
    step: 0,
    data: {
      nome: '',
      tipo: '',
      detalhe: '',
      condicao: '',
      zona: '',
      bairro: ''
    }
  });

  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  // Initial Greeting
  useEffect(() => {
    if (messages.length === 0) {
      addBotMessage("Olá! 👋 Sou seu assistente virtual.");
      setTimeout(() => {
        addBotMessage("Vou fazer algumas perguntas rápidas para gerar seu orçamento. Qual é o seu **Nome**?");
        setChatState(prev => ({ ...prev, step: 1 }));
      }, 1000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addBotMessage = (text: string, isOption = false) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [
        ...prev, 
        { id: Date.now().toString(), text, sender: 'bot', isOption, timestamp: Date.now() }
      ]);
    }, 600);
  };

  const addUserMessage = (text: string) => {
    setMessages(prev => [
      ...prev, 
      { id: Date.now().toString(), text, sender: 'user', timestamp: Date.now() }
    ]);
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;
    processInput(inputValue);
    setInputValue('');
  };

  const handleOptionClick = (option: string) => {
    processInput(option);
  };

  const processInput = (text: string) => {
    addUserMessage(text);
    
    // Logic Flow based on original script
    switch (chatState.step) {
      case 1: // Name -> Service Type
        setChatState(prev => ({ ...prev, step: 2, data: { ...prev.data, nome: text } }));
        addBotMessage(`Prazer, ${text}! Qual serviço você precisa?`);
        break;
      
      case 2: // Service Type -> Details
        setChatState(prev => ({ ...prev, step: 3, data: { ...prev.data, tipo: text } }));
        addBotMessage("Certo! Como você descreveria a complexidade?");
        break;
        
      case 3: // Details -> Condition
        setChatState(prev => ({ ...prev, step: 4, data: { ...prev.data, detalhe: text } }));
        addBotMessage("Qual é a condição atual?");
        break;

      case 4: // Condition -> Zone
        setChatState(prev => ({ ...prev, step: 5, data: { ...prev.data, condicao: text } }));
        addBotMessage("Em qual região você está?");
        break;

      case 5: // Zone -> Bairro
        setChatState(prev => ({ ...prev, step: 6, data: { ...prev.data, zona: text } }));
        addBotMessage("Beleza! Informe agora o seu **Bairro**:");
        break;

      case 6: // Bairro -> Final Link
        const finalData = { ...chatState.data, bairro: text };
        setChatState(prev => ({ ...prev, step: 7, data: finalData }));
        
        addBotMessage("Tudo certo! Montei o resumo do seu atendimento.");
        setTimeout(() => {
           addBotMessage("👇 Clique abaixo para enviar no WhatsApp e receber o valor:");
        }, 800);
        break;

      default:
        break;
    }
  };

  const renderOptions = () => {
    // Only show options if it's the latest message interaction
    const optionsMap: Record<number, string[]> = {
      2: ['Instalação', 'Manutenção', 'Reparo', 'Consultoria', 'Outro'],
      3: ['Serviço Simples', 'Projeto Médio', 'Projeto Grande', 'Não sei informar'],
      4: ['Novo', 'Usado', 'Precisa Reparo', 'Urgente'],
      5: ['Zona Leste', 'Zona Sul', 'Zona Norte', 'Zona Oeste', 'Centro', 'Grande SP']
    };

    const currentOptions = optionsMap[chatState.step];

    if (currentOptions && !isTyping && messages[messages.length - 1]?.sender === 'bot') {
      return (
        <div className="flex flex-wrap gap-2 mt-4 animate-fade-in-up">
          {currentOptions.map(opt => (
            <button
              key={opt}
              onClick={() => handleOptionClick(opt)}
              className="bg-blue-50 text-primary-600 border border-blue-100 hover:bg-primary-600 hover:text-white px-4 py-2 rounded-full text-sm font-medium transition-colors"
            >
              {opt}
            </button>
          ))}
        </div>
      );
    }
    
    // Final Step CTA
    if (chatState.step === 7 && !isTyping) {
      const { nome, tipo, detalhe, condicao, zona, bairro } = chatState.data;
      const msgZap = `Olá! Sou *${nome}*.\n\nGostaria de um orçamento para:\n📌 Serviço: *${tipo}*\n🔧 Detalhe: ${detalhe}\n📦 Condição: ${condicao}\n\n📍 Local: ${zona} - ${bairro}`;
      const link = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msgZap)}`;

      return (
        <a 
          href={link} 
          target="_blank" 
          rel="noreferrer"
          className="mt-4 flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-xl font-bold shadow-lg transform transition hover:-translate-y-1"
        >
          <MessageSquare className="w-5 h-5" />
          Enviar no WhatsApp
        </a>
      );
    }

    return null;
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden flex flex-col h-[600px]">
      {/* Header */}
      <div className="bg-primary-600 p-4 flex items-center justify-between text-white">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <Bot className="w-6 h-6" />
            </div>
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-primary-600 rounded-full"></span>
          </div>
          <div>
            <h3 className="font-bold text-sm md:text-base">Assistente de Orçamento</h3>
            <p className="text-xs text-primary-100">Online Agora</p>
          </div>
        </div>
      </div>

      {/* Messages Area */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 bg-slate-50 space-y-6">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`flex gap-3 max-w-[85%] md:max-w-[75%] ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.sender === 'user' ? 'bg-primary-100 text-primary-600' : 'bg-white border border-slate-200 text-slate-600'}`}>
                {msg.sender === 'user' ? <User size={14} /> : <Bot size={14} />}
              </div>
              <div 
                className={`p-3.5 rounded-2xl text-sm md:text-base shadow-sm ${
                  msg.sender === 'user' 
                    ? 'bg-primary-600 text-white rounded-tr-none' 
                    : 'bg-white border border-slate-200 text-slate-800 rounded-tl-none'
                }`}
              >
                {msg.text}
              </div>
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start">
            <div className="flex gap-3">
               <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center">
                 <Bot size={14} className="text-slate-500" />
               </div>
               <div className="bg-white border border-slate-200 p-3 rounded-2xl rounded-tl-none flex gap-1 items-center h-10">
                 <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                 <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-75"></div>
                 <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-150"></div>
               </div>
            </div>
          </div>
        )}
        
        {renderOptions()}
      </div>

      {/* Input Area */}
      <div className="p-4 bg-white border-t border-slate-100">
        <div className="flex gap-2 relative">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder={chatState.step > 6 ? "Orçamento pronto!" : "Digite sua resposta..."}
            disabled={chatState.step > 6}
            className="w-full bg-slate-100 text-slate-900 placeholder-slate-400 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all disabled:opacity-50"
          />
          <button 
            onClick={handleSend}
            disabled={!inputValue.trim() || chatState.step > 6}
            className="bg-primary-600 text-white p-3 rounded-xl hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuoteChat;