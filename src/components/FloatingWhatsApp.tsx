import React from 'react';
import { Bot } from 'lucide-react';

interface FloatingWhatsAppProps {
  onOpenBot?: () => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ onOpenBot }) => {
  const handleClick = () => {
    if (onOpenBot) {
      onOpenBot();
      return;
    }
    const el =
      document.getElementById('bot-triagem-box') ||
      document.getElementById('orcador-servico') ||
      document.getElementById('orcador-tecnico');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Abrir Simulador e Bot de Triagem na página"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2.5 bg-[#091D2E] hover:bg-[#00B4D8] text-[#FFFFFF] px-4 py-3 rounded-full shadow-lg border border-white/15 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00B4D8] cursor-pointer"
    >
      <Bot className="w-5 h-5 text-[#4CD6FB] shrink-0" />
      <span className="text-xs sm:text-sm font-semibold whitespace-nowrap">
        Simular Box / Orçamento
      </span>
    </button>
  );
};
