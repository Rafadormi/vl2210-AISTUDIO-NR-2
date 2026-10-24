export type ServiceSlug =
  | 'box-para-banheiro'
  | 'vidro-temperado'
  | 'espelhos-sob-medida'
  | 'fechamento-de-sacada'
  | 'guarda-corpo-de-vidro'
  | 'portas-de-vidro'
  | 'janelas-e-troca-de-vidro'
  | 'esquadrias-de-aluminio'
  | 'cobertura-de-vidro'
  | 'divisorias-de-vidro'
  | 'fachadas-de-vidro'
  | 'vitrines-comerciais'
  | 'manutencao-de-vidros';

export interface CatalogSubProduct {
  name: string;
  description: string;
  applications: string;
  tag?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  specs: string;
  sceneType:
    | 'hero-architecture'
    | 'box-banheiro'
    | 'vidro-temperado'
    | 'espelhos'
    | 'sacada'
    | 'guarda-corpo'
    | 'portas'
    | 'janelas'
    | 'esquadrias'
    | 'cobertura'
    | 'divisorias'
    | 'fachadas'
    | 'vitrines'
    | 'manutencao';
}

export interface ServiceDefinition {
  slug: ServiceSlug;
  indexNumber: string;
  shortName: string;
  h1Title: string;
  seoTitle: string;
  seoDescription: string;
  heroSubtitle: string;
  fullDescription: string[];
  abntNormCode: string;
  abntNormSummary: string;
  models: string[];
  glassTypes: string[];
  thicknessOptions: string[];
  glassColors: string[];
  finishLines: string[];
  applications: string[];
  benefits: {
    title: string;
    description: string;
  }[];
  catalogItems: CatalogSubProduct[];
  gallery: GalleryItem[];
  faqs: FAQItem[];
  baseRatePerSqm: number;
  sceneType: GalleryItem['sceneType'];
}

export interface QuoteConfiguratorInput {
  serviceSlug: ServiceSlug;
  model: string;
  widthMeters: string;
  heightMeters: string;
  glassType: string;
  thickness: string;
  glassColor: string;
  finishLine: string;
  quantity: number;
  floorNumber: string;
  cep: string;
  slopePercent: string;
  notes: string;
}

export interface AbntValidationResult {
  isValid: boolean;
  hardStopErrors: string[];
  mandatoryWarnings: string[];
  technicalAdjustments: string[];
  normReference: string;
  adjustedHeightMm?: number;
  originalHeightMm?: number;
}

export interface QuoteCartItem {
  id: string;
  serviceSlug: ServiceSlug;
  serviceName: string;
  model: string;
  widthMeters: number;
  heightMeters: number;
  adjustedHeightMm?: number;
  glassType: string;
  thickness: string;
  glassColor: string;
  finishLine: string;
  quantity: number;
  floorNumber?: string;
  cep?: string;
  slopePercent?: number;
  notes?: string;
  abntNorm: string;
  abntTechnicalNotes: string[];
  estimatedMinBrl: number;
  estimatedMaxBrl: number;
}

export type ConsultantOption = 'geral' | 'diego' | 'jonathan';

export interface ProtocolRecord {
  protocolNumber: string;
  createdAtIso: string;
  createdAtFormatted: string;
  customerName: string;
  customerPhone: string;
  customerNeighborhood: string;
  consultant: ConsultantOption;
  items: QuoteCartItem[];
  totalEstimatedMinBrl: number;
  totalEstimatedMaxBrl: number;
  whatsappUrl: string;
  rawPayloadText: string;
  webhookDispatched: boolean;
}
