import React, { useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Sliders,
  Sparkles,
  RotateCcw,
  FileCheck2,
  Copy,
  Check,
} from 'lucide-react';

export type BoxModelVariant =
  | 'padrao'
  | 'canto'
  | 'articulado'
  | 'elegance'
  | 'piso-teto'
  | 'curvo'
  | 'walkin';

export type GlassColorId = 'incolor' | 'fume' | 'verde' | 'fosco';
export type HardwareColorId = 'inox' | 'preto' | 'branco' | 'champagne';

export const GLASS_COLORS: {
  id: GlassColorId;
  name: string;
  desc: string;
  fill: string;
  stroke: string;
  swatch: string;
}[] = [
  {
    id: 'incolor',
    name: 'Incolor 8mm Temperado',
    desc: 'Máxima amplitude e luminosidade natural (mais vendido)',
    fill: 'rgba(216, 243, 250, 0.28)',
    stroke: '#0096B4',
    swatch: 'linear-gradient(135deg, #FFFFFF 0%, #D8F3FA 100%)',
  },
  {
    id: 'fume',
    name: 'Fumê Grafite 8mm',
    desc: 'Visual contemporâneo que harmoniza com perfil preto ou inox',
    fill: 'rgba(30, 41, 59, 0.46)',
    stroke: '#334155',
    swatch: 'linear-gradient(135deg, #64748B 0%, #1E293B 100%)',
  },
  {
    id: 'verde',
    name: 'Verde Temperado 8mm',
    desc: 'Tom esmeralda clássico com excelente contraste em porcelanato claro',
    fill: 'rgba(20, 184, 166, 0.28)',
    stroke: '#0D9488',
    swatch: 'linear-gradient(135deg, #CCFBF1 0%, #2DD4BF 100%)',
  },
  {
    id: 'fosco',
    name: 'Fosco / Acidato (Privacidade)',
    desc: 'Privacidade acetinada que difunde a luz sem manchar ao toque',
    fill: 'rgba(241, 245, 249, 0.74)',
    stroke: '#94A3B8',
    swatch: 'linear-gradient(135deg, #F8FAFC 0%, #CBD5E1 100%)',
  },
];

export const HARDWARE_COLORS: {
  id: HardwareColorId;
  name: string;
  hex: string;
  borderHex: string;
}[] = [
  {
    id: 'inox',
    name: 'Inox Polido / Escovado',
    hex: '#CBD5E1',
    borderHex: '#64748B',
  },
  {
    id: 'preto',
    name: 'Preto Fosco (Epóxi)',
    hex: '#181C21',
    borderHex: '#0F172A',
  },
  {
    id: 'branco',
    name: 'Branco Brilhante / Fosco',
    hex: '#FFFFFF',
    borderHex: '#94A3B8',
  },
  {
    id: 'champagne',
    name: 'Champagne / Dourado',
    hex: '#D4AF37',
    borderHex: '#9A7B2C',
  },
];

/**
 * 1. CARROSSEL DE SISTEMAS DE ROLDANAS E TRILHOS (Para a seção de Segurança)
 * Mostra os 3 sistemas reais do mercado brasileiro:
 * - Roldana Aparente Aço Inox 304 (Elegance)
 * - Trilho Embutido em Alumínio (Box Padrão)
 * - Roldana Estilo Celeiro / Polia Dupla
 */
