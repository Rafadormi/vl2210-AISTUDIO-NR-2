import React, { createContext, useContext, useState, useEffect } from 'react';
import { ConsultantOption, ProtocolRecord, QuoteCartItem, ServiceSlug } from '../domain/types';
import { buildWhatsappN8nPayload, buildWhatsappUrl, generateProtocolNumber } from '../utils/whatsappPayload';

interface QuoteCartContextValue {
  items: QuoteCartItem[];
  activeServiceSlug: ServiceSlug;
  setActiveServiceSlug: (slug: ServiceSlug) => void;
  addItem: (item: Omit<QuoteCartItem, 'id'>) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  lastProtocol: ProtocolRecord | null;
  dismissProtocolConfirmation: () => void;
  submitQuoteWithProtocol: (params: {
    customerName: string;
    customerPhone: string;
    customerNeighborhood: string;
    consultant: ConsultantOption;
    n8nWebhookUrl?: string;
    openWhatsappWindow?: boolean;
  }) => Promise<ProtocolRecord>;
}

const QuoteCartContext = createContext<QuoteCartContextValue | undefined>(undefined);

const STORAGE_CART_KEY = 'vl_umuarama_quote_cart_v1';
const STORAGE_PROTOCOL_KEY = 'vl_umuarama_last_protocol_v1';

export const QuoteCartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<QuoteCartItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_CART_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [activeServiceSlug, setActiveServiceSlug] = useState<ServiceSlug>('box-para-banheiro');

  const [lastProtocol, setLastProtocol] = useState<ProtocolRecord | null>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_PROTOCOL_KEY);
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_CART_KEY, JSON.stringify(items));
    } catch {
      // Ignore storage quota errors
    }
  }, [items]);

  useEffect(() => {
    try {
      if (lastProtocol) {
        localStorage.setItem(STORAGE_PROTOCOL_KEY, JSON.stringify(lastProtocol));
      } else {
        localStorage.removeItem(STORAGE_PROTOCOL_KEY);
      }
    } catch {
      // Ignore storage quota errors
    }
  }, [lastProtocol]);

  const addItem = (newItem: Omit<QuoteCartItem, 'id'>) => {
    const id = `item-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
    setItems((prev) => [...prev, { ...newItem, id }]);
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setItems([]);
  };

  const dismissProtocolConfirmation = () => {
    setLastProtocol(null);
  };

  const submitQuoteWithProtocol = async ({
    customerName,
    customerPhone,
    customerNeighborhood,
    consultant,
    n8nWebhookUrl,
  }: {
    customerName: string;
    customerPhone: string;
    customerNeighborhood: string;
    consultant: ConsultantOption;
    n8nWebhookUrl?: string;
    openWhatsappWindow?: boolean;
  }): Promise<ProtocolRecord> => {
    const protocolNumber = generateProtocolNumber();
    const now = new Date();
    const createdAtFormatted = now.toLocaleString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });

    const totalEstimatedMinBrl = items.reduce((acc, cur) => acc + cur.estimatedMinBrl, 0);
    const totalEstimatedMaxBrl = items.reduce((acc, cur) => acc + cur.estimatedMaxBrl, 0);

    const rawPayloadText = buildWhatsappN8nPayload(
      items,
      protocolNumber,
      customerName,
      customerNeighborhood
    );
    const whatsappUrl = buildWhatsappUrl(consultant, rawPayloadText);

    let webhookDispatched = false;
    if (n8nWebhookUrl && n8nWebhookUrl.trim().startsWith('http')) {
      try {
        await fetch(n8nWebhookUrl.trim(), {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            source: 'vidracaria-lideranca-web-orcador',
            protocolNumber,
            createdAt: now.toISOString(),
            city: 'Umuarama-PR',
            customer: {
              name: customerName || 'Cliente Site',
              phone: customerPhone || 'Não informado',
              neighborhood: customerNeighborhood || 'Umuarama',
            },
            consultantTarget: consultant,
            items,
            estimatedRangeBrl: {
              min: totalEstimatedMinBrl,
              max: totalEstimatedMaxBrl,
            },
            whatsappFormattedPayload: rawPayloadText,
          }),
        });
        webhookDispatched = true;
      } catch {
        webhookDispatched = false;
      }
    }

    const record: ProtocolRecord = {
      protocolNumber,
      createdAtIso: now.toISOString(),
      createdAtFormatted,
      customerName: customerName.trim() || 'Visitante Técnico',
      customerPhone: customerPhone.trim() || '',
      customerNeighborhood: customerNeighborhood.trim() || 'Umuarama - PR',
      consultant,
      items: [...items],
      totalEstimatedMinBrl,
      totalEstimatedMaxBrl,
      whatsappUrl,
      rawPayloadText,
      webhookDispatched,
    };

    setLastProtocol(record);
    setItems([]);
    return record;
  };

  return (
    <QuoteCartContext.Provider
      value={{
        items,
        activeServiceSlug,
        setActiveServiceSlug,
        addItem,
        removeItem,
        clearCart,
        lastProtocol,
        dismissProtocolConfirmation,
        submitQuoteWithProtocol,
      }}
    >
      {children}
    </QuoteCartContext.Provider>
  );
};

export function useQuoteCart(): QuoteCartContextValue {
  const ctx = useContext(QuoteCartContext);
  if (!ctx) {
    throw new Error('useQuoteCart must be used within a QuoteCartProvider');
  }
  return ctx;
}
