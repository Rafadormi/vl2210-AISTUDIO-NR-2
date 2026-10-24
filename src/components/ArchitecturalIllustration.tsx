import React, { useState } from 'react';
import { Play, RotateCcw } from 'lucide-react';
import { GalleryItem } from '../domain/types';

interface ArchitecturalIllustrationProps {
  sceneType: GalleryItem['sceneType'];
  alt: string;
  width?: number;
  height?: number;
  eager?: boolean;
  kenBurns?: boolean;
  showDisclaimer?: boolean;
  interactiveOpening?: boolean;
  className?: string;
  variantIndex?: number;
}

/**
 * Renderizador Arquitetônico Personalizado para cada um dos 13 Ambientes
 * Com suporte a Efeito de Abertura Interativo (deslizamento de folhas, recolhimento de sacada,
 * projeção maxim-ar, abertura retrátil de cobertura e acendimento de LED em espelhos).
 */
export const ArchitecturalIllustration: React.FC<ArchitecturalIllustrationProps> = ({
  sceneType,
  alt,
  eager = false,
  kenBurns = false,
  showDisclaimer = false,
  interactiveOpening = true,
  className = '',
  variantIndex = 0,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const schemes = [
    {
      skyTop: '#0F172A',
      skyMid: '#1E293B',
      warmGlow: '#F59E0B',
      wallLight: '#F3F0EA',
      wallMid: '#E4DFD5',
      wood: '#78350F',
      floor: '#D6D1C7',
    },
    {
      skyTop: '#111827',
      skyMid: '#1F2937',
      warmGlow: '#FBBF24',
      wallLight: '#EFECE6',
      wallMid: '#DDD7CC',
      wood: '#92400E',
      floor: '#CFC9BE',
    },
    {
      skyTop: '#090D16',
      skyMid: '#1E2530',
      warmGlow: '#FB923C',
      wallLight: '#F5F3EF',
      wallMid: '#E5E0D8',
      wood: '#713F12',
      floor: '#D4CFC7',
    },
  ];

  const s = schemes[variantIndex % schemes.length];
  const uid = `scene-${sceneType}-${variantIndex}`;

  const getOpeningLabel = () => {
    switch (sceneType) {
      case 'box-banheiro':
        return isOpen ? 'Fechar Box' : 'Ver Abertura do Box';
      case 'sacada':
        return isOpen ? 'Fechar Cortina de Vidro' : 'Abrir Sacada Panorâmica';
      case 'espelhos':
        return isOpen ? 'Alternar Luz LED' : 'Acender LED do Espelho';
      case 'cobertura':
        return isOpen ? 'Fechar Cobertura' : 'Abrir Teto Retrátil';
      case 'janelas':
        return isOpen ? 'Fechar Janela' : 'Ver Abertura';
      default:
        return isOpen ? 'Fechar Folhas' : 'Testar Abertura';
    }
  };

  return (
    <figure
      onMouseEnter={() => {
        if (interactiveOpening) setIsOpen(true);
      }}
      onMouseLeave={() => {
        if (interactiveOpening) setIsOpen(false);
      }}
      className={`relative overflow-hidden bg-[#111111] select-none group/scene ${className}`}
    >
      <div className={`w-full h-full ${kenBurns ? 'animate-kenburns' : ''}`}>
        <svg
          viewBox="0 0 1200 800"
          className="w-full h-full object-cover block"
          role="img"
          aria-label={alt}
        >
          <defs>
            <linearGradient id={`${uid}-sky`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={s.skyTop} />
              <stop offset="65%" stopColor={s.skyMid} />
              <stop offset="100%" stopColor="#334155" />
            </linearGradient>

            <radialGradient id={`${uid}-warm`} cx="50%" cy="45%" r="60%">
              <stop offset="0%" stopColor={s.warmGlow} stopOpacity={isOpen ? '0.65' : '0.38'} />
              <stop offset="60%" stopColor={s.warmGlow} stopOpacity="0.12" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0" />
            </radialGradient>

            <linearGradient id={`${uid}-glass`} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#E0F2FE" stopOpacity="0.45" />
              <stop offset="45%" stopColor="#7DD3FC" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#0284C7" stopOpacity="0.38" />
            </linearGradient>

            <linearGradient id={`${uid}-glass-dark`} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#94A3B8" stopOpacity="0.52" />
              <stop offset="50%" stopColor="#334155" stopOpacity="0.38" />
              <stop offset="100%" stopColor="#0F172A" stopOpacity="0.62" />
            </linearGradient>

            <linearGradient id={`${uid}-mirror`} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#F8FAFC" stopOpacity="0.92" />
              <stop offset="45%" stopColor="#CBD5E1" stopOpacity="0.78" />
              <stop offset="100%" stopColor="#64748B" stopOpacity="0.88" />
            </linearGradient>
          </defs>

          {/* 1. BOX PARA BANHEIRO (Roldanas Aparentes & Deslize Suave) */}
          {sceneType === 'box-banheiro' && (
            <g>
              {/* Ambiente Suíte em Porcelanato Marmorizado Quente */}
              <rect width="1200" height="800" fill={s.wallLight} />
              <rect x="0" y="0" width="600" height="650" fill={s.wallMid} />
              <polygon points="0,650 1200,650 1200,800 0,800" fill={s.floor} />
              {/* Veios sutis de porcelanato */}
              <path d="M 80 120 Q 260 220 420 180 T 580 310" stroke="#FFFFFF" strokeWidth="3" fill="none" opacity="0.5" />
              <path d="M 650 260 Q 880 340 1090 290" stroke="#FFFFFF" strokeWidth="2.5" fill="none" opacity="0.55" />
              {/* Nicho Iluminado no Box */}
              <rect x="130" y="250" width="280" height="110" rx="4" fill="#27272A" />
              <rect x="136" y="256" width="268" height="98" rx="2" fill="#3F3F46" />
              <rect x="140" y="256" width="260" height="6" fill="#FBBF24" opacity="0.9" />
              {/* Chuveiro de Teto e Registro Preto */}
              <rect x="260" y="0" width="10" height="85" fill="#18181B" />
              <rect x="200" y="85" width="130" height="12" rx="6" fill="#18181B" />
              {isOpen && (
                <g stroke="#38BDF8" strokeWidth="2" strokeDasharray="6,8" opacity="0.55">
                  <line x1="225" y1="105" x2="215" y2="620" />
                  <line x1="265" y1="105" x2="265" y2="620" />
                  <line x1="305" y1="105" x2="315" y2="620" />
                </g>
              )}
              {/* Bancada Externa com Cuba */}
              <rect x="920" y="420" width="250" height="70" rx="4" fill="#18181B" />
              <rect x="960" y="385" width="150" height="35" rx="6" fill="#FFFFFF" />

              {/* Estrutura do Box Elegance Roldanas Aparentes */}
              <rect x="95" y="115" width="790" height="14" rx="7" fill="#111111" />
              {/* Vidro Fixo Esquerdo */}
              <g>
                <rect
                  x="100"
                  y="129"
                  width="400"
                  height="521"
                  fill={`url(#${uid}-glass)`}
                  stroke="#111111"
                  strokeWidth="4"
                />
                <polygon points="120,145 240,145 150,630 120,630" fill="#FFFFFF" opacity="0.28" />
              </g>

              {/* Folha Móvel de Correr com Efeito de Abertura */}
              <g
                style={{
                  transform: isOpen ? 'translateX(-245px)' : 'translateX(0px)',
                  transition: 'transform 700ms cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                {/* Roldanas Aparentes Superiores */}
                <circle cx="545" cy="122" r="22" fill="#18181B" stroke="#D71920" strokeWidth="4" />
                <circle cx="545" cy="122" r="7" fill="#E4E4E7" />
                <circle cx="815" cy="122" r="22" fill="#18181B" stroke="#D71920" strokeWidth="4" />
                <circle cx="815" cy="122" r="7" fill="#E4E4E7" />
                {/* Folha de Vidro Temperado */}
                <rect
                  x="480"
                  y="134"
                  width="395"
                  height="512"
                  fill={`url(#${uid}-glass)`}
                  stroke="#111111"
                  strokeWidth="5"
                />
                <polygon points="510,150 630,150 535,625 510,625" fill="#FFFFFF" opacity="0.32" />
                {/* Puxador Inox / Preto */}
                <rect x="825" y="340" width="12" height="110" rx="6" fill="#111111" />
              </g>
            </g>
          )}

          {/* 2. ESPELHOS SOB MEDIDA (Com Acendimento de Iluminação LED) */}
          {sceneType === 'espelhos' && (
            <g>
              <rect width="1200" height="800" fill="#18181B" />
              {/* Ripado de Madeira nas Laterais */}
              {Array.from({ length: 14 }).map((_, i) => (
                <rect
                  key={i}
                  x={40 + i * 22}
                  y="0"
                  width="14"
                  height="800"
                  fill={s.wood}
                  opacity="0.75"
                />
              ))}
              {/* Halo de Luz LED Quente (Intenso quando ativado) */}
              <circle
                cx="680"
                cy="360"
                r={isOpen ? '420' : '310'}
                fill={`url(#${uid}-warm)`}
                style={{ transition: 'all 600ms ease' }}
              />
              <rect
                x="410"
                y="95"
                width="540"
                height="490"
                rx="24"
                fill="none"
                stroke={isOpen ? '#FDE047' : '#FBBF24'}
                strokeWidth={isOpen ? '28' : '14'}
                opacity={isOpen ? '0.85' : '0.45'}
                style={{ transition: 'all 500ms ease' }}
              />
              {/* Corpo do Espelho Lapidado com Bisotê */}
              <rect
                x="422"
                y="107"
                width="516"
                height="466"
                rx="18"
                fill={`url(#${uid}-mirror)`}
                stroke="#FFFFFF"
                strokeWidth="4"
              />
              {/* Faixa Jateada Frontal LED */}
              <rect
                x="448"
                y="133"
                width="464"
                height="414"
                rx="10"
                fill="none"
                stroke={isOpen ? '#FEF08A' : '#FFFFFF'}
                strokeWidth="6"
                opacity={isOpen ? '0.95' : '0.5'}
              />
              {/* Reflexo Diagonal Realista */}
              <polygon points="470,130 620,130 500,550 450,550" fill="#FFFFFF" opacity="0.45" />
              {/* Botão Touch no Espelho */}
              <circle
                cx="680"
                cy="515"
                r="14"
                fill="none"
                stroke={isOpen ? '#38BDF8' : '#94A3B8'}
                strokeWidth="3"
              />
              <circle cx="680" cy="515" r="4" fill={isOpen ? '#38BDF8' : '#94A3B8'} />
              {/* Bancada Esculpida e Torneira */}
              <rect x="330" y="625" width="700" height="85" rx="6" fill="#27272A" />
              <rect x="600" y="590" width="160" height="35" rx="8" fill="#F4F4F5" />
            </g>
          )}

          {/* 3. FECHAMENTO DE SACADA (Cortina de Vidro Recolhível no Canto) */}
          {sceneType === 'sacada' && (
            <g>
              <rect width="1200" height="800" fill={`url(#${uid}-sky)`} />
              <circle cx="920" cy="210" r="180" fill={`url(#${uid}-warm)`} />
              {/* Horizonte Urbano de Umuarama ao Fundo */}
              <rect x="180" y="340" width="75" height="220" fill="#0F172A" opacity="0.7" />
              <rect x="275" y="290" width="95" height="270" fill="#1E293B" opacity="0.7" />
              <rect x="410" y="320" width="110" height="240" fill="#0F172A" opacity="0.7" />
              <rect x="780" y="270" width="120" height="290" fill="#1E293B" opacity="0.7" />
              <rect x="920" y="330" width="90" height="230" fill="#0F172A" opacity="0.7" />

              {/* Piso e Teto da Varanda Gourmet */}
              <polygon points="0,0 1200,0 1120,95 80,95" fill="#18181B" />
              <polygon points="80,690 1120,690 1200,800 0,800" fill="#D6D3D1" />

              {/* Trilhos Superior e do Peitoril */}
              <rect x="80" y="95" width="1040" height="16" fill="#E4E4E7" />
              <rect x="80" y="475" width="1040" height="16" fill="#E4E4E7" />

              {/* Guarda-Corpo Inferior Panorâmico */}
              <rect
                x="80"
                y="491"
                width="1040"
                height="199"
                fill={`url(#${uid}-glass)`}
                stroke="#CBD5E1"
                strokeWidth="4"
              />
              <line x1="340" y1="491" x2="340" y2="690" stroke="#CBD5E1" strokeWidth="3" />
              <line x1="600" y1="491" x2="600" y2="690" stroke="#CBD5E1" strokeWidth="3" />
              <line x1="860" y1="491" x2="860" y2="690" stroke="#CBD5E1" strokeWidth="3" />

              {/* Lâminas da Cortina de Vidro que Recolhem na Esquerda quando isOpen = true */}
              {[0, 1, 2, 3, 4].map((leafIdx) => {
                const closedX = 95 + leafIdx * 202;
                const openX = 95 + leafIdx * 24;
                const openWidth = isOpen ? 36 : 198;
                return (
                  <g
                    key={leafIdx}
                    style={{
                      transform: `translateX(${isOpen ? openX - closedX : 0}px)`,
                      transition: 'all 750ms cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                  >
                    <rect
                      x={closedX}
                      y="111"
                      width={openWidth}
                      height="364"
                      fill={`url(#${uid}-glass)`}
                      stroke="#E2E8F0"
                      strokeWidth="2.5"
                    />
                    <polygon
                      points={`${closedX + 10},125 ${closedX + Math.min(80, openWidth - 5)},125 ${
                        closedX + 20
                      },455 ${closedX + 10},455`}
                      fill="#FFFFFF"
                      opacity="0.22"
                    />
                  </g>
                );
              })}
            </g>
          )}

          {/* 4. GUARDA-CORPO DE VIDRO (Autoportante Embutido & Botões Inox) */}
          {sceneType === 'guarda-corpo' && (
            <g>
              <rect width="1200" height="800" fill={s.wallLight} />
              <rect x="0" y="540" width="1200" height="260" fill="#27272A" />
              {/* Degraus de Escada Contemporânea */}
              <rect x="120" y="480" width="220" height="28" fill={s.wood} />
              <rect x="300" y="420" width="220" height="28" fill={s.wood} />
              <rect x="480" y="360" width="220" height="28" fill={s.wood} />
              <rect x="660" y="300" width="440" height="32" fill={s.wood} />

              {/* Painéis de Vidro Laminado Autoportante com Reflexo Dinâmico */}
              {[0, 1, 2].map((panel) => {
                const px = 140 + panel * 310;
                return (
                  <g
                    key={panel}
                    style={{
                      transform: isOpen ? 'translateY(-6px)' : 'translateY(0px)',
                      transition: 'transform 500ms ease',
                    }}
                  >
                    <rect
                      x={px}
                      y="175"
                      width="295"
                      height="365"
                      rx="3"
                      fill={`url(#${uid}-glass)`}
                      stroke="#38BDF8"
                      strokeWidth="3.5"
                    />
                    <polygon
                      points={`${px + 20},190 ${px + 130},190 ${px + 55},520 ${px + 20},520`}
                      fill="#FFFFFF"
                      opacity={isOpen ? '0.42' : '0.24'}
                    />
                    {/* Botões Duplos de Aço Inox 304 */}
                    <circle cx={px + 55} cy="575" r="14" fill="#F4F4F5" stroke="#18181B" strokeWidth="4" />
                    <circle cx={px + 240} cy="575" r="14" fill="#F4F4F5" stroke="#18181B" strokeWidth="4" />
                  </g>
                );
              })}
            </g>
          )}

          {/* 5. COBERTURA DE VIDRO & PERGOLADO (Retrátil Automática) */}
          {sceneType === 'cobertura' && (
            <g>
              <rect width="1200" height="800" fill={`url(#${uid}-sky)`} />
              <circle cx="600" cy="140" r="240" fill={`url(#${uid}-warm)`} />
              {/* Piso Deck Amadeirado e Parede Gourmet */}
              <rect x="80" y="250" width="1040" height="450" fill="#1E293B" opacity="0.6" />
              <polygon points="0,680 1200,680 1200,800 0,800" fill={s.wood} />

              {/* Estrutura do Pergolado em Alumínio Preto */}
              <rect x="110" y="210" width="32" height="490" fill="#111111" />
              <rect x="1058" y="265" width="32" height="435" fill="#111111" />
              <polygon points="85,180 1115,245 1115,285 85,220" fill="#111111" />

              {/* Módulo Fixo de Vidro Laminado Controle Solar */}
              <polygon
                points="100,155 620,188 620,210 100,177"
                fill={`url(#${uid}-glass)`}
                stroke="#93C5FD"
                strokeWidth="3"
              />
              {/* Módulo Retrátil Motorizado que Desliza para Abrir o Céu */}
              <g
                style={{
                  transform: isOpen ? 'translate(-360px, -22px)' : 'translate(0px, 0px)',
                  transition: 'transform 800ms cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                <polygon
                  points="590,185 1105,218 1105,240 590,207"
                  fill={`url(#${uid}-glass)`}
                  stroke="#38BDF8"
                  strokeWidth="4"
                />
              </g>

              {/* Caibros Internos e Luminárias Quentes */}
              {[280, 480, 680, 880].map((bx, idx) => (
                <g key={idx}>
                  <line x1={bx} y1={195 + idx * 12} x2={bx} y2="680" stroke="#111111" strokeWidth="12" opacity="0.6" />
                  <circle cx={bx} cy={290 + idx * 8} r="10" fill="#FDE047" />
                </g>
              ))}
            </g>
          )}

          {/* 6. DIVISÓRIAS DE VIDRO (Estilo Industrial & Piso-Teto com Porta Deslizante) */}
          {sceneType === 'divisorias' && (
            <g>
              <rect width="1200" height="800" fill={s.wallLight} />
              <rect x="100" y="90" width="1000" height="620" fill="#FFFFFF" stroke="#111111" strokeWidth="14" />

              {/* Painéis Laterais Fixos */}
              <rect x="108" y="98" width="320" height="604" fill={`url(#${uid}-glass)`} stroke="#111111" strokeWidth="10" />
              <rect x="772" y="98" width="320" height="604" fill={`url(#${uid}-glass)`} stroke="#111111" strokeWidth="10" />
              <line x1="108" y1="300" x2="428" y2="300" stroke="#111111" strokeWidth="8" />
              <line x1="108" y1="500" x2="428" y2="500" stroke="#111111" strokeWidth="8" />
              <line x1="772" y1="300" x2="1092" y2="300" stroke="#111111" strokeWidth="8" />
              <line x1="772" y1="500" x2="1092" y2="500" stroke="#111111" strokeWidth="8" />

              {/* Porta Central Industrial de Correr (Efeito de Abertura) */}
              <g
                style={{
                  transform: isOpen ? 'translateX(-275px)' : 'translateX(0px)',
                  transition: 'transform 700ms cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                <rect
                  x="428"
                  y="98"
                  width="344"
                  height="604"
                  fill={`url(#${uid}-glass-dark)`}
                  stroke="#111111"
                  strokeWidth="12"
                />
                <line x1="428" y1="300" x2="772" y2="300" stroke="#111111" strokeWidth="8" />
                <line x1="428" y1="500" x2="772" y2="500" stroke="#111111" strokeWidth="8" />
                <rect x="735" y="355" width="10" height="90" rx="5" fill="#D71920" />
              </g>
            </g>
          )}

          {/* 7. JANELAS, PORTAS, ESQUADRIAS, VITRINES, VIDRO TEMPERADO, FACHADAS & MANUTENÇÃO */}
          {![
            'box-banheiro',
            'espelhos',
            'sacada',
            'guarda-corpo',
            'cobertura',
            'divisorias',
          ].includes(sceneType) && (
            <g>
              <rect width="1200" height="800" fill={`url(#${uid}-sky)`} />
              <circle cx="600" cy="360" r="380" fill={`url(#${uid}-warm)`} />
              {/* Piso e Moldura Arquitetônica */}
              <rect x="60" y="80" width="1080" height="640" fill="#18181B" />
              <polygon points="0,700 1200,700 1200,800 0,800" fill="#27272A" />

              {/* Painel de Brise / Ripado de Alumínio no Topo */}
              <g stroke={s.wood} strokeWidth="7" opacity="0.85">
                <line x1="85" y1="100" x2="1115" y2="100" />
                <line x1="85" y1="118" x2="1115" y2="118" />
                <line x1="85" y1="136" x2="1115" y2="136" />
              </g>

              {/* Vão Central Iluminado (Interior Contemporâneo) */}
              <rect x="95" y="155" width="1010" height="535" fill="#272522" />
              <circle cx="600" cy="230" r="36" fill="#FDE047" opacity="0.85" />
              <rect x="420" y="540" width="360" height="95" rx="8" fill="#44403C" />

              {/* Folhas Fixas Laterais (Linha Gold / Pele de Vidro) */}
              <rect
                x="95"
                y="155"
                width="260"
                height="535"
                fill={`url(#${uid}-glass)`}
                stroke="#111111"
                strokeWidth="12"
              />
              <rect
                x="845"
                y="155"
                width="260"
                height="535"
                fill={`url(#${uid}-glass)`}
                stroke="#111111"
                strokeWidth="12"
              />

              {/* Folha Móvel Esquerda (Abre para a esquerda) */}
              <g
                style={{
                  transform: isOpen ? 'translateX(-195px)' : 'translateX(0px)',
                  transition: 'transform 700ms cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                <rect
                  x="355"
                  y="155"
                  width="245"
                  height="535"
                  fill={`url(#${uid}-glass)`}
                  stroke="#111111"
                  strokeWidth="12"
                />
                <polygon points="375,175 490,175 405,665 375,665" fill="#FFFFFF" opacity="0.25" />
                <rect x="572" y="370" width="8" height="110" rx="4" fill="#E4E4E7" />
              </g>

              {/* Folha Móvel Direita (Abre para a direita) */}
              <g
                style={{
                  transform: isOpen ? 'translateX(195px)' : 'translateX(0px)',
                  transition: 'transform 700ms cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                <rect
                  x="600"
                  y="155"
                  width="245"
                  height="535"
                  fill={`url(#${uid}-glass)`}
                  stroke="#111111"
                  strokeWidth="12"
                />
                <polygon points="620,175 735,175 650,665 620,665" fill="#FFFFFF" opacity="0.25" />
                <rect x="620" y="370" width="8" height="110" rx="4" fill="#E4E4E7" />
              </g>
            </g>
          )}

          {/* Barra de Assinatura Vermelho Liderança */}
          <rect x="0" y="794" width="1200" height="6" fill="#D71920" />
        </svg>
      </div>

      {/* Botão Interativo para o Cliente Testar o Efeito de Abertura */}
      {interactiveOpening && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen((prev) => !prev);
          }}
          className="absolute bottom-3 left-3 z-20 inline-flex items-center gap-1.5 bg-[#111111]/85 hover:bg-[#D71920] text-white text-xs font-semibold px-3 py-1.5 rounded-sm backdrop-blur-xs border border-white/15 transition-colors cursor-pointer"
        >
          {isOpen ? <RotateCcw className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          <span>{getOpeningLabel()}</span>
        </button>
      )}

      {showDisclaimer && (
        <figcaption className="absolute bottom-3 right-3 z-10 hidden sm:block bg-[#111111]/75 backdrop-blur-xs text-neutral-200 text-[11px] px-2.5 py-1 rounded-xs">
          Simulação visual interativa · Sob medida em Umuarama
        </figcaption>
      )}
    </figure>
  );
};
