import { COMPANY_INFO } from '../domain/companyData';
import { ConsultantOption, QuoteCartItem } from '../domain/types';

export function generateProtocolNumber(): string {
  const year = new Date().getFullYear();
  const randomPart = Math.floor(1000 + Math.random() * 9000);
  const timeSuffix = String(Date.now()).slice(-2);
  return `VL-${year}-${randomPart}${timeSuffix}`;
}

export function buildWhatsappN8nPayload(
  items: QuoteCartItem[],
  protocolNumber: string,
  customerName?: string,
  customerNeighborhood?: string
): string {
  const itemLines = items.map((item, idx) => {
    const dimBase = `${item.widthMeters.toFixed(2)}m (L) x ${item.heightMeters.toFixed(2)}m (A)`;

    const extraSpecs: string[] = [
      item.model,
      item.glassType,
      `Cor: ${item.glassColor}`,
      `Acabamento: ${item.finishLine}`,
    ].filter(Boolean);

    if (item.quantity > 1) {
      extraSpecs.push(`Qtd: ${item.quantity} peça(s)`);
    } else {
      extraSpecs.push(`Qtd: 1 peça`);
    }

    if (item.notes && item.notes.trim()) {
      extraSpecs.push(`Obs: ${item.notes.trim()}`);
    }

    return `[Item ${idx + 1}: ${item.serviceName} - ${dimBase} - ${extraSpecs.join(' | ')}]`;
  });

  const clientHeader =
    customerName && customerName.trim()
      ? `Cliente: ${customerName.trim()}${customerNeighborhood ? ` (${customerNeighborhood.trim()})` : ''}`
      : null;

  const message = [
    `Olá equipe Vidraçaria Liderança! Sou de Umuarama/Região e gostaria de solicitar o orçamento para o seguinte projeto sob medida:`,
    `Protocolo de Atendimento: #${protocolNumber}`,
    clientHeader,
    ...itemLines,
    `Aguardo o retorno de um consultor para validação e agendamento!`,
  ]
    .filter(Boolean)
    .join('\n');

  return message;
}

export function buildWhatsappUrl(_consultant: ConsultantOption, payloadText: string): string {
  const targetPhone = COMPANY_INFO.whatsapp.number;
  return `https://wa.me/${targetPhone}?text=${encodeURIComponent(payloadText)}`;
}
