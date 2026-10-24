import { AbntValidationResult, QuoteConfiguratorInput } from './types';

/**
 * Validador Amigável de Projeto (Padrão VL de Qualidade e Segurança)
 * Orienta o cliente de forma acolhedora e simples, mantendo o rigor técnico da Vidraçaria Liderança.
 */
export function validateAbntConfiguration(input: QuoteConfiguratorInput): AbntValidationResult {
  const hardStopErrors: string[] = [];
  const mandatoryWarnings: string[] = [];
  const technicalAdjustments: string[] = [];
  const normReference = 'Padrão VL de Qualidade e Segurança';

  const width = parseFloat(input.widthMeters.replace(',', '.'));
  const height = parseFloat(input.heightMeters.replace(',', '.'));

  const hasValidWidth = !isNaN(width) && width > 0 && width <= 30;
  const hasValidHeight = !isNaN(height) && height > 0 && height <= 20;

  if (!hasValidWidth) {
    hardStopErrors.push('Informe a largura aproximada em metros (ex: 1.50).');
  }
  if (!hasValidHeight) {
    hardStopErrors.push('Informe a altura aproximada em metros (ex: 2.10).');
  }

  const originalHeightMm = hasValidHeight ? Math.round(height * 1000) : undefined;
  let adjustedHeightMm = originalHeightMm;

  switch (input.serviceSlug) {
    case 'box-para-banheiro': {
      const isSlidingModel =
        input.model.toLowerCase().includes('padrão') ||
        input.model.toLowerCase().includes('correr') ||
        input.model.toLowerCase().includes('roldana') ||
        input.model.toLowerCase().includes('elegance') ||
        input.model.toLowerCase().includes('canto');

      if (isSlidingModel && originalHeightMm) {
        adjustedHeightMm = originalHeightMm - 10;
        technicalAdjustments.push(
          `Ajuste de Precisão VL: Descontamos automaticamente 10mm na folha de correr para encaixe suave nos trilhos.`
        );
      }

      mandatoryWarnings.push(
        'Dica de Durabilidade: Recomendamos uma revisão simples a cada 12 meses para manter o deslize sempre leve e macio.'
      );
      break;
    }

    case 'guarda-corpo-de-vidro': {
      if (hasValidHeight && height < 1.1) {
        mandatoryWarnings.push(
          `Atenção à Segurança: Para proteção ideal em escadas e sacadas, nosso rigor técnico recomenda altura mínima de 1,10m.`
        );
      } else {
        mandatoryWarnings.push(
          'Compromisso de Segurança VL: Trabalhamos com altura segura a partir de 1,10m e vidros laminados de alta resistência.'
        );
      }
      break;
    }

    case 'fechamento-de-sacada': {
      mandatoryWarnings.push(
        'Padrão Estrutural VL: Nossos fechamentos de sacada são dimensionados para suportar os ventos fortes da região de Umuarama com vedação e deslize panorâmico.'
      );
      break;
    }

    case 'cobertura-de-vidro': {
      mandatoryWarnings.push(
        'Conforto e Segurança VL: Utilizamos vidros laminados e de controle solar com caimento planejado (mínimo 5%) para escoamento perfeito da chuva.'
      );
      break;
    }

    case 'espelhos-sob-medida': {
      mandatoryWarnings.push(
        'Acabamento Impecável VL: Fixação realizada com adesivo neutro especial que preserva o brilho do espelho e evita manchas ao longo dos anos.'
      );
      break;
    }

    default: {
      mandatoryWarnings.push(
        'Padrão VL: Nossa equipe realiza a conferência das medidas no local em Umuarama e região para garantir acabamento perfeito.'
      );
      break;
    }
  }

  return {
    isValid: hardStopErrors.length === 0,
    hardStopErrors,
    mandatoryWarnings,
    technicalAdjustments,
    normReference,
    adjustedHeightMm,
    originalHeightMm,
  };
}

export function calculateEstimatedRange(
  baseRatePerSqm: number,
  widthMeters: number,
  heightMeters: number,
  quantity: number,
  glassType: string,
  finishLine: string
): { min: number; max: number } {
  const area = Math.max(widthMeters * heightMeters, 0.75);
  let multiplier = 1.0;

  const gt = glassType.toLowerCase();
  if (gt.includes('sentryglas') || gt.includes('polarizado') || gt.includes('insulado')) {
    multiplier += 0.65;
  } else if (gt.includes('laminado temperado') || gt.includes('controle solar') || gt.includes('acústico')) {
    multiplier += 0.35;
  } else if (gt.includes('laminado') || gt.includes('extra clear')) {
    multiplier += 0.2;
  }

  const fl = finishLine.toLowerCase();
  if (fl.includes('gold') || fl.includes('minimalista') || fl.includes('inox') || fl.includes('automática')) {
    multiplier += 0.25;
  } else if (fl.includes('42') || fl.includes('elegance') || fl.includes('roldanas aparentes')) {
    multiplier += 0.15;
  }

  const rawTotal = area * baseRatePerSqm * multiplier * Math.max(1, quantity);
  const min = Math.round((rawTotal * 0.92) / 10) * 10;
  const max = Math.round((rawTotal * 1.12) / 10) * 10;

  return { min, max };
}