export const HardwareSystemsCarousel: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState<number>(0);

  const slides = [
    {
      id: 'inox-aparente',
      badge: 'Sistema 01 · Linha Elegance',
      title: 'Roldana Aparente em Aço Inox 304 Maciço',
      subtitle: 'Deslizamento leve sobre tubo estrutural retangular ou cilíndrico',
      specs: 'Suporta folhas de até 45kg · Pino excêntrico de regulagem fina · Sem perfil fechando em cima',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDpmNt2lZsVw-EUaqGUwJ8HFUpPXDGoidGMqZ7fQnf41Uvdb7Saj1ngrgunG0SSEyhFFzhDQX0NEpwpkxFe8c4UHzMapKWXwoTiuhw4I7GJ5utSgoVXdUZVoGllv_-a1PPRrQEA4HFX4d5tBMaxtQlPpMdFqmybmR_xnSOOWcXBenBmumhZQX2Oc9VCx7xaeosrNxCdKfmZtmChgYvDetD5wPDrt-lol93UTMAgvvt_i8eZVWp4mGl_',
    },
    {
      id: 'trilho-embutido',
      badge: 'Sistema 02 · Box Padrão Brasil',
      title: 'Trilho Superior com Roldana Dupla Embutida',
      subtitle: 'Roldanas blindadas correm protegidas por dentro do perfil de alumínio',
      specs: 'Alumínio anodizado (Branco, Preto, Fosco ou Brilhante) · Protegido contra vapor e poeira · Melhor custo-benefício',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuD7JkBWmkbt_8Hp6zS1i9HVikNExRQMIk8BqkvAqU_wyRhTcCU_yEVkPHUWF78gJt6DB_7RjlgVYL8g4oAulwSBMmOzdnXWqPV-IbC2_ptCSK7K996zo11Z209aitbhbQz6BHeGPzi6kJji8BVTOyAN9rukpG0DL9HG6SSFXRuiNY8lKBwUJPF1zm278ByaPDXKQPO7zWGcuaICvrf_W3sSKmkxIWA0i7aN7y5e-iq-089pVRJFgovM',
    },
    {
      id: 'roldana-celeiro',
      badge: 'Sistema 03 · Estilo Celeiro / Industrial',
      title: 'Roldana Estilo Celeiro com Braço Longo',
      subtitle: 'Polia aparente robusta com haste vertical em preto fosco ou inox',
      specs: 'Ideal para projetos contemporâneos e rústicos chiques · Trava anti-descarrilamento integrada',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuC25zU9mPDGWBt-4eazTf1zeCcgCVFhuguYV6Z9kWaghlPWWptLb9hnPRmQiXcrMOz8aCsKSags-djEb6Fh3_-h8PHNHYAyK-HSBoW-yL7q5OZ3obUOrszeIHDz4uwbEoXWnud6zFIWXgvK0xgO1lpBeCi7hUs_qT1Lwdvm6waEkPRAT_XST4PmWGntUq69Oj__dQXKcVFcTHnBsUK9dkaPibjCHgl_P9kBISuxt94zAAfCJ5VVuXG_',
    },
  ];

  const current = slides[activeSlide];

  const renderHardwareDiagramOverlay = (slideId: string) => {
    if (slideId === 'inox-aparente') {
      return (
        <svg viewBox="0 0 220 90" className="w-28 h-12 shrink-0">
          <rect x="10" y="38" width="200" height="10" rx="5" fill="#CBD5E1" />
          <circle cx="75" cy="36" r="20" fill="#E2E8F0" stroke="#475569" strokeWidth="3" />
          <circle cx="75" cy="36" r="6" fill="#00B4D8" />
          <circle cx="145" cy="36" r="20" fill="#E2E8F0" stroke="#475569" strokeWidth="3" />
          <circle cx="145" cy="36" r="6" fill="#00B4D8" />
        </svg>
      );
    }
    if (slideId === 'trilho-embutido') {
      return (
        <svg viewBox="0 0 220 90" className="w-28 h-12 shrink-0">
          <rect x="10" y="20" width="200" height="36" rx="4" fill="#334155" stroke="#94A3B8" strokeWidth="2" />
          <circle cx="70" cy="38" r="11" fill="#00B4D8" stroke="#FFFFFF" strokeWidth="2" />
          <circle cx="96" cy="38" r="11" fill="#00B4D8" stroke="#FFFFFF" strokeWidth="2" />
          <line x1="15" y1="56" x2="205" y2="56" stroke="#4CD6FB" strokeWidth="2" strokeDasharray="4 3" />
        </svg>
      );
    }
    return (
      <svg viewBox="0 0 220 90" className="w-28 h-12 shrink-0">
        <rect x="10" y="28" width="200" height="8" fill="#181C21" />
        <circle cx="110" cy="24" r="18" fill="#181C21" stroke="#4CD6FB" strokeWidth="2.5" />
        <rect x="104" y="18" width="12" height="58" rx="4" fill="#181C21" stroke="#94A3B8" strokeWidth="1.5" />
      </svg>
    );
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="relative rounded-2xl overflow-hidden shadow-lg bg-[#091D2E] aspect-[4/3] group">
        <img
          src={current.imageUrl}
          alt={current.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-all duration-500"
        />

        {/* Scrim Gradiente Medido para Leitura Perfeita */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#091D2E]/95 via-[#091D2E]/40 to-transparent flex flex-col justify-between p-5">
          <div className="flex items-center justify-between gap-2">
            <span className="px-3 py-1 rounded-md bg-[#091D2E]/85 backdrop-blur-md text-[#4CD6FB] text-[11px] font-bold uppercase tracking-wider border border-white/15">
              {current.badge}
            </span>

            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() =>
                  setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length)
                }
                aria-label="Sistema anterior"
                className="w-8 h-8 rounded-lg bg-[#091D2E]/80 hover:bg-[#00B4D8] text-white flex items-center justify-center border border-white/20 transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setActiveSlide((prev) => (prev + 1) % slides.length)}
                aria-label="Próximo sistema"
                className="w-8 h-8 rounded-lg bg-[#091D2E]/80 hover:bg-[#00B4D8] text-white flex items-center justify-center border border-white/20 transition-colors cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-end justify-between gap-3">
              <div>
                <h3 className="text-lg font-bold text-white leading-snug">
                  {current.title}
                </h3>
                <p className="text-xs text-[#D1E4FC] mt-0.5">{current.subtitle}</p>
              </div>
              <div className="hidden sm:block bg-[#091D2E]/80 p-1.5 rounded-lg border border-white/15">
                {renderHardwareDiagramOverlay(current.id)}
              </div>
            </div>
            <p className="text-[11px] text-[#B3EBFF] pt-2 border-t border-white/15">
              {current.specs}
            </p>
          </div>
        </div>
      </div>

      {/* Seletor Rápido dos 3 Sistemas de Roldanas */}
      <div className="grid grid-cols-3 gap-2">
        {slides.map((s, idx) => {
          const isActive = idx === activeSlide;
          return (
            <button
              key={s.id}
              type="button"
              onClick={() => setActiveSlide(idx)}
              className={`p-2.5 rounded-xl text-left border transition-all cursor-pointer ${
                isActive
                  ? 'bg-[#FFFFFF] border-[#00B4D8] shadow-xs'
                  : 'bg-[#FFFFFF]/60 border-[#BCC9CE]/50 hover:bg-[#FFFFFF]'
              }`}
            >
              <div className="text-[10px] font-bold uppercase tracking-wider text-[#00677D]">
                0{idx + 1}. Sistema
              </div>
              <div className="text-xs font-bold text-[#181C21] truncate mt-0.5">
                {idx === 0
                  ? 'Roldana Inox'
                  : idx === 1
                  ? 'Trilho Embutido'
                  : 'Estilo Celeiro'}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

/**
 * 2. ANATOMIA TÉCNICA FLUIDA DE SEGURANÇA (Substitui os 3 ícones genéricos)
 * Apresenta diagramas visuais claros de engenharia em vez de ícones clichês.
 */
export const FluidSafetyAnatomy: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState<'tempera' | 'pelicula' | 'vedacao'>(
    'tempera'
  );

  return (
    <div className="mt-2 pt-5 border-t border-[#EBEFF5] space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span className="text-xs font-bold uppercase tracking-wider text-[#3D494D]">
          Raio-X de Engenharia do Box (Clique para inspecionar):
        </span>
        <div className="flex flex-wrap gap-1.5 bg-[#F1F4FB] p-1 rounded-xl">
          {[
            { id: 'tempera', label: '01. Têmpera 8mm / 10mm' },
            { id: 'pelicula', label: '02. Película Retentora' },
            { id: 'vedacao', label: '03. Vedação Cura Neutra' },
          ].map((tab) => {
            const active = activeLayer === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() =>
                  setActiveLayer(tab.id as 'tempera' | 'pelicula' | 'vedacao')
                }
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                  active
                    ? 'bg-[#091D2E] text-white shadow-2xs'
                    : 'text-[#3D494D] hover:text-[#181C21]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Painel Visual Fluido com Diagrama Técnico SVG */}
      <div className="bg-[#F8F9FF] rounded-xl p-4 sm:p-5 border border-[#BCC9CE]/60 grid grid-cols-1 sm:grid-cols-12 gap-5 items-center">
        <div className="sm:col-span-5 bg-[#091D2E] rounded-lg p-3 flex items-center justify-center h-32">
          {activeLayer === 'tempera' && (
            <svg viewBox="0 0 260 110" className="w-full h-full">
              {/* Comparativo Vidro Comum vs Temperado NBR 14207 */}
              <g transform="translate(10, 12)">
                <rect
                  x="0"
                  y="0"
                  width="105"
                  height="84"
                  rx="6"
                  fill="#1E293B"
                  stroke="#EF4444"
                  strokeWidth="1.5"
                />
                <polygon
                  points="20,15 55,40 30,70"
                  fill="none"
                  stroke="#F87171"
                  strokeWidth="1.5"
                />
                <polygon
                  points="55,40 90,20 75,68"
                  fill="none"
                  stroke="#F87171"
                  strokeWidth="1.5"
                />
                <text
                  x="52"
                  y="78"
                  textAnchor="middle"
                  fill="#FCA5A5"
                  fontSize="9"
                  fontWeight="bold"
                >
                  COMUM (PONTIAGUDO)
                </text>
              </g>
              <g transform="translate(135, 12)">
                <rect
                  x="0"
                  y="0"
                  width="115"
                  height="84"
                  rx="6"
                  fill="#0F293A"
                  stroke="#00B4D8"
                  strokeWidth="2"
                />
                {[22, 42, 62, 82].map((cx) =>
                  [24, 42, 58].map((cy) => (
                    <circle
                      key={`${cx}-${cy}`}
                      cx={cx}
                      cy={cy}
                      r="5.5"
                      fill="#4CD6FB"
                      fillOpacity="0.35"
                      stroke="#4CD6FB"
                      strokeWidth="1.2"
                    />
                  ))
                )}
                <text
                  x="57"
                  y="78"
                  textAnchor="middle"
                  fill="#4CD6FB"
                  fontSize="9"
                  fontWeight="bold"
                >
                  TEMPERADO (GRÂNULOS)
                </text>
              </g>
            </svg>
          )}

          {activeLayer === 'pelicula' && (
            <svg viewBox="0 0 260 110" className="w-full h-full">
              {/* Corte Transversal Vidro + Película Poliéster Classe A */}
              <rect
                x="45"
                y="18"
                width="140"
                height="26"
                rx="3"
                fill="#38BDF8"
                fillOpacity="0.35"
                stroke="#4CD6FB"
                strokeWidth="2"
              />
              <text x="115" y="35" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="bold">
                VIDRO TEMPERADO 8MM
              </text>
              <rect
                x="45"
                y="48"
                width="140"
                height="12"
                rx="2"
                fill="#00B4D8"
              />
              <text x="115" y="57" textAnchor="middle" fill="#091D2E" fontSize="8" fontWeight="bold">
                PELÍCULA DE RETENÇÃO CLASSE A
              </text>
              <text x="130" y="84" textAnchor="middle" fill="#B3EBFF" fontSize="10">
                Mantém a folha inteira no lugar após impacto
              </text>
            </svg>
          )}

          {activeLayer === 'vedacao' && (
            <svg viewBox="0 0 260 110" className="w-full h-full">
              {/* Corte Parede/Piso + Perfil U + Cordão de Silicone Cura Neutra */}
              <rect x="20" y="72" width="220" height="22" fill="#334155" />
              <rect x="95" y="12" width="16" height="60" fill="#4CD6FB" fillOpacity="0.45" stroke="#4CD6FB" strokeWidth="1.5" />
              <rect x="87" y="54" width="32" height="18" fill="none" stroke="#CBD5E1" strokeWidth="3" />
              <circle cx="84" cy="69" r="6" fill="#10B981" />
              <circle cx="122" cy="69" r="6" fill="#10B981" />
              <text x="185" y="45" textAnchor="middle" fill="#6EE7B7" fontSize="10" fontWeight="bold">
                Cordão Duplo
              </text>
              <text x="185" y="60" textAnchor="middle" fill="#D1FAE5" fontSize="9">
                100% Estanque
              </text>
            </svg>
          )}
        </div>

        <div className="sm:col-span-7 space-y-1.5">
          {activeLayer === 'tempera' && (
            <>
              <div className="text-xs font-bold text-[#00677D] uppercase tracking-wider">
                Espessuras Reais 8mm e 10mm · Forno 650°C
              </div>
              <h4 className="text-base font-bold text-[#181C21]">
                Fragmentação Arredondada Anti-Corte (NBR 14207)
              </h4>
              <p className="text-xs sm:text-[13px] text-[#3D494D] leading-relaxed">
                Enquanto o vidro comum quebra em pontas afiadas, o vidro temperado da
                Liderança suporta choques térmicos do banho quente e, em caso extremo,
                fragmenta-se em pequenos grãos sem arestas cortantes.
              </p>
            </>
          )}

          {activeLayer === 'pelicula' && (
            <>
              <div className="text-xs font-bold text-[#00677D] uppercase tracking-wider">
                Proteção Extra para Crianças e Idosos
              </div>
              <h4 className="text-base font-bold text-[#181C21]">
                Película de Segurança Retentora de Fragmentos
              </h4>
              <p className="text-xs sm:text-[13px] text-[#3D494D] leading-relaxed">
                Aplicada de forma invisível sobre o vidro temperado, funciona como o
                para-brisa de um automóvel: se houver quebra acidental, os grãos ficam
                presos na película sem cair no piso do box.
              </p>
            </>
          )}

          {activeLayer === 'vedacao' && (
            <>
              <div className="text-xs font-bold text-[#00677D] uppercase tracking-wider">
                Acabamento Limpo que Não Amarela
              </div>
              <h4 className="text-base font-bold text-[#181C21]">
                Silicone Estrutural de Cura Neutra com Fungicida
              </h4>
              <p className="text-xs sm:text-[13px] text-[#3D494D] leading-relaxed">
                Não utilizamos silicone acético barato (que tem cheiro de vinagre, solta do
                alumínio e cria mofo preto). Aplicamos exclusivamente selante de cura
                neutra de alta aderência no porcelanato e no mármore.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

/**
 * 3. RENDERIZADOR CINEMÁTICO INDIVIDUAL POR MODELO (3D Perspectiva + Planta Baixa)
 * Cada um dos 7 modelos tem sua própria geometria real:
 * - 'canto' (L 90°): Duas paredes perpendiculares em quina + 2 fixos + 2 portas no vértice 90°!
 * - 'articulado' (Camarão): Duas folhas dobrando em "V" (sanfona) contra a parede!
 * - 'padrao': Trilho superior fechado de alumínio + 1 fixo + 1 correr!
 * - 'elegance': Varão tubular inox + 2 roldanas grandes aparentes!
 * - 'piso-teto': Fechamento até o teto (2,50m) + retenção de vapor!
 * - 'curvo': Vidro curvo em arco 90°!
 * - 'walkin': Painel fixo único sem porta e passagem livre!
 */
interface BoxKinematicSimulatorProps {
  variant: BoxModelVariant;
  glassColor?: GlassColorId;
  hardwareColor?: HardwareColorId;
  openPercent?: number;
  dimA?: number;
  dimB?: number;
  heightCm?: number;
}

export const BoxKinematicSimulator: React.FC<BoxKinematicSimulatorProps> = ({
  variant,
  glassColor = 'incolor',
  hardwareColor = 'inox',
  openPercent = 55,
  dimA = 120,
  dimB = 100,
  heightCm = 190,
}) => {
  const glass = GLASS_COLORS.find((g) => g.id === glassColor) || GLASS_COLORS[0];
  const hw =
    HARDWARE_COLORS.find((h) => h.id === hardwareColor) || HARDWARE_COLORS[0];

  const t = openPercent / 100; // 0.0 (fechado) a 1.0 (aberto)

  return (
    <svg
      viewBox="0 0 800 500"
      className="w-full h-full block select-none bg-[#0F172A]"
      role="img"
      aria-label={`Simulação técnica do modelo ${variant}`}
    >
      <defs>
        <linearGradient id="wall-left" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#EAE5DC" />
          <stop offset="100%" stopColor="#DCD5C9" />
        </linearGradient>
        <linearGradient id="wall-right" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#F5F2EC" />
          <stop offset="100%" stopColor="#E6E0D6" />
        </linearGradient>
        <linearGradient id="floor-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#CFC8BC" />
          <stop offset="100%" stopColor="#B8B0A2" />
        </linearGradient>
      </defs>

      {/* =====================================================================
          CASO 1: BOX DE CANTO EM L (90 GRAUS) - Perspectiva Isométrica de Quina
         ===================================================================== */}
      {variant === 'canto' && (
        <g>
          {/* Paredes em Quina 90° */}
          <polygon points="60,40 400,95 400,375 60,435" fill="url(#wall-left)" />
          <polygon points="400,95 740,40 740,435 400,375" fill="url(#wall-right)" />
          <polygon points="60,435 400,375 740,435 400,490" fill="url(#floor-grad)" />

          {/* Linhas de Rejunte Porcelanato Brasileiro */}
          <line x1="400" y1="95" x2="400" y2="375" stroke="#B8B0A2" strokeWidth="2" />
          <line x1="60" y1="230" x2="400" y2="235" stroke="#CCC4B8" strokeWidth="1" />
          <line x1="400" y1="235" x2="740" y2="230" stroke="#CCC4B8" strokeWidth="1" />

          {/* Nicho Embutido e Chuveiro na Parede Esquerda */}
          <polygon
            points="210,190 310,202 310,252 210,242"
            fill="#C2B9AA"
            stroke="#948C7E"
            strokeWidth="1.5"
          />
          <circle cx="280" cy="135" r="14" fill={hw.hex} stroke={hw.borderHex} />

          {/* LADO A (Esquerdo do L): Painel Fixo Esquerdo */}
          <polygon
            points="135,95 265,120 265,400 135,422"
            fill={glass.fill}
            stroke={glass.stroke}
            strokeWidth="2.5"
          />
          {/* LADO A: Porta de Correr Esquerda (abre deslizando para trás do fixo A) */}
          <g
            transform={`translate(${-t * 95}, ${-t * 17})`}
            style={{ transition: 'transform 300ms ease-out' }}
          >
            <polygon
              points="260,120 398,145 398,425 260,400"
              fill={glass.fill}
              stroke={glass.stroke}
              strokeWidth="3"
            />
            {/* Puxador Esquerdo */}
            <line
              x1="382"
              y1="260"
              x2="382"
              y2="305"
              stroke={hw.hex}
              strokeWidth="5"
              strokeLinecap="round"
            />
          </g>

          {/* LADO B (Direito do L): Painel Fixo Direito */}
          <polygon
            points="665,95 535,120 535,400 665,422"
            fill={glass.fill}
            stroke={glass.stroke}
            strokeWidth="2.5"
          />
          {/* LADO B: Porta de Correr Direita (abre deslizando para trás do fixo B) */}
          <g
            transform={`translate(${t * 95}, ${-t * 17})`}
            style={{ transition: 'transform 300ms ease-out' }}
          >
            <polygon
              points="540,120 402,145 402,425 540,400"
              fill={glass.fill}
              stroke={glass.stroke}
              strokeWidth="3"
            />
            {/* Puxador Direito */}
            <line
              x1="418"
              y1="260"
              x2="418"
              y2="305"
              stroke={hw.hex}
              strokeWidth="5"
              strokeLinecap="round"
            />
          </g>

          {/* Trilho Superior em L (90 Graus no Vértice Frontal) */}
          <polyline
            points="135,95 400,145 665,95"
            fill="none"
            stroke={hw.hex}
            strokeWidth="9"
            strokeLinejoin="round"
          />
          <polyline
            points="135,422 400,425 665,422"
            fill="none"
            stroke={hw.hex}
            strokeWidth="6"
            strokeLinejoin="round"
          />

          {/* Cotas de Medida Lado A e Lado B */}
          <text
            x="230"
            y="455"
            fill="#0F172A"
            fontSize="13"
            fontWeight="bold"
            textAnchor="middle"
          >
            Lado A: {dimA} cm
          </text>
          <text
            x="570"
            y="455"
            fill="#0F172A"
            fontSize="13"
            fontWeight="bold"
            textAnchor="middle"
          >
            Lado B: {dimB} cm
          </text>
        </g>
      )}

      {/* =====================================================================
          CASO 2: BOX ARTICULADO (CAMARÃO) - Folhas Dobrando em "V" (Sanfona)
         ===================================================================== */}
      {variant === 'articulado' && (
        <g>
          {/* Fundo do Banheiro Compacto */}
          <rect x="80" y="35" width="640" height="385" fill="url(#wall-right)" />
          <polygon points="80,420 720,420 770,485 30,485" fill="url(#floor-grad)" />

          {/* Nicho e Chuveiro */}
          <rect
            x="220"
            y="165"
            width="150"
            height="70"
            rx="4"
            fill="#D5CEC2"
            stroke="#A8A093"
            strokeWidth="1.5"
          />
          <rect x="275" y="75" width="45" height="8" rx="3" fill={hw.hex} />

          {/* Trilho Guia Superior e Inferior */}
          <rect
            x="170"
            y="80"
            width="460"
            height="12"
            fill={hw.hex}
            stroke={hw.borderHex}
          />
          <rect
            x="170"
            y="414"
            width="460"
            height="8"
            fill={hw.hex}
            stroke={hw.borderHex}
          />

          {/* Folha 1 (Esquerda Articulada em V) */}
          {(() => {
            const foldWidth = 220 * (1 - t * 0.68);
            const depthOffset = t * 42;
            const xMid = 175 + foldWidth;
            const xEnd = xMid + foldWidth;

            return (
              <>
                {/* Folha 1 dobrando para frente */}
                <polygon
                  points={`175,92 ${xMid},${92 + depthOffset} ${xMid},${
                    414 + depthOffset
                  } 175,414`}
                  fill={glass.fill}
                  stroke={glass.stroke}
                  strokeWidth="3"
                />
                {/* Folha 2 dobrando de volta para o trilho */}
                <polygon
                  points={`${xMid},${92 + depthOffset} ${xEnd},92 ${xEnd},414 ${xMid},${
                    414 + depthOffset
                  }`}
                  fill={glass.fill}
                  stroke={glass.stroke}
                  strokeWidth="3"
                />
                {/* Dobradiças Pantográficas Centrais */}
                <rect
                  x={xMid - 8}
                  y={145 + depthOffset * 0.8}
                  width="16"
                  height="22"
                  rx="3"
                  fill={hw.hex}
                  stroke={hw.borderHex}
                />
                <rect
                  x={xMid - 8}
                  y={335 + depthOffset * 0.8}
                  width="16"
                  height="22"
                  rx="3"
                  fill={hw.hex}
                  stroke={hw.borderHex}
                />
                {/* Puxador na Folha 2 */}
                <circle
                  cx={xEnd - 22}
                  cy="255"
                  r="10"
                  fill={hw.hex}
                  stroke={hw.borderHex}
                  strokeWidth="2"
                />
              </>
            );
          })()}

          <text
            x="400"
            y="462"
            fill="#0F172A"
            fontSize="13"
            fontWeight="bold"
            textAnchor="middle"
          >
            Vão Frontal Estreito: {dimA} cm (Passagem Livre de até 90% ao dobrar)
          </text>
        </g>
      )}

      {/* =====================================================================
          CASO 3: BOX DE VIDRO CURVO - Fechamento Radial Arredondado
         ===================================================================== */}
      {variant === 'curvo' && (
        <g>
          <polygon points="60,40 400,90 400,380 60,435" fill="url(#wall-left)" />
          <polygon points="400,90 740,40 740,435 400,380" fill="url(#wall-right)" />
          <polygon points="60,435 400,380 740,435 400,490" fill="url(#floor-grad)" />

          {/* Base Curva no Piso */}
          <path
            d="M 180 410 Q 400 475 620 410"
            fill="none"
            stroke={hw.hex}
            strokeWidth="10"
          />
          {/* Trilho Curvo Superior */}
          <path
            d="M 180 105 Q 400 165 620 105"
            fill="none"
            stroke={hw.hex}
            strokeWidth="12"
          />

          {/* Painel Curvo Fixo Esquerdo */}
          <path
            d="M 180 105 Q 290 135 400 138 L 400 442 Q 290 438 180 410 Z"
            fill={glass.fill}
            stroke={glass.stroke}
            strokeWidth="2.5"
          />

          {/* Porta Curva Deslizante Direita */}
          <g
            transform={`translate(${-t * 150}, ${-t * 8})`}
            style={{ transition: 'transform 300ms ease-out' }}
          >
            <path
              d="M 400 138 Q 510 135 620 105 L 620 410 Q 510 438 400 442 Z"
              fill={glass.fill}
              stroke={glass.stroke}
              strokeWidth="3"
            />
            <rect
              x="575"
              y="245"
              width="8"
              height="65"
              rx="4"
              fill={hw.hex}
            />
          </g>

          <text
            x="400"
            y="475"
            fill="#0F172A"
            fontSize="13"
            fontWeight="bold"
            textAnchor="middle"
          >
            Box Curvo Termoformado Sob Medida ({dimA} × {dimB} cm)
          </text>
        </g>
      )}

      {/* =====================================================================
          CASOS 4, 5, 6 e 7: PADRÃO, ELEGANCE, PISO AO TETO E WALK-IN
         ===================================================================== */}
      {(variant === 'padrao' ||
        variant === 'elegance' ||
        variant === 'piso-teto' ||
        variant === 'walkin') && (
        <g>
          <rect x="80" y="30" width="640" height="390" fill="url(#wall-right)" />
          <polygon points="80,420 720,420 770,485 30,485" fill="url(#floor-grad)" />

          {/* Azulejos / Porcelanato 60x120 */}
          <line x1="80" y1="160" x2="720" y2="160" stroke="#DDD6CA" strokeWidth="1.2" />
          <line x1="80" y1="290" x2="720" y2="290" stroke="#DDD6CA" strokeWidth="1.2" />
          <line x1="300" y1="30" x2="300" y2="420" stroke="#DDD6CA" strokeWidth="1.2" />
          <line x1="520" y1="30" x2="520" y2="420" stroke="#DDD6CA" strokeWidth="1.2" />

          {/* Nicho e Chuveiro */}
          <rect
            x="160"
            y="180"
            width="130"
            height="65"
            rx="4"
            fill="#CFC7B8"
            stroke="#ABA292"
            strokeWidth="1.5"
          />
          <rect x="200" y="65" width="55" height="8" rx="3" fill={hw.hex} />

          {(() => {
            const topY = variant === 'piso-teto' ? 32 : 88;
            const bottomY = 420;
            const h = bottomY - topY;
            const slidePx = t * 195;

            return (
              <>
                {/* Folha Fixa Esquerda */}
                <rect
                  x="130"
                  y={topY}
                  width="275"
                  height={h}
                  fill={glass.fill}
                  stroke={glass.stroke}
                  strokeWidth="3"
                />

                {/* Folha de Correr Direita (Não existe no Walk-in Painel Fixo) */}
                {variant !== 'walkin' && (
                  <g
                    transform={`translate(${-slidePx}, 0)`}
                    style={{ transition: 'transform 300ms ease-out' }}
                  >
                    <rect
                      x="390"
                      y={topY + (variant === 'elegance' ? 12 : 4)}
                      width="280"
                      height={h - (variant === 'elegance' ? 14 : 6)}
                      fill={glass.fill}
                      stroke={glass.stroke}
                      strokeWidth="3.5"
                    />

                    {/* Roldanas Aparentes (Exclusivo Elegance) */}
                    {variant === 'elegance' && (
                      <>
                        <circle
                          cx="440"
                          cy={topY + 2}
                          r="15"
                          fill={hw.hex}
                          stroke={hw.borderHex}
                          strokeWidth="3"
                        />
                        <circle
                          cx="615"
                          cy={topY + 2}
                          r="15"
                          fill={hw.hex}
                          stroke={hw.borderHex}
                          strokeWidth="3"
                        />
                      </>
                    )}

                    {/* Puxador */}
                    <rect
                      x="635"
                      y={topY + h * 0.42}
                      width="10"
                      height="80"
                      rx="4"
                      fill={hw.hex}
                      stroke={hw.borderHex}
                    />
                  </g>
                )}

                {/* Trilho Superior (Embutido largo no Padrão vs Varão fino no Elegance) */}
                {variant !== 'walkin' && (
                  <rect
                    x="126"
                    y={topY - (variant === 'padrao' ? 10 : 4)}
                    width="548"
                    height={variant === 'padrao' ? 22 : 9}
                    rx={variant === 'elegance' ? 4 : 2}
                    fill={hw.hex}
                    stroke={hw.borderHex}
                    strokeWidth="1.5"
                  />
                )}

                {/* Perfil Inferior / Guia */}
                <rect
                  x="126"
                  y={bottomY - 5}
                  width={variant === 'walkin' ? 285 : 548}
                  height="8"
                  fill={hw.hex}
                />

                {/* Vapor Retido no Piso ao Teto */}
                {variant === 'piso-teto' && (
                  <g opacity="0.32">
                    <circle cx="240" cy="190" r="70" fill="#FFFFFF" filter="blur(18px)" />
                    <circle cx="330" cy="150" r="80" fill="#E0F2FE" filter="blur(22px)" />
                  </g>
                )}
              </>
            );
          })()}

          <text
            x="400"
            y="462"
            fill="#0F172A"
            fontSize="13"
            fontWeight="bold"
            textAnchor="middle"
          >
            {variant === 'walkin'
              ? `Painel Fixo Walk-in: ${dimA} cm (Passagem Livre Sem Porta)`
              : `Largura do Vão: ${dimA} cm × Altura: ${
                  variant === 'piso-teto' ? '250' : heightCm
                } cm`}
          </text>
        </g>
      )}

      {/* =====================================================================
          MINIATURA DE PLANTA BAIXA ARQUITETÔNICA (Canto Superior Direito)
          Mostra exatamente como o box abre visto de cima!
         ===================================================================== */}
      <g transform="translate(615, 18)">
        <rect
          x="0"
          y="0"
          width="165"
          height="135"
          rx="10"
          fill="#091D2E"
          fillOpacity="0.92"
          stroke="#4CD6FB"
          strokeOpacity="0.4"
          strokeWidth="1.5"
        />
        <text
          x="82"
          y="18"
          textAnchor="middle"
          fill="#4CD6FB"
          fontSize="9"
          fontWeight="bold"
        >
          PLANTA BAIXA (VISTA SUPERIOR)
        </text>

        {variant === 'canto' && (
          <g transform="translate(32, 28)">
            {/* Paredes em L */}
            <polyline
              points="0,85 0,0 100,0"
              fill="none"
              stroke="#94A3B8"
              strokeWidth="5"
            />
            {/* Fixos */}
            <line x1="0" y1="85" x2="45" y2="85" stroke="#38BDF8" strokeWidth="3" />
            <line x1="100" y1="0" x2="100" y2="45" stroke="#38BDF8" strokeWidth="3" />
            {/* Portas móveis em 90 graus */}
            <line
              x1={45 - t * 35}
              y1="80"
              x2={100 - t * 35}
              y2="80"
              stroke="#4CD6FB"
              strokeWidth="4"
            />
            <line
              x1="95"
              y1={45 - t * 35}
              x2="95"
              y2={85 - t * 35}
              stroke="#4CD6FB"
              strokeWidth="4"
            />
            <text x="50" y="52" textAnchor="middle" fill="#FFFFFF" fontSize="9">
              90° em L
            </text>
          </g>
        )}

        {variant === 'articulado' && (
          <g transform="translate(22, 32)">
            <polyline
              points="0,75 0,0 120,0 120,75"
              fill="none"
              stroke="#94A3B8"
              strokeWidth="5"
            />
            {/* Sanfona em V */}
            <polyline
              points={`4,72 ${30 - t * 18},${72 - t * 28} ${60 - t * 36},72`}
              fill="none"
              stroke="#4CD6FB"
              strokeWidth="4"
            />
            <text x="60" y="40" textAnchor="middle" fill="#FFFFFF" fontSize="9">
              Dobra em V
            </text>
          </g>
        )}

        {variant === 'curvo' && (
          <g transform="translate(32, 28)">
            <polyline
              points="0,85 0,0 100,0"
              fill="none"
              stroke="#94A3B8"
              strokeWidth="5"
            />
            <path
              d="M 0 85 Q 95 85 100 0"
              fill="none"
              stroke="#4CD6FB"
              strokeWidth="3.5"
              strokeDasharray="6 3"
            />
            <text x="45" y="45" textAnchor="middle" fill="#FFFFFF" fontSize="9">
              Raio Curvo
            </text>
          </g>
        )}

        {variant === 'walkin' && (
          <g transform="translate(22, 32)">
            <polyline
              points="0,75 0,0 120,0 120,75"
              fill="none"
              stroke="#94A3B8"
              strokeWidth="5"
            />
            <line x1="0" y1="72" x2="68" y2="72" stroke="#4CD6FB" strokeWidth="4" />
            <text x="92" y="74" textAnchor="middle" fill="#6EE7B7" fontSize="8">
              Livre →
            </text>
          </g>
        )}

        {(variant === 'padrao' ||
          variant === 'elegance' ||
          variant === 'piso-teto') && (
          <g transform="translate(22, 32)">
            <polyline
              points="0,75 0,0 120,0 120,75"
              fill="none"
              stroke="#94A3B8"
              strokeWidth="5"
            />
            <line x1="0" y1="72" x2="62" y2="72" stroke="#38BDF8" strokeWidth="3" />
            <line
              x1={56 - t * 48}
              y1="66"
              x2={118 - t * 48}
              y2="66"
              stroke="#4CD6FB"
              strokeWidth="4"
            />
            <text x="60" y="40" textAnchor="middle" fill="#FFFFFF" fontSize="9">
              1 Fixo + 1 Correr
            </text>
          </g>
        )}
      </g>
    </svg>
  );
};

/**
 * 4. BOT DE TRIAGEM E SIMULAÇÃO TÉCNICA (100% Interno na Página - Sem ir para o WhatsApp)
 * Recebe qualquer modelo clicado na página, adapta as perguntas (ex: Lado A x Lado B no Box de Canto),
 * mostra a cinemática real do modelo e gera o Protocolo VL-.
 */
export interface BoxBotModelOption {
  id: string;
  variant: BoxModelVariant;
  title: string;
  shortDesc: string;
  defaultDimA: number;
  defaultDimB?: number;
  defaultHeight: number;
}

export const BOX_BOT_MODELS: BoxBotModelOption[] = [
  {
    id: 'box-padrao',
    variant: 'padrao',
    title: 'Box Padrão (De Correr)',
    shortDesc: 'Trilho superior embutido em alumínio (1 fixo + 1 porta de correr)',
    defaultDimA: 120,
    defaultHeight: 190,
  },
  {
    id: 'box-canto',
    variant: 'canto',
    title: 'Box de Canto (Em L 90°)',
    shortDesc: 'Duas paredes em 90° com 2 fixos e 2 portas de correr no vértice',
    defaultDimA: 90,
    defaultDimB: 90,
    defaultHeight: 190,
  },
  {
    id: 'box-articulado',
    variant: 'articulado',
    title: 'Box Articulado (Camarão)',
    shortDesc: 'Folhas que dobram em "V" para banheiros compactos e vãos estreitos',
    defaultDimA: 80,
    defaultHeight: 190,
  },
  {
    id: 'box-elegance',
    variant: 'elegance',
    title: 'Roldanas Aparentes (Elegance)',
    shortDesc: 'Roldanas maciças aparentes em Aço Inox 304 sobre tubo estrutural',
    defaultDimA: 135,
    defaultHeight: 190,
  },
  {
    id: 'box-piso-teto',
    variant: 'piso-teto',
    title: 'Box Piso ao Teto (Thermal)',
    shortDesc: 'Fechamento integral até o teto/gesso que retém o vapor do banho',
    defaultDimA: 140,
    defaultHeight: 250,
  },
  {
    id: 'box-curvo',
    variant: 'curvo',
    title: 'Box Vidro Curvo',
    shortDesc: 'Vidro termoformado com raio curvo contínuo para projetos especiais',
    defaultDimA: 95,
    defaultDimB: 95,
    defaultHeight: 190,
  },
  {
    id: 'box-walkin',
    variant: 'walkin',
    title: 'Box Walk-in / Painel Fixo',
    shortDesc: 'Painel fixo único minimalista com entrada livre sem porta',
    defaultDimA: 90,
    defaultHeight: 200,
  },
];

interface BoxTriageBotProps {
  selectedModelVariant: BoxModelVariant;
  onChangeModelVariant: (variant: BoxModelVariant) => void;
}

export const BoxTriageBot: React.FC<BoxTriageBotProps> = ({
  selectedModelVariant,
  onChangeModelVariant,
}) => {
  const currentModel =
    BOX_BOT_MODELS.find((m) => m.variant === selectedModelVariant) || BOX_BOT_MODELS[0];

  const [dimA, setDimA] = useState<number>(120);
  const [dimB, setDimB] = useState<number>(95);
  const [heightCm, setHeightCm] = useState<number>(190);
  const [glassColor, setGlassColor] = useState<GlassColorId>('incolor');
  const [hardwareColor, setHardwareColor] = useState<HardwareColorId>('inox');
  const [openPercent, setOpenPercent] = useState<number>(50);

  // Dados da Triagem do Bot
  const [clientName, setClientName] = useState<string>('');
  const [clientPhone, setClientPhone] = useState<string>('');
  const [clientCity, setClientCity] = useState<string>('Umuarama - PR');
  const [urgency, setUrgency] = useState<string>('Esta semana');
  const [formError, setFormError] = useState<string>('');
  const [generatedProtocol, setGeneratedProtocol] = useState<{
    code: string;
    timestamp: string;
    areaM2: string;
    recommendedThickness: string;
  } | null>(null);
  const [copiedProtocol, setCopiedProtocol] = useState<boolean>(false);

  const isCornerModel =
    selectedModelVariant === 'canto' || selectedModelVariant === 'curvo';

  const totalWidthCm = isCornerModel ? dimA + dimB : dimA;
  const effectiveHeightCm = selectedModelVariant === 'piso-teto' ? Math.max(heightCm, 230) : heightCm;
  const areaM2 = ((totalWidthCm / 100) * (effectiveHeightCm / 100)).toFixed(2);
  const recommendedThickness =
    selectedModelVariant === 'piso-teto' ||
    selectedModelVariant === 'walkin' ||
    totalWidthCm > 160
      ? '10mm Temperado (Recomendado NBR 14207)'
      : '8mm Temperado Certificado NBR 14207';

  const handleModelSwitch = (m: BoxBotModelOption) => {
    onChangeModelVariant(m.variant);
    setDimA(m.defaultDimA);
    if (m.defaultDimB) setDimB(m.defaultDimB);
    setHeightCm(m.defaultHeight);
    setGeneratedProtocol(null);
  };

  const handleGenerateProtocol = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    if (!clientName.trim()) {
      setFormError('Por favor, informe seu nome para gerar a ficha de triagem.');
      return;
    }
    if (!clientPhone.trim() || clientPhone.replace(/\D/g, '').length < 10) {
      setFormError('Informe um telefone válido com DDD (ex: 44 98415-2049).');
      return;
    }

    const now = new Date();
    const yyyy = now.getFullYear();
    const mm = String(now.getMonth() + 1).padStart(2, '0');
    const dd = String(now.getDate()).padStart(2, '0');
    const rand = Math.floor(1000 + Math.random() * 9000);

    setGeneratedProtocol({
      code: `VL-${yyyy}${mm}${dd}-${rand}`,
      timestamp: now.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
      areaM2,
      recommendedThickness,
    });
  };

  const glassObj = GLASS_COLORS.find((g) => g.id === glassColor) || GLASS_COLORS[0];
  const hwObj =
    HARDWARE_COLORS.find((h) => h.id === hardwareColor) || HARDWARE_COLORS[0];

  const handleCopySummary = () => {
    if (!generatedProtocol) return;
    const text = `Protocolo ${generatedProtocol.code} - Vidraçaria Liderança\nModelo: ${
      currentModel.title
    }\nMedidas: ${
      isCornerModel
        ? `Lado A ${dimA}cm x Lado B ${dimB}cm`
        : `Largura ${dimA}cm`
    } x Altura ${effectiveHeightCm}cm (${generatedProtocol.areaM2} m²)\nVidro: ${
      glassObj.name
    } (${generatedProtocol.recommendedThickness})\nFerragem: ${
      hwObj.name
    }\nCliente: ${clientName} (${clientPhone}) - ${clientCity}`;
    navigator.clipboard.writeText(text);
    setCopiedProtocol(true);
    setTimeout(() => setCopiedProtocol(false), 2500);
  };

  return (
    <section
      id="bot-triagem-box"
      className="w-full bg-[#FFFFFF] py-16 lg:py-24 border-t border-[#BCC9CE]/50"
    >
      <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-8">
        {/* Cabeçalho do Bot de Triagem */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.08em] text-[#00677D]">
              Triagem Inteligente · Sem Sair da Página
            </span>
            <h2 className="text-3xl sm:text-[40px] font-bold text-[#181C21] tracking-[-0.025em] leading-tight mt-1">
              Simulador de Box &amp; Filtro de Orçamento
            </h2>
            <p className="text-[15px] text-[#3D494D] mt-2 leading-relaxed">
              Veja abaixo o funcionamento real de cada modelo (inclusive o{' '}
              <strong className="text-[#181C21]">Box de Canto em L 90°</strong> e o{' '}
              <strong className="text-[#181C21]">Articulado Camarão</strong>), informe as
              medidas aproximadas e gere sua ficha técnica com protocolo na hora.
            </p>
          </div>

          <div className="text-xs font-semibold text-[#3D494D] bg-[#F1F4FB] px-4 py-2.5 rounded-xl border border-[#BCC9CE]/50">
            Modelo em exibição:{' '}
            <strong className="text-[#00677D]">{currentModel.title}</strong>
          </div>
        </div>

        {/* Seletor Rápido dos 7 Modelos (Troca Imediatamente o Desenho 3D e Planta Baixa) */}
        <div className="mb-8">
          <div className="text-xs font-bold uppercase tracking-wider text-[#3D494D] mb-2.5">
            Passo 1 · Clique no modelo para ver a simulação exata da abertura:
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-2">
            {BOX_BOT_MODELS.map((m) => {
              const active = m.variant === selectedModelVariant;
              return (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => handleModelSwitch(m)}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    active
                      ? 'bg-[#091D2E] border-[#00B4D8] text-white shadow-sm'
                      : 'bg-[#F1F4FB] border-transparent text-[#181C21] hover:bg-[#E5E8EF]'
                  }`}
                >
                  <div
                    className={`text-[10px] font-bold uppercase ${
                      active ? 'text-[#4CD6FB]' : 'text-[#00677D]'
                    }`}
                  >
                    {m.variant === 'canto'
                      ? 'Quina 90°'
                      : m.variant === 'articulado'
                      ? 'Dobra em V'
                      : m.variant === 'elegance'
                      ? 'Inox 304'
                      : m.variant === 'piso-teto'
                      ? 'Até o Teto'
                      : m.variant === 'walkin'
                      ? 'Fixo Livre'
                      : m.variant === 'curvo'
                      ? 'Raio Curvo'
                      : 'Frontal'}
                  </div>
                  <div className="text-xs font-bold mt-0.5 leading-snug">
                    {m.title.replace(' (De Correr)', '').replace(' (Camarão)', '')}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Grid Principal: Esquerda Simulador 3D + Planta | Direita Perguntas do Bot */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Coluna Esquerda (7 Colunas): Simulador 3D Específico do Modelo */}
          <div className="lg:col-span-7 bg-[#F1F4FB] rounded-2xl p-4 sm:p-6 border border-[#BCC9CE]/60 flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-lg font-bold text-[#181C21]">
                    {currentModel.title}
                  </h3>
                  <p className="text-xs text-[#3D494D]">{currentModel.shortDesc}</p>
                </div>
                <span className="px-3 py-1 rounded-md bg-[#091D2E] text-[#4CD6FB] text-xs font-bold">
                  Área estimada: {areaM2} m²
                </span>
              </div>

              <div className="w-full aspect-[16/10] rounded-xl overflow-hidden shadow-md border border-[#BCC9CE]/60">
                <BoxKinematicSimulator
                  variant={selectedModelVariant}
                  glassColor={glassColor}
                  hardwareColor={hardwareColor}
                  openPercent={openPercent}
                  dimA={dimA}
                  dimB={dimB}
                  heightCm={effectiveHeightCm}
                />
              </div>
            </div>

            {/* Controle Deslizante de Abertura da Porta */}
            <div className="mt-5 pt-4 border-t border-[#BCC9CE]/50 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="w-full sm:w-2/3">
                <div className="flex items-center justify-between text-xs font-bold text-[#181C21] mb-1.5">
                  <span className="flex items-center gap-1.5">
                    <Sliders className="w-3.5 h-3.5 text-[#00677D]" />
                     Movimentar Porta ({currentModel.title})
                  </span>
                  <span className="font-mono-tech text-[#00677D]">
                    {selectedModelVariant === 'walkin'
                      ? 'Passagem Livre Fixa'
                      : `${openPercent}% Aberto`}
                  </span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={100}
                  value={selectedModelVariant === 'walkin' ? 0 : openPercent}
                  disabled={selectedModelVariant === 'walkin'}
                  onChange={(e) => setOpenPercent(Number(e.target.value))}
                  aria-label="Testar abertura da porta do box"
                  className="w-full accent-[#00B4D8] cursor-pointer disabled:opacity-40"
                />
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() => setOpenPercent(openPercent > 50 ? 0 : 85)}
                  disabled={selectedModelVariant === 'walkin'}
                  className="px-3.5 py-2 rounded-lg bg-[#091D2E] hover:bg-[#00677D] text-white text-xs font-semibold transition-colors cursor-pointer disabled:opacity-40 whitespace-nowrap"
                >
                  {openPercent > 50 ? 'Fechar Box' : 'Abrir Totalmente'}
                </button>
              </div>
            </div>
          </div>

          {/* Coluna Direita (5 Colunas): Formulário de Filtro do Bot (Sem Redirecionar ao WhatsApp) */}
          <div className="lg:col-span-5 bg-[#F8F9FF] rounded-2xl p-6 border border-[#BCC9CE]/60 flex flex-col justify-between">
            {!generatedProtocol ? (
              <form onSubmit={handleGenerateProtocol} className="space-y-5">
                <div className="pb-3 border-b border-[#BCC9CE]/50">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#00677D]">
                    Assistente de Triagem Técnica VL
                  </div>
                  <h3 className="text-lg font-bold text-[#181C21] mt-0.5">
                    Responda para calcular seu projeto
                  </h3>
                </div>

                {/* Passo 2: Medidas dinâmicas (Lado A x Lado B para Box de Canto!) */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#181C21] mb-2">
                    2. Medidas Aproximadas em Centímetros
                  </label>

                  {isCornerModel ? (
                    <div className="grid grid-cols-3 gap-2.5">
                      <div>
                        <span className="block text-[11px] font-semibold text-[#3D494D] mb-1">
                          Lado A (cm)
                        </span>
                        <input
                          type="number"
                          min={50}
                          max={250}
                          value={dimA}
                          onChange={(e) => setDimA(Number(e.target.value) || 90)}
                          className="w-full h-11 px-3 rounded-lg bg-white border border-[#BCC9CE] text-sm font-bold text-[#181C21] tabular-nums"
                        />
                      </div>
                      <div>
                        <span className="block text-[11px] font-semibold text-[#3D494D] mb-1">
                          Lado B (cm)
                        </span>
                        <input
                          type="number"
                          min={50}
                          max={250}
                          value={dimB}
                          onChange={(e) => setDimB(Number(e.target.value) || 90)}
                          className="w-full h-11 px-3 rounded-lg bg-white border border-[#BCC9CE] text-sm font-bold text-[#181C21] tabular-nums"
                        />
                      </div>
                      <div>
                        <span className="block text-[11px] font-semibold text-[#3D494D] mb-1">
                          Altura (cm)
                        </span>
                        <input
                          type="number"
                          min={150}
                          max={300}
                          value={effectiveHeightCm}
                          onChange={(e) => setHeightCm(Number(e.target.value) || 190)}
                          className="w-full h-11 px-3 rounded-lg bg-white border border-[#BCC9CE] text-sm font-bold text-[#181C21] tabular-nums"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <span className="block text-[11px] font-semibold text-[#3D494D] mb-1">
                          Largura do Vão (cm)
                        </span>
                        <input
                          type="number"
                          min={50}
                          max={350}
                          value={dimA}
                          onChange={(e) => setDimA(Number(e.target.value) || 120)}
                          className="w-full h-11 px-3 rounded-lg bg-white border border-[#BCC9CE] text-sm font-bold text-[#181C21] tabular-nums"
                        />
                      </div>
                      <div>
                        <span className="block text-[11px] font-semibold text-[#3D494D] mb-1">
                          Altura (cm)
                        </span>
                        <input
                          type="number"
                          min={150}
                          max={320}
                          value={effectiveHeightCm}
                          onChange={(e) => setHeightCm(Number(e.target.value) || 190)}
                          className="w-full h-11 px-3 rounded-lg bg-white border border-[#BCC9CE] text-sm font-bold text-[#181C21] tabular-nums"
                        />
                      </div>
                    </div>
                  )}

                  <div className="mt-2 text-xs text-[#00677D] font-semibold flex items-center justify-between bg-white px-3 py-2 rounded-lg border border-[#BCC9CE]/50">
                    <span>Especificação ABNT: {recommendedThickness}</span>
                    <span className="font-mono-tech font-bold">{areaM2} m²</span>
                  </div>
                </div>

                {/* Passo 3: Cor do Vidro e Cor do Kit/Alumínio */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#181C21] mb-1.5">
                      3. Tipo de Vidro
                    </label>
                    <div className="space-y-1.5">
                      {GLASS_COLORS.map((g) => (
                        <button
                          key={g.id}
                          type="button"
                          onClick={() => setGlassColor(g.id)}
                          className={`w-full px-3 py-2 rounded-lg border text-left text-xs flex items-center gap-2 cursor-pointer transition-all ${
                            glassColor === g.id
                              ? 'bg-white border-[#00B4D8] font-bold text-[#181C21] shadow-2xs'
                              : 'bg-[#F1F4FB] border-transparent text-[#3D494D]'
                          }`}
                        >
                          <span
                            className="w-3.5 h-3.5 rounded-full border border-slate-300 shrink-0"
                            style={{ background: g.swatch }}
                          />
                          <span className="truncate">{g.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#181C21] mb-1.5">
                      4. Cor da Ferragem/Perfil
                    </label>
                    <div className="space-y-1.5">
                      {HARDWARE_COLORS.map((h) => (
                        <button
                          key={h.id}
                          type="button"
                          onClick={() => setHardwareColor(h.id)}
                          className={`w-full px-3 py-2 rounded-lg border text-left text-xs flex items-center gap-2 cursor-pointer transition-all ${
                            hardwareColor === h.id
                              ? 'bg-white border-[#00B4D8] font-bold text-[#181C21] shadow-2xs'
                              : 'bg-[#F1F4FB] border-transparent text-[#3D494D]'
                          }`}
                        >
                          <span
                            className="w-3.5 h-3.5 rounded-full border border-slate-400 shrink-0"
                            style={{ backgroundColor: h.hex }}
                          />
                          <span className="truncate">{h.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Passo 5: Identificação para o Bot gerar o Protocolo (Sem sair da página) */}
                <div className="space-y-3 pt-2 border-t border-[#BCC9CE]/50">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div>
                      <label className="block text-[11px] font-bold text-[#181C21] mb-1">
                        Seu Nome *
                      </label>
                      <input
                        type="text"
                        placeholder="Ex: Carlos Silva"
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        className="w-full h-10 px-3 rounded-lg bg-white border border-[#BCC9CE] text-xs text-[#181C21]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-[#181C21] mb-1">
                        Telefone / DDD *
                      </label>
                      <input
                        type="tel"
                        placeholder="(44) 99999-9999"
                        value={clientPhone}
                        onChange={(e) => setClientPhone(e.target.value)}
                        className="w-full h-10 px-3 rounded-lg bg-white border border-[#BCC9CE] text-xs text-[#181C21]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div>
                      <label className="block text-[11px] font-bold text-[#181C21] mb-1">
                        Cidade / Bairro
                      </label>
                      <input
                        type="text"
                        value={clientCity}
                        onChange={(e) => setClientCity(e.target.value)}
                        className="w-full h-10 px-3 rounded-lg bg-white border border-[#BCC9CE] text-xs text-[#181C21]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-[#181C21] mb-1">
                        Previsão de Instalação
                      </label>
                      <select
                        value={urgency}
                        onChange={(e) => setUrgency(e.target.value)}
                        className="w-full h-10 px-2.5 rounded-lg bg-white border border-[#BCC9CE] text-xs text-[#181C21]"
                      >
                        <option value="Esta semana">Urgente (Esta semana)</option>
                        <option value="Este mês">Para este mês</option>
                        <option value="Em obra">Estou em fase de acabamento</option>
                        <option value="Só simulando">Apenas pesquisando</option>
                      </select>
                    </div>
                  </div>
                </div>

                {formError && (
                  <div className="p-3 rounded-lg bg-[#FFDAD6] text-[#93000A] text-xs font-semibold">
                    {formError}
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full py-3.5 px-5 rounded-xl bg-[#00B4D8] hover:bg-[#00677D] text-white font-bold text-sm inline-flex items-center justify-center gap-2 shadow-[0_4px_16px_rgba(0,180,216,0.3)] transition-all cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Concluir Triagem e Gerar Protocolo na Tela</span>
                </button>
              </form>
            ) : (
              /* Tela de Confirmação Interna do Bot (Não redireciona para o WhatsApp) */
              <div className="space-y-5 py-2">
                <div className="p-4 rounded-xl bg-[#091D2E] text-white space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#4CD6FB] flex items-center gap-1.5">
                      <FileCheck2 className="w-4 h-4" />
                      Triagem Técnica Registrada
                    </span>
                    <span className="text-xs text-[#B3EBFF]">
                      às {generatedProtocol.timestamp}
                    </span>
                  </div>
                  <div className="font-mono-tech text-xl font-bold text-white tracking-tight">
                    {generatedProtocol.code}
                  </div>
                  <p className="text-xs text-[#D1E4FC]">
                    Filtro concluído no site. Nenhum redirecionamento externo foi
                    disparado.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-4 border border-[#BCC9CE]/60 space-y-2.5 text-xs">
                  <div className="flex justify-between py-1 border-b border-[#F1F4FB]">
                    <span className="text-[#3D494D]">Modelo Selecionado:</span>
                    <strong className="text-[#181C21]">{currentModel.title}</strong>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#F1F4FB]">
                    <span className="text-[#3D494D]">Medidas do Vão:</span>
                    <strong className="text-[#181C21] tabular-nums">
                      {isCornerModel
                        ? `${dimA}cm (Lado A) × ${dimB}cm (Lado B)`
                        : `${dimA}cm (Largura)`}{' '}
                      × {effectiveHeightCm}cm ({generatedProtocol.areaM2} m²)
                    </strong>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#F1F4FB]">
                    <span className="text-[#3D494D]">Vidro &amp; Norma:</span>
                    <strong className="text-[#00677D]">{glassObj.name}</strong>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#F1F4FB]">
                    <span className="text-[#3D494D]">Acabamento Ferragem:</span>
                    <strong className="text-[#181C21]">{hwObj.name}</strong>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-[#3D494D]">Solicitante:</span>
                    <strong className="text-[#181C21]">
                      {clientName} · {clientCity} ({urgency})
                    </strong>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-2.5">
                  <button
                    type="button"
                    onClick={handleCopySummary}
                    className="flex-1 py-3 px-4 rounded-xl bg-[#091D2E] hover:bg-[#00677D] text-white font-semibold text-xs inline-flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    {copiedProtocol ? (
                      <>
                        <Check className="w-4 h-4 text-[#4CD6FB]" />
                        <span>Resumo Copiado!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>Copiar Resumo do Protocolo</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={() => setGeneratedProtocol(null)}
                    className="py-3 px-4 rounded-xl bg-white hover:bg-[#F1F4FB] text-[#181C21] border border-[#BCC9CE] font-semibold text-xs inline-flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Simular Outro Modelo</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
