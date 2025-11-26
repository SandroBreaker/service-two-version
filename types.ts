export interface ChatMessage {
  id: string;
  text: string;
  sender: 'bot' | 'user';
  isOption?: boolean;
  timestamp: number;
}

export interface ChatState {
  step: number;
  data: {
    nome: string;
    tipo: string;
    detalhe: string;
    condicao: string;
    zona: string;
    bairro: string;
  };
}

export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  imageUrl: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface StatData {
  name: string;
  value: number;
}