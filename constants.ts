import { FaqItem, PortfolioItem, StatData, Testimonial } from './types';

export const WHATSAPP_NUMBER = "5511968036476";

export const STATS_DATA: StatData[] = [
  { name: 'Jan', value: 45 },
  { name: 'Fev', value: 52 },
  { name: 'Mar', value: 58 },
  { name: 'Abr', value: 65 },
  { name: 'Mai', value: 72 },
  { name: 'Jun', value: 85 },
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  { id: 1, title: "Reforma Residencial", category: "Instalação", imageUrl: "https://picsum.photos/600/400?random=1" },
  { id: 2, title: "Manutenção Elétrica", category: "Reparo", imageUrl: "https://picsum.photos/600/400?random=2" },
  { id: 3, title: "Montagem de Móveis", category: "Montagem", imageUrl: "https://picsum.photos/600/400?random=3" },
  { id: 4, title: "Automação", category: "Tecnologia", imageUrl: "https://picsum.photos/600/400?random=4" },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Ricardo Silva",
    role: "Proprietário de Loja",
    content: "Profissional extremamente competente. Resolveu um problema elétrico que outros dois não conseguiram. Recomendo de olhos fechados!",
    rating: 5,
    imageUrl: "https://picsum.photos/100/100?random=5"
  },
  {
    id: 2,
    name: "Ana Clara",
    role: "Arquiteta",
    content: "A pontualidade e a limpeza pós-obra foram os diferenciais. O acabamento ficou impecável. Com certeza faremos mais projetos.",
    rating: 5,
    imageUrl: "https://picsum.photos/100/100?random=6"
  }
];

export const FAQS: FaqItem[] = [
  { question: "Como funciona o orçamento?", answer: "Totalmente online e gratuito. Você responde algumas perguntas no chat abaixo e recebe uma estimativa ou agendamento de visita." },
  { question: "Quais formas de pagamento aceita?", answer: "Aceitamos PIX, Cartão de Crédito (até 12x) e Dinheiro." },
  { question: "Atende em quais regiões?", answer: "Principalmente Grande São Paulo, mas projetos maiores podem ser negociados para o interior." },
  { question: "Oferece garantia?", answer: "Sim, todos os serviços possuem garantia de 90 dias conforme a lei, com suporte rápido em caso de problemas." },
];